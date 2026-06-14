import type { Metadata } from "next";
import Link from "next/link";

const SITE_URL = "https://latticeplugins.com";

export const metadata: Metadata = {
  title: "WooCommerce Net Terms Invoice Plugin for EU B2B Stores",
  description:
    "A buyer-intent guide for WooCommerce stores offering Net 14, Net 30, or pay-by-invoice terms that need VAT/BTW fields, proforma invoices, due dates, reminders, credit notes, and accountant exports.",
  alternates: {
    canonical: `${SITE_URL}/blog/woocommerce-net-terms-invoice-plugin`,
  },
  openGraph: {
    title: "WooCommerce Net terms invoice plugin for EU B2B stores",
    description:
      "Plan Net 14/30 WooCommerce invoice workflows with VAT metadata, proforma approvals, due dates, reminders, customer downloads, credit notes, and accounting handoff.",
    url: `${SITE_URL}/blog/woocommerce-net-terms-invoice-plugin`,
    siteName: "Lattice Plugins",
    type: "article",
  },
};

const readinessChecklist = [
  {
    title: "1. Collect invoice-ready B2B data before approving terms",
    detail:
      "Net terms only work when the order already has company name, VAT/BTW number, billing country, invoice email, PO/reference field, and finance-contact details. If those fields are collected after checkout, every invoice becomes a manual cleanup task.",
    buyerQuestion: "Can checkout require B2B invoice fields before a Net 14 or Net 30 order is accepted?",
  },
  {
    title: "2. Separate proforma/payment request from final VAT invoice",
    detail:
      "For many B2B stores, the customer first needs a proforma or payment request for approval. The final VAT invoice should be issued when the order is accepted, shipped, paid, or otherwise reaches the store's accounting policy trigger.",
    buyerQuestion: "Can the plugin support proforma first, final invoice later, without breaking invoice numbering?",
  },
  {
    title: "3. Put due dates and payment terms on every document",
    detail:
      "Net terms are only useful if the PDF, email, My Account download, and accounting export all show the same due date, payment terms, bank details, PO reference, invoice number, and outstanding amount.",
    buyerQuestion: "Will Net 14/30 terms appear on the PDF, customer email, and export row?",
  },
  {
    title: "4. Automate reminders without losing the audit trail",
    detail:
      "A healthy invoice workflow records the first invoice send, reminder dates, resend attempts, overdue notices, manual write-off decisions, and any credit notes connected to a late or disputed invoice.",
    buyerQuestion: "Can reminders and resend activity be traced back to the WooCommerce order and invoice?",
  },
  {
    title: "5. Prepare accounting export before the first overdue order",
    detail:
      "The accountant should not reconstruct invoice state from WooCommerce notes. Export should include invoice number, order ID, customer VAT data, due date, paid/unpaid state, reminder status, credit-note links, and PDF URL or archive reference.",
    buyerQuestion: "Can finance export unpaid, overdue, paid, and corrected invoices in one workflow?",
  },
];

const scenarios = [
  {
    title: "Approved B2B customer checks out with Net 30",
    trigger: "A business customer uses pay-by-invoice terms instead of card payment.",
    workflow:
      "Validate invoice fields, store the agreed terms, create a proforma or final invoice according to policy, attach the PDF, expose a customer download, and schedule reminder checkpoints from the due date.",
  },
  {
    title: "Customer asks for a PO update before payment",
    trigger: "Accounts payable needs a purchase order or internal reference added after the order is placed.",
    workflow:
      "Keep the original invoice evidence, record the requested correction, generate a replacement or corrected document when needed, and make sure the export shows the final approved reference.",
  },
  {
    title: "Net terms order becomes overdue or partially disputed",
    trigger: "The invoice passes the due date, or the customer disputes one line item.",
    workflow:
      "Log reminders, retain the original PDF, issue a linked credit note or write-off evidence if value changes, and export the overdue/corrected state for the accountant.",
  },
];

const comparisonRows = [
  {
    weak: "Net terms are stored in a private order note, while invoice PDFs and customer emails do not show due dates consistently.",
    strong: "Payment terms, due date, PO/reference, bank details, and invoice status are visible on the PDF, emails, My Account downloads, and exports.",
  },
  {
    weak: "Final invoice numbers are issued for abandoned quote-style orders, causing numbering gaps or manual deletion.",
    strong: "Proforma/payment-request documents stay separate from final VAT invoice numbering until the configured accounting trigger is reached.",
  },
  {
    weak: "Overdue reminders are sent from inbox templates with no link to invoice state or resend history.",
    strong: "Reminder activity, resend attempts, due dates, and overdue status are tied to the WooCommerce order and invoice record.",
  },
  {
    weak: "Credit notes, write-offs, and partial disputes live outside WooCommerce in spreadsheets.",
    strong: "Corrections create linked invoice evidence and exportable rows for accountant handoff.",
  },
];

const faq = [
  {
    q: "What is a WooCommerce Net terms invoice plugin?",
    a: "It is an invoice workflow for stores that let approved B2B customers order now and pay later, usually Net 14, Net 30, or custom payment terms. The workflow needs VAT/BTW fields, due dates, invoice PDFs, reminders, customer downloads, and accounting exports.",
  },
  {
    q: "Can WooCommerce bank transfer handle Net 30 invoices by itself?",
    a: "Bank transfer can collect an unpaid order, but it does not automatically solve B2B invoice approval, proforma vs final invoice timing, VAT metadata, reminder evidence, customer downloads, credit notes, or accountant-ready export.",
  },
  {
    q: "Should final invoice numbers be created before payment on Net terms orders?",
    a: "That depends on the store's accounting policy and country requirements. Many stores need a proforma or payment request first, then final invoice numbering when the order is accepted, shipped, paid, or otherwise reaches the chosen invoice trigger.",
  },
  {
    q: "Where does Lattice fit in a Net terms workflow?",
    a: "Lattice Invoices early access is positioned around the WooCommerce order: VAT/BTW checkout evidence, proforma/final invoice timing, due dates, reminder workflow, credit notes, customer downloads, and accounting export readiness.",
  },
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "WooCommerce Net terms invoice plugin for EU B2B stores",
  description:
    "A buyer guide for WooCommerce stores offering Net 14, Net 30, or pay-by-invoice terms with VAT metadata, proforma handling, due dates, reminders, credit notes, customer downloads, and exports.",
  mainEntityOfPage: `${SITE_URL}/blog/woocommerce-net-terms-invoice-plugin`,
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
  "mailto:support@latticeplugins.com?subject=WooCommerce%20Net%20terms%20invoice%20workflow%20review&body=Hi%20Lattice%2C%0A%0AI%20want%20a%20WooCommerce%20Net%20terms%20invoice%20workflow%20review.%0A%0AStore%20URL%3A%20%0ACountry%3A%20%0ANet%20terms%20(Net%2014%2FNet%2030%2Fcustom)%3A%20%0ACurrent%20invoice%20plugin%3A%20%0AVAT%2FBTW%20fields%20needed%3A%20%0AProforma%20vs%20final%20invoice%20timing%3A%20%0AReminder%2Foverdue%20workflow%3A%20%0AAccounting%20export%20needs%3A%20";

export default function WooCommerceNetTermsInvoicePluginPage() {
  return (
    <main className="min-h-screen bg-slate-50">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <section className="bg-gradient-to-br from-slate-950 via-emerald-950 to-blue-900 text-white">
        <div className="max-w-5xl mx-auto px-6 py-16 lg:py-20">
          <p className="uppercase tracking-[0.3em] text-sm text-emerald-200 mb-4">WooCommerce Net terms invoicing</p>
          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
            WooCommerce Net 14/30 invoices without due-date chaos, VAT gaps, or manual reminder spreadsheets.
          </h1>
          <p className="text-xl text-emerald-50 leading-relaxed max-w-3xl mb-8">
            Pay-by-invoice terms can close B2B orders, but they also create invoice risk: proforma timing, final invoice numbers, due dates, VAT/BTW fields, overdue reminders, credit notes, customer downloads, and accountant exports all need one workflow.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href={mailto} className="bg-green-400 text-slate-950 px-8 py-4 rounded-xl font-semibold hover:bg-green-300 transition shadow-lg text-center">
              Request €49 Net terms workflow review
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
              <h2 className="text-3xl font-bold mb-4">Why Net terms need more than a payment method</h2>
              <p className="text-slate-700 leading-relaxed mb-4">
                WooCommerce can mark an order as pending, on-hold, processing, or paid. That status alone does not tell finance whether a PDF was issued, whether a final VAT invoice number exists, whether the due date was communicated, or whether the customer can download the document without support.
              </p>
              <p className="text-slate-700 leading-relaxed">
                A sales-ready B2B invoice plugin should connect the whole path: approval, invoice metadata, proforma/final invoice timing, due dates, reminder evidence, credit-note handling, and accounting export. That is the buying problem Lattice Invoices is being positioned to solve.
              </p>
            </div>

            <div className="bg-emerald-50 border border-emerald-100 rounded-2xl p-8">
              <h2 className="text-3xl font-bold mb-5">Net terms invoice readiness checklist</h2>
              <div className="space-y-4">
                {readinessChecklist.map((item) => (
                  <div key={item.title} className="bg-white rounded-xl border border-emerald-100 p-5">
                    <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                    <p className="text-slate-700 leading-relaxed mb-2">{item.detail}</p>
                    <p className="text-slate-600 leading-relaxed"><strong>Buyer question:</strong> {item.buyerQuestion}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-2xl border shadow-sm p-8">
              <h2 className="text-3xl font-bold mb-5">Three Net terms invoice scenarios to test before buying</h2>
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

            <div className="bg-white rounded-2xl border shadow-sm p-8">
              <h2 className="text-3xl font-bold mb-5">Manual workaround vs invoice-ready Net terms workflow</h2>
              <div className="overflow-x-auto">
                <table className="min-w-full text-left border-collapse">
                  <thead>
                    <tr className="border-b">
                      <th className="py-3 pr-4 font-semibold">Weak workflow</th>
                      <th className="py-3 pr-4 font-semibold">Lattice Invoices direction</th>
                    </tr>
                  </thead>
                  <tbody>
                    {comparisonRows.map((row) => (
                      <tr key={row.weak} className="border-b align-top">
                        <td className="py-4 pr-4 text-slate-700">{row.weak}</td>
                        <td className="py-4 pr-4 text-slate-700">{row.strong}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div className="bg-white rounded-2xl border shadow-sm p-8">
              <h2 className="text-3xl font-bold mb-5">FAQ</h2>
              <div className="space-y-5">
                {faq.map((item) => (
                  <div key={item.q}>
                    <h3 className="text-xl font-bold mb-2">{item.q}</h3>
                    <p className="text-slate-700 leading-relaxed">{item.a}</p>
                  </div>
                ))}
              </div>
            </div>
          </article>

          <aside className="space-y-6">
            <div className="bg-white rounded-2xl border shadow-sm p-6 sticky top-6">
              <h2 className="text-2xl font-bold mb-3">Offer Net 14 or Net 30? Review invoice risk before plugin spend.</h2>
              <p className="text-slate-700 leading-relaxed mb-5">
                Lattice Invoices early access is positioned for WooCommerce stores that need VAT/BTW fields, proformas, final invoice PDFs, due dates, reminders, credit notes, customer downloads, and accounting handoff.
              </p>
              <a href={mailto} className="block text-center bg-blue-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-blue-700 transition mb-3">
                Request €49 workflow review
              </a>
              <Link href="/blog/woocommerce-invoice-due-dates" className="block text-center border border-slate-200 px-6 py-3 rounded-xl font-semibold hover:border-blue-400 transition mb-3">
                Invoice due-date guide
              </Link>
              <Link href="/blog/woocommerce-bank-transfer-invoice" className="block text-center border border-slate-200 px-6 py-3 rounded-xl font-semibold hover:border-blue-400 transition mb-3">
                Bank transfer invoice guide
              </Link>
              <Link href="/blog/woocommerce-invoice-reminder-email-template" className="block text-center border border-slate-200 px-6 py-3 rounded-xl font-semibold hover:border-blue-400 transition">
                Reminder email template guide
              </Link>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}
