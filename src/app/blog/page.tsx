import Link from "next/link";
import { getPosts } from "@/lib/wordpress";

export const dynamic = "force-dynamic";

export default async function BlogPage() {
  const posts = await getPosts(10);

  return (
    <main className="min-h-screen p-8 max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold mb-8 text-center">Blog</h1>

      <article className="border rounded-lg p-6 hover:shadow-lg transition bg-blue-50 border-blue-100 mb-8">
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
