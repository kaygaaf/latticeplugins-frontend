# Primary Surface Official Catalog Cleanup Implementation Plan

> **For Hermes:** Use subagent-driven-development skill to implement this plan task-by-task.

**Goal:** Remove invoice-funnel promotion from homepage/header primary surfaces and make the health suite guard the official 7-product catalog again.

**Architecture:** Treat `src/app/page.tsx`, `src/components/Header.tsx`, `src/components/Footer.tsx`, and `/shop/` copy as official-catalog-only surfaces. Preserve direct invoice landing/blog/docs pages as deep-link content, but keep `scripts/check-homepage-catalog-cta.mjs` responsible for blocking invoice promotion from homepage/site chrome.

**Tech Stack:** Next.js 14 App Router, React/TypeScript, Node.js static guard scripts, npm health/SEO/build checks, backend live smoke via `scripts/lattice_qa_security_smoke.py --live`.

---

## Verified Context

- Issue/spec: `docs/issues/2026-07-07-primary-surface-invoice-regression-still-open.md`.
- Current local frontend `npm run test:health` exits 0 for the wrong reason and prints `PASS: homepage prioritizes the invoice revenue funnel while preserving official catalog access`.
- `src/components/Header.tsx:29-34` still links `EU Invoices` to `/woocommerce-eu-vat-invoices`.
- `src/app/page.tsx:34-52` uses invoice-led hero copy and `src/app/page.tsx:56-88` renders an invoice-offer panel.
- `scripts/check-invoice-funnel.mjs` is already direct-page-only; keep that scoping.
- Backend `python3 scripts/lattice_qa_security_smoke.py --live` fails only because primary public surfaces still contain invoice promos; local PHP/security checks pass.

---

### Task 1: Flip homepage/site-chrome guard to fail on invoice terms

**Objective:** Make the local health suite fail while homepage/header still contain invoice promotion.

**Files:**
- Modify: `scripts/check-homepage-catalog-cta.mjs`
- Test: `node scripts/check-homepage-catalog-cta.mjs`

**Step 1: Replace `scripts/check-homepage-catalog-cta.mjs` with this guard**

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
  'Primary revenue focus: WooCommerce EU invoicing',
  'Buyer-intent invoice offer',
  'See the invoice workflow',
  'Qualify for €49 early access',
  'VAT/BTW checkout fields',
  'VAT/BTW invoices',
  'credit notes',
  'customer downloads',
  '/woocommerce-eu-vat-invoices',
  '/docs/woocommerce-eu-vat-invoice-setup',
  'mailto:support@latticeplugins.com?subject=Lattice%20Invoices%20early%20access',
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

Expected: FAIL with forbidden terms including `Lattice Invoices`, `EU Invoices`, and `/woocommerce-eu-vat-invoices`.

**Step 3: Do not commit yet**

This task intentionally creates a failing guard that Task 2 and Task 3 make green.

---

### Task 2: Remove invoice navigation from the header

**Objective:** Replace the unofficial invoice nav item with official catalog navigation.

**Files:**
- Modify: `src/components/Header.tsx:29-34`
- Test: `node scripts/check-homepage-catalog-cta.mjs`

**Step 1: Delete the invoice nav block**

Remove this block entirely because the header already has `Shop`, `Commerce Suite`, and `Lattice SEO` official-product navigation:

```tsx
<Link
  href="/woocommerce-eu-vat-invoices"
  className="text-gray-700 hover:text-blue-600 font-medium transition"
>
  EU Invoices
</Link>
```

**Step 2: Verify the header is clean**

Run:

```bash
python3 - <<'PY'
from pathlib import Path
text = Path('src/components/Header.tsx').read_text()
for term in ['EU Invoices', '/woocommerce-eu-vat-invoices', 'Lattice Invoices']:
    assert term not in text, term
print('PASS: header invoice navigation removed')
PY
```

Expected: `PASS: header invoice navigation removed`.

**Step 3: Run the homepage guard**

Run:

```bash
node scripts/check-homepage-catalog-cta.mjs
```

Expected: still FAIL, but header-specific forbidden terms are gone and remaining failures point to `src/app/page.tsx`.

---

### Task 3: Restore homepage hero and remove invoice-offer panel

**Objective:** Make the homepage promote the official catalog instead of the invoice funnel.

**Files:**
- Modify: `src/app/page.tsx:33-88`
- Test: `node scripts/check-homepage-catalog-cta.mjs`

**Step 1: Replace the hero copy and CTAs**

Replace the current hero section (`src/app/page.tsx:33-54`) with:

```tsx
<section className="text-center py-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-2xl mb-8">
  <p className="uppercase tracking-[0.25em] text-sm text-blue-100 mb-4">Official Lattice plugin catalog</p>
  <h1 className="text-5xl font-bold mb-4">WooCommerce plugins for checkout, CRM, backups, payments, subscriptions, and SEO.</h1>
  <p className="text-xl mb-8 max-w-3xl mx-auto">
    Compare the 7 official Lattice products: Commerce Suite, Core, CRM, Migrate, Stripe Payments, Subscribify, and SEO.
  </p>
  <div className="flex flex-col sm:flex-row gap-4 justify-center">
    <Link
      href="/product/lattice-seo"
      className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition inline-block"
    >
      View Lattice SEO
    </Link>
    <Link
      href="/shop"
      className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-blue-600 transition inline-block"
    >
      Compare all 7 plugins
    </Link>
  </div>
</section>
```

**Step 2: Delete the invoice-offer panel**

Delete the whole `section` at `src/app/page.tsx:56-88` that starts with:

```tsx
<section className="mb-12 rounded-2xl border border-green-100 bg-green-50 p-6 md:p-8">
```

and contains `Buyer-intent invoice offer` / `Qualify for €49 early access`.

**Step 3: Run the homepage guard**

Run:

```bash
node scripts/check-homepage-catalog-cta.mjs
```

Expected: `PASS: homepage and site chrome stay within the official catalog`.

---

### Task 4: Verify invoice funnel remains direct-page-only

**Objective:** Ensure the direct invoice content smoke remains green without reintroducing homepage/header dependencies.

**Files:**
- Read/verify: `scripts/check-invoice-funnel.mjs`
- No code changes unless this verification fails.

**Step 1: Run the invoice funnel guard**

Run:

```bash
node scripts/check-invoice-funnel.mjs
```

Expected: PASS JSON with:

```json
{
  "ok": true,
  "invoiceLanding": "/woocommerce-eu-vat-invoices",
  "checks": [
    "price visible on invoice landing",
    "early access CTA visible on invoice landing",
    "fit-score CTA visible on invoice landing",
    "setup guide back-links visible",
    "invoice guide links visible on invoice landing"
  ]
}
```

**Step 2: Confirm the script does not read homepage/header**

Run:

```bash
python3 - <<'PY'
from pathlib import Path
text = Path('scripts/check-invoice-funnel.mjs').read_text()
for forbidden in ['src/app/page.tsx', 'src/components/Header.tsx', 'homepage', 'header invoice navigation visible']:
    assert forbidden not in text, forbidden
print('PASS: invoice funnel guard is direct-page-only')
PY
```

Expected: `PASS: invoice funnel guard is direct-page-only`.

---

### Task 5: Run local frontend quality gates

**Objective:** Prove the catalog cleanup is buildable and guarded.

**Files:**
- No code changes unless tests fail.

**Step 1: Run health tests**

Run:

```bash
npm run test:health
```

Expected markers:

```text
Prod health coverage check passed
PASS: shop catalog copy only promotes official catalog products
PASS: homepage and site chrome stay within the official catalog
```

The invoice funnel JSON must not list homepage/header discovery checks.

**Step 2: Run SEO tests**

Run:

```bash
npm run test:seo
```

Expected: PASS / zero failures.

**Step 3: Build**

Run:

```bash
npm run build
```

Expected: production build completes successfully.

---

### Task 6: Commit, push, deploy, and verify production

**Objective:** Ship the cleanup and prove live homepage/shop primary surfaces match the official catalog.

**Files:**
- `scripts/check-homepage-catalog-cta.mjs`
- `src/components/Header.tsx`
- `src/app/page.tsx`

**Step 1: Commit and push frontend changes**

Run:

```bash
git status --short
git diff -- scripts/check-homepage-catalog-cta.mjs src/components/Header.tsx src/app/page.tsx
git add scripts/check-homepage-catalog-cta.mjs src/components/Header.tsx src/app/page.tsx
git commit -m "restore official catalog primary surfaces"
git push origin main
```

Expected: commit and push succeed.

**Step 2: Deploy**

Run:

```bash
ssh root@65.108.128.89 "ceo-deploy lattice"
```

Expected: deploy completes without rollback.

**Step 3: Verify production primary surfaces**

From `~/Developer/latticeplugins-prod`, run:

```bash
python3 - <<'PY'
import urllib.request
urls = ['https://latticeplugins.com/', 'https://latticeplugins.com/shop/']
official = ['Lattice Commerce Suite','Lattice Core','Lattice CRM','Lattice Migrate','Lattice Stripe Payments','Lattice Subscribify','Lattice SEO']
forbidden = ['Lattice Invoices','EU Invoices','VAT/BTW invoices','woocommerce-eu-vat-invoices','/docs/woocommerce-eu-vat-invoice-setup']
for url in urls:
    req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
    body = urllib.request.urlopen(req, timeout=20).read().decode('utf-8', 'replace')
    missing = [term for term in official if term not in body]
    present = [term for term in forbidden if term in body]
    print(url, 'missing=', missing or 'none', 'forbidden=', present or 'none')
    assert not missing
    assert not present
PY
```

Expected: both URLs report `missing= none forbidden= none`.

**Step 4: Run backend live smoke**

From `~/Developer/latticeplugins-prod`, run:

```bash
python3 scripts/lattice_qa_security_smoke.py --live
```

Expected: PASS, including homepage/shop `official_present=7/7` and `unofficial_promos=none`.

**Step 5: Optional infrastructure sanity check**

Run:

```bash
scripts/vps-infra-health.sh
```

Expected: `=== Summary: issues=0 ===`.

---

## Definition of Done

- Homepage/header/footer/shop source no longer contains invoice-funnel promo terms.
- Homepage/site-chrome health guard fails on invoice terms and passes only for official-catalog surfaces.
- Direct invoice landing/docs/blog guard remains green and direct-page-only.
- `npm run test:health`, `npm run test:seo`, and `npm run build` pass.
- Production `/` and `/shop/` include all 7 official products and zero checked invoice terms.
- `python3 scripts/lattice_qa_security_smoke.py --live` passes after deploy.
