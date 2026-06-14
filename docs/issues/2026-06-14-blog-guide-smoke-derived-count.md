# Blog Guide Smoke Derived Count Implementation Plan

> **For Hermes:** Use subagent-driven-development skill to implement this plan task-by-task.

**Goal:** Make the `/blog/` guide-card integrity smoke test derive its expected card count and sentinels from the source-of-truth `blogGuideCards` data so the test catches real mismatches without breaking on every new guide article.

**Architecture:** Keep `src/app/blog/guide-cards.ts` as the single source of truth for curated guide card data. The Playwright test should import that data, compute expected count/unique hrefs, and compare the production `/blog/` DOM against it. Documentation should describe the dynamic guard instead of a brittle hardcoded count.

**Tech Stack:** Next.js App Router, TypeScript, Playwright, production-safe read-only smoke tests.

---

## Evidence from PM verification — 2026-06-14

- `src/app/blog/guide-cards.ts` currently contains **39** `href: "/blog/..."` entries and **39** unique hrefs.
- Production `https://latticeplugins.com/blog/` returns HTTP 200 and renders **39** `data-testid="blog-guide-card"` elements.
- `tests/e2e/blog.spec.ts` still hardcodes the older **38** count in both the test title and assertions.
- Focused verification command failed exactly on the stale count:

```bash
cd /Users/minion/Developer/latticeplugins-frontend
npm run test:e2e -- tests/e2e/blog.spec.ts
```

Observed failure excerpt:

```text
Expected: 38
Received: 39
blog guide cards keep the curated 38-guide set unique
```

## Why this is now the highest-value next task

The blog smoke count has drifted multiple times as new invoice guides ship. Updating `38` to `39` would restore the suite for one run, but it would preserve the failure mode. A derived-count smoke test is still small and shippable, while removing the recurring planning/developer churn.

## Acceptance criteria

- Modify only:
  - `tests/e2e/blog.spec.ts`
  - `docs/testing.md`
- Do **not** modify guide content, article pages, WooCommerce data, WordPress data, payment settings, `.env*`, or deployment files.
- `tests/e2e/blog.spec.ts` imports `blogGuideCards` from `../../src/app/blog/guide-cards`.
- The guide integrity test title no longer contains a numeric guide count. Use a durable title such as `blog guide cards match the curated source-of-truth set`.
- The expected count is computed from `blogGuideCards.length`.
- The expected unique href set is computed from `blogGuideCards.map((card) => card.href)`.
- The test asserts:
  - rendered card count equals `blogGuideCards.length`;
  - rendered href count equals `blogGuideCards.length`;
  - rendered unique href count equals the expected unique href count;
  - every source-of-truth href appears in the rendered page.
- Keep existing starter-post hiding assertions intact.
- `docs/testing.md` describes the blog smoke as guarding the dynamic curated guide source-of-truth set instead of a fixed 36/38/39-card count.
- `docs/testing.md` expected list excerpt reflects the new non-numeric test title and still reports `Total: 12 tests in 4 files`.
- Verification passes:
  - `npm run test:e2e -- tests/e2e/blog.spec.ts` → 2 passed.
  - `npm run test:e2e -- --list` → `Total: 12 tests in 4 files`.
  - `npm run test:e2e` → 12 passed.
  - `npm run build` → passes.
- Commit message: `test: derive blog guide smoke expectations`.

---

### Task 1: Derive blog smoke expectations from guide-card data

**Objective:** Remove hardcoded guide-card counts from the Playwright blog integrity test.

**Files:**
- Modify: `tests/e2e/blog.spec.ts`

**Step 1: Confirm the current failure**

Run:

```bash
cd /Users/minion/Developer/latticeplugins-frontend
npm run test:e2e -- tests/e2e/blog.spec.ts
```

Expected before the fix: FAIL with `Expected: 38` and `Received: 39`.

**Step 2: Update the test imports and constants**

At the top of `tests/e2e/blog.spec.ts`, add the source data import and computed expectations:

```ts
import { expect, test } from "@playwright/test";
import { blogGuideCards } from "../../src/app/blog/guide-cards";

const expectedGuideHrefs = blogGuideCards.map((card) => card.href);
const expectedUniqueGuideHrefs = new Set(expectedGuideHrefs);
```

**Step 3: Replace the hardcoded integrity test**

Use this structure for the second test:

```ts
test("blog guide cards match the curated source-of-truth set", async ({ page }) => {
  await page.goto("/blog/", { waitUntil: "domcontentloaded" });

  const guideCards = page.getByTestId("blog-guide-card");
  await expect(guideCards).toHaveCount(blogGuideCards.length);

  const guideHrefs = await guideCards.locator("a[href^='/blog/']").evaluateAll((links) =>
    links.map((link) => link.getAttribute("href")).filter(Boolean),
  );

  expect(guideHrefs).toHaveLength(blogGuideCards.length);
  expect(new Set(guideHrefs).size).toBe(expectedUniqueGuideHrefs.size);

  for (const href of expectedUniqueGuideHrefs) {
    expect(guideHrefs).toContain(href);
  }
});
```

**Step 4: Verify the focused blog spec**

Run:

```bash
npm run test:e2e -- tests/e2e/blog.spec.ts
```

Expected: 2 passed.

---

### Task 2: Update smoke-test documentation

**Objective:** Keep the testing docs aligned with the dynamic blog smoke guard.

**Files:**
- Modify: `docs/testing.md`

**Step 1: Update current coverage text**

Replace the fixed-count blog coverage sentence with wording equivalent to:

```md
- `tests/e2e/blog.spec.ts` — verifies `/blog/` renders curated invoice-guide content while hiding the default WordPress `hello-world` starter post, and compares rendered guide cards against the `blogGuideCards` source-of-truth data so counts and hrefs cannot drift.
```

**Step 2: Update the expected list excerpt**

Change the blog integrity test line to:

```text
[chromium] › blog.spec.ts:18:5 › blog guide cards match the curated source-of-truth set
```

Keep:

```text
Total: 12 tests in 4 files
```

**Step 3: Verify discovery**

Run:

```bash
npm run test:e2e -- --list
```

Expected: 12 tests in 4 files, with the new blog integrity test title.

---

### Task 3: Run full verification and commit

**Objective:** Prove the change is production-safe and leave a clean commit.

**Files:**
- Verify: `tests/e2e/blog.spec.ts`
- Verify: `docs/testing.md`

**Step 1: Run the full smoke suite**

```bash
npm run test:e2e
```

Expected: 12 passed.

**Step 2: Run the production frontend build**

```bash
npm run build
```

Expected: build completes successfully.

**Step 3: Clean generated Playwright artifacts if any**

```bash
rm -rf test-results playwright-report
```

**Step 4: Check the working tree**

```bash
git status --short
```

Expected: only `docs/testing.md` and `tests/e2e/blog.spec.ts` are modified.

**Step 5: Commit**

```bash
git add docs/testing.md tests/e2e/blog.spec.ts
git commit -m "test: derive blog guide smoke expectations"
```
