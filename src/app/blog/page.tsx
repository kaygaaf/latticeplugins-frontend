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

        <article className="border rounded-lg p-6 hover:shadow-lg transition bg-purple-50 border-purple-100">
          <p className="text-sm uppercase tracking-[0.2em] text-purple-700 font-semibold mb-2">Reverse-charge invoice guide</p>
          <h2 className="text-2xl font-semibold mb-2">
            <Link href="/blog/woocommerce-reverse-charge-invoices" className="hover:text-blue-600">
              WooCommerce reverse-charge invoices for EU VAT
            </Link>
          </h2>
          <p className="text-gray-600 line-clamp-3">
            A buyer-intent guide for EU B2B stores that need reverse-charge wording, VAT/BTW metadata,
            invoice PDFs, customer downloads, and credit notes.
          </p>
        </article>

        <article className="border rounded-lg p-6 hover:shadow-lg transition bg-cyan-50 border-cyan-100">
          <p className="text-sm uppercase tracking-[0.2em] text-cyan-700 font-semibold mb-2">Invoice numbering guide</p>
          <h2 className="text-2xl font-semibold mb-2">
            <Link href="/blog/woocommerce-invoice-numbering" className="hover:text-blue-600">
              WooCommerce invoice numbering for EU VAT stores
            </Link>
          </h2>
          <p className="text-gray-600 line-clamp-3">
            A high-intent guide for stores that need sequential invoice numbers, VAT/BTW metadata,
            refund credit notes, customer downloads, and a cleaner accounting audit trail.
          </p>
        </article>

        <article className="border rounded-lg p-6 hover:shadow-lg transition bg-sky-50 border-sky-100">
          <p className="text-sm uppercase tracking-[0.2em] text-sky-700 font-semibold mb-2">PDF email attachment guide</p>
          <h2 className="text-2xl font-semibold mb-2">
            <Link href="/blog/woocommerce-pdf-invoice-email-attachments" className="hover:text-blue-600">
              WooCommerce PDF invoice email attachments for EU VAT stores
            </Link>
          </h2>
          <p className="text-gray-600 line-clamp-3">
            A buyer-intent guide for stores that need invoice PDFs attached to WooCommerce emails,
            secure My Account downloads, VAT/BTW metadata, and refund credit notes.
          </p>
        </article>

        <article className="border rounded-lg p-6 hover:shadow-lg transition bg-teal-50 border-teal-100">
          <p className="text-sm uppercase tracking-[0.2em] text-teal-700 font-semibold mb-2">Proforma invoice guide</p>
          <h2 className="text-2xl font-semibold mb-2">
            <Link href="/blog/woocommerce-proforma-invoice" className="hover:text-blue-600">
              WooCommerce proforma invoice workflow for EU B2B stores
            </Link>
          </h2>
          <p className="text-gray-600 line-clamp-3">
            A buyer-intent guide for stores that need proforma payment requests before purchase,
            final VAT invoices after payment, clean numbering, and credit-note handling.
          </p>
        </article>

        <article className="border rounded-lg p-6 hover:shadow-lg transition bg-amber-50 border-amber-100">
          <p className="text-sm uppercase tracking-[0.2em] text-amber-700 font-semibold mb-2">Bank transfer invoice guide</p>
          <h2 className="text-2xl font-semibold mb-2">
            <Link href="/blog/woocommerce-bank-transfer-invoice" className="hover:text-blue-600">
              WooCommerce bank transfer invoice workflow for EU B2B stores
            </Link>
          </h2>
          <p className="text-gray-600 line-clamp-3">
            A buyer-intent guide for stores that accept bank transfer payments and need VAT/BTW fields,
            proforma payment requests, final invoice PDFs, and credit-note handling.
          </p>
        </article>

        <article className="border rounded-lg p-6 hover:shadow-lg transition bg-emerald-50 border-emerald-100">
          <p className="text-sm uppercase tracking-[0.2em] text-emerald-700 font-semibold mb-2">Payment reminder workflow</p>
          <h2 className="text-2xl font-semibold mb-2">
            <Link href="/blog/woocommerce-invoice-payment-reminders" className="hover:text-blue-600">
              WooCommerce invoice payment reminders for EU VAT stores
            </Link>
          </h2>
          <p className="text-gray-600 line-clamp-3">
            A buyer-intent guide for stores that need unpaid invoice follow-ups, proforma reminders,
            bank-transfer payment requests, and final VAT invoice PDFs.
          </p>
        </article>

        <article className="border rounded-lg p-6 hover:shadow-lg transition bg-cyan-50 border-cyan-100">
          <p className="text-sm uppercase tracking-[0.2em] text-cyan-700 font-semibold mb-2">Customer invoice downloads</p>
          <h2 className="text-2xl font-semibold mb-2">
            <Link href="/blog/woocommerce-customer-invoice-downloads" className="hover:text-blue-600">
              WooCommerce customer invoice downloads for EU VAT stores
            </Link>
          </h2>
          <p className="text-gray-600 line-clamp-3">
            A buyer-intent guide for stores that need protected My Account invoice PDFs, VAT/BTW metadata,
            email attachments, proforma handling, and refund credit-note downloads.
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
