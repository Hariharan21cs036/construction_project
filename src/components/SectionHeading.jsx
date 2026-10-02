import React from "react";
import { motion } from "framer-motion";

export default function SectionHeading({
  badge,
  title,
  subtitle,
  align = "center",
  light = false
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`section-header ${align === "left" ? "left-aligned" : ""}`}
    >
      {badge && <span className="badge">{badge}</span>}
      <h2 style={{ color: light ? "#FFFFFF" : "var(--text-heading)" }}>{title}</h2>
      {subtitle && <p>{subtitle}</p>}
    </motion.div>
  );
}
