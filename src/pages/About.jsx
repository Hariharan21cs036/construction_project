import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  FaHardHat,
  FaShieldAlt,
  FaCheckCircle,
  FaLeaf,
  FaDraftingCompass,
  FaHandshake,
  FaArrowRight
} from "react-icons/fa";

import SectionHeading from "../components/SectionHeading";
import { companyInfo, teamMembers } from "../data/constructionData";
import "./About.css";

const milestones = [
  {
    year: "1998",
    title: "Founding in Chennai, Tamil Nadu",
    desc: "Established on Anna Salai as a specialized foundation and structural engineering contractor delivering complex industrial foundations in Guindy."
  },
  {
    year: "2006",
    title: "Expansion to State Highways & Marine Civil Works",
    desc: "Awarded Class-1 Special PWD status and secured landmark coastal marine bridge and four-lane expressway contracts connecting Chennai, Tuticorin, and Madurai."
  },
  {
    year: "2014",
    title: "Tamil Nadu's Pioneer 4D BIM Digital Twin Lab",
    desc: "Set up advanced virtual clash-detection and laser scanning center in Chennai, engineering high-density IT parks along Old Mahabalipuram Road (OMR)."
  },
  {
    year: "2019",
    title: "IGBC Platinum Green & Sustainable Division",
    desc: "Constructed net-zero industrial complexes in Coimbatore and Sriperumbudur integrating large-scale solar microgrids and Tamil Nadu rainwater percolation lakes."
  },
  {
    year: "2024",
    title: "Surpassing ₹5,800+ Crores in Delivered Infrastructure",
    desc: "Handed over the 48-story TIDEL OMR Tech Horizon Tower and the Pamban Marine Viaduct ahead of scheduled completion with zero safety incidents."
  },
  {
    year: "2026",
    title: "Next-Gen Coastal & High-Rise Engineering",
    desc: "Deploying automated hydraulic climbing formwork, IoT embedded concrete thermal sensors, and drone aerial surveys across active Tamil Nadu sites."
  }
];

export default function About() {
  return (
    <div className="about-page">
      {/* 1. Page Hero Banner */}
      <section
        className="page-banner"
        style={{ backgroundImage: `url('/images/hero-1.jpg')` }}
      >
        <div className="container">
          <div className="page-banner-content">
            <span className="badge">
              <FaHardHat size={12} />
              About APEX TAMILNADU CONSTRUCT
            </span>
            <h1>Engineering Excellence Across Tamil Nadu</h1>
            <p>
              A legacy of uncompromising structural integrity, pioneering IT corridors on OMR, resilient marine infrastructure, and devotion to safety across Tamil Nadu.
            </p>
          </div>
        </div>
      </section>

      {/* 2. Executive Story & Mission */}
      <section className="section">
        <div className="container">
          <div className="about-intro-grid">
            <motion.div
              className="about-intro-text"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="badge">
                <FaHardHat size={12} />
                Our Heritage & Mandate
              </span>
              <h2>Building Tamil Nadu's Future with Technical Mastery</h2>
              <p className="about-intro-lead">
                For over 28 years, APEX TAMILNADU CONSTRUCT has operated on an unwavering foundation: ambitious architectural design demands scientific rigor, total IS code compliance, and seamless execution.
              </p>
              <p>
                From deep-bored pile foundations in coastal marine clays along ECR to long-span cantilevered concrete villas and high-velocity marine expressways, our multidisciplinary team of licensed engineers delivers projects with unmatched precision.
              </p>

              <div className="about-cert-list">
                {companyInfo.certifications.map((cert, index) => (
                  <div key={index} className="about-cert-item">
                    <FaCheckCircle />
                    <span>{cert}</span>
                  </div>
                ))}
              </div>

              <div style={{ marginTop: "2.5rem" }}>
                <Link to="/contact" className="btn btn-primary">
                  <span>Schedule Executive Consultation</span>
                  <FaArrowRight />
                </Link>
              </div>
            </motion.div>

            <motion.div
              className="about-intro-visual"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <img
                src="/images/about-team.jpg"
                alt="Apex Tamil Nadu Engineering Leadership"
                className="about-intro-img"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* 3. Core Values */}
      <section className="section section-alt">
        <div className="container">
          <SectionHeading
            badge="Guiding Principles"
            title="Our Pillars of Construction Excellence"
            subtitle="The core values that govern every drawing, concrete batch, and safety briefing across our Tamil Nadu job sites."
          />

          <div className="values-grid">
            <motion.div
              className="value-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="value-icon">
                <FaShieldAlt />
              </div>
              <h3>Uncompromised Safety</h3>
              <p>
                Every worker returns home safe, every single shift. Certified under ISO 45001 with 14M+ consecutive safe man-hours on active sites.
              </p>
            </motion.div>

            <motion.div
              className="value-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <div className="value-icon">
                <FaDraftingCompass />
              </div>
              <h3>Mathematical Precision</h3>
              <p>
                Millimeter tolerances validated through 4D BIM simulations and laser scanning, ensuring structures endure coastal cyclones and seismic shifts.
              </p>
            </motion.div>

            <motion.div
              className="value-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="value-icon">
                <FaLeaf />
              </div>
              <h3>IGBC Green Leadership</h3>
              <p>
                Leading Tamil Nadu toward net-zero buildings through rooftop solar integration, low-carbon concrete, and large-scale rainwater harvesting.
              </p>
            </motion.div>

            <motion.div
              className="value-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <div className="value-icon">
                <FaHandshake />
              </div>
              <h3>Fiduciary Integrity</h3>
              <p>
                Transparent pre-construction budgeting, verified statutory compliance (CMDA/DTCP/TNPCB), and zero hidden costs on every contract.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 4. Timeline of Milestones */}
      <section className="section">
        <div className="container">
          <SectionHeading
            badge="Historical Journey"
            title="A Quarter-Century of Milestones"
            subtitle="Explore how APEX evolved into Tamil Nadu's foremost infrastructure and high-rise contracting authority."
          />

          <div className="timeline-container">
            {milestones.map((item, index) => (
              <motion.div
                key={index}
                className="timeline-item"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="timeline-node" />
                <div className="timeline-year">{item.year}</div>
                <h3 className="timeline-title">{item.title}</h3>
                <p className="timeline-desc">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Executive Leadership Team */}
      <section className="section section-alt">
        <div className="container">
          <SectionHeading
            badge="Leadership"
            title="The Visionaries Guiding Our Projects"
            subtitle="Meet the seasoned licensed engineers, architects, and project directors driving APEX TAMILNADU CONSTRUCT."
          />

          <div className="team-grid">
            {teamMembers.map((member, i) => (
              <motion.div
                key={i}
                className="team-card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <div className="team-image-box">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="team-img"
                  />
                </div>
                <div className="team-info">
                  <h3 className="team-name">{member.name}</h3>
                  <div className="team-role">{member.role}</div>
                  <div className="team-exp">{member.experience}</div>
                  <p className="team-bio">{member.bio}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. ISO 45001 & Safety Spotlight */}
      <section className="section">
        <div className="container">
          <div className="safety-highlight-box">
            <div>
              <span className="badge">
                <FaShieldAlt size={12} />
                Safety as Our Cultural Mandate
              </span>
              <h2 style={{ fontSize: "clamp(2rem, 3.2vw, 2.5rem)", margin: "1rem 0" }}>
                ISO 45001 & Class-1 Safety Protocols
              </h2>
              <p style={{ marginBottom: "1.5rem", lineHeight: "1.75" }}>
                APEX TAMILNADU CONSTRUCT operates under strict ISO 45001 certified occupational safety standards, ensuring that every worker on every high-rise and highway site works within a secure environment.
              </p>
              <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.85rem", marginBottom: "2rem" }}>
                <li style={{ display: "flex", alignItems: "center", gap: "0.6rem" }}>
                  <FaCheckCircle style={{ color: "var(--primary)" }} />
                  <span>Mandatory daily safety toolbox meetings across 100% of Tamil Nadu job sites</span>
                </li>
                <li style={{ display: "flex", alignItems: "center", gap: "0.6rem" }}>
                  <FaCheckCircle style={{ color: "var(--primary)" }} />
                  <span>Automated drone safety sweeps inspecting scaffolding, tie-offs, and crane perimeters</span>
                </li>
                <li style={{ display: "flex", alignItems: "center", gap: "0.6rem" }}>
                  <FaCheckCircle style={{ color: "var(--primary)" }} />
                  <span>Continuous third-party audits by certified structural and fire safety engineers</span>
                </li>
              </ul>
              <Link to="/contact" className="btn btn-outline">
                <span>Request Safety Manual & Tender Credentials</span>
              </Link>
            </div>

            <div className="safety-stat-box">
              <div className="safety-stat-big">14.2M</div>
              <div className="safety-stat-caption">Continuous Safe Hours Without Lost-Time Incidents</div>
              <p style={{ marginTop: "1rem", fontSize: "0.88rem", color: "var(--text-secondary)", lineHeight: 1.6 }}>
                Audited and validated across all active Tamil Nadu commercial IT towers, ECR coastal villas, and highway viaduct projects.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
