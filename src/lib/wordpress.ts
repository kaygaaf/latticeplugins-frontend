function getWpApiUrl() {
  const configured = process.env.WP_REST_URL;

  // Coolify-era production no longer has a container named `lattice-wp` on the
  // frontend network. If an old env var is still injected, use the public REST
  // API instead so blog/home pages do not crash on DNS errors.
  if (configured && !configured.includes('lattice-wp')) {
    return configured.replace(/\/$/, '');
  }

  const wpOrigin = (process.env.NEXT_PUBLIC_WORDPRESS_URL || 'https://latticeplugins.com').replace(/\/$/, '');
  if (wpOrigin.endsWith('/wp')) {
    return `${wpOrigin.replace(/\/wp$/, '')}/wp-json/wp/v2`;
  }

  return `${wpOrigin}/wp-json/wp/v2`;
}

const WP_API_URL = getWpApiUrl();

async function fetchJsonOrFallback<T>(url: string, fallback: T): Promise<T> {
  try {
    const res = await fetch(url, {
      next: { revalidate: 60 },
    });

    if (!res.ok) return fallback;
    return (await res.json()) as T;
  } catch (error) {
    return fallback;
  }
}

export async function getPosts(per_page = 10) {
  return fetchJsonOrFallback<any[]>(`${WP_API_URL}/posts?per_page=${per_page}`, []);
}

export async function getPages() {
  return fetchJsonOrFallback<any[]>(`${WP_API_URL}/pages`, []);
}

export async function getPostBySlug(slug: string) {
  const posts = await fetchJsonOrFallback<any[]>(`${WP_API_URL}/posts?slug=${slug}`, []);
  return posts[0] || null;
}
