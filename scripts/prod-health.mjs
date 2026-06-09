const BASE_URL = (process.env.BASE_URL || 'https://latticeplugins.com').replace(/\/$/, '');

const OFFICIAL_PRODUCTS = [
  'Lattice Commerce Suite',
  'Lattice Core',
  'Lattice CRM',
  'Lattice Migrate',
  'Lattice Stripe Payments',
  'Lattice Subscribify',
  'Lattice SEO',
];

const REMOVED_OR_MERGED_PRODUCTS = [
  'Lattice Abandoned Cart',
  'Lattice Analytics',
  'Lattice Auto Updater',
  'Lattice Checkout Upsell',
  'Lattice Coupons',
  'Lattice Direct Checkout',
  'Lattice License Manager',
  'Lattice License Server',
  'Lattice Product Comparison',
  'Lattice Social Proof',
  'Lattice Trust Badges',
];

async function fetchText(path, options = {}) {
  const url = `${BASE_URL}${path}`;
  const response = await fetch(url, {
    redirect: 'follow',
    headers: {
      'user-agent': 'Lattice-Prod-Health/1.0',
      accept: options.accept || 'text/html,application/json',
    },
  });
  const body = await response.text();
  return { url, response, body };
}

function assert(condition, message) {
  if (!condition) {
    throw new Error(message);
  }
}

function count(haystack, needle) {
  return haystack.split(needle).length - 1;
}

async function checkHttp(path, expectedContentType) {
  const { url, response, body } = await fetchText(path);
  const contentType = response.headers.get('content-type') || '';
  assert(response.ok, `${url} returned HTTP ${response.status}`);
  assert(
    contentType.includes(expectedContentType),
    `${url} content-type was ${contentType}, expected ${expectedContentType}`,
  );
  return { url, status: response.status, contentType, body };
}

async function checkRedirect(path, expectedStatus, expectedLocation) {
  const url = `${BASE_URL}${path}`;
  const response = await fetch(url, {
    redirect: 'manual',
    headers: {
      'user-agent': 'Lattice-Prod-Health/1.0',
      accept: 'text/html,application/json',
    },
  });
  const location = response.headers.get('location') || '';

  assert(
    response.status === expectedStatus,
    `${url} returned HTTP ${response.status}; expected redirect status ${expectedStatus}`,
  );
  assert(
    location === expectedLocation,
    `${url} redirected to ${location || '(empty)'}; expected ${expectedLocation}`,
  );

  return { url, status: response.status, location };
}

async function main() {
  const home = await checkHttp('/', 'text/html');
  assert(home.body.includes('Lattice'), 'Homepage HTML does not include the Lattice brand');

  const shop = await checkHttp('/shop/', 'text/html');
  assert(shop.body.includes('<footer'), 'Shop page is missing the frontend footer');

  for (const product of OFFICIAL_PRODUCTS) {
    const occurrences = count(shop.body, product);
    assert(occurrences > 0, `Shop page is missing official product: ${product}`);
  }

  const productLinks = [...shop.body.matchAll(/href="\/product\/([^"]+)"/g)].map((match) => match[1]);
  const uniqueProductLinks = new Set(productLinks);
  assert(
    uniqueProductLinks.size === OFFICIAL_PRODUCTS.length,
    `Shop page has ${uniqueProductLinks.size} unique product links; expected ${OFFICIAL_PRODUCTS.length}`,
  );

  for (const product of REMOVED_OR_MERGED_PRODUCTS) {
    assert(!shop.body.includes(product), `Removed/merged product reappeared in shop: ${product}`);
  }

  const wpPosts = await checkHttp('/wp-json/wp/v2/posts?per_page=1', 'application/json');
  const posts = JSON.parse(wpPosts.body);
  assert(Array.isArray(posts), 'WP REST posts endpoint did not return a JSON array');

  const sitemap = await checkHttp('/sitemap.xml', 'application/xml');
  assert(
    sitemap.body.includes('<urlset') && sitemap.body.includes('https://latticeplugins.com'),
    'Sitemap XML is missing the urlset root or canonical site URL',
  );

  const cart = await checkHttp('/cart/', 'text/html');
  assert(cart.body.includes('data-page="cart"'), 'Cart route did not serve the WooCommerce cart page');

  const emptyCheckout = await checkRedirect('/checkout/', 302, 'https://latticeplugins.com/cart/');

  const wpAdmin = await fetchText('/wp-admin/');
  assert(
    wpAdmin.response.status === 200 && wpAdmin.body.includes('wp-login.php'),
    `/wp-admin/ did not route to the WordPress login screen; status=${wpAdmin.response.status}`,
  );

  console.log(JSON.stringify({
    ok: true,
    baseUrl: BASE_URL,
    checks: {
      home: home.status,
      shop: shop.status,
      officialProducts: OFFICIAL_PRODUCTS.length,
      productLinks: uniqueProductLinks.size,
      wpPosts: posts.length,
      sitemap: sitemap.status,
      cart: cart.status,
      emptyCheckoutRedirect: emptyCheckout.location,
      wpAdmin: wpAdmin.response.status,
    },
  }, null, 2));
}

main().catch((error) => {
  console.error(JSON.stringify({
    ok: false,
    baseUrl: BASE_URL,
    error: error.message,
  }, null, 2));
  process.exit(1);
});
