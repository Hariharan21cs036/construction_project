import React, { useState } from "react";
import { Link } from "react-router-dom";
import { 
  FaHardHat, 
  FaPhoneAlt, 
  FaEnvelope, 
  FaMapMarkerAlt, 
  FaCheckCircle, 
  FaLinkedinIn, 
  FaTwitter, 
  FaInstagram, 
  FaYoutube, 
  FaArrowRight 
} from "react-icons/fa";
import { companyInfo } from "../data/constructionData";
import "./Footer.css";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setEmail("");
      setTimeout(() => setSubscribed(false), 5000);
    }
  };

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          {/* Brand Info */}
          <div className="footer-brand">
            <Link to="/" className="footer-logo">
              <FaHardHat style={{ color: "var(--primary)" }} />
              <span>APEX</span> TN CONSTRUCT
            </Link>
            <p className="footer-description">
              Pioneering iconic structural engineering, Grade-A IT parks on OMR, cantilevered coastal estates on ECR, and major civil marine expressways across Tamil Nadu.
            </p>
            <div className="footer-certifications">
              {companyInfo.certifications.map((cert, index) => (
                <div key={index} className="cert-badge">
                  <FaCheckCircle />
                  <span>{cert}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Links */}
          <div className="footer-col">
            <h4>Quick Navigation</h4>
            <ul className="footer-links">
              <li><Link to="/"><FaArrowRight size={10} /> Home</Link></li>
              <li><Link to="/about"><FaArrowRight size={10} /> About Us</Link></li>
              <li><Link to="/services"><FaArrowRight size={10} /> Engineering Services</Link></li>
              <li><Link to="/projects"><FaArrowRight size={10} /> Tamil Nadu Projects</Link></li>
              <li><Link to="/contact"><FaArrowRight size={10} /> Contact & Tender RFP</Link></li>
            </ul>
          </div>

          {/* Services Links */}
          <div className="footer-col">
            <h4>Disciplines</h4>
            <ul className="footer-links">
              <li><Link to="/services"><FaArrowRight size={10} /> Commercial & IT Towers</Link></li>
              <li><Link to="/services"><FaArrowRight size={10} /> Luxury Coastal & Heritage Villas</Link></li>
              <li><Link to="/services"><FaArrowRight size={10} /> Civil Highways & Marine Bridges</Link></li>
              <li><Link to="/services"><FaArrowRight size={10} /> IGBC Platinum Green Campuses</Link></li>
              <li><Link to="/services"><FaArrowRight size={10} /> 4D BIM & Digital Twin VDC</Link></li>
            </ul>
          </div>

          {/* Contact & Newsletter */}
          <div className="footer-col">
            <h4>Chennai Headquarters</h4>
            <ul className="footer-contact-list">
              <li className="footer-contact-item">
                <FaMapMarkerAlt />
                <span>{companyInfo.headquarters}</span>
              </li>
              <li className="footer-contact-item">
                <FaPhoneAlt />
                <a href={`tel:${companyInfo.phone}`} style={{ color: "var(--text-heading)", fontWeight: "600" }}>
                  {companyInfo.phone}
                </a>
              </li>
              <li className="footer-contact-item">
                <FaEnvelope />
                <a href={`mailto:${companyInfo.email}`}>
                  {companyInfo.email}
                </a>
              </li>
            </ul>

            <div className="newsletter-box" style={{ marginTop: "1.5rem" }}>
              <p>Subscribe to our quarterly Tamil Nadu Infrastructure Bulletin:</p>
              <form onSubmit={handleSubscribe} className="newsletter-form">
                <input
                  type="email"
                  className="newsletter-input"
                  placeholder="Enter corporate email..."
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <button type="submit" className="btn btn-primary btn-sm">
                  Subscribe
                </button>
              </form>
              {subscribed && (
                <div className="newsletter-success">
                  <FaCheckCircle /> Thank you for subscribing!
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} APEX TAMILNADU CONSTRUCT Infra Group Pvt. Ltd. All rights reserved. Class-1 Special Registered Contractor.</p>
          <div className="footer-socials">
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="footer-social-link" aria-label="LinkedIn">
              <FaLinkedinIn />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer" className="footer-social-link" aria-label="Twitter">
              <FaTwitter />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer" className="footer-social-link" aria-label="Instagram">
              <FaInstagram />
            </a>
            <a href="https://youtube.com" target="_blank" rel="noreferrer" className="footer-social-link" aria-label="YouTube">
              <FaYoutube />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
