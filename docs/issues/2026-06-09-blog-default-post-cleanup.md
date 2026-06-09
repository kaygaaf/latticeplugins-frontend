# Blog Default Post Cleanup Implementation Plan

> **For Hermes:** Use subagent-driven-development skill to implement this plan task-by-task.

**Goal:** Remove the default WordPress “Hello world!” post from the public blog experience and add a small regression guard so placeholder content cannot reappear.

**Architecture:** This is a frontend-only revenue/SEO polish fix. Keep the existing WordPress REST integration, but filter default starter posts at the blog rendering boundary and cover `/blog/` with one read-only Playwright smoke test. Do not edit WordPress production data, WooCommerce products, checkout/payment settings, Stripe settings, or hardcoded invoice guide content.

**Tech Stack:** Next.js 14 App Router, TypeScript, WordPress REST API client in `src/lib/wordpress.ts`, `@playwright/test` Chromium smoke suite.

---

## Verified context from PM run — 2026-06-09

- Current host time: `2026-06-09 05:13:02 CEST`.
- Required project context was read before planning:
  - Lattice Plugins skill content loaded in this run.
  - `/Users/minion/Library/Mobile Documents/iCloud~md~obsidian/Documents/Hermes/01 - Projects/Lattice Plugins/README.md`
  - `/Users/minion/Library/Mobile Documents/iCloud~md~obsidian/Documents/Hermes/01 - Projects/Lattice Plugins/Issues and Blockers.md`
  - `/Users/minion/Library/Mobile Documents/iCloud~md~obsidian/Documents/Hermes/01 - Projects/Lattice Plugins/Roadmap.md`
  - `/Users/minion/Library/Mobile Documents/iCloud~md~obsidian/Documents/Hermes/01 - Projects/Lattice Plugins/Decisions.md`
  - `/Users/minion/Library/Mobile Documents/iCloud~md~obsidian/Documents/Hermes/01 - Projects/Lattice Plugins/Reminders.md`
- Frontend repo verification:
  - Latest relevant frontend commit is `6abdb144 test: cover product detail smoke paths`; subsequent commits added invoice-guide content.
  - `tests/e2e/catalog.spec.ts` now contains the product-detail smoke loop from the previous PM plan.
  - `npm run test:e2e -- --list` reports `Total: 10 tests in 3 files`.
  - `npm run test:e2e` passed: `10 passed (15.0s)`.
- Live site/API verification:
  - `https://latticeplugins.com/` returned HTTP `200`.
  - `https://latticeplugins.com/shop/` returned HTTP `200`, contained all 7 official products, and contained none of the removed/merged product names checked.
  - `https://latticeplugins.com/sitemap.xml` returned HTTP `200` with `application/xml; charset=UTF-8`.
  - `https://latticeplugins.com/blog/` returned HTTP `200`; the HTML contains both invoice-guide content and `Hello world`.
  - `https://latticeplugins.com/wp-json/wp/v2/posts?per_page=20&_fields=id,slug,title,link,status,date` returned exactly one WordPress post: ID `1`, slug `hello-world`, title `Hello world!`, date `2026-05-28T15:59:54`.
- Source verification:
  - `src/app/blog/page.tsx` renders hardcoded buyer-intent invoice guide cards at lines 13–338.
  - The same page renders dynamic WordPress posts from `getPosts(10)` at lines 340–356, which is why the default `hello-world` post appears below the curated guide cards.
  - `src/lib/wordpress.ts` exposes `getPosts(per_page = 10)` at lines 34–36 and currently returns all posts from the REST API without filtering starter content.

---

## Single highest-value Developer task

### Task 1: Filter starter WordPress posts from `/blog/` and add a blog smoke test

**Objective:** Ensure the public blog page only shows intentional Lattice content by hiding the default WordPress `hello-world` starter post and guarding the behavior with Playwright.

**Files:**
- Modify: `src/app/blog/page.tsx`
- Create: `tests/e2e/blog.spec.ts`
- Do not modify: `src/app/blog/[slug]/**`, `src/app/product/**`, `src/app/shop/**`, WooCommerce product data, checkout/payment specs, Stripe settings, WordPress production posts, or `.env*` files.

**Step 1: Confirm clean working tree**

Run from `/Users/minion/Developer/latticeplugins-frontend`:

```bash
git status --short
```

Expected: no output, or only PM-created docs if they have not yet been committed. Do not mix unrelated source changes into the implementation commit.

**Step 2: Write the failing blog smoke test**

Create `tests/e2e/blog.spec.ts`:

```ts
import { expect, test } from "@playwright/test";

test("blog page shows curated invoice guides without default starter posts", async ({ page }) => {
  await page.goto("/blog/", { waitUntil: "domcontentloaded" });

  await expect(page).toHaveURL(/\/blog\/?$/);
  await expect(page.getByRole("heading", { name: "Blog", exact: true })).toBeVisible();
  await expect(
    page.getByRole("link", {
      name: "WooCommerce invoice automation for EU VAT stores",
      exact: true,
    }),
  ).toBeVisible();
  await expect(page.getByRole("link", { name: "Hello world!", exact: true })).toHaveCount(0);
  await expect(page.getByText("Welcome to WordPress", { exact: false })).toHaveCount(0);
});
```

**Step 3: Run the focused test and verify it fails first**

Run:

```bash
npm run test:e2e -- tests/e2e/blog.spec.ts
```

Expected before implementation: FAIL because `/blog/` currently renders a `Hello world!` link from the WordPress REST post list.

**Step 4: Implement the minimal filter in the blog page**

Modify `src/app/blog/page.tsx` near the top of `BlogPage()`:

```tsx
export default async function BlogPage() {
  const posts = (await getPosts(10)).filter((post: any) => post?.slug !== "hello-world");
```

Notes:
- Keep this page-level filter intentionally small; do not change `getPosts()` globally, because other future screens may need raw WordPress posts.
- Do not delete the WordPress post from production in this task. This plan is production-safe without requiring admin credentials or data mutation.

**Step 5: Re-run the focused test and verify pass**

Run:

```bash
npm run test:e2e -- tests/e2e/blog.spec.ts
```

Expected after implementation: PASS — 1 Chromium test passes.

**Step 6: Run the full smoke suite**

Run:

```bash
npm run test:e2e
```

Expected: PASS — 11 Chromium tests pass total: 8 catalog/product tests, 1 blog test, 1 checkout payment-method test, and 1 checkout routing test.

**Step 7: Prove discovery includes the new blog test**

Run:

```bash
npm run test:e2e -- --list
```

Expected output includes:

```text
[chromium] › blog.spec.ts:3:5 › blog page shows curated invoice guides without default starter posts
Total: 11 tests in 4 files
```

Line numbers may differ; the contract is 11 tests in 4 files with one blog smoke test.

**Step 8: Remove generated Playwright artifacts**

Run:

```bash
rm -rf test-results playwright-report
```

Expected: generated Playwright artifacts are absent from `git status --short`.

**Step 9: Commit only the source/test change**

Run:

```bash
git add src/app/blog/page.tsx tests/e2e/blog.spec.ts
git commit -m "test: hide default blog starter post"
```

Expected: commit succeeds and includes only `src/app/blog/page.tsx` and `tests/e2e/blog.spec.ts`.

**Step 10: Verify final repo state**

Run:

```bash
git status --short
git log --oneline -3
```

Expected:
- No `test-results/` or `playwright-report/` entries.
- Latest commit is `test: hide default blog starter post`.
- If PM planning docs remain untracked/modified, leave them alone unless explicitly assigned.

---

## Acceptance criteria

- `/blog/` no longer renders a visible `Hello world!` starter-post link.
- `/blog/` no longer renders `Welcome to WordPress` starter-post copy.
- Existing curated invoice-guide cards remain visible, including `WooCommerce invoice automation for EU VAT stores`.
- `tests/e2e/blog.spec.ts` exists and asserts the intended blog state.
- `npm run test:e2e -- tests/e2e/blog.spec.ts` passes.
- `npm run test:e2e` passes with 11 total tests.
- `npm run test:e2e -- --list` reports `Total: 11 tests in 4 files`.
- No WooCommerce product data, checkout/payment settings, Stripe settings, or production WordPress posts are changed.
- Commit exists with message `test: hide default blog starter post`.

---

## Next task after this ships

If the blog still relies on hardcoded guide cards after this cleanup, extract the invoice-guide card data into a typed array/component so future marketing content additions do not require repetitive JSX edits. Do not do that extraction in this task.
