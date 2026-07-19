import type { Metadata } from "next";
import Link from "next/link";

const SITE_URL = "https://latticeplugins.com";

export const metadata: Metadata = {
  title: "WooCommerce Quote to Invoice Plugin for EU B2B Stores",
  description:
    "A buyer-intent guide for WooCommerce stores that start with quotes, estimates, or proposals and need VAT/BTW fields, proforma approval, final invoice PDFs, credit notes, and accountant exports.",
  alternates: {
    canonical: `${SITE_URL}/blog/woocommerce-quote-to-invoice-plugin`,
  },
  openGraph: {
    title: "WooCommerce quote to invoice plugin for EU B2B stores",
    description:
      "Plan quote-to-invoice workflows in WooCommerce with VAT evidence, approval fields, proforma timing, final invoice PDFs, credit notes, customer downloads, and accounting handoff.",
    url: `${SITE_URL}/blog/woocommerce-quote-to-invoice-plugin`,
    siteName: "Lattice Plugins",
    type: "article",
  },
};

const workflowSteps = [
  {
    title: "1. Capture quote details before the order becomes accounting evidence",
    detail:
      "A quote order should store company name, VAT/BTW number, billing country, PO/reference, quote expiry date, accepted line items, and the finance contact before any final invoice number is issued.",
    buyerQuestion: "Can the plugin keep quote metadata separate from the final invoice sequence?",
  },
  {
    title: "2. Use proforma or payment request documents for approval",
    detail:
      "B2B buyers often need an estimate or proforma before payment. That document should not create final VAT invoice numbering gaps if the quote is rejected, changed, or expires.",
    buyerQuestion: "Does the workflow support quote/proforma first and final invoice later?",
  },
  {
    title: "3. Lock the final invoice when the quote is accepted",
    detail:
      "When the buyer approves the quote, the WooCommerce order should issue a final invoice PDF from accepted values, payment terms, VAT treatment, and the selected invoice-number format.",
    buyerQuestion: "Can finance see exactly which quote values became the paid invoice?",
  },
  {
    title: "4. Handle changes, deposits, and partial acceptance cleanly",
    detail:
      "Quote workflows often involve deposits, changed quantities, scope reductions, or phased delivery. The plugin should preserve the quote trail and create credit notes when the final order value changes after invoice issue.",
    buyerQuestion: "Can refunds or reduced scope create linked credit-note evidence?",
  },
  {
    title: "5. Export quote, invoice, and correction state for bookkeeping",
    detail:
      "Month-end export should include quote reference, invoice number, customer VAT ID, payment state, PDF URL, credit-note links, accepted amount, VAT amount, and accounting status.",
    buyerQuestion: "Will the accountant get one consistent record instead of quote PDFs plus order exports plus notes?",
  },
];

const scenarios = [
  {
    title: "Consulting quote accepted with Net 14 terms",
    risk: "A final invoice is created before the buyer approves the scope, leaving cancelled invoice numbers or manual corrections.",
    lattice:
      "Store quote metadata, send a proforma/payment request, then issue the final invoice only at the configured acceptance or payment trigger.",
  },
  {
    title: "Equipment order starts as an estimate, then changes quantity",
    risk: "The order total, quote PDF, final invoice, and accounting export show different values after revisions.",
    lattice:
      "Keep the quote reference on the order, lock accepted line items, and expose the final invoice plus correction history from one WooCommerce record.",
  },
  {
    title: "Deposit invoice followed by final balance invoice",
    risk: "The deposit is treated like normal revenue without a clear connection to the final invoice or credit-note rules.",
    lattice:
      "Separate deposit/payment-request documents from the final VAT invoice workflow and keep the relationship exportable for bookkeeping.",
  },
  {
    title: "Rejected quote should not pollute invoice numbering",
    risk: "Quote-style orders reserve final invoice numbers even when the buyer never accepts the proposal.",
    lattice:
      "Use quote/proforma references until the store's final-invoice trigger is reached, reducing numbering gaps and manual cleanup.",
  },
];

const redFlags = [
  "The quote PDF, WooCommerce order, and final invoice each store customer VAT details in different places.",
  "Final invoice numbers are created for quotes that may be rejected or revised.",
  "Deposits, partial approvals, and scope changes are corrected in spreadsheets instead of linked credit notes.",
  "Customers email support for the accepted quote, invoice PDF, or corrected VAT details after checkout.",
  "The accountant cannot export quote reference, invoice number, VAT amount, payment state, and PDF link in one row.",
];

const faq = [
  {
    q: "What is a WooCommerce quote to invoice plugin?",
    a: "It is a workflow for stores that sell through quotes, estimates, proposals, or pay-by-invoice orders and then need a clean final invoice after approval. For EU stores, it should also cover VAT/BTW fields, invoice numbering, PDFs, credit notes, customer downloads, and accounting export.",
  },
  {
    q: "Should a quote create a final VAT invoice number immediately?",
    a: "Usually not. Many stores need a quote, estimate, proforma, or payment request first. Final invoice numbering should happen at the store's chosen trigger, such as acceptance, payment, shipment, or accounting approval.",
  },
  {
    q: "Can WooCommerce handle quote invoices with a normal PDF invoice plugin?",
    a: "A PDF plugin may render a document, but quote workflows also need approval state, revision history, VAT evidence, proforma timing, final invoice triggers, credit-note handling, and export consistency.",
  },
  {
    q: "Where does Lattice Invoices fit?",
    a: "Lattice Invoices early access is positioned for WooCommerce stores that need invoice-ready order metadata: quote references, VAT fields, proforma/final invoice timing, PDFs, customer downloads, credit notes, and accountant handoff.",
  },
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "WooCommerce quote to invoice plugin for EU B2B stores",
  description:
    "A buyer-intent guide for quote-to-invoice WooCommerce workflows with VAT evidence, approval fields, proforma timing, final invoice PDFs, credit notes, customer downloads, and accountant exports.",
  mainEntityOfPage: `${SITE_URL}/blog/woocommerce-quote-to-invoice-plugin`,
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
  "mailto:support@latticeplugins.com?subject=WooCommerce%20quote%20to%20invoice%20workflow%20review&body=Hi%20Lattice%2C%0A%0AI%20want%20a%20WooCommerce%20quote-to-invoice%20workflow%20review%20for%20Lattice%20Invoices%20early%20access.%0A%0AStore%20URL%3A%20%0ACountry%3A%20%0AQuote%2Festimate%20plugin%20or%20workflow%3A%20%0AB2B%20or%20B2C%3A%20%0AVAT%2FBTW%20fields%20needed%3A%20%0AProforma%20vs%20final%20invoice%20timing%3A%20%0ADeposits%2Fpartial%20acceptance%20needed%3A%20%0ACredit-note%20and%20export%20needs%3A%20";

export default function WooCommerceQuoteToInvoicePluginPage() {
  return (
    <main className="min-h-screen bg-slate-50">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <section className="bg-gradient-to-br from-slate-950 via-blue-950 to-emerald-900 text-white">
        <div className="max-w-5xl mx-auto px-6 py-16 lg:py-20">
          <p className="uppercase tracking-[0.3em] text-sm text-emerald-200 mb-4">WooCommerce quote to invoice plugin</p>
          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
            Turn WooCommerce quotes into VAT-ready invoices without numbering gaps or manual corrections.
          </h1>
          <p className="text-xl text-blue-50 leading-relaxed max-w-3xl mb-8">
            Quote-driven B2B stores need more than a nice estimate PDF. They need quote references, VAT/BTW fields, proforma approval, final invoice timing, credit notes, customer downloads, and accountant-ready export from one workflow.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href={mailto} className="bg-emerald-500 text-white px-8 py-4 rounded-xl font-semibold hover:bg-emerald-400 transition shadow-lg text-center">
              Request €49 quote-to-invoice review
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
              <h2 className="text-3xl font-bold mb-4">The buying problem: quote approval and invoice evidence drift apart</h2>
              <p className="text-slate-700 leading-relaxed mb-4">
                WooCommerce quote flows are useful for consulting, equipment, wholesale, custom projects, deposits, and service packages. The risk starts when the quote is accepted: customer VAT data, accepted scope, payment terms, final invoice number, PDF delivery, and accounting export often live in different tools.
              </p>
              <p className="text-slate-700 leading-relaxed">
                A sales-ready quote-to-invoice workflow should keep the commercial conversation flexible while protecting the accounting trail. That is exactly the buyer-intent path Lattice Invoices is being shaped around.
              </p>
            </div>

            <div className="bg-emerald-50 border border-emerald-100 rounded-2xl p-8">
              <h2 className="text-3xl font-bold mb-5">Quote-to-invoice readiness checklist</h2>
              <div className="space-y-4">
                {workflowSteps.map((item) => (
                  <div key={item.title} className="bg-white rounded-xl border border-emerald-100 p-5">
                    <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                    <p className="text-slate-700 leading-relaxed mb-2">{item.detail}</p>
                    <p className="text-slate-600 leading-relaxed"><strong>Buyer question:</strong> {item.buyerQuestion}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-2xl border shadow-sm p-8 overflow-hidden">
              <h2 className="text-3xl font-bold mb-6">Four quote workflow scenarios to test before buying</h2>
              <div className="overflow-x-auto">
                <table className="min-w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-slate-100 text-slate-700">
                      <th className="p-4 rounded-l-xl">Scenario</th>
                      <th className="p-4">Manual risk</th>
                      <th className="p-4 rounded-r-xl">Lattice Invoices direction</th>
                    </tr>
                  </thead>
                  <tbody>
                    {scenarios.map((item) => (
                      <tr key={item.title} className="border-b border-slate-100 align-top">
                        <td className="p-4 font-semibold text-slate-900">{item.title}</td>
                        <td className="p-4 text-slate-700">{item.risk}</td>
                        <td className="p-4 text-slate-700">{item.lattice}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div className="bg-white rounded-2xl border shadow-sm p-8">
              <h2 className="text-3xl font-bold mb-5">Red flags that justify a paid workflow review</h2>
              <div className="space-y-3">
                {redFlags.map((flag) => (
                  <div key={flag} className="flex gap-3 rounded-xl bg-red-50 border border-red-100 p-4">
                    <span className="text-red-600 font-bold">!</span>
                    <span className="text-slate-800">{flag}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-blue-50 border border-blue-100 rounded-2xl p-8">
              <h2 className="text-3xl font-bold mb-4">Early-access offer: €49 quote-to-invoice workflow review</h2>
              <p className="text-slate-700 leading-relaxed mb-5">
                Send your current quote/estimate plugin, VAT country, payment methods, proforma/final-invoice trigger, deposit workflow, and credit-note needs. The reply maps your setup to the Lattice Invoices early-access path and shows whether a €49 invoice workflow can remove manual admin.
              </p>
              <a href={mailto} className="inline-flex bg-blue-700 text-white px-7 py-3 rounded-xl font-semibold hover:bg-blue-800 transition">
                Send quote-to-invoice setup
              </a>
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
              <p className="text-sm uppercase tracking-[0.2em] text-blue-700 font-semibold mb-3">Lattice Invoices early access</p>
              <h2 className="text-2xl font-bold mb-3">Selling custom B2B orders through WooCommerce?</h2>
              <p className="text-slate-600 mb-5">
                Get a practical workflow review for quote references, VAT fields, proforma approval, final invoice timing, credit notes, customer downloads, and accountant exports.
              </p>
              <a href={mailto} className="block text-center bg-slate-950 text-white px-5 py-3 rounded-xl font-semibold hover:bg-slate-800 transition mb-3">
                Request quote invoice review
              </a>
              <Link href="/blog/woocommerce-proforma-invoice" className="block text-center border border-slate-200 px-5 py-3 rounded-xl font-semibold hover:bg-slate-50 transition mb-3">
                Proforma invoice workflow
              </Link>
              <Link href="/blog/woocommerce-purchase-order-invoices" className="block text-center border border-slate-200 px-5 py-3 rounded-xl font-semibold hover:bg-slate-50 transition mb-3">
                Purchase order invoice guide
              </Link>
              <Link href="/blog/woocommerce-partial-payment-invoices" className="block text-center border border-slate-200 px-5 py-3 rounded-xl font-semibold hover:bg-slate-50 transition mb-3">
                Partial payment invoice guide
              </Link>
              <Link href="/docs/woocommerce-eu-vat-invoice-setup" className="block text-center border border-slate-200 px-5 py-3 rounded-xl font-semibold hover:bg-slate-50 transition">
                Read setup guide
              </Link>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}
