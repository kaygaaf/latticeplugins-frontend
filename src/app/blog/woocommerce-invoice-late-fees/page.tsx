import type { Metadata } from "next";
import Link from "next/link";

const SITE_URL = "https://latticeplugins.com";

export const metadata: Metadata = {
  title: "WooCommerce Invoice Late Fees and Overdue Payment Terms",
  description:
    "A buyer-intent guide for WooCommerce B2B stores that need invoice late fees, payment terms, overdue reminders, retained VAT invoices, and accountant-ready audit evidence.",
  alternates: {
    canonical: `${SITE_URL}/blog/woocommerce-invoice-late-fees`,
  },
  openGraph: {
    title: "WooCommerce invoice late fees and overdue payment terms",
    description:
      "Plan invoice late fees safely: due dates, BACS payment terms, reminder timing, VAT invoice evidence, customer wording, credit-note handling, and audit trail.",
    url: `${SITE_URL}/blog/woocommerce-invoice-late-fees`,
    siteName: "Lattice Plugins",
    type: "article",
  },
};

const checks = [
  {
    title: "1. Separate due dates from late-fee rules",
    detail:
      "Net 7, Net 14, Net 30, proforma payment deadlines, and subscription renewal dates should be stored as invoice workflow metadata. A late-fee rule should only evaluate after the correct due date is known and frozen for that document.",
    buyerQuestion: "Can the invoice workflow store due date, payment terms, and late-fee eligibility per invoice instead of recalculating from the current order status?",
  },
  {
    title: "2. Keep legal invoice PDFs unchanged",
    detail:
      "Do not silently edit an issued VAT invoice PDF to add a fee after it has been sent. Use a separate fee line, replacement invoice, or controlled correction workflow with a retained original and audit note.",
    buyerQuestion: "Does the plugin preserve the originally issued PDF and show how any late-fee document was created?",
  },
  {
    title: "3. Match reminders to finance workflows",
    detail:
      "A useful B2B flow sends friendly reminders before a due date, firmer reminders after the due date, and a separate late-fee notice only when the store policy allows it. That timing should be visible to support and accounting.",
    buyerQuestion: "Can reminders, overdue notices, and late-fee notices be logged as separate invoice events?",
  },
  {
    title: "4. Protect VAT and accounting evidence",
    detail:
      "If a late fee is taxable, exempt, or treated as compensation, the accounting export needs a clear description, date, amount, VAT treatment, and invoice reference. Do not leave this as a generic order note.",
    buyerQuestion: "Will the accountant receive late-fee evidence connected to the invoice number and payment timeline?",
  },
  {
    title: "5. Give customers a clean download path",
    detail:
      "Customers should be able to download the original invoice, any fee document, reminder history, and corrected PDFs from one place. Email-only delivery creates support tickets when finance teams miss the notice.",
    buyerQuestion: "Can B2B customers self-serve invoice PDFs and fee-related documents from My Account?",
  },
];

const scenarios = [
  {
    title: "Bank transfer invoice paid 12 days late",
    risk: "The order is eventually paid, but support cannot tell whether a late-fee notice was sent or whether the fee was waived.",
    fix: "Store due date, reminder timeline, payment date, waiver state, and fee-document evidence against the invoice.",
  },
  {
    title: "B2B customer disputes an overdue fee",
    risk: "Finance asks for the original invoice, payment terms, reminder emails, and proof that the customer could access the PDF.",
    fix: "Keep retained PDFs, delivery logs, customer-download timestamps, and a separate correction/waiver note.",
  },
  {
    title: "Subscription renewal has a failed payment fee",
    risk: "The renewal invoice, retry notices, fee line, and credit note after cancellation can become disconnected.",
    fix: "Treat renewal invoices, failed-payment notices, late fees, and credit notes as linked invoice workflow events.",
  },
];

const faq = [
  {
    q: "Can WooCommerce automatically add late fees to invoices?",
    a: "WooCommerce can be extended to add fee lines or trigger notices, but B2B and EU VAT stores should avoid blindly changing issued invoice PDFs. The safer workflow stores due dates, sends reminders, keeps retained PDFs, and creates explicit fee/correction evidence.",
  },
  {
    q: "Should late fees appear on the original VAT invoice?",
    a: "Usually the original invoice should remain retained exactly as issued. If a late fee is charged later, use a controlled fee document, replacement invoice, or correction workflow that preserves the original and records the reason.",
  },
  {
    q: "What should an invoice late-fee plugin log?",
    a: "At minimum: original invoice number, due date, payment terms, reminder timestamps, late-fee decision, fee amount, VAT treatment, customer delivery evidence, payment date, waiver state, and accounting export status.",
  },
  {
    q: "Where does Lattice Invoices fit?",
    a: "Lattice Invoices is the early-access WooCommerce EU invoicing path for stores that need practical B2B invoice workflows: due dates, reminders, retained PDFs, credit notes, corrections, customer downloads, audit trail, and accountant-ready exports.",
  },
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "WooCommerce invoice late fees and overdue payment terms",
  description:
    "A practical guide to WooCommerce invoice late fees, overdue BACS payment terms, reminder timing, retained VAT invoice PDFs, customer downloads, and accountant-ready audit evidence.",
  mainEntityOfPage: `${SITE_URL}/blog/woocommerce-invoice-late-fees`,
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
  "mailto:support@latticeplugins.com?subject=WooCommerce%20invoice%20late-fee%20workflow%20review&body=Hi%20Lattice%2C%0A%0AI%20want%20a%20WooCommerce%20invoice%20late-fee%20workflow%20review.%0A%0AStore%20URL%3A%20%0ACountry%3A%20%0ACurrent%20invoice%20plugin%3A%20%0APayment%20methods%20(BACS%2FStripe%2FPayPal)%3A%20%0APayment%20terms%20(Net%207%2F14%2F30)%3A%20%0ALate-fee%20policy%3A%20%0AReminder%20workflow%3A%20%0AAccounting%20export%20needs%3A%20";

export default function WooCommerceInvoiceLateFeesPage() {
  return (
    <main className="min-h-screen bg-slate-50">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <section className="bg-gradient-to-br from-slate-950 via-amber-950 to-orange-900 text-white">
        <div className="max-w-5xl mx-auto px-6 py-16 lg:py-20">
          <p className="uppercase tracking-[0.3em] text-sm text-amber-200 mb-4">WooCommerce invoice late fees</p>
          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
            Add overdue payment terms without breaking your WooCommerce invoice audit trail.
          </h1>
          <p className="text-xl text-amber-50 leading-relaxed max-w-3xl mb-8">
            Late fees are not just another WooCommerce fee line. B2B stores need frozen due dates, reminder evidence, retained VAT invoices, customer delivery logs, clear fee wording, and accounting export proof.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href={mailto} className="bg-amber-400 text-slate-950 px-8 py-4 rounded-xl font-semibold hover:bg-amber-300 transition shadow-lg text-center">
              Request €49 late-fee workflow review
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
              <h2 className="text-3xl font-bold mb-4">Why late fees are an invoice-workflow problem</h2>
              <p className="text-slate-700 leading-relaxed mb-4">
                A store can add a fee to an order total and still fail the finance workflow. If the original PDF changes, if reminders are not logged, or if accounting cannot see the VAT treatment, the late-fee policy becomes a support and bookkeeping problem.
              </p>
              <p className="text-slate-700 leading-relaxed">
                Use this checklist when choosing or replacing a WooCommerce invoice plugin for BACS, proforma, Net 14/30, subscriptions, and B2B payment workflows.
              </p>
            </div>

            <div className="bg-amber-50 border border-amber-100 rounded-2xl p-8">
              <h2 className="text-3xl font-bold mb-5">Late-fee readiness checklist</h2>
              <div className="space-y-4">
                {checks.map((item) => (
                  <div key={item.title} className="bg-white rounded-xl border border-amber-100 p-5">
                    <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                    <p className="text-slate-700 leading-relaxed mb-2">{item.detail}</p>
                    <p className="text-slate-600 leading-relaxed"><strong>Buyer question:</strong> {item.buyerQuestion}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-2xl border shadow-sm p-8">
              <h2 className="text-3xl font-bold mb-5">Overdue invoice scenarios to test</h2>
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
              <h2 className="text-3xl font-bold mb-4">Early-access offer: €49 late-fee workflow review</h2>
              <p className="text-slate-700 leading-relaxed mb-5">
                Send your payment terms, current invoice plugin, reminder rules, late-fee policy, sample overdue orders, and accounting export needs. Lattice will map the workflow gaps before you automate late fees on live invoices.
              </p>
              <a href={mailto} className="inline-flex bg-emerald-600 text-white px-7 py-3 rounded-xl font-semibold hover:bg-emerald-700 transition">
                Send my late-fee workflow
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
              <p className="text-sm uppercase tracking-[0.2em] text-amber-700 font-semibold mb-3">Lattice Invoices early access</p>
              <h2 className="text-2xl font-bold mb-3">Need overdue payment terms that accounting can trust?</h2>
              <p className="text-slate-600 mb-5">
                Get a focused review for due dates, BACS payment terms, reminder timing, late-fee evidence, retained PDFs, customer downloads, credit notes, and accountant exports.
              </p>
              <a href={mailto} className="block text-center bg-slate-950 text-white px-5 py-3 rounded-xl font-semibold hover:bg-slate-800 transition mb-3">
                Request late-fee review
              </a>
              <Link href="/docs/woocommerce-eu-vat-invoice-setup" className="block text-center border border-slate-200 px-5 py-3 rounded-xl font-semibold hover:bg-slate-50 transition">
                Read setup guide
              </Link>
            </div>

            <div className="bg-blue-50 rounded-2xl border border-blue-100 p-6">
              <h3 className="text-xl font-bold mb-3">Related invoice guides</h3>
              <ul className="space-y-3 text-blue-900 font-medium">
                <li><Link href="/blog/woocommerce-invoice-due-dates" className="hover:underline">Invoice due dates</Link></li>
                <li><Link href="/blog/woocommerce-invoice-payment-reminders" className="hover:underline">Payment reminders</Link></li>
                <li><Link href="/blog/woocommerce-bank-transfer-invoice" className="hover:underline">Bank-transfer invoice workflow</Link></li>
                <li><Link href="/blog/woocommerce-invoice-audit-trail" className="hover:underline">Invoice audit trail</Link></li>
                <li><Link href="/blog/woocommerce-invoice-correction-workflow" className="hover:underline">Invoice correction workflow</Link></li>
              </ul>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}
