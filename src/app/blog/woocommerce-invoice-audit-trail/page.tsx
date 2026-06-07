import type { Metadata } from "next";
import Link from "next/link";

const SITE_URL = "https://latticeplugins.com";

export const metadata: Metadata = {
  title: "WooCommerce Invoice Audit Trail — EU VAT, PDFs & Credit Notes",
  description:
    "A practical buyer guide for WooCommerce stores that need an invoice audit trail: VAT evidence, PDF versions, credit notes, payment events, customer downloads, and accountant handoff.",
  alternates: {
    canonical: `${SITE_URL}/blog/woocommerce-invoice-audit-trail`,
  },
  openGraph: {
    title: "WooCommerce invoice audit trail for EU VAT stores",
    description:
      "How WooCommerce stores can keep invoice numbers, VAT/BTW fields, PDF versions, refunds, customer downloads, payment events, and accountant exports audit-ready.",
    url: `${SITE_URL}/blog/woocommerce-invoice-audit-trail`,
    siteName: "Lattice Plugins",
    type: "article",
  },
};

const auditChecklist = [
  "Every invoice number is immutable once issued, including the invoice date, customer legal name, billing country, and VAT/BTW evidence",
  "Each PDF version is tied to the WooCommerce order, payment state, email delivery event, My Account download, and accountant export row",
  "Refunds create credit notes that reference the original invoice number and preserve the original VAT treatment",
  "Reverse-charge and VAT-exempt decisions store the VAT ID, validation status, country pair, and wording used on the invoice",
  "Manual edits are logged with reason, timestamp, user, old value, and new value before a corrected invoice or credit note is issued",
  "Month-end export includes invoice number, credit-note references, payment method, due date, PDF URL, and VAT summary fields",
];

const auditRows = [
  ["Checkout evidence", "VAT/BTW number, company name, billing country, exemption decision, and payment method", "Capture before payment so the invoice can be generated without chasing the customer afterwards."],
  ["Invoice issuance", "Sequential number, invoice date, PDF template version, VAT wording, and delivery trigger", "Lock the invoice record and expose the PDF in email, My Account, and accountant export."],
  ["Manual correction", "Changed billing field, VAT decision, address, PO number, or payment terms", "Record who changed it, why it changed, and whether the fix needs a credit note or corrected invoice."],
  ["Refund event", "Full refund, partial refund, failed payment, exchange-rate issue, or cancellation", "Issue a linked credit note with matching VAT logic instead of overwriting the original invoice."],
  ["Accounting handoff", "Bookkeeper imports monthly VAT and revenue data", "Export invoice/credit-note links, payment state, VAT basis, PDF URL, and customer metadata in one packet."],
];

const scenarios = [
  {
    title: "EU B2B reverse-charge audit",
    pain: "A tax advisor asks why VAT was not charged on an old WooCommerce order. The order note says little, the VAT field is in a plugin meta key, and the PDF has no validation evidence.",
    lattice: "Keep VAT ID, billing country, reverse-charge wording, invoice PDF, and export row connected to the original order and invoice number.",
  },
  {
    title: "Refund after invoice was emailed",
    pain: "Support refunds half the order but the accountant only sees the original invoice. The customer expects a credit note and the VAT return needs the correction.",
    lattice: "Generate a linked credit note with the same customer/VAT context, store the PDF, and expose both documents in the export.",
  },
  {
    title: "Manual field correction",
    pain: "A customer asks to change company name or PO number after purchase. If the invoice PDF is overwritten silently, the audit trail is gone.",
    lattice: "Log the correction reason, preserve the issued document trail, and make the corrected PDF/credit note obvious to finance.",
  },
];

const faq = [
  {
    q: "What is an invoice audit trail in WooCommerce?",
    a: "It is the connected record of invoice number, order metadata, VAT/BTW evidence, PDF document, delivery events, payment/refund events, manual corrections, credit notes, and accounting export data. The goal is to answer tax or bookkeeping questions without reconstructing history from scattered plugins.",
  },
  {
    q: "Can WooCommerce provide an invoice audit trail by default?",
    a: "WooCommerce stores orders and payment events, but audit-ready invoice PDFs, sequential invoice numbers, VAT evidence, credit-note links, customer downloads, correction logs, and accountant exports normally require a dedicated invoice workflow.",
  },
  {
    q: "What should never be overwritten on an issued invoice?",
    a: "The issued invoice number, original PDF, invoice date, VAT treatment, customer legal details, totals, and credit-note relationship should be preserved. Corrections should be logged and handled with a corrected document or credit note according to your accountant's rules.",
  },
  {
    q: "How does Lattice Invoices help with audit trails?",
    a: "The early-access product path is focused on turning WooCommerce orders into cleaner invoice packets: VAT fields, PDFs, credit notes, due dates, customer downloads, correction notes, and accountant-ready export fields for EU stores.",
  },
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "WooCommerce invoice audit trail for EU VAT stores",
  description:
    "A buyer-intent guide for WooCommerce stores that need invoice audit trails, VAT evidence, PDF document history, credit notes, payment events, and accountant handoff.",
  mainEntityOfPage: `${SITE_URL}/blog/woocommerce-invoice-audit-trail`,
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
  "mailto:support@latticeplugins.com?subject=Lattice%20Invoices%20audit%20trail%20early%20access&body=Hi%20Lattice%2C%0A%0AI%20need%20a%20WooCommerce%20invoice%20audit%20trail.%0A%0AStore%20URL%3A%20%0ACountry%3A%20%0ACurrent%20invoice%20plugin%3A%20%0AVAT%2FBTW%20field%20present%3A%20%0AInvoice%20numbering%20workflow%3A%20%0ACredit-note%20workflow%3A%20%0AManual%20correction%20problem%3A%20%0AAccounting%20export%20needs%3A%20";

export default function WooCommerceInvoiceAuditTrailPage() {
  return (
    <main className="min-h-screen bg-slate-50">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <section className="bg-gradient-to-br from-slate-950 via-blue-950 to-indigo-900 text-white">
        <div className="max-w-5xl mx-auto px-6 py-16 lg:py-20">
          <p className="uppercase tracking-[0.3em] text-sm text-blue-200 mb-4">WooCommerce invoice audit trail</p>
          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
            WooCommerce invoice audit trail: keep VAT evidence, PDFs, refunds, and corrections connected.
          </h1>
          <p className="text-xl text-blue-50 leading-relaxed max-w-3xl mb-8">
            If an accountant, customer, or tax advisor asks what happened to an invoice six months later, a screenshot of the WooCommerce order is not enough. You need the invoice number, PDF, VAT evidence, credit notes, payment events, and correction history in one trail.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href={mailto} className="bg-blue-500 text-white px-8 py-4 rounded-xl font-semibold hover:bg-blue-400 transition shadow-lg text-center">
              Request audit-trail early access
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
              <h2 className="text-3xl font-bold mb-4">Why invoice audit trails become a buying problem</h2>
              <p className="text-slate-700 leading-relaxed mb-4">
                WooCommerce stores often start with a PDF invoice plugin, then add VAT fields, bank transfer, subscriptions, refunds, accountant exports, and manual support workflows. The invoice record becomes scattered across order notes, plugin meta, PDFs, emails, and spreadsheets.
              </p>
              <p className="text-slate-700 leading-relaxed">
                Lattice Invoices is being positioned around that operational pain: make the invoice packet easier to trust before a customer dispute, VAT audit, refund correction, or accountant handoff turns into manual reconstruction work.
              </p>
            </div>

            <div className="bg-white rounded-2xl border shadow-sm p-8">
              <h2 className="text-3xl font-bold mb-6">Invoice audit-trail readiness checklist</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {auditChecklist.map((item) => (
                  <div key={item} className="flex gap-3 p-4 rounded-xl bg-slate-50 border border-slate-100">
                    <span className="text-blue-600 font-bold">✓</span>
                    <span className="text-slate-800">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-2xl border shadow-sm p-8 overflow-hidden">
              <h2 className="text-3xl font-bold mb-4">Audit-trail workflow map</h2>
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-slate-100 text-slate-700">
                      <th className="p-4 rounded-l-xl">Stage</th>
                      <th className="p-4">Evidence to preserve</th>
                      <th className="p-4 rounded-r-xl">Invoice workflow requirement</th>
                    </tr>
                  </thead>
                  <tbody>
                    {auditRows.map(([stage, evidence, requirement]) => (
                      <tr key={stage} className="border-b border-slate-100">
                        <td className="p-4 font-semibold text-slate-900">{stage}</td>
                        <td className="p-4 text-slate-600">{evidence}</td>
                        <td className="p-4 text-slate-800">{requirement}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div className="bg-white rounded-2xl border shadow-sm p-8">
              <h2 className="text-3xl font-bold mb-6">Common audit-trail failure points</h2>
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

            <div className="bg-blue-50 border border-blue-100 rounded-2xl p-8">
              <h2 className="text-3xl font-bold mb-4">Early-access offer: €49 invoice audit-trail workflow review</h2>
              <p className="text-slate-700 leading-relaxed mb-5">
                Send your store URL, country, current invoice plugin, VAT/BTW field status, numbering workflow, credit-note workflow, manual correction problem, and accounting export needs. The goal is to turn that into a concrete Lattice Invoices workflow instead of a fragile invoice spreadsheet.
              </p>
              <a href={mailto} className="inline-flex bg-blue-600 text-white px-7 py-3 rounded-xl font-semibold hover:bg-blue-700 transition">
                Send my invoice audit-trail requirements
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
              <h2 className="text-2xl font-bold mb-3">Need invoice evidence without digging through order notes?</h2>
              <p className="text-slate-600 mb-5">
                Lattice Invoices is focused on EU VAT fields, sequential numbers, PDF history, credit notes, correction notes, due dates, customer downloads, and accountant handoff for €49 early access.
              </p>
              <a href={mailto} className="block text-center bg-slate-950 text-white px-5 py-3 rounded-xl font-semibold hover:bg-slate-800 transition mb-3">
                Request early access
              </a>
              <Link href="/docs/woocommerce-eu-vat-invoice-setup" className="block text-center border border-slate-200 px-5 py-3 rounded-xl font-semibold hover:bg-slate-50 transition">
                Read setup guide
              </Link>
            </div>

            <div className="bg-indigo-50 rounded-2xl border border-indigo-100 p-6">
              <h3 className="text-xl font-bold mb-3">Related invoice guides</h3>
              <ul className="space-y-3 text-indigo-900 font-medium">
                <li><Link href="/blog/woocommerce-invoice-numbering" className="hover:underline">Sequential invoice numbers</Link></li>
                <li><Link href="/blog/woocommerce-credit-notes-refunds" className="hover:underline">Credit notes and refunds</Link></li>
                <li><Link href="/blog/woocommerce-vat-exempt-invoices" className="hover:underline">VAT exempt invoices</Link></li>
                <li><Link href="/blog/woocommerce-invoice-export-accounting" className="hover:underline">Accounting export handoff</Link></li>
              </ul>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}
