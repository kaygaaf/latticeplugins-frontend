# Residual Invoice Primary-Surface Drift After Partial Catalog Restore

**Date opened:** 2026-07-04  
**Owner:** Developer agent  
**Severity:** P1 — public catalog/revenue surface drift  
**Source of truth:** Lattice Plugins has exactly 7 official shop products. `Lattice Invoices` is not an official catalog product and must not be promoted from homepage/header/shop primary surfaces.

## Verified evidence

Verified during PM run at `2026-07-04 05:11:47 CEST`.

### What is already fixed

Some of the 2026-06-28 catalog-restore work is partially present:

- `src/components/Footer.tsx` global chrome is clean: quick links are Home, Shop, Blog, Lattice Commerce Suite, Lattice SEO, and Compare all plugins.
- `src/app/page.tsx` hero now promotes the official 7-product catalog and `Lattice SEO`.
- `src/app/shop/page.tsx` has an official catalog intro panel above the grid.

### Remaining local source drift

The same primary surfaces still contain a residual invoice nav/link or panel:

- `src/components/Header.tsx:35-40` still links `EU Invoices` to `/woocommerce-eu-vat-invoices` even though `Lattice SEO` is already present at lines 29-34.
- `src/app/page.tsx:56-90` still renders a green invoice panel for `Lattice Invoices`, `/woocommerce-eu-vat-invoices`, and `/docs/woocommerce-eu-vat-invoice-setup` immediately before the official Lattice SEO panel.
- `src/app/shop/page.tsx:49-66` still renders an invoice workflow early-access panel above the product grid and links to `/woocommerce-eu-vat-invoices`.

### Local test failure

From `~/Developer/latticeplugins-frontend`:

```text
$ npm run test:health
> latticeplugins-frontend@0.1.0 test:health
> node scripts/check-prod-health-coverage.mjs && node scripts/check-shop-catalog-copy.mjs && node scripts/check-homepage-catalog-cta.mjs && node scripts/check-invoice-funnel.mjs

Prod health coverage check passed
FAIL: shop catalog copy guard failed
Disallowed unofficial promo terms found: Lattice Invoices, /woocommerce-eu-vat-invoices
```

### Production drift

Public probes returned HTTP 200, but `/` and `/shop/` still include invoice-funnel terms:

```text
home 200 0.801302
shop_follow 200 0.307704

Lattice Commerce Suite: home=6 shop=8
Lattice Core: home=4 shop=6
Lattice CRM: home=4 shop=6
Lattice Migrate: home=4 shop=6
Lattice Stripe Payments: home=4 shop=6
Lattice Subscribify: home=4 shop=6
Lattice SEO: home=14 shop=12
Lattice Invoices: home=2 shop=2
woocommerce-eu-vat-invoices: home=4 shop=4
docs/woocommerce-eu-vat-invoice-setup: home=2 shop=0
EU invoice offer: home=0 shop=0
```

### Infrastructure is otherwise healthy

- `scripts/vps-infra-health.sh` ended with `=== Summary: issues=0 ===`.
- It verified healthy frontend/WP/DB containers, public route HTTP 200s, exactly 7 WooCommerce products via the public Store API, checkout fallback rendering, active plugin catalog hygiene, fresh DB backup, and active deploy watcher.
- `python3 scripts/lattice_qa_security_smoke.py` passed PHP lint for 55 files, 8 PHP regression tests, static security scan, and ABSPATH guard coverage.

## Product impact

The site currently mixes an unofficial invoice offer into primary catalog surfaces while the official shop and plugin architecture remain 7 products. This confuses buyers and keeps the catalog health guard red, blocking safe frontend deploys.

## Desired outcome

Complete the already-started catalog restore by removing only the residual invoice header link and duplicate invoice panels. Keep direct invoice landing/blog/docs pages intact for explicit deep links and SEO experiments.

## Acceptance criteria

- `src/components/Header.tsx` has no `EU Invoices` nav item and no `/woocommerce-eu-vat-invoices` link; keep Home, Shop, Lattice SEO, Blog.
- `src/app/page.tsx` removes the green invoice panel at lines 56-90; keep the hero and official Lattice SEO panel.
- `src/app/shop/page.tsx` removes the invoice workflow early-access panel at lines 49-66; keep the official catalog intro and product grid.
- Do **not** modify invoice landing/blog/docs pages in this task.
- Do **not** weaken `scripts/check-shop-catalog-copy.mjs`, `scripts/check-homepage-catalog-cta.mjs`, or `scripts/check-invoice-funnel.mjs`.
- Local checks pass from `~/Developer/latticeplugins-frontend`: `npm run test:health`, `npm run test:seo`, and `npm run build`.
- After deploy, production `/` and `/shop/` return HTTP 200, include all 7 official product names, and have zero occurrences of `Lattice Invoices`, `/woocommerce-eu-vat-invoices`, and `/docs/woocommerce-eu-vat-invoice-setup` in those two pages.
