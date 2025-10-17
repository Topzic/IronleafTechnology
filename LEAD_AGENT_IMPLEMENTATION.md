# Ironleaf Lead Agent (Next.js)

_Embeddable lead form + AI auto-reply + client dashboard_

## TL;DR (What This Does)

A client signs up → creates a lead form → connects their email → configures an AI agent (services, prices, tone, signature, products).

They embed the form via iframe or JS snippet (or use a WordPress/Wix/Squarespace widget).

When visitors submit the form, the client gets the lead in the dashboard and an AI-generated reply (auto-sent or pending approval).

All leads, conversations, and analytics are stored in your Ironleaf platform.

## System Architecture

### Stack

- **Next.js 14+ (App Router)** — dashboard, APIs, server actions
- **Supabase (Postgres + Auth + Storage)** — auth, DB, file storage
- **Stripe** — subscriptions & metered billing
- **Email** — Resend or SendGrid (webhooks for bounces/opens), optional Gmail/Outlook OAuth
- **AI** — OpenAI API (GPT-4.1/4.1-mini or 4o-mini)
- **Queue/Jobs** — Vercel Cron + Supabase pg-boss (or Upstash Q) for async sends/retries
- **Telemetry** — Sentry + PostHog (widget usage & funnel)
- **Anti-abuse** — hCaptcha/reCAPTCHA Enterprise + rate limiting (Upstash Redis)

### High-level Flow

- **Auth**: Client signs up/signs in → picks a plan → completes onboarding.
- **Form Builder**: Creates form (fields, styles, success message, webhook option).
- **Email Connect**: Choose Send via Ironleaf (Resend/SendGrid) or Bring your SMTP/OAuth.
- **AI Agent Setup**: Configure services, prices, tone, brand voice, signature, FAQs, products, upsells, approval mode.
- **Embed**: Paste `<script>` or `<iframe>` on client site (or install plugin/app).
- **Lead Submit**: Data hits `/api/ingest` → persisted → queued for AI → optional human approval → send reply → notify client.
- **Dashboard**: Leads, conversations, analytics, templates, A/B tests, billing.

## Data Model (Supabase / Postgres)

_Multi-tenant boundary by `organization_id` (one org per client initially)_

```sql
create table organizations (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  owner_user_id uuid not null references auth.users(id),
  plan text not null default 'pro', -- free, pro, agency
  created_at timestamptz default now()
);

create table users (
  id uuid primary key,
  org_id uuid not null references organizations(id) on delete cascade,
  role text not null default 'admin',
  created_at timestamptz default now()
);

create table forms (
  id uuid primary key default gen_random_uuid(),
  org_id uuid not null references organizations(id) on delete cascade,
  name text not null,
  slug text unique not null,        -- used in embed URLs
  definition jsonb not null,        -- fields, validations, styles
  success_message text,
  spam_protection jsonb,            -- captcha, hidden honeypots
  status text default 'active',     -- active/paused
  created_at timestamptz default now()
);

create table email_connections (
  id uuid primary key default gen_random_uuid(),
  org_id uuid not null references organizations(id) on delete cascade,
  type text not null,               -- 'resend'|'sendgrid'|'smtp'|'gmail'|'outlook'
  from_name text,
  from_email text not null,
  oauth jsonb,                      -- tokens for gmail/outlook
  smtp jsonb,                       -- host, port, tls, user, pass (encrypted)
  verified boolean default false,
  created_at timestamptz default now()
);

create table agent_configs (
  id uuid primary key default gen_random_uuid(),
  org_id uuid not null references organizations(id) on delete cascade,
  business_info jsonb,              -- name, address, hours, service area
  products jsonb,                   -- [{name, price, desc, sku}]
  services jsonb,                   -- [{name, price_from, desc}]
  faqs jsonb,                       -- [{q,a}]
  tone text default 'professional', -- 'friendly'|'casual'|custom
  signature text,                   -- email signature
  reply_mode text default 'auto',   -- 'auto'|'review'
  max_tokens int default 600,
  model text default 'gpt-4.1-mini',
  created_at timestamptz default now()
);

create table templates (
  id uuid primary key default gen_random_uuid(),
  org_id uuid not null references organizations(id) on delete cascade,
  name text not null,
  type text not null,               -- 'lead-reply'|'follow-up'|'quote'
  content text not null,            -- handlebars or mjml
  variables jsonb,                  -- available variables
  created_at timestamptz default now()
);

create table leads (
  id uuid primary key default gen_random_uuid(),
  org_id uuid not null references organizations(id) on delete cascade,
  form_id uuid not null references forms(id) on delete set null,
  payload jsonb not null,           -- original submission
  email text,                       -- extracted
  name text,
  status text default 'new',        -- new/replied/pending/closed
  utm jsonb,                        -- attribution
  ip inet,
  user_agent text,
  created_at timestamptz default now()
);

create table messages (
  id uuid primary key default gen_random_uuid(),
  org_id uuid not null references organizations(id) on delete cascade,
  lead_id uuid not null references leads(id) on delete cascade,
  direction text not null,          -- 'inbound'|'outbound'
  channel text not null default 'email',
  subject text,
  body text not null,
  ai boolean default false,
  meta jsonb,                       -- provider ids, opens, clicks
  created_at timestamptz default now()
);

create table pricing_plans (
  id text primary key,              -- 'free'|'pro'|'agency'
  monthly_price_cents int not null,
  features jsonb
);

create table subscriptions (
  id uuid primary key default gen_random_uuid(),
  org_id uuid not null references organizations(id) on delete cascade,
  plan_id text not null references pricing_plans(id),
  stripe_customer_id text,
  stripe_subscription_id text,
  status text not null,
  current_period_end timestamptz,
  created_at timestamptz default now()
);

create table events (
  id bigserial primary key,
  org_id uuid not null references organizations(id) on delete cascade,
  type text not null,               -- 'form_submit'|'email_sent'|'open'|'click'
  data jsonb,
  created_at timestamptz default now()
);
```

## API Contracts (Next.js App Router)

### Auth

- `/api/auth/callback` (Supabase handled)

### Forms

- `POST /api/forms` — create form (name, fields, styles)
- `GET /api/forms/:slug/embed` — returns iframe HTML or JS bundle
- `POST /api/forms/:slug/submit` — ingest submission (captcha + rate-limit)

### Leads & Messages

- `GET /api/leads?status=new|...`
- `GET /api/leads/:id`
- `POST /api/leads/:id/reply` — manual reply (uses connected email)
- Webhooks: `/api/email/provider/webhook` for opens/clicks/bounces

### Agent

- `PUT /api/agent-config` — save services, products, signature, tone, reply_mode
- `POST /api/agent/generate` — (internal) generate draft reply for a lead

### Email Connections

- `POST /api/email/connect` — start OAuth or store SMTP
- `POST /api/email/verify` — send verification
- `DELETE /api/email/:id`

### Billing

- `POST /api/billing/portal` — Stripe customer portal
- `POST /api/billing/checkout` — create checkout session

### Types (shared)

```typescript
export type FormDefinition = {
  fields: Array<{
    id: string;
    label: string;
    type: "text" | "email" | "tel" | "textarea" | "select";
    required?: boolean;
    options?: string[];
    placeholder?: string;
  }>;
  theme?: { primary?: string; radius?: number; fontSize?: "sm" | "md" | "lg" };
};

export type AgentConfig = {
  businessInfo: {
    name: string;
    hours?: string;
    phone?: string;
    address?: string;
    website?: string;
  };
  services: Array<{ name: string; priceFrom?: number; description?: string }>;
  products: Array<{
    name: string;
    price?: number;
    description?: string;
    sku?: string;
  }>;
  faqs?: Array<{ q: string; a: string }>;
  tone: "professional" | "friendly" | "casual" | string;
  signature: string;
  replyMode: "auto" | "review";
  model?: string;
  maxTokens?: number;
};
```

## Security & Compliance

- **Tenant isolation**: always filter by `org_id`.
- **Rate limit**: IP + form slug (gtm.formSubmit-like throttles; Upstash Redis).
- **Captcha**: hCaptcha/recaptcha on public submit endpoint.
- **PII**: encrypt SMTP creds, OAuth tokens (KMS or Supabase Vault).
- **Email**: include unsubscribe for follow-ups; log consent.
- **GDPR/CPPA**: data export/delete per org; retention policy.
- **Vulnerability**: CSP headers, httpOnly secure cookies, input validation (Zod).

## Implementation Plan (Milestones)

### Phase 1 — MVP (2–3 weeks)

- **Auth & Org**: Supabase Auth, org creation on first login.
- **Form Builder**: minimal schema + hosted form page `/{slug}` + success page.
- **Embed**:
  - iframe: `https://yourdomain.com/embed/{slug}`
  - JS: `<script src="https://.../lead-widget.js" data-slug="SLUG"></script>` injects shadow-DOM form.
- **Ingest API**: `/api/forms/:slug/submit` → create lead → queue job.
- **Email Connection**: "Use Ironleaf mailer" (Resend/SendGrid) only.
- **AI Draft**: server action uses AgentConfig + lead payload → draft email.
- **Reply Mode**:
  - review: store draft; notify client to approve/send.
  - auto: send immediately, store copy in messages.
- **Dashboard**: list leads, view conversation, approve/send.
- **Stripe**: Pro plan gating (leads/month + AI replies/month).

### Phase 2 — Polishing (2–4 weeks)

- Gmail/Outlook OAuth send-as; SMTP bring-your-own.
- Templates (MJML) + variables (`{{lead.name}}`, `{{service.name}}`).
- Analytics: opens, clicks, conversion funnel, response SLA.
- Webhooks: ingest inbound replies → thread under the lead.
- Export (CSV), Zapier/Make, Google Sheets sync.

### Phase 3 — Platform Channels (1–2 weeks each)

- WordPress plugin (shortcode `[ironleaf_lead slug="SLUG"]`).
- Wix App (Custom Element + App Market listing).
- Squarespace Block (Code Injection + guide).
- Shopify App (App Embed + cart context for product lead types).

## Embedding Options

### A) iframe (fastest)

```html
<iframe
  src="https://ironleaftechnology.com/embed/CONTACT-US"
  title="Contact us"
  style="width:100%;max-width:560px;height:640px;border:0;border-radius:12px;"
  loading="lazy"
  referrerpolicy="no-referrer-when-downgrade"
></iframe>
```

### B) JS Snippet (more flexible)

```html
<script
  src="https://ironleaftechnology.com/lead-widget.js"
  data-slug="CONTACT-US"
  data-theme='{"primary":"#2d5016","radius":12}'
  defer
></script>
<div id="ironleaf-lead-root"></div>
```

The script attaches to `#ironleaf-lead-root`, renders the form (Shadow DOM), and posts to `/api/forms/:slug/submit`.

### C) WordPress Shortcode

Plugin registers: `[ironleaf_lead slug="CONTACT-US" theme='{"primary":"#2d5016"}']`.

### D) Wix / Squarespace

Provide copy-paste Code Snippet (iframe or JS).

For Wix, ship a Custom Element wrapper for better theming.

## AI Prompting (Server)

```javascript
const system = `
You are Ironleaf's lead response agent for {{business.name}}.
Use the client's tone: {{tone}}.
Offer relevant service/product with price points and next step.
Be concise, friendly, and include the email signature.
`;

const user = `
Lead details:
{{lead_json}}

Client context:
- Services: {{services}}
- Products: {{products}}
- FAQs: {{faqs}}
- Hours/Area: {{hours}} / {{service_area}}

Task:
Compose an email reply. If missing info, ask 1-2 clarifying questions.
`;

// generate (OpenAI)
```

### Approval Mode

If review, store draft in messages(ai=true) with pending=true.

If auto, send via provider, record provider IDs, log event.

## Email Delivery

### Option 1: Ironleaf Mailer (Recommended MVP)

Resend/SendGrid API with verified sending domain (SPF/DKIM).

"Reply-To" set to client's inbox (so replies reach them), AND/OR use inbound parsing to thread replies back.

### Option 2: Client Mailbox (Phase 2)

Gmail/Outlook OAuth (send-as) or SMTP (TLS).

Store tokens securely (KMS/Vault). Refresh & retry logic.

### Email Signature Example

```
Best regards,
{{business.name}} — {{owner_name}}
{{phone}} | {{website}}
{{address}}
```

## Example Form Definition (stored in forms.definition)

```json
{
  "fields": [
    { "id": "name", "label": "Your name", "type": "text", "required": true },
    { "id": "email", "label": "Email", "type": "email", "required": true },
    {
      "id": "service",
      "label": "Service",
      "type": "select",
      "options": ["Website Design", "SEO", "Automation"],
      "required": true
    },
    { "id": "message", "label": "What do you need?", "type": "textarea" }
  ],
  "theme": { "primary": "#2d5016", "radius": 12, "fontSize": "md" }
}
```

## Local Dev & Deployment

### Environment

```
NEXT_PUBLIC_SUPABASE_URL=...
SUPABASE_SERVICE_ROLE=...
OPENAI_API_KEY=...
EMAIL_PROVIDER=resend
RESEND_API_KEY=...
STRIPE_SECRET=...
STRIPE_WEBHOOK_SECRET=...
HCAPTCHA_SECRET=...
JWT_SECRET=...
```

### Scripts

```
pnpm dev
pnpm build && pnpm start
```

### Deploy

Next.js on Vercel, Supabase hosted, Stripe webhooks → `/api/stripe/webhook`, Resend/SendGrid webhooks → `/api/email/provider/webhook`.

## Analytics & Anti-Abuse

Widget emits view, submit, error events → `/api/events`.

Rate limit: submit by IP+slug; block repeated disposable emails.

CAPTCHA required after N rapid submissions.

## Pricing Strategy & Cost Model

### Suggested Tiers (CAD, monthly)

- **Free — $0**

  - 50 leads/month, 10 AI replies, Ironleaf branding, iframe only

- **Pro — $59**

  - 1,000 leads, 300 AI replies, custom branding, JS widget, templates, advanced analytics, 200+ integrations, A/B testing for forms

- **Agency — $249**

  - 10,000 leads, 2,000 AI replies, white-label domain, multi-user seats, priority support, API access

- **Add-ons (metered)**: $0.03 per extra AI reply beyond plan limits; $0.50 per 1,000 additional form views; inbound email threading $10/mo.

**Hybrid Model**: Monthly plans provide base usage; metered overages ensure flexibility without overhead risks. Customers pay only for what they use beyond their tier.

### Your Operating Costs (ballpark, per month)

- **OpenAI**:

  - 4.1-mini/4o-mini emails typically ~400–900 tokens/interaction (prompt+completion).
  - Assume 700 tokens avg, $0.00015/token (example): $0.105 per 1,000 tokens → $0.0735 per 7k tokens → per reply is ~$0.10 (sanity check your exact model/prices in your account).
  - If 300 AI replies on Pro: ~$30 AI cost at $0.10/reply.

- **Email (Resend/SendGrid)**:

  - ~10k emails ≈ $20–$35. For 300–1k emails, $5–$15.

- **Supabase**: $25–$50 (starter → pro) depending on RLS, row volume, storage.

- **Vercel**: $20–$40 (hobby/pro) unless heavy traffic.

- **Monitoring**: Sentry/PostHog free to ~$20.

- **Captcha**: reCAPTCHA free (Enterprise $).

- **Stripe**: 2.9% + 30¢ per transaction.

### Rough margin math (Pro plan at $49/mo):

Average usage: 250 AI replies → ~$25 AI + $8 email + $35 infra shared across all tenants.

With volume & caching (and not every tenant hits the cap), practical blended COGS per Pro tenant often lands $10–$20.

Target gross margin: 70–80% after optimizations (queueing, batching, smarter prompts, short replies, review mode default).

Tip: Default to "review mode" on Free, and "auto" on Pro but with a low-token "short reply then CTA" style to control spend.

## Pseudocode Plan (End-to-End)

```javascript
// Registration/Login
handleSignUp(email, password) -> supabase.auth.signUp
onFirstLogin -> createOrganization({ owner: user.id, plan: 'pro' })
redirect('/onboarding')

// Onboarding
step1: createForm(definition)
step2: connectEmail({ type: 'resend', fromEmail })
step3: saveAgentConfig({ businessInfo, services, products, faqs, tone, signature, replyMode })

// Embed script/iframe
renderEmbed(form.slug) -> hosted page or JS widget

// Submit
POST /api/forms/:slug/submit
  verifyCaptcha()
  rateLimit(ip, slug)
  form = db.forms.findBySlug(slug)
  validatePayloadAgainst(form.definition)
  lead = db.leads.insert({ org_id: form.org_id, form_id: form.id, payload, email, name })
  queue('ai-generate-reply', { leadId: lead.id })

// AI job
onJob('ai-generate-reply', async ({ leadId }) => {
  lead = db.leads.get(leadId)
  config = db.agent_configs.getByOrg(lead.org_id)
  draft = await openai.generate(system, userWith(lead, config))
  if (config.reply_mode === 'review') {
    db.messages.insert({ lead_id: lead.id, direction: 'outbound', ai: true, body: draft, pending: true })
    notifyClientReview(lead.org_id, lead.id)
  } else {
    provider = resolveEmailProviderForOrg(lead.org_id)
    res = await provider.send({ to: lead.email, subject: makeSubject(lead), body: draft, replyTo: config.businessInfo.email })
    db.messages.insert({ lead_id: lead.id, direction: 'outbound', ai: true, body: draft, meta: res.meta })
    db.leads.update(lead.id, { status: 'replied' })
  }
})

// Dashboard
GET /leads -> list with filters
GET /leads/:id -> thread of messages
POST /leads/:id/reply -> send manual reply via provider

// Webhooks
POST /api/email/provider/webhook
  update opens/clicks/bounces in messages.meta
  db.events.insert({ type: 'open', data })
```

## Admin & Ops Checklist

- Domain & DNS for email (SPF, DKIM, DMARC).
- Stripe tax settings + customer portal.
- Backup & retention policies (Supabase backups + RPO/RTO docs).
- Incident response (SLA, status page).
- DPA/ToS/Privacy posted; consent toggles in forms.
- Content moderation (block abusive messages; allowlist languages).

## Roadmap Ideas

- Intent classification → route to best template.
- Quote generator (line items from services/products).
- Calendar integration (book meeting link, propose slots).
- Multichannel (SMS/WhatsApp) with Twilio/MessageBird.
- Lead scoring with heuristics + LLM (budget intent, seriousness).
- Agency sub-accounts (reseller/whitelabel portal).

## 16) Improvements and Suggestions

To strengthen the Ironleaf Lead Agent product and make it stand out more to users, consider the following enhancements:

### User Experience Enhancements

- **Mobile Optimization**: Ensure the dashboard and embedded forms are fully responsive and optimized for mobile devices, as many users access these on phones.
- **Drag-and-Drop Form Builder**: Upgrade the form builder to a visual, drag-and-drop interface for easier customization without coding knowledge.
- **Real-Time Notifications**: Add push notifications or in-app alerts for new leads, approvals needed, and analytics updates to keep users engaged.

### AI and Automation Improvements

- **Advanced AI Models**: Integrate more advanced AI models like GPT-4o for better context understanding and more personalized replies. Offer model selection based on user needs.
- **Conversational AI**: Extend beyond email replies to support chatbots or live chat integrations for immediate responses.
- **Lead Qualification**: Implement AI-driven lead scoring to prioritize high-quality leads, helping users focus on the most promising prospects.

### Integration and Ecosystem

- **CRM Integrations**: Add native integrations with popular CRMs like Salesforce, HubSpot, or Pipedrive to sync leads automatically.
- **E-commerce Platforms**: Expand beyond Shopify to include WooCommerce, BigCommerce, and Magento for seamless product lead handling.
- **API Access**: Provide a comprehensive API for developers to integrate the lead agent into custom workflows or third-party apps.

### Analytics and Insights

- **Advanced Analytics Dashboard**: Include heatmaps, A/B testing for forms, and predictive analytics for lead conversion rates.
- **Custom Reporting**: Allow users to create custom reports and export data in various formats (PDF, Excel) for deeper insights.
- **Benchmarking**: Provide industry benchmarks and comparisons to help users understand their performance relative to peers.

### Security and Compliance Upgrades

- **Enhanced Security**: Implement end-to-end encryption for all data in transit and at rest, and add two-factor authentication for user accounts.
- **Compliance Tools**: Add features for easier GDPR/CCPA compliance, such as automated data deletion requests and consent management.
- **Audit Logs**: Provide detailed audit logs for all actions taken on leads and configurations for transparency.

### Monetization and Business Model

- **Tiered Features**: Introduce more granular feature unlocks in pricing tiers, such as unlimited AI replies or advanced integrations for higher plans.
- **Referral Program**: Implement a referral system where users earn credits or discounts for bringing in new clients.
- **White-Label Options**: Expand white-labeling to include custom domains and branding for agency clients.

### Community and Support

- **User Community**: Build a community forum or knowledge base where users can share tips, templates, and best practices.
- **Onboarding Tutorials**: Create interactive onboarding flows with video tutorials and tooltips to reduce the learning curve.
- **24/7 Support**: Offer premium support options with faster response times for paying users.

These suggestions aim to differentiate Ironleaf Lead Agent by focusing on ease of use, powerful AI capabilities, robust integrations, and strong data insights, making it a compelling choice for businesses looking to automate and optimize their lead management processes.
