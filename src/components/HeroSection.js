import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./HeroSection.css";
import { trackEvent } from "../utils/analytics";

const HeroSection = () => {
  const navigate = useNavigate();
  const [backgroundImage, setBackgroundImage] = useState("");

  useEffect(() => {
    const updateBackground = () => {
      const isMobile = window.innerWidth <= 768;
      setBackgroundImage(
        `url(${process.env.PUBLIC_URL}/projects/${
          isMobile ? "background-mobile.webp" : "background.webp"
        })`
      );
    };
    updateBackground();
    window.addEventListener("resize", updateBackground);
    return () => window.removeEventListener("resize", updateBackground);
  }, []);

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
      <div
        className="hero-overlay"
        style={{ backgroundImage }}
        aria-hidden="true"
      ></div>
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
        <span className="circle circle12"></span>
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
