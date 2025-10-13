# Analytics Implementation Checklist

This document outlines the steps to complete Google Analytics 4 (GA4) setup for tracking user behavior, including time on page, location, incomplete forms, button clicks, and Google Ads sources. It assumes a basic HTML/JavaScript web project in the workspace `c:\Users\Ian_C\Ironleaf-Production`. Adjust for your specific framework (e.g., React) if needed.

## Prerequisites

- Google Analytics account (create at analytics.google.com).
- Google Ads account linked to GA4 for ad attribution.
- Basic understanding of HTML and JavaScript.

## Step-by-Step Implementation

### 1. Set Up GA4 Property

- Create a new GA4 property in Google Analytics.
- Obtain your Measurement ID (e.g., `G-XXXXXXXXXX`).
- Link to Google Ads for campaign tracking.
- Enable "Enhanced Measurement" in GA4 settings for automatic page views, scrolls, and outbound clicks.

### 2. Add GA4 Script to HTML

- Modify the main HTML file (e.g., `index.html`) to include the GA4 tracking script in the `<head>` section.
- This enables basic tracking (time on page, location via IP).

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <!-- ...existing code... -->
    <!-- Google Analytics 4 -->
    <script
      async
      src="https://www.googletagmanager.com/gtag/js?id=G-FQ9Z6HNXE1"
    ></script>
    <script>
      window.dataLayer = window.dataLayer || [];
      function gtag() {
        dataLayer.push(arguments);
      }
      gtag("js", new Date());

      gtag("config", "G-FQ9Z6HNXE1");
    </script>
    <!-- ...existing code... -->
  </head>
  <body>
    <!-- ...existing code... -->
  </body>
</html>
```

### 3. Implement Custom Event Tracking

- Create or modify a JavaScript file (e.g., `analytics.js`) for custom events.
- Place this file in a scripts folder and link it in your HTML (e.g., `<script src="scripts/analytics.js"></script>`).
- Custom events cover button clicks, form starts, and form abandons.

```javascript
// Track call button click
document.getElementById("call-button").addEventListener("click", function () {
  gtag("event", "click", {
    event_category: "engagement",
    event_label: "call_button",
  });
});

// Track form start (on first field focus)
document.getElementById("lead-form").addEventListener("focusin", function (e) {
  if (e.target.tagName === "INPUT" && !this.formStarted) {
    gtag("event", "form_start", {
      event_category: "lead_form",
    });
    this.formStarted = true;
  }
});

// Track form abandon (on page unload if form not submitted)
window.addEventListener("beforeunload", function () {
  if (
    document.getElementById("lead-form").formStarted &&
    !document.getElementById("lead-form").submitted
  ) {
    gtag("event", "form_abandon", {
      event_category: "lead_form",
    });
  }
});
```

- **Where to Implement**:
  - Call button tracking: Added to `HeroSection.js` on the "Book a Discovery Call" button.
- Custom quote button tracking: Added to `Pricing.js` on the "Get a Custom Quote" button.
  - Form start/abandon tracking: Added to `Contact.js` on the lead form (start on name input focus, abandon on page unload if not submitted).
  - Ensure scripts load after DOM elements (e.g., at end of `<body>` or use `DOMContentLoaded`).

### 4. Add Privacy Compliance

- Implement a cookie consent banner (e.g., using a library like Cookiebot).
- Modify GA4 config to respect consent (e.g., disable tracking until consent is given).
- Example: Add consent checks in the GA4 script.

### 5. Testing and Validation

- Deploy changes and test in a browser.
- Use GA4's Realtime reports to verify events.
- Check for errors in browser console.
- Set up goals in GA4 for conversions (e.g., form submissions).

### 6. Monitoring and Maintenance

- Review GA4 reports weekly for insights.
- Update tracking as needed (e.g., new buttons or forms).
- Ensure compliance with privacy laws (GDPR, CCPA).

If using a framework like React, integrate via `react-ga4` npm package instead of manual scripts. For advanced setups, consider Google Tag Manager. Let me know if you need code for specific frameworks.

**Implementation Status**:

- GA4 script added to `public/index.html`.
- `react-ga4` installed and initialized in `src/index.js`.
- Call button tracking added to `src/components/HeroSection.js`.
- Form tracking added to `src/pages/Contact.js`.
- Custom quote button tracking added to `src/pages/Pricing.js`.
