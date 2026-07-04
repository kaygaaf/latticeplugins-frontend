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
  'Official catalog remains available',
];

const requiredInvoiceRevenueTerms = [
  'Revenue focus: WooCommerce EU invoices',
  'Sell to EU business buyers without invoice support tickets.',
  'Lattice Invoices',
  '€49 early access',
  'View EU invoice workflow',
  'Read invoice setup guide',
  'Request €49 invoice access',
  'href="/woocommerce-eu-vat-invoices"',
  'href="/docs/woocommerce-eu-vat-invoice-setup"',
  'mailto:support@latticeplugins.com?subject=Lattice%20Invoices%20early%20access%20-%20%E2%82%AC49%20license',
  'Score 3+ points? The store is a qualified early-access lead for Lattice Invoices.',
];

const missingOfficialCtaTerms = requiredOfficialCtaTerms.filter((term) => !homeSource.includes(term));
const missingInvoiceRevenueTerms = requiredInvoiceRevenueTerms.filter((term) => !homeSource.includes(term));

if (missingOfficialCtaTerms.length > 0 || missingInvoiceRevenueTerms.length > 0) {
  console.error('FAIL: homepage revenue CTA guard failed');
  if (missingOfficialCtaTerms.length > 0) {
    console.error(`Official catalog CTA terms missing: ${missingOfficialCtaTerms.join(', ')}`);
  }
  if (missingInvoiceRevenueTerms.length > 0) {
    console.error(`Invoice revenue CTA terms missing: ${missingInvoiceRevenueTerms.join(', ')}`);
  }
  process.exit(1);
}

console.log('PASS: homepage promotes invoice revenue funnel while preserving official catalog CTA');
