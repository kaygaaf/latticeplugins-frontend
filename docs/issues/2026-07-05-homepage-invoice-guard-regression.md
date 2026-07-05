# Homepage Invoice Funnel Guard Regression

**Date opened:** 2026-07-05  
**Owner:** Developer agent  
**Severity:** P1 — public homepage/catalog source-of-truth drift  
**Source of truth:** Lattice Plugins has exactly 7 official shop products. `Lattice Invoices` is not an official catalog product and must not be promoted from homepage/header/shop primary surfaces.

## Summary

The 2026-07-04 catalog cleanup partially shipped: the header and `/shop/` source are now clean, and production `/shop/` no longer contains invoice-funnel terms. The homepage regressed again in the newest frontend commits and now promotes `Lattice Invoices` as a revenue funnel.

The local homepage guard is also inverted: `scripts/check-homepage-catalog-cta.mjs` currently **requires** invoice-revenue terms, so `npm run test:health` passes locally while the backend live smoke fails against production.

## Verified evidence

Verified during PM run on 2026-07-05.

### Source state

From `~/Developer/latticeplugins-frontend`:

```text
$ git log --oneline -5
70469e62 added ubl invoice guide
b2d78fb9 invoice funnel on homepage
20ffd740 added one-time invoice guide
cd2c3b48 complete catalog cleanup
41c0f373 docs: plan residual catalog surface cleanup
```

Primary-surface source scan:

```text
src/components/Header.tsx OK
src/components/Footer.tsx OK
src/app/page.tsx {'Lattice Invoices': 3, '/woocommerce-eu-vat-invoices': 1, '/docs/woocommerce-eu-vat-invoice-setup': 1, 'View EU invoice workflow': 1}
src/app/shop/page.tsx OK
```

`src/app/page.tsx` currently contains:

- a green `Revenue focus: WooCommerce EU invoices` section with `Lattice Invoices`, `/woocommerce-eu-vat-invoices`, `/docs/woocommerce-eu-vat-invoice-setup`, and mailto early-access CTA copy;
- a blue `Official catalog remains available` panel that still says `Lattice Invoices is the revenue sprint funnel` and `The invoice funnel is clearly positioned as qualified early access`.

### Local guard mismatch

From `~/Developer/latticeplugins-frontend`:

```text
$ npm run test:health
Prod health coverage check passed
PASS: shop catalog copy only promotes official catalog products
PASS: homepage promotes invoice revenue funnel while preserving official catalog CTA
{
  "ok": true,
  "invoiceLanding": "/woocommerce-eu-vat-invoices",
  "mailtoCtas": 4,
  "guideLinks": 65,
  "checks": [
    "price visible",
    "early access CTA visible",
    "fit-score CTA visible",
    "setup guide back-links visible"
  ]
}
```

This is wrong for the homepage: health should fail when `src/app/page.tsx`, `src/components/Header.tsx`, or `src/components/Footer.tsx` contain primary-surface invoice promo terms.

### Production state

Public probes returned HTTP 200 and all 7 official product names are still present, but `/` includes invoice-funnel terms:

```text
home 200 0.945050
shop_follow 200 0.221876

home Lattice Commerce Suite 8
home Lattice Core 4
home Lattice CRM 4
home Lattice Migrate 4
home Lattice Stripe Payments 4
home Lattice Subscribify 4
home Lattice SEO 14
home Lattice Invoices 6
home /woocommerce-eu-vat-invoices 2
home /docs/woocommerce-eu-vat-invoice-setup 2

shop Lattice Commerce Suite 8
shop Lattice Core 6
shop Lattice CRM 6
shop Lattice Migrate 6
shop Lattice Stripe Payments 6
shop Lattice Subscribify 6
shop Lattice SEO 12
shop Lattice Invoices 0
shop /woocommerce-eu-vat-invoices 0
shop /docs/woocommerce-eu-vat-invoice-setup 0
```

Backend live smoke catches the public drift:

```text
FAIL live_public_paths: https://latticeplugins.com/ HTTP 200 text/html; charset=utf-8 final=https://latticeplugins.com/ lattice_marker=True
homepage catalog official_present=7/7 missing=none unofficial_promos=['Lattice Invoices', 'View EU invoice workflow', 'woocommerce-eu-vat-invoices', '/docs/woocommerce-eu-vat-invoice-setup']
```

### Infrastructure state

`scripts/vps-infra-health.sh` passed with `=== Summary: issues=0 ===`, including healthy frontend/WP/DB containers, public HTTP 200 routes, exactly 7 Store API products, checkout fallback rendering, active plugin catalog hygiene, and a fresh DB backup.

## Product impact

The public homepage currently tells buyers that `Lattice Invoices` is the active revenue focus even though it is not one of the 7 official shop products. This conflicts with the Lattice catalog source of truth and hides the regression from local frontend health checks.

## Desired outcome

Restore the homepage to official-catalog promotion only and make the homepage/site-chrome guard fail on future primary-surface invoice promos.

## Acceptance criteria

- `scripts/check-homepage-catalog-cta.mjs` requires official catalog/Lattice SEO CTA terms and rejects primary-surface invoice terms in `src/app/page.tsx`, `src/components/Header.tsx`, and `src/components/Footer.tsx`.
- `src/app/page.tsx` removes the green invoice revenue section entirely.
- `src/app/page.tsx` keeps the official Lattice SEO/catalog panel but rewrites copy so it contains no `Lattice Invoices`, `invoice funnel`, `/woocommerce-eu-vat-invoices`, `/docs/woocommerce-eu-vat-invoice-setup`, or invoice early-access positioning.
- Do **not** edit direct invoice landing/blog/docs pages in this task.
- Do **not** weaken `scripts/check-shop-catalog-copy.mjs` or `scripts/check-invoice-funnel.mjs`; direct invoice funnel coverage may continue to pass for explicit deep-link pages.
- Local checks pass from `~/Developer/latticeplugins-frontend`: `npm run test:health`, `npm run test:seo`, and `npm run build`.
- After deploy, production `/` and `/shop/` return HTTP 200, include all 7 official product names, and contain zero occurrences of `Lattice Invoices`, `View EU invoice workflow`, `/woocommerce-eu-vat-invoices`, and `/docs/woocommerce-eu-vat-invoice-setup`.
