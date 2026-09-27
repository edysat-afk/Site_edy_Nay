import { MapPin } from "lucide-react";
import { ctaFinal, whatsappLink } from "@/content/site";

export function CtaFinal() {
  return (
    <section className="relative overflow-hidden border-t border-border/70 py-28 md:py-36">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[400px] w-[600px] rounded-full bg-accent-blue/10 blur-[140px] pointer-events-none" />

      <div className="relative mx-auto max-w-[1550px] px-6 md:px-10 lg:px-12 text-center">
        <div className="mx-auto inline-flex items-center gap-2.5 rounded-full border border-accent/40 bg-accent/10 px-5 py-2 font-mono text-sm text-accent uppercase tracking-widest font-bold mb-7">
          <span className="h-2.5 w-2.5 rounded-full bg-accent animate-pulse" />
          ATENDIMENTO DIRETO AOS MUNICÍPIOS
        </div>

        <h2 className="mx-auto max-w-5xl font-display text-4xl font-extrabold leading-tight tracking-tight md:text-5xl lg:text-6xl">
          {ctaFinal.heading.map((part, i) => (
            <span
              key={i}
              className={
                part.accent
                  ? "bg-gradient-to-r from-accent via-accent-blue to-accent-lime bg-clip-text text-transparent glow-text-cyan"
                  : "text-text"
              }
            >
              {part.text}
            </span>
          ))}
        </h2>

        <p className="mx-auto mt-7 max-w-2xl text-lg text-text-muted md:text-xl leading-relaxed">
          {ctaFinal.texto}
        </p>

        <a
          href={whatsappLink(ctaFinal.botao.message)}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-10 inline-flex items-center gap-3.5 rounded-full bg-accent px-10 py-5 text-lg font-extrabold uppercase tracking-wider text-bg transition-all duration-300 hover:bg-accent-strong hover:shadow-[0_0_40px_rgba(0,242,254,0.6)] hover:scale-105"
        >
          <span>{ctaFinal.botao.label}</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2.5"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </a>

        <div className="mt-16 flex flex-col items-center gap-4 font-mono text-sm text-text-muted md:flex-row md:justify-center md:gap-8 border-t border-border/60 pt-9">
          {ctaFinal.contatos.map((contato) => (
            <span key={contato.nome} className="rounded-full border border-border/80 bg-bg-glass px-5 py-2.5 font-medium">
              <strong className="text-text font-bold">{contato.nome}</strong> — {contato.telefone} · {contato.email}
            </span>
          ))}
          <span className="flex items-center gap-1.5 rounded-full border border-border/80 bg-bg-glass px-5 py-2.5 font-bold text-accent">
            <MapPin className="h-3.5 w-3.5" aria-hidden="true" />
            {ctaFinal.localidade}
          </span>
        </div>
      </div>
    </section>
  );
}
