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

As of the 2026-06-28 QA verification run, static health checks and Playwright smokes cover separate public-surface risks:

- `npm run test:health` runs:
  - `scripts/check-prod-health-coverage.mjs` — confirms the VPS health script still checks the production-critical paths.
  - `scripts/check-shop-catalog-copy.mjs` — verifies `/shop/` source only promotes the official 7-product catalog and fails on primary-surface invoice promo terms such as `Lattice Invoices`, `/woocommerce-eu-vat-invoices`, or `/docs/woocommerce-eu-vat-invoice-setup`.
  - `scripts/check-homepage-catalog-cta.mjs` — verifies homepage/header/footer source stays inside the official catalog and does not reintroduce unofficial invoice CTAs in global chrome.
  - `scripts/check-invoice-funnel.mjs` — keeps the direct invoice landing/docs funnel intact, but only on explicit invoice landing/docs pages.
- `npm run test:seo` runs product SEO and sitemap-origin guards.
- `npm run build` verifies the App Router build, type checks, and static generation for the current route set.
- `tests/e2e/catalog.spec.ts` — verifies `/shop/` renders exactly the 7 official Lattice products, no removed/merged product names, and all 7 product detail pages render conversion sections plus CTA links.
- `tests/e2e/blog.spec.ts` — verifies `/blog/` renders curated invoice-guide content while hiding the default WordPress `hello-world` starter post, and compares rendered guide cards against the `blogGuideCards` source-of-truth data so counts and hrefs cannot drift.
- `tests/e2e/footer-navigation.spec.ts` — should keep global footer navigation aligned with the official catalog; do not reintroduce a global invoice setup-guide link from footer chrome.
- `tests/e2e/checkout-routing.spec.ts` — verifies `/cart/?add-to-cart=14` keeps the cart session and reaches the classic WooCommerce checkout page.
- `tests/e2e/checkout-payment-methods.spec.ts` — verifies checkout exposes `Manual invoice / bank transfer` while Stripe remains absent until live keys are configured.

## Catalog-surface regression checklist

When header, footer, homepage, or shop copy changes, run this checklist before deployment:

```bash
npm run test:health
npm run test:seo
npm run build
python3 - <<'PY'
import urllib.request
products = [
    "Lattice Commerce Suite", "Lattice Core", "Lattice CRM", "Lattice Migrate",
    "Lattice Stripe Payments", "Lattice Subscribify", "Lattice SEO",
]
disallowed = [
    "Lattice Invoices", "EU invoice offer", "/woocommerce-eu-vat-invoices",
    "/docs/woocommerce-eu-vat-invoice-setup",
]
for path in ["/", "/shop/"]:
    req = urllib.request.Request("https://latticeplugins.com" + path, headers={"User-Agent": "LatticeQA/1.0"})
    with urllib.request.urlopen(req, timeout=20) as response:
        html = response.read().decode("utf-8", "replace")
        print(path, response.status, response.headers.get_content_type(), len(html), response.geturl())
    missing = [term for term in products if term not in html]
    present = [term for term in disallowed if term in html]
    if missing or present:
        raise SystemExit(f"catalog surface failed for {path}: missing={missing}, disallowed={present}")
PY
```

Expected result: `/` and `/shop/` return HTTP 200 HTML, include all 7 official product names, and include zero disallowed invoice-funnel promo terms. The direct invoice landing page and docs may still contain invoice terms; that is intentional and guarded by `scripts/check-invoice-funnel.mjs`.

## Next planned smoke/maintainability coverage

The next small read-only smoke/maintainability task is to refresh the Playwright discovery excerpt after the official-catalog footer spec lands, then add a focused public smoke for one official product detail page's primary CTA without submitting forms or changing WooCommerce state.

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
