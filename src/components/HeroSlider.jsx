import React, { useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { FaArrowLeft, FaArrowRight, FaExternalLinkAlt, FaBuilding, FaHardHat } from "react-icons/fa";
import { heroSlides } from "../data/constructionData";
import "./HeroSlider.css";

export default function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
  }, []);

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      nextSlide();
    }, 6500);
    return () => clearInterval(timer);
  }, [isPaused, nextSlide]);

  const slide = heroSlides[currentSlide];

  return (
    <section 
      className="hero-slider-section"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      aria-label="Apex Construct Megaproject Highlights"
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={slide.id}
          className="hero-slide"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div
            className="hero-slide-bg"
            style={{ backgroundImage: `url(${slide.image})` }}
          />
          <div className="hero-overlay" />

          <div className="container hero-content-wrapper">
            <div className="hero-text-container">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="hero-tag"
              >
                <span className="badge">
                  <FaHardHat size={12} />
                  {slide.tag}
                </span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.3 }}
                className="hero-title"
              >
                {slide.title}
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.4 }}
                className="hero-subtitle"
              >
                {slide.subtitle}
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.5 }}
                className="hero-cta-group"
              >
                <Link to="/projects" className="btn btn-primary btn-lg">
                  <span>Explore Tamil Nadu Megaprojects</span>
                  <FaArrowRight />
                </Link>
                <Link to="/contact" className="btn btn-secondary btn-lg">
                  <span>Request Engineering RFP</span>
                </Link>
              </motion.div>
            </div>

            {/* Floating Project Highlight Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, x: 20 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.45 }}
              className="hero-floating-card"
            >
              <div className="hero-floating-stat">{slide.highlightStat}</div>
              <div className="hero-floating-label">{slide.highlightLabel}</div>
              <Link to={slide.link} className="hero-floating-link">
                <span>View Project Case Study</span>
                <FaExternalLinkAlt size={11} />
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Slider Controls */}
      <div className="hero-controls">
        <div className="container hero-controls-container">
          <div className="hero-indicators">
            {heroSlides.map((item, index) => (
              <button
                key={item.id}
                onClick={() => setCurrentSlide(index)}
                className={`hero-dot-btn ${currentSlide === index ? "active" : ""}`}
                aria-label={`Go to slide ${index + 1}: ${item.highlightLabel}`}
              >
                <div className="hero-dot-bar" />
                <span>0{index + 1}</span>
              </button>
            ))}
          </div>

          <div className="hero-arrows">
            <button
              onClick={prevSlide}
              className="hero-arrow-btn"
              aria-label="Previous slide"
            >
              <FaArrowLeft />
            </button>
            <button
              onClick={nextSlide}
              className="hero-arrow-btn"
              aria-label="Next slide"
            >
              <FaArrowRight />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
