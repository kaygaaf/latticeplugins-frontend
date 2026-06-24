# Shop page promotes Lattice Invoices outside the official product catalog

**Date found:** 2026-06-24  
**Risk:** Medium catalog hygiene / buyer confusion. The public shop page promotes “Lattice Invoices” and links to an EU invoice offer, but the Lattice source-of-truth catalog currently contains exactly 7 products and explicitly removed/deactivated `lattice-invoices` as an unauthorized plugin/product.  
**Affected area:** `src/app/shop/page.tsx` shop hero promo.

## Verified current state

On 2026-06-24, the PM run verified the production site and repo state:

```bash
scripts/check-crm-tracking-headless.sh
python3 scripts/lattice_qa_security_smoke.py
scripts/vps-infra-health.sh
curl -sSL -A 'Mozilla/5.0' https://latticeplugins.com/shop/ -o /tmp/lattice-shop-current.html
python3 - <<'PY'
from pathlib import Path
html = Path('/tmp/lattice-shop-current.html').read_text(errors='ignore')
for term in ['Lattice Invoices', 'EU invoice offer', 'VAT/BTW invoices', 'woocommerce-eu-vat-invoices']:
    print(term, html.count(term))
for term in ['Lattice Commerce Suite','Lattice Core','Lattice CRM','Lattice Migrate','Lattice Stripe Payments','Lattice Subscribify','Lattice SEO']:
    print(term, html.count(term))
PY
```

Observed:

```text
OK: Lattice CRM headless tracking smoke guard passed
PASS php_regression_tests: 8 PHP regression tests passed
=== Summary: issues=0 ===
Lattice Invoices 2
EU invoice offer 2
VAT/BTW invoices 2
woocommerce-eu-vat-invoices 4
Lattice Commerce Suite 2
Lattice Core 2
Lattice CRM 2
Lattice Migrate 2
Lattice Stripe Payments 2
Lattice Subscribify 2
Lattice SEO 2
```

Source inspection confirms the promo is hardcoded in `src/app/shop/page.tsx:30-64` and says:

- “WooCommerce EU invoice workflow”
- “start with the Lattice Invoices early-access path”
- links to `/woocommerce-eu-vat-invoices` and `/docs/woocommerce-eu-vat-invoice-setup`

The backend catalog is otherwise healthy: the VPS health smoke confirms WooCommerce exposes exactly the 7 official products and the active Lattice plugin set matches the 7-product catalog.

## Problem

The official source of truth says the shop catalog contains exactly these 7 products:

1. Lattice Commerce Suite
2. Lattice Core
3. Lattice CRM
4. Lattice Migrate
5. Lattice Stripe Payments
6. Lattice Subscribify
7. Lattice SEO

It also records that `lattice-invoices` was deactivated/removed from production because it was not part of the official catalog. A prominent shop hero that names “Lattice Invoices” can make buyers think an eighth product exists, and it weakens the catalog hygiene guardrails the team has been enforcing.

## Recommended next developer task

Implement the focused plan at:

- `docs/plans/2026-06-24-shop-invoices-promo-catalog-drift.md`

Start by adding a small static guard that fails while `src/app/shop/page.tsx` contains unofficial invoice-product promo copy. Then replace the hero with an official-catalog promo, preferably Lattice SEO because it is the newest €49 product and needs conversion support.

## Acceptance criteria

- Add a deterministic frontend test script that scans `src/app/shop/page.tsx` for unofficial catalog/product promo terms such as `Lattice Invoices`, `EU invoice offer`, and `/woocommerce-eu-vat-invoices`.
- Wire the script into the frontend test suite so `npm test` catches future shop-page catalog drift.
- Replace the shop hero with copy and links for an official product only. Recommended: Lattice SEO, linking to `/product/lattice-seo` and `/shop` or another existing official-catalog route.
- Keep the WooCommerce product grid dynamic and still showing exactly 7 official products.
- Run and pass:
  - `npm run test:health`
  - `npm run test:seo`
  - `npm run build`
- Deploy through `ssh root@65.108.128.89 "ceo-deploy lattice"`.
- Verify production `/shop/` no longer contains the unofficial invoice promo terms and still contains all 7 official product names.

## Non-goals

- Do not delete the existing invoice guide pages in this task; treat them as content cleanup/redirect strategy for a later marketing decision.
- Do not create or reactivate any `lattice-invoices` plugin/product.
- Do not change checkout, Stripe keys, WooCommerce product data, or Lattice Migrate security code.
