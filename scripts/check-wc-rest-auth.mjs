#!/usr/bin/env node
import { readFileSync } from 'node:fs';

const sourcePath = 'src/lib/woocommerce.ts';
const source = readFileSync(sourcePath, 'utf8');
const forbidden = [
  "searchParams.set('consumer_key'",
  'searchParams.set("consumer_key"',
  "searchParams.set('consumer_secret'",
  'searchParams.set("consumer_secret"',
  'consumer_key=${',
  'consumer_secret=${',
];

const found = forbidden.filter((needle) => source.includes(needle));
if (found.length > 0) {
  console.error(`FAIL: ${sourcePath} sends WooCommerce credentials in URL query parameters: ${found.join(', ')}`);
  process.exit(1);
}

if (!source.includes('Authorization') || !source.includes('Basic')) {
  console.error(`FAIL: ${sourcePath} must authenticate WooCommerce REST requests with an HTTP Basic Authorization header`);
  process.exit(1);
}

console.log('PASS: WooCommerce REST auth avoids credential query parameters');
