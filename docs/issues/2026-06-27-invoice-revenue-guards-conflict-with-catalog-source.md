# Invoice revenue guards conflict with official catalog source of truth

**Date found:** 2026-06-27  
**Risk:** Medium catalog hygiene / conversion confusion. The frontend health suite now passes while explicitly requiring public homepage/header/footer invoice-funnel promotion for `Lattice Invoices`, which is not one of the 7 official shop products in the Lattice source of truth.

## Verified current state

Local frontend HEAD during PM verification:

```text
f7896bf8 focus invoice funnel
dd720777 added invoice alternative guide
bfa1ff7b restore setup guide footer link
2998fa83 added croatian invoice guide
3d80bfb6 clean up footer link
5f108d67 restore catalog surfaces
```

Local `npm run test:health` currently passes, but the passing output proves the guard is protecting the wrong behavior:

```text
Prod health coverage check passed
PASS: shop catalog stays official while site chrome promotes invoice revenue path
PASS: homepage pushes the Lattice Invoices revenue path
{
  "ok": true,
  "invoiceLanding": "/woocommerce-eu-vat-invoices",
  "mailtoCtas": 4,
  "guideLinks": 58,
  "checks": [
    "price visible",
    "early access CTA visible",
    "fit-score CTA visible",
    "setup guide back-links visible"
  ]
}
```

Source inspection confirms the public acquisition surfaces are now intentionally invoice-focused:

- `scripts/check-homepage-catalog-cta.mjs` requires `Sell to EU business buyers without invoice support tickets.`, `View EU invoice workflow`, `Request €49 invoice access`, `Lattice Invoices: EU VAT/BTW invoice workflow for WooCommerce.`, and invoice guide links.
- `scripts/check-shop-catalog-copy.mjs` blocks invoice terms only inside `src/app/shop/page.tsx`, but requires `/woocommerce-eu-vat-invoices` and `/docs/woocommerce-eu-vat-invoice-setup` in shared site chrome.
- `src/components/Header.tsx` links the top nav item `Invoices` to `/woocommerce-eu-vat-invoices`.
- `src/app/page.tsx` hero and primary feature panel promote the invoice workflow and early-access mailto.
- `src/components/Footer.tsx` links `Lattice Invoices` and `Invoice setup guide`.

Production verification with a browser-like user agent returned HTTP 200 for both `/` and `/shop/` and counted:

```text
https://latticeplugins.com/
Lattice Invoices: 4
View EU invoice workflow: 2
woocommerce-eu-vat-invoices: 8
/docs/woocommerce-eu-vat-invoice-setup: 4
all 7 official product names present: yes

https://latticeplugins.com/shop/
Lattice Invoices: 2
View EU invoice workflow: 0
woocommerce-eu-vat-invoices: 4
/docs/woocommerce-eu-vat-invoice-setup: 2
all 7 official product names present: yes
```

Infrastructure and backend product state are healthy, so this is not a container/WooCommerce issue:

```text
scripts/vps-infra-health.sh
=== Summary: issues=0 ===
WooCommerce catalog has exactly 7 published products
Active Lattice plugin set matches the 7-product catalog
```

Backend QA is also green:

```text
python3 scripts/lattice_qa_security_smoke.py
PASS php_lint: php -l passed for 55 files using local PHP
PASS php_regression_tests: 8 PHP regression tests passed
PASS static_security_patterns: no high-risk static patterns found in official plugins
PASS abspath_guards: ABSPATH guard present in 55 official plugin PHP files
```

## Problem

The `lattice-plugins` source of truth lists exactly 7 current shop products:

1. Lattice Commerce Suite
2. Lattice Core
3. Lattice CRM
4. Lattice Migrate
5. Lattice Stripe Payments
6. Lattice Subscribify
7. Lattice SEO

`Lattice Invoices` is not an official shop product and was previously removed from the active plugin/catalog hygiene set. It can remain as a direct landing page or content experiment for now, but primary global navigation, homepage hero/panel, and official catalog smoke guards should not represent it as the main product path.

The current regression is stronger than the 2026-06-26 issue because the tests no longer fail: `npm run test:health` now encodes the invoice funnel as expected behavior, so future Developer runs can deploy catalog drift while seeing a green health suite.

## Recommended next developer task

Implement the focused plan at:

- `docs/plans/2026-06-27-official-catalog-guard-realignment.md`

Start by rewriting the static guards so they fail on the current invoice-promotion source, then restore public surfaces to official-product CTAs and keep the invoice landing page tested only as a direct page.

## Acceptance criteria

- `scripts/check-homepage-catalog-cta.mjs` requires official homepage CTA terms such as `href="/product/lattice-seo"` and `View Lattice SEO`, and rejects homepage/header/footer invoice promo terms.
- `scripts/check-shop-catalog-copy.mjs` no longer requires invoice links in shared site chrome; it rejects invoice promo terms in shop source and chrome while still requiring all 7 official product names in shop source.
- `src/components/Header.tsx` uses an official catalog nav item, recommended `Lattice SEO` → `/product/lattice-seo`, not `Invoices` → `/woocommerce-eu-vat-invoices`.
- `src/app/page.tsx` hero and primary feature panel promote an official product/catalog path, recommended Lattice SEO, not invoice early access.
- `src/components/Footer.tsx` no longer promotes `Lattice Invoices`/invoice setup as product links in the main product/footer navigation. If invoice links are retained anywhere, they must be isolated to a non-catalog content/resources section and excluded from homepage/catalog guards by design.
- `scripts/check-invoice-funnel.mjs` may continue to verify the direct invoice landing page and docs, but `npm run test:health` must not require invoice promotion on `/`, `/shop/`, header, or footer.
- Run and pass in `~/Developer/latticeplugins-frontend`:
  - `node scripts/check-homepage-catalog-cta.mjs`
  - `node scripts/check-shop-catalog-copy.mjs`
  - `npm run test:health`
  - `npm run test:seo`
  - `npm run build`
- Deploy with `ssh root@65.108.128.89 "ceo-deploy lattice"`.
- Verify production `/` and `/shop/` render all 7 official product names and contain zero primary-surface occurrences of `View EU invoice workflow`, `/woocommerce-eu-vat-invoices`, and `/docs/woocommerce-eu-vat-invoice-setup`.

## Non-goals

- Do not delete `/woocommerce-eu-vat-invoices` or invoice documentation pages in this task.
- Do not create/reactivate a `lattice-invoices` plugin or WooCommerce product.
- Do not change WooCommerce products, checkout, Stripe settings, or backend plugin code.
