import Link from "next/link";
import { getProducts } from "@/lib/woocommerce";
import { getPosts } from "@/lib/wordpress";
import { stripHtml } from "@/lib/text";
import { blogGuideCards, guideCardThemeClasses } from "./blog/guide-cards";
import ProductCard from "@/components/ProductCard";

export const dynamic = "force-dynamic";

function formatPrice(price: string | number): string {
  const num = typeof price === "string" ? parseFloat(price) : price;
  if (isNaN(num) || num <= 0) return "Free";
  return `€${num.toFixed(2)}`;
}

export default async function Home() {
  const [products, posts] = await Promise.all([
    getProducts(),
    getPosts(3)
  ]);
  // Never surface the WordPress "Hello world!" placeholder on the homepage.
  const realPosts = (Array.isArray(posts) ? posts : []).filter(
    (post: any) => post?.slug !== "hello-world"
  );
  const featuredGuides = blogGuideCards.slice(0, 3);
  const catalogProducts = (Array.isArray(products) ? products : []).filter(
    (product: any) => product?.slug !== "wordpress-plugin-upgrade-risk-audit"
  );

  return (
    <main className="min-h-screen">
      <section className="container-x pb-16 pt-14 lg:pt-20">
        <div className="grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.22em] text-blue-700">
              WordPress and WooCommerce plugins
            </p>
            <h1 className="font-display text-balance text-4xl font-bold leading-[1.05] tracking-tight text-slate-950 sm:text-5xl lg:text-5xl xl:text-6xl">
              Practical plugins for WooCommerce stores and WordPress businesses.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
              Browse the official 7-product Lattice catalog: Lattice Commerce Suite, Lattice Core, Lattice CRM,
              Lattice Migrate, Lattice Stripe Payments, Lattice Subscribify, and Lattice SEO.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/compare"
                className="inline-flex items-center justify-center rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-800"
              >
                Compare all 7 plugins
              </Link>
              <Link
                href="/product/lattice-commerce-suite"
                className="inline-flex items-center justify-center rounded-full border border-slate-200 px-6 py-3 text-sm font-semibold text-slate-700 transition hover:border-slate-300 hover:bg-white"
              >
                View Commerce Suite
              </Link>
            </div>
          </div>

          <aside className="rounded-3xl border border-slate-200 bg-white p-6 shadow-card sm:p-8">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-500">Official 7-product catalog</p>
                <h2 className="mt-2 font-display text-2xl font-bold text-slate-950">One stack. One-time pricing.</h2>
              </div>
              <Link href="/shop" className="text-sm font-semibold text-blue-700 hover:underline">
                Shop →
              </Link>
            </div>
            <div className="mt-6 divide-y divide-slate-100">
              {catalogProducts.map((product: any) => (
                <Link
                  key={product.id}
                  href={`/product/${product.slug}`}
                  className="flex items-center justify-between gap-4 py-3 transition hover:bg-slate-50/60"
                >
                  <span className="font-medium text-slate-800">{product.name}</span>
                  <span className="font-display text-sm font-bold text-slate-950">{formatPrice(product.price)}</span>
                </Link>
              ))}
            </div>
          </aside>
        </div>
      </section>

      <section className="container-x pb-16">
        <div className="mb-8 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-slate-500">Catalog</p>
            <h2 className="mt-2 font-display text-3xl font-bold text-slate-950">Official 7-product catalog</h2>
          </div>
          <Link href="/compare" className="text-sm font-semibold text-blue-700 hover:underline">
            Compare features →
          </Link>
        </div>
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 lg:[&>*:last-child]:col-start-2 xl:[&>*:last-child]:col-start-auto">
          {catalogProducts.map((product: any) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      <section className="container-x pb-20">
        <div className="mb-8 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-slate-500">Guides</p>
            <h2 className="mt-2 font-display text-3xl font-bold text-slate-950">Latest from the Blog</h2>
          </div>
          <Link href="/blog" className="text-sm font-semibold text-blue-700 hover:underline">
            Browse all guides and articles →
          </Link>
        </div>
        {realPosts.length > 0 ? (
          <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
            {realPosts.map((post: any) => (
              <article key={post.id} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:shadow-card">
                <h3 className="font-display text-xl font-semibold text-slate-950">
                  <Link href={`/blog/${post.slug}`} className="transition hover:text-blue-700">
                    {post.title.rendered}
                  </Link>
                </h3>
                <p className="mt-3 line-clamp-3 text-sm leading-6 text-slate-600">
                  {stripHtml(post.excerpt.rendered)}
                </p>
              </article>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
            {featuredGuides.map((card) => {
              const [backgroundClasses, borderClass, eyebrowClass] =
                guideCardThemeClasses[card.theme].split(" ");

              return (
                <article
                  key={card.href}
                  className={`rounded-2xl border p-6 shadow-sm transition hover:shadow-card ${backgroundClasses} ${borderClass}`}
                >
                  <p className={`text-xs font-semibold uppercase tracking-[0.2em] ${eyebrowClass}`}>
                    {card.eyebrow}
                  </p>
                  <h3 className="mt-2 font-display text-xl font-semibold text-slate-950">
                    <Link href={card.href} className="transition hover:text-blue-700">
                      {card.title}
                    </Link>
                  </h3>
                  <p className="mt-3 line-clamp-3 text-sm leading-6 text-slate-600">{card.description}</p>
                </article>
              );
            })}
          </div>
        )}
      </section>
    </main>
  );
}
