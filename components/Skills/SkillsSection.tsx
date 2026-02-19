"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { skillCategories, SkillCategory } from "@/data/resume";

const ORB_LABEL: Record<string, string> = {
  "Machine Learning": "ML",
  "Backend / APIs": "API",
  "Data / MLOps / Cloud": "MLOps",
  Databases: "DB",
  Visualization: "Viz",
  Automation: "Auto",
  "Systems / Hardware": "Sys",
  Other: "Other",
};

// Half-radius of the center "SKILLS" sphere — lines start from its edge
const CENTER_R = 45;

function SkillOrb({
  category,
  index,
  total,
  isActive,
  onClick,
  radius,
}: {
  category: SkillCategory;
  index: number;
  total: number;
  isActive: boolean;
  onClick: () => void;
  radius: number;
}) {
  const angle = (index / total) * 2 * Math.PI;
  const cx = Math.cos(angle) * radius;
  const cy = Math.sin(angle) * radius;
  const size = isActive ? 76 : 62;
  const half = size / 2;
  const label = ORB_LABEL[category.category] ?? category.category.split(" ")[0];

  return (
    <motion.button
      onClick={onClick}
      className="absolute flex items-center justify-center rounded-full cursor-pointer"
      style={{
        /*
         * Centre the orb with left/top math instead of transform: translate(-50%,-50%).
         * This avoids Framer Motion overriding the centering transform when it
         * animates scale on hover.
         */
        left: `calc(50% + ${cx - half}px)`,
        top: `calc(50% + ${cy - half}px)`,
        width: size,
        height: size,
        background: isActive ? category.color + "30" : "rgba(255,255,255,0.04)",
        border: `2px solid ${isActive ? category.color : category.color + "40"}`,
        color: category.color,
        boxShadow: isActive ? `0 0 20px ${category.color}60` : "none",
        fontSize: "0.6rem",
        padding: "0.25rem",
        textAlign: "center",
        lineHeight: 1.2,
        fontWeight: 700,
        letterSpacing: "0.03em",
        zIndex: 2,
      }}
      /* Scale + glow on hover — centre stays put so lines never disconnect */
      whileHover={{
        scale: 1.15,
        boxShadow: `0 0 30px ${category.color}90, 0 0 60px ${category.color}40`,
      }}
      whileTap={{ scale: 0.92 }}
      transition={{ type: "spring", stiffness: 400, damping: 22 }}
    >
      {label}
    </motion.button>
  );
}

export default function SkillsSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeCategory, setActiveCategory] = useState<number>(0);

  const active = skillCategories[activeCategory];
  const GLOBE_SIZE = 340;
  const ORBIT_RADIUS = 130;

  /**
   * Compute SVG line endpoints (edge → edge, static).
   * Since hover now uses scale (not translate), the orb centre never moves
   * and we don't need any hover adjustment — lines stay perfectly connected.
   */
  const getLinePoints = (i: number) => {
    const total = skillCategories.length;
    const angle = (i / total) * 2 * Math.PI;
    const cosA = Math.cos(angle);
    const sinA = Math.sin(angle);
    const halfG = GLOBE_SIZE / 2;

    // Orb radius (half its CSS width)
    const orbR = activeCategory === i ? 38 : 31;

    // Orb centre in SVG coords
    const orbCx = halfG + cosA * ORBIT_RADIUS;
    const orbCy = halfG + sinA * ORBIT_RADIUS;

    return {
      x1: halfG + cosA * CENTER_R,   // centre sphere edge
      y1: halfG + sinA * CENTER_R,
      x2: orbCx - cosA * orbR,       // orb near-edge (facing centre)
      y2: orbCy - sinA * orbR,
    };
  };

  return (
    <section
      id="skills"
      className="section"
      style={{ background: "rgba(8, 8, 20, 0.98)", zIndex: 5, padding: "5rem 1rem" }}
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
            02 / Skills
          </p>
          <h2 className="font-black title-underline" style={{ fontSize: "clamp(2rem, 5vw, 3rem)" }}>
            Tech Stack
          </h2>
        </motion.div>

        {/* Two-column: globe | panel */}
        <div style={{ display: "flex", gap: "3rem", alignItems: "center", flexWrap: "wrap" }}>

          {/* ── Orbital globe ── */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            style={{
              position: "relative",
              flexShrink: 0,
              width: GLOBE_SIZE,
              height: GLOBE_SIZE,
              overflow: "visible",
            }}
          >
            {/* Orbit rings */}
            {[ORBIT_RADIUS - 10, ORBIT_RADIUS, ORBIT_RADIUS + 10].map((r, i) => (
              <div
                key={r}
                style={{
                  position: "absolute",
                  left: "50%",
                  top: "50%",
                  transform: "translate(-50%, -50%)",
                  width: r * 2,
                  height: r * 2,
                  borderRadius: "50%",
                  border: `1px solid rgba(0,245,255,${0.04 + i * 0.02})`,
                  pointerEvents: "none",
                }}
              />
            ))}

            {/* Center sphere */}
            <div
              style={{
                position: "absolute",
                left: "50%",
                top: "50%",
                transform: "translate(-50%, -50%)",
                width: CENTER_R * 2,
                height: CENTER_R * 2,
                borderRadius: "50%",
                background: "radial-gradient(circle at 30% 30%, rgba(0,245,255,0.2), rgba(124,58,237,0.1))",
                border: "1px solid rgba(0,245,255,0.3)",
                boxShadow: "0 0 40px rgba(0,245,255,0.15), inset 0 0 30px rgba(0,245,255,0.05)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                zIndex: 3,
              }}
            >
              <span className="text-xs font-mono font-bold" style={{ color: "var(--accent-cyan)" }}>
                SKILLS
              </span>
            </div>

            {/* SVG lines — static edge-to-edge, no hover recalculation needed */}
            <svg
              style={{
                position: "absolute",
                inset: 0,
                width: "100%",
                height: "100%",
                pointerEvents: "none",
                zIndex: 1,
                overflow: "visible",
              }}
            >
              {skillCategories.map((cat, i) => {
                const { x1, y1, x2, y2 } = getLinePoints(i);
                const isAct = activeCategory === i;
                return (
                  <line
                    key={cat.category}
                    x1={x1}
                    y1={y1}
                    x2={x2}
                    y2={y2}
                    stroke={isAct ? cat.color : `${cat.color}40`}
                    strokeWidth={isAct ? 1.5 : 0.7}
                    strokeDasharray={isAct ? undefined : "4,4"}
                    style={{ transition: "stroke 0.3s, stroke-width 0.3s" }}
                  />
                );
              })}
            </svg>

            {/* Category orbs */}
            {skillCategories.map((cat, i) => (
              <SkillOrb
                key={cat.category}
                category={cat}
                index={i}
                total={skillCategories.length}
                isActive={activeCategory === i}
                onClick={() => setActiveCategory(i)}
                radius={ORBIT_RADIUS}
              />
            ))}
          </motion.div>

          {/* ── Skills panel ── */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            style={{ flex: "1 1 300px", minWidth: 0 }}
          >
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
            >
              <div className="glass relative overflow-hidden" style={{ padding: "2rem" }}>
                <div
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    height: "3px",
                    width: "100%",
                    background: active.color,
                    borderRadius: "16px 16px 0 0",
                  }}
                />
                <h3 className="text-2xl font-bold" style={{ color: active.color, marginBottom: "0.25rem" }}>
                  {active.category}
                </h3>
                <p className="text-xs font-mono" style={{ color: "var(--text-muted)", marginBottom: "1.5rem" }}>
                  {active.skills.length} technologies
                </p>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "0.75rem" }}>
                  {active.skills.map((skill, i) => (
                    <motion.span
                      key={skill}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: i * 0.05 }}
                      className="tag"
                      style={{
                        color: active.color,
                        borderColor: active.color + "40",
                        background: active.color + "10",
                        fontSize: "0.85rem",
                        padding: "0.4rem 1rem",
                      }}
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Category selector grid */}
            <div
              style={{
                marginTop: "1rem",
                display: "grid",
                gridTemplateColumns: "repeat(4, 1fr)",
                gap: "0.5rem",
              }}
            >
              {skillCategories.map((cat, i) => (
                <button
                  key={cat.category}
                  onClick={() => setActiveCategory(i)}
                  className="glass font-mono text-left"
                  style={{
                    padding: "0.5rem 0.75rem",
                    fontSize: "0.7rem",
                    borderRadius: "0.75rem",
                    color: cat.color,
                    borderColor: activeCategory === i ? cat.color : undefined,
                    background: activeCategory === i ? cat.color + "15" : undefined,
                    transition: "all 0.3s ease",
                    cursor: "pointer",
                    whiteSpace: "nowrap",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                  }}
                >
                  {cat.category}
                </button>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
