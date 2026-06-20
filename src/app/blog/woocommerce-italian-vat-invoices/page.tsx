import type { Metadata } from "next";
import Link from "next/link";

const SITE_URL = "https://latticeplugins.com";
const SLUG = "/blog/woocommerce-italian-vat-invoices";

export const metadata: Metadata = {
  title: "WooCommerce Italian VAT Invoices: Fattura IVA Plugin Checklist",
  description:
    "A buyer-intent checklist for WooCommerce stores selling in Italy: Fattura IVA fields, Codice Fiscale/Partita IVA, SDI/PEC readiness, invoice numbering, refunds, reverse charge, and accountant export.",
  alternates: {
    canonical: `${SITE_URL}${SLUG}`,
  },
  openGraph: {
    title: "WooCommerce Italian VAT invoices for EU stores",
    description:
      "Use this Italy Fattura IVA workflow checklist before choosing a WooCommerce invoice plugin for B2B fields, PDF delivery, credit notes, reverse charge, and accounting export.",
    url: `${SITE_URL}${SLUG}`,
    siteName: "Lattice Plugins",
    type: "article",
  },
};

const italianInvoiceFields = [
  "Seller legal name, address, Partita IVA, tax regime details, and contact details that match bookkeeping records",
  "Customer legal name, billing address, country, Codice Fiscale, Partita IVA or EU VAT number, plus optional PO/reference data",
  "Unique invoice number, invoice date, supply date, payment method, currency, net amount, IVA rate, IVA amount, and gross total",
  "SDI code or PEC email readiness for Italian B2B/B2G workflows, even when the WooCommerce checkout still starts with a PDF invoice",
  "Reverse-charge wording for eligible EU B2B invoices when VAT accounting shifts to the buyer",
  "Credit-note or nota di credito relationship for refunds, corrections, cancellations, and retained original invoice PDFs",
];

const workflowRows = [
  {
    scenario: "Italian B2C order",
    weakSetup: "WooCommerce sends a receipt-like email and the store owner manually creates invoice evidence later.",
    betterSetup: "Generate a final invoice after payment with IVA breakdown, dedicated invoice number, customer details, PDF delivery, and retained evidence.",
  },
  {
    scenario: "Italian B2B order",
    weakSetup: "Partita IVA, Codice Fiscale, SDI or PEC values are typed into order notes and never reach the invoice PDF or export.",
    betterSetup: "Capture tax identifiers as structured checkout fields, store them on the order, print them on the invoice, and include them in accountant export.",
  },
  {
    scenario: "Refund or correction",
    weakSetup: "The original PDF is edited or replaced after a refund, making it hard to prove what was issued first.",
    betterSetup: "Keep the original invoice, issue a linked credit note/nota di credito with its own sequence, and expose both documents to the customer and accountant.",
  },
  {
    scenario: "Monthly accountant handoff",
    weakSetup: "The accountant receives WooCommerce orders without invoice numbers, tax IDs, IVA totals, PDF links, payment status, or credit-note references.",
    betterSetup: "Export invoice numbers, IVA/VAT fields, payment method, PDF URLs, refund links, and customer/company data in one accountant-ready file.",
  },
];

const buyingQuestions = [
  "Can the plugin collect Codice Fiscale, Partita IVA, SDI and PEC fields before checkout is completed?",
  "Can invoice numbers use a dedicated sequence instead of WooCommerce order IDs?",
  "Can the PDF template show seller identity, customer identity, IVA totals, payment method, due date, and reverse-charge wording?",
  "Can customers download invoices and credit notes from My Account without support manually resending PDFs?",
  "Can refunds create a linked credit note/nota di credito while preserving the original invoice PDF?",
  "Can the accountant export include invoice numbers, IVA totals, tax identifiers, payment status, PDF links, and correction relationships?",
];

const faq = [
  {
    q: "Does an Italian WooCommerce store need more than a PDF invoice template?",
    a: "Usually yes if the store needs structured IVA fields, Codice Fiscale or Partita IVA capture, SDI/PEC readiness, retained PDFs, refund corrections, customer downloads, or accountant exports.",
  },
  {
    q: "Should Italian invoice numbers reuse WooCommerce order IDs?",
    a: "A dedicated invoice sequence is safer because WooCommerce order IDs include pending, failed, cancelled, draft, and test orders. A sequence such as IT-2026-000184 is easier to audit and export.",
  },
  {
    q: "How should SDI or PEC fields fit a WooCommerce invoice workflow?",
    a: "They should be captured as structured checkout/order fields, validated enough to avoid empty accounting handoff, printed or exported where needed, and retained with the invoice record rather than left in free-text notes.",
  },
  {
    q: "How does Lattice Invoices fit this Italian IVA workflow?",
    a: "Lattice Invoices is being shaped for EU WooCommerce stores that need structured tax fields, predictable invoice numbers, PDF delivery, credit notes, customer downloads, and accountant exports instead of a PDF-only receipt workflow.",
  },
];

const mailto =
  "mailto:support@latticeplugins.com?subject=Italian%20WooCommerce%20VAT%20invoice%20workflow%20review&body=Hi%20Lattice%2C%0A%0AI%20want%20an%20Italian%2FEU%20VAT%20invoice%20workflow%20review%20for%20Lattice%20Invoices%20early%20access.%0A%0AStore%20URL%3A%20%0ACountry%3A%20Italy%20%2F%20EU%3A%20%0AB2B%20or%20B2C%3A%20%0ACurrent%20invoice%20plugin%3A%20%0AInvoice%20number%20format%3A%20%0APayment%20methods%3A%20%0ASDI%20or%20PEC%20needed%3A%20%0AReverse%20charge%20needed%3A%20%0AAccountant%20export%20needed%3A%20";

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "WooCommerce Italian VAT invoices: Fattura IVA plugin checklist",
  description:
    "A WooCommerce Italian VAT invoice workflow checklist for EU stores evaluating invoice plugins, tax fields, PDF delivery, credit notes, reverse charge, and accounting export.",
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

export default function WooCommerceItalianVatInvoicesPage() {
  return (
    <main className="min-h-screen bg-slate-50">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <section className="bg-gradient-to-br from-slate-950 via-emerald-950 to-red-900 text-white">
        <div className="max-w-5xl mx-auto px-6 py-16 lg:py-20">
          <p className="uppercase tracking-[0.3em] text-sm text-emerald-200 mb-4">Italian Fattura IVA</p>
          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
            WooCommerce Italian VAT invoices need tax-field workflow proof, not just a PDF receipt.
          </h1>
          <p className="text-xl text-emerald-50 leading-relaxed max-w-3xl mb-8">
            If your WooCommerce store sells to Italian customers or Italian B2B buyers, invoice setup has to cover IVA totals, Codice Fiscale, Partita IVA, SDI or PEC readiness, reverse charge, invoice numbering, refunds, customer downloads, and accountant export before launch.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href={mailto} className="bg-green-500 text-white px-8 py-4 rounded-xl font-semibold hover:bg-green-400 transition shadow-lg text-center">
              Request Italian invoice review
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
              <h2 className="text-3xl font-bold mb-4">What an Italy-ready WooCommerce invoice plugin must store</h2>
              <p className="text-slate-700 leading-relaxed mb-4">
                Italian invoice workflows break when checkout cannot capture company and tax identifiers, invoice numbers are tied to WooCommerce order IDs, refunds overwrite the original PDF, or accountant exports miss invoice document evidence.
              </p>
              <p className="text-slate-700 leading-relaxed">
                Before buying an invoice plugin, confirm that every field below is structured order data that can move into invoice PDFs, emails, My Account downloads, refund corrections, credit notes, and exports.
              </p>
            </div>

            <div className="bg-white rounded-2xl border shadow-sm p-8">
              <h2 className="text-3xl font-bold mb-6">Italian VAT invoice field checklist</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {italianInvoiceFields.map((field) => (
                  <div key={field} className="flex gap-3 rounded-xl bg-emerald-50 border border-emerald-100 p-4">
                    <span className="text-emerald-700 font-bold">✓</span>
                    <span className="text-slate-800">{field}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-2xl border shadow-sm p-8 overflow-hidden">
              <h2 className="text-3xl font-bold mb-6">Where Italian invoice workflows break</h2>
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
                Send your Italian/EU VAT invoice workflow and get a practical fit check for Lattice Invoices early access.
              </p>
              <a href={mailto} className="block text-center bg-green-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-green-500 transition mb-3">
                Request workflow review
              </a>
              <Link href="/docs/woocommerce-eu-vat-invoice-setup" className="block text-center border border-slate-200 px-6 py-3 rounded-xl font-semibold hover:border-emerald-400 transition mb-3">
                Read setup guide
              </Link>
              <Link href="/blog/woocommerce-german-vat-invoices" className="block text-center border border-slate-200 px-6 py-3 rounded-xl font-semibold hover:border-emerald-400 transition mb-3">
                Compare German invoice checklist
              </Link>
              <Link href="/blog/woocommerce-spanish-vat-invoices" className="block text-center border border-slate-200 px-6 py-3 rounded-xl font-semibold hover:border-emerald-400 transition">
                Compare Spanish invoice checklist
              </Link>
              <div className="border-t mt-6 pt-6 space-y-3 text-sm text-slate-600">
                <div>✓ Codice Fiscale / Partita IVA field planning</div>
                <div>✓ SDI/PEC readiness and accountant export questions</div>
                <div>✓ €49 early-access positioning for EU stores</div>
              </div>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}
