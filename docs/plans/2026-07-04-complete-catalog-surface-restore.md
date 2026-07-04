# Complete Catalog Surface Restore Implementation Plan

> **For Hermes:** Use subagent-driven-development skill to implement this plan task-by-task.

**Goal:** Remove the remaining unofficial invoice promotion from the homepage/header/shop primary catalog surfaces after the partial catalog restore.

**Architecture:** Preserve the official 7-product catalog as the only global/navigation acquisition surface. Leave direct invoice landing/blog/docs pages unchanged and covered by the dedicated invoice-funnel guard; this task only removes residual primary-surface drift.

**Tech Stack:** Next.js 14 App Router, React/TypeScript, Node static health guards, npm build/test scripts.

---

## Pre-work: confirm the current red baseline

Run from `~/Developer/latticeplugins-frontend`:

```bash
npm run test:health
```

Expected current result before changes:

```text
Prod health coverage check passed
FAIL: shop catalog copy guard failed
Disallowed unofficial promo terms found: Lattice Invoices, /woocommerce-eu-vat-invoices
```

Do not edit any guard scripts to make this pass. The guard is failing for the correct reason.

---

### Task 1: Remove the residual invoice nav item from the header

**Objective:** Keep header navigation inside the official catalog.

**Files:**
- Modify: `src/components/Header.tsx:35-40`
- Test: `scripts/check-homepage-catalog-cta.mjs`

**Step 1: Delete the invoice nav link**

Remove this whole block from `src/components/Header.tsx`:

```tsx
<Link
  href="/woocommerce-eu-vat-invoices"
  className="text-gray-700 hover:text-blue-600 font-medium transition"
>
  EU Invoices
</Link>
```

Leave the existing official `Lattice SEO` link intact.

**Step 2: Verify the source no longer has the header invoice link**

Run:

```bash
python3 - <<'PY'
from pathlib import Path
text = Path('src/components/Header.tsx').read_text()
assert 'EU Invoices' not in text
assert '/woocommerce-eu-vat-invoices' not in text
print('PASS: header has no invoice nav link')
PY
```

Expected: `PASS: header has no invoice nav link`.

**Step 3: Commit if working task-by-task**

```bash
git add src/components/Header.tsx
git commit -m "fix: remove invoice link from header"
```

---

### Task 2: Remove the duplicate invoice panel from the homepage

**Objective:** Make homepage acquisition copy promote only the official catalog and Lattice SEO.

**Files:**
- Modify: `src/app/page.tsx:56-90`
- Test: `scripts/check-homepage-catalog-cta.mjs`

**Step 1: Delete the green invoice panel**

Remove the entire `<section>` beginning with:

```tsx
<section className="mb-12 rounded-2xl border border-emerald-100 bg-emerald-50 p-6 md:p-8">
```

and ending at its matching `</section>` just before the official blue `New official product` / Lattice SEO panel.

Do not remove the official blue Lattice SEO panel.

**Step 2: Run the homepage/site-chrome guard**

Run:

```bash
node scripts/check-homepage-catalog-cta.mjs
```

Expected:

```text
PASS: homepage and site chrome stay within the official catalog
```

If this fails, inspect only `src/components/Header.tsx`, `src/components/Footer.tsx`, and `src/app/page.tsx` for residual primary-surface invoice terms. Do not edit blog or invoice landing pages.

**Step 3: Commit if working task-by-task**

```bash
git add src/app/page.tsx
git commit -m "fix: remove invoice panel from homepage"
```

---

### Task 3: Remove the invoice early-access panel from the shop page

**Objective:** Keep `/shop/` a pure official catalog page.

**Files:**
- Modify: `src/app/shop/page.tsx:49-66`
- Test: `scripts/check-shop-catalog-copy.mjs`

**Step 1: Delete the invoice workflow panel**

Remove the entire `<section>` beginning with:

```tsx
<section className="mb-10 rounded-2xl border border-emerald-100 bg-emerald-50 p-6 md:p-8">
```

and ending at its matching `</section>` just before the product grid.

Do not remove the official blue `Official 7-product catalog` intro section.

**Step 2: Run the shop catalog guard**

Run:

```bash
node scripts/check-shop-catalog-copy.mjs
```

Expected:

```text
PASS: shop catalog copy only promotes official catalog products
```

**Step 3: Commit if working task-by-task**

```bash
git add src/app/shop/page.tsx
git commit -m "fix: remove invoice panel from shop"
```

---

### Task 4: Run full local verification

**Objective:** Prove the surface cleanup fixed the red guard without breaking direct invoice pages, SEO checks, or the Next.js build.

**Files:**
- No source modifications expected unless verification reveals a missed residual term.

**Step 1: Verify primary surface files are clean**

Run:

```bash
python3 - <<'PY'
from pathlib import Path
files = [
    Path('src/components/Header.tsx'),
    Path('src/components/Footer.tsx'),
    Path('src/app/page.tsx'),
    Path('src/app/shop/page.tsx'),
]
terms = ['Lattice Invoices', '/woocommerce-eu-vat-invoices', '/docs/woocommerce-eu-vat-invoice-setup']
for path in files:
    text = path.read_text()
    hits = [term for term in terms if term in text]
    print(f'{path}: {hits or "OK"}')
    if hits:
        raise SystemExit(1)
PY
```

Expected: each listed file prints `OK`.

**Step 2: Run health tests**

Run:

```bash
npm run test:health
```

Expected includes:

```text
Prod health coverage check passed
PASS: shop catalog copy only promotes official catalog products
PASS: homepage and site chrome stay within the official catalog
```

The final invoice-funnel JSON should still report `"ok": true` for direct invoice landing/docs coverage.

**Step 3: Run SEO tests**

Run:

```bash
npm run test:seo
```

Expected: product SEO and sitemap route checks pass.

**Step 4: Build**

Run:

```bash
npm run build
```

Expected: Next.js build completes successfully.

**Step 5: Commit final source if not already committed task-by-task**

```bash
git add src/components/Header.tsx src/app/page.tsx src/app/shop/page.tsx
git commit -m "fix: complete official catalog surface restore"
```

---

### Task 5: Deploy and verify production

**Objective:** Make production match the clean local catalog surfaces.

**Files:**
- No source modifications expected.

**Step 1: Push frontend**

```bash
git push origin main
```

Expected: push succeeds.

**Step 2: Deploy**

```bash
ssh root@65.108.128.89 "ceo-deploy lattice"
```

Expected: deploy pulls the pushed commit, rebuilds the Coolify-era frontend image, recreates the frontend container, and reports it running.

**Step 3: Verify production text surfaces**

Run:

```bash
python3 - <<'PY'
from urllib.request import Request, urlopen
urls = ['https://latticeplugins.com/', 'https://latticeplugins.com/shop/']
official = [
    'Lattice Commerce Suite', 'Lattice Core', 'Lattice CRM', 'Lattice Migrate',
    'Lattice Stripe Payments', 'Lattice Subscribify', 'Lattice SEO'
]
for url in urls:
    req = Request(url, headers={'User-Agent': 'Mozilla/5.0 catalog-restore-check'})
    html = urlopen(req, timeout=20).read().decode('utf-8', 'replace')
    missing = [name for name in official if name not in html]
    forbidden = [term for term in ['Lattice Invoices', '/woocommerce-eu-vat-invoices', '/docs/woocommerce-eu-vat-invoice-setup'] if term in html]
    print(url, 'bytes=', len(html), 'missing=', missing or 'none', 'forbidden=', forbidden or 'none')
    if missing or forbidden:
        raise SystemExit(1)
PY
```

Expected: both URLs print `missing= none` and `forbidden= none`.

**Step 4: Run backend/VPS smoke**

From `~/Developer/latticeplugins-prod`:

```bash
scripts/vps-infra-health.sh
```

Expected: `=== Summary: issues=0 ===`.

**Step 5: Mandatory visual inspection and cleanup**

Use the browser tools or equivalent configured inspection workflow to open `https://latticeplugins.com/shop/`, capture a screenshot, and verify styled header, official product cards, and footer. Then clean up Chrome-for-Testing processes per project rules.

**Step 6: Report completion**

Completion report must include:

- Frontend commit hash.
- Local outputs for `npm run test:health`, `npm run test:seo`, and `npm run build`.
- Deploy command result.
- Production proof that `/` and `/shop/` include all 7 official products and zero forbidden invoice terms.
- `scripts/vps-infra-health.sh` summary.
