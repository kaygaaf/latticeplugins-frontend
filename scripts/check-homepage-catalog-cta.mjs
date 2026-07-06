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

const requiredInvoiceFunnelTerms = [
  'href="/woocommerce-eu-vat-invoices"',
  'EU Invoices',
  'Primary revenue focus: WooCommerce EU invoicing',
  'See the invoice workflow',
  'Qualify for €49 early access',
  'VAT/BTW checkout fields',
  'credit notes',
  'customer downloads',
];

const requiredOfficialCatalogSafetyTerms = [
  'href="/shop"',
  'Compare all 7 plugins',
  'Shop official catalog',
  'Lattice Commerce Suite',
  'Lattice SEO',
];

const forbiddenPrimarySurfaceTerms = [
  'lattice-invoices"',
  'href="/product/lattice-invoices"',
  'add-to-cart=invoice',
  'Buy Lattice Invoices now',
];

const missingInvoiceTerms = requiredInvoiceFunnelTerms.filter((term) => !homeSource.includes(term));
const missingCatalogSafetyTerms = requiredOfficialCatalogSafetyTerms.filter((term) => !homeSource.includes(term));
const presentForbiddenTerms = forbiddenPrimarySurfaceTerms.filter((term) => homeSource.includes(term));

if (missingInvoiceTerms.length > 0 || missingCatalogSafetyTerms.length > 0 || presentForbiddenTerms.length > 0) {
  console.error('FAIL: homepage/site-chrome invoice revenue funnel guard failed');
  if (missingInvoiceTerms.length > 0) {
    console.error(`Invoice funnel terms missing: ${missingInvoiceTerms.join(', ')}`);
  }
  if (missingCatalogSafetyTerms.length > 0) {
    console.error(`Official catalog safety terms missing: ${missingCatalogSafetyTerms.join(', ')}`);
  }
  if (presentForbiddenTerms.length > 0) {
    console.error(`Forbidden fake invoice product checkout terms found: ${presentForbiddenTerms.join(', ')}`);
  }
  process.exit(1);
}

console.log('PASS: homepage prioritizes the invoice revenue funnel while preserving official catalog access');
