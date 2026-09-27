# CLAUDE.md — Instruções do projeto

Site institucional one-page da N&E Consultoria Empresarial & Tecnologia.
Leia `PRODUCT.md` (o quê e
para quem), `DESIGN.md` (como deve parecer) e `CONTENT.md` (o texto
exato) antes de qualquer código. Em conflito, esta ordem vence:
PRODUCT > CONTENT > DESIGN > este arquivo.

## Stack

- **Next.js (App Router) + TypeScript + Tailwind CSS** — deploy na Vercel.
- Fontes via `next/font/google`: Space Grotesk, Instrument Sans,
  IBM Plex Mono (ver DESIGN.md).
- Ícones: `lucide-react`, uso mínimo (a numeração mono substitui ícones
  nos cards de serviço).
- Sem CMS, sem backend, sem banco na v1. CTA = links `wa.me`.
- Sem bibliotecas de animação pesadas; reveal on scroll com
  IntersectionObserver ou CSS. Respeitar `prefers-reduced-motion`.

## Estrutura

- Página única `app/page.tsx`; uma pasta `components/sections/` com um
  componente por seção (Nav, Hero, Credencial, Servicos, Processo, IA,
  QuemSomos, Faq, CtaFinal, Footer).
- Tokens do DESIGN.md declarados como CSS variables no `globals.css` e
  mapeados no Tailwind (`theme.extend.colors` etc.). Nunca hex solto em
  componente.
- Conteúdo textual centralizado em `content/site.ts` (tipado), espelhando
  CONTENT.md — nada de string de copy dentro de JSX.
- Metadados/SEO no `app/layout.tsx` conforme CONTENT.md §0, com
  `lang="pt-BR"`, Open Graph e sitemap/robots.

## Qualidade (critério de pronto)

- Responsivo: 360px, 768px, 1024px, 1440px sem quebra.
- Acessibilidade AA: contraste 4.5:1 no corpo, foco visível, âncoras
  navegáveis por teclado, `aria-label` em botões só-ícone, FAQ com
  `<details>/<summary>` semânticos.
- Lighthouse ≥ 90 em Performance, A11y, Best Practices e SEO.
- Placeholders `[WHATSAPP]`, `[RAZAO_SOCIAL]`, `[CNPJ]`, `[DOMINIO]`,
  `[PRAZO_PROPOSTA]` ficam visíveis e fáceis de localizar (uma constante
  única em `content/site.ts`), nunca substituídos por valores inventados.
- Nenhum dado, número ou depoimento que não esteja em PRODUCT.md.

## Fluxo com a skill Impeccable

1. `npx impeccable install` já foi (ou será) executado na raiz.
2. `/impeccable init` deve reutilizar o `PRODUCT.md` deste repositório.
3. Ao terminar cada seção: `/impeccable critique <seção>`.
4. Antes do deploy: `/impeccable audit` e `/impeccable polish`.
5. Os anti-padrões do DESIGN.md §5 são bloqueantes — se o detector da
   Impeccable apontar algum, corrigir antes de seguir.

<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->
