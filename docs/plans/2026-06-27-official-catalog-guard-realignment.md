# Official Catalog Guard Realignment Implementation Plan

> **For Hermes:** Use subagent-driven-development skill to implement this plan task-by-task.

**Goal:** Make frontend health checks and primary public surfaces promote only the 7 official Lattice catalog products, while leaving the invoice landing page available as direct content.

**Architecture:** Use test-first static guard realignment: first make the homepage/shop guards fail on the current invoice-promotion source, then patch header/home/footer copy to official catalog CTAs. Keep `scripts/check-invoice-funnel.mjs` scoped to the direct invoice landing page/docs only, not global acquisition surfaces.

**Tech Stack:** Next.js 14 App Router, TypeScript/TSX, Node.js static guard scripts, existing `npm run test:health`, `npm run test:seo`, and `npm run build`.

---

## Verified Context

- Issue/spec: `docs/issues/2026-06-27-invoice-revenue-guards-conflict-with-catalog-source.md`.
- Current local frontend HEAD at PM verification: `f7896bf8 focus invoice funnel`.
- Current `npm run test:health` passes but explicitly reports:
  ```text
  PASS: shop catalog stays official while site chrome promotes invoice revenue path
  PASS: homepage pushes the Lattice Invoices revenue path
  ```
- Production `/` is HTTP 200 and contains `Lattice Invoices: 4`, `View EU invoice workflow: 2`, `woocommerce-eu-vat-invoices: 8`, and `/docs/woocommerce-eu-vat-invoice-setup: 4`.
- Production `/shop/` is HTTP 200 and contains `Lattice Invoices: 2`, `woocommerce-eu-vat-invoices: 4`, and `/docs/woocommerce-eu-vat-invoice-setup: 2`.
- Production infra is green: `scripts/vps-infra-health.sh` ended with `=== Summary: issues=0 ===`, exactly 7 products, and active Lattice plugin catalog hygiene clean.
- Backend QA is green: `python3 scripts/lattice_qa_security_smoke.py` passed PHP lint, 8 PHP regression tests, static scan, and ABSPATH guard coverage.

---

### Task 1: Rewrite homepage guard to fail on current invoice promotion

**Objective:** Make the homepage/static chrome guard protect official catalog CTAs instead of requiring invoice promotion.

**Files:**
- Modify: `scripts/check-homepage-catalog-cta.mjs`

**Step 1: Replace invoice-required terms with official CTA requirements**

Replace the current `requiredInvoiceRevenueTerms` and related failure block with:

```js
const requiredOfficialCtaTerms = [
  'href="/product/lattice-seo"',
  'View Lattice SEO',
  'Compare all 7 plugins',
];

const disallowedHomepageTerms = [
  'Sell to EU business buyers without invoice support tickets.',
  'View EU invoice workflow',
  'Request €49 invoice access',
  'Lattice Invoices',
  'VAT/BTW invoice workflow',
  'href="/woocommerce-eu-vat-invoices"',
  'href="/docs/woocommerce-eu-vat-invoice-setup"',
];

const missingOfficialCtaTerms = requiredOfficialCtaTerms.filter((term) => !homeSource.includes(term));
const presentDisallowedTerms = disallowedHomepageTerms.filter((term) => homeSource.includes(term));

if (missingOfficialCtaTerms.length > 0 || presentDisallowedTerms.length > 0) {
  console.error('FAIL: homepage official catalog CTA guard failed');
  if (missingOfficialCtaTerms.length > 0) {
    console.error(`Official catalog CTA terms missing: ${missingOfficialCtaTerms.join(', ')}`);
  }
  if (presentDisallowedTerms.length > 0) {
    console.error(`Disallowed invoice promo terms found: ${presentDisallowedTerms.join(', ')}`);
  }
  process.exit(1);
}

console.log('PASS: homepage and site chrome stay within the official catalog');
```

Keep `homeSource` reading `src/app/page.tsx`, `src/components/Header.tsx`, and `src/components/Footer.tsx` so global chrome regressions are caught.

**Step 2: Run focused guard to verify failure**

Run:

```bash
node scripts/check-homepage-catalog-cta.mjs
```

Expected: FAIL with disallowed invoice promo terms from current homepage/header/footer source.

**Step 3: Commit?**

Do not commit yet. This task intentionally leaves a failing guard for later tasks.

---

### Task 2: Rewrite shop guard so chrome invoice links are not required

**Objective:** Stop `npm run test:health` from requiring invoice links in shared site chrome.

**Files:**
- Modify: `scripts/check-shop-catalog-copy.mjs`

**Step 1: Remove `missingInvoiceChromeTerms` requirement**

Delete:

```js
const siteChromeSource = [
  'src/components/Header.tsx',
  'src/components/Footer.tsx',
].map((path) => readFileSync(path, 'utf8')).join('\n');
```

Delete:

```js
const missingInvoiceChromeTerms = [
  '/woocommerce-eu-vat-invoices',
  '/docs/woocommerce-eu-vat-invoice-setup',
].filter((term) => !siteChromeSource.includes(term));
```

Remove `missingInvoiceChromeTerms.length > 0` from the failure condition and remove the `Invoice revenue chrome links missing` error block.

**Step 2: Expand disallowed shop terms only if needed**

Keep `disallowedShopPromoTerms` pointed at `shopSource`, not chrome, so `/shop/` remains official-catalog-only:

```js
const disallowedShopPromoTerms = [
  'Lattice Invoices',
  'EU invoice offer',
  'VAT/BTW invoices',
  '/woocommerce-eu-vat-invoices',
  '/docs/woocommerce-eu-vat-invoice-setup',
];
```

**Step 3: Run shop guard**

Run:

```bash
node scripts/check-shop-catalog-copy.mjs
```

Expected at this point: likely PASS if `src/app/shop/page.tsx` is already clean. If it fails, the failure should list only actual `/shop/` source issues, not missing invoice chrome links.

---

### Task 3: Restore global header nav to an official product

**Objective:** Remove invoice-funnel promotion from the global header navigation.

**Files:**
- Modify: `src/components/Header.tsx`

**Step 1: Replace invoice nav link**

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

**Step 2: Run homepage guard**

Run:

```bash
node scripts/check-homepage-catalog-cta.mjs
```

Expected after only this task: still FAIL, because homepage/footer invoice promo remains.

---

### Task 4: Restore homepage hero and primary feature panel to official catalog copy

**Objective:** Replace invoice early-access homepage positioning with an official-product CTA.

**Files:**
- Modify: `src/app/page.tsx`

**Step 1: Replace hero eyebrow/title/body with official catalog positioning**

Use concise catalog copy, for example:

```tsx
<p className="uppercase tracking-[0.25em] text-sm text-blue-100 mb-4">WooCommerce plugin suite</p>
<h1 className="text-5xl font-bold mb-4">Launch faster with focused WooCommerce plugins.</h1>
<p className="text-xl mb-8 max-w-3xl mx-auto">
  Lattice Plugins ships practical WooCommerce tools for checkout, CRM, Stripe payments,
  subscriptions, migration, and technical SEO — without another monthly SaaS stack.
</p>
```

**Step 2: Replace the primary CTA pair**

Use:

```tsx
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
```

Remove the invoice early-access mailto CTA from the homepage hero.

**Step 3: Replace the invoice feature panel**

Replace the primary revenue-focus panel with:

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

**Step 4: Run homepage guard**

Run:

```bash
node scripts/check-homepage-catalog-cta.mjs
```

Expected after this task: still FAIL only if footer invoice links remain; otherwise PASS.

---

### Task 5: Remove invoice product links from footer product/navigation chrome

**Objective:** Keep shared footer navigation aligned with the official catalog.

**Files:**
- Modify: `src/components/Footer.tsx`

**Step 1: Replace invoice footer links**

In the product/resources list, replace:

```tsx
<Link href="/woocommerce-eu-vat-invoices" className="hover:text-white transition">
  Lattice Invoices
</Link>
```

with an official product link:

```tsx
<Link href="/product/lattice-seo" className="hover:text-white transition">
  Lattice SEO
</Link>
```

Replace:

```tsx
<Link href="/docs/woocommerce-eu-vat-invoice-setup" className="hover:text-white transition">
  Invoice setup guide
</Link>
```

with a catalog-safe link such as:

```tsx
<Link href="/shop" className="hover:text-white transition">
  Compare all plugins
</Link>
```

If the business wants to retain invoice links, move them to a clearly labeled non-catalog resources section and update `scripts/check-homepage-catalog-cta.mjs` to scan only homepage/header/product-nav sources, not the entire footer. Prefer the simpler removal for this task.

**Step 2: Run focused guards**

Run:

```bash
node scripts/check-homepage-catalog-cta.mjs
node scripts/check-shop-catalog-copy.mjs
```

Expected:

```text
PASS: homepage and site chrome stay within the official catalog
PASS: shop catalog copy only promotes official catalog products
```

---

### Task 6: Keep direct invoice landing-page smoke scoped and green

**Objective:** Ensure invoice direct content can still exist without being required on global catalog surfaces.

**Files:**
- Modify only if necessary: `scripts/check-invoice-funnel.mjs`

**Step 1: Inspect the script output**

Run:

```bash
node scripts/check-invoice-funnel.mjs
```

Expected: PASS JSON with `ok: true`, proving the direct `/woocommerce-eu-vat-invoices` page and docs are still internally coherent.

**Step 2: Patch only if the script depends on homepage/header/footer**

If the script fails because it expects homepage/header/footer invoice promotion, change it to read only the invoice landing/docs source files. Do not re-add invoice requirements to homepage/header/footer guards.

---

### Task 7: Full local verification

**Objective:** Prove the guard realignment and copy changes are locally shippable.

**Files:**
- No additional source changes expected unless checks fail.

**Step 1: Run health checks**

Run:

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

Expected: successful Next.js production build.

---

### Task 8: Commit, push, deploy, and production-verify

**Objective:** Ship the guard/source realignment and prove production catalog surfaces are clean.

**Files:**
- Git changes from prior tasks.

**Step 1: Commit and push**

Run:

```bash
git status --short
git add scripts/check-homepage-catalog-cta.mjs scripts/check-shop-catalog-copy.mjs src/components/Header.tsx src/app/page.tsx src/components/Footer.tsx
git commit -m "guard official catalog surfaces"
git push origin main
```

**Step 2: Deploy**

Run:

```bash
ssh root@65.108.128.89 "ceo-deploy lattice"
```

Expected: deploy pulls the new frontend commit, rebuilds/recreates `lattice-frontend`, and reports it running.

**Step 3: Verify production text state**

Run:

```bash
python3 - <<'PY'
import urllib.request
terms=['Lattice Invoices','View EU invoice workflow','woocommerce-eu-vat-invoices','/docs/woocommerce-eu-vat-invoice-setup','Lattice Commerce Suite','Lattice Core','Lattice CRM','Lattice Migrate','Lattice Stripe Payments','Lattice Subscribify','Lattice SEO']
for url in ['https://latticeplugins.com/','https://latticeplugins.com/shop/']:
    req=urllib.request.Request(url, headers={'User-Agent':'Mozilla/5.0 Lattice Catalog Smoke'})
    with urllib.request.urlopen(req, timeout=20) as r:
        data=r.read().decode('utf-8','ignore')
        print(url, 'status', r.status, 'bytes', len(data))
    for term in terms:
        print(f'{term}: {data.count(term)}')
    print('---')
PY
```

Expected: both pages return status `200`; all 7 official product names appear; primary-surface invoice funnel terms are zero on `/` and `/shop/` unless intentionally isolated outside scanned catalog/header/footer sources with a documented reason.

**Step 4: Run infrastructure health**

Run from `~/Developer/latticeplugins-prod`:

```bash
scripts/vps-infra-health.sh
```

Expected: `=== Summary: issues=0 ===`.

**Step 5: Mandatory visual inspection and Chrome cleanup**

Follow the Lattice deploy workflow: inspect `https://latticeplugins.com` visually, confirm styled header/content/product surfaces, then kill Chrome-for-Testing processes and verify the remaining count is within `0-2`.

---

## Rollback guidance

If deploy breaks styling, routing, or product rendering:

1. Revert the frontend commit locally: `git revert HEAD`.
2. Push the revert.
3. Deploy again with `ssh root@65.108.128.89 "ceo-deploy lattice"`.
4. Re-run production text probes and `scripts/vps-infra-health.sh`.

## Non-goals

- Do not delete invoice landing/docs pages.
- Do not create or activate a `lattice-invoices` plugin/product.
- Do not change WooCommerce product data, checkout, Stripe settings, backend plugins, or Traefik routing.
