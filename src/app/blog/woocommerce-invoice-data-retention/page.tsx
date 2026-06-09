import type { Metadata } from "next";
import Link from "next/link";

const SITE_URL = "https://latticeplugins.com";

export const metadata: Metadata = {
  title: "WooCommerce Invoice Data Retention for EU VAT Stores",
  description:
    "A buyer-intent guide to WooCommerce invoice data retention: invoice PDFs, VAT evidence, credit notes, audit trail, customer downloads, and accountant exports.",
  alternates: {
    canonical: `${SITE_URL}/blog/woocommerce-invoice-data-retention`,
  },
  openGraph: {
    title: "WooCommerce invoice data retention for EU VAT stores",
    description:
      "Use this checklist before choosing an invoice plugin: retention rules for invoice PDFs, VAT IDs, reverse-charge evidence, credit notes, audit logs, and exports.",
    url: `${SITE_URL}/blog/woocommerce-invoice-data-retention`,
    siteName: "Lattice Plugins",
    type: "article",
  },
};

const retentionItems = [
  {
    area: "Final invoice PDF",
    keep: "Invoice number, order ID, billing details, VAT treatment, payment status, PDF file URL, and sent/download timestamps.",
    risk: "If a PDF is regenerated later with different data, finance loses the original document trail.",
  },
  {
    area: "VAT / BTW evidence",
    keep: "VAT number, validation result, billing country, reverse-charge reason, exemption reason, tax rate, and customer type.",
    risk: "A zero-VAT invoice without stored evidence creates accountant follow-up and audit risk.",
  },
  {
    area: "Credit notes and refunds",
    keep: "Credit-note number, original invoice link, refunded line items, VAT correction, refund date, and PDF delivery status.",
    risk: "Editing or deleting the original invoice hides the real refund history.",
  },
  {
    area: "BACS / proforma workflow",
    keep: "Payment request date, due date, bank-transfer reference, proforma PDF, payment reconciliation date, and final invoice issue date.",
    risk: "Issuing final invoices before payment can create unpaid invoice clutter and messy month-end exports.",
  },
  {
    area: "Customer access",
    keep: "Protected My Account download links, email attachment status, customer resend events, and PDF version references.",
    risk: "If customers cannot retrieve old invoices, support becomes the archive system.",
  },
];

const buyingChecklist = [
  "Can the plugin preserve original invoice PDFs instead of only regenerating them from current order data?",
  "Does it store VAT/BTW number evidence and reverse-charge wording with the order and invoice?",
  "Are credit notes separate documents with their own numbers and export rows?",
  "Can BACS/proforma workflows avoid final invoice creation until payment is reconciled?",
  "Do customer downloads, email attachments, and accounting exports point to the same retained document trail?",
  "Can the store owner export invoice metadata without asking a developer to query the database?",
];

const faq = [
  {
    q: "How long should WooCommerce invoice data be retained?",
    a: "Retention periods depend on local accounting rules, but EU VAT stores usually need a reliable multi-year archive for invoice numbers, PDFs, VAT evidence, credit notes, payment status, and accounting exports. The practical requirement is that documents remain reproducible and traceable without changing old invoice data.",
  },
  {
    q: "Is regenerating WooCommerce invoice PDFs enough?",
    a: "Regeneration is risky if customer details, tax settings, templates, or plugins changed after the invoice was issued. A safer workflow stores the issued PDF reference, the invoice metadata, and the event history that explains why the invoice or credit note exists.",
  },
  {
    q: "What invoice retention features should a WooCommerce EU VAT plugin include?",
    a: "Look for sequential invoice numbers, stored VAT evidence, reverse-charge wording, retained PDFs, credit-note links, customer download access, audit trail, BACS/proforma timing, and accountant-ready exports.",
  },
  {
    q: "Where does Lattice Invoices fit?",
    a: "Lattice Invoices is the early-access WooCommerce EU invoicing product path for stores that need VAT-ready invoice data capture, retained PDF delivery, credit notes, BACS/proforma control, customer downloads, audit trail, and accounting handoff.",
  },
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "WooCommerce invoice data retention for EU VAT stores",
  description:
    "A practical buyer guide to retaining WooCommerce invoice PDFs, VAT evidence, credit notes, customer downloads, and accounting exports.",
  mainEntityOfPage: `${SITE_URL}/blog/woocommerce-invoice-data-retention`,
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
  "mailto:support@latticeplugins.com?subject=WooCommerce%20invoice%20data%20retention%20review&body=Hi%20Lattice%2C%0A%0AI%20want%20a%20WooCommerce%20invoice%20data%20retention%20review.%0A%0AStore%20URL%3A%20%0ACountry%3A%20%0ACurrent%20invoice%20plugin%3A%20%0APayment%20methods%20(card%2FBACS%2Fother)%3A%20%0AHow%20invoice%20PDFs%20are%20stored%20today%3A%20%0AVAT%2FBTW%20evidence%20needs%3A%20%0ACredit-note%20workflow%3A%20%0AAccounting%20software%3A%20";

export default function WooCommerceInvoiceDataRetentionPage() {
  return (
    <main className="min-h-screen bg-slate-50">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <section className="bg-gradient-to-br from-slate-950 via-blue-950 to-cyan-900 text-white">
        <div className="max-w-5xl mx-auto px-6 py-16 lg:py-20">
          <p className="uppercase tracking-[0.3em] text-sm text-cyan-200 mb-4">WooCommerce invoice retention</p>
          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
            Keep WooCommerce invoice data audit-ready after PDFs, VAT rules, and refunds change.
          </h1>
          <p className="text-xl text-cyan-50 leading-relaxed max-w-3xl mb-8">
            EU VAT stores need more than a PDF template. You need a retained invoice trail: issued PDFs, VAT/BTW evidence, credit notes, reverse-charge wording, customer downloads, and accountant-ready exports.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href={mailto} className="bg-cyan-500 text-white px-8 py-4 rounded-xl font-semibold hover:bg-cyan-400 transition shadow-lg text-center">
              Request €49 retention review
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
              <h2 className="text-3xl font-bold mb-4">The retention problem appears after the first audit question</h2>
              <p className="text-slate-700 leading-relaxed mb-4">
                A WooCommerce store can look compliant while orders are fresh. The problems appear months later: the invoice template changed, VAT settings changed, the customer updated billing details, a refund happened, or the accountant asks for the original PDF and evidence behind a reverse-charge order.
              </p>
              <p className="text-slate-700 leading-relaxed">
                Before buying an invoice plugin, verify that it retains the data finance actually needs — not just the ability to generate a new PDF from the current order state.
              </p>
            </div>

            <div className="bg-cyan-50 border border-cyan-100 rounded-2xl p-8">
              <h2 className="text-3xl font-bold mb-5">Invoice data retention checklist</h2>
              <div className="space-y-4">
                {retentionItems.map((item) => (
                  <div key={item.area} className="bg-white rounded-xl border border-cyan-100 p-5">
                    <h3 className="text-xl font-bold mb-2">{item.area}</h3>
                    <p className="text-slate-700 leading-relaxed mb-2"><strong>Retain:</strong> {item.keep}</p>
                    <p className="text-slate-600 leading-relaxed"><strong>Risk if missing:</strong> {item.risk}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-2xl border shadow-sm p-8">
              <h2 className="text-3xl font-bold mb-5">Questions to ask before choosing a plugin</h2>
              <ul className="space-y-3">
                {buyingChecklist.map((item) => (
                  <li key={item} className="flex gap-3 text-slate-700 leading-relaxed">
                    <span className="text-cyan-600 font-bold">✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-emerald-50 border border-emerald-100 rounded-2xl p-8">
              <h2 className="text-3xl font-bold mb-4">Early-access offer: €49 invoice retention review</h2>
              <p className="text-slate-700 leading-relaxed mb-5">
                Send your current invoice plugin, payment methods, VAT countries, refund workflow, and accounting software. Lattice will map what invoice data should be retained, where PDFs should be exposed, and which retention gaps are blocking a safe EU VAT workflow.
              </p>
              <a href={mailto} className="inline-flex bg-emerald-600 text-white px-7 py-3 rounded-xl font-semibold hover:bg-emerald-700 transition">
                Send my retention workflow
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
              <p className="text-sm uppercase tracking-[0.2em] text-cyan-700 font-semibold mb-3">Lattice Invoices early access</p>
              <h2 className="text-2xl font-bold mb-3">Unsure what invoice data to retain?</h2>
              <p className="text-slate-600 mb-5">
                Get a practical review for retained PDFs, VAT evidence, credit notes, BACS/proforma timing, customer downloads, audit trail, and accountant exports.
              </p>
              <a href={mailto} className="block text-center bg-slate-950 text-white px-5 py-3 rounded-xl font-semibold hover:bg-slate-800 transition mb-3">
                Request retention review
              </a>
              <Link href="/docs/woocommerce-eu-vat-invoice-setup" className="block text-center border border-slate-200 px-5 py-3 rounded-xl font-semibold hover:bg-slate-50 transition">
                Read setup guide
              </Link>
            </div>

            <div className="bg-blue-50 rounded-2xl border border-blue-100 p-6">
              <h3 className="text-xl font-bold mb-3">Related invoice guides</h3>
              <ul className="space-y-3 text-blue-900 font-medium">
                <li><Link href="/blog/woocommerce-invoice-audit-trail" className="hover:underline">Invoice audit trail</Link></li>
                <li><Link href="/blog/woocommerce-invoice-reconciliation" className="hover:underline">Invoice reconciliation</Link></li>
                <li><Link href="/blog/woocommerce-credit-notes-refunds" className="hover:underline">Credit notes and refunds</Link></li>
                <li><Link href="/blog/woocommerce-invoice-export-accounting" className="hover:underline">Accounting export</Link></li>
                <li><Link href="/blog/woocommerce-invoice-compliance-checklist" className="hover:underline">Compliance checklist</Link></li>
              </ul>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}
