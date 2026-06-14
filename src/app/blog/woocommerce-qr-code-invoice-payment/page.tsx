import type { Metadata } from "next";
import Link from "next/link";

const SITE_URL = "https://latticeplugins.com";

export const metadata: Metadata = {
  title: "WooCommerce QR Code Invoice Payment for EU VAT Stores",
  description:
    "A buyer-intent guide for WooCommerce stores that want EPC/SEPA-style QR payment codes on invoice PDFs, with IBAN details, payment references, VAT evidence, reminders, and accountant exports.",
  alternates: {
    canonical: `${SITE_URL}/blog/woocommerce-qr-code-invoice-payment`,
  },
  openGraph: {
    title: "WooCommerce QR code invoice payment workflow for EU stores",
    description:
      "Plan QR-code invoice payments for WooCommerce with bank details, structured payment references, VAT invoice PDFs, reminder evidence, credit notes, and accounting handoff.",
    url: `${SITE_URL}/blog/woocommerce-qr-code-invoice-payment`,
    siteName: "Lattice Plugins",
    type: "article",
  },
};

const readinessChecklist = [
  {
    title: "1. Put bank details and payment references in one source of truth",
    detail:
      "A QR payment code is only helpful when the invoice PDF, email, My Account download, reminder email, and export all use the same IBAN, beneficiary name, amount, currency, invoice number, and payment reference.",
    buyerQuestion: "Can the invoice plugin generate payment data from invoice metadata instead of manual text fields?",
  },
  {
    title: "2. Decide when the QR code appears",
    detail:
      "Unpaid BACS, proforma, Net terms, and pay-by-invoice orders usually need QR payment instructions. Paid card orders, refunded orders, zero-value orders, and fully credited invoices usually should not show a fresh payment prompt.",
    buyerQuestion: "Can QR codes be shown only for unpaid invoice states and hidden after payment or crediting?",
  },
  {
    title: "3. Keep VAT invoice numbering separate from payment convenience",
    detail:
      "QR payment codes should not force final invoice numbers too early. A B2B order may need a proforma or payment request first, then a final VAT invoice when the configured accounting trigger is reached.",
    buyerQuestion: "Can the workflow support proforma QR payment requests without breaking final invoice numbering?",
  },
  {
    title: "4. Handle partial payments, overpayments, and refunds",
    detail:
      "If a customer pays the wrong amount or only part of the amount, the invoice workflow still needs retained PDFs, payment evidence, correction notes, credit notes, reminder state, and exportable reconciliation rows.",
    buyerQuestion: "Can finance trace QR-code payments, partial payments, refunds, and credit notes from the order?",
  },
  {
    title: "5. Export QR-payment evidence for accounting",
    detail:
      "The accountant should receive the invoice number, order ID, due date, bank transfer reference, QR payment state, paid/unpaid amount, VAT totals, credit-note links, and retained PDF URL without rebuilding state from order notes.",
    buyerQuestion: "Does export include payment reference and invoice status, not only order totals?",
  },
];

const scenarios = [
  {
    title: "BACS order with an unpaid invoice PDF",
    trigger: "A customer selects bank transfer or pay-by-invoice at checkout.",
    workflow:
      "Generate a proforma or final invoice according to policy, add IBAN and structured payment reference, render a QR payment code on the PDF and email, and keep the invoice downloadable from My Account.",
  },
  {
    title: "Net 30 customer receives a reminder",
    trigger: "The due date passes and the order remains unpaid.",
    workflow:
      "Send a reminder email with the same invoice number, amount due, payment reference, QR payment link/code, and audit trail entry so finance can prove follow-up later.",
  },
  {
    title: "Customer pays partially or needs a credit note",
    trigger: "The bank payment does not match the invoice total, or a line item is disputed after payment.",
    workflow:
      "Retain the original invoice, log payment evidence, issue a linked credit note or correction document when value changes, and export the reconciled state for accounting.",
  },
];

const comparisonRows = [
  {
    weak: "QR code image is pasted into a PDF template and reused across invoices, with no invoice-specific amount or reference.",
    strong: "Payment QR data is generated per invoice from the invoice number, amount due, currency, bank details, customer, and payment reference.",
  },
  {
    weak: "Paid card orders and refunded orders still show bank-transfer QR payment instructions.",
    strong: "QR payment prompts appear only for unpaid/proforma/BACS/Net terms states and disappear or change after payment, refund, write-off, or credit note.",
  },
  {
    weak: "Payment references live in order notes, while the accountant export only contains WooCommerce order totals.",
    strong: "Invoice export includes invoice number, payment reference, paid/unpaid state, due date, VAT totals, credit notes, and PDF archive reference.",
  },
  {
    weak: "Support manually resends PDFs and asks customers to copy bank details from old emails.",
    strong: "Customer downloads, reminder emails, and resend controls expose the same current QR payment data and leave a traceable audit trail.",
  },
];

const faq = [
  {
    q: "What is a WooCommerce QR code invoice payment workflow?",
    a: "It is a bank-transfer invoice workflow where the invoice PDF and invoice emails include machine-readable payment details, often EPC/SEPA-style QR payment data, so the customer can pay the exact amount with the right reference.",
  },
  {
    q: "Does a QR code replace a WooCommerce payment gateway?",
    a: "No. A QR payment code is usually a convenience layer for bank transfer, proforma, Net terms, or pay-by-invoice orders. It still needs invoice state, payment matching, reminders, credit notes, and accounting export around it.",
  },
  {
    q: "Should QR codes appear on paid invoices?",
    a: "Usually not as a payment request. Paid invoices may retain payment evidence, but unpaid payment prompts should be conditional so customers do not pay twice after a card, PayPal, Mollie, or bank-transfer payment has cleared.",
  },
  {
    q: "Where does Lattice fit in QR-code invoice payments?",
    a: "Lattice Invoices early access is positioned around the complete WooCommerce invoice workflow: VAT/BTW fields, proformas, final invoice PDFs, due dates, payment references, reminders, credit notes, customer downloads, and accounting export readiness.",
  },
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "WooCommerce QR code invoice payment workflow for EU VAT stores",
  description:
    "A buyer guide for WooCommerce stores that want QR-code invoice payments with IBAN details, payment references, VAT invoice PDFs, reminders, credit notes, customer downloads, and accounting exports.",
  mainEntityOfPage: `${SITE_URL}/blog/woocommerce-qr-code-invoice-payment`,
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
  "mailto:support@latticeplugins.com?subject=WooCommerce%20QR%20code%20invoice%20payment%20workflow%20review&body=Hi%20Lattice%2C%0A%0AI%20want%20a%20WooCommerce%20QR-code%20invoice%20payment%20workflow%20review.%0A%0AStore%20URL%3A%20%0ACountry%3A%20%0APayment%20methods%20(BACS%2FNet%20terms%2FSEPA%2FMollie)%3A%20%0ACurrent%20invoice%20plugin%3A%20%0AIBAN%2Fbank%20details%20needed%3A%20%0AProforma%20vs%20final%20invoice%20timing%3A%20%0AReminder%2Freconciliation%20workflow%3A%20%0AAccounting%20export%20needs%3A%20";

export default function WooCommerceQrCodeInvoicePaymentPage() {
  return (
    <main className="min-h-screen bg-slate-50">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <section className="bg-gradient-to-br from-slate-950 via-blue-950 to-emerald-900 text-white">
        <div className="max-w-5xl mx-auto px-6 py-16 lg:py-20">
          <p className="uppercase tracking-[0.3em] text-sm text-emerald-200 mb-4">WooCommerce QR invoice payments</p>
          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
            WooCommerce QR-code invoice payments without bank-reference mistakes, duplicate payments, or messy VAT exports.
          </h1>
          <p className="text-xl text-emerald-50 leading-relaxed max-w-3xl mb-8">
            QR payment codes can make bank-transfer invoices easier to pay, but they also raise workflow questions: invoice state, IBAN details, payment references, proformas, due dates, reminders, partial payments, credit notes, and accountant export all need to stay aligned.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href={mailto} className="bg-green-400 text-slate-950 px-8 py-4 rounded-xl font-semibold hover:bg-green-300 transition shadow-lg text-center">
              Request €49 QR invoice workflow review
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
              <h2 className="text-3xl font-bold mb-4">Why QR invoice payments are an invoice-workflow problem</h2>
              <p className="text-slate-700 leading-relaxed mb-4">
                A static QR code in a PDF template is not enough. The QR payment data has to match the current invoice amount, payment reference, bank account, currency, due date, payment status, and customer-facing document. Otherwise QR codes create a faster way to make the wrong payment.
              </p>
              <p className="text-slate-700 leading-relaxed">
                A sales-ready WooCommerce invoice plugin should treat QR payments as part of the invoice record: generated when the invoice is unpaid, reused consistently in reminders, hidden or updated after payment, and exported with VAT/accounting evidence. That is the buying problem Lattice Invoices is being positioned to solve.
              </p>
            </div>

            <div className="bg-emerald-50 border border-emerald-100 rounded-2xl p-8">
              <h2 className="text-3xl font-bold mb-5">QR-code invoice payment readiness checklist</h2>
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
              <h2 className="text-3xl font-bold mb-5">Three QR invoice scenarios to test before buying</h2>
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
              <h2 className="text-3xl font-bold mb-5">Manual QR workaround vs invoice-ready payment workflow</h2>
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
              <h2 className="text-2xl font-bold mb-3">Adding QR codes to invoice PDFs? Review the payment workflow first.</h2>
              <p className="text-slate-700 leading-relaxed mb-5">
                Lattice Invoices early access is positioned for WooCommerce stores that need bank-transfer payment references, proformas, VAT invoice PDFs, due dates, reminders, credit notes, customer downloads, and accounting handoff.
              </p>
              <a href={mailto} className="block text-center bg-blue-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-blue-700 transition mb-3">
                Request €49 QR workflow review
              </a>
              <Link href="/blog/woocommerce-bank-transfer-invoice" className="block text-center border border-slate-200 px-6 py-3 rounded-xl font-semibold hover:border-blue-400 transition mb-3">
                Bank transfer invoice guide
              </Link>
              <Link href="/blog/woocommerce-net-terms-invoice-plugin" className="block text-center border border-slate-200 px-6 py-3 rounded-xl font-semibold hover:border-blue-400 transition mb-3">
                Net terms invoice guide
              </Link>
              <Link href="/blog/woocommerce-invoice-reconciliation" className="block text-center border border-slate-200 px-6 py-3 rounded-xl font-semibold hover:border-blue-400 transition">
                Invoice reconciliation guide
              </Link>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}
