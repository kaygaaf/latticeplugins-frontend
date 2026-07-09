import Link from "next/link";
import Image from "next/image";
import { getProducts } from "@/lib/woocommerce";
import { getPosts } from "@/lib/wordpress";
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

export default async function Home() {
  const [products, posts] = await Promise.all([
    getProducts(),
    getPosts(3)
  ]);

  return (
    <main className="min-h-screen p-8 max-w-6xl mx-auto">
      {/* Hero Section */}
      <section className="text-center py-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-2xl mb-8">
        <p className="uppercase tracking-[0.25em] text-sm text-blue-100 mb-4">Revenue sprint focus</p>
        <h1 className="text-5xl font-bold mb-4">EU VAT invoices for WooCommerce stores that are tired of manual PDFs.</h1>
        <p className="text-xl mb-8 max-w-3xl mx-auto">
          Lattice Invoices is the focused WooCommerce sales path right now: VAT/BTW checkout fields,
          invoice numbering, PDF delivery, customer downloads, and refund credit notes for a €49 early-access workflow.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/woocommerce-eu-vat-invoices"
            className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition inline-block"
          >
            View WooCommerce invoice offer
          </Link>
          <Link
            href="/demo/lattice-invoices"
            className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-blue-600 transition inline-block"
          >
            See invoice workflow demo
          </Link>
        </div>
        <p className="text-sm text-blue-100 mt-5">
          Need another plugin? The official 7-product catalog is still available below and in the shop.
        </p>
      </section>

      <section className="mb-12 rounded-2xl border border-green-100 bg-green-50 p-6 md:p-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-center">
          <div className="lg:col-span-2">
            <p className="uppercase tracking-[0.25em] text-xs text-green-700 font-semibold mb-3">Invoice buyer shortcut</p>
            <h2 className="text-3xl font-bold mb-3">If your customers ask for corrected invoices, start here.</h2>
            <p className="text-slate-700 leading-relaxed">
              The invoice landing page now qualifies EU WooCommerce stores before purchase with a fit score, ROI argument,
              demo screens, setup guide, and email CTA that asks for the exact store details needed to close a paid early-access license.
            </p>
          </div>
          <div className="flex flex-col gap-3">
            <Link
              href="/woocommerce-eu-vat-invoices"
              className="bg-green-600 text-white px-5 py-3 rounded-xl text-center font-semibold hover:bg-green-700 transition"
            >
              Check invoice fit
            </Link>
            <Link
              href="/tools/woocommerce-invoice-roi-calculator"
              className="border border-green-200 bg-white px-5 py-3 rounded-xl text-center font-semibold hover:border-green-500 transition"
            >
              Calculate admin ROI
            </Link>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8 text-center">Our Plugins</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
          {products.map((product: any) => (
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
      {posts.length > 0 && (
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">Latest from the Blog</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {posts.map((post: any) => (
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
        </section>
      )}
    </main>
  );
}
