import React from "react";
import { useRouter } from "next/router";
import ReactGA from "react-ga4";

const CallToAction = () => {
  const router = useRouter();

  const handleContact = () => {
    ReactGA.event("home_cta_contact", { page_path: router.asPath });
    router.push("/contact");
  };

  return (
    <section className="cta-section">
      <div className="container">
        <h2>Ready to Transform Your Business?</h2>
        <p>
          Let&apos;s discuss your project and see how we can help you achieve your goals.
        </p>
        <button className="cta-button" onClick={handleContact}>
          Get Started Today
        </button>
      </div>
    </section>
  );
};

export default CallToAction;