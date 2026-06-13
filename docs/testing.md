# Lattice Frontend Smoke Testing

This repo has a small Playwright smoke suite for the public Lattice Plugins revenue path. It is intentionally production-safe: tests may add a product to a browser-session cart, but they must not submit checkout, create WooCommerce orders, change payment settings, or require Stripe live keys.

## Run the suite

From `~/Developer/latticeplugins-frontend`:

```bash
npm run test:e2e
```

Run against a preview or local deployment by overriding the base URL:

```bash
BASE_URL=http://localhost:3000 npm run test:e2e
```

List discovered specs without running them:

```bash
npm run test:e2e -- --list
```

## Current coverage

As of the 2026-06-13 developer verification run, discovery shows exactly 12 tests in 4 files:

- `tests/e2e/catalog.spec.ts` — verifies `/shop/` renders exactly the 7 official Lattice products, no removed/merged product names, and all 7 product detail pages render conversion sections plus CTA links.
- `tests/e2e/blog.spec.ts` — verifies `/blog/` renders curated invoice-guide content while hiding the default WordPress `hello-world` starter post, and guards the 36-card curated guide set against duplicate or missing `/blog/...` links.
- `tests/e2e/checkout-routing.spec.ts` — verifies `/cart/?add-to-cart=14` keeps the cart session and reaches the classic `/checkout/` form.
- `tests/e2e/checkout-payment-methods.spec.ts` — verifies checkout exposes `Manual invoice / bank transfer` while Stripe remains absent until live keys are configured.

Expected list command excerpt:

```text
[chromium] › blog.spec.ts:3:5 › blog page shows curated invoice guides without default starter posts
[chromium] › blog.spec.ts:18:5 › blog guide cards keep the curated 36-guide set unique
[chromium] › catalog.spec.ts:27:5 › shop page shows exactly the official 7-product Lattice catalog
[chromium] › catalog.spec.ts:57:7 › product detail page renders conversion sections for Lattice Commerce Suite
[chromium] › catalog.spec.ts:57:7 › product detail page renders conversion sections for Lattice Core
[chromium] › catalog.spec.ts:57:7 › product detail page renders conversion sections for Lattice CRM
[chromium] › catalog.spec.ts:57:7 › product detail page renders conversion sections for Lattice Migrate
[chromium] › catalog.spec.ts:57:7 › product detail page renders conversion sections for Lattice Stripe Payments
[chromium] › catalog.spec.ts:57:7 › product detail page renders conversion sections for Lattice Subscribify
[chromium] › catalog.spec.ts:57:7 › product detail page renders conversion sections for Lattice SEO
[chromium] › checkout-payment-methods.spec.ts:8:5 › checkout exposes invoice and bank transfer methods while Stripe remains unavailable without live keys
[chromium] › checkout-routing.spec.ts:8:5 › cart add-to-cart session reaches the classic WooCommerce checkout page
Total: 12 tests in 4 files
```

## Next planned smoke/maintainability coverage

The next small read-only smoke/maintainability task is to add coverage for the documentation landing page or footer navigation, without submitting forms or changing WooCommerce state.

## Payment-method note

Stripe card checkout is still human-blocked until real live Stripe publishable + secret keys are configured in WooCommerce. Until then, the payment smoke spec should continue to assert that `lattice_stripe` is absent and bank transfer/manual invoice is the only visible method.

When live Stripe keys are entered and Stripe is intentionally re-enabled:

1. Run `npm run test:e2e -- tests/e2e/checkout-payment-methods.spec.ts` and expect the current assertion to fail.
2. Browser-check `/checkout/` with a paid product in cart and confirm Stripe iframe/Elements render without the old `Loading secure payment form...` stall.
3. Update the payment-method smoke spec to the new intended state.
4. Run the full smoke suite.
5. Commit the spec update with a message such as `test: cover live stripe checkout payment state`.

## Cleanup

Playwright can leave generated artifacts on failures. Do not commit them:

```bash
rm -rf test-results playwright-report
```

Before committing test changes, verify:

```bash
git status --short
```

Only source/docs/test files should be staged; `test-results/` and `playwright-report/` should be absent.
