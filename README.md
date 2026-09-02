# Receita Que Rende — Landing Page do Morango Cravejado

Página de vendas (uma página) para o guia digital **Receita Que Rende — Morango Cravejado**.
Feita em [Astro](https://astro.build): site estático, sem backend, componentizada e
mobile-first. O fluxo é: anúncio → esta página → link de pagamento.

> A página **não menciona** a plataforma de checkout no texto. O link de pagamento
> atual é da Cakto (`pay.cakto.com.br/...`) e fica só no `href` dos botões, em
> `src/config.ts`. Para esconder também o domínio, use um subdomínio próprio
> redirecionando para o checkout (ver seção 5).

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

### Pagamento e preço

```ts
export const PRODUCT = {
  // ...
  price: '39,90',                 // valor à vista (só o número). Vazio = a oferta não mostra preço.
  priceFrom: '97,00',             // opcional — preço "de" riscado
  installments: '12x de R$ 4,03', // opcional
  checkoutUrl: 'https://pay.cakto.com.br/msshn7m_1071078',
};
```

- O link de pagamento **já está preenchido**. Para trocar, é só editar `checkoutUrl`.
- **Defina o `price`** — sem ele, a seção de oferta fica sem valor (só o botão).
- Enquanto `checkoutUrl` estiver vazio, os botões rolam a página até a oferta
  em vez de levar o visitante para lugar nenhum.

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
  metaPixelId: '1374625827598727',   // vazio = não carrega o Pixel
  ga4Id: 'G-XXXXXXX',                // vazio = não carrega o GA4
  contentName: 'Receita Que Rende - Morango Cravejado',
};
```

Já vem pronto (`src/lib/tracking.ts`), sem precisar colar nada em HTML:

| Evento | Quando dispara | Parâmetros |
|---|---|---|
| `PageView` | ao carregar a página | — |
| `ViewContent` | ao rolar até a seção de oferta | `content_name`, `value`, `currency` |
| `InitiateCheckout` | no clique de qualquer botão de compra | `content_name`, `value`, `currency`, `location` |
| `Purchase` | **não é disparado aqui** — fica por conta da Cakto | — |

`value` e `currency` (BRL) saem automaticamente do `price`.

**UTM / fbclid:** ao chegar pela URL do anúncio, os parâmetros `utm_source`,
`utm_medium`, `utm_campaign`, `utm_content`, `utm_term` e `fbclid` são
guardados na sessão e **anexados ao link do checkout** — assim a Cakto também
atribui a origem da venda. Persiste se a pessoa navegar entre páginas antes de comprar.

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

### Esconder o domínio do checkout (opcional)

O texto da página não cita nenhuma plataforma. O único lugar onde o domínio
`pay.cakto.com.br` aparece é no `href` dos botões. Para trocar por um endereço
próprio, crie um subdomínio (ex.: `pagamento.receitaquerende.com.br`) com
redirecionamento 301 para o link da Cakto e coloque esse subdomínio em
`checkoutUrl`.

---

## 6. Checklist antes de anunciar

- [ ] `checkoutUrl` testado com uma compra real
- [ ] `price` (e parcelas, se houver) preenchido e conferido
- [ ] `SITE.url` com o domínio final
- [ ] `metaPixelId` preenchido e evento de checkout disparando
- [ ] dados do responsável em `LEGAL` preenchidos
- [ ] `/termos` e `/privacidade` revisados
- [ ] `GUARANTEE_DAYS` igual ao que está configurado no checkout (ou 0)
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
