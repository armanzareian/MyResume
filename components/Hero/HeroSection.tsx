"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { personalInfo } from "@/data/resume";
import NeuralNetCanvas from "./NeuralNetCanvas";

export default function HeroSection() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.6], [1, 0.85]);

  return (
    <section
      id="hero"
      ref={ref}
      style={{
        position: "relative",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
        zIndex: 2,
      }}
    >
      <NeuralNetCanvas scrollProgress={0} />

      {/* Content */}
      <motion.div
        style={{
          y,
          opacity,
          scale,
          position: "relative",
          zIndex: 10,
          textAlign: "center",
          padding: "5rem 1rem 7rem", /* top padding clears nav, bottom clears scroll indicator */
          maxWidth: "60rem",
          margin: "0 auto",
        }}
      >
        {/* Greeting */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          style={{ marginBottom: "0.75rem" }}
        >
          <span
            className="font-mono uppercase"
            style={{ fontSize: "0.8rem", letterSpacing: "0.3em", color: "var(--accent-cyan)" }}
          >
            Hello, I&apos;m
          </span>
        </motion.div>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="font-black"
          style={{
            fontSize: "clamp(2.5rem, 8vw, 6rem)",
            lineHeight: 1.05,
            letterSpacing: "-0.02em",
            marginBottom: "0.75rem",
          }}
        >
          <span className="gradient-text">Arman</span>
          <br />
          <span style={{ color: "white" }}>Zareian</span>
        </motion.h1>

        {/* Role badges */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "0.75rem",
            justifyContent: "center",
            marginBottom: "1.5rem",
          }}
        >
          {[
            { label: "ML Engineer", color: "#00f5ff" },
            { label: "Data Scientist", color: "#7c3aed" },
            { label: "Full Stack Developer", color: "#10b981" },
            { label: "PhD Researcher", color: "#f59e0b" },
          ].map((role) => (
            <span
              key={role.label}
              className="tag text-xs font-semibold"
              style={{
                color: role.color,
                borderColor: role.color + "40",
                background: role.color + "10",
              }}
            >
              {role.label}
            </span>
          ))}
        </motion.div>

        {/* Summary snippet */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          style={{
            fontSize: "clamp(1rem, 2.5vw, 1.25rem)",
            maxWidth: "36rem",
            margin: "0 auto 1.5rem",
            lineHeight: 1.7,
            color: "var(--text-muted)",
          }}
        >
          Building scalable ML systems, privacy-preserving AI, and end-to-end
          data pipelines. 5+ years across industry and academia.
        </motion.p>

        {/* CTA buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.1 }}
          style={{
            display: "flex",
            gap: "1rem",
            justifyContent: "center",
            flexWrap: "wrap",
          }}
        >
          <a
            href={`mailto:${personalInfo.email}`}
            className="font-semibold"
            style={{
              padding: "0.75rem 2rem",
              borderRadius: "9999px",
              background: "linear-gradient(135deg, #00f5ff, #7c3aed)",
              boxShadow: "0 0 30px rgba(0, 245, 255, 0.3)",
              color: "#000",
              textDecoration: "none",
              transition: "transform 0.3s ease, box-shadow 0.3s ease",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.transform = "scale(1.05)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.transform = "";
            }}
          >
            Get in Touch
          </a>
          <a
            href="#experience"
            className="font-semibold"
            style={{
              padding: "0.75rem 2rem",
              borderRadius: "9999px",
              border: "1px solid rgba(0, 245, 255, 0.4)",
              color: "#00f5ff",
              background: "rgba(0, 245, 255, 0.05)",
              textDecoration: "none",
              transition: "transform 0.3s ease",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.transform = "scale(1.05)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.transform = "";
            }}
          >
            View Work
          </a>
        </motion.div>

        {/* Location */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.3 }}
          style={{ marginTop: "2rem", fontSize: "0.875rem", color: "var(--text-muted)" }}
        >
          📍 {personalInfo.location} &nbsp;·&nbsp; Kansas State University
        </motion.p>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="scroll-indicator"
        style={{
          position: "absolute",
          bottom: "2rem",
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "0.5rem",
          zIndex: 10,
        }}
      >
        <span
          className="font-mono tracking-widest uppercase"
          style={{ fontSize: "0.75rem", color: "var(--text-muted)" }}
        >
          Scroll
        </span>
        <div
          style={{
            width: "1px",
            height: "3rem",
            background: "linear-gradient(to bottom, rgba(0,245,255,0.6), transparent)",
          }}
        />
      </motion.div>

      {/* Decorative corners */}
      {[
        { top: "2rem", left: "2rem", borderTop: "2px solid", borderLeft: "2px solid" },
        { top: "2rem", right: "2rem", borderTop: "2px solid", borderRight: "2px solid" },
        { bottom: "2rem", left: "2rem", borderBottom: "2px solid", borderLeft: "2px solid" },
        { bottom: "2rem", right: "2rem", borderBottom: "2px solid", borderRight: "2px solid" },
      ].map((style, i) => (
        <div
          key={i}
          style={{
            position: "absolute",
            width: "3rem",
            height: "3rem",
            opacity: 0.4,
            borderColor: "var(--accent-cyan)",
            ...style,
          }}
        />
      ))}
    </section>
  );
}
