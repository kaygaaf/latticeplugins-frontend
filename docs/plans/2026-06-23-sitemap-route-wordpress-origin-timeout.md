# Sitemap Route WordPress Origin Timeout Implementation Plan

> **For Hermes:** Use subagent-driven-development skill to implement this plan task-by-task.

**Goal:** Make the public Next.js `/sitemap.xml` route fetch the current WordPress sitemap origin quickly instead of waiting on the removed `lattice-wp` Docker hostname.

**Architecture:** Add a tiny pure TypeScript URL builder for the sitemap upstream origin, use production-safe env fallback order, and add a lightweight Node guard script. Keep the sitemap XML merge behavior unchanged.

**Tech Stack:** Next.js 14 App Router route handler, TypeScript, Node ESM guard script, existing `npm run build`, production verification with `scripts/vps-infra-health.sh` from `latticeplugins-prod`.

---

## Verified Context

- Issue/spec: `docs/issues/2026-06-23-sitemap-route-wordpress-origin-timeout.md`.
- Production frontend container currently exposes `NEXT_PUBLIC_WORDPRESS_URL=https://latticeplugins.com/wp` and does **not** expose `WORDPRESS_INTERNAL_URL`.
- Production frontend container cannot resolve the legacy hostname `lattice-wp`.
- Current source uses `const WORDPRESS_ORIGIN = process.env.WORDPRESS_INTERNAL_URL || 'http://lattice-wp';`.
- Public `/sitemap.xml` currently returns valid XML but takes ~5.2s on repeated probes.
- `https://latticeplugins.com/wp/index.php?lattice_seo_sitemap=1` returns WordPress/Lattice SEO sitemap XML in ~0.4s.

---

### Task 1: Extract and test sitemap upstream URL resolution

**Objective:** Add a small, copy-pasteable guard proving `/wp` origins compose to `/wp/index.php?lattice_seo_sitemap=1` and the stale `http://lattice-wp` fallback is gone.

**Files:**
- Modify: `src/app/sitemap.xml/route.ts`
- Create: `scripts/check-sitemap-route-origin.mjs`
- Modify: `package.json`

**Step 1: Export URL helper from route file**

At the top of `src/app/sitemap.xml/route.ts`, replace:

```ts
export const dynamic = 'force-dynamic';

const WORDPRESS_ORIGIN = process.env.WORDPRESS_INTERNAL_URL || 'http://lattice-wp';
const SITE_URL = 'https://latticeplugins.com';
```

with:

```ts
export const dynamic = 'force-dynamic';

const DEFAULT_WORDPRESS_ORIGIN = 'https://latticeplugins.com/wp';
const WORDPRESS_ORIGIN = resolveWordPressOrigin();
const SITE_URL = 'https://latticeplugins.com';

export function resolveWordPressOrigin(env: NodeJS.ProcessEnv = process.env) {
  return (
    env.WORDPRESS_INTERNAL_URL ||
    env.NEXT_PUBLIC_WORDPRESS_URL ||
    DEFAULT_WORDPRESS_ORIGIN
  ).replace(/\/$/, '');
}

export function buildWordPressSitemapUrl(origin = WORDPRESS_ORIGIN) {
  const sitemapUrl = new URL(`${origin.replace(/\/$/, '')}/index.php`);
  sitemapUrl.searchParams.set('lattice_seo_sitemap', '1');
  return sitemapUrl;
}
```

**Step 2: Update GET to use helper**

Inside `GET()`, replace:

```ts
const sitemapUrl = new URL('/index.php', WORDPRESS_ORIGIN);
sitemapUrl.searchParams.set('lattice_seo_sitemap', '1');
```

with:

```ts
const sitemapUrl = buildWordPressSitemapUrl();
```

**Step 3: Create guard script**

Create `scripts/check-sitemap-route-origin.mjs`:

```js
import { readFileSync } from 'node:fs';
import { join } from 'node:path';

const routePath = join(process.cwd(), 'src/app/sitemap.xml/route.ts');
const source = readFileSync(routePath, 'utf8');

function assert(condition, message) {
  if (!condition) {
    console.error(`FAIL: ${message}`);
    process.exit(1);
  }
}

assert(!source.includes("|| 'http://lattice-wp'"), 'route no longer falls back to stale lattice-wp hostname');
assert(source.includes("const DEFAULT_WORDPRESS_ORIGIN = 'https://latticeplugins.com/wp'"), 'route has production-safe /wp default origin');
assert(source.includes('env.NEXT_PUBLIC_WORDPRESS_URL'), 'route falls back to NEXT_PUBLIC_WORDPRESS_URL when WORDPRESS_INTERNAL_URL is unset');
assert(source.includes('buildWordPressSitemapUrl'), 'route uses a dedicated sitemap URL builder');
assert(source.includes("/index.php`"), 'URL builder appends index.php to origins that may include /wp');
assert(source.includes("lattice_seo_sitemap', '1'"), 'URL builder requests the Lattice SEO sitemap query var');

console.log('PASS: sitemap route WordPress origin fallback is production-safe');
```

This is intentionally static because importing a Next route TypeScript file directly from Node would require extra test tooling that the repo does not currently use.

**Step 4: Wire script into npm test path**

In `package.json`, change:

```json
"test:seo": "node scripts/check-product-seo.mjs"
```

to:

```json
"test:seo": "node scripts/check-product-seo.mjs && node scripts/check-sitemap-route-origin.mjs"
```

**Step 5: Run guard to verify pass**

Run:

```bash
node scripts/check-sitemap-route-origin.mjs
```

Expected:

```text
PASS: sitemap route WordPress origin fallback is production-safe
```

**Step 6: Commit?**

Do not commit yet. Continue to build verification first.

---

### Task 2: Build and local test the frontend

**Objective:** Prove the route change compiles in the Next.js app.

**Files:**
- No additional edits unless the build fails.

**Step 1: Run the focused SEO test path**

Run:

```bash
npm run test:seo
```

Expected: existing product SEO checks pass and the new sitemap route guard prints `PASS: sitemap route WordPress origin fallback is production-safe`.

**Step 2: Run full build**

Run:

```bash
npm run build
```

Expected: Next.js production build completes successfully.

**Step 3: Commit frontend changes**

```bash
git add src/app/sitemap.xml/route.ts scripts/check-sitemap-route-origin.mjs package.json docs/issues/2026-06-23-sitemap-route-wordpress-origin-timeout.md docs/plans/2026-06-23-sitemap-route-wordpress-origin-timeout.md
git commit -m "fix: use current wordpress origin for sitemap"
git push origin main
```

---

### Task 3: Deploy and verify production sitemap latency

**Objective:** Ship the frontend route fix and prove `/sitemap.xml` no longer waits on the stale hostname.

**Files:**
- No source changes unless deploy verification fails.

**Step 1: Deploy using the established Lattice deploy path**

From the backend repo or any shell with VPS access, run:

```bash
ssh root@65.108.128.89 "ceo-deploy lattice"
```

Expected: deploy rebuilds/recreates the Coolify-era frontend container.

**Step 2: Probe sitemap three times**

Run:

```bash
python3 - <<'PY'
import time
import urllib.request

for i in range(1, 4):
    req = urllib.request.Request(
        'https://latticeplugins.com/sitemap.xml',
        headers={'User-Agent': 'Mozilla/5.0 LatticeDeveloper/1.0'},
    )
    start = time.time()
    with urllib.request.urlopen(req, timeout=20) as response:
        body = response.read()
        code = response.status
        ctype = response.headers.get('content-type', '')
    elapsed = time.time() - start
    print(f'run={i} code={code} time={elapsed:.6f} size={len(body)} ctype={ctype} has_urlset={b"<urlset" in body}')
    if code != 200 or b'<urlset' not in body or 'xml' not in ctype or elapsed >= 1.5:
        raise SystemExit(1)
PY
```

Expected: all three runs pass with `time < 1.5`.

**Step 3: Run infrastructure health**

From `~/Developer/latticeplugins-prod`, run:

```bash
scripts/vps-infra-health.sh
```

Expected:

```text
=== Summary: issues=0 ===
```

and no `/sitemap.xml` slow-route warning.

**Step 4: Visual inspection is not required**

This change only affects XML route generation. If the deploy script rebuilds the whole frontend and project policy requires visual inspection for all deploys, inspect `/shop/` and then clean up Chrome as documented in the Lattice skill.

---

### Task 4: Update queue after verification

**Objective:** Keep the PM queue aligned after the developer ships the fix.

**Files:**
- Modify: `/Users/minion/Developer/latticeplugins-prod/PLUGINS_QUEUE.md`

**Step 1: Add a Developer-run verification note**

Add a short section with:

- commit hash
- `npm run test:seo` result
- `npm run build` result
- deploy command result
- three sitemap timings
- `scripts/vps-infra-health.sh` summary

**Step 2: Promote the next backlog item**

If the sitemap fix is verified, promote the next highest-value task from the backlog rather than leaving this issue active.

**Step 3: Commit queue update**

```bash
cd /Users/minion/Developer/latticeplugins-prod
git add PLUGINS_QUEUE.md
git commit -m "docs: record sitemap latency fix verification"
git push origin main
```
