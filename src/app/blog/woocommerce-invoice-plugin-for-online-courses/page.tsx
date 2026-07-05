import type { Metadata } from "next";
import Link from "next/link";

const SITE_URL = "https://latticeplugins.com";
const SLUG = "/blog/woocommerce-invoice-plugin-for-online-courses";

export const metadata: Metadata = {
  title: "WooCommerce invoice plugin for online courses and EU VAT",
  description:
    "Buyer-intent checklist for course creators using WooCommerce: VAT/BTW fields, invoice PDFs, customer downloads, refunds, subscription renewals, and accountant export.",
  alternates: {
    canonical: `${SITE_URL}${SLUG}`,
  },
  openGraph: {
    title: "WooCommerce invoice plugin for online courses",
    description:
      "Use this invoice workflow checklist before selling courses, memberships, or downloadable training with WooCommerce in the EU.",
    url: `${SITE_URL}${SLUG}`,
    siteName: "Lattice Plugins",
    type: "article",
  },
};

const requiredFields = [
  "Student or company billing name, billing country, and structured VAT/BTW number when the buyer is a business",
  "Invoice number, invoice date, paid date, payment method, currency, VAT rate, VAT amount, and gross course total",
  "Course, cohort, membership, or subscription reference so support and accounting can identify what the invoice covers",
  "Reverse-charge wording and stored VAT-number evidence for eligible EU B2B course purchases",
  "Downloadable invoice PDF in My Account plus email attachment on paid orders and renewals",
  "Refund-linked credit note for cancelled seats, failed cohorts, partial refunds, and mistaken purchases",
];

const courseScenarios = [
  {
    scenario: "One-off course purchase",
    weak: "The buyer receives only a WooCommerce order email, then asks support for a VAT invoice before expensing the course.",
    better:
      "Generate the paid invoice immediately, attach the PDF to the order email, and store VAT fields against the order for accountant export.",
  },
  {
    scenario: "B2B training seat",
    weak: "A manager buys seats for employees but there is no VAT number, PO reference, or company invoice email on the order.",
    better:
      "Collect company/VAT/PO details at checkout and print them on the invoice PDF before payment is captured.",
  },
  {
    scenario: "Membership or renewal invoice",
    weak: "Renewals create payment records but no consistent invoice PDF sequence for the customer or accountant.",
    better:
      "Issue renewal invoice PDFs with sequential numbers and expose every invoice in My Account.",
  },
  {
    scenario: "Refunded course or cancelled cohort",
    weak: "Refunds reduce the WooCommerce order total but the first invoice is overwritten or manually edited.",
    better:
      "Keep the original invoice and issue a linked credit note with its own number and refund reason.",
  },
];

const buyerChecklist = [
  "Can the plugin collect VAT/BTW numbers before the student pays?",
  "Can invoices be generated automatically for paid course orders and renewals?",
  "Can customers download invoices later without emailing support?",
  "Can refunds create credit notes while preserving the original invoice?",
  "Can accountant export include invoice number, VAT number, course reference, PDF link, and tax treatment?",
  "Can the workflow handle both B2C learners and B2B training buyers without separate manual processes?",
];

const fitSignals = [
  "You sell courses or memberships to EU companies that need invoices for reimbursement or bookkeeping.",
  "You get support emails asking for VAT invoices, company details, invoice corrections, or renewal invoices.",
  "Your accountant asks for VAT IDs, invoice numbers, credit notes, and course revenue exports instead of order screenshots.",
  "You want a one-time plugin license instead of adding another recurring SaaS billing tool just for invoice PDFs.",
];

const faqs = [
  {
    q: "Do online course sellers need a WooCommerce invoice plugin?",
    a: "If the store sells to businesses, EU buyers, memberships, or reimbursed training customers, a dedicated invoice workflow is usually safer than relying on a basic order receipt. VAT fields, invoice numbers, PDFs, downloads, and credit notes all need to be handled consistently.",
  },
  {
    q: "Should course invoices reuse WooCommerce order IDs?",
    a: "A dedicated invoice sequence is cleaner because WooCommerce order IDs include failed, pending, test, and cancelled orders. Course sellers usually want invoice numbers that are easier to audit and share with accountants.",
  },
  {
    q: "What should happen when a student gets refunded?",
    a: "The original invoice should remain available and a linked credit note should be issued for the refund. Overwriting the original PDF makes accountant handoff and audit trails harder.",
  },
  {
    q: "How does Lattice Invoices fit course stores?",
    a: "Lattice Invoices is being positioned for EU WooCommerce stores that need VAT/BTW fields, paid invoice PDFs, renewal invoices, customer downloads, credit notes, and accountant export without a subscription invoice SaaS.",
  },
];

const mailto =
  "mailto:support@latticeplugins.com?subject=Course%20WooCommerce%20invoice%20workflow%20review&body=Hi%20Lattice%2C%0A%0AI%20want%20a%20WooCommerce%20online%20course%20invoice%20workflow%20review%20for%20Lattice%20Invoices%20early%20access.%0A%0AStore%20URL%3A%20%0ACountry%3A%20%0ACourse%20type%20(one-off%2C%20membership%2C%20subscription)%3A%20%0AB2B%20or%20B2C%3A%20%0ACurrent%20invoice%20plugin%3A%20%0AVAT%2FBTW%20fields%20needed%3A%20%0ARenewal%20invoices%20needed%3A%20%0ACredit%20notes%20needed%3A%20%0AAccountant%20export%20needed%3A%20";

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "WooCommerce invoice plugin for online courses and EU VAT",
  description:
    "A buyer-intent invoice workflow checklist for WooCommerce online course stores that need VAT fields, PDFs, renewals, downloads, credit notes, and accountant export.",
  mainEntityOfPage: `${SITE_URL}${SLUG}`,
  publisher: {
    "@type": "Organization",
    name: "Lattice Plugins",
    url: SITE_URL,
  },
};

export default function WooCommerceInvoicePluginForOnlineCoursesPage() {
  return (
    <main className="min-h-screen bg-slate-50">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <section className="bg-gradient-to-br from-slate-950 via-indigo-950 to-blue-900 text-white">
        <div className="max-w-5xl mx-auto px-6 py-16 lg:py-20">
          <p className="uppercase tracking-[0.3em] text-sm text-blue-200 mb-4">Course invoices</p>
          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
            WooCommerce online course stores need VAT invoices, renewal PDFs, and refund credit notes — not just order receipts.
          </h1>
          <p className="text-xl text-blue-50 leading-relaxed max-w-3xl mb-8">
            If you sell courses, memberships, cohorts, or training seats with WooCommerce, your invoice workflow has to cover B2B VAT data, paid invoice PDFs, renewal documents, customer downloads, refunds, and accountant export before support inboxes fill up.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href={mailto} className="bg-blue-500 text-white px-8 py-4 rounded-xl font-semibold hover:bg-blue-400 transition shadow-lg text-center">
              Request course invoice review
            </a>
            <Link href="/woocommerce-eu-vat-invoices" className="bg-white/10 border border-white/20 text-white px-8 py-4 rounded-xl font-semibold hover:bg-white/15 transition text-center">
              View Lattice Invoices offer
            </Link>
          </div>
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-6 py-14">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-12">
          {fitSignals.map((signal) => (
            <div key={signal} className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
              <p className="text-sm uppercase tracking-widest text-blue-600 font-semibold mb-3">Fit signal</p>
              <p className="text-slate-700 leading-relaxed">{signal}</p>
            </div>
          ))}
        </div>

        <div className="bg-white border border-slate-200 rounded-2xl p-8 shadow-sm mb-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Invoice fields a course store should capture</h2>
          <p className="text-slate-600 leading-relaxed mb-6">
            Course purchases are often reimbursed by employers, booked by operations teams, or renewed as memberships. That means the invoice data must be structured before payment, not collected from support emails afterwards.
          </p>
          <ul className="space-y-3">
            {requiredFields.map((field) => (
              <li key={field} className="flex gap-3 text-slate-700">
                <span className="mt-1 h-5 w-5 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center text-xs font-bold">✓</span>
                <span>{field}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="mb-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">Where course invoice workflows break</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {courseScenarios.map((row) => (
              <article key={row.scenario} className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
                <h3 className="text-xl font-bold text-slate-900 mb-4">{row.scenario}</h3>
                <p className="text-sm font-semibold text-red-600 mb-2">Weak setup</p>
                <p className="text-slate-600 mb-4">{row.weak}</p>
                <p className="text-sm font-semibold text-green-600 mb-2">Better setup</p>
                <p className="text-slate-700">{row.better}</p>
              </article>
            ))}
          </div>
        </div>

        <div className="bg-slate-900 text-white rounded-2xl p-8 mb-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
            <div>
              <p className="uppercase tracking-[0.25em] text-sm text-blue-200 mb-3">Buyer checklist</p>
              <h2 className="text-3xl font-bold mb-4">Use this before choosing an invoice plugin for courses</h2>
              <p className="text-slate-200 leading-relaxed">
                A course store can look simple until B2B buyers, renewals, refunds, and accountants are involved. Use these questions to decide whether a PDF-only receipt plugin is enough.
              </p>
            </div>
            <ul className="space-y-3">
              {buyerChecklist.map((item) => (
                <li key={item} className="flex gap-3 text-slate-100">
                  <span className="mt-1 text-blue-300">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <div className="bg-white border border-slate-200 rounded-2xl p-8 shadow-sm">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Recommended Lattice path</h2>
            <p className="text-slate-600 leading-relaxed mb-6">
              If the store sells one-off courses only, start with the setup guide. If it sells B2B seats, memberships, renewals, or reimbursed training, request early access so the invoice workflow can be checked against the store before purchase.
            </p>
            <div className="space-y-3">
              <Link href="/docs/woocommerce-eu-vat-invoice-setup" className="block text-center bg-slate-100 text-slate-900 px-6 py-3 rounded-xl font-semibold hover:bg-slate-200 transition">
                Read setup guide
              </Link>
              <a href={mailto} className="block text-center bg-blue-500 text-white px-6 py-3 rounded-xl font-semibold hover:bg-blue-400 transition">
                Request early access fit check
              </a>
            </div>
          </div>
          <div className="bg-white border border-slate-200 rounded-2xl p-8 shadow-sm">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Related invoice guides</h2>
            <div className="space-y-3 text-blue-700 font-semibold">
              <Link className="block hover:text-blue-500" href="/blog/woocommerce-recurring-invoices-subscriptions">Recurring invoices for subscriptions</Link>
              <Link className="block hover:text-blue-500" href="/blog/woocommerce-digital-product-vat-invoices">Digital product VAT invoices</Link>
              <Link className="block hover:text-blue-500" href="/blog/woocommerce-vat-number-checkout-field">VAT number checkout fields</Link>
              <Link className="block hover:text-blue-500" href="/blog/woocommerce-credit-notes-refunds">Credit notes for refunds</Link>
              <Link className="block hover:text-blue-500" href="/blog/woocommerce-invoice-export-accounting">Invoice export for accounting</Link>
            </div>
          </div>
        </div>

        <div className="bg-white border border-slate-200 rounded-2xl p-8 shadow-sm">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">FAQ</h2>
          <div className="space-y-6">
            {faqs.map((faq) => (
              <div key={faq.q} className="border-b border-slate-100 pb-5 last:border-b-0 last:pb-0">
                <h3 className="text-xl font-bold text-slate-900 mb-2">{faq.q}</h3>
                <p className="text-slate-600 leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
