#!/usr/bin/env node
import { readFileSync } from 'node:fs';

const homeSource = readFileSync('src/app/page.tsx', 'utf8');

const disallowedHomepageTerms = [
  'EU Invoice Workflow',
  'href="/woocommerce-eu-vat-invoices"',
];

const requiredOfficialCtaTerms = [
  'href="/product/lattice-seo"',
  'View Lattice SEO',
];

const presentDisallowedTerms = disallowedHomepageTerms.filter((term) => homeSource.includes(term));
const missingOfficialCtaTerms = requiredOfficialCtaTerms.filter((term) => !homeSource.includes(term));

if (presentDisallowedTerms.length > 0 || missingOfficialCtaTerms.length > 0) {
  console.error('FAIL: homepage catalog CTA guard failed');
  if (presentDisallowedTerms.length > 0) {
    console.error(`Disallowed homepage promo terms found: ${presentDisallowedTerms.join(', ')}`);
  }
  if (missingOfficialCtaTerms.length > 0) {
    console.error(`Official homepage CTA terms missing: ${missingOfficialCtaTerms.join(', ')}`);
  }
  process.exit(1);
}

console.log('PASS: homepage hero CTA stays within the official catalog');
