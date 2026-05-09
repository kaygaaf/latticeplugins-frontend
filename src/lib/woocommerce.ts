const WP_REST_URL = process.env.NEXT_PUBLIC_WORDPRESS_URL || 'https://latticeplugins.com/wp';
const WC_API_URL = `${WP_REST_URL}/wp-json/wc/v3`;
const CONSUMER_KEY = process.env.WC_CONSUMER_KEY || '';
const CONSUMER_SECRET = process.env.WC_CONSUMER_SECRET || '';

export async function getProducts() {
  const url = new URL(`${WC_API_URL}/products`);
  url.searchParams.set('consumer_key', CONSUMER_KEY);
  url.searchParams.set('consumer_secret', CONSUMER_SECRET);
  url.searchParams.set('status', 'publish');
  url.searchParams.set('per_page', '100');

  const res = await fetch(url.toString(), {
    next: { revalidate: 60 }
  });
  if (!res.ok) {
    console.error('WC API error:', res.status, await res.text());
    return [];
  }
  return res.json();
}

export async function getProductBySlug(slug: string) {
  const url = new URL(`${WC_API_URL}/products`);
  url.searchParams.set('consumer_key', CONSUMER_KEY);
  url.searchParams.set('consumer_secret', CONSUMER_SECRET);
  url.searchParams.set('slug', slug);

  const res = await fetch(url.toString(), {
    next: { revalidate: 60 }
  });
  if (!res.ok) return null;
  const products = await res.json();
  return products[0] || null;
}

export async function getProductVariations(productId: number) {
  const url = new URL(`${WC_API_URL}/products/${productId}/variations`);
  url.searchParams.set('consumer_key', CONSUMER_KEY);
  url.searchParams.set('consumer_secret', CONSUMER_SECRET);

  const res = await fetch(url.toString(), {
    next: { revalidate: 60 }
  });
  if (!res.ok) return [];
  return res.json();
}
