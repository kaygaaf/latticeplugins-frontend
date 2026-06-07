# Checkout Payment Method Smoke Test Implementation Plan

> **For Hermes:** Use subagent-driven-development skill to implement this plan task-by-task.

**Goal:** Add one Playwright smoke spec that locks in the current safe checkout payment-method state: manual invoice / bank transfer is visible and Stripe remains absent until live keys are configured.

**Architecture:** This is a frontend-repo test-only change that runs against production by default via the existing Playwright `baseURL`. Reuse the same low-risk cart setup as `checkout-routing.spec.ts`, but keep the assertion scope separate so payment configuration regressions do not mask cart/checkout routing regressions. The spec must not submit checkout, create orders, fill billing fields, call Stripe, or mutate WooCommerce settings.

**Tech Stack:** Next.js 14 frontend repo, `@playwright/test`, Chromium, production WooCommerce classic checkout.

---

## Verified context from PM run — 2026-06-07

- Required project context was read before planning:
  - Lattice Plugins skill content loaded in this run.
  - `/Users/minion/Library/Mobile Documents/iCloud~md~obsidian/Documents/Hermes/01 - Projects/Lattice Plugins/README.md`
  - `/Users/minion/Library/Mobile Documents/iCloud~md~obsidian/Documents/Hermes/01 - Projects/Lattice Plugins/Issues and Blockers.md`
  - `/Users/minion/Library/Mobile Documents/iCloud~md~obsidian/Documents/Hermes/01 - Projects/Lattice Plugins/Roadmap.md`
  - `/Users/minion/Library/Mobile Documents/iCloud~md~obsidian/Documents/Hermes/01 - Projects/Lattice Plugins/Decisions.md`
  - `/Users/minion/Library/Mobile Documents/iCloud~md~obsidian/Documents/Hermes/01 - Projects/Lattice Plugins/Reminders.md`
- Frontend repo verification:
  - `git status --short` was clean before this planning artifact.
  - Latest relevant commits include `2959770a test: cover checkout routing smoke path` and `e41c1ffb ops: add production health check script`.
  - `package.json` has `test:e2e` and `test:e2e:headed` scripts using `playwright test --pass-with-no-tests`.
  - `playwright.config.ts` defaults `baseURL` to `https://latticeplugins.com`, uses Chromium only, and sets `fullyParallel: false`.
  - Current e2e suite discovery: exactly `2 tests in 2 files` (`catalog.spec.ts`, `checkout-routing.spec.ts`).
  - Current e2e suite result: `2 passed (4.1s)`.
- Live catalog verification:
  - `curl -L https://latticeplugins.com/shop/` returned `SHOP 200 https://latticeplugins.com/shop`.
  - Shop HTML contained all 7 official products: Lattice Commerce Suite, Lattice Core, Lattice CRM, Lattice Migrate, Lattice Stripe Payments, Lattice Subscribify, Lattice SEO.
- Live checkout payment-method verification with cookie-preserving curl:
  - `/cart/?add-to-cart=14` returned `ADD_CART 200 https://latticeplugins.com/cart/?add-to-cart=14`.
  - `/checkout/` returned `CHECKOUT 200 https://latticeplugins.com/checkout/` in the same cookie jar.
  - Checkout HTML contained `data-page="checkout"`, `Billing details`, `Place order`, `Manual invoice`, `bank transfer`, `woocommerce-checkout-payment`, and `Lattice Commerce Suite`.
  - Checkout HTML did **not** contain `payment_method_lattice_stripe` and did **not** contain `Your cart is currently empty`.
  - Checkout HTML had exactly one `name="payment_method"` input.
  - The visible payment label was `payment_method_bacs` → `Manual invoice / bank transfer`.

---

## Single highest-value Developer task

### Task 1: Add checkout payment-method smoke spec

**Objective:** Commit a focused Playwright regression guard for the currently enabled manual invoice / bank transfer checkout method while documenting that Stripe remains absent until live keys are entered.

**Files:**
- Create: `tests/e2e/checkout-payment-method.spec.ts`
- Do not modify: `src/**`, `.env*`, WooCommerce settings, Stripe settings, production data, `tests/e2e/catalog.spec.ts`, or `tests/e2e/checkout-routing.spec.ts` unless verification reveals a real failure.

**Step 1: Confirm clean working tree**

Run from `/Users/minion/Developer/latticeplugins-frontend`:

```bash
git status --short
```

Expected: no output, or only this PM planning artifact if it has not yet been committed by PM. Do not mix unrelated changes into the test commit.

**Step 2: Write the failing test**

Create `tests/e2e/checkout-payment-method.spec.ts`:

```ts
import { expect, test } from "@playwright/test";

const PAID_PRODUCT = {
  id: 14,
  name: "Lattice Commerce Suite",
};

test("checkout exposes manual invoice payment while Stripe is disabled", async ({ page }) => {
  await page.goto(`/cart/?add-to-cart=${PAID_PRODUCT.id}`, {
    waitUntil: "domcontentloaded",
  });

  await expect(page).toHaveURL(/\/cart\/?(?:\?.*)?$/);
  await expect(page.getByText(PAID_PRODUCT.name, { exact: true })).toBeVisible();
  await expect(page.getByText("Your cart is currently empty", { exact: true })).toHaveCount(0);

  await page.goto("/checkout/", { waitUntil: "domcontentloaded" });

  await expect(page).toHaveURL(/\/checkout\/?$/);
  await expect(page.locator('main[data-page="checkout"]')).toHaveCount(1);
  await expect(page.locator("#payment.woocommerce-checkout-payment")).toBeVisible();

  const paymentMethods = page.locator('input[name="payment_method"]');
  await expect(paymentMethods).toHaveCount(1);
  await expect(page.locator("#payment_method_bacs")).toBeChecked();
  await expect(page.locator('label[for="payment_method_bacs"]')).toContainText(/manual invoice\s*\/\s*bank transfer/i);
  await expect(page.getByText(/make your payment directly into our bank account/i)).toBeVisible();

  await expect(page.locator("#payment_method_lattice_stripe")).toHaveCount(0);
  await expect(page.locator('input[value="lattice_stripe"]')).toHaveCount(0);
  await expect(page.getByText("Loading secure payment form", { exact: false })).toHaveCount(0);
  await expect(page.frameLocator('iframe[src*="stripe.com"]').locator("body")).toHaveCount(0);

  await expect(page.getByRole("button", { name: "Place order" })).toBeVisible();
});
```

**Step 3: Run the focused spec and verify it passes**

Run:

```bash
npm run test:e2e -- tests/e2e/checkout-payment-method.spec.ts
```

Expected: PASS — one Chromium test passes. The test must not fill billing fields, click `Place order`, create a WooCommerce order, or require Stripe/live-key credentials.

If the iframe assertion is flaky because Playwright waits on a non-existent frame, replace only that assertion with this DOM-level check:

```ts
await expect(page.locator('iframe[src*="stripe.com"]')).toHaveCount(0);
```

**Step 4: Run full smoke suite**

Run:

```bash
npm run test:e2e
```

Expected: PASS — exactly three smoke tests pass: catalog, checkout routing, and checkout payment method.

**Step 5: Prove discovery includes the new separate spec**

Run:

```bash
npm run test:e2e -- --list
```

Expected output includes:

```text
[chromium] › catalog.spec.ts:27:5 › shop page shows exactly the official 7-product Lattice catalog
[chromium] › checkout-payment-method.spec.ts:8:5 › checkout exposes manual invoice payment while Stripe is disabled
[chromium] › checkout-routing.spec.ts:8:5 › cart add-to-cart session reaches the classic WooCommerce checkout page
Total: 3 tests in 3 files
```

Line numbers may shift slightly if Playwright formats discovery differently; the important contract is three tests in three files and the new payment-method spec name appears.

**Step 6: Remove generated artifacts before commit**

Run:

```bash
rm -rf test-results playwright-report
```

Expected: generated Playwright artifacts are absent from `git status --short`.

**Step 7: Commit only the new spec**

Run:

```bash
git add tests/e2e/checkout-payment-method.spec.ts
git commit -m "test: cover checkout payment method state"
```

Expected: commit succeeds and includes only `tests/e2e/checkout-payment-method.spec.ts`.

**Step 8: Verify final repo state**

Run:

```bash
git status --short
git log --oneline -3
```

Expected:
- No `test-results/` or `playwright-report/` entries.
- Latest commit is `test: cover checkout payment method state`.
- If PM planning docs remain untracked/modified, leave them alone unless explicitly assigned.

---

## Acceptance criteria

- `tests/e2e/checkout-payment-method.spec.ts` is committed.
- `npm run test:e2e -- tests/e2e/checkout-payment-method.spec.ts` passes.
- `npm run test:e2e` passes with exactly three smoke specs.
- The new test confirms:
  - cart setup with product ID `14` reaches checkout with session intact;
  - `#payment.woocommerce-checkout-payment` is visible;
  - exactly one `input[name="payment_method"]` exists;
  - `#payment_method_bacs` is checked;
  - the label includes `Manual invoice / bank transfer`;
  - the bank-transfer instruction copy is visible;
  - `payment_method_lattice_stripe`, `input[value="lattice_stripe"]`, Stripe iframe, and `Loading secure payment form` are absent.
- The test does **not** submit checkout, create orders, fill billing fields, call Stripe, or require WooCommerce REST credentials.
- No production app code, WooCommerce config, Stripe config, or product data is changed.
- Commit exists with message `test: cover checkout payment method state`.

---

## Next task after this ships

Add a small `docs/testing.md` or README section that tells PM/CEO/Developer agents how to run the smoke suite, what each spec protects, and what human action is required when the payment-method smoke test starts seeing Stripe enabled again after live keys are configured.
