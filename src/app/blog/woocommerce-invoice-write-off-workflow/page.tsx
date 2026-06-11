import type { Metadata } from "next";
import Link from "next/link";

const SITE_URL = "https://latticeplugins.com";

export const metadata: Metadata = {
  title: "WooCommerce Invoice Write-Off Workflow for Unpaid B2B Invoices",
  description:
    "A buyer-intent guide for WooCommerce stores that need invoice write-off workflows, bad-debt evidence, retained VAT invoice PDFs, credit-note decisions, and accountant-ready export notes.",
  alternates: {
    canonical: `${SITE_URL}/blog/woocommerce-invoice-write-off-workflow`,
  },
  openGraph: {
    title: "WooCommerce invoice write-off workflow for unpaid B2B invoices",
    description:
      "Plan unpaid invoice write-offs with retained PDFs, reminder history, credit-note decisions, bad-debt notes, and clean accounting handoff.",
    url: `${SITE_URL}/blog/woocommerce-invoice-write-off-workflow`,
    siteName: "Lattice Plugins",
    type: "article",
  },
};

const checklist = [
  {
    title: "1. Freeze the issued invoice before any write-off decision",
    detail:
      "The original VAT invoice PDF, invoice number, customer details, VAT metadata, and payment terms should remain retained. A write-off note must not silently rewrite the historic invoice.",
    buyerQuestion: "Can the plugin keep the issued PDF untouched while adding a visible write-off status and note?",
  },
  {
    title: "2. Link reminder evidence to the write-off record",
    detail:
      "Before marking an invoice as bad debt, finance usually needs proof of due date, reminders sent, failed delivery checks, customer downloads, and manual follow-up notes.",
    buyerQuestion: "Can support see reminder emails, resend logs, and download evidence next to the unpaid invoice?",
  },
  {
    title: "3. Decide between credit note, bad-debt note, or collection handoff",
    detail:
      "A refund or cancelled invoice may need a credit note. A legitimately unpaid B2B invoice may need a write-off note or collection handoff instead. The workflow should make this decision explicit.",
    buyerQuestion: "Does the workflow separate cancellation credit notes from unpaid-invoice write-offs?",
  },
  {
    title: "4. Export accountant-ready write-off data",
    detail:
      "Accountants need invoice number, customer, VAT totals, due date, outstanding amount, write-off reason, decision date, reminder history, and any related credit note or correction.",
    buyerQuestion: "Will the export show enough context to book bad debt without chasing order notes manually?",
  },
  {
    title: "5. Keep customer access and internal visibility aligned",
    detail:
      "The customer-facing invoice download should still point to the retained PDF, while admins see internal write-off status, notes, and follow-up history.",
    buyerQuestion: "Can the customer download stay stable while finance gets internal write-off controls?",
  },
];

const scenarios = [
  {
    title: "BACS invoice never paid",
    trigger: "Net 14 or Net 30 due date passes after multiple reminders and no payment confirmation.",
    workflow: "Retain the invoice PDF, keep reminder logs, add a bad-debt/write-off note, and export the decision for the accountant.",
  },
  {
    title: "Customer cancels before fulfilment",
    trigger: "The invoice was issued but the sale is cancelled and should not remain collectible.",
    workflow: "Use a credit note or cancellation evidence instead of a simple write-off, then link both documents in the invoice timeline.",
  },
  {
    title: "Partial payment remains outstanding",
    trigger: "Deposit or split-payment invoice is partially paid and the balance will not be collected.",
    workflow: "Keep the paid amount, outstanding balance, due date history, and any write-off or credit-note decision in one exportable record.",
  },
];

const faq = [
  {
    q: "Can WooCommerce write off unpaid invoices by default?",
    a: "WooCommerce tracks orders and payment status, but a finance-safe write-off workflow usually needs invoice PDFs, invoice numbers, due dates, reminders, internal write-off notes, credit-note decisions, and accountant export data.",
  },
  {
    q: "Is an invoice write-off the same as a credit note?",
    a: "No. A credit note reverses or corrects an issued invoice. A write-off documents that an unpaid invoice will not be collected. The right action depends on local accounting rules, cancellation status, and whether goods or services were delivered.",
  },
  {
    q: "What evidence should be stored before writing off an invoice?",
    a: "Store the retained invoice PDF, invoice number, VAT metadata, due date, payment terms, reminder send/resend history, customer download evidence, outstanding amount, write-off reason, decision date, and related credit-note or correction links.",
  },
  {
    q: "Where does Lattice Invoices fit?",
    a: "Lattice Invoices is the early-access WooCommerce EU invoicing path for stores that need retained invoice PDFs, BACS/proforma workflows, due dates, reminders, credit notes, corrections, write-off evidence, and accountant-ready exports.",
  },
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "WooCommerce invoice write-off workflow for unpaid B2B invoices",
  description:
    "A practical WooCommerce invoicing guide for unpaid invoice write-offs, bad-debt notes, retained VAT PDFs, reminder evidence, credit-note decisions, and accounting export readiness.",
  mainEntityOfPage: `${SITE_URL}/blog/woocommerce-invoice-write-off-workflow`,
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
  "mailto:support@latticeplugins.com?subject=WooCommerce%20invoice%20write-off%20workflow%20review&body=Hi%20Lattice%2C%0A%0AI%20want%20a%20WooCommerce%20invoice%20write-off%20workflow%20review.%0A%0AStore%20URL%3A%20%0ACountry%3A%20%0ACurrent%20invoice%20plugin%3A%20%0APayment%20methods%20(BACS%2FStripe%2FPayPal)%3A%20%0APayment%20terms%20(Net%207%2F14%2F30)%3A%20%0AUnpaid%20invoice%20volume%3A%20%0ACredit-note%20needs%3A%20%0AAccounting%20export%20needs%3A%20";

export default function WooCommerceInvoiceWriteOffWorkflowPage() {
  return (
    <main className="min-h-screen bg-slate-50">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <section className="bg-gradient-to-br from-slate-950 via-indigo-950 to-blue-900 text-white">
        <div className="max-w-5xl mx-auto px-6 py-16 lg:py-20">
          <p className="uppercase tracking-[0.3em] text-sm text-blue-200 mb-4">WooCommerce invoice write-off workflow</p>
          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
            Write off unpaid WooCommerce invoices without breaking VAT PDF or accounting evidence.
          </h1>
          <p className="text-xl text-blue-50 leading-relaxed max-w-3xl mb-8">
            Unpaid B2B invoices need more than a status change. Finance needs the retained invoice PDF, reminder trail, due-date history, credit-note decision, write-off reason, and clean accountant export.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href={mailto} className="bg-blue-400 text-slate-950 px-8 py-4 rounded-xl font-semibold hover:bg-blue-300 transition shadow-lg text-center">
              Request €49 write-off workflow review
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
              <h2 className="text-3xl font-bold mb-4">Why write-offs are risky in WooCommerce invoicing</h2>
              <p className="text-slate-700 leading-relaxed mb-4">
                Many stores only change an order status or add a private note when an invoice will not be collected. That leaves the accountant guessing whether the invoice was issued, reminded, cancelled, credited, or simply abandoned.
              </p>
              <p className="text-slate-700 leading-relaxed">
                Use this checklist before buying an invoice plugin, replacing a PDF invoice tool, or cleaning up overdue BACS/proforma workflows for EU VAT customers.
              </p>
            </div>

            <div className="bg-blue-50 border border-blue-100 rounded-2xl p-8">
              <h2 className="text-3xl font-bold mb-5">Write-off readiness checklist</h2>
              <div className="space-y-4">
                {checklist.map((item) => (
                  <div key={item.title} className="bg-white rounded-xl border border-blue-100 p-5">
                    <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                    <p className="text-slate-700 leading-relaxed mb-2">{item.detail}</p>
                    <p className="text-slate-600 leading-relaxed"><strong>Buyer question:</strong> {item.buyerQuestion}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-2xl border shadow-sm p-8">
              <h2 className="text-3xl font-bold mb-5">Three write-off scenarios to map before automating</h2>
              <div className="grid gap-4">
                {scenarios.map((item) => (
                  <div key={item.title} className="border rounded-xl p-5">
                    <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                    <p className="text-slate-700 leading-relaxed mb-2"><strong>Trigger:</strong> {item.trigger}</p>
                    <p className="text-slate-700 leading-relaxed"><strong>Workflow:</strong> {item.workflow}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-indigo-50 border border-indigo-100 rounded-2xl p-8">
              <h2 className="text-3xl font-bold mb-4">Early-access offer: €49 write-off workflow review</h2>
              <p className="text-slate-700 leading-relaxed mb-5">
                Send your current invoice plugin, overdue invoice process, reminder emails, credit-note rules, and accountant export needs. Lattice will map the evidence gaps before you automate write-offs on live orders.
              </p>
              <a href={mailto} className="inline-flex bg-indigo-600 text-white px-7 py-3 rounded-xl font-semibold hover:bg-indigo-700 transition">
                Send my write-off workflow
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
              <h2 className="text-2xl font-bold mb-3">Need bad-debt evidence your accountant can use?</h2>
              <p className="text-slate-600 mb-5">
                Get a focused review for retained PDFs, reminder history, due dates, write-off notes, credit-note decisions, customer downloads, and accountant exports.
              </p>
              <a href={mailto} className="block text-center bg-slate-950 text-white px-5 py-3 rounded-xl font-semibold hover:bg-slate-800 transition mb-3">
                Request write-off review
              </a>
              <Link href="/docs/woocommerce-eu-vat-invoice-setup" className="block text-center border border-slate-200 px-5 py-3 rounded-xl font-semibold hover:bg-slate-50 transition">
                Read setup guide
              </Link>
            </div>

            <div className="bg-white rounded-2xl border shadow-sm p-6">
              <h3 className="font-bold text-lg mb-3">Related invoice guides</h3>
              <ul className="space-y-3 text-sm text-slate-700">
                <li><Link href="/blog/woocommerce-invoice-late-fees" className="text-blue-700 hover:underline">Invoice late fees</Link></li>
                <li><Link href="/blog/woocommerce-invoice-reminder-email-template" className="text-blue-700 hover:underline">Reminder email templates</Link></li>
                <li><Link href="/blog/woocommerce-invoice-reconciliation" className="text-blue-700 hover:underline">Invoice reconciliation</Link></li>
                <li><Link href="/blog/woocommerce-credit-notes-refunds" className="text-blue-700 hover:underline">Credit notes and refunds</Link></li>
                <li><Link href="/blog/woocommerce-invoice-audit-trail" className="text-blue-700 hover:underline">Invoice audit trail</Link></li>
                <li><Link href="/blog/woocommerce-invoice-export-accounting" className="text-blue-700 hover:underline">Accounting export</Link></li>
              </ul>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}
