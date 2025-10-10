import React from 'react';
import './About.css';

const About = () => {
  return (
    <div className="about-page">
      <section className="hero-section">
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
        <h1>About Ironleaf Technologies</h1>
        <p>Driven by integrity, reliability, security, service, sustainability, and clear communication.</p>
      </section>

      <section className="founder-bio">
        <h2>Meet Our Founder</h2>
        <div className="bio-content">
          <img src="/projects/profile.jpg" alt="Ian Cunningham" />
          <div className="bio-text">
            <h3>Ian Cunningham</h3>
            <p>Veteran, Software Engineer, Entrepreneur</p>
            <p>Ian brings over a decade of experience in technology and military service. As a former infantry specialist with the Canadian Armed Forces, he understands discipline, teamwork, and mission-critical operations. His background in software engineering, combined with his passion for nature and community, drives Ironleaf Technologies' commitment to sustainable, reliable tech solutions.</p>
            <p>Based in Peterborough, Ontario, Ian is dedicated to supporting local businesses and organizations with technology that empowers growth and efficiency.</p>
          </div>
        </div>
      </section>

      <section className="mission-values">
        <h2>Our Mission, Vision & Values</h2>
        <div className="values-grid">
          <div className="value-card">
            <h3>Integrity</h3>
            <p>Honest, ethical practices in all our dealings.</p>
          </div>
          <div className="value-card">
            <h3>Reliability</h3>
            <p>Dependable solutions you can count on.</p>
          </div>
          <div className="value-card">
            <h3>Security</h3>
            <p>Protecting your data and systems with the highest standards.</p>
          </div>
          <div className="value-card">
            <h3>Service</h3>
            <p>Exceptional customer service and support.</p>
          </div>
          <div className="value-card">
            <h3>Sustainability</h3>
            <p>Environmentally conscious practices and solutions.</p>
          </div>
          <div className="value-card">
            <h3>Clear Communication</h3>
            <p>Transparent, straightforward interactions.</p>
          </div>
        </div>
      </section>

      <section className="community-commitment">
        <h2>Community & Environmental Commitment</h2>
        <p>At Ironleaf Technologies, we believe in giving back to our community and protecting our environment. We support local initiatives, offer discounts to veterans and nonprofits, and strive to minimize our environmental impact through sustainable practices.</p>
      </section>
    </div>
  );
};

export default About;