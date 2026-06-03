import type { Metadata } from "next";
import Link from "next/link";

const SITE_URL = "https://latticeplugins.com";

export const metadata: Metadata = {
  title: "WooCommerce Invoice Numbering — EU VAT Setup Guide",
  description:
    "How WooCommerce stores should plan sequential invoice numbers, VAT/BTW metadata, refunds, credit notes, and customer invoice downloads before choosing an invoice plugin.",
  alternates: {
    canonical: `${SITE_URL}/blog/woocommerce-invoice-numbering`,
  },
  openGraph: {
    title: "WooCommerce Invoice Numbering for EU VAT Stores",
    description:
      "A buyer-intent guide for WooCommerce stores that need predictable invoice numbers, audit trails, credit notes, and EU VAT invoice PDFs.",
    url: `${SITE_URL}/blog/woocommerce-invoice-numbering`,
    siteName: "Lattice Plugins",
    type: "article",
  },
};

const numberingChecklist = [
  "Use invoice numbers that are sequential, readable, and separate from WooCommerce order IDs",
  "Store invoice number, invoice date, VAT/BTW number, billing country, and tax totals on the order",
  "Do not reuse invoice numbers after cancellations, refunds, or failed payments",
  "Generate credit-note numbers for refunds that reference the original invoice",
  "Expose invoice PDFs in customer emails and My Account downloads",
  "Keep the format understandable for the store owner, customer, and accountant",
];

const formats = [
  {
    title: "Year + sequence",
    example: "INV-2026-000148",
    text: "Best for most small WooCommerce stores because the invoice year is visible and the sequence is easy to audit.",
  },
  {
    title: "Country + year + sequence",
    example: "NL-2026-000148",
    text: "Useful when the store sells across multiple EU markets and wants the billing country visible in admin exports.",
  },
  {
    title: "Separate credit-note sequence",
    example: "CN-2026-000019",
    text: "Refund documents should not look like normal sales invoices. A dedicated credit-note prefix keeps the trail clear.",
  },
];

const comparisonRows = [
  ["Order ID", "WooCommerce order IDs can skip, change visibility, and include failed/cancelled checkout attempts", "Dedicated invoice sequence starts when the invoice workflow says the order is invoiceable"],
  ["Invoice date", "Store owner checks payment email manually", "Invoice date is stored with the generated invoice number"],
  ["Refund trail", "Refund note is written in admin comments", "Credit note has its own number and points back to the original invoice"],
  ["Customer access", "Customer emails support for a copy", "Invoice PDF is attached and downloadable from My Account"],
  ["Bookkeeping", "Export requires manual matching", "Invoice number, VAT data, and totals are attached to the WooCommerce order"],
];

const faq = [
  {
    q: "Can I use WooCommerce order numbers as invoice numbers?",
    a: "You can, but many stores prefer a dedicated invoice sequence because order IDs can include abandoned, failed, cancelled, or test orders. A separate sequence makes the accounting trail easier to explain.",
  },
  {
    q: "When should the invoice number be created?",
    a: "For most WooCommerce stores it should be created when the order becomes paid or processing, not when a customer first lands on checkout. The exact trigger should match the store's bookkeeping process.",
  },
  {
    q: "What happens when an order is refunded?",
    a: "The original invoice should remain in the audit trail. The refund should create a credit note with its own number and a reference to the original invoice number.",
  },
  {
    q: "How does Lattice Invoices approach numbering?",
    a: "Lattice Invoices is being shaped around the full WooCommerce EU invoice workflow: invoice sequences, VAT/BTW order metadata, customer PDFs, email attachments, My Account downloads, and refund-linked credit notes.",
  },
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "WooCommerce invoice numbering for EU VAT stores",
  description:
    "A practical guide for WooCommerce stores that need sequential invoice numbers, VAT metadata, invoice PDFs, customer downloads, and credit notes.",
  mainEntityOfPage: `${SITE_URL}/blog/woocommerce-invoice-numbering`,
  publisher: {
    "@type": "Organization",
    name: "Lattice Plugins",
    url: SITE_URL,
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faq.map((item) => ({
    "@type": "Question",
    name: item.q,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.a,
    },
  })),
};

const mailto =
  "mailto:support@latticeplugins.com?subject=Lattice%20Invoices%20numbering%20early%20access&body=Hi%20Lattice%2C%0A%0AI%20need%20WooCommerce%20invoice%20numbering%20and%20EU%20VAT%20invoice%20PDFs.%0A%0AStore%20URL%3A%20%0ACountry%3A%20%0ACurrent%20invoice%20format%3A%20%0APreferred%20format%3A%20%0ACredit%20notes%20needed%3A%20%0AVAT%2FBTW%20field%20needed%3A%20";

export default function WooCommerceInvoiceNumberingPage() {
  return (
    <main className="min-h-screen bg-slate-50">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <section className="bg-gradient-to-br from-slate-950 via-blue-950 to-cyan-900 text-white">
        <div className="max-w-5xl mx-auto px-6 py-16 lg:py-20">
          <p className="uppercase tracking-[0.3em] text-sm text-cyan-200 mb-4">WooCommerce invoice numbering</p>
          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
            Plan WooCommerce invoice numbers before the accountant asks for a cleaner audit trail.
          </h1>
          <p className="text-xl text-blue-50 leading-relaxed max-w-3xl mb-8">
            EU VAT stores need more than a PDF button. They need predictable invoice numbers, VAT/BTW order metadata,
            credit-note numbers for refunds, and customer downloads that stay connected to WooCommerce orders.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href={mailto} className="bg-green-500 text-white px-8 py-4 rounded-xl font-semibold hover:bg-green-400 transition shadow-lg text-center">
              Request invoice-numbering early access
            </a>
            <Link href="/woocommerce-eu-vat-invoices" className="bg-white/10 border border-white/20 text-white px-8 py-4 rounded-xl font-semibold hover:bg-white/15 transition text-center">
              View Lattice Invoices offer
            </Link>
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-14">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <article className="lg:col-span-2 space-y-8">
            <div className="bg-white rounded-2xl border shadow-sm p-8">
              <h2 className="text-3xl font-bold mb-4">Invoice numbering is a revenue workflow problem.</h2>
              <p className="text-slate-700 leading-relaxed mb-4">
                Stores searching for WooCommerce invoice numbering are usually close to purchase because the pain is
                already operational: customers ask for invoices, bookkeepers ask for sequences, and refunds need a
                document trail that is not hidden in order notes.
              </p>
              <p className="text-slate-700 leading-relaxed">
                Lattice Invoices is positioned for that workflow: decide when an order becomes invoiceable, assign a
                clear invoice number, print VAT/BTW data, and keep credit notes connected to refunds.
              </p>
            </div>

            <div className="bg-white rounded-2xl border shadow-sm p-8">
              <h2 className="text-3xl font-bold mb-6">Invoice-numbering readiness checklist</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {numberingChecklist.map((item) => (
                  <div key={item} className="flex gap-3 p-4 rounded-xl bg-slate-50 border border-slate-100">
                    <span className="text-green-600 font-bold">✓</span>
                    <span className="text-slate-800">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-2xl border shadow-sm p-8">
              <h2 className="text-3xl font-bold mb-6">Common WooCommerce invoice number formats</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                {formats.map((format) => (
                  <div key={format.title} className="rounded-xl border border-slate-200 bg-slate-50 p-5">
                    <p className="text-sm uppercase tracking-[0.2em] text-blue-700 font-semibold mb-2">{format.title}</p>
                    <p className="text-2xl font-bold mb-3">{format.example}</p>
                    <p className="text-slate-700 leading-relaxed">{format.text}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-2xl border shadow-sm p-8 overflow-hidden">
              <h2 className="text-3xl font-bold mb-4">Order numbers vs. invoice numbers</h2>
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-slate-100 text-slate-700">
                      <th className="p-4 rounded-l-xl">Need</th>
                      <th className="p-4">Manual / order-ID workaround</th>
                      <th className="p-4 rounded-r-xl">Lattice Invoices path</th>
                    </tr>
                  </thead>
                  <tbody>
                    {comparisonRows.map(([need, manual, lattice]) => (
                      <tr key={need} className="border-b border-slate-100">
                        <td className="p-4 font-semibold text-slate-900">{need}</td>
                        <td className="p-4 text-slate-600">{manual}</td>
                        <td className="p-4 text-slate-800">{lattice}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div className="bg-white rounded-2xl border shadow-sm p-8">
              <h2 className="text-3xl font-bold mb-6">FAQ</h2>
              <div className="space-y-5">
                {faq.map((item) => (
                  <div key={item.q}>
                    <h3 className="text-lg font-semibold mb-2">{item.q}</h3>
                    <p className="text-slate-700 leading-relaxed">{item.a}</p>
                  </div>
                ))}
              </div>
            </div>
          </article>

          <aside className="space-y-6">
            <div className="bg-white rounded-2xl border shadow-sm p-6 sticky top-6">
              <p className="text-sm uppercase tracking-[0.2em] text-blue-700 font-semibold mb-2">Early-access qualifier</p>
              <h2 className="text-2xl font-bold mb-3">Need invoice numbers and credit notes?</h2>
              <p className="text-slate-700 mb-5">
                Send the preferred invoice format, country, VAT/BTW requirements, and refund workflow. This qualifies
                the store for the focused Lattice Invoices path instead of broad plugin browsing.
              </p>
              <a href={mailto} className="block text-center bg-blue-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-blue-700 transition mb-3">
                Request numbering early access
              </a>
              <Link href="/docs/woocommerce-eu-vat-invoice-setup" className="block text-center border border-slate-200 px-6 py-3 rounded-xl font-semibold hover:border-blue-400 transition mb-3">
                Setup guide
              </Link>
              <Link href="/blog/woocommerce-credit-notes-refunds" className="block text-center border border-slate-200 px-6 py-3 rounded-xl font-semibold hover:border-blue-400 transition mb-3">
                Credit-note guide
              </Link>
              <Link href="/blog/woocommerce-reverse-charge-invoices" className="block text-center border border-slate-200 px-6 py-3 rounded-xl font-semibold hover:border-blue-400 transition mb-3">
                Reverse-charge guide
              </Link>
              <Link href="/woocommerce-eu-vat-invoices" className="block text-center border border-slate-200 px-6 py-3 rounded-xl font-semibold hover:border-blue-400 transition">
                View invoice offer
              </Link>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}
