# Finalize Checkout Routing Smoke Test Implementation Plan

> **For Hermes:** Use subagent-driven-development skill to implement this plan task-by-task.

**Goal:** Finish shipping the already-written checkout routing Playwright smoke spec by cleaning generated artifacts, verifying the suite, and committing the test.

**Architecture:** This is a frontend-repo test-only completion task. The checkout routing spec already exists locally and passes against production. Do not change production app code, WooCommerce settings, Stripe configuration, cart/checkout implementation, or product data. Keep the spec focused on session/routing only; payment-method assertions belong in a separate follow-up spec.

**Tech Stack:** Next.js 14, npm, `@playwright/test`, Chromium, WooCommerce classic cart/checkout pages.

---

## Verified context from PM run — 2026-06-06 05:12 CEST

- Required vault docs were read before planning:
  - `/Users/minion/Library/Mobile Documents/iCloud~md~obsidian/Documents/Hermes/01 - Projects/Lattice Plugins/README.md`
  - `/Users/minion/Library/Mobile Documents/iCloud~md~obsidian/Documents/Hermes/01 - Projects/Lattice Plugins/Issues and Blockers.md`
  - `/Users/minion/Library/Mobile Documents/iCloud~md~obsidian/Documents/Hermes/01 - Projects/Lattice Plugins/Roadmap.md`
  - `/Users/minion/Library/Mobile Documents/iCloud~md~obsidian/Documents/Hermes/01 - Projects/Lattice Plugins/Decisions.md`
  - `/Users/minion/Library/Mobile Documents/iCloud~md~obsidian/Documents/Hermes/01 - Projects/Lattice Plugins/Reminders.md`
- Frontend repo status before this PM planning artifact:
  - `git status --short` showed untracked `tests/e2e/checkout-routing.spec.ts` and untracked `test-results/`.
  - Existing committed spec: `tests/e2e/catalog.spec.ts`.
  - `package.json` has `test:e2e` and `test:e2e:headed` scripts using `playwright test --pass-with-no-tests`.
  - `playwright.config.ts` defaults `baseURL` to `https://latticeplugins.com`, with `BASE_URL` override support, Chromium-only project, and `fullyParallel: false`.
- Current untracked checkout spec content verified:
  - Adds paid product ID `14` / `Lattice Commerce Suite` via `/cart/?add-to-cart=14`.
  - Verifies `main[data-page="cart"]`, visible product, and no empty-cart marker.
  - Navigates in the same browser context to `/checkout/`.
  - Verifies `main[data-page="checkout"]`, visible checkout form, `Billing details`, visible order row for `Lattice Commerce Suite × 1 €49.00`, visible `Place order`, and no empty-cart marker.
- Test discovery verified:
  - `npm run test:e2e -- --list` reported exactly `2 tests in 2 files`:
    - `shop page shows exactly the official 7-product Lattice catalog`
    - `cart add-to-cart session reaches the classic WooCommerce checkout page`
- Full live smoke suite verified:
  - `npm run test:e2e` passed: `2 passed (4.1s)`.
- Live catalog contract verified via WooCommerce Store API:
  - `https://latticeplugins.com/wp-json/wc/store/v1/products?per_page=100` returned exactly 7 products.
  - IDs/prices: `20 Lattice SEO 4900`, `19 Lattice Subscribify 4900`, `18 Lattice Stripe Payments 0`, `17 Lattice Migrate 4900`, `16 Lattice CRM 4900`, `15 Lattice Core 0`, `14 Lattice Commerce Suite 4900`.
- Live checkout payment context verified with cookie-preserving curl:
  - `/cart/?add-to-cart=14` returned `ADD_CART 200 https://latticeplugins.com/cart/?add-to-cart=14`.
  - `/checkout/` returned `CHECKOUT 200 https://latticeplugins.com/checkout/`.
  - Checkout HTML contains `data-page="checkout"`, `Billing details`, `Place order`, `Manual invoice`, `bank transfer`, `woocommerce-checkout-payment`, and `Lattice Commerce Suite`.
  - Checkout HTML does not contain `payment_method_lattice_stripe` and does not contain `Your cart is currently empty`.
  - Checkout HTML has exactly one `name="payment_method"` input.

---

## Single highest-value Developer task

### Task 1: Commit the passing checkout routing smoke spec

**Objective:** Turn the currently untracked, passing checkout routing smoke test into a committed regression guard without committing generated Playwright artifacts.

**Files:**
- Add: `tests/e2e/checkout-routing.spec.ts`
- Remove/ignore from commit: `test-results/`
- Do not modify: `src/**`, `.env*`, WooCommerce settings, Stripe settings, production data, or `tests/e2e/catalog.spec.ts` unless verification reveals a real failure.

**Step 1: Confirm the current dirty state**

Run from `/Users/minion/Developer/latticeplugins-frontend`:

```bash
git status --short
```

Expected: output includes:

```text
?? tests/e2e/checkout-routing.spec.ts
?? test-results/
```

It may also include this PM plan file until the PM commit has landed; do not include unrelated generated files in the checkout-test commit.

**Step 2: Remove generated Playwright artifacts**

Run:

```bash
rm -rf test-results
```

Expected: `test-results/` no longer appears in `git status --short`.

**Step 3: Run the focused checkout spec**

Run:

```bash
npm run test:e2e -- tests/e2e/checkout-routing.spec.ts
```

Expected: PASS — one Chromium test passes. The test must not fill checkout fields, click `Place order`, create an order, call Stripe, or require WooCommerce REST credentials.

**Step 4: Run the full e2e suite**

Run:

```bash
npm run test:e2e
```

Expected: PASS — both specs pass.

**Step 5: Prove discovery has exactly two smoke specs**

Run:

```bash
npm run test:e2e -- --list
```

Expected output includes:

```text
[chromium] › catalog.spec.ts:27:5 › shop page shows exactly the official 7-product Lattice catalog
[chromium] › checkout-routing.spec.ts:8:5 › cart add-to-cart session reaches the classic WooCommerce checkout page
Total: 2 tests in 2 files
```

**Step 6: Commit only the checkout spec**

Run:

```bash
git add tests/e2e/checkout-routing.spec.ts
git commit -m "test: cover checkout routing smoke path"
```

Expected: commit succeeds and includes only `tests/e2e/checkout-routing.spec.ts`.

**Step 7: Verify final repo state**

Run:

```bash
git status --short
git log --oneline -3
```

Expected:
- No `test-results/` entry.
- Latest commit is `test: cover checkout routing smoke path`.
- If PM planning docs remain untracked/modified, leave them alone unless explicitly assigned.

---

## Acceptance criteria

- `tests/e2e/checkout-routing.spec.ts` is committed.
- `test-results/` is not committed.
- `npm run test:e2e -- tests/e2e/checkout-routing.spec.ts` passes.
- `npm run test:e2e` passes with exactly two smoke specs.
- The checkout spec remains routing/session focused and does not assert payment-method copy; payment-method coverage is a separate follow-up.
- No production app code, WooCommerce config, Stripe config, or product data is changed.
- Commit exists with message `test: cover checkout routing smoke path`.

---

## Next task after this ships

Add a separate checkout payment-method smoke spec that reuses the same cart setup and asserts the currently enabled manual invoice / bank transfer method is visible while Stripe remains absent until live keys are entered. Keep it separate so payment-copy/config changes cannot mask cart-to-checkout routing regressions.
