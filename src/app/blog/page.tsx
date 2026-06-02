import Link from "next/link";
import { getPosts } from "@/lib/wordpress";

export const dynamic = "force-dynamic";

export default async function BlogPage() {
  const posts = await getPosts(10);

  return (
    <main className="min-h-screen p-8 max-w-6xl mx-auto">
      <h1 className="text-4xl font-bold mb-8 text-center">Blog</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <article className="border rounded-lg p-6 hover:shadow-lg transition bg-blue-50 border-blue-100">
          <p className="text-sm uppercase tracking-[0.2em] text-blue-700 font-semibold mb-2">WooCommerce invoice buyer guide</p>
          <h2 className="text-2xl font-semibold mb-2">
            <Link href="/blog/woocommerce-vat-invoice-plugin-eu" className="hover:text-blue-600">
              Best WooCommerce EU VAT invoice plugin: what to check before buying
            </Link>
          </h2>
          <p className="text-gray-600 line-clamp-3">
            A buyer-intent checklist for EU stores that need VAT/BTW checkout fields, invoice PDFs, credit notes,
            customer downloads, and a clear path to Lattice Invoices early access.
          </p>
        </article>

        <article className="border rounded-lg p-6 hover:shadow-lg transition bg-green-50 border-green-100">
          <p className="text-sm uppercase tracking-[0.2em] text-green-700 font-semibold mb-2">Refund credit-note guide</p>
          <h2 className="text-2xl font-semibold mb-2">
            <Link href="/blog/woocommerce-credit-notes-refunds" className="hover:text-blue-600">
              WooCommerce credit notes for refunds: EU VAT workflow guide
            </Link>
          </h2>
          <p className="text-gray-600 line-clamp-3">
            A conversion-focused guide for stores that need refund-linked credit notes, VAT corrections,
            customer downloads, and Lattice Invoices early-access qualification.
          </p>
        </article>

        <article className="border rounded-lg p-6 hover:shadow-lg transition bg-indigo-50 border-indigo-100">
          <p className="text-sm uppercase tracking-[0.2em] text-indigo-700 font-semibold mb-2">VAT field checkout guide</p>
          <h2 className="text-2xl font-semibold mb-2">
            <Link href="/blog/woocommerce-vat-number-checkout-field" className="hover:text-blue-600">
              WooCommerce VAT number checkout field for EU B2B invoices
            </Link>
          </h2>
          <p className="text-gray-600 line-clamp-3">
            A high-intent guide for stores that need VAT/BTW fields before payment, invoice-ready order metadata,
            PDF delivery, and Lattice Invoices early-access qualification.
          </p>
        </article>
      </div>
      
      <div className="space-y-8">
        {posts.map((post: any) => (
          <article key={post.id} className="border rounded-lg p-6 hover:shadow-lg transition">
            <h2 className="text-2xl font-semibold mb-2">
              <Link href={`/blog/${post.slug}`} className="hover:text-blue-600">
                {post.title.rendered}
              </Link>
            </h2>
            <p className="text-gray-500 text-sm mb-3">
              {new Date(post.date).toLocaleDateString()}
            </p>
            <p 
              className="text-gray-600 line-clamp-3"
              dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }}
            />
          </article>
        ))}
      </div>
    </main>
  );
}
