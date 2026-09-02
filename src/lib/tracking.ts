/**
 * ============================================================================
 *  Rastreamento — Meta Pixel + UTM
 * ----------------------------------------------------------------------------
 *  - PageView: disparado pelo snippet base (layouts/Base.astro).
 *  - ViewContent: quando a seção de oferta entra na tela.
 *  - InitiateCheckout: no clique de qualquer botão de compra.
 *  - Purchase: NÃO é disparado aqui — fica por conta da Cakto.
 *  - UTM (+ fbclid): capturados da URL, guardados na sessão e repassados
 *    para o link do checkout, para a Cakto também atribuir a origem.
 * ============================================================================
 */
import { PRODUCT, TRACKING, priceNumber, priceCurrency } from '../config';

type FbqParams = Record<string, string | number>;
type W = Window & {
  fbq?: (...a: unknown[]) => void;
  gtag?: (...a: unknown[]) => void;
};

const STORE_KEY = 'rqr:campaign';

/** Parâmetros de conteúdo comuns aos eventos ViewContent / InitiateCheckout. */
function contentParams(): FbqParams {
  const p: FbqParams = { content_name: TRACKING.contentName };
  if (priceNumber != null) {
    p.value = priceNumber;
    p.currency = priceCurrency;
  }
  return p;
}

function track(event: string, params?: FbqParams): void {
  const w = window as W;
  try {
    w.fbq?.('track', event, params);
  } catch {
    /* rastreamento é opcional — nunca quebra a página */
  }
  try {
    const gaEvent =
      event === 'InitiateCheckout'
        ? 'begin_checkout'
        : event === 'ViewContent'
          ? 'view_item'
          : event;
    w.gtag?.('event', gaEvent, params);
  } catch {
    /* idem */
  }
}

/* -------------------------------------------------------------------------- */
/*  UTM / parâmetros de campanha                                              */
/* -------------------------------------------------------------------------- */

function readStored(): Record<string, string> {
  try {
    return JSON.parse(sessionStorage.getItem(STORE_KEY) || '{}') || {};
  } catch {
    return {};
  }
}

/**
 * Junta os parâmetros da URL atual com os guardados na sessão.
 * Se a URL atual trouxe QUALQUER parâmetro de campanha, ela vira a fonte da
 * verdade (clique novo de anúncio). Senão, mantém o que já estava guardado
 * (navegação interna entre páginas).
 */
function resolveCampaign(): Record<string, string> {
  const url = new URLSearchParams(window.location.search);
  const fromUrl: Record<string, string> = {};
  for (const key of TRACKING.campaignParams) {
    const v = url.get(key);
    if (v) fromUrl[key] = v;
  }

  let result: Record<string, string>;
  if (Object.keys(fromUrl).length > 0) {
    result = fromUrl;
    try {
      sessionStorage.setItem(STORE_KEY, JSON.stringify(result));
    } catch {
      /* sessionStorage pode estar bloqueado — segue sem persistir */
    }
  } else {
    result = readStored();
  }
  return result;
}

/** Anexa os parâmetros de campanha em todos os links que levam ao checkout. */
function decorateCheckoutLinks(params: Record<string, string>): void {
  const entries = Object.entries(params);
  if (!entries.length) return;

  const base = PRODUCT.checkoutUrl;
  if (!base) return;

  document
    .querySelectorAll<HTMLAnchorElement>('a[data-cta][data-checkout="ready"]')
    .forEach((a) => {
      try {
        const u = new URL(a.href, window.location.origin);
        // só decora se realmente aponta para o checkout configurado
        const baseHost = new URL(base).host;
        if (u.host !== baseHost) return;
        for (const [k, v] of entries) u.searchParams.set(k, v);
        a.href = u.toString();
      } catch {
        /* href inesperado — ignora */
      }
    });
}

/* -------------------------------------------------------------------------- */
/*  Eventos                                                                   */
/* -------------------------------------------------------------------------- */

function fireViewContentOnOffer(): void {
  const offer = document.querySelector('#oferta');
  let fired = false;

  const fire = () => {
    if (fired) return;
    fired = true;
    track('ViewContent', contentParams());
  };

  if (offer && 'IntersectionObserver' in window) {
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            fire();
            io.disconnect();
          }
        }
      },
      { threshold: 0.35 },
    );
    io.observe(offer);
  } else {
    // sem seção de oferta ou sem suporte: dispara depois de um tempo na página
    window.setTimeout(fire, 15000);
  }
}

function bindCheckoutClicks(): void {
  document.addEventListener('click', (e) => {
    const target = e.target as HTMLElement | null;
    const btn = target?.closest<HTMLAnchorElement>('[data-cta]');
    if (!btn) return;

    const state = btn.getAttribute('data-checkout');

    if (state === 'pending') {
      e.preventDefault();
      const note = btn.closest('.cta')?.querySelector<HTMLElement>('[data-cta-note]');
      if (note) note.hidden = false;
      document
        .querySelector('#oferta')
        ?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      return;
    }

    track(TRACKING.checkoutEvent, {
      ...contentParams(),
      location: btn.getAttribute('data-cta') || 'cta',
    });
  });
}

/* -------------------------------------------------------------------------- */
/*  Init                                                                      */
/* -------------------------------------------------------------------------- */

export function initTracking(): void {
  const run = () => {
    decorateCheckoutLinks(resolveCampaign());
    fireViewContentOnOffer();
    bindCheckoutClicks();
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', run, { once: true });
  } else {
    run();
  }
}
