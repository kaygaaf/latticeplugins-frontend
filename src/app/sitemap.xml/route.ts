export const dynamic = 'force-dynamic';

const WORDPRESS_ORIGIN = process.env.WORDPRESS_INTERNAL_URL || 'http://lattice-wp';

export async function GET() {
  const sitemapUrl = new URL('/index.php', WORDPRESS_ORIGIN);
  sitemapUrl.searchParams.set('lattice_seo_sitemap', '1');

  try {
    const upstream = await fetch(sitemapUrl, {
      cache: 'no-store',
      headers: {
        Host: 'latticeplugins.com',
        Accept: 'application/xml,text/xml,*/*',
      },
    });

    const body = await upstream.text();

    if (!upstream.ok || !body.includes('<urlset')) {
      return new Response('Sitemap unavailable', {
        status: upstream.ok ? 502 : upstream.status,
        headers: { 'Content-Type': 'text/plain; charset=utf-8' },
      });
    }

    return new Response(body, {
      status: 200,
      headers: {
        'Content-Type': 'application/xml; charset=UTF-8',
        'Cache-Control': 'public, max-age=300, s-maxage=300',
      },
    });
  } catch (error) {
    return new Response('Sitemap unavailable', {
      status: 502,
      headers: { 'Content-Type': 'text/plain; charset=utf-8' },
    });
  }
}
