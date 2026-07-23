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
  'Official 7-product catalog',
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

const requiredRevenueFocusTerms = [
  'Lattice Invoices',
  'WooCommerce EU invoice workflow',
  'View Lattice Invoices offer',
  'Score invoice fit',
  'View invoice demo',
  'Send ready-to-buy request',
  'href="/woocommerce-eu-vat-invoices"',
  'href="/tools/woocommerce-invoice-fit-check"',
  'href="/demo/lattice-invoices"',
  'mailto:support@latticeplugins.com?subject=Ready%20to%20buy%20Lattice%20Invoices%20%E2%82%AC49',
];

const stillForbiddenPrimarySurfaceTerms = [
  'href="/product/lattice-invoices"',
  'Primary WooCommerce revenue focus',
];

const missingOfficialCatalogTerms = requiredOfficialCatalogTerms.filter((term) => !homeSource.includes(term));
const missingRevenueFocusTerms = requiredRevenueFocusTerms.filter((term) => !homeSource.includes(term));
const presentForbiddenTerms = stillForbiddenPrimarySurfaceTerms.filter((term) => homeSource.includes(term));

if (missingOfficialCatalogTerms.length > 0 || missingRevenueFocusTerms.length > 0 || presentForbiddenTerms.length > 0) {
  console.error('FAIL: homepage catalog + invoice revenue guard failed');
  if (missingOfficialCatalogTerms.length > 0) {
    console.error(`Official catalog terms missing: ${missingOfficialCatalogTerms.join(', ')}`);
  }
  if (missingRevenueFocusTerms.length > 0) {
    console.error(`Invoice revenue-focus terms missing: ${missingRevenueFocusTerms.join(', ')}`);
  }
  if (presentForbiddenTerms.length > 0) {
    console.error(`Forbidden primary-surface terms found: ${presentForbiddenTerms.join(', ')}`);
  }
  process.exit(1);
}

console.log('PASS: homepage preserves the official catalog while promoting the invoice revenue path');
