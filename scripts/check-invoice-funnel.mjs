#!/usr/bin/env node
import { readFileSync } from 'node:fs';

const landing = readFileSync('src/app/woocommerce-eu-vat-invoices/page.tsx', 'utf8');
const docs = readFileSync('src/app/docs/woocommerce-eu-vat-invoice-setup/page.tsx', 'utf8');
const productAlias = readFileSync('src/app/product/lattice-invoices/page.tsx', 'utf8');
const roiTool = readFileSync('src/app/tools/woocommerce-invoice-roi-calculator/page.tsx', 'utf8');

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
  '/blog/woocommerce-invoice-plugin-alternative',
  '/blog/woocommerce-pdf-invoices-packing-slips-alternative',
  '/blog/woocommerce-invoice-plugin-for-consultants',
  '/blog/woocommerce-invoice-plugin-for-coaches',
  '/tools/woocommerce-invoice-roi-calculator',
  'Calculate invoice ROI',
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

if (!productAlias.includes('export { default } from "../../woocommerce-eu-vat-invoices/page"')) {
  failures.push('product/lattice-invoices must render the invoice landing page instead of 404ing');
}

for (const term of ['Lattice Invoices', '/woocommerce-eu-vat-invoices', 'Calculate invoice ROI']) {
  if (!roiTool.includes(term)) {
    failures.push(`invoice ROI tool is missing direct invoice term: ${term}`);
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
    'price visible on invoice landing',
    'early access CTA visible on invoice landing',
    'fit-score CTA visible on invoice landing',
    'setup guide back-links visible',
    'invoice guide links visible on invoice landing',
    'invoice ROI tool links back to the direct invoice offer',
  ],
}, null, 2));
