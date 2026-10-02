import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  FaHardHat,
  FaBuilding,
  FaHome,
  FaRoad,
  FaLeaf,
  FaIndustry,
  FaCubes,
  FaCheckCircle,
  FaArrowRight
} from "react-icons/fa";

import SectionHeading from "../components/SectionHeading";
import { services } from "../data/constructionData";
import "./Services.css";

const iconMap = {
  FaBuilding: <FaBuilding />,
  FaHome: <FaHome />,
  FaRoad: <FaRoad />,
  FaLeaf: <FaLeaf />,
  FaIndustry: <FaIndustry />,
  FaCubes: <FaCubes />
};

const serviceImages = {
  "commercial-construction": "/images/hero-1.jpg",
  "luxury-residential": "/images/hero-2.jpg",
  "civil-infrastructure": "/images/hero-3.jpg",
  "sustainable-green": "/images/hero-4.jpg",
  "industrial-logistics": "/images/machinery.jpg",
  "bim-preconstruction": "/images/project-interior.jpg"
};

const processStages = [
  {
    step: "01",
    title: "Virtual Design & 4D BIM",
    desc: "Complete digital twin modeling, laser site scans, and automated clash detection conforming to IS codes before equipment arrives on site."
  },
  {
    step: "02",
    title: "Substructure & Geotechnical",
    desc: "Bored cast-in-situ piling in marine clay, bedrock stabilization, and groundwater cutoffs across coastal and inland Tamil Nadu."
  },
  {
    step: "03",
    title: "Superstructure Erection",
    desc: "Composite structural steel framing, post-tensioned concrete slabs, and hydraulic climbing formwork executed by synchronized crews."
  },
  {
    step: "04",
    title: "Enclosure & MEP Integration",
    desc: "Aerodynamic low-E curtain walls, cyclone-resistant dynamic glazing, centralized HVAC with UVGI, and rooftop solar microgrids."
  },
  {
    step: "05",
    title: "Statutory Clearances & Handover",
    desc: "CMDA/DTCP/TNPCB documentation, IGBC Green certifications, digital twin operational handovers, and comprehensive tenant onboarding."
  }
];

export default function Services() {
  const [activeFilter, setActiveFilter] = useState("all");

  const filteredServices = activeFilter === "all"
    ? services
    : services.filter(s => s.id === activeFilter);

  return (
    <div className="services-page">
      {/* 1. Page Hero Banner */}
      <section
        className="page-banner"
        style={{ backgroundImage: `url('/images/hero-3.jpg')` }}
      >
        <div className="container">
          <div className="page-banner-content">
            <span className="badge">
              <FaHardHat size={12} />
              Full-Spectrum Engineering
            </span>
            <h1>Comprehensive Tamil Nadu Construction Disciplines</h1>
            <p>
              From deep coastal marine caisson piling in the Bay of Bengal to 48-story IT towers on Chennai's OMR corridor, APEX delivers turnkey engineering excellence across Tamil Nadu.
            </p>
          </div>
        </div>
      </section>

      {/* 2. Interactive Navigation Pills */}
      <section className="section" style={{ paddingBottom: "2rem" }}>
        <div className="container">
          <div className="services-nav-pills">
            <button
              className={`service-pill-btn ${activeFilter === "all" ? "active" : ""}`}
              onClick={() => setActiveFilter("all")}
            >
              All Disciplines ({services.length})
            </button>
            {services.map(s => (
              <button
                key={s.id}
                className={`service-pill-btn ${activeFilter === s.id ? "active" : ""}`}
                onClick={() => setActiveFilter(s.id)}
              >
                {iconMap[s.icon]}
                <span>{s.title.split("&")[0].trim()}</span>
              </button>
            ))}
          </div>

          {/* Detailed Service Blocks */}
          <div className="services-list">
            {filteredServices.map((service, index) => (
              <motion.div
                key={service.id}
                id={service.id}
                className="service-detail-block"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="service-detail-grid">
                  <div className="service-detail-info">
                    <div className="service-detail-header">
                      <div className="service-detail-icon">
                        {iconMap[service.icon]}
                      </div>
                      <div>
                        <span className="badge" style={{ marginBottom: "0.25rem" }}>
                          Discipline 0{index + 1}
                        </span>
                        <h2>{service.title}</h2>
                      </div>
                    </div>

                    <div className="service-detail-subtitle">
                      {service.subtitle}
                    </div>

                    <p className="service-detail-desc">
                      {service.description}
                    </p>

                    <h4 style={{ fontSize: "1.05rem", color: "var(--text-heading)", marginBottom: "1rem", fontWeight: "700" }}>
                      Key Engineering Capabilities:
                    </h4>

                    <div className="service-features-grid">
                      {service.features.map((feat, i) => (
                        <div key={i} className="service-feature-box">
                          <FaCheckCircle size={14} />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>

                    <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap", marginTop: "1rem" }}>
                      <Link
                        to={`/contact?service=${service.id}`}
                        className="btn btn-primary"
                      >
                        <span>Inquire About This Service</span>
                        <FaArrowRight />
                      </Link>
                      <Link to="/projects" className="btn btn-secondary">
                        <span>Related Case Studies</span>
                      </Link>
                    </div>
                  </div>

                  <div className="service-detail-visual">
                    <img
                      src={serviceImages[service.id] || "/images/hero-1.jpg"}
                      alt={service.title}
                      className="service-detail-img"
                    />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. 5-Stage Construction Methodology */}
      <section className="section section-alt">
        <div className="container">
          <SectionHeading
            badge="Project Life Cycle"
            title="Our 5-Stage Turnkey Methodology"
            subtitle="How we eliminate scheduling delays, control capital budgets, and assure zero defects across all Tamil Nadu infrastructure contracts."
          />

          <div className="process-flow-grid">
            {processStages.map((stage, idx) => (
              <motion.div
                key={idx}
                className="process-step-card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
              >
                <div className="process-step-num">{stage.step}</div>
                <h3>{stage.title}</h3>
                <p>{stage.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Bottom CTA */}
      <section className="section">
        <div className="container">
          <div className="cta-banner">
            <span className="badge" style={{ marginBottom: "1.25rem" }}>
              <FaHardHat size={12} />
              Custom Engineering Scopes
            </span>
            <h2>Have a Complex Structural Mandate in Tamil Nadu?</h2>
            <p>
              Our team of licensed structural, civil, and environmental engineers is available for confidential pre-construction feasibility audits and initial tender cost modeling.
            </p>
            <div className="cta-buttons-group">
              <Link to="/contact" className="btn btn-primary btn-lg">
                <span>Request Project Proposal</span>
                <FaArrowRight />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
