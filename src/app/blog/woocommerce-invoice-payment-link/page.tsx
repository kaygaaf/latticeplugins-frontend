import type { Metadata } from "next";
import Link from "next/link";

const SITE_URL = "https://latticeplugins.com";
const SLUG = "/blog/woocommerce-invoice-payment-link";

export const metadata: Metadata = {
  title: "WooCommerce Invoice Payment Link Workflow for EU VAT Stores",
  description:
    "A buyer-intent guide for WooCommerce stores that need invoice payment links, bank-transfer references, VAT invoice PDFs, credit notes, reminders, and accountant exports.",
  alternates: {
    canonical: `${SITE_URL}${SLUG}`,
  },
  openGraph: {
    title: "WooCommerce invoice payment link workflow for EU VAT stores",
    description:
      "What to check before adding pay-by-link invoice workflows to WooCommerce: VAT evidence, proformas, final invoice timing, payment references, reminders, and credit notes.",
    url: `${SITE_URL}${SLUG}`,
    siteName: "Lattice Plugins",
    type: "article",
  },
};

const readinessChecks = [
  {
    title: "1. Do not issue final invoice numbers too early",
    detail:
      "A payment link often starts as a request for payment, not proof that VAT invoice revenue is final. The workflow should distinguish quote, proforma, payment request, paid final invoice, and credit note states.",
    buyerQuestion: "Can the plugin delay or clearly label final invoice creation until your finance rule says it is safe?",
  },
  {
    title: "2. Keep the payment reference visible everywhere",
    detail:
      "If the customer receives a Stripe, PayPal, Mollie, SEPA, or bank-transfer link, the invoice workflow should retain the reference on the order, email, PDF, reminder, and accountant export.",
    buyerQuestion: "Can support and accounting match the payment link, transaction, invoice number, and order without spreadsheet work?",
  },
  {
    title: "3. Preserve VAT and buyer evidence before payment",
    detail:
      "B2B buyers often need VAT ID, PO number, billing entity, reverse-charge decision, and payment terms before accounts payable will click the link. That evidence should be collected before the request goes out.",
    buyerQuestion: "Does the checkout or manual-order flow collect invoice-ready VAT and PO fields before payment?",
  },
  {
    title: "4. Make reminders reference the same invoice story",
    detail:
      "Payment-link reminders should not create duplicate documents. They should reference the same proforma or final invoice record, show due dates, expose the pay link, and log resend history.",
    buyerQuestion: "Can the store resend a payment link with invoice context while keeping an audit trail?",
  },
  {
    title: "5. Handle refunds and failed payments as documents, not notes",
    detail:
      "If a payment link is paid and later refunded, the credit note should link to the original invoice. If payment fails, the request should remain unpaid instead of creating a misleading paid invoice trail.",
    buyerQuestion: "What happens to invoice PDFs, credit notes, and customer downloads after failed or refunded pay-by-link orders?",
  },
];

const scenarios = [
  {
    title: "B2B customer asks for a pay-by-link invoice",
    trigger: "Sales creates a manual WooCommerce order for a company buyer and sends a payment link before the order is paid.",
    workflow:
      "Collect VAT ID, PO number, billing entity, due date, and payment method. Send a proforma or payment request with the link, then create the final invoice PDF after payment according to the store policy.",
  },
  {
    title: "Customer needs a reminder with the same payment link",
    trigger: "The first email was ignored, but the finance team needs one clear invoice/payment trail.",
    workflow:
      "Resend the payment link with the same invoice reference, due date, amount due, and document link. Log the resend so support can prove follow-up without editing the PDF manually.",
  },
  {
    title: "Pay-by-link order is refunded later",
    trigger: "The invoice was paid by link, fulfilled, then partially or fully refunded.",
    workflow:
      "Keep the original invoice immutable, issue a linked credit note with VAT evidence, expose both PDFs to the customer, and export the relationship for the accountant.",
  },
];

const weakVsStrong = [
  {
    weak: "A payment link is pasted into an order note and the invoice PDF has no payment reference.",
    strong: "Payment link, gateway reference, invoice number, order ID, and customer email remain connected.",
  },
  {
    weak: "The store sends a final invoice before payment, then deletes or edits it when the customer never pays.",
    strong: "The workflow labels the pre-payment document as a proforma/payment request and creates the final invoice at the correct moment.",
  },
  {
    weak: "Reminder emails are manual free-text messages with no resend log or PDF/customer-download fallback.",
    strong: "Payment reminders reuse the same document story and preserve due-date, resend, and download evidence.",
  },
  {
    weak: "Refunds only change the WooCommerce order total, leaving accounting to infer the correction.",
    strong: "Refunds produce linked credit-note evidence with retained VAT, transaction, and customer document history.",
  },
];

const faq = [
  {
    q: "Can WooCommerce send invoice payment links by default?",
    a: "WooCommerce can support payment links through gateways, manual orders, or customer payment pages, but a complete invoice workflow still needs VAT fields, document labels, final invoice timing, reminder history, credit notes, and accountant export evidence.",
  },
  {
    q: "Should a payment link email include a final VAT invoice?",
    a: "Not always. Many B2B stores should send a proforma or payment request before payment, then issue the final VAT invoice after payment. The exact rule depends on the store's tax/accounting policy, so the plugin should support clear document states.",
  },
  {
    q: "What fields matter most for pay-by-link B2B invoices?",
    a: "At minimum: buyer legal name, VAT ID, PO/reference, billing country, payment terms, payment-link reference, invoice or proforma number, due date, transaction status, PDF document URL, and refund/credit-note relationship.",
  },
  {
    q: "Where does Lattice Invoices fit?",
    a: "Lattice Invoices early access is positioned for WooCommerce stores that need EU VAT/BTW invoice workflows around payment links, BACS/manual invoice payment, PDF delivery, credit notes, reminders, customer downloads, and accountant exports.",
  },
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "WooCommerce invoice payment link workflow for EU VAT stores",
  description:
    "A buyer-intent guide for WooCommerce stores adding invoice payment links while preserving VAT invoice evidence, reminders, credit notes, and accountant exports.",
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
  "mailto:support@latticeplugins.com?subject=WooCommerce%20invoice%20payment%20link%20workflow%20review&body=Hi%20Lattice%2C%0A%0AI%20want%20a%20WooCommerce%20invoice%20payment%20link%20workflow%20review.%0A%0AStore%20URL%3A%20%0ACountry%3A%20%0APayment%20gateway%3A%20%0AB2B%20or%20B2C%3A%20%0ACurrent%20invoice%20plugin%3A%20%0AVAT%20ID%2FPO%20field%20needs%3A%20%0AReminder%20workflow%3A%20%0ARefund%2Fcredit-note%20workflow%3A%20";

export default function WooCommerceInvoicePaymentLinkPage() {
  return (
    <main className="min-h-screen bg-slate-50">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <section className="bg-gradient-to-br from-slate-950 via-indigo-950 to-blue-900 text-white">
        <div className="max-w-5xl mx-auto px-6 py-16 lg:py-20">
          <p className="uppercase tracking-[0.3em] text-sm text-blue-200 mb-4">WooCommerce invoice payment links</p>
          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
            Send WooCommerce invoice payment links without losing the VAT audit trail.
          </h1>
          <p className="text-xl text-blue-50 leading-relaxed max-w-3xl mb-8">
            Payment links are convenient, but EU stores still need invoice timing, VAT/BTW evidence, payment references, reminders, credit notes, customer PDFs, and accountant exports to line up after the customer pays.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href={mailto} className="bg-green-400 text-slate-950 px-8 py-4 rounded-xl font-semibold hover:bg-green-300 transition shadow-lg text-center">
              Request €49 payment-link review
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
              <h2 className="text-3xl font-bold mb-4">Why payment links create invoice workflow risk</h2>
              <p className="text-slate-700 leading-relaxed mb-4">
                A payment link looks simple: create an order, send a link, wait for payment. The invoice risk appears when finance asks which document was sent before payment, when the final invoice number was issued, what VAT evidence was captured, and how refunds or reminders were documented.
              </p>
              <p className="text-slate-700 leading-relaxed">
                Lattice Invoices is being shaped around this problem: keeping payment requests, final invoice PDFs, credit notes, resend history, customer downloads, and accountant exports connected to the WooCommerce order instead of scattered across notes and gateway dashboards.
              </p>
            </div>

            <div className="bg-blue-50 border border-blue-100 rounded-2xl p-8">
              <h2 className="text-3xl font-bold mb-5">Payment-link invoice readiness checklist</h2>
              <div className="space-y-4">
                {readinessChecks.map((item) => (
                  <div key={item.title} className="bg-white rounded-xl border border-blue-100 p-5">
                    <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                    <p className="text-slate-700 leading-relaxed mb-2">{item.detail}</p>
                    <p className="text-slate-600 leading-relaxed"><strong>Buyer question:</strong> {item.buyerQuestion}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-2xl border shadow-sm p-8">
              <h2 className="text-3xl font-bold mb-5">Three payment-link scenarios to test before buying</h2>
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
              <h2 className="text-3xl font-bold mb-5">Weak pay-by-link admin vs invoice-ready workflow</h2>
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
                      <tr key={row.weak} className="border-b last:border-b-0 align-top">
                        <td className="py-4 pr-4 text-slate-700">{row.weak}</td>
                        <td className="py-4 pr-4 text-slate-700">{row.strong}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div className="bg-indigo-50 border border-indigo-100 rounded-2xl p-8">
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
              <p className="text-sm uppercase tracking-widest text-blue-700 font-semibold mb-2">Early-access qualifier</p>
              <h2 className="text-2xl font-bold mb-3">Need payment-link invoices?</h2>
              <p className="text-slate-700 leading-relaxed mb-5">
                Send the store URL, gateway, B2B/B2C mix, and current invoice plugin. The offer is a €49 early-access review for stores that need the Lattice Invoices workflow.
              </p>
              <a href={mailto} className="block text-center bg-blue-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-blue-700 transition mb-3">
                Request payment-link review
              </a>
              <Link href="/woocommerce-eu-vat-invoices" className="block text-center border border-slate-200 px-6 py-3 rounded-xl font-semibold hover:border-blue-400 transition mb-3">
                View Lattice Invoices landing page
              </Link>
              <Link href="/blog/woocommerce-invoice-after-payment" className="block text-center border border-slate-200 px-6 py-3 rounded-xl font-semibold hover:border-blue-400 transition mb-3">
                Invoice-after-payment guide
              </Link>
              <Link href="/blog/woocommerce-invoice-reminder-email-template" className="block text-center border border-slate-200 px-6 py-3 rounded-xl font-semibold hover:border-blue-400 transition mb-3">
                Reminder email template guide
              </Link>
              <Link href="/blog/woocommerce-qr-code-invoice-payment" className="block text-center border border-slate-200 px-6 py-3 rounded-xl font-semibold hover:border-blue-400 transition">
                QR invoice payment workflow
              </Link>
              <div className="border-t mt-6 pt-6 space-y-3 text-sm text-slate-600">
                <div>✓ Payment-link reference trail</div>
                <div>✓ Proforma to final invoice timing</div>
                <div>✓ Credit notes and accountant exports</div>
              </div>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}
