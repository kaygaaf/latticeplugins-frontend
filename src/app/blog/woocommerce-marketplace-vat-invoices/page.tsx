import type { Metadata } from "next";
import Link from "next/link";

const SITE_URL = "https://latticeplugins.com";
const SLUG = "/blog/woocommerce-marketplace-vat-invoices";

export const metadata: Metadata = {
  title: "WooCommerce Marketplace VAT Invoices: Multi-Vendor Invoice Checklist",
  description:
    "A buyer-intent checklist for WooCommerce marketplace and multi-vendor stores that need VAT invoices, vendor split evidence, credit notes, customer PDFs, and accountant exports.",
  alternates: {
    canonical: `${SITE_URL}${SLUG}`,
  },
  openGraph: {
    title: "WooCommerce marketplace VAT invoices for multi-vendor stores",
    description:
      "Use this marketplace invoice workflow checklist before choosing a WooCommerce invoice plugin for vendor splits, VAT evidence, customer PDFs, refund credit notes, and accountant handoff.",
    url: `${SITE_URL}${SLUG}`,
    siteName: "Lattice Plugins",
    type: "article",
  },
};

const marketplaceInvoiceRisks = [
  "The customer receives a payment receipt, but the invoice does not explain whether the marketplace or vendor is the seller of record.",
  "Vendor commission, platform fee, VAT, shipping, discount, and refund data live in separate reports that cannot be matched to the invoice PDF.",
  "B2B buyers enter a VAT number after purchase by email, so the finance team manually edits invoice details outside WooCommerce.",
  "Partial refunds or vendor cancellations create store-credit notes manually, with no link to the original customer invoice.",
  "The accountant gets order exports, vendor payout exports, and PDF files with no shared invoice number or tax-treatment field.",
  "Customers ask support for invoice copies because marketplace account pages show orders but not retained invoice and credit-note documents.",
];

const workflowRows = [
  {
    scenario: "Marketplace is seller of record",
    weakSetup:
      "The store issues a generic WooCommerce receipt while vendor payouts are handled later in spreadsheets.",
    strongerSetup:
      "The customer invoice uses the marketplace legal seller details, a dedicated invoice sequence, VAT totals, PDF retention, and a separate export for vendor commission/payout reconciliation.",
  },
  {
    scenario: "Vendor is seller of record",
    weakSetup:
      "The customer sees one checkout, but invoices are manually produced per vendor after the order is already paid.",
    strongerSetup:
      "Capture vendor identity, seller-of-record rules, invoice metadata, and customer download links so each invoice document can be matched to the order and payout records.",
  },
  {
    scenario: "EU B2B buyer with VAT number",
    weakSetup:
      "VAT numbers are stored as notes and do not reliably appear on marketplace invoice PDFs, reverse-charge wording, or accounting exports.",
    strongerSetup:
      "Collect VAT fields at checkout, keep the validation/tax-treatment reason with the invoice, print reverse-charge wording when needed, and include the fields in exports.",
  },
  {
    scenario: "Refund across one vendor line",
    weakSetup:
      "A partial refund updates the WooCommerce order total but leaves the customer invoice, vendor payout, and credit-note evidence disconnected.",
    strongerSetup:
      "Issue a linked credit note for the refunded line, preserve the original invoice, and export the invoice-credit-note relationship for bookkeeping.",
  },
];

const buyingQuestions = [
  "Does the plugin support a clear seller-of-record workflow for marketplace vs vendor invoices?",
  "Can invoice numbers be separate from WooCommerce order IDs and still map back to vendor payout records?",
  "Can the PDF template include VAT number, company name, PO/reference fields, vendor identity, VAT totals, and reverse-charge wording where needed?",
  "Can refunds create linked credit notes without overwriting the original marketplace invoice?",
  "Can customer account pages expose invoice and credit-note downloads without support manually resending PDFs?",
  "Can exports include invoice number, order ID, customer VAT fields, vendor split/payout reference, VAT totals, and credit-note relationships?",
];

const faq = [
  {
    q: "Do WooCommerce marketplaces need a different invoice workflow than a normal store?",
    a: "Usually yes. A marketplace invoice workflow has to clarify seller-of-record rules, vendor identity, platform fees or commission evidence, VAT metadata, customer PDFs, refund credit notes, and accountant exports. A normal PDF receipt plugin often stops at order totals.",
  },
  {
    q: "Should each vendor get a separate invoice sequence?",
    a: "It depends on the legal seller-of-record setup. The key buyer question is whether the invoice plugin can keep invoice numbers, vendor references, customer VAT fields, and payout/export data connected instead of forcing manual spreadsheets.",
  },
  {
    q: "What breaks first in marketplace VAT invoicing?",
    a: "The first failure is usually metadata: VAT number, company name, vendor identity, refund reason, credit-note relationship, and payout reference are not stored as structured invoice fields. Once those fields are missing, PDFs and exports become cleanup work.",
  },
  {
    q: "How does Lattice Invoices fit a marketplace workflow?",
    a: "Lattice Invoices is being shaped around EU WooCommerce stores that need structured VAT data, invoice PDFs, credit notes, downloads, and accountant-ready exports. Marketplace workflows are a strong early-access use case because they expose invoice-data gaps quickly.",
  },
];

const mailto =
  "mailto:support@latticeplugins.com?subject=Marketplace%20WooCommerce%20VAT%20invoice%20workflow%20review&body=Hi%20Lattice%2C%0A%0AI%20want%20a%20marketplace%2Fmulti-vendor%20VAT%20invoice%20workflow%20review%20for%20Lattice%20Invoices%20early%20access.%0A%0AStore%20URL%3A%20%0AMarketplace%20plugin%20%28Dokan%2FWCFM%2FMultiVendorX%2Fother%29%3A%20%0ASeller%20of%20record%20%28marketplace%20or%20vendors%29%3A%20%0ACountries%3A%20%0AB2B%20VAT%20numbers%20needed%3A%20%0AVendor%20payout%20export%20needed%3A%20%0ACredit%20notes%20needed%3A%20";

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "WooCommerce marketplace VAT invoices: multi-vendor invoice plugin checklist",
  description:
    "A WooCommerce marketplace VAT invoice workflow checklist for multi-vendor stores evaluating invoice plugins, seller-of-record rules, credit notes, customer PDFs, and accountant export.",
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

export default function WooCommerceMarketplaceVatInvoicesPage() {
  return (
    <main className="min-h-screen bg-slate-50">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <section className="bg-gradient-to-br from-slate-950 via-indigo-950 to-emerald-800 text-white">
        <div className="max-w-5xl mx-auto px-6 py-16 lg:py-20">
          <p className="uppercase tracking-[0.3em] text-sm text-emerald-200 mb-4">Marketplace VAT invoices</p>
          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
            WooCommerce marketplace VAT invoices need seller-of-record clarity, vendor evidence, and credit-note trails.
          </h1>
          <p className="text-xl text-emerald-50 leading-relaxed max-w-3xl mb-8">
            Multi-vendor WooCommerce stores have a harder invoice problem than simple shops: customer VAT data, vendor identity, platform fees, refunds, payout exports, and retained invoice PDFs all need to stay connected.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href={mailto} className="bg-green-500 text-white px-8 py-4 rounded-xl font-semibold hover:bg-green-400 transition shadow-lg text-center">
              Request marketplace invoice review
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
              <h2 className="text-3xl font-bold mb-4">Why marketplace invoices fail inside WooCommerce</h2>
              <p className="text-slate-700 leading-relaxed mb-4">
                A marketplace checkout can look simple to the buyer while the backend has multiple tax and accounting realities: one customer payment, several vendors, commission or payout records, B2B VAT fields, shipping/tax splits, and refunds that only affect part of the order.
              </p>
              <p className="text-slate-700 leading-relaxed">
                Before buying a WooCommerce invoice plugin, confirm it can keep invoice documents and export data connected to the order, vendor, customer, and refund records. Otherwise every accountant handoff becomes manual reconciliation.
              </p>
            </div>

            <div className="bg-white rounded-2xl border shadow-sm p-8">
              <h2 className="text-3xl font-bold mb-6">Marketplace invoice risk checklist</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {marketplaceInvoiceRisks.map((risk) => (
                  <div key={risk} className="flex gap-3 rounded-xl bg-emerald-50 border border-emerald-100 p-4">
                    <span className="text-emerald-700 font-bold">✓</span>
                    <span className="text-slate-800">{risk}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-2xl border shadow-sm p-8 overflow-hidden">
              <h2 className="text-3xl font-bold mb-6">Weak setup vs marketplace-ready invoice workflow</h2>
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-slate-100 text-slate-700">
                      <th className="p-4 rounded-l-xl">Scenario</th>
                      <th className="p-4">Weak setup</th>
                      <th className="p-4 rounded-r-xl">Marketplace-ready workflow</th>
                    </tr>
                  </thead>
                  <tbody>
                    {workflowRows.map((row) => (
                      <tr key={row.scenario} className="border-b border-slate-100 align-top">
                        <td className="p-4 font-semibold text-slate-900">{row.scenario}</td>
                        <td className="p-4 text-slate-600">{row.weakSetup}</td>
                        <td className="p-4 text-slate-800">{row.strongerSetup}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div className="bg-indigo-50 border border-indigo-100 rounded-2xl p-8">
              <h2 className="text-3xl font-bold mb-5">Questions to ask before choosing a plugin</h2>
              <div className="space-y-3">
                {buyingQuestions.map((question, index) => (
                  <div key={question} className="flex gap-3 bg-white rounded-xl border border-indigo-100 p-4">
                    <span className="text-indigo-700 font-bold">{index + 1}</span>
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
                Send your marketplace invoice setup and get a practical fit check for Lattice Invoices early access.
              </p>
              <a href={mailto} className="block text-center bg-green-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-green-500 transition mb-3">
                Request workflow review
              </a>
              <Link href="/docs/woocommerce-eu-vat-invoice-setup" className="block text-center border border-slate-200 px-6 py-3 rounded-xl font-semibold hover:border-blue-400 transition mb-3">
                Read setup guide
              </Link>
              <Link href="/blog/woocommerce-invoice-export-accounting" className="block text-center border border-slate-200 px-6 py-3 rounded-xl font-semibold hover:border-blue-400 transition mb-3">
                Accounting export guide
              </Link>
              <Link href="/blog/woocommerce-invoice-reconciliation" className="block text-center border border-slate-200 px-6 py-3 rounded-xl font-semibold hover:border-blue-400 transition">
                Reconciliation guide
              </Link>
              <div className="border-t mt-6 pt-6 space-y-3 text-sm text-slate-600">
                <div>✓ Seller-of-record workflow questions</div>
                <div>✓ Vendor payout and VAT evidence checklist</div>
                <div>✓ Direct early-access CTA</div>
              </div>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}
