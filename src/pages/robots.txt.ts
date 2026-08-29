import type { APIRoute } from 'astro';
import { SITE } from '../config';

/** robots.txt gerado a partir de SITE.url — sempre bate com o endereço configurado. */
export const GET: APIRoute = () => {
  const body = [
    'User-agent: *',
    'Allow: /',
    '',
    `Sitemap: ${new URL('sitemap-index.xml', SITE.url).href}`,
    '',
  ].join('\n');

  return new Response(body, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
};
