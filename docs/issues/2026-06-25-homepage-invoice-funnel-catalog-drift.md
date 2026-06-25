# Homepage hero links to unofficial invoice funnel outside the official catalog

**Date found:** 2026-06-25  
**Risk:** Medium catalog hygiene / buyer confusion. The public homepage hero sends visitors to `/woocommerce-eu-vat-invoices` with the CTA label “EU Invoice Workflow”, while the Lattice source-of-truth catalog contains exactly 7 products and does not include Lattice Invoices.  
**Affected area:** `src/app/page.tsx` homepage hero CTA and `scripts/check-invoice-funnel.mjs` enforcing that CTA in `npm run test:health`.

## Verified current state

On 2026-06-25, the PM run verified the previous shop-catalog cleanup shipped and production health is green:

```text
npm run test:health
PASS: shop catalog copy only promotes official catalog products
check-invoice-funnel: ok=true, invoiceLanding=/woocommerce-eu-vat-invoices

npm run test:seo
Product SEO smoke check passed
PASS: sitemap route WordPress origin fallback is production-safe

scripts/vps-infra-health.sh
=== Summary: issues=0 ===
WooCommerce catalog has exactly 7 published products
Active Lattice plugin set matches the 7-product catalog
```

Production `/shop/` is now clean:

```text
Lattice Invoices 0
EU invoice offer 0
VAT/BTW invoices 0
woocommerce-eu-vat-invoices 0
Lattice Commerce Suite 4
Lattice Core 4
Lattice CRM 4
Lattice Migrate 4
Lattice Stripe Payments 4
Lattice Subscribify 4
Lattice SEO 10
```

But the homepage and current frontend health script still actively promote/require the unofficial invoice funnel:

```text
Production /:
EU Invoice Workflow 2
woocommerce-eu-vat-invoices 2
Lattice Commerce Suite 2
Lattice SEO 4

Production /woocommerce-eu-vat-invoices:
Lattice Invoices 12
woocommerce-eu-vat-invoices 12
```

Source inspection confirms:

- `src/app/page.tsx:37-42` links the primary homepage hero CTA to `/woocommerce-eu-vat-invoices` and labels it `EU Invoice Workflow`.
- `scripts/check-invoice-funnel.mjs:47-49` fails unless the homepage keeps that CTA visible.
- `package.json:13` wires `check-invoice-funnel.mjs` into `npm run test:health`, so the test suite currently protects an unofficial product/funnel rather than the official catalog.

## Problem

The Lattice master catalog says only these 7 products should be promoted as products:

1. Lattice Commerce Suite
2. Lattice Core
3. Lattice CRM
4. Lattice Migrate
5. Lattice Stripe Payments
6. Lattice Subscribify
7. Lattice SEO

The homepage is the highest-traffic route. A primary CTA to an unofficial invoice funnel undermines the same catalog hygiene rule just fixed on `/shop/`, and the health test now makes that drift sticky.

## Recommended next developer task

Implement the focused plan at:

- `docs/plans/2026-06-25-homepage-official-catalog-cta.md`

Replace the homepage hero invoice CTA with an official product CTA (recommended: Lattice SEO), add a static guard for the homepage hero, and stop `npm run test:health` from requiring the invoice funnel CTA.

## Acceptance criteria

- Add a deterministic frontend guard that scans `src/app/page.tsx` and fails when the homepage hero contains `EU Invoice Workflow` or `href="/woocommerce-eu-vat-invoices"`.
- Replace the primary homepage hero CTA with official-catalog copy/link only, recommended: `View Lattice SEO` → `/product/lattice-seo`.
- Update or remove the homepage assertion in `scripts/check-invoice-funnel.mjs` so `npm run test:health` no longer protects the unofficial invoice homepage CTA.
- Run and pass:
  - `npm run test:health`
  - `npm run test:seo`
  - `npm run build`
- Deploy through `ssh root@65.108.128.89 "ceo-deploy lattice"`.
- Verify production `/` has zero occurrences of `EU Invoice Workflow` and `href="/woocommerce-eu-vat-invoices"`, while still showing the 7 official product grid.

## Non-goals

- Do not delete or redirect `/woocommerce-eu-vat-invoices` in this task; treat landing-page retirement or repositioning as a later marketing/content decision.
- Do not create or reactivate any `lattice-invoices` plugin/product.
- Do not change WooCommerce product data, checkout, Stripe keys, or backend plugins.
