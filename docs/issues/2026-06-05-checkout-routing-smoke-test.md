# Checkout Routing Smoke Test Implementation Plan

> **For Hermes:** Use subagent-driven-development skill to implement this plan task-by-task.

**Goal:** Add one production-safe Playwright smoke spec that protects the revenue path from the recurring WooCommerce `/cart/` ↔ `/checkout/` routing/session regressions.

**Architecture:** This is a frontend-repo test-only change. The existing Playwright harness already defaults to production through `playwright.config.ts` (`BASE_URL || https://latticeplugins.com`). Add one spec under `tests/e2e/` that uses a real browser session, adds a single paid product via WooCommerce's public `?add-to-cart=14` URL, and verifies the classic WooCommerce checkout page renders. Do not place orders, fill customer data, touch Stripe settings, or modify production app code.

**Tech Stack:** Next.js 14, npm, `@playwright/test`, Chromium, WooCommerce classic cart/checkout pages.

---

## Verified context from PM run — 2026-06-05

- Vault docs read before planning:
  - `/Users/minion/Library/Mobile Documents/iCloud~md~obsidian/Documents/Hermes/01 - Projects/Lattice Plugins/README.md`
  - `/Users/minion/Library/Mobile Documents/iCloud~md~obsidian/Documents/Hermes/01 - Projects/Lattice Plugins/Issues and Blockers.md`
  - `/Users/minion/Library/Mobile Documents/iCloud~md~obsidian/Documents/Hermes/01 - Projects/Lattice Plugins/Roadmap.md`
  - `/Users/minion/Library/Mobile Documents/iCloud~md~obsidian/Documents/Hermes/01 - Projects/Lattice Plugins/Decisions.md`
  - `/Users/minion/Library/Mobile Documents/iCloud~md~obsidian/Documents/Hermes/01 - Projects/Lattice Plugins/Reminders.md`
- Frontend repo verified:
  - `package.json` has `test:e2e` and `test:e2e:headed` scripts using `playwright test --pass-with-no-tests`.
  - `playwright.config.ts` has `testDir: "./tests/e2e"`, default `baseURL = "https://latticeplugins.com"`, Chromium-only project, `fullyParallel: false`.
  - Existing catalog spec: `tests/e2e/catalog.spec.ts`.
  - `npm run test:e2e -- --list` lists exactly one test: `catalog.spec.ts` / `shop page shows exactly the official 7-product Lattice catalog`.
  - `npm run test:e2e -- tests/e2e/catalog.spec.ts` passed: `1 passed (2.3s)`.
- Live catalog contract verified:
  - `https://latticeplugins.com/shop/` returned `SHOP 200 https://latticeplugins.com/shop`.
  - The shop HTML contains all 7 official product names and no checked removed/merged product names.
  - WooCommerce Store API `https://latticeplugins.com/wp-json/wc/store/v1/products?per_page=100` returned HTTP 200 JSON with exactly 7 products:
    - ID 20 — Lattice SEO — `lattice-seo` — €49.00
    - ID 19 — Lattice Subscribify — `lattice-subscribify` — €49.00
    - ID 18 — Lattice Stripe Payments — `lattice-stripe-payments` — free
    - ID 17 — Lattice Migrate — `lattice-migrate` — €49.00
    - ID 16 — Lattice CRM — `lattice-crm` — €49.00
    - ID 15 — Lattice Core — `lattice-core` — free
    - ID 14 — Lattice Commerce Suite — `lattice-commerce-suite` — €49.00
- Live checkout routing verified with a cookie jar and browser-like User-Agent:
  - `GET https://latticeplugins.com/cart/?add-to-cart=14` returned `ADD_CART 200 https://latticeplugins.com/cart/?add-to-cart=14`.
  - Cart HTML contained `data-page="cart"` and `Lattice Commerce Suite`; it did not contain `Your cart is currently empty`.
  - Reusing the same cookies, `GET https://latticeplugins.com/checkout/` returned `CHECKOUT 200 https://latticeplugins.com/checkout/`.
  - Checkout HTML contained `data-page="checkout"`, `Billing details`, `Place order`, `Manual invoice`, `bank transfer`, and `Lattice Commerce Suite`; it did not contain `Your cart is currently empty`.

---

## Single highest-value Developer task

### Task 1: Add checkout routing smoke spec

**Objective:** Create one Playwright spec that fails if adding a paid product no longer creates a cart session or if `/checkout/` serves cart/empty-cart content instead of the classic checkout form.

**Files:**
- Create: `tests/e2e/checkout-routing.spec.ts`
- Do not modify: `src/**`, `.env*`, WooCommerce settings, cart/checkout implementation, Stripe code, or production data.

**Step 1: Create the e2e test file**

Run from `/Users/minion/Developer/latticeplugins-frontend`:

```bash
touch tests/e2e/checkout-routing.spec.ts
```

Expected: `tests/e2e/checkout-routing.spec.ts` exists.

**Step 2: Write the spec**

Replace `tests/e2e/checkout-routing.spec.ts` with this exact content:

```ts
import { expect, test } from "@playwright/test";

const PAID_PRODUCT = {
  id: 14,
  name: "Lattice Commerce Suite",
};

test("cart add-to-cart session reaches the classic WooCommerce checkout page", async ({ page }) => {
  await page.goto(`/cart/?add-to-cart=${PAID_PRODUCT.id}`, {
    waitUntil: "domcontentloaded",
  });

  await expect(page).toHaveURL(/\/cart\/?(?:\?.*)?$/);
  await expect(page.locator('body[data-page="cart"]')).toHaveCount(1);
  await expect(page.getByText(PAID_PRODUCT.name, { exact: true })).toBeVisible();
  await expect(page.getByText("Your cart is currently empty", { exact: true })).toHaveCount(0);

  await page.goto("/checkout/", { waitUntil: "domcontentloaded" });

  await expect(page).toHaveURL(/\/checkout\/?$/);
  await expect(page.locator('body[data-page="checkout"]')).toHaveCount(1);
  await expect(page.getByRole("heading", { name: "Checkout" })).toBeVisible();
  await expect(page.getByText("Billing details", { exact: true })).toBeVisible();
  await expect(page.getByText(PAID_PRODUCT.name, { exact: true })).toBeVisible();
  await expect(page.getByRole("button", { name: "Place order" })).toBeVisible();
  await expect(page.getByText("Your cart is currently empty", { exact: true })).toHaveCount(0);
});
```

**Step 3: Run the focused spec**

Run:

```bash
npm run test:e2e -- tests/e2e/checkout-routing.spec.ts
```

Expected: PASS — one Chromium test passes. This test must not fill billing fields, click `Place order`, create an order, call Stripe, or require WooCommerce REST credentials.

If this fails because a previous browser context/session has stale cart state, rerun once after the test naturally starts a fresh Playwright context. Do not add global cart-emptying logic unless the failure is reproducible.

**Step 4: Run the full e2e suite**

Run:

```bash
npm run test:e2e
```

Expected: PASS — both the existing catalog spec and the new checkout-routing spec pass.

**Step 5: Prove the suite is no longer a single-test smoke suite**

Run:

```bash
npm run test:e2e -- --list
```

Expected: output includes both:
- `shop page shows exactly the official 7-product Lattice catalog`
- `cart add-to-cart session reaches the classic WooCommerce checkout page`

Expected total: `2 tests in 2 files`.

**Step 6: Commit**

```bash
git add tests/e2e/checkout-routing.spec.ts
git commit -m "test: cover checkout routing smoke path"
```

---

## Acceptance criteria

- `tests/e2e/checkout-routing.spec.ts` exists and imports from `@playwright/test`.
- The spec uses the existing Playwright `baseURL`; it does not hard-code `https://latticeplugins.com` inside the test body.
- The spec adds product ID `14` (`Lattice Commerce Suite`) via `/cart/?add-to-cart=14`.
- The spec verifies cart routing with `body[data-page="cart"]`, visible `Lattice Commerce Suite`, and absence of `Your cart is currently empty`.
- The spec then navigates with the same browser context to `/checkout/`.
- The spec verifies checkout routing with `body[data-page="checkout"]`, `Checkout`, `Billing details`, visible `Lattice Commerce Suite`, visible `Place order`, and absence of `Your cart is currently empty`.
- The spec does not fill customer fields, click `Place order`, create an order, or test Stripe/payment iframe behavior.
- `npm run test:e2e -- tests/e2e/checkout-routing.spec.ts` passes.
- `npm run test:e2e` passes with both specs.
- `npm run test:e2e -- --list` reports 2 tests in 2 files.
- No production app code is modified.
- Commit exists with message `test: cover checkout routing smoke path`.

---

## Next task after this ships

Add a separate checkout-payment-method smoke spec that stops before order creation and asserts the currently enabled manual invoice / bank transfer method is visible while Stripe remains disabled until live keys are entered. Keep it separate from routing so a payment-method text change cannot mask route/session regressions.
