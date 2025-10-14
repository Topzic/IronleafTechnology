import React from "react";
import { Link } from "react-router-dom";
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
          <p>(705) 768-2636</p>
          <p>support@ironleaftechnology.com</p>
        </div>
        <div className="footer-section">
          <h4>Services</h4>
          <ul>
            <li>Web Development</li>
            <li>Microsoft 365 Optimization</li>
            <li>Power BI Analytics</li>
            {/* <li>Security Cameras</li> */}
            <li>Custom Software</li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/pricing">Services & Pricing</Link>
            </li>
            <li>
              <Link to="/portfolio">Portfolio</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
            <li>
              <Link to="/blog">Blog</Link>
            </li>
            <li>
              <Link to="/terms">Terms of Service</Link>
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
