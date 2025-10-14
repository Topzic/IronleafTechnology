import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./HeroSection.css";
import { trackEvent } from "../utils/analytics";

const HeroSection = () => {
  const navigate = useNavigate();
  const [backgroundUrl, setBackgroundUrl] = useState(null);

  useEffect(() => {
    let canceled = false;

    const resolveBackgroundSource = () => {
      if (typeof window === "undefined") {
        return null;
      }
      const isMobile = window.matchMedia("(max-width: 768px)").matches;
      const asset = isMobile ? "background-mobile.webp" : "background.webp";
      return `${process.env.PUBLIC_URL}/projects/${asset}`;
    };

    const loadBackground = () => {
      const source = resolveBackgroundSource();
      if (!source) {
        return;
      }

      const img = new Image();
      img.src = source;
      img.onload = () => {
        if (!canceled) {
          setBackgroundUrl(source);
        }
      };
    };

    if (typeof window !== "undefined") {
      if ("requestIdleCallback" in window) {
        window.requestIdleCallback(loadBackground, { timeout: 2000 });
      } else {
        window.setTimeout(loadBackground, 1200);
      }
    }

    return () => {
      canceled = true;
    };
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
        className={`hero-overlay${backgroundUrl ? " hero-overlay--image" : ""}`}
        style={
          backgroundUrl
            ? { backgroundImage: `url(${backgroundUrl})` }
            : undefined
        }
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
