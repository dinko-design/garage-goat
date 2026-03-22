/**
 * Build-time sitemap generator.
 * Reads routes from the generated routes file and creates public/sitemap.xml.
 * Run: node scripts/generate-sitemap.mjs
 * (Requires build-cms.mjs to have run first)
 */

import { readFileSync, writeFileSync } from 'fs';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const BASE_URL = 'https://www.garagegoatdoors.com';

// Read routes from the generated JSON (produced by build-cms.mjs)
const routesPath = resolve(__dirname, '../src/data/routes-generated.json');
const allRoutes = JSON.parse(readFileSync(routesPath, 'utf-8'));

// Assign SEO metadata by route pattern
function getRouteMetadata(path) {
  if (path === '/') return { changefreq: 'weekly', priority: '1.0' };
  if (path === '/services' || path === '/contact') return { changefreq: 'monthly', priority: '0.9' };
  if (['/reviews', '/offers'].includes(path)) return { changefreq: 'weekly', priority: '0.8' };
  if (['/about', '/blog', '/faq'].includes(path)) return { changefreq: 'monthly', priority: '0.7' };
  if (['/gallery', '/financing', '/warranty'].includes(path)) return { changefreq: 'monthly', priority: '0.6' };
  if (['/privacy', '/terms', '/sitemap'].includes(path)) return { changefreq: 'yearly', priority: '0.3' };
  if (path === '/pricing') return { changefreq: 'monthly', priority: '0.8' };
  if (path === '/areas') return { changefreq: 'weekly', priority: '0.7' };

  // Service pages (garage-door-* without -tx suffix, plus new-garage-doors, emergency-*)
  if (path.match(/^\/(garage-door-(?!repair-\w+-tx)|new-garage-doors|emergency-)/)) {
    return { changefreq: 'monthly', priority: '0.9' };
  }

  // Service area pages (end with -tx)
  if (path.match(/-tx$/)) return { changefreq: 'monthly', priority: '0.8' };

  // Blog posts
  if (path.startsWith('/blog/')) return { changefreq: 'monthly', priority: '0.6' };

  // Offers (everything else at root level)
  return { changefreq: 'weekly', priority: '0.7' };
}

const today = new Date().toISOString().split('T')[0];

const routes = allRoutes.map(path => ({
  path,
  ...getRouteMetadata(path),
}));

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${routes
  .map(
    r => `  <url>
    <loc>${BASE_URL}${r.path === '/' ? '/' : r.path.replace(/\/?$/, '/')}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${r.changefreq}</changefreq>
    <priority>${r.priority}</priority>
  </url>`
  )
  .join('\n')}
</urlset>
`;

const outPath = resolve(__dirname, '../public/sitemap.xml');
writeFileSync(outPath, xml, 'utf-8');
console.log(`Sitemap generated: ${outPath} (${routes.length} URLs)`);
