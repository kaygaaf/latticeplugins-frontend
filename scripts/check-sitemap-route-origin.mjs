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
