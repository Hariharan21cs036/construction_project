import React, { useState, useEffect } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { FaHardHat, FaBars, FaTimes, FaPhoneAlt, FaArrowRight } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import { companyInfo } from "../data/constructionData";
import "./Navbar.css";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile drawer on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Projects", path: "/projects" },
    { name: "Contact", path: "/contact" }
  ];

  return (
    <>
      <header className={`navbar ${scrolled ? "scrolled" : ""}`}>
        <div className="container navbar-container">
          <Link to="/" className="nav-brand">
            <div className="nav-brand-icon">
              <FaHardHat />
            </div>
            <span>APEX</span> TN CONSTRUCT
          </Link>

          <nav>
            <ul className="nav-links">
              {navLinks.map((link) => (
                <li key={link.path}>
                  <NavLink
                    to={link.path}
                    className={({ isActive }) =>
                      `nav-link ${isActive ? "active" : ""}`
                    }
                  >
                    {link.name}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>

          <div className="nav-actions">
            <a href={`tel:${companyInfo.phone}`} className="nav-contact-quick">
              <FaPhoneAlt style={{ color: "var(--primary)" }} />
              <span>{companyInfo.phone}</span>
            </a>
            <Link to="/contact" className="btn btn-primary btn-sm">
              <span>Get a Quote</span>
              <FaArrowRight size={12} />
            </Link>
            <button
              className="mobile-toggle"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
            className="mobile-drawer"
          >
            <ul className="mobile-nav-links">
              {navLinks.map((link) => (
                <li key={link.path}>
                  <NavLink
                    to={link.path}
                    className={({ isActive }) =>
                      `mobile-nav-link ${isActive ? "active" : ""}`
                    }
                  >
                    <span>{link.name}</span>
                    <FaArrowRight size={12} style={{ opacity: 0.5 }} />
                  </NavLink>
                </li>
              ))}
            </ul>

            <div className="mobile-drawer-cta">
              <a href={`tel:${companyInfo.phone}`} className="btn btn-secondary">
                <FaPhoneAlt style={{ color: "var(--primary)" }} />
                <span>Call {companyInfo.phone}</span>
              </a>
              <Link to="/contact" className="btn btn-primary">
                <span>Request Consultation</span>
                <FaArrowRight />
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
