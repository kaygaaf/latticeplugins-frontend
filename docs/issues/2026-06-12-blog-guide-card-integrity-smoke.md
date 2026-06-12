# Blog Guide Card Integrity Smoke Test Implementation Plan

> **For Hermes:** Use subagent-driven-development skill to implement this plan task-by-task.

**Goal:** Add a small production-safe Playwright assertion that protects the `/blog/` curated guide-card list from accidental duplicate links or missing cards.

**Status:** ✅ Implemented on 2026-06-12 by adding rendered-card test IDs, a Playwright count/unique-href smoke test, and updated testing docs.

**Architecture:** The guide-card data now lives in `src/app/blog/guide-cards.ts` and the `/blog/` route maps over that typed array. Extend the existing blog smoke spec to assert the rendered curated guide links match the current source-of-truth count and remain unique. This is test-only coverage: do not change WordPress posts, WooCommerce catalog data, checkout/payment settings, Stripe settings, or article route content.

**Tech Stack:** Next.js 14 App Router, TypeScript, Playwright Chromium smoke tests, production-safe read-only assertions against `https://latticeplugins.com` by default.

---

## Verified context from PM run — 2026-06-12

- Current host time: `2026-06-12 05:12:52 CEST`.
- Required project context was read before planning:
  - Lattice Plugins skill content loaded in this run.
  - `/Users/minion/Developer/latticeplugins-prod/PLUGINS_QUEUE.md`.
  - Existing frontend docs/issues and `docs/testing.md`.
- Vault path expected by the skill (`/Users/minion/Hermes/01 - Projects/Lattice Plugins`) was not present on this machine; repo docs were used as the durable project artifact.
- Frontend repo state:
  - Latest commits include `11e2e058 refactor: extract blog guide card data`, followed by additional blog-guide commits up to `ca180317 added PO invoice guide`.
  - `src/app/blog/page.tsx` imports `blogGuideCards` / `guideCardThemeClasses` and maps over the data; the dynamic WordPress post filter still excludes `hello-world`.
  - `src/app/blog/guide-cards.ts` currently contains `33` guide-card hrefs, `33` unique hrefs, `33` titles, and `duplicates=none`.
  - `tests/e2e/blog.spec.ts` currently has one smoke test: curated invoice guide visible and starter post hidden.
  - `npm run test:e2e -- --list` reports `Total: 11 tests in 4 files`.
- Live site verification:
  - `https://latticeplugins.com/shop/` returned HTTP `200`, contained all 7 official Lattice products, and contained none of the removed/merged product names checked.
  - `https://latticeplugins.com/blog/` returned HTTP `200`, contained `WooCommerce invoice automation for EU VAT stores`, contained `Hello world!` zero times, and rendered `33` `/blog/` hrefs.

---

## Single highest-value Developer task

### Task 1: Add guide-card count and unique-href assertions to `blog.spec.ts`

**Objective:** Prevent silent regressions in the curated `/blog/` guide-card grid by asserting the current 33 guide links render exactly once each and stay unique.

**Files:**
- Modify: `tests/e2e/blog.spec.ts`
- Reference only: `src/app/blog/guide-cards.ts`
- Do not modify: `src/app/blog/guide-cards.ts`, `src/app/blog/page.tsx`, individual blog article pages, WordPress production posts, WooCommerce catalog/products, checkout/payment specs, Stripe settings, `.env*` files.

**Step 1: Confirm clean working tree**

Run from `/Users/minion/Developer/latticeplugins-frontend`:

```bash
git status --short
```

Expected: no output. Stop if unrelated source changes are present. Generated `test-results/` or `playwright-report/` may be removed with `rm -rf test-results playwright-report`.

**Step 2: Snapshot current blog test state**

Run:

```bash
npm run test:e2e -- tests/e2e/blog.spec.ts
```

Expected before change: PASS — the existing blog smoke test still verifies the invoice automation guide is visible and `Hello world!` is hidden.

**Step 3: Add constants for expected guide-card integrity**

At the top of `tests/e2e/blog.spec.ts`, below the import, add:

```ts
const EXPECTED_CURATED_GUIDE_COUNT = 33;
const EXPECTED_GUIDE_HREF_PREFIX = "/blog/";
```

Do not import app code into the Playwright test. The purpose is to catch rendered-output regressions against the public route, not to duplicate the same source data path.

**Step 4: Add one focused integrity test**

Append this second test to `tests/e2e/blog.spec.ts`:

```ts
test("blog page renders each curated guide link exactly once", async ({ page }) => {
  await page.goto("/blog/", { waitUntil: "domcontentloaded" });

  const guideHrefs = await page
    .locator(`main a[href^="${EXPECTED_GUIDE_HREF_PREFIX}"]`)
    .evaluateAll((links) =>
      links
        .map((link) => link.getAttribute("href"))
        .filter((href): href is string => Boolean(href)),
    );

  expect(guideHrefs).toHaveLength(EXPECTED_CURATED_GUIDE_COUNT);
  expect(new Set(guideHrefs).size).toBe(EXPECTED_CURATED_GUIDE_COUNT);
  expect(guideHrefs).toContain("/blog/woocommerce-invoice-automation");
  expect(guideHrefs).toContain("/blog/woocommerce-purchase-order-invoices");
});
```

Notes:
- Scope to `main a[href^="/blog/"]` so this catches the currently rendered curated guide links.
- Keep the test read-only. It must not add to cart, submit checkout, mutate WordPress, or call WooCommerce write endpoints.
- Keep the two sentinel hrefs: one original guide (`woocommerce-invoice-automation`) and one latest added guide (`woocommerce-purchase-order-invoices`).

**Step 5: Run the focused blog spec**

Run:

```bash
npm run test:e2e -- tests/e2e/blog.spec.ts
```

Expected: PASS — 2 blog tests pass.

**Step 6: Verify discovery count intentionally increased**

Run:

```bash
npm run test:e2e -- --list
```

Expected output includes:

```text
[chromium] › blog.spec.ts:3:5 › blog page shows curated invoice guides without default starter posts
[chromium] › blog.spec.ts:<line>:5 › blog page renders each curated guide link exactly once
Total: 12 tests in 4 files
```

**Step 7: Run the full smoke suite**

Run:

```bash
npm run test:e2e
```

Expected: PASS — 12 Chromium tests pass.

**Step 8: Build-check the frontend**

Run:

```bash
npm run build
```

Expected: Next.js production build succeeds. This is a test-only change, so build failures are unexpected; investigate only if the test file change surfaced an existing TypeScript/config issue.

**Step 9: Remove generated artifacts**

Run:

```bash
rm -rf test-results playwright-report .next
```

Expected: generated artifacts are absent from `git status --short`.

**Step 10: Commit only the smoke-test improvement**

Run:

```bash
git add tests/e2e/blog.spec.ts
git commit -m "test: cover blog guide link integrity"
```

Expected: commit succeeds and contains only `tests/e2e/blog.spec.ts`.

---

## Acceptance criteria

- `tests/e2e/blog.spec.ts` has a second test that asserts:
  - exactly `33` rendered `/blog/` guide links under `main`,
  - all rendered guide hrefs are unique,
  - `/blog/woocommerce-invoice-automation` is present,
  - `/blog/woocommerce-purchase-order-invoices` is present.
- Existing starter-post hiding assertions remain intact.
- `npm run test:e2e -- tests/e2e/blog.spec.ts` passes with 2 blog tests.
- `npm run test:e2e -- --list` reports `Total: 12 tests in 4 files`.
- `npm run test:e2e` passes with 12 tests.
- `npm run build` passes.
- No production data, WooCommerce settings, checkout/payment behavior, Stripe settings, guide-card data, article content, or `.env*` files are changed.
- Commit message: `test: cover blog guide link integrity`.

---

## Next task after this ships

If the integrity smoke test passes and is committed, update `docs/testing.md` to document 12 tests / 4 files and then pick the next highest-value small task from the queue: either a Stripe live-key handoff checklist or one product-page conversion polish slice.
