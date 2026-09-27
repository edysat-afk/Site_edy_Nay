"use client";

import { useEffect, useRef } from "react";

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  alpha: number;
  color: string;
}

export function AiBackgroundCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", handleResize);

    // Color palette for AI nodes
    const colors = ["#00F2FE", "#4C82FF", "#B7E96B", "#B060F5"];

    const particleCount = Math.min(Math.floor((width * height) / 22000), 55);
    const particles: Particle[] = [];

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.45,
        vy: (Math.random() - 0.5) * 0.45,
        radius: Math.random() * 1.6 + 0.8,
        alpha: Math.random() * 0.5 + 0.25,
        color: colors[Math.floor(Math.random() * colors.length)],
      });
    }

    let mouseX = width / 2;
    let mouseY = height / 2;
    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };
    window.addEventListener("mousemove", handleMouseMove, { passive: true });

    const draw = () => {
      ctx.clearRect(0, 0, width, height);

      // Draw subtle grid overlay
      ctx.strokeStyle = "rgba(255, 255, 255, 0.018)";
      ctx.lineWidth = 1;
      const gridSize = 60;
      for (let x = 0; x < width; x += gridSize) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
        ctx.stroke();
      }
      for (let y = 0; y < height; y += gridSize) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
        ctx.stroke();
      }

      // Update & render particles
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;
        if (p.y < 0) p.y = height;
        if (p.y > height) p.y = 0;

        // Draw particle node
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.globalAlpha = p.alpha;
        ctx.shadowBlur = 8;
        ctx.shadowColor = p.color;
        ctx.fill();
        ctx.shadowBlur = 0;
        ctx.globalAlpha = 1;

        // Connect nearby nodes
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dx = p.x - p2.x;
          const dy = p.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          const maxDist = 140;

          if (dist < maxDist) {
            const alpha = (1 - dist / maxDist) * 0.18;
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = p.color;
            ctx.globalAlpha = alpha;
            ctx.lineWidth = 0.8;
            ctx.stroke();
            ctx.globalAlpha = 1;
          }
        }

        // Connection to mouse
        const mdx = p.x - mouseX;
        const mdy = p.y - mouseY;
        const mdist = Math.sqrt(mdx * mdx + mdy * mdy);
        if (mdist < 180) {
          const mAlpha = (1 - mdist / 180) * 0.35;
          ctx.beginPath();
          ctx.moveTo(p.x, p.y);
          ctx.lineTo(mouseX, mouseY);
          ctx.strokeStyle = "#00F2FE";
          ctx.globalAlpha = mAlpha;
          ctx.lineWidth = 1;
          ctx.stroke();
          ctx.globalAlpha = 1;
        }
      }

      animationFrameId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden" aria-hidden="true">
      <canvas ref={canvasRef} className="absolute inset-0 h-full w-full opacity-70" />
      {/* Radial ambient glow gradients */}
      <div className="absolute -top-40 left-1/4 h-[500px] w-[500px] rounded-full bg-accent-blue/10 blur-[130px] animate-pulse-glow" />
      <div className="absolute top-1/3 -right-40 h-[600px] w-[600px] rounded-full bg-accent/10 blur-[150px] animate-pulse-glow" style={{ animationDelay: "2s" }} />
      <div className="absolute bottom-10 left-1/3 h-[500px] w-[500px] rounded-full bg-accent-purple/10 blur-[140px] animate-pulse-glow" style={{ animationDelay: "1s" }} />
    </div>
  );
}
