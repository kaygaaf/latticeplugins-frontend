# Homepage Official Catalog CTA Implementation Plan

> **For Hermes:** Use subagent-driven-development skill to implement this plan task-by-task.

**Goal:** Replace the homepage primary invoice-funnel CTA with an official product CTA and add a regression guard so the homepage does not promote unofficial products.

**Architecture:** Add one small static Node.js guard for `src/app/page.tsx`, wire it into the existing frontend health checks, then update the homepage hero and invoice-funnel smoke script. Keep the scope limited to homepage/catalog hygiene: no WooCommerce data changes, no plugin changes, and no deletion of existing invoice content pages.

**Tech Stack:** Next.js 14 App Router, TypeScript/TSX, Node.js scripts under `scripts/`, existing `npm run test:health`, `npm run test:seo`, and `npm run build`.

---

## Verified Context

- Issue/spec: `docs/issues/2026-06-25-homepage-invoice-funnel-catalog-drift.md`.
- The previous `/shop/` catalog drift is fixed: production `/shop/` contains zero `Lattice Invoices`, zero `EU invoice offer`, zero `VAT/BTW invoices`, and zero `woocommerce-eu-vat-invoices` occurrences.
- Production health on 2026-06-25 is green: `scripts/vps-infra-health.sh` ended with `=== Summary: issues=0 ===` and confirmed exactly 7 WooCommerce products.
- Current homepage source still links the primary hero CTA to `/woocommerce-eu-vat-invoices`:
  - `src/app/page.tsx:37-42`
  - label: `EU Invoice Workflow`
- Current `npm run test:health` protects that unofficial homepage CTA through `scripts/check-invoice-funnel.mjs:47-49`.

---

### Task 1: Add failing homepage catalog CTA guard

**Objective:** Prove the current homepage hero still promotes an unofficial invoice funnel.

**Files:**
- Create: `scripts/check-homepage-catalog-cta.mjs`
- Modify: `package.json`

**Step 1: Create the static guard script**

Create `scripts/check-homepage-catalog-cta.mjs`:

```js
#!/usr/bin/env node
import { readFileSync } from 'node:fs';

const homeSource = readFileSync('src/app/page.tsx', 'utf8');

const disallowedHomepageTerms = [
  'EU Invoice Workflow',
  'href="/woocommerce-eu-vat-invoices"',
];

const requiredOfficialCtaTerms = [
  'href="/product/lattice-seo"',
  'View Lattice SEO',
];

const presentDisallowedTerms = disallowedHomepageTerms.filter((term) => homeSource.includes(term));
const missingOfficialCtaTerms = requiredOfficialCtaTerms.filter((term) => !homeSource.includes(term));

if (presentDisallowedTerms.length > 0 || missingOfficialCtaTerms.length > 0) {
  console.error('FAIL: homepage catalog CTA guard failed');
  if (presentDisallowedTerms.length > 0) {
    console.error(`Disallowed homepage promo terms found: ${presentDisallowedTerms.join(', ')}`);
  }
  if (missingOfficialCtaTerms.length > 0) {
    console.error(`Official homepage CTA terms missing: ${missingOfficialCtaTerms.join(', ')}`);
  }
  process.exit(1);
}

console.log('PASS: homepage hero CTA stays within the official catalog');
```

**Step 2: Wire the guard into health tests**

In `package.json`, change:

```json
"test:health": "node scripts/check-prod-health-coverage.mjs && node scripts/check-shop-catalog-copy.mjs && node scripts/check-invoice-funnel.mjs"
```

to:

```json
"test:health": "node scripts/check-prod-health-coverage.mjs && node scripts/check-shop-catalog-copy.mjs && node scripts/check-homepage-catalog-cta.mjs && node scripts/check-invoice-funnel.mjs"
```

**Step 3: Run test to verify failure**

Run:

```bash
npm run test:health
```

Expected now: FAIL from `check-homepage-catalog-cta.mjs` with `Disallowed homepage promo terms found: EU Invoice Workflow, href="/woocommerce-eu-vat-invoices"`.

**Step 4: Commit?**

Do not commit yet. This task intentionally leaves a failing guard for Task 2.

---

### Task 2: Replace homepage invoice CTA with official Lattice SEO CTA

**Objective:** Move the highest-traffic homepage hero CTA back to the official 7-product catalog.

**Files:**
- Modify: `src/app/page.tsx:36-42`

**Step 1: Replace the primary hero link**

In `src/app/page.tsx`, replace the first `<Link>` in the hero button group:

```tsx
          <Link
            href="/woocommerce-eu-vat-invoices"
            className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition inline-block"
          >
            EU Invoice Workflow
          </Link>
```

with:

```tsx
          <Link
            href="/product/lattice-seo"
            className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition inline-block"
          >
            View Lattice SEO
          </Link>
```

**Step 2: Run focused guard only**

Run:

```bash
node scripts/check-homepage-catalog-cta.mjs
```

Expected: `PASS: homepage hero CTA stays within the official catalog`.

---

### Task 3: Stop the invoice-funnel smoke from requiring the homepage CTA

**Objective:** Ensure `npm run test:health` no longer protects an unofficial homepage CTA.

**Files:**
- Modify: `scripts/check-invoice-funnel.mjs`

**Step 1: Remove the homepage CTA assertion**

Delete this block from `scripts/check-invoice-funnel.mjs`:

```js
if (!home.includes('href="/woocommerce-eu-vat-invoices"') || !home.includes('EU Invoice Workflow')) {
  failures.push('homepage hero must keep the EU invoice workflow CTA visible');
}
```

Also delete the now-unused line:

```js
const home = readFileSync('src/app/page.tsx', 'utf8');
```

**Step 2: Update the success checks label**

In the JSON `checks` array, remove:

```js
'homepage CTA visible',
```

**Step 3: Run health tests**

Run:

```bash
npm run test:health
```

Expected:

- `PASS: shop catalog copy only promotes official catalog products`
- `PASS: homepage hero CTA stays within the official catalog`
- invoice funnel smoke still passes for the landing page/docs links, without checking the homepage CTA.

---

### Task 4: Build and SEO-test the frontend

**Objective:** Ensure the homepage-only catalog hygiene change does not break existing frontend checks or production build.

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

Expected: build completes successfully and lists `/`, `/shop`, `/product/[slug]`, and the existing static routes without errors.

**Step 3: Commit**

Run:

```bash
git add package.json scripts/check-homepage-catalog-cta.mjs scripts/check-invoice-funnel.mjs src/app/page.tsx docs/issues/2026-06-25-homepage-invoice-funnel-catalog-drift.md docs/plans/2026-06-25-homepage-official-catalog-cta.md
git commit -m "fix: keep homepage CTA in official catalog"
git push origin main
```

---

### Task 5: Deploy and verify production homepage copy

**Objective:** Prove production `/` no longer routes the primary hero CTA to the unofficial invoice funnel and still exposes the 7 official products.

**Files:**
- No source changes expected.

**Step 1: Deploy frontend**

Run from any directory:

```bash
ssh root@65.108.128.89 "ceo-deploy lattice"
```

Expected: deploy pulls the new frontend commit, rebuilds `lattice-frontend:latest`, recreates the `lattice-frontend` container, and reports the frontend running.

**Step 2: Verify public homepage HTML**

Run:

```bash
curl -sSL -A 'Mozilla/5.0' https://latticeplugins.com/ -o /tmp/lattice-home-current.html
python3 - <<'PY'
from pathlib import Path
html = Path('/tmp/lattice-home-current.html').read_text(errors='ignore')
disallowed = ['EU Invoice Workflow', 'href="/woocommerce-eu-vat-invoices"']
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

1. Navigate to `https://latticeplugins.com/`.
2. Screenshot/inspect visually.
3. Confirm styled page, header/footer, official 7-product grid, and homepage CTA pointing to Lattice SEO instead of the invoice funnel.
4. Kill Chrome-for-Testing processes and verify process count is within the documented `0-2` threshold.

---

## Rollback Plan

If the deploy breaks homepage rendering:

```bash
cd ~/Developer/latticeplugins-frontend
git revert HEAD
git push origin main
ssh root@65.108.128.89 "ceo-deploy lattice"
```

Then rerun the production homepage HTML check and `scripts/vps-infra-health.sh`.
