"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { nav, whatsappLink } from "@/content/site";

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-border/80 bg-bg-glass backdrop-blur-xl shadow-lg shadow-black/40 py-4"
          : "bg-transparent py-5"
      }`}
    >
      <div className="mx-auto flex max-w-[1450px] items-center justify-between px-6 md:px-10 lg:px-12">
        {/* Brand Logo */}
        <a href="#top" className="group flex flex-col leading-none">
          <span className="font-display text-2xl font-extrabold tracking-tight text-text">
            N<span className="text-accent group-hover:text-accent-strong transition-colors">&amp;</span>E
          </span>
          <span className="mt-1 font-mono text-xs font-bold uppercase tracking-[0.12em] text-text-muted">
            {nav.sub}
          </span>
        </a>

        {/* Desktop Nav Anchors */}
        <nav className="hidden items-center gap-9 lg:flex" aria-label="Seções da página">
          {nav.links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-base font-semibold text-text-muted transition-colors hover:text-accent"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Right CTA Button & Mobile Trigger */}
        <div className="flex items-center gap-4">
          <a
            href={whatsappLink(nav.ctaMessage)}
            target="_blank"
            rel="noopener noreferrer"
            className="relative inline-flex items-center gap-2.5 overflow-hidden rounded-full bg-accent px-6 py-3 text-sm font-bold uppercase tracking-wider text-bg transition-all duration-300 hover:bg-accent-strong hover:shadow-[0_0_25px_rgba(0,242,254,0.5)] hover:scale-105"
          >
            <span className="h-2.5 w-2.5 rounded-full bg-bg animate-ping" />
            {nav.ctaLabel}
          </a>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="flex h-11 w-11 items-center justify-center rounded-xl border border-border bg-bg-elevated text-accent lg:hidden"
            aria-label={mobileMenuOpen ? "Fechar menu" : "Abrir menu"}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <nav className="border-t border-border/70 bg-bg-elevated/95 p-6 backdrop-blur-2xl lg:hidden">
          <ul className="flex flex-col gap-4 font-mono text-base font-semibold">
            {nav.links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block text-text-muted hover:text-accent"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
