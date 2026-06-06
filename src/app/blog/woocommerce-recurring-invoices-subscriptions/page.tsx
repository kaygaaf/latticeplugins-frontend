import type { Metadata } from "next";
import Link from "next/link";

const SITE_URL = "https://latticeplugins.com";

export const metadata: Metadata = {
  title: "WooCommerce Recurring Invoices for Subscriptions — EU VAT Workflow",
  description:
    "A practical buyer guide for WooCommerce stores that sell subscriptions and need recurring invoice PDFs, VAT/BTW evidence, renewal numbering, credit notes, and customer downloads.",
  alternates: {
    canonical: `${SITE_URL}/blog/woocommerce-recurring-invoices-subscriptions`,
  },
  openGraph: {
    title: "WooCommerce recurring invoices for subscriptions",
    description:
      "How to make WooCommerce subscription renewals invoice-ready: VAT fields, invoice numbers, PDF delivery, failed-payment follow-up, refunds, and accountant export.",
    url: `${SITE_URL}/blog/woocommerce-recurring-invoices-subscriptions`,
    siteName: "Lattice Plugins",
    type: "article",
  },
};

const recurringChecklist = [
  "Every renewal has a stable invoice number or invoice reference that does not collide with one-off orders",
  "VAT/BTW number, company name, billing country, exemption reason, and reverse-charge wording carry from the original subscription to renewals",
  "Renewal invoice PDFs are attached to the right WooCommerce emails and downloadable from My Account",
  "Failed renewal payments can send a payment request or proforma without locking a final VAT invoice too early",
  "Refunds, prorations, plan upgrades, downgrades, and cancellations create a traceable credit-note trail",
  "Accounting export separates original subscription orders, recurring renewal invoices, refunds, and outstanding receivables",
];

const workflowRows = [
  ["Signup order", "The customer starts a subscription", "Capture company details, VAT ID, billing country, invoice email, and payment method before the first invoice is generated."],
  ["Renewal", "WooCommerce creates the next recurring order", "Reuse verified VAT metadata, generate a renewal invoice PDF, and keep numbering sequential or clearly separated."],
  ["Failed payment", "Card or bank transfer is not paid", "Send a payment-request/proforma style document and reminder rather than pretending the invoice is already settled."],
  ["Plan change", "Customer upgrades, downgrades, pauses, or cancels", "Record proration lines, credit notes, replacement invoice references, and the reason for the adjustment."],
  ["Accounting handoff", "Bookkeeper reconciles monthly revenue", "Export invoice number, renewal status, payment status, PDF URL, VAT evidence, credit-note links, and customer reference."],
];

const scenarios = [
  {
    title: "B2B SaaS renewal with reverse charge",
    pain: "The subscription renews automatically, but the buyer's finance team asks why VAT is 0% and whether the VAT number was still valid for that renewal.",
    lattice: "Carry VAT ID, country, exemption reason, and reverse-charge wording into every renewal invoice packet.",
  },
  {
    title: "Failed renewal before final invoice",
    pain: "A renewal order exists, but payment failed. Sending a final invoice too early creates accounting cleanup when the customer never pays.",
    lattice: "Use payment-request/proforma status until payment is confirmed, then release the final invoice with clean numbering.",
  },
  {
    title: "Upgrade, downgrade, or prorated refund",
    pain: "Subscription changes produce messy refunds and manual notes that do not connect to the original invoice.",
    lattice: "Tie prorations, credit notes, and replacement invoice PDFs to the renewal order and export them as one audit trail.",
  },
];

const faq = [
  {
    q: "Does WooCommerce generate recurring invoice PDFs for subscriptions by default?",
    a: "WooCommerce can create subscription renewal orders when a subscription extension is installed, but recurring VAT invoice PDFs, sequential renewal numbering, credit-note links, customer download access, and accounting export usually need a dedicated invoice workflow.",
  },
  {
    q: "Should failed subscription renewals get a final invoice?",
    a: "Many stores prefer a payment request or proforma-style document until payment is confirmed, then issue the final VAT invoice with stable numbering. Your accountant should confirm the exact treatment for your jurisdiction.",
  },
  {
    q: "What recurring invoice fields matter most for EU B2B subscriptions?",
    a: "Track company name, VAT/BTW number, billing country, exemption or reverse-charge reason, renewal date, due date, payment status, invoice number, credit-note references, PDF URL, and invoice recipient email.",
  },
  {
    q: "How does Lattice Invoices fit subscriptions?",
    a: "The early-access focus is to make WooCommerce invoice workflows predictable for EU stores: VAT metadata, renewal-ready invoice PDFs, proforma/payment-request states, due dates, credit notes, customer downloads, and accountant-ready export.",
  },
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "WooCommerce recurring invoices for subscriptions",
  description:
    "A buyer-intent guide for WooCommerce stores that need recurring invoices for subscriptions, EU VAT evidence, renewal PDF delivery, failed-payment handling, credit notes, and accounting handoff.",
  mainEntityOfPage: `${SITE_URL}/blog/woocommerce-recurring-invoices-subscriptions`,
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
  "mailto:support@latticeplugins.com?subject=Lattice%20Invoices%20recurring%20subscription%20invoices%20early%20access&body=Hi%20Lattice%2C%0A%0AI%20need%20WooCommerce%20recurring%20invoices%20for%20subscriptions.%0A%0AStore%20URL%3A%20%0ACountry%3A%20%0ACurrent%20subscription%20plugin%3A%20%0ACurrent%20invoice%20plugin%3A%20%0AVAT%2FBTW%20field%20present%3A%20%0AFailed-renewal%20workflow%3A%20%0ACredit-note%2Frefund%20workflow%3A%20%0AAccounting%20export%20needs%3A%20";

export default function WooCommerceRecurringInvoicesSubscriptionsPage() {
  return (
    <main className="min-h-screen bg-slate-50">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <section className="bg-gradient-to-br from-slate-950 via-blue-950 to-emerald-900 text-white">
        <div className="max-w-5xl mx-auto px-6 py-16 lg:py-20">
          <p className="uppercase tracking-[0.3em] text-sm text-emerald-200 mb-4">WooCommerce subscription invoice workflow</p>
          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
            WooCommerce recurring invoices for subscriptions: keep renewals VAT-ready.
          </h1>
          <p className="text-xl text-emerald-50 leading-relaxed max-w-3xl mb-8">
            Subscription revenue gets messy when renewals, failed payments, prorations, refunds, and reverse-charge VAT all live in separate notes. The sale is recurring; the invoice evidence has to be recurring too.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href={mailto} className="bg-emerald-500 text-white px-8 py-4 rounded-xl font-semibold hover:bg-emerald-400 transition shadow-lg text-center">
              Request recurring-invoice early access
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
              <h2 className="text-3xl font-bold mb-4">The subscription invoice problem</h2>
              <p className="text-slate-700 leading-relaxed mb-4">
                A one-off order can be checked manually. A subscription store cannot. Every renewal may need the same VAT evidence, PDF delivery, due date, payment status, and customer-download access as the first invoice.
              </p>
              <p className="text-slate-700 leading-relaxed">
                Lattice Invoices is being shaped around that revenue path: make renewal orders invoice-ready, keep failed payments from polluting final invoice numbering, and give the accountant a clean monthly trail.
              </p>
            </div>

            <div className="bg-white rounded-2xl border shadow-sm p-8">
              <h2 className="text-3xl font-bold mb-6">Recurring invoice readiness checklist</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {recurringChecklist.map((item) => (
                  <div key={item} className="flex gap-3 p-4 rounded-xl bg-slate-50 border border-slate-100">
                    <span className="text-emerald-600 font-bold">✓</span>
                    <span className="text-slate-800">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-2xl border shadow-sm p-8 overflow-hidden">
              <h2 className="text-3xl font-bold mb-4">Subscription invoice workflow map</h2>
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-slate-100 text-slate-700">
                      <th className="p-4 rounded-l-xl">Stage</th>
                      <th className="p-4">What changes</th>
                      <th className="p-4 rounded-r-xl">Invoice workflow requirement</th>
                    </tr>
                  </thead>
                  <tbody>
                    {workflowRows.map(([stage, change, requirement]) => (
                      <tr key={stage} className="border-b border-slate-100">
                        <td className="p-4 font-semibold text-slate-900">{stage}</td>
                        <td className="p-4 text-slate-600">{change}</td>
                        <td className="p-4 text-slate-800">{requirement}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div className="bg-white rounded-2xl border shadow-sm p-8">
              <h2 className="text-3xl font-bold mb-6">Common recurring-invoice blockers</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                {scenarios.map((scenario) => (
                  <div key={scenario.title} className="rounded-xl border border-slate-200 bg-slate-50 p-5">
                    <h3 className="text-xl font-bold mb-3">{scenario.title}</h3>
                    <p className="text-slate-600 mb-3">Problem: {scenario.pain}</p>
                    <p className="font-semibold text-slate-900">Lattice path: {scenario.lattice}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-emerald-50 border border-emerald-100 rounded-2xl p-8">
              <h2 className="text-3xl font-bold mb-4">Early-access offer: €49 subscription invoice workflow review</h2>
              <p className="text-slate-700 leading-relaxed mb-5">
                Send your store URL, country, current subscription plugin, invoice plugin, VAT/BTW field status, failed-renewal process, credit-note/refund workflow, and accounting export needs. The goal is to convert those recurring billing headaches into the next Lattice Invoices purchase-ready workflow.
              </p>
              <a href={mailto} className="inline-flex bg-emerald-600 text-white px-7 py-3 rounded-xl font-semibold hover:bg-emerald-700 transition">
                Send my recurring invoice requirements
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
              <h2 className="text-2xl font-bold mb-3">Need recurring VAT invoices without monthly spreadsheet cleanup?</h2>
              <p className="text-slate-600 mb-5">
                Lattice Invoices is focused on EU VAT fields, proformas, final invoice PDFs, renewal-ready metadata, credit notes, customer downloads, and accountant handoff for €49 early access.
              </p>
              <a href={mailto} className="block text-center bg-slate-950 text-white px-5 py-3 rounded-xl font-semibold hover:bg-slate-800 transition mb-3">
                Request early access
              </a>
              <Link href="/docs/woocommerce-eu-vat-invoice-setup" className="block text-center border border-slate-200 px-5 py-3 rounded-xl font-semibold hover:bg-slate-50 transition">
                Read setup guide
              </Link>
            </div>

            <div className="bg-blue-50 rounded-2xl border border-blue-100 p-6">
              <h3 className="text-xl font-bold mb-3">Related invoice guides</h3>
              <ul className="space-y-3 text-blue-900 font-medium">
                <li><Link href="/blog/woocommerce-invoice-due-dates" className="hover:underline">Due dates and payment terms</Link></li>
                <li><Link href="/blog/woocommerce-invoice-payment-reminders" className="hover:underline">Payment reminder workflow</Link></li>
                <li><Link href="/blog/woocommerce-partial-payment-invoices" className="hover:underline">Partial payment invoices</Link></li>
                <li><Link href="/blog/woocommerce-invoice-export-accounting" className="hover:underline">Accounting export handoff</Link></li>
              </ul>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}
