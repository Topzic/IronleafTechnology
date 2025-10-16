import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import Image from "next/image";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };  const closeMenu = () => {
    setIsOpen(false);
  };

  const isActive = (path) => {
    return router.pathname === path;
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link href="/" className="navbar-logo" onClick={closeMenu}>
          <Image
            src="/logo.webp"
            alt="Ironleaf Technology Logo"
            className="navbar-logo-img"
            width={50}
            height={50}
          />
          <div className="navbar-logo-text">
            <span className="logo-text">Ironleaf</span>
            <span className="logo-accent">Technology</span>
          </div>
        </Link>
        <div className={`navbar-menu ${isOpen ? "active" : ""}`}>
          <Link
            href="/"
            className={isActive("/") ? "active" : ""}
            onClick={closeMenu}
          >
            Home
          </Link>
          <Link
            href="/about"
            className={isActive("/about") ? "active" : ""}
            onClick={closeMenu}
          >
            About
          </Link>
          <Link
            href="/services"
            className={isActive("/services") ? "active" : ""}
            onClick={closeMenu}
          >
            Services
          </Link>
          <Link
            href="/pricing"
            className={isActive("/pricing") ? "active" : ""}
            onClick={closeMenu}
          >
            Pricing
          </Link>
          <Link
            href="/faq"
            className={isActive("/faq") ? "active" : ""}
            onClick={closeMenu}
          >
            FAQ
          </Link>
          <Link
            href="/portfolio"
            className={isActive("/portfolio") ? "active" : ""}
            onClick={closeMenu}
          >
            Portfolio
          </Link>
          <Link
            href="/contact"
            className={isActive("/contact") ? "active" : ""}
            onClick={closeMenu}
          >
            Contact
          </Link>
          <Link
            href="/blog"
            className={isActive("/blog") ? "active" : ""}
            onClick={closeMenu}
          >
            Blog
          </Link>
          {/* <Link
            href="/support"
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
