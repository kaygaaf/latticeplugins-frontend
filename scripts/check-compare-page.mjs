// Guard: the /compare page must exist, present the official 7-product catalog
// with pricing clarity, and the homepage hero CTA must route to it.
import { readFileSync, existsSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const failures = [];

const OFFICIAL_PRODUCTS = [
  "Lattice Commerce Suite",
  "Lattice Core",
  "Lattice CRM",
  "Lattice Migrate",
  "Lattice Stripe Payments",
  "Lattice Subscribify",
  "Lattice SEO",
];

const OFFICIAL_SLUGS = [
  "lattice-commerce-suite",
  "lattice-core",
  "lattice-crm",
  "lattice-migrate",
  "lattice-stripe-payments",
  "lattice-subscribify",
  "lattice-seo",
];

// 1. Compare page exists
const comparePath = join(root, "src/app/compare/page.tsx");
if (!existsSync(comparePath)) {
  failures.push("src/app/compare/page.tsx does not exist");
} else {
  const src = readFileSync(comparePath, "utf8");

  // 2. All 7 official products appear
  for (const name of OFFICIAL_PRODUCTS) {
    if (!src.includes(name)) failures.push(`compare page missing product: ${name}`);
  }

  // 3. Every official product slug is present (links are built from slug data)
  for (const slug of OFFICIAL_SLUGS) {
    if (!src.includes(`"${slug}"`) && !src.includes(`'${slug}'`)) {
      failures.push(`compare page missing product slug data: ${slug}`);
    }
  }
  // 3b. Links to product detail pages are generated
  if (!src.includes("/product/")) {
    failures.push("compare page generates no /product/ links");
  }

  // 4. Pricing clarity markers
  for (const marker of ["€49", "Free"]) {
    if (!src.includes(marker)) failures.push(`compare page missing pricing marker: ${marker}`);
  }

  // 5. One-time pricing message (conversion clarity)
  if (!/lifetime updates/i.test(src)) {
    failures.push("compare page missing 'lifetime updates' pricing clarity");
  }

  // 6. No unofficial/removed products promoted
  for (const forbidden of ["Lattice Invoices", "lattice-invoices"]) {
    if (src.includes(forbidden)) failures.push(`compare page promotes removed product: ${forbidden}`);
  }
}

// 7. Homepage hero CTA routes to /compare
const homePath = join(root, "src/app/page.tsx");
const homeSrc = readFileSync(homePath, "utf8");
const heroBlock = homeSrc.match(/Compare all 7 plugins/);
if (!heroBlock) {
  failures.push("homepage hero CTA 'Compare all 7 plugins' not found");
} else {
  const idx = homeSrc.indexOf("Compare all 7 plugins");
  const before = homeSrc.slice(Math.max(0, idx - 400), idx);
  if (!before.includes('href="/compare"')) {
    failures.push('homepage hero CTA does not link to /compare');
  }
}

if (failures.length) {
  console.error("FAIL compare-page guard:");
  for (const f of failures) console.error(`  - ${f}`);
  process.exit(1);
}
console.log("PASS compare-page guard (page exists, 7 products, pricing clarity, hero CTA routes to /compare)");
