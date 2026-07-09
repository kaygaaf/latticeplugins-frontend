# Restore Homepage Official Catalog Guard Implementation Plan

> **For Hermes:** Use subagent-driven-development skill to implement this plan task-by-task.

**Goal:** Remove the reintroduced invoice funnel from the homepage and make frontend health checks fail if homepage/site chrome promote unofficial invoice products again.

**Architecture:** Keep invoice landing/docs/tool pages as direct deep-link revenue content, but restore `src/app/page.tsx`, `src/components/Header.tsx`, `src/components/Footer.tsx`, and `/shop/` to official-catalog-only acquisition surfaces. Split guards by responsibility: homepage/site chrome catalog guard blocks invoice terms; invoice funnel guard validates only direct invoice surfaces.

**Tech Stack:** Next.js 14 App Router, React/TypeScript, Node.js static health scripts, backend live smoke harness in `../latticeplugins-prod/scripts/lattice_qa_security_smoke.py`.

---

## Verified Context

- Issue/spec: `docs/issues/2026-07-09-homepage-invoice-funnel-reopened.md`.
- Current source regression is in `src/app/page.tsx:56-95`; header/footer are clean.
- Current `npm run test:health` exits 0 for the wrong reason and prints `PASS: homepage keeps official catalog CTAs and includes the invoice revenue funnel`.
- Current backend live smoke fails on homepage catalog hygiene: `homepage catalog official_present=7/7 missing=none unofficial_promos=['Lattice Invoices', 'woocommerce-eu-vat-invoices']`.
- The previous Lattice Migrate hardening task is no longer the next task: focused partial-restore regression and strict local catalog smoke passed on 2026-07-09.

---

### Task 1: Make homepage/site-chrome guard fail on invoice funnel terms

**Objective:** Convert the currently inverted homepage guard into a catalog-only guard and prove it fails against the current homepage.

**Files:**
- Modify: `scripts/check-homepage-catalog-cta.mjs`
- Test: `scripts/check-homepage-catalog-cta.mjs`

**Step 1: Replace the guard with catalog-only logic**

Replace the full contents of `scripts/check-homepage-catalog-cta.mjs` with:

```js
#!/usr/bin/env node
import { readFileSync } from 'node:fs';

const primarySurfaceFiles = [
  'src/app/page.tsx',
  'src/components/Header.tsx',
  'src/components/Footer.tsx',
];

const homeSource = primarySurfaceFiles
  .map((path) => readFileSync(path, 'utf8'))
  .join('\n');

const requiredOfficialCatalogTerms = [
  'href="/shop"',
  'Compare all 7 plugins',
  'Lattice Commerce Suite',
  'Lattice Core',
  'Lattice CRM',
  'Lattice Migrate',
  'Lattice Stripe Payments',
  'Lattice Subscribify',
  'Lattice SEO',
  'href="/product/lattice-seo"',
  'href="/product/lattice-commerce-suite"',
];

const forbiddenPrimarySurfaceTerms = [
  'Lattice Invoices',
  'EU Invoices',
  'Primary WooCommerce revenue focus',
  'View Lattice Invoices offer',
  'VAT/BTW invoices',
  'VAT/BTW fields',
  'invoice ROI',
  '/woocommerce-eu-vat-invoices',
  '/docs/woocommerce-eu-vat-invoice-setup',
  '/tools/woocommerce-invoice-roi-calculator',
  'mailto:support@latticeplugins.com?subject=Lattice%20Invoices',
  'href="/product/lattice-invoices"',
];

const missingOfficialCatalogTerms = requiredOfficialCatalogTerms.filter((term) => !homeSource.includes(term));
const presentForbiddenTerms = forbiddenPrimarySurfaceTerms.filter((term) => homeSource.includes(term));

if (missingOfficialCatalogTerms.length > 0 || presentForbiddenTerms.length > 0) {
  console.error('FAIL: homepage/site-chrome catalog guard failed');
  if (missingOfficialCatalogTerms.length > 0) {
    console.error(`Official catalog terms missing: ${missingOfficialCatalogTerms.join(', ')}`);
  }
  if (presentForbiddenTerms.length > 0) {
    console.error(`Forbidden primary-surface invoice terms found: ${presentForbiddenTerms.join(', ')}`);
  }
  process.exit(1);
}

console.log('PASS: homepage and site chrome stay within the official catalog');
```

**Step 2: Run the guard and verify RED**

Run:

```bash
node scripts/check-homepage-catalog-cta.mjs
```

Expected: FAIL with forbidden terms including at least `Lattice Invoices`, `Primary WooCommerce revenue focus`, `/woocommerce-eu-vat-invoices`, `/tools/woocommerce-invoice-roi-calculator`, and `VAT/BTW invoices`.

**Step 3: Do not commit yet**

This task intentionally creates a red guard that Task 2 and Task 3 make green.

---

### Task 2: Scope invoice funnel guard to direct invoice pages only

**Objective:** Keep direct invoice landing/docs/tool coverage without requiring homepage invoice promotion.

**Files:**
- Modify: `scripts/check-invoice-funnel.mjs`
- Test: `scripts/check-invoice-funnel.mjs`

**Step 1: Remove homepage reads/checks**

In `scripts/check-invoice-funnel.mjs`, delete:

```js
const homepage = readFileSync('src/app/page.tsx', 'utf8');
```

Delete the homepage assertion blocks:

```js
for (const term of ['View Lattice Invoices offer', '/woocommerce-eu-vat-invoices']) {
  if (!homepage.includes(term)) {
    failures.push(`homepage is missing invoice funnel link/copy: ${term}`);
  }
}

if (!homepage.includes('/tools/woocommerce-invoice-roi-calculator')) {
  failures.push('homepage must link to the invoice ROI calculator from the invoice funnel section');
}
```

**Step 2: Read and validate the ROI tool directly**

Add near the top:

```js
const roiTool = readFileSync('src/app/tools/woocommerce-invoice-roi-calculator/page.tsx', 'utf8');
```

Add after the landing/docs/product checks:

```js
for (const term of ['Lattice Invoices', '/woocommerce-eu-vat-invoices', 'Calculate invoice ROI']) {
  if (!roiTool.includes(term)) {
    failures.push(`invoice ROI tool is missing direct invoice term: ${term}`);
  }
}
```

**Step 3: Update the success payload**

Replace the last `checks` item:

```js
'homepage links into invoice offer and ROI calculator'
```

with:

```js
'invoice ROI tool links back to the direct invoice offer'
```

**Step 4: Run direct invoice guard**

Run:

```bash
node scripts/check-invoice-funnel.mjs
```

Expected: PASS JSON with no homepage check in the `checks` array.

---

### Task 3: Remove homepage invoice promotion section

**Objective:** Make the homepage source satisfy the official catalog guard without weakening the official product hero/grid.

**Files:**
- Modify: `src/app/page.tsx:56-95`
- Test: `scripts/check-homepage-catalog-cta.mjs`

**Step 1: Delete the invoice promotion block**

Delete the whole section that starts at current `src/app/page.tsx:56`:

```tsx
<section className="mb-12 rounded-2xl border border-emerald-200 bg-gradient-to-br from-emerald-50 to-white p-6 md:p-8 shadow-sm">
```

and ends before:

```tsx
{/* Products Grid */}
```

This removes homepage copy/links for `Primary WooCommerce revenue focus`, `Lattice Invoices`, `/woocommerce-eu-vat-invoices`, `/tools/woocommerce-invoice-roi-calculator`, and `VAT/BTW invoices`.

**Step 2: Keep the official hero intact**

Do not remove these terms from the homepage hero because the guard requires them:

```tsx
Official Lattice plugin catalog
Compare all 7 plugins
Lattice Commerce Suite
Lattice Core
Lattice CRM
Lattice Migrate
Lattice Stripe Payments
Lattice Subscribify
Lattice SEO
```

**Step 3: Run homepage guard and verify GREEN**

Run:

```bash
node scripts/check-homepage-catalog-cta.mjs
```

Expected:

```text
PASS: homepage and site chrome stay within the official catalog
```

---

### Task 4: Run local frontend verification

**Objective:** Prove all frontend static guards still pass after the homepage guard realignment.

**Files:**
- Verify only; no expected file changes.

**Step 1: Run health suite**

Run:

```bash
npm run test:health
```

Expected:

```text
Prod health coverage check passed
PASS: shop catalog copy only promotes official catalog products
PASS: homepage and site chrome stay within the official catalog
{ ... "ok": true ... }
```

The JSON checks must mention direct invoice surfaces, not homepage invoice links.

**Step 2: Run SEO suite**

Run:

```bash
npm run test:seo
```

Expected: PASS.

**Step 3: Build**

Run:

```bash
npm run build
```

Expected: production build completes without TypeScript/Next.js errors.

---

### Task 5: Commit and deploy

**Objective:** Ship the catalog-surface fix and verify production, not just source.

**Files:**
- Commit modified frontend files.
- Verify production via backend smoke after deploy.

**Step 1: Commit frontend fix**

Run:

```bash
git add src/app/page.tsx scripts/check-homepage-catalog-cta.mjs scripts/check-invoice-funnel.mjs
git commit -m "restore homepage catalog guard"
git push origin main
```

Expected: commit created and pushed from `latticeplugins-frontend`.

**Step 2: Deploy frontend**

Run from any directory:

```bash
ssh root@65.108.128.89 "ceo-deploy lattice"
```

Expected: deploy script completes successfully and recreates the Coolify-era frontend container.

**Step 3: Verify production catalog hygiene**

From `../latticeplugins-prod`, run:

```bash
python3 scripts/lattice_qa_security_smoke.py --live
```

Expected: PASS. Important line should show homepage/shop official catalog present with `unofficial_promos=none`.

**Step 4: Visual inspection and cleanup**

Follow the Lattice deploy workflow:

1. Open `https://latticeplugins.com` in a browser.
2. Confirm styled homepage renders, header loads, and the invoice promo block is gone from the homepage.
3. Confirm official product cards are visible.
4. Kill Chrome-for-Testing processes afterward:

```bash
killall -9 "Google Chrome for Testing" 2>/dev/null || true
ps aux | grep "Chrome for Testing" | grep -v grep | wc -l
```

Expected: Chrome process count `0` to `2`.

---

## Final Developer Acceptance Checklist

- [ ] Homepage/site-chrome guard forbids invoice funnel terms.
- [ ] Invoice funnel guard validates direct invoice pages only and no longer reads `src/app/page.tsx`.
- [ ] Homepage invoice promotion section removed.
- [ ] `npm run test:health` passes for the right reason.
- [ ] `npm run test:seo` passes.
- [ ] `npm run build` passes.
- [ ] Frontend commit pushed.
- [ ] Production deployed.
- [ ] Backend live smoke passes with `unofficial_promos=none`.
- [ ] Browser visual inspection completed and Chrome cleaned up.
