# DESIGN.md — Direção visual

Direção comprometida: **"Engenharia pública moderna"** — estúdio digital
escuro e técnico (referência de *sensação*: zkode.com.br), mas com a
sobriedade que o setor público exige. Moderno o bastante para o cliente
ver que a empresa domina tecnologia; sério o bastante para um secretário
mostrar ao jurídico sem constrangimento.

> Referência é sensação, não cópia: nenhum layout, texto ou identidade da
> Zkode deve ser reproduzido.

## 1. Fundamentos

- Tema escuro como base, com UMA seção clara de respiro ("Quem somos").
- Tipografia grande e confiante no hero; números e rótulos em monospace
  (estética de "engenharia/dado público").
- Nada de foto de banco de imagens genérica. Ilustração = tipografia,
  numeração, linhas e dados.
- Uma página, âncoras suaves, nav fixa que ganha fundo ao rolar.

## 2. Tokens

### Cor (dark base)

| Token            | Valor                  | Uso                                    |
| ---------------- | ---------------------- | -------------------------------------- |
| `bg`             | `#0C1311`              | Fundo global (grafite esverdeado, nunca preto puro) |
| `bg-elevated`    | `#111A17`              | Cards, superfícies                     |
| `bg-light`       | `#F4F2EA`              | Seção clara "Quem somos"               |
| `border`         | `#233129`              | Bordas 1px                             |
| `text`           | `#EFEEE6`              | Texto principal sobre escuro           |
| `text-muted`     | `#A3AFA6`              | Texto secundário (verificar 4.5:1)     |
| `text-on-light`  | `#17211D`              | Texto na seção clara                   |
| `accent`         | `#B7E96B`              | Verde-lima: CTAs, destaques, números-chave |
| `accent-strong`  | `#93C93F`              | Hover/estados do accent                |
| `accent-2`       | `#E5B26B`              | Âmbar: detalhes raros (tags, sublinhas) |

Regras: texto sobre `accent` é sempre `#0C1311` (nunca branco sobre lima).
Cinzas sempre atintados de verde, nunca neutros puros. Sem gradientes
roxo/azul; se houver gradiente, é do próprio fundo (`#0C1311 → #101915`),
quase imperceptível.

### Tipografia (Google Fonts, via `next/font`)

| Papel     | Fonte              | Uso                                              |
| --------- | ------------------ | ------------------------------------------------ |
| Display   | **Space Grotesk**  | h1–h3, números grandes. h1: 56–72px desktop, tracking levemente negativo |
| Texto     | **Instrument Sans**| Corpo 16–18px, line-height 1.6–1.7               |
| Mono      | **IBM Plex Mono**  | Eyebrows/rótulos (12–13px, uppercase, tracking +0.08em), numeração 01–06, valores legais, badges |

Proibido: Inter, Roboto, Arial, system-ui como identidade.

### Espaço, raio, grid

- Escala de 8px; seções com `py` 112–144px desktop / 72–88px mobile.
- Container `max-w-[1200px]`, gutter 24px.
- Raio: 12px cards, 10px botões, 999px pills. Sombra: quase nenhuma —
  profundidade vem de borda + variação de fundo.

## 3. Componentes-chave

- **Nav fixa**: transparente no topo; ao rolar, fundo `bg/90` com blur e
  borda inferior. Logo wordmark "N&E" (o "&" em `accent`).
  CTA "Solicitar proposta" em pill lima.
- **Hero**: eyebrow mono ("FORNECEDORES DA ADMINISTRAÇÃO PÚBLICA ·
  LEI 14.133/2021"), h1 em duas linhas com uma palavra em `accent`,
  parágrafo curto, 2 CTAs, e uma **linha de stats mono** no rodapé do
  hero: `R$ 65.492,11 — limite por contratação (2026)` ·
  `06 — frentes de serviço` · `[PRAZO_PROPOSTA] — proposta formal`.
- **Cards de serviço (06)**: numeração mono grande (`01`…`06`) no lugar
  de ícones em tile; título display; texto muted; hover = borda `accent`
  + leve translate. Grid 3×2 → 2×3 → 1 col.
- **Processo (4 passos)**: linha horizontal conectando etapas numeradas
  (vertical no mobile). É a seção que "vende a legalidade": cada passo
  menciona o artefato real (proposta formal, certidões, dispensa
  art. 75 II, publicação no PNCP).
- **Quem somos (seção clara)**: dois perfis lado a lado, avatar de
  iniciais (ou foto), credenciais em pills mono. O contraste
  escuro→claro marca "aqui são as pessoas".
- **IA na prática**: pipeline horizontal de 5 nós (vertical no mobile),
  conectados por uma linha mono fina (`border`); cada nó = numeração
  mono + rótulo curto sobre `bg-elevated`; nó ativo/atual em destaque
  usa borda `accent` (sem preenchimento sólido lima, para não competir
  com os CTAs). Nota de governança abaixo em `text-muted`, tamanho menor.
- **FAQ**: acordeões nativos (`<details>` estilizado), 5–7 perguntas de
  gestor público (ver CONTENT.md).
- **CTA final**: h2 grande, botão WhatsApp em lima, microcopy de
  compromisso realista.
- **Footer**: wordmark, âncoras, `[RAZAO_SOCIAL]` · CNPJ `[CNPJ]`,
  referência à Lei 14.133/2021.

## 4. Movimento

- Reveal on scroll: fade + translateY(16px), 350–500ms,
  `cubic-bezier(0.22, 1, 0.36, 1)`, stagger de 60–80ms em grids. Uma vez
  só (sem repetir ao rolar de volta).
- Hover de cards/botões: 150–200ms ease-out. Âncoras com scroll suave.
- Proibido: bounce/elastic, parallax pesado, contadores animados,
  partículas, cursor customizado.
- Respeitar `prefers-reduced-motion` (tudo vira estático).

## 5. Anti-padrões (alinhado à skill Impeccable)

- Sem Inter/Arial/system como identidade; sem gradiente roxo-azul.
- Sem card dentro de card; sem tile arredondado com ícone acima de cada
  título (a numeração mono cumpre esse papel).
- Sem texto cinza-neutro sobre fundo colorido; sem preto/cinza puros.
- Sem stock photo de "prédio público" ou "aperto de mãos"; sem emoji na UI.
- Contraste AA: 4.5:1 no corpo, 3:1 em display ≥24px. Alvos de toque ≥44px.
