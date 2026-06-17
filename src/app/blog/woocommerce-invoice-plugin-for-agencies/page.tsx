import type { Metadata } from "next";
import Link from "next/link";

const SITE_URL = "https://latticeplugins.com";

export const metadata: Metadata = {
  title: "WooCommerce invoice plugin for agencies managing EU stores",
  description:
    "A buyer-intent guide for WordPress agencies that need repeatable WooCommerce invoice, VAT/BTW, credit-note, customer download, and accountant handoff workflows for EU clients.",
  alternates: {
    canonical: `${SITE_URL}/blog/woocommerce-invoice-plugin-for-agencies`,
  },
  openGraph: {
    title: "WooCommerce invoice plugin for agencies managing EU stores",
    description:
      "A practical agency checklist for choosing a WooCommerce invoice workflow that can be reused across EU VAT clients.",
    url: `${SITE_URL}/blog/woocommerce-invoice-plugin-for-agencies`,
    siteName: "Lattice Plugins",
    type: "article",
  },
};

const agencyPain = [
  "Every client has a slightly different VAT/BTW checkout-field request",
  "Invoice PDF plugins get configured differently per build and become hard to support",
  "Clients ask for missing invoices, resend buttons, credit notes, and accountant exports after launch",
  "B2B customers need VAT IDs, PO references, invoice email fields, and reverse-charge wording",
  "Support time grows when invoice numbers, refunds, and PDF delivery are not standardized",
];

const repeatableWorkflow = [
  {
    step: "Discovery",
    detail:
      "Ask whether the store sells B2B, B2C, subscriptions, digital products, bank-transfer orders, or cross-border EU orders before selecting invoice settings.",
  },
  {
    step: "Checkout fields",
    detail:
      "Standardize company name, VAT/BTW number, invoice email, PO reference, and optional buyer notes so client data is captured before payment.",
  },
  {
    step: "Invoice trigger",
    detail:
      "Decide whether final invoices are issued on processing, completed, or paid status. Keep proforma and final invoice timing separate for bank-transfer clients.",
  },
  {
    step: "Refund path",
    detail:
      "Create credit notes from refunds instead of editing old invoice PDFs. Keep the original invoice number visible in the audit trail.",
  },
  {
    step: "Handoff",
    detail:
      "Document invoice-number format, VAT evidence fields, PDF email attachments, customer downloads, and accountant export expectations before launch.",
  },
];

const comparisonRows = [
  ["Client onboarding", "Rebuild invoice settings from scratch per client", "Use the same VAT/invoice checklist for every EU WooCommerce store"],
  ["Support tickets", "Customers email the agency or client for missing PDFs", "Invoice PDFs live in customer emails and My Account downloads"],
  ["Refunds", "Manual PDF edits or accountant-side corrections", "Credit-note workflow linked to WooCommerce refunds"],
  ["VAT data", "Field snippets and notes differ per project", "Order-level VAT/BTW fields are part of the invoice workflow"],
  ["Launch QA", "Only checkout payment is tested", "Invoice numbers, attachments, downloads, and refund docs are tested before handoff"],
];

const qaChecks = [
  "Place a test B2B order with company name, VAT/BTW number, invoice email, and PO reference",
  "Confirm the processing/completed order email contains the right PDF invoice attachment",
  "Open My Account as the customer and verify the invoice download is visible and private",
  "Refund the test order and verify the credit note has its own number and references the original invoice",
  "Export or inspect order metadata for invoice number, invoice date, VAT number, VAT amount, and country",
  "Document the exact invoice-number format and trigger for the client handoff notes",
];

const faqs = [
  {
    q: "Why should agencies care about invoice workflows before checkout goes live?",
    a: "Because payment success is not the end of a B2B order. Clients still need VAT evidence, invoice PDFs, customer downloads, refund documents, and support-ready resend workflows after launch.",
  },
  {
    q: "Is this only for Dutch agencies?",
    a: "No. The checklist is useful for any agency building EU WooCommerce stores, but it explicitly includes Dutch BTW language because many Dutch webshops search for BTW factuur plugin solutions.",
  },
  {
    q: "Can agencies use Lattice Invoices for multiple clients?",
    a: "The early-access path is intended to qualify real store workflows first. Agencies should send the number of WooCommerce client stores, countries, VAT requirements, and whether a repeatable agency license is needed.",
  },
  {
    q: "What is the fastest way to qualify a client?",
    a: "Send the client store URL, country, B2B/B2C mix, payment methods, invoice-number format, VAT fields, and whether credit notes and accountant exports are required.",
  },
];

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "WooCommerce invoice plugin for agencies managing EU stores",
  description:
    "A practical agency checklist for standardizing WooCommerce EU VAT invoice workflows across client stores.",
  mainEntityOfPage: `${SITE_URL}/blog/woocommerce-invoice-plugin-for-agencies`,
  publisher: {
    "@type": "Organization",
    name: "Lattice Plugins",
    url: SITE_URL,
  },
};

const mailto =
  "mailto:support@latticeplugins.com?subject=Lattice%20Invoices%20agency%20early%20access&body=Hi%20Lattice%2C%0A%0AI%20build%20or%20manage%20WooCommerce%20stores%20and%20want%20to%20test%20Lattice%20Invoices%20for%20EU%20VAT%20client%20workflows.%0A%0AAgency%20URL%3A%20%0ANumber%20of%20WooCommerce%20clients%3A%20%0ACountries%3A%20%0AB2B%20invoice%20requirements%3A%20%0AVAT%2FBTW%20fields%20needed%3A%20%0ACredit%20notes%20needed%3A%20%0AAccounting%20handoff%20needed%3A%20";

export default function WooCommerceInvoicePluginForAgenciesPage() {
  return (
    <main className="min-h-screen bg-slate-50">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />

      <section className="bg-gradient-to-br from-slate-950 via-indigo-950 to-blue-900 text-white">
        <div className="max-w-5xl mx-auto px-6 py-16 lg:py-20">
          <p className="uppercase tracking-[0.3em] text-sm text-blue-200 mb-4">Agency invoice workflow</p>
          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
            WooCommerce invoice plugin checklist for agencies managing EU client stores.
          </h1>
          <p className="text-xl text-blue-50 leading-relaxed max-w-3xl mb-8">
            If you build WooCommerce stores for EU clients, invoice setup should be a repeatable launch workflow — not a custom rescue job after the first B2B customer asks for a corrected VAT invoice.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href={mailto} className="bg-green-500 text-white px-8 py-4 rounded-xl font-semibold hover:bg-green-400 transition shadow-lg text-center">
              Request agency early access
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
              <h2 className="text-3xl font-bold mb-4">The agency problem: invoice support does not end at launch</h2>
              <p className="text-slate-700 leading-relaxed mb-4">
                Most WooCommerce builds test checkout, shipping, and confirmation emails. EU B2B invoice requirements often get discovered later: missing VAT fields, incorrect invoice numbers, no customer download area, or refunds without credit notes.
              </p>
              <p className="text-slate-700 leading-relaxed">
                That creates low-margin support work for agencies. A reusable invoice workflow lets the agency sell a cleaner handoff: B2B checkout fields, invoice PDFs, credit notes, customer downloads, and accountant-ready order evidence.
              </p>
            </div>

            <div className="bg-white rounded-2xl border shadow-sm p-8">
              <h2 className="text-3xl font-bold mb-6">Signals that your client needs an invoice workflow</h2>
              <div className="space-y-3">
                {agencyPain.map((item) => (
                  <div key={item} className="flex gap-3 rounded-xl bg-blue-50 border border-blue-100 p-4">
                    <span className="text-blue-700 font-bold">→</span>
                    <span className="text-slate-800">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-2xl border shadow-sm p-8">
              <p className="text-sm uppercase tracking-[0.25em] text-green-700 font-semibold mb-2">Repeatable process</p>
              <h2 className="text-3xl font-bold mb-6">A better agency handoff for WooCommerce invoices</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {repeatableWorkflow.map((item) => (
                  <div key={item.step} className="rounded-xl border border-slate-200 bg-slate-50 p-5">
                    <h3 className="font-bold text-lg mb-2">{item.step}</h3>
                    <p className="text-slate-700 leading-relaxed">{item.detail}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-2xl border shadow-sm p-8 overflow-hidden">
              <h2 className="text-3xl font-bold mb-4">One-off invoice setup vs. reusable agency workflow</h2>
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-slate-100 text-slate-700">
                      <th className="p-4 rounded-l-xl">Area</th>
                      <th className="p-4">One-off setup</th>
                      <th className="p-4 rounded-r-xl">Reusable workflow</th>
                    </tr>
                  </thead>
                  <tbody>
                    {comparisonRows.map(([area, oneOff, reusable]) => (
                      <tr key={area} className="border-b border-slate-100">
                        <td className="p-4 font-semibold text-slate-900">{area}</td>
                        <td className="p-4 text-slate-600">{oneOff}</td>
                        <td className="p-4 text-slate-800">{reusable}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div className="bg-white rounded-2xl border shadow-sm p-8">
              <h2 className="text-3xl font-bold mb-6">Agency launch QA checklist</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {qaChecks.map((check) => (
                  <div key={check} className="flex gap-3 p-4 rounded-xl bg-green-50 border border-green-100">
                    <span className="text-green-700 font-bold">✓</span>
                    <span className="text-slate-800">{check}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-2xl border shadow-sm p-8">
              <h2 className="text-3xl font-bold mb-6">FAQ for agencies</h2>
              <div className="space-y-5">
                {faqs.map((faq) => (
                  <div key={faq.q}>
                    <h3 className="font-semibold text-lg mb-2">{faq.q}</h3>
                    <p className="text-slate-700 leading-relaxed">{faq.a}</p>
                  </div>
                ))}
              </div>
            </div>
          </article>

          <aside className="space-y-6">
            <div className="bg-white rounded-2xl border shadow-sm p-6 sticky top-6">
              <div className="rounded-2xl bg-slate-900 text-white p-5 mb-6">
                <p className="text-sm uppercase tracking-widest text-blue-200 mb-2">Agency early access</p>
                <div className="text-4xl font-bold mb-2">€49</div>
                <p className="text-sm text-slate-200 leading-relaxed">
                  Qualify a real client invoice workflow now; request agency licensing needs in the same email.
                </p>
              </div>
              <h2 className="text-2xl font-bold mb-3">What to send</h2>
              <ul className="space-y-2 mb-5 text-sm text-slate-700">
                <li>✓ Agency URL and number of WooCommerce clients</li>
                <li>✓ Countries and VAT/BTW requirements</li>
                <li>✓ B2B/B2C mix and payment methods</li>
                <li>✓ Invoice-number, credit-note, and accounting export needs</li>
              </ul>
              <a href={mailto} className="block text-center bg-blue-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-blue-700 transition mb-3">
                Request agency early access
              </a>
              <Link href="/docs/woocommerce-eu-vat-invoice-setup" className="block text-center border border-slate-200 px-6 py-3 rounded-xl font-semibold hover:border-blue-400 transition mb-3">
                Read setup guide
              </Link>
              <Link href="/blog/woocommerce-invoice-plugin-comparison" className="block text-center border border-slate-200 px-6 py-3 rounded-xl font-semibold hover:border-blue-400 transition mb-3">
                Compare invoice plugin requirements
              </Link>
              <Link href="/blog/woocommerce-btw-factuur-plugin-nederland" className="block text-center border border-slate-200 px-6 py-3 rounded-xl font-semibold hover:border-blue-400 transition mb-3">
                Dutch BTW invoice guide
              </Link>
              <Link href="/woocommerce-eu-vat-invoices" className="block text-center border border-slate-200 px-6 py-3 rounded-xl font-semibold hover:border-blue-400 transition">
                View Lattice Invoices offer
              </Link>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}
