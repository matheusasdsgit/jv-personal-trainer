# JV Treinamento Físico — site

Landing page em React + Vite + TypeScript (CSS puro com variáveis), sem backend.

## Comandos
- `npm install` — instala dependências
- `npm run dev` — servidor local
- `npm run build` — build de produção (pasta `dist/`)
- `npm run preview` — testa o build localmente

## Onde editar
- **Preços, contatos, links, mensagens de WhatsApp, caminhos de imagens, flag de depoimentos:** `src/config/site.ts`
- **Logo oficial:** coloque em `public/images/brand/` e preencha `images.logoLight` / `images.logoDark` (usada por Header e Footer via `src/components/Logo.tsx`)
- **Foto do hero:** `public/images/hero/` → `images.hero`
- **Foto do João Victor (Sobre):** `public/images/about/` → `images.about`
- **Depoimentos:** adicione itens reais e autorizados em `testimonials` e mude `flags.showTestimonials` para `true`
- **Favicon provisório:** `public/favicon.svg`
- **Cores/tipografia:** `src/styles/tokens.css`

## Pendências de confirmação
- Se a avaliação ISAK trimestral do plano Ouro está incluída no preço de R$ 200,00
- Condições de duplas/casais (não publicadas)
- Imagem oficial para Open Graph (`og:image`) e domínio definitivo (`og:url`)
- Revisão jurídica do aviso de privacidade

## Publicação
Hospedagem estática (Netlify, Vercel, Cloudflare Pages, GitHub Pages, Hostinger etc.): publique o conteúdo da pasta `dist/` gerada por `npm run build`. Não é necessária configuração de rotas (o aviso de privacidade usa `#/privacidade`).
