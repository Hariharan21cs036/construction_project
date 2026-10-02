import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  FaHardHat,
  FaArrowRight,
  FaShieldAlt,
  FaDraftingCompass,
  FaAward,
  FaLeaf,
  FaMapMarkerAlt,
  FaQuoteLeft,
  FaPhoneAlt
} from "react-icons/fa";

import HeroSlider from "../components/HeroSlider";
import SectionHeading from "../components/SectionHeading";
import {
  companyInfo,
  projects,
  testimonials
} from "../data/constructionData";
import "./Home.css";

export default function Home() {
  return (
    <div className="home-page">
      {/* 1. Hero Carousel */}
      <HeroSlider />

      {/* 2. Key Statistics Ribbon */}
      <section className="stats-ribbon" aria-label="Company Statistics">
        <div className="container">
          <div className="stats-grid">
            {companyInfo.stats.map((stat, i) => (
              <motion.div
                key={i}
                className="stat-item"
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
              >
                <div className="stat-number">{stat.value}</div>
                <div className="stat-label">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Streamlined About Overview */}
      <section className="section">
        <div className="container">
          <div className="home-about-grid">
            <motion.div
              className="home-about-visual"
              initial={{ opacity: 0, x: -25 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="home-about-image-wrapper">
                <img
                  src="/images/machinery.jpg"
                  alt="Apex Tamil Nadu Construction Engineering"
                  className="home-about-img"
                />
              </div>
              <div className="home-about-badge-card">
                <div className="home-about-badge-number">28+</div>
                <div className="home-about-badge-text">
                  Years of Engineering Leadership in Tamil Nadu
                </div>
              </div>
            </motion.div>

            <motion.div
              className="home-about-content"
              initial={{ opacity: 0, x: 25 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="badge">
                <FaHardHat size={12} />
                About Us
              </span>
              <h2>Building Tamil Nadu's Modern Skylines & Resilient Infrastructure</h2>
              <p className="home-about-lead">
                Since 1998, APEX TAMILNADU CONSTRUCT has been the benchmark for Grade-A commercial IT parks, cantilevered coastal residences on ECR, and major civil expressways across the state.
              </p>

              <div className="home-pillars-grid">
                <div className="home-pillar-item">
                  <div className="home-pillar-icon">
                    <FaShieldAlt size={13} />
                  </div>
                  <div>
                    <h4>Zero-Incident Safety</h4>
                    <p>ISO 45001 certified with over 14M+ consecutive safe hours.</p>
                  </div>
                </div>

                <div className="home-pillar-item">
                  <div className="home-pillar-icon">
                    <FaDraftingCompass size={13} />
                  </div>
                  <div>
                    <h4>4D BIM Digital Twin</h4>
                    <p>Pre-construction clash resolution and accelerated schedules.</p>
                  </div>
                </div>

                <div className="home-pillar-item">
                  <div className="home-pillar-icon">
                    <FaLeaf size={13} />
                  </div>
                  <div>
                    <h4>IGBC Platinum Green</h4>
                    <p>Sustainable solar integration and rainwater percolation designs.</p>
                  </div>
                </div>

                <div className="home-pillar-item">
                  <div className="home-pillar-icon">
                    <FaAward size={13} />
                  </div>
                  <div>
                    <h4>Class-1 Special PWD</h4>
                    <p>Direct ownership of specialized marine and high-rise equipment.</p>
                  </div>
                </div>
              </div>

              <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
                <Link to="/about" className="btn btn-primary">
                  <span>Learn More About Us</span>
                  <FaArrowRight size={11} />
                </Link>
                <Link to="/projects" className="btn btn-secondary">
                  <span>View Project Portfolio</span>
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 4. Signature Projects Showcase */}
      <section className="section section-alt">
        <div className="container">
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", flexWrap: "wrap", gap: "1.25rem", marginBottom: "2.5rem" }}>
            <div>
              <span className="badge">
                <FaHardHat size={12} />
                Featured Portfolio
              </span>
              <h2 style={{ marginTop: "0.5rem" }}>
                Signature Tamil Nadu Megaprojects
              </h2>
              <p style={{ maxWidth: "560px", marginTop: "0.35rem" }}>
                A showcase of commercial IT towers, coastal cantilevered estates, and critical marine transportation corridors.
              </p>
            </div>
            <Link to="/projects" className="btn btn-outline">
              <span>View All Projects</span>
              <FaArrowRight size={11} />
            </Link>
          </div>

          <div className="projects-grid">
            {projects.slice(0, 4).map((project, i) => (
              <motion.div
                key={project.id}
                className="project-card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: i * 0.1 }}
              >
                <div className="project-thumb-container">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="project-thumb"
                  />
                  <div className="project-thumb-overlay" />
                  <span className="badge project-category-tag">
                    {project.category}
                  </span>
                  <span className="project-value-badge">{project.value}</span>
                </div>

                <div className="project-info">
                  <div className="project-location">
                    <FaMapMarkerAlt size={11} style={{ color: "var(--primary)" }} />
                    <span>{project.location}</span>
                  </div>
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-tagline">{project.tagline}</p>

                  <div className="project-meta-specs">
                    <div className="project-spec-item">
                      <span>Area</span>
                      <strong>{project.area}</strong>
                    </div>
                    <div className="project-spec-item">
                      <span>Completed</span>
                      <strong>{project.completionYear}</strong>
                    </div>
                    <Link
                      to={`/projects/${project.id}`}
                      className="btn btn-primary btn-sm"
                    >
                      <span>Case Study</span>
                      <FaArrowRight size={10} />
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Client Testimonials */}
      <section className="section">
        <div className="container">
          <SectionHeading
            badge="Client Endorsements"
            title="Trusted by Industry Leaders"
            subtitle="Feedback from infrastructure authorities, corporate asset managers, and private estate developers."
          />

          <div className="testimonials-grid">
            {testimonials.slice(0, 3).map((item, index) => (
              <motion.div
                key={index}
                className="testimonial-card"
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: index * 0.1 }}
              >
                <FaQuoteLeft className="testimonial-quote-icon" />
                <p className="testimonial-quote">"{item.quote}"</p>
                <div className="testimonial-author-info">
                  <strong>{item.author}</strong>
                  <span>{item.role}</span>
                  <div className="testimonial-project-tag">
                    {item.project}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Clean Corporate Call-to-Action */}
      <section className="section" style={{ paddingBottom: "5.5rem" }}>
        <div className="container">
          <div className="cta-banner">
            <span className="badge" style={{ marginBottom: "1rem" }}>
              <FaHardHat size={12} />
              Partner With Us
            </span>
            <h2>Ready to Discuss Your Project in Tamil Nadu?</h2>
            <p>
              Connect with our Chennai pre-construction engineering team for technical feasibility, architectural reviews, and turnkey contracting inquiries.
            </p>
            <div className="cta-buttons-group">
              <Link to="/contact" className="btn btn-primary btn-lg">
                <span>Request a Proposal (RFP)</span>
                <FaArrowRight size={12} />
              </Link>
              <a href={`tel:${companyInfo.phone}`} className="btn btn-secondary btn-lg">
                <FaPhoneAlt size={12} style={{ color: "var(--primary)" }} />
                <span>Call {companyInfo.phone}</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
