import type { Metadata } from "next";
import Link from "next/link";

const SITE_URL = "https://latticeplugins.com";
const SLUG = "/blog/woocommerce-greek-vat-invoices";

export const metadata: Metadata = {
  title: "WooCommerce Greek VAT Invoices: ΦΠΑ / AFM Checklist",
  description:
    "A buyer-intent checklist for WooCommerce stores selling in Greece: ΦΠΑ invoice fields, AFM tax numbers, EU reverse charge, PDF delivery, credit notes, and accountant export.",
  alternates: {
    canonical: `${SITE_URL}${SLUG}`,
  },
  openGraph: {
    title: "WooCommerce Greek VAT invoices for EU stores",
    description:
      "Use this Greek VAT invoice workflow checklist before choosing a WooCommerce invoice plugin for AFM tax-number fields, ΦΠΑ totals, PDF delivery, credit notes, reverse charge, and bookkeeping export.",
    url: `${SITE_URL}${SLUG}`,
    siteName: "Lattice Plugins",
    type: "article",
  },
};

const greekInvoiceFields = [
  "Seller legal name, Greek address, AFM/tax number or EU VAT registration details, invoice identity, bank details, and contact details that match accounting records",
  "Customer legal name, billing address, country, Greek AFM/tax number or EU VAT number, and optional company, purchase-order, or cost-centre reference",
  "Dedicated invoice number, invoice date, supply date, payment method, currency, net amount, ΦΠΑ/VAT rate, VAT amount, and gross total",
  "Reverse-charge wording and VAT-number evidence for eligible EU B2B invoices where VAT accounting shifts to the buyer",
  "Retained invoice PDF, email attachment history, customer download access, and accountant-ready export fields",
  "Linked credit-note relationship for refunds, cancellations, partial refunds, retained originals, and audit-ready correction trails",
];

const workflowRows = [
  {
    scenario: "Greek B2C ΦΠΑ invoice",
    weakSetup: "WooCommerce sends only an order confirmation while staff manually generate VAT invoices when customers or accountants ask for them.",
    betterSetup: "Issue a final VAT invoice after payment with a dedicated invoice number, ΦΠΑ breakdown, retained PDF, customer download access, and exportable invoice metadata.",
  },
  {
    scenario: "Greek B2B order with AFM/tax number",
    weakSetup: "Company and AFM/tax-number values are stored as free-text order notes, so the data is missing from invoice PDFs, email attachments, customer downloads, or accounting exports.",
    betterSetup: "Capture company and VAT fields as structured checkout metadata, print them on invoice PDFs, expose them on orders, and export them for bookkeeping cleanup.",
  },
  {
    scenario: "EU reverse-charge sale",
    weakSetup: "The store removes VAT without keeping validation evidence, reverse-charge wording, or a tax-treatment reason that explains why the invoice has zero VAT.",
    betterSetup: "Store the buyer VAT number, retain validation evidence where possible, print reverse-charge wording, and include the tax-treatment reason in invoice exports.",
  },
  {
    scenario: "Refund or correction document",
    weakSetup: "Refunds overwrite the first invoice PDF or create manual correction notes that are not linked to the original invoice number.",
    betterSetup: "Preserve the original invoice, issue a linked credit note with its own sequence, and keep both documents available for support, customers, and the accountant.",
  },
];

const buyingQuestions = [
  "Can the plugin collect Greek AFM/tax numbers, company names, and EU VAT numbers before checkout is completed?",
  "Can invoice numbers use a dedicated invoice sequence instead of WooCommerce order IDs?",
  "Can the PDF template show seller identity, customer identity, ΦΠΑ/VAT totals, payment method, VAT identifiers, bank details, and reverse-charge wording?",
  "Can invoices, credit notes, and tax-treatment reasons be exported as structured bookkeeping fields instead of only PDF files?",
  "Can customers download invoices and credit notes from My Account without support manually resending PDFs?",
  "Can refunds create a linked credit note while preserving the original invoice PDF?",
];

const faq = [
  {
    q: "Does a Greek WooCommerce store need more than a payment receipt?",
    a: "Usually yes when the store needs VAT invoice data, tax-number capture, B2B VAT-number evidence, dedicated invoice numbers, reverse-charge wording, retained PDFs, customer downloads, credit notes, or accountant exports.",
  },
  {
    q: "Should Greek invoice numbers reuse WooCommerce order IDs?",
    a: "A dedicated invoice sequence is safer because WooCommerce order IDs include pending, failed, cancelled, draft, and test orders. A sequence such as GR-2026-000184 is easier to audit and hand to an accountant.",
  },
  {
    q: "What should a Greek VAT invoice workflow do for EU B2B orders?",
    a: "It should capture the buyer VAT number, store the tax-treatment reason, print reverse-charge wording when applicable, preserve validation evidence where possible, and expose those fields in accountant exports.",
  },
  {
    q: "How does Lattice Invoices fit this Greek VAT workflow?",
    a: "Lattice Invoices is being shaped for EU WooCommerce stores that need structured tax fields, predictable invoice numbers, PDF delivery, credit notes, customer downloads, and accountant exports instead of a PDF-only receipt workflow.",
  },
];

const mailto =
  "mailto:support@latticeplugins.com?subject=Greek%20WooCommerce%20VAT%20invoice%20workflow%20review&body=Hi%20Lattice%2C%0A%0AI%20want%20a%20Greek%2FEU%20VAT%20invoice%20workflow%20review%20for%20Lattice%20Invoices%20early%20access.%0A%0AStore%20URL%3A%20%0ACountry%3A%20Greece%20%2F%20EU%3A%20%0AB2B%20or%20B2C%3A%20%0ACurrent%20invoice%20plugin%3A%20%0AInvoice%20number%20format%3A%20%0APayment%20methods%3A%20%0ATax%20number%2FVAT%20fields%20needed%3A%20%0AReverse%20charge%20needed%3A%20%0AAccountant%20export%20needed%3A%20";

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "WooCommerce Greek VAT invoices: ΦΠΑ and AFM plugin checklist",
  description:
    "A WooCommerce Greek VAT invoice workflow checklist for EU stores evaluating invoice plugins, AFM tax-number fields, ΦΠΑ totals, PDF delivery, credit notes, reverse charge, and accounting export.",
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

export default function WooCommerceGreekVatInvoicesPage() {
  return (
    <main className="min-h-screen bg-slate-50">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <section className="bg-gradient-to-br from-slate-950 via-indigo-950 to-sky-700 text-white">
        <div className="max-w-5xl mx-auto px-6 py-16 lg:py-20">
          <p className="uppercase tracking-[0.3em] text-sm text-sky-200 mb-4">Greek ΦΠΑ invoices</p>
          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
            WooCommerce Greek VAT invoices need AFM/tax-number fields, retained PDFs, and correction trails — not just an order receipt.
          </h1>
          <p className="text-xl text-sky-50 leading-relaxed max-w-3xl mb-8">
            If your WooCommerce store sells to Greek customers or EU B2B buyers, invoice setup has to cover AFM/tax-number capture, ΦΠΑ totals, reverse charge, invoice numbering, credit notes, customer downloads, and accountant export before launch.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href={mailto} className="bg-sky-500 text-white px-8 py-4 rounded-xl font-semibold hover:bg-sky-400 transition shadow-lg text-center">
              Request Greek invoice review
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
              <h2 className="text-3xl font-bold mb-4">What a Greece-ready WooCommerce invoice plugin must store</h2>
              <p className="text-slate-700 leading-relaxed mb-4">
                Greek invoice workflows break when checkout cannot capture company and AFM/tax-number data, invoice numbers are tied to WooCommerce order IDs, invoice data only exists inside a PDF, reverse-charge evidence is missing, refunds overwrite originals, or accountant exports miss invoice document relationships.
              </p>
              <p className="text-slate-700 leading-relaxed">
                Before buying an invoice plugin, confirm that every field below is structured order and invoice data that can move into PDFs, emails, My Account downloads, credit notes, tax reports, and accountant exports.
              </p>
            </div>

            <div className="bg-white rounded-2xl border shadow-sm p-8">
              <h2 className="text-3xl font-bold mb-6">Greek ΦΠΑ invoice field checklist</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {greekInvoiceFields.map((field) => (
                  <div key={field} className="flex gap-3 rounded-xl bg-sky-50 border border-sky-100 p-4">
                    <span className="text-sky-700 font-bold">✓</span>
                    <span className="text-slate-800">{field}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-2xl border shadow-sm p-8 overflow-hidden">
              <h2 className="text-3xl font-bold mb-6">Where Greek invoice workflows break</h2>
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

            <div className="bg-sky-50 border border-sky-100 rounded-2xl p-8">
              <h2 className="text-3xl font-bold mb-5">Questions to ask before choosing a plugin</h2>
              <div className="space-y-3">
                {buyingQuestions.map((question, index) => (
                  <div key={question} className="flex gap-3 bg-white rounded-xl border border-sky-100 p-4">
                    <span className="text-sky-700 font-bold">{index + 1}</span>
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
                Send your Greek/EU VAT invoice workflow and get a practical fit check for Lattice Invoices early access.
              </p>
              <a href={mailto} className="block text-center bg-sky-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-sky-500 transition mb-3">
                Request workflow review
              </a>
              <Link href="/docs/woocommerce-eu-vat-invoice-setup" className="block text-center border border-slate-200 px-6 py-3 rounded-xl font-semibold hover:bg-slate-50 transition">
                Read setup guide
              </Link>
            </div>

            <div className="bg-slate-900 text-white rounded-2xl p-6">
              <h2 className="text-xl font-bold mb-3">Related invoice guides</h2>
              <ul className="space-y-3 text-sm text-slate-200">
                <li><Link href="/blog/woocommerce-vies-vat-validation" className="hover:text-white">VIES VAT validation</Link></li>
                <li><Link href="/blog/woocommerce-oss-vat-invoices" className="hover:text-white">OSS VAT invoices</Link></li>
                <li><Link href="/blog/woocommerce-credit-notes-refunds" className="hover:text-white">Credit notes for refunds</Link></li>
                <li><Link href="/blog/woocommerce-hungarian-vat-invoices" className="hover:text-white">Hungarian ÁFA invoices</Link></li>
              </ul>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}
