import React, { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaHardHat,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaCheckCircle,
  FaChevronDown,
  FaShieldAlt,
  FaPaperPlane
} from "react-icons/fa";

import SectionHeading from "../components/SectionHeading";
import { companyInfo, faqs } from "../data/constructionData";
import "./Contact.css";

export default function Contact() {
  const [searchParams] = useSearchParams();

  // Form State
  const [formData, setFormData] = useState({
    name: "",
    organization: "",
    email: "",
    phone: "",
    sector: "commercial",
    budget: "₹50 Cr - ₹200 Cr",
    timeline: "3 - 6 Months",
    message: ""
  });

  const [submitted, setSubmitted] = useState(false);
  const [activeFaq, setActiveFaq] = useState(0);

  // Pre-fill from URL parameters if available
  useEffect(() => {
    const sectorParam = searchParams.get("sector");
    const inquiryParam = searchParams.get("inquiry");
    const serviceParam = searchParams.get("service");

    if (sectorParam) {
      setFormData((prev) => ({ ...prev, sector: sectorParam }));
    }
    if (inquiryParam) {
      setFormData((prev) => ({
        ...prev,
        message: `Inquiring about project feasibility similar to: ${inquiryParam}.`
      }));
    } else if (serviceParam) {
      setFormData((prev) => ({
        ...prev,
        message: `Inquiring about engineering scope for service: ${serviceParam}.`
      }));
    }
  }, [searchParams]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const toggleFaq = (index) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  return (
    <div className="contact-page">
      {/* 1. Page Hero Banner */}
      <section
        className="page-banner"
        style={{ backgroundImage: `url('/images/hero-4.jpg')` }}
      >
        <div className="container">
          <div className="page-banner-content">
            <span className="badge">
              <FaHardHat size={12} />
              Tender & RFP Directorate
            </span>
            <h1>Initiate Your Tamil Nadu Landmark Build</h1>
            <p>
              Connect directly with our Chennai pre-construction engineering team, executive leadership, or submit a confidential architectural tender / RFP.
            </p>
          </div>
        </div>
      </section>

      {/* 2. Main Contact Form & Info Layout */}
      <section className="section">
        <div className="container">
          <div className="contact-layout-grid">
            {/* Left: Interactive RFP Form */}
            <div className="contact-form-card">
              <div className="contact-form-header">
                <span className="badge" style={{ marginBottom: "0.5rem" }}>
                  Engineering Consultation
                </span>
                <h2>Request a Project Proposal (Tender / RFP)</h2>
                <p>
                  Fill out the parameters below and our senior pre-construction team will return a preliminary budget and schedule feasibility matrix within 5 business days.
                </p>
              </div>

              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="form-success-box"
                >
                  <FaCheckCircle size={48} style={{ color: "var(--accent-emerald)" }} />
                  <h3>Tender Inquiry Logged</h3>
                  <p>
                    Thank you, <strong>{formData.name}</strong>. Your project inquiry for <strong>{formData.organization || "your firm"}</strong> has been logged under priority review by our Pre-Construction Engineering Directorate in Chennai.
                  </p>
                  <button
                    className="btn btn-primary"
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({
                        name: "",
                        organization: "",
                        email: "",
                        phone: "",
                        sector: "commercial",
                        budget: "₹50 Cr - ₹200 Cr",
                        timeline: "3 - 6 Months",
                        message: ""
                      });
                    }}
                  >
                    Submit Another Inquiry
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <div className="form-row-2">
                    <div className="form-group">
                      <label>Full Name *</label>
                      <input
                        type="text"
                        name="name"
                        required
                        placeholder="Er. R. Senthil / Project Director"
                        value={formData.name}
                        onChange={handleChange}
                        className="form-control"
                      />
                    </div>
                    <div className="form-group">
                      <label>Organization / Developer Firm *</label>
                      <input
                        type="text"
                        name="organization"
                        required
                        placeholder="Tamil Nadu Tech Developers Ltd."
                        value={formData.organization}
                        onChange={handleChange}
                        className="form-control"
                      />
                    </div>
                  </div>

                  <div className="form-row-2">
                    <div className="form-group">
                      <label>Corporate Email *</label>
                      <input
                        type="email"
                        name="email"
                        required
                        placeholder="senthil@tninfra.com"
                        value={formData.email}
                        onChange={handleChange}
                        className="form-control"
                      />
                    </div>
                    <div className="form-group">
                      <label>Direct Phone *</label>
                      <input
                        type="tel"
                        name="phone"
                        required
                        placeholder="+91 98400 12345"
                        value={formData.phone}
                        onChange={handleChange}
                        className="form-control"
                      />
                    </div>
                  </div>

                  <div className="form-row-2">
                    <div className="form-group">
                      <label>Project Sector</label>
                      <select
                        name="sector"
                        value={formData.sector}
                        onChange={handleChange}
                        className="form-control"
                      >
                        <option value="commercial">Commercial IT Tower & High-Rise (OMR/Guindy)</option>
                        <option value="residential">Luxury Residential & Coastal Estate (ECR)</option>
                        <option value="infrastructure">Civil Highways, Marine Bridges & Viaducts</option>
                        <option value="sustainable">IGBC Platinum Green & Net-Zero Tech Park</option>
                        <option value="other">Industrial SIPCOT / Other Specialized Engineering</option>
                      </select>
                    </div>

                    <div className="form-group">
                      <label>Estimated Capital Budget</label>
                      <select
                        name="budget"
                        value={formData.budget}
                        onChange={handleChange}
                        className="form-control"
                      >
                        <option value="Under ₹10 Cr">Under ₹10 Crores</option>
                        <option value="₹10 Cr - ₹50 Cr">₹10 Cr - ₹50 Crores</option>
                        <option value="₹50 Cr - ₹200 Cr">₹50 Cr - ₹200 Crores</option>
                        <option value="₹200 Cr - ₹500 Cr">₹200 Cr - ₹500 Crores</option>
                        <option value="₹500 Cr+">₹500 Crores+ (Tamil Nadu Megaproject)</option>
                      </select>
                    </div>
                  </div>

                  <div className="form-group">
                    <label>Target Groundbreaking Timeline</label>
                    <select
                      name="timeline"
                      value={formData.timeline}
                      onChange={handleChange}
                      className="form-control"
                    >
                      <option value="Immediate (< 30 Days)">Immediate (&lt; 30 Days)</option>
                      <option value="3 - 6 Months">3 - 6 Months</option>
                      <option value="6 - 12 Months">6 - 12 Months</option>
                      <option value="Conceptual Planning (> 12 Months)">Conceptual Planning (&gt; 12 Months)</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label>Project Scope, Site Location & Requirements</label>
                    <textarea
                      name="message"
                      rows={4}
                      placeholder="Describe the site location (Chennai, Coimbatore, Madurai, etc.), plot size, CMDA/DTCP status, or architectural requirements..."
                      value={formData.message}
                      onChange={handleChange}
                      className="form-control"
                    />
                  </div>

                  <button
                    type="submit"
                    className="btn btn-primary btn-lg"
                    style={{ width: "100%", marginTop: "1rem" }}
                  >
                    <FaPaperPlane size={14} />
                    <span>Submit Formal Tender / RFP Proposal</span>
                  </button>
                </form>
              )}
            </div>

            {/* Right: Direct Contacts & Emergency Dispatch */}
            <div className="contact-cards-column">
              {/* Headquarters */}
              <div className="contact-card-box">
                <div className="contact-card-icon">
                  <FaMapMarkerAlt />
                </div>
                <div className="contact-card-info">
                  <h4>Chennai Headquarters</h4>
                  <p>{companyInfo.headquarters}</p>
                  <p style={{ marginTop: "0.25rem", color: "var(--text-muted)", fontSize: "0.82rem" }}>
                    Executive Directorate & 4D BIM Pre-Construction Center
                  </p>
                </div>
              </div>

              {/* Regional Offices */}
              <div className="contact-card-box">
                <div className="contact-card-icon">
                  <FaMapMarkerAlt />
                </div>
                <div className="contact-card-info">
                  <h4>Regional Engineering Offices</h4>
                  <p><strong>Coimbatore:</strong> {companyInfo.regionalOffices[0].address}</p>
                  <p style={{ marginTop: "0.4rem" }}><strong>Madurai:</strong> {companyInfo.regionalOffices[1].address}</p>
                </div>
              </div>

              {/* Direct Phone */}
              <div className="contact-card-box">
                <div className="contact-card-icon">
                  <FaPhoneAlt />
                </div>
                <div className="contact-card-info">
                  <h4>Direct Lines & Desk</h4>
                  <p>Monday - Saturday: 8:30 AM - 6:30 PM IST</p>
                  <a href={`tel:${companyInfo.phone}`}>
                    {companyInfo.phone}
                  </a>
                  {" / "}
                  <a href={`tel:${companyInfo.secondaryPhone}`}>
                    {companyInfo.secondaryPhone}
                  </a>
                </div>
              </div>

              {/* Email */}
              <div className="contact-card-box">
                <div className="contact-card-icon">
                  <FaEnvelope />
                </div>
                <div className="contact-card-info">
                  <h4>Engineering & Tenders</h4>
                  <p>Send architectural drawings, CMDA proposals, or vendor profiles</p>
                  <a href={`mailto:${companyInfo.email}`}>
                    {companyInfo.email}
                  </a>
                </div>
              </div>

              {/* 24/7 Field Support */}
              <div className="dispatch-box">
                <h4>
                  <FaShieldAlt style={{ color: "var(--primary)" }} />
                  24/7 Job Site Operations & Safety Desk
                </h4>
                <p>
                  Active job site project directors and municipal emergency teams can reach our round-the-clock safety control room 24 hours a day.
                </p>
                <div style={{ marginTop: "0.75rem", fontWeight: 700, color: "var(--primary)", fontSize: "0.95rem" }}>
                  Field Helpline: {companyInfo.secondaryPhone}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Interactive FAQ Accordion */}
      <section className="section section-alt">
        <div className="container">
          <SectionHeading
            badge="Frequently Asked Questions"
            title="General Contracting & Statutory Governance"
            subtitle="Clear answers on CMDA/DTCP approvals, coastal cyclone resilience, safety records, and IGBC green certification across Tamil Nadu."
          />

          <div className="faq-list">
            {faqs.map((faq, index) => {
              const isOpen = activeFaq === index;
              return (
                <div
                  key={index}
                  className={`faq-item ${isOpen ? "active" : ""}`}
                >
                  <button
                    className="faq-question-btn"
                    onClick={() => toggleFaq(index)}
                    aria-expanded={isOpen}
                  >
                    <span>{faq.question}</span>
                    <FaChevronDown className="faq-icon-arrow" size={14} />
                  </button>

                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25 }}
                      >
                        <div className="faq-answer-content">
                          {faq.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
