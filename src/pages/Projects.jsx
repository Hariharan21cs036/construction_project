import React, { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  FaHardHat,
  FaMapMarkerAlt,
  FaSearch,
  FaArrowRight
} from "react-icons/fa";

import SectionHeading from "../components/SectionHeading";
import { projects } from "../data/constructionData";
import "./Projects.css";

const categories = ["All", "Commercial", "Residential", "Infrastructure", "Sustainable"];

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState("default");

  // Filtering and sorting
  const filteredProjects = useMemo(() => {
    let list = [...projects];

    if (selectedCategory !== "All") {
      list = list.filter((p) => p.category.toLowerCase() === selectedCategory.toLowerCase());
    }

    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      list = list.filter(
        (p) =>
          p.title.toLowerCase().includes(q) ||
          p.location.toLowerCase().includes(q) ||
          p.client.toLowerCase().includes(q) ||
          p.tagline.toLowerCase().includes(q) ||
          p.summary.toLowerCase().includes(q)
      );
    }

    if (sortBy === "year-desc") {
      list.sort((a, b) => Number(b.completionYear) - Number(a.completionYear));
    } else if (sortBy === "value-desc") {
      const getValue = (valStr) => {
        const num = parseFloat(valStr.replace(/[^0-9.]/g, ""));
        return valStr.includes("Cr") ? num : num;
      };
      list.sort((a, b) => getValue(b.value) - getValue(a.value));
    }

    return list;
  }, [selectedCategory, searchQuery, sortBy]);

  return (
    <div className="projects-page">
      {/* 1. Page Hero Banner */}
      <section
        className="page-banner"
        style={{ backgroundImage: `url('/images/hero-2.jpg')` }}
      >
        <div className="container">
          <div className="page-banner-content">
            <span className="badge">
              <FaHardHat size={12} />
              Tamil Nadu Project Portfolio
            </span>
            <h1>Signature Architectural & Civil Landmarks</h1>
            <p>
              Explore our completed portfolio of commercial IT towers on OMR, luxury cantilevered estates on ECR, marine expressway viaducts, and IGBC net-zero industrial campuses across Tamil Nadu.
            </p>
          </div>
        </div>
      </section>

      {/* 2. Interactive Filter & Search Bar */}
      <section className="section" style={{ paddingBottom: "6rem" }}>
        <div className="container">
          <div className="projects-filter-bar">
            {/* Category tabs */}
            <div className="category-tabs-group">
              {categories.map((cat) => (
                <button
                  key={cat}
                  className={`category-tab-btn ${selectedCategory === cat ? "active" : ""}`}
                  onClick={() => setSelectedCategory(cat)}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Search & Sort */}
            <div className="projects-search-sort-group">
              <div className="projects-search-input-wrapper">
                <FaSearch className="projects-search-icon" size={13} />
                <input
                  type="text"
                  placeholder="Search projects, Chennai, ECR, OMR..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="projects-search-input"
                />
              </div>

              <select
                className="projects-sort-select"
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
              >
                <option value="default">Sort: Featured Landmarks</option>
                <option value="year-desc">Sort: Completion Year</option>
                <option value="value-desc">Sort: Highest Investment Value</option>
              </select>
            </div>
          </div>

          {/* Results Summary */}
          <div style={{ marginBottom: "2rem", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <span style={{ fontSize: "0.95rem", color: "var(--text-secondary)" }}>
              Showing <strong>{filteredProjects.length}</strong> of {projects.length} Tamil Nadu Projects
            </span>
            {(selectedCategory !== "All" || searchQuery) && (
              <button
                onClick={() => {
                  setSelectedCategory("All");
                  setSearchQuery("");
                }}
                style={{
                  background: "transparent",
                  border: "none",
                  color: "var(--primary)",
                  cursor: "pointer",
                  fontSize: "0.88rem",
                  textDecoration: "underline",
                  fontWeight: "600"
                }}
              >
                Clear all filters
              </button>
            )}
          </div>

          {/* Projects Grid */}
          {filteredProjects.length > 0 ? (
            <div className="projects-grid">
              {filteredProjects.map((project, i) => (
                <motion.div
                  key={project.id}
                  className="project-card"
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
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
                      <FaMapMarkerAlt size={12} style={{ color: "var(--primary)" }} />
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
                        style={{ padding: "0.45rem 1rem" }}
                      >
                        <span>Case Study</span>
                        <FaArrowRight size={11} />
                      </Link>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          ) : (
            <div className="no-projects-found">
              <FaHardHat size={36} style={{ color: "var(--primary)", marginBottom: "1rem" }} />
              <h3>No Landmark Projects Found</h3>
              <p style={{ marginTop: "0.5rem" }}>
                No projects matched your search criteria. Try modifying your category filter or search keywords.
              </p>
              <button
                className="btn btn-secondary btn-sm"
                style={{ marginTop: "1.5rem" }}
                onClick={() => {
                  setSelectedCategory("All");
                  setSearchQuery("");
                }}
              >
                Reset Search
              </button>
            </div>
          )}
        </div>
      </section>

      {/* 3. Bottom RFP Banner */}
      <section className="section section-alt">
        <div className="container">
          <div className="cta-banner">
            <span className="badge" style={{ marginBottom: "1.25rem" }}>
              <FaHardHat size={12} />
              Have a Landmark Vision in Tamil Nadu?
            </span>
            <h2>Let's Discuss Feasibility, Cost & Schedule</h2>
            <p>
              Our pre-construction estimating team provides comprehensive 3D/4D site feasibility reviews, CMDA compliance audits, and budget optimization for ambitious developers across Tamil Nadu.
            </p>
            <div className="cta-buttons-group">
              <Link to="/contact" className="btn btn-primary btn-lg">
                <span>Request Detailed RFP</span>
                <FaArrowRight />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
