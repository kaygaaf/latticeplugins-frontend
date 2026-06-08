# Product Detail Smoke Test Implementation Plan

> **For Hermes:** Use subagent-driven-development skill to implement this plan task-by-task.

**Goal:** Add one small Playwright smoke test that proves all 7 official product detail pages render the richer conversion sections, not a title-only/minimal page.

**Architecture:** This is a frontend-repo test-only change. Extend the existing `tests/e2e/catalog.spec.ts` because it already owns the official product list and removed-product catalog contract. Keep the test read-only: visit product detail pages and assert visible content/CTA only; do not add to cart, touch checkout, call WooCommerce REST, change product data, or require Stripe keys.

**Tech Stack:** Next.js 14 frontend repo, `@playwright/test`, Chromium, production frontend defaulting through `playwright.config.ts` `baseURL=https://latticeplugins.com`.

---

## Verified context from PM run — 2026-06-08

- Required project context was read before planning:
  - Lattice Plugins skill content loaded in this run.
  - `/Users/minion/Library/Mobile Documents/iCloud~md~obsidian/Documents/Hermes/01 - Projects/Lattice Plugins/README.md`
  - `/Users/minion/Library/Mobile Documents/iCloud~md~obsidian/Documents/Hermes/01 - Projects/Lattice Plugins/Issues and Blockers.md`
  - `/Users/minion/Library/Mobile Documents/iCloud~md~obsidian/Documents/Hermes/01 - Projects/Lattice Plugins/Roadmap.md`
  - `/Users/minion/Library/Mobile Documents/iCloud~md~obsidian/Documents/Hermes/01 - Projects/Lattice Plugins/Decisions.md`
  - `/Users/minion/Library/Mobile Documents/iCloud~md~obsidian/Documents/Hermes/01 - Projects/Lattice Plugins/Reminders.md`
- Frontend repo verification:
  - `git status --short` was clean after removing generated `test-results/` from this PM run.
  - Latest relevant commits include `4d3c8bb1 test checkout payments` and `0bc84c8c docs: plan checkout payment method smoke test`.
  - `package.json` has `test:e2e` and `test:e2e:headed` scripts using `playwright test --pass-with-no-tests`.
  - `playwright.config.ts` defaults `baseURL` to `https://latticeplugins.com`, uses Chromium only, and sets `fullyParallel: false`.
  - Current e2e suite discovery: exactly `3 tests in 3 files` (`catalog.spec.ts`, `checkout-payment-methods.spec.ts`, `checkout-routing.spec.ts`).
  - Current e2e suite result: `3 passed (4.5s)`.
- Live site verification:
  - `https://latticeplugins.com/` returned `200 https://latticeplugins.com/`.
  - `https://latticeplugins.com/shop/` returned `200 https://latticeplugins.com/shop`.
  - Shop HTML contained all 7 official products and none of these removed/merged names: Lattice Abandoned Cart, Lattice Analytics, Lattice Checkout Upsell, Lattice Direct Checkout, Lattice Trust Badges, Lattice Coupons.
  - All 7 product detail URLs returned HTTP 200 and contained `What it does` plus `Key features`:
    - `/product/lattice-commerce-suite`
    - `/product/lattice-core`
    - `/product/lattice-crm`
    - `/product/lattice-migrate`
    - `/product/lattice-stripe-payments`
    - `/product/lattice-subscribify`
    - `/product/lattice-seo`
- Source verification:
  - `src/app/product/[slug]/page.tsx` renders `What it does` at line 251 and `Key features` at line 263.
  - Product detail CTAs are currently `Add to Cart` for paid products and `Download Free` for free products (lines 220 and 323), not `Buy Now`.

---

## Single highest-value Developer task

### Task 1: Extend catalog smoke coverage to product detail pages

**Objective:** Add a read-only Playwright regression guard for all official product detail pages using the existing official product list.

**Files:**
- Modify: `tests/e2e/catalog.spec.ts`
- Do not modify: `src/**`, `.env*`, WooCommerce product data, WooCommerce REST settings, cart/checkout specs, Stripe/payment specs, or production configuration.

**Step 1: Confirm clean working tree**

Run from `/Users/minion/Developer/latticeplugins-frontend`:

```bash
git status --short
```

Expected: no output, or only PM-created docs if they have not yet been committed. Do not mix unrelated changes into the test commit.

**Step 2: Add the product-detail smoke test loop**

Append this code to `tests/e2e/catalog.spec.ts` after the existing shop catalog test:

```ts
for (const product of OFFICIAL_PRODUCTS) {
  test(`product detail page renders conversion sections for ${product.name}`, async ({ page }) => {
    await page.goto(`/product/${product.slug}/`, { waitUntil: "domcontentloaded" });

    await expect(page).toHaveURL(new RegExp(`/product/${product.slug}/?$`));
    await expect(page.getByRole("heading", { name: product.name, exact: true })).toBeVisible();
    await expect(page.getByRole("heading", { name: "What it does", exact: true })).toBeVisible();
    await expect(page.getByRole("heading", { name: "Key features", exact: true })).toBeVisible();
    await expect(page.getByRole("link", { name: /add to cart|download free/i }).first()).toBeVisible();
  });
}
```

Notes:
- Use the existing `OFFICIAL_PRODUCTS` array; do not duplicate the product list.
- Use `/product/${product.slug}/` relative URLs so `BASE_URL` override keeps working.
- Do not click the CTA. This test is read-only.

**Step 3: Run the focused catalog spec**

Run:

```bash
npm run test:e2e -- tests/e2e/catalog.spec.ts
```

Expected: PASS — 8 Chromium tests pass in this file: 1 shop catalog test + 7 product-detail tests.

**Step 4: Run full smoke suite**

Run:

```bash
npm run test:e2e
```

Expected: PASS — 10 Chromium tests pass total: 8 catalog/product tests, 1 checkout payment-method test, and 1 checkout routing test.

**Step 5: Prove discovery includes the new detail tests**

Run:

```bash
npm run test:e2e -- --list
```

Expected output includes:

```text
[chromium] › catalog.spec.ts:27:5 › shop page shows exactly the official 7-product Lattice catalog
[chromium] › catalog.spec.ts:*:* › product detail page renders conversion sections for Lattice Commerce Suite
[chromium] › catalog.spec.ts:*:* › product detail page renders conversion sections for Lattice Core
[chromium] › catalog.spec.ts:*:* › product detail page renders conversion sections for Lattice CRM
[chromium] › catalog.spec.ts:*:* › product detail page renders conversion sections for Lattice Migrate
[chromium] › catalog.spec.ts:*:* › product detail page renders conversion sections for Lattice Stripe Payments
[chromium] › catalog.spec.ts:*:* › product detail page renders conversion sections for Lattice Subscribify
[chromium] › catalog.spec.ts:*:* › product detail page renders conversion sections for Lattice SEO
Total: 10 tests in 3 files
```

Line numbers may differ; the contract is 10 tests in 3 files and one detail test for each official product.

**Step 6: Remove generated Playwright artifacts**

Run:

```bash
rm -rf test-results playwright-report
```

Expected: generated Playwright artifacts are absent from `git status --short`.

**Step 7: Commit only the test change**

Run:

```bash
git add tests/e2e/catalog.spec.ts
git commit -m "test: cover product detail smoke paths"
```

Expected: commit succeeds and includes only `tests/e2e/catalog.spec.ts`.

**Step 8: Verify final repo state**

Run:

```bash
git status --short
git log --oneline -3
```

Expected:
- No `test-results/` or `playwright-report/` entries.
- Latest commit is `test: cover product detail smoke paths`.
- If PM planning docs remain untracked/modified, leave them alone unless explicitly assigned.

---

## Acceptance criteria

- `tests/e2e/catalog.spec.ts` has one product-detail smoke test per official product slug.
- The test reuses the existing `OFFICIAL_PRODUCTS` array.
- Each official detail page asserts:
  - the `/product/<slug>` URL resolves;
  - the exact product heading is visible;
  - `What it does` is visible;
  - `Key features` is visible;
  - an `Add to Cart` or `Download Free` CTA link is visible.
- `npm run test:e2e -- tests/e2e/catalog.spec.ts` passes with 8 catalog-file tests.
- `npm run test:e2e` passes with 10 total tests.
- `npm run test:e2e -- --list` reports 10 tests in 3 files.
- The test does **not** click CTAs, add to cart, touch checkout, create orders, call Stripe, or require WooCommerce REST credentials.
- No production app code, WooCommerce config, Stripe config, or product data is changed.
- Commit exists with message `test: cover product detail smoke paths`.

---

## Next task after this ships

Add stable `data-testid` attributes to shop/product cards and CTAs only if Playwright role/text selectors become flaky. Do not add test IDs preemptively while the current semantic locators are passing.
