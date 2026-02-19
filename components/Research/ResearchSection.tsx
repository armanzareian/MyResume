"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { researchProjects } from "@/data/resume";

export default function ResearchSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="research"
      className="section dot-grid"
      style={{ background: "rgba(8, 8, 20, 0.98)", zIndex: 5 }}
      ref={ref}
    >
      <div style={{ maxWidth: "72rem", width: "100%", margin: "0 auto" }}>
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          style={{ marginBottom: "3.5rem" }}
        >
          <p
            className="text-sm font-mono tracking-widest uppercase"
            style={{ color: "var(--accent-cyan)", marginBottom: "0.75rem" }}
          >
            04 / Research
          </p>
          <h2 className="font-black title-underline" style={{ fontSize: "clamp(2rem, 5vw, 3rem)" }}>
            Research Experience
          </h2>
        </motion.div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "1.5rem",
          }}
        >
          {researchProjects.map((project, i) => (
            <ResearchCard key={project.title} project={project} index={i} isInView={isInView} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ResearchCard({
  project,
  index,
  isInView,
}: {
  project: (typeof researchProjects)[0];
  index: number;
  isInView: boolean;
}) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: index % 2 === 0 ? -6 : 6 } : {}}
      transition={{ duration: 0.8, delay: index * 0.15 }}
    >
      <motion.div
        onHoverStart={() => setHovered(true)}
        onHoverEnd={() => setHovered(false)}
        animate={{
          y: hovered ? -10 : 0,
          boxShadow: hovered
            ? `0 24px 50px ${project.accent}25, 0 0 0 1px ${project.accent}30`
            : `0 4px 20px rgba(0,0,0,0.3)`,
        }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        className="glass relative overflow-hidden"
        style={{ height: "100%", cursor: "default" }}
      >
        {/* Top border */}
        <div style={{ height: "3px", background: project.accent, borderRadius: "16px 16px 0 0" }} />

        <div style={{ padding: "1.5rem" }}>
          {/* Institution badge */}
          <div
            className="tag"
            style={{
              color: project.accent,
              borderColor: project.accent + "40",
              background: project.accent + "10",
              fontSize: "0.7rem",
              display: "inline-flex",
              marginBottom: "0.875rem",
            }}
          >
            {project.institution}
          </div>

          <h3
            className="font-bold text-white"
            style={{ fontSize: "1rem", lineHeight: 1.45, marginBottom: "0.35rem" }}
          >
            {project.title}
          </h3>

          <p
            className="font-mono text-xs"
            style={{ color: project.accent + "cc", marginBottom: "1rem" }}
          >
            {project.period}
          </p>

          <ul style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
            {project.bullets.map((bullet, bi) => (
              <li
                key={bi}
                style={{
                  display: "flex",
                  gap: "0.5rem",
                  fontSize: "0.8rem",
                  color: "var(--text-muted)",
                  lineHeight: 1.55,
                }}
              >
                <span
                  style={{
                    marginTop: "0.45rem",
                    width: "5px",
                    height: "5px",
                    borderRadius: "50%",
                    background: project.accent,
                    flexShrink: 0,
                  }}
                />
                {bullet}
              </li>
            ))}
          </ul>
        </div>

        {/* Glow hover overlay */}
        <motion.div
          animate={{ opacity: hovered ? 1 : 0 }}
          style={{
            position: "absolute",
            inset: 0,
            pointerEvents: "none",
            borderRadius: "16px",
            background: `radial-gradient(circle at 50% 0%, ${project.accent}08, transparent 70%)`,
          }}
        />
      </motion.div>
    </motion.div>
  );
}
