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

const requiredOfficialCatalogTerms = [
  'href="/shop"',
  'Compare all 7 plugins',
  'Lattice Commerce Suite',
  'Lattice Core',
  'Lattice CRM',
  'Lattice Migrate',
  'Lattice Stripe Payments',
  'Lattice Subscribify',
  'Lattice SEO',
  'href="/product/lattice-seo"',
  'href="/product/lattice-commerce-suite"',
];

const forbiddenPrimarySurfaceTerms = [
  'Lattice Invoices',
  'EU Invoices',
  'Primary WooCommerce revenue focus',
  'View Lattice Invoices offer',
  'VAT/BTW invoices',
  'VAT/BTW fields',
  'invoice ROI',
  '/woocommerce-eu-vat-invoices',
  '/docs/woocommerce-eu-vat-invoice-setup',
  '/tools/woocommerce-invoice-roi-calculator',
  'mailto:support@latticeplugins.com?subject=Lattice%20Invoices',
  'href="/product/lattice-invoices"',
];

const missingOfficialCatalogTerms = requiredOfficialCatalogTerms.filter((term) => !homeSource.includes(term));
const presentForbiddenTerms = forbiddenPrimarySurfaceTerms.filter((term) => homeSource.includes(term));

if (missingOfficialCatalogTerms.length > 0 || presentForbiddenTerms.length > 0) {
  console.error('FAIL: homepage/site-chrome catalog guard failed');
  if (missingOfficialCatalogTerms.length > 0) {
    console.error(`Official catalog terms missing: ${missingOfficialCatalogTerms.join(', ')}`);
  }
  if (presentForbiddenTerms.length > 0) {
    console.error(`Forbidden primary-surface invoice terms found: ${presentForbiddenTerms.join(', ')}`);
  }
  process.exit(1);
}

console.log('PASS: homepage and site chrome stay within the official catalog');
