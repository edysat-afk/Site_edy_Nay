"use client";

import { FileText } from "lucide-react";
import { servicos, whatsappLink } from "@/content/site";
import { useReveal } from "@/lib/useReveal";
import { SectionHeading } from "./SectionHeading";

export function ServicosGrid() {
  return (
    <section id="servicos" className="relative py-28 md:py-36 border-t border-border/70">
      <div className="mx-auto max-w-[1450px] px-6 md:px-10 lg:px-12">
        <SectionHeading
          eyebrow={servicos.eyebrow}
          titulo={servicos.titulo}
          intro={servicos.intro}
        />

        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {servicos.itens.map((item, i) => (
            <ServiceCardItem key={item.numero} item={item} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ServiceCardItem({
  item,
  index,
}: {
  item: (typeof servicos.itens)[number];
  index: number;
}) {
  const [ref, visible] = useReveal<HTMLDivElement>();

  return (
    <div
      ref={ref}
      className={`reveal ${visible ? "is-visible" : ""} glass-panel glass-panel-hover group relative flex flex-col justify-between overflow-hidden rounded-2xl p-8`}
      style={{ transitionDelay: `${index * 80}ms` }}
    >
      {/* Top Accent Gradient Line */}
      <div className="absolute top-0 left-0 h-1.5 w-full bg-gradient-to-r from-accent via-accent-blue to-accent-lime opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

      <div>
        {/* Card Header: Mono Number + Badge */}
        <div className="flex items-center justify-between">
          <span className="font-mono text-5xl font-extrabold text-accent bg-gradient-to-r from-accent to-accent-blue bg-clip-text text-transparent">
            {item.numero}
          </span>
          <span className="rounded-full border border-accent/30 bg-accent/10 px-3.5 py-1 font-mono text-xs font-bold text-accent uppercase">
            {item.badge}
          </span>
        </div>

        {/* Title & Subtitle */}
        <h3 className="mt-6 font-display text-2xl font-extrabold text-text transition-colors group-hover:text-accent">
          {item.titulo}
        </h3>
        <p className="mt-1 font-mono text-xs font-semibold text-accent-blue">{item.sub}</p>

        <p className="mt-4 text-base leading-relaxed text-text-muted">{item.texto}</p>

        {/* Artefacts & Deliverables List */}
        <div className="mt-6 rounded-xl border border-border/80 bg-bg/80 p-5">
          <p className="mb-3 flex items-center gap-1.5 font-mono text-xs font-bold uppercase text-accent">
            <FileText className="h-3.5 w-3.5" aria-hidden="true" />
            Entregáveis &amp; artefatos:
          </p>
          <ul className="space-y-2 font-mono text-xs text-text">
            {item.artefatos.map((art) => (
              <li key={art} className="flex items-start gap-2">
                <span className="text-accent font-bold">✓</span>
                <span>{art}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Card Action Button */}
      <div className="mt-8 border-t border-border/60 pt-5">
        <a
          href={whatsappLink(`Olá, N&E! Quero solicitar um orçamento para a frente de ${item.titulo}.`)}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex w-full items-center justify-between rounded-xl border border-accent/40 bg-accent/10 px-5 py-3 font-mono text-xs font-bold uppercase tracking-wider text-accent transition-all duration-300 group-hover:bg-accent group-hover:text-bg group-hover:shadow-[0_0_20px_rgba(0,242,254,0.4)]"
        >
          <span>Solicitar orçamento</span>
          <span aria-hidden="true">→</span>
        </a>
      </div>
    </div>
  );
}
