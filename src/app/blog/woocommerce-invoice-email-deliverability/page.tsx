import type { Metadata } from "next";
import Link from "next/link";

const SITE_URL = "https://latticeplugins.com";

export const metadata: Metadata = {
  title: "WooCommerce Invoice Email Deliverability Checklist for EU VAT Stores",
  description:
    "A buyer-intent WooCommerce invoice email deliverability checklist for EU VAT stores that need reliable PDF delivery, BACS invoice workflows, customer downloads, audit trail, and accounting evidence.",
  alternates: {
    canonical: `${SITE_URL}/blog/woocommerce-invoice-email-deliverability`,
  },
  openGraph: {
    title: "WooCommerce invoice email deliverability checklist for EU VAT stores",
    description:
      "Make invoice emails audit-safe: PDF attachments, BACS/proforma timing, retry paths, customer downloads, SPF/DKIM evidence, and accountant-ready delivery logs.",
    url: `${SITE_URL}/blog/woocommerce-invoice-email-deliverability`,
    siteName: "Lattice Plugins",
    type: "article",
  },
};

const deliveryChecks = [
  {
    title: "1. Confirm when the invoice should be sent",
    detail:
      "Map each trigger: new BACS order, processing order, completed order, refunded order, credit note, corrected invoice, proforma, and manual resend. A plugin that sends PDFs at the wrong status creates duplicate invoices or missing legal documents.",
    buyerQuestion: "Can the invoice plugin configure delivery timing per order status and payment method?",
  },
  {
    title: "2. Attach the right PDF to the right email",
    detail:
      "Separate proforma invoices, final VAT invoices, credit notes, corrected invoices, and payment reminders. The email should never attach an outdated PDF after a refund, VAT-number correction, or customer address change.",
    buyerQuestion: "Does the plugin choose the correct PDF type automatically instead of attaching the latest generated file blindly?",
  },
  {
    title: "3. Keep a delivery audit trail",
    detail:
      "Store sent timestamp, recipient, template, invoice number, PDF version, resend attempts, and failure state. Support needs this when a B2B customer says the invoice was never received.",
    buyerQuestion: "Can support prove which invoice PDF was sent and resend the same document without regenerating it?",
  },
  {
    title: "4. Add a customer download fallback",
    detail:
      "Email can fail because of spam filters, bad addresses, or corporate mail gateways. My Account invoice downloads reduce support tickets and give finance teams a stable fallback link.",
    buyerQuestion: "If the email bounces, can the customer still download the correct invoice PDF from their account?",
  },
  {
    title: "5. Check mail infrastructure separately from invoice logic",
    detail:
      "SPF, DKIM, DMARC, transactional email providers, and WooCommerce email templates affect deliverability. The invoice plugin should expose missing-send evidence, not hide mail failures as a generic WooCommerce problem.",
    buyerQuestion: "Can the invoice workflow distinguish document-generation success from email-delivery failure?",
  },
];

const scenarios = [
  {
    title: "BACS / bank transfer invoice not received",
    risk: "The customer cannot pay because the proforma or payment request never reached the finance inbox.",
    fix: "Use status-based email triggers, manual resend, and My Account downloads so support can recover the payment without creating a second invoice.",
  },
  {
    title: "Credit note email missing after a refund",
    risk: "The order is refunded in WooCommerce, but the accountant has no credit-note PDF or customer-delivery evidence.",
    fix: "Treat refunds as credit-note delivery events with their own document number, attachment, and sent log.",
  },
  {
    title: "Corrected invoice sent with the wrong attachment",
    risk: "A VAT-number or address correction generates a new PDF, but the customer receives an old attachment or two conflicting invoices.",
    fix: "Link corrected documents to the original invoice and record exactly which PDF was emailed after the correction.",
  },
];

const faq = [
  {
    q: "Why are WooCommerce invoice emails not reaching customers?",
    a: "The cause may be mail infrastructure, WooCommerce email settings, order-status triggers, attachment rules, spam filtering, or invoice-plugin logic. EU VAT stores should debug generation, attachment selection, delivery logs, and customer download fallback separately.",
  },
  {
    q: "Should invoice plugins log every sent invoice email?",
    a: "For B2B and EU VAT workflows, yes. A useful log should show recipient, timestamp, invoice number, PDF version, email template, resend attempts, and failure state so support and accounting can prove what happened.",
  },
  {
    q: "Is My Account download enough if invoice email fails?",
    a: "It is a strong fallback, but it should not replace reliable email delivery. The safest workflow combines attachment delivery, resend controls, retained PDFs, and customer downloads for the same legal document.",
  },
  {
    q: "Where does Lattice Invoices fit?",
    a: "Lattice Invoices is the early-access WooCommerce EU invoicing path for stores that need practical invoice delivery workflows: correct PDF attachments, BACS/proforma timing, credit notes, corrected invoices, customer downloads, audit trail, and accountant exports.",
  },
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "WooCommerce invoice email deliverability checklist for EU VAT stores",
  description:
    "A practical invoice email deliverability checklist for WooCommerce stores that need reliable PDF attachment delivery, BACS invoice workflows, customer download fallback, and audit evidence.",
  mainEntityOfPage: `${SITE_URL}/blog/woocommerce-invoice-email-deliverability`,
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
  "mailto:support@latticeplugins.com?subject=WooCommerce%20invoice%20email%20delivery%20review&body=Hi%20Lattice%2C%0A%0AI%20want%20a%20WooCommerce%20invoice%20email%20delivery%20review.%0A%0AStore%20URL%3A%20%0ACountry%3A%20%0ACurrent%20invoice%20plugin%3A%20%0APayment%20methods%20(BACS%2FStripe%2FPayPal)%3A%20%0AInvoice%20email%20problem%20(missing%2Fwrong%20attachment%2Fspam%2Fresend)%3A%20%0ACustomer%20download%20workflow%3A%20%0ATransactional%20email%20provider%3A%20";

export default function WooCommerceInvoiceEmailDeliverabilityPage() {
  return (
    <main className="min-h-screen bg-slate-50">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <section className="bg-gradient-to-br from-slate-950 via-indigo-950 to-cyan-900 text-white">
        <div className="max-w-5xl mx-auto px-6 py-16 lg:py-20">
          <p className="uppercase tracking-[0.3em] text-sm text-cyan-200 mb-4">WooCommerce invoice email delivery</p>
          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
            Fix WooCommerce invoice emails before missing PDFs turn into B2B payment delays.
          </h1>
          <p className="text-xl text-cyan-50 leading-relaxed max-w-3xl mb-8">
            Invoice email problems are rarely just “SMTP”. EU VAT stores need correct PDF attachments, status-based sending, retained document evidence, customer downloads, resend controls, and accounting-friendly delivery logs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href={mailto} className="bg-cyan-500 text-slate-950 px-8 py-4 rounded-xl font-semibold hover:bg-cyan-300 transition shadow-lg text-center">
              Request €49 invoice delivery review
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
              <h2 className="text-3xl font-bold mb-4">Why invoice email delivery is a purchase-risk test</h2>
              <p className="text-slate-700 leading-relaxed mb-4">
                A PDF invoice plugin can generate beautiful documents and still fail the business workflow if customers do not receive the right attachment at the right time. BACS orders, proformas, refunds, credit notes, corrected invoices, and payment reminders all need different delivery rules.
              </p>
              <p className="text-slate-700 leading-relaxed">
                Use this checklist before buying, migrating, or replacing a WooCommerce invoice plugin. It separates mail-server health from invoice workflow logic so finance, support, and accounting know exactly where the gap is.
              </p>
            </div>

            <div className="bg-cyan-50 border border-cyan-100 rounded-2xl p-8">
              <h2 className="text-3xl font-bold mb-5">Invoice email deliverability checklist</h2>
              <div className="space-y-4">
                {deliveryChecks.map((item) => (
                  <div key={item.title} className="bg-white rounded-xl border border-cyan-100 p-5">
                    <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                    <p className="text-slate-700 leading-relaxed mb-2">{item.detail}</p>
                    <p className="text-slate-600 leading-relaxed"><strong>Buyer question:</strong> {item.buyerQuestion}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-2xl border shadow-sm p-8">
              <h2 className="text-3xl font-bold mb-5">Delivery scenarios to test before buying</h2>
              <div className="grid gap-4">
                {scenarios.map((item) => (
                  <div key={item.title} className="border rounded-xl p-5">
                    <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                    <p className="text-slate-700 leading-relaxed mb-2"><strong>Risk:</strong> {item.risk}</p>
                    <p className="text-slate-700 leading-relaxed"><strong>Fix path:</strong> {item.fix}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-emerald-50 border border-emerald-100 rounded-2xl p-8">
              <h2 className="text-3xl font-bold mb-4">Early-access offer: €49 invoice delivery review</h2>
              <p className="text-slate-700 leading-relaxed mb-5">
                Send your current invoice plugin, payment methods, missing-email examples, attachment rules, customer-download setup, and transactional email provider. Lattice will map the delivery workflow gaps that can block a reliable EU VAT invoice setup.
              </p>
              <a href={mailto} className="inline-flex bg-emerald-600 text-white px-7 py-3 rounded-xl font-semibold hover:bg-emerald-700 transition">
                Send my invoice delivery details
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
              <h2 className="text-2xl font-bold mb-3">Do invoice emails create support tickets?</h2>
              <p className="text-slate-600 mb-5">
                Get a focused review for PDF attachment rules, BACS/proforma timing, failed delivery evidence, customer downloads, resend controls, credit notes, and corrected invoice emails.
              </p>
              <a href={mailto} className="block text-center bg-slate-950 text-white px-5 py-3 rounded-xl font-semibold hover:bg-slate-800 transition mb-3">
                Request delivery review
              </a>
              <Link href="/docs/woocommerce-eu-vat-invoice-setup" className="block text-center border border-slate-200 px-5 py-3 rounded-xl font-semibold hover:bg-slate-50 transition">
                Read setup guide
              </Link>
            </div>

            <div className="bg-blue-50 rounded-2xl border border-blue-100 p-6">
              <h3 className="text-xl font-bold mb-3">Related invoice guides</h3>
              <ul className="space-y-3 text-blue-900 font-medium">
                <li><Link href="/blog/woocommerce-pdf-invoice-email-attachments" className="hover:underline">PDF invoice email attachments</Link></li>
                <li><Link href="/blog/woocommerce-bank-transfer-invoice" className="hover:underline">Bank-transfer invoice workflow</Link></li>
                <li><Link href="/blog/woocommerce-customer-invoice-downloads" className="hover:underline">Customer invoice downloads</Link></li>
                <li><Link href="/blog/woocommerce-invoice-correction-workflow" className="hover:underline">Invoice correction workflow</Link></li>
                <li><Link href="/blog/woocommerce-invoice-audit-trail" className="hover:underline">Invoice audit trail</Link></li>
              </ul>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}
