import { nav, footer, PLACEHOLDERS } from "@/content/site";

export function Footer() {
  return (
    <footer className="relative border-t border-border/80 bg-bg-glass py-14 backdrop-blur-xl">
      <div className="mx-auto flex max-w-[1550px] flex-col gap-6 px-6 md:px-10 lg:px-12 text-sm text-text-muted md:flex-row md:items-center md:justify-between">
        <div>
          <p className="font-display text-xl font-bold text-text">
            N<span className="text-accent">&amp;</span>E — Consultoria Empresarial &amp; Tecnologia
          </p>
          <p className="mt-1.5 font-mono text-xs font-semibold">
            {PLACEHOLDERS.RAZAO_SOCIAL} · CNPJ {PLACEHOLDERS.CNPJ}
          </p>
        </div>

        <nav className="flex flex-wrap gap-x-7 gap-y-2.5" aria-label="Âncoras das seções">
          {nav.links.map((link) => (
            <a key={link.href} href={link.href} className="text-sm font-semibold hover:text-accent transition-colors">
              {link.label}
            </a>
          ))}
        </nav>

        <div className="font-mono text-xs text-text-muted">
          <p className="text-accent font-semibold">{footer.linhaLegal}</p>
          <p className="mt-1 font-medium">© {footer.ano} N&amp;E. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
