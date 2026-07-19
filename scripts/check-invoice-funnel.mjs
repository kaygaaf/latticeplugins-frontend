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
const softwareLicenseGuide = readFileSync('src/app/blog/woocommerce-software-license-invoices/page.tsx', 'utf8');
const trainingCompanyGuide = readFileSync('src/app/blog/woocommerce-training-company-invoices/page.tsx', 'utf8');
const businessCustomerGuide = readFileSync('src/app/blog/woocommerce-business-customer-invoices/page.tsx', 'utf8');
const realEstateGuide = readFileSync('src/app/blog/woocommerce-real-estate-invoices/page.tsx', 'utf8');
const publicSectorGuide = readFileSync('src/app/blog/woocommerce-public-sector-invoices/page.tsx', 'utf8');
const nonprofitDonationGuide = readFileSync('src/app/blog/woocommerce-nonprofit-donation-invoices/page.tsx', 'utf8');
const schoolCourseGuide = readFileSync('src/app/blog/woocommerce-school-course-invoices/page.tsx', 'utf8');
const hotelBookingGuide = readFileSync('src/app/blog/woocommerce-hotel-booking-invoices/page.tsx', 'utf8');
const cateringEventGuide = readFileSync('src/app/blog/woocommerce-catering-event-invoices/page.tsx', 'utf8');
const repairServiceGuide = readFileSync('src/app/blog/woocommerce-repair-service-invoices/page.tsx', 'utf8');
const maintenanceContractGuide = readFileSync('src/app/blog/woocommerce-maintenance-contract-invoices/page.tsx', 'utf8');
const subscriptionInvoiceGuide = readFileSync('src/app/blog/woocommerce-subscription-invoice-plugin/page.tsx', 'utf8');
const cleaningServiceGuide = readFileSync('src/app/blog/woocommerce-cleaning-service-invoices/page.tsx', 'utf8');
const restaurantTakeawayGuide = readFileSync('src/app/blog/woocommerce-restaurant-takeaway-invoices/page.tsx', 'utf8');
const medicalSupplyGuide = readFileSync('src/app/blog/woocommerce-medical-supply-invoices/page.tsx', 'utf8');
const quoteToInvoiceGuide = readFileSync('src/app/blog/woocommerce-quote-to-invoice-plugin/page.tsx', 'utf8');
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
  '/blog/woocommerce-maintenance-contract-invoices',
  '/blog/woocommerce-rental-vat-invoices',
  '/blog/woocommerce-quote-to-invoice-plugin',
  '/blog/woocommerce-e-invoicing-plugin',
  '/blog/woocommerce-training-company-invoices',
  '/blog/woocommerce-public-sector-invoices',
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

for (const term of [
  'WooCommerce cleaning service invoices',
  'Request €49 cleaning invoice review',
  'Service-site metadata',
  'Recurring and contract context',
  'Send cleaning invoice fit request',
  'mailto:support@latticeplugins.com?subject=WooCommerce%20cleaning%20service%20invoice%20workflow%20review',
  '/tools/woocommerce-invoice-setup-brief',
  '/demo/lattice-invoices',
]) {
  if (!cleaningServiceGuide.includes(term)) {
    failures.push(`cleaning service invoice guide is missing buyer-intent term: ${term}`);
  }
}

for (const source of [landing, guideCards, sitemapRoute]) {
  if (!source.includes('/blog/woocommerce-cleaning-service-invoices')) {
    failures.push('cleaning service invoice guide must be discoverable from the invoice landing, blog cards, and sitemap route');
  }
}

if ((cleaningServiceGuide.match(/href=\{mailto\}/g) || []).length < 3) {
  failures.push('cleaning service invoice guide must include at least 3 prefilled email CTAs');
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

for (const term of [
  'WooCommerce software license invoices',
  'Request €49 software invoice review',
  'license metadata',
  'renewal invoice PDFs',
  'credit notes',
  'Send software invoice fit request',
  'mailto:support@latticeplugins.com?subject=WooCommerce%20software%20license%20invoice%20workflow%20review',
  '/tools/woocommerce-invoice-setup-brief',
  '/demo/lattice-invoices',
]) {
  if (!softwareLicenseGuide.includes(term)) {
    failures.push(`software license invoice guide is missing buyer-intent term: ${term}`);
  }
}

for (const source of [landing, guideCards, sitemapRoute]) {
  if (!source.includes('/blog/woocommerce-software-license-invoices')) {
    failures.push('software license invoice guide must be discoverable from the invoice landing, blog cards, and sitemap route');
  }
}

if ((softwareLicenseGuide.match(/href=\{mailto\}/g) || []).length < 3) {
  failures.push('software license invoice guide must include at least 3 prefilled email CTAs');
}

for (const term of [
  'WooCommerce training company invoices',
  'Request €49 training invoice review',
  'Corporate training seats',
  'PO reference',
  'attendee count',
  'credit notes',
  'Send training invoice fit request',
  'mailto:support@latticeplugins.com?subject=WooCommerce%20training%20company%20invoice%20workflow%20review',
  '/tools/woocommerce-invoice-setup-brief',
  '/blog/woocommerce-invoice-plugin-for-online-courses',
]) {
  if (!trainingCompanyGuide.includes(term)) {
    failures.push(`training company invoice guide is missing buyer-intent term: ${term}`);
  }
}

for (const source of [landing, guideCards, sitemapRoute]) {
  if (!source.includes('/blog/woocommerce-training-company-invoices')) {
    failures.push('training company invoice guide must be discoverable from the invoice landing, blog cards, and sitemap route');
  }
}

if ((trainingCompanyGuide.match(/href=\{mailto\}/g) || []).length < 3) {
  failures.push('training company invoice guide must include at least 3 prefilled email CTAs');
}

for (const term of [
  'WooCommerce business customer invoices',
  'Request €49 business invoice review',
  'VAT IDs, PO references, invoice emails',
  'accounts payable',
  'credit notes',
  'Send business invoice fit request',
  'mailto:support@latticeplugins.com?subject=WooCommerce%20business%20customer%20invoice%20workflow%20review',
  '/tools/woocommerce-invoice-fit-check',
  '/blog/woocommerce-purchase-order-invoices',
]) {
  if (!businessCustomerGuide.includes(term)) {
    failures.push(`business customer invoice guide is missing buyer-intent term: ${term}`);
  }
}

for (const source of [landing, guideCards, sitemapRoute]) {
  if (!source.includes('/blog/woocommerce-business-customer-invoices')) {
    failures.push('business customer invoice guide must be discoverable from the invoice landing, blog cards, and sitemap route');
  }
}

if ((businessCustomerGuide.match(/href=\{mailto\}/g) || []).length < 3) {
  failures.push('business customer invoice guide must include at least 3 prefilled email CTAs');
}

for (const term of [
  'WooCommerce invoices for real-estate deposits, bookings, and property services',
  'Request €49 real-estate invoice review',
  'property services, viewing fees, deposits, or documents',
  'Property reference fields',
  'Refund credit notes',
  'Send real-estate invoice fit request',
  'mailto:support@latticeplugins.com?subject=WooCommerce%20real%20estate%20invoice%20workflow%20review',
  '/tools/woocommerce-invoice-roi-calculator',
  '/blog/woocommerce-rental-vat-invoices',
]) {
  if (!realEstateGuide.includes(term)) {
    failures.push(`real-estate invoice guide is missing buyer-intent term: ${term}`);
  }
}

for (const source of [landing, guideCards, sitemapRoute]) {
  if (!source.includes('/blog/woocommerce-real-estate-invoices')) {
    failures.push('real-estate invoice guide must be discoverable from the invoice landing, blog cards, and sitemap route');
  }
}

if ((realEstateGuide.match(/href=\{mailto\}/g) || []).length < 2) {
  failures.push('real-estate invoice guide must include at least 2 prefilled email CTAs');
}

for (const term of [
  'WooCommerce public-sector invoices',
  'Request €49 public-sector invoice review',
  'PO references',
  'buyer IDs',
  'UBL/Peppol',
  'credit notes',
  'Send public-sector invoice fit request',
  'mailto:support@latticeplugins.com?subject=WooCommerce%20public%20sector%20invoice%20workflow%20review',
  '/blog/woocommerce-peppol-e-invoices',
  '/blog/woocommerce-purchase-order-invoices',
]) {
  if (!publicSectorGuide.includes(term)) {
    failures.push(`public-sector invoice guide is missing buyer-intent term: ${term}`);
  }
}

for (const source of [landing, guideCards, sitemapRoute]) {
  if (!source.includes('/blog/woocommerce-public-sector-invoices')) {
    failures.push('public-sector invoice guide must be discoverable from the invoice landing, blog cards, and sitemap route');
  }
}

if ((publicSectorGuide.match(/href=\{mailto\}/g) || []).length < 3) {
  failures.push('public-sector invoice guide must include at least 3 prefilled email CTAs');
}

for (const term of [
  'WooCommerce nonprofit donation invoices',
  'Request €49 nonprofit invoice review',
  'Donation receipt vs VAT invoice decision',
  'charity ID',
  'credit notes',
  'Send nonprofit invoice fit request',
  'mailto:support@latticeplugins.com?subject=WooCommerce%20nonprofit%20donation%20invoice%20workflow%20review',
  '/blog/woocommerce-vat-exempt-invoices',
  '/blog/woocommerce-invoice-plugin-for-memberships',
]) {
  if (!nonprofitDonationGuide.includes(term)) {
    failures.push(`nonprofit donation invoice guide is missing buyer-intent term: ${term}`);
  }
}

for (const source of [landing, guideCards, sitemapRoute]) {
  if (!source.includes('/blog/woocommerce-nonprofit-donation-invoices')) {
    failures.push('nonprofit donation invoice guide must be discoverable from the invoice landing, blog cards, and sitemap route');
  }
}

if ((nonprofitDonationGuide.match(/href=\{mailto\}/g) || []).length < 3) {
  failures.push('nonprofit donation invoice guide must include at least 3 prefilled email CTAs');
}

for (const term of [
  'WooCommerce school course invoices',
  'Request €49 school invoice review',
  'Student, attendee, cohort, course date',
  'PO reference',
  'credit notes',
  'Send school invoice fit request',
  'mailto:support@latticeplugins.com?subject=WooCommerce%20school%20course%20invoice%20workflow%20review',
  '/blog/woocommerce-training-company-invoices',
  '/blog/woocommerce-public-sector-invoices',
]) {
  if (!schoolCourseGuide.includes(term)) {
    failures.push(`school course invoice guide is missing buyer-intent term: ${term}`);
  }
}

for (const source of [landing, guideCards, sitemapRoute]) {
  if (!source.includes('/blog/woocommerce-school-course-invoices')) {
    failures.push('school course invoice guide must be discoverable from the invoice landing, blog cards, and sitemap route');
  }
}

if ((schoolCourseGuide.match(/href=\{mailto\}/g) || []).length < 3) {
  failures.push('school course invoice guide must include at least 3 prefilled email CTAs');
}

for (const term of [
  'WooCommerce hotel booking invoices',
  'Request €49 hotel invoice review',
  'Corporate billing fields',
  'Tourist tax and extras visibility',
  'Refund credit notes',
  'Send hotel invoice fit request',
  'mailto:support@latticeplugins.com?subject=WooCommerce%20hotel%20booking%20invoice%20workflow%20review',
  '/blog/woocommerce-travel-agency-invoices',
  '/tools/woocommerce-invoice-roi-calculator',
]) {
  if (!hotelBookingGuide.includes(term)) {
    failures.push(`hotel booking invoice guide is missing buyer-intent term: ${term}`);
  }
}

for (const source of [landing, guideCards, sitemapRoute]) {
  if (!source.includes('/blog/woocommerce-hotel-booking-invoices')) {
    failures.push('hotel booking invoice guide must be discoverable from the invoice landing, blog cards, and sitemap route');
  }
}

if ((hotelBookingGuide.match(/href=\{mailto\}/g) || []).length < 3) {
  failures.push('hotel booking invoice guide must include at least 3 prefilled email CTAs');
}

for (const term of [
  'WooCommerce catering event invoices',
  'Request €49 catering invoice review',
  'Corporate billing fields',
  'Event and delivery metadata',
  'Refund credit notes',
  'Send catering invoice fit request',
  'mailto:support@latticeplugins.com?subject=WooCommerce%20catering%20event%20invoice%20workflow%20review',
  '/blog/woocommerce-event-ticket-invoices',
  '/tools/woocommerce-invoice-roi-calculator',
]) {
  if (!cateringEventGuide.includes(term)) {
    failures.push(`catering event invoice guide is missing buyer-intent term: ${term}`);
  }
}

for (const source of [landing, guideCards, sitemapRoute]) {
  if (!source.includes('/blog/woocommerce-catering-event-invoices')) {
    failures.push('catering event invoice guide must be discoverable from the invoice landing, blog cards, and sitemap route');
  }
}

if ((cateringEventGuide.match(/href=\{mailto\}/g) || []).length < 3) {
  failures.push('catering event invoice guide must include at least 3 prefilled email CTAs');
}

for (const term of [
  'WooCommerce repair service invoices',
  'Request €49 repair invoice review',
  'Repair and device metadata',
  'Diagnostic and deposit visibility',
  'Refund credit notes',
  'Send repair invoice fit request',
  'mailto:support@latticeplugins.com?subject=WooCommerce%20repair%20service%20invoice%20workflow%20review',
  '/blog/woocommerce-b2b-service-invoices',
  '/tools/woocommerce-invoice-fit-check',
]) {
  if (!repairServiceGuide.includes(term)) {
    failures.push(`repair service invoice guide is missing buyer-intent term: ${term}`);
  }
}

for (const source of [landing, guideCards, sitemapRoute]) {
  if (!source.includes('/blog/woocommerce-repair-service-invoices')) {
    failures.push('repair service invoice guide must be discoverable from the invoice landing, blog cards, and sitemap route');
  }
}

if ((repairServiceGuide.match(/href=\{mailto\}/g) || []).length < 3) {
  failures.push('repair service invoice guide must include at least 3 prefilled email CTAs');
}

for (const term of [
  'WooCommerce maintenance contract invoices',
  'Request €49 maintenance invoice review',
  'Contract and SLA metadata',
  'Asset and service-site context',
  'Refund credit notes',
  'Send maintenance invoice fit request',
  'mailto:support@latticeplugins.com?subject=WooCommerce%20maintenance%20contract%20invoice%20workflow%20review',
  '/blog/woocommerce-recurring-invoices-subscriptions',
  '/tools/woocommerce-invoice-fit-check',
]) {
  if (!maintenanceContractGuide.includes(term)) {
    failures.push(`maintenance contract invoice guide is missing buyer-intent term: ${term}`);
  }
}

for (const source of [landing, guideCards, sitemapRoute]) {
  if (!source.includes('/blog/woocommerce-maintenance-contract-invoices')) {
    failures.push('maintenance contract invoice guide must be discoverable from the invoice landing, blog cards, and sitemap route');
  }
}

if ((maintenanceContractGuide.match(/href=\{mailto\}/g) || []).length < 3) {
  failures.push('maintenance contract invoice guide must include at least 3 prefilled email CTAs');
}

for (const term of [
  'WooCommerce subscription invoice plugin',
  'Request €49 subscription invoice review',
  'Subscription and renewal metadata',
  'Paid and unpaid invoice states',
  'credit notes',
  'Send subscription invoice fit request',
  'mailto:support@latticeplugins.com?subject=WooCommerce%20subscription%20invoice%20plugin%20workflow%20review',
  '/blog/woocommerce-recurring-invoices-subscriptions',
  '/tools/woocommerce-invoice-fit-check',
]) {
  if (!subscriptionInvoiceGuide.includes(term)) {
    failures.push(`subscription invoice guide is missing buyer-intent term: ${term}`);
  }
}

for (const source of [landing, guideCards, sitemapRoute]) {
  if (!source.includes('/blog/woocommerce-subscription-invoice-plugin')) {
    failures.push('subscription invoice guide must be discoverable from the invoice landing, blog cards, and sitemap route');
  }
}

if ((subscriptionInvoiceGuide.match(/href=\{mailto\}/g) || []).length < 3) {
  failures.push('subscription invoice guide must include at least 3 prefilled email CTAs');
}

for (const term of [
  'WooCommerce restaurant and takeaway invoices',
  'Request €49 restaurant invoice review',
  'Corporate takeaway orders need proper business invoices',
  'Tips, delivery fees, deposits, and service charges create invoice ambiguity',
  'Cancelled orders and menu changes need credit notes',
  'Send restaurant invoice fit request',
  'mailto:support@latticeplugins.com?subject=WooCommerce%20restaurant%20takeaway%20invoice%20workflow%20review',
  '/blog/woocommerce-catering-event-invoices',
  '/tools/woocommerce-invoice-setup-brief',
]) {
  if (!restaurantTakeawayGuide.includes(term)) {
    failures.push(`restaurant takeaway invoice guide is missing buyer-intent term: ${term}`);
  }
}

for (const source of [landing, guideCards, sitemapRoute]) {
  if (!source.includes('/blog/woocommerce-restaurant-takeaway-invoices')) {
    failures.push('restaurant takeaway invoice guide must be discoverable from the invoice landing, blog cards, and sitemap route');
  }
}

if ((restaurantTakeawayGuide.match(/href=\{mailto\}/g) || []).length < 3) {
  failures.push('restaurant takeaway invoice guide must include at least 3 prefilled email CTAs');
}

for (const term of [
  'WooCommerce medical supply invoices',
  'Request €49 medical supply invoice review',
  'Medical supply order metadata',
  'Purchase-order workflow',
  'Send medical supply invoice fit request',
  'mailto:support@latticeplugins.com?subject=WooCommerce%20medical%20supply%20invoice%20workflow%20review',
  '/blog/woocommerce-invoice-plugin-for-clinics',
  '/blog/woocommerce-purchase-order-invoices',
]) {
  if (!medicalSupplyGuide.includes(term)) {
    failures.push(`medical supply invoice guide is missing buyer-intent term: ${term}`);
  }
}

for (const source of [landing, guideCards, sitemapRoute]) {
  if (!source.includes('/blog/woocommerce-medical-supply-invoices')) {
    failures.push('medical supply invoice guide must be discoverable from the invoice landing, blog cards, and sitemap route');
  }
}

if ((medicalSupplyGuide.match(/href=\{mailto\}/g) || []).length < 3) {
  failures.push('medical supply invoice guide must include at least 3 prefilled email CTAs');
}

for (const term of [
  'WooCommerce quote to invoice plugin',
  'Request €49 quote-to-invoice review',
  'quote references',
  'proforma approval',
  'final invoice timing',
  'credit notes',
  'Send quote-to-invoice setup',
  'mailto:support@latticeplugins.com?subject=WooCommerce%20quote%20to%20invoice%20workflow%20review',
  '/blog/woocommerce-proforma-invoice',
  '/blog/woocommerce-purchase-order-invoices',
]) {
  if (!quoteToInvoiceGuide.includes(term)) {
    failures.push(`quote-to-invoice guide is missing buyer-intent term: ${term}`);
  }
}

for (const source of [landing, guideCards, sitemapRoute]) {
  if (!source.includes('/blog/woocommerce-quote-to-invoice-plugin')) {
    failures.push('quote-to-invoice guide must be discoverable from the invoice landing, blog cards, and sitemap route');
  }
}

if ((quoteToInvoiceGuide.match(/href=\{mailto\}/g) || []).length < 3) {
  failures.push('quote-to-invoice guide must include at least 3 prefilled email CTAs');
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
