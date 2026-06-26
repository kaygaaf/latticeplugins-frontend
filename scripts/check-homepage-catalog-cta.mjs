#!/usr/bin/env node
import { readFileSync } from 'node:fs';

const homeSource = [
  'src/app/page.tsx',
  'src/components/Header.tsx',
  'src/components/Footer.tsx',
].map((path) => readFileSync(path, 'utf8')).join('\n');

const disallowedHomepageTerms = [
  'EU Invoice Workflow',
  'View EU invoice workflow',
  'Lattice Invoices',
  'VAT/BTW invoices',
  'href="/woocommerce-eu-vat-invoices"',
  'href="/docs/woocommerce-eu-vat-invoice-setup"',
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
