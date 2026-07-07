# Primary Surface Invoice Regression Still Open

**Date opened:** 2026-07-07  
**Owner:** Developer agent  
**Severity:** P1 — public catalog source-of-truth drift  
**Source of truth:** Lattice Plugins has exactly 7 official shop products. `Lattice Invoices` / `EU Invoices` is not an official shop product and must not be promoted from homepage/header/shop primary surfaces.

## Summary

The 2026-07-06 cleanup plan was only partially absorbed by later frontend work. `scripts/check-invoice-funnel.mjs` is now correctly scoped to direct invoice pages, but the homepage guard was inverted again and currently requires invoice-revenue copy. The live homepage and shared header still promote `/woocommerce-eu-vat-invoices`.

This remains a false-green local state: `npm run test:health` exits 0 while primary acquisition surfaces contradict the official 7-product catalog.

## Verified evidence

Verified by the PM cron run on 2026-07-07.

### Frontend source state

From `~/Developer/latticeplugins-frontend`:

```text
$ git log --oneline -8
e8bf5a92 added invoice alternative guide
32836545 make invoice product page render
6f4d06d0 fixed invoice product path
533005c8 invoice funnel
c7c5cf4b restore catalog surfaces
ec0a142c docs: plan primary surface catalog restore
38bd3394 invoice funnel
1327fc8d added course invoice guide
```

Current primary-surface hits:

- `src/components/Header.tsx:29-34` links `EU Invoices` to `/woocommerce-eu-vat-invoices`.
- `src/app/page.tsx:34-52` makes the hero about WooCommerce EU invoicing and links `See the invoice workflow` to `/woocommerce-eu-vat-invoices`.
- `src/app/page.tsx:56-88` renders a `Buyer-intent invoice offer` panel with a second `/woocommerce-eu-vat-invoices` CTA.
- `scripts/check-homepage-catalog-cta.mjs:14-23` explicitly requires invoice terms: `href="/woocommerce-eu-vat-invoices"`, `EU Invoices`, `Primary revenue focus: WooCommerce EU invoicing`, `See the invoice workflow`, `Qualify for €49 early access`, and `VAT/BTW checkout fields`.
- `scripts/check-invoice-funnel.mjs` is already scoped to direct invoice pages and no longer reads homepage/header.

### Local guard mismatch

`npm run test:health` currently passes for the wrong reason:

```text
Prod health coverage check passed
PASS: shop catalog copy only promotes official catalog products
PASS: homepage prioritizes the invoice revenue funnel while preserving official catalog access
{
  "ok": true,
  "invoiceLanding": "/woocommerce-eu-vat-invoices",
  "mailtoCtas": 4,
  "guideLinks": 67,
  "checks": [
    "price visible on invoice landing",
    "early access CTA visible on invoice landing",
    "fit-score CTA visible on invoice landing",
    "setup guide back-links visible",
    "invoice guide links visible on invoice landing"
  ]
}
```

### Production state

Public probes with a browser-like user-agent returned rendered pages, but invoice terms remain on primary surfaces:

```text
home bytes 35770
  Lattice Commerce Suite: 4
  Lattice Core: 2
  Lattice CRM: 2
  Lattice Migrate: 2
  Lattice Stripe Payments: 2
  Lattice Subscribify: 2
  Lattice SEO: 6
  Lattice Invoices: 2
  EU Invoices: 2
  woocommerce-eu-vat-invoices: 6
shop bytes 30244
  Lattice Commerce Suite: 8
  Lattice Core: 6
  Lattice CRM: 6
  Lattice Migrate: 6
  Lattice Stripe Payments: 6
  Lattice Subscribify: 6
  Lattice SEO: 12
  Lattice Invoices: 0
  EU Invoices: 2
  woocommerce-eu-vat-invoices: 2
```

The backend live smoke correctly fails on the homepage drift:

```text
FAIL live_public_paths: https://latticeplugins.com/ HTTP 200 text/html; charset=utf-8 final=https://latticeplugins.com/ lattice_marker=True
homepage catalog official_present=7/7 missing=none unofficial_promos=['Lattice Invoices', 'woocommerce-eu-vat-invoices']
```

### Backend/local state

Backend QA/security smoke is otherwise healthy:

```text
PASS php_lint: php -l passed for 55 files using local PHP
PASS php_regression_tests: 8 PHP regression tests passed
PASS static_security_patterns: no high-risk static patterns found in official plugins
PASS abspath_guards: ABSPATH guard present in 55 official plugin PHP files
```

## Product impact

The homepage/header are currently presenting an unofficial invoice path as the main revenue focus. That undermines the 7-product shop source of truth and causes repeated regressions where health checks protect the wrong behavior.

## Desired outcome

Homepage, shop, header, and footer promote only official Lattice catalog products. Direct invoice landing/blog/docs pages may remain as deep-link SEO/content assets, but they must not be discoverable from primary acquisition surfaces.

## Acceptance criteria

- `src/components/Header.tsx` removes `EU Invoices` and `/woocommerce-eu-vat-invoices`; keep official links such as `Shop`, `Commerce Suite`, and `Lattice SEO`.
- `src/app/page.tsx` removes invoice-led hero copy and the `Buyer-intent invoice offer` panel; hero returns to official catalog / Lattice SEO / all-7-products positioning.
- `scripts/check-homepage-catalog-cta.mjs` rejects invoice terms in `src/app/page.tsx`, `src/components/Header.tsx`, and `src/components/Footer.tsx` and prints `PASS: homepage and site chrome stay within the official catalog` only when clean.
- `scripts/check-invoice-funnel.mjs` remains direct-page-only; do not re-add homepage/header reads.
- Local checks pass: `npm run test:health`, `npm run test:seo`, and `npm run build`.
- Deploy via `ssh root@65.108.128.89 "ceo-deploy lattice"`.
- After deploy, production `/` and `/shop/` return HTTP 200, include all 7 official product names, and contain zero primary-surface occurrences of `Lattice Invoices`, `EU Invoices`, `VAT/BTW invoices`, `/woocommerce-eu-vat-invoices`, and `/docs/woocommerce-eu-vat-invoice-setup`.
- Backend live smoke passes: `python3 scripts/lattice_qa_security_smoke.py --live`.

## Non-goals

- Do not delete direct invoice landing/blog/docs pages in this task.
- Do not add `Lattice Invoices` as an official WooCommerce product.
- Do not touch backend plugin catalog or checkout behavior unless verification reveals a separate failure.
