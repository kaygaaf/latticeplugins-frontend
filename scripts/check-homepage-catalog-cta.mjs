#!/usr/bin/env node
import { readFileSync } from 'node:fs';

const homeSource = [
  'src/app/page.tsx',
  'src/components/Header.tsx',
  'src/components/Footer.tsx',
].map((path) => readFileSync(path, 'utf8')).join('\n');

const requiredInvoiceRevenueTerms = [
  'Sell to EU business buyers without invoice support tickets.',
  'href="/woocommerce-eu-vat-invoices"',
  'View EU invoice workflow',
  'Request €49 invoice access',
  'Lattice Invoices: EU VAT/BTW invoice workflow for WooCommerce.',
  'Read setup guide',
  'href="/docs/woocommerce-eu-vat-invoice-setup"',
  'VAT/BTW and company fields before payment',
  'Credit notes tied to WooCommerce refunds',
];

const missingInvoiceRevenueTerms = requiredInvoiceRevenueTerms.filter((term) => !homeSource.includes(term));

if (missingInvoiceRevenueTerms.length > 0) {
  console.error('FAIL: homepage invoice revenue CTA guard failed');
  console.error(`Invoice revenue terms missing: ${missingInvoiceRevenueTerms.join(', ')}`);
  process.exit(1);
}

console.log('PASS: homepage pushes the Lattice Invoices revenue path');
