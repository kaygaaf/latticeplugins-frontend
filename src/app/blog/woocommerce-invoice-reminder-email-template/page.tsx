import type { Metadata } from "next";
import Link from "next/link";

const SITE_URL = "https://latticeplugins.com";
const SLUG = "/blog/woocommerce-invoice-reminder-email-template";

export const metadata: Metadata = {
  title: "WooCommerce Invoice Reminder Email Template for B2B Stores",
  description:
    "Copy-ready WooCommerce invoice reminder email templates for B2B stores using bank transfer, proforma invoices, VAT/BTW fields, due dates, and PDF invoice links.",
  alternates: {
    canonical: `${SITE_URL}${SLUG}`,
  },
  openGraph: {
    title: "WooCommerce invoice reminder email template",
    description:
      "Use these reminder email templates to follow up unpaid WooCommerce B2B invoices without breaking VAT invoice timing, PDF delivery, or accountant handoff.",
    url: `${SITE_URL}${SLUG}`,
    siteName: "Lattice Plugins",
    type: "article",
  },
};

const mailto =
  "mailto:support@latticeplugins.com?subject=WooCommerce%20invoice%20reminder%20email%20template%20workflow%20review&body=Hi%20Lattice%2C%0A%0AI%20need%20a%20WooCommerce%20invoice%20reminder%20email%20workflow%20for%20Lattice%20Invoices%20early%20access.%0A%0AStore%20URL%3A%20%0ACountry%3A%20%0APayment%20method%20%28BACS%2Fbank%20transfer%2Fmanual%20invoice%29%3A%20%0AB2B%20invoice%20fields%20needed%3A%20%0ADue-date%20rules%3A%20%0AReminder%20schedule%3A%20%0APDF%20invoice%20or%20proforma%20before%20payment%3A%20%0ACredit-note%2Fwrite-off%20requirements%3A%20";

const templateStages = [
  {
    title: "First unpaid invoice reminder",
    timing: "2–3 days after a pending BACS or manual invoice order",
    subject: "Reminder: payment needed for WooCommerce order #{order_number}",
    body:
      "Hi {billing_first_name}, this is a friendly reminder that order #{order_number} for {order_total} is still waiting for payment. Please use the payment details below and include reference {order_number}. If your finance team needs a proforma, VAT number, PO reference, or invoice email updated before payment, reply to this message.",
  },
  {
    title: "Final pre-cancellation reminder",
    timing: "6–7 days after the order, before stock/license/service access is released",
    subject: "Final reminder before order #{order_number} is cancelled",
    body:
      "Hi {billing_first_name}, order #{order_number} is still unpaid. We will cancel the order on {due_date} unless payment arrives or your team confirms that finance approval is in progress. The final VAT invoice PDF will be issued after payment so the invoice number, VAT totals, and customer download remain correct.",
  },
  {
    title: "Paid invoice delivery note",
    timing: "Immediately after the bank transfer is matched and the order becomes processing/completed",
    subject: "Paid invoice for WooCommerce order #{order_number}",
    body:
      "Hi {billing_first_name}, thank you — payment for order #{order_number} has been received. The final invoice PDF is attached and also available from My Account. If you need a credit note later for a refund, please reference invoice {invoice_number}.",
  },
];

const fields = [
  "Order number and payment reference",
  "Company name, VAT/BTW number, and billing country",
  "PO/reference field and invoice email address",
  "Due date and reminder stage",
  "Payment instructions or proforma PDF link",
  "Final invoice timing: only after payment, unless accountant rules require otherwise",
];

const workflowRules = [
  {
    title: "Do not call every reminder a final invoice",
    text: "For many EU B2B stores the safer pattern is payment request or proforma before payment, then final VAT invoice once the order is paid. That avoids gaps in invoice numbering and confused customers.",
  },
  {
    title: "Keep the reminder tied to WooCommerce order status",
    text: "The template should know whether the order is pending, on-hold, processing, completed, refunded, or cancelled. Generic marketing emails create support work because they cannot explain invoice state.",
  },
  {
    title: "Collect finance-team fields before the reminder fires",
    text: "If the checkout does not capture VAT/BTW number, company name, invoice email, and PO reference, every reminder becomes a request for corrected paperwork.",
  },
  {
    title: "Log what was sent for accountant handoff",
    text: "A B2B store should be able to prove when reminders were sent, which PDF/proforma was linked, and when the paid final invoice was issued.",
  },
];

const faq = [
  {
    q: "Can I copy these WooCommerce invoice reminder email templates?",
    a: "Yes. Treat them as starting copy for BACS, bank-transfer, or manual invoice payment workflows. Replace placeholders like order number, due date, amount, invoice number, and payment reference with live WooCommerce data.",
  },
  {
    q: "Should the reminder attach a PDF invoice before payment?",
    a: "Only if the store intentionally uses proforma/payment-request PDFs before payment. The final VAT invoice is often cleaner after payment, because invoice numbering, paid date, VAT evidence, and customer downloads stay aligned.",
  },
  {
    q: "What does this have to do with Lattice Invoices?",
    a: "This is a buyer-intent workflow Lattice Invoices can own: invoice-ready checkout fields, proforma/payment reminders, final paid invoice PDFs, customer downloads, and refund credit-note links.",
  },
  {
    q: "How do I request early access for this reminder workflow?",
    a: "Send store URL, country, payment method, required VAT fields, due-date rules, reminder schedule, and whether you need proforma PDFs before payment. The CTA on this page pre-fills that request.",
  },
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "WooCommerce invoice reminder email template for B2B stores",
  description:
    "Copy-ready reminder email templates and workflow rules for WooCommerce B2B invoice, bank-transfer, proforma, and VAT PDF workflows.",
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

export default function WooCommerceInvoiceReminderEmailTemplatePage() {
  return (
    <main className="min-h-screen bg-slate-50">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <section className="bg-gradient-to-br from-slate-950 via-cyan-950 to-blue-900 text-white">
        <div className="max-w-5xl mx-auto px-6 py-16 lg:py-20">
          <p className="uppercase tracking-[0.3em] text-sm text-cyan-200 mb-4">WooCommerce invoice reminder email template</p>
          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
            Copy-ready invoice reminder emails for unpaid WooCommerce B2B orders.
          </h1>
          <p className="text-xl text-cyan-50 leading-relaxed max-w-3xl mb-8">
            A reminder email should help finance pay faster, not create corrected VAT invoices later. Use these templates
            for BACS, bank transfer, proforma, and manual invoice workflows — then qualify the store for the €49 Lattice
            Invoices early-access path.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href={mailto} className="bg-cyan-500 text-white px-8 py-4 rounded-xl font-semibold hover:bg-cyan-400 transition shadow-lg text-center">
              Request €49 reminder workflow review
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
              <h2 className="text-3xl font-bold mb-4">Why invoice reminder copy is a purchase-intent problem</h2>
              <p className="text-slate-700 leading-relaxed mb-4">
                Stores searching for a WooCommerce invoice reminder email template usually have an active B2B cash-flow
                problem: unpaid bank-transfer orders, finance teams asking for VAT details, or customers that need a
                proforma before payment. That makes this a strong wedge for Lattice Invoices.
              </p>
              <p className="text-slate-700 leading-relaxed">
                The template is only half the solution. The workflow also needs invoice-ready checkout fields, clean order
                status rules, PDF/proforma links, reminder logging, final invoice delivery, and credit-note handling after refunds.
              </p>
            </div>

            <div className="space-y-5">
              {templateStages.map((stage) => (
                <div key={stage.title} className="bg-white rounded-2xl border shadow-sm p-8">
                  <p className="text-sm uppercase tracking-[0.25em] text-cyan-700 font-semibold mb-2">{stage.timing}</p>
                  <h2 className="text-2xl font-bold mb-3">{stage.title}</h2>
                  <div className="rounded-xl bg-slate-50 border border-slate-200 p-5 mb-4">
                    <p className="text-sm text-slate-500 mb-1">Subject</p>
                    <p className="font-semibold text-slate-900">{stage.subject}</p>
                  </div>
                  <div className="rounded-xl bg-cyan-50 border border-cyan-100 p-5">
                    <p className="text-sm text-cyan-700 font-semibold mb-2">Template copy</p>
                    <p className="text-slate-800 leading-relaxed">{stage.body}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-white rounded-2xl border shadow-sm p-8">
              <h2 className="text-3xl font-bold mb-5">Fields the email must pull from WooCommerce</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {fields.map((field) => (
                  <div key={field} className="flex gap-3 rounded-xl bg-slate-50 border border-slate-100 p-4">
                    <span className="text-cyan-700 font-bold">✓</span>
                    <span className="text-slate-800">{field}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-2xl border shadow-sm p-8">
              <h2 className="text-3xl font-bold mb-6">Workflow rules before using the template</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {workflowRules.map((rule) => (
                  <div key={rule.title} className="rounded-xl border border-slate-200 bg-slate-50 p-5">
                    <h3 className="text-xl font-bold mb-3">{rule.title}</h3>
                    <p className="text-slate-700 leading-relaxed">{rule.text}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-cyan-50 border border-cyan-100 rounded-2xl p-8">
              <h2 className="text-3xl font-bold mb-4">Turn reminder copy into a €49 early-access request</h2>
              <p className="text-slate-700 leading-relaxed mb-5">
                If the store already sends invoice reminders manually, the next paid step is not another generic email plugin.
                It is a WooCommerce invoice workflow that knows when to send proforma requests, when to issue final VAT PDFs,
                and how to keep reminder history useful for bookkeeping.
              </p>
              <a href={mailto} className="inline-flex bg-cyan-600 text-white px-7 py-3 rounded-xl font-semibold hover:bg-cyan-700 transition">
                Send reminder workflow for review
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
              <p className="text-sm uppercase tracking-[0.2em] text-cyan-700 font-semibold mb-2">Template + workflow</p>
              <h2 className="text-2xl font-bold mb-3">Need invoice reminder emails that match VAT invoice timing?</h2>
              <p className="text-slate-700 mb-5">
                Send the store URL, country, payment method, due-date rules, reminder schedule, and whether the store sends
                proforma PDFs before payment. This qualifies the Lattice Invoices early-access workflow.
              </p>
              <a href={mailto} className="block text-center bg-cyan-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-cyan-700 transition mb-3">
                Request reminder template review
              </a>
              <Link href="/blog/woocommerce-invoice-payment-reminders" className="block text-center border border-slate-200 px-6 py-3 rounded-xl font-semibold hover:border-cyan-400 transition mb-3">
                Payment reminder workflow guide
              </Link>
              <Link href="/blog/woocommerce-bank-transfer-invoice" className="block text-center border border-slate-200 px-6 py-3 rounded-xl font-semibold hover:border-cyan-400 transition mb-3">
                Bank transfer invoice guide
              </Link>
              <Link href="/blog/woocommerce-proforma-invoice" className="block text-center border border-slate-200 px-6 py-3 rounded-xl font-semibold hover:border-cyan-400 transition mb-3">
                Proforma invoice workflow
              </Link>
              <Link href="/tools/woocommerce-invoice-setup-brief" className="block text-center border border-slate-200 px-6 py-3 rounded-xl font-semibold hover:border-cyan-400 transition mb-3">
                Generate setup brief
              </Link>
              <Link href="/woocommerce-eu-vat-invoices" className="block text-center border border-slate-200 px-6 py-3 rounded-xl font-semibold hover:border-cyan-400 transition">
                View Lattice Invoices offer
              </Link>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}
