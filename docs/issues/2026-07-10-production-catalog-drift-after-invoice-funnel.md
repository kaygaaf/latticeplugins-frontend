# Production homepage/shop catalog drift after invoice-funnel changes

Date: 2026-07-10
Status: Open — ready for Developer implementation/deploy
Severity: High
Owner: Frontend Developer

## Summary

Production `/` and `/shop/` again expose the unofficial Lattice Invoices funnel on primary catalog surfaces, even though the official catalog source of truth remains exactly seven products. Local frontend source already contains an uncommitted restoration of `src/app/page.tsx` and `src/app/shop/page.tsx` back to official catalog copy, so the smallest shippable task is to verify, commit, build, deploy, and prove production is clean.

## Verified evidence

### Live backend smoke

Command run from `~/Developer/latticeplugins-prod` on 2026-07-10:

```bash
python3 scripts/lattice_qa_security_smoke.py --live
```

Relevant output:

```text
FAIL live_public_paths: https://latticeplugins.com/ HTTP 200 text/html; charset=utf-8 final=https://latticeplugins.com/ lattice_marker=True
homepage catalog official_present=7/7 missing=none unofficial_promos=['Lattice Invoices', 'woocommerce-eu-vat-invoices']
```

### Manual public term counts

Command run on 2026-07-10:

```bash
python3 - <<'PY'
import urllib.request
urls=['https://latticeplugins.com/','https://latticeplugins.com/shop/']
terms=['Lattice Commerce Suite','Lattice Core','Lattice CRM','Lattice Migrate','Lattice Stripe Payments','Lattice Subscribify','Lattice SEO','Lattice Invoices','EU Invoices','VAT/BTW invoices','woocommerce-eu-vat-invoices','/docs/woocommerce-eu-vat-invoice-setup']
for url in urls:
    req=urllib.request.Request(url,headers={'User-Agent':'Mozilla/5.0 PM smoke'})
    body=urllib.request.urlopen(req,timeout=20).read().decode('utf-8','replace')
    print(url)
    for term in terms:
        print(f'  {term}: {body.count(term)}')
PY
```

Relevant output:

```text
https://latticeplugins.com/
  Lattice Commerce Suite: 4
  Lattice Core: 2
  Lattice CRM: 2
  Lattice Migrate: 2
  Lattice Stripe Payments: 2
  Lattice Subscribify: 2
  Lattice SEO: 6
  Lattice Invoices: 2
  woocommerce-eu-vat-invoices: 4
https://latticeplugins.com/shop/
  Lattice Commerce Suite: 8
  Lattice Core: 6
  Lattice CRM: 6
  Lattice Migrate: 6
  Lattice Stripe Payments: 6
  Lattice Subscribify: 6
  Lattice SEO: 12
  Lattice Invoices: 4
  woocommerce-eu-vat-invoices: 2
```

### Local source/worktree state

Command run from `~/Developer/latticeplugins-frontend` on 2026-07-10:

```bash
git status --short && git log --oneline -6
npm run test:health
```

Relevant output:

```text
 M scripts/check-invoice-funnel.mjs
 M src/app/page.tsx
 M src/app/shop/page.tsx
 M src/app/sitemap.xml/route.ts
 M src/app/woocommerce-eu-vat-invoices/page.tsx
?? src/app/tools/woocommerce-invoice-fit-check/
7914b3c9 focus invoice funnel
3caf56b9 sitemap tweak
e12c3b0a invoice demo
4718e0eb restore homepage catalog guard
...
PASS: shop catalog copy only promotes official catalog products
PASS: homepage and site chrome stay within the official catalog
```

Local `src/app/page.tsx` and `src/app/shop/page.tsx` currently remove the invoice primary-surface panels and restore official catalog copy, but these changes are not committed/deployed.

## Impact

- Catalog/business risk: primary sales surfaces promote a non-official/unlisted product funnel despite the 7-product source of truth.
- Technical severity: no outage; public routes return HTTP 200 and all seven official products are still present.
- This is a content/deploy regression, not a backend catalog or infrastructure failure.

## Acceptance criteria

- `npm run test:health` passes without weakening `check-homepage-catalog-cta.mjs` or `check-shop-catalog-copy.mjs`.
- `npm run test:seo` passes.
- `npm run build` passes.
- Commit includes the existing source restoration plus the invoice fit-check work only if it is complete and covered by `check-invoice-funnel.mjs`.
- Deploy via `ssh root@65.108.128.89 "ceo-deploy lattice"`.
- Production `python3 scripts/lattice_qa_security_smoke.py --live` from backend repo reports homepage/shop `official_present=7/7`, `missing=none`, and `unofficial_promos=none`.
- Manual public probes for `/` and `/shop/` show `Lattice Invoices: 0` and `woocommerce-eu-vat-invoices: 0` on primary surfaces, while all seven official products remain present.
- Mandatory visual inspection after deploy confirms styled homepage/shop and product cards; cleanup Chrome processes afterward.
