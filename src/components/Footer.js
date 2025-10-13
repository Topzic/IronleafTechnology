import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <div className="footer-logo">
            <img
              src={process.env.PUBLIC_URL + "/logo.webp"}
              alt="Ironleaf Technology Logo"
              className="footer-logo-img"
            />
            <h3>Ironleaf Technology</h3>
          </div>
          <p>Veteran-owned technology solutions in Peterborough, Ontario.</p>
          <p>957 Webber Ave, Peterborough, ON</p>
          <p>(705) 768-2636</p>
          <p>Ian_Cunningham@live.com</p>
        </div>
        <div className="footer-section">
          <h4>Services</h4>
          <ul>
            <li>Web Development</li>
            <li>Microsoft 365 Optimization</li>
            <li>Power BI Analytics</li>
            <li>Security Cameras</li>
            <li>Custom Software</li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul>
            <li>
              <a href="/about">About Us</a>
            </li>
            <li>
              <a href="/portfolio">Portfolio</a>
            </li>
            <li>
              <a href="/contact">Contact</a>
            </li>
            {/* <li><a href="/support">Support</a></li> */}
          </ul>
        </div>
        <div className="footer-section">
          <h4>Follow Us</h4>
          <p>LinkedIn, etc.</p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2025 Ironleaf Technology. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
