#!/usr/bin/env node
import { readFileSync } from 'node:fs';

const landing = readFileSync('src/app/woocommerce-eu-vat-invoices/page.tsx', 'utf8');
const docs = readFileSync('src/app/docs/woocommerce-eu-vat-invoice-setup/page.tsx', 'utf8');
const homepage = readFileSync('src/app/page.tsx', 'utf8');
const header = readFileSync('src/components/Header.tsx', 'utf8');

const failures = [];

const requiredLandingTerms = [
  'Lattice Invoices',
  '€49',
  'Request €49 early access',
  'Send my fit score',
  'Should this store request €49 early access?',
  'Score 3+ points?',
  'B2B buyers ask for corrected VAT/BTW invoices',
  'Support manually creates PDFs after payment',
  'Refunds or partial refunds need credit notes',
  'mailto:support@latticeplugins.com?subject=Lattice%20Invoices%20early%20access%20-%20%E2%82%AC49%20license',
  'mailto:support@latticeplugins.com?subject=Lattice%20Invoices%20qualification%20score%203%2B',
  '/docs/woocommerce-eu-vat-invoice-setup',
  '/blog/woocommerce-btw-factuur-plugin-nederland',
  '/blog/woocommerce-vat-invoice-plugin-eu',
  '/blog/woocommerce-pdf-invoices-packing-slips-alternative',
];

for (const term of requiredLandingTerms) {
  if (!landing.includes(term)) {
    failures.push(`invoice landing is missing conversion term: ${term}`);
  }
}

const mailtoCount = (landing.match(/mailto:support@latticeplugins\.com/g) || []).length;
if (mailtoCount < 3) {
  failures.push(`invoice landing has only ${mailtoCount} mailto CTAs; expected at least 3`);
}

const guideLinks = (landing.match(/\/blog\/woocommerce-/g) || []).length;
if (guideLinks < 20) {
  failures.push(`invoice landing links to only ${guideLinks} WooCommerce invoice guides; expected at least 20`);
}

if (!docs.includes('Request invoice setup help') || !docs.includes('View Lattice Invoices offer')) {
  failures.push('invoice setup guide must link back to both setup-help and Lattice Invoices offer CTAs');
}

const requiredDiscoveryTerms = [
  'Revenue focus: WooCommerce EU invoicing',
  'View Lattice Invoices offer',
  'Request invoice fit check',
  '/woocommerce-eu-vat-invoices',
  'EU Invoices',
];

for (const term of requiredDiscoveryTerms) {
  if (!homepage.includes(term) && !header.includes(term)) {
    failures.push(`homepage/header discovery is missing invoice funnel term: ${term}`);
  }
}

if (failures.length) {
  console.error('Invoice funnel smoke check failed:');
  for (const failure of failures) console.error(`- ${failure}`);
  process.exit(1);
}

console.log(JSON.stringify({
  ok: true,
  invoiceLanding: '/woocommerce-eu-vat-invoices',
  mailtoCtas: mailtoCount,
  guideLinks,
  checks: [
    'price visible',
    'early access CTA visible',
    'fit-score CTA visible',
    'homepage invoice discovery CTA visible',
    'header invoice navigation visible',
    'setup guide back-links visible',
  ],
}, null, 2));
