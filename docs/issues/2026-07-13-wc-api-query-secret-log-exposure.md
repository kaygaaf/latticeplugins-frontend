# WooCommerce REST Query Credential Log Exposure

**Date:** 2026-07-13
**Product area:** Next.js frontend ↔ WooCommerce REST API
**Severity:** High operational security hardening
**Status:** Ready for Developer

## Summary

The frontend WooCommerce REST client currently sends `consumer_key` and `consumer_secret` as URL query parameters. The public site still works, but the WordPress/Apache access log records full request URLs, so the bounded VPS health probe now sees WooCommerce REST credential parameters in recent logs.

This is not a frontend-visible outage, but it is the highest-value next hardening task because it creates unnecessary secret exposure in infrastructure logs.

## Verified evidence from 2026-07-13 PM run

- Host time checked: `2026-07-13 05:11:06 CEST`.
- Live public smoke is green: `python3 scripts/lattice_qa_security_smoke.py --live` passed homepage/shop/blog/WP REST/sitemap/checkout/CRM checks.
- VPS infrastructure health is green overall: `scripts/vps-infra-health.sh` ended `=== Summary: issues=0 ===`.
- The same VPS health run reported the new non-fatal credential-log signal:
  - `wc_consumer_key_log_lines=101`
  - `wc_consumer_secret_log_lines=101`
  - `WooCommerce REST consumer secrets appear in the bounded WordPress access-log tail (101 lines). Values were not printed; harden Apache/Coolify logging or migrate frontend auth away from query parameters.`
- Source inspection confirms the cause in `src/lib/woocommerce.ts`:
  - `getProducts()` appends `consumer_key` and `consumer_secret` to the URL.
  - `getProductBySlug()` appends `consumer_key` and `consumer_secret` to the URL.
  - `getProductVariations()` appends `consumer_key` and `consumer_secret` to the URL.
- A production-safe Basic Auth probe from inside the `lattice-frontend` container, without printing secret values, succeeded:
  - `basic_auth_http=200 content_type=application/json; charset=UTF-8 bytes=2190`
  - `json_list=yes count=1`

## Desired behavior

Frontend server-side WooCommerce REST requests must authenticate with an HTTP Basic Authorization header instead of query parameters, while preserving the same product data behavior and cache/revalidation settings.

## Acceptance criteria

- `src/lib/woocommerce.ts` no longer adds `consumer_key` or `consumer_secret` to any WooCommerce REST URL.
- The client constructs a Basic Auth header from `WC_CONSUMER_KEY` / `WC_CONSUMER_SECRET`, with the existing `WP_CONSUMER_*` fallback preserved if still required by production envs.
- A static guard script fails if `src/lib/woocommerce.ts` reintroduces WooCommerce credential query parameters.
- `npm run test:health`, `npm run test:seo`, and `npm run build` pass locally.
- After deploy, `/`, `/shop/`, and a representative `/product/<slug>/` route still render products.
- After enough cache/log churn, `scripts/vps-infra-health.sh` no longer reports fresh `wc_consumer_key_log_lines` / `wc_consumer_secret_log_lines` from frontend product fetches. Existing historical lines in bounded logs may remain briefly; the Developer should report whether the post-deploy count is unchanged, decreasing, or zero.

## Out of scope

- Do not rotate WooCommerce keys autonomously unless a human explicitly approves; this issue is about preventing new query-string leakage.
- Do not change Stripe, checkout, product catalog copy, or invoice-funnel content.
- Do not log or print WooCommerce key values in tests, deploy output, or troubleshooting commands.
