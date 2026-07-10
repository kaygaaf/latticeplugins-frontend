#!/usr/bin/env node
import { readFileSync } from 'node:fs';

const landing = readFileSync('src/app/woocommerce-eu-vat-invoices/page.tsx', 'utf8');
const docs = readFileSync('src/app/docs/woocommerce-eu-vat-invoice-setup/page.tsx', 'utf8');
const productAlias = readFileSync('src/app/product/lattice-invoices/page.tsx', 'utf8');
const roiTool = readFileSync('src/app/tools/woocommerce-invoice-roi-calculator/page.tsx', 'utf8');
const fitCheck = readFileSync('src/app/tools/woocommerce-invoice-fit-check/page.tsx', 'utf8');
const fitCheckClient = readFileSync('src/app/tools/woocommerce-invoice-fit-check/InvoiceFitCheck.tsx', 'utf8');
const demo = readFileSync('src/app/demo/lattice-invoices/page.tsx', 'utf8');

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
  '/blog/woocommerce-wholesale-invoice-plugin',
  '/blog/woocommerce-invoice-plugin-for-coaches',
  '/tools/woocommerce-invoice-roi-calculator',
  '/tools/woocommerce-invoice-fit-check',
  '/demo/lattice-invoices',
  'Calculate invoice ROI',
  'Score invoice fit',
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

for (const term of ['WooCommerce Invoice Fit Check', 'Score invoice fit', 'Send this fit-check score', 'View Lattice Invoices offer']) {
  if (!fitCheck.includes(term) && !fitCheckClient.includes(term)) {
    failures.push(`invoice fit-check tool is missing conversion term: ${term}`);
  }
}

if (!fitCheckClient.includes('mailto:support@latticeplugins.com') || !fitCheckClient.includes('Fit score:')) {
  failures.push('invoice fit-check tool must generate a prefilled mailto with the computed score');
}

const requiredDemoTerms = [
  'Lattice Invoices demo',
  'Request €49 early-access review',
  'B2B checkout captures invoice data before payment',
  'Paid order gets a dedicated invoice sequence',
  'Invoice PDF is attached and stored for download',
  'Refunds create linked credit notes',
  'Send demo fit-check request',
  '/docs/woocommerce-eu-vat-invoice-setup',
];

for (const term of requiredDemoTerms) {
  if (!demo.includes(term)) {
    failures.push(`invoice demo is missing buyer proof term: ${term}`);
  }
}

const demoMailtoCount = (demo.match(/mailto:support@latticeplugins\.com/g) || []).length;
if (demoMailtoCount < 2) {
  failures.push(`invoice demo has only ${demoMailtoCount} mailto CTAs; expected at least 2`);
}

if (failures.length) {
  console.error('Invoice funnel smoke check failed:');
  for (const failure of failures) console.error(`- ${failure}`);
  process.exit(1);
}

console.log(JSON.stringify({
  ok: true,
  invoiceLanding: '/woocommerce-eu-vat-invoices',
  demoPage: '/demo/lattice-invoices',
  mailtoCtas: mailtoCount,
  demoMailtoCtas: demoMailtoCount,
  guideLinks,
  checks: [
    'price visible on invoice landing',
    'early access CTA visible on invoice landing',
    'fit-score CTA visible on invoice landing',
    'setup guide back-links visible',
    'invoice guide links visible on invoice landing',
    'invoice ROI tool links back to the direct invoice offer',
    'invoice fit-check tool computes buyer qualification and generates a prefilled CTA email',
    'invoice demo page shows checkout, PDF, customer download, and credit-note proof points',
  ],
}, null, 2));
