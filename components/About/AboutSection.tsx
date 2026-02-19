"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";
import { summary, stats } from "@/data/resume";

function CountUp({
  target,
  suffix,
  duration = 2000,
  isActive,
}: {
  target: number;
  suffix: string;
  duration?: number;
  isActive: boolean;
}) {
  const [value, setValue] = useState(0);
  const startedRef = useRef(false);

  useEffect(() => {
    if (!isActive || startedRef.current) return;
    startedRef.current = true;

    const isFloat = !Number.isInteger(target);
    const startTime = performance.now();

    const tick = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = eased * target;
      setValue(isFloat ? Math.round(current * 10) / 10 : Math.floor(current));
      if (progress < 1) requestAnimationFrame(tick);
      else setValue(target);
    };

    requestAnimationFrame(tick);
  }, [isActive, target, duration]);

  return (
    <span>
      {value}
      {suffix}
    </span>
  );
}

export default function AboutSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left - rect.width / 2) / rect.width;
    const y = (e.clientY - rect.top - rect.height / 2) / rect.height;
    setMousePos({ x, y });
  };

  const handleMouseLeave = () => setMousePos({ x: 0, y: 0 });

  return (
    <section
      id="about"
      className="section dot-grid"
      style={{ background: "rgba(5, 5, 15, 0.97)", zIndex: 5 }}
      ref={ref}
    >
      <div style={{ maxWidth: "72rem", width: "100%", margin: "0 auto" }}>
        {/* Section title */}
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
            01 / About
          </p>
          <h2 className="text-4xl font-black title-underline" style={{ fontSize: "clamp(2rem, 5vw, 3rem)" }}>
            Who I Am
          </h2>
        </motion.div>

        {/* Two-column layout: summary card | stats grid */}
        <div
          style={{
            display: "flex",
            gap: "3rem",
            alignItems: "flex-start",
            flexWrap: "wrap",
          }}
        >
          {/* Summary text card */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{ flex: "1 1 340px", perspective: "1000px" }}
          >
            <div
              className="glass relative overflow-hidden"
              style={{
                padding: "2rem",
                transform: `rotateY(${mousePos.x * 8}deg) rotateX(${-mousePos.y * 8}deg)`,
                transition: "transform 0.2s ease",
              }}
            >
              {/* Shimmer overlay */}
              <div className="absolute inset-0 shimmer opacity-50 pointer-events-none rounded-2xl" />
              <p
                className="relative"
                style={{ color: "var(--text-muted)", lineHeight: 1.75, fontSize: "1rem" }}
              >
                {summary}
              </p>
              {/* Gradient top border */}
              <div
                className="absolute top-0 left-0 w-full rounded-t-2xl"
                style={{
                  height: "3px",
                  background: "linear-gradient(90deg, #00f5ff, #7c3aed, #10b981)",
                }}
              />
            </div>
          </motion.div>

          {/* Stats grid */}
          <div
            style={{
              flex: "1 1 300px",
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "1rem",
            }}
          >
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30, scale: 0.9 }}
                animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
                transition={{ duration: 0.6, delay: 0.3 + i * 0.1 }}
                className="glass pulse-border"
                style={{
                  padding: "1.5rem 1rem",
                  textAlign: "center",
                  cursor: "default",
                  transition: "transform 0.3s ease",
                }}
              >
                <div
                  className="glow-cyan font-black"
                  style={{
                    color: "var(--accent-cyan)",
                    fontSize: "clamp(1.75rem, 4vw, 2.5rem)",
                    lineHeight: 1,
                    marginBottom: "0.5rem",
                  }}
                >
                  <CountUp
                    target={stat.value}
                    suffix={stat.suffix}
                    isActive={isInView}
                    duration={2000 + i * 200}
                  />
                </div>
                <div
                  className="font-semibold tracking-wider uppercase"
                  style={{ color: "var(--text-muted)", fontSize: "0.65rem" }}
                >
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Tech tags row */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          style={{
            marginTop: "2.5rem",
            display: "flex",
            flexWrap: "wrap",
            gap: "0.75rem",
          }}
        >
          {[
            { label: "PyTorch", offset: 0 },
            { label: "LLMs", offset: -4 },
            { label: "Diffusion Models", offset: -8 },
            { label: "Django", offset: -4 },
            { label: "Docker", offset: 0 },
            { label: "AWS", offset: -6 },
          ].map((tag, i) => (
            <div
              key={tag.label}
              className="glass font-mono text-sm"
              style={{
                padding: "0.5rem 1.25rem",
                color: "var(--accent-cyan)",
                transform: `translateY(${tag.offset}px)`,
                transition: "transform 0.3s ease",
                cursor: "default",
                borderRadius: "0.75rem",
              }}
            >
              {tag.label}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
