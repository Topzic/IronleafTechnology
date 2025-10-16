import React from "react";
import { useRouter } from "next/router";
import ReactGA from "react-ga4";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faRocket,
  faClock,
  faShieldAlt,
} from "@fortawesome/free-solid-svg-icons";

const HeroSection = () => {
  const router = useRouter();

  const handleBookCall = () => {
    ReactGA.event("home_book_call", { page_path: router.asPath });
    window.open("https://calendly.com/webdeveloperpeterborough/30min", "_blank");
  };

  const handleViewWork = () => {
    ReactGA.event("home_view_work", { page_path: router.asPath });
    router.push("/portfolio");
  };

  return (
    <section className="hero">
      <div className="hero-overlay"></div>
      {/* <div className="animated-circles">
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
      </div> */}
      <div className="hero-content">
        <h1>Veteran-Owned Web Development & IT Solutions</h1>
        <p>
          Professional websites, mobile apps, and digital systems built by a Canadian Armed Forces veteran with 10+ years of experience.
          From $500 landing pages to enterprise solutions, I deliver results-driven technology that grows your business.
        </p>
        <div className="hero-highlights">
          <div className="highlight">
            <FontAwesomeIcon icon={faRocket} className="highlight-icon" />
            <span>2-4 Week Delivery</span>
          </div>
          <div className="highlight">
            <FontAwesomeIcon icon={faClock} className="highlight-icon" />
            <span>$75/hour or Fixed Price</span>
          </div>
          <div className="highlight">
            <FontAwesomeIcon icon={faShieldAlt} className="highlight-icon" />
            <span>Ongoing Support Included</span>
          </div>
        </div>
        <div className="hero-buttons">
          <button className="cta-button primary" onClick={handleBookCall}>
            Book a Free Consultation
          </button>
          <button className="cta-button secondary" onClick={handleViewWork}>
            View Our Work
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
