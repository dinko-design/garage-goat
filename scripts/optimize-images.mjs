#!/usr/bin/env node
/**
 * Image optimization script:
 * 1. Converts large Figma PNGs to optimized JPEGs in public/images/brand/
 * 2. Creates WebP versions of all JPEG/PNG images in public/
 * 3. Optimizes the logo PNG
 */
import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

const ROOT = path.resolve(import.meta.dirname, '..');
const PUBLIC = path.join(ROOT, 'public');
const ASSETS = path.join(ROOT, 'src', 'assets');

async function convertFigmaAssets() {
  console.log('Converting large Figma PNGs...');

  // Brand board (2.6MB PNG -> optimized JPEG)
  await sharp(path.join(ASSETS, 'bf3840f9f81536f862c29056d262368358836920.png'))
    .resize(1200, null, { withoutEnlargement: true })
    .jpeg({ quality: 80, progressive: true })
    .toFile(path.join(PUBLIC, 'images/brand/brand-board.jpg'));
  console.log('  brand-board.jpg created');

  // Warranty flyer (3.2MB PNG -> optimized JPEG)
  await sharp(path.join(ASSETS, '92e76f21d7bc4840c5f5366a337d159fd9b96878.png'))
    .resize(1200, null, { withoutEnlargement: true })
    .jpeg({ quality: 80, progressive: true })
    .toFile(path.join(PUBLIC, 'images/brand/warranty-flyer.jpg'));
  console.log('  warranty-flyer.jpg created');

  // Optimize logo PNG (273KB -> much smaller)
  await sharp(path.join(ASSETS, 'ba1e44b3fc96187901f7ffaa888d6f0ec809bc70.png'))
    .resize(400, null, { withoutEnlargement: true })
    .png({ quality: 80, compressionLevel: 9 })
    .toFile(path.join(PUBLIC, 'images/brand/logo.png'));
  console.log('  logo.png optimized');
}

async function createWebPVersions() {
  console.log('\nCreating WebP versions...');

  const dirs = [
    'images/stock',
    'images/real',
    'images/brand',
    'images/trust',
  ];

  for (const dir of dirs) {
    const fullDir = path.join(PUBLIC, dir);
    if (!fs.existsSync(fullDir)) continue;

    const files = fs.readdirSync(fullDir);
    for (const file of files) {
      const ext = path.extname(file).toLowerCase();
      if (!['.jpg', '.jpeg', '.png'].includes(ext)) continue;
      if (file.endsWith('.webp')) continue;

      const input = path.join(fullDir, file);
      const output = path.join(fullDir, file.replace(/\.(jpg|jpeg|png)$/i, '.webp'));

      if (fs.existsSync(output)) continue;

      try {
        await sharp(input)
          .webp({ quality: 80 })
          .toFile(output);
        const origSize = fs.statSync(input).size;
        const webpSize = fs.statSync(output).size;
        const savings = ((1 - webpSize / origSize) * 100).toFixed(0);
        console.log(`  ${dir}/${file} -> .webp (${savings}% smaller)`);
      } catch (err) {
        console.error(`  Error converting ${file}:`, err.message);
      }
    }
  }
}

async function main() {
  await convertFigmaAssets();
  await createWebPVersions();
  console.log('\nDone! Image optimization complete.');
}

main().catch(console.error);
