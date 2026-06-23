# Frontend sitemap route waits for stale WordPress internal origin

**Date found:** 2026-06-23  
**Risk:** Medium SEO/performance. `/sitemap.xml` is valid XML, but every public request spends about 5.2s waiting on an unreachable legacy WordPress hostname before falling back to frontend-only URLs.  
**Affected area:** `src/app/sitemap.xml/route.ts` in `latticeplugins-frontend`.

## Verified current state

On 2026-06-23, PM verification found the production site otherwise healthy:

```text
scripts/vps-infra-health.sh
=== Summary: issues=0 ===
```

The same health run reported a non-fatal sitemap latency warning:

```text
✓ /sitemap.xml -> 200|application/xml; charset=UTF-8|5.244328|https://latticeplugins.com/sitemap.xml
• Slow route warning: /sitemap.xml took 5.244328s (warn>3s)
```

A repeated public probe confirmed the latency is consistent and not a one-off:

```text
run=1 code=200 time=5.203273 size=14124 ctype=application/xml; charset=UTF-8
run=2 code=200 time=5.294868 size=14124 ctype=application/xml; charset=UTF-8
run=3 code=200 time=5.177722 size=14124 ctype=application/xml; charset=UTF-8
```

The first bytes prove the public response is XML:

```text
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
```

Production frontend container env/name discovery showed the route is using its stale fallback:

```text
NEXT_PUBLIC_WORDPRESS_URL=https://latticeplugins.com/wp
getent hosts lattice-wp -> no result
getent hosts wp-hrjz5z16j0j0fqsgux3th1j8 -> fdfe:bf98:3527::12
```

Source inspection shows why:

```ts
const WORDPRESS_ORIGIN = process.env.WORDPRESS_INTERNAL_URL || 'http://lattice-wp';
```

`WORDPRESS_INTERNAL_URL` is not set in the production `lattice-frontend` container, and `lattice-wp` is a pre-Coolify hostname that no longer resolves on the `coolify` network. The route therefore waits for the fetch to fail, then returns fallback XML.

The correct public WordPress-prefixed endpoint responds quickly:

```text
https://latticeplugins.com/wp/index.php?lattice_seo_sitemap=1
code 200 time 0.418 size 2198 ctype application/xml; charset=UTF-8 has_urlset True
```

Direct WordPress generation inside the current production WP container is also fast:

```text
count=13 time=0.003783 queries=43
```

## Problem

`src/app/sitemap.xml/route.ts` is still coupled to the legacy Docker Compose hostname `http://lattice-wp`. In the Coolify production architecture, the current frontend container does not have that DNS name, while it does have `NEXT_PUBLIC_WORDPRESS_URL=https://latticeplugins.com/wp`.

Because the fetch uses `cache: 'no-store'` and no explicit short timeout, every sitemap request pays the unresolved/upstream timeout before the catch-block fallback succeeds.

## User impact

Search crawlers and users requesting `/sitemap.xml` receive valid XML, but with a roughly five-second TTFB. This is an avoidable SEO and crawl-budget weakness, and the upstream WordPress sitemap entries are skipped whenever the fallback path is used.

## Recommended next developer task

Implement the focused plan at:

- `docs/plans/2026-06-23-sitemap-route-wordpress-origin-timeout.md`

Keep the scope small: fix origin resolution and add a regression guard so the route cannot silently reintroduce the stale `lattice-wp` default.

## Acceptance criteria

- `src/app/sitemap.xml/route.ts` uses `WORDPRESS_INTERNAL_URL` if set, otherwise falls back to `NEXT_PUBLIC_WORDPRESS_URL`, otherwise `https://latticeplugins.com/wp`.
- The route builds the upstream URL correctly when the origin includes `/wp`: `https://latticeplugins.com/wp/index.php?lattice_seo_sitemap=1`.
- Add a lightweight test/guard script proving the stale `http://lattice-wp` default is gone and `/wp/index.php` URL composition is covered.
- `npm run build` passes locally.
- After deploy, three public probes of `https://latticeplugins.com/sitemap.xml` return HTTP 200 XML and stay below 1.5s each.
- `scripts/vps-infra-health.sh` no longer reports the sitemap slow-route warning.

## Non-goals

- Do not redesign the sitemap URL list.
- Do not change WooCommerce catalog, checkout, Stripe, or WordPress plugin behavior.
- Do not rely on the ephemeral production WP container name in source code.
