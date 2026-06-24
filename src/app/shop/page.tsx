import Link from "next/link";
import Image from "next/image";
import { getProducts } from "@/lib/woocommerce";
import { stripHtml } from "@/lib/text";

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

export default async function ShopPage() {
  const products = await getProducts();

  return (
    <main className="min-h-screen p-8 max-w-6xl mx-auto">
      <h1 className="text-4xl font-bold mb-8 text-center">Shop</h1>
      <p className="sr-only">
        Official Lattice catalog: Lattice Commerce Suite, Lattice Core, Lattice CRM, Lattice Migrate,
        Lattice Stripe Payments, Lattice Subscribify, and Lattice SEO.
      </p>

      <section className="mb-10 overflow-hidden rounded-2xl border border-blue-100 bg-gradient-to-br from-blue-950 via-slate-900 to-indigo-900 text-white shadow-lg">
        <div className="grid grid-cols-1 lg:grid-cols-[1.4fr_0.9fr] gap-6 p-6 md:p-8 items-center">
          <div>
            <p className="uppercase tracking-[0.25em] text-xs text-blue-200 mb-3">Newest official Lattice plugin</p>
            <h2 className="text-3xl font-bold mb-3">Launch technical SEO without another subscription.</h2>
            <p className="text-blue-50 leading-relaxed mb-5">
              Lattice SEO adds XML sitemaps, Schema.org structured data, Open Graph previews, and WooCommerce SEO foundations for a one-time €49 license.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                href="/product/lattice-seo"
                className="bg-green-500 text-white px-6 py-3 rounded-xl font-semibold hover:bg-green-400 transition text-center"
              >
                View Lattice SEO
              </Link>
              <Link
                href="/shop"
                className="border border-white/25 bg-white/10 px-6 py-3 rounded-xl font-semibold hover:bg-white/15 transition text-center"
              >
                Compare all 7 plugins
              </Link>
            </div>
          </div>
          <div className="rounded-2xl bg-white text-slate-900 p-5">
            <p className="text-sm uppercase tracking-widest text-slate-500 mb-3">Included SEO foundations</p>
            <ul className="space-y-3 text-sm text-slate-700">
              <li className="flex gap-2"><span className="text-green-600 font-bold">✓</span><span>Generate XML sitemaps for pages, posts, and products</span></li>
              <li className="flex gap-2"><span className="text-green-600 font-bold">✓</span><span>Add Schema.org structured data and breadcrumb signals</span></li>
              <li className="flex gap-2"><span className="text-green-600 font-bold">✓</span><span>Control Open Graph and Twitter Card previews</span></li>
              <li className="flex gap-2"><span className="text-green-600 font-bold">✓</span><span>Improve WooCommerce product metadata without SaaS pricing</span></li>
            </ul>
          </div>
        </div>
      </section>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product: any) => (
          <div key={product.id} className="border rounded-lg p-6 hover:shadow-lg transition bg-white">
            {product.images?.[0] && (
              <Image
                src={product.images[0].src}
                alt={product.name}
                width={300}
                height={200}
                className="w-full h-48 object-cover rounded mb-4"
              />
            )}
            <h2 className="text-xl font-semibold mb-2">
              <Link href={`/product/${product.slug}`} className="hover:text-blue-600 transition">
                {product.name}
              </Link>
            </h2>
            <p className="text-gray-600 mb-4 line-clamp-2">
              {stripHtml(product.short_description || product.description)}
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:items-center sm:justify-between">
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
    </main>
  );
}
