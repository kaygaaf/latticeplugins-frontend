import type { Metadata } from "next";
import Link from "next/link";

const SITE_URL = "https://latticeplugins.com";

export const metadata: Metadata = {
  title: "WooCommerce Manufacturing Parts Invoices: PO, VAT, and PDFs",
  description:
    "A buyer-intent guide for WooCommerce manufacturers and spare-parts stores that need PO references, serial numbers, VAT fields, invoice PDFs, credit notes, and accountant export.",
  alternates: {
    canonical: `${SITE_URL}/blog/woocommerce-manufacturing-parts-invoices`,
  },
  openGraph: {
    title: "WooCommerce manufacturing parts invoices: PO, VAT, and PDFs",
    description:
      "Plan invoice-ready WooCommerce workflows for manufacturers, spare-parts sellers, industrial suppliers, and equipment stores with PO references, serial numbers, VAT evidence, PDFs, refunds, and accounting handoff.",
    url: `${SITE_URL}/blog/woocommerce-manufacturing-parts-invoices`,
    siteName: "Lattice Plugins",
    type: "article",
  },
};

const workflowChecks = [
  {
    title: "PO and cost-center details are captured before payment",
    detail:
      "Industrial buyers often require a purchase order, cost center, buyer reference, or accounts-payable contact. If that data is collected after checkout, support has to correct the invoice manually.",
  },
  {
    title: "Part numbers, batch codes, and serial numbers remain invoice-visible",
    detail:
      "Manufacturing and spare-parts orders are audited by SKU, serial, batch, warranty, and machine model. The invoice PDF should show enough context for the buyer and accountant to reconcile the order.",
  },
  {
    title: "VAT and reverse-charge evidence is stored as order metadata",
    detail:
      "EU B2B parts orders need billing country, VAT/BTW number, VAT rate, VAT amount, and reverse-charge state stored cleanly instead of mixed into customer notes.",
  },
  {
    title: "Returns, RMAs, and partial refunds create linked credit notes",
    detail:
      "A returned component, warranty exchange, or partial refund should not overwrite the original invoice. Finance needs a separate credit note tied to the original invoice and order.",
  },
  {
    title: "Accountant export includes invoice PDF and operational references",
    detail:
      "Month-end export should include invoice number, VAT ID, PO number, SKU/serial context, credit-note relationship, PDF URL, and payment status in one reliable record.",
  },
];

const scenarios = [
  [
    "Spare-parts order for a machine repair",
    "The buyer needs PO, machine model, SKU, and serial context on the invoice, but WooCommerce only exports a generic order line.",
    "Capture PO/reference fields at checkout and keep part identifiers invoice-visible for PDF and export.",
  ],
  [
    "Industrial buyer requests reverse charge",
    "VAT number and reverse-charge evidence are added in order notes after payment, making invoice corrections likely.",
    "Store VAT/BTW number, billing country, VAT treatment, and invoice number as structured order metadata.",
  ],
  [
    "Partial return through RMA",
    "Support edits the invoice or sends a manual PDF when only one component is returned.",
    "Create a refund-linked credit note with SKU/serial context while preserving the original invoice.",
  ],
  [
    "Accounting asks for a monthly PO export",
    "Operations sends order exports, PDF files, and PO screenshots separately.",
    "Export invoice number, PO, buyer VAT ID, PDF link, credit-note link, and payment state together.",
  ],
];

const qualificationSignals = [
  { signal: "B2B buyers require PO references or cost centers", score: "+2" },
  { signal: "Orders include serial numbers, batch codes, machine models, or warranty references", score: "+2" },
  { signal: "Returns or RMAs regularly need credit notes", score: "+2" },
  { signal: "Accountant export currently needs screenshots or manual PDF matching", score: "+1" },
  { signal: "Mostly low-value B2C accessory orders with no invoice requests", score: "0" },
];

const faq = [
  {
    q: "Why do manufacturing and spare-parts stores need a specific invoice workflow?",
    a: "Because the invoice often has to prove more than payment. Buyers and accountants may need PO references, machine or asset context, SKU/serial details, VAT evidence, PDF files, credit notes, and exportable records.",
  },
  {
    q: "Can WooCommerce order notes handle PO numbers and serial numbers?",
    a: "Notes can store text, but invoice workflows work better when PO, VAT ID, invoice email, serial number, warranty, and credit-note links are separate fields that can be rendered on PDFs and exported.",
  },
  {
    q: "Where does Lattice Invoices fit?",
    a: "Lattice Invoices early access is positioned for WooCommerce stores that need invoice-ready order metadata: B2B fields, VAT/BTW details, invoice PDFs, My Account downloads, refund credit notes, and accountant handoff.",
  },
  {
    q: "What should I send for a €49 manufacturing invoice review?",
    a: "Send store URL, country, product types, monthly invoice requests, PO/reference needs, SKU or serial-number requirements, refund/RMA workflow, VAT treatment, and accountant export requirements.",
  },
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "WooCommerce manufacturing parts invoices: PO, VAT, and PDFs",
  description:
    "Buyer-intent invoice workflow guide for manufacturers and spare-parts stores using WooCommerce with PO references, SKU/serial data, VAT invoices, credit notes, customer downloads, and accounting export.",
  mainEntityOfPage: `${SITE_URL}/blog/woocommerce-manufacturing-parts-invoices`,
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

const mailto =
  "mailto:support@latticeplugins.com?subject=WooCommerce%20manufacturing%20parts%20invoice%20workflow%20review&body=Hi%20Lattice%2C%0A%0AI%20want%20a%20WooCommerce%20manufacturing%2Fspare-parts%20invoice%20workflow%20review%20for%20Lattice%20Invoices%20early%20access.%0A%0AStore%20URL%3A%20%0ACountry%3A%20%0AProducts%20sold%20%28parts%2C%20machines%2C%20service%20kits%29%3A%20%0AB2B%20or%20B2C%3A%20%0APO%2Fcost-center%20fields%20needed%3A%20%0ASerial%2Fbatch%2Fmachine%20references%20needed%3A%20%0AVAT%2FBTW%20fields%20needed%3A%20%0AReturns%2FRMA%2Fcredit-note%20needs%3A%20%0AAccountant%20export%20requirements%3A%20";

export default function WooCommerceManufacturingPartsInvoicesPage() {
  return (
    <main className="min-h-screen bg-slate-50">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <section className="bg-gradient-to-br from-slate-950 via-indigo-950 to-cyan-900 text-white">
        <div className="max-w-5xl mx-auto px-6 py-16 lg:py-20">
          <p className="uppercase tracking-[0.3em] text-sm text-cyan-200 mb-4">WooCommerce manufacturing parts invoices</p>
          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
            Create manufacturing and spare-parts invoices with PO, serial, VAT, and credit-note context.
          </h1>
          <p className="text-xl text-cyan-50 leading-relaxed max-w-3xl mb-8">
            Industrial WooCommerce stores need invoices that satisfy purchasing, operations, and accounting: PO references, SKU and serial context, VAT evidence, PDF delivery, customer downloads, and refund-linked credit notes.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href={mailto} className="bg-cyan-500 text-slate-950 px-8 py-4 rounded-xl font-semibold hover:bg-cyan-400 transition shadow-lg text-center">
              Request €49 manufacturing invoice review
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
              <h2 className="text-3xl font-bold mb-4">The buying problem: operations data and invoice data split apart</h2>
              <p className="text-slate-700 leading-relaxed mb-4">
                A normal WooCommerce receipt may be enough for a simple consumer order. It is not enough when the buyer is an engineering team, purchasing department, installer, reseller, or maintenance company that expects PO references, asset context, VAT details, and a PDF invoice they can reconcile later.
              </p>
              <p className="text-slate-700 leading-relaxed">
                This guide turns that pain into a practical pre-purchase checklist for Lattice Invoices early access. If three or more signals below are true, the invoice workflow is likely a stronger money problem than another generic PDF template.
              </p>
            </div>

            <div className="bg-cyan-50 border border-cyan-100 rounded-2xl p-8">
              <h2 className="text-3xl font-bold mb-5">Manufacturing invoice readiness checklist</h2>
              <div className="space-y-4">
                {workflowChecks.map((item) => (
                  <div key={item.title} className="bg-white rounded-xl border border-cyan-100 p-5">
                    <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                    <p className="text-slate-700 leading-relaxed">{item.detail}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-2xl border shadow-sm p-8 overflow-hidden">
              <h2 className="text-3xl font-bold mb-6">Four invoice scenarios to test before buying</h2>
              <div className="overflow-x-auto">
                <table className="min-w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-slate-100 text-slate-700">
                      <th className="p-4 rounded-l-xl">Scenario</th>
                      <th className="p-4">Manual risk</th>
                      <th className="p-4 rounded-r-xl">Lattice Invoices direction</th>
                    </tr>
                  </thead>
                  <tbody>
                    {scenarios.map(([scenario, risk, workflow]) => (
                      <tr key={scenario} className="border-b border-slate-100 align-top">
                        <td className="p-4 font-semibold text-slate-900">{scenario}</td>
                        <td className="p-4 text-slate-700">{risk}</td>
                        <td className="p-4 text-slate-700">{workflow}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div className="bg-white rounded-2xl border shadow-sm p-8">
              <h2 className="text-3xl font-bold mb-5">Should this store request €49 early access?</h2>
              <div className="space-y-3">
                {qualificationSignals.map((item) => (
                  <div key={item.signal} className="flex items-start justify-between gap-4 rounded-xl bg-slate-50 border border-slate-100 p-4">
                    <span className="text-slate-800">{item.signal}</span>
                    <span className="font-bold text-cyan-700">{item.score}</span>
                  </div>
                ))}
              </div>
              <p className="mt-5 text-slate-700 leading-relaxed">
                Score 3+ points? Send the fit request with your store details, VAT setup, PO fields, serial/batch requirements, and RMA workflow so the invoice setup can be qualified before a paid early-access license.
              </p>
            </div>

            <div className="bg-slate-950 text-white rounded-2xl p-8">
              <h2 className="text-3xl font-bold mb-4">Early-access offer: €49 manufacturing invoice workflow review</h2>
              <p className="text-slate-200 leading-relaxed mb-5">
                The fastest purchase path is a store-specific review: send the current checkout, PO/reference requirements, product identifiers, VAT countries, returns/RMA cases, and accounting handoff. Lattice can reply with whether the €49 invoice workflow is a fit.
              </p>
              <a href={mailto} className="inline-flex bg-cyan-400 text-slate-950 px-7 py-3 rounded-xl font-semibold hover:bg-cyan-300 transition">
                Send manufacturing invoice fit request
              </a>
            </div>

            <div className="bg-white rounded-2xl border shadow-sm p-8">
              <h2 className="text-3xl font-bold mb-6">FAQ</h2>
              <div className="space-y-5">
                {faq.map((item) => (
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
              <p className="text-sm uppercase tracking-[0.2em] text-cyan-700 font-semibold mb-3">Lattice Invoices early access</p>
              <h2 className="text-2xl font-bold mb-3">Selling parts, machines, or industrial supplies through WooCommerce?</h2>
              <p className="text-slate-600 mb-5">
                Get a practical workflow review for PO references, serial data, VAT fields, invoice PDFs, customer downloads, refund credit notes, and accountant export.
              </p>
              <a href={mailto} className="block text-center bg-slate-950 text-white px-5 py-3 rounded-xl font-semibold hover:bg-slate-800 transition mb-3">
                Request manufacturing invoice review
              </a>
              <Link href="/blog/woocommerce-wholesale-invoice-plugin" className="block text-center border border-slate-200 px-5 py-3 rounded-xl font-semibold hover:bg-slate-50 transition mb-3">
                Wholesale invoice guide
              </Link>
              <Link href="/blog/woocommerce-purchase-order-invoices" className="block text-center border border-slate-200 px-5 py-3 rounded-xl font-semibold hover:bg-slate-50 transition mb-3">
                Purchase order invoice guide
              </Link>
              <Link href="/blog/woocommerce-construction-vat-invoices" className="block text-center border border-slate-200 px-5 py-3 rounded-xl font-semibold hover:bg-slate-50 transition mb-3">
                Contractor invoice guide
              </Link>
              <Link href="/tools/woocommerce-invoice-setup-brief" className="block text-center border border-slate-200 px-5 py-3 rounded-xl font-semibold hover:bg-slate-50 transition">
                Generate setup brief
              </Link>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}
