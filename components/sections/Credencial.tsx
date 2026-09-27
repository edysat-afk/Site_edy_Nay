import { credencial } from "@/content/site";

export function Credencial() {
  return (
    <section className="relative z-10 border-y border-border/80 bg-bg-elevated/70 py-16 backdrop-blur-xl">
      <div className="mx-auto max-w-[1550px] px-6 md:px-10 lg:px-12">
        <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-4 shrink-0">
            <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-accent/10 font-mono text-xl font-bold text-accent border border-accent/40">
              ⚡
            </span>
            <span className="font-mono text-sm font-bold uppercase tracking-widest text-accent">
              DIFERENCIAL ESTRATÉGICO
            </span>
          </div>

          <p className="max-w-5xl font-display text-2xl font-semibold leading-relaxed text-text md:text-3xl">
            &ldquo;{credencial.texto}&rdquo;
          </p>
        </div>
      </div>
    </section>
  );
}
