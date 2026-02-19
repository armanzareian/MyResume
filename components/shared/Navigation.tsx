"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Research", href: "#research" },
  { label: "Education", href: "#education" },
  { label: "Publications", href: "#publications" },
  { label: "Contact", href: "#contact" },
];

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50);

      // Track active section
      const sections = navLinks.map((l) => l.href.slice(1));
      for (const id of [...sections].reverse()) {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 200) {
          setActiveSection(id);
          break;
        }
      }
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.5 }}
      style={{
        background: scrolled ? "rgba(5,5,15,0.95)" : "rgba(5,5,15,0.6)",
        borderBottomColor: scrolled ? "rgba(0,245,255,0.1)" : "transparent",
        transition: "all 0.3s ease",
      }}
    >
      {/* Logo */}
      <a
        href="#hero"
        className="text-base font-black tracking-tight"
        style={{
          background: "linear-gradient(135deg, #00f5ff, #7c3aed)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          backgroundClip: "text",
        }}
      >
        AZ
      </a>

      {/* Desktop links */}
      <div className="hidden md:flex gap-6">
        {navLinks.map((link) => {
          const id = link.href.slice(1);
          const isActive = activeSection === id;
          return (
            <a
              key={link.label}
              href={link.href}
              className="px-3 py-1.5 text-sm font-medium rounded-lg transition-all duration-200"
              style={{
                color: isActive ? "#00f5ff" : "rgba(148,163,184,0.8)",
                background: isActive ? "rgba(0,245,255,0.08)" : "transparent",
              }}
            >
              {link.label}
            </a>
          );
        })}
      </div>

      {/* Hamburger */}
      <button
        className="md:hidden flex flex-col gap-1 p-1"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle menu"
      >
        {[0, 1, 2].map((i) => (
          <span
            key={i}
            className="block w-5 h-0.5 transition-all duration-300"
            style={{
              background: "#00f5ff",
              transform:
                menuOpen
                  ? i === 0
                    ? "rotate(45deg) translate(3px, 3px)"
                    : i === 2
                    ? "rotate(-45deg) translate(3px, -3px)"
                    : "scale(0)"
                  : "none",
            }}
          />
        ))}
      </button>

      {/* Mobile menu */}
      {menuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute top-full left-0 right-0 md:hidden py-4 px-6 flex flex-col gap-2"
          style={{
            background: "rgba(5,5,15,0.98)",
            borderBottom: "1px solid rgba(0,245,255,0.1)",
          }}
        >
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="py-2 text-sm font-medium"
              style={{ color: "var(--text-muted)" }}
            >
              {link.label}
            </a>
          ))}
        </motion.div>
      )}
    </motion.nav>
  );
}
