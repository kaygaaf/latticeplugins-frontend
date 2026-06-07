import type { Metadata } from "next";
import Link from "next/link";

const SITE_URL = "https://latticeplugins.com";

export const metadata: Metadata = {
  title: "WooCommerce Invoice Compliance Checklist for EU VAT Stores",
  description:
    "A practical WooCommerce invoice compliance checklist for EU VAT stores: invoice numbers, VAT IDs, reverse charge, credit notes, PDFs, audit trail, exports, and customer downloads.",
  alternates: {
    canonical: `${SITE_URL}/blog/woocommerce-invoice-compliance-checklist`,
  },
  openGraph: {
    title: "WooCommerce invoice compliance checklist for EU VAT stores",
    description:
      "Use this checklist before choosing a WooCommerce invoice plugin: VAT fields, sequential numbers, PDF templates, credit notes, reverse-charge evidence, audit trail, and accounting export.",
    url: `${SITE_URL}/blog/woocommerce-invoice-compliance-checklist`,
    siteName: "Lattice Plugins",
    type: "article",
  },
};

const checklist = [
  {
    area: "Invoice identity",
    requirement: "Sequential invoice numbers that are separate from WooCommerce order IDs, with credit-note numbering that references the original invoice.",
    risk: "Order gaps, deleted test orders, refunds, or manual corrections can make finance exports look incomplete during an audit.",
  },
  {
    area: "Buyer VAT data",
    requirement: "Company name, VAT/BTW number, billing country, exemption reason, and reverse-charge status captured before invoice generation.",
    risk: "If VAT data lives only in order notes or email threads, the PDF, export, and customer download may disagree.",
  },
  {
    area: "VAT calculation evidence",
    requirement: "Clear totals by rate, country, exemption, reverse-charge treatment, discounts, shipping, and currency conversion when relevant.",
    risk: "Accountants end up rebuilding VAT returns from raw orders instead of trusted invoice records.",
  },
  {
    area: "PDF and customer copy",
    requirement: "Invoice PDFs attached to emails, available in My Account, and regenerated only through a controlled correction workflow.",
    risk: "Customers and finance can hold different versions of the same invoice after refunds or template changes.",
  },
  {
    area: "Refunds and credit notes",
    requirement: "Partial and full refunds create linked credit notes with the original invoice number, corrected VAT totals, and visible reason.",
    risk: "Changing the original invoice after issue weakens audit evidence and confuses the customer.",
  },
  {
    area: "Payment-state trail",
    requirement: "Invoice, proforma, due date, paid date, payment method, bank-transfer reference, reminders, and reconciliation status stay connected.",
    risk: "BACS and net-term orders become manual spreadsheets when payment arrives days or weeks after checkout.",
  },
];

const buyerQuestions = [
  "Can the plugin issue a proforma before payment and a final VAT invoice after payment?",
  "Can it keep invoice numbers sequential even when WooCommerce order IDs are not?",
  "Does it create credit notes instead of overwriting the original invoice after refunds?",
  "Can customers download the same PDF that finance exports and emails reference?",
  "Can the accountant export include invoice number, VAT treatment, paid date, PDF URL, and credit-note links?",
  "Is reverse-charge wording and VAT-ID evidence visible on the PDF, not just hidden in metadata?",
];

const workflowRows = [
  ["Domestic B2C sale", "Invoice number, VAT rate, VAT amount, customer PDF", "Automatically issue a paid VAT invoice after checkout."],
  ["EU B2B reverse charge", "VAT ID, country pair, reverse-charge wording, zero VAT reason", "Validate/capture B2B fields before invoice issue and preserve the wording."],
  ["Bank transfer / invoice me", "Proforma, due date, payment reference, paid date", "Separate payment request from final invoice and reconcile when money arrives."],
  ["Partial refund", "Original invoice, refund line, credit-note number, corrected VAT", "Issue a linked credit note without mutating the original invoice."],
  ["Month-end close", "Invoice list, credit notes, payment status, VAT totals, PDF URLs", "Export accountant-ready rows that match customer-visible PDFs."],
];

const faq = [
  {
    q: "What should a WooCommerce invoice compliance checklist include?",
    a: "At minimum: sequential invoice numbers, VAT/BTW fields, invoice PDF delivery, reverse-charge wording, VAT-rate summaries, credit notes for refunds, payment-state history, customer downloads, audit trail, and accountant-ready exports.",
  },
  {
    q: "Are WooCommerce order numbers enough for compliant invoices?",
    a: "Usually not for serious EU VAT workflows. Order IDs can have gaps, test orders, cancelled orders, or plugin-created records. Finance teams normally need a controlled invoice-number sequence and a separate credit-note sequence.",
  },
  {
    q: "Should a refund edit the existing invoice PDF?",
    a: "The safer workflow is to keep the original issued invoice intact and create a linked credit note with its own number and VAT totals. That gives customers and accountants a clear correction trail.",
  },
  {
    q: "How does Lattice Invoices use this checklist?",
    a: "Lattice Invoices early access is focused on turning this checklist into a practical WooCommerce workflow: VAT fields, sequential numbering, PDFs, credit notes, bank-transfer/proforma handling, audit trail, reconciliation, and accountant export.",
  },
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "WooCommerce invoice compliance checklist for EU VAT stores",
  description:
    "A buyer-intent checklist for WooCommerce stores choosing an invoice plugin for EU VAT, reverse charge, credit notes, PDFs, audit trails, and accounting export.",
  mainEntityOfPage: `${SITE_URL}/blog/woocommerce-invoice-compliance-checklist`,
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
  "mailto:support@latticeplugins.com?subject=Lattice%20Invoices%20compliance%20checklist%20review&body=Hi%20Lattice%2C%0A%0AI%20want%20a%20WooCommerce%20invoice%20compliance%20review.%0A%0AStore%20URL%3A%20%0ACountry%3A%20%0ACurrent%20invoice%20plugin%3A%20%0APayment%20methods%3A%20%0AVAT%2FBTW%20workflow%3A%20%0ARefund%2Fcredit-note%20workflow%3A%20%0AAccounting%20export%20needs%3A%20%0ABiggest%20invoice%20compliance%20risk%3A%20";

export default function WooCommerceInvoiceComplianceChecklistPage() {
  return (
    <main className="min-h-screen bg-slate-50">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <section className="bg-gradient-to-br from-slate-950 via-blue-950 to-emerald-900 text-white">
        <div className="max-w-5xl mx-auto px-6 py-16 lg:py-20">
          <p className="uppercase tracking-[0.3em] text-sm text-emerald-200 mb-4">WooCommerce invoice compliance checklist</p>
          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
            WooCommerce invoice compliance checklist for EU VAT stores.
          </h1>
          <p className="text-xl text-blue-50 leading-relaxed max-w-3xl mb-8">
            Before buying or switching invoice plugins, verify the workflow that actually matters: invoice numbers, VAT IDs, reverse charge, credit notes, PDF delivery, customer downloads, payment evidence, and accountant export.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href={mailto} className="bg-emerald-500 text-white px-8 py-4 rounded-xl font-semibold hover:bg-emerald-400 transition shadow-lg text-center">
              Request a €49 invoice checklist review
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
              <h2 className="text-3xl font-bold mb-4">Why this checklist is a buying trigger</h2>
              <p className="text-slate-700 leading-relaxed mb-4">
                Many WooCommerce stores only notice invoice risk when the accountant asks for sequential numbers, credit notes, reverse-charge proof, or a month-end export that matches customer PDFs. By then, invoice data is often spread across orders, emails, refund notes, payment gateways, and spreadsheets.
              </p>
              <p className="text-slate-700 leading-relaxed">
                Lattice Invoices is the focused product path for this problem: a practical EU WooCommerce invoice workflow around VAT evidence, PDFs, credit notes, bank-transfer/proforma handling, audit trail, reconciliation, and accounting handoff.
              </p>
            </div>

            <div className="bg-white rounded-2xl border shadow-sm p-8">
              <h2 className="text-3xl font-bold mb-6">The invoice compliance checklist</h2>
              <div className="space-y-4">
                {checklist.map((item) => (
                  <div key={item.area} className="rounded-xl border border-slate-200 bg-slate-50 p-5">
                    <p className="text-sm uppercase tracking-[0.2em] text-emerald-700 font-semibold mb-2">{item.area}</p>
                    <h3 className="text-xl font-bold mb-2">{item.requirement}</h3>
                    <p className="text-slate-600">Risk if missing: {item.risk}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-2xl border shadow-sm p-8 overflow-hidden">
              <h2 className="text-3xl font-bold mb-4">Workflow scenarios to test before buying</h2>
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-slate-100 text-slate-700">
                      <th className="p-4 rounded-l-xl">Scenario</th>
                      <th className="p-4">Compliance evidence</th>
                      <th className="p-4 rounded-r-xl">Expected invoice workflow</th>
                    </tr>
                  </thead>
                  <tbody>
                    {workflowRows.map(([scenario, evidence, workflow]) => (
                      <tr key={scenario} className="border-b border-slate-100">
                        <td className="p-4 font-semibold text-slate-900">{scenario}</td>
                        <td className="p-4 text-slate-600">{evidence}</td>
                        <td className="p-4 text-slate-800">{workflow}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div className="bg-blue-50 border border-blue-100 rounded-2xl p-8">
              <h2 className="text-3xl font-bold mb-5">Questions to ask any WooCommerce invoice plugin vendor</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {buyerQuestions.map((question) => (
                  <div key={question} className="flex gap-3 bg-white rounded-xl border border-blue-100 p-4">
                    <span className="text-blue-600 font-bold">?</span>
                    <span className="text-slate-800">{question}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-emerald-50 border border-emerald-100 rounded-2xl p-8">
              <h2 className="text-3xl font-bold mb-4">Early-access offer: €49 invoice compliance workflow review</h2>
              <p className="text-slate-700 leading-relaxed mb-5">
                Send your store URL, country, current invoice plugin, payment methods, VAT workflow, refund/credit-note process, and accounting export needs. You will get a concrete readiness review mapped to the Lattice Invoices product path.
              </p>
              <a href={mailto} className="inline-flex bg-emerald-600 text-white px-7 py-3 rounded-xl font-semibold hover:bg-emerald-700 transition">
                Send my invoice workflow for review
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
              <p className="text-sm uppercase tracking-[0.2em] text-emerald-700 font-semibold mb-3">Lattice Invoices early access</p>
              <h2 className="text-2xl font-bold mb-3">Need a WooCommerce invoice workflow finance can trust?</h2>
              <p className="text-slate-600 mb-5">
                Lattice Invoices is being built around EU VAT invoices, sequential numbering, credit notes, customer PDFs, proforma/BACS workflows, audit trail, reconciliation, and accountant exports.
              </p>
              <a href={mailto} className="block text-center bg-slate-950 text-white px-5 py-3 rounded-xl font-semibold hover:bg-slate-800 transition mb-3">
                Request checklist review
              </a>
              <Link href="/docs/woocommerce-eu-vat-invoice-setup" className="block text-center border border-slate-200 px-5 py-3 rounded-xl font-semibold hover:bg-slate-50 transition">
                Read setup guide
              </Link>
            </div>

            <div className="bg-emerald-50 rounded-2xl border border-emerald-100 p-6">
              <h3 className="text-xl font-bold mb-3">Related invoice guides</h3>
              <ul className="space-y-3 text-emerald-900 font-medium">
                <li><Link href="/blog/woocommerce-invoice-numbering" className="hover:underline">Sequential invoice numbering</Link></li>
                <li><Link href="/blog/woocommerce-reverse-charge-invoices" className="hover:underline">Reverse-charge invoices</Link></li>
                <li><Link href="/blog/woocommerce-credit-notes-refunds" className="hover:underline">Credit notes and refunds</Link></li>
                <li><Link href="/blog/woocommerce-invoice-audit-trail" className="hover:underline">Invoice audit trail</Link></li>
                <li><Link href="/blog/woocommerce-invoice-reconciliation" className="hover:underline">Invoice reconciliation</Link></li>
              </ul>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}
