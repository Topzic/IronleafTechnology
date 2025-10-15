import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import ReactGA from "react-ga4";

const GATracker = () => {
  const location = useLocation();

  useEffect(() => {
    ReactGA.send({
      hitType: "pageview",
      page: location.pathname + location.hash,
    });
  }, [location]);

  return null;
};

export default GATracker;
