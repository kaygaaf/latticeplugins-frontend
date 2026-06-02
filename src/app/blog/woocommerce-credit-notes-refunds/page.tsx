import type { Metadata } from "next";
import Link from "next/link";

const SITE_URL = "https://latticeplugins.com";

export const metadata: Metadata = {
  title: "WooCommerce Credit Notes for Refunds — EU VAT Guide",
  description:
    "How EU WooCommerce stores should handle refund credit notes, VAT evidence, invoice numbers, customer downloads, and PDF delivery without manual bookkeeping work.",
  alternates: {
    canonical: `${SITE_URL}/blog/woocommerce-credit-notes-refunds`,
  },
  openGraph: {
    title: "WooCommerce Credit Notes for Refunds",
    description:
      "A buyer-intent guide for WooCommerce stores that need refund-linked credit notes and EU VAT invoice workflows.",
    url: `${SITE_URL}/blog/woocommerce-credit-notes-refunds`,
    siteName: "Lattice Plugins",
    type: "article",
  },
};

const creditNoteChecklist = [
  "Create a separate credit-note number for every refund that needs a customer document",
  "Link the credit note back to the original WooCommerce order and invoice number",
  "Show negative line totals, VAT rate, VAT amount, and refund date clearly",
  "Attach the credit note to refund/customer emails when the refund is processed",
  "Let customers download the original invoice and credit note from My Account",
  "Keep invoice and credit-note metadata exportable for bookkeeping review",
];

const refundScenarios = [
  {
    title: "Full refund",
    text: "The credit note should reverse the full invoice total, including the VAT amount that was charged on the original WooCommerce order.",
  },
  {
    title: "Partial refund",
    text: "The credit note should show only the refunded products, fees, shipping, and VAT amounts instead of changing the original invoice PDF.",
  },
  {
    title: "B2B correction",
    text: "When a company buyer needs corrected invoice details, keep the original order history and issue a traceable correction document instead of editing silently.",
  },
];

const mistakes = [
  "Editing the original invoice after a refund instead of issuing a separate credit note.",
  "Using WooCommerce refund notes as the only proof of the VAT correction.",
  "Sending a manually written PDF that is not linked to the WooCommerce order.",
  "Forgetting to expose credit notes in My Account, which creates support tickets months later.",
  "Mixing invoice numbers and credit-note numbers in the same sequence without a clear prefix.",
];

const comparisonRows = [
  ["Refund proof", "Internal order note", "Downloadable credit-note PDF"],
  ["VAT correction", "Manual spreadsheet adjustment", "Negative VAT amount tied to refund"],
  ["Customer access", "Email support asks for document", "My Account invoice + credit-note downloads"],
  ["Bookkeeping trail", "Original invoice changed later", "Original invoice preserved, credit note linked"],
  ["Store workflow", "Copy order data into another tool", "WooCommerce refund triggers document workflow"],
];

const faq = [
  {
    q: "Do WooCommerce refunds automatically create credit notes?",
    a: "WooCommerce records refunds, but a store usually needs an invoice workflow to turn those refund records into customer-facing credit-note PDFs with numbering, VAT details, and download access.",
  },
  {
    q: "Should a refund edit the original invoice?",
    a: "For a clean audit trail, the safer workflow is to keep the original invoice and create a separate credit note that references it. Store owners should confirm local legal details with their accountant.",
  },
  {
    q: "Can Lattice Invoices handle this product path?",
    a: "This is one of the core early-access requirements being shaped for Lattice Invoices: refund-linked credit notes, invoice PDFs, EU VAT/BTW fields, and customer downloads inside WooCommerce.",
  },
  {
    q: "What should I send before requesting early access?",
    a: "Send your store URL, country, B2B/B2C split, invoice-number format, refund volume, and whether you need full refunds, partial refunds, or corrected B2B invoices documented as credit notes.",
  },
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "WooCommerce credit notes for refunds: EU VAT workflow guide",
  description:
    "How WooCommerce stores should handle refund credit notes, VAT corrections, original invoice links, and customer downloads.",
  mainEntityOfPage: `${SITE_URL}/blog/woocommerce-credit-notes-refunds`,
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

export default function WooCommerceCreditNotesRefundsPage() {
  return (
    <main className="min-h-screen bg-slate-50">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <section className="bg-gradient-to-br from-slate-950 via-blue-950 to-indigo-900 text-white">
        <div className="max-w-5xl mx-auto px-6 py-16 lg:py-20">
          <p className="uppercase tracking-[0.3em] text-sm text-blue-200 mb-4">WooCommerce refund credit notes</p>
          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
            WooCommerce credit notes for refunds without manual invoice corrections.
          </h1>
          <p className="text-xl text-blue-50 leading-relaxed max-w-3xl mb-8">
            If your EU WooCommerce store issues refunds, the invoice workflow needs more than a refund note:
            separate credit-note numbers, VAT corrections, customer PDFs, and a link back to the original invoice.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/woocommerce-eu-vat-invoices"
              className="bg-green-500 text-white px-8 py-4 rounded-xl font-semibold hover:bg-green-400 transition shadow-lg text-center"
            >
              Request Lattice Invoices early access
            </Link>
            <Link
              href="/docs/woocommerce-eu-vat-invoice-setup"
              className="bg-white/10 border border-white/20 text-white px-8 py-4 rounded-xl font-semibold hover:bg-white/15 transition text-center"
            >
              Read invoice setup guide
            </Link>
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-14">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <article className="lg:col-span-2 space-y-8">
            <div className="bg-white rounded-2xl border shadow-sm p-8">
              <h2 className="text-3xl font-bold mb-4">Why refund credit notes matter</h2>
              <p className="text-slate-700 leading-relaxed mb-4">
                A refund in WooCommerce changes the order balance, but a business customer often needs a proper
                document that explains what was reversed. Without a credit-note workflow, store owners end up
                editing old invoices, sending one-off PDFs, or asking the accountant to fix the evidence later.
              </p>
              <p className="text-slate-700 leading-relaxed">
                The Lattice Invoices product path treats credit notes as part of the invoice lifecycle: original
                invoice stays intact, refund creates a linked correction document, and the customer can retrieve both.
              </p>
            </div>

            <div className="bg-white rounded-2xl border shadow-sm p-8">
              <h2 className="text-3xl font-bold mb-6">Credit-note workflow checklist</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {creditNoteChecklist.map((item) => (
                  <div key={item} className="flex gap-3 p-4 rounded-xl bg-slate-50 border border-slate-100">
                    <span className="text-green-600 font-bold">✓</span>
                    <span className="text-slate-800">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {refundScenarios.map((scenario) => (
                <div key={scenario.title} className="bg-white rounded-2xl border shadow-sm p-6">
                  <h3 className="text-xl font-bold mb-3">{scenario.title}</h3>
                  <p className="text-slate-700 leading-relaxed">{scenario.text}</p>
                </div>
              ))}
            </div>

            <div className="bg-white rounded-2xl border shadow-sm p-8 overflow-hidden">
              <h2 className="text-3xl font-bold mb-4">Manual refund admin vs. credit-note workflow</h2>
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-slate-100 text-slate-700">
                      <th className="p-4 rounded-l-xl">Need</th>
                      <th className="p-4">Manual refund admin</th>
                      <th className="p-4 rounded-r-xl">With Lattice Invoices path</th>
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
              <h2 className="text-3xl font-bold mb-4">Mistakes to avoid</h2>
              <div className="space-y-3">
                {mistakes.map((mistake) => (
                  <div key={mistake} className="flex gap-3 rounded-xl bg-red-50 border border-red-100 p-4">
                    <span className="text-red-600 font-bold">!</span>
                    <span className="text-slate-800">{mistake}</span>
                  </div>
                ))}
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
              <h2 className="text-2xl font-bold mb-3">Need refund credit notes?</h2>
              <p className="text-slate-700 mb-5">
                Send the store URL and refund requirements. This converts a vague plugin search into a concrete
                Lattice Invoices early-access request.
              </p>
              <a
                href="mailto:support@latticeplugins.com?subject=Lattice%20Invoices%20credit%20notes%20early%20access&body=Hi%20Lattice%2C%0A%0AI%20need%20WooCommerce%20credit%20notes%20for%20refunds.%0A%0AStore%20URL%3A%20%0ACountry%3A%20%0ARefund%20volume%3A%20%0APartial%20refunds%20needed%3A%20%0AInvoice%20number%20format%3A%20"
                className="block text-center bg-blue-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-blue-700 transition mb-3"
              >
                Request credit-note early access
              </a>
              <Link
                href="/blog/woocommerce-vat-invoice-plugin-eu"
                className="block text-center border border-slate-200 px-6 py-3 rounded-xl font-semibold hover:border-blue-400 transition mb-3"
              >
                Compare invoice plugin requirements
              </Link>
              <Link
                href="/blog/woocommerce-vat-number-checkout-field"
                className="block text-center border border-slate-200 px-6 py-3 rounded-xl font-semibold hover:border-blue-400 transition mb-3"
              >
                VAT number field guide
              </Link>
              <Link
                href="/woocommerce-eu-vat-invoices"
                className="block text-center border border-slate-200 px-6 py-3 rounded-xl font-semibold hover:border-blue-400 transition"
              >
                View €49 invoice offer
              </Link>
              <div className="border-t mt-6 pt-6 space-y-3 text-sm text-slate-600">
                <div>✓ Targets buyer searches around credit notes and refunds</div>
                <div>✓ Internal links to the Lattice Invoices offer</div>
                <div>✓ Mailto CTA captures store-specific requirements</div>
              </div>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}
