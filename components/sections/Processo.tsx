"use client";

import { processo } from "@/content/site";
import { useReveal } from "@/lib/useReveal";
import { SectionHeading } from "./SectionHeading";

const ARTEFATOS = [
  "Proposta Formal + Escopo",
  "CNPJ + Certidões Negativas",
  "Dispensa Art. 75 II + PNCP",
  "Relatórios + Termo de Entrega",
];

export function Processo() {
  return (
    <section id="processo" className="relative border-t border-border/70 py-28 md:py-36">
      <div className="mx-auto max-w-[1550px] px-6 md:px-10 lg:px-12">
        <SectionHeading
          eyebrow={processo.eyebrow}
          titulo={processo.titulo}
          intro={processo.intro}
        />

        <ol className="relative mt-20 grid grid-cols-1 gap-8 md:grid-cols-4 md:gap-6">
          {/* Animated Connecting Line */}
          <div
            className="absolute top-8 left-0 hidden h-1 w-full bg-gradient-to-r from-accent via-accent-blue to-accent-purple opacity-40 md:block"
            aria-hidden="true"
          />

          {processo.passos.map((passo, i) => (
            <PassoItem
              key={passo.numero}
              passo={passo}
              index={i}
              artefato={ARTEFATOS[i]}
            />
          ))}
        </ol>
      </div>
    </section>
  );
}

function PassoItem({
  passo,
  index,
  artefato,
}: {
  passo: (typeof processo.passos)[number];
  index: number;
  artefato: string;
}) {
  const [ref, visible] = useReveal<HTMLLIElement>();

  return (
    <li
      ref={ref}
      className={`reveal ${visible ? "is-visible" : ""} glass-panel glass-panel-hover relative flex flex-col justify-between rounded-2xl p-7`}
      style={{ transitionDelay: `${index * 90}ms` }}
    >
      <div>
        <div className="relative z-10 flex h-16 w-16 items-center justify-center rounded-2xl border border-accent/50 bg-bg-glass font-mono text-lg font-extrabold text-accent shadow-[0_0_20px_rgba(0,242,254,0.25)]">
          {passo.numero}
        </div>

        <h3 className="mt-7 font-display text-xl font-bold text-text">
          {passo.titulo}
        </h3>

        <p className="mt-3 text-base leading-relaxed text-text-muted">{passo.texto}</p>
      </div>

      <div className="mt-8 rounded-xl border border-accent/30 bg-accent/10 p-3.5 text-center font-mono text-xs text-accent font-semibold">
        <span className="block text-[11px] uppercase tracking-wider text-text-muted mb-0.5">ARTEFATO GERADO</span>
        <span className="font-bold text-sm">{artefato}</span>
      </div>
    </li>
  );
}
