import React from "react";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <div className="footer-logo">
            <Image
              src="/logo.webp"
              alt="Ironleaf Technology Logo"
              className="footer-logo-img"
              width={50}
              height={50}
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
            <li>Web Design & UI/UX</li>
            <li>Web Development</li>
            <li>AI-Powered Solutions</li>
            <li>Branding & Logo Design</li>
            <li>E-Commerce Solutions</li>
            <li>SEO & Digital Marketing</li>
            <li>Consulting & Strategy</li>
            <li>Maintenance & Support</li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul>
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/about">About</Link>
            </li>
            <li>
              <Link href="/services">Services</Link>
            </li>
            <li>
              <Link href="/pricing">Pricing</Link>
            </li>
            <li>
              <Link href="/faq">FAQ</Link>
            </li>
            <li>
              <Link href="/portfolio">Portfolio</Link>
            </li>
            <li>
              <Link href="/contact">Contact</Link>
            </li>
            <li>
              <Link href="/blog">Blog</Link>
            </li>
            <li>
              <Link href="/terms">Terms of Service</Link>
            </li>
            <li>
              <Link href="/sitemap.xml">Sitemap</Link>
            </li>
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
