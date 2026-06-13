# Blog Guide Count Drift Smoke Test Repair Implementation Plan

> **For Hermes:** Use subagent-driven-development skill to implement this plan task-by-task.

**Goal:** Repair the production-safe `/blog/` Playwright smoke test after three new curated invoice guides increased the rendered guide-card set from 33 to 36.

**Architecture:** Keep the existing read-only smoke-test shape: the `/blog/` page owns the curated guide data in `src/app/blog/guide-cards.ts`, renders each card with `data-testid="blog-guide-card"`, and `tests/e2e/blog.spec.ts` validates rendered public output. This task only updates the expected count and sentinel coverage to match the current source and live route; it must not change WooCommerce, WordPress production data, checkout/payment settings, Stripe settings, or article content.

**Tech Stack:** Next.js 14 App Router, TypeScript, Playwright Chromium smoke tests, production-safe assertions against `https://latticeplugins.com` by default.

---

## Verified context from PM run — 2026-06-13

- Host time checked: `2026-06-13 05:14:17 CEST`.
- Required project context was read before planning: Lattice Plugins skill content, vault/project reminders, `latticeplugins-prod/PLUGINS_QUEUE.md`, existing frontend issue docs, and `docs/testing.md`.
- Frontend repo latest commits:
  - `af7b1b5f added stripe invoice guide`
  - `1ce40020 added dutch invoice page`
  - `fa8e314e added sepa invoice guide`
  - `cdb5a5a4 test: cover blog guide link integrity`
- Current `src/app/blog/guide-cards.ts` contains `36` hrefs, `36` unique hrefs, `36` titles, and no duplicate hrefs.
- Live site verification with curl User-Agent:
  - `/` returned HTTP `200` with `29540` bytes.
  - `/shop/` returned HTTP `200` with all 7 official products present and no removed/merged product-name hits from the checked list.
  - `/blog/` returned HTTP `200`, contained zero `Hello world` occurrences, and exposed `36` `/blog/` hrefs in the full HTML.
- Test discovery remains `Total: 12 tests in 4 files`.
- Focused blog smoke test currently fails because `tests/e2e/blog.spec.ts:22` expects `33` guide cards but production renders `36`:

```text
Expected: 33
Received: 36
Locator: getByTestId('blog-guide-card')
```

---

## Single highest-value Developer task

### Task 1: Update blog guide integrity smoke expectations from 33 to 36

**Objective:** Restore the `/blog/` smoke suite so it protects the current 36-card guide set instead of failing on stale expected counts.

**Files:**
- Modify: `tests/e2e/blog.spec.ts`
- Modify: `docs/testing.md`
- Reference only: `src/app/blog/guide-cards.ts`
- Do not modify: `src/app/blog/guide-cards.ts`, `src/app/blog/page.tsx`, individual blog article routes, WordPress production posts, WooCommerce catalog/products, checkout/payment specs, Stripe settings, or `.env*` files.

**Step 1: Confirm clean working tree**

Run from `/Users/minion/Developer/latticeplugins-frontend`:

```bash
git status --short
```

Expected: only generated Playwright artifacts may appear. If `?? test-results/` exists, remove it before editing:

```bash
rm -rf test-results playwright-report
```

Run `git status --short` again and expect no output.

**Step 2: Reconfirm source-of-truth guide count**

Run:

```bash
python3 - <<'PY'
import pathlib, re
s = pathlib.Path('src/app/blog/guide-cards.ts').read_text()
hrefs = re.findall(r'href:\\s*"([^"]+)"', s)
titles = re.findall(r'title:\\s*"([^"]+)"', s)
print(f'hrefs={len(hrefs)} unique={len(set(hrefs))} titles={len(titles)}')
print('\n'.join(hrefs[-5:]))
PY
```

Expected:

```text
hrefs=36 unique=36 titles=36
/blog/woocommerce-invoice-reminder-email-template
/blog/woocommerce-invoice-write-off-workflow
/blog/woocommerce-purchase-order-invoices
/blog/woocommerce-sepa-direct-debit-invoices
/blog/woocommerce-stripe-invoice-workflow
```

Stop and update this plan if the count is no longer `36` or duplicates appear.

**Step 3: Update the Playwright test count and title**

In `tests/e2e/blog.spec.ts`, change:

```ts
test("blog guide cards keep the curated 33-guide set unique", async ({ page }) => {
```

to:

```ts
test("blog guide cards keep the curated 36-guide set unique", async ({ page }) => {
```

Then change both `33` expectations to `36`:

```ts
await expect(guideCards).toHaveCount(36);
...
expect(new Set(guideHrefs).size).toBe(36);
```

**Step 4: Add sentinel assertions for the newest guide routes**

Keep the existing sentinel assertions and append the two newest published guide hrefs so future content additions/removals are easier to diagnose:

```ts
expect(guideHrefs).toContain("/blog/woocommerce-purchase-order-invoices");
expect(guideHrefs).toContain("/blog/woocommerce-sepa-direct-debit-invoices");
expect(guideHrefs).toContain("/blog/woocommerce-stripe-invoice-workflow");
```

**Step 5: Update testing docs**

In `docs/testing.md`, update the current coverage sentence for `tests/e2e/blog.spec.ts` from `33-card curated guide set` to `36-card curated guide set`, and update the expected list excerpt test title to:

```text
[chromium] › blog.spec.ts:18:5 › blog guide cards keep the curated 36-guide set unique
```

Keep the total test count as `12 tests in 4 files`.

**Step 6: Run the focused blog spec**

Run:

```bash
npm run test:e2e -- tests/e2e/blog.spec.ts
```

Expected: PASS — 2 blog tests pass.

**Step 7: Run full smoke discovery**

Run:

```bash
npm run test:e2e -- --list
```

Expected: `Total: 12 tests in 4 files`, with the blog integrity title showing `36-guide`.

**Step 8: Run the full smoke suite**

Run:

```bash
npm run test:e2e
```

Expected: PASS — 12 Chromium tests pass.

**Step 9: Build-check the frontend**

Run:

```bash
npm run build
```

Expected: Next.js production build succeeds.

**Step 10: Clean generated artifacts**

Run:

```bash
rm -rf test-results playwright-report .next
```

Expected: generated artifacts are absent from `git status --short`.

**Step 11: Commit the repair**

Run:

```bash
git add tests/e2e/blog.spec.ts docs/testing.md
git commit -m "test: update blog guide smoke count"
```

Expected: commit succeeds and contains only the test/doc repair.

---

## Acceptance criteria

- `tests/e2e/blog.spec.ts` title references the curated `36-guide` set.
- `tests/e2e/blog.spec.ts` asserts exactly `36` rendered `data-testid="blog-guide-card"` cards.
- The unique-href assertion expects `36` unique hrefs.
- Sentinel assertions include:
  - `/blog/woocommerce-invoice-automation`
  - `/blog/woocommerce-purchase-order-invoices`
  - `/blog/woocommerce-sepa-direct-debit-invoices`
  - `/blog/woocommerce-stripe-invoice-workflow`
- `docs/testing.md` documents the current 36-card blog smoke coverage and still reports `12 tests in 4 files`.
- `npm run test:e2e -- tests/e2e/blog.spec.ts` passes.
- `npm run test:e2e -- --list` reports `Total: 12 tests in 4 files`.
- `npm run test:e2e` passes.
- `npm run build` passes.
- No production data, WooCommerce settings, checkout/payment behavior, Stripe settings, guide-card data, article content, or `.env*` files are changed.
- Commit message: `test: update blog guide smoke count`.

---

## Next task after this ships

After the stale smoke count is repaired, the next highest-value product/backend task is the CRM headless tracking-base fix described in `/Users/minion/Developer/latticeplugins-prod/docs/issues/2026-06-12-crm-tracking-headless-route.md`.
