# Homepage Invoice Funnel Reopened on Primary Catalog Surface

**Date:** 2026-07-09
**Product:** Lattice Plugins frontend
**Severity:** High catalog/source-of-truth regression
**Status:** Resolved 2026-07-31

## Resolution (2026-07-31)

- `scripts/check-homepage-catalog-cta.mjs` rewritten: invoice-funnel terms are now **forbidden** on `src/app/page.tsx`, `src/components/Header.tsx`, and `src/components/Footer.tsx` (previously required). Verified RED against the promo section before removal.
- Lattice Invoices promo section removed from `src/app/page.tsx`; official hero and 7-product grid untouched.
- `scripts/check-invoice-funnel.mjs` already validated only direct invoice surfaces — no homepage requirement present, no change needed.
- Verified: `node scripts/check-homepage-catalog-cta.mjs`, `npm run test:health`, `npm run test:seo`, `npm run build` all pass.
- Deployed via `ceo-deploy lattice` (commit `94acefbc`). Backend live smoke passes: homepage/shop official catalog 7/7, `unofficial_promos=none`. Direct invoice pages still HTTP 200.

## Summary

The homepage has reintroduced a `Lattice Invoices` / EU VAT invoice promotion block on the public primary catalog surface. This violates the Lattice source-of-truth rule that the public shop/catalog surfaces must promote exactly the 7 official products and must not make removed/unofficial plugins look like active shop products.

The regression is especially risky because the local frontend health suite currently passes for the wrong reason: `scripts/check-homepage-catalog-cta.mjs` and `scripts/check-invoice-funnel.mjs` both require the homepage to contain invoice-funnel links.

## Verified evidence from the 2026-07-09 PM run

- Host time checked: `2026-07-09 05:11:59 CEST`.
- Project/vault docs read before this issue was written:
  - Lattice Hermes skill loaded in the scheduled job prompt.
  - `/Users/minion/Library/Mobile Documents/iCloud~md~obsidian/Documents/Hermes/01 - Projects/Lattice Plugins/Reminders.md` still records the live Stripe-key blocker.
  - `Roadmap.md` still lists security remediation, analytics, content, and WordPress.org submission as priorities.
  - `Issues and Blockers.md` still lists Stripe live keys and Lattice Migrate hardening as active issues.
- Backend hardening plan from 2026-07-08 has been implemented locally: `php tests/lattice-migrate-partial-restore-security-test.php` passes, and `lattice-migrate/includes/class-partial-restore.php` now preflights selected-table inserts before destructive SQL.
- Backend local QA/catalog hygiene passed: `python3 scripts/lattice_qa_security_smoke.py --strict-local-catalog` passed with PHP lint for 55 files, 8 PHP regression tests, no high-risk static patterns, ABSPATH guards present, and no unauthorized catalog artifacts.
- Backend live smoke failed on primary public surface drift: `python3 scripts/lattice_qa_security_smoke.py --live` reported homepage `HTTP 200`, `official_present=7/7`, but `unofficial_promos=['Lattice Invoices', 'woocommerce-eu-vat-invoices']`.
- Frontend local health currently passes for the wrong reason: `npm run test:health` prints `PASS: homepage keeps official catalog CTAs and includes the invoice revenue funnel` and `check-invoice-funnel.mjs` reports `homepage links into invoice offer and ROI calculator`.
- Source inspection found the regression in `src/app/page.tsx:56-95`: the homepage renders `Primary WooCommerce revenue focus`, `Lattice Invoices`, `/woocommerce-eu-vat-invoices`, `/tools/woocommerce-invoice-roi-calculator`, and `VAT/BTW invoices` copy.
- Header and footer are currently clean for this specific regression: `src/components/Header.tsx` links only Home, Shop, Commerce Suite, Lattice SEO, Blog; `src/components/Footer.tsx` links only official catalog/support surfaces.

## Desired behavior

1. Homepage and site chrome promote the official 7-product Lattice catalog only.
2. The direct invoice landing page, invoice setup docs, invoice ROI tool, and invoice guide/blog pages may continue to exist as deep-link content.
3. No homepage/header/footer/shop source may contain primary-surface invoice funnel terms such as `Lattice Invoices`, `/woocommerce-eu-vat-invoices`, `VAT/BTW invoices`, or `/tools/woocommerce-invoice-roi-calculator`.
4. `npm run test:health` must fail if invoice funnel links or invoice product copy return to homepage/site chrome.
5. Backend live smoke must pass after deploy: production `/` and `/shop/` include all 7 official product names and report no `unofficial_promos`.

## Acceptance criteria

- Update `scripts/check-homepage-catalog-cta.mjs` so it no longer has `requiredInvoiceFunnelTerms` and instead treats invoice-funnel terms as forbidden on `src/app/page.tsx`, `src/components/Header.tsx`, and `src/components/Footer.tsx`.
- Update `scripts/check-invoice-funnel.mjs` so it validates only direct invoice surfaces (`/woocommerce-eu-vat-invoices`, `/docs/woocommerce-eu-vat-invoice-setup`, `/product/lattice-invoices`, `/tools/woocommerce-invoice-roi-calculator`) and does **not** require homepage invoice links.
- Remove the homepage invoice promotion section from `src/app/page.tsx` without weakening the official catalog hero or product grid.
- Verify locally:
  - `node scripts/check-homepage-catalog-cta.mjs`
  - `node scripts/check-invoice-funnel.mjs`
  - `npm run test:health`
  - `npm run test:seo`
  - `npm run build`
- Deploy with the normal Lattice frontend workflow, then verify production with backend live smoke: `python3 ../latticeplugins-prod/scripts/lattice_qa_security_smoke.py --live`.

## Out of scope

- Do not delete direct invoice landing/docs/tool/blog content in this task.
- Do not add or recreate `lattice-invoices` as an official shop product.
- Do not change WooCommerce product catalog data.
- Do not attempt real Stripe payment testing; live keys remain a human-action blocker.
