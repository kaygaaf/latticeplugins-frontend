import type { Metadata } from "next";
import Link from "next/link";

const SITE_URL = "https://latticeplugins.com";

export const metadata: Metadata = {
  title: "WooCommerce Proforma Invoice Workflow — EU B2B Guide",
  description:
    "How WooCommerce stores can handle proforma invoices, payment-before-tax-invoice workflows, EU VAT fields, invoice numbers, and credit notes without support-heavy manual steps.",
  alternates: {
    canonical: `${SITE_URL}/blog/woocommerce-proforma-invoice`,
  },
  openGraph: {
    title: "WooCommerce Proforma Invoice Workflow",
    description:
      "A buyer-intent guide for EU B2B stores that need proforma invoices before payment and final VAT invoices after WooCommerce orders are paid.",
    url: `${SITE_URL}/blog/woocommerce-proforma-invoice`,
    siteName: "Lattice Plugins",
    type: "article",
  },
};

const readinessChecklist = [
  "Separate proforma numbers from final legal invoice numbers",
  "Collect company name, VAT/BTW number, billing address, and invoice email before payment",
  "Make it clear that the proforma is a payment request, not the final VAT invoice",
  "Convert the paid order into a final invoice only after payment is confirmed",
  "Attach the final invoice PDF to the paid order email and customer account",
  "Keep refund credit notes tied to the final invoice, not the proforma request",
];

const scenarios = [
  {
    title: "B2B customer needs approval first",
    workflow: "Send proforma or payment request before card/bank transfer",
    result: "Buyer can route the purchase internally without asking support to rewrite the order details.",
  },
  {
    title: "Invoice should only be final after payment",
    workflow: "Hold the final invoice number until WooCommerce marks the order paid",
    result: "Your sequential invoice series stays clean and does not fill with unpaid drafts.",
  },
  {
    title: "Refund happens after a paid invoice",
    workflow: "Generate a credit note against the final invoice number",
    result: "The accountant sees a complete trail: proforma request, paid invoice, and refund credit note.",
  },
];

const comparisonRows = [
  ["Document purpose", "One manual PDF reused for quote, request, and invoice", "Proforma request before payment; final invoice after payment"],
  ["Numbering", "Gaps or unpaid orders inside the legal invoice sequence", "Separate PRO prefix from final INV sequence"],
  ["VAT/BTW data", "Customer emails VAT number after checkout", "Business fields are captured before the proforma/final invoice workflow"],
  ["Payment follow-up", "Support sends payment details manually", "WooCommerce order status drives the next document"],
  ["Refunds", "Manual correction note after the fact", "Credit note is generated from the paid invoice record"],
];

const faq = [
  {
    q: "Is a WooCommerce proforma invoice the same as a tax invoice?",
    a: "No. A proforma is usually a payment request or draft commercial document. The final VAT invoice should be generated after the WooCommerce order is paid, using the final invoice number and order tax totals.",
  },
  {
    q: "Should proforma invoices use the same number sequence as final invoices?",
    a: "Most stores keep them separate, for example PRO-2026-00012 for the proforma and INV-2026-00148 for the final invoice. That avoids unpaid drafts creating gaps in the final invoice series.",
  },
  {
    q: "When does this become a real buyer problem?",
    a: "It becomes urgent when B2B customers ask for documents before paying, accountants complain about invoice gaps, or support has to manually create payment requests and corrected invoices for every larger order.",
  },
  {
    q: "How does this connect to Lattice Invoices?",
    a: "The Lattice Invoices offer is being shaped around WooCommerce-native invoice workflows: VAT/BTW checkout data, sequential invoice numbers, PDF delivery, credit notes, and proforma-to-final-invoice handling for qualified B2B stores.",
  },
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "WooCommerce proforma invoice workflow for EU B2B stores",
  description:
    "A practical guide for WooCommerce stores that need proforma invoices before payment and clean final EU VAT invoices after payment.",
  mainEntityOfPage: `${SITE_URL}/blog/woocommerce-proforma-invoice`,
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
  "mailto:support@latticeplugins.com?subject=Lattice%20Invoices%20proforma%20workflow&body=Hi%20Lattice%2C%0A%0AI%20need%20a%20WooCommerce%20proforma-to-final-invoice%20workflow.%0A%0AStore%20URL%3A%20%0ACountry%3A%20%0AB2B%20approval%20workflow%3A%20%0AProforma%20number%20format%3A%20%0AFinal%20invoice%20number%20format%3A%20%0AVAT%2FBTW%20fields%20needed%3A%20";

export default function WooCommerceProformaInvoicePage() {
  return (
    <main className="min-h-screen bg-slate-50">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <section className="bg-gradient-to-br from-slate-950 via-blue-950 to-cyan-900 text-white">
        <div className="max-w-5xl mx-auto px-6 py-16 lg:py-20">
          <p className="uppercase tracking-[0.3em] text-sm text-blue-200 mb-4">WooCommerce proforma invoices</p>
          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
            Stop turning every B2B WooCommerce payment request into a manual invoice job.
          </h1>
          <p className="text-xl text-blue-50 leading-relaxed max-w-3xl mb-8">
            EU B2B customers often need a proforma before payment and a final VAT invoice after payment. The sales
            friction starts when WooCommerce has the order, but the store owner has to create every document by hand.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href={mailto} className="bg-green-500 text-white px-8 py-4 rounded-xl font-semibold hover:bg-green-400 transition shadow-lg text-center">
              Request proforma workflow early access
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
              <h2 className="text-3xl font-bold mb-4">A proforma workflow is a conversion feature, not just paperwork.</h2>
              <p className="text-slate-700 leading-relaxed mb-4">
                If a company buyer cannot get an approval document quickly, the WooCommerce order stalls. If the store
                sends a final invoice before payment, the accounting sequence can become messy. The right workflow keeps
                these two documents separate.
              </p>
              <p className="text-slate-700 leading-relaxed">
                Lattice Invoices is being positioned around that practical sales problem: collect invoice-ready data at
                checkout, produce the right document at the right order status, and reduce the support back-and-forth that
                blocks B2B purchases.
              </p>
            </div>

            <div className="bg-white rounded-2xl border shadow-sm p-8">
              <h2 className="text-3xl font-bold mb-6">Proforma invoice readiness checklist</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {readinessChecklist.map((item) => (
                  <div key={item} className="flex gap-3 p-4 rounded-xl bg-slate-50 border border-slate-100">
                    <span className="text-green-600 font-bold">✓</span>
                    <span className="text-slate-800">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-2xl border shadow-sm p-8">
              <h2 className="text-3xl font-bold mb-6">Where the workflow changes the sale</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                {scenarios.map((scenario) => (
                  <div key={scenario.title} className="rounded-xl border border-slate-200 bg-slate-50 p-5">
                    <h3 className="text-xl font-bold mb-3">{scenario.title}</h3>
                    <p className="font-semibold text-slate-900 mb-3">{scenario.workflow}</p>
                    <p className="text-slate-700 leading-relaxed">{scenario.result}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-2xl border shadow-sm p-8 overflow-hidden">
              <h2 className="text-3xl font-bold mb-4">Manual proforma PDFs vs. a WooCommerce workflow</h2>
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
              <h2 className="text-2xl font-bold mb-3">Need proforma-to-final invoices?</h2>
              <p className="text-slate-700 mb-5">
                Send the store URL, country, B2B approval workflow, proforma number format, and final invoice sequence.
                This qualifies the store for the focused Lattice Invoices workflow instead of a generic plugin request.
              </p>
              <a href={mailto} className="block text-center bg-blue-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-blue-700 transition mb-3">
                Request proforma workflow early access
              </a>
              <Link href="/docs/woocommerce-eu-vat-invoice-setup" className="block text-center border border-slate-200 px-6 py-3 rounded-xl font-semibold hover:border-blue-400 transition mb-3">
                Setup guide
              </Link>
              <Link href="/blog/woocommerce-invoice-numbering" className="block text-center border border-slate-200 px-6 py-3 rounded-xl font-semibold hover:border-blue-400 transition mb-3">
                Invoice numbering guide
              </Link>
              <Link href="/blog/woocommerce-pdf-invoice-email-attachments" className="block text-center border border-slate-200 px-6 py-3 rounded-xl font-semibold hover:border-blue-400 transition mb-3">
                PDF attachment guide
              </Link>
              <Link href="/blog/woocommerce-credit-notes-refunds" className="block text-center border border-slate-200 px-6 py-3 rounded-xl font-semibold hover:border-blue-400 transition mb-3">
                Credit-note guide
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
