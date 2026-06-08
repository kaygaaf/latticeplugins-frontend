import type { Metadata } from "next";
import Link from "next/link";

const SITE_URL = "https://latticeplugins.com";

export const metadata: Metadata = {
  title: "WooCommerce B2B Invoice Plugin for EU VAT Stores",
  description:
    "A buyer-intent guide for choosing a WooCommerce B2B invoice plugin: VAT numbers, company checkout fields, reverse charge, proforma invoices, bank transfer, credit notes, and accountant exports.",
  alternates: {
    canonical: `${SITE_URL}/blog/woocommerce-b2b-invoice-plugin`,
  },
  openGraph: {
    title: "WooCommerce B2B invoice plugin for EU VAT stores",
    description:
      "Use this checklist to choose a WooCommerce B2B invoice workflow that handles VAT evidence, invoice numbers, bank transfer, credit notes, and accountant-ready exports.",
    url: `${SITE_URL}/blog/woocommerce-b2b-invoice-plugin`,
    siteName: "Lattice Plugins",
    type: "article",
  },
};

const requirements = [
  {
    title: "B2B checkout evidence before invoice issue",
    detail:
      "Company name, VAT/BTW number, billing country, payment method, and exemption reason should be captured before the invoice number is issued.",
  },
  {
    title: "Sequential invoice and credit-note numbers",
    detail:
      "B2B finance teams usually need invoice numbers separate from WooCommerce order IDs, plus linked credit-note numbers for refunds.",
  },
  {
    title: "Reverse-charge wording on the PDF",
    detail:
      "If VAT is not charged, the invoice PDF should explain why: reverse charge, VAT exempt, domestic exemption, or manual finance decision.",
  },
  {
    title: "Bank transfer and proforma support",
    detail:
      "B2B stores often need a payment request before money arrives and a final paid invoice after reconciliation.",
  },
  {
    title: "Accountant-ready export",
    detail:
      "Month-end export should include invoice number, VAT treatment, paid status, credit-note references, customer details, and PDF links.",
  },
];

const scenarios = [
  {
    scenario: "EU B2B reverse-charge order",
    workflow:
      "Customer enters company and VAT number → VAT evidence is stored → invoice PDF shows reverse-charge wording → export includes VAT treatment.",
    weakPluginSignal:
      "The PDF shows €0 VAT but does not explain why, or the VAT ID lives only in a note field.",
  },
  {
    scenario: "Bank-transfer B2B order",
    workflow:
      "Order is placed with BACS → proforma/payment request is sent → finance marks paid → final invoice date/status is updated.",
    weakPluginSignal:
      "The plugin issues a final invoice immediately even though no payment has arrived yet.",
  },
  {
    scenario: "Partial refund after invoice issue",
    workflow:
      "Original invoice is preserved → separate credit note is generated → export links the credit note to the original invoice.",
    weakPluginSignal:
      "The plugin edits the old invoice or hides refund VAT corrections inside the WooCommerce order timeline.",
  },
  {
    scenario: "Accountant asks for proof",
    workflow:
      "Finance exports a month of invoices with PDF URLs, payment state, VAT decision, customer VAT ID, and refund links.",
    weakPluginSignal:
      "Someone still has to reconcile invoice PDFs, order exports, payment status, and tax evidence in a spreadsheet.",
  },
];

const faq = [
  {
    q: "What should a WooCommerce B2B invoice plugin include?",
    a: "For EU B2B stores, the plugin should cover company and VAT number capture, sequential invoice numbers, reverse-charge wording, credit notes, proforma or bank-transfer workflows, customer PDF downloads, audit trail, and accountant exports.",
  },
  {
    q: "Is a PDF invoice plugin enough for B2B WooCommerce orders?",
    a: "Not always. A PDF plugin can create documents, but B2B invoicing also depends on VAT evidence, payment status, credit-note rules, and export data that finance can verify.",
  },
  {
    q: "Should B2B invoice numbers use WooCommerce order IDs?",
    a: "Many stores keep invoice numbers separate from order IDs because orders can fail, be cancelled, or include test records. A controlled invoice sequence and a separate credit-note sequence are safer for finance review.",
  },
  {
    q: "Where does Lattice Invoices fit?",
    a: "Lattice Invoices is the early-access product path for WooCommerce EU VAT and B2B invoice workflows: VAT fields, invoice numbers, PDFs, credit notes, BACS/proforma, audit trail, reconciliation, and accountant handoff.",
  },
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "WooCommerce B2B invoice plugin for EU VAT stores",
  description:
    "A buyer-intent checklist for choosing a WooCommerce B2B invoice plugin with VAT evidence, reverse charge, bank transfer, credit notes, and accountant exports.",
  mainEntityOfPage: `${SITE_URL}/blog/woocommerce-b2b-invoice-plugin`,
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
  "mailto:support@latticeplugins.com?subject=WooCommerce%20B2B%20invoice%20plugin%20early%20access&body=Hi%20Lattice%2C%0A%0AI%20want%20help%20with%20WooCommerce%20B2B%20invoicing.%0A%0AStore%20URL%3A%20%0ACountry%3A%20%0AB2B%20countries%3A%20%0ACurrent%20invoice%20plugin%3A%20%0ACurrent%20VAT%20plugin%3A%20%0APayment%20methods%3A%20%0AReverse-charge%20needs%3A%20%0ARefund%2Fcredit-note%20needs%3A%20%0AAccounting%20software%3A%20";

export default function WooCommerceB2BInvoicePluginPage() {
  return (
    <main className="min-h-screen bg-slate-50">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <section className="bg-gradient-to-br from-slate-950 via-blue-950 to-emerald-900 text-white">
        <div className="max-w-5xl mx-auto px-6 py-16 lg:py-20">
          <p className="uppercase tracking-[0.3em] text-sm text-emerald-200 mb-4">WooCommerce B2B invoice plugin</p>
          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
            Choose a WooCommerce B2B invoice plugin that finance can trust.
          </h1>
          <p className="text-xl text-blue-50 leading-relaxed max-w-3xl mb-8">
            B2B invoicing is more than sending a PDF. EU stores need VAT numbers, reverse-charge evidence, bank-transfer workflows, credit notes, invoice numbers, and accountant exports that all agree.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href={mailto} className="bg-emerald-500 text-white px-8 py-4 rounded-xl font-semibold hover:bg-emerald-400 transition shadow-lg text-center">
              Request €49 B2B invoice workflow review
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
              <h2 className="text-3xl font-bold mb-4">The buying problem: PDF output is not the whole B2B workflow</h2>
              <p className="text-slate-700 leading-relaxed mb-4">
                Many WooCommerce invoice plugins look good on a demo order. The real test is a mixed B2B month: reverse-charge orders, bank-transfer orders, unpaid invoices, refunds, customer downloads, and an accountant asking for clean evidence.
              </p>
              <p className="text-slate-700 leading-relaxed">
                Use this checklist before buying another PDF-only plugin. If the plugin cannot connect checkout VAT data, invoice numbers, payment state, credit notes, and exports, the finance cleanup still lands on you.
              </p>
            </div>

            <div className="bg-emerald-50 border border-emerald-100 rounded-2xl p-8">
              <h2 className="text-3xl font-bold mb-5">Five requirements for B2B invoice readiness</h2>
              <div className="space-y-4">
                {requirements.map((item, index) => (
                  <div key={item.title} className="bg-white rounded-xl border border-emerald-100 p-5">
                    <p className="text-emerald-700 font-bold mb-1">Requirement {index + 1}</p>
                    <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                    <p className="text-slate-700 leading-relaxed">{item.detail}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-2xl border shadow-sm p-8 overflow-hidden">
              <h2 className="text-3xl font-bold mb-6">Scenario tests before you choose a plugin</h2>
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-slate-100 text-slate-700">
                      <th className="p-4 rounded-l-xl">Scenario</th>
                      <th className="p-4">Workflow to verify</th>
                      <th className="p-4 rounded-r-xl">Weak plugin signal</th>
                    </tr>
                  </thead>
                  <tbody>
                    {scenarios.map((item) => (
                      <tr key={item.scenario} className="border-b border-slate-100 align-top">
                        <td className="p-4 font-semibold text-slate-900">{item.scenario}</td>
                        <td className="p-4 text-slate-700">{item.workflow}</td>
                        <td className="p-4 text-slate-600">{item.weakPluginSignal}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div className="bg-blue-50 border border-blue-100 rounded-2xl p-8">
              <h2 className="text-3xl font-bold mb-4">Early-access offer: €49 B2B invoice workflow review</h2>
              <p className="text-slate-700 leading-relaxed mb-5">
                Send your current plugin stack, payment methods, VAT countries, refund workflow, and accounting software. Lattice will map your B2B invoice gaps and recommend the fastest path: keep your PDF plugin, add VAT workflow coverage, or move toward the Lattice Invoices early-access product path.
              </p>
              <a href={mailto} className="inline-flex bg-blue-700 text-white px-7 py-3 rounded-xl font-semibold hover:bg-blue-800 transition">
                Send my B2B invoice workflow
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
              <h2 className="text-2xl font-bold mb-3">Selling B2B through WooCommerce?</h2>
              <p className="text-slate-600 mb-5">
                Get a practical workflow review for VAT IDs, reverse charge, invoice numbers, credit notes, BACS/proforma, customer downloads, and accountant exports.
              </p>
              <a href={mailto} className="block text-center bg-slate-950 text-white px-5 py-3 rounded-xl font-semibold hover:bg-slate-800 transition mb-3">
                Request B2B invoice review
              </a>
              <Link href="/docs/woocommerce-eu-vat-invoice-setup" className="block text-center border border-slate-200 px-5 py-3 rounded-xl font-semibold hover:bg-slate-50 transition">
                Read setup guide
              </Link>
            </div>

            <div className="bg-emerald-50 rounded-2xl border border-emerald-100 p-6">
              <h3 className="text-xl font-bold mb-3">Related invoice guides</h3>
              <ul className="space-y-3 text-emerald-900 font-medium">
                <li><Link href="/blog/woocommerce-vat-number-checkout-field" className="hover:underline">VAT number checkout field</Link></li>
                <li><Link href="/blog/woocommerce-reverse-charge-invoices" className="hover:underline">Reverse-charge invoices</Link></li>
                <li><Link href="/blog/woocommerce-bank-transfer-invoice" className="hover:underline">Bank transfer invoice workflow</Link></li>
                <li><Link href="/blog/woocommerce-credit-notes-refunds" className="hover:underline">Credit notes and refunds</Link></li>
                <li><Link href="/blog/woocommerce-invoice-plugin-comparison" className="hover:underline">Invoice plugin comparison</Link></li>
              </ul>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}
