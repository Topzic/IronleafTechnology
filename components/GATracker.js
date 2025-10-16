import { useEffect } from "react";
import { useRouter } from "next/router";
import ReactGA from "react-ga4";

const GATracker = () => {
  const router = useRouter();

  useEffect(() => {
    if (window.gtag) {
      ReactGA.send({
        hitType: "pageview",
        page: router.pathname + router.asPath,
      });
    }
  }, [router]);

  return null;
};

export default GATracker;
