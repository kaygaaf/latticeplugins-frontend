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

// Lattice Invoices is not an official shop product. The direct invoice
// landing/docs/tools/demo pages may exist as deep-link content, but the
// homepage and site chrome must never promote the invoice funnel.
const forbiddenInvoiceFunnelTerms = [
  'Lattice Invoices',
  'WooCommerce EU invoice workflow',
  'VAT/BTW invoices',
  'View Lattice Invoices offer',
  'Score invoice fit',
  'View invoice demo',
  'Send ready-to-buy request',
  'href="/woocommerce-eu-vat-invoices"',
  'href="/tools/woocommerce-invoice-roi-calculator"',
  'href="/tools/woocommerce-invoice-fit-check"',
  'href="/tools/woocommerce-invoice-setup-brief"',
  'href="/demo/lattice-invoices"',
  'href="/product/lattice-invoices"',
  'Ready%20to%20buy%20Lattice%20Invoices',
  'Primary WooCommerce revenue focus',
];

const missingOfficialCatalogTerms = requiredOfficialCatalogTerms.filter((term) => !homeSource.includes(term));
const presentForbiddenTerms = forbiddenInvoiceFunnelTerms.filter((term) => homeSource.includes(term));

if (missingOfficialCatalogTerms.length > 0 || presentForbiddenTerms.length > 0) {
  console.error('FAIL: homepage catalog guard failed');
  if (missingOfficialCatalogTerms.length > 0) {
    console.error(`Official catalog terms missing: ${missingOfficialCatalogTerms.join(', ')}`);
  }
  if (presentForbiddenTerms.length > 0) {
    console.error(`Forbidden invoice-funnel terms on primary surface: ${presentForbiddenTerms.join(', ')}`);
  }
  process.exit(1);
}

console.log('PASS: homepage promotes only the official 7-product catalog with no invoice funnel terms');
