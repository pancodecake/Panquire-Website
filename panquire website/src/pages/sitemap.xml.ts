import type { APIRoute } from 'astro';
import { site } from '../data/site';

// Five routes, so a generated sitemap beats pulling in an integration.
const routes = ['/', '/products/t-01', '/about', '/partners', '/terms'];

export const GET: APIRoute = () => {
  const urls = routes
    .map((r) => `  <url><loc>${site.url}${r === '/' ? '' : r}</loc><lastmod>${site.updated}</lastmod></url>`)
    .join('\n');

  return new Response(
    `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`,
    { headers: { 'Content-Type': 'application/xml' } }
  );
};
