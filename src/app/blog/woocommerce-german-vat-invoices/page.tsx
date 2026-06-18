import type { Metadata } from "next";
import Link from "next/link";

const SITE_URL = "https://latticeplugins.com";
const SLUG = "/blog/woocommerce-german-vat-invoices";

export const metadata: Metadata = {
  title: "WooCommerce German VAT Invoices: Pflichtangaben Checklist",
  description:
    "A buyer-intent checklist for WooCommerce stores selling in Germany: German VAT invoice fields, invoice numbers, reverse charge notes, PDF delivery, refunds, and accountant export.",
  alternates: {
    canonical: `${SITE_URL}${SLUG}`,
  },
  openGraph: {
    title: "WooCommerce German VAT invoices for EU stores",
    description:
      "Use this German VAT invoice workflow checklist before choosing a WooCommerce invoice plugin for B2B, OSS, refunds, PDF delivery, and bookkeeping export.",
    url: `${SITE_URL}${SLUG}`,
    siteName: "Lattice Plugins",
    type: "article",
  },
};

const germanInvoiceFields = [
  "Seller legal name, address, VAT ID or tax number, and invoice contact details",
  "Customer company name, billing address, country, VAT ID, and optional PO/reference field",
  "Unique invoice number, invoice date, supply/payment date, currency, net amount, VAT rate, VAT amount, and gross total",
  "Reverse-charge wording when a valid EU B2B VAT number shifts VAT accounting to the buyer",
  "Credit-note relationship when a refund changes a previously issued invoice",
  "PDF invoice download and email attachment that match the order metadata stored in WooCommerce",
];

const workflowRows = [
  {
    scenario: "German B2C order",
    weakSetup: "The customer receives only a generic WooCommerce receipt with payment total.",
    betterSetup: "Generate a final VAT invoice after payment with German seller details, invoice number, VAT totals, and PDF download.",
  },
  {
    scenario: "EU B2B reverse charge",
    weakSetup: "VAT ID is pasted into order notes and the PDF template cannot use it reliably.",
    betterSetup: "Validate/store VAT ID as order meta, print the reverse-charge note, and include the VAT evidence in export.",
  },
  {
    scenario: "Refund or correction",
    weakSetup: "The original invoice PDF is edited manually or overwritten after the refund.",
    betterSetup: "Keep the original invoice, issue a credit note with its own number, and link it back to the order and PDF.",
  },
  {
    scenario: "Month-end bookkeeping",
    weakSetup: "The accountant receives order CSVs without PDF links or invoice/credit-note relationships.",
    betterSetup: "Export invoice numbers, VAT fields, payment method, PDF URLs, and credit-note references in one accountant-ready file.",
  },
];

const buyingQuestions = [
  "Can the plugin collect German/EU VAT data before payment, not after the order is already completed?",
  "Can invoice numbers be separate from WooCommerce order IDs and reset yearly with a clean prefix?",
  "Can the PDF template show German seller details, VAT ID, tax totals, payment method, and reverse-charge wording?",
  "Can customers download invoices from My Account without contacting support?",
  "Can refunds create credit notes instead of mutating the original invoice?",
  "Can the export satisfy an accountant who needs VAT totals, PDFs, refunds, and payment reconciliation?",
];

const faq = [
  {
    q: "Do WooCommerce stores selling in Germany need more than the default receipt?",
    a: "Usually yes for proper VAT bookkeeping. A payment receipt is not the same as a structured VAT invoice with seller/customer details, invoice number, tax breakdown, PDF retention, and refund credit-note workflow.",
  },
  {
    q: "Should German invoice numbers use WooCommerce order IDs?",
    a: "It is safer to use a dedicated invoice sequence such as DE-2026-000148. Order IDs include failed, pending, test, and cancelled orders, which can make the invoice sequence harder to explain.",
  },
  {
    q: "How should reverse-charge invoices be handled?",
    a: "The checkout should capture and store the VAT ID, the order should keep evidence of the VAT treatment, and the PDF should print a reverse-charge note instead of silently removing tax.",
  },
  {
    q: "How does Lattice Invoices fit this workflow?",
    a: "Lattice Invoices is being positioned for EU WooCommerce stores that need structured VAT fields, predictable invoice numbers, PDF delivery, credit notes, customer downloads, and accountant exports instead of a PDF-only template plugin.",
  },
];

const mailto =
  "mailto:support@latticeplugins.com?subject=German%20WooCommerce%20VAT%20invoice%20workflow%20review&body=Hi%20Lattice%2C%0A%0AI%20want%20a%20German%2FEU%20VAT%20invoice%20workflow%20review%20for%20Lattice%20Invoices%20early%20access.%0A%0AStore%20URL%3A%20%0ACountry%3A%20Germany%20%2F%20EU%3A%20%0AB2B%20or%20B2C%3A%20%0ACurrent%20invoice%20plugin%3A%20%0AInvoice%20number%20format%3A%20%0APayment%20methods%3A%20%0AReverse%20charge%20needed%3A%20%0AAccountant%20export%20needed%3A%20";

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "WooCommerce German VAT invoices: Pflichtangaben checklist",
  description:
    "A WooCommerce German VAT invoice workflow checklist for EU stores evaluating invoice plugins, VAT fields, PDF delivery, credit notes, reverse charge, and accounting export.",
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

export default function WooCommerceGermanVatInvoicesPage() {
  return (
    <main className="min-h-screen bg-slate-50">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <section className="bg-gradient-to-br from-slate-950 via-blue-950 to-indigo-900 text-white">
        <div className="max-w-5xl mx-auto px-6 py-16 lg:py-20">
          <p className="uppercase tracking-[0.3em] text-sm text-blue-200 mb-4">German VAT invoices</p>
          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
            WooCommerce German VAT invoices need workflow rules, not just a PDF template.
          </h1>
          <p className="text-xl text-blue-50 leading-relaxed max-w-3xl mb-8">
            If your WooCommerce store sells to German customers or German B2B buyers, invoice setup has to cover Pflichtangaben, VAT IDs, reverse charge, invoice numbers, refunds, customer downloads, and accountant export before the first live order.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href={mailto} className="bg-green-500 text-white px-8 py-4 rounded-xl font-semibold hover:bg-green-400 transition shadow-lg text-center">
              Request German invoice review
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
              <h2 className="text-3xl font-bold mb-4">What a German-ready WooCommerce invoice plugin must store</h2>
              <p className="text-slate-700 leading-relaxed mb-4">
                Many stores start by asking for a nicer WooCommerce invoice PDF. German VAT workflows usually fail earlier: the checkout did not collect the right company/VAT data, the invoice number sequence is tied to order IDs, refunds overwrite the original PDF, or the accountant cannot match invoices to payments.
              </p>
              <p className="text-slate-700 leading-relaxed">
                Before buying an invoice plugin, confirm that each invoice field below is stored as structured order metadata and can flow into PDFs, emails, downloads, refunds, and exports.
              </p>
            </div>

            <div className="bg-white rounded-2xl border shadow-sm p-8">
              <h2 className="text-3xl font-bold mb-6">German VAT invoice field checklist</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {germanInvoiceFields.map((field) => (
                  <div key={field} className="flex gap-3 rounded-xl bg-blue-50 border border-blue-100 p-4">
                    <span className="text-blue-700 font-bold">✓</span>
                    <span className="text-slate-800">{field}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-2xl border shadow-sm p-8 overflow-hidden">
              <h2 className="text-3xl font-bold mb-6">Where German invoice workflows break</h2>
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
                Send your German/EU VAT invoice workflow and get a practical fit check for Lattice Invoices early access.
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
              <Link href="/blog/woocommerce-reverse-charge-invoices" className="block text-center border border-slate-200 px-6 py-3 rounded-xl font-semibold hover:border-blue-400 transition mb-3">
                Reverse-charge guide
              </Link>
              <Link href="/blog/woocommerce-credit-notes-refunds" className="block text-center border border-slate-200 px-6 py-3 rounded-xl font-semibold hover:border-blue-400 transition">
                Credit notes guide
              </Link>
              <div className="border-t mt-6 pt-6 space-y-3 text-sm text-slate-600">
                <div>✓ Targets German VAT invoice buyer intent</div>
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
