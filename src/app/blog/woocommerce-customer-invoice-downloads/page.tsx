import type { Metadata } from "next";
import Link from "next/link";

const SITE_URL = "https://latticeplugins.com";

export const metadata: Metadata = {
  title: "WooCommerce Customer Invoice Downloads — EU VAT Guide",
  description:
    "How WooCommerce stores can give customers secure invoice PDF downloads in My Account without losing VAT, credit-note, or proforma workflow control.",
  alternates: {
    canonical: `${SITE_URL}/blog/woocommerce-customer-invoice-downloads`,
  },
  openGraph: {
    title: "WooCommerce Customer Invoice Downloads",
    description:
      "A buyer-intent guide for EU stores that need My Account invoice downloads, VAT/BTW metadata, refund credit notes, and cleaner finance support workflows.",
    url: `${SITE_URL}/blog/woocommerce-customer-invoice-downloads`,
    siteName: "Lattice Plugins",
    type: "article",
  },
};

const downloadChecklist = [
  "Show paid invoice PDFs in My Account without exposing unpaid proforma documents as final invoices",
  "Use customer, company, VAT/BTW number, billing country, and PO/reference metadata on every downloadable invoice",
  "Let finance teams re-download the same invoice instead of opening support tickets",
  "Keep credit notes linked to refunds so customers can download correction documents too",
  "Avoid public invoice URLs; downloads should require the customer session or a protected token",
  "Make invoice email attachments and account downloads point to the same document source",
];

const workflowRows = [
  ["Order placed by bank transfer", "Show payment request/proforma status", "Prevents customers from treating an unpaid order as a final VAT invoice"],
  ["Payment received", "Generate final invoice PDF and expose it in My Account", "Gives the customer a self-serve finance document after the correct tax event"],
  ["Customer loses email", "Allow account download of the same final PDF", "Cuts support time and avoids duplicate/manual invoice creation"],
  ["Refund processed", "Generate a linked credit note download", "Keeps VAT corrections auditable and easy for the buyer to retrieve"],
  ["Accountant requests evidence", "Use consistent numbering and metadata across email + account", "Makes WooCommerce order history usable as an invoice trail"],
];

const scenarios = [
  {
    title: "B2B customer asks finance to pay",
    pain: "The buyer forwards a WooCommerce email, but finance needs a proper invoice PDF with VAT and PO data.",
    workflow: "Collect invoice-ready fields at checkout, then expose the final paid invoice in My Account.",
  },
  {
    title: "Support keeps resending PDFs",
    pain: "Customers cannot find the original invoice email, so support manually exports or recreates documents.",
    workflow: "Make paid invoices and credit notes available as protected customer downloads.",
  },
  {
    title: "Refund paperwork gets messy",
    pain: "A refund happens, but the customer only sees the original invoice and no correction document.",
    workflow: "Link credit-note downloads to the refunded order and reference the original invoice number.",
  },
];

const faq = [
  {
    q: "Should WooCommerce customers be able to download invoices from My Account?",
    a: "For EU B2B stores, yes. A protected My Account invoice download reduces support tickets and gives customers a consistent source for paid invoice PDFs and refund credit notes.",
  },
  {
    q: "Should unpaid bank-transfer orders show final invoice downloads?",
    a: "Usually no. A safer workflow is to show a proforma or payment request while the order is unpaid, then expose the final VAT invoice download only after payment is received.",
  },
  {
    q: "What data should a downloadable WooCommerce invoice include?",
    a: "Invoice number, invoice date, order reference, customer company name, VAT/BTW number where relevant, billing country, VAT rate, line items, totals, and reverse-charge wording when applicable.",
  },
  {
    q: "How does Lattice Invoices help with customer downloads?",
    a: "Lattice Invoices is being shaped around invoice-ready checkout fields, final invoice PDFs, protected customer downloads, email attachments, proforma handling, and refund credit notes for EU WooCommerce stores.",
  },
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "WooCommerce customer invoice downloads for EU VAT stores",
  description:
    "A practical workflow guide for WooCommerce stores that need protected invoice downloads in My Account without breaking EU VAT invoice handling.",
  mainEntityOfPage: `${SITE_URL}/blog/woocommerce-customer-invoice-downloads`,
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
  "mailto:support@latticeplugins.com?subject=Lattice%20Invoices%20customer%20invoice%20downloads&body=Hi%20Lattice%2C%0A%0AI%20need%20WooCommerce%20customer%20invoice%20downloads.%0A%0AStore%20URL%3A%20%0ACountry%3A%20%0AB2B%20or%20B2C%3A%20%0AVAT%2FBTW%20fields%20needed%3A%20%0AInvoice%20downloads%20in%20My%20Account%3A%20%0AEmail%20attachments%20needed%3A%20%0ACredit%20notes%20for%20refunds%3A%20%0AProforma%20before%20payment%3A%20";

export default function WooCommerceCustomerInvoiceDownloadsPage() {
  return (
    <main className="min-h-screen bg-slate-50">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <section className="bg-gradient-to-br from-slate-950 via-blue-950 to-cyan-900 text-white">
        <div className="max-w-5xl mx-auto px-6 py-16 lg:py-20">
          <p className="uppercase tracking-[0.3em] text-sm text-cyan-200 mb-4">WooCommerce customer invoice downloads</p>
          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
            Let customers download invoices without turning support into an accounting desk.
          </h1>
          <p className="text-xl text-cyan-50 leading-relaxed max-w-3xl mb-8">
            Customer invoice downloads sound simple until unpaid proformas, EU VAT fields, reverse-charge wording, and refund
            credit notes enter the workflow. This guide shows the safer path for WooCommerce stores that want self-serve PDFs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href={mailto} className="bg-cyan-500 text-white px-8 py-4 rounded-xl font-semibold hover:bg-cyan-400 transition shadow-lg text-center">
              Request customer-download early access
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
              <h2 className="text-3xl font-bold mb-4">Invoice downloads reduce support only when the workflow is strict.</h2>
              <p className="text-slate-700 leading-relaxed mb-4">
                If WooCommerce simply exposes every document, customers may download unpaid proformas as if they were final
                VAT invoices. If it exposes nothing, support has to resend PDFs manually and finance teams lose trust in the store.
              </p>
              <p className="text-slate-700 leading-relaxed">
                Lattice Invoices is being positioned around the missing middle: collect the right checkout metadata, generate the
                right document at the right order stage, and make final invoices plus credit notes available through protected downloads.
              </p>
            </div>

            <div className="bg-white rounded-2xl border shadow-sm p-8">
              <h2 className="text-3xl font-bold mb-6">Customer invoice download checklist</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {downloadChecklist.map((item) => (
                  <div key={item} className="flex gap-3 p-4 rounded-xl bg-slate-50 border border-slate-100">
                    <span className="text-cyan-600 font-bold">✓</span>
                    <span className="text-slate-800">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-2xl border shadow-sm p-8 overflow-hidden">
              <h2 className="text-3xl font-bold mb-4">A safer My Account invoice-download workflow</h2>
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-slate-100 text-slate-700">
                      <th className="p-4 rounded-l-xl">Moment</th>
                      <th className="p-4">What the customer can access</th>
                      <th className="p-4 rounded-r-xl">Why it matters</th>
                    </tr>
                  </thead>
                  <tbody>
                    {workflowRows.map(([moment, access, why]) => (
                      <tr key={moment} className="border-b border-slate-100">
                        <td className="p-4 font-semibold text-slate-900">{moment}</td>
                        <td className="p-4 text-slate-600">{access}</td>
                        <td className="p-4 text-slate-800">{why}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div className="bg-white rounded-2xl border shadow-sm p-8">
              <h2 className="text-3xl font-bold mb-6">Where customer downloads create direct value</h2>
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

            <div className="bg-cyan-50 border border-cyan-100 rounded-2xl p-8">
              <h2 className="text-3xl font-bold mb-4">Early-access offer: €49 invoice-download workflow review</h2>
              <p className="text-slate-700 leading-relaxed mb-5">
                If customers ask for invoice PDFs after purchase, send the current My Account, email attachment, refund, and
                proforma flow. Lattice will use that to prioritize the customer-download workflow inside the Lattice Invoices path.
              </p>
              <a href={mailto} className="inline-flex bg-cyan-600 text-white px-7 py-3 rounded-xl font-semibold hover:bg-cyan-700 transition">
                Send my download workflow
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
              <p className="text-sm uppercase tracking-[0.2em] text-cyan-700 font-semibold mb-2">Self-serve invoices</p>
              <h2 className="text-2xl font-bold mb-3">Need protected customer invoice downloads?</h2>
              <p className="text-slate-700 mb-5">
                Send store URL, customer account flow, invoice timing, VAT/BTW fields, credit-note needs, and whether unpaid
                orders should show proforma documents before final invoices.
              </p>
              <a href={mailto} className="block text-center bg-cyan-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-cyan-700 transition mb-3">
                Request download early access
              </a>
              <Link href="/blog/woocommerce-pdf-invoice-email-attachments" className="block text-center border border-slate-200 px-6 py-3 rounded-xl font-semibold hover:border-cyan-400 transition mb-3">
                PDF email attachment guide
              </Link>
              <Link href="/blog/woocommerce-credit-notes-refunds" className="block text-center border border-slate-200 px-6 py-3 rounded-xl font-semibold hover:border-cyan-400 transition mb-3">
                Credit-note workflow guide
              </Link>
              <Link href="/blog/woocommerce-proforma-invoice" className="block text-center border border-slate-200 px-6 py-3 rounded-xl font-semibold hover:border-cyan-400 transition mb-3">
                Proforma workflow guide
              </Link>
              <Link href="/docs/woocommerce-eu-vat-invoice-setup" className="block text-center border border-slate-200 px-6 py-3 rounded-xl font-semibold hover:border-cyan-400 transition mb-3">
                Setup guide
              </Link>
              <Link href="/woocommerce-eu-vat-invoices" className="block text-center border border-slate-200 px-6 py-3 rounded-xl font-semibold hover:border-cyan-400 transition">
                View invoice offer
              </Link>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}
