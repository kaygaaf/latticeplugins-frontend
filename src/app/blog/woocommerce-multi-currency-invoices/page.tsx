import type { Metadata } from "next";
import Link from "next/link";

const SITE_URL = "https://latticeplugins.com";

export const metadata: Metadata = {
  title: "WooCommerce Multi-Currency Invoices — EU VAT & Accounting Workflow",
  description:
    "A practical buyer guide for WooCommerce stores selling in multiple currencies that need EUR accounting totals, VAT evidence, exchange-rate notes, invoice PDFs, and credit notes.",
  alternates: {
    canonical: `${SITE_URL}/blog/woocommerce-multi-currency-invoices`,
  },
  openGraph: {
    title: "WooCommerce multi-currency invoices for EU VAT stores",
    description:
      "How WooCommerce stores can keep multi-currency orders invoice-ready: exchange rates, EUR accounting totals, VAT/BTW fields, PDF delivery, refunds, and accountant export.",
    url: `${SITE_URL}/blog/woocommerce-multi-currency-invoices`,
    siteName: "Lattice Plugins",
    type: "article",
  },
};

const readinessChecklist = [
  "Invoice shows the customer-facing order currency, the store/base currency, and the exchange-rate source used at purchase time",
  "VAT/BTW number, company name, billing country, exemption reason, and reverse-charge wording are preserved alongside the currency metadata",
  "Accountant export includes invoice number, payment currency, base-currency taxable amount, VAT amount, refund/credit-note links, and PDF URL",
  "Refunds and partial refunds create credit notes with the same currency and exchange-rate evidence as the original invoice",
  "Rounding differences are visible before the invoice is locked, not discovered during month-end reconciliation",
  "Customer emails and My Account downloads expose the same PDF invoice packet that the accountant receives",
];

const workflowRows = [
  ["Checkout", "Customer pays in GBP, USD, CHF, or another display currency", "Store the chosen currency, rate source, converted taxable total, VAT total, and billing country on the order before invoicing."],
  ["Invoice generation", "Finance needs an audit-ready PDF", "Show customer currency for clarity and base-currency totals for bookkeeping, with rate/date notes and VAT evidence."],
  ["Reverse charge", "EU B2B customer pays in a non-EUR currency", "Keep VAT ID, country, exemption reason, reverse-charge wording, and converted totals in the same invoice record."],
  ["Refund or credit note", "Order is refunded after the rate has moved", "Generate a credit note linked to the original invoice, using the documented order-time rate or a clear adjustment policy."],
  ["Accounting handoff", "Bookkeeper imports the month", "Export invoice number, customer currency, base currency, exchange rate, VAT fields, payment state, credit-note references, and PDF URL."],
];

const scenarios = [
  {
    title: "EU store selling to UK buyers",
    pain: "Orders are paid in GBP, but the accountant books revenue and VAT evidence in EUR. Manual conversion notes slow every month-end close.",
    lattice: "Capture GBP order values, EUR base totals, rate source, VAT evidence, and invoice PDF links as one exportable packet.",
  },
  {
    title: "B2B reverse charge in another currency",
    pain: "A German store sells to a Dutch company in USD. The invoice must prove why VAT is 0% and which converted amount was booked.",
    lattice: "Keep VAT ID, billing country, reverse-charge wording, customer currency, base-currency total, and rate timestamp together.",
  },
  {
    title: "Refund after rate movement",
    pain: "The refund happens weeks later and the exchange rate changed. The credit note no longer matches the original invoice trail.",
    lattice: "Link the credit note to the locked invoice, reuse or document the original rate policy, and expose both PDFs to the accountant.",
  },
];

const faq = [
  {
    q: "Does WooCommerce handle multi-currency invoice accounting by default?",
    a: "WooCommerce can store order totals and many multi-currency plugins can display alternative currencies, but audit-ready invoice PDFs, base-currency accounting totals, exchange-rate notes, VAT evidence, credit-note links, and export fields usually require a dedicated invoice workflow.",
  },
  {
    q: "Should a WooCommerce invoice show customer currency or base currency?",
    a: "Many stores need both: the customer-facing currency for clarity and the store/base currency for bookkeeping. The exact layout should be confirmed with your accountant, especially for VAT and exchange-rate rules.",
  },
  {
    q: "What fields matter most for multi-currency VAT invoices?",
    a: "Track invoice number, order currency, base currency, exchange rate, exchange-rate date/source, taxable amount, VAT amount, VAT/BTW number, billing country, exemption or reverse-charge reason, payment state, credit-note references, and PDF URL.",
  },
  {
    q: "How does Lattice Invoices fit multi-currency stores?",
    a: "The early-access focus is to turn messy WooCommerce invoice workflows into predictable packets: VAT metadata, invoice PDFs, credit notes, due dates, customer downloads, base-currency export, and accountant-ready handoff.",
  },
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "WooCommerce multi-currency invoices for EU VAT stores",
  description:
    "A buyer-intent guide for WooCommerce stores that need multi-currency invoice PDFs, exchange-rate evidence, base-currency accounting totals, VAT fields, credit notes, and accounting export.",
  mainEntityOfPage: `${SITE_URL}/blog/woocommerce-multi-currency-invoices`,
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
  "mailto:support@latticeplugins.com?subject=Lattice%20Invoices%20multi-currency%20invoice%20workflow%20early%20access&body=Hi%20Lattice%2C%0A%0AI%20need%20WooCommerce%20multi-currency%20invoice%20support.%0A%0AStore%20URL%3A%20%0ACountry%3A%20%0ACurrencies%20sold%20in%3A%20%0ABase%20accounting%20currency%3A%20%0ACurrent%20multi-currency%20plugin%3A%20%0ACurrent%20invoice%20plugin%3A%20%0AVAT%2FBTW%20field%20present%3A%20%0ARefund%2Fcredit-note%20workflow%3A%20%0AAccounting%20export%20needs%3A%20";

export default function WooCommerceMultiCurrencyInvoicesPage() {
  return (
    <main className="min-h-screen bg-slate-50">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <section className="bg-gradient-to-br from-slate-950 via-indigo-950 to-blue-900 text-white">
        <div className="max-w-5xl mx-auto px-6 py-16 lg:py-20">
          <p className="uppercase tracking-[0.3em] text-sm text-blue-200 mb-4">WooCommerce multi-currency invoice workflow</p>
          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
            WooCommerce multi-currency invoices: keep VAT, exchange rates, and accounting totals together.
          </h1>
          <p className="text-xl text-blue-50 leading-relaxed max-w-3xl mb-8">
            Multi-currency orders create invoice risk fast: the customer sees one currency, the accountant books another, VAT evidence lives in checkout fields, and refunds arrive after rates change. The invoice workflow has to preserve all of it.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href={mailto} className="bg-blue-500 text-white px-8 py-4 rounded-xl font-semibold hover:bg-blue-400 transition shadow-lg text-center">
              Request multi-currency invoice early access
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
              <h2 className="text-3xl font-bold mb-4">The multi-currency invoice problem</h2>
              <p className="text-slate-700 leading-relaxed mb-4">
                A single-currency invoice can usually be checked by eye. A multi-currency WooCommerce store needs a stronger trail: order currency, base currency, VAT treatment, exchange-rate evidence, PDF delivery, refunds, and export columns that match the bookkeeper's expectations.
              </p>
              <p className="text-slate-700 leading-relaxed">
                Lattice Invoices is being positioned around that commercial pain: reduce month-end spreadsheet cleanup for EU WooCommerce stores that sell cross-border and need cleaner invoice packets for customers and accountants.
              </p>
            </div>

            <div className="bg-white rounded-2xl border shadow-sm p-8">
              <h2 className="text-3xl font-bold mb-6">Multi-currency invoice readiness checklist</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {readinessChecklist.map((item) => (
                  <div key={item} className="flex gap-3 p-4 rounded-xl bg-slate-50 border border-slate-100">
                    <span className="text-blue-600 font-bold">✓</span>
                    <span className="text-slate-800">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-2xl border shadow-sm p-8 overflow-hidden">
              <h2 className="text-3xl font-bold mb-4">Currency-to-accounting workflow map</h2>
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
              <h2 className="text-3xl font-bold mb-6">Common multi-currency invoice blockers</h2>
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

            <div className="bg-blue-50 border border-blue-100 rounded-2xl p-8">
              <h2 className="text-3xl font-bold mb-4">Early-access offer: €49 multi-currency invoice workflow review</h2>
              <p className="text-slate-700 leading-relaxed mb-5">
                Send your store URL, country, currencies sold in, base accounting currency, current multi-currency plugin, invoice plugin, VAT/BTW field status, refund workflow, and accounting export needs. The goal is to turn that into a purchase-ready Lattice Invoices workflow instead of another spreadsheet.
              </p>
              <a href={mailto} className="inline-flex bg-blue-600 text-white px-7 py-3 rounded-xl font-semibold hover:bg-blue-700 transition">
                Send my multi-currency invoice requirements
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
              <p className="text-sm uppercase tracking-[0.2em] text-blue-700 font-semibold mb-3">Lattice Invoices early access</p>
              <h2 className="text-2xl font-bold mb-3">Need multi-currency VAT invoices without month-end spreadsheet cleanup?</h2>
              <p className="text-slate-600 mb-5">
                Lattice Invoices is focused on EU VAT fields, base-currency export, proformas, final invoice PDFs, credit notes, customer downloads, and accountant handoff for €49 early access.
              </p>
              <a href={mailto} className="block text-center bg-slate-950 text-white px-5 py-3 rounded-xl font-semibold hover:bg-slate-800 transition mb-3">
                Request early access
              </a>
              <Link href="/docs/woocommerce-eu-vat-invoice-setup" className="block text-center border border-slate-200 px-5 py-3 rounded-xl font-semibold hover:bg-slate-50 transition">
                Read setup guide
              </Link>
            </div>

            <div className="bg-indigo-50 rounded-2xl border border-indigo-100 p-6">
              <h3 className="text-xl font-bold mb-3">Related invoice guides</h3>
              <ul className="space-y-3 text-indigo-900 font-medium">
                <li><Link href="/blog/woocommerce-vat-exempt-invoices" className="hover:underline">VAT exempt invoices</Link></li>
                <li><Link href="/blog/woocommerce-reverse-charge-invoices" className="hover:underline">Reverse-charge invoice workflow</Link></li>
                <li><Link href="/blog/woocommerce-credit-notes-refunds" className="hover:underline">Credit notes and refunds</Link></li>
                <li><Link href="/blog/woocommerce-invoice-export-accounting" className="hover:underline">Accounting export handoff</Link></li>
              </ul>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}
