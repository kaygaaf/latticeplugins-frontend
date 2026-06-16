import type { Metadata } from "next";
import Link from "next/link";

const SITE_URL = "https://latticeplugins.com";
const SLUG = "/blog/woocommerce-digital-product-vat-invoices";

export const metadata: Metadata = {
  title: "WooCommerce Digital Product VAT Invoices for EU Stores",
  description:
    "A buyer-intent guide for WooCommerce stores selling digital products in the EU: VAT evidence, invoice PDFs, refunds, credit notes, OSS reporting, and accountant exports.",
  alternates: {
    canonical: `${SITE_URL}${SLUG}`,
  },
  openGraph: {
    title: "WooCommerce digital product VAT invoice workflow",
    description:
      "What EU digital-product stores should check before buying a WooCommerce invoice plugin for VAT evidence, OSS reporting, PDF delivery, and refund credit notes.",
    url: `${SITE_URL}${SLUG}`,
    siteName: "Lattice Plugins",
    type: "article",
  },
};

const readinessChecklist = [
  {
    title: "1. Capture VAT evidence before the invoice is issued",
    detail:
      "Digital-product VAT workflows often depend on billing country, shipping country, IP/geolocation evidence, VAT rate, VAT amount, tax exemption state, and whether a valid business VAT number changed the treatment.",
    buyerQuestion: "Can the invoice record show why this VAT rate or reverse-charge treatment was used?",
  },
  {
    title: "2. Keep invoice numbers separate from order attempts",
    detail:
      "Digital downloads create failed payments, retries, coupon changes, and instant fulfilment events. The invoice sequence should not be the same thing as the WooCommerce order ID stream.",
    buyerQuestion: "Does the plugin issue invoice numbers only for invoiceable orders and preserve the sequence?",
  },
  {
    title: "3. Deliver the invoice automatically after payment",
    detail:
      "Customers buying software, templates, courses, or downloads expect access immediately. The VAT invoice PDF should be attached to the right email and available later in My Account without manual admin work.",
    buyerQuestion: "Can customers download the invoice PDF without asking support?",
  },
  {
    title: "4. Turn refunds into credit-note evidence",
    detail:
      "If a digital product is refunded after access was granted, the original invoice should remain immutable and a linked credit note should preserve the VAT country, rate, amount, and refund reason.",
    buyerQuestion: "Are refund credit notes linked to the original VAT invoice and included in exports?",
  },
  {
    title: "5. Export quarter-end OSS/accounting rows",
    detail:
      "The accountant needs more than screenshots: invoice number, order ID, customer country, VAT rate, VAT amount, net/gross totals, refund links, PDF URL, and product classification should be exportable.",
    buyerQuestion: "Will this reduce the manual quarter-end VAT/OSS cleanup work?",
  },
];

const scenarios = [
  {
    title: "B2C download sold across borders",
    trigger: "A Dutch store sells a paid template or course download to a consumer in Italy and charges Italian VAT.",
    workflow:
      "Store the VAT country decision, issue the paid invoice PDF after payment, retain the PDF, expose it in My Account, and include the VAT country/rate in accountant export rows.",
  },
  {
    title: "B2B software buyer enters a VAT ID",
    trigger: "A German company buys a digital plugin license and enters a VAT number during checkout.",
    workflow:
      "Store VAT ID, validation/manual-review state, reverse-charge wording, buyer details, invoice number, and evidence so the B2B transaction does not get mixed with consumer OSS totals.",
  },
  {
    title: "Refund after the download link was delivered",
    trigger: "A customer requests a refund after the digital product email and invoice PDF were already sent.",
    workflow:
      "Keep the original invoice immutable, generate a linked credit note, resend customer documents, and expose the correction in the export for the accountant.",
  },
];

const weakVsLattice = [
  {
    weak: "Order emails act as receipts, but no retained VAT invoice PDF exists.",
    lattice: "Paid orders generate retained invoice PDFs with invoice number, VAT fields, customer download access, and exportable evidence.",
  },
  {
    weak: "VAT country/rate lives only in tax totals, not in the invoice workflow.",
    lattice: "Invoice records preserve the country/rate decision, VAT amount, reverse-charge state, and refund relationship.",
  },
  {
    weak: "Refunds reduce WooCommerce totals but do not create customer-facing credit-note PDFs.",
    lattice: "Refunds create linked credit notes that preserve the original invoice and correction trail.",
  },
  {
    weak: "Quarter-end OSS work requires manual matching between WooCommerce, payment provider, and PDF plugin.",
    lattice: "Invoice, payment, refund, PDF, VAT, and export fields stay connected to the order.",
  },
];

const faq = [
  {
    q: "Do digital products need VAT invoices in WooCommerce?",
    a: "Many EU stores selling software, templates, courses, downloads, or digital services need VAT invoice evidence, especially for B2B buyers, refunds, OSS reporting, and accountant handoff. The exact legal requirement depends on the store country and buyer type, but the workflow should preserve invoice evidence either way.",
  },
  {
    q: "Is a WooCommerce order email enough for digital-product VAT evidence?",
    a: "Usually not for a clean accounting workflow. Order emails can confirm a sale, but they do not reliably provide sequential invoice numbers, retained PDFs, reverse-charge wording, credit notes, and exportable VAT evidence.",
  },
  {
    q: "What should I ask before buying a digital-product invoice plugin?",
    a: "Ask whether it stores VAT country evidence, handles valid VAT numbers and reverse charge, issues invoice PDFs after payment, creates credit notes for refunds, exposes customer downloads, and exports accountant-ready fields.",
  },
  {
    q: "Where does Lattice Invoices fit?",
    a: "Lattice Invoices early access is aimed at WooCommerce stores that sell digital or B2B products and need VAT/BTW invoice workflows: checkout VAT fields, invoice PDFs, credit notes, customer downloads, OSS evidence, and accountant export readiness.",
  },
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "WooCommerce digital product VAT invoices for EU stores",
  description:
    "A buyer-intent guide for WooCommerce stores selling digital products that need EU VAT invoice PDFs, OSS evidence, credit notes, and accountant exports.",
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
  "mailto:support@latticeplugins.com?subject=WooCommerce%20digital%20product%20VAT%20invoice%20workflow%20review&body=Hi%20Lattice%2C%0A%0AI%20want%20a%20WooCommerce%20digital%20product%20VAT%20invoice%20workflow%20review.%0A%0AStore%20URL%3A%20%0ACountry%3A%20%0ADigital%20products%20sold%3A%20%0AB2C%20or%20B2B%3A%20%0ACurrent%20tax%20setup%3A%20%0AInvoice%20PDF%20plugin%3A%20%0ARefund%2Fcredit-note%20workflow%3A%20%0AAccountant%20export%20needs%3A%20";

export default function WooCommerceDigitalProductVatInvoicesPage() {
  return (
    <main className="min-h-screen bg-slate-50">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <section className="bg-gradient-to-br from-slate-950 via-indigo-950 to-blue-900 text-white">
        <div className="max-w-5xl mx-auto px-6 py-16 lg:py-20">
          <p className="uppercase tracking-[0.3em] text-sm text-blue-200 mb-4">WooCommerce digital product VAT invoices</p>
          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
            Sell digital products in the EU without losing the VAT invoice trail.
          </h1>
          <p className="text-xl text-blue-50 leading-relaxed max-w-3xl mb-8">
            Software, templates, downloads, memberships, and courses need more than instant fulfilment. EU stores need invoice numbers, VAT-country evidence, customer PDFs, refund credit notes, and exports that make OSS/accounting work easier.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href={mailto} className="bg-green-400 text-slate-950 px-8 py-4 rounded-xl font-semibold hover:bg-green-300 transition shadow-lg text-center">
              Request €49 digital VAT invoice review
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
              <h2 className="text-3xl font-bold mb-4">Why digital-product VAT invoicing breaks late</h2>
              <p className="text-slate-700 leading-relaxed mb-4">
                Digital-product stores often optimise for immediate access first: payment succeeds, the download link is sent, and the order is complete. The invoice problem appears later when a business buyer asks for a VAT invoice, a refund needs a credit note, or an accountant asks for OSS evidence.
              </p>
              <p className="text-slate-700 leading-relaxed">
                Lattice Invoices is being shaped around that workflow: keep invoice numbers, VAT/BTW metadata, customer PDF delivery, credit notes, and accountant export evidence attached to the WooCommerce order instead of scattered across emails and admin notes.
              </p>
            </div>

            <div className="bg-indigo-50 border border-indigo-100 rounded-2xl p-8">
              <h2 className="text-3xl font-bold mb-5">Digital-product VAT invoice readiness checklist</h2>
              <div className="space-y-4">
                {readinessChecklist.map((item) => (
                  <div key={item.title} className="bg-white rounded-xl border border-indigo-100 p-5">
                    <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                    <p className="text-slate-700 leading-relaxed mb-2">{item.detail}</p>
                    <p className="text-slate-600 leading-relaxed"><strong>Buyer question:</strong> {item.buyerQuestion}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-2xl border shadow-sm p-8">
              <h2 className="text-3xl font-bold mb-5">Three scenarios to test before buying</h2>
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
              <h2 className="text-3xl font-bold mb-5">Weak digital VAT admin vs invoice-ready workflow</h2>
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
              <p className="text-sm uppercase tracking-widest text-indigo-700 font-semibold mb-2">Early-access qualifier</p>
              <h2 className="text-2xl font-bold mb-3">Need digital-product VAT invoices?</h2>
              <p className="text-slate-700 leading-relaxed mb-5">
                Send the store URL, digital-product type, countries served, tax setup, and current invoice plugin. The offer is a €49 workflow review for stores that fit the Lattice Invoices early-access path.
              </p>
              <a href={mailto} className="block text-center bg-blue-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-blue-700 transition mb-3">
                Request digital VAT invoice review
              </a>
              <Link href="/woocommerce-eu-vat-invoices" className="block text-center border border-slate-200 px-6 py-3 rounded-xl font-semibold hover:border-blue-400 transition mb-3">
                View Lattice Invoices landing page
              </Link>
              <Link href="/docs/woocommerce-eu-vat-invoice-setup" className="block text-center border border-slate-200 px-6 py-3 rounded-xl font-semibold hover:border-blue-400 transition mb-3">
                Read setup guide
              </Link>
              <Link href="/blog/woocommerce-oss-vat-invoices" className="block text-center border border-slate-200 px-6 py-3 rounded-xl font-semibold hover:border-blue-400 transition mb-3">
                OSS VAT invoice guide
              </Link>
              <Link href="/blog/woocommerce-vies-vat-validation" className="block text-center border border-slate-200 px-6 py-3 rounded-xl font-semibold hover:border-blue-400 transition">
                VIES VAT validation guide
              </Link>
              <div className="border-t mt-6 pt-6 space-y-3 text-sm text-slate-600">
                <div>✓ Digital-product VAT evidence</div>
                <div>✓ Invoice PDFs and credit notes</div>
                <div>✓ OSS/accountant export readiness</div>
              </div>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}
