import type { Metadata } from "next";
import Link from "next/link";

const SITE_URL = "https://latticeplugins.com";

export const metadata: Metadata = {
  title: "WooCommerce Invoice Due Dates & Payment Terms — EU B2B Guide",
  description:
    "How WooCommerce stores can show invoice due dates, payment terms, bank-transfer deadlines, and reminder timing without breaking EU VAT invoice workflows.",
  alternates: {
    canonical: `${SITE_URL}/blog/woocommerce-invoice-due-dates`,
  },
  openGraph: {
    title: "WooCommerce Invoice Due Dates & Payment Terms",
    description:
      "A buyer-intent guide for EU B2B stores that need invoice due dates, Net 14/30 payment terms, proforma timing, bank-transfer reminders, and final VAT invoice control.",
    url: `${SITE_URL}/blog/woocommerce-invoice-due-dates`,
    siteName: "Lattice Plugins",
    type: "article",
  },
};

const dueDateChecklist = [
  "Collect company name, VAT/BTW number, billing country, and PO/reference before generating invoice documents",
  "Show payment terms such as Due on receipt, Net 7, Net 14, or Net 30 on the right document type",
  "Use proforma/payment request due dates for unpaid bank-transfer orders instead of issuing final VAT invoices too early",
  "Generate the final invoice date only when the tax event and payment workflow require it",
  "Trigger reminders from the due date, not just from the WooCommerce order-created timestamp",
  "Keep overdue reminders, credit notes, customer downloads, and email attachments tied to the same invoice record",
];

const paymentTermRows = [
  ["Due on receipt", "Low-ticket plugins, digital downloads, urgent B2B orders", "Payment request/proforma immediately, final invoice after payment"],
  ["Net 7", "Small agencies and repeat business customers", "Reminder 2 days before due date, overdue note on day 8"],
  ["Net 14", "EU B2B stores selling setup services or annual licenses", "Clear due date on proforma and first reminder after 14 days"],
  ["Net 30", "Enterprise procurement and reseller invoices", "PO/reference field, finance contact, staged reminders before overdue"],
  ["Custom due date", "Manual quote-to-invoice or negotiated terms", "Admin override with audit trail so support does not edit PDF text by hand"],
];

const scenarios = [
  {
    title: "Bank transfer orders need a deadline",
    pain: "WooCommerce BACS orders can stay unpaid while the customer believes the invoice is already final.",
    workflow: "Send a payment request with a due date, then issue the final VAT invoice when payment clears.",
  },
  {
    title: "Finance teams need payment terms on the PDF",
    pain: "A buyer forwards an order email to finance, but the PDF lacks Net 14/Net 30 language and PO/reference data.",
    workflow: "Collect invoice fields at checkout and render payment terms directly on the invoice/proforma document.",
  },
  {
    title: "Overdue reminders need invoice context",
    pain: "Generic WooCommerce emails say an order is pending, but finance needs the invoice number, due date, and bank details.",
    workflow: "Drive reminders from invoice due dates and include consistent document links for the customer.",
  },
];

const faq = [
  {
    q: "Can WooCommerce show invoice due dates?",
    a: "WooCommerce can store order dates, but invoice due dates usually need a dedicated invoice workflow. EU B2B stores often need payment terms, due dates, VAT metadata, and reminder timing that are separate from the basic order-created date.",
  },
  {
    q: "Should a bank-transfer order receive a final invoice before payment?",
    a: "Many stores prefer a proforma or payment request before payment, then a final VAT invoice after payment is received. The exact accounting treatment depends on country and business policy, so the plugin should make the document state explicit.",
  },
  {
    q: "What payment terms should a WooCommerce invoice support?",
    a: "Common terms are Due on receipt, Net 7, Net 14, Net 30, and custom due dates. B2B stores also often need a PO/reference field and bank-transfer details on the invoice or proforma.",
  },
  {
    q: "How does Lattice Invoices plan to handle due dates?",
    a: "Lattice Invoices is being shaped around invoice-ready checkout fields, proforma/payment request workflows, final invoice PDFs, due-date-aware reminders, credit notes, and protected customer downloads for EU WooCommerce stores.",
  },
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "WooCommerce invoice due dates and payment terms for EU B2B stores",
  description:
    "A practical guide for WooCommerce stores that need invoice due dates, payment terms, bank-transfer deadlines, and reminder timing.",
  mainEntityOfPage: `${SITE_URL}/blog/woocommerce-invoice-due-dates`,
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
  "mailto:support@latticeplugins.com?subject=Lattice%20Invoices%20due%20dates%20and%20payment%20terms&body=Hi%20Lattice%2C%0A%0AI%20need%20WooCommerce%20invoice%20due%20dates%20and%20payment%20terms.%0A%0AStore%20URL%3A%20%0ACountry%3A%20%0AB2B%20or%20B2C%3A%20%0APayment%20terms%20needed%20%28Net%207%2F14%2F30%29%3A%20%0ABank%20transfer%20orders%3A%20%0AProforma%20before%20payment%3A%20%0AOverdue%20reminders%20needed%3A%20%0AInvoice%20PDF%20downloads%20needed%3A%20";

export default function WooCommerceInvoiceDueDatesPage() {
  return (
    <main className="min-h-screen bg-slate-50">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <section className="bg-gradient-to-br from-slate-950 via-indigo-950 to-blue-900 text-white">
        <div className="max-w-5xl mx-auto px-6 py-16 lg:py-20">
          <p className="uppercase tracking-[0.3em] text-sm text-blue-200 mb-4">WooCommerce invoice due dates</p>
          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
            Add invoice due dates and payment terms without confusing proformas, orders, and final VAT invoices.
          </h1>
          <p className="text-xl text-blue-50 leading-relaxed max-w-3xl mb-8">
            EU B2B buyers expect Net 14/30 terms, bank-transfer deadlines, PO references, and reminders. WooCommerce orders
            do not automatically become compliant invoice workflows. This guide maps the safer route.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href={mailto} className="bg-blue-500 text-white px-8 py-4 rounded-xl font-semibold hover:bg-blue-400 transition shadow-lg text-center">
              Request due-date workflow early access
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
              <h2 className="text-3xl font-bold mb-4">Due dates are a sales feature and an accounting control.</h2>
              <p className="text-slate-700 leading-relaxed mb-4">
                If a B2B customer cannot see when an invoice is due, they forward the WooCommerce order email to finance and
                wait. If your reminder emails only know the order date, follow-up becomes noisy and imprecise.
              </p>
              <p className="text-slate-700 leading-relaxed">
                Lattice Invoices is being positioned for the missing invoice layer: payment terms on the correct document,
                due-date-aware reminders, protected downloads, and a clear proforma-to-final-invoice path for bank transfers.
              </p>
            </div>

            <div className="bg-white rounded-2xl border shadow-sm p-8">
              <h2 className="text-3xl font-bold mb-6">Due-date workflow checklist</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {dueDateChecklist.map((item) => (
                  <div key={item} className="flex gap-3 p-4 rounded-xl bg-slate-50 border border-slate-100">
                    <span className="text-blue-600 font-bold">✓</span>
                    <span className="text-slate-800">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-2xl border shadow-sm p-8 overflow-hidden">
              <h2 className="text-3xl font-bold mb-4">Payment terms WooCommerce stores commonly need</h2>
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-slate-100 text-slate-700">
                      <th className="p-4 rounded-l-xl">Term</th>
                      <th className="p-4">Best fit</th>
                      <th className="p-4 rounded-r-xl">Invoice workflow note</th>
                    </tr>
                  </thead>
                  <tbody>
                    {paymentTermRows.map(([term, fit, note]) => (
                      <tr key={term} className="border-b border-slate-100">
                        <td className="p-4 font-semibold text-slate-900">{term}</td>
                        <td className="p-4 text-slate-600">{fit}</td>
                        <td className="p-4 text-slate-800">{note}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div className="bg-white rounded-2xl border shadow-sm p-8">
              <h2 className="text-3xl font-bold mb-6">Where due dates protect revenue</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                {scenarios.map((scenario) => (
                  <div key={scenario.title} className="rounded-xl border border-slate-200 bg-slate-50 p-5">
                    <h3 className="text-xl font-bold mb-3">{scenario.title}</h3>
                    <p className="text-slate-600 mb-3">Problem: {scenario.pain}</p>
                    <p className="font-semibold text-slate-900">Lattice path: {scenario.workflow}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-blue-50 border border-blue-100 rounded-2xl p-8">
              <h2 className="text-3xl font-bold mb-4">Early-access offer: €49 due-date workflow review</h2>
              <p className="text-slate-700 leading-relaxed mb-5">
                If unpaid invoices or bank-transfer orders are slowing payment, send your payment terms, current order emails,
                reminder timing, and invoice PDF requirements. Lattice will use that to prioritize the due-date workflow inside
                Lattice Invoices.
              </p>
              <a href={mailto} className="inline-flex bg-blue-600 text-white px-7 py-3 rounded-xl font-semibold hover:bg-blue-700 transition">
                Send my payment-term workflow
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
              <p className="text-sm uppercase tracking-[0.2em] text-blue-700 font-semibold mb-2">Payment terms</p>
              <h2 className="text-2xl font-bold mb-3">Need WooCommerce invoice due dates?</h2>
              <p className="text-slate-700 mb-5">
                Send store URL, payment terms, BACS workflow, reminder timing, invoice PDF needs, and whether unpaid orders
                should use a proforma before the final VAT invoice.
              </p>
              <a href={mailto} className="block text-center bg-blue-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-blue-700 transition mb-3">
                Request due-date early access
              </a>
              <Link href="/blog/woocommerce-bank-transfer-invoice" className="block text-center border border-slate-200 px-6 py-3 rounded-xl font-semibold hover:border-blue-400 transition mb-3">
                Bank-transfer invoice guide
              </Link>
              <Link href="/blog/woocommerce-invoice-payment-reminders" className="block text-center border border-slate-200 px-6 py-3 rounded-xl font-semibold hover:border-blue-400 transition mb-3">
                Payment reminder guide
              </Link>
              <Link href="/blog/woocommerce-proforma-invoice" className="block text-center border border-slate-200 px-6 py-3 rounded-xl font-semibold hover:border-blue-400 transition mb-3">
                Proforma workflow guide
              </Link>
              <Link href="/docs/woocommerce-eu-vat-invoice-setup" className="block text-center border border-slate-200 px-6 py-3 rounded-xl font-semibold hover:border-blue-400 transition mb-3">
                Setup guide
              </Link>
              <Link href="/woocommerce-eu-vat-invoices" className="block text-center border border-slate-200 px-6 py-3 rounded-xl font-semibold hover:border-blue-400 transition">
                View invoice offer
              </Link>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}
