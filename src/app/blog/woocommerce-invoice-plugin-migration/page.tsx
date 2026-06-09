import type { Metadata } from "next";
import Link from "next/link";

const SITE_URL = "https://latticeplugins.com";

export const metadata: Metadata = {
  title: "WooCommerce Invoice Plugin Migration Checklist for EU VAT Stores",
  description:
    "A buyer-intent WooCommerce invoice plugin migration checklist for EU VAT stores moving from a PDF invoice plugin to a VAT-ready invoice workflow.",
  alternates: {
    canonical: `${SITE_URL}/blog/woocommerce-invoice-plugin-migration`,
  },
  openGraph: {
    title: "WooCommerce invoice plugin migration checklist for EU VAT stores",
    description:
      "Plan a safer invoice plugin migration: invoice numbers, retained PDFs, VAT evidence, credit notes, email attachments, customer downloads, and accounting exports.",
    url: `${SITE_URL}/blog/woocommerce-invoice-plugin-migration`,
    siteName: "Lattice Plugins",
    type: "article",
  },
};

const migrationSteps = [
  {
    step: "1. Freeze current invoice evidence",
    detail:
      "Export existing invoice numbers, PDF URLs, order IDs, VAT rates, VAT/BTW numbers, reverse-charge notes, refund records, and accounting export files before switching plugins.",
    buyerQuestion: "Can the new plugin preserve old evidence instead of only regenerating PDFs from current order data?",
  },
  {
    step: "2. Map invoice numbering rules",
    detail:
      "Document the last invoice number, credit-note sequence, prefix format, yearly reset rule, and how draft/proforma documents are excluded from the legal invoice sequence.",
    buyerQuestion: "Can the plugin continue a sequence cleanly without duplicate or skipped legal invoice numbers?",
  },
  {
    step: "3. Rebuild VAT and reverse-charge fields",
    detail:
      "Check VAT number capture, country logic, exemption reasons, reverse-charge wording, and line-level tax display before accepting new B2B orders.",
    buyerQuestion: "Does the plugin store VAT evidence with each order and invoice, not only in a temporary checkout field?",
  },
  {
    step: "4. Test refunds and credit notes",
    detail:
      "Create a test refund, issue a credit note, verify numbering, link it to the original invoice, and confirm the accounting export shows both documents correctly.",
    buyerQuestion: "Are credit notes real documents with their own number and PDF, or just edited order totals?",
  },
  {
    step: "5. Verify delivery and customer access",
    detail:
      "Test invoice PDF email attachments, customer My Account downloads, resend flows, BACS/proforma timing, and accountant export before changing the live checkout workflow.",
    buyerQuestion: "Can finance, customers, and support retrieve the same retained document without asking a developer?",
  },
];

const scenarios = [
  {
    title: "Migrating from a basic PDF invoice plugin",
    risk: "The old plugin may not store VAT validation, reverse-charge reasons, or original PDF snapshots.",
    latticeAngle: "Use the migration review to identify which fields need retention before Lattice Invoices becomes the source of truth for new documents.",
  },
  {
    title: "Migrating from manual invoices outside WooCommerce",
    risk: "Order IDs, payment status, invoice numbers, and accountant exports often live in separate spreadsheets.",
    latticeAngle: "Map BACS/proforma, final invoice, due-date, and reconciliation steps so the WooCommerce order becomes the workflow anchor.",
  },
  {
    title: "Migrating after EU B2B growth",
    risk: "Stores add VAT IDs, reverse charge, multiple currencies, or Peppol requests after their first invoice plugin was chosen.",
    latticeAngle: "Prioritize VAT evidence, credit-note handling, customer downloads, audit trail, and accounting export before expanding B2B checkout.",
  },
];

const faq = [
  {
    q: "Can I switch WooCommerce invoice plugins without losing old invoices?",
    a: "You can switch safely only if you first export or preserve old invoice PDFs, invoice numbers, VAT evidence, credit notes, and accounting records. Do not assume the new plugin can reconstruct legally issued documents from current WooCommerce order data.",
  },
  {
    q: "What is the biggest migration risk for EU VAT stores?",
    a: "The biggest risk is losing the original evidence behind zero-VAT, reverse-charge, refunded, or B2B invoices. A migration should protect invoice numbers, VAT/BTW numbers, tax rates, exemption reasons, PDF snapshots, and credit-note links.",
  },
  {
    q: "Should old invoice numbers continue in the new plugin?",
    a: "Usually yes: finance needs a clear numbering trail. Before switching, document the last invoice number, prefixes, credit-note sequence, and reset rules, then test the next generated invoice and credit note in staging.",
  },
  {
    q: "Where does Lattice Invoices fit in a migration?",
    a: "Lattice Invoices is the early-access WooCommerce EU invoicing path for stores that need a practical migration review before replacing a PDF invoice plugin with a VAT-ready workflow covering retained PDFs, VAT evidence, credit notes, BACS/proforma timing, customer downloads, audit trail, and exports.",
  },
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "WooCommerce invoice plugin migration checklist for EU VAT stores",
  description:
    "A practical migration checklist for WooCommerce stores replacing invoice plugins while protecting invoice numbers, PDFs, VAT evidence, credit notes, and exports.",
  mainEntityOfPage: `${SITE_URL}/blog/woocommerce-invoice-plugin-migration`,
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
  "mailto:support@latticeplugins.com?subject=WooCommerce%20invoice%20plugin%20migration%20review&body=Hi%20Lattice%2C%0A%0AI%20want%20a%20WooCommerce%20invoice%20plugin%20migration%20review.%0A%0AStore%20URL%3A%20%0ACountry%3A%20%0ACurrent%20invoice%20plugin%3A%20%0ALast%20invoice%20number%20%2F%20prefix%3A%20%0ACredit-note%20workflow%3A%20%0AVAT%2FBTW%20number%20workflow%3A%20%0APayment%20methods%20(card%2FBACS%2Fother)%3A%20%0AAccounting%20software%3A%20";

export default function WooCommerceInvoicePluginMigrationPage() {
  return (
    <main className="min-h-screen bg-slate-50">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <section className="bg-gradient-to-br from-slate-950 via-indigo-950 to-blue-900 text-white">
        <div className="max-w-5xl mx-auto px-6 py-16 lg:py-20">
          <p className="uppercase tracking-[0.3em] text-sm text-blue-200 mb-4">WooCommerce invoice migration</p>
          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
            Switch WooCommerce invoice plugins without losing VAT evidence, PDFs, or invoice numbers.
          </h1>
          <p className="text-xl text-blue-50 leading-relaxed max-w-3xl mb-8">
            EU VAT stores cannot treat invoice migration as a theme change. You need a plan for old PDFs, sequential numbers, credit notes, VAT/BTW proof, reverse-charge wording, customer downloads, and accounting exports before the new plugin goes live.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href={mailto} className="bg-blue-500 text-white px-8 py-4 rounded-xl font-semibold hover:bg-blue-400 transition shadow-lg text-center">
              Request €49 migration review
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
              <h2 className="text-3xl font-bold mb-4">Why invoice migration breaks after go-live</h2>
              <p className="text-slate-700 leading-relaxed mb-4">
                Most WooCommerce invoice plugins can generate a fresh PDF for a current order. Migration risk is different: can the store prove what was issued before the switch, continue legal numbering, handle refunded orders, and keep old VAT evidence available for finance?
              </p>
              <p className="text-slate-700 leading-relaxed">
                Use this checklist before replacing your invoice plugin, moving from spreadsheets, or rebuilding a B2B checkout that already has EU VAT invoices in circulation.
              </p>
            </div>

            <div className="bg-blue-50 border border-blue-100 rounded-2xl p-8">
              <h2 className="text-3xl font-bold mb-5">Invoice plugin migration checklist</h2>
              <div className="space-y-4">
                {migrationSteps.map((item) => (
                  <div key={item.step} className="bg-white rounded-xl border border-blue-100 p-5">
                    <h3 className="text-xl font-bold mb-2">{item.step}</h3>
                    <p className="text-slate-700 leading-relaxed mb-2">{item.detail}</p>
                    <p className="text-slate-600 leading-relaxed"><strong>Buyer question:</strong> {item.buyerQuestion}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-2xl border shadow-sm p-8">
              <h2 className="text-3xl font-bold mb-5">Common migration scenarios</h2>
              <div className="grid gap-4">
                {scenarios.map((item) => (
                  <div key={item.title} className="border rounded-xl p-5">
                    <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                    <p className="text-slate-700 leading-relaxed mb-2"><strong>Risk:</strong> {item.risk}</p>
                    <p className="text-slate-700 leading-relaxed"><strong>Lattice angle:</strong> {item.latticeAngle}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-emerald-50 border border-emerald-100 rounded-2xl p-8">
              <h2 className="text-3xl font-bold mb-4">Early-access offer: €49 migration review</h2>
              <p className="text-slate-700 leading-relaxed mb-5">
                Send your current invoice plugin, last invoice number, VAT workflow, refund process, payment methods, and accounting software. Lattice will map the migration risks and the fields that must be preserved before switching your WooCommerce invoicing workflow.
              </p>
              <a href={mailto} className="inline-flex bg-emerald-600 text-white px-7 py-3 rounded-xl font-semibold hover:bg-emerald-700 transition">
                Send my migration details
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
              <p className="text-sm uppercase tracking-[0.2em] text-blue-700 font-semibold mb-3">Lattice Invoices early access</p>
              <h2 className="text-2xl font-bold mb-3">Replacing an invoice plugin?</h2>
              <p className="text-slate-600 mb-5">
                Get a focused migration review for invoice numbers, retained PDFs, VAT evidence, credit notes, customer downloads, BACS/proforma timing, and accountant exports.
              </p>
              <a href={mailto} className="block text-center bg-slate-950 text-white px-5 py-3 rounded-xl font-semibold hover:bg-slate-800 transition mb-3">
                Request migration review
              </a>
              <Link href="/docs/woocommerce-eu-vat-invoice-setup" className="block text-center border border-slate-200 px-5 py-3 rounded-xl font-semibold hover:bg-slate-50 transition">
                Read setup guide
              </Link>
            </div>

            <div className="bg-indigo-50 rounded-2xl border border-indigo-100 p-6">
              <h3 className="text-xl font-bold mb-3">Related invoice guides</h3>
              <ul className="space-y-3 text-indigo-900 font-medium">
                <li><Link href="/blog/woocommerce-invoice-plugin-comparison" className="hover:underline">Invoice plugin comparison</Link></li>
                <li><Link href="/blog/woocommerce-invoice-numbering" className="hover:underline">Invoice numbering</Link></li>
                <li><Link href="/blog/woocommerce-vat-number-checkout-field" className="hover:underline">VAT number checkout field</Link></li>
                <li><Link href="/blog/woocommerce-credit-notes-refunds" className="hover:underline">Credit notes and refunds</Link></li>
                <li><Link href="/blog/woocommerce-invoice-data-retention" className="hover:underline">Invoice data retention</Link></li>
              </ul>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}
