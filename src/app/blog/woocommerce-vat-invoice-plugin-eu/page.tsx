import type { Metadata } from "next";
import Link from "next/link";

const SITE_URL = "https://latticeplugins.com";

export const metadata: Metadata = {
  title: "Best WooCommerce EU VAT Invoice Plugin Checklist — Lattice Plugins",
  description:
    "A buyer-intent checklist for choosing a WooCommerce EU VAT invoice plugin: VAT/BTW fields, invoice PDFs, credit notes, customer downloads, email attachments, and pricing.",
  alternates: {
    canonical: `${SITE_URL}/blog/woocommerce-vat-invoice-plugin-eu`,
  },
  openGraph: {
    title: "Best WooCommerce EU VAT Invoice Plugin Checklist",
    description:
      "Compare what EU WooCommerce stores need from an invoice plugin before buying: VAT fields, PDFs, credit notes, downloads, emails, and support.",
    url: `${SITE_URL}/blog/woocommerce-vat-invoice-plugin-eu`,
    siteName: "Lattice Plugins",
    type: "article",
  },
};

const requirements = [
  {
    title: "VAT/BTW fields before payment",
    text: "The plugin should collect company name, VAT number, invoice email, and billing country during checkout so the invoice is correct the first time.",
  },
  {
    title: "Sequential invoice numbering",
    text: "Order IDs alone are not enough for many stores. Look for a locked invoice sequence such as INV-2026-000148 plus a separate invoice date.",
  },
  {
    title: "PDF invoices attached to emails",
    text: "Customers should receive the invoice with the order email automatically. If the store owner has to export PDFs manually, support friction stays high.",
  },
  {
    title: "Credit notes for refunds",
    text: "Refunds should create a linked credit note instead of silently editing the original invoice. That keeps accounting history clear.",
  },
  {
    title: "My Account downloads",
    text: "Business buyers often need an invoice months later. A download link in My Account removes repeat support tickets.",
  },
  {
    title: "WooCommerce tax data reuse",
    text: "The workflow should reuse WooCommerce VAT rates, totals, billing details, refunds, and customer records instead of duplicating data in another tool.",
  },
];

const comparison = [
  ["Checkout VAT number", "Usually missing or stored in notes", "Dedicated order metadata field"],
  ["Invoice PDF", "Manual export after payment", "Generated from paid order data"],
  ["Refund document", "Manual credit note", "Refund-linked credit note"],
  ["Customer retrieval", "Email support request", "My Account download"],
  ["Buying clarity", "Feature list is generic", "EU invoice workflow is the product promise"],
];

const faqs = [
  {
    q: "What is the best WooCommerce invoice plugin for EU VAT stores?",
    a: "The best option is the one that solves the full order workflow: B2B VAT fields before payment, invoice PDF generation, email attachments, customer downloads, credit notes for refunds, and clean WooCommerce tax metadata. This page is the buying checklist behind Lattice Invoices.",
  },
  {
    q: "Do I need a separate VAT number field in WooCommerce checkout?",
    a: "If you sell B2B in the EU, yes. A VAT/BTW field stored as order metadata prevents manual correction emails and helps invoices contain the business details customers expect.",
  },
  {
    q: "Should invoice numbers match WooCommerce order IDs?",
    a: "Not necessarily. Order IDs are internal. Many stores prefer a separate locked invoice sequence with a yearly prefix, invoice date, and credit-note relationship.",
  },
  {
    q: "Can I buy Lattice Invoices today?",
    a: "Lattice Invoices is being qualified as the focused EU invoicing product path. The current CTA is early access so the store's country, B2B/B2C mix, VAT fields, and invoice-number format can be matched before the paid listing is opened.",
  },
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Best WooCommerce EU VAT Invoice Plugin Checklist",
  description:
    "A buyer-intent checklist for choosing a WooCommerce EU VAT invoice plugin with VAT fields, invoice PDFs, credit notes, and customer downloads.",
  author: {
    "@type": "Organization",
    name: "Lattice Plugins",
  },
  publisher: {
    "@type": "Organization",
    name: "Lattice Plugins",
  },
  mainEntityOfPage: `${SITE_URL}/blog/woocommerce-vat-invoice-plugin-eu`,
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

export default function WooCommerceVatInvoicePluginEuArticle() {
  return (
    <main className="min-h-screen bg-slate-50">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <section className="bg-gradient-to-br from-slate-950 via-blue-950 to-indigo-900 text-white">
        <div className="max-w-5xl mx-auto px-6 py-16 lg:py-20">
          <p className="uppercase tracking-[0.3em] text-sm text-blue-200 mb-4">Buyer checklist</p>
          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
            Best WooCommerce EU VAT invoice plugin: what to check before buying.
          </h1>
          <p className="text-xl text-blue-50 leading-relaxed max-w-3xl mb-8">
            If your WooCommerce store sells to EU business customers, invoice friction is not a small admin issue.
            Use this checklist to choose a plugin workflow that collects VAT details before payment, sends invoice PDFs,
            handles credit notes, and keeps customers from emailing support.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/woocommerce-eu-vat-invoices"
              className="bg-green-500 text-white px-8 py-4 rounded-xl font-semibold hover:bg-green-400 transition shadow-lg text-center"
            >
              View Lattice Invoices path
            </Link>
            <Link
              href="/docs/woocommerce-eu-vat-invoice-setup"
              className="bg-white/10 border border-white/20 text-white px-8 py-4 rounded-xl font-semibold hover:bg-white/15 transition text-center"
            >
              Read setup guide
            </Link>
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-14">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <article className="lg:col-span-2 space-y-8">
            <div className="bg-white rounded-2xl border shadow-sm p-8">
              <h2 className="text-3xl font-bold mb-4">The buying problem</h2>
              <p className="text-slate-700 leading-relaxed mb-4">
                Many WooCommerce stores can accept payment, but still fail the invoice workflow. The buyer pays,
                then sends a support email because the VAT number is missing, the invoice PDF was not attached,
                or the refund needs a separate credit note.
              </p>
              <p className="text-slate-700 leading-relaxed">
                A good WooCommerce invoice plugin should reduce that support load before it happens. The strongest
                sales path for Lattice is therefore not a generic PDF feature list, but a focused EU VAT/BTW invoice workflow.
              </p>
            </div>

            <div className="bg-white rounded-2xl border shadow-sm p-8">
              <h2 className="text-3xl font-bold mb-6">6 requirements to check before buying</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {requirements.map((item) => (
                  <div key={item.title} className="rounded-xl border border-slate-200 bg-slate-50 p-5">
                    <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                    <p className="text-slate-700 leading-relaxed">{item.text}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-2xl border shadow-sm p-8 overflow-hidden">
              <h2 className="text-3xl font-bold mb-4">Generic invoice plugin vs. EU VAT workflow</h2>
              <p className="text-slate-700 leading-relaxed mb-6">
                This is the comparison a buyer should understand before choosing a plugin or requesting Lattice Invoices early access.
              </p>
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-slate-100 text-slate-700">
                      <th className="p-4 rounded-l-xl">Need</th>
                      <th className="p-4">Generic PDF setup</th>
                      <th className="p-4 rounded-r-xl">EU VAT invoice workflow</th>
                    </tr>
                  </thead>
                  <tbody>
                    {comparison.map(([need, generic, workflow]) => (
                      <tr key={need} className="border-b border-slate-100">
                        <td className="p-4 font-semibold text-slate-900">{need}</td>
                        <td className="p-4 text-slate-600">{generic}</td>
                        <td className="p-4 text-slate-800">{workflow}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div className="bg-blue-600 text-white rounded-2xl shadow-sm p-8">
              <h2 className="text-3xl font-bold mb-4">Lattice Invoices early-access fit</h2>
              <p className="text-blue-50 leading-relaxed mb-6">
                The early-access CTA now asks for the practical details that determine whether the product should be
                opened as a paid listing: store URL, country, B2B/B2C mix, VAT fields, invoice-number format, and refund workflow.
              </p>
              <a
                href="mailto:support@latticeplugins.com?subject=Lattice%20Invoices%20early%20access&body=Hi%20Lattice%2C%0A%0AI%20want%20early%20access%20to%20Lattice%20Invoices.%20My%20WooCommerce%20store%20is%3A%20%0ACountry%3A%20%0AB2B%2FB2C%20mix%3A%20%0ARequired%20VAT%20fields%3A%20%0AInvoice%20number%20format%3A%20%0ACredit%20notes%20needed%3A%20"
                className="inline-flex bg-white text-blue-700 px-6 py-3 rounded-xl font-semibold hover:bg-blue-50 transition"
              >
                Request Lattice Invoices early access
              </a>
            </div>

            <div className="bg-white rounded-2xl border shadow-sm p-8">
              <h2 className="text-3xl font-bold mb-6">FAQ</h2>
              <div className="space-y-5">
                {faqs.map((item) => (
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
              <h2 className="text-2xl font-bold mb-3">Quick decision</h2>
              <p className="text-slate-700 mb-5">
                If a store owner currently fixes invoice details by email, they are the target buyer. Send them to the invoice offer, not the generic shop.
              </p>
              <Link
                href="/woocommerce-eu-vat-invoices"
                className="block text-center bg-blue-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-blue-700 transition mb-3"
              >
                View invoice offer
              </Link>
              <Link
                href="/docs/woocommerce-eu-vat-invoice-setup"
                className="block text-center border border-slate-200 px-6 py-3 rounded-xl font-semibold hover:border-blue-400 transition"
              >
                Setup guide
              </Link>
              <div className="border-t mt-6 pt-6 space-y-3 text-sm text-slate-600">
                <div>✓ Targets buyer-intent invoice searches</div>
                <div>✓ Explains why EU VAT workflow matters</div>
                <div>✓ Pushes qualified prospects to early access</div>
              </div>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}
