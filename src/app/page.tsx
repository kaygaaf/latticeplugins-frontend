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
        <p className="uppercase tracking-[0.25em] text-sm text-blue-100 mb-4">Official 7-product WordPress plugin catalog</p>
        <h1 className="text-5xl font-bold mb-4">Premium WordPress plugins for WooCommerce, CRM, SEO, and site operations.</h1>
        <p className="text-xl mb-8 max-w-3xl mx-auto">
          Build faster stores with Lattice Commerce Suite, Lattice CRM, Lattice Migrate,
          Lattice Stripe Payments, Lattice Subscribify, Lattice Core, and Lattice SEO.
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

      <section className="mb-12 rounded-2xl border border-emerald-100 bg-gradient-to-br from-emerald-50 to-white p-6 md:p-8">
        <div className="grid grid-cols-1 lg:grid-cols-[1.25fr_0.75fr] gap-6 items-center">
          <div>
            <p className="uppercase tracking-[0.2em] text-xs text-emerald-700 font-semibold mb-3">Revenue focus: WooCommerce EU invoices</p>
            <h2 className="text-3xl font-bold mb-3">Sell to EU business buyers without invoice support tickets.</h2>
            <p className="text-slate-700 leading-relaxed mb-5">
              Lattice Invoices is the focused VAT/BTW invoice workflow now being qualified for WooCommerce stores:
              business checkout fields, invoice PDFs, refund credit notes, customer downloads, and €49 early access.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-5 text-sm">
              <div className="rounded-xl border border-emerald-100 bg-white p-4">
                <p className="font-bold text-slate-900">Before payment</p>
                <p className="text-slate-600">Company, VAT/BTW, PO and invoice email fields.</p>
              </div>
              <div className="rounded-xl border border-emerald-100 bg-white p-4">
                <p className="font-bold text-slate-900">After payment</p>
                <p className="text-slate-600">Sequential invoice PDFs attached to order emails.</p>
              </div>
              <div className="rounded-xl border border-emerald-100 bg-white p-4">
                <p className="font-bold text-slate-900">After refunds</p>
                <p className="text-slate-600">Credit-note workflow tied back to WooCommerce orders.</p>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                href="/woocommerce-eu-vat-invoices"
                className="bg-emerald-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-emerald-700 transition text-center"
              >
                View EU invoice workflow
              </Link>
              <Link
                href="/docs/woocommerce-eu-vat-invoice-setup"
                className="border border-emerald-200 bg-white px-6 py-3 rounded-xl font-semibold hover:border-emerald-500 transition text-center"
              >
                Read invoice setup guide
              </Link>
              <a
                href="mailto:support@latticeplugins.com?subject=Lattice%20Invoices%20early%20access%20-%20%E2%82%AC49%20license&body=Hi%20Lattice%2C%0A%0AI%20want%20the%20%E2%82%AC49%20Lattice%20Invoices%20early-access%20workflow.%0A%0AStore%20URL%3A%20%0ACountry%3A%20%0AB2B%2FB2C%20mix%3A%20%0AInvoice%20requests%20per%20month%3A%20%0AVAT%2FBTW%20fields%20needed%3A%20%0ACredit%20notes%20needed%3A%20"
                className="border border-emerald-200 bg-white px-6 py-3 rounded-xl font-semibold hover:border-emerald-500 transition text-center"
              >
                Request €49 invoice access
              </a>
            </div>
          </div>
          <div className="rounded-2xl bg-white p-5 border border-emerald-100 shadow-sm">
            <p className="font-semibold text-slate-900 mb-3">Purchase-fit scorecard:</p>
            <ul className="space-y-3 text-sm text-slate-700 mb-5">
              <li className="flex gap-2"><span className="text-emerald-600 font-bold">+2</span><span>B2B buyers ask for corrected VAT/BTW invoices.</span></li>
              <li className="flex gap-2"><span className="text-emerald-600 font-bold">+2</span><span>Support manually creates invoice PDFs after payment.</span></li>
              <li className="flex gap-2"><span className="text-emerald-600 font-bold">+2</span><span>Refunds need credit notes instead of edited invoices.</span></li>
              <li className="flex gap-2"><span className="text-emerald-600 font-bold">+1</span><span>Accountant needs VAT totals, VAT ID, and invoice PDF links.</span></li>
            </ul>
            <p className="rounded-xl bg-emerald-50 border border-emerald-100 p-4 text-sm text-slate-700">
              Score 3+ points? The store is a qualified early-access lead for Lattice Invoices.
            </p>
          </div>
        </div>
      </section>

      <section className="mb-12 rounded-2xl border border-blue-100 bg-blue-50 p-6 md:p-8">
        <div className="grid grid-cols-1 lg:grid-cols-[1.25fr_0.75fr] gap-6 items-center">
          <div>
            <p className="uppercase tracking-[0.2em] text-xs text-blue-700 font-semibold mb-3">Official catalog remains available</p>
            <h2 className="text-3xl font-bold mb-3">Lattice SEO and the official 7-product shop stay live.</h2>
            <p className="text-slate-700 leading-relaxed mb-5">
              Lattice Invoices is the revenue sprint funnel, while the public shop continues to sell the official catalog:
              Lattice Commerce Suite, Core, CRM, Migrate, Stripe Payments, Subscribify, and SEO.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                href="/product/lattice-seo"
                className="bg-blue-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-blue-700 transition text-center"
              >
                View Lattice SEO
              </Link>
              <Link
                href="/shop"
                className="border border-blue-200 bg-white px-6 py-3 rounded-xl font-semibold hover:border-blue-500 transition text-center"
              >
                Compare all 7 plugins
              </Link>
            </div>
          </div>
          <div className="rounded-2xl bg-white p-5 border border-blue-100">
            <p className="font-semibold text-slate-900 mb-3">Catalog guardrails:</p>
            <ul className="space-y-3 text-sm text-slate-700">
              <li className="flex gap-2"><span className="text-blue-600 font-bold">✓</span><span>Only 7 official products appear in the shop catalog.</span></li>
              <li className="flex gap-2"><span className="text-blue-600 font-bold">✓</span><span>The invoice funnel is clearly positioned as qualified early access.</span></li>
              <li className="flex gap-2"><span className="text-blue-600 font-bold">✓</span><span>Buyers can still compare all official products before checkout.</span></li>
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
