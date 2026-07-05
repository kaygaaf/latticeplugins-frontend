#!/usr/bin/env node
import { readFileSync } from 'node:fs';

const primarySurfaceFiles = [
  'src/app/page.tsx',
  'src/components/Header.tsx',
  'src/components/Footer.tsx',
];

const homeSource = primarySurfaceFiles
  .map((path) => readFileSync(path, 'utf8'))
  .join('\n');

const requiredOfficialCtaTerms = [
  'href="/product/lattice-seo"',
  'View Lattice SEO',
  'Compare all 7 plugins',
  'Official catalog remains available',
  'Lattice Commerce Suite',
  'Lattice Core',
  'Lattice CRM',
  'Lattice Migrate',
  'Lattice Stripe Payments',
  'Lattice Subscribify',
  'Lattice SEO',
];

const forbiddenPrimarySurfaceTerms = [
  'Lattice Invoices',
  'Revenue focus: WooCommerce EU invoices',
  'View EU invoice workflow',
  'Read invoice setup guide',
  'Request €49 invoice access',
  'invoice funnel',
  'qualified early-access lead',
  '/woocommerce-eu-vat-invoices',
  '/docs/woocommerce-eu-vat-invoice-setup',
  'mailto:support@latticeplugins.com?subject=Lattice%20Invoices%20early%20access',
];

const missingOfficialCtaTerms = requiredOfficialCtaTerms.filter((term) => !homeSource.includes(term));
const presentForbiddenTerms = forbiddenPrimarySurfaceTerms.filter((term) => homeSource.includes(term));

if (missingOfficialCtaTerms.length > 0 || presentForbiddenTerms.length > 0) {
  console.error('FAIL: homepage/site-chrome catalog guard failed');
  if (missingOfficialCtaTerms.length > 0) {
    console.error(`Official catalog CTA terms missing: ${missingOfficialCtaTerms.join(', ')}`);
  }
  if (presentForbiddenTerms.length > 0) {
    console.error(`Forbidden primary-surface invoice terms found: ${presentForbiddenTerms.join(', ')}`);
  }
  process.exit(1);
}

console.log('PASS: homepage and site chrome stay within the official catalog');
