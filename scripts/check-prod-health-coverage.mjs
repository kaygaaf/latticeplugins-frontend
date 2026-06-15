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

if (failures.length) {
  console.error('Prod health coverage check failed:');
  for (const failure of failures) console.error(`- ${failure}`);
  process.exit(1);
}

console.log('Prod health coverage check passed');
