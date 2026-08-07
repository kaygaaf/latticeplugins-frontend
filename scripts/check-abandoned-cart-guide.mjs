import { readFileSync, existsSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const failures = [];

function assert(condition, message) {
  if (!condition) failures.push(message);
}

const slug = "woocommerce-abandoned-cart-recovery";
const pagePath = join(root, "src/app/blog", slug, "page.tsx");

// 1. The guide page exists and routes buyers to the real Commerce Suite product.
assert(existsSync(pagePath), `blog guide page missing: src/app/blog/${slug}/page.tsx`);
if (existsSync(pagePath)) {
  const source = readFileSync(pagePath, "utf8");
  assert(
    source.includes("/product/lattice-commerce-suite"),
    "guide must link to /product/lattice-commerce-suite (Commerce Suite CTA)"
  );
  assert(
    source.includes("metadata") && source.includes("canonical"),
    "guide must export metadata with a canonical URL"
  );
  assert(
    source.includes("application/ld+json"),
    "guide must include structured data (Article/FAQ schema)"
  );
}

// 2. The guide is discoverable from the blog listing via guide-cards data.
const guideCards = readFileSync(join(root, "src/app/blog/guide-cards.ts"), "utf8");
assert(
  guideCards.includes(`"/blog/${slug}"`),
  `guide-cards.ts must contain a card for /blog/${slug}`
);

// 3. The guide is listed in the sitemap routes.
const sitemap = readFileSync(join(root, "src/app/sitemap.xml/route.ts"), "utf8");
assert(
  sitemap.includes(`/blog/${slug}`),
  `sitemap FRONTEND_URLS must include /blog/${slug}`
);

if (failures.length > 0) {
  console.error("FAIL abandoned-cart guide checks:");
  for (const failure of failures) console.error(` - ${failure}`);
  process.exit(1);
}

console.log("PASS abandoned-cart guide checks (page, product CTA, guide card, sitemap)");
