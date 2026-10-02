import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  FaHardHat,
  FaMapMarkerAlt,
  FaCalendarAlt,
  FaCoins,
  FaRulerCombined,
  FaCheckCircle,
  FaArrowLeft,
  FaArrowRight,
  FaBuilding,
  FaQuoteLeft,
  FaPhoneAlt
} from "react-icons/fa";

import { projects, companyInfo } from "../data/constructionData";
import "./Projects.css";

export default function ProjectDetail() {
  const { id } = useParams();
  const project = projects.find((p) => p.id === id);

  // If not found, show 404 block
  if (!project) {
    return (
      <div className="section" style={{ minHeight: "70vh", display: "flex", alignItems: "center" }}>
        <div className="container" style={{ textAlign: "center" }}>
          <FaHardHat size={50} style={{ color: "var(--primary)", marginBottom: "1rem" }} />
          <h1>Project Case Study Not Found</h1>
          <p style={{ margin: "1rem 0 2rem 0" }}>
            The requested project profile could not be located in our active megaproject registry.
          </p>
          <Link to="/projects" className="btn btn-primary">
            <FaArrowLeft />
            <span>Return to Project Portfolio</span>
          </Link>
        </div>
      </div>
    );
  }

  // Active gallery image
  const gallery = project.gallery && project.gallery.length > 0 ? project.gallery : [project.image];
  const [activeImage, setActiveImage] = useState(gallery[0]);

  // Find index for prev/next project navigation
  const currentIndex = projects.findIndex((p) => p.id === id);
  const prevProject = projects[(currentIndex - 1 + projects.length) % projects.length];
  const nextProject = projects[(currentIndex + 1) % projects.length];

  return (
    <div className="project-detail-page">
      {/* 1. Project Detail Header */}
      <section
        className="project-detail-header"
        style={{ backgroundImage: `url(${project.image})` }}
      >
        <div className="container project-header-content">
          <nav className="breadcrumb-nav" aria-label="Breadcrumb">
            <Link to="/">Home</Link>
            <span>/</span>
            <Link to="/projects">Projects</Link>
            <span>/</span>
            <span style={{ color: "var(--primary)" }}>{project.title}</span>
          </nav>

          <span className="badge" style={{ marginBottom: "1rem" }}>
            <FaHardHat size={12} />
            {project.category} Sector
          </span>

          <h1 className="project-detail-title">{project.title}</h1>
          <p className="project-detail-tagline">{project.tagline}</p>

          {/* Quick Specs Ribbon */}
          <div className="project-specs-grid">
            <div className="project-spec-box">
              <span>Location</span>
              <strong>{project.location}</strong>
            </div>
            <div className="project-spec-box">
              <span>Capital Value</span>
              <strong>{project.value}</strong>
            </div>
            <div className="project-spec-box">
              <span>Constructed Area</span>
              <strong>{project.area}</strong>
            </div>
            <div className="project-spec-box">
              <span>Completion</span>
              <strong>{project.completionYear}</strong>
            </div>
            <div className="project-spec-box">
              <span>Delivery Status</span>
              <strong style={{ color: "var(--accent-emerald)" }}>{project.status}</strong>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Main Content & Gallery */}
      <section className="section">
        <div className="container">
          {/* Gallery Showcase */}
          <div className="project-gallery-main">
            <img
              src={activeImage}
              alt={`${project.title} gallery view`}
            />
          </div>

          {gallery.length > 1 && (
            <div className="project-thumbnails-row">
              {gallery.map((imgUrl, index) => (
                <button
                  key={index}
                  className={`project-thumb-btn ${activeImage === imgUrl ? "active" : ""}`}
                  onClick={() => setActiveImage(imgUrl)}
                  aria-label={`View photo ${index + 1}`}
                >
                  <img src={imgUrl} alt={`Thumbnail ${index + 1}`} />
                </button>
              ))}
            </div>
          )}

          {/* Narrative & Sidebar Grid */}
          <div className="project-narrative-grid">
            <div className="narrative-content">
              {/* Project Overview */}
              <div className="narrative-block">
                <h3>Executive Summary & Overview</h3>
                <p>{project.overview}</p>
              </div>

              {/* Challenge & Solution */}
              <div className="narrative-block">
                <h3>Engineering Feat & Methodology</h3>
                <div className="challenge-solution-box">
                  <div className="cs-card challenge">
                    <h4>The Engineering Challenge</h4>
                    <p>{project.challenge}</p>
                  </div>
                  <div className="cs-card solution">
                    <h4>The Apex Solution</h4>
                    <p>{project.solution}</p>
                  </div>
                </div>
              </div>

              {/* Architectural Features */}
              {project.architecturalFeatures && (
                <div className="narrative-block">
                  <h3>Key Architectural & Structural Features</h3>
                  <ul className="feature-bullets-list">
                    {project.architecturalFeatures.map((feat, idx) => (
                      <li key={idx}>
                        <FaCheckCircle size={15} />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Scope of Work */}
              {project.scope && (
                <div className="narrative-block">
                  <h3>Turnkey Scope of Work</h3>
                  <ul className="feature-bullets-list">
                    {project.scope.map((item, idx) => (
                      <li key={idx}>
                        <FaCheckCircle size={15} />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            {/* Sidebar Details */}
            <aside className="project-sidebar">
              <div className="project-sidebar-card">
                <span className="badge" style={{ marginBottom: "1rem" }}>
                  Project Dossier
                </span>
                <h4 style={{ fontSize: "1.25rem", marginBottom: "1.25rem" }}>
                  Governance & Specs
                </h4>

                <div style={{ display: "flex", flexDirection: "column", gap: "1rem", fontSize: "0.9rem" }}>
                  <div>
                    <span style={{ display: "block", color: "var(--text-muted)", fontSize: "0.75rem", textTransform: "uppercase" }}>
                      Commissioning Client
                    </span>
                    <strong style={{ color: "var(--text-heading)" }}>{project.client}</strong>
                  </div>

                  <div>
                    <span style={{ display: "block", color: "var(--text-muted)", fontSize: "0.75rem", textTransform: "uppercase" }}>
                      General Contractor
                    </span>
                    <strong style={{ color: "var(--primary)" }}>APEX TAMILNADU CONSTRUCT</strong>
                  </div>

                  <div>
                    <span style={{ display: "block", color: "var(--text-muted)", fontSize: "0.75rem", textTransform: "uppercase" }}>
                      Delivery Mechanism
                    </span>
                    <strong style={{ color: "var(--text-heading)" }}>Turnkey Integrated EPC / Design-Build</strong>
                  </div>

                  <div>
                    <span style={{ display: "block", color: "var(--text-muted)", fontSize: "0.75rem", textTransform: "uppercase" }}>
                      Safety Certification
                    </span>
                    <strong style={{ color: "var(--text-heading)" }}>ISO 45001 & Class-1 Special Registered</strong>
                  </div>
                </div>

                {/* Client Quote Box */}
                {project.testimonial && (
                  <div className="client-quote-box">
                    <FaQuoteLeft style={{ color: "var(--primary)", opacity: 0.6, marginBottom: "0.75rem" }} />
                    <blockquote>"{project.testimonial.quote}"</blockquote>
                    <div className="client-author">
                      <strong>{project.testimonial.author}</strong>
                      <span>{project.testimonial.title}</span>
                    </div>
                  </div>
                )}

                <div style={{ marginTop: "2rem" }}>
                  <Link
                    to={`/contact?inquiry=${encodeURIComponent(project.title)}`}
                    className="btn btn-primary"
                    style={{ width: "100%" }}
                  >
                    <span>Consult on Similar Build</span>
                    <FaArrowRight size={12} />
                  </Link>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* 3. Next / Previous Project Navigation */}
      <section className="section section-dark" style={{ borderTop: "1px solid var(--border-subtle)", padding: "3rem 0" }}>
        <div className="container">
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "1.5rem" }}>
            <Link
              to={`/projects/${prevProject.id}`}
              className="btn btn-secondary"
            >
              <FaArrowLeft />
              <span>Prev: {prevProject.title}</span>
            </Link>

            <Link to="/projects" className="btn btn-outline">
              <span>All Projects</span>
            </Link>

            <Link
              to={`/projects/${nextProject.id}`}
              className="btn btn-secondary"
            >
              <span>Next: {nextProject.title}</span>
              <FaArrowRight />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
