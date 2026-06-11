import type { Metadata } from "next";
import Link from "next/link";

const SITE_URL = "https://latticeplugins.com";

export const metadata: Metadata = {
  title: "WooCommerce Invoice Reminder Email Template for B2B Stores",
  description:
    "A buyer-intent guide for WooCommerce stores that need invoice reminder email templates, BACS payment follow-ups, due-date evidence, customer download links, and EU VAT invoice audit trails.",
  alternates: {
    canonical: `${SITE_URL}/blog/woocommerce-invoice-reminder-email-template`,
  },
  openGraph: {
    title: "WooCommerce invoice reminder email template for B2B stores",
    description:
      "Plan BACS/proforma invoice reminders with clear payment terms, PDF links, VAT invoice references, resend logs, and accountant-ready evidence.",
    url: `${SITE_URL}/blog/woocommerce-invoice-reminder-email-template`,
    siteName: "Lattice Plugins",
    type: "article",
  },
};

const checklist = [
  {
    title: "1. Include the invoice number and retained PDF link",
    detail:
      "The reminder should point to the issued invoice number and a stable customer-download URL. Do not rely on a generic order link when the finance team needs the actual VAT invoice PDF.",
    buyerQuestion: "Can every reminder include the correct invoice PDF link and show that the PDF was already issued?",
  },
  {
    title: "2. Make payment terms visible before the overdue notice",
    detail:
      "For BACS, proforma, Net 14, and Net 30 flows, the first reminder should show payment terms and due date. Later reminders should clearly say why the invoice is overdue.",
    buyerQuestion: "Does the plugin store due date and payment terms per invoice so email text is not guessed from the order date?",
  },
  {
    title: "3. Keep a send, fail, and resend log",
    detail:
      "A reminder template only helps if support can see whether it was sent, bounced, manually resent, or followed by a customer download. Log each event on the invoice workflow timeline.",
    buyerQuestion: "Can support prove that a reminder was sent and resend it without changing the issued invoice?",
  },
  {
    title: "4. Separate proforma requests from final invoice reminders",
    detail:
      "A proforma payment request before payment is not the same as a reminder for an already issued final VAT invoice. The template wording and PDF links should reflect that distinction.",
    buyerQuestion: "Can the workflow choose different templates for proforma, final invoice, overdue invoice, and credit-note follow-up?",
  },
  {
    title: "5. Give accounting a clean handoff",
    detail:
      "Exported reminder evidence should include invoice number, customer, due date, payment method, send timestamps, resend notes, payment date, and any credit-note or correction link.",
    buyerQuestion: "Will the accountant receive reminder history alongside invoice PDFs and payment reconciliation data?",
  },
];

const templates = [
  {
    title: "Friendly pre-due reminder",
    when: "3–5 days before a Net 14/30 due date or after a proforma has been accepted.",
    include: "Invoice number, PDF download link, due date, bank details, VAT number reference, and support contact.",
  },
  {
    title: "First overdue reminder",
    when: "1–3 days after the due date when the invoice is unpaid and no failed-send issue is known.",
    include: "Original invoice link, due date, outstanding amount, payment method, and a clear but neutral overdue line.",
  },
  {
    title: "Finance handoff / final notice",
    when: "After internal review, not automatically for every store. Especially useful for B2B accounts-payable workflows.",
    include: "Reminder history, payment terms, invoice PDF, purchase order reference, customer download evidence, and next action.",
  },
];

const faq = [
  {
    q: "Can WooCommerce send automatic invoice reminder emails?",
    a: "WooCommerce can send order emails, but invoice reminder workflows usually need extra due-date metadata, PDF invoice links, BACS payment details, failed-send logs, customer download fallbacks, and accounting evidence.",
  },
  {
    q: "What should a WooCommerce invoice reminder email template include?",
    a: "Include invoice number, retained PDF download link, due date, payment terms, outstanding amount, bank details or payment link, customer VAT/reference details, support contact, and a short explanation of why the message was sent.",
  },
  {
    q: "Should reminder emails change the issued VAT invoice?",
    a: "No. The reminder should reference the retained invoice and payment timeline. If a fee, correction, or credit note is needed later, create explicit follow-up evidence instead of modifying the original PDF silently.",
  },
  {
    q: "Where does Lattice Invoices fit?",
    a: "Lattice Invoices is the early-access WooCommerce EU invoicing path for stores that need invoice PDFs, BACS/proforma workflows, due dates, reminders, resend logs, customer downloads, credit notes, corrections, and accountant-ready exports.",
  },
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "WooCommerce invoice reminder email template for B2B stores",
  description:
    "A practical guide to WooCommerce invoice reminder email templates, BACS payment follow-ups, due dates, retained invoice PDFs, customer download links, and EU VAT invoice audit evidence.",
  mainEntityOfPage: `${SITE_URL}/blog/woocommerce-invoice-reminder-email-template`,
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
  "mailto:support@latticeplugins.com?subject=WooCommerce%20invoice%20reminder%20email%20template%20review&body=Hi%20Lattice%2C%0A%0AI%20want%20a%20WooCommerce%20invoice%20reminder%20email%20workflow%20review.%0A%0AStore%20URL%3A%20%0ACountry%3A%20%0ACurrent%20invoice%20plugin%3A%20%0APayment%20methods%20(BACS%2FStripe%2FPayPal)%3A%20%0APayment%20terms%20(Net%207%2F14%2F30)%3A%20%0AReminder%20templates%20used%20today%3A%20%0APDF%20download%20needs%3A%20%0AAccounting%20handoff%20needs%3A%20";

export default function WooCommerceInvoiceReminderEmailTemplatePage() {
  return (
    <main className="min-h-screen bg-slate-50">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <section className="bg-gradient-to-br from-slate-950 via-blue-950 to-cyan-900 text-white">
        <div className="max-w-5xl mx-auto px-6 py-16 lg:py-20">
          <p className="uppercase tracking-[0.3em] text-sm text-cyan-200 mb-4">WooCommerce invoice reminder template</p>
          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
            Send invoice reminders without losing VAT PDF, BACS, or audit-trail evidence.
          </h1>
          <p className="text-xl text-cyan-50 leading-relaxed max-w-3xl mb-8">
            A useful reminder email is more than “please pay”. EU B2B stores need invoice numbers, retained PDF links, due dates, payment terms, resend logs, customer-download fallback, and accountant-ready proof.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href={mailto} className="bg-cyan-400 text-slate-950 px-8 py-4 rounded-xl font-semibold hover:bg-cyan-300 transition shadow-lg text-center">
              Request €49 reminder-template review
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
              <h2 className="text-3xl font-bold mb-4">Why invoice reminders fail in WooCommerce</h2>
              <p className="text-slate-700 leading-relaxed mb-4">
                Many stores send a normal order email and call it an invoice reminder. That breaks down when the customer asks for the original PDF, the accountant asks for payment terms, or support needs proof that a resend happened.
              </p>
              <p className="text-slate-700 leading-relaxed">
                Use this guide when evaluating a WooCommerce invoice plugin, replacing a PDF invoice tool, or preparing BACS/proforma reminder workflows for EU VAT customers.
              </p>
            </div>

            <div className="bg-cyan-50 border border-cyan-100 rounded-2xl p-8">
              <h2 className="text-3xl font-bold mb-5">Reminder-template readiness checklist</h2>
              <div className="space-y-4">
                {checklist.map((item) => (
                  <div key={item.title} className="bg-white rounded-xl border border-cyan-100 p-5">
                    <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                    <p className="text-slate-700 leading-relaxed mb-2">{item.detail}</p>
                    <p className="text-slate-600 leading-relaxed"><strong>Buyer question:</strong> {item.buyerQuestion}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-2xl border shadow-sm p-8">
              <h2 className="text-3xl font-bold mb-5">Three reminder templates to map before buying</h2>
              <div className="grid gap-4">
                {templates.map((item) => (
                  <div key={item.title} className="border rounded-xl p-5">
                    <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                    <p className="text-slate-700 leading-relaxed mb-2"><strong>When to send:</strong> {item.when}</p>
                    <p className="text-slate-700 leading-relaxed"><strong>Must include:</strong> {item.include}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-blue-50 border border-blue-100 rounded-2xl p-8">
              <h2 className="text-3xl font-bold mb-4">Early-access offer: €49 reminder-template workflow review</h2>
              <p className="text-slate-700 leading-relaxed mb-5">
                Send your current reminder emails, payment terms, invoice plugin, BACS/proforma setup, and customer-download requirements. Lattice will map the missing invoice evidence before you automate reminders on live orders.
              </p>
              <a href={mailto} className="inline-flex bg-blue-600 text-white px-7 py-3 rounded-xl font-semibold hover:bg-blue-700 transition">
                Send my reminder workflow
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
              <h2 className="text-2xl font-bold mb-3">Need invoice reminders that finance can trust?</h2>
              <p className="text-slate-600 mb-5">
                Get a focused review for reminder templates, PDF links, BACS payment terms, resend logs, customer downloads, credit notes, and accountant exports.
              </p>
              <a href={mailto} className="block text-center bg-slate-950 text-white px-5 py-3 rounded-xl font-semibold hover:bg-slate-800 transition mb-3">
                Request reminder review
              </a>
              <Link href="/docs/woocommerce-eu-vat-invoice-setup" className="block text-center border border-slate-200 px-5 py-3 rounded-xl font-semibold hover:bg-slate-50 transition">
                Read setup guide
              </Link>
            </div>

            <div className="bg-white rounded-2xl border shadow-sm p-6">
              <h3 className="font-bold text-lg mb-3">Related invoice guides</h3>
              <ul className="space-y-3 text-sm text-slate-700">
                <li><Link href="/blog/woocommerce-invoice-payment-reminders" className="text-blue-700 hover:underline">Invoice payment reminders</Link></li>
                <li><Link href="/blog/woocommerce-invoice-email-deliverability" className="text-blue-700 hover:underline">Invoice email deliverability</Link></li>
                <li><Link href="/blog/woocommerce-bank-transfer-invoice" className="text-blue-700 hover:underline">Bank transfer invoices</Link></li>
                <li><Link href="/blog/woocommerce-invoice-due-dates" className="text-blue-700 hover:underline">Invoice due dates</Link></li>
                <li><Link href="/blog/woocommerce-customer-invoice-downloads" className="text-blue-700 hover:underline">Customer invoice downloads</Link></li>
                <li><Link href="/blog/woocommerce-invoice-audit-trail" className="text-blue-700 hover:underline">Invoice audit trail</Link></li>
              </ul>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}
