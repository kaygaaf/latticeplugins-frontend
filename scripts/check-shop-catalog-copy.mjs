import { readFileSync } from 'node:fs';

const shopSource = readFileSync('src/app/shop/page.tsx', 'utf8');
const siteChromeSource = [
  'src/components/Header.tsx',
  'src/components/Footer.tsx',
].map((path) => readFileSync(path, 'utf8')).join('\n');

const disallowedShopPromoTerms = [
  'Lattice Invoices',
  'EU invoice offer',
  'VAT/BTW invoices',
  '/woocommerce-eu-vat-invoices',
  '/docs/woocommerce-eu-vat-invoice-setup',
];

const missingOfficialTerms = [
  'Lattice Commerce Suite',
  'Lattice Core',
  'Lattice CRM',
  'Lattice Migrate',
  'Lattice Stripe Payments',
  'Lattice Subscribify',
  'Lattice SEO',
].filter((term) => !shopSource.includes(term));

const presentDisallowedTerms = disallowedShopPromoTerms.filter((term) => shopSource.includes(term));
const missingInvoiceChromeTerms = [
  '/woocommerce-eu-vat-invoices',
  '/docs/woocommerce-eu-vat-invoice-setup',
].filter((term) => !siteChromeSource.includes(term));

if (presentDisallowedTerms.length > 0 || missingOfficialTerms.length > 0 || missingInvoiceChromeTerms.length > 0) {
  console.error('FAIL: shop catalog copy guard failed');
  if (presentDisallowedTerms.length > 0) {
    console.error(`Disallowed unofficial promo terms found: ${presentDisallowedTerms.join(', ')}`);
  }
  if (missingOfficialTerms.length > 0) {
    console.error(`Official product terms missing from static guard context: ${missingOfficialTerms.join(', ')}`);
  }
  if (missingInvoiceChromeTerms.length > 0) {
    console.error(`Invoice revenue chrome links missing: ${missingInvoiceChromeTerms.join(', ')}`);
  }
  process.exit(1);
}

console.log('PASS: shop catalog stays official while site chrome promotes invoice revenue path');
