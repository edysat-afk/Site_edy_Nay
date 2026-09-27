"use client";

import { useEffect, useState } from "react";
import { heroSlides, hero, whatsappLink } from "@/content/site";
import { AiArchitectureDiagram } from "@/components/ui/AiArchitectureDiagram";

export function HeroCarousel() {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setCurrentIdx((prev) => (prev + 1) % heroSlides.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [isPaused]);

  const slide = heroSlides[currentIdx];

  return (
    <section
      id="top"
      className="relative overflow-hidden pt-36 pb-24 md:pt-44 md:pb-32"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="mx-auto max-w-[1450px] px-6 md:px-10 lg:px-12 relative">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 xl:gap-16">
          {/* Left Column: Carousel Slide Content */}
          <div className="lg:col-span-6 xl:col-span-7 transition-all duration-500 min-h-[440px] flex flex-col justify-center">
            {/* Slide Eyebrow Badge & Sector Tag */}
            <div className="flex items-center gap-3">
              <div className="inline-flex items-center gap-2.5 rounded-full border border-accent/40 bg-accent/10 px-5 py-2 backdrop-blur-md">
                <span className="h-2.5 w-2.5 rounded-full bg-accent animate-pulse" />
                <span className="font-mono text-sm font-bold uppercase tracking-wider text-accent">
                  {slide.eyebrow}
                </span>
              </div>
              <span className="rounded-full border border-accent-lime/40 bg-accent-lime/10 px-3.5 py-1.5 font-mono text-xs font-bold text-accent-lime uppercase tracking-wider">
                {slide.badge}
              </span>
            </div>

            {/* Slide H1 Headline */}
            <h1 className="mt-7 font-display text-4xl font-extrabold leading-[1.12] tracking-tight text-text sm:text-5xl md:text-6xl xl:text-[66px]">
              {slide.heading.map((part, i) => (
                <span
                  key={i}
                  className={
                    part.accent
                      ? "bg-gradient-to-r from-accent via-accent-blue to-accent-lime bg-clip-text text-transparent glow-text-cyan"
                      : undefined
                  }
                >
                  {part.text}
                </span>
              ))}
            </h1>

            {/* Slide Paragraph */}
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-text-muted sm:text-xl">
              {slide.paragraph}
            </p>

            {/* Slide Bullet Features List */}
            <ul className="mt-7 space-y-2.5 font-mono text-xs md:text-sm text-text">
              {slide.bullets.map((bullet, idx) => (
                <li key={idx} className="flex items-center gap-3">
                  <span className="flex h-5.5 w-5.5 items-center justify-center rounded-full bg-accent/20 text-xs font-bold text-accent">
                    ✓
                  </span>
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>

            {/* Slide CTAs */}
            <div className="mt-9 flex flex-wrap items-center gap-5">
              <a
                href={whatsappLink(slide.ctaPrimary.message)}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative inline-flex items-center gap-3.5 overflow-hidden rounded-full bg-accent px-8 py-4 text-base font-extrabold uppercase tracking-wider text-bg transition-all duration-300 hover:bg-accent-strong hover:shadow-[0_0_35px_rgba(0,242,254,0.5)] hover:scale-105"
              >
                <span>{slide.ctaPrimary.label}</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 transition-transform group-hover:translate-x-1.5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2.5"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>

              <a
                href={slide.ctaSecondary.href}
                className="rounded-full border border-border bg-bg-elevated/70 px-7 py-4 text-base font-bold text-text transition-all duration-300 hover:border-accent hover:bg-bg-elevated hover:text-accent"
              >
                {slide.ctaSecondary.label}
              </a>
            </div>
          </div>

          {/* Right Column: AI Architecture Interactive Diagram */}
          <div className="lg:col-span-6 xl:col-span-5 relative">
            <AiArchitectureDiagram />

            {/* Selbetti-Style Right Vertical Indicator Dots */}
            <div className="absolute -right-6 top-1/2 -translate-y-1/2 hidden xl:flex flex-col gap-3">
              {heroSlides.map((s, idx) => {
                const isActive = idx === currentIdx;
                return (
                  <button
                    key={s.id}
                    onClick={() => setCurrentIdx(idx)}
                    aria-label={`Ir para slide ${idx + 1}`}
                    className={`transition-all duration-300 rounded-full ${
                      isActive
                        ? "h-8 w-2.5 bg-accent shadow-[0_0_12px_rgba(0,242,254,0.8)]"
                        : "h-2.5 w-2.5 bg-border hover:bg-text-muted"
                    }`}
                  />
                );
              })}
            </div>
          </div>
        </div>

        {/* Bottom Slide Controls & Progress Indicators (Mobile / Tablet / Widescreen) */}
        <div className="mt-12 flex items-center justify-between border-t border-border/70 pt-8">
          {/* Stats Bar */}
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-3 flex-1 mr-8">
            {hero.stats.map((stat) => (
              <div
                key={stat.label}
                className="glass-panel glass-panel-hover rounded-2xl p-5"
              >
                <p className="font-mono text-2xl font-extrabold text-accent md:text-3xl">
                  {stat.value}
                </p>
                <p className="mt-1 text-xs font-medium text-text-muted">{stat.label}</p>
              </div>
            ))}
          </div>

          {/* Slide Switcher Controls */}
          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={() => setCurrentIdx((prev) => (prev === 0 ? heroSlides.length - 1 : prev - 1))}
              className="flex h-11 w-11 items-center justify-center rounded-xl border border-border bg-bg-elevated font-mono text-lg font-bold text-text transition-colors hover:border-accent hover:text-accent"
              aria-label="Slide anterior"
            >
              ‹
            </button>

            <span className="font-mono text-xs font-bold text-accent">
              0{currentIdx + 1} / 0{heroSlides.length}
            </span>

            <button
              onClick={() => setCurrentIdx((prev) => (prev + 1) % heroSlides.length)}
              className="flex h-11 w-11 items-center justify-center rounded-xl border border-border bg-bg-elevated font-mono text-lg font-bold text-text transition-colors hover:border-accent hover:text-accent"
              aria-label="Próximo slide"
            >
              ›
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
