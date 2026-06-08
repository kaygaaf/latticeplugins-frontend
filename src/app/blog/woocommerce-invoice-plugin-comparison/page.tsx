import type { Metadata } from "next";
import Link from "next/link";

const SITE_URL = "https://latticeplugins.com";

export const metadata: Metadata = {
  title: "WooCommerce Invoice Plugin Comparison for EU VAT Stores",
  description:
    "Compare WooCommerce invoice plugins for EU VAT: PDF invoices, VAT fields, reverse charge, credit notes, invoice numbering, BACS/proforma workflows, and accountant exports.",
  alternates: {
    canonical: `${SITE_URL}/blog/woocommerce-invoice-plugin-comparison`,
  },
  openGraph: {
    title: "WooCommerce invoice plugin comparison for EU VAT stores",
    description:
      "A buyer-focused comparison checklist for WooCommerce stores choosing between invoice plugins, PDF tools, VAT add-ons, and the Lattice Invoices early-access workflow.",
    url: `${SITE_URL}/blog/woocommerce-invoice-plugin-comparison`,
    siteName: "Lattice Plugins",
    type: "article",
  },
};

const comparisonRows = [
  {
    option: "Generic PDF invoice plugin",
    strengths: "Fast PDF generation, email attachments, basic invoice templates, often inexpensive.",
    gaps: "Usually weak on EU B2B VAT fields, reverse-charge evidence, credit-note workflows, and accountant exports.",
    bestFor: "Small domestic B2C stores with simple paid-at-checkout orders.",
  },
  {
    option: "VAT field / tax add-on",
    strengths: "Captures VAT IDs, company fields, exemption rules, and tax validation metadata.",
    gaps: "Does not always own invoice numbering, PDF delivery, credit notes, or reconciliation after payment.",
    bestFor: "Stores that already have invoice PDFs but need cleaner B2B VAT data at checkout.",
  },
  {
    option: "Accounting connector",
    strengths: "Syncs orders, payments, taxes, and customers into bookkeeping software.",
    gaps: "May export WooCommerce order data rather than a controlled invoice record customers can download and audit.",
    bestFor: "Stores where the accountant already lives in one accounting platform and invoice PDFs are solved elsewhere.",
  },
  {
    option: "Lattice Invoices early access",
    strengths: "Focused EU VAT workflow: sequential invoice numbers, PDF delivery, credit notes, reverse charge, BACS/proforma, audit trail, reconciliation, and accountant handoff.",
    gaps: "Early-access product path; best for stores willing to share their real invoice workflow before the final release.",
    bestFor: "EU WooCommerce stores that sell B2B, use bank transfer, handle refunds, or need invoice evidence finance can trust.",
  },
];

const scoringCriteria = [
  "Sequential invoice numbers separate from WooCommerce order IDs",
  "Customer VAT/BTW number and company fields captured before invoice issue",
  "Reverse-charge wording and zero-VAT reasons visible on the PDF",
  "Credit notes created for refunds instead of editing issued invoices",
  "Proforma and final-invoice flow for bank transfer or Net 14/30 payment terms",
  "Customer invoice downloads that match email attachments and accounting exports",
  "Audit trail for corrections, regenerated PDFs, payment status, and reconciliation",
  "Accountant export with invoice number, VAT treatment, paid date, PDF URL, and credit-note references",
];

const buyerScenarios = [
  {
    scenario: "You sell B2B across EU borders",
    need: "VAT ID capture, country evidence, reverse-charge wording, and a PDF that proves why VAT was not charged.",
    test: "Place a test B2B order with a company VAT number and verify the invoice, order metadata, and export all agree.",
  },
  {
    scenario: "You accept bank transfer / invoice-me orders",
    need: "A proforma or payment request before money arrives, then a final paid invoice after reconciliation.",
    test: "Create a BACS order, mark it paid later, and confirm the final invoice date/payment status are correct.",
  },
  {
    scenario: "You process partial refunds",
    need: "Linked credit notes with their own numbers, VAT correction totals, and visible reference to the original invoice.",
    test: "Refund one line item and confirm the original invoice is preserved while the credit note is created separately.",
  },
  {
    scenario: "Your accountant asks for month-end evidence",
    need: "A clean export containing invoice status, paid status, VAT treatment, credit notes, and PDF links.",
    test: "Export a mixed month of paid, unpaid, B2B, refund, and bank-transfer orders and check if it closes without spreadsheets.",
  },
];

const faq = [
  {
    q: "What is the best WooCommerce invoice plugin for EU VAT stores?",
    a: "The best choice depends on your workflow. A simple PDF plugin can work for domestic B2C orders, but EU B2B stores should compare VAT fields, reverse-charge wording, sequential invoice numbers, credit notes, customer downloads, and accounting export before buying.",
  },
  {
    q: "Should I buy a PDF invoice plugin or a VAT plugin first?",
    a: "If the invoice PDF is missing, PDF delivery is urgent. If your PDFs already exist but contain weak VAT evidence, the checkout VAT workflow may be the bottleneck. For EU B2B stores the two need to work together, not as disconnected plugins.",
  },
  {
    q: "Why are WooCommerce order IDs not enough for invoices?",
    a: "Order IDs can include gaps, cancelled tests, drafts, failed checkouts, and unrelated records. Finance teams often need a controlled invoice-number sequence and a separate credit-note sequence that maps to issued documents.",
  },
  {
    q: "Where does Lattice Invoices fit in this comparison?",
    a: "Lattice Invoices is the focused early-access product path for WooCommerce EU VAT invoicing: sequential numbering, VAT fields, PDF delivery, credit notes, BACS/proforma handling, audit trail, reconciliation, and accountant-ready export.",
  },
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "WooCommerce invoice plugin comparison for EU VAT stores",
  description:
    "A buyer-focused comparison of WooCommerce invoice plugin options for EU VAT, B2B reverse charge, PDF invoices, credit notes, and accountant exports.",
  mainEntityOfPage: `${SITE_URL}/blog/woocommerce-invoice-plugin-comparison`,
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
  "mailto:support@latticeplugins.com?subject=Compare%20WooCommerce%20invoice%20plugins&body=Hi%20Lattice%2C%0A%0AI%20want%20help%20comparing%20WooCommerce%20invoice%20plugins.%0A%0AStore%20URL%3A%20%0ACountry%3A%20%0ACurrent%20invoice%20plugin%3A%20%0ACurrent%20VAT%20plugin%3A%20%0APayment%20methods%3A%20%0AB2B%20or%20B2C%3A%20%0ARefund%2Fcredit-note%20needs%3A%20%0AAccounting%20software%3A%20%0ABiggest%20decision%20risk%3A%20";

export default function WooCommerceInvoicePluginComparisonPage() {
  return (
    <main className="min-h-screen bg-slate-50">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <section className="bg-gradient-to-br from-slate-950 via-indigo-950 to-emerald-900 text-white">
        <div className="max-w-5xl mx-auto px-6 py-16 lg:py-20">
          <p className="uppercase tracking-[0.3em] text-sm text-emerald-200 mb-4">WooCommerce invoice plugin comparison</p>
          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
            Compare WooCommerce invoice plugins before your accountant finds the gaps.
          </h1>
          <p className="text-xl text-indigo-50 leading-relaxed max-w-3xl mb-8">
            PDF invoices alone are not enough for many EU VAT stores. Use this comparison to choose a workflow that handles VAT numbers, reverse charge, credit notes, proformas, bank transfer, reconciliation, and exports.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href={mailto} className="bg-emerald-500 text-white px-8 py-4 rounded-xl font-semibold hover:bg-emerald-400 transition shadow-lg text-center">
              Request a €49 plugin comparison review
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
              <h2 className="text-3xl font-bold mb-4">The real comparison is workflow coverage</h2>
              <p className="text-slate-700 leading-relaxed mb-4">
                Most WooCommerce invoice plugin comparisons stop at PDF templates and email attachments. Those matter, but they do not answer the expensive questions: can finance trust the invoice number sequence, can B2B VAT evidence survive refunds, and can customers download the same document your accountant exports?
              </p>
              <p className="text-slate-700 leading-relaxed">
                Lattice Invoices is positioned around those workflow gaps. The early-access review turns your current stack into a concrete buying decision: keep your current PDF plugin, add VAT workflow support, or move toward the Lattice Invoices product path.
              </p>
            </div>

            <div className="bg-white rounded-2xl border shadow-sm p-8 overflow-hidden">
              <h2 className="text-3xl font-bold mb-6">Plugin option comparison</h2>
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-slate-100 text-slate-700">
                      <th className="p-4 rounded-l-xl">Option</th>
                      <th className="p-4">Strengths</th>
                      <th className="p-4">Common gaps</th>
                      <th className="p-4 rounded-r-xl">Best fit</th>
                    </tr>
                  </thead>
                  <tbody>
                    {comparisonRows.map((row) => (
                      <tr key={row.option} className="border-b border-slate-100 align-top">
                        <td className="p-4 font-semibold text-slate-900">{row.option}</td>
                        <td className="p-4 text-slate-700">{row.strengths}</td>
                        <td className="p-4 text-slate-600">{row.gaps}</td>
                        <td className="p-4 text-slate-800">{row.bestFor}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div className="bg-emerald-50 border border-emerald-100 rounded-2xl p-8">
              <h2 className="text-3xl font-bold mb-5">Score every plugin on these eight checks</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {scoringCriteria.map((criterion, index) => (
                  <div key={criterion} className="flex gap-3 bg-white rounded-xl border border-emerald-100 p-4">
                    <span className="text-emerald-700 font-bold">{index + 1}</span>
                    <span className="text-slate-800">{criterion}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-2xl border shadow-sm p-8">
              <h2 className="text-3xl font-bold mb-6">Buyer scenarios that expose weak invoice plugins</h2>
              <div className="space-y-4">
                {buyerScenarios.map((item) => (
                  <div key={item.scenario} className="rounded-xl border border-slate-200 bg-slate-50 p-5">
                    <h3 className="text-xl font-bold mb-2">{item.scenario}</h3>
                    <p className="text-slate-700 mb-2"><strong>Need:</strong> {item.need}</p>
                    <p className="text-slate-600"><strong>Test before buying:</strong> {item.test}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-indigo-50 border border-indigo-100 rounded-2xl p-8">
              <h2 className="text-3xl font-bold mb-4">Early-access offer: €49 invoice plugin comparison review</h2>
              <p className="text-slate-700 leading-relaxed mb-5">
                Send your store URL, current invoice/VAT plugins, payment methods, refund workflow, and accounting needs. You will get a decision-focused review that maps your current stack to the Lattice Invoices roadmap and highlights the fastest route to a safer EU VAT invoice workflow.
              </p>
              <a href={mailto} className="inline-flex bg-indigo-700 text-white px-7 py-3 rounded-xl font-semibold hover:bg-indigo-800 transition">
                Send my plugin stack for review
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
              <p className="text-sm uppercase tracking-[0.2em] text-indigo-700 font-semibold mb-3">Lattice Invoices early access</p>
              <h2 className="text-2xl font-bold mb-3">Choosing between invoice plugins?</h2>
              <p className="text-slate-600 mb-5">
                Get a practical comparison against EU VAT workflows: invoice numbers, PDF delivery, reverse charge, credit notes, proformas, reconciliation, and exports.
              </p>
              <a href={mailto} className="block text-center bg-slate-950 text-white px-5 py-3 rounded-xl font-semibold hover:bg-slate-800 transition mb-3">
                Request comparison review
              </a>
              <Link href="/docs/woocommerce-eu-vat-invoice-setup" className="block text-center border border-slate-200 px-5 py-3 rounded-xl font-semibold hover:bg-slate-50 transition">
                Read setup guide
              </Link>
            </div>

            <div className="bg-emerald-50 rounded-2xl border border-emerald-100 p-6">
              <h3 className="text-xl font-bold mb-3">Related invoice guides</h3>
              <ul className="space-y-3 text-emerald-900 font-medium">
                <li><Link href="/blog/woocommerce-invoice-compliance-checklist" className="hover:underline">Compliance checklist</Link></li>
                <li><Link href="/blog/woocommerce-invoice-numbering" className="hover:underline">Sequential invoice numbering</Link></li>
                <li><Link href="/blog/woocommerce-vat-number-checkout-field" className="hover:underline">VAT number checkout field</Link></li>
                <li><Link href="/blog/woocommerce-credit-notes-refunds" className="hover:underline">Credit notes and refunds</Link></li>
                <li><Link href="/blog/woocommerce-invoice-export-accounting" className="hover:underline">Accounting export handoff</Link></li>
              </ul>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}
