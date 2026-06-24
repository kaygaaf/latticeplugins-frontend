import { readFileSync } from 'node:fs';

const shopSource = [
  'src/app/shop/page.tsx',
  'src/components/Header.tsx',
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

if (presentDisallowedTerms.length > 0 || missingOfficialTerms.length > 0) {
  console.error('FAIL: shop catalog copy guard failed');
  if (presentDisallowedTerms.length > 0) {
    console.error(`Disallowed unofficial promo terms found: ${presentDisallowedTerms.join(', ')}`);
  }
  if (missingOfficialTerms.length > 0) {
    console.error(`Official product terms missing from static guard context: ${missingOfficialTerms.join(', ')}`);
  }
  process.exit(1);
}

console.log('PASS: shop catalog copy only promotes official catalog products');
