# Catalog Smoke Test Still Open Implementation Plan

> **For Hermes:** Use subagent-driven-development skill to implement this plan task-by-task.

**Goal:** Ship the first Playwright smoke spec so the 7-product catalog contract is enforced instead of silently passing with zero tests.

**Architecture:** This is a frontend-repo test-only change. The Playwright harness already exists and currently defaults to production (`https://latticeplugins.com`) via `playwright.config.ts`. Add one focused spec under `tests/e2e/` that checks public `/shop/` markup only; do not touch cart, checkout, Stripe, WooCommerce REST credentials, or production app code in this task.

**Tech Stack:** Next.js 14, npm, `@playwright/test`, Chromium.

---

## Verified context from PM run — 2026-06-04 05:11 CEST

- Vault docs read:
  - `/Users/minion/Library/Mobile Documents/iCloud~md~obsidian/Documents/Hermes/01 - Projects/Lattice Plugins/README.md`
  - `/Users/minion/Library/Mobile Documents/iCloud~md~obsidian/Documents/Hermes/01 - Projects/Lattice Plugins/Issues and Blockers.md`
  - `/Users/minion/Library/Mobile Documents/iCloud~md~obsidian/Documents/Hermes/01 - Projects/Lattice Plugins/Roadmap.md`
- Frontend repo state before this planning commit:
  - `HEAD -> main, origin/main`: `6209bf72 added invoice download guide`
  - `git status --short`: no output, working tree clean.
- Playwright harness exists but has no specs:
  - `package.json` has `test:e2e` and `test:e2e:headed` scripts using `playwright test --pass-with-no-tests`.
  - `playwright.config.ts` has `testDir: "./tests/e2e"` and default `baseURL = "https://latticeplugins.com"`.
  - `search_files("*.spec.ts")` returned `total_count: 0`.
  - `npm run test:e2e -- --list` output: `Total: 0 tests in 0 files`.
- Live public checks with `curl -sSL -A 'Mozilla/5.0'` returned:
  - `https://latticeplugins.com/` → `HOME 200 https://latticeplugins.com/`
  - `https://latticeplugins.com/shop/` → `SHOP 200 https://latticeplugins.com/shop`
  - Both pages contain all 7 official product names.
  - Both pages contain none of the removed/merged product names checked.
  - `/shop/` HTML currently contains 14 `href="/product/` occurrences because each product has two product-detail links. The spec must count only the title links: `main h2 a[href^="/product/"]`.
- Existing shop markup verified in `src/app/shop/page.tsx`:
  - Product title links are rendered inside `h2` at lines 42–45.
  - Secondary "Learn More" links are rendered at lines 61–64, so broad `a[href^="/product/"]` counts double.

---

## Single highest-value Developer task

### Task 1: Add the missing catalog Playwright smoke spec

**Objective:** Create one production-safe e2e spec that fails if `/shop/` stops showing exactly the 7 official Lattice products or if removed/merged product names reappear.

**Files:**
- Create: `tests/e2e/catalog.spec.ts`
- Do not modify: `src/**`, `.env*`, WooCommerce settings, cart/checkout code, or Stripe code.

**Step 1: Create the test directory**

Run from `/Users/minion/Developer/latticeplugins-frontend`:

```bash
mkdir -p tests/e2e
```

Expected: `tests/e2e/` exists.

**Step 2: Write the spec**

Create `tests/e2e/catalog.spec.ts` with this exact content:

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

  const titleProductLinks = page.locator('main h2 a[href^="/product/"]');
  await expect(titleProductLinks).toHaveCount(OFFICIAL_PRODUCTS.length);

  for (const product of OFFICIAL_PRODUCTS) {
    await expect(
      page.getByRole("heading", { name: product.name, exact: true }),
      `${product.name} heading should be visible on /shop/`,
    ).toBeVisible();

    await expect(
      page.locator(`main h2 a[href="/product/${product.slug}"]`),
      `${product.name} should link from its title to /product/${product.slug}`,
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

Expected: PASS — one Chromium test passes. If this fails because browser binaries are missing, run `npx playwright install chromium` and rerun the same focused spec.

**Step 4: Prove the suite is no longer empty**

Run:

```bash
npm run test:e2e -- --list
```

Expected: output includes `shop page shows exactly the official 7-product Lattice catalog` and no longer says `Total: 0 tests in 0 files`.

**Step 5: Commit**

```bash
git add tests/e2e/catalog.spec.ts
git commit -m "test: cover shop catalog smoke path"
```

---

## Acceptance criteria

- `tests/e2e/catalog.spec.ts` exists and imports from `@playwright/test`.
- The spec uses the existing Playwright `baseURL`; it does not hard-code `https://latticeplugins.com` inside the test body.
- The spec asserts `/shop/` resolves to `/shop` or `/shop/`.
- The spec counts only `main h2 a[href^="/product/"]` and expects exactly 7 title links.
- The spec checks all official products by exact visible heading text and slug.
- The spec checks removed/merged product names remain absent.
- `npm run test:e2e -- tests/e2e/catalog.spec.ts` passes.
- `npm run test:e2e -- --list` lists the new test and does not report zero tests.
- No production app code is modified.
- Commit exists with message `test: cover shop catalog smoke path`.

---

## Next task after this ships

Add a separate checkout-routing Playwright spec that uses a cookie-preserving browser session to visit `/cart/?add-to-cart=<paid-product-id>` and then `/checkout/`, asserting the page renders `data-page="checkout"`, `Billing details`, and `Place order`. Keep that out of the catalog spec so cart/session flakiness cannot block the catalog regression guard.
