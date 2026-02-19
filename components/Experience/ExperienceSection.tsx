"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { workExperience } from "@/data/resume";

export default function ExperienceSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="experience"
      className="section"
      style={{ background: "rgba(5, 5, 15, 0.98)", zIndex: 5 }}
      ref={ref}
    >
      <div style={{ maxWidth: "56rem", width: "100%", margin: "0 auto" }}>
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
            03 / Experience
          </p>
          <h2 className="font-black title-underline" style={{ fontSize: "clamp(2rem, 5vw, 3rem)" }}>
            Work History
          </h2>
        </motion.div>

        {/* Timeline */}
        <div style={{ position: "relative" }}>
          {/* Vertical gradient line */}
          <div
            style={{
              position: "absolute",
              left: "1.5rem",
              top: 0,
              bottom: 0,
              width: "1px",
              background: "linear-gradient(to bottom, #00f5ff, #7c3aed, #10b981, #f59e0b)",
            }}
          />

          <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
            {workExperience.map((job, i) => (
              <TimelineCard key={job.company + job.role} job={job} index={i} isInView={isInView} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function TimelineCard({
  job,
  index,
  isInView,
}: {
  job: (typeof workExperience)[0];
  index: number;
  isInView: boolean;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -60 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.7, delay: index * 0.15 }}
      style={{ position: "relative", paddingLeft: "3.5rem" }}
    >
      {/* Timeline dot */}
      <div
        style={{
          position: "absolute",
          left: "calc(1.5rem - 10px)",
          top: "1.5rem",
          width: "20px",
          height: "20px",
          borderRadius: "50%",
          background: job.accent,
          boxShadow: `0 0 12px ${job.accent}80`,
          border: "2px solid var(--bg-primary)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          zIndex: 2,
        }}
      >
        <div style={{ width: "8px", height: "8px", borderRadius: "50%", background: "white", opacity: 0.9 }} />
      </div>

      {/* Card */}
      <div
        className="glass relative overflow-hidden"
        style={{
          padding: "1.5rem",
          borderColor: `${job.accent}30`,
          transition: "transform 0.3s ease",
        }}
        onMouseEnter={(e) => {
          (e.currentTarget as HTMLElement).style.transform = "scale(1.01)";
        }}
        onMouseLeave={(e) => {
          (e.currentTarget as HTMLElement).style.transform = "";
        }}
      >
        {/* Animated top accent */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            height: "2px",
            width: "40px",
            background: job.accent,
            transition: "width 0.5s ease",
            borderRadius: "0 0 2px 0",
          }}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLElement).style.width = "100%";
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLElement).style.width = "40px";
          }}
        />

        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "0.5rem",
            justifyContent: "space-between",
            alignItems: "flex-start",
            marginBottom: "1rem",
          }}
        >
          <div>
            <h3 style={{ fontSize: "1.125rem", fontWeight: 700, color: "white" }}>{job.company}</h3>
            <p style={{ fontSize: "0.875rem", fontWeight: 600, color: job.accent, marginTop: "2px" }}>
              {job.role}
            </p>
          </div>
          <span
            className="tag"
            style={{
              color: job.accent,
              borderColor: job.accent + "40",
              background: job.accent + "10",
              fontSize: "0.7rem",
              flexShrink: 0,
            }}
          >
            {job.period}
          </span>
        </div>

        <ul style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
          {job.bullets.map((bullet, bi) => (
            <motion.li
              key={bi}
              initial={{ opacity: 0, x: 20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.15 + bi * 0.07 + 0.3 }}
              style={{
                display: "flex",
                gap: "0.75rem",
                fontSize: "0.875rem",
                color: "var(--text-muted)",
                lineHeight: 1.6,
              }}
            >
              <span
                style={{
                  marginTop: "0.5rem",
                  width: "6px",
                  height: "6px",
                  borderRadius: "50%",
                  background: job.accent,
                  flexShrink: 0,
                }}
              />
              {bullet}
            </motion.li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
}
