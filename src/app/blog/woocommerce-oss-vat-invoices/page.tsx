import type { Metadata } from "next";
import Link from "next/link";

const SITE_URL = "https://latticeplugins.com";
const SLUG = "/blog/woocommerce-oss-vat-invoices";

export const metadata: Metadata = {
  title: "WooCommerce OSS VAT Invoices for EU Cross-Border Stores",
  description:
    "A buyer-intent guide for WooCommerce stores using EU OSS VAT rules: destination VAT evidence, invoice PDFs, credit notes, customer downloads, and accountant export readiness.",
  alternates: {
    canonical: `${SITE_URL}${SLUG}`,
  },
  openGraph: {
    title: "WooCommerce OSS VAT invoice workflow for EU stores",
    description:
      "What WooCommerce stores should check before buying an invoice plugin for EU OSS VAT, destination tax evidence, refunds, credit notes, and accountant handoff.",
    url: `${SITE_URL}${SLUG}`,
    siteName: "Lattice Plugins",
    type: "article",
  },
};

const ossChecklist = [
  {
    title: "1. Preserve the VAT country decision on every order",
    detail:
      "OSS reporting depends on the country used for the tax decision. The invoice workflow should store billing country, shipping country, VAT rate, VAT amount, and any override so the accountant can reconcile the order later.",
    buyerQuestion: "Can the invoice export show which EU country and VAT rate were applied to each order?",
  },
  {
    title: "2. Keep invoice numbers separate from messy order IDs",
    detail:
      "WooCommerce order IDs can include failed payments and abandoned attempts. OSS stores still need clean invoice sequences and retained PDFs that match paid, refunded, and corrected orders.",
    buyerQuestion: "Does the plugin create a stable invoice number only when the order is invoiceable?",
  },
  {
    title: "3. Make refunds create credit-note evidence",
    detail:
      "If a German or Belgian OSS order is refunded, the credit note should preserve the original tax country, rate, invoice number, refund amount, and customer PDF trail.",
    buyerQuestion: "Are credit notes linked back to the original invoice and tax decision?",
  },
  {
    title: "4. Show customer-facing VAT details clearly",
    detail:
      "Customers and accountants need the same story: invoice date, invoice number, seller VAT details, buyer details, destination VAT rate, totals, and any B2B reverse-charge decision.",
    buyerQuestion: "Can the PDF template display OSS VAT evidence without manual editing?",
  },
  {
    title: "5. Export accountant-ready rows, not screenshots",
    detail:
      "A practical OSS workflow should export invoice number, customer country, VAT rate, VAT amount, gross total, refund links, PDF URL, and order status in one place.",
    buyerQuestion: "Will the export reduce quarter-end OSS cleanup work?",
  },
];

const scenarios = [
  {
    title: "B2C sale to another EU country",
    trigger: "A Dutch WooCommerce store sells a digital product to a Spanish consumer and charges Spanish VAT under OSS rules.",
    workflow:
      "Store the Spanish VAT rate and country decision on the order, issue the invoice with the correct rate and totals, retain the PDF, and include the order in the accountant export for OSS reporting.",
  },
  {
    title: "B2B buyer enters a valid VAT number",
    trigger: "A French company buys from the same store and provides a VAT ID that changes the invoice treatment.",
    workflow:
      "Store the VAT ID, validation/manual-review state, reverse-charge wording decision, invoice PDF, and export evidence so the B2B order does not get mixed into normal B2C OSS reporting.",
  },
  {
    title: "Refund after OSS invoice was issued",
    trigger: "The customer requests a refund after the invoice PDF has already been emailed and downloaded.",
    workflow:
      "Keep the original invoice immutable, create a linked credit note with the same VAT-country evidence, and expose both documents to the customer and accountant.",
  },
];

const weakVsStrong = [
  {
    weak: "Invoice PDF only shows the final total and customer address.",
    strong: "Invoice PDF and export retain country, VAT rate, VAT amount, invoice number, and refund relationship.",
  },
  {
    weak: "Refunds are handled as WooCommerce notes without separate credit-note documents.",
    strong: "Refunds generate linked credit-note records so OSS adjustments have a document trail.",
  },
  {
    weak: "Quarter-end OSS reporting requires manual matching across WooCommerce, payment provider, and PDF plugin.",
    strong: "Order, invoice, VAT, PDF, and credit-note data remain connected in WooCommerce for export.",
  },
  {
    weak: "B2B reverse-charge orders are mixed with B2C OSS orders because the VAT evidence lives in custom notes.",
    strong: "VAT ID, validation status, reverse-charge wording, and invoice treatment are explicit invoice fields.",
  },
];

const faq = [
  {
    q: "Does WooCommerce handle OSS VAT invoices by itself?",
    a: "WooCommerce can calculate and store tax totals when configured correctly, but invoice PDFs, retained invoice numbers, credit-note documents, customer downloads, and accountant-ready OSS evidence usually require a dedicated workflow.",
  },
  {
    q: "Is OSS invoicing only relevant for digital products?",
    a: "No. OSS is most visible for cross-border EU B2C sales, including many digital and physical-goods cases. The important invoice workflow is preserving the country, VAT rate, VAT amount, and correction trail used for each order.",
  },
  {
    q: "What should I ask before buying an invoice plugin for OSS?",
    a: "Ask whether it stores destination-country tax evidence, creates stable invoice numbers, handles credit notes for refunds, exposes invoice PDFs in customer emails/My Account, and exports the fields your accountant needs for OSS reporting.",
  },
  {
    q: "Where does Lattice Invoices fit?",
    a: "Lattice Invoices early access is positioned for WooCommerce stores that need EU VAT/BTW invoice workflows: OSS-ready tax evidence, VAT fields, PDF invoices, credit notes, customer downloads, and accountant export readiness.",
  },
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "WooCommerce OSS VAT invoices for EU cross-border stores",
  description:
    "A buyer-intent guide for WooCommerce stores that need OSS VAT invoice evidence, customer PDF delivery, credit notes, and accountant exports.",
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
  "mailto:support@latticeplugins.com?subject=WooCommerce%20OSS%20VAT%20invoice%20workflow%20review&body=Hi%20Lattice%2C%0A%0AI%20want%20a%20WooCommerce%20OSS%20VAT%20invoice%20workflow%20review.%0A%0AStore%20URL%3A%20%0ACountry%3A%20%0AEU%20countries%20served%3A%20%0AB2C%20or%20B2B%3A%20%0ACurrent%20tax%20plugin%3A%20%0AInvoice%20PDF%20plugin%3A%20%0ARefund%2Fcredit-note%20workflow%3A%20%0AAccountant%20export%20needs%3A%20";

export default function WooCommerceOssVatInvoicesPage() {
  return (
    <main className="min-h-screen bg-slate-50">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <section className="bg-gradient-to-br from-slate-950 via-blue-950 to-cyan-900 text-white">
        <div className="max-w-5xl mx-auto px-6 py-16 lg:py-20">
          <p className="uppercase tracking-[0.3em] text-sm text-cyan-200 mb-4">WooCommerce OSS VAT invoices</p>
          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
            Make WooCommerce OSS VAT invoices easier to prove at quarter end.
          </h1>
          <p className="text-xl text-cyan-50 leading-relaxed max-w-3xl mb-8">
            EU cross-border stores need more than a PDF attachment. They need invoice numbers, destination VAT evidence, credit notes, customer downloads, and exports that help the accountant explain OSS totals without manual cleanup.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href={mailto} className="bg-green-400 text-slate-950 px-8 py-4 rounded-xl font-semibold hover:bg-green-300 transition shadow-lg text-center">
              Request €49 OSS invoice review
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
              <h2 className="text-3xl font-bold mb-4">Why OSS VAT belongs in the invoice workflow</h2>
              <p className="text-slate-700 leading-relaxed mb-4">
                OSS reporting pain usually appears after sales are already happening: the store accepts EU orders, tax totals exist somewhere in WooCommerce, but invoice PDFs, refunds, payment records, and accountant exports do not tell one consistent story.
              </p>
              <p className="text-slate-700 leading-relaxed">
                Lattice Invoices is being shaped around that buyer problem. The goal is to keep invoice numbers, VAT country decisions, customer PDF delivery, refund credit notes, and accountant export evidence connected to the WooCommerce order.
              </p>
            </div>

            <div className="bg-cyan-50 border border-cyan-100 rounded-2xl p-8">
              <h2 className="text-3xl font-bold mb-5">OSS VAT invoice readiness checklist</h2>
              <div className="space-y-4">
                {ossChecklist.map((item) => (
                  <div key={item.title} className="bg-white rounded-xl border border-cyan-100 p-5">
                    <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                    <p className="text-slate-700 leading-relaxed mb-2">{item.detail}</p>
                    <p className="text-slate-600 leading-relaxed"><strong>Buyer question:</strong> {item.buyerQuestion}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-2xl border shadow-sm p-8">
              <h2 className="text-3xl font-bold mb-5">Three OSS invoice scenarios to test before buying</h2>
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
              <h2 className="text-3xl font-bold mb-5">Weak OSS admin vs invoice-ready workflow</h2>
              <div className="overflow-x-auto">
                <table className="min-w-full text-left border-collapse">
                  <thead>
                    <tr className="border-b">
                      <th className="py-3 pr-4 font-semibold">Weak workflow</th>
                      <th className="py-3 pr-4 font-semibold">Lattice Invoices direction</th>
                    </tr>
                  </thead>
                  <tbody>
                    {weakVsStrong.map((row) => (
                      <tr key={row.weak} className="border-b last:border-b-0 align-top">
                        <td className="py-4 pr-4 text-slate-700">{row.weak}</td>
                        <td className="py-4 pr-4 text-slate-700">{row.strong}</td>
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
              <p className="text-sm uppercase tracking-widest text-cyan-700 font-semibold mb-2">Early-access qualifier</p>
              <h2 className="text-2xl font-bold mb-3">Need OSS invoice evidence?</h2>
              <p className="text-slate-700 leading-relaxed mb-5">
                Send the store URL, countries served, tax setup, and current invoice plugin. The offer is a €49 early-access review for stores that need the Lattice Invoices workflow.
              </p>
              <a href={mailto} className="block text-center bg-blue-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-blue-700 transition mb-3">
                Request OSS invoice review
              </a>
              <Link href="/woocommerce-eu-vat-invoices" className="block text-center border border-slate-200 px-6 py-3 rounded-xl font-semibold hover:border-blue-400 transition mb-3">
                View Lattice Invoices landing page
              </Link>
              <Link href="/docs/woocommerce-eu-vat-invoice-setup" className="block text-center border border-slate-200 px-6 py-3 rounded-xl font-semibold hover:border-blue-400 transition mb-3">
                Read setup guide
              </Link>
              <Link href="/blog/woocommerce-vies-vat-validation" className="block text-center border border-slate-200 px-6 py-3 rounded-xl font-semibold hover:border-blue-400 transition mb-3">
                VIES VAT validation guide
              </Link>
              <Link href="/blog/woocommerce-vat-invoice-plugin-eu" className="block text-center border border-slate-200 px-6 py-3 rounded-xl font-semibold hover:border-blue-400 transition">
                EU VAT invoice plugin checklist
              </Link>
              <div className="border-t mt-6 pt-6 space-y-3 text-sm text-slate-600">
                <div>✓ OSS VAT country evidence</div>
                <div>✓ Invoice PDFs and credit notes</div>
                <div>✓ Accountant export readiness</div>
              </div>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}
