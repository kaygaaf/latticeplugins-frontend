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

const requiredInvoiceDiscoveryTerms = [
  'Lattice Invoices',
  'Revenue focus: WooCommerce EU invoicing',
  'View Lattice Invoices offer',
  'Request invoice fit check',
  '/woocommerce-eu-vat-invoices',
  '/docs/woocommerce-eu-vat-invoice-setup',
];

const missingOfficialCtaTerms = requiredOfficialCtaTerms.filter((term) => !homeSource.includes(term));
const missingInvoiceDiscoveryTerms = requiredInvoiceDiscoveryTerms.filter((term) => !homeSource.includes(term));

if (missingOfficialCtaTerms.length > 0 || missingInvoiceDiscoveryTerms.length > 0) {
  console.error('FAIL: homepage/site-chrome revenue guard failed');
  if (missingOfficialCtaTerms.length > 0) {
    console.error(`Official catalog CTA terms missing: ${missingOfficialCtaTerms.join(', ')}`);
  }
  if (missingInvoiceDiscoveryTerms.length > 0) {
    console.error(`Invoice funnel discovery terms missing: ${missingInvoiceDiscoveryTerms.join(', ')}`);
  }
  process.exit(1);
}

console.log('PASS: homepage and site chrome expose both the official catalog and invoice revenue funnel');
