/**
 * Build-time sitemap generator.
 * Generates public/sitemap.xml from the route list.
 * Run: node scripts/generate-sitemap.mjs
 */

import { writeFileSync } from 'fs';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const BASE_URL = 'https://www.garagegoatdoors.com';

// Route definitions with SEO metadata
const routes = [
  // Main pages
  { path: '/', changefreq: 'weekly', priority: '1.0' },
  { path: '/services', changefreq: 'monthly', priority: '0.9' },
  { path: '/contact', changefreq: 'monthly', priority: '0.9' },
  { path: '/reviews', changefreq: 'weekly', priority: '0.8' },
  { path: '/about', changefreq: 'monthly', priority: '0.7' },
  { path: '/offers', changefreq: 'weekly', priority: '0.8' },
  { path: '/blog', changefreq: 'weekly', priority: '0.7' },
  { path: '/faq', changefreq: 'monthly', priority: '0.7' },
  { path: '/gallery', changefreq: 'monthly', priority: '0.6' },
  { path: '/financing', changefreq: 'monthly', priority: '0.6' },
  { path: '/warranty', changefreq: 'monthly', priority: '0.6' },
  { path: '/privacy', changefreq: 'yearly', priority: '0.3' },
  { path: '/terms', changefreq: 'yearly', priority: '0.3' },
  { path: '/sitemap', changefreq: 'monthly', priority: '0.3' },

  // Service detail pages
  { path: '/garage-door-repair', changefreq: 'monthly', priority: '0.9' },
  { path: '/garage-door-spring-repair', changefreq: 'monthly', priority: '0.9' },
  { path: '/garage-door-opener-repair', changefreq: 'monthly', priority: '0.9' },
  { path: '/new-garage-doors', changefreq: 'monthly', priority: '0.9' },
  { path: '/emergency-garage-door-repair', changefreq: 'monthly', priority: '0.9' },

  // Service area pages
  { path: '/garage-door-repair-cypress-tx', changefreq: 'monthly', priority: '0.8' },
  { path: '/garage-door-repair-tomball-tx', changefreq: 'monthly', priority: '0.8' },
  { path: '/garage-door-repair-katy-tx', changefreq: 'monthly', priority: '0.8' },
  { path: '/garage-door-repair-spring-tx', changefreq: 'monthly', priority: '0.8' },
  { path: '/garage-door-repair-houston-tx', changefreq: 'monthly', priority: '0.8' },

  // Offer pages
  { path: '/75-off-garage-door-repair', changefreq: 'weekly', priority: '0.7' },
  { path: '/special-offers', changefreq: 'weekly', priority: '0.7' },
  { path: '/new-door-special', changefreq: 'weekly', priority: '0.7' },

  // Pricing
  { path: '/pricing', changefreq: 'monthly', priority: '0.8' },

  // Blog posts
  { path: '/blog/garage-door-repair-cost-cypress-tx', changefreq: 'monthly', priority: '0.6' },
  { path: '/blog/signs-garage-door-spring-breaking', changefreq: 'monthly', priority: '0.6' },
  { path: '/blog/new-garage-door-cost-cypress-tx', changefreq: 'monthly', priority: '0.6' },
  { path: '/blog/garage-door-opener-not-working', changefreq: 'monthly', priority: '0.6' },
  { path: '/blog/torsion-vs-extension-springs-garage-door', changefreq: 'monthly', priority: '0.6' },
  { path: '/blog/how-long-garage-door-springs-last', changefreq: 'monthly', priority: '0.6' },
  { path: '/blog/garage-door-wont-close', changefreq: 'monthly', priority: '0.6' },
  { path: '/blog/best-garage-door-styles-texas-homes', changefreq: 'monthly', priority: '0.6' },
  { path: '/blog/garage-door-safety-checklist', changefreq: 'monthly', priority: '0.6' },
  { path: '/blog/garage-door-maintenance-checklist', changefreq: 'monthly', priority: '0.6' },
  { path: '/blog/repair-vs-replace-garage-door', changefreq: 'monthly', priority: '0.6' },
  { path: '/blog/why-garage-door-loud-how-to-fix', changefreq: 'monthly', priority: '0.6' },
  { path: '/blog/smart-garage-door-opener-worth-it', changefreq: 'monthly', priority: '0.6' },
  { path: '/blog/garage-door-insulation-texas', changefreq: 'monthly', priority: '0.6' },
  { path: '/blog/how-to-choose-garage-door-repair-company', changefreq: 'monthly', priority: '0.6' },
  { path: '/blog/hurricane-garage-door-prep-cypress-tx', changefreq: 'monthly', priority: '0.6' },
];

const today = new Date().toISOString().split('T')[0];

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${routes
  .map(
    r => `  <url>
    <loc>${BASE_URL}${r.path}</loc>
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
