# Receita Que Rende — Landing Page do Morango Cravejado

Página de vendas (uma página) para o guia digital **Receita Que Rende — Morango Cravejado**.
Feita em [Astro](https://astro.build): site estático, sem backend, componentizada e
mobile-first. O fluxo é: anúncio → esta página → checkout na **Cakto**.

> Este projeto é **só a página de vendas**. Não contém a receita, área de membros,
> login nem checkout próprio.

---

## 1. Rodar localmente

```bash
npm install
npm run dev
```

Abre em `http://localhost:4321`.

Para testar a versão final (a mesma que vai pro ar):

```bash
npm run build
npm run preview
```

---

## 2. Configurar antes de publicar

Tudo o que você precisa mexer está em **`src/config.ts`**.

### Checkout (obrigatório)

```ts
export const PRODUCT = {
  // ...
  price: '39,90',                 // valor à vista (só o número)
  priceFrom: '97,00',             // opcional — preço "de" riscado
  installments: '12x de R$ 4,03', // opcional
  checkoutUrl: 'https://pay.cakto.com.br/SEU_CODIGO',
};
```

Enquanto `checkoutUrl` estiver vazio, todos os botões avisam que o checkout
não foi configurado (em vez de levar o visitante para lugar nenhum).

### Garantia (opcional)

```ts
export const GUARANTEE_DAYS = 7;   // 0 = a seção de garantia some sozinha
```

### Site / SEO

```ts
export const SITE = {
  url: 'https://seudominio.com.br',   // troque pelo domínio final
  // title e description já vêm prontos
};
```

### Rastreamento (opcional)

```ts
export const TRACKING = {
  metaPixelId: '1234567890',   // vazio = não carrega o Pixel
  ga4Id: 'G-XXXXXXX',          // vazio = não carrega o GA4
};
```

O evento de checkout (`InitiateCheckout` / `begin_checkout`) dispara sozinho
no clique de qualquer botão de compra.

### Dados do responsável (rodapé, termos, privacidade)

```ts
export const LEGAL = {
  owner: 'Seu Nome ou Empresa',
  document: '00.000.000/0001-00',
  supportEmail: 'contato@seudominio.com.br',
};
```

---

## 3. Textos

Toda a copy da página está em **`src/content.ts`** — headlines, cards, FAQ, etc.
Edite à vontade. Nada de depoimento, número de alunos ou promessa de
faturamento foi inventado; mantenha assim.

As páginas `/termos` e `/privacidade` são **modelos** — revise antes de anunciar.

---

## 4. Imagens e vídeos

- **Fotos**: `src/assets/photos/` — o Astro otimiza (WebP + tamanhos) no build.
- **Vídeos**: `public/media/videos/` (`.mp4` + `.webm`) e as capas em
  `public/media/posters/`. O vídeo só baixa quando a pessoa clica em "play".

Para trocar uma foto, substitua o arquivo mantendo o mesmo nome, ou ajuste o
`import` na seção correspondente em `src/sections/`.

Imagem de compartilhamento (WhatsApp/Facebook): `public/og.jpg` (1200×630).

---

## 5. Publicar

O build gera uma pasta `dist/` estática — serve em qualquer lugar.

**Vercel** (recomendado): importe o repositório. O `vercel.json` já cuida de
URLs limpas, cache e headers. Framework detectado automaticamente (Astro).

**Netlify**: o `netlify.toml` já está configurado (`build` + `publish = dist`).

**Hostinger / hospedagem comum**: rode `npm run build` e suba o conteúdo de
`dist/` para a raiz do site.

Depois de publicar, atualize `SITE.url` em `src/config.ts` e refaça o deploy
para os links canônicos e o sitemap ficarem certos.

---

## 6. Checklist antes de anunciar

- [ ] `CAKTO_CHECKOUT_URL` preenchido e testado com uma compra real
- [ ] `PRODUCT_PRICE` (e parcelas, se houver) conferido
- [ ] `SITE.url` com o domínio final
- [ ] `metaPixelId` preenchido e evento de checkout disparando
- [ ] dados do responsável em `LEGAL` preenchidos
- [ ] `/termos` e `/privacidade` revisados
- [ ] `GUARANTEE_DAYS` igual ao que está configurado na Cakto (ou 0)
- [ ] `public/og.jpg` e favicon conferidos
- [ ] e-mail de suporte em domínio próprio

---

## Estrutura

```
src/
  config.ts            ← configuração central (mexa aqui)
  content.ts           ← todos os textos
  layouts/
    Base.astro         ← <head>, SEO, scripts
    Legal.astro        ← casca de termos/privacidade
  components/           ← Button, Cta, Section, Card, Faq, Video,
                          Gallery, Header, Footer, StickyCta, Logo, Particles
  sections/            ← as 13 seções da página + Hero
  pages/
    index.astro        ← a landing page
    termos.astro
    privacidade.astro
  assets/photos/        ← imagens (otimizadas no build)
public/
  media/               ← vídeos + capas
  favicon.svg · og.jpg · robots.txt
```
