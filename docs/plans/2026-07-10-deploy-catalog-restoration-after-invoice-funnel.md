# Deploy Catalog Restoration After Invoice Funnel Implementation Plan

> **For Hermes:** Use subagent-driven-development skill to implement this plan task-by-task.

**Goal:** Restore production homepage and shop primary surfaces to the official 7-product Lattice catalog while preserving the direct invoice funnel pages/tools only on their scoped routes.

**Architecture:** The homepage, shop page, header, and footer are protected primary catalog surfaces and must not promote `Lattice Invoices` or `/woocommerce-eu-vat-invoices`. Direct invoice landing/docs/demo/tools/blog pages may continue to exist, but they must be validated separately by `scripts/check-invoice-funnel.mjs` and must not leak into catalog chrome. This task is mostly a verification/commit/deploy of already-present local source changes, plus one final guard review.

**Tech Stack:** Next.js App Router, TypeScript/TSX, Node health scripts, backend Python live smoke, Coolify/VPS deploy via `ceo-deploy lattice`.

---

### Task 1: Confirm the local primary-surface restoration diff is intentional

**Objective:** Verify the local uncommitted homepage/shop changes remove invoice promotion and restore official catalog CTAs without touching scoped invoice routes.

**Files:**
- Inspect: `src/app/page.tsx`
- Inspect: `src/app/shop/page.tsx`
- Inspect: `src/components/Header.tsx`
- Inspect: `src/components/Footer.tsx`
- Inspect: `scripts/check-homepage-catalog-cta.mjs`
- Inspect: `scripts/check-shop-catalog-copy.mjs`

**Step 1: Review current diff**

Run:

```bash
cd ~/Developer/latticeplugins-frontend
git diff -- src/app/page.tsx src/app/shop/page.tsx scripts/check-homepage-catalog-cta.mjs scripts/check-shop-catalog-copy.mjs
```

Expected:
- `src/app/page.tsx` hero links to `/shop` and `/product/lattice-commerce-suite`.
- `src/app/page.tsx` contains all seven official product names.
- `src/app/page.tsx` does **not** contain `Lattice Invoices`, `/woocommerce-eu-vat-invoices`, `/tools/woocommerce-invoice-roi-calculator`, or invoice mailto CTAs.
- `src/app/shop/page.tsx` contains official catalog intro and `View Lattice SEO` CTA.
- `src/app/shop/page.tsx` does **not** contain the green invoice offer/demo panel.
- Guard scripts still forbid primary-surface invoice terms; do not relax them.

**Step 2: Run source-term guard manually**

Run:

```bash
node - <<'NODE'
const fs = require('fs');
const surfaces = [
  'src/app/page.tsx',
  'src/app/shop/page.tsx',
  'src/components/Header.tsx',
  'src/components/Footer.tsx',
];
const official = ['Lattice Commerce Suite','Lattice Core','Lattice CRM','Lattice Migrate','Lattice Stripe Payments','Lattice Subscribify','Lattice SEO'];
const forbidden = ['Lattice Invoices','EU Invoices','VAT/BTW invoices','woocommerce-eu-vat-invoices','/docs/woocommerce-eu-vat-invoice-setup','/tools/woocommerce-invoice-roi-calculator'];
const source = surfaces.map((p) => fs.readFileSync(p, 'utf8')).join('\n');
console.log('official missing:', official.filter((term) => !source.includes(term)).join(', ') || 'none');
console.log('forbidden present:', forbidden.filter((term) => source.includes(term)).join(', ') || 'none');
NODE
```

Expected:

```text
official missing: none
forbidden present: none
```

**Step 3: Commit checkpoint only after review**

Do not commit yet if forbidden terms remain in primary surfaces. Fix the source first, then continue.

---

### Task 2: Verify the scoped invoice funnel changes are complete or split them out

**Objective:** Decide whether the uncommitted invoice fit-check/tool changes are shippable with this deploy or must be reverted/split before catalog restoration ships.

**Files:**
- Inspect: `scripts/check-invoice-funnel.mjs`
- Inspect: `src/app/woocommerce-eu-vat-invoices/page.tsx`
- Inspect: `src/app/tools/woocommerce-invoice-fit-check/page.tsx`
- Inspect: `src/app/tools/woocommerce-invoice-fit-check/InvoiceFitCheck.tsx`
- Inspect: `src/app/sitemap.xml/route.ts`

**Step 1: Review invoice-only diff**

Run:

```bash
cd ~/Developer/latticeplugins-frontend
git diff -- scripts/check-invoice-funnel.mjs src/app/woocommerce-eu-vat-invoices/page.tsx src/app/tools/woocommerce-invoice-fit-check src/app/sitemap.xml/route.ts
```

Expected if shipping together:
- New `/tools/woocommerce-invoice-fit-check` route is complete.
- `scripts/check-invoice-funnel.mjs` validates the new fit-check route.
- `src/app/sitemap.xml/route.ts` includes the new tool URL.
- No invoice links are added back to header/home/shop/footer.

If incomplete, split it out:

```bash
git restore scripts/check-invoice-funnel.mjs src/app/woocommerce-eu-vat-invoices/page.tsx src/app/sitemap.xml/route.ts
rm -rf src/app/tools/woocommerce-invoice-fit-check
```

Then ship only the catalog restoration.

**Step 2: Run direct invoice guard**

Run:

```bash
npm run test:health
```

Expected:
- `PASS: shop catalog copy only promotes official catalog products`
- `PASS: homepage and site chrome stay within the official catalog`
- invoice-funnel JSON reports `"ok": true`

---

### Task 3: Run full local frontend verification

**Objective:** Prove the frontend is buildable and SEO/catal​​og guards pass before deploy.

**Files:**
- Test: `package.json` scripts

**Step 1: Run health checks**

Run:

```bash
cd ~/Developer/latticeplugins-frontend
npm run test:health
```

Expected: exit 0 with the two catalog PASS markers and invoice JSON `"ok": true` if shipping invoice fit-check.

**Step 2: Run SEO checks**

Run:

```bash
npm run test:seo
```

Expected: exit 0 with product SEO and sitemap route checks passing.

**Step 3: Build**

Run:

```bash
npm run build
```

Expected: Next.js build exits 0 and lists routes including `/`, `/shop`, and any shipped invoice tool route.

---

### Task 4: Commit the shippable frontend change

**Objective:** Create one human-readable commit containing the catalog restoration and only complete related invoice-tool work.

**Files:**
- Modify: `src/app/page.tsx`
- Modify: `src/app/shop/page.tsx`
- Optional modify: `scripts/check-invoice-funnel.mjs`
- Optional modify: `src/app/woocommerce-eu-vat-invoices/page.tsx`
- Optional modify: `src/app/sitemap.xml/route.ts`
- Optional create: `src/app/tools/woocommerce-invoice-fit-check/page.tsx`
- Optional create: `src/app/tools/woocommerce-invoice-fit-check/InvoiceFitCheck.tsx`

**Step 1: Inspect final status**

Run:

```bash
git status --short
```

Expected: only files intended for this release are modified/untracked.

**Step 2: Commit**

Run:

```bash
git add src/app/page.tsx src/app/shop/page.tsx scripts/check-invoice-funnel.mjs src/app/woocommerce-eu-vat-invoices/page.tsx src/app/sitemap.xml/route.ts src/app/tools/woocommerce-invoice-fit-check
git commit -m "restore catalog surfaces after invoice funnel"
git push origin main
```

If invoice fit-check was split out, omit those files from `git add` and use:

```bash
git add src/app/page.tsx src/app/shop/page.tsx
git commit -m "restore catalog surfaces after invoice funnel"
git push origin main
```

Expected: push succeeds to `origin/main`.

---

### Task 5: Deploy to production

**Objective:** Rebuild/recreate the Coolify-era frontend so production no longer serves the stale invoice-primary-surface build.

**Files:**
- Deploy script on VPS: `ceo-deploy lattice`

**Step 1: Deploy**

Run:

```bash
ssh root@65.108.128.89 "ceo-deploy lattice"
```

Expected:
- deploy pulls the new frontend commit.
- image rebuild completes.
- frontend container is recreated/running.

**Step 2: Check deployed git/version evidence if deploy output is ambiguous**

Run:

```bash
ssh root@65.108.128.89 "cd /opt/docker-apps/lattice/frontend-new && git log --oneline -1"
```

Expected: latest commit matches the local commit from Task 4.

---

### Task 6: Verify production catalog surfaces are clean

**Objective:** Prove `/` and `/shop/` expose all official products and no primary-surface invoice funnel terms after deploy.

**Files:**
- Backend QA script: `~/Developer/latticeplugins-prod/scripts/lattice_qa_security_smoke.py`

**Step 1: Run backend live smoke**

Run:

```bash
cd ~/Developer/latticeplugins-prod
python3 scripts/lattice_qa_security_smoke.py --live
```

Expected:

```text
homepage catalog official_present=7/7 missing=none unofficial_promos=none
shop catalog official_present=7/7 missing=none unofficial_promos=none
```

**Step 2: Run explicit public term counts**

Run:

```bash
python3 - <<'PY'
import urllib.request
urls=['https://latticeplugins.com/','https://latticeplugins.com/shop/']
terms=['Lattice Commerce Suite','Lattice Core','Lattice CRM','Lattice Migrate','Lattice Stripe Payments','Lattice Subscribify','Lattice SEO','Lattice Invoices','woocommerce-eu-vat-invoices']
for url in urls:
    req=urllib.request.Request(url,headers={'User-Agent':'Mozilla/5.0 Developer smoke'})
    body=urllib.request.urlopen(req,timeout=20).read().decode('utf-8','replace')
    print(url)
    for term in terms:
        print(f'  {term}: {body.count(term)}')
PY
```

Expected:
- all seven official product counts are greater than zero on both URLs.
- `Lattice Invoices: 0` on both URLs.
- `woocommerce-eu-vat-invoices: 0` on both URLs.

**Step 3: Mandatory visual inspection**

Use the browser tooling or equivalent project workflow to inspect:

- `https://latticeplugins.com/`
- `https://latticeplugins.com/shop/`

Expected:
- styled header/navigation visible.
- homepage hero promotes official catalog, not invoices.
- shop intro promotes official 7-product catalog.
- product card grid is visible.
- no raw HTML/error page.

**Step 4: Browser cleanup**

Run:

```bash
killall -9 "Google Chrome for Testing" 2>/dev/null || true
ps aux | grep "Chrome for Testing" | grep -v grep | wc -l
```

Expected: `0`, `1`, or `2`.

---

### Task 7: Update project queue with verified production result

**Objective:** Leave the PM/Developer queue aligned with what actually shipped.

**Files:**
- Modify: `~/Developer/latticeplugins-prod/PLUGINS_QUEUE.md`
- Optional modify: `~/Developer/latticeplugins-prod/docs/qa/catalog-primary-surface-smoke.md`

**Step 1: Update the latest checkpoint**

Add a new 2026-07-10 entry with:
- frontend commit hash.
- local `npm run test:health`, `npm run test:seo`, `npm run build` results.
- deploy command result.
- live smoke result showing `unofficial_promos=none`.

**Step 2: Commit backend planning docs if changed**

Run:

```bash
cd ~/Developer/latticeplugins-prod
git add PLUGINS_QUEUE.md docs/qa/catalog-primary-surface-smoke.md
git commit -m "docs: record catalog surface recovery"
git push origin main
```

Expected: backend documentation commit is pushed after production is verified.
