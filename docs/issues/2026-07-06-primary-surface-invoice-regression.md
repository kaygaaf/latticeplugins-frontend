# Primary Surface Invoice Regression Reopened

**Date opened:** 2026-07-06  
**Owner:** Developer agent  
**Severity:** P1 — public catalog source-of-truth drift  
**Source of truth:** Lattice Plugins has exactly 7 official shop products. `Lattice Invoices` is not an official shop product and must not be promoted from homepage/header/shop primary surfaces.

## Summary

The frontend has regressed again after the previous homepage catalog cleanup. Current production `/` promotes `Lattice Invoices` from the homepage, and the header now links `EU Invoices` to `/woocommerce-eu-vat-invoices`. The local health suite passes because two guards now explicitly require invoice-funnel discovery from homepage/header primary surfaces.

This creates a false green state: production is returning HTTP 200 and the official 7 products are still present, but the public acquisition surface conflicts with the official catalog source of truth.

## Verified evidence

Verified by the PM cron run on 2026-07-06 05:12 CEST.

### Frontend source state

From `~/Developer/latticeplugins-frontend`:

```text
$ git log --oneline -8
38bd3394 invoice funnel
1327fc8d added course invoice guide
692cd188 added lifetime deal invoice guide
ebc4aea6 fix homepage catalog
fd60d516 docs: plan homepage catalog guard realignment
70469e62 added ubl invoice guide
b2d78fb9 invoice funnel on homepage
20ffd740 added one-time invoice guide
```

Current primary-surface hits:

- `src/components/Header.tsx:29-34` links `EU Invoices` to `/woocommerce-eu-vat-invoices`.
- `src/app/page.tsx:56-101` renders a green `Revenue focus: WooCommerce EU invoicing` panel promoting `Lattice Invoices`, `View Lattice Invoices offer`, `/woocommerce-eu-vat-invoices`, `/docs/woocommerce-eu-vat-invoice-setup`, and invoice-fit mailto copy.
- `src/components/Footer.tsx` is clean.
- `src/app/shop/page.tsx` remains protected by `scripts/check-shop-catalog-copy.mjs`.

### Local guard mismatch

`npm run test:health` currently passes for the wrong reason:

```text
Prod health coverage check passed
PASS: shop catalog copy only promotes official catalog products
PASS: homepage and site chrome expose both the official catalog and invoice revenue funnel
{
  "ok": true,
  "invoiceLanding": "/woocommerce-eu-vat-invoices",
  "mailtoCtas": 4,
  "guideLinks": 66,
  "checks": [
    "price visible",
    "early access CTA visible",
    "fit-score CTA visible",
    "homepage invoice discovery CTA visible",
    "header invoice navigation visible",
    "setup guide back-links visible"
  ]
}
```

Root cause in guard code:

- `scripts/check-homepage-catalog-cta.mjs` has `requiredInvoiceDiscoveryTerms` requiring `Lattice Invoices`, `Revenue focus: WooCommerce EU invoicing`, `View Lattice Invoices offer`, `Request invoice fit check`, `/woocommerce-eu-vat-invoices`, and `/docs/woocommerce-eu-vat-invoice-setup`.
- `scripts/check-invoice-funnel.mjs` reads `src/app/page.tsx` and `src/components/Header.tsx`, then requires homepage/header discovery terms including `/woocommerce-eu-vat-invoices` and `EU Invoices`.

### Production state

Public probes returned HTTP 200, but production `/` contains the invoice funnel:

```text
home 200 0.806598
shop_follow 200 https://latticeplugins.com/shop 0.414223

home {'Lattice Commerce Suite': 8, 'Lattice Core': 4, 'Lattice CRM': 4, 'Lattice Migrate': 4, 'Lattice Stripe Payments': 4, 'Lattice Subscribify': 4, 'Lattice SEO': 14, 'Lattice Invoices': 4, 'woocommerce-eu-vat-invoices': 4, 'VAT/BTW invoices': 2, 'EU Invoices': 2}
shop {'Lattice Commerce Suite': 8, 'Lattice Core': 6, 'Lattice CRM': 6, 'Lattice Migrate': 6, 'Lattice Stripe Payments': 6, 'Lattice Subscribify': 6, 'Lattice SEO': 12, 'Lattice Invoices': 0, 'woocommerce-eu-vat-invoices': 2, 'VAT/BTW invoices': 0, 'EU Invoices': 2}
```

The backend live smoke correctly catches the homepage drift:

```text
FAIL live_public_paths: https://latticeplugins.com/ HTTP 200 text/html; charset=utf-8 final=https://latticeplugins.com/ lattice_marker=True
homepage catalog official_present=7/7 missing=none unofficial_promos=['Lattice Invoices', 'woocommerce-eu-vat-invoices', '/docs/woocommerce-eu-vat-invoice-setup']
```

### Infrastructure state

`python3 scripts/lattice_qa_security_smoke.py --strict-local-catalog` passed in the backend repo. `scripts/vps-infra-health.sh` also passed with `=== Summary: issues=0 ===`, including healthy containers, exactly 7 Store API products, active plugin catalog hygiene, checkout fallback rendering, and fresh DB backup. This is a content/guard regression, not an infrastructure outage.

## Product impact

The homepage/header currently present an unofficial `Lattice Invoices` path as an active revenue focus, which contradicts the 7-product catalog source of truth and risks repeatedly resurrecting a removed product in public navigation.

## Desired outcome

Primary catalog surfaces must only promote official products. Direct invoice landing/blog/docs pages may remain as content assets, but homepage/header/footer/shop must not link or pitch the invoice funnel.

## Acceptance criteria

- `src/components/Header.tsx` removes `EU Invoices` and `/woocommerce-eu-vat-invoices`; replace it with an official product/catalog link such as `/product/lattice-commerce-suite`, `/product/lattice-seo`, or `/shop`.
- `src/app/page.tsx` removes the green invoice revenue section entirely.
- `scripts/check-homepage-catalog-cta.mjs` requires official catalog/Lattice SEO CTA terms and rejects invoice terms in `src/app/page.tsx`, `src/components/Header.tsx`, and `src/components/Footer.tsx`.
- `scripts/check-invoice-funnel.mjs` remains scoped to direct invoice landing/docs/blog pages and no longer reads or requires `src/app/page.tsx` or `src/components/Header.tsx` discovery terms.
- Do **not** edit direct invoice landing/blog/docs content in this task unless a guard needs a direct-page assertion.
- Local checks pass: `npm run test:health`, `npm run test:seo`, and `npm run build`.
- After deploy, production `/` and `/shop/` return HTTP 200, include all 7 official product names, and contain zero primary-surface occurrences of `Lattice Invoices`, `View Lattice Invoices offer`, `Request invoice fit check`, `VAT/BTW invoices`, `/woocommerce-eu-vat-invoices`, and `/docs/woocommerce-eu-vat-invoice-setup`.
- Backend live smoke passes: `python3 scripts/lattice_qa_security_smoke.py --live`.
