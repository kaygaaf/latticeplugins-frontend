import type { Metadata } from "next";
import Link from "next/link";

const SITE_URL = "https://latticeplugins.com";
const PAGE_URL = `${SITE_URL}/blog/woocommerce-ubl-invoices`;

export const metadata: Metadata = {
  title: "WooCommerce UBL Invoices — EU VAT E-Invoice Readiness Guide",
  description:
    "Buyer guide for WooCommerce stores that need UBL invoice data, EU VAT fields, PDF invoices, credit notes, customer downloads, and accountant-ready exports.",
  alternates: {
    canonical: PAGE_URL,
  },
  openGraph: {
    title: "WooCommerce UBL invoices for EU VAT stores",
    description:
      "How to prepare WooCommerce for UBL invoice workflows: VAT numbers, buyer references, invoice PDFs, credit notes, structured exports, and accountant handoff.",
    url: PAGE_URL,
    siteName: "Lattice Plugins",
    type: "article",
  },
};

const ublChecklist = [
  "Capture buyer company name, VAT/BTW number, country, invoice email, and PO/reference before payment",
  "Keep invoice numbers, invoice dates, VAT rates, VAT amounts, and currency totals as structured order metadata",
  "Generate a readable PDF invoice while preserving the same values for UBL/accounting export",
  "Create credit notes for refunds instead of editing the original invoice PDF after the fact",
  "Store customer download links and email attachment status so finance teams can retrieve the document later",
  "Export the fields an accountant or UBL tool needs without copying WooCommerce order screens into spreadsheets",
];

const fieldRows = [
  ["Supplier data", "Legal business name, VAT number, address, bank details, invoice prefix", "Without stable seller data every invoice export needs manual correction."],
  ["Customer data", "Company name, VAT/BTW number, billing address, invoice email", "B2B buyers reject invoices when tax identity is missing or only saved in a note."],
  ["Buyer references", "PO number, department, cost centre, contact person", "Many EU business buyers need internal approval references on the invoice."],
  ["Tax breakdown", "VAT rate, VAT amount, reverse-charge or exemption reason, validation evidence", "UBL and accountant exports need the tax decision as data, not just a PDF total."],
  ["Document lifecycle", "Proforma, final invoice, payment reminder, refund credit note, customer download", "The store needs a controlled flow for every finance document connected to the order."],
];

const conversionSignals = [
  {
    title: "The accountant asks for UBL or structured invoice export",
    text: "This is a strong purchase signal because the store already feels the cost of manual bookkeeping cleanup.",
  },
  {
    title: "Business customers ask for PO numbers or buyer references",
    text: "A generic WooCommerce billing form is no longer enough; the order needs invoice-specific checkout fields before payment.",
  },
  {
    title: "Refunds create mismatched paperwork",
    text: "A refund note is not the same as a credit note. Finance needs a document tied to the original invoice and VAT amounts.",
  },
];

const setupSteps = [
  ["1. Map required invoice fields", "List every value the accountant, buyer, and tax workflow need before adding another PDF plugin."],
  ["2. Add checkout fields before payment", "Collect VAT/BTW number, PO/reference, invoice email, and company details while the buyer is still completing the order."],
  ["3. Lock invoice metadata on paid orders", "Save invoice number, date, VAT breakdown, and currency totals when the order becomes invoice-ready."],
  ["4. Validate export and credit-note flow", "Test one paid order, one refund, one customer download, and one accountant export before relying on the setup."],
];

const faq = [
  {
    q: "Does WooCommerce create UBL invoices by default?",
    a: "No. WooCommerce stores order and tax data, but a UBL-ready workflow normally needs extra invoice fields, structured metadata, invoice numbering, PDF generation, credit notes, and accounting export logic.",
  },
  {
    q: "Is UBL the same as a PDF invoice?",
    a: "No. A PDF is human-readable. UBL is structured invoice data for accounting/e-invoicing systems. A good WooCommerce invoice workflow keeps the visible PDF and structured export values consistent.",
  },
  {
    q: "What should I fix first if customers request UBL?",
    a: "Start with data capture: VAT/BTW number, company details, PO/reference, invoice email, tax breakdown, invoice number, and credit-note relationships. Export format is easier once the order data is clean.",
  },
  {
    q: "How does Lattice Invoices fit?",
    a: "The early-access product path focuses on making WooCommerce invoice-ready: VAT fields, invoice PDFs, credit notes, customer downloads, and structured accountant handoff. UBL readiness is a strong qualification signal for that workflow.",
  },
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "WooCommerce UBL invoice readiness guide for EU VAT stores",
  description:
    "A buyer-intent guide for WooCommerce stores preparing UBL invoice workflows with EU VAT metadata, invoice PDFs, credit notes, customer downloads, and accounting export.",
  mainEntityOfPage: PAGE_URL,
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
  "mailto:support@latticeplugins.com?subject=Lattice%20Invoices%20UBL%20invoice%20early%20access&body=Hi%20Lattice%2C%0A%0AI%20need%20WooCommerce%20UBL%20invoice%20readiness%20help.%0A%0AStore%20URL%3A%20%0ASeller%20country%3A%20%0AAccounting%20tool%20or%20UBL%20tool%3A%20%0AVAT%2FBTW%20field%20already%20present%3A%20%0APO%2Fbuyer%20reference%20field%20needed%3A%20%0AInvoice%20PDF%20plugin%20currently%20used%3A%20%0ACredit%20notes%20needed%3A%20";

export default function WooCommerceUblInvoicesPage() {
  return (
    <main className="min-h-screen bg-slate-50">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <section className="bg-gradient-to-br from-slate-950 via-indigo-950 to-blue-900 text-white">
        <div className="max-w-5xl mx-auto px-6 py-16 lg:py-20">
          <p className="uppercase tracking-[0.3em] text-sm text-blue-200 mb-4">WooCommerce UBL invoices</p>
          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
            Make WooCommerce invoice data ready before your accountant asks for UBL.
          </h1>
          <p className="text-xl text-blue-50 leading-relaxed max-w-3xl mb-8">
            UBL requests expose the same sales blocker again and again: the store can take payment, but the invoice data is scattered across notes, emails, PDFs, and manual bookkeeping spreadsheets.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href={mailto} className="bg-blue-500 text-white px-8 py-4 rounded-xl font-semibold hover:bg-blue-400 transition shadow-lg text-center">
              Request UBL readiness early access
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
              <h2 className="text-3xl font-bold mb-4">UBL is a data-quality problem before it is an export problem.</h2>
              <p className="text-slate-700 leading-relaxed mb-4">
                A UBL invoice can only be as reliable as the WooCommerce order data behind it. If VAT numbers live in order notes, buyer references arrive by email, and refunds have no credit-note document, every export becomes a manual finance task.
              </p>
              <p className="text-slate-700 leading-relaxed">
                This guide turns that buyer-intent search into a clear Lattice Invoices qualification path: clean checkout fields, locked invoice metadata, consistent PDF documents, refund credit notes, and accountant-ready handoff.
              </p>
            </div>

            <div className="bg-white rounded-2xl border shadow-sm p-8">
              <h2 className="text-3xl font-bold mb-6">WooCommerce UBL readiness checklist</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {ublChecklist.map((item) => (
                  <div key={item} className="flex gap-3 p-4 rounded-xl bg-slate-50 border border-slate-100">
                    <span className="text-blue-600 font-bold">✓</span>
                    <span className="text-slate-800">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-2xl border shadow-sm p-8 overflow-hidden">
              <h2 className="text-3xl font-bold mb-4">Fields to preserve before UBL export</h2>
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-slate-100 text-slate-700">
                      <th className="p-4 rounded-l-xl">Area</th>
                      <th className="p-4">Data to collect</th>
                      <th className="p-4 rounded-r-xl">Revenue impact</th>
                    </tr>
                  </thead>
                  <tbody>
                    {fieldRows.map(([area, data, impact]) => (
                      <tr key={area} className="border-b border-slate-100">
                        <td className="p-4 font-semibold text-slate-900">{area}</td>
                        <td className="p-4 text-slate-600">{data}</td>
                        <td className="p-4 text-slate-800">{impact}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div className="bg-white rounded-2xl border shadow-sm p-8">
              <h2 className="text-3xl font-bold mb-6">High-intent buying signals</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                {conversionSignals.map((signal) => (
                  <div key={signal.title} className="rounded-xl border border-blue-100 bg-blue-50 p-5">
                    <h3 className="text-xl font-bold mb-3">{signal.title}</h3>
                    <p className="text-slate-700 leading-relaxed">{signal.text}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-2xl border shadow-sm p-8">
              <h2 className="text-3xl font-bold mb-6">Setup sequence for a store owner</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {setupSteps.map(([title, text]) => (
                  <div key={title} className="rounded-xl border border-slate-200 bg-slate-50 p-5">
                    <h3 className="font-bold text-lg mb-2">{title}</h3>
                    <p className="text-slate-700 leading-relaxed">{text}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-blue-50 border border-blue-100 rounded-2xl p-8">
              <h2 className="text-3xl font-bold mb-4">Early-access CTA: €49 UBL readiness workflow review</h2>
              <p className="text-slate-700 leading-relaxed mb-5">
                Send your store URL, seller country, current invoice/PDF plugin, accounting or UBL tool, VAT-field status, buyer-reference needs, and credit-note requirements. That is enough to qualify whether Lattice Invoices is a fit.
              </p>
              <a href={mailto} className="inline-flex bg-blue-600 text-white px-7 py-3 rounded-xl font-semibold hover:bg-blue-700 transition">
                Send my UBL invoice requirements
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
              <p className="text-sm uppercase tracking-[0.2em] text-blue-700 font-semibold mb-2">UBL invoice readiness</p>
              <h2 className="text-2xl font-bold mb-3">Need invoice data your accountant can export?</h2>
              <p className="text-slate-700 mb-5">
                Request early access if UBL, accounting export, buyer references, VAT IDs, or credit notes are becoming sales or finance friction.
              </p>
              <a href={mailto} className="block text-center bg-blue-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-blue-700 transition mb-3">
                Request early access
              </a>
              <Link href="/docs/woocommerce-eu-vat-invoice-setup" className="block text-center border border-slate-200 px-6 py-3 rounded-xl font-semibold hover:border-blue-400 transition mb-3">
                Setup guide
              </Link>
              <Link href="/blog/woocommerce-peppol-e-invoices" className="block text-center border border-slate-200 px-6 py-3 rounded-xl font-semibold hover:border-blue-400 transition mb-3">
                Peppol readiness guide
              </Link>
              <Link href="/blog/woocommerce-invoice-export-accounting" className="block text-center border border-slate-200 px-6 py-3 rounded-xl font-semibold hover:border-blue-400 transition">
                Accounting export guide
              </Link>
            </div>

            <div className="bg-slate-900 text-white rounded-2xl p-6">
              <h2 className="text-2xl font-bold mb-3">Lattice Invoices early access</h2>
              <p className="text-slate-200 mb-5">
                A focused WooCommerce invoice workflow for EU VAT metadata, PDF invoices, credit notes, customer downloads, and structured handoff.
              </p>
              <Link href="/woocommerce-eu-vat-invoices" className="text-blue-300 font-semibold hover:text-blue-200">
                See the €49 offer →
              </Link>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}
