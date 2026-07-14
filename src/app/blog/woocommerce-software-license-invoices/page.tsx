import type { Metadata } from "next";
import Link from "next/link";

const SITE_URL = "https://latticeplugins.com";
const SLUG = "/blog/woocommerce-software-license-invoices";

export const metadata: Metadata = {
  title: "WooCommerce Software License Invoices: VAT, renewals, and credit notes",
  description:
    "Buyer-intent checklist for WooCommerce stores selling plugins, themes, SaaS licenses, or downloads that need VAT/BTW invoices, renewal PDFs, license metadata, credit notes, and customer downloads.",
  alternates: {
    canonical: `${SITE_URL}${SLUG}`,
  },
  openGraph: {
    title: "WooCommerce software license invoices",
    description:
      "A practical invoice workflow checklist for WooCommerce software sellers: VAT fields, license/order metadata, renewal invoices, refunds, credit notes, PDFs, and accountant export.",
    url: `${SITE_URL}${SLUG}`,
    siteName: "Lattice Plugins",
    type: "article",
  },
};

const licenseScenarios = [
  {
    title: "One-time plugin or theme license",
    pain: "The customer gets an order email but later needs a VAT invoice with company details, VAT number, software product name, and license reference.",
    better:
      "Capture business billing fields before payment and generate the PDF invoice from the paid WooCommerce order so support does not recreate invoices manually.",
  },
  {
    title: "Annual renewal or support extension",
    pain: "Renewal orders create payments, but finance teams need a clean invoice sequence and a downloadable PDF for each renewal period.",
    better:
      "Attach renewal invoice PDFs to renewal emails, expose every document in My Account, and keep the license/subscription period visible for accounting.",
  },
  {
    title: "Upgrade, downgrade, or plan switch",
    pain: "A license upgrade changes totals, VAT, and entitlement, but the invoice trail is unclear when the customer asks for a corrected document.",
    better:
      "Store invoice metadata separately from license entitlement and issue credit notes or adjustment documents for refunds and plan changes.",
  },
  {
    title: "Agency buying licenses for clients",
    pain: "The payer, license owner, and invoice recipient can be different people. A basic PDF receipt often misses PO/reference and invoice-email details.",
    better:
      "Collect PO/reference and invoice email fields at checkout so the right finance contact receives the PDF without follow-up tickets.",
  },
];

const mustHaveFields = [
  "Company name, VAT/BTW number, invoice email, and PO/reference field before payment",
  "Invoice number, paid date, currency, VAT rate, VAT amount, and gross software license total",
  "Product/license reference: plugin, theme, SaaS plan, renewal period, or support term",
  "Downloadable invoice PDF in My Account plus email attachment on paid orders and renewals",
  "Refund-linked credit note for cancellations, mistaken renewals, failed upgrades, or partial refunds",
  "Accounting export fields that separate tax evidence from license activation metadata",
];

const decisionRows = [
  {
    signal: "B2B buyers request VAT/BTW invoices for plugin or SaaS licenses",
    fit: "Strong fit",
    action: "Prioritize checkout VAT fields and PDF delivery before adding more sales pages.",
  },
  {
    signal: "Renewals or support extensions create repeat invoice requests",
    fit: "Strong fit",
    action: "Require renewal invoice PDFs and My Account document access before relying on the workflow.",
  },
  {
    signal: "Refunds, upgrades, or plan switches happen monthly",
    fit: "Medium fit",
    action: "Check credit-note and correction handling so the original invoice is not overwritten.",
  },
  {
    signal: "Only low-volume consumer downloads need simple receipts",
    fit: "Wait",
    action: "Use the setup guide first and request early access once invoice admin becomes recurring.",
  },
];

const earlyAccessFields = [
  "Store URL and country",
  "Software products sold: plugins, themes, SaaS plans, renewals, support, or downloads",
  "License model: one-time, subscription, renewal, seat-based, or agency/client licenses",
  "Monthly invoice corrections, lost PDFs, VAT-number follow-ups, or refund credit notes",
  "Required invoice fields: VAT/BTW, PO number, invoice email, license ID, renewal period",
  "Current invoice/PDF plugin and what still creates support work",
];

const faqs = [
  {
    q: "Do WooCommerce software license stores need a dedicated invoice workflow?",
    a: "If the store sells to EU businesses, agencies, or finance teams, a basic order receipt is often not enough. Buyers may need VAT/BTW details, company fields, renewal invoices, license references, credit notes, and downloadable PDFs.",
  },
  {
    q: "Should license keys appear on the invoice PDF?",
    a: "Usually the invoice should show a clear software product, plan, or license reference, while sensitive license keys remain in the customer account or license email. The invoice workflow should avoid exposing secret keys unnecessarily.",
  },
  {
    q: "How should renewal invoices work?",
    a: "Renewals should create their own invoice PDFs with sequential invoice numbers, renewal period metadata, paid date, VAT totals, and customer download links. Customers should not need to email support for each renewal document.",
  },
  {
    q: "Where does Lattice Invoices fit?",
    a: "Lattice Invoices is the €49 early-access WooCommerce invoice path being shaped around VAT/BTW checkout fields, invoice PDFs, customer downloads, credit notes, and accountant-ready order metadata for EU stores.",
  },
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "WooCommerce software license invoices: VAT, renewals, and credit notes",
  description:
    "A buyer-intent checklist for WooCommerce software sellers that need VAT/BTW fields, license metadata, renewal invoice PDFs, credit notes, downloads, and accountant export.",
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
  mainEntity: faqs.map((item) => ({
    "@type": "Question",
    name: item.q,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.a,
    },
  })),
};

const mailto =
  "mailto:support@latticeplugins.com?subject=WooCommerce%20software%20license%20invoice%20workflow%20review&body=Hi%20Lattice%2C%0A%0AI%20want%20a%20WooCommerce%20software%20license%20invoice%20workflow%20review%20for%20Lattice%20Invoices%20early%20access.%0A%0AStore%20URL%3A%20%0ACountry%3A%20%0ASoftware%20products%20sold%3A%20%0ALicense%20model%20(one-time%2C%20subscription%2C%20renewal)%3A%20%0AB2B%20or%20B2C%3A%20%0ACurrent%20invoice%20plugin%3A%20%0AVAT%2FBTW%20fields%20needed%3A%20%0ARenewal%20invoice%20needs%3A%20%0ACredit-note%20needs%3A%20";

export default function WooCommerceSoftwareLicenseInvoicesPage() {
  return (
    <main className="min-h-screen bg-slate-50">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <section className="bg-gradient-to-br from-slate-950 via-indigo-950 to-blue-900 text-white">
        <div className="max-w-5xl mx-auto px-6 py-16 lg:py-20">
          <p className="uppercase tracking-[0.3em] text-sm text-blue-200 mb-4">Software license invoice workflow</p>
          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
            WooCommerce software sellers need VAT invoices for licenses, renewals, upgrades, and refunds.
          </h1>
          <p className="text-xl text-blue-50 leading-relaxed max-w-3xl mb-8">
            If you sell plugins, themes, SaaS plans, downloads, or support renewals with WooCommerce, invoice admin can turn into support debt. Use this buyer checklist to qualify VAT/BTW fields, renewal invoice PDFs, customer downloads, credit notes, and license-safe metadata before buying an invoice plugin.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href={mailto} className="bg-green-400 text-slate-950 px-8 py-4 rounded-xl font-semibold hover:bg-green-300 transition shadow-lg text-center">
              Request €49 software invoice review
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
              <h2 className="text-3xl font-bold mb-4">Why software license stores hit invoice friction</h2>
              <p className="text-slate-700 leading-relaxed mb-4">
                Digital products look simple until the buyer is a business, an agency, or a finance department. The order may be paid instantly, but the invoice still needs company details, VAT/BTW evidence, renewal period, payment method, and a PDF the customer can find later.
              </p>
              <p className="text-slate-700 leading-relaxed">
                Lattice Invoices is positioned around that operational gap: keep WooCommerce orders, tax totals, customer billing fields, invoice PDFs, credit notes, and license-safe references connected so software sellers can reduce post-purchase support work.
              </p>
            </div>

            <div className="grid gap-4">
              {licenseScenarios.map((item) => (
                <div key={item.title} className="bg-white rounded-2xl border shadow-sm p-6">
                  <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                  <p className="text-sm font-semibold text-red-600 mb-2">Where the weak setup breaks</p>
                  <p className="text-slate-700 leading-relaxed mb-4">{item.pain}</p>
                  <p className="text-sm font-semibold text-green-700 mb-2">What the invoice workflow should do</p>
                  <p className="text-slate-700 leading-relaxed">{item.better}</p>
                </div>
              ))}
            </div>

            <div className="bg-blue-50 border border-blue-100 rounded-2xl p-8">
              <h2 className="text-3xl font-bold mb-5">Software license invoice must-haves</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {mustHaveFields.map((item) => (
                  <div key={item} className="bg-white rounded-xl border border-blue-100 p-4 flex gap-3">
                    <span className="text-blue-700 font-bold">✓</span>
                    <span className="text-slate-800">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-2xl border shadow-sm p-8 overflow-hidden">
              <h2 className="text-3xl font-bold mb-5">Should a software seller request early access?</h2>
              <div className="overflow-x-auto">
                <table className="min-w-full text-left border-collapse">
                  <thead>
                    <tr className="border-b bg-slate-50">
                      <th className="p-4 font-semibold">Store signal</th>
                      <th className="p-4 font-semibold">Fit</th>
                      <th className="p-4 font-semibold">Best next action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {decisionRows.map((row) => (
                      <tr key={row.signal} className="border-b last:border-b-0 align-top">
                        <td className="p-4 text-slate-700">{row.signal}</td>
                        <td className="p-4 font-bold text-blue-700">{row.fit}</td>
                        <td className="p-4 text-slate-700">{row.action}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div className="bg-slate-950 text-white rounded-2xl p-8">
              <h2 className="text-3xl font-bold mb-4">Copy this into the early-access email</h2>
              <p className="text-slate-200 leading-relaxed mb-5">
                A software-license invoice request should mention renewal and refund workflows, not only PDF styling. Send these details so the €49 Lattice Invoices path can be checked against the store before purchase.
              </p>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-6">
                {earlyAccessFields.map((item) => (
                  <li key={item} className="bg-white/10 border border-white/10 rounded-xl p-4 flex gap-3">
                    <span className="text-green-300 font-bold">✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <a href={mailto} className="inline-flex bg-green-400 text-slate-950 px-6 py-3 rounded-xl font-semibold hover:bg-green-300 transition">
                Send software invoice fit request
              </a>
            </div>

            <div className="bg-white rounded-2xl border shadow-sm p-8">
              <h2 className="text-3xl font-bold mb-5">FAQ</h2>
              <div className="space-y-5">
                {faqs.map((item) => (
                  <div key={item.q}>
                    <h3 className="text-xl font-bold mb-2">{item.q}</h3>
                    <p className="text-slate-700 leading-relaxed">{item.a}</p>
                  </div>
                ))}
              </div>
            </div>
          </article>

          <aside className="space-y-4">
            <div className="bg-white rounded-2xl border shadow-sm p-6 sticky top-6">
              <p className="text-sm uppercase tracking-[0.25em] text-blue-600 font-semibold mb-3">Lattice Invoices path</p>
              <h2 className="text-2xl font-bold mb-3">€49 early-access fit check</h2>
              <p className="text-slate-700 leading-relaxed mb-5">
                Best for WooCommerce software sellers that already feel invoice support pain: missing VAT fields, renewal PDFs, correction requests, refund credit notes, and accountant handoff.
              </p>
              <div className="space-y-3">
                <a href={mailto} className="block text-center bg-blue-600 text-white px-5 py-3 rounded-xl font-semibold hover:bg-blue-700 transition">
                  Request software invoice review
                </a>
                <Link href="/tools/woocommerce-invoice-setup-brief" className="block text-center bg-slate-950 text-white px-5 py-3 rounded-xl font-semibold hover:bg-slate-800 transition">
                  Generate setup brief
                </Link>
                <Link href="/tools/woocommerce-invoice-roi-calculator" className="block text-center bg-green-50 border border-green-200 text-green-800 px-5 py-3 rounded-xl font-semibold hover:border-green-500 transition">
                  Calculate invoice ROI
                </Link>
                <Link href="/demo/lattice-invoices" className="block text-center border border-slate-200 px-5 py-3 rounded-xl font-semibold hover:border-blue-400 transition">
                  View invoice workflow demo
                </Link>
              </div>
            </div>

            <div className="bg-white rounded-2xl border shadow-sm p-6">
              <h2 className="text-xl font-bold mb-4">Related invoice guides</h2>
              <div className="space-y-3 text-blue-700 font-semibold">
                <Link className="block hover:text-blue-500" href="/blog/woocommerce-recurring-invoices-subscriptions">Recurring invoices for subscriptions</Link>
                <Link className="block hover:text-blue-500" href="/blog/woocommerce-digital-product-vat-invoices">Digital product VAT invoices</Link>
                <Link className="block hover:text-blue-500" href="/blog/woocommerce-invoice-plugin-for-saas">SaaS invoice workflow</Link>
                <Link className="block hover:text-blue-500" href="/blog/woocommerce-invoice-plugin-for-online-courses">Online course invoices</Link>
                <Link className="block hover:text-blue-500" href="/docs/woocommerce-eu-vat-invoice-setup">EU VAT invoice setup guide</Link>
              </div>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}
