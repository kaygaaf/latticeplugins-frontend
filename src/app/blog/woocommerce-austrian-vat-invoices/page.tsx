import type { Metadata } from "next";
import Link from "next/link";

const SITE_URL = "https://latticeplugins.com";
const SLUG = "/blog/woocommerce-austrian-vat-invoices";

export const metadata: Metadata = {
  title: "WooCommerce Austrian VAT Invoices: USt Plugin Checklist",
  description:
    "A buyer-intent checklist for WooCommerce stores selling in Austria: USt fields, UID numbers, invoice numbering, reverse charge, credit notes, PDF delivery, and accountant export.",
  alternates: {
    canonical: `${SITE_URL}${SLUG}`,
  },
  openGraph: {
    title: "WooCommerce Austrian VAT invoices for EU stores",
    description:
      "Use this Austrian USt workflow checklist before choosing a WooCommerce invoice plugin for UID fields, PDF delivery, credit notes, reverse charge, and accountant export.",
    url: `${SITE_URL}${SLUG}`,
    siteName: "Lattice Plugins",
    type: "article",
  },
};

const austrianInvoiceFields = [
  "Seller legal name, registered address, Austrian VAT/UID number, contact details, and invoice identity that match accounting records",
  "Customer legal name, billing address, country, UID or EU VAT number, and optional purchase-order or cost-centre reference",
  "Unique invoice number, invoice date, supply date, payment method, currency, net amount, USt rate, VAT amount, and gross total",
  "Small-invoice versus full-invoice workflow rules so low-value B2C receipts do not replace the B2B invoice data your accountant needs",
  "Reverse-charge wording and VAT-number evidence for eligible EU B2B invoices when VAT accounting shifts to the buyer",
  "Credit-note relationship for refunds, corrections, cancellations, partial refunds, and retained original invoice PDFs",
];

const workflowRows = [
  {
    scenario: "Austrian B2C order",
    weakSetup: "WooCommerce sends a receipt email and the store owner only creates a VAT invoice manually when support gets asked.",
    betterSetup: "Issue a final invoice after payment with USt breakdown, dedicated invoice number, PDF delivery, retained evidence, and customer download access.",
  },
  {
    scenario: "Austrian B2B order",
    weakSetup: "Company details, UID numbers, and PO references live in order notes and do not reliably appear on invoice PDFs or exports.",
    betterSetup: "Capture UID/reference fields as structured checkout and order metadata, print them on the PDF, and export them for the accountant.",
  },
  {
    scenario: "EU reverse-charge sale",
    weakSetup: "The store removes VAT but keeps no validation evidence, no reverse-charge wording, and no reason for why USt was not charged.",
    betterSetup: "Store VAT-number evidence, print reverse-charge wording, retain the issued PDF, and include the exemption reason in exports.",
  },
  {
    scenario: "Refund or invoice correction",
    weakSetup: "The original invoice PDF is overwritten or deleted after a refund, so support cannot prove what was first issued.",
    betterSetup: "Keep the original invoice, issue a linked credit note with its own sequence, and expose both documents to customer support and bookkeeping.",
  },
];

const buyingQuestions = [
  "Can the plugin collect Austrian UID/EU VAT numbers before checkout is completed?",
  "Can invoice numbers use a dedicated invoice sequence instead of WooCommerce order IDs?",
  "Can the PDF template show seller identity, customer identity, USt totals, payment method, due date, UID data, and reverse-charge wording?",
  "Can customers download invoices and credit notes from My Account without support manually resending PDFs?",
  "Can refunds create a linked credit note while preserving the original invoice PDF?",
  "Can the accountant export include invoice numbers, VAT totals, UID/VAT identifiers, payment status, PDF links, and correction relationships?",
];

const faq = [
  {
    q: "Does an Austrian WooCommerce store need more than a payment receipt?",
    a: "Usually yes when the store needs Austrian USt totals, UID fields, B2B VAT-number evidence, dedicated invoice numbers, reverse-charge wording, credit notes, customer downloads, or accountant exports.",
  },
  {
    q: "Should Austrian invoice numbers reuse WooCommerce order IDs?",
    a: "A dedicated invoice sequence is safer because WooCommerce order IDs include pending, failed, cancelled, draft, and test orders. A sequence such as AT-2026-000184 is easier to audit and hand to an accountant.",
  },
  {
    q: "How should reverse charge be handled for Austrian B2B invoices?",
    a: "The workflow should capture the buyer VAT number, keep validation evidence where possible, set the correct VAT treatment, print reverse-charge wording, retain the invoice PDF, and expose the reason in exports.",
  },
  {
    q: "How does Lattice Invoices fit this Austrian USt workflow?",
    a: "Lattice Invoices is being shaped for EU WooCommerce stores that need structured tax fields, predictable invoice numbers, PDF delivery, credit notes, customer downloads, and accountant exports instead of a PDF-only receipt workflow.",
  },
];

const mailto =
  "mailto:support@latticeplugins.com?subject=Austrian%20WooCommerce%20VAT%20invoice%20workflow%20review&body=Hi%20Lattice%2C%0A%0AI%20want%20an%20Austrian%2FEU%20VAT%20invoice%20workflow%20review%20for%20Lattice%20Invoices%20early%20access.%0A%0AStore%20URL%3A%20%0ACountry%3A%20Austria%20%2F%20EU%3A%20%0AB2B%20or%20B2C%3A%20%0ACurrent%20invoice%20plugin%3A%20%0AInvoice%20number%20format%3A%20%0APayment%20methods%3A%20%0AUID%2FVAT%20fields%20needed%3A%20%0AReverse%20charge%20needed%3A%20%0AAccountant%20export%20needed%3A%20";

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "WooCommerce Austrian VAT invoices: USt plugin checklist",
  description:
    "A WooCommerce Austrian VAT invoice workflow checklist for EU stores evaluating invoice plugins, UID fields, PDF delivery, credit notes, reverse charge, and accounting export.",
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
  mainEntity: faq.map((item) => ({
    "@type": "Question",
    name: item.q,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.a,
    },
  })),
};

export default function WooCommerceAustrianVatInvoicesPage() {
  return (
    <main className="min-h-screen bg-slate-50">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <section className="bg-gradient-to-br from-slate-950 via-red-950 to-red-800 text-white">
        <div className="max-w-5xl mx-auto px-6 py-16 lg:py-20">
          <p className="uppercase tracking-[0.3em] text-sm text-red-200 mb-4">Austrian USt / UID invoices</p>
          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
            WooCommerce Austrian VAT invoices need UID evidence, invoice numbers, and credit notes — not just a receipt.
          </h1>
          <p className="text-xl text-red-50 leading-relaxed max-w-3xl mb-8">
            If your WooCommerce store sells to Austrian customers or EU B2B buyers, invoice setup has to cover USt totals, UID capture, reverse charge, invoice numbering, refunds, customer downloads, and accountant export before launch.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href={mailto} className="bg-green-500 text-white px-8 py-4 rounded-xl font-semibold hover:bg-green-400 transition shadow-lg text-center">
              Request Austrian invoice review
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
              <h2 className="text-3xl font-bold mb-4">What an Austria-ready WooCommerce invoice plugin must store</h2>
              <p className="text-slate-700 leading-relaxed mb-4">
                Austrian invoice workflows break when checkout cannot capture UID/VAT identifiers, invoice numbers are tied to WooCommerce order IDs, reverse-charge evidence is missing, refunds overwrite original PDFs, or accountant exports miss invoice document evidence.
              </p>
              <p className="text-slate-700 leading-relaxed">
                Before buying an invoice plugin, confirm that every field below is structured order data that can move into invoice PDFs, emails, My Account downloads, refund corrections, credit notes, and exports.
              </p>
            </div>

            <div className="bg-white rounded-2xl border shadow-sm p-8">
              <h2 className="text-3xl font-bold mb-6">Austrian VAT invoice field checklist</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {austrianInvoiceFields.map((field) => (
                  <div key={field} className="flex gap-3 rounded-xl bg-red-50 border border-red-100 p-4">
                    <span className="text-red-700 font-bold">✓</span>
                    <span className="text-slate-800">{field}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-2xl border shadow-sm p-8 overflow-hidden">
              <h2 className="text-3xl font-bold mb-6">Where Austrian invoice workflows break</h2>
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-slate-100 text-slate-700">
                      <th className="p-4 rounded-l-xl">Scenario</th>
                      <th className="p-4">Weak setup</th>
                      <th className="p-4 rounded-r-xl">Better invoice workflow</th>
                    </tr>
                  </thead>
                  <tbody>
                    {workflowRows.map((row) => (
                      <tr key={row.scenario} className="border-b border-slate-100 align-top">
                        <td className="p-4 font-semibold text-slate-900">{row.scenario}</td>
                        <td className="p-4 text-slate-600">{row.weakSetup}</td>
                        <td className="p-4 text-slate-800">{row.betterSetup}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div className="bg-green-50 border border-green-100 rounded-2xl p-8">
              <h2 className="text-3xl font-bold mb-5">Questions to ask before choosing a plugin</h2>
              <div className="space-y-3">
                {buyingQuestions.map((question, index) => (
                  <div key={question} className="flex gap-3 bg-white rounded-xl border border-green-100 p-4">
                    <span className="text-green-700 font-bold">{index + 1}</span>
                    <span className="text-slate-800">{question}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-2xl border shadow-sm p-8">
              <h2 className="text-3xl font-bold mb-5">FAQ</h2>
              <div className="space-y-5">
                {faq.map((item) => (
                  <div key={item.q}>
                    <h3 className="text-xl font-semibold mb-2">{item.q}</h3>
                    <p className="text-slate-700 leading-relaxed">{item.a}</p>
                  </div>
                ))}
              </div>
            </div>
          </article>

          <aside className="space-y-6">
            <div className="bg-white rounded-2xl border shadow-sm p-6 sticky top-6">
              <h2 className="text-2xl font-bold mb-3">Early-access review</h2>
              <p className="text-slate-600 mb-5">
                Send your Austrian/EU VAT invoice workflow and get a practical fit check for Lattice Invoices early access.
              </p>
              <a href={mailto} className="block text-center bg-green-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-green-500 transition mb-3">
                Request workflow review
              </a>
              <Link href="/docs/woocommerce-eu-vat-invoice-setup" className="block text-center border border-slate-200 px-6 py-3 rounded-xl font-semibold hover:border-green-400 transition mb-3">
                Read setup guide
              </Link>
              <Link href="/blog/woocommerce-belgian-vat-invoices" className="block text-center border border-slate-200 px-6 py-3 rounded-xl font-semibold hover:border-red-400 transition mb-3">
                Belgian VAT invoice guide
              </Link>
              <Link href="/blog/woocommerce-german-vat-invoices" className="block text-center border border-slate-200 px-6 py-3 rounded-xl font-semibold hover:border-red-400 transition">
                German VAT invoice guide
              </Link>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}
