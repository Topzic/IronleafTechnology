import React from "react";
import { useNavigate } from "react-router-dom";
import ReactGA from "react-ga4";
import "./CallToAction.css";

const CallToAction = () => {
  const navigate = useNavigate();

  const handleContact = () => {
    ReactGA.event("home_cta_contact", { page_path: window.location.hash || "/" });
    navigate("/contact");
  };

  return (
    <section className="cta-section">
      <div className="container">
        <h2>Ready to Transform Your Business?</h2>
        <p>
          Let's discuss your project and see how we can help you achieve your goals.
        </p>
        <button className="cta-button" onClick={handleContact}>
          Get Started Today
        </button>
      </div>
    </section>
  );
};

export default CallToAction;