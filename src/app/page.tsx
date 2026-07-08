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
        <p className="uppercase tracking-[0.25em] text-sm text-blue-100 mb-4">Official Lattice plugin catalog</p>
        <h1 className="text-5xl font-bold mb-4">WooCommerce plugins for checkout, CRM, backups, payments, subscriptions, and SEO.</h1>
        <p className="text-xl mb-8 max-w-3xl mx-auto">
          Compare the 7 official Lattice products: Commerce Suite, Core, CRM, Migrate, Stripe Payments, Subscribify, and SEO.
          Lattice Commerce Suite, Lattice Core, Lattice CRM, Lattice Migrate, Lattice Stripe Payments, Lattice Subscribify, and Lattice SEO.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/product/lattice-seo"
            className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition inline-block"
          >
            View Lattice SEO
          </Link>
          <Link
            href="/shop"
            className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-blue-600 transition inline-block"
          >
            Compare all 7 plugins
          </Link>
        </div>
      </section>

      <section className="mb-12 rounded-2xl border border-emerald-200 bg-gradient-to-br from-emerald-50 to-white p-6 md:p-8 shadow-sm">
        <div className="grid grid-cols-1 lg:grid-cols-[1.4fr_1fr] gap-8 items-center">
          <div>
            <p className="uppercase tracking-[0.25em] text-xs text-emerald-700 font-semibold mb-3">
              Primary WooCommerce revenue focus
            </p>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Need EU VAT invoices, BTW fields, PDF attachments, or credit notes?
            </h2>
            <p className="text-slate-700 leading-relaxed mb-5">
              Lattice Invoices is the focused WooCommerce invoice workflow for EU stores that lose time on
              corrected invoices, missing VAT numbers, accountant exports, and support requests for lost PDFs.
              Request the €49 early-access license only if your store has a real B2B invoice problem.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                href="/woocommerce-eu-vat-invoices"
                className="bg-emerald-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-emerald-700 transition text-center"
              >
                View Lattice Invoices offer
              </Link>
              <Link
                href="/tools/woocommerce-invoice-roi-calculator"
                className="border border-emerald-300 text-emerald-800 px-6 py-3 rounded-xl font-semibold hover:bg-emerald-100 transition text-center"
              >
                Calculate invoice ROI
              </Link>
            </div>
          </div>
          <div className="rounded-2xl bg-white border border-emerald-100 p-5">
            <p className="font-semibold text-slate-900 mb-3">Invoice-fit signals</p>
            <ul className="space-y-3 text-sm text-slate-700">
              <li>✓ Customers ask for corrected VAT/BTW invoices after payment</li>
              <li>✓ Your checkout needs company, VAT ID, PO, or invoice-email fields</li>
              <li>✓ Refunds require credit notes your accountant can trace</li>
              <li>✓ Customers need My Account invoice downloads instead of support tickets</li>
            </ul>
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
