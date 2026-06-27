#!/usr/bin/env node
import { readFileSync } from 'node:fs';

const homeSource = [
  'src/app/page.tsx',
  'src/components/Header.tsx',
  'src/components/Footer.tsx',
].map((path) => readFileSync(path, 'utf8')).join('\n');

const requiredOfficialCtaTerms = [
  'href="/product/lattice-seo"',
  'View Lattice SEO',
  'Compare all 7 plugins',
];

const disallowedHomepageTerms = [
  'Sell to EU business buyers without invoice support tickets.',
  'View EU invoice workflow',
  'Request €49 invoice access',
  'Lattice Invoices',
  'VAT/BTW invoice workflow',
  'href="/woocommerce-eu-vat-invoices"',
  'href="/docs/woocommerce-eu-vat-invoice-setup"',
];

const missingOfficialCtaTerms = requiredOfficialCtaTerms.filter((term) => !homeSource.includes(term));
const presentDisallowedTerms = disallowedHomepageTerms.filter((term) => homeSource.includes(term));

if (missingOfficialCtaTerms.length > 0 || presentDisallowedTerms.length > 0) {
  console.error('FAIL: homepage official catalog CTA guard failed');
  if (missingOfficialCtaTerms.length > 0) {
    console.error(`Official catalog CTA terms missing: ${missingOfficialCtaTerms.join(', ')}`);
  }
  if (presentDisallowedTerms.length > 0) {
    console.error(`Disallowed invoice promo terms found: ${presentDisallowedTerms.join(', ')}`);
  }
  process.exit(1);
}

console.log('PASS: homepage and site chrome stay within the official catalog');
