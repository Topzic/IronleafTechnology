# Booking System Implementation Guide

This document provides comprehensive documentation of the booking and contact system implementation for the Ironleaf Technology React application.

## Overview

The booking system enables potential clients to contact Ironleaf Technology through a comprehensive contact form. The system includes:

- **Contact Form**: Multi-field form for lead capture
- **Email Notifications**: Automated email delivery using Resend API
- **Analytics Tracking**: Form interaction and conversion tracking
- **Calendly Integration**: Embedded scheduling widget
- **Backend Processing**: Serverless functions via Supabase Edge Runtime

## Architecture

### Frontend (React)

- **Framework**: React 18 with hooks
- **Routing**: React Router DOM for navigation
- **Styling**: Custom CSS with responsive design
- **Form Handling**: Controlled components with validation

### Backend (Supabase)

- **Database**: Supabase (PostgreSQL)
- **Edge Functions**: Deno runtime for serverless functions
- **Email Service**: Resend API for transactional emails
- **CORS Handling**: Cross-origin request support

### Third-Party Services

- **Calendly**: Embedded scheduling widget
- **Google Analytics 4**: Form interaction tracking
- **Resend**: Email delivery service

## Frontend Implementation

### Contact Form Component (`src/pages/Contact.js`)

#### Form Fields

```javascript
const [formData, setFormData] = useState({
  name: "", // Required: Full name
  email: "", // Required: Email address
  phone: "", // Optional: Formatted phone number
  company: "", // Optional: Company name
  goals: "", // Optional: Project goals
  constraints: "", // Optional: Budget/time constraints
  message: "", // Optional: Additional message
});
```

#### Form Validation

- **Required Fields**: name, email
- **Email Format**: Basic regex validation
- **Phone Formatting**: Automatic US/Canada format `(XXX) XXX-XXXX`

#### Phone Number Formatting

```javascript
const formatPhoneNumber = (value) => {
  const phoneNumber = value.replace(/\D/g, "");
  if (phoneNumber.length <= 3) {
    return phoneNumber;
  } else if (phoneNumber.length <= 6) {
    return `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(3)}`;
  } else {
    return `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(
      3,
      6
    )}-${phoneNumber.slice(6, 10)}`;
  }
};
```

### Form Submission Process

#### Client-Side Handling

```javascript
const handleSubmit = async (e) => {
  e.preventDefault();
  try {
    const { data, error } = await supabase.functions.invoke(
      "send-contact-email",
      {
        body: formData,
      }
    );
    // Success/error handling
  } catch (err) {
    // Error handling
  }
};
```

#### Analytics Integration

The form tracks three key events:

- **Form Start**: `contact_form_start` - Triggered on first input focus
- **Form Submit**: `contact_form_submit` - Triggered on successful submission
- **Form Abandon**: `contact_form_abandon` - Triggered on page unload if form started but not submitted

### Calendly Integration

#### Widget Loading

```javascript
useEffect(() => {
  const script = document.createElement("script");
  script.src = "https://assets.calendly.com/assets/external/widget.js";
  script.async = true;
  document.body.appendChild(script);

  return () => {
    // Cleanup on unmount
  };
}, []);
```

#### Widget Embedding

```html
<div
  className="calendly-inline-widget"
  data-url="https://calendly.com/your-calendly-url"
  style={{ minWidth: '320px', height: '700px' }}
></div>
```

## Backend Implementation

### Supabase Edge Function (`supabase/functions/send-contact-email/index.ts`)

#### Function Structure

```typescript
Deno.serve(async (req) => {
  // CORS handling
  if (req.method === "OPTIONS") {
    return new Response("ok", { headers: corsHeaders });
  }

  // Method validation
  if (req.method !== "POST") {
    return new Response("Method not allowed", {
      status: 405,
      headers: corsHeaders,
    });
  }

  try {
    // Form data processing
    const formData = await req.json();

    // Email formatting
    const emailContent = `
New Lead Form Submission:

Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone || "Not provided"}
Company: ${formData.company || "Not provided"}
Goals: ${formData.goals || "Not provided"}
Constraints: ${formData.constraints || "Not provided"}
Message: ${formData.message || "Not provided"}
    `.trim();

    // Email sending via Resend API
    const resendResponse = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${resendApiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: "noreply@ironleaftechnology.com",
        to: "support@ironleaftechnology.com",
        subject: "New Lead Form Submission",
        text: emailContent,
      }),
    });

    // Response handling
    return new Response(
      JSON.stringify({ success: true, message: "Email sent successfully" }),
      { headers: { "Content-Type": "application/json", ...corsHeaders } }
    );
  } catch (error) {
    // Error handling
    return new Response(
      JSON.stringify({ success: false, message: "Failed to send email" }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
});
```

### Environment Variables

#### Required Environment Variables

```bash
# Supabase Configuration
REACT_APP_SUPABASE_URL=your_supabase_project_url
REACT_APP_SUPABASE_ANON_KEY=your_supabase_anon_key

# Resend API (Server-side)
RESEND_API_KEY=your_resend_api_key
```

## Email Template

### Email Content Structure

```
New Lead Form Submission:

Name: [Full Name]
Email: [Email Address]
Phone: [Formatted Phone Number or 'Not provided']
Company: [Company Name or 'Not provided']
Goals: [Project Goals or 'Not provided']
Constraints: [Constraints or 'Not provided']
Message: [Additional Message or 'Not provided']
```

### Email Configuration

- **From**: noreply@ironleaftechnology.com
- **To**: support@ironleaftechnology.com
- **Subject**: New Lead Form Submission
- **Format**: Plain text

## Analytics Integration

### Event Tracking Details

#### Form Start Event

- **Event Name**: `contact_form_start`
- **Trigger**: First focus on any input field
- **Parameters**: `page_path`

#### Form Submit Event

- **Event Name**: `contact_form_submit`
- **Trigger**: Successful form submission
- **Parameters**: `page_path`

#### Form Abandon Event

- **Event Name**: `contact_form_abandon`
- **Trigger**: Page unload when form started but not submitted
- **Parameters**: `page_path`

### GA4 Implementation

```javascript
// Form start tracking
onFocus={() => {
  if (!formStarted) {
    ReactGA.event("contact_form_start", {
      page_path: window.location.hash || "/",
    });
    setFormStarted(true);
  }
}}

// Form submit tracking
ReactGA.event("contact_form_submit", {
  page_path: window.location.hash || "/",
});

// Form abandon tracking
useEffect(() => {
  const handleBeforeUnload = () => {
    if (formStarted && !formSubmitted) {
      ReactGA.event("contact_form_abandon", {
        page_path: window.location.hash || "/",
      });
    }
  };
  // Event listener setup
}, [formStarted, formSubmitted]);
```

## Deployment and Configuration

### Supabase Setup

#### 1. Create Supabase Project

```bash
supabase init
supabase start
```

#### 2. Deploy Edge Function

```bash
supabase functions deploy send-contact-email
```

#### 3. Set Environment Variables

```bash
supabase secrets set RESEND_API_KEY=your_resend_api_key
```

### Resend Configuration

#### 1. Create Resend Account

- Sign up at resend.com
- Verify sending domain (ironleaftechnology.com)

#### 2. Generate API Key

- Create API key in Resend dashboard
- Set as environment variable

### Calendly Setup

#### 1. Create Calendly Account

- Sign up at calendly.com
- Create scheduling links

#### 2. Embed Widget

- Use Calendly's embed code
- Customize widget appearance

## Testing and Validation

### Local Testing

#### Start Supabase Local Environment

```bash
supabase start
```

#### Test Edge Function Locally

```bash
curl -i --location --request POST 'http://127.0.0.1:54321/functions/v1/send-contact-email' \
  --header 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZS1kZW1vIiwicm9sZSI6ImFub24iLCJleHAiOjE5ODM4MTI5OTZ9.CRXP1A7WOeoJeXxjNni43kdQwgnWNReilDMblYTn_I0' \
  --header 'Content-Type: application/json' \
  --data '{"name":"Test User","email":"test@example.com"}'
```

### Frontend Testing

#### Form Validation Testing

- Test required field validation
- Test email format validation
- Test phone number formatting

#### Analytics Testing

- Verify GA4 events fire correctly
- Check Realtime reports in GA4
- Validate event parameters

### Email Testing

#### Resend Dashboard

- Monitor email delivery in Resend dashboard
- Check bounce rates and delivery status

#### Email Content Validation

- Verify all form fields are included
- Check email formatting and readability

## Error Handling

### Frontend Error Handling

```javascript
try {
  const { data, error } = await supabase.functions.invoke(
    "send-contact-email",
    {
      body: formData,
    }
  );
  if (error) {
    console.error("Error submitting form:", error);
    alert("Failed to submit form. Please try again.");
  } else {
    // Success handling
  }
} catch (err) {
  console.error("Error:", err);
  alert("An error occurred. Please try again.");
}
```

### Backend Error Handling

```typescript
try {
  // Email sending logic
  const resendResponse = await fetch("https://api.resend.com/emails", {
    // Request configuration
  });

  if (!resendResponse.ok) {
    throw new Error(`Resend API error: ${resendResponse.statusText}`);
  }

  return new Response(
    JSON.stringify({ success: true, message: "Email sent successfully" }),
    { headers: { "Content-Type": "application/json", ...corsHeaders } }
  );
} catch (error) {
  console.error("Error sending email:", error);
  return new Response(
    JSON.stringify({ success: false, message: "Failed to send email" }),
    {
      status: 500,
      headers: { "Content-Type": "application/json", ...corsHeaders },
    }
  );
}
```

## Security Considerations

### Input Validation

- Client-side validation for UX
- Server-side validation in Edge Function
- Sanitization of user inputs

### CORS Configuration

```typescript
const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};
```

### Environment Variables

- Never commit API keys to version control
- Use Supabase secrets for server-side keys
- Use React environment variables for client-side config

## Monitoring and Maintenance

### Email Delivery Monitoring

- Monitor Resend dashboard for delivery rates
- Set up alerts for failed deliveries
- Track email open rates if using HTML emails

### Form Performance Tracking

- Monitor GA4 form conversion rates
- Track form abandonment rates
- Analyze user journey through the contact process

### System Health Checks

- Regular testing of Edge Function
- Monitoring of Supabase service status
- Verification of third-party service integrations

## Future Enhancements

### Potential Improvements

- **Database Storage**: Store form submissions in Supabase database
- **CRM Integration**: Connect with CRM systems (HubSpot, Salesforce)
- **Advanced Validation**: Server-side validation with detailed error messages
- **File Uploads**: Support for attachment uploads
- **Multi-step Forms**: Break complex forms into steps
- **Lead Scoring**: Automatic lead qualification
- **Follow-up Automation**: Automated email sequences

### Scalability Considerations

- Rate limiting for form submissions
- Queue system for high-volume email sending
- Database optimization for lead storage
- CDN integration for static assets

---

**Implementation Status:** ✅ Complete

- Contact form with validation
- Supabase Edge Function for email processing
- Resend API integration
- GA4 analytics tracking
- Calendly scheduling widget
- Error handling and user feedback
- Responsive design and accessibility
