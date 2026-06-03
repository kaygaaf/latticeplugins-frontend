# Catalog Smoke Test Implementation Plan

> **For Hermes:** Use subagent-driven-development skill to implement this plan task-by-task.

**Goal:** Add the first real Playwright smoke spec that locks the public shop to exactly the 7 official Lattice products and rejects removed/merged product names.

**Architecture:** This is a frontend-repo test-only change. Use the already-installed Playwright harness and test production by default via `playwright.config.ts` (`https://latticeplugins.com`, with `BASE_URL` override support). Avoid WooCommerce REST credentials and avoid cart/checkout/payment actions in this task.

**Tech Stack:** Next.js 14, npm, `@playwright/test`, Chromium.

---

## Verified context from PM run — 2026-06-03

- Vault docs were read from `/Users/minion/Library/Mobile Documents/iCloud~md~obsidian/Documents/Hermes/01 - Projects/Lattice Plugins/`.
- Frontend repo is clean on `main` and aligned with `origin/main`; current head is `0ba7a32d added invoice numbering guide`.
- Playwright harness already exists:
  - `package.json` has `test:e2e` and `test:e2e:headed` scripts.
  - `@playwright/test` is present under `devDependencies`.
  - `playwright.config.ts` uses `testDir: "./tests/e2e"` and defaults `baseURL` to `https://latticeplugins.com`.
- No Playwright spec files currently exist (`*.spec.ts` search returned 0 files), so the next highest-value task is the first catalog spec.
- Live HTML checks with a browser-like User-Agent returned HTTP 200 for:
  - `https://latticeplugins.com/` — all 7 official product names present, removed names absent.
  - `https://latticeplugins.com/shop/` — final URL `https://latticeplugins.com/shop`, all 7 official product names present, removed names absent.
- Current shop markup in `src/app/shop/page.tsx` renders each product as an `h2` containing a link with `href={`/product/${product.slug}`}`. Use that stable structure for the exact product count instead of broad `.rounded-*` selectors.

---

## Single highest-value Developer task

### Task 1: Add catalog smoke spec for the official 7-product shop

**Objective:** Create one Playwright spec that fails if the shop loses an official product, shows a removed/merged product, or renders more/fewer than 7 product detail links.

**Files:**
- Create: `tests/e2e/catalog.spec.ts`

**Step 1: Create the e2e test directory**

Run from `/Users/minion/Developer/latticeplugins-frontend`:

```bash
mkdir -p tests/e2e
```

Expected: `tests/e2e/` exists.

**Step 2: Write the catalog spec**

Create `tests/e2e/catalog.spec.ts` with this complete content:

```ts
import { expect, test } from "@playwright/test";

const OFFICIAL_PRODUCTS = [
  { name: "Lattice Commerce Suite", slug: "lattice-commerce-suite" },
  { name: "Lattice Core", slug: "lattice-core" },
  { name: "Lattice CRM", slug: "lattice-crm" },
  { name: "Lattice Migrate", slug: "lattice-migrate" },
  { name: "Lattice Stripe Payments", slug: "lattice-stripe-payments" },
  { name: "Lattice Subscribify", slug: "lattice-subscribify" },
  { name: "Lattice SEO", slug: "lattice-seo" },
];

const REMOVED_OR_MERGED_PRODUCTS = [
  "Lattice Abandoned Cart",
  "Lattice Analytics",
  "Lattice Auto Updater",
  "Lattice Checkout Upsell",
  "Lattice Coupons",
  "Lattice Direct Checkout",
  "Lattice License Manager",
  "Lattice License Server",
  "Lattice Product Comparison",
  "Lattice Social Proof",
  "Lattice Trust Badges",
];

test("shop page shows exactly the official 7-product Lattice catalog", async ({ page }) => {
  await page.goto("/shop/");
  await expect(page).toHaveURL(/\/shop\/?$/);
  await expect(page.getByRole("heading", { name: "Shop" })).toBeVisible();

  const productLinks = page.locator('main h2 a[href^="/product/"]');
  await expect(productLinks).toHaveCount(OFFICIAL_PRODUCTS.length);

  for (const product of OFFICIAL_PRODUCTS) {
    await expect(
      page.getByRole("heading", { name: product.name, exact: true }),
      `${product.name} heading should be visible on /shop/`,
    ).toBeVisible();

    await expect(
      page.locator(`main h2 a[href="/product/${product.slug}"]`),
      `${product.name} should link to /product/${product.slug}`,
    ).toHaveText(product.name);
  }

  for (const productName of REMOVED_OR_MERGED_PRODUCTS) {
    await expect(
      page.getByText(productName, { exact: true }),
      `${productName} must not reappear as a shop product`,
    ).toHaveCount(0);
  }
});
```

**Step 3: Run the focused spec**

Run:

```bash
npm run test:e2e -- tests/e2e/catalog.spec.ts
```

Expected: PASS — 1 test passes in Chromium. The test must not require WooCommerce REST credentials, Stripe keys, or cart/session state.

**Step 4: Run the suite list command**

Run:

```bash
npm run test:e2e -- --list
```

Expected: The new catalog test is listed exactly once.

**Step 5: Commit**

```bash
git add tests/e2e/catalog.spec.ts
git commit -m "test: cover shop catalog smoke path"
```

---

## Acceptance criteria

- `tests/e2e/catalog.spec.ts` exists and imports from `@playwright/test`.
- The test defaults to production through existing `playwright.config.ts` and still supports `BASE_URL` overrides.
- It asserts exactly 7 product links using `main h2 a[href^="/product/"]`.
- It asserts all official products by exact name and slug.
- It asserts removed/merged product names remain absent.
- `npm run test:e2e -- tests/e2e/catalog.spec.ts` passes.
- `npm run test:e2e -- --list` lists the catalog test.
- No production app code is modified.
- Commit exists with message `test: cover shop catalog smoke path`.

---

## Next task after this ships

Add a second Playwright spec for `/cart/?add-to-cart=14` → `/checkout/` routing, but keep it separate so any WooCommerce session/cookie flakiness does not block the catalog regression test.
