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

for (const slug of officialSlugs) {
  if (!source.includes(`"${slug}"`)) {
    failures.push(`missing official product SEO/catalog entry for ${slug}`);
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
