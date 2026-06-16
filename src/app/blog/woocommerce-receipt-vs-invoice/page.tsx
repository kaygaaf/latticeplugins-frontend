import type { Metadata } from "next";
import Link from "next/link";

const SITE_URL = "https://latticeplugins.com";
const SLUG = "/blog/woocommerce-receipt-vs-invoice";

export const metadata: Metadata = {
  title: "WooCommerce Receipt vs Invoice Workflow for EU VAT Stores",
  description:
    "A buyer-intent guide for WooCommerce stores deciding when a receipt is enough, when a VAT invoice is required, and how to keep invoice PDFs, credit notes, and exports compliant.",
  alternates: {
    canonical: `${SITE_URL}${SLUG}`,
  },
  openGraph: {
    title: "WooCommerce receipt vs invoice workflow for EU VAT stores",
    description:
      "What EU WooCommerce stores should check before relying on payment receipts instead of VAT invoices: B2B fields, invoice numbers, refunds, credit notes, and accountant exports.",
    url: `${SITE_URL}${SLUG}`,
    siteName: "Lattice Plugins",
    type: "article",
  },
};

const readinessChecks = [
  {
    title: "1. Separate payment proof from VAT invoice proof",
    detail:
      "A gateway receipt proves that a payment happened. A VAT invoice usually needs legal seller/buyer details, VAT treatment, invoice number, dates, line items, tax rates, and retention/export evidence.",
    buyerQuestion: "Can your plugin clearly show customers and accountants which PDF is a receipt, proforma, final VAT invoice, or credit note?",
  },
  {
    title: "2. Collect B2B invoice fields before the document is generated",
    detail:
      "If the buyer needs a company invoice, checkout should capture billing entity, VAT ID, country, PO/reference, and reverse-charge decision before the invoice PDF is issued.",
    buyerQuestion: "Does the checkout flow collect invoice-ready fields, or does support fix receipts manually after purchase?",
  },
  {
    title: "3. Keep invoice numbers sequential and immutable",
    detail:
      "Receipts can often use gateway transaction IDs, but VAT invoices need a numbering story that finance can explain. Editing or deleting issued invoice numbers creates audit risk.",
    buyerQuestion: "Can the plugin prevent accidental gaps, duplicates, and overwritten PDFs when a receipt needs to become an invoice?",
  },
  {
    title: "4. Map refunds to credit notes, not just order notes",
    detail:
      "A refunded receipt is not enough for many accounting workflows. The correction should link the original invoice, credit note, VAT amount, customer PDF, and export row.",
    buyerQuestion: "When a paid order is refunded, does the customer get a linked credit note and does accounting see the relationship?",
  },
  {
    title: "5. Export the same document story your customer sees",
    detail:
      "Support, customer downloads, email attachments, and accountant exports should agree. If the customer sees a receipt but the export says invoice, reconciliation becomes manual.",
    buyerQuestion: "Can you export receipt/invoice status, invoice numbers, VAT evidence, payment reference, and credit-note links together?",
  },
];

const scenarios = [
  {
    title: "B2C card payment with simple receipt",
    trigger: "A consumer buys a low-risk digital product and only needs payment confirmation.",
    workflow:
      "Send the payment receipt, but keep the order eligible for a VAT invoice if the customer later requests one. Avoid issuing final invoice numbers before the store policy requires it.",
  },
  {
    title: "B2B buyer asks for an invoice after payment",
    trigger: "The customer paid by card or PayPal, then asks support for a company VAT invoice with VAT ID and PO number.",
    workflow:
      "Collect missing billing details in a structured way, issue a final VAT invoice with the correct numbering and VAT treatment, and attach/download the PDF without editing old receipt text.",
  },
  {
    title: "Order starts as proforma, ends as paid final invoice",
    trigger: "A company buyer needs a document before payment approval but should not receive the final VAT invoice until payment is confirmed.",
    workflow:
      "Send a proforma/payment request first, keep the payment link or BACS reference connected, then create the final invoice and customer download after payment.",
  },
  {
    title: "Receipt payment is later refunded",
    trigger: "The gateway payment succeeded, the invoice was issued, and the order is partially or fully refunded.",
    workflow:
      "Retain the original invoice, issue a linked credit note, expose both PDFs to the customer, and export both documents to the accountant.",
  },
];

const weakVsStrong = [
  {
    weak: "Gateway receipt email is treated as the invoice, with no VAT invoice number or buyer VAT fields.",
    strong: "Receipt and VAT invoice are separate document states with clear labels, fields, PDFs, and export rows.",
  },
  {
    weak: "Support edits billing details manually after the customer requests an invoice.",
    strong: "Structured invoice fields are captured before document generation and retained for audit/export.",
  },
  {
    weak: "Refunds only update the WooCommerce order total and the gateway dashboard.",
    strong: "Refunds create linked credit-note evidence that matches customer downloads and accounting exports.",
  },
  {
    weak: "Accountant export does not show whether a row came from a receipt, proforma, invoice, or credit note.",
    strong: "Export includes document type, number, VAT treatment, payment reference, customer PDF URL, and correction links.",
  },
];

const faq = [
  {
    q: "Is a WooCommerce receipt the same as an invoice?",
    a: "No. A receipt generally proves payment. A VAT invoice usually needs more structured legal, VAT, numbering, and retention information. Some stores can use simple receipts for some purchases, but B2B and EU VAT workflows often require invoice PDFs and credit-note handling.",
  },
  {
    q: "Can WooCommerce generate invoices only after payment?",
    a: "Yes, but the workflow has to be deliberate. Stores often need a proforma or payment request before payment, then a final invoice PDF after payment, with invoice numbers, VAT evidence, and customer downloads preserved.",
  },
  {
    q: "What should I ask before buying a WooCommerce invoice plugin?",
    a: "Ask how it separates receipts, proformas, final invoices, and credit notes; how it handles VAT IDs and reverse charge; whether invoice numbers are immutable; how refunds are documented; and whether accountant exports match customer-facing PDFs.",
  },
  {
    q: "Where does Lattice Invoices fit?",
    a: "Lattice Invoices early access is being positioned for WooCommerce stores that need EU VAT/BTW invoice workflows around receipts, payment links, BACS/manual invoice payment, final invoice timing, PDF delivery, credit notes, customer downloads, and accountant exports.",
  },
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "WooCommerce receipt vs invoice workflow for EU VAT stores",
  description:
    "A buyer-intent guide for WooCommerce stores deciding when receipts are enough and when VAT invoice PDFs, credit notes, and exports are required.",
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
  "mailto:support@latticeplugins.com?subject=WooCommerce%20receipt%20vs%20invoice%20workflow%20review&body=Hi%20Lattice%2C%0A%0AI%20want%20a%20WooCommerce%20receipt%20vs%20invoice%20workflow%20review.%0A%0AStore%20URL%3A%20%0ACountry%3A%20%0AB2B%20or%20B2C%3A%20%0ACurrent%20receipt%2Finvoice%20plugin%3A%20%0APayment%20gateways%3A%20%0AVAT%20ID%2FPO%20field%20needs%3A%20%0ARefund%2Fcredit-note%20workflow%3A%20";

export default function WooCommerceReceiptVsInvoicePage() {
  return (
    <main className="min-h-screen bg-slate-50">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <section className="bg-gradient-to-br from-slate-950 via-emerald-950 to-blue-900 text-white">
        <div className="max-w-5xl mx-auto px-6 py-16 lg:py-20">
          <p className="uppercase tracking-[0.3em] text-sm text-emerald-200 mb-4">WooCommerce receipt vs invoice</p>
          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
            Know when a WooCommerce receipt is not enough for EU VAT invoicing.
          </h1>
          <p className="text-xl text-emerald-50 leading-relaxed max-w-3xl mb-8">
            Payment receipts are useful, but EU stores still need the right moment for final invoices, VAT/BTW fields, invoice numbers, PDF delivery, credit notes, customer downloads, and accountant-ready exports.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href={mailto} className="bg-green-400 text-slate-950 px-8 py-4 rounded-xl font-semibold hover:bg-green-300 transition shadow-lg text-center">
              Request €49 receipt/invoice review
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
              <h2 className="text-3xl font-bold mb-4">Why receipt vs invoice confusion costs time</h2>
              <p className="text-slate-700 leading-relaxed mb-4">
                WooCommerce can confirm payment quickly, but finance teams often need a different document story: was the customer sent a receipt, a proforma, a final VAT invoice, or a credit note? If that distinction lives in emails and spreadsheets, every refund, B2B invoice request, and export becomes manual.
              </p>
              <p className="text-slate-700 leading-relaxed">
                Lattice Invoices is being shaped around this buyer problem: turning payment evidence into a clean WooCommerce invoice workflow for stores that sell across EU VAT/BTW, B2B, BACS/manual invoice payment, and accounting handoff scenarios.
              </p>
            </div>

            <div className="bg-emerald-50 border border-emerald-100 rounded-2xl p-8">
              <h2 className="text-3xl font-bold mb-5">Receipt vs invoice readiness checklist</h2>
              <div className="space-y-4">
                {readinessChecks.map((item) => (
                  <div key={item.title} className="bg-white rounded-xl border border-emerald-100 p-5">
                    <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                    <p className="text-slate-700 leading-relaxed mb-2">{item.detail}</p>
                    <p className="text-slate-600 leading-relaxed"><strong>Buyer question:</strong> {item.buyerQuestion}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-2xl border shadow-sm p-8">
              <h2 className="text-3xl font-bold mb-5">Four scenarios to test before choosing a plugin</h2>
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
              <h2 className="text-3xl font-bold mb-5">Weak receipt workflow vs invoice-ready workflow</h2>
              <div className="overflow-x-auto">
                <table className="min-w-full text-left border-collapse">
                  <thead>
                    <tr className="border-b">
                      <th className="py-3 pr-4 font-semibold">Weak workflow</th>
                      <th className="py-3 pr-4 font-semibold">Lattice Invoices direction</th>
                    </tr>
                  </thead>
                  <tbody>
                    {weakVsStrong.map((row) => (
                      <tr key={row.weak} className="border-b last:border-b-0">
                        <td className="py-4 pr-4 text-slate-700">{row.weak}</td>
                        <td className="py-4 pr-4 text-slate-700">{row.strong}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div className="bg-slate-950 text-white rounded-2xl p-8">
              <h2 className="text-3xl font-bold mb-4">Want the receipt/invoice workflow reviewed?</h2>
              <p className="text-slate-200 leading-relaxed mb-6">
                Send your store URL and current payment/invoice plugin. We will review where receipts, invoice PDFs, VAT fields, payment references, refunds, and exports currently break down and map it to the €49 Lattice Invoices early-access workflow.
              </p>
              <a href={mailto} className="inline-flex bg-green-400 text-slate-950 px-6 py-3 rounded-xl font-semibold hover:bg-green-300 transition">
                Request €49 workflow review
              </a>
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
              <h2 className="text-2xl font-bold mb-3">Lattice Invoices early access</h2>
              <p className="text-slate-700 leading-relaxed mb-4">
                A focused WooCommerce EU VAT invoicing workflow for receipts, proformas, final invoices, credit notes, customer downloads, reminders, and accountant exports.
              </p>
              <div className="rounded-xl bg-emerald-50 border border-emerald-100 p-4 mb-4">
                <p className="font-semibold text-slate-900">Early-access workflow review</p>
                <p className="text-3xl font-bold text-emerald-700">€49</p>
                <p className="text-sm text-slate-600">Manual review now; plugin workflow shaped around the recurring buyer pain.</p>
              </div>
              <a href={mailto} className="block bg-slate-950 text-white text-center px-5 py-3 rounded-xl font-semibold hover:bg-slate-800 transition mb-3">
                Email Lattice
              </a>
              <Link href="/docs/woocommerce-eu-vat-invoice-setup" className="block text-center text-blue-700 font-semibold hover:text-blue-900">
                Read setup guide
              </Link>
            </div>

            <div className="bg-white rounded-2xl border shadow-sm p-6">
              <h2 className="text-xl font-bold mb-3">Related invoice guides</h2>
              <ul className="space-y-3 text-blue-700 font-semibold">
                <li><Link href="/blog/woocommerce-invoice-after-payment">Invoice after payment workflow</Link></li>
                <li><Link href="/blog/woocommerce-invoice-payment-link">Invoice payment link workflow</Link></li>
                <li><Link href="/blog/woocommerce-credit-notes-refunds">Credit notes and refunds</Link></li>
                <li><Link href="/blog/woocommerce-invoice-export-accounting">Invoice export for accounting</Link></li>
                <li><Link href="/blog/woocommerce-vat-invoice-plugin-eu">EU VAT invoice plugin checklist</Link></li>
              </ul>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}
