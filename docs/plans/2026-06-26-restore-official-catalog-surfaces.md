# Restore Official Catalog Surfaces Implementation Plan

> **For Hermes:** Use subagent-driven-development skill to implement this plan task-by-task.

**Goal:** Remove unofficial invoice-funnel promotion from the homepage, shop page, and global header while preserving the invoice landing page as direct content.

**Architecture:** Apply the smallest frontend source changes to the three public acquisition surfaces that regressed, then strengthen the existing static catalog guards. Keep invoice landing/docs pages intact; only remove them from primary navigation and official catalog surfaces.

**Tech Stack:** Next.js 14 App Router, TypeScript/TSX, Node.js static guard scripts, existing `npm run test:health`, `npm run test:seo`, and `npm run build`.

---

## Verified Context

- Issue/spec: `docs/issues/2026-06-26-invoice-funnel-regressed-catalog-guards.md`.
- Current local frontend `HEAD`: `9dab2d5c focused the invoice funnel`.
- Current failure:
  ```text
  npm run test:health
  FAIL: shop catalog copy guard failed
  Disallowed unofficial promo terms found: Lattice Invoices, VAT/BTW invoices, /woocommerce-eu-vat-invoices, /docs/woocommerce-eu-vat-invoice-setup
  ```
- Production infra is healthy (`scripts/vps-infra-health.sh` → `=== Summary: issues=0 ===`), and WooCommerce still has exactly 7 products. This is frontend copy/navigation drift.
- Production `/` currently contains `Lattice Invoices: 2`, `View EU invoice workflow: 2`, `woocommerce-eu-vat-invoices: 6`, and `/docs/woocommerce-eu-vat-invoice-setup: 4`.
- Production `/shop/` currently contains `Lattice Invoices: 2`, `woocommerce-eu-vat-invoices: 4`, and `/docs/woocommerce-eu-vat-invoice-setup: 4`.

---

### Task 1: Strengthen homepage catalog guard before fixing source

**Objective:** Make the homepage guard fail for the actual lower-case invoice CTA and the added invoice feature panel.

**Files:**
- Modify: `scripts/check-homepage-catalog-cta.mjs`

**Step 1: Replace the disallowed term list**

Change the current `disallowedHomepageTerms` array to:

```js
const disallowedHomepageTerms = [
  'EU Invoice Workflow',
  'View EU invoice workflow',
  'Lattice Invoices',
  'VAT/BTW invoices',
  'href="/woocommerce-eu-vat-invoices"',
  'href="/docs/woocommerce-eu-vat-invoice-setup"',
];
```

Keep the existing required official CTA terms:

```js
const requiredOfficialCtaTerms = [
  'href="/product/lattice-seo"',
  'View Lattice SEO',
];
```

**Step 2: Run the focused guard to verify failure**

Run:

```bash
node scripts/check-homepage-catalog-cta.mjs
```

Expected: FAIL with disallowed terms including `View EU invoice workflow`, `Lattice Invoices`, `VAT/BTW invoices`, `href="/woocommerce-eu-vat-invoices"`, and `href="/docs/woocommerce-eu-vat-invoice-setup"`.

**Step 3: Commit?**

Do not commit yet. This task intentionally leaves a failing guard for Tasks 2-4.

---

### Task 2: Restore global header nav to an official product

**Objective:** Remove invoice-funnel promotion from the global navigation.

**Files:**
- Modify: `src/components/Header.tsx`

**Step 1: Replace the invoice nav link**

Replace:

```tsx
<Link
  href="/woocommerce-eu-vat-invoices"
  className="text-gray-700 hover:text-blue-600 font-medium transition"
>
  Invoices
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

**Step 2: Run the shop catalog guard**

Run:

```bash
node scripts/check-shop-catalog-copy.mjs
```

Expected after only this task: still FAIL, because `src/app/shop/page.tsx` still contains invoice promo terms. This confirms the header part is fixed but shop remains.

---

### Task 3: Restore shop promo to the official Lattice SEO card

**Objective:** Make `/shop/` promote only official catalog products again.

**Files:**
- Modify: `src/app/shop/page.tsx`

**Step 1: Replace the shop promo card copy and links**

In the promo `<section>`, replace the invoice-focused block with the previous official-product copy:

```tsx
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
```

Replace the checklist header and list with:

```tsx
<p className="text-sm uppercase tracking-widest text-slate-500 mb-3">Included SEO foundations</p>
<ul className="space-y-3 text-sm text-slate-700">
  <li className="flex gap-2"><span className="text-green-600 font-bold">✓</span><span>Generate XML sitemaps for pages, posts, and products</span></li>
  <li className="flex gap-2"><span className="text-green-600 font-bold">✓</span><span>Add Schema.org structured data and breadcrumb signals</span></li>
  <li className="flex gap-2"><span className="text-green-600 font-bold">✓</span><span>Control Open Graph and Twitter Card previews</span></li>
  <li className="flex gap-2"><span className="text-green-600 font-bold">✓</span><span>Improve WooCommerce product metadata without SaaS pricing</span></li>
</ul>
```

**Step 2: Run shop guard**

Run:

```bash
node scripts/check-shop-catalog-copy.mjs
```

Expected: `PASS: shop catalog copy only promotes official catalog products`.

---

### Task 4: Restore homepage hero and feature panel to official catalog copy

**Objective:** Remove invoice-funnel promotion from the homepage while keeping a strong official-product CTA.

**Files:**
- Modify: `src/app/page.tsx`

**Step 1: Replace the hero primary CTA**

Replace the hero primary link with:

```tsx
<Link
  href="/product/lattice-seo"
  className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition inline-block"
>
  View Lattice SEO
</Link>
```

**Step 2: Replace the invoice feature panel with an official Lattice SEO panel**

Replace the full section beginning with:

```tsx
<section className="mb-12 rounded-2xl border border-green-100 bg-green-50 p-6 md:p-8">
```

and ending at its closing `</section>` with:

```tsx
<section className="mb-12 rounded-2xl border border-green-100 bg-green-50 p-6 md:p-8">
  <div className="grid grid-cols-1 lg:grid-cols-[1.25fr_0.75fr] gap-6 items-center">
    <div>
      <p className="uppercase tracking-[0.2em] text-xs text-green-700 font-semibold mb-3">Newest official plugin</p>
      <h2 className="text-3xl font-bold mb-3">Lattice SEO: technical SEO for WooCommerce stores.</h2>
      <p className="text-slate-700 leading-relaxed mb-5">
        Add XML sitemaps, Schema.org structured data, social previews, and WooCommerce metadata foundations without another monthly SaaS subscription.
      </p>
      <div className="flex flex-col sm:flex-row gap-3">
        <Link
          href="/product/lattice-seo"
          className="bg-green-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-green-700 transition text-center"
        >
          View Lattice SEO
        </Link>
        <Link
          href="/shop"
          className="border border-green-200 bg-white px-6 py-3 rounded-xl font-semibold hover:border-green-500 transition text-center"
        >
          Compare all 7 plugins
        </Link>
      </div>
    </div>
    <div className="rounded-2xl bg-white p-5 border border-green-100">
      <p className="font-semibold text-slate-900 mb-3">Best fit if you need:</p>
      <ul className="space-y-3 text-sm text-slate-700">
        <li className="flex gap-2"><span className="text-green-600 font-bold">✓</span><span>XML sitemap coverage for pages, posts, and products</span></li>
        <li className="flex gap-2"><span className="text-green-600 font-bold">✓</span><span>Schema.org structured data for richer search results</span></li>
        <li className="flex gap-2"><span className="text-green-600 font-bold">✓</span><span>Open Graph and Twitter Card preview control</span></li>
        <li className="flex gap-2"><span className="text-green-600 font-bold">✓</span><span>WooCommerce product metadata improvements</span></li>
      </ul>
    </div>
  </div>
</section>
```

**Step 3: Run homepage guard**

Run:

```bash
node scripts/check-homepage-catalog-cta.mjs
```

Expected: `PASS: homepage hero CTA stays within the official catalog`.

---

### Task 5: Run full local frontend verification

**Objective:** Prove the catalog-surface fix is locally shippable.

**Files:**
- No additional source changes expected.

**Step 1: Run health checks**

Run:

```bash
npm run test:health
```

Expected:

```text
Prod health coverage check passed
PASS: shop catalog copy only promotes official catalog products
PASS: homepage hero CTA stays within the official catalog
{
  "ok": true,
  "invoiceLanding": "/woocommerce-eu-vat-invoices",
  ...
}
```

**Step 2: Run SEO checks**

Run:

```bash
npm run test:seo
```

Expected:

```text
Product SEO smoke check passed
PASS: sitemap route WordPress origin fallback is production-safe
```

**Step 3: Run production build**

Run:

```bash
npm run build
```

Expected: build completes successfully and lists `/`, `/shop`, `/product/[slug]`, `/sitemap.xml`, and existing static routes without errors.

---

### Task 6: Commit and push frontend fix

**Objective:** Persist the guarded catalog-surface restoration.

**Files:**
- `scripts/check-homepage-catalog-cta.mjs`
- `src/components/Header.tsx`
- `src/app/shop/page.tsx`
- `src/app/page.tsx`

**Step 1: Review diff**

Run:

```bash
git diff -- scripts/check-homepage-catalog-cta.mjs src/components/Header.tsx src/app/shop/page.tsx src/app/page.tsx
```

Expected: only official-catalog CTA/copy restoration and homepage guard hardening.

**Step 2: Commit and push**

Run:

```bash
git add scripts/check-homepage-catalog-cta.mjs src/components/Header.tsx src/app/shop/page.tsx src/app/page.tsx docs/issues/2026-06-26-invoice-funnel-regressed-catalog-guards.md docs/plans/2026-06-26-restore-official-catalog-surfaces.md
git commit -m "fix: restore official catalog surfaces"
git push origin main
```

Expected: commit and push succeed.

---

### Task 7: Deploy and verify production surfaces

**Objective:** Prove production homepage and shop are back inside the 7-product catalog.

**Files:**
- No source changes expected.

**Step 1: Deploy**

Run:

```bash
ssh root@65.108.128.89 "ceo-deploy lattice"
```

Expected: deploy pulls the new frontend commit, rebuilds `lattice-frontend:latest`, recreates `lattice-frontend`, and reports it running.

**Step 2: Verify production HTML counts**

Run:

```bash
python3 - <<'PY'
import urllib.request
bad = ['Lattice Invoices','View EU invoice workflow','woocommerce-eu-vat-invoices','/docs/woocommerce-eu-vat-invoice-setup']
official = ['Lattice Commerce Suite','Lattice Core','Lattice CRM','Lattice Migrate','Lattice Stripe Payments','Lattice Subscribify','Lattice SEO']
for path in ['/', '/shop/']:
    html = urllib.request.urlopen(urllib.request.Request('https://latticeplugins.com' + path, headers={'User-Agent':'Mozilla/5.0'}), timeout=20).read().decode('utf-8','ignore')
    bad_counts = {term: html.count(term) for term in bad if html.count(term)}
    missing = [term for term in official if term not in html]
    print(path, 'BAD=', bad_counts, 'MISSING=', missing)
    if bad_counts or missing:
        raise SystemExit(1)
PY
```

Expected:

```text
/ BAD= {} MISSING= []
/shop/ BAD= {} MISSING= []
```

**Step 3: Run VPS infrastructure health**

From `~/Developer/latticeplugins-prod`, run:

```bash
scripts/vps-infra-health.sh
```

Expected: `=== Summary: issues=0 ===` and exactly 7 WooCommerce products.

**Step 4: Mandatory visual inspection and cleanup**

Use the Lattice visual inspection workflow:

1. Navigate to `https://latticeplugins.com/`.
2. Screenshot/inspect visually.
3. Confirm styled header, footer, product grid, and official Lattice SEO CTA instead of invoice-funnel promotion.
4. Kill Chrome-for-Testing processes and verify the process count is within the documented `0-2` threshold.

---

## Definition of Done

- Local `npm run test:health`, `npm run test:seo`, and `npm run build` pass.
- Production `/` and `/shop/` show all 7 official products and zero invoice-funnel promotion terms listed above.
- Invoice landing/docs pages still exist but are not promoted from homepage/shop/header official catalog surfaces.
- VPS infrastructure smoke remains green with `issues=0`.
