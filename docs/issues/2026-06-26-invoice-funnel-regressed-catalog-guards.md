# Invoice funnel focus regressed official catalog surfaces

**Date found:** 2026-06-26  
**Risk:** Medium catalog hygiene / conversion confusion. The 2026-06-25 `focused the invoice funnel` frontend commit reintroduced unofficial invoice-funnel promotion on the public homepage, shop page, and header navigation, causing `npm run test:health` to fail before deploy verification can be trusted.

## Verified current state

The local frontend working tree is clean and the latest commits are:

```text
9dab2d5c focused the invoice funnel
61b73889 added greek invoice guide
fb4feaed added hungarian invoice guide
df3aa4c1 keep homepage CTA in catalog
a23c32af docs: plan homepage catalog CTA cleanup
```

The current health check fails immediately:

```text
npm run test:health
FAIL: shop catalog copy guard failed
Disallowed unofficial promo terms found: Lattice Invoices, VAT/BTW invoices, /woocommerce-eu-vat-invoices, /docs/woocommerce-eu-vat-invoice-setup
```

Source inspection shows the regression is not only in `/shop/`:

- `src/components/Header.tsx` links the top nav item to `/woocommerce-eu-vat-invoices` with label `Invoices`.
- `src/app/shop/page.tsx` promotes `Lattice Invoices early access`, `/woocommerce-eu-vat-invoices`, and `/docs/woocommerce-eu-vat-invoice-setup` inside the shop hero.
- `src/app/page.tsx` promotes `View EU invoice workflow`, `Lattice Invoices: EU VAT/BTW invoices for WooCommerce`, `/woocommerce-eu-vat-invoices`, and `/docs/woocommerce-eu-vat-invoice-setup`.

Production has the same visible catalog drift despite infrastructure being healthy:

```text
https://latticeplugins.com/
Lattice Invoices: 2
View EU invoice workflow: 2
woocommerce-eu-vat-invoices: 6
/docs/woocommerce-eu-vat-invoice-setup: 4
all 7 official product names present: yes

https://latticeplugins.com/shop/
Lattice Invoices: 2
woocommerce-eu-vat-invoices: 4
/docs/woocommerce-eu-vat-invoice-setup: 4
all 7 official product names present: yes
```

The production infrastructure smoke remains green, so this is a frontend content/catalog task rather than a container or WooCommerce data issue:

```text
scripts/vps-infra-health.sh
=== Summary: issues=0 ===
WooCommerce catalog has exactly 7 published products
Active Lattice plugin set matches the 7-product catalog
```

SEO checks are not the blocker:

```text
npm run test:seo
Product SEO smoke check passed
PASS: sitemap route WordPress origin fallback is production-safe
```

## Problem

The Lattice source of truth says the shop/catalog contains exactly 7 official products:

1. Lattice Commerce Suite
2. Lattice Core
3. Lattice CRM
4. Lattice Migrate
5. Lattice Stripe Payments
6. Lattice Subscribify
7. Lattice SEO

`Lattice Invoices` is not an official shop product and was previously removed from active plugin/catalog hygiene. Public acquisition surfaces can keep invoice content as a direct landing/content page for now, but homepage, shop, and global navigation should not promote it as a primary product path.

## Recommended next developer task

Implement the focused plan at:

- `docs/plans/2026-06-26-restore-official-catalog-surfaces.md`

Restore homepage, shop, and header promotion to the official catalog, then harden the static guards so this exact lower-case invoice CTA cannot bypass the existing homepage guard again.

## Acceptance criteria

- `src/components/Header.tsx` no longer links to `/woocommerce-eu-vat-invoices`; use an official product nav item instead, recommended `Lattice SEO` → `/product/lattice-seo`.
- `src/app/shop/page.tsx` promo card returns to official product copy/link only, recommended `Lattice SEO` → `/product/lattice-seo` plus `Compare all 7 plugins` → `/shop`.
- `src/app/page.tsx` hero and added feature panel no longer mention or link the invoice funnel; recommended official CTA/feature: Lattice SEO.
- `scripts/check-homepage-catalog-cta.mjs` catches lower-case `View EU invoice workflow`, `Lattice Invoices`, `/woocommerce-eu-vat-invoices`, and `/docs/woocommerce-eu-vat-invoice-setup` on the homepage source.
- Run and pass:
  - `npm run test:health`
  - `npm run test:seo`
  - `npm run build`
- Deploy with `ssh root@65.108.128.89 "ceo-deploy lattice"`.
- Verify production `/` and `/shop/` both have zero occurrences of `Lattice Invoices`, `View EU invoice workflow`, `woocommerce-eu-vat-invoices`, and `/docs/woocommerce-eu-vat-invoice-setup`, while still rendering all 7 official product names.

## Non-goals

- Do not delete `/woocommerce-eu-vat-invoices` or invoice guide pages in this task.
- Do not create or reactivate a `lattice-invoices` plugin/product.
- Do not change WooCommerce products, checkout, Stripe settings, or backend plugin code.
