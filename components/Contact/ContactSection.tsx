"use client";

import { useRef, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import { personalInfo } from "@/data/resume";

function ParticleBurst({ isActive }: { isActive: boolean }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (!isActive) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;

    interface Particle {
      x: number;
      y: number;
      vx: number;
      vy: number;
      life: number;
      maxLife: number;
      radius: number;
      color: string;
    }

    const particles: Particle[] = [];
    const colors = ["#00f5ff", "#7c3aed", "#10b981", "#f59e0b", "#ec4899"];
    const cx = canvas.width / 2;
    const cy = canvas.height / 2;

    for (let i = 0; i < 80; i++) {
      const angle = Math.random() * Math.PI * 2;
      const speed = Math.random() * 4 + 1;
      particles.push({
        x: cx,
        y: cy,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed,
        life: 1,
        maxLife: Math.random() * 80 + 40,
        radius: Math.random() * 3 + 1,
        color: colors[Math.floor(Math.random() * colors.length)],
      });
    }

    let frame = 0;
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      let alive = false;

      particles.forEach((p) => {
        if (p.life <= 0) return;
        alive = true;
        p.x += p.vx;
        p.y += p.vy;
        p.vy += 0.04;
        p.vx *= 0.99;
        p.life = Math.max(0, p.life - 1 / p.maxLife);

        ctx.save();
        ctx.globalAlpha = p.life;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.shadowBlur = 8;
        ctx.shadowColor = p.color;
        ctx.fill();
        ctx.restore();
      });

      frame++;
      if (alive && frame < 200) requestAnimationFrame(animate);
    };

    animate();
  }, [isActive]);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "absolute",
        inset: 0,
        width: "100%",
        height: "100%",
        pointerEvents: "none",
        zIndex: 1,
      }}
    />
  );
}

export default function ContactSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  const contactLinks = [
    {
      icon: "✉️",
      label: "Email",
      value: personalInfo.email,
      href: `mailto:${personalInfo.email}`,
      color: "#00f5ff",
    },
    {
      icon: "📞",
      label: "Phone",
      value: personalInfo.phone,
      href: `tel:${personalInfo.phone.replace(/\D/g, "")}`,
      color: "#7c3aed",
    },
    {
      icon: "🐙",
      label: "GitHub",
      value: "github.com/armanzareian",
      href: personalInfo.github,
      color: "#10b981",
    },
    {
      icon: "💼",
      label: "LinkedIn",
      value: "linkedin.com/in/armanzareian",
      href: personalInfo.linkedin,
      color: "#f59e0b",
    },
  ];

  return (
    <section
      id="contact"
      className="section"
      style={{ background: "rgba(5, 5, 15, 0.99)", zIndex: 5, position: "relative", overflow: "hidden" }}
      ref={ref}
    >
      {/* Particle burst */}
      <ParticleBurst isActive={isInView} />

      {/* Grid background */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          opacity: 0.04,
          backgroundImage:
            "linear-gradient(rgba(0,245,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(0,245,255,0.5) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div style={{ maxWidth: "52rem", width: "100%", margin: "0 auto", position: "relative", zIndex: 10 }}>
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          style={{ textAlign: "center", marginBottom: "3.5rem" }}
        >
          <p
            className="text-sm font-mono tracking-widest uppercase"
            style={{ color: "var(--accent-cyan)", marginBottom: "0.75rem" }}
          >
            07 / Contact
          </p>
          <h2
            className="font-black"
            style={{ fontSize: "clamp(2.25rem, 6vw, 4rem)", marginBottom: "1rem" }}
          >
            Let&apos;s{" "}
            <span className="gradient-text">Connect</span>
          </h2>
          <p style={{ fontSize: "1.0625rem", color: "var(--text-muted)", maxWidth: "28rem", margin: "0 auto" }}>
            Open to research collaborations, engineering roles, and interesting ML problems.
          </p>
        </motion.div>

        {/* Contact cards grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: "1rem",
            marginBottom: "2.5rem",
          }}
        >
          {contactLinks.map((link, i) => (
            <motion.a
              key={link.label}
              href={link.href}
              target={link.href.startsWith("http") ? "_blank" : undefined}
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="glass"
              style={{
                padding: "1.25rem",
                display: "flex",
                alignItems: "center",
                gap: "1rem",
                borderColor: `${link.color}30`,
                textDecoration: "none",
                transition: "transform 0.3s ease, box-shadow 0.3s ease",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.transform = "scale(1.03)";
                (e.currentTarget as HTMLElement).style.boxShadow = `0 8px 30px ${link.color}20`;
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.transform = "";
                (e.currentTarget as HTMLElement).style.boxShadow = "";
              }}
            >
              <div
                style={{
                  width: "3rem",
                  height: "3rem",
                  borderRadius: "0.75rem",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "1.25rem",
                  flexShrink: 0,
                  background: link.color + "15",
                  border: `1px solid ${link.color}40`,
                }}
              >
                {link.icon}
              </div>
              <div style={{ minWidth: 0 }}>
                <p
                  className="font-mono uppercase tracking-wider"
                  style={{ fontSize: "0.65rem", color: link.color, marginBottom: "2px" }}
                >
                  {link.label}
                </p>
                <p
                  className="font-medium text-white"
                  style={{
                    fontSize: "0.875rem",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    whiteSpace: "nowrap",
                  }}
                >
                  {link.value}
                </p>
              </div>
            </motion.a>
          ))}
        </div>

        {/* Location */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
          style={{ textAlign: "center" }}
        >
          <p style={{ fontSize: "0.875rem", color: "var(--text-muted)" }}>
            📍 {personalInfo.location} &nbsp;·&nbsp; Kansas State University
          </p>
        </motion.div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.7 }}
          style={{
            marginTop: "3rem",
            paddingTop: "1.5rem",
            textAlign: "center",
            borderTop: "1px solid var(--glass-border)",
          }}
        >
          <p className="font-mono" style={{ fontSize: "0.75rem", color: "var(--text-muted)" }}>
            Built with Next.js · Three.js · Framer Motion &nbsp;|&nbsp; Arman Zareian ©{" "}
            {new Date().getFullYear()}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
