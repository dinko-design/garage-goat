/**
 * Build-time CMS generator.
 * Reads Markdown content files from content/ and generates:
 *   - src/data/cms-generated.ts  (typed data exports)
 *   - src/data/routes-generated.json (all route strings)
 *
 * Run: node scripts/build-cms.mjs
 */

import { readFileSync, writeFileSync, readdirSync, existsSync } from 'fs';
import { resolve, dirname, join } from 'path';
import { fileURLToPath } from 'url';
import matter from 'gray-matter';
import { marked } from 'marked';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = resolve(__dirname, '..');
const CONTENT_DIR = resolve(ROOT, 'content');
const OUT_TS = resolve(ROOT, 'src/data/cms-generated.ts');
const OUT_ROUTES = resolve(ROOT, 'src/data/routes-generated.json');

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

/**
 * Read all .md files from a directory. Returns empty array if dir doesn't exist.
 */
function readCollection(subdir) {
  const dir = join(CONTENT_DIR, subdir);
  if (!existsSync(dir)) {
    return [];
  }
  return readdirSync(dir)
    .filter(f => f.endsWith('.md'))
    .map(f => {
      const raw = readFileSync(join(dir, f), 'utf-8');
      const { data, content } = matter(raw);
      return { data, content: content.trim() };
    });
}

/**
 * Convert Markdown string to HTML via marked. Returns empty string for blank input.
 */
function md(text) {
  if (!text) return '';
  return marked.parse(text, { async: false });
}

// ---------------------------------------------------------------------------
// Collection processors
// ---------------------------------------------------------------------------

function processCompanyInfo() {
  const dir = join(CONTENT_DIR, 'company');
  const file = join(dir, 'info.md');
  if (!existsSync(file)) {
    console.warn('  ⚠  content/company/info.md not found — skipping company info');
    return null;
  }
  const raw = readFileSync(file, 'utf-8');
  const { data } = matter(raw);

  // Reconstruct nested warranty object from flat frontmatter keys
  const { warrantyLabor, warrantyParts, warrantySprings, ...rest } = data;
  const companyInfo = {
    ...rest,
    warranty: {
      labor: warrantyLabor ?? '',
      parts: warrantyParts ?? '',
      springs: warrantySprings ?? '',
    },
  };

  return companyInfo;
}

function processServices() {
  const items = readCollection('services');
  return items.map(({ data, content }) => ({
    id: data.id,
    slug: data.slug,
    name: data.name,
    metaTitle: data.metaTitle ?? '',
    metaDescription: data.metaDescription ?? '',
    h1Title: data.h1Title ?? '',
    introParagraph: data.introParagraph ?? '',
    content: md(content),
    iconName: data.iconName ?? 'Wrench',
    image: data.image ?? '',
    ctaHeadline: data.ctaHeadline ?? '',
    ctaButtonText: data.ctaButtonText ?? '',
    relatedServiceIds: data.relatedServiceIds ?? [],
    relatedBlogIds: data.relatedBlogIds ?? [],
    relatedOfferIds: data.relatedOfferIds ?? [],
    faqs: data.faqs ?? [],
  }));
}

function processServiceAreas() {
  const items = readCollection('service-areas');
  return items.map(({ data, content }) => ({
    id: data.id,
    slug: data.slug,
    cityName: data.cityName ?? '',
    metaTitle: data.metaTitle ?? '',
    metaDescription: data.metaDescription ?? '',
    h1Title: data.h1Title ?? '',
    introParagraph: data.introParagraph ?? '',
    areaContent: md(content),
    mapEmbedUrl: data.mapEmbedUrl ?? '',
    relatedServiceIds: data.relatedServiceIds ?? [],
    relatedBlogIds: data.relatedBlogIds ?? [],
    relatedOfferIds: data.relatedOfferIds ?? [],
  }));
}

function processReviews() {
  const items = readCollection('reviews');
  const reviews = items.map(({ data }) => ({
    id: data.id,
    reviewerName: data.reviewerName ?? '',
    city: data.city ?? '',
    rating: data.rating ?? 5,
    text: data.text ?? '',
    serviceUsed: data.serviceUsed ?? '',
    date: data.date ?? '',
    platform: data.platform ?? 'google',
  }));

  // Sort by date descending
  reviews.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  return reviews;
}

function processOffers() {
  const items = readCollection('offers');
  return items.map(({ data }) => ({
    id: data.id,
    slug: data.slug,
    title: data.title ?? '',
    headline: data.headline ?? '',
    discountAmount: data.discountAmount ?? '',
    expiration: data.expiration ?? '',
    disclaimer: data.disclaimer ?? '',
    relatedServiceIds: data.relatedServiceIds ?? [],
  }));
}

function processBlogPosts() {
  const items = readCollection('blog');
  const posts = items.map(({ data, content }) => ({
    id: data.id,
    slug: data.slug,
    title: data.title ?? '',
    excerpt: data.excerpt ?? '',
    content: md(content),
    featuredImage: data.featuredImage ?? '',
    date: data.date ?? '',
    tags: data.tags ?? [],
    author: data.author ?? '',
    authorRole: data.authorRole ?? '',
    relatedServiceIds: data.relatedServiceIds ?? [],
    relatedBlogIds: data.relatedBlogIds ?? [],
  }));

  // Sort by date descending (date format: "January 15, 2026")
  posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  return posts;
}

// ---------------------------------------------------------------------------
// Route generation
// ---------------------------------------------------------------------------

function buildRoutes(services, serviceAreas, offers, blogPosts) {
  const staticRoutes = [
    '/',
    '/services',
    '/contact',
    '/reviews',
    '/about',
    '/offers',
    '/blog',
    '/faq',
    '/gallery',
    '/financing',
    '/warranty',
    '/privacy',
    '/terms',
    '/sitemap',
    '/pricing',
    '/areas',
  ];

  const dynamicRoutes = [
    ...services.map(s => `/${s.slug}`),
    ...serviceAreas.map(a => `/${a.slug}`),
    ...offers.map(o => `/${o.slug}`),
    ...blogPosts.map(p => `/blog/${p.slug}`),
  ];

  return [...staticRoutes, ...dynamicRoutes];
}

// ---------------------------------------------------------------------------
// Main
// ---------------------------------------------------------------------------

console.log('Building CMS data from content/ ...\n');

const companyInfo = processCompanyInfo();
const services = processServices();
const serviceAreas = processServiceAreas();
const reviews = processReviews();
const offers = processOffers();
const blogPosts = processBlogPosts();

console.log(`  Company info:  ${companyInfo ? '1' : '0'}`);
console.log(`  Services:      ${services.length}`);
console.log(`  Service areas: ${serviceAreas.length}`);
console.log(`  Reviews:       ${reviews.length}`);
console.log(`  Offers:        ${offers.length}`);
console.log(`  Blog posts:    ${blogPosts.length}`);

// --- Write cms-generated.ts ---

const timestamp = new Date().toISOString();

const tsOutput = `// AUTO-GENERATED by scripts/build-cms.mjs — DO NOT EDIT MANUALLY
// Edit content files in content/ directory instead
// Generated at: ${timestamp}

export const generatedCompanyInfo = ${JSON.stringify(companyInfo, null, 2)} as const;

export const generatedServices = ${JSON.stringify(services, null, 2)};

export const generatedServiceAreas = ${JSON.stringify(serviceAreas, null, 2)};

export const generatedReviews = ${JSON.stringify(reviews, null, 2)};

export const generatedOffers = ${JSON.stringify(offers, null, 2)};

export const generatedBlogPosts = ${JSON.stringify(blogPosts, null, 2)};
`;

writeFileSync(OUT_TS, tsOutput, 'utf-8');
console.log(`\n  ✓ Written: ${OUT_TS}`);

// --- Write routes-generated.json ---

const routes = buildRoutes(services, serviceAreas, offers, blogPosts);
writeFileSync(OUT_ROUTES, JSON.stringify(routes, null, 2) + '\n', 'utf-8');
console.log(`  ✓ Written: ${OUT_ROUTES} (${routes.length} routes)`);

console.log('\nDone.');
