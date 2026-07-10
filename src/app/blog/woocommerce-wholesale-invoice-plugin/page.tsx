import type { Metadata } from "next";
import Link from "next/link";

const SITE_URL = "https://latticeplugins.com";
const SLUG = "/blog/woocommerce-wholesale-invoice-plugin";

export const metadata: Metadata = {
  title: "WooCommerce Wholesale Invoice Plugin: B2B VAT Workflow Checklist",
  description:
    "A buyer-intent checklist for WooCommerce wholesale stores that need B2B VAT invoices, PO numbers, invoice emails, Net 30 terms, credit notes, PDF delivery, and accountant exports.",
  alternates: {
    canonical: `${SITE_URL}${SLUG}`,
  },
  openGraph: {
    title: "WooCommerce wholesale invoice plugin checklist",
    description:
      "What wholesale WooCommerce stores should verify before buying an invoice plugin: VAT IDs, PO numbers, payment terms, PDF invoices, credit notes, and accounting handoff.",
    url: `${SITE_URL}${SLUG}`,
    siteName: "Lattice Plugins",
    type: "article",
  },
};

const wholesaleScenarios = [
  {
    title: "Trade buyers order on account",
    detail:
      "Wholesale customers often need a purchase order, cost centre, invoice email, and payment terms before finance approves the order. Those details should be captured before the order is paid or invoiced.",
  },
  {
    title: "Mixed VAT and reverse-charge orders",
    detail:
      "A B2B catalogue can include domestic VAT, EU reverse charge, VAT-exempt buyers, and different shipping countries. The invoice workflow needs structured VAT evidence instead of support notes.",
  },
  {
    title: "Returns, shortages, and partial credits",
    detail:
      "Wholesale stores handle partial refunds, damaged goods, returned units, or corrected quantities. The invoice plugin must create credit notes without overwriting the original invoice record.",
  },
];

const mustHaves = [
  "Company name, VAT number, PO/reference, cost centre, and invoice email fields at checkout",
  "Sequential invoice numbers that stay separate from WooCommerce order IDs",
  "Net 14/30 payment terms, due dates, and paid/unpaid invoice status",
  "PDF invoices attached to order emails and available in the customer account",
  "Refund-linked credit notes for returns, shortages, partial refunds, and corrections",
  "Exportable VAT rate, VAT amount, customer VAT ID, invoice number, payment method, and credit-note relationship",
];

const decisionRows = [
  {
    signal: "Wholesale customers email PO numbers or VAT IDs after checkout",
    priority: "Critical",
    action: "Add dedicated B2B invoice fields before payment and include them in invoice metadata.",
  },
  {
    signal: "Orders are paid by bank transfer or on Net 30 terms",
    priority: "High",
    action: "Require proforma/final invoice timing, due dates, reminder context, and payment status evidence.",
  },
  {
    signal: "Returns or quantity corrections happen every month",
    priority: "High",
    action: "Verify credit-note support before trusting the workflow for accounting handoff.",
  },
  {
    signal: "Finance asks for invoice PDFs from old orders",
    priority: "Medium",
    action: "Use customer-account invoice downloads and resend controls so support does not manually regenerate files.",
  },
];

const implementationSteps = [
  "Map every B2B field wholesale buyers ask for today: VAT ID, PO number, invoice email, cost centre, delivery reference, and buyer company name.",
  "Decide when an invoice is issued: on order creation, after payment, after manual approval, or after warehouse fulfilment.",
  "Test one domestic VAT order, one EU reverse-charge order, one bank-transfer order, and one refunded order.",
  "Confirm that the accountant can export invoice number, invoice date, VAT totals, customer VAT number, payment status, and credit-note links without reading order notes.",
];

const faq = [
  {
    q: "Is a wholesale invoice plugin different from a normal PDF invoice plugin?",
    a: "For B2B wholesale, usually yes. The store often needs PO numbers, invoice emails, payment terms, VAT validation, credit notes, and accountant-ready metadata — not only a PDF receipt attached to an email.",
  },
  {
    q: "Should wholesale stores create invoices before or after payment?",
    a: "It depends on payment terms. Bank transfer and Net 30 flows may need proforma or pay-by-invoice documents first, while card payments usually need final invoice PDFs after payment. The workflow should make that timing explicit.",
  },
  {
    q: "Where does Lattice Invoices fit?",
    a: "Lattice Invoices is the early-access WooCommerce EU invoicing path for VAT/BTW fields, invoice PDFs, customer downloads, credit notes, and accountant-ready data. Wholesale stores are a strong fit when B2B invoice requests are already recurring.",
  },
  {
    q: "What should I send for a fit check?",
    a: "Send your store URL, country, B2B/wholesale order volume, payment terms, VAT fields, PO/reference needs, refund workflow, and accounting export requirements.",
  },
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "WooCommerce wholesale invoice plugin checklist",
  description:
    "A buyer-intent checklist for WooCommerce wholesale stores that need B2B VAT invoices, PO numbers, invoice emails, Net 30 terms, credit notes, PDF delivery, and accountant exports.",
  mainEntityOfPage: `${SITE_URL}${SLUG}`,
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
  "mailto:support@latticeplugins.com?subject=WooCommerce%20wholesale%20invoice%20plugin%20review&body=Hi%20Lattice%2C%0A%0AI%20want%20a%20WooCommerce%20wholesale%20invoice%20workflow%20review%20for%20Lattice%20Invoices%20early%20access.%0A%0AStore%20URL%3A%20%0ACountry%3A%20%0AB2B%2Fwholesale%20order%20volume%3A%20%0APayment%20terms%20%28card%2C%20bank%20transfer%2C%20Net%2030%29%3A%20%0AVAT%2FBTW%20fields%20needed%3A%20%0APO%2Fcost-centre%20fields%20needed%3A%20%0ARefund%2Fcredit-note%20workflow%3A%20%0AAccounting%20export%20needs%3A%20";

export default function WooCommerceWholesaleInvoicePluginPage() {
  return (
    <main className="min-h-screen bg-slate-50">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <section className="bg-gradient-to-br from-slate-950 via-blue-950 to-emerald-900 text-white">
        <div className="max-w-5xl mx-auto px-6 py-16 lg:py-20">
          <p className="uppercase tracking-[0.3em] text-sm text-emerald-200 mb-4">Wholesale invoice workflow</p>
          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
            WooCommerce wholesale invoice plugin checklist for B2B VAT orders.
          </h1>
          <p className="text-xl text-blue-50 leading-relaxed max-w-3xl mb-8">
            Wholesale buyers need more than a basic order receipt. Use this checklist to qualify PO numbers, VAT IDs, payment terms, invoice PDFs, customer downloads, credit notes, and accountant exports before choosing a plugin.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href={mailto} className="bg-green-400 text-slate-950 px-8 py-4 rounded-xl font-semibold hover:bg-green-300 transition shadow-lg text-center">
              Request wholesale invoice fit check
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
              <h2 className="text-3xl font-bold mb-4">Why wholesale stores outgrow generic invoice PDFs</h2>
              <p className="text-slate-700 leading-relaxed mb-4">
                Wholesale WooCommerce stores usually sell to companies with internal finance rules. A buyer can place the order, but accounts payable may still need a VAT ID, PO number, invoice email, payment terms, and a corrected PDF before paying.
              </p>
              <p className="text-slate-700 leading-relaxed">
                Lattice Invoices is positioned around that B2B workflow: collect invoice fields before the order becomes support work, keep invoice documents tied to WooCommerce order data, and make refunds produce clean credit notes.
              </p>
            </div>

            <div className="grid gap-4">
              {wholesaleScenarios.map((item) => (
                <div key={item.title} className="bg-white rounded-2xl border shadow-sm p-6">
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  <p className="text-slate-700 leading-relaxed">{item.detail}</p>
                </div>
              ))}
            </div>

            <div className="bg-emerald-50 border border-emerald-100 rounded-2xl p-8">
              <h2 className="text-3xl font-bold mb-5">Wholesale invoice must-haves</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {mustHaves.map((item) => (
                  <div key={item} className="bg-white rounded-xl border border-emerald-100 p-4 flex gap-3">
                    <span className="text-emerald-700 font-bold">✓</span>
                    <span className="text-slate-800">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-2xl border shadow-sm p-8 overflow-hidden">
              <h2 className="text-3xl font-bold mb-5">Should a wholesale store buy now?</h2>
              <div className="overflow-x-auto">
                <table className="min-w-full text-left border-collapse">
                  <thead>
                    <tr className="border-b bg-slate-50">
                      <th className="p-4 font-semibold">Store signal</th>
                      <th className="p-4 font-semibold">Priority</th>
                      <th className="p-4 font-semibold">Best next action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {decisionRows.map((row) => (
                      <tr key={row.signal} className="border-b last:border-b-0 align-top">
                        <td className="p-4 text-slate-700">{row.signal}</td>
                        <td className="p-4 font-bold text-emerald-700">{row.priority}</td>
                        <td className="p-4 text-slate-700">{row.action}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div className="bg-slate-950 text-white rounded-2xl p-8">
              <h2 className="text-3xl font-bold mb-4">Wholesale fit-check before the €49 early-access license</h2>
              <p className="text-slate-200 leading-relaxed mb-5">
                Send the requirements once instead of starting with a vague plugin question. A good wholesale fit check includes fields, payment terms, refund patterns, and accounting export needs.
              </p>
              <div className="space-y-3 mb-6">
                {implementationSteps.map((step) => (
                  <div key={step} className="rounded-xl bg-white/10 border border-white/10 p-4 flex gap-3">
                    <span className="text-green-300 font-bold">→</span>
                    <span>{step}</span>
                  </div>
                ))}
              </div>
              <a href={mailto} className="inline-flex bg-green-400 text-slate-950 px-6 py-3 rounded-xl font-semibold hover:bg-green-300 transition">
                Send wholesale invoice details
              </a>
            </div>

            <div className="bg-blue-50 border border-blue-100 rounded-2xl p-8">
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
              <p className="text-sm uppercase tracking-widest text-emerald-700 font-semibold mb-2">For wholesale stores</p>
              <h2 className="text-2xl font-bold mb-3">Turn B2B invoice requests into a predictable WooCommerce workflow.</h2>
              <p className="text-slate-700 leading-relaxed mb-5">
                Send the store URL, payment terms, invoice fields, credit-note needs, and export requirements. The fit check qualifies whether Lattice Invoices is worth the €49 early-access license.
              </p>
              <a href={mailto} className="block text-center bg-blue-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-blue-700 transition mb-3">
                Request wholesale fit check
              </a>
              <Link href="/woocommerce-eu-vat-invoices" className="block text-center border border-slate-200 px-6 py-3 rounded-xl font-semibold hover:border-blue-400 transition mb-3">
                View Lattice Invoices
              </Link>
              <Link href="/docs/woocommerce-eu-vat-invoice-setup" className="block text-center border border-slate-200 px-6 py-3 rounded-xl font-semibold hover:border-blue-400 transition mb-3">
                Setup guide
              </Link>
              <Link href="/tools/woocommerce-invoice-fit-check" className="block text-center border border-slate-200 px-6 py-3 rounded-xl font-semibold hover:border-blue-400 transition">
                Score invoice fit
              </Link>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}
