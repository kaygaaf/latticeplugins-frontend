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
        <p className="uppercase tracking-[0.25em] text-sm text-blue-100 mb-4">WordPress and WooCommerce plugins</p>
        <h1 className="text-5xl font-bold mb-4">Practical plugins for WooCommerce stores and WordPress businesses.</h1>
        <p className="text-xl mb-8 max-w-3xl mx-auto">
          Browse the official 7-product Lattice catalog: Lattice Commerce Suite, Lattice Core, Lattice CRM,
          Lattice Migrate, Lattice Stripe Payments, Lattice Subscribify, and Lattice SEO.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/shop"
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

      {/* Revenue focus: Lattice Invoices */}
      <section className="mb-16 rounded-3xl border border-emerald-100 bg-emerald-50 p-8 lg:p-10 shadow-sm">
        <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-8 items-center">
          <div>
            <p className="uppercase tracking-[0.25em] text-sm text-emerald-700 font-semibold mb-3">
              WooCommerce EU invoice workflow
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-950 mb-4">
              Need VAT/BTW invoice PDFs, credit notes, and B2B checkout fields?
            </h2>
            <p className="text-lg text-slate-700 leading-relaxed mb-6">
              The strongest current Lattice offer is Lattice Invoices: a €49 early-access path for
              WooCommerce stores that lose time fixing missing VAT numbers, corrected invoices,
              refund credit notes, and accountant export details.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-6 text-sm">
              <div className="rounded-2xl bg-white border border-emerald-100 p-4">
                <strong className="block text-slate-900 mb-1">Before payment</strong>
                <span className="text-slate-600">Company, VAT/BTW, PO, and invoice email fields.</span>
              </div>
              <div className="rounded-2xl bg-white border border-emerald-100 p-4">
                <strong className="block text-slate-900 mb-1">After payment</strong>
                <span className="text-slate-600">Sequential invoice PDFs attached to WooCommerce emails.</span>
              </div>
              <div className="rounded-2xl bg-white border border-emerald-100 p-4">
                <strong className="block text-slate-900 mb-1">After refunds</strong>
                <span className="text-slate-600">Credit-note workflow tied back to the original order.</span>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                href="/woocommerce-eu-vat-invoices"
                className="bg-emerald-600 text-white px-6 py-3 rounded-xl font-semibold text-center hover:bg-emerald-700 transition"
              >
                View Lattice Invoices offer
              </Link>
              <Link
                href="/tools/woocommerce-invoice-fit-check"
                className="bg-white border border-emerald-200 text-emerald-800 px-6 py-3 rounded-xl font-semibold text-center hover:border-emerald-500 transition"
              >
                Score invoice fit
              </Link>
              <Link
                href="/demo/lattice-invoices"
                className="bg-slate-950 text-white px-6 py-3 rounded-xl font-semibold text-center hover:bg-slate-800 transition"
              >
                View invoice demo
              </Link>
            </div>
          </div>
          <div className="rounded-3xl bg-white border border-emerald-100 p-6 shadow-sm">
            <div className="flex items-center justify-between border-b border-slate-100 pb-4 mb-4">
              <div>
                <p className="text-xs uppercase tracking-widest text-slate-500">Early-access price</p>
                <p className="text-4xl font-bold text-slate-950">€49</p>
              </div>
              <span className="rounded-full bg-emerald-100 px-3 py-1 text-sm font-semibold text-emerald-700">
                One-time
              </span>
            </div>
            <ul className="space-y-3 text-slate-700 mb-5">
              <li>✓ VAT/BTW invoice readiness checklist</li>
              <li>✓ WooCommerce-native order workflow</li>
              <li>✓ Setup brief before install</li>
              <li>✓ Clear path from invoice pain to purchase request</li>
            </ul>
            <a
              href="mailto:support@latticeplugins.com?subject=Ready%20to%20buy%20Lattice%20Invoices%20%E2%82%AC49&body=Hi%20Lattice%2C%0A%0AI%20am%20ready%20to%20buy%20Lattice%20Invoices%20if%20my%20store%20fits.%0A%0AStore%20URL%20%2B%20country%3A%20%0AB2B%2FB2C%20mix%20and%20monthly%20invoice%20request%20volume%3A%20%0AVAT%2FBTW%20fields%20needed%3A%20%0ACredit-note%20needs%3A%20"
              className="block rounded-xl bg-emerald-600 px-5 py-3 text-center font-semibold text-white hover:bg-emerald-700 transition"
            >
              Send ready-to-buy request
            </a>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8 text-center">Official 7-product catalog</h2>
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
