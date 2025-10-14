let analyticsInstance;
let initPromise;

const GA_MEASUREMENT_ID = "G-FQ9Z6HNXE1";

const initAnalytics = () => {
  if (analyticsInstance) {
    return Promise.resolve(analyticsInstance);
  }

  if (!initPromise) {
    initPromise = import("react-ga4")
      .then(({ default: ReactGA }) => {
        ReactGA.initialize(GA_MEASUREMENT_ID);
        analyticsInstance = ReactGA;
        return analyticsInstance;
      })
      .catch((error) => {
        initPromise = undefined;
        throw error;
      });
  }

  return initPromise;
};

export const scheduleAnalyticsInit = () => {
  if (typeof window === "undefined") {
    return;
  }

  const start = () => {
    initAnalytics()
      .then((ga) => {
        ga.send({
          hitType: "pageview",
          page: window.location.pathname + window.location.search,
          title: document.title,
        });
      })
      .catch(() => {
        // Swallow analytics load errors to avoid impacting UX.
      });
  };

  if ("requestIdleCallback" in window) {
    window.requestIdleCallback(start, { timeout: 3000 });
  } else {
    window.setTimeout(start, 2000);
  }
};

export const trackEvent = (eventConfig) => {
  if (typeof window === "undefined") {
    return;
  }

  initAnalytics()
    .then((ga) => {
      ga.event(eventConfig);
    })
    .catch(() => {
      // Ignore analytics errors silently.
    });
};

export const trackPageView = (path) => {
  if (typeof window === "undefined") {
    return;
  }

  initAnalytics()
    .then((ga) => {
      ga.send({
        hitType: "pageview",
        page: path,
        title: document.title,
      });
    })
    .catch(() => {
      // Ignore analytics errors silently.
    });
};
