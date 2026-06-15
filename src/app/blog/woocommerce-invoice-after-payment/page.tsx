import type { Metadata } from "next";
import Link from "next/link";

const SITE_URL = "https://latticeplugins.com";

export const metadata: Metadata = {
  title: "WooCommerce Invoice After Payment Workflow for EU VAT Stores",
  description:
    "A buyer-intent guide for WooCommerce stores deciding when to issue invoice PDFs after payment, with proformas, VAT evidence, refund credit notes, customer downloads, and accounting exports.",
  alternates: {
    canonical: `${SITE_URL}/blog/woocommerce-invoice-after-payment`,
  },
  openGraph: {
    title: "WooCommerce invoice after payment workflow for EU VAT stores",
    description:
      "Decide when WooCommerce should issue invoice PDFs after payment, before payment, or after fulfillment without breaking VAT numbering, credit notes, refunds, and exports.",
    url: `${SITE_URL}/blog/woocommerce-invoice-after-payment`,
    siteName: "Lattice Plugins",
    type: "article",
  },
};

const readinessChecklist = [
  {
    title: "1. Define the accounting trigger before choosing a plugin",
    detail:
      "Some stores need a proforma before bank transfer, then a final VAT invoice only after payment. Others issue the final invoice at checkout, order processing, completion, subscription renewal, or manual approval. The invoice plugin must make this trigger explicit.",
    buyerQuestion: "Can the plugin issue proformas and final invoices from different WooCommerce order events?",
  },
  {
    title: "2. Keep invoice numbers sequential even when payment fails",
    detail:
      "If a failed card, unpaid BACS order, abandoned invoice, or cancelled subscription consumes a final invoice number too early, finance may end up with gaps, void documents, or manual corrections. After-payment issuance reduces that risk, but only when the workflow is deliberate.",
    buyerQuestion: "What happens to invoice numbers when payment fails, is cancelled, or is later refunded?",
  },
  {
    title: "3. Separate payment request PDFs from VAT invoice PDFs",
    detail:
      "A customer may need a payment request with bank details before money arrives. That document should not accidentally become the retained final VAT invoice unless the store policy says so.",
    buyerQuestion: "Can the plugin label pre-payment documents as proforma or payment request and then issue the final invoice after payment?",
  },
  {
    title: "4. Preserve refund and credit-note evidence",
    detail:
      "Issuing after payment does not remove the need for credit notes. A paid order can still be partially refunded, written off, adjusted, or corrected, and every change needs a retained PDF plus audit trail.",
    buyerQuestion: "Does the plugin link refunds and credit notes back to the original paid invoice?",
  },
  {
    title: "5. Make the customer and accountant views match",
    detail:
      "The My Account download, email attachment, resend action, invoice archive, and accountant export should all show the same invoice state: proforma, awaiting payment, paid final invoice, credited, written off, or corrected.",
    buyerQuestion: "Can support, customers, and accountants see the same invoice status without manual order notes?",
  },
];

const scenarios = [
  {
    title: "Card order paid immediately",
    trigger: "Stripe, PayPal, Mollie, or Klarna confirms payment during checkout.",
    workflow:
      "Issue the final VAT invoice only after the successful payment event, attach it to the correct WooCommerce email, store the PDF for customer download, and export the paid invoice row for accounting.",
  },
  {
    title: "BACS or Net terms order before payment",
    trigger: "A customer chooses bank transfer or pay-by-invoice terms and needs documents before money arrives.",
    workflow:
      "Send a proforma or payment request first, include bank details and due date, then issue the final invoice after payment is marked received according to store policy.",
  },
  {
    title: "Paid invoice is refunded later",
    trigger: "Finance processes a full or partial refund after the final invoice already exists.",
    workflow:
      "Retain the original invoice, create a linked credit note with the refund amount and VAT correction, expose both PDFs to the customer when appropriate, and export both documents.",
  },
];

const comparisonRows = [
  {
    weak: "A final invoice PDF is generated as soon as the order is created, even if payment never succeeds.",
    strong: "Invoice timing is configurable: proforma before payment, final VAT invoice after confirmed payment, and clear handling for cancelled or failed orders.",
  },
  {
    weak: "Support manually changes PDF labels from invoice to proforma when a B2B buyer asks for bank-transfer paperwork.",
    strong: "Document type is state-driven, so payment requests, proformas, final invoices, and credit notes are generated from the order workflow.",
  },
  {
    weak: "The customer receives one PDF by email while the accountant export references a different invoice state.",
    strong: "Email attachments, My Account downloads, PDF archive, audit trail, and export rows share the same invoice state and document IDs.",
  },
  {
    weak: "Refunds are tracked in WooCommerce order notes, but no linked credit note PDF exists.",
    strong: "Refunds generate credit-note records that keep the original invoice intact and make VAT correction evidence exportable.",
  },
];

const faq = [
  {
    q: "Should WooCommerce create invoices before or after payment?",
    a: "For many EU VAT stores, the safest workflow is a proforma or payment request before payment and a final VAT invoice after payment. The right answer depends on local accounting policy, payment method, and whether the store sells B2B on Net terms.",
  },
  {
    q: "What is the risk of generating invoices too early?",
    a: "Generating final invoices before payment can create unused invoice numbers, cancelled invoice documents, confusing customer PDFs, and manual correction work when a card payment fails or a bank-transfer order is never paid.",
  },
  {
    q: "Can an after-payment workflow still support bank transfer orders?",
    a: "Yes, but the pre-payment document should usually be a proforma or payment request. The final invoice can then be issued when payment is received or when the store policy says revenue should be recognized.",
  },
  {
    q: "Where does Lattice fit in after-payment invoice workflows?",
    a: "Lattice Invoices early access is positioned around configurable WooCommerce invoice timing: VAT/BTW checkout fields, proformas, final paid invoice PDFs, credit notes, customer downloads, reminders, and accounting export readiness.",
  },
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "WooCommerce invoice after payment workflow for EU VAT stores",
  description:
    "A buyer guide for WooCommerce stores deciding whether to issue final invoice PDFs after payment, with proformas, VAT invoice numbers, credit notes, customer downloads, and accounting exports.",
  mainEntityOfPage: `${SITE_URL}/blog/woocommerce-invoice-after-payment`,
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
  "mailto:support@latticeplugins.com?subject=WooCommerce%20invoice%20after%20payment%20workflow%20review&body=Hi%20Lattice%2C%0A%0AI%20want%20a%20WooCommerce%20invoice-after-payment%20workflow%20review.%0A%0AStore%20URL%3A%20%0ACountry%3A%20%0APayment%20methods%20(Stripe%2FPayPal%2FMollie%2FBACS%2FNet%20terms)%3A%20%0ACurrent%20invoice%20plugin%3A%20%0AWhen%20final%20invoice%20should%20be%20issued%3A%20%0AProforma%20or%20payment-request%20needs%3A%20%0ARefund%2Fcredit-note%20workflow%3A%20%0AAccounting%20export%20needs%3A%20";

export default function WooCommerceInvoiceAfterPaymentPage() {
  return (
    <main className="min-h-screen bg-slate-50">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <section className="bg-gradient-to-br from-slate-950 via-emerald-950 to-blue-900 text-white">
        <div className="max-w-5xl mx-auto px-6 py-16 lg:py-20">
          <p className="uppercase tracking-[0.3em] text-sm text-emerald-200 mb-4">WooCommerce invoice timing</p>
          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
            WooCommerce invoices after payment without broken numbering, unpaid PDFs, or VAT correction chaos.
          </h1>
          <p className="text-xl text-emerald-50 leading-relaxed max-w-3xl mb-8">
            Invoice timing is one of the highest-risk WooCommerce invoice decisions. Final invoices, proformas, bank-transfer payment requests, card payments, refunds, credit notes, customer downloads, and accountant exports all need one consistent workflow.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href={mailto} className="bg-green-400 text-slate-950 px-8 py-4 rounded-xl font-semibold hover:bg-green-300 transition shadow-lg text-center">
              Request €49 invoice timing review
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
              <h2 className="text-3xl font-bold mb-4">Why invoice-after-payment is a revenue workflow, not a checkbox</h2>
              <p className="text-slate-700 leading-relaxed mb-4">
                A checkbox that says generate invoice after payment sounds simple, but real WooCommerce stores have mixed payment methods. Card orders are paid immediately, BACS orders may wait days, Net 30 buyers need documents before payment, and refunds need credit notes after the final invoice exists.
              </p>
              <p className="text-slate-700 leading-relaxed">
                A sales-ready invoice plugin needs to decide which document exists at each state: no document, proforma, payment request, final invoice, credit note, write-off, or correction. That is why Lattice Invoices content focuses on workflow readiness instead of only PDF styling.
              </p>
            </div>

            <div className="bg-emerald-50 border border-emerald-100 rounded-2xl p-8">
              <h2 className="text-3xl font-bold mb-5">Invoice-after-payment readiness checklist</h2>
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
              <h2 className="text-3xl font-bold mb-5">Three invoice timing scenarios to test before buying</h2>
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
              <h2 className="text-3xl font-bold mb-5">Weak timing checkbox vs invoice-ready workflow</h2>
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
              <h2 className="text-2xl font-bold mb-3">Unsure when WooCommerce should issue the final invoice?</h2>
              <p className="text-slate-700 leading-relaxed mb-5">
                Lattice Invoices early access is being positioned for stores that need invoice timing, VAT/BTW fields, proformas, final paid invoices, credit notes, customer downloads, reminders, and accounting handoff.
              </p>
              <a href={mailto} className="block text-center bg-blue-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-blue-700 transition mb-3">
                Request €49 timing review
              </a>
              <Link href="/blog/woocommerce-proforma-invoice" className="block text-center border border-slate-200 px-6 py-3 rounded-xl font-semibold hover:border-blue-400 transition mb-3">
                Proforma invoice guide
              </Link>
              <Link href="/blog/woocommerce-bank-transfer-invoice" className="block text-center border border-slate-200 px-6 py-3 rounded-xl font-semibold hover:border-blue-400 transition mb-3">
                Bank transfer invoice guide
              </Link>
              <Link href="/blog/woocommerce-credit-notes-refunds" className="block text-center border border-slate-200 px-6 py-3 rounded-xl font-semibold hover:border-blue-400 transition">
                Credit note refund guide
              </Link>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}
