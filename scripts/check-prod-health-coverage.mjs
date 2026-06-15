#!/usr/bin/env node
import { readFileSync } from 'node:fs';

const source = readFileSync('scripts/prod-health.mjs', 'utf8');
const failures = [];

if (!source.includes("/wp-json/wp/v2/product?per_page=100")) {
  failures.push('prod health must verify the public WordPress product REST catalog');
}

if (!source.includes('x-wp-total')) {
  failures.push('prod health must assert the product REST total header');
}

if (!source.includes('duplicate product slug')) {
  failures.push('prod health must fail on duplicate product slugs');
}

if (!source.includes('checkTlsCertificate')) {
  failures.push('prod health must verify the public TLS certificate');
}

if (!source.includes('MIN_TLS_DAYS_REMAINING')) {
  failures.push('prod health must enforce a minimum TLS certificate runway');
}

if (failures.length) {
  console.error('Prod health coverage check failed:');
  for (const failure of failures) console.error(`- ${failure}`);
  process.exit(1);
}

console.log('Prod health coverage check passed');
