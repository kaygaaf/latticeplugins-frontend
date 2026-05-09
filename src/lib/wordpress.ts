const WP_REST_URL = process.env.NEXT_PUBLIC_WORDPRESS_URL || 'https://latticeplugins.com/wp';
const WP_API_URL = `${WP_REST_URL}/wp-json/wp/v2`;

export async function getPosts(per_page = 10) {
  const res = await fetch(`${WP_API_URL}/posts?per_page=${per_page}`, {
    next: { revalidate: 60 }
  });
  if (!res.ok) return [];
  return res.json();
}

export async function getPages() {
  const res = await fetch(`${WP_API_URL}/pages`, {
    next: { revalidate: 60 }
  });
  if (!res.ok) return [];
  return res.json();
}

export async function getPostBySlug(slug: string) {
  const res = await fetch(`${WP_API_URL}/posts?slug=${slug}`, {
    next: { revalidate: 60 }
  });
  if (!res.ok) return null;
  const posts = await res.json();
  return posts[0] || null;
}
