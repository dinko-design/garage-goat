/**
 * One-time migration script: extracts all content from cms.ts into individual Markdown files.
 * Run: npx tsx scripts/migrate-to-markdown.mjs
 */

import { mkdirSync, writeFileSync } from 'fs';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

import {
  companyInfo,
  services,
  serviceAreas,
  reviews,
  offers,
  blogPosts,
} from '../src/data/cms.ts';

const __dirname = dirname(fileURLToPath(import.meta.url));
const CONTENT_DIR = resolve(__dirname, '../content');

// ---------------------------------------------------------------------------
// YAML helpers
// ---------------------------------------------------------------------------

/** Escape a string for use as a YAML scalar value. */
function yamlString(val) {
  if (val === null || val === undefined) return '""';
  const s = String(val);
  // Quote if value contains characters that could trip up YAML parsers
  if (
    s === '' ||
    s.includes(': ') ||
    s.includes('#') ||
    s.includes('"') ||
    s.includes("'") ||
    s.includes('\n') ||
    s.includes('|') ||
    s.includes('>') ||
    s.includes('{') ||
    s.includes('}') ||
    s.includes('[') ||
    s.includes(']') ||
    s.includes(',') ||
    s.includes('&') ||
    s.includes('*') ||
    s.includes('!') ||
    s.includes('%') ||
    s.includes('@') ||
    s.includes('`') ||
    s.startsWith('- ') ||
    s.startsWith('? ') ||
    /^(true|false|yes|no|null|on|off)$/i.test(s) ||
    /^\d/.test(s)
  ) {
    // Use double-quoted style, escaping inner double quotes and backslashes
    const escaped = s.replace(/\\/g, '\\\\').replace(/"/g, '\\"').replace(/\n/g, '\\n');
    return `"${escaped}"`;
  }
  return s;
}

/** Render an array of simple strings as YAML list items. */
function yamlArray(arr, indent = '') {
  if (!arr || arr.length === 0) return ' []';
  return '\n' + arr.map((v) => `${indent}  - ${yamlString(v)}`).join('\n');
}

/** Build a YAML frontmatter block from a list of [key, value] entries. */
function buildFrontmatter(fields) {
  const lines = ['---'];
  for (const [key, value] of fields) {
    if (value === undefined || value === null) continue;
    if (Array.isArray(value)) {
      // Check if it's an array of objects (like faqs)
      if (value.length > 0 && typeof value[0] === 'object' && !Array.isArray(value[0])) {
        lines.push(`${key}:`);
        for (const obj of value) {
          const entries = Object.entries(obj);
          // First key gets the "- " prefix
          lines.push(`  - ${entries[0][0]}: ${yamlString(entries[0][1])}`);
          for (let i = 1; i < entries.length; i++) {
            lines.push(`    ${entries[i][0]}: ${yamlString(entries[i][1])}`);
          }
        }
      } else {
        lines.push(`${key}:${yamlArray(value)}`);
      }
    } else if (typeof value === 'number' || typeof value === 'boolean') {
      lines.push(`${key}: ${value}`);
    } else {
      lines.push(`${key}: ${yamlString(value)}`);
    }
  }
  lines.push('---');
  return lines.join('\n');
}

// ---------------------------------------------------------------------------
// HTML → Markdown converter
// ---------------------------------------------------------------------------

function htmlToMarkdown(html) {
  if (!html) return '';

  let md = html;

  // Normalize line endings
  md = md.replace(/\r\n/g, '\n');

  // Handle block-level elements first

  // Headings
  md = md.replace(/<h2[^>]*>([\s\S]*?)<\/h2>/gi, (_, content) => `## ${inlineHtml(content.trim())}\n\n`);
  md = md.replace(/<h3[^>]*>([\s\S]*?)<\/h3>/gi, (_, content) => `### ${inlineHtml(content.trim())}\n\n`);

  // Blockquotes
  md = md.replace(/<blockquote[^>]*>([\s\S]*?)<\/blockquote>/gi, (_, content) => {
    const inner = inlineHtml(content.trim().replace(/<\/?p[^>]*>/gi, ''));
    return inner.split('\n').map((line) => `> ${line}`).join('\n') + '\n\n';
  });

  // Unordered lists
  md = md.replace(/<ul[^>]*>([\s\S]*?)<\/ul>/gi, (_, content) => {
    const items = [];
    content.replace(/<li[^>]*>([\s\S]*?)<\/li>/gi, (__, li) => {
      items.push(`- ${inlineHtml(li.trim())}`);
    });
    return items.join('\n') + '\n\n';
  });

  // Ordered lists
  md = md.replace(/<ol[^>]*>([\s\S]*?)<\/ol>/gi, (_, content) => {
    const items = [];
    let idx = 1;
    content.replace(/<li[^>]*>([\s\S]*?)<\/li>/gi, (__, li) => {
      items.push(`${idx}. ${inlineHtml(li.trim())}`);
      idx++;
    });
    return items.join('\n') + '\n\n';
  });

  // Paragraphs
  md = md.replace(/<p[^>]*>([\s\S]*?)<\/p>/gi, (_, content) => `${inlineHtml(content.trim())}\n\n`);

  // Process any remaining inline HTML
  md = inlineHtml(md);

  // Clean up: collapse 3+ newlines into 2
  md = md.replace(/\n{3,}/g, '\n\n');

  // Remove leading/trailing whitespace
  md = md.trim();

  return md;
}

/** Convert inline HTML tags to Markdown. */
function inlineHtml(str) {
  let s = str;

  // Bold
  s = s.replace(/<strong[^>]*>([\s\S]*?)<\/strong>/gi, '**$1**');
  s = s.replace(/<b[^>]*>([\s\S]*?)<\/b>/gi, '**$1**');

  // Italic
  s = s.replace(/<em[^>]*>([\s\S]*?)<\/em>/gi, '*$1*');
  s = s.replace(/<i[^>]*>([\s\S]*?)<\/i>/gi, '*$1*');

  // Links
  s = s.replace(/<a\s+href="([^"]*)"[^>]*>([\s\S]*?)<\/a>/gi, '[$2]($1)');

  // Line breaks
  s = s.replace(/<br\s*\/?>/gi, '\n');

  // Strip any remaining HTML tags
  s = s.replace(/<[^>]+>/g, '');

  // Decode basic HTML entities
  s = s.replace(/&amp;/g, '&');
  s = s.replace(/&lt;/g, '<');
  s = s.replace(/&gt;/g, '>');
  s = s.replace(/&quot;/g, '"');
  s = s.replace(/&#39;/g, "'");
  s = s.replace(/&mdash;/g, '\u2014');
  s = s.replace(/&ndash;/g, '\u2013');
  s = s.replace(/&nbsp;/g, ' ');

  return s;
}

// ---------------------------------------------------------------------------
// File writers
// ---------------------------------------------------------------------------

function ensureDir(dir) {
  mkdirSync(dir, { recursive: true });
}

function writeMarkdown(filepath, frontmatter, body) {
  const content = body ? `${frontmatter}\n\n${body}\n` : `${frontmatter}\n`;
  writeFileSync(filepath, content, 'utf-8');
}

// ---------------------------------------------------------------------------
// 1. Company Info
// ---------------------------------------------------------------------------

function migrateCompanyInfo() {
  const dir = resolve(CONTENT_DIR, 'company');
  ensureDir(dir);

  const fm = buildFrontmatter([
    ['name', companyInfo.name],
    ['shortName', companyInfo.shortName],
    ['ownerName', companyInfo.ownerName],
    ['phone', companyInfo.phone],
    ['phoneRaw', companyInfo.phoneRaw],
    ['email', companyInfo.email],
    ['website', companyInfo.website],
    ['address', companyInfo.address],
    ['city', companyInfo.city],
    ['state', companyInfo.state],
    ['zip', companyInfo.zip],
    ['tagline', companyInfo.tagline],
    ['foundedYear', companyInfo.foundedYear],
    ['googleRating', companyInfo.googleRating],
    ['totalReviews', companyInfo.totalReviews],
    ['licenseName', companyInfo.licenseName],
    ['licenseNumber', companyInfo.licenseNumber],
    ['warrantyLabor', companyInfo.warranty.labor],
    ['warrantyParts', companyInfo.warranty.parts],
    ['warrantySprings', companyInfo.warranty.springs],
    ['guarantees', companyInfo.guarantees],
  ]);

  writeMarkdown(resolve(dir, 'info.md'), fm, '');
  console.log('  content/company/info.md');
}

// ---------------------------------------------------------------------------
// 2. Services
// ---------------------------------------------------------------------------

function migrateServices() {
  const dir = resolve(CONTENT_DIR, 'services');
  ensureDir(dir);

  for (const svc of services) {
    const fm = buildFrontmatter([
      ['id', svc.id],
      ['slug', svc.slug],
      ['name', svc.name],
      ['metaTitle', svc.metaTitle],
      ['metaDescription', svc.metaDescription],
      ['h1Title', svc.h1Title],
      ['introParagraph', svc.introParagraph],
      ['iconName', svc.iconName],
      ['image', svc.image],
      ['ctaHeadline', svc.ctaHeadline],
      ['ctaButtonText', svc.ctaButtonText],
      ['relatedServiceIds', svc.relatedServiceIds],
      ['relatedBlogIds', svc.relatedBlogIds],
      ['relatedOfferIds', svc.relatedOfferIds],
      ['faqs', svc.faqs],
    ]);

    const body = htmlToMarkdown(svc.content);
    const filename = `${svc.slug}.md`;
    writeMarkdown(resolve(dir, filename), fm, body);
    console.log(`  content/services/${filename}`);
  }
}

// ---------------------------------------------------------------------------
// 3. Service Areas
// ---------------------------------------------------------------------------

function migrateServiceAreas() {
  const dir = resolve(CONTENT_DIR, 'service-areas');
  ensureDir(dir);

  for (const area of serviceAreas) {
    const fm = buildFrontmatter([
      ['id', area.id],
      ['slug', area.slug],
      ['cityName', area.cityName],
      ['metaTitle', area.metaTitle],
      ['metaDescription', area.metaDescription],
      ['h1Title', area.h1Title],
      ['introParagraph', area.introParagraph],
      ['mapEmbedUrl', area.mapEmbedUrl],
      ['relatedServiceIds', area.relatedServiceIds],
      ['relatedBlogIds', area.relatedBlogIds],
      ['relatedOfferIds', area.relatedOfferIds],
    ]);

    const body = htmlToMarkdown(area.areaContent);
    const filename = `${area.slug}.md`;
    writeMarkdown(resolve(dir, filename), fm, body);
    console.log(`  content/service-areas/${filename}`);
  }
}

// ---------------------------------------------------------------------------
// 4. Reviews
// ---------------------------------------------------------------------------

function migrateReviews() {
  const dir = resolve(CONTENT_DIR, 'reviews');
  ensureDir(dir);

  for (const rev of reviews) {
    const fm = buildFrontmatter([
      ['id', rev.id],
      ['reviewerName', rev.reviewerName],
      ['city', rev.city],
      ['rating', rev.rating],
      ['text', rev.text],
      ['serviceUsed', rev.serviceUsed],
      ['date', rev.date],
    ]);

    const filename = `${rev.id}.md`;
    writeMarkdown(resolve(dir, filename), fm, '');
    console.log(`  content/reviews/${filename}`);
  }
}

// ---------------------------------------------------------------------------
// 5. Offers
// ---------------------------------------------------------------------------

function migrateOffers() {
  const dir = resolve(CONTENT_DIR, 'offers');
  ensureDir(dir);

  for (const offer of offers) {
    const fm = buildFrontmatter([
      ['id', offer.id],
      ['slug', offer.slug],
      ['title', offer.title],
      ['headline', offer.headline],
      ['discountAmount', offer.discountAmount],
      ['expiration', offer.expiration],
      ['disclaimer', offer.disclaimer],
      ['relatedServiceIds', offer.relatedServiceIds],
    ]);

    const filename = `${offer.slug}.md`;
    writeMarkdown(resolve(dir, filename), fm, '');
    console.log(`  content/offers/${filename}`);
  }
}

// ---------------------------------------------------------------------------
// 6. Blog Posts
// ---------------------------------------------------------------------------

function migrateBlogPosts() {
  const dir = resolve(CONTENT_DIR, 'blog');
  ensureDir(dir);

  for (const post of blogPosts) {
    const fm = buildFrontmatter([
      ['id', post.id],
      ['slug', post.slug],
      ['title', post.title],
      ['excerpt', post.excerpt],
      ['featuredImage', post.featuredImage],
      ['date', post.date],
      ['tags', post.tags],
      ['author', post.author],
      ['authorRole', post.authorRole],
      ['relatedServiceIds', post.relatedServiceIds],
      ['relatedBlogIds', post.relatedBlogIds],
    ]);

    const body = htmlToMarkdown(post.content);
    const filename = `${post.slug}.md`;
    writeMarkdown(resolve(dir, filename), fm, body);
    console.log(`  content/blog/${filename}`);
  }
}

// ---------------------------------------------------------------------------
// Main
// ---------------------------------------------------------------------------

console.log('Migrating cms.ts content to Markdown files...\n');

migrateCompanyInfo();
migrateServices();
migrateServiceAreas();
migrateReviews();
migrateOffers();
migrateBlogPosts();

const totalFiles =
  1 +
  services.length +
  serviceAreas.length +
  reviews.length +
  offers.length +
  blogPosts.length;

console.log(`\nDone! ${totalFiles} Markdown files written to content/`);
