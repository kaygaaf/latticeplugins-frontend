import type { Metadata } from "next";
import Link from "next/link";

const SITE_URL = "https://latticeplugins.com";
const SLUG = "/blog/woocommerce-invoice-custom-fields";

export const metadata: Metadata = {
  title: "WooCommerce Invoice Custom Fields for EU VAT Workflows",
  description:
    "A buyer-intent guide for WooCommerce stores that need VAT IDs, PO numbers, cost centres, project references, and accountant notes on invoice PDFs and exports.",
  alternates: {
    canonical: `${SITE_URL}${SLUG}`,
  },
  openGraph: {
    title: "WooCommerce invoice custom fields for EU VAT stores",
    description:
      "What to check before buying a WooCommerce invoice plugin when B2B buyers need VAT IDs, PO numbers, cost centres, references, and exportable invoice metadata.",
    url: `${SITE_URL}${SLUG}`,
    siteName: "Lattice Plugins",
    type: "article",
  },
};

const readinessChecklist = [
  {
    title: "1. Decide which fields are invoice evidence, not just checkout notes",
    detail:
      "B2B buyers often enter VAT ID, PO number, department, cost centre, project code, delivery reference, and invoice email. These fields should travel from checkout to order, invoice PDF, customer download, and accountant export.",
    buyerQuestion: "Does the invoice plugin store custom fields as structured invoice metadata instead of free-text order notes?",
  },
  {
    title: "2. Show the right custom fields on the PDF template",
    detail:
      "A PO number hidden in wp-admin does not help the customer. The PDF should place buyer references in predictable invoice sections without breaking VAT totals, reverse-charge wording, or credit-note formatting.",
    buyerQuestion: "Can the PDF template expose custom fields without manual PDF editing after every order?",
  },
  {
    title: "3. Preserve field values on refunds and credit notes",
    detail:
      "If the invoice is corrected later, the credit note should keep the same buyer reference, PO number, VAT treatment, and original invoice link so accounting can match the documents.",
    buyerQuestion: "Do credit notes inherit and link the relevant invoice custom fields?",
  },
  {
    title: "4. Make fields searchable and exportable",
    detail:
      "Custom invoice data becomes useful when finance can search by PO number, filter B2B orders needing review, and export fields alongside invoice number, VAT rate, totals, PDF URL, and payment status.",
    buyerQuestion: "Will the accountant receive these custom fields in CSV/export rows?",
  },
  {
    title: "5. Validate required fields by customer type",
    detail:
      "A B2C customer should not be blocked by a PO field, while a B2B net-terms buyer may require PO number, invoice email, and VAT ID before the order can become invoice-ready.",
    buyerQuestion: "Can the workflow require fields only for the buyer types that need them?",
  },
];

const scenarios = [
  {
    title: "Corporate buyer needs a PO number on every invoice",
    trigger: "A procurement team refuses to pay invoices unless the PDF includes their purchase-order reference.",
    workflow:
      "Capture PO number at checkout or admin review, store it on the invoice record, print it in the PDF header, include it in reminders, and export it for reconciliation.",
  },
  {
    title: "Agency client needs project and cost-centre references",
    trigger: "A B2B client orders several services or plugins and wants the invoice booked to the right internal budget.",
    workflow:
      "Attach project code and cost centre to the order, preserve them through final invoice, credit notes, customer downloads, and accountant handoff.",
  },
  {
    title: "VAT-exempt or reverse-charge orders need review notes",
    trigger: "A valid VAT number or exemption reason must be visible for finance before invoice PDFs are issued.",
    workflow:
      "Store validation state and review notes as invoice metadata, show the correct reverse-charge wording, and keep the evidence available for audit trail exports.",
  },
];

const weakVsLattice = [
  {
    weak: "Custom checkout fields are saved as order notes that never appear on the invoice PDF.",
    lattice: "Buyer references become invoice metadata that can print on PDFs, customer downloads, reminders, credit notes, and exports.",
  },
  {
    weak: "Admins manually edit PDF templates or email text when a PO number is missing.",
    lattice: "Field rules make B2B invoice references required before the order is treated as invoice-ready.",
  },
  {
    weak: "Refunds and corrections lose the original project, PO, and VAT review context.",
    lattice: "Credit notes preserve the original custom-field trail and link back to the corrected invoice.",
  },
  {
    weak: "Accountant exports include totals but not the custom fields finance uses to reconcile invoices.",
    lattice: "Exports include invoice number, order ID, VAT metadata, payment state, PDF link, PO number, project code, and review status.",
  },
];

const faq = [
  {
    q: "Can WooCommerce invoice PDFs include custom checkout fields?",
    a: "Yes, but the important question is whether the field is treated as structured invoice metadata. A plugin should carry the field from checkout to order, PDF, customer account, credit note, reminders, and export rows.",
  },
  {
    q: "Which custom invoice fields matter most for B2B stores?",
    a: "The common fields are VAT ID, PO number, invoice email, buyer reference, cost centre, project code, delivery/reference number, exemption reason, and finance review notes.",
  },
  {
    q: "Should a PO number be required during checkout?",
    a: "Only for buyer types that need it. A good workflow lets stores require PO numbers for B2B, net-terms, quote, or manual-invoice flows without blocking normal consumer checkout.",
  },
  {
    q: "Where does Lattice Invoices fit?",
    a: "Lattice Invoices early access is aimed at WooCommerce stores that need EU VAT/BTW invoice workflows with structured metadata: VAT fields, PO numbers, invoice PDFs, credit notes, customer downloads, reminders, and accountant exports.",
  },
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "WooCommerce invoice custom fields for EU VAT workflows",
  description:
    "A buyer-intent guide for WooCommerce stores that need VAT IDs, PO numbers, cost centres, project references, and accountant notes on invoice PDFs and exports.",
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

const mailto =
  "mailto:support@latticeplugins.com?subject=WooCommerce%20invoice%20custom%20fields%20workflow%20review&body=Hi%20Lattice%2C%0A%0AI%20want%20a%20WooCommerce%20invoice%20custom%20fields%20workflow%20review.%0A%0AStore%20URL%3A%20%0ACountry%3A%20%0AB2B%20or%20B2C%3A%20%0AFields%20needed%20on%20invoice%20PDF%3A%20%0ACurrent%20checkout%20fields%3A%20%0ACurrent%20invoice%20PDF%20plugin%3A%20%0AExport%2Faccounting%20needs%3A%20";

export default function WooCommerceInvoiceCustomFieldsPage() {
  return (
    <main className="min-h-screen bg-slate-50">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <section className="bg-gradient-to-br from-slate-950 via-blue-950 to-cyan-900 text-white">
        <div className="max-w-5xl mx-auto px-6 py-16 lg:py-20">
          <p className="uppercase tracking-[0.3em] text-sm text-cyan-200 mb-4">WooCommerce invoice custom fields</p>
          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
            Put VAT IDs, PO numbers, and buyer references on the invoice without manual admin.
          </h1>
          <p className="text-xl text-cyan-50 leading-relaxed max-w-3xl mb-8">
            B2B WooCommerce orders often fail at the boring finance details: purchase-order numbers, project codes, cost centres, invoice email addresses, VAT review notes, and export fields. Treat those as invoice metadata, not disposable checkout notes.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href={mailto} className="bg-green-400 text-slate-950 px-8 py-4 rounded-xl font-semibold hover:bg-green-300 transition shadow-lg text-center">
              Request €49 custom-field workflow review
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
              <h2 className="text-3xl font-bold mb-4">Why invoice custom fields become a sales problem</h2>
              <p className="text-slate-700 leading-relaxed mb-4">
                A business buyer may happily place an order but later refuse payment because the invoice lacks their PO number, project reference, or invoice email. Support then has to regenerate PDFs, edit templates, or send manual corrections.
              </p>
              <p className="text-slate-700 leading-relaxed">
                Lattice Invoices is being shaped for that workflow: capture custom invoice fields once, keep them attached to the order and invoice record, expose them on PDFs and customer downloads, and include them in accountant-ready exports.
              </p>
            </div>

            <div className="bg-cyan-50 border border-cyan-100 rounded-2xl p-8">
              <h2 className="text-3xl font-bold mb-5">Custom invoice field readiness checklist</h2>
              <div className="space-y-4">
                {readinessChecklist.map((item) => (
                  <div key={item.title} className="bg-white rounded-xl border border-cyan-100 p-5">
                    <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                    <p className="text-slate-700 leading-relaxed mb-2">{item.detail}</p>
                    <p className="text-slate-600 leading-relaxed"><strong>Buyer question:</strong> {item.buyerQuestion}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-2xl border shadow-sm p-8">
              <h2 className="text-3xl font-bold mb-5">Three custom-field scenarios to test</h2>
              <div className="grid gap-4">
                {scenarios.map((item) => (
                  <div key={item.title} className="border rounded-xl p-5">
                    <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                    <p className="text-slate-700 leading-relaxed mb-2"><strong>Trigger:</strong> {item.trigger}</p>
                    <p className="text-slate-700 leading-relaxed"><strong>Workflow:</strong> {item.workflow}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-2xl border shadow-sm p-8">
              <h2 className="text-3xl font-bold mb-5">Weak custom fields vs invoice-ready metadata</h2>
              <div className="overflow-x-auto">
                <table className="min-w-full text-left border-collapse">
                  <thead>
                    <tr className="border-b">
                      <th className="py-3 pr-4 font-semibold">Weak workflow</th>
                      <th className="py-3 pr-4 font-semibold">Lattice Invoices direction</th>
                    </tr>
                  </thead>
                  <tbody>
                    {weakVsLattice.map((row) => (
                      <tr key={row.weak} className="border-b last:border-b-0 align-top">
                        <td className="py-4 pr-4 text-slate-700">{row.weak}</td>
                        <td className="py-4 pr-4 text-slate-700">{row.lattice}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div className="bg-blue-50 border border-blue-100 rounded-2xl p-8">
              <h2 className="text-3xl font-bold mb-5">FAQ</h2>
              <div className="space-y-5">
                {faq.map((item) => (
                  <div key={item.q}>
                    <h3 className="text-xl font-bold mb-2">{item.q}</h3>
                    <p className="text-slate-700 leading-relaxed">{item.a}</p>
                  </div>
                ))}
              </div>
            </div>
          </article>

          <aside className="space-y-6">
            <div className="bg-white rounded-2xl border shadow-sm p-6 sticky top-6">
              <p className="text-sm uppercase tracking-widest text-blue-700 font-semibold mb-2">Early-access qualifier</p>
              <h2 className="text-2xl font-bold mb-3">Need invoice custom fields?</h2>
              <p className="text-slate-700 leading-relaxed mb-5">
                Send your store URL, current invoice plugin, the custom fields you need on PDFs, and whether the fields are for B2B, net terms, VAT review, or accountant exports. The offer is a €49 workflow review for stores that fit the Lattice Invoices early-access path.
              </p>
              <a href={mailto} className="block text-center bg-blue-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-blue-700 transition mb-3">
                Request custom-field invoice review
              </a>
              <Link href="/woocommerce-eu-vat-invoices" className="block text-center border border-slate-200 px-6 py-3 rounded-xl font-semibold hover:border-blue-400 transition mb-3">
                View Lattice Invoices landing page
              </Link>
              <Link href="/docs/woocommerce-eu-vat-invoice-setup" className="block text-center border border-slate-200 px-6 py-3 rounded-xl font-semibold hover:border-blue-400 transition mb-3">
                Read setup guide
              </Link>
              <div className="border-t mt-6 pt-6 space-y-3 text-sm text-slate-600">
                <div>✓ VAT ID, PO number, project-code and cost-centre use cases</div>
                <div>✓ PDF template, customer download and export workflow</div>
                <div>✓ Built for B2B invoice-readiness conversations</div>
              </div>
            </div>

            <div className="bg-slate-900 text-white rounded-2xl p-6">
              <h3 className="text-xl font-bold mb-3">Related invoice guides</h3>
              <div className="space-y-3 text-sm">
                <Link href="/blog/woocommerce-purchase-order-invoices" className="block text-cyan-200 hover:text-white">Purchase order invoices</Link>
                <Link href="/blog/woocommerce-net-terms-invoice-plugin" className="block text-cyan-200 hover:text-white">Net terms invoice plugin</Link>
                <Link href="/blog/woocommerce-vies-vat-validation" className="block text-cyan-200 hover:text-white">VIES VAT validation</Link>
                <Link href="/blog/woocommerce-invoice-export-accounting" className="block text-cyan-200 hover:text-white">Accounting export workflow</Link>
              </div>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}
