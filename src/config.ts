/**
 * ============================================================================
 *  RECEITA QUE RENDE — MORANGO CRAVEJADO
 *  Configuração central da landing page
 * ----------------------------------------------------------------------------
 *  Altere SOMENTE os valores abaixo. Nenhuma outra parte do projeto precisa
 *  ser tocada para colocar a página no ar.
 * ============================================================================
 */

/* -------------------------------------------------------------------------- */
/*  1. PRODUTO E OFERTA                                                        */
/* -------------------------------------------------------------------------- */

export const PRODUCT = {
  /** Nome da marca / linha de produto */
  name: 'Receita Que Rende',

  /** Produto principal (único) desta página */
  item: 'Morango Cravejado',

  /** Como o produto entregue é chamado (aparece no mockup e na oferta) */
  format: 'Guia Digital',

  /**
   * Preço exibido na página.
   * Deixe `price` com o valor à vista e, se quiser, preencha `priceFrom`
   * (preço "de") e `installments` (parcelamento) — ambos são opcionais.
   * Use strings já formatadas em Real. Ex.: '39,90'
   */
  price: '',                 // ex.: '39,90'   (vazio = mostra "Consulte o valor")
  priceFrom: '',             // ex.: '97,00'   (vazio = não mostra preço "de")
  installments: '',          // ex.: '12x de R$ 4,03'  (vazio = não mostra parcelas)
  currencyPrefix: 'R$',

  /**
   * Link de checkout da Cakto. Todos os botões de compra apontam para cá.
   * Enquanto estiver vazio, os botões avisam que o checkout ainda não foi
   * configurado (em vez de levar o visitante para lugar nenhum).
   * Ex.: 'https://pay.cakto.com.br/SEU_CODIGO'
   */
  checkoutUrl: '',
} as const;

/* Compatibilidade com os nomes de variável pedidos no briefing */
export const PRODUCT_NAME = PRODUCT.name;
export const PRODUCT_PRICE = PRODUCT.price;
export const CAKTO_CHECKOUT_URL = PRODUCT.checkoutUrl;

/* -------------------------------------------------------------------------- */
/*  2. GARANTIA                                                                */
/* -------------------------------------------------------------------------- */

/**
 * Dias de garantia incondicional.
 * 0  = sem garantia  → a seção de garantia fica OCULTA automaticamente.
 * 7  = garantia de 7 dias (padrão do Código de Defesa do Consumidor).
 * Configure aqui apenas o que você realmente definiu na Cakto.
 */
export const GUARANTEE_DAYS = 0;

/* -------------------------------------------------------------------------- */
/*  3. SITE / SEO                                                              */
/* -------------------------------------------------------------------------- */

export const SITE = {
  /** Domínio final (com https, sem barra no fim). Usado em canonical / OG / sitemap. */
  url: 'https://receitaquerende.com.br',

  title: 'Receita Que Rende | Morango Cravejado',
  description:
    'Aprenda o processo do Morango Cravejado, desde o preparo e recheio até o acabamento, cravejado, conservação, embalagem e precificação.',

  /** Idioma / locale */
  lang: 'pt-BR',
  locale: 'pt_BR',

  /** Imagem de compartilhamento (dentro de /public). 1200×630 recomendado. */
  ogImage: '/og.jpg',

  /** Nome curto para PWA / aba */
  shortName: 'Receita Que Rende',
} as const;

/* -------------------------------------------------------------------------- */
/*  4. RASTREAMENTO (opcional)                                                 */
/* -------------------------------------------------------------------------- */

export const TRACKING = {
  /** ID do Pixel da Meta. Vazio = não carrega o script. */
  metaPixelId: '',

  /** ID do Google Analytics 4 (G-XXXXXXX). Vazio = não carrega. */
  ga4Id: '',

  /**
   * Evento disparado no clique dos botões de compra.
   * Meta: 'InitiateCheckout' | GA4: 'begin_checkout'
   */
  checkoutEvent: 'InitiateCheckout',
} as const;

/* -------------------------------------------------------------------------- */
/*  5. RODAPÉ / DADOS DO RESPONSÁVEL                                           */
/* -------------------------------------------------------------------------- */

export const LEGAL = {
  /** Nome ou razão social que assina a página (rodapé, termos, privacidade). */
  owner: 'Receita Que Rende',

  /** CNPJ ou CPF do responsável. Vazio = não exibe. */
  document: '',

  /** E-mail de suporte ao cliente. */
  supportEmail: 'contato@receitaquerende.com.br',

  /** Cidade/UF exibida no rodapé (opcional). */
  city: '',

  /** Ano de início (o ano final é sempre o atual). */
  since: 2026,
} as const;

/* -------------------------------------------------------------------------- */
/*  6. HELPERS                                                                 */
/* -------------------------------------------------------------------------- */

/** true quando o checkout já foi configurado */
export const hasCheckout = CAKTO_CHECKOUT_URL.trim().length > 0;

/** true quando há garantia para exibir */
export const hasGuarantee = GUARANTEE_DAYS > 0;

/** Preço pronto para exibir, com prefixo. Ex.: 'R$ 39,90' */
export const priceLabel = PRODUCT.price.trim()
  ? `${PRODUCT.currencyPrefix} ${PRODUCT.price.trim()}`
  : 'Consulte o valor';

export const priceFromLabel = PRODUCT.priceFrom.trim()
  ? `${PRODUCT.currencyPrefix} ${PRODUCT.priceFrom.trim()}`
  : '';
