# Primary Surface Catalog Restore Implementation Plan

> **For Hermes:** Use subagent-driven-development skill to implement this plan task-by-task.

**Goal:** Remove renewed `Lattice Invoices` promotion from homepage/header primary surfaces and make local health checks prevent this regression from returning.

**Architecture:** Treat homepage/header/footer/shop as official 7-product catalog surfaces. Keep direct invoice landing/blog/docs pages and their funnel smoke as deep-link content only; do not require homepage/header discovery for the invoice funnel.

**Tech Stack:** Next.js 14 App Router, React/TypeScript, Node.js static guard scripts, npm health/SEO/build checks, production smoke via backend `lattice_qa_security_smoke.py`.

---

## Current verified mismatch

Run from `~/Developer/latticeplugins-frontend` before changes:

```bash
npm run test:health
```

Expected current buggy pass:

```text
Prod health coverage check passed
PASS: shop catalog copy only promotes official catalog products
PASS: homepage and site chrome expose both the official catalog and invoice revenue funnel
...
"homepage invoice discovery CTA visible"
"header invoice navigation visible"
```

Run the source probe:

```bash
python3 - <<'PY'
from pathlib import Path
files = ['src/components/Header.tsx', 'src/components/Footer.tsx', 'src/app/page.tsx', 'src/app/shop/page.tsx']
terms = ['Lattice Invoices', 'EU Invoices', 'Revenue focus: WooCommerce EU invoicing', 'View Lattice Invoices offer', 'Request invoice fit check', 'VAT/BTW invoices', '/woocommerce-eu-vat-invoices', '/docs/woocommerce-eu-vat-invoice-setup']
for file in files:
    text = Path(file).read_text()
    hits = {term: text.count(term) for term in terms if term in text}
    print(file, hits or 'OK')
PY
```

Expected current result: `Header.tsx` and `page.tsx` show invoice hits; `Footer.tsx` and `shop/page.tsx` should be clean.

---

### Task 1: Flip homepage/site-chrome guard to forbid invoice terms

**Objective:** Make `scripts/check-homepage-catalog-cta.mjs` fail while invoice promo copy remains in homepage/header/footer.

**Files:**
- Modify: `scripts/check-homepage-catalog-cta.mjs`
- Test: `node scripts/check-homepage-catalog-cta.mjs`

**Step 1: Replace the file with this guard**

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

const requiredOfficialCtaTerms = [
  'href="/product/lattice-seo"',
  'View Lattice SEO',
  'Compare all 7 plugins',
  'Official catalog remains available',
  'Lattice Commerce Suite',
  'Lattice Core',
  'Lattice CRM',
  'Lattice Migrate',
  'Lattice Stripe Payments',
  'Lattice Subscribify',
  'Lattice SEO',
];

const forbiddenPrimarySurfaceTerms = [
  'Lattice Invoices',
  'EU Invoices',
  'Revenue focus: WooCommerce EU invoicing',
  'Revenue focus: WooCommerce EU invoices',
  'View Lattice Invoices offer',
  'View EU invoice workflow',
  'Read setup guide',
  'Read invoice setup guide',
  'Request invoice fit check',
  'Request €49 invoice access',
  'VAT/BTW invoices',
  'invoice funnel',
  'qualified early-access lead',
  '/woocommerce-eu-vat-invoices',
  '/docs/woocommerce-eu-vat-invoice-setup',
  'mailto:support@latticeplugins.com?subject=Lattice%20Invoices%20early%20access',
];

const missingOfficialCtaTerms = requiredOfficialCtaTerms.filter((term) => !homeSource.includes(term));
const presentForbiddenTerms = forbiddenPrimarySurfaceTerms.filter((term) => homeSource.includes(term));

if (missingOfficialCtaTerms.length > 0 || presentForbiddenTerms.length > 0) {
  console.error('FAIL: homepage/site-chrome catalog guard failed');
  if (missingOfficialCtaTerms.length > 0) {
    console.error(`Official catalog CTA terms missing: ${missingOfficialCtaTerms.join(', ')}`);
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

Expected: FAIL with forbidden terms including `Lattice Invoices`, `EU Invoices`, `/woocommerce-eu-vat-invoices`, and `/docs/woocommerce-eu-vat-invoice-setup`.

**Step 3: Commit**

```bash
git add scripts/check-homepage-catalog-cta.mjs
git commit -m "test: forbid invoice promos on primary catalog surfaces"
```

---

### Task 2: Scope invoice funnel guard to direct invoice pages only

**Objective:** Keep invoice funnel coverage for direct landing/docs/blog pages without requiring homepage/header promotion.

**Files:**
- Modify: `scripts/check-invoice-funnel.mjs`
- Test: `node scripts/check-invoice-funnel.mjs`

**Step 1: Remove homepage/header reads**

Delete these lines:

```js
const homepage = readFileSync('src/app/page.tsx', 'utf8');
const header = readFileSync('src/components/Header.tsx', 'utf8');
```

**Step 2: Delete discovery-term requirements**

Remove the whole `requiredDiscoveryTerms` block that requires:

```js
'Revenue focus: WooCommerce EU invoicing',
'View Lattice Invoices offer',
'Request invoice fit check',
'/woocommerce-eu-vat-invoices',
'EU Invoices',
```

Remove the loop that checks `homepage` and `header` for those terms.

**Step 3: Update reported checks**

Replace the final `checks` array with direct-page-only checks:

```js
checks: [
  'price visible on invoice landing',
  'early access CTA visible on invoice landing',
  'fit-score CTA visible on invoice landing',
  'setup guide back-links visible',
  'invoice guide links visible on invoice landing',
],
```

**Step 4: Run the direct funnel guard**

Run:

```bash
node scripts/check-invoice-funnel.mjs
```

Expected: PASS JSON with `ok: true`, `invoiceLanding: "/woocommerce-eu-vat-invoices"`, at least 3 mailto CTAs, at least 20 guide links, and no `homepage/header` checks.

**Step 5: Commit**

```bash
git add scripts/check-invoice-funnel.mjs
git commit -m "test: scope invoice funnel smoke to direct pages"
```

---

### Task 3: Remove invoice navigation from the header

**Objective:** Replace the unofficial `EU Invoices` nav item with an official catalog/product link.

**Files:**
- Modify: `src/components/Header.tsx:29-40`
- Test: `node scripts/check-homepage-catalog-cta.mjs`

**Step 1: Replace the header invoice link**

Replace:

```tsx
<Link
  href="/woocommerce-eu-vat-invoices"
  className="text-gray-700 hover:text-blue-600 font-medium transition"
>
  EU Invoices
</Link>
```

with:

```tsx
<Link
  href="/product/lattice-commerce-suite"
  className="text-gray-700 hover:text-blue-600 font-medium transition"
>
  Commerce Suite
</Link>
```

Keep the existing `Lattice SEO` link.

**Step 2: Verify the header no longer contains invoice nav terms**

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

**Step 3: Commit**

```bash
git add src/components/Header.tsx
git commit -m "fix: restore official product header navigation"
```

---

### Task 4: Remove the homepage invoice revenue block

**Objective:** Delete the public homepage acquisition section for the unofficial invoice funnel.

**Files:**
- Modify: `src/app/page.tsx:56-101`
- Test: `node scripts/check-homepage-catalog-cta.mjs`

**Step 1: Delete the green invoice section**

In `src/app/page.tsx`, remove the entire `<section>` that starts with:

```tsx
<section className="mb-12 rounded-2xl border border-emerald-200 bg-gradient-to-br from-emerald-50 via-white to-blue-50 p-6 md:p-8 shadow-sm">
```

and ends at its matching `</section>` immediately before the blue `Official catalog remains available` section.

Do not remove the hero section, the blue official catalog section, product grid, or blog section.

**Step 2: Verify homepage forbidden terms are gone**

Run:

```bash
python3 - <<'PY'
from pathlib import Path
text = Path('src/app/page.tsx').read_text()
terms = ['Lattice Invoices', 'Revenue focus: WooCommerce EU invoicing', 'View Lattice Invoices offer', 'Request invoice fit check', 'VAT/BTW invoices', '/woocommerce-eu-vat-invoices', '/docs/woocommerce-eu-vat-invoice-setup']
for term in terms:
    assert term not in text, term
print('PASS: homepage invoice revenue block removed')
PY
```

Expected: `PASS: homepage invoice revenue block removed`.

**Step 3: Run the homepage guard**

Run:

```bash
node scripts/check-homepage-catalog-cta.mjs
```

Expected:

```text
PASS: homepage and site chrome stay within the official catalog
```

**Step 4: Commit**

```bash
git add src/app/page.tsx
git commit -m "fix: remove homepage invoice revenue block"
```

---

### Task 5: Run full local verification

**Objective:** Prove primary surfaces are clean and no direct invoice deep-link coverage was broken.

**Files:**
- No modifications expected unless a check fails.

**Step 1: Verify primary surfaces are clean**

Run:

```bash
python3 - <<'PY'
from pathlib import Path
files = [
    Path('src/components/Header.tsx'),
    Path('src/components/Footer.tsx'),
    Path('src/app/page.tsx'),
    Path('src/app/shop/page.tsx'),
]
terms = ['Lattice Invoices', 'EU Invoices', 'View Lattice Invoices offer', 'Request invoice fit check', 'VAT/BTW invoices', '/woocommerce-eu-vat-invoices', '/docs/woocommerce-eu-vat-invoice-setup']
for path in files:
    text = path.read_text()
    hits = [term for term in terms if term in text]
    print(f'{path}: {hits or "OK"}')
    if hits:
        raise SystemExit(1)
PY
```

Expected: all four primary-surface files print `OK`.

**Step 2: Run frontend health**

Run:

```bash
npm run test:health
```

Expected includes:

```text
Prod health coverage check passed
PASS: shop catalog copy only promotes official catalog products
PASS: homepage and site chrome stay within the official catalog
```

The invoice-funnel JSON should still report direct landing/docs coverage, but it must not list homepage/header discovery checks.

**Step 3: Run SEO checks**

Run:

```bash
npm run test:seo
```

Expected: product SEO and sitemap route origin checks pass.

**Step 4: Build**

Run:

```bash
npm run build
```

Expected: Next.js build completes successfully.

**Step 5: Commit any final fixes**

```bash
git add scripts/check-homepage-catalog-cta.mjs scripts/check-invoice-funnel.mjs src/components/Header.tsx src/app/page.tsx
git commit -m "fix: realign primary surfaces with official catalog"
```

---

### Task 6: Deploy and verify production

**Objective:** Prove public `/` and `/shop/` now match the 7-product catalog source of truth.

**Files:**
- No source modifications expected.

**Step 1: Push frontend**

```bash
git push origin main
```

Expected: push succeeds.

**Step 2: Deploy**

```bash
ssh root@65.108.128.89 "ceo-deploy lattice"
```

Expected: deploy pulls the pushed commit, rebuilds `lattice-frontend:latest`, recreates `lattice-frontend`, and reports it running.

**Step 3: Verify production text surfaces**

Run from any repo:

```bash
python3 - <<'PY'
from urllib.request import Request, urlopen
urls = ['https://latticeplugins.com/', 'https://latticeplugins.com/shop/']
official = [
    'Lattice Commerce Suite', 'Lattice Core', 'Lattice CRM', 'Lattice Migrate',
    'Lattice Stripe Payments', 'Lattice Subscribify', 'Lattice SEO'
]
for url in urls:
    req = Request(url, headers={'User-Agent': 'Mozilla/5.0 primary-surface-catalog-check'})
    html = urlopen(req, timeout=20).read().decode('utf-8', 'replace')
    missing = [name for name in official if name not in html]
    forbidden = [term for term in ['Lattice Invoices', 'View Lattice Invoices offer', 'Request invoice fit check', 'VAT/BTW invoices', '/woocommerce-eu-vat-invoices', '/docs/woocommerce-eu-vat-invoice-setup'] if term in html]
    print(url, 'bytes=', len(html), 'missing=', missing or 'none', 'forbidden=', forbidden or 'none')
    if missing or forbidden:
        raise SystemExit(1)
PY
```

Expected: both URLs print `missing= none` and `forbidden= none`.

**Step 4: Run backend live smoke and VPS health**

From `~/Developer/latticeplugins-prod`:

```bash
python3 scripts/lattice_qa_security_smoke.py --live
scripts/vps-infra-health.sh
```

Expected:

- live smoke passes `live_public_paths` with `official_present=7/7` and no `unofficial_promos`;
- VPS health ends with `=== Summary: issues=0 ===`.

**Step 5: Mandatory visual inspection and cleanup**

Use the configured browser inspection workflow to open `https://latticeplugins.com/` and `https://latticeplugins.com/shop/`, capture screenshots, and verify styled official catalog content. Then kill Chrome-for-Testing processes per project rules.

**Step 6: Completion report**

Report:

- frontend commit hash;
- local outputs for `npm run test:health`, `npm run test:seo`, and `npm run build`;
- deploy result;
- production proof that `/` and `/shop/` include all 7 official product names and zero forbidden invoice terms;
- `python3 scripts/lattice_qa_security_smoke.py --live` result;
- `scripts/vps-infra-health.sh` summary.
