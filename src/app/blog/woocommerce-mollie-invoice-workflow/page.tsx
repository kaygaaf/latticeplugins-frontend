import type { Metadata } from "next";
import Link from "next/link";

const SITE_URL = "https://latticeplugins.com";

export const metadata: Metadata = {
  title: "WooCommerce Mollie Invoice Workflow for EU VAT Stores",
  description:
    "A buyer-intent guide for WooCommerce stores using Mollie that need VAT/BTW checkout fields, paid invoice PDFs, SEPA/iDEAL payment evidence, refund credit notes, and accountant-ready exports.",
  alternates: {
    canonical: `${SITE_URL}/blog/woocommerce-mollie-invoice-workflow`,
  },
  openGraph: {
    title: "WooCommerce Mollie invoice workflow for EU VAT stores",
    description:
      "Map Mollie iDEAL, Bancontact, card, and SEPA payment events to WooCommerce invoice PDFs, VAT metadata, refund credit notes, customer downloads, and accounting evidence.",
    url: `${SITE_URL}/blog/woocommerce-mollie-invoice-workflow`,
    siteName: "Lattice Plugins",
    type: "article",
  },
};

const readinessChecklist = [
  {
    title: "1. Collect VAT/BTW data before the Mollie payment starts",
    detail:
      "Mollie can process iDEAL, Bancontact, cards, and SEPA flows, but EU invoice quality still depends on WooCommerce order metadata: company name, VAT/BTW number, billing country, invoice email, PO/reference, and exemption status before the customer leaves checkout.",
    buyerQuestion: "Does the checkout store invoice-ready business fields before redirecting to Mollie?",
  },
  {
    title: "2. Trigger final invoice numbering only after payment confirmation",
    detail:
      "Redirect-based payment methods can create pending orders before money is confirmed. Final invoice numbers should start when WooCommerce receives a reliable paid status, not when the customer merely clicks Pay.",
    buyerQuestion: "Which WooCommerce status creates the final invoice for iDEAL, Bancontact, card, and SEPA orders?",
  },
  {
    title: "3. Keep Mollie transaction evidence next to the invoice",
    detail:
      "Support and accounting need one order view that links invoice number, Mollie payment ID, payment method, VAT totals, payment date, customer VAT number, PDF state, and refund references.",
    buyerQuestion: "Can exports include invoice number, Mollie payment ID, VAT totals, and refund references in one row?",
  },
  {
    title: "4. Handle SEPA and delayed payment states cleanly",
    detail:
      "SEPA direct debit and some local methods can move through pending, paid, failed, reversed, or charged-back states. Your invoice workflow needs rules for proforma requests, final invoices, reminders, reversals, and credit notes.",
    buyerQuestion: "How does the plugin behave when a Mollie payment is delayed, failed, reversed, or refunded?",
  },
  {
    title: "5. Give B2B customers a download fallback",
    detail:
      "Even if the invoice PDF is attached to the paid order email, Dutch and EU B2B customers often need it later for finance teams. My Account downloads reduce support emails and speed repeat purchases.",
    buyerQuestion: "Can customers download invoices and credit notes without opening a support ticket?",
  },
];

const scenarios = [
  {
    title: "iDEAL or Bancontact payment succeeds after redirect",
    trigger: "The customer returns from Mollie and WooCommerce receives a paid status.",
    workflow:
      "Generate the final invoice number, attach the PDF, store the Mollie payment ID, and expose the invoice in My Account.",
  },
  {
    title: "SEPA direct debit starts as pending",
    trigger: "The order exists, but payment can still settle, fail, or reverse later.",
    workflow:
      "Use a proforma or payment request until the configured paid status is reached, then issue the final VAT invoice and keep mandate/payment evidence linked.",
  },
  {
    title: "Refund or chargeback happens in Mollie",
    trigger: "A paid order is partially or fully refunded, reversed, or disputed.",
    workflow:
      "Retain the original invoice, create linked credit-note evidence, store Mollie refund/reversal references, and export both documents for accounting.",
  },
];

const comparisonRows = [
  {
    weak: "Mollie dashboard shows the payment, WooCommerce shows the order, and invoice PDFs are created manually later.",
    strong: "WooCommerce order links invoice number, PDF, Mollie transaction/refund references, VAT fields, and customer download status.",
  },
  {
    weak: "Final invoice number is created when the buyer clicks Pay, causing gaps for abandoned or failed redirect payments.",
    strong: "Final invoice numbering waits for the configured paid order status and keeps pending flows as proforma/payment-request evidence.",
  },
  {
    weak: "SEPA reversals and refunds are tracked in Mollie but not represented as retained credit-note evidence in WooCommerce.",
    strong: "Refund and reversal workflows create traceable credit notes linked to the original invoice, order, and Mollie payment event.",
  },
  {
    weak: "Dutch B2B customers email support for BTW invoices after iDEAL payments.",
    strong: "VAT/BTW metadata is captured before payment, PDFs are attached to emails, and customer downloads stay available later.",
  },
];

const faq = [
  {
    q: "Does Mollie automatically create EU VAT invoices for WooCommerce?",
    a: "No. Mollie handles payment methods and transaction evidence. EU VAT invoices still need WooCommerce order metadata, invoice numbers, VAT fields, PDF delivery, refund credit notes, and accountant-ready exports.",
  },
  {
    q: "When should a Mollie-paid WooCommerce invoice be created?",
    a: "Usually after WooCommerce receives the configured paid status from the Mollie payment flow. Creating final invoice numbers before redirect payments settle can create gaps, duplicates, and correction work.",
  },
  {
    q: "What is different about SEPA direct debit invoices?",
    a: "SEPA can have delayed settlement and reversals. Many stores should use a proforma or payment request first, then issue the final VAT invoice after the order reaches a reliable paid state.",
  },
  {
    q: "Where does Lattice fit if I already use Mollie?",
    a: "Mollie remains the payment gateway. The Lattice Invoices early-access workflow focuses on VAT/BTW checkout evidence, invoice PDFs, customer downloads, credit notes, and accounting handoff around the WooCommerce order.",
  },
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "WooCommerce Mollie invoice workflow for EU VAT stores",
  description:
    "A practical buyer guide for WooCommerce stores using Mollie that need VAT checkout fields, paid invoice PDFs, SEPA/iDEAL payment evidence, refund credit notes, customer downloads, and accountant-ready exports.",
  mainEntityOfPage: `${SITE_URL}/blog/woocommerce-mollie-invoice-workflow`,
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
  "mailto:support@latticeplugins.com?subject=WooCommerce%20Mollie%20invoice%20workflow%20review&body=Hi%20Lattice%2C%0A%0AI%20want%20a%20WooCommerce%20Mollie%20invoice%20workflow%20review.%0A%0AStore%20URL%3A%20%0ACountry%3A%20%0AMollie%20payment%20methods%3A%20%0ACurrent%20invoice%20plugin%3A%20%0AVAT%2FBTW%20fields%20needed%3A%20%0ASEPA%2Frefund%20workflow%3A%20%0AAccounting%20export%20needs%3A%20";

export default function WooCommerceMollieInvoiceWorkflowPage() {
  return (
    <main className="min-h-screen bg-slate-50">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <section className="bg-gradient-to-br from-slate-950 via-emerald-950 to-blue-900 text-white">
        <div className="max-w-5xl mx-auto px-6 py-16 lg:py-20">
          <p className="uppercase tracking-[0.3em] text-sm text-emerald-200 mb-4">WooCommerce Mollie invoicing</p>
          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
            WooCommerce Mollie invoices without VAT gaps, SEPA surprises, or refund confusion.
          </h1>
          <p className="text-xl text-emerald-50 leading-relaxed max-w-3xl mb-8">
            Mollie makes EU payment methods easy. EU stores still need invoice-ready WooCommerce data: VAT/BTW fields, final invoice numbers, iDEAL/SEPA payment evidence, refund credit notes, customer downloads, and accounting exports.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href={mailto} className="bg-green-400 text-slate-950 px-8 py-4 rounded-xl font-semibold hover:bg-green-300 transition shadow-lg text-center">
              Request €49 Mollie invoice workflow review
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
              <h2 className="text-3xl font-bold mb-4">Why Mollie stores still need an invoice workflow</h2>
              <p className="text-slate-700 leading-relaxed mb-4">
                A Mollie transaction proves that a payment method was attempted or settled. It does not prove that the WooCommerce order has the right VAT/BTW number, that the final invoice number was issued at the right moment, or that reversals and refunds created accountant-ready correction evidence.
              </p>
              <p className="text-slate-700 leading-relaxed">
                For Dutch and EU WooCommerce stores, the payment gateway and invoice workflow should meet at the order record. The order should show customer VAT metadata, invoice PDF state, Mollie payment/refund references, credit-note links, and customer download access without spreadsheet reconciliation.
              </p>
            </div>

            <div className="bg-emerald-50 border border-emerald-100 rounded-2xl p-8">
              <h2 className="text-3xl font-bold mb-5">Mollie invoice readiness checklist</h2>
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
              <h2 className="text-3xl font-bold mb-5">Three Mollie invoice scenarios to test</h2>
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
              <h2 className="text-3xl font-bold mb-5">Manual workaround vs invoice-ready workflow</h2>
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
              <h2 className="text-2xl font-bold mb-3">Sell with Mollie? Review invoicing before plugin spend.</h2>
              <p className="text-slate-700 leading-relaxed mb-5">
                Lattice Invoices early access is positioned for WooCommerce stores that need VAT/BTW fields, retained invoice PDFs, credit notes, customer downloads, and payment evidence around the order.
              </p>
              <a href={mailto} className="block text-center bg-blue-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-blue-700 transition mb-3">
                Request €49 workflow review
              </a>
              <Link href="/blog/woocommerce-sepa-direct-debit-invoices" className="block text-center border border-slate-200 px-6 py-3 rounded-xl font-semibold hover:border-blue-400 transition mb-3">
                SEPA invoice guide
              </Link>
              <Link href="/blog/woocommerce-bank-transfer-invoice" className="block text-center border border-slate-200 px-6 py-3 rounded-xl font-semibold hover:border-blue-400 transition mb-3">
                Bank transfer invoice guide
              </Link>
              <Link href="/blog/woocommerce-stripe-invoice-workflow" className="block text-center border border-slate-200 px-6 py-3 rounded-xl font-semibold hover:border-blue-400 transition mb-3">
                Stripe invoice workflow guide
              </Link>
              <Link href="/blog/woocommerce-paypal-invoice-workflow" className="block text-center border border-slate-200 px-6 py-3 rounded-xl font-semibold hover:border-blue-400 transition">
                PayPal invoice workflow guide
              </Link>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}
