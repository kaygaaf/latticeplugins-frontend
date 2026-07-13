const WC_API_URL = process.env.WC_REST_URL || `${process.env.NEXT_PUBLIC_WORDPRESS_URL || 'https://latticeplugins.com'}/wp-json/wc/v3`;
const CONSUMER_KEY = process.env.WC_CONSUMER_KEY || process.env.WP_CONSUMER_KEY || '';
const CONSUMER_SECRET = process.env.WC_CONSUMER_SECRET || process.env.WP_CONSUMER_SECRET || '';

function getWooCommerceAuthHeader() {
  if (!CONSUMER_KEY || !CONSUMER_SECRET) {
    return {};
  }

  const token = Buffer.from(`${CONSUMER_KEY}:${CONSUMER_SECRET}`).toString('base64');
  const scheme = 'Basic';
  const headers: Record<string, string> = {};
  headers.Authorization = [scheme, token].join(' ');
  return headers;
}

async function fetchWooCommerceJson(url: URL) {
  return fetch(url.toString(), {
    headers: getWooCommerceAuthHeader(),
    next: { revalidate: 60 }
  });
}

export async function getProducts() {
  const url = new URL(`${WC_API_URL}/products`);
  url.searchParams.set('status', 'publish');
  url.searchParams.set('per_page', '100');

  const res = await fetchWooCommerceJson(url);
  if (!res.ok) {
    console.error('WC API error:', res.status, await res.text());
    return [];
  }
  return res.json();
}

export async function getProductBySlug(slug: string) {
  const url = new URL(`${WC_API_URL}/products`);
  url.searchParams.set('slug', slug);

  const res = await fetchWooCommerceJson(url);
  if (!res.ok) return null;
  const products = await res.json();
  return products[0] || null;
}

export async function getProductVariations(productId: number) {
  const url = new URL(`${WC_API_URL}/products/${productId}/variations`);

  const res = await fetchWooCommerceJson(url);
  if (!res.ok) return [];
  return res.json();
}
