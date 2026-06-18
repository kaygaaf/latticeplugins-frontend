import type { Metadata } from "next";
import Link from "next/link";

const SITE_URL = "https://latticeplugins.com";
const SLUG = "/blog/woocommerce-french-vat-invoices";

export const metadata: Metadata = {
  title: "WooCommerce French VAT Invoices: Mentions Obligatoires Checklist",
  description:
    "A buyer-intent checklist for WooCommerce stores selling in France: French VAT invoice fields, TVA numbers, invoice numbering, reverse charge wording, refunds, PDF delivery, and accounting export.",
  alternates: {
    canonical: `${SITE_URL}${SLUG}`,
  },
  openGraph: {
    title: "WooCommerce French VAT invoices for EU stores",
    description:
      "Use this French TVA invoice workflow checklist before choosing a WooCommerce invoice plugin for B2B, refunds, PDF delivery, customer downloads, and accountant export.",
    url: `${SITE_URL}${SLUG}`,
    siteName: "Lattice Plugins",
    type: "article",
  },
};

const frenchInvoiceFields = [
  "Seller legal name, address, SIREN/SIRET if applicable, VAT number, and contact details",
  "Customer legal name, billing address, country, VAT number, and optional purchase order/reference field",
  "Unique invoice number, invoice date, supply date, payment method, currency, net total, TVA rate, TVA amount, and gross total",
  "Reverse-charge wording for eligible EU B2B invoices when a valid VAT number shifts VAT accounting to the buyer",
  "Credit-note relationship when a refund or correction changes a previously issued invoice",
  "PDF invoice delivery, My Account download, retention, and export fields that match the WooCommerce order metadata",
];

const workflowRows = [
  {
    scenario: "French B2C order",
    weakSetup: "The buyer receives a generic WooCommerce receipt with no structured TVA invoice data.",
    betterSetup: "Issue a final invoice after payment with seller details, invoice number, TVA breakdown, PDF attachment, and customer download.",
  },
  {
    scenario: "French or EU B2B order",
    weakSetup: "Company name and VAT number are stored in checkout notes, so the PDF and export cannot rely on them.",
    betterSetup: "Capture company/VAT fields as order metadata, print them on the PDF, and keep the evidence in export.",
  },
  {
    scenario: "Refund or invoice correction",
    weakSetup: "The original invoice PDF is edited manually after refund, creating audit-trail confusion.",
    betterSetup: "Retain the original invoice, issue a credit note with its own number, and connect both documents to the WooCommerce order.",
  },
  {
    scenario: "Monthly accounting handoff",
    weakSetup: "The accountant receives order exports without invoice numbers, TVA totals, PDF links, or credit-note references.",
    betterSetup: "Export invoice numbers, VAT fields, payment method, PDF URLs, refund links, and customer/company data in one accountant-ready file.",
  },
];

const buyingQuestions = [
  "Can the plugin collect French/EU company and VAT data at checkout before payment?",
  "Can invoice numbers use a dedicated sequence instead of WooCommerce order IDs?",
  "Can the PDF template show TVA totals, seller identity, customer identity, payment method, and reverse-charge wording?",
  "Can customers download invoices from My Account without support manually resending PDFs?",
  "Can refunds create credit notes while preserving the original invoice PDF?",
  "Can the accountant export include invoice numbers, TVA totals, payment status, PDF links, and credit-note relationships?",
];

const faq = [
  {
    q: "Does a French WooCommerce store need a VAT invoice plugin?",
    a: "If the store needs structured TVA invoices, B2B customer fields, invoice numbers, PDF retention, credit notes, or accounting exports, a receipt-only workflow is usually too weak.",
  },
  {
    q: "Should French invoice numbers reuse WooCommerce order IDs?",
    a: "A separate invoice sequence is safer because WooCommerce order IDs include failed, pending, draft, and cancelled orders. A dedicated sequence such as FR-2026-000214 is easier to explain and export.",
  },
  {
    q: "How should reverse-charge invoices be handled for French/EU B2B orders?",
    a: "The checkout should capture a VAT number, the order should retain evidence of the tax treatment, and the invoice PDF should print a clear reverse-charge note instead of only removing VAT from the total.",
  },
  {
    q: "How does Lattice Invoices fit this French TVA workflow?",
    a: "Lattice Invoices is being shaped for EU WooCommerce stores that need structured VAT fields, predictable invoice numbers, PDF delivery, credit notes, customer downloads, and accountant exports rather than a PDF-only invoice template.",
  },
];

const mailto =
  "mailto:support@latticeplugins.com?subject=French%20WooCommerce%20VAT%20invoice%20workflow%20review&body=Hi%20Lattice%2C%0A%0AI%20want%20a%20French%2FEU%20VAT%20invoice%20workflow%20review%20for%20Lattice%20Invoices%20early%20access.%0A%0AStore%20URL%3A%20%0ACountry%3A%20France%20%2F%20EU%3A%20%0AB2B%20or%20B2C%3A%20%0ACurrent%20invoice%20plugin%3A%20%0AInvoice%20number%20format%3A%20%0APayment%20methods%3A%20%0AReverse%20charge%20needed%3A%20%0AAccountant%20export%20needed%3A%20";

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "WooCommerce French VAT invoices: mentions obligatoires checklist",
  description:
    "A WooCommerce French VAT invoice workflow checklist for EU stores evaluating invoice plugins, VAT fields, PDF delivery, credit notes, reverse charge, and accounting export.",
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

export default function WooCommerceFrenchVatInvoicesPage() {
  return (
    <main className="min-h-screen bg-slate-50">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <section className="bg-gradient-to-br from-slate-950 via-blue-950 to-indigo-900 text-white">
        <div className="max-w-5xl mx-auto px-6 py-16 lg:py-20">
          <p className="uppercase tracking-[0.3em] text-sm text-blue-200 mb-4">French VAT invoices</p>
          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
            WooCommerce French VAT invoices need TVA workflow proof, not just a PDF layout.
          </h1>
          <p className="text-xl text-blue-50 leading-relaxed max-w-3xl mb-8">
            If your WooCommerce store sells to French customers or French B2B buyers, invoice setup has to cover mentions obligatoires, TVA numbers, reverse charge, invoice numbering, refunds, customer downloads, and accountant export before the first live order.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href={mailto} className="bg-green-500 text-white px-8 py-4 rounded-xl font-semibold hover:bg-green-400 transition shadow-lg text-center">
              Request French invoice review
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
              <h2 className="text-3xl font-bold mb-4">What a France-ready WooCommerce invoice plugin must store</h2>
              <p className="text-slate-700 leading-relaxed mb-4">
                French invoice workflows break when the checkout cannot capture company/VAT details, the invoice number sequence is tied to order IDs, refunds overwrite the original PDF, or the accountant gets orders without invoice document evidence.
              </p>
              <p className="text-slate-700 leading-relaxed">
                Before buying an invoice plugin, confirm that every field below is structured order data that can move into invoice PDFs, emails, My Account downloads, refunds, credit notes, and exports.
              </p>
            </div>

            <div className="bg-white rounded-2xl border shadow-sm p-8">
              <h2 className="text-3xl font-bold mb-6">French VAT invoice field checklist</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {frenchInvoiceFields.map((field) => (
                  <div key={field} className="flex gap-3 rounded-xl bg-blue-50 border border-blue-100 p-4">
                    <span className="text-blue-700 font-bold">✓</span>
                    <span className="text-slate-800">{field}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-2xl border shadow-sm p-8 overflow-hidden">
              <h2 className="text-3xl font-bold mb-6">Where French invoice workflows break</h2>
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
                Send your French/EU VAT invoice workflow and get a practical fit check for Lattice Invoices early access.
              </p>
              <a href={mailto} className="block text-center bg-green-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-green-500 transition mb-3">
                Request €49 workflow review
              </a>
              <Link href="/docs/woocommerce-eu-vat-invoice-setup" className="block text-center border border-slate-200 px-6 py-3 rounded-xl font-semibold hover:border-blue-400 transition mb-3">
                Read setup guide
              </Link>
              <Link href="/blog/woocommerce-vat-invoice-plugin-eu" className="block text-center border border-slate-200 px-6 py-3 rounded-xl font-semibold hover:border-blue-400 transition mb-3">
                EU VAT invoice guide
              </Link>
              <Link href="/blog/woocommerce-vies-vat-validation" className="block text-center border border-slate-200 px-6 py-3 rounded-xl font-semibold hover:border-blue-400 transition mb-3">
                VIES VAT validation guide
              </Link>
              <Link href="/blog/woocommerce-credit-notes-refunds" className="block text-center border border-slate-200 px-6 py-3 rounded-xl font-semibold hover:border-blue-400 transition">
                Credit notes guide
              </Link>
              <div className="border-t mt-6 pt-6 space-y-3 text-sm text-slate-600">
                <div>✓ Targets French TVA invoice buyer intent</div>
                <div>✓ Connects to the €49 Lattice Invoices offer</div>
                <div>✓ Focused on checkout-to-accounting workflow proof</div>
              </div>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}
