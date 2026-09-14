import { defineConfig } from 'astro/config';

// Canonical origin. Drives <link rel=canonical>, sitemap and JSON-LD @id values.
export default defineConfig({
  site: 'https://panquire.com',
  base: '/Panquire-Website',
  trailingSlash: 'never',
  build: { inlineStylesheets: 'auto' },
});
