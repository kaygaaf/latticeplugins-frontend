# WooCommerce REST Basic Auth Implementation Plan

> **For Hermes:** Use subagent-driven-development skill to implement this plan task-by-task.

**Goal:** Stop leaking WooCommerce REST API credentials into WordPress/Apache access logs by moving frontend WooCommerce REST authentication from URL query parameters to an HTTP Basic Authorization header.

**Architecture:** Keep all WooCommerce REST calls server-side in `src/lib/woocommerce.ts`, but centralize request construction through a small helper that adds Basic Auth headers and never appends credential query parameters. Add a static health guard so future product-fetch changes cannot reintroduce `consumer_key` / `consumer_secret` query params.

**Tech Stack:** Next.js 14 App Router, TypeScript, Node static guard scripts, existing frontend health/SEO/build checks.

---

### Task 1: Add a static guard against WooCommerce credential query params

**Objective:** Make the current credential-query behavior fail locally before changing production code.

**Files:**
- Create: `scripts/check-wc-rest-auth.mjs`
- Modify: `package.json`
- Test: `src/lib/woocommerce.ts`

**Step 1: Create the failing guard**

Create `scripts/check-wc-rest-auth.mjs`:

```js
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
```

**Step 2: Wire it into health tests**

In `package.json`, update `test:health` to run the new guard first:

```json
"test:health": "node scripts/check-wc-rest-auth.mjs && node scripts/check-prod-health-coverage.mjs && node scripts/check-shop-catalog-copy.mjs && node scripts/check-homepage-catalog-cta.mjs && node scripts/check-invoice-funnel.mjs"
```

**Step 3: Run the guard and verify it fails**

Run:

```bash
node scripts/check-wc-rest-auth.mjs
```

Expected before implementation: FAIL mentioning `searchParams.set('consumer_key'` and `searchParams.set('consumer_secret'`.

---

### Task 2: Replace query-parameter auth with a shared Basic Auth fetch helper

**Objective:** Remove WooCommerce credentials from request URLs while keeping existing product fetch behavior.

**Files:**
- Modify: `src/lib/woocommerce.ts`

**Step 1: Replace the top of `src/lib/woocommerce.ts` with shared helpers**

Use this structure:

```ts
const WC_API_URL = process.env.WC_REST_URL || `${process.env.NEXT_PUBLIC_WORDPRESS_URL || 'https://latticeplugins.com'}/wp-json/wc/v3`;
const CONSUMER_KEY = process.env.WC_CONSUMER_KEY || process.env.WP_CONSUMER_KEY || '';
const CONSUMER_SECRET = process.env.WC_CONSUMER_SECRET || process.env.WP_CONSUMER_SECRET || '';

function getWooCommerceAuthHeader() {
  if (!CONSUMER_KEY || !CONSUMER_SECRET) {
    return {};
  }

  const token = Buffer.from(`${CONSUMER_KEY}:${CONSUMER_SECRET}`).toString('base64');
  const scheme = 'Basic';
  const headers: Record<string, string> = {};
  headers.Authorization = [scheme, token].join(' ');
  return headers;
}

async function fetchWooCommerceJson(url: URL) {
  return fetch(url.toString(), {
    headers: getWooCommerceAuthHeader(),
    next: { revalidate: 60 }
  });
}
```

**Step 2: Update `getProducts()`**

Remove the credential query params. Keep only business filters:

```ts
export async function getProducts() {
  const url = new URL(`${WC_API_URL}/products`);
  url.searchParams.set('status', 'publish');
  url.searchParams.set('per_page', '100');

  const res = await fetchWooCommerceJson(url);
  if (!res.ok) {
    console.error('WC API error:', res.status, await res.text());
    return [];
  }
  return res.json();
}
```

**Step 3: Update `getProductBySlug()`**

```ts
export async function getProductBySlug(slug: string) {
  const url = new URL(`${WC_API_URL}/products`);
  url.searchParams.set('slug', slug);

  const res = await fetchWooCommerceJson(url);
  if (!res.ok) return null;
  const products = await res.json();
  return products[0] || null;
}
```

**Step 4: Update `getProductVariations()`**

```ts
export async function getProductVariations(productId: number) {
  const url = new URL(`${WC_API_URL}/products/${productId}/variations`);

  const res = await fetchWooCommerceJson(url);
  if (!res.ok) return [];
  return res.json();
}
```

**Step 5: Run the static guard**

Run:

```bash
node scripts/check-wc-rest-auth.mjs
```

Expected: `PASS: WooCommerce REST auth avoids credential query parameters`.

---

### Task 3: Run frontend verification gates

**Objective:** Prove the auth change does not break catalog, SEO, or build behavior.

**Files:**
- Verify only; no expected source changes unless a check fails.

**Step 1: Run health tests**

Run:

```bash
npm run test:health
```

Expected: PASS, including the new WooCommerce REST auth guard and existing catalog/invoice-funnel health checks.

**Step 2: Run SEO tests**

Run:

```bash
npm run test:seo
```

Expected: product SEO and sitemap route checks pass.

**Step 3: Build the app**

Run:

```bash
npm run build
```

Expected: production build completes successfully.

---

### Task 4: Deploy and verify production behavior

**Objective:** Ship the auth hardening and verify product pages still render.

**Files:**
- Modified: `src/lib/woocommerce.ts`
- Created: `scripts/check-wc-rest-auth.mjs`
- Modified: `package.json`

**Step 1: Commit and push**

Run:

```bash
git add src/lib/woocommerce.ts scripts/check-wc-rest-auth.mjs package.json
git commit -m "[verified] use wc rest basic auth"
git push origin main
```

**Step 2: Deploy**

Run from this machine:

```bash
ssh root@65.108.128.89 "ceo-deploy lattice"
```

Expected: deploy pulls the new frontend commit, rebuilds the frontend image, and recreates the frontend container successfully.

**Step 3: Public route smoke**

Run:

```bash
curl -sS -L -o /tmp/lattice-home.html -w 'home %{http_code} %{content_type} %{url_effective}\n' https://latticeplugins.com/
curl -sS -L -o /tmp/lattice-shop.html -w 'shop %{http_code} %{content_type} %{url_effective}\n' https://latticeplugins.com/shop/
curl -sS -L -o /tmp/lattice-product.html -w 'product %{http_code} %{content_type} %{url_effective}\n' https://latticeplugins.com/product/lattice-migrate/
```

Expected: all three return HTTP 200 HTML, and `/shop/` still contains all 7 official products.

**Step 4: Infrastructure/security smoke**

Run from `~/Developer/latticeplugins-prod`:

```bash
python3 scripts/lattice_qa_security_smoke.py --live
scripts/vps-infra-health.sh
```

Expected: live smoke passes and VPS health remains `issues=0`. The WordPress access-log credential signal may not drop to zero immediately because bounded logs can include historical requests; report the observed `wc_consumer_key_log_lines` / `wc_consumer_secret_log_lines` and whether fresh product route requests keep increasing the count.

**Step 5: Mandatory visual inspection and cleanup**

Use the standard Lattice deploy workflow: inspect `https://latticeplugins.com/shop/` visually for styled product cards and footer, then clean up Chrome processes.

```bash
killall -9 "Google Chrome for Testing" 2>/dev/null || true
ps aux | grep "Chrome for Testing" | grep -v grep | wc -l
```

Expected cleanup count: `0` to `2`.

---

### Task 5: Follow-up if old log lines persist

**Objective:** Avoid false failure if old query-string requests remain in bounded logs after the code fix.

**Files:**
- Modify only if needed: `scripts/vps-infra-health.sh` in `~/Developer/latticeplugins-prod`

If post-deploy frontend requests no longer generate query-param URLs but `wc_consumer_*_log_lines` remains nonzero due to historical log retention, add a timestamp-aware or recent-line delta note to the health script in a separate backend commit. Do not weaken the detection before the frontend fix is deployed and verified.
