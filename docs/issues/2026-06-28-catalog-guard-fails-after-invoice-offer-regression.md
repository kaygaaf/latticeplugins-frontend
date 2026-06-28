# Catalog Guard Fails After Invoice Offer Regression

**Date opened:** 2026-06-28
**Owner:** Developer agent
**Severity:** P1 — public catalog/revenue surface drift
**Source of truth:** Lattice Plugins has exactly 7 official shop products. `Lattice Invoices` is not an official catalog product and must not be promoted from homepage/header/footer/shop catalog surfaces.

## Verified evidence

Verified during PM run at `2026-06-28 05:13:24 CEST`.

### Local source state

Latest local frontend commits include:

```text
abd3a6a9 focus invoice offer
23993393 added slovenian invoice guide
7949768d restore setup guide link
adbd59ff added slovak invoice guide
47074f58 guard official catalog surfaces
```

Current source promotes the unofficial invoice offer in primary catalog surfaces:

- `src/components/Header.tsx:29-34` links `EU Invoices` to `/woocommerce-eu-vat-invoices`.
- `src/components/Footer.tsx:37-40` links `EU VAT invoice setup guide` to `/docs/woocommerce-eu-vat-invoice-setup`.
- `src/app/page.tsx:34-46` makes the homepage hero about `WooCommerce EU invoicing`, `Lattice Invoices`, and `View EU invoice offer`.
- `src/app/page.tsx:56-76` adds a primary revenue panel for `Lattice Invoices` with `/woocommerce-eu-vat-invoices` and `/docs/woocommerce-eu-vat-invoice-setup` CTAs.
- `src/app/shop/page.tsx:34-67` adds an invoice promo panel above the official product grid.

### Local test failure

`npm run test:health` currently fails before build/deploy:

```text
> latticeplugins-frontend@0.1.0 test:health
> node scripts/check-prod-health-coverage.mjs && node scripts/check-shop-catalog-copy.mjs && node scripts/check-homepage-catalog-cta.mjs && node scripts/check-invoice-funnel.mjs

Prod health coverage check passed
FAIL: shop catalog copy guard failed
Disallowed unofficial promo terms found: Lattice Invoices, /woocommerce-eu-vat-invoices, /docs/woocommerce-eu-vat-invoice-setup
```

### Production drift

Public probes with a browser-like user agent returned HTTP 200 for `/` and `/shop/`, but both contain invoice-funnel promotion terms:

```text
/ 200 35766
  Lattice Commerce Suite: 4
  Lattice Core: 2
  Lattice CRM: 2
  Lattice Migrate: 2
  Lattice Stripe Payments: 2
  Lattice Subscribify: 2
  Lattice SEO: 4
  Lattice Invoices: 4
  EU invoice offer: 2
  woocommerce-eu-vat-invoices: 6
  docs/woocommerce-eu-vat-invoice-setup: 4
/shop/ 200 33010
  Lattice Commerce Suite: 6
  Lattice Core: 4
  Lattice CRM: 4
  Lattice Migrate: 4
  Lattice Stripe Payments: 4
  Lattice Subscribify: 4
  Lattice SEO: 6
  Lattice Invoices: 2
  EU invoice offer: 0
  woocommerce-eu-vat-invoices: 4
  docs/woocommerce-eu-vat-invoice-setup: 4
```

### Infrastructure is otherwise healthy

`python3 scripts/lattice_qa_security_smoke.py && scripts/vps-infra-health.sh` from `latticeplugins-prod` passed with `=== Summary: issues=0 ===`. It verified healthy containers, public route HTTP 200s, exactly 7 WooCommerce products, checkout fallback rendering, active plugin catalog hygiene, and fresh DB backup.

## Product impact

The health guard is correctly failing locally, but production still contains primary-surface invoice promotion. This creates catalog confusion because visitors see an unofficial product while the official shop source of truth remains 7 products.

## Desired outcome

Restore homepage, header, footer, and shop catalog surfaces to official-product promotion only, while keeping the direct invoice landing page and setup guide available for explicit deep links and content experiments.

## Acceptance criteria

- `src/components/Header.tsx` no longer contains `EU Invoices` or `/woocommerce-eu-vat-invoices`; use an official product link, recommended `Lattice SEO` → `/product/lattice-seo`.
- `src/components/Footer.tsx` no longer links `/docs/woocommerce-eu-vat-invoice-setup` from global chrome; use official catalog/product links only.
- `src/app/page.tsx` hero and primary panel no longer mention `Lattice Invoices`, `EU invoice offer`, `VAT/BTW invoice workflow`, `/woocommerce-eu-vat-invoices`, or `/docs/woocommerce-eu-vat-invoice-setup`; promote an official product/catalog path, recommended Lattice SEO plus `/shop`.
- `src/app/shop/page.tsx` no longer contains the invoice promo block; the page presents the official 7-product catalog and/or an official-product promo only.
- `scripts/check-invoice-funnel.mjs` still validates direct invoice landing/docs pages, but no health check requires invoice promotion from homepage/header/footer/shop.
- Local commands pass: `npm run test:health`, `npm run test:seo`, and `npm run build`.
- After deploy, production `/` and `/shop/` contain all 7 official product names and zero occurrences of `Lattice Invoices`, `EU invoice offer`, `/woocommerce-eu-vat-invoices`, and `/docs/woocommerce-eu-vat-invoice-setup`.
