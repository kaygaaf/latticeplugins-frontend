import type { Metadata } from "next";
import Link from "next/link";

const SITE_URL = "https://latticeplugins.com";

export const metadata: Metadata = {
  title: "WooCommerce Reverse Charge Invoices — EU VAT Guide",
  description:
    "A practical guide for WooCommerce stores that need reverse-charge VAT invoices, VAT/BTW number capture, invoice PDFs, customer emails, and refund credit notes.",
  alternates: {
    canonical: `${SITE_URL}/blog/woocommerce-reverse-charge-invoices`,
  },
  openGraph: {
    title: "WooCommerce Reverse Charge Invoices",
    description:
      "How EU WooCommerce stores should handle B2B reverse-charge invoice workflows without manual PDF edits.",
    url: `${SITE_URL}/blog/woocommerce-reverse-charge-invoices`,
    siteName: "Lattice Plugins",
    type: "article",
  },
};

const reverseChargeRequirements = [
  "Checkout captures company name, billing country, and VAT/BTW number before payment",
  "Order metadata stores whether the order was treated as B2B reverse charge",
  "Invoice PDFs show customer VAT number, supplier VAT number, and the reverse-charge note",
  "Tax totals remain understandable for the customer and bookkeeper",
  "Customer emails and My Account downloads use the same invoice PDF",
  "Refunds generate credit notes that reference the original reverse-charge invoice",
];

const invoiceNotes = [
  {
    title: "VAT number first",
    text: "A reverse-charge invoice workflow starts at checkout. If the VAT/BTW number is collected after payment, the store owner is already doing manual invoice repair.",
  },
  {
    title: "Invoice wording matters",
    text: "The PDF should clearly show a reverse-charge note instead of silently printing a zero VAT line that confuses buyers and accountants.",
  },
  {
    title: "Country rules need visibility",
    text: "Admins need to see why an order was handled as B2B reverse charge: billing country, VAT field, and tax treatment should be inspectable on the order.",
  },
  {
    title: "Credit notes must follow through",
    text: "A refunded reverse-charge invoice needs a matching credit note with the same customer VAT context and a link back to the original invoice number.",
  },
];

const comparisonRows = [
  ["VAT capture", "Manual email after purchase", "Checkout VAT/BTW field stored on the order"],
  ["Invoice PDF", "Generic zero-tax invoice", "Reverse-charge wording and VAT metadata printed"],
  ["Admin clarity", "Store owner guesses why VAT was removed", "Order shows B2B fields and invoice treatment"],
  ["Customer delivery", "PDF sent manually", "Invoice attached to email and downloadable in My Account"],
  ["Refunds", "Manual credit-note correction", "Credit note references the original invoice"],
];

const faq = [
  {
    q: "What is a WooCommerce reverse-charge invoice?",
    a: "It is an invoice for an eligible B2B sale where VAT is shifted to the buyer. The invoice should still capture and print the buyer's VAT number, tax context, invoice number, invoice date, and a clear reverse-charge note.",
  },
  {
    q: "Can WooCommerce create reverse-charge invoices by default?",
    a: "WooCommerce can store orders and taxes, but most EU stores need a dedicated invoice workflow for VAT number capture, reverse-charge wording, PDF delivery, customer downloads, and credit notes.",
  },
  {
    q: "Is this only for digital products?",
    a: "No. The operational problem appears anywhere an EU WooCommerce store sells B2B and needs clean VAT/BTW data, invoice PDFs, and accountant-ready records.",
  },
  {
    q: "How does Lattice Invoices help?",
    a: "Lattice Invoices is being positioned around the complete EU WooCommerce invoice workflow: VAT/BTW checkout fields, invoice numbers, PDF delivery, reverse-charge notes, My Account downloads, and refund credit notes.",
  },
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "WooCommerce reverse-charge invoices for EU VAT",
  description:
    "A buyer-intent guide for EU WooCommerce stores that need B2B reverse-charge invoice workflows, VAT number capture, PDF invoices, and refund credit notes.",
  mainEntityOfPage: `${SITE_URL}/blog/woocommerce-reverse-charge-invoices`,
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
  "mailto:support@latticeplugins.com?subject=Lattice%20Invoices%20reverse%20charge%20early%20access&body=Hi%20Lattice%2C%0A%0AI%20need%20WooCommerce%20reverse-charge%20invoices%20for%20EU%20VAT.%0A%0AStore%20URL%3A%20%0ACountry%3A%20%0AB2B%20countries%3A%20%0AVAT%2FBTW%20field%20rules%3A%20%0AInvoice%20wording%20needed%3A%20%0ACredit%20notes%20needed%3A%20";

export default function WooCommerceReverseChargeInvoicesPage() {
  return (
    <main className="min-h-screen bg-slate-50">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <section className="bg-gradient-to-br from-slate-950 via-indigo-950 to-blue-900 text-white">
        <div className="max-w-5xl mx-auto px-6 py-16 lg:py-20">
          <p className="uppercase tracking-[0.3em] text-sm text-blue-200 mb-4">WooCommerce reverse-charge invoices</p>
          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
            Build EU reverse-charge invoices in WooCommerce without manual PDF cleanup.
          </h1>
          <p className="text-xl text-blue-50 leading-relaxed max-w-3xl mb-8">
            EU B2B stores need more than a zero VAT line. They need VAT/BTW fields at checkout, clear reverse-charge
            wording on invoice PDFs, customer downloads, and credit notes that preserve the original invoice context.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href={mailto} className="bg-green-500 text-white px-8 py-4 rounded-xl font-semibold hover:bg-green-400 transition shadow-lg text-center">
              Request reverse-charge early access
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
              <h2 className="text-3xl font-bold mb-4">Reverse charge is an invoice workflow, not just a tax toggle.</h2>
              <p className="text-slate-700 leading-relaxed mb-4">
                Store owners searching for a WooCommerce reverse-charge invoice plugin are usually trying to remove a
                repeated admin chore: fixing PDFs after checkout, adding VAT numbers by hand, and explaining invoices
                to customers or accountants.
              </p>
              <p className="text-slate-700 leading-relaxed">
                Lattice Invoices turns this into a product path: collect the right B2B data before payment, store it on
                the order, print it consistently, and keep refunds connected to the original invoice trail.
              </p>
            </div>

            <div className="bg-white rounded-2xl border shadow-sm p-8">
              <h2 className="text-3xl font-bold mb-6">Reverse-charge readiness checklist</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {reverseChargeRequirements.map((item) => (
                  <div key={item} className="flex gap-3 p-4 rounded-xl bg-slate-50 border border-slate-100">
                    <span className="text-green-600 font-bold">✓</span>
                    <span className="text-slate-800">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-2xl border shadow-sm p-8">
              <h2 className="text-3xl font-bold mb-6">What the invoice needs to prove</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {invoiceNotes.map((note) => (
                  <div key={note.title} className="rounded-xl border border-slate-200 bg-slate-50 p-5">
                    <h3 className="text-xl font-bold mb-2">{note.title}</h3>
                    <p className="text-slate-700 leading-relaxed">{note.text}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-2xl border shadow-sm p-8 overflow-hidden">
              <h2 className="text-3xl font-bold mb-4">Manual reverse-charge handling vs. Lattice Invoices path</h2>
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-slate-100 text-slate-700">
                      <th className="p-4 rounded-l-xl">Need</th>
                      <th className="p-4">Manual workaround</th>
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
              <h2 className="text-2xl font-bold mb-3">Need reverse-charge invoice PDFs?</h2>
              <p className="text-slate-700 mb-5">
                Send the store URL, country mix, and invoice wording needs. This captures buyers who are already
                looking for a WooCommerce EU VAT invoice solution.
              </p>
              <a href={mailto} className="block text-center bg-blue-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-blue-700 transition mb-3">
                Request reverse-charge early access
              </a>
              <Link href="/blog/woocommerce-vat-number-checkout-field" className="block text-center border border-slate-200 px-6 py-3 rounded-xl font-semibold hover:border-blue-400 transition mb-3">
                VAT field setup guide
              </Link>
              <Link href="/blog/woocommerce-credit-notes-refunds" className="block text-center border border-slate-200 px-6 py-3 rounded-xl font-semibold hover:border-blue-400 transition mb-3">
                Credit-note refund guide
              </Link>
              <Link href="/docs/woocommerce-eu-vat-invoice-setup" className="block text-center border border-slate-200 px-6 py-3 rounded-xl font-semibold hover:border-blue-400 transition mb-3">
                Read setup guide
              </Link>
              <Link href="/woocommerce-eu-vat-invoices" className="block text-center border border-slate-200 px-6 py-3 rounded-xl font-semibold hover:border-blue-400 transition">
                View Lattice Invoices offer
              </Link>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}
