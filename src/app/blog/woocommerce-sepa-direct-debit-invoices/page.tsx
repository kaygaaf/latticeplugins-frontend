import type { Metadata } from "next";
import Link from "next/link";

const SITE_URL = "https://latticeplugins.com";

export const metadata: Metadata = {
  title: "WooCommerce SEPA Direct Debit Invoices for EU VAT Stores",
  description:
    "A buyer-intent guide for WooCommerce stores that collect SEPA direct debit payments and need mandate evidence, invoice PDFs, VAT metadata, failed-payment handling, and accountant-ready exports.",
  alternates: {
    canonical: `${SITE_URL}/blog/woocommerce-sepa-direct-debit-invoices`,
  },
  openGraph: {
    title: "WooCommerce SEPA direct debit invoices for EU VAT stores",
    description:
      "Map mandate capture, invoice timing, VAT PDF retention, failed-payment evidence, credit notes, and accounting export before automating SEPA invoice workflows.",
    url: `${SITE_URL}/blog/woocommerce-sepa-direct-debit-invoices`,
    siteName: "Lattice Plugins",
    type: "article",
  },
};

const checklist = [
  {
    title: "1. Capture mandate context before the invoice is issued",
    detail:
      "SEPA direct debit payments need more than a paid/unpaid status. Store the mandate reference, billing company, VAT/BTW number, invoice email, and payment method context before the invoice PDF becomes customer-facing.",
    buyerQuestion: "Can the invoice plugin print and export the SEPA mandate reference without copying it into notes?",
  },
  {
    title: "2. Separate payment collection from invoice evidence",
    detail:
      "A SEPA collection can be pending, settled, reversed, or failed. The invoice workflow should show when the invoice was issued, when the debit was attempted, and whether a final paid invoice, reminder, or credit note is now needed.",
    buyerQuestion: "Does the workflow distinguish issued invoice, collection attempt, settlement, reversal, and refund evidence?",
  },
  {
    title: "3. Keep failed-debit follow-up attached to the invoice",
    detail:
      "When a debit fails, support needs the invoice number, due date, mandate reference, customer VAT data, reminder email history, and next payment action in one place — not spread across payment logs and inbox threads.",
    buyerQuestion: "Can unpaid SEPA invoices trigger reminders while keeping the original VAT PDF retained?",
  },
  {
    title: "4. Handle reversals and refunds with credit notes",
    detail:
      "A returned debit or refund should not silently overwrite the original invoice. The safer path retains the issued invoice, creates a credit-note or correction record when needed, and exports both sides for accounting reconciliation.",
    buyerQuestion: "Does the plugin link SEPA reversals, credit notes, and original invoice PDFs for your accountant?",
  },
  {
    title: "5. Export the fields finance teams actually ask for",
    detail:
      "Useful exports include invoice number, mandate reference, SEPA status, VAT totals, reverse-charge status, due date, reminder state, credit-note links, and customer invoice download status.",
    buyerQuestion: "Can accountant exports include SEPA and VAT evidence together instead of requiring manual matching?",
  },
];

const scenarios = [
  {
    title: "B2B subscription renewal paid by SEPA",
    trigger: "A customer renews monthly and expects the invoice PDF to include VAT details while finance tracks the debit mandate.",
    workflow:
      "Issue the renewal invoice with VAT metadata, attach it to the renewal email, store mandate reference, and export settlement status after collection clears.",
  },
  {
    title: "Direct debit fails after invoice issue",
    trigger: "The invoice PDF was already sent, but the SEPA collection fails or is reversed.",
    workflow:
      "Keep the original invoice retained, mark the payment evidence as failed, send a reminder with invoice link, and avoid changing historical invoice totals.",
  },
  {
    title: "Customer cancels after debit collection",
    trigger: "A paid SEPA order is refunded or partially refunded and accounting needs the VAT trail.",
    workflow:
      "Generate a credit note linked to the original invoice and export invoice, credit-note, VAT, mandate, and refund references together.",
  },
];

const comparisonRows = [
  {
    manual: "Mandate reference sits in payment gateway logs only",
    lattice: "Mandate reference is visible on invoice metadata, export rows, and support workflow.",
  },
  {
    manual: "Failed debit creates a support inbox thread",
    lattice: "Failed debit status stays attached to invoice reminders, due date, and payment follow-up.",
  },
  {
    manual: "Refund or reversal edits the order without invoice context",
    lattice: "Credit-note path preserves original invoice PDF and links reversal/refund evidence.",
  },
];

const faq = [
  {
    q: "Does WooCommerce handle SEPA invoice evidence by default?",
    a: "WooCommerce and payment gateways can process payment events, but invoice-safe SEPA workflows usually need mandate references, PDF invoice retention, reminder history, credit-note links, and accountant exports tied together.",
  },
  {
    q: "Should the invoice be created before or after SEPA collection clears?",
    a: "That depends on the store's accounting process, but the workflow should record invoice issue date separately from collection attempt and settlement status so finance can reconcile the order later.",
  },
  {
    q: "What happens when a direct debit is reversed?",
    a: "Do not silently rewrite the issued invoice. Keep the original PDF, record the failed or reversed payment evidence, and use a reminder, correction, or credit-note workflow depending on the real transaction.",
  },
  {
    q: "Where does Lattice Invoices fit?",
    a: "Lattice Invoices is the early-access WooCommerce EU invoicing path for stores that need VAT invoice PDFs, SEPA mandate context, failed-payment follow-up, credit notes, customer downloads, and accountant-ready exports.",
  },
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "WooCommerce SEPA direct debit invoices for EU VAT stores",
  description:
    "A practical WooCommerce invoicing guide for SEPA mandate evidence, invoice timing, failed-debit reminders, VAT PDF retention, credit notes, and accountant-ready exports.",
  mainEntityOfPage: `${SITE_URL}/blog/woocommerce-sepa-direct-debit-invoices`,
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
  "mailto:support@latticeplugins.com?subject=WooCommerce%20SEPA%20invoice%20workflow%20review&body=Hi%20Lattice%2C%0A%0AI%20want%20a%20WooCommerce%20SEPA%20direct%20debit%20invoice%20workflow%20review.%0A%0AStore%20URL%3A%20%0ACountry%3A%20%0ACurrent%20invoice%20plugin%3A%20%0APayment%20gateway%2FSEPA%20provider%3A%20%0AMandate%20reference%20source%3A%20%0AFailed-payment%20workflow%3A%20%0ACredit-note%20needs%3A%20%0AAccounting%20export%20needs%3A%20";

export default function WooCommerceSepaDirectDebitInvoicesPage() {
  return (
    <main className="min-h-screen bg-slate-50">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <section className="bg-gradient-to-br from-slate-950 via-indigo-950 to-emerald-900 text-white">
        <div className="max-w-5xl mx-auto px-6 py-16 lg:py-20">
          <p className="uppercase tracking-[0.3em] text-sm text-emerald-200 mb-4">WooCommerce SEPA invoice workflow</p>
          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
            WooCommerce SEPA direct debit invoices without missing VAT or mandate evidence.
          </h1>
          <p className="text-xl text-emerald-50 leading-relaxed max-w-3xl mb-8">
            EU stores using SEPA direct debit need invoice PDFs, VAT/BTW metadata, mandate references, failed-payment evidence, and credit-note handling in one WooCommerce workflow. Use this checklist before choosing an invoice plugin or patching exports by hand.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href={mailto} className="bg-emerald-300 text-slate-950 px-8 py-4 rounded-xl font-semibold hover:bg-emerald-200 transition shadow-lg text-center">
              Request €49 SEPA invoice workflow review
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
              <h2 className="text-3xl font-bold mb-4">Why SEPA payments create invoice friction</h2>
              <p className="text-slate-700 leading-relaxed mb-4">
                SEPA direct debit looks simple at checkout, but the invoice workflow often breaks later: mandate references sit in gateway logs, payment status changes after the PDF is sent, and failed debits create manual reminder work.
              </p>
              <p className="text-slate-700 leading-relaxed">
                The safer workflow treats SEPA evidence as invoice metadata. The invoice number, VAT details, mandate reference, settlement status, reminder history, credit-note relationship, and customer downloads should remain connected to the WooCommerce order.
              </p>
            </div>

            <div className="bg-emerald-50 border border-emerald-100 rounded-2xl p-8">
              <h2 className="text-3xl font-bold mb-5">SEPA invoice readiness checklist</h2>
              <div className="space-y-4">
                {checklist.map((item) => (
                  <div key={item.title} className="bg-white rounded-xl border border-emerald-100 p-5">
                    <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                    <p className="text-slate-700 leading-relaxed mb-2">{item.detail}</p>
                    <p className="text-slate-600 leading-relaxed"><strong>Buyer question:</strong> {item.buyerQuestion}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-2xl border shadow-sm p-8">
              <h2 className="text-3xl font-bold mb-5">Three SEPA invoice scenarios to test</h2>
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
                      <th className="py-3 pr-4 font-semibold">Manual workaround</th>
                      <th className="py-3 pr-4 font-semibold">Lattice Invoices direction</th>
                    </tr>
                  </thead>
                  <tbody>
                    {comparisonRows.map((row) => (
                      <tr key={row.manual} className="border-b last:border-b-0">
                        <td className="py-4 pr-4 text-slate-700 align-top">{row.manual}</td>
                        <td className="py-4 pr-4 text-slate-700 align-top">{row.lattice}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div className="bg-blue-50 border border-blue-100 rounded-2xl p-8">
              <h2 className="text-3xl font-bold mb-4">Early-access offer: €49 SEPA invoice workflow review</h2>
              <p className="text-slate-700 leading-relaxed mb-5">
                Send your SEPA provider, mandate reference source, current invoice plugin, failed-payment process, and accounting export needs. Lattice will map the invoice workflow buyers expect before you automate it.
              </p>
              <a href={mailto} className="inline-flex bg-blue-700 text-white px-7 py-3 rounded-xl font-semibold hover:bg-blue-800 transition">
                Send my SEPA invoice workflow
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
              <p className="text-sm uppercase tracking-[0.2em] text-emerald-700 font-semibold mb-3">Lattice Invoices early access</p>
              <h2 className="text-2xl font-bold mb-3">Need SEPA-ready invoices finance can reconcile?</h2>
              <p className="text-slate-600 mb-5">
                Get a focused review for mandate evidence, VAT invoice PDFs, failed-debit reminders, credit-note links, and accountant exports.
              </p>
              <a href={mailto} className="block text-center bg-slate-950 text-white px-5 py-3 rounded-xl font-semibold hover:bg-slate-800 transition mb-3">
                Request SEPA workflow review
              </a>
              <Link href="/woocommerce-eu-vat-invoices" className="block text-center border border-slate-200 px-5 py-3 rounded-xl font-semibold hover:border-emerald-400 transition mb-3">
                View Lattice Invoices
              </Link>
              <Link href="/blog/woocommerce-recurring-invoices-subscriptions" className="block text-center border border-slate-200 px-5 py-3 rounded-xl font-semibold hover:border-emerald-400 transition mb-3">
                Recurring invoice guide
              </Link>
              <Link href="/blog/woocommerce-invoice-payment-reminders" className="block text-center border border-slate-200 px-5 py-3 rounded-xl font-semibold hover:border-emerald-400 transition mb-3">
                Payment reminder guide
              </Link>
              <Link href="/blog/woocommerce-invoice-reconciliation" className="block text-center border border-slate-200 px-5 py-3 rounded-xl font-semibold hover:border-emerald-400 transition">
                Reconciliation guide
              </Link>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}
