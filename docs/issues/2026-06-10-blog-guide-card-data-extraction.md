# Blog Guide Card Data Extraction Implementation Plan

> **For Hermes:** Use subagent-driven-development skill to implement this plan task-by-task.

**Goal:** Refactor the `/blog/` guide-card grid from 28 repeated JSX `<article>` blocks into a typed data array plus one reusable renderer, without changing public content or URLs.

**Architecture:** This is a frontend-only maintainability task. Keep `src/app/blog/page.tsx` as the route entry point, extract the curated guide-card metadata into `src/app/blog/guide-cards.ts`, and render the cards with a single `.map()` in the existing grid. The existing Playwright blog smoke test remains the behavior guard; no WordPress, WooCommerce, checkout, or Stripe state should change.

**Tech Stack:** Next.js 14 App Router, TypeScript, React Server Components, `next/link`, `@playwright/test` Chromium smoke suite.

---

## Verified context from PM run — 2026-06-10

- Current host time: `2026-06-10 05:13:05 CEST`.
- Required project context was read before planning:
  - Lattice Plugins skill content loaded in this run.
  - `/Users/minion/Library/Mobile Documents/iCloud~md~obsidian/Documents/Hermes/01 - Projects/Lattice Plugins/README.md`
  - `/Users/minion/Library/Mobile Documents/iCloud~md~obsidian/Documents/Hermes/01 - Projects/Lattice Plugins/Issues and Blockers.md`
  - `/Users/minion/Library/Mobile Documents/iCloud~md~obsidian/Documents/Hermes/01 - Projects/Lattice Plugins/Roadmap.md`
  - `/Users/minion/Library/Mobile Documents/iCloud~md~obsidian/Documents/Hermes/01 - Projects/Lattice Plugins/Decisions.md`
- Frontend repo verification:
  - Latest relevant shipped cleanup commit is `5d5e9830 test: hide default blog starter post`.
  - `npm run test:e2e -- --list` reports `Total: 11 tests in 4 files`.
  - `npm run test:e2e` passed: `11 passed (11.8s)`.
  - `src/app/blog/page.tsx` is now 399 lines and contains 28 repeated hardcoded guide-card `<article>` blocks / 28 hardcoded `/blog/` guide links before the dynamic WordPress post list.
- Live site/API verification:
  - `https://latticeplugins.com/shop` returned HTTP `200` and contained all 7 official shop products.
  - `https://latticeplugins.com/blog/` returned HTTP `200`, contained `WooCommerce invoice automation for EU VAT stores` twice, and contained `Hello world!` zero times / `Welcome to WordPress` zero times.
  - `https://latticeplugins.com/wp-json/wp/v2/posts?per_page=20&_fields=id,slug,title,link,status,date` still returns exactly one WordPress post: ID `1`, slug `hello-world`, title `Hello world!`.

---

## Single highest-value Developer task

### Task 1: Extract `/blog/` curated guide cards into typed data and keep smoke coverage green

**Objective:** Make future marketing/content additions safer by replacing 28 duplicated JSX cards in `src/app/blog/page.tsx` with a typed array and one reusable renderer, while preserving the exact public blog page content.

**Files:**
- Create: `src/app/blog/guide-cards.ts`
- Modify: `src/app/blog/page.tsx`
- Test existing: `tests/e2e/blog.spec.ts`
- Do not modify: WordPress production posts, WooCommerce catalog/products, checkout/payment specs, Stripe settings, `.env*` files, or individual article route files under `src/app/blog/*/page.tsx`.

**Step 1: Confirm clean working tree**

Run from `/Users/minion/Developer/latticeplugins-frontend`:

```bash
git status --short
```

Expected: no output. Stop if unrelated changes are present.

**Step 2: Snapshot current blog smoke state**

Run:

```bash
npm run test:e2e -- tests/e2e/blog.spec.ts
```

Expected before refactor: PASS — the existing blog smoke test confirms the curated invoice guide is visible and the default WordPress starter post is hidden.

**Step 3: Create the typed guide-card data file**

Create `src/app/blog/guide-cards.ts` with this shape:

```ts
export type BlogGuideCard = {
  href: `/blog/${string}`;
  eyebrow: string;
  title: string;
  description: string;
  theme: "blue" | "green" | "indigo" | "purple" | "cyan" | "sky" | "teal" | "amber" | "emerald" | "slate";
};

export const guideCardThemeClasses: Record<BlogGuideCard["theme"], string> = {
  blue: "bg-blue-50 border-blue-100 text-blue-700",
  green: "bg-green-50 border-green-100 text-green-700",
  indigo: "bg-indigo-50 border-indigo-100 text-indigo-700",
  purple: "bg-purple-50 border-purple-100 text-purple-700",
  cyan: "bg-cyan-50 border-cyan-100 text-cyan-700",
  sky: "bg-sky-50 border-sky-100 text-sky-700",
  teal: "bg-teal-50 border-teal-100 text-teal-700",
  amber: "bg-amber-50 border-amber-100 text-amber-700",
  emerald: "bg-emerald-50 border-emerald-100 text-emerald-700",
  slate: "bg-slate-50 border-slate-200 text-slate-700",
};

export const blogGuideCards: BlogGuideCard[] = [
  // Move the existing 28 hardcoded cards from src/app/blog/page.tsx here.
  // Preserve each card's href, eyebrow text, visible title, description text, and color family exactly.
  // Do not add, remove, rename, or reorder cards in this refactor.
];
```

When filling `blogGuideCards`, copy the 28 existing cards from `src/app/blog/page.tsx` in their current order. Convert each repeated JSX block to this object format:

```ts
{
  href: "/blog/woocommerce-invoice-automation",
  eyebrow: "Invoice automation guide",
  title: "WooCommerce invoice automation for EU VAT stores",
  description:
    "A buyer-intent automation checklist for invoice timing, BACS proformas, credit notes, VAT evidence, customer downloads, reminders, and accountant exports.",
  theme: "indigo",
},
```

Important preservation rules:
- Keep title capitalization and punctuation exactly as currently rendered.
- Keep each href exactly as currently rendered.
- Descriptions may become single-line strings, but the visible text must remain identical after whitespace normalization.
- Use the color family from the current classes: for example `bg-blue-50 border-blue-100` → `theme: "blue"`; `bg-slate-50 border-slate-200` → `theme: "slate"`.

**Step 4: Replace repeated JSX with one renderer**

In `src/app/blog/page.tsx`:

1. Keep `import Link from "next/link";`.
2. Add:

```ts
import { blogGuideCards, guideCardThemeClasses } from "./guide-cards";
```

3. Replace the entire hardcoded card list inside the first grid (`<div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">`) with:

```tsx
{blogGuideCards.map((card) => {
  const [backgroundClasses, borderClass, eyebrowClass] = guideCardThemeClasses[card.theme].split(" ");

  return (
    <article
      key={card.href}
      className={`border rounded-lg p-6 hover:shadow-lg transition ${backgroundClasses} ${borderClass}`}
    >
      <p className={`text-sm uppercase tracking-[0.2em] ${eyebrowClass} font-semibold mb-2`}>
        {card.eyebrow}
      </p>
      <h2 className="text-2xl font-semibold mb-2">
        <Link href={card.href} className="hover:text-blue-600">
          {card.title}
        </Link>
      </h2>
      <p className="text-gray-600 line-clamp-3">{card.description}</p>
    </article>
  );
})}
```

Do not touch the dynamic WordPress post filtering line:

```tsx
const posts = (await getPosts(10)).filter((post: any) => post?.slug !== "hello-world");
```

**Step 5: Run the focused blog smoke test**

Run:

```bash
npm run test:e2e -- tests/e2e/blog.spec.ts
```

Expected: PASS — curated guide still visible, default starter post still hidden.

**Step 6: Run the full smoke suite**

Run:

```bash
npm run test:e2e
```

Expected: PASS — 11 Chromium tests pass.

**Step 7: Verify test discovery stayed stable**

Run:

```bash
npm run test:e2e -- --list
```

Expected output includes:

```text
[chromium] › blog.spec.ts:3:5 › blog page shows curated invoice guides without default starter posts
Total: 11 tests in 4 files
```

**Step 8: Build-check the Next.js app**

Run:

```bash
npm run build
```

Expected: Next.js production build succeeds. If type errors occur in `guide-cards.ts`, fix only the new typed data/refactor code.

**Step 9: Remove generated artifacts**

Run:

```bash
rm -rf test-results playwright-report .next
```

Expected: generated artifacts are absent from `git status --short`.

**Step 10: Commit only the refactor**

Run:

```bash
git add src/app/blog/page.tsx src/app/blog/guide-cards.ts
git commit -m "refactor: extract blog guide card data"
```

Expected: commit succeeds and includes only the blog page refactor plus the new typed data file.

---

## Acceptance criteria

- `/blog/` still renders all 28 curated guide cards in the same order as before the refactor.
- Existing visible titles, hrefs, eyebrow labels, descriptions, and color families are preserved.
- `src/app/blog/page.tsx` no longer contains 28 repeated hardcoded card `<article>` blocks; it maps over `blogGuideCards` instead.
- `src/app/blog/guide-cards.ts` exports the typed data and theme class map.
- The dynamic WordPress post filter for `slug !== "hello-world"` remains intact.
- `npm run test:e2e -- tests/e2e/blog.spec.ts` passes.
- `npm run test:e2e` passes with 11 tests.
- `npm run test:e2e -- --list` still reports `Total: 11 tests in 4 files`.
- `npm run build` passes.
- No production data, WooCommerce settings, checkout/payment behavior, Stripe settings, or `.env*` files are changed.
- Commit message: `refactor: extract blog guide card data`.

---

## Next task after this ships

Add a small blog-list integrity smoke assertion that checks the curated guide link count (28) and the uniqueness of `/blog/...` guide hrefs. Do not combine that test expansion with the data extraction refactor unless the refactor reveals a duplicate/missing card.
