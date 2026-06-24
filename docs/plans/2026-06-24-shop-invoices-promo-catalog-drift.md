# Shop Invoices Promo Catalog Drift Implementation Plan

> **For Hermes:** Use subagent-driven-development skill to implement this plan task-by-task.

**Goal:** Remove unofficial Lattice Invoices promotion from the public shop page and add a regression guard so `/shop/` only promotes official catalog products.

**Architecture:** Add a tiny Node.js static smoke script that scans the shop page source for disallowed unofficial-product promo terms, wire it into the existing frontend test suite, then replace the hardcoded shop hero with an official-product promotion. Keep this as a catalog-hygiene fix only: no WooCommerce data changes, no checkout changes, and no invoice page deletion.

**Tech Stack:** Next.js 14 App Router, TypeScript/TSX, Node.js test scripts under `scripts/`, existing `npm run test:health`, `npm run test:seo`, and `npm run build`.

---

## Verified Context

- Issue/spec: `docs/issues/2026-06-24-shop-invoices-promo-catalog-drift.md`.
- Production health on 2026-06-24 is green:
  - `scripts/check-crm-tracking-headless.sh` returned `OK: Lattice CRM headless tracking smoke guard passed`.
  - `python3 scripts/lattice_qa_security_smoke.py` in the backend repo passed 8 PHP regression tests and static security scans.
  - `scripts/vps-infra-health.sh` ended with `=== Summary: issues=0 ===` and confirmed exactly 7 WooCommerce products.
- Public `/shop/` HTML currently contains unofficial invoice-promo terms:
  - `Lattice Invoices` count: 2
  - `EU invoice offer` count: 2
  - `VAT/BTW invoices` count: 2
  - `woocommerce-eu-vat-invoices` count: 4
- `src/app/shop/page.tsx:30-64` hardcodes the promo block that causes the drift.
- Official product catalog remains exactly 7 products: Commerce Suite, Core, CRM, Migrate, Stripe Payments, Subscribify, SEO.

---

### Task 1: Add failing shop catalog copy guard

**Objective:** Prove the current shop page contains unofficial invoice-product promo copy.

**Files:**
- Create: `scripts/check-shop-catalog-copy.mjs`
- Modify: `package.json`

**Step 1: Create the static guard script**

Create `scripts/check-shop-catalog-copy.mjs`:

```js
import { readFileSync } from 'node:fs';

const shopSource = readFileSync('src/app/shop/page.tsx', 'utf8');

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
```

**Step 2: Wire the guard into tests**

In `package.json`, change:

```json
"test:health": "node scripts/check-prod-health-coverage.mjs"
```

to:

```json
"test:health": "node scripts/check-prod-health-coverage.mjs && node scripts/check-shop-catalog-copy.mjs"
```

**Step 3: Run test to verify failure**

Run:

```bash
npm run test:health
```

Expected now: FAIL with `Disallowed unofficial promo terms found`, because the shop page still contains the Lattice Invoices promo.

**Step 4: Commit?**

Do not commit yet. This task intentionally leaves a failing guard for Task 2.

---

### Task 2: Replace invoice promo with official Lattice SEO promo

**Objective:** Remove the unofficial eighth-product signal from `/shop/` while preserving a strong above-grid merchandising block.

**Files:**
- Modify: `src/app/shop/page.tsx:30-64`

**Step 1: Replace the hero promo block copy**

In `src/app/shop/page.tsx`, replace the whole `<section className="mb-10 ...">...</section>` promo block above the product grid with this official-catalog SEO promo:

```tsx
      <section className="mb-10 overflow-hidden rounded-2xl border border-blue-100 bg-gradient-to-br from-blue-950 via-slate-900 to-indigo-900 text-white shadow-lg">
        <div className="grid grid-cols-1 lg:grid-cols-[1.4fr_0.9fr] gap-6 p-6 md:p-8 items-center">
          <div>
            <p className="uppercase tracking-[0.25em] text-xs text-blue-200 mb-3">Newest official Lattice plugin</p>
            <h2 className="text-3xl font-bold mb-3">Launch technical SEO without another subscription.</h2>
            <p className="text-blue-50 leading-relaxed mb-5">
              Lattice SEO adds XML sitemaps, Schema.org structured data, Open Graph previews, and WooCommerce SEO foundations for a one-time €49 license.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                href="/product/lattice-seo"
                className="bg-green-500 text-white px-6 py-3 rounded-xl font-semibold hover:bg-green-400 transition text-center"
              >
                View Lattice SEO
              </Link>
              <Link
                href="/shop"
                className="border border-white/25 bg-white/10 px-6 py-3 rounded-xl font-semibold hover:bg-white/15 transition text-center"
              >
                Compare all 7 plugins
              </Link>
            </div>
          </div>
          <div className="rounded-2xl bg-white text-slate-900 p-5">
            <p className="text-sm uppercase tracking-widest text-slate-500 mb-3">Included SEO foundations</p>
            <ul className="space-y-3 text-sm text-slate-700">
              <li className="flex gap-2"><span className="text-green-600 font-bold">✓</span><span>Generate XML sitemaps for pages, posts, and products</span></li>
              <li className="flex gap-2"><span className="text-green-600 font-bold">✓</span><span>Add Schema.org structured data and breadcrumb signals</span></li>
              <li className="flex gap-2"><span className="text-green-600 font-bold">✓</span><span>Control Open Graph and Twitter Card previews</span></li>
              <li className="flex gap-2"><span className="text-green-600 font-bold">✓</span><span>Improve WooCommerce product metadata without SaaS pricing</span></li>
            </ul>
          </div>
        </div>
      </section>
```

**Step 2: Run focused guard**

Run:

```bash
npm run test:health
```

Expected: PASS, including `PASS: shop catalog copy only promotes official catalog products`.

---

### Task 3: Build and SEO-test the frontend

**Objective:** Ensure the copy-only change does not break existing frontend checks or the production build.

**Files:**
- No additional source changes expected.

**Step 1: Run SEO smoke**

Run:

```bash
npm run test:seo
```

Expected: PASS for product SEO and sitemap route origin checks.

**Step 2: Run production build**

Run:

```bash
npm run build
```

Expected: build completes successfully and lists `/shop` plus `/product/[slug]` routes without errors.

**Step 3: Commit**

Run:

```bash
git add package.json scripts/check-shop-catalog-copy.mjs src/app/shop/page.tsx docs/issues/2026-06-24-shop-invoices-promo-catalog-drift.md docs/plans/2026-06-24-shop-invoices-promo-catalog-drift.md
git commit -m "fix: align shop promo with official catalog"
git push origin main
```

---

### Task 4: Deploy and verify production shop copy

**Objective:** Prove production `/shop/` no longer suggests an unofficial Lattice Invoices product and still exposes the 7 official products.

**Files:**
- No source changes expected.

**Step 1: Deploy frontend**

Run from any directory:

```bash
ssh root@65.108.128.89 "ceo-deploy lattice"
```

Expected: deploy pulls the new frontend commit, rebuilds `lattice-frontend:latest`, recreates the `lattice-frontend` container, and reports the frontend running.

**Step 2: Verify public shop HTML**

Run:

```bash
curl -sSL -A 'Mozilla/5.0' https://latticeplugins.com/shop/ -o /tmp/lattice-shop-current.html
python3 - <<'PY'
from pathlib import Path
html = Path('/tmp/lattice-shop-current.html').read_text(errors='ignore')
disallowed = ['Lattice Invoices', 'EU invoice offer', 'VAT/BTW invoices', 'woocommerce-eu-vat-invoices']
expected = ['Lattice Commerce Suite','Lattice Core','Lattice CRM','Lattice Migrate','Lattice Stripe Payments','Lattice Subscribify','Lattice SEO']
found_bad = {term: html.count(term) for term in disallowed if term in html}
missing = [term for term in expected if term not in html]
print('BAD_TERMS=', found_bad)
print('MISSING=', missing)
if found_bad or missing:
    raise SystemExit(1)
PY
```

Expected:

```text
BAD_TERMS= {}
MISSING= []
```

**Step 3: Run VPS health smoke**

From `~/Developer/latticeplugins-prod`, run:

```bash
scripts/vps-infra-health.sh
```

Expected: `=== Summary: issues=0 ===`, exactly 7 products, and no slow public route warnings.

**Step 4: Visual inspection and cleanup**

Use the mandatory browser inspection workflow from the Lattice skill:

1. Navigate to `https://latticeplugins.com/shop/`.
2. Screenshot/inspect visually.
3. Confirm styled page, header/footer, official 7-product grid, and Lattice SEO promo. Confirm no invoice promo.
4. Kill Chrome-for-Testing processes and verify process count is within the documented `0-2` threshold.

---

## Rollback Plan

If the deploy breaks `/shop/` rendering:

```bash
cd ~/Developer/latticeplugins-frontend
git revert HEAD
git push origin main
ssh root@65.108.128.89 "ceo-deploy lattice"
```

Then rerun the production shop HTML check and `scripts/vps-infra-health.sh`.
