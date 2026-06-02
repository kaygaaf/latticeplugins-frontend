# Playwright E2E Harness Implementation Plan

> **For Hermes:** Use subagent-driven-development skill to implement this plan task-by-task.

**Goal:** Add the first Playwright harness for Lattice Plugins frontend smoke tests so future Developer/CEO runs can automate catalog and checkout routing checks.

**Architecture:** This is a test-only frontend change. Add Playwright as a dev dependency, configure it to run against production by default (`https://latticeplugins.com`) with `BASE_URL` override support, and do not add any smoke specs in this task. The next task will add catalog and checkout specs after the harness exists.

**Tech Stack:** Next.js 14, npm, `@playwright/test`, Chromium.

---

## Verified context from PM run — 2026-06-02 05:11 CEST

- Vault/project note path expected by the Lattice skill (`/Users/minion/Hermes/01 - Projects/Lattice Plugins`) was not present on this host, so repo docs are the durable PM artifact for this run.
- Frontend repo head: `c004a6ae added invoice setup guide`.
- `package.json` scripts are currently `dev`, `build`, `lint`, `start`, and `test:seo`; there is no `test:e2e` script.
- No `*.spec.ts` files exist in `latticeplugins-frontend`.
- Production health check:
  - `https://latticeplugins.com/` returned HTTP 200 and contained all 7 official product names.
  - `https://latticeplugins.com/shop/` returned HTTP 200 at `/shop` and contained all 7 official product names.
  - Removed/merged product names were absent from `/shop` HTML.
  - Cookie-preserving checkout smoke path succeeded: `/cart/?add-to-cart=14` rendered `data-page="cart"`; `/checkout/` rendered `data-page="checkout"`, `Billing details`, and `Place order` without the empty-cart message.
- VPS container check returned: `lattice-frontend`, `lattice-wp`, and `lattice-db` all Up.

---

## Single highest-value Developer task

### Task 1: Install Playwright test dependency and add scripts

**Objective:** Add the Playwright test runner and config without changing production runtime dependencies or site behavior.

**Files:**
- Modify: `package.json`
- Modify: `package-lock.json`
- Create: `playwright.config.ts`

**Step 1: Install dependency**

Run from `/Users/minion/Developer/latticeplugins-frontend`:

```bash
npm install --save-dev @playwright/test
```

Expected:
- `package.json` gains `@playwright/test` under `devDependencies`.
- `package-lock.json` is updated.
- No production dependency is added.

**Step 2: Add npm scripts**

Modify only the `scripts` object in `package.json` to include the two new scripts while preserving existing scripts:

```json
{
  "dev": "next dev",
  "build": "next build",
  "lint": "next lint",
  "start": "next start",
  "test:seo": "node scripts/check-product-seo.mjs",
  "test:e2e": "playwright test",
  "test:e2e:headed": "playwright test --headed"
}
```

**Step 3: Create Playwright config**

Create `playwright.config.ts`:

```ts
import { defineConfig, devices } from "@playwright/test";

const baseURL = process.env.BASE_URL || "https://latticeplugins.com";

export default defineConfig({
  testDir: "./tests/e2e",
  timeout: 30_000,
  expect: {
    timeout: 10_000,
  },
  fullyParallel: false,
  retries: process.env.CI ? 2 : 0,
  reporter: [["list"]],
  use: {
    baseURL,
    trace: "retain-on-failure",
    screenshot: "only-on-failure",
  },
  projects: [
    {
      name: "chromium",
      use: { ...devices["Desktop Chrome"] },
    },
  ],
});
```

**Step 4: Install Chromium browser binary locally**

Run:

```bash
npx playwright install chromium
```

Expected: Chromium installation completes successfully.

**Step 5: Verify harness command is wired**

Run:

```bash
npm run test:e2e -- --list
```

Expected:
- Command exits successfully.
- It reports zero tests or no listed tests, because smoke specs are intentionally not part of Task 1.
- It does not attempt to place orders or require Stripe live keys.

**Step 6: Commit**

```bash
git add package.json package-lock.json playwright.config.ts
git commit -m "test: add playwright e2e harness"
```

---

## Acceptance criteria

- `@playwright/test` is present only in `devDependencies`.
- Existing scripts (`dev`, `build`, `lint`, `start`, `test:seo`) still exist.
- New scripts exist: `test:e2e`, `test:e2e:headed`.
- `playwright.config.ts` defaults to `https://latticeplugins.com` and supports `BASE_URL` override.
- `npx playwright install chromium` completed locally.
- `npm run test:e2e -- --list` runs without a harness/config error.
- No production code is modified.
- Commit exists with message `test: add playwright e2e harness`.

---

## Next task after this ships

Implement `tests/e2e/catalog.spec.ts` from `docs/plans/2026-05-31-checkout-catalog-smoke-tests.md` to lock the shop at exactly the 7 official products and assert removed/merged products stay absent.
