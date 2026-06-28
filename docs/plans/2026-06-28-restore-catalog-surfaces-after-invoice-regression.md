# Restore Catalog Surfaces After Invoice Regression Implementation Plan

> **For Hermes:** Use subagent-driven-development skill to implement this plan task-by-task.

**Goal:** Remove unofficial Lattice Invoices promotion from homepage, header, footer, and shop catalog surfaces while preserving the direct invoice landing/docs funnel for explicit links.

**Architecture:** Keep the official 7-product catalog as the public navigation/acquisition source of truth. The direct invoice pages remain in the codebase and are still covered by `scripts/check-invoice-funnel.mjs`, but global chrome and catalog pages must not promote them.

**Tech Stack:** Next.js 14 App Router, React/TypeScript, Node-based static health guards, npm scripts.

---

## Pre-work: confirm the failing baseline

Run from `~/Developer/latticeplugins-frontend`:

```bash
npm run test:health
```

Expected current result before changes:

```text
FAIL: shop catalog copy guard failed
Disallowed unofficial promo terms found: Lattice Invoices, /woocommerce-eu-vat-invoices, /docs/woocommerce-eu-vat-invoice-setup
```

Do not weaken `scripts/check-shop-catalog-copy.mjs` or `scripts/check-homepage-catalog-cta.mjs`. They are failing for the right reason.

---

### Task 1: Restore official-product navigation in the header

**Objective:** Remove the global `EU Invoices` nav item and replace it with an official catalog product link.

**Files:**
- Modify: `src/components/Header.tsx:29-34`
- Test: `scripts/check-homepage-catalog-cta.mjs`

**Step 1: Edit header navigation**

Replace the current invoice nav link:

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
  href="/product/lattice-seo"
  className="text-gray-700 hover:text-blue-600 font-medium transition"
>
  Lattice SEO
</Link>
```

**Step 2: Run focused guard**

```bash
node scripts/check-homepage-catalog-cta.mjs
```

Expected at this task stage: it may still fail because homepage/footer still contain invoice terms, but the failure list must no longer include `href="/woocommerce-eu-vat-invoices"` from `Header.tsx`.

**Step 3: Commit only if working task-by-task**

If implementing as separate commits:

```bash
git add src/components/Header.tsx
git commit -m "fix: keep header navigation in official catalog"
```

---

### Task 2: Remove invoice setup guide from global footer chrome

**Objective:** Keep global footer links within official products/catalog instead of deep-linking invoice setup docs.

**Files:**
- Modify: `src/components/Footer.tsx:37-40`
- Test: `scripts/check-homepage-catalog-cta.mjs`

**Step 1: Replace footer docs link**

Replace:

```tsx
<li>
  <Link href="/docs/woocommerce-eu-vat-invoice-setup" className="hover:text-white transition">
    EU VAT invoice setup guide
  </Link>
</li>
```

with:

```tsx
<li>
  <Link href="/product/lattice-seo" className="hover:text-white transition">
    View Lattice SEO
  </Link>
</li>
```

If this creates two identical Lattice SEO footer links, remove the duplicate later in Task 5 cleanup. Keep this task minimal.

**Step 2: Run focused guard**

```bash
node scripts/check-homepage-catalog-cta.mjs
```

Expected at this task stage: it may still fail because homepage content still contains invoice terms, but the failure list must no longer include `href="/docs/woocommerce-eu-vat-invoice-setup"` from `Footer.tsx`.

**Step 3: Commit only if working task-by-task**

```bash
git add src/components/Footer.tsx
git commit -m "fix: remove invoice docs link from global footer"
```

---

### Task 3: Replace homepage invoice hero and revenue panel with official Lattice SEO/catalog CTA

**Objective:** Make the homepage primary acquisition surface promote an official product and the 7-product catalog.

**Files:**
- Modify: `src/app/page.tsx:32-89`
- Test: `scripts/check-homepage-catalog-cta.mjs`

**Step 1: Replace the hero copy**

In `src/app/page.tsx`, replace the hero section lines currently mentioning `WooCommerce EU invoicing`, `Stop fixing WooCommerce invoices by hand.`, `Lattice Invoices`, and `View EU invoice offer` with:

```tsx
<section className="text-center py-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-2xl mb-8">
  <p className="uppercase tracking-[0.25em] text-sm text-blue-100 mb-4">Official 7-product WordPress plugin catalog</p>
  <h1 className="text-5xl font-bold mb-4">Premium WordPress plugins for WooCommerce, CRM, SEO, and site operations.</h1>
  <p className="text-xl mb-8 max-w-3xl mx-auto">
    Build faster stores with Lattice Commerce Suite, Lattice CRM, Lattice Migrate,
    Lattice Stripe Payments, Lattice Subscribify, Lattice Core, and Lattice SEO.
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

**Step 2: Replace the green invoice panel**

Replace the section currently starting with:

```tsx
<section className="mb-12 rounded-2xl border border-green-100 bg-green-50 p-6 md:p-8">
```

with an official Lattice SEO panel:

```tsx
<section className="mb-12 rounded-2xl border border-blue-100 bg-blue-50 p-6 md:p-8">
  <div className="grid grid-cols-1 lg:grid-cols-[1.25fr_0.75fr] gap-6 items-center">
    <div>
      <p className="uppercase tracking-[0.2em] text-xs text-blue-700 font-semibold mb-3">New official product</p>
      <h2 className="text-3xl font-bold mb-3">Lattice SEO: technical SEO tools without annual plugin bloat.</h2>
      <p className="text-slate-700 leading-relaxed mb-5">
        Ship the next official Lattice product with XML sitemaps, schema.org structured data,
        Open Graph metadata, canonical controls, and WooCommerce-aware SEO foundations.
      </p>
      <div className="flex flex-col sm:flex-row gap-3">
        <Link
          href="/product/lattice-seo"
          className="bg-blue-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-blue-700 transition text-center"
        >
          View Lattice SEO
        </Link>
        <Link
          href="/shop"
          className="border border-blue-200 bg-white px-6 py-3 rounded-xl font-semibold hover:border-blue-500 transition text-center"
        >
          Compare all 7 plugins
        </Link>
      </div>
    </div>
    <div className="rounded-2xl bg-white p-5 border border-blue-100">
      <p className="font-semibold text-slate-900 mb-3">Official catalog guardrails:</p>
      <ul className="space-y-3 text-sm text-slate-700">
        <li className="flex gap-2"><span className="text-blue-600 font-bold">✓</span><span>Only 7 official shop products appear in catalog promotion.</span></li>
        <li className="flex gap-2"><span className="text-blue-600 font-bold">✓</span><span>SEO, CRM, commerce, payments, subscriptions, migrations, and core services stay first-class.</span></li>
        <li className="flex gap-2"><span className="text-blue-600 font-bold">✓</span><span>Experimental landing pages stay available without confusing the main catalog.</span></li>
      </ul>
    </div>
  </div>
</section>
```

**Step 3: Run focused homepage guard**

```bash
node scripts/check-homepage-catalog-cta.mjs
```

Expected: `PASS: homepage and site chrome stay within the official catalog`

**Step 4: Commit only if working task-by-task**

```bash
git add src/app/page.tsx
git commit -m "fix: restore homepage official catalog CTA"
```

---

### Task 4: Remove invoice promo block from shop page

**Objective:** Ensure `/shop/` is a pure official-catalog page with no unofficial product promotion above the grid.

**Files:**
- Modify: `src/app/shop/page.tsx:34-67`
- Test: `scripts/check-shop-catalog-copy.mjs`

**Step 1: Replace the invoice promo block**

Replace the current `<section>` block at `src/app/shop/page.tsx:34-67` with an official catalog intro:

```tsx
<section className="mb-10 rounded-2xl border border-blue-100 bg-blue-50 p-6 md:p-8 text-center">
  <p className="uppercase tracking-[0.25em] text-xs text-blue-700 font-semibold mb-3">Official 7-product catalog</p>
  <h2 className="text-3xl font-bold mb-3">Choose the Lattice plugin that matches your next WooCommerce or WordPress bottleneck.</h2>
  <p className="text-slate-700 leading-relaxed max-w-3xl mx-auto mb-5">
    Compare Lattice Commerce Suite, Lattice Core, Lattice CRM, Lattice Migrate,
    Lattice Stripe Payments, Lattice Subscribify, and Lattice SEO from one clean catalog.
  </p>
  <Link
    href="/product/lattice-seo"
    className="inline-block bg-blue-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-blue-700 transition"
  >
    View Lattice SEO
  </Link>
</section>
```

**Step 2: Run focused shop guard**

```bash
node scripts/check-shop-catalog-copy.mjs
```

Expected: `PASS: shop catalog copy only promotes official catalog products`

**Step 3: Commit only if working task-by-task**

```bash
git add src/app/shop/page.tsx
git commit -m "fix: keep shop promo within official catalog"
```

---

### Task 5: Clean up duplicated official footer links if introduced

**Objective:** Keep footer readable after replacing invoice links.

**Files:**
- Modify: `src/components/Footer.tsx`

**Step 1: Inspect footer quick links**

Ensure the quick links list contains no duplicates and no invoice URLs. Recommended final quick links:

```tsx
Home
Shop
Blog
Lattice Commerce Suite
Lattice SEO
Compare all plugins
```

**Step 2: Verify no invoice terms in primary sources**

```bash
python3 - <<'PY'
from pathlib import Path
files = [
    Path('src/components/Header.tsx'),
    Path('src/components/Footer.tsx'),
    Path('src/app/page.tsx'),
    Path('src/app/shop/page.tsx'),
]
terms = ['Lattice Invoices', 'EU invoice offer', '/woocommerce-eu-vat-invoices', '/docs/woocommerce-eu-vat-invoice-setup']
for path in files:
    text = path.read_text()
    hits = [term for term in terms if term in text]
    print(f'{path}: {hits or "OK"}')
    if hits:
        raise SystemExit(1)
PY
```

Expected: each file prints `OK`.

**Step 3: Commit only if cleanup changed files**

```bash
git add src/components/Footer.tsx
git commit -m "chore: tidy official catalog footer links"
```

---

### Task 6: Run full local verification

**Objective:** Prove the regression is fixed without weakening the invoice deep-link funnel smoke.

**Files:**
- Test: `package.json` scripts only; no source changes expected.

**Step 1: Run health tests**

```bash
npm run test:health
```

Expected:

```text
Prod health coverage check passed
PASS: shop catalog copy only promotes official catalog products
PASS: homepage and site chrome stay within the official catalog
{
  "ok": true,
  "invoiceLanding": "/woocommerce-eu-vat-invoices",
  ...
}
```

**Step 2: Run SEO tests**

```bash
npm run test:seo
```

Expected: product SEO and sitemap route checks pass.

**Step 3: Build**

```bash
npm run build
```

Expected: Next.js build completes successfully.

**Step 4: Commit final source if not already committed task-by-task**

```bash
git add src/components/Header.tsx src/components/Footer.tsx src/app/page.tsx src/app/shop/page.tsx
git commit -m "fix: restore official catalog surfaces"
```

---

### Task 7: Deploy and verify production catalog surfaces

**Objective:** Replace the live invoice-promoting surfaces with official catalog surfaces and prove production is clean.

**Files:**
- No local source changes expected.

**Step 1: Push frontend**

```bash
git push origin main
```

Expected: push succeeds.

**Step 2: Deploy**

```bash
ssh root@65.108.128.89 "ceo-deploy lattice"
```

Expected: deploy pulls the new frontend commit, rebuilds the image, recreates the frontend container, and reports the frontend running.

**Step 3: Probe production text**

Run from any repo:

```bash
python3 - <<'PY'
import urllib.request
paths = ['/', '/shop/']
official = ['Lattice Commerce Suite','Lattice Core','Lattice CRM','Lattice Migrate','Lattice Stripe Payments','Lattice Subscribify','Lattice SEO']
disallowed = ['Lattice Invoices','EU invoice offer','/woocommerce-eu-vat-invoices','/docs/woocommerce-eu-vat-invoice-setup']
for path in paths:
    req = urllib.request.Request('https://latticeplugins.com' + path, headers={'User-Agent': 'Mozilla/5.0 catalog-guard-verify'})
    with urllib.request.urlopen(req, timeout=20) as r:
        body = r.read().decode('utf-8', 'ignore')
        print(path, r.status, len(body))
        missing = [term for term in official if term not in body]
        present = [term for term in disallowed if term in body]
        print('  missing official:', missing)
        print('  present disallowed:', present)
        if r.status != 200 or missing or present:
            raise SystemExit(1)
PY
```

Expected: both paths return `200`, `missing official: []`, and `present disallowed: []`.

**Step 4: Run production-safe infrastructure smoke**

From `~/Developer/latticeplugins-prod`:

```bash
scripts/vps-infra-health.sh
```

Expected: `=== Summary: issues=0 ===`.

**Step 5: Mandatory visual inspection and cleanup**

Follow the existing Lattice deploy workflow: inspect `https://latticeplugins.com` in a browser, verify styled content/header/product grid/footer, then kill Chrome-for-Testing processes. If browser tooling is unavailable in this environment, record that blocker explicitly and do not claim visual inspection happened.
