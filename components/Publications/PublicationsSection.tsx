"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { publications, awards, peerReviews } from "@/data/resume";

export default function PublicationsSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="publications"
      className="section dot-grid"
      style={{ background: "rgba(8, 8, 20, 0.98)", zIndex: 5 }}
      ref={ref}
    >
      <div style={{ maxWidth: "60rem", width: "100%", margin: "0 auto" }}>
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
            06 / Publications
          </p>
          <h2 className="font-black title-underline" style={{ fontSize: "clamp(2rem, 5vw, 3rem)" }}>
            Research Output
          </h2>
        </motion.div>

        {/* Publications */}
        <div style={{ display: "flex", flexDirection: "column", gap: "1rem", marginBottom: "2.5rem" }}>
          {publications.map((pub, i) => (
            <motion.div
              key={pub.title}
              initial={{ opacity: 0, x: -40 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.7, delay: i * 0.12 }}
              className="glass relative overflow-hidden"
              style={{
                padding: "1.5rem",
                borderColor: `${pub.accent}30`,
                transition: "transform 0.3s ease",
                cursor: "default",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.transform = "scale(1.005)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.transform = "";
              }}
            >
              <div style={{ display: "flex", gap: "1rem", alignItems: "flex-start" }}>
                {/* Type badge */}
                <div
                  style={{
                    flexShrink: 0,
                    width: "3rem",
                    height: "3rem",
                    borderRadius: "0.75rem",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontWeight: 900,
                    fontSize: "0.8rem",
                    background: pub.accent + "20",
                    color: pub.accent,
                    border: `1px solid ${pub.accent}40`,
                  }}
                >
                  {pub.type === "journal" ? "J" : "M"}
                </div>

                <div style={{ flex: 1, minWidth: 0 }}>
                  <p
                    className="font-mono uppercase"
                    style={{ fontSize: "0.65rem", color: pub.accent, marginBottom: "0.3rem" }}
                  >
                    {pub.type === "journal" ? "Journal" : "Manuscript in Preparation"}
                  </p>
                  <h3
                    className="font-bold text-white"
                    style={{ fontSize: "0.9375rem", lineHeight: 1.4, marginBottom: "0.25rem" }}
                  >
                    &quot;{pub.title}&quot;
                  </h3>
                  <p style={{ fontSize: "0.8125rem", color: "var(--text-muted)", marginBottom: "0.75rem" }}>
                    {pub.authors}
                  </p>

                  <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem", alignItems: "center" }}>
                    <span
                      className="tag"
                      style={{
                        color: pub.accent,
                        borderColor: pub.accent + "40",
                        background: pub.accent + "10",
                        fontSize: "0.7rem",
                      }}
                    >
                      {pub.venue}
                    </span>
                    {pub.details && (
                      <span style={{ fontSize: "0.75rem", color: "var(--text-muted)" }}>{pub.details}</span>
                    )}
                    {pub.impact && (
                      <span style={{ fontSize: "0.75rem", fontWeight: 600, color: pub.accent }}>
                        {pub.impact}
                      </span>
                    )}
                  </div>

                  {pub.links.length > 0 && (
                    <div style={{ marginTop: "0.75rem", display: "flex", gap: "1rem" }}>
                      {pub.links.map((link) => (
                        <a
                          key={link.label}
                          href={link.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          style={{
                            fontSize: "0.8125rem",
                            fontWeight: 600,
                            color: pub.accent,
                            textDecoration: "none",
                          }}
                          onMouseEnter={(e) => (e.currentTarget.style.textDecoration = "underline")}
                          onMouseLeave={(e) => (e.currentTarget.style.textDecoration = "none")}
                        >
                          ↗ {link.label}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Awards & Peer Review */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
            gap: "1.25rem",
          }}
        >
          {/* Awards */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="glass"
            style={{ padding: "1.5rem" }}
          >
            <h3
              className="font-bold"
              style={{ fontSize: "1.0625rem", color: "var(--accent-cyan)", marginBottom: "1rem" }}
            >
              🏆 Awards
            </h3>
            {awards.map((award) => (
              <div key={award.title}>
                <p className="font-semibold text-white" style={{ fontSize: "0.875rem" }}>
                  {award.title}
                </p>
                <p style={{ fontSize: "0.75rem", marginTop: "0.25rem", color: "var(--text-muted)" }}>
                  {award.event}
                </p>
              </div>
            ))}
          </motion.div>

          {/* Peer Review */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="glass"
            style={{ padding: "1.5rem" }}
          >
            <h3
              className="font-bold"
              style={{ fontSize: "1.0625rem", color: "#7c3aed", marginBottom: "1rem" }}
            >
              📝 Peer Review
            </h3>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
              {peerReviews.map((pr) => (
                <div
                  key={pr.venue + pr.date}
                  style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}
                >
                  <span className="text-white font-medium" style={{ fontSize: "0.875rem" }}>
                    {pr.venue}
                  </span>
                  <span
                    className="tag"
                    style={{
                      color: "#7c3aed",
                      borderColor: "#7c3aed40",
                      background: "#7c3aed10",
                      fontSize: "0.7rem",
                    }}
                  >
                    {pr.date}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
