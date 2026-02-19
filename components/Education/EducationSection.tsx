"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";
import { education } from "@/data/resume";

function GPABar({ gpa, accent, isActive }: { gpa: string; accent: string; isActive: boolean }) {
  const [width, setWidth] = useState(0);
  const numericGpa = parseFloat(gpa.split("/")[0]);
  const maxGpa = parseFloat(gpa.split("/")[1]);
  const percent = (numericGpa / maxGpa) * 100;

  useEffect(() => {
    if (!isActive) return;
    const timeout = setTimeout(() => setWidth(percent), 400);
    return () => clearTimeout(timeout);
  }, [isActive, percent]);

  return (
    <div style={{ marginTop: "0.875rem" }}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          fontSize: "0.75rem",
          fontFamily: "monospace",
          marginBottom: "6px",
          color: accent,
        }}
      >
        <span>GPA</span>
        <span>{gpa}</span>
      </div>
      <div
        style={{
          height: "6px",
          borderRadius: "3px",
          background: "rgba(255,255,255,0.08)",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            height: "100%",
            borderRadius: "3px",
            width: `${width}%`,
            background: accent,
            boxShadow: `0 0 8px ${accent}80`,
            transition: "width 1.5s cubic-bezier(0.4, 0, 0.2, 1)",
          }}
        />
      </div>
    </div>
  );
}

export default function EducationSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="education"
      className="section"
      style={{ background: "rgba(5, 5, 15, 0.98)", zIndex: 5 }}
      ref={ref}
    >
      <div style={{ maxWidth: "68rem", width: "100%", margin: "0 auto" }}>
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
            05 / Education
          </p>
          <h2 className="font-black title-underline" style={{ fontSize: "clamp(2rem, 5vw, 3rem)" }}>
            Academic Background
          </h2>
        </motion.div>

        {/* Education grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "1.25rem",
          }}
        >
          {education.map((edu, i) => (
            <motion.div
              key={edu.degree}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: i * 0.12 }}
            >
              <div
                className="glass group"
                style={{
                  padding: "1.5rem 1.5rem 1.5rem 1.75rem",
                  position: "relative",
                  overflow: "hidden",
                  borderColor: `${edu.accent}30`,
                  transition: "transform 0.3s ease, box-shadow 0.3s ease",
                  cursor: "default",
                  height: "100%",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.transform = "translateY(-4px) scale(1.01)";
                  (e.currentTarget as HTMLElement).style.boxShadow = `0 12px 40px ${edu.accent}20`;
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.transform = "";
                  (e.currentTarget as HTMLElement).style.boxShadow = "";
                }}
              >
                {/* Left accent bar */}
                <div
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "4px",
                    height: "100%",
                    background: edu.accent,
                    borderRadius: "16px 0 0 16px",
                  }}
                />

                {/* Content */}
                <div>
                  {/* Institution badge */}
                  <div
                    className="tag"
                    style={{
                      color: edu.accent,
                      borderColor: edu.accent + "40",
                      background: edu.accent + "10",
                      fontSize: "0.7rem",
                      display: "inline-flex",
                      marginBottom: "0.75rem",
                    }}
                  >
                    {edu.institution}
                  </div>

                  <h3
                    className="font-bold text-white"
                    style={{ fontSize: "1rem", lineHeight: 1.4, marginBottom: "0.35rem" }}
                  >
                    {edu.degree}
                  </h3>

                  <p
                    className="font-mono text-xs"
                    style={{ color: "var(--text-muted)", marginBottom: edu.note ? "0.5rem" : 0 }}
                  >
                    {edu.period}
                  </p>

                  {edu.note && (
                    <p className="text-xs font-semibold" style={{ color: edu.accent }}>
                      🏆 {edu.note}
                    </p>
                  )}

                  <GPABar gpa={edu.gpa} accent={edu.accent} isActive={isInView} />
                </div>

                {/* Corner decoration */}
                <div
                  style={{
                    position: "absolute",
                    top: "1rem",
                    right: "1rem",
                    fontSize: "1.5rem",
                    opacity: 0.12,
                    fontWeight: 900,
                    color: edu.accent,
                    lineHeight: 1,
                  }}
                >
                  ∞
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
