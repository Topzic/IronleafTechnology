import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo" onClick={closeMenu}>
          <img
            src={process.env.PUBLIC_URL + "/logo.webp"}
            alt="Ironleaf Technology Logo"
            className="navbar-logo-img"
          />
          <div className="navbar-logo-text">
            <span className="logo-text">Ironleaf</span>
            <span className="logo-accent">Technology</span>
          </div>
        </Link>
        <div className={`navbar-menu ${isOpen ? "active" : ""}`}>
          <Link
            to="/"
            className={isActive("/") ? "active" : ""}
            onClick={closeMenu}
          >
            Home
          </Link>
          <Link
            to="/about"
            className={isActive("/about") ? "active" : ""}
            onClick={closeMenu}
          >
            About
          </Link>
          <Link
            to="/pricing"
            className={isActive("/pricing") ? "active" : ""}
            onClick={closeMenu}
          >
            Services & Pricing
          </Link>
          <Link
            to="/portfolio"
            className={isActive("/portfolio") ? "active" : ""}
            onClick={closeMenu}
          >
            Portfolio
          </Link>
          <Link
            to="/contact"
            className={isActive("/contact") ? "active" : ""}
            onClick={closeMenu}
          >
            Contact
          </Link>
          <Link
            to="/blog"
            className={isActive("/blog") ? "active" : ""}
            onClick={closeMenu}
          >
            Blog
          </Link>
          {/* <Link
            to="/support"
            className={isActive('/support') ? 'active' : ''}
            onClick={closeMenu}
          >
            Support
          </Link> */}
        </div>
        <div
          className={`hamburger ${isOpen ? "active" : ""}`}
          onClick={toggleMenu}
        >
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
