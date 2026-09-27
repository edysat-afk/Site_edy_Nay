import { faq } from "@/content/site";
import { SectionHeading } from "./SectionHeading";

export function Faq() {
  return (
    <section id="faq" className="relative border-t border-border/70 py-28 md:py-36">
      <div className="mx-auto max-w-[1550px] px-6 md:px-10 lg:px-12">
        <SectionHeading eyebrow={faq.eyebrow} titulo={faq.titulo} />

        <div className="mt-16 max-w-5xl space-y-4">
          {faq.itens.map((item) => (
            <details
              key={item.pergunta}
              className="glass-panel glass-panel-hover group rounded-2xl p-7 transition-all duration-300"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-5 font-display text-xl font-bold text-text [&::-webkit-details-marker]:hidden">
                <span>{item.pergunta}</span>
                <span className="flex h-9 w-9 items-center justify-center rounded-full border border-accent/50 bg-accent/15 font-mono text-lg font-extrabold text-accent transition-transform duration-300 group-open:rotate-45 shrink-0">
                  +
                </span>
              </summary>

              <p className="mt-5 border-t border-border/60 pt-5 text-base leading-relaxed text-text-muted md:text-lg font-medium">
                {item.resposta}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
