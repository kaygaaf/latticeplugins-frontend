#!/usr/bin/env node
import { readFileSync } from 'node:fs';

const source = readFileSync('src/app/product/[slug]/page.tsx', 'utf8');

const officialSlugs = [
  'lattice-commerce-suite',
  'lattice-core',
  'lattice-crm',
  'lattice-migrate',
  'lattice-stripe-payments',
  'lattice-subscribify',
  'lattice-seo',
];

const failures = [];

if (!source.includes('export async function generateMetadata')) {
  failures.push('product detail route must export generateMetadata');
}

if (!source.includes('openGraph')) {
  failures.push('product detail metadata must include Open Graph fields');
}

if (!source.includes('alternates')) {
  failures.push('product detail metadata must include canonical alternates');
}

if (!source.includes('application/ld+json') || !source.includes('"@type": "Product"')) {
  failures.push('product detail route must render Product JSON-LD structured data');
}

if (!source.includes('"availability"') || !source.includes('"priceCurrency"')) {
  failures.push('Product JSON-LD must include offer availability and price currency');
}

for (const slug of officialSlugs) {
  if (!source.includes(`"${slug}"`)) {
    failures.push(`missing official product SEO/catalog entry for ${slug}`);
  }
}

const sitemapSource = readFileSync('src/app/sitemap.xml/route.ts', 'utf8');
for (const slug of officialSlugs) {
  const productPath = `/product/${slug}`;
  if (!sitemapSource.includes(`'${productPath}'`) && !sitemapSource.includes(`"${productPath}"`)) {
    failures.push(`sitemap is missing official product URL: ${productPath}`);
  }
}

const removedSlugs = [
  'lattice-abandoned-cart',
  'lattice-checkout-upsell',
  'lattice-direct-checkout',
  'lattice-trust-badges',
  'lattice-coupons',
  'lattice-analytics',
  'lattice-auto-updater',
  'lattice-license-manager',
  'lattice-license-server',
  'lattice-product-comparison',
  'lattice-social-proof',
];

for (const slug of removedSlugs) {
  if (source.includes(`"${slug}"`) || source.includes(`'${slug}'`)) {
    failures.push(`removed product slug should not appear in product route: ${slug}`);
  }
}

if (failures.length) {
  console.error('Product SEO smoke check failed:');
  for (const failure of failures) console.error(`- ${failure}`);
  process.exit(1);
}

console.log('Product SEO smoke check passed');
