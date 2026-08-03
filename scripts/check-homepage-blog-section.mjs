import { readFileSync } from 'node:fs';

const homepageSource = readFileSync('src/app/page.tsx', 'utf8');

const failures = [];

// The WordPress backend still contains the default "Hello world!" post.
// The homepage must never render it in the "Latest from the Blog" section.
if (!homepageSource.includes('hello-world')) {
  failures.push('homepage does not filter out the WordPress "hello-world" placeholder post');
}

// When no real WP posts exist, the homepage must fall back to curated
// guide cards so the blog section is never empty or placeholder-only.
if (!homepageSource.includes('blogGuideCards')) {
  failures.push('homepage blog section has no curated guide-card fallback (blogGuideCards not referenced)');
}

if (failures.length > 0) {
  console.error('FAIL: homepage blog section guard failed');
  for (const failure of failures) {
    console.error(`- ${failure}`);
  }
  process.exit(1);
}

console.log('PASS: homepage blog section filters placeholder posts and has a curated fallback');
