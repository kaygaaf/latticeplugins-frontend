import Link from "next/link";
import Image from "next/image";
import { getProducts } from "@/lib/woocommerce";
import { getPosts } from "@/lib/wordpress";
import { stripHtml } from "@/lib/text";
import { blogGuideCards, guideCardThemeClasses } from "./blog/guide-cards";

export const dynamic = "force-dynamic";

function formatPrice(price: string | number): string {
  const num = typeof price === "string" ? parseFloat(price) : price;
  if (isNaN(num) || num <= 0) return "Free";
  return `€${num.toFixed(2)}`;
}

function isFree(price: string | number): boolean {
  const num = typeof price === "string" ? parseFloat(price) : price;
  return isNaN(num) || num <= 0;
}

function getCartUrl(productId: number): string {
  return `https://latticeplugins.com/cart/?add-to-cart=${productId}`;
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
    <main className="min-h-screen p-8 max-w-6xl mx-auto">
      {/* Hero Section */}
      <section className="text-center py-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-2xl mb-8">
        <p className="uppercase tracking-[0.25em] text-sm text-blue-100 mb-4">WordPress and WooCommerce plugins</p>
        <h1 className="text-5xl font-bold mb-4">Practical plugins for WooCommerce stores and WordPress businesses.</h1>
        <p className="text-xl mb-8 max-w-3xl mx-auto">
          Browse the official 7-product Lattice catalog: Lattice Commerce Suite, Lattice Core, Lattice CRM,
          Lattice Migrate, Lattice Stripe Payments, Lattice Subscribify, and Lattice SEO.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/compare"
            className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition inline-block"
          >
            Compare all 7 plugins
          </Link>
          <Link
            href="/product/lattice-commerce-suite"
            className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-blue-600 transition inline-block"
          >
            View Commerce Suite
          </Link>
        </div>
      </section>

      {/* Products Grid */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8 text-center">Official 7-product catalog</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
          {catalogProducts.map((product: any) => (
            <div key={product.id} className="border rounded-lg p-6 hover:shadow-lg transition bg-white w-full max-w-sm">
              {product.images?.[0] && (
                <Image
                  src={product.images[0].src}
                  alt={product.name}
                  width={300}
                  height={200}
                  className="w-full h-48 object-cover rounded mb-4"
                />
              )}
              <h3 className="text-xl font-semibold mb-2">
                <Link href={`/product/${product.slug}`} className="hover:text-blue-600 transition">
                  {product.name}
                </Link>
              </h3>
              <p className="text-gray-600 mb-4 line-clamp-2">
                {stripHtml(product.short_description || product.description)}
              </p>
              <div className="flex flex-col sm:flex-row gap-2 sm:items-center sm:justify-between">
                <span className="text-2xl font-bold text-blue-600">
                  {formatPrice(product.price)}
                </span>
                <div className="flex flex-col sm:flex-row gap-2">
                  <a
                    href={getCartUrl(product.id)}
                    className="bg-green-600 text-white px-4 py-2 rounded text-center font-semibold hover:bg-green-700 transition"
                  >
                    {isFree(product.price) ? "Download Free" : "Add to Cart"}
                  </a>
                  <Link
                    href={`/product/${product.slug}`}
                    className="border border-slate-200 px-4 py-2 rounded text-center hover:border-blue-500 hover:text-blue-600 transition"
                  >
                    Details
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Recent Blog Posts */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8 text-center">Latest from the Blog</h2>
        {realPosts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {realPosts.map((post: any) => (
              <article key={post.id} className="border rounded-lg p-6 bg-white">
                <h3 className="text-xl font-semibold mb-2">
                  <Link href={`/blog/${post.slug}`} className="hover:text-blue-600 transition">
                    {post.title.rendered}
                  </Link>
                </h3>
                <p className="text-gray-600 line-clamp-3">
                  {stripHtml(post.excerpt.rendered)}
                </p>
              </article>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {featuredGuides.map((card) => {
              const [backgroundClasses, borderClass, eyebrowClass] =
                guideCardThemeClasses[card.theme].split(" ");

              return (
                <article
                  key={card.href}
                  className={`border rounded-lg p-6 hover:shadow-lg transition ${backgroundClasses} ${borderClass}`}
                >
                  <p className={`text-sm uppercase tracking-[0.2em] ${eyebrowClass} font-semibold mb-2`}>
                    {card.eyebrow}
                  </p>
                  <h3 className="text-xl font-semibold mb-2">
                    <Link href={card.href} className="hover:text-blue-600 transition">
                      {card.title}
                    </Link>
                  </h3>
                  <p className="text-gray-600 line-clamp-3">{card.description}</p>
                </article>
              );
            })}
          </div>
        )}
        <p className="text-center mt-8">
          <Link href="/blog" className="text-blue-600 font-semibold hover:underline">
            Browse all guides and articles →
          </Link>
        </p>
      </section>
    </main>
  );
}
