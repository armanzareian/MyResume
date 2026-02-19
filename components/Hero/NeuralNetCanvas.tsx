"use client";

import { useEffect, useRef } from "react";

interface Node {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  opacity: number;
}

export default function NeuralNetCanvas({
  scrollProgress = 0,
}: {
  scrollProgress?: number;
}) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const nodesRef = useRef<Node[]>([]);
  const animFrameRef = useRef<number>(0);
  const mouseRef = useRef({ x: -9999, y: -9999 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const onMouseMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
    };
    window.addEventListener("mousemove", onMouseMove);

    // Init nodes
    const count = Math.min(Math.floor((window.innerWidth * window.innerHeight) / 12000), 90);
    nodesRef.current = Array.from({ length: count }, () => ({
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      vx: (Math.random() - 0.5) * 0.4,
      vy: (Math.random() - 0.5) * 0.4,
      radius: Math.random() * 2 + 1,
      opacity: Math.random() * 0.5 + 0.3,
    }));

    const maxDist = 140;
    const mouseInfluence = 120;

    const draw = () => {
      if (!canvas || !ctx) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const fade = Math.max(0, 1 - scrollProgress * 2);
      if (fade <= 0) {
        animFrameRef.current = requestAnimationFrame(draw);
        return;
      }

      const nodes = nodesRef.current;
      const mx = mouseRef.current.x;
      const my = mouseRef.current.y;

      // Update positions
      nodes.forEach((node) => {
        node.x += node.vx;
        node.y += node.vy;

        // Bounce off edges
        if (node.x < 0 || node.x > canvas.width) node.vx *= -1;
        if (node.y < 0 || node.y > canvas.height) node.vy *= -1;

        // Mouse repulsion
        const dx = node.x - mx;
        const dy = node.y - my;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < mouseInfluence) {
          const force = (mouseInfluence - dist) / mouseInfluence;
          node.vx += (dx / dist) * force * 0.3;
          node.vy += (dy / dist) * force * 0.3;
          // Clamp speed
          const speed = Math.sqrt(node.vx * node.vx + node.vy * node.vy);
          if (speed > 2) {
            node.vx = (node.vx / speed) * 2;
            node.vy = (node.vy / speed) * 2;
          }
        } else {
          // Dampen
          node.vx *= 0.995;
          node.vy *= 0.995;
          // Restore drift
          if (Math.abs(node.vx) < 0.1) node.vx += (Math.random() - 0.5) * 0.05;
          if (Math.abs(node.vy) < 0.1) node.vy += (Math.random() - 0.5) * 0.05;
        }
      });

      // Draw edges
      nodes.forEach((a, i) => {
        nodes.slice(i + 1).forEach((b) => {
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < maxDist) {
            const alpha = ((1 - dist / maxDist) * 0.4 * fade);
            const grad = ctx.createLinearGradient(a.x, a.y, b.x, b.y);
            grad.addColorStop(0, `rgba(0, 245, 255, ${alpha})`);
            grad.addColorStop(1, `rgba(124, 58, 237, ${alpha})`);
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.strokeStyle = grad;
            ctx.lineWidth = 0.8;
            ctx.stroke();
          }
        });
      });

      // Draw nodes
      nodes.forEach((node) => {
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(0, 245, 255, ${node.opacity * fade})`;
        ctx.fill();

        // Glow
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.radius * 2.5, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(0, 245, 255, ${node.opacity * 0.08 * fade})`;
        ctx.fill();
      });

      animFrameRef.current = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", onMouseMove);
      cancelAnimationFrame(animFrameRef.current);
    };
  }, []);

  // Update scroll-driven fade via canvas opacity (handled in draw)
  useEffect(() => {
    // scrollProgress is read per frame from closure via prop — no action needed
  }, [scrollProgress]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none"
      style={{ zIndex: 1, opacity: Math.max(0, 1 - scrollProgress * 2.5) }}
    />
  );
}
