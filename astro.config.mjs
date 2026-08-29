// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import { SITE } from './src/config.ts';

// https://astro.build/config
export default defineConfig({
  site: SITE.url,
  trailingSlash: 'never',
  build: {
    inlineStylesheets: 'auto',
  },
  image: {
    // Local images are optimized at build time via sharp.
    responsiveStyles: true,
  },
  integrations: [
    sitemap(),
  ],
  vite: {
    build: {
      assetsInlineLimit: 1024,
    },
  },
});
