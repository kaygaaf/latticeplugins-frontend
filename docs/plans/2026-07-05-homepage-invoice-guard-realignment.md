# Homepage Invoice Guard Realignment Implementation Plan

> **For Hermes:** Use subagent-driven-development skill to implement this plan task-by-task.

**Goal:** Remove the renewed homepage `Lattice Invoices` promotion and make local health checks fail on future invoice promo drift in homepage/header/footer primary surfaces.

**Architecture:** Keep direct invoice landing/blog/docs pages and their dedicated funnel smoke intact, but treat homepage/header/footer/shop as official 7-product catalog surfaces. The homepage guard should be a static source guard that requires official catalog CTAs and rejects invoice-funnel terms in primary chrome.

**Tech Stack:** Next.js 14 App Router, React/TypeScript, Node.js static guard scripts, npm health/SEO/build checks.

---

## Pre-work: confirm current mismatch

Run from `~/Developer/latticeplugins-frontend`:

```bash
npm run test:health
```

Expected current result before changes:

```text
Prod health coverage check passed
PASS: shop catalog copy only promotes official catalog products
PASS: homepage promotes invoice revenue funnel while preserving official catalog CTA
```

This passing result is the bug: the homepage guard currently requires invoice revenue terms.

Also run:

```bash
python3 - <<'PY'
from pathlib import Path
files = ['src/components/Header.tsx', 'src/components/Footer.tsx', 'src/app/page.tsx', 'src/app/shop/page.tsx']
terms = ['Lattice Invoices', '/woocommerce-eu-vat-invoices', '/docs/woocommerce-eu-vat-invoice-setup', 'View EU invoice workflow']
for file in files:
    text = Path(file).read_text()
    hits = {term: text.count(term) for term in terms if term in text}
    print(file, hits or 'OK')
PY
```

Expected current result: only `src/app/page.tsx` reports invoice hits.

---

### Task 1: Flip the homepage guard from invoice-required to invoice-forbidden

**Objective:** Make `scripts/check-homepage-catalog-cta.mjs` protect the official catalog instead of requiring invoice funnel copy.

**Files:**
- Modify: `scripts/check-homepage-catalog-cta.mjs`
- Test: `npm run test:health`

**Step 1: Replace the invoice-required terms with forbidden terms**

Replace the current `requiredInvoiceRevenueTerms` / `missingInvoiceRevenueTerms` logic with this complete guard shape:

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
  'Revenue focus: WooCommerce EU invoices',
  'View EU invoice workflow',
  'Read invoice setup guide',
  'Request €49 invoice access',
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

**Step 2: Run the guard to verify it fails before source cleanup**

Run:

```bash
node scripts/check-homepage-catalog-cta.mjs
```

Expected: FAIL with forbidden terms from `src/app/page.tsx`, including `Lattice Invoices`, `/woocommerce-eu-vat-invoices`, and `/docs/woocommerce-eu-vat-invoice-setup`.

**Step 3: Commit if working task-by-task**

```bash
git add scripts/check-homepage-catalog-cta.mjs
git commit -m "test: forbid invoice promos on homepage chrome"
```

---

### Task 2: Remove the green invoice revenue section from the homepage

**Objective:** Remove the public homepage acquisition block for the unofficial invoice funnel.

**Files:**
- Modify: `src/app/page.tsx:56-113`
- Test: `node scripts/check-homepage-catalog-cta.mjs`

**Step 1: Delete the entire green invoice section**

In `src/app/page.tsx`, remove the complete `<section>` that starts with:

```tsx
<section className="mb-12 rounded-2xl border border-emerald-100 bg-gradient-to-br from-emerald-50 to-white p-6 md:p-8">
```

and ends at its matching `</section>` immediately before the blue `Official catalog remains available` section.

Do not remove the hero section, product grid, blog section, or blue official catalog section.

**Step 2: Verify forbidden homepage URLs are gone except for the remaining blue copy**

Run:

```bash
python3 - <<'PY'
from pathlib import Path
text = Path('src/app/page.tsx').read_text()
for term in ['Revenue focus: WooCommerce EU invoices', 'View EU invoice workflow', '/woocommerce-eu-vat-invoices', '/docs/woocommerce-eu-vat-invoice-setup']:
    assert term not in text, term
print('PASS: green invoice section removed')
PY
```

Expected: `PASS: green invoice section removed`.

**Step 3: Commit if working task-by-task**

```bash
git add src/app/page.tsx
git commit -m "fix: remove homepage invoice revenue panel"
```

---

### Task 3: Rewrite the blue official catalog panel so it does not mention invoices

**Objective:** Keep the official Lattice SEO/catalog panel but remove residual invoice-funnel framing from its copy.

**Files:**
- Modify: `src/app/page.tsx:115-148`
- Test: `node scripts/check-homepage-catalog-cta.mjs`

**Step 1: Replace only the copy inside the blue section**

Use this copy inside the existing blue section:

```tsx
<p className="uppercase tracking-[0.2em] text-xs text-blue-700 font-semibold mb-3">Official catalog remains available</p>
<h2 className="text-3xl font-bold mb-3">Lattice SEO and the official 7-product shop stay live.</h2>
<p className="text-slate-700 leading-relaxed mb-5">
  Compare the full Lattice catalog in one place: Lattice Commerce Suite, Core, CRM,
  Migrate, Stripe Payments, Subscribify, and SEO.
</p>
```

In the blue checklist, replace the invoice item with:

```tsx
<li className="flex gap-2"><span className="text-blue-600 font-bold">✓</span><span>Homepage and shop CTAs point to official product pages only.</span></li>
```

Keep the existing `View Lattice SEO` and `Compare all 7 plugins` buttons.

**Step 2: Run the homepage guard**

Run:

```bash
node scripts/check-homepage-catalog-cta.mjs
```

Expected:

```text
PASS: homepage and site chrome stay within the official catalog
```

**Step 3: Commit if working task-by-task**

```bash
git add src/app/page.tsx
git commit -m "fix: keep homepage catalog panel official"
```

---

### Task 4: Run full local verification

**Objective:** Prove the guard and homepage cleanup are green without breaking direct invoice deep-link coverage, SEO checks, or the build.

**Files:**
- No modifications expected unless checks reveal a missed term.

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
terms = ['Lattice Invoices', 'View EU invoice workflow', '/woocommerce-eu-vat-invoices', '/docs/woocommerce-eu-vat-invoice-setup']
for path in files:
    text = path.read_text()
    hits = [term for term in terms if term in text]
    print(f'{path}: {hits or "OK"}')
    if hits:
        raise SystemExit(1)
PY
```

Expected: all four files print `OK`.

**Step 2: Run health checks**

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

The final invoice-funnel JSON may still report `"ok": true` for direct invoice landing/docs pages. That is acceptable because this task only removes primary-surface promotion.

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

**Step 5: Commit final source if not already committed task-by-task**

```bash
git add scripts/check-homepage-catalog-cta.mjs src/app/page.tsx
git commit -m "fix: realign homepage with official catalog"
```

---

### Task 5: Deploy and verify production

**Objective:** Make the public homepage and shop match the official catalog source of truth.

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

Run:

```bash
python3 - <<'PY'
from urllib.request import Request, urlopen
urls = ['https://latticeplugins.com/', 'https://latticeplugins.com/shop/']
official = [
    'Lattice Commerce Suite', 'Lattice Core', 'Lattice CRM', 'Lattice Migrate',
    'Lattice Stripe Payments', 'Lattice Subscribify', 'Lattice SEO'
]
for url in urls:
    req = Request(url, headers={'User-Agent': 'Mozilla/5.0 homepage-catalog-check'})
    html = urlopen(req, timeout=20).read().decode('utf-8', 'replace')
    missing = [name for name in official if name not in html]
    forbidden = [term for term in ['Lattice Invoices', 'View EU invoice workflow', '/woocommerce-eu-vat-invoices', '/docs/woocommerce-eu-vat-invoice-setup'] if term in html]
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
