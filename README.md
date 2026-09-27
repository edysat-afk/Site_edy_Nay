# Site N&E — Pacote de documentação

Documentação completa para construir o site institucional da N&E
Consultoria Empresarial & Tecnologia (consultoria e serviços para
prefeituras) usando **Claude Code no VS Code**
com a skill **Impeccable**.

## O que tem aqui

| Arquivo      | Papel                                                                 |
| ------------ | --------------------------------------------------------------------- |
| `PRODUCT.md` | A "verdade do produto": público, propósito, voz, restrições. É o formato que o `/impeccable init` usa. |
| `DESIGN.md`  | Direção visual: tokens, tipografia, componentes, movimento, anti-padrões. |
| `CONTENT.md` | Todo o texto do site, seção por seção, em pt-BR, pronto para colar.    |
| `CLAUDE.md`  | Instruções de projeto para o Claude Code: stack, convenções, qualidade. |

## Passo a passo (VS Code + Claude Code)

1. **Crie a pasta do projeto** e copie estes 4 arquivos para a raiz dela.
2. **Abra no VS Code** com a extensão Claude Code instalada.
3. **Instale a Impeccable** na raiz do projeto:
   ```bash
   npx impeccable install
   ```
   (alternativa, dentro do Claude Code: `/plugin marketplace add pbakaus/impeccable`
   e depois instalar pelo `/plugin`)
4. **Adicione ao `.gitignore`** o bloco de arquivos efêmeros que o README da
   Impeccable indica (pasta `.impeccable/` parcial).
5. **Rode `/impeccable init`** — ela vai encontrar o `PRODUCT.md` pronto e
   perguntar só o que faltar.
6. **Peça a construção**, por exemplo:
   > Construa o site descrito em CONTENT.md seguindo DESIGN.md e CLAUDE.md.
   > Comece pelo layout base e pela seção hero.
7. **Itere com os comandos da skill**: `/impeccable critique`, `/impeccable polish`,
   `/impeccable audit`, `/impeccable animate` etc.
8. **Publique na Vercel** (`vercel deploy`) e aponte o domínio.

## Pendências de conteúdo (preencher antes de publicar)

- `[RAZAO_SOCIAL]` e `[CNPJ]` — quando a empresa estiver aberta
- `[WHATSAPP]` — número que receberá os pedidos de proposta (formato wa.me)
- `[DOMINIO]` — domínio final do site
- `[PRAZO_PROPOSTA]` — prazo de resposta que vocês conseguem honrar (ex.: 48h)
- Foto ou não dos sócios na seção "Quem somos" (o design prevê as duas opções)
- Imagem Open Graph (1200×630) para preview em redes sociais/WhatsApp
