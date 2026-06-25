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
        <p className="uppercase tracking-[0.25em] text-sm text-blue-100 mb-4">WooCommerce revenue workflows</p>
        <h1 className="text-5xl font-bold mb-4">Sell to EU business buyers without invoice support tickets.</h1>
        <p className="text-xl mb-8 max-w-3xl mx-auto">
          Lattice Plugins helps WooCommerce stores capture VAT/BTW details, generate clean invoices,
          and keep checkout, tax, and customer documents connected.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/woocommerce-eu-vat-invoices"
            className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition inline-block"
          >
            View EU invoice workflow
          </Link>
          <Link
            href="/shop"
            className="bg-white/10 border border-white/30 text-white px-8 py-3 rounded-full font-semibold hover:bg-white/15 transition inline-block"
          >
            Browse Plugins
          </Link>
        </div>
      </section>

      <section className="mb-12 rounded-2xl border border-green-100 bg-green-50 p-6 md:p-8">
        <div className="grid grid-cols-1 lg:grid-cols-[1.25fr_0.75fr] gap-6 items-center">
          <div>
            <p className="uppercase tracking-[0.2em] text-xs text-green-700 font-semibold mb-3">Primary product path</p>
            <h2 className="text-3xl font-bold mb-3">Lattice Invoices: EU VAT/BTW invoices for WooCommerce.</h2>
            <p className="text-slate-700 leading-relaxed mb-5">
              Built for stores that lose time correcting business invoices after checkout. The offer covers B2B billing fields,
              sequential invoice numbers, PDF delivery, My Account downloads, refund credit notes, and a practical setup guide.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                href="/woocommerce-eu-vat-invoices"
                className="bg-green-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-green-700 transition text-center"
              >
                See invoice offer
              </Link>
              <Link
                href="/docs/woocommerce-eu-vat-invoice-setup"
                className="border border-green-200 bg-white px-6 py-3 rounded-xl font-semibold hover:border-green-500 transition text-center"
              >
                Read setup guide
              </Link>
            </div>
          </div>
          <div className="rounded-2xl bg-white p-5 border border-green-100">
            <p className="font-semibold text-slate-900 mb-3">Best fit if you need:</p>
            <ul className="space-y-3 text-sm text-slate-700">
              <li className="flex gap-2"><span className="text-green-600 font-bold">✓</span><span>Company and VAT/BTW fields before payment</span></li>
              <li className="flex gap-2"><span className="text-green-600 font-bold">✓</span><span>Invoice PDFs attached to order emails</span></li>
              <li className="flex gap-2"><span className="text-green-600 font-bold">✓</span><span>Credit notes for refunded WooCommerce orders</span></li>
              <li className="flex gap-2"><span className="text-green-600 font-bold">✓</span><span>Customer invoice downloads without support tickets</span></li>
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
