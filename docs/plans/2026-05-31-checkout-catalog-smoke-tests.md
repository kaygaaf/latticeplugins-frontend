# Checkout + Catalog Smoke Tests Implementation Plan

> **For Hermes:** Use subagent-driven-development skill to implement this plan task-by-task.

**Goal:** Add a small Playwright smoke-test suite that prevents regressions in the highest-value live paths: homepage, 7-product shop catalog, product detail pages, add-to-cart, and checkout routing.

**Architecture:** Keep this as a frontend-repo test harness that can run against production by default (`https://latticeplugins.com`) or any preview URL via `BASE_URL`. Tests must not require Stripe live keys or place real orders; they only verify catalog visibility and that WooCommerce routes render the expected cart/checkout pages after adding a low-risk paid product to the cart.

**Tech Stack:** Next.js 14 frontend, Playwright test runner, live WooCommerce/WordPress pages through Traefik.

---

## Verified context from 2026-05-31 PM run

- `https://latticeplugins.com/` returned HTTP 200 and contained Next.js markup.
- `https://latticeplugins.com/shop/` redirects with HTTP 308 to `/shop`, then returns HTTP 200.
- `/shop` HTML contained all 7 official products: Lattice Commerce Suite, Lattice Core, Lattice CRM, Lattice Migrate, Lattice Stripe Payments, Lattice Subscribify, Lattice SEO.
- Production WooCommerce product IDs from the WordPress container:
  - `14` — Lattice Commerce Suite — €49 — `lattice-commerce-suite`
  - `15` — Lattice Core — €0 — `lattice-core`
  - `16` — Lattice CRM — €49 — `lattice-crm`
  - `17` — Lattice Migrate — €49 — `lattice-migrate`
  - `18` — Lattice Stripe Payments — €0 — `lattice-stripe-payments`
  - `19` — Lattice Subscribify — €49 — `lattice-subscribify`
  - `20` — Lattice SEO — €49 — `lattice-seo`
- Empty `/checkout/` redirects to `/cart/`, which is normal WooCommerce behavior.
- With a valid cart item (`/cart/?add-to-cart=14`), `/checkout/` returned HTTP 200 at `/checkout/` and the HTML contained `data-page="checkout"`, `Billing details`, and `Place order`.
- Public unauthenticated WooCommerce REST call to `/wp-json/wc/v3/products?per_page=20` returned HTTP 401; do not build tests that depend on unauthenticated WC REST.

---

### Task 1: Install Playwright test dependency and add scripts

**Objective:** Add the Playwright test runner without changing production runtime dependencies.

**Files:**
- Modify: `package.json`
- Create: `playwright.config.ts`

**Step 1: Install dependency**

Run:
```bash
npm install --save-dev @playwright/test
```

Expected:
- `package.json` gains `@playwright/test` under `devDependencies`.
- `package-lock.json` is updated.

**Step 2: Add npm scripts**

Modify `package.json` scripts to include:
```json
{
  "test:e2e": "playwright test",
  "test:e2e:headed": "playwright test --headed"
}
```

Keep the existing `dev`, `build`, `start`, and `lint` scripts.

**Step 3: Create Playwright config**

Create `playwright.config.ts`:
```ts
import { defineConfig, devices } from "@playwright/test";

const baseURL = process.env.BASE_URL || "https://latticeplugins.com";

export default defineConfig({
  testDir: "./tests/e2e",
  timeout: 30_000,
  expect: {
    timeout: 10_000,
  },
  fullyParallel: false,
  retries: process.env.CI ? 2 : 0,
  reporter: [["list"]],
  use: {
    baseURL,
    trace: "retain-on-failure",
    screenshot: "only-on-failure",
  },
  projects: [
    {
      name: "chromium",
      use: { ...devices["Desktop Chrome"] },
    },
  ],
});
```

**Step 4: Install browser binary locally**

Run:
```bash
npx playwright install chromium
```

Expected: Chromium browser installation completes successfully.

**Step 5: Commit**

```bash
git add package.json package-lock.json playwright.config.ts
git commit -m "test: add playwright e2e harness"
```

---

### Task 2: Add catalog smoke test for exactly 7 official products

**Objective:** Verify the public shop page renders exactly the approved catalog and does not regress to stale/duplicate products.

**Files:**
- Create: `tests/e2e/catalog.spec.ts`

**Step 1: Write the test**

Create `tests/e2e/catalog.spec.ts`:
```ts
import { expect, test } from "@playwright/test";

const OFFICIAL_PRODUCTS = [
  "Lattice Commerce Suite",
  "Lattice Core",
  "Lattice CRM",
  "Lattice Migrate",
  "Lattice Stripe Payments",
  "Lattice Subscribify",
  "Lattice SEO",
];

const REMOVED_PRODUCTS = [
  "Lattice Abandoned Cart",
  "Lattice Analytics",
  "Lattice Auto Updater",
  "Lattice Checkout Upsell",
  "Lattice Coupons",
  "Lattice Direct Checkout",
  "Lattice License Manager",
  "Lattice Product Comparison",
  "Lattice Social Proof",
  "Lattice Trust Badges",
];

test("shop page shows the 7-product Lattice catalog", async ({ page }) => {
  await page.goto("/shop/");
  await expect(page).toHaveURL(/\/shop\/?$/);

  for (const product of OFFICIAL_PRODUCTS) {
    await expect(page.getByRole("heading", { name: product })).toBeVisible();
  }

  const productCards = page.locator("article, .rounded-2xl, .rounded-xl").filter({ hasText: /Lattice / });
  await expect(productCards).toHaveCount(7);

  for (const product of REMOVED_PRODUCTS) {
    await expect(page.getByText(product, { exact: true })).toHaveCount(0);
  }
});
```

**Step 2: Run the test**

Run:
```bash
npm run test:e2e -- tests/e2e/catalog.spec.ts
```

Expected: PASS.

If the product-card locator over-counts because layout wrappers also contain `Lattice`, replace it with the stable selector used by the current card component, or add a dedicated `data-testid="product-card"` to the product card markup and assert that count instead.

**Step 3: Commit**

```bash
git add tests/e2e/catalog.spec.ts
git commit -m "test: cover shop catalog smoke path"
```

---

### Task 3: Add product detail smoke test for official product slugs

**Objective:** Verify each official product detail page renders the current richer product page, not a minimal title-only page.

**Files:**
- Modify: `tests/e2e/catalog.spec.ts`

**Step 1: Extend test data**

Add slugs to the official catalog data:
```ts
const OFFICIAL_PRODUCTS = [
  { name: "Lattice Commerce Suite", slug: "lattice-commerce-suite" },
  { name: "Lattice Core", slug: "lattice-core" },
  { name: "Lattice CRM", slug: "lattice-crm" },
  { name: "Lattice Migrate", slug: "lattice-migrate" },
  { name: "Lattice Stripe Payments", slug: "lattice-stripe-payments" },
  { name: "Lattice Subscribify", slug: "lattice-subscribify" },
  { name: "Lattice SEO", slug: "lattice-seo" },
];
```

Update the existing loop accordingly.

**Step 2: Add product detail test**

Append:
```ts
for (const product of OFFICIAL_PRODUCTS) {
  test(`product page renders detail sections for ${product.name}`, async ({ page }) => {
    await page.goto(`/product/${product.slug}/`);

    await expect(page.getByRole("heading", { name: product.name })).toBeVisible();
    await expect(page.getByRole("heading", { name: "What it does" })).toBeVisible();
    await expect(page.getByRole("heading", { name: "Key features" })).toBeVisible();
    await expect(page.getByRole("link", { name: /buy now|download free/i })).toBeVisible();
  });
}
```

**Step 3: Run the test**

Run:
```bash
npm run test:e2e -- tests/e2e/catalog.spec.ts
```

Expected: PASS.

**Step 4: Commit**

```bash
git add tests/e2e/catalog.spec.ts
git commit -m "test: cover product detail smoke paths"
```

---

### Task 4: Add cart-to-checkout routing smoke test

**Objective:** Lock in the resolved WooCommerce checkout routing behavior without requiring a completed payment.

**Files:**
- Create: `tests/e2e/checkout.spec.ts`

**Step 1: Write the test**

Create `tests/e2e/checkout.spec.ts`:
```ts
import { expect, test } from "@playwright/test";

test("paid product can reach checkout form after add-to-cart", async ({ page }) => {
  await page.goto("/cart/?add-to-cart=14");

  await expect(page.getByText("Lattice Commerce Suite")).toBeVisible();
  await expect(page.locator('[data-page="cart"]')).toBeVisible();

  await page.goto("/checkout/");

  await expect(page).toHaveURL(/\/checkout\/?$/);
  await expect(page.locator('[data-page="checkout"]')).toBeVisible();
  await expect(page.getByText("Billing details")).toBeVisible();
  await expect(page.getByText("Place order")).toBeVisible();
  await expect(page.getByText("Your cart is currently empty")).toHaveCount(0);
});
```

**Step 2: Run the test**

Run:
```bash
npm run test:e2e -- tests/e2e/checkout.spec.ts
```

Expected: PASS.

**Step 3: Commit**

```bash
git add tests/e2e/checkout.spec.ts
git commit -m "test: cover cart to checkout routing"
```

---

### Task 5: Document how PM/CEO runs the smoke suite

**Objective:** Make the smoke suite discoverable for future autonomous runs.

**Files:**
- Create or modify: `README.md`

**Step 1: Add a testing section**

Add:
```md
## Smoke tests

Run the production smoke suite before and after frontend deploys:

```bash
npm run test:e2e
```

Run against a preview/local deployment:

```bash
BASE_URL=http://localhost:3000 npm run test:e2e
```

Coverage:
- Homepage/shop availability through Next.js
- Exactly 7 official Lattice products on `/shop`
- Official product detail pages render rich sections
- WooCommerce `/cart/?add-to-cart=14` can reach `/checkout/` with the checkout form visible

The suite intentionally does **not** complete Stripe payment because production still requires human-provided live Stripe keys.
```

**Step 2: Run all checks**

Run:
```bash
npm run lint
npm run build
npm run test:e2e
```

Expected:
- Lint passes or only shows pre-existing non-blocking warnings.
- Build completes successfully.
- E2E suite passes.

**Step 3: Commit**

```bash
git add README.md
git commit -m "docs: document smoke test workflow"
```

---

## Acceptance criteria

- `npm run test:e2e` exists and runs Playwright tests.
- Tests default to `https://latticeplugins.com` and support `BASE_URL` override.
- Catalog test confirms the 7 official products and rejects removed/merged plugin names.
- Product detail test confirms all 7 official slugs render heading, `What it does`, `Key features`, and CTA.
- Checkout test confirms `/cart/?add-to-cart=14` reaches cart and `/checkout/` reaches the checkout form with `data-page="checkout"`.
- No test requires public WooCommerce REST credentials, Stripe live keys, or placing a paid order.
- `npm run lint`, `npm run build`, and `npm run test:e2e` have been run before handoff.
