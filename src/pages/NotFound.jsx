import React from "react";
import { Link } from "react-router-dom";
import { FaHardHat, FaArrowLeft, FaHome } from "react-icons/fa";

export default function NotFound() {
  return (
    <div className="section" style={{ minHeight: "75vh", display: "flex", alignItems: "center" }}>
      <div className="container" style={{ textAlign: "center", maxWidth: "600px" }}>
        <FaHardHat size={60} style={{ color: "var(--primary)", marginBottom: "1.5rem" }} />
        <h1 style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)", marginBottom: "0.5rem" }}>
          404 - Blueprint Not Found
        </h1>
        <p style={{ fontSize: "1.1rem", color: "var(--text-secondary)", marginBottom: "2rem" }}>
          The page or architectural specification you are looking for has been moved, archived, or is currently under structural redesign.
        </p>
        <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
          <Link to="/" className="btn btn-primary">
            <FaHome />
            <span>Return to Home</span>
          </Link>
          <Link to="/projects" className="btn btn-secondary">
            <FaArrowLeft />
            <span>Explore Projects</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
