# Google Analytics 4 (GA4) Implementation Guide

This document provides comprehensive documentation of the Google Analytics 4 implementation in the Ironleaf Technology React application, including event tracking, page view monitoring, and data collection setup.

## Overview

The application uses Google Analytics 4 for comprehensive user behavior tracking, including:

- Page views and navigation (SPA routing)
- Button clicks and user interactions
- Form engagement and conversion tracking
- Service interest tracking
- Google Ads attribution

## Libraries and Dependencies

- **react-ga4**: React wrapper for GA4 (v4.0.0+)
- **react-router-dom**: For SPA routing and navigation tracking
- **react-helmet-async**: For dynamic page title tracking

## Initialization

### GA4 Configuration

Located in `src/index.js`:

```javascript
import ReactGA from "react-ga4";

// Initialize GA4 with Measurement ID and Google Ads conversion ID
ReactGA.initialize([
  {
    trackingId: "G-FQ9Z6HNXE1", // GA4 Measurement ID
    gaOptions: {
      // GA4 configuration options
    },
  },
  {
    trackingId: "AW-123456789", // Google Ads Conversion ID
    gaOptions: {
      // Ads-specific options
    },
  },
]);
```

### Page View Tracking

Implemented in `src/components/GATracker.js`:

```javascript
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import ReactGA from "react-ga4";

const GATracker = () => {
  const location = useLocation();

  useEffect(() => {
    // Send page view on route changes
    ReactGA.send({
      hitType: "pageview",
      page: location.pathname + location.search,
    });
  }, [location]);

  return null;
};

export default GATracker;
```

The GATracker component is integrated in `src/App.js` to automatically track all route changes in the single-page application.

## Event Tracking Implementation

### Event Naming Convention

All custom events follow the format: `{page}_{action}`

**Examples:**

- `home_book_call` - Book discovery call button on home page
- `pricing_book_call` - Get started button on pricing page
- `services_book_call` - Book call button on services page
- `contact_form_start` - Contact form interaction start

### Standard Event Parameters

All events include:

- `page_path`: Current URL hash (e.g., "#/contact" or "/")
- Additional context-specific parameters (e.g., `service_title`, `button_text`)

### Implemented Events

#### 1. Hero Section (Home Page)

**File:** `src/components/HeroSection.js`
**Event:** `home_book_call`
**Trigger:** Click on "Book a Discovery Call" button
**Parameters:**

- `page_path`: Current page path

```javascript
const handleBookCall = () => {
  ReactGA.event("home_book_call", {
    page_path: window.location.hash || "/",
  });
  navigate("/contact");
};
```

#### 2. Services Overview (Home Page)

**File:** `src/components/ServicesOverview.js`
**Event:** `home_view_prices`
**Trigger:** Click on "View Pricing" link for any service
**Parameters:**

- `page_path`: Current page path
- `service_title`: Title of the clicked service (e.g., "Full-Stack Web Development")

```javascript
const handleViewPrices = (serviceTitle) => {
  ReactGA.event("home_view_prices", {
    page_path: window.location.hash || "/",
    service_title: serviceTitle,
  });
  navigate("/pricing");
};
```

#### 3. Pricing Page

**File:** `src/pages/Pricing.js`
**Event:** `pricing_book_call`
**Trigger:** Click on "Get Started" buttons
**Parameters:**

- `page_path`: Current page path

```javascript
const handleBookCall = () => {
  ReactGA.event("pricing_book_call", {
    page_path: window.location.hash || "/",
  });
  navigate("/contact");
};
```

#### 4. Services Page

**File:** `src/pages/Services.js`
**Events:**

- `services_book_call` - Book call buttons
- `services_schedule_consultation` - Schedule consultation buttons

**Parameters:** `page_path`

#### 5. FAQ Page

**File:** `src/pages/FAQ.js`
**Event:** `faq_book_call`
**Trigger:** Book call button in FAQ section
**Parameters:** `page_path`

#### 6. Contact Page Form Tracking

**File:** `src/pages/Contact.js`
**Events:**

- `contact_form_start` - Triggered on first input field focus
- `contact_form_submit` - Triggered on successful form submission
- `contact_form_abandon` - Triggered on page unload if form started but not submitted

**Parameters:** `page_path` for all events

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
  // ... event listener setup
}, []);
```

## GA4 Configuration and Privacy

### Enhanced Measurement

GA4 Enhanced Measurement is enabled by default, providing:

- Automatic page views
- Scroll tracking
- Outbound link clicks
- File downloads

### Privacy Compliance

- Cookie consent banner implementation pending
- GA4 respects browser privacy settings
- Data collection complies with GDPR and CCPA requirements

## Testing and Validation

### Development Testing

1. Open browser developer tools
2. Navigate to Network tab
3. Filter for "collect" requests to Google Analytics
4. Trigger events and verify data is sent

### GA4 Realtime Reports

1. Access GA4 property
2. Navigate to Reports > Realtime
3. Verify events appear in real-time
4. Check event parameters in detailed view

### Console Logging

All events are logged to console in development:

```javascript
console.log("GA Event:", eventName, parameters);
```

## Maintenance and Updates

### Adding New Events

1. Import ReactGA in the component
2. Create handler function with event tracking
3. Attach to user interaction (onClick, onFocus, etc.)
4. Follow naming convention: `{page}_{action}`
5. Include `page_path` parameter
6. Add component-specific parameters as needed

### Updating Event Parameters

- Ensure all events include `page_path`
- Add relevant context (button text, element type, etc.)
- Test changes in development before deployment

### Monitoring Performance

- GA4 reports provide insights into user behavior
- Set up goals for conversion tracking
- Monitor bounce rates and engagement metrics
- Use custom reports for detailed analysis

## Deployment Considerations

- GA4 tracking works in production builds
- Ensure Measurement IDs are correct for live environment
- Test all events post-deployment
- Monitor GA4 for data accuracy

## Troubleshooting

### Events Not Firing

1. Check ReactGA initialization in `index.js`
2. Verify event names and parameters
3. Ensure component is mounted when event triggers
4. Check browser console for errors

### Missing Page Views

1. Confirm GATracker is imported in App.js
2. Verify useLocation hook is working
3. Check GA4 configuration

### Data Discrepancies

1. Allow 24-48 hours for GA4 data processing
2. Compare with Realtime reports for immediate validation
3. Check for ad blockers or privacy settings

---

**Implementation Status:** ✅ Complete

- GA4 initialized with dual tracking (GA + Ads)
- Page view tracking for SPA routing
- Comprehensive event tracking across all major CTAs
- Form interaction tracking
- Service-specific tracking with parameters
- Consistent naming convention applied
- All events tested and validated
