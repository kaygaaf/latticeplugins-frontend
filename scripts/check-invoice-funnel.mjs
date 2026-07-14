#!/usr/bin/env node
import { readFileSync } from 'node:fs';

const landing = readFileSync('src/app/woocommerce-eu-vat-invoices/page.tsx', 'utf8');
const docs = readFileSync('src/app/docs/woocommerce-eu-vat-invoice-setup/page.tsx', 'utf8');
const productAlias = readFileSync('src/app/product/lattice-invoices/page.tsx', 'utf8');
const roiTool = readFileSync('src/app/tools/woocommerce-invoice-roi-calculator/page.tsx', 'utf8');
const fitCheck = readFileSync('src/app/tools/woocommerce-invoice-fit-check/page.tsx', 'utf8');
const fitCheckClient = readFileSync('src/app/tools/woocommerce-invoice-fit-check/InvoiceFitCheck.tsx', 'utf8');
const setupBrief = readFileSync('src/app/tools/woocommerce-invoice-setup-brief/page.tsx', 'utf8');
const setupBriefClient = readFileSync('src/app/tools/woocommerce-invoice-setup-brief/InvoiceSetupBrief.tsx', 'utf8');
const demo = readFileSync('src/app/demo/lattice-invoices/page.tsx', 'utf8');
const membershipGuide = readFileSync('src/app/blog/woocommerce-invoice-plugin-for-memberships/page.tsx', 'utf8');
const rentalGuide = readFileSync('src/app/blog/woocommerce-rental-vat-invoices/page.tsx', 'utf8');
const eInvoicingGuide = readFileSync('src/app/blog/woocommerce-e-invoicing-plugin/page.tsx', 'utf8');
const guideCards = readFileSync('src/app/blog/guide-cards.ts', 'utf8');
const sitemapRoute = readFileSync('src/app/sitemap.xml/route.ts', 'utf8');

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
  '/blog/woocommerce-invoice-plugin-for-law-firms',
  '/blog/woocommerce-invoice-plugin-for-architects',
  '/blog/woocommerce-wholesale-invoice-plugin',
  '/blog/woocommerce-rental-vat-invoices',
  '/blog/woocommerce-e-invoicing-plugin',
  '/blog/woocommerce-invoice-plugin-for-coaches',
  '/tools/woocommerce-invoice-roi-calculator',
  '/tools/woocommerce-invoice-fit-check',
  '/tools/woocommerce-invoice-setup-brief',
  '/demo/lattice-invoices',
  'Calculate invoice ROI',
  'Score invoice fit',
  'Generate setup brief',
  'Ready-to-buy email',
  'Turn invoice pain into a €49 early-access request in one email.',
  'Send ready-to-buy request',
  'Ready%20to%20buy%20Lattice%20Invoices%20%E2%82%AC49',
  'Store URL + country',
  'B2B/B2C mix and monthly invoice request volume',
  'Credit-note, refund, and accountant export requirements',
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

for (const term of [
  'WooCommerce Invoice Setup Brief Generator',
  'Generate the invoice setup brief',
  'Send setup brief for €49 early access',
  'Lattice Invoices setup brief',
  'VAT / checkout fields',
  'Credit notes for refunds',
  'View Lattice Invoices offer',
]) {
  if (!setupBrief.includes(term) && !setupBriefClient.includes(term)) {
    failures.push(`invoice setup-brief tool is missing purchase-friction term: ${term}`);
  }
}

if (!setupBriefClient.includes('mailto:support@latticeplugins.com') || !setupBriefClient.includes('Fit score:') || !setupBriefClient.includes('€49 Lattice Invoices early-access review')) {
  failures.push('invoice setup-brief tool must generate a prefilled €49 early-access email with the computed score');
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

for (const term of [
  'WooCommerce invoice plugin for memberships',
  'Request €49 membership invoice review',
  'renewal invoices',
  'failed-payment',
  'Customer-facing invoice PDF downloads inside My Account',
  'mailto:support@latticeplugins.com?subject=WooCommerce%20membership%20invoice%20workflow%20review',
  '/tools/woocommerce-invoice-roi-calculator',
  '/docs/woocommerce-eu-vat-invoice-setup',
]) {
  if (!membershipGuide.includes(term)) {
    failures.push(`membership invoice guide is missing buyer-intent term: ${term}`);
  }
}

for (const source of [guideCards, sitemapRoute]) {
  if (!source.includes('/blog/woocommerce-invoice-plugin-for-memberships')) {
    failures.push('membership invoice guide must be discoverable from blog cards and sitemap route');
  }
}

if ((membershipGuide.match(/href=\{mailto\}/g) || []).length < 2) {
  failures.push('membership invoice guide must include at least 2 prefilled email CTAs');
}

for (const term of [
  'WooCommerce rental VAT invoices',
  'Request €49 rental invoice review',
  'Deposits and security holds must stay separate from rental revenue',
  'Damage fees and partial refunds need credit-note logic',
  'Send rental invoice fit request',
  'mailto:support@latticeplugins.com?subject=WooCommerce%20rental%20VAT%20invoice%20workflow%20review',
  '/tools/woocommerce-invoice-setup-brief',
  '/demo/lattice-invoices',
]) {
  if (!rentalGuide.includes(term)) {
    failures.push(`rental invoice guide is missing buyer-intent term: ${term}`);
  }
}

for (const source of [landing, guideCards, sitemapRoute]) {
  if (!source.includes('/blog/woocommerce-rental-vat-invoices')) {
    failures.push('rental invoice guide must be discoverable from the invoice landing, blog cards, and sitemap route');
  }
}

if ((rentalGuide.match(/href=\{mailto\}/g) || []).length < 3) {
  failures.push('rental invoice guide must include at least 3 prefilled email CTAs');
}

for (const term of [
  'WooCommerce e-invoicing plugin',
  'Request e-invoicing fit check',
  'View Lattice Invoices €49 offer',
  'UBL/Peppol readiness',
  'credit notes',
  'accounting export',
  'mailto:support@latticeplugins.com?subject=Lattice%20Invoices%20e-invoicing%20plugin%20fit%20check',
  '/tools/woocommerce-invoice-setup-brief',
  '/blog/woocommerce-peppol-e-invoices',
  '/blog/woocommerce-ubl-invoices',
]) {
  if (!eInvoicingGuide.includes(term)) {
    failures.push(`e-invoicing plugin guide is missing buyer-intent term: ${term}`);
  }
}

for (const source of [landing, guideCards, sitemapRoute]) {
  if (!source.includes('/blog/woocommerce-e-invoicing-plugin')) {
    failures.push('e-invoicing plugin guide must be discoverable from the invoice landing, blog cards, and sitemap route');
  }
}

if ((eInvoicingGuide.match(/href=\{mailto\}/g) || []).length < 3) {
  failures.push('e-invoicing plugin guide must include at least 3 prefilled email CTAs');
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
    'invoice setup-brief tool turns buyer requirements into a prefilled €49 early-access email',
    'invoice demo page shows checkout, PDF, customer download, and credit-note proof points',
  ],
}, null, 2));
