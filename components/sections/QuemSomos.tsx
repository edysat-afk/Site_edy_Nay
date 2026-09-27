import { quemSomos } from "@/content/site";
import { SectionHeading } from "./SectionHeading";

export function QuemSomos() {
  return (
    <section id="quem-somos" className="relative border-t border-border/70 py-28 md:py-36">
      <div className="mx-auto max-w-[1550px] px-6 md:px-10 lg:px-12">
        <SectionHeading eyebrow={quemSomos.eyebrow} titulo={quemSomos.intro} />

        <div className="mt-16 grid grid-cols-1 gap-10 md:grid-cols-2 md:gap-8">
          {quemSomos.perfis.map((perfil) => (
            <article
              key={perfil.nome}
              className="glass-panel glass-panel-hover group relative overflow-hidden rounded-2xl p-9 flex flex-col justify-between"
            >
              {/* Top accent glowing line on hover */}
              <div className="absolute top-0 left-0 h-1.5 w-full bg-gradient-to-r from-accent via-accent-blue to-accent-lime opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

              <div>
                <div className="flex items-center gap-5">
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-accent/40 bg-accent/10 font-mono text-2xl font-extrabold text-accent shadow-[0_0_20px_rgba(0,242,254,0.2)] transition-transform group-hover:scale-105 shrink-0">
                    {iniciais(perfil.nome)}
                  </div>
                  <div>
                    <h3 className="font-display text-2xl font-extrabold text-text md:text-3xl transition-colors group-hover:text-accent">
                      {perfil.nome}
                    </h3>
                    <p className="mt-1 font-mono text-xs uppercase tracking-wider text-accent font-bold">
                      {perfil.cargo}
                    </p>
                  </div>
                </div>

                <p className="mt-7 text-base leading-relaxed text-text-muted font-medium">
                  {perfil.bio}
                </p>
              </div>

              <ul className="mt-8 flex flex-wrap gap-2.5 pt-6 border-t border-border/60">
                {perfil.pills.map((pill) => (
                  <li
                    key={pill}
                    className="rounded-full border border-accent/30 bg-accent/10 px-4 py-1.5 font-mono text-xs uppercase tracking-wider font-bold text-accent"
                  >
                    {pill}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function iniciais(nome: string): string {
  const partes = nome.split(" ");
  return `${partes[0][0]}${partes[partes.length - 1][0]}`.toUpperCase();
}
