import type { Metadata } from "next";
import Link from "next/link";

const SITE_URL = "https://latticeplugins.com";

export const metadata: Metadata = {
  title: "WooCommerce Invoice Reconciliation — Payments, VAT & Credit Notes",
  description:
    "A buyer guide for WooCommerce stores that need invoice reconciliation: paid/unpaid status, bank transfer matching, VAT totals, refunds, credit notes, customer PDFs, and accountant exports.",
  alternates: {
    canonical: `${SITE_URL}/blog/woocommerce-invoice-reconciliation`,
  },
  openGraph: {
    title: "WooCommerce invoice reconciliation for EU VAT stores",
    description:
      "How to reconcile WooCommerce invoices against payments, refunds, credit notes, VAT totals, bank-transfer references, due dates, and accountant exports.",
    url: `${SITE_URL}/blog/woocommerce-invoice-reconciliation`,
    siteName: "Lattice Plugins",
    type: "article",
  },
};

const reconciliationChecklist = [
  "Every invoice has a clear payment state: draft/proforma, issued, partially paid, paid, overdue, refunded, or credited",
  "Bank-transfer references, order numbers, customer company names, and invoice numbers are easy to match during month-end bookkeeping",
  "Partial refunds and failed payments create linked credit notes instead of silently changing the original invoice total",
  "VAT/BTW totals can be reconciled by country, tax rate, reverse-charge status, exemption reason, and accounting period",
  "Customer-facing PDFs, My Account downloads, and email attachments match the same invoice number visible in finance exports",
  "Accountant export rows include invoice number, payment method, paid date, due date, credit-note reference, VAT basis, and PDF URL",
];

const reconciliationRows = [
  ["Bank transfer paid later", "BACS order is created today, payment lands next week", "Keep proforma/request separate from final paid invoice and expose paid date/due date for finance."],
  ["Stripe/card paid immediately", "Payment succeeds before invoice PDF is emailed", "Issue invoice with paid status, transaction reference, VAT evidence, and customer download link."],
  ["Partial refund", "One line item or discount is refunded after the invoice was issued", "Create a credit note linked to the invoice instead of overwriting the original invoice total."],
  ["Subscription renewal", "Renewal invoice is generated automatically, then payment fails or retries", "Keep renewal invoice, failed-payment state, reminder trail, and final payment event connected."],
  ["Month-end accountant handoff", "Bookkeeper needs totals by VAT rate and payment status", "Export reconciled invoice/credit-note rows with PDF URLs, payment status, VAT basis, and customer metadata."],
];

const scenarios = [
  {
    title: "BACS payments that arrive days later",
    pain: "A customer chooses bank transfer. WooCommerce marks the order on-hold, finance sees money in the bank later, and nobody is sure whether the PDF should be a proforma, unpaid invoice, or paid invoice.",
    lattice: "Separate the payment-request/proforma stage from the final invoice packet, then store the paid date, bank-transfer reference, PDF, and export fields together.",
  },
  {
    title: "Refunds that break VAT totals",
    pain: "Support refunds part of an order but the accountant's spreadsheet still shows the original VAT invoice. The VAT return and customer PDF no longer line up.",
    lattice: "Create a linked credit note with the same VAT context and export both the original invoice and correction row for reconciliation.",
  },
  {
    title: "Mixed B2B VAT decisions",
    pain: "Some EU buyers are reverse-charged, some are domestic VAT, and some are manually exempt. Month-end reconciliation requires digging through order meta and email notes.",
    lattice: "Keep VAT ID, exemption reason, country pair, invoice wording, and VAT summary in one invoice record instead of scattered checkout metadata.",
  },
];

const faq = [
  {
    q: "What does invoice reconciliation mean in WooCommerce?",
    a: "It means matching every invoice and credit note to its WooCommerce order, payment status, paid date, refund state, VAT treatment, PDF document, customer download, and accountant export row so finance can close a period without manual guesswork.",
  },
  {
    q: "Why is bank transfer reconciliation harder than card payments?",
    a: "Bank transfer orders are often created before money arrives. Stores need a clean proforma or payment-request workflow, then a final invoice state when the payment is matched. Without that separation, accountants often reconcile from order notes and bank statements manually.",
  },
  {
    q: "Should refunds change the original invoice?",
    a: "Usually the issued invoice should remain preserved. A refund should create a linked credit note or correction document that references the original invoice number and carries the correct VAT treatment for the refunded amount.",
  },
  {
    q: "How does Lattice Invoices help with reconciliation?",
    a: "The early-access product path is focused on EU WooCommerce invoice operations: VAT fields, sequential numbers, PDFs, credit notes, bank-transfer workflows, due dates, customer downloads, payment-state evidence, and accountant-ready exports.",
  },
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "WooCommerce invoice reconciliation for EU VAT stores",
  description:
    "A buyer-intent guide for WooCommerce invoice reconciliation across payments, bank transfers, VAT evidence, refunds, credit notes, customer PDFs, and accountant exports.",
  mainEntityOfPage: `${SITE_URL}/blog/woocommerce-invoice-reconciliation`,
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
  "mailto:support@latticeplugins.com?subject=Lattice%20Invoices%20reconciliation%20early%20access&body=Hi%20Lattice%2C%0A%0AI%20need%20WooCommerce%20invoice%20reconciliation.%0A%0AStore%20URL%3A%20%0ACountry%3A%20%0ACurrent%20invoice%20plugin%3A%20%0APayment%20methods%20(BACS%2FStripe%2FPayPal)%3A%20%0ARefund%2Fcredit-note%20workflow%3A%20%0AVAT%2FBTW%20workflow%3A%20%0AAccounting%20export%20needs%3A%20%0ABiggest%20reconciliation%20problem%3A%20";

export default function WooCommerceInvoiceReconciliationPage() {
  return (
    <main className="min-h-screen bg-slate-50">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <section className="bg-gradient-to-br from-slate-950 via-emerald-950 to-blue-900 text-white">
        <div className="max-w-5xl mx-auto px-6 py-16 lg:py-20">
          <p className="uppercase tracking-[0.3em] text-sm text-emerald-200 mb-4">WooCommerce invoice reconciliation</p>
          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
            WooCommerce invoice reconciliation: match payments, VAT totals, PDFs, refunds, and credit notes.
          </h1>
          <p className="text-xl text-emerald-50 leading-relaxed max-w-3xl mb-8">
            WooCommerce orders are not the same as reconciled invoices. If finance needs to match bank transfers, paid dates, VAT basis, refunds, credit notes, and PDF evidence, your invoice workflow needs to carry more than an order status.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href={mailto} className="bg-emerald-500 text-white px-8 py-4 rounded-xl font-semibold hover:bg-emerald-400 transition shadow-lg text-center">
              Request reconciliation early access
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
              <h2 className="text-3xl font-bold mb-4">Why reconciliation becomes a purchase trigger</h2>
              <p className="text-slate-700 leading-relaxed mb-4">
                Many EU WooCommerce stores start by attaching a PDF invoice to order emails. The real pain appears later: bank transfers arrive after checkout, refunds need credit notes, reverse-charge orders need evidence, and accountants need export rows that agree with the issued PDFs.
              </p>
              <p className="text-slate-700 leading-relaxed">
                Lattice Invoices is being shaped around this operational gap: turn WooCommerce orders into finance-ready invoice packets with payment state, VAT evidence, customer PDFs, credit notes, and accountant handoff fields connected from the start.
              </p>
            </div>

            <div className="bg-white rounded-2xl border shadow-sm p-8">
              <h2 className="text-3xl font-bold mb-6">Invoice reconciliation readiness checklist</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {reconciliationChecklist.map((item) => (
                  <div key={item} className="flex gap-3 p-4 rounded-xl bg-slate-50 border border-slate-100">
                    <span className="text-emerald-600 font-bold">✓</span>
                    <span className="text-slate-800">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-2xl border shadow-sm p-8 overflow-hidden">
              <h2 className="text-3xl font-bold mb-4">Payment-to-invoice reconciliation map</h2>
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-slate-100 text-slate-700">
                      <th className="p-4 rounded-l-xl">Scenario</th>
                      <th className="p-4">What finance must match</th>
                      <th className="p-4 rounded-r-xl">Invoice workflow requirement</th>
                    </tr>
                  </thead>
                  <tbody>
                    {reconciliationRows.map(([scenario, match, requirement]) => (
                      <tr key={scenario} className="border-b border-slate-100">
                        <td className="p-4 font-semibold text-slate-900">{scenario}</td>
                        <td className="p-4 text-slate-600">{match}</td>
                        <td className="p-4 text-slate-800">{requirement}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div className="bg-white rounded-2xl border shadow-sm p-8">
              <h2 className="text-3xl font-bold mb-6">Common reconciliation failure points</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                {scenarios.map((scenario) => (
                  <div key={scenario.title} className="rounded-xl border border-slate-200 bg-slate-50 p-5">
                    <h3 className="text-xl font-bold mb-3">{scenario.title}</h3>
                    <p className="text-slate-600 mb-3">Problem: {scenario.pain}</p>
                    <p className="font-semibold text-slate-900">Lattice path: {scenario.lattice}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-emerald-50 border border-emerald-100 rounded-2xl p-8">
              <h2 className="text-3xl font-bold mb-4">Early-access offer: €49 invoice reconciliation workflow review</h2>
              <p className="text-slate-700 leading-relaxed mb-5">
                Send your store URL, country, current invoice plugin, payment methods, refund/credit-note workflow, VAT setup, and accountant export needs. The goal is to turn the reconciliation problem into a concrete Lattice Invoices workflow before month-end pressure hits.
              </p>
              <a href={mailto} className="inline-flex bg-emerald-600 text-white px-7 py-3 rounded-xl font-semibold hover:bg-emerald-700 transition">
                Send my reconciliation requirements
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
              <h2 className="text-2xl font-bold mb-3">Need reconciled invoice packets, not scattered order notes?</h2>
              <p className="text-slate-600 mb-5">
                Lattice Invoices is focused on VAT fields, sequential invoice numbers, bank-transfer workflows, due dates, credit notes, customer downloads, payment-state evidence, and accountant-ready exports for €49 early access.
              </p>
              <a href={mailto} className="block text-center bg-slate-950 text-white px-5 py-3 rounded-xl font-semibold hover:bg-slate-800 transition mb-3">
                Request early access
              </a>
              <Link href="/docs/woocommerce-eu-vat-invoice-setup" className="block text-center border border-slate-200 px-5 py-3 rounded-xl font-semibold hover:bg-slate-50 transition">
                Read setup guide
              </Link>
            </div>

            <div className="bg-emerald-50 rounded-2xl border border-emerald-100 p-6">
              <h3 className="text-xl font-bold mb-3">Related invoice guides</h3>
              <ul className="space-y-3 text-emerald-900 font-medium">
                <li><Link href="/blog/woocommerce-bank-transfer-invoice" className="hover:underline">Bank transfer invoice workflow</Link></li>
                <li><Link href="/blog/woocommerce-invoice-due-dates" className="hover:underline">Invoice due dates and payment terms</Link></li>
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
