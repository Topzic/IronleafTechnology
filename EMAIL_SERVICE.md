# Email Service Documentation

## Overview
This document outlines the email service setup for the Ironleaf Technology website, enabling contact form submissions to send emails to `support@ironleaftechnology.com`. The service uses a serverless architecture with Supabase Edge Functions, Resend for email delivery, and domain management via Namecheap.

## Architecture Components

### 1. Supabase Edge Functions
- **Purpose**: Serverless function to handle contact form submissions and trigger email sending.
- **Location**: `supabase/functions/send-contact-email/index.ts`
- **Functionality**:
  - Receives POST requests from the frontend contact form.
  - Parses form data (name, email, phone, company, goals, constraints, message).
  - Formats the data into an email body.
  - Calls the Resend API to send the email.
  - Returns success/failure responses with CORS headers.
- **Environment Variables**:
  - `RESEND_API_KEY`: API key for Resend (set in Supabase secrets or local `.env` for development).
- **Deployment**: Deployed via Supabase CLI (`supabase functions deploy send-contact-email`).

### 2. Resend
- **Purpose**: Email sending service for transactional emails.
- **API Usage**: REST API to send emails programmatically.
- **Configuration**:
  - From Address: `noreply@ironleaftechnology.com`
  - To Address: `support@ironleaftechnology.com`
  - Subject: "New Lead Form Submission"
  - Content: Plain text with form details.
- **Domain Verification**: `ironleaftechnology.com` is verified in Resend dashboard with required DNS records.
- **Limits**: Free tier (100 emails/month); monitor usage in dashboard.
- **Dashboard**: `"$BROWSER" https://resend.com` for logs, domain management, and API keys.

### 3. Email Addresses
- **Provider**: PrivateEmail (via Namecheap).
- **Addresses**:
  - `support@ironleaftechnology.com`: Primary recipient for contact form emails.
  - `noreply@ironleaftechnology.com`: Sender address for outbound emails (no replies expected).
- **Hosting**: Emails are hosted on PrivateEmail servers; access via webmail or IMAP/POP3.

### 4. Domain and DNS (Namecheap)
- **Registrar**: Namecheap manages `ironleaftechnology.com`.
- **DNS Records** (added for Resend verification):
  - **TXT (DMARC)**: `_dmarc.ironleaftechnology.com` → `v=DMARC1; p=none; rua=mailto:dmarc@resend.dev`
  - **MX**: `send.ironleaftechnology.com` → `feedback-smtp.us-east-1.amazonses.com` (priority 10)
  - **DKIM**: 2-3 CNAME/TXT records (e.g., `resend._domainkey.ironleaftechnology.com` → provided key)
  - **SPF**: `@` (root) → `v=spf1 include:amazonses.com ~all`
- **Management**: Update records in Namecheap dashboard > Domain List > Manage > Advanced DNS.

## Setup and Configuration

### Initial Setup
1. **Domain Purchase/Transfer**: Acquire `ironleaftechnology.com` via Namecheap.
2. **Email Setup**: Create `support@ironleaftechnology.com` and `noreply@ironleaftechnology.com` on PrivateEmail using NameCheap.
3. **Resend Account**: Sign up at `"$BROWSER" https://resend.com`, generate API key.
4. **Supabase Project**: Create project at `"$BROWSER" https://supabase.com`, enable Edge Functions.
5. **DNS Configuration**: Add required records in Namecheap for domain verification.
6. **Function Deployment**: Write/deploy the Edge Function with `supabase functions deploy`.

### Environment Variables
- **Local Development**: Add to `.env`:
  ```
  REACT_APP_RESEND_API_KEY=your_resend_api_key
  ```
- **Production**: Set in Supabase dashboard > Settings > Edge Functions > Secrets.

### Testing
- **Local**: Run `supabase start`, invoke via curl (see function comments).
- **Production**: Submit contact form on website, check Resend logs for delivery.
- **Troubleshooting**:
  - Bounces: Verify DNS records and domain status in Resend.
  - API Errors: Check API key and Resend limits.
  - Function Logs: View in Supabase dashboard > Edge Functions.

## Security and Best Practices
- **API Keys**: Never commit to version control; use environment variables.
- **CORS**: Configured for cross-origin requests from the website.
- **Rate Limiting**: Monitor Resend usage to avoid limits.
- **Data Handling**: Form data is sanitized; no sensitive info stored.
- **Updates**: Regularly check for Resend/Supabase updates.

## Support
- **Resend**: Documentation at `"$BROWSER" https://resend.com/docs`.
- **Supabase**: Docs at `"$BROWSER" https://supabase.com/docs`.
- **Namecheap**: Support via dashboard or `"$BROWSER" https://www.namecheap.com/support/"`.
- **PrivateEmail**: Integrated with Namecheap support.

For issues, check logs in Resend/Supabase dashboards or contact respective support teams.