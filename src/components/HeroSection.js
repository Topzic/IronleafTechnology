import React from "react";
import { useNavigate } from "react-router-dom";
import "./HeroSection.css";
import { trackEvent } from "../utils/analytics";

const HeroSection = () => {
  const navigate = useNavigate();

  const backgroundDesktop = `${process.env.PUBLIC_URL}/projects/background.webp`;
  const backgroundMobile = `${process.env.PUBLIC_URL}/projects/background-mobile.webp`;

  const handleBookCall = () => {
    trackEvent({
      category: "engagement",
      action: "click",
      label: "call_button",
    });
    navigate("/contact");
  };
  return (
    <section className="hero">
      <picture className="hero-media">
        <source media="(max-width: 768px)" srcSet={backgroundMobile} />
        <img
          src={backgroundDesktop}
          alt=""
          loading="eager"
          fetchPriority="high"
          decoding="async"
        />
      </picture>
      <div className="hero-overlay" aria-hidden="true"></div>
      <div className="animated-circles">
        <span className="circle circle1"></span>
        <span className="circle circle2"></span>
        <span className="circle circle3"></span>
        <span className="circle circle4"></span>
        <span className="circle circle5"></span>
        <span className="circle circle6"></span>
        <span className="circle circle7"></span>
        <span className="circle circle8"></span>
        <span className="circle circle9"></span>
        <span className="circle circle10"></span>
        <span className="circle circle11"></span>
        <span className="circle circle13"></span>
        <span className="circle circle14"></span>
        <span className="circle circle15"></span>
        <span className="circle circle16"></span>
        <span className="circle circle17"></span>
        <span className="circle circle18"></span>
        <span className="circle circle19"></span>
        <span className="circle circle20"></span>
      </div>
      <div className="hero-content">
        <h1>Empowering Businesses with Veteran-Driven Technology</h1>
        <p>
          Veteran-driven technology solutions designed for performance and
          growth. At Ironleaf Technology, we build custom websites, software,
          and digital systems—integrating analytics, automation, and SEO
          optimization to help you attract clients, streamline workflows, and
          scale with confidence.
        </p>
        <button className="cta-button" onClick={handleBookCall}>
          Book a Discovery Call
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
