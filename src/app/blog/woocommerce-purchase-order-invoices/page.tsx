import type { Metadata } from "next";
import Link from "next/link";

const SITE_URL = "https://latticeplugins.com";

export const metadata: Metadata = {
  title: "WooCommerce Purchase Order Invoices for B2B EU VAT Stores",
  description:
    "A buyer-intent guide for WooCommerce stores that need purchase order numbers on invoices, PO approval evidence, proforma PDFs, VAT metadata, and accountant-ready exports.",
  alternates: {
    canonical: `${SITE_URL}/blog/woocommerce-purchase-order-invoices`,
  },
  openGraph: {
    title: "WooCommerce purchase order invoices for B2B EU VAT stores",
    description:
      "Map PO number capture, approval evidence, proforma-to-final invoice flow, VAT PDF retention, and accountant export before choosing an invoice plugin.",
    url: `${SITE_URL}/blog/woocommerce-purchase-order-invoices`,
    siteName: "Lattice Plugins",
    type: "article",
  },
};

const checklist = [
  {
    title: "1. Capture the PO number before the invoice is issued",
    detail:
      "B2B buyers often require a purchase order number before accounts payable will approve payment. The PO field should be captured at checkout, order review, or manual proforma creation before the final invoice PDF is generated.",
    buyerQuestion: "Can the plugin store a PO number as invoice metadata before the PDF number is locked?",
  },
  {
    title: "2. Print PO references on every relevant PDF",
    detail:
      "A PO reference should appear on proformas, final VAT invoices, credit notes, customer downloads, and email attachments. If it only appears in an admin note, the customer’s finance team may reject the document.",
    buyerQuestion: "Will the PO number appear on the customer-facing PDF and not just inside WooCommerce admin?",
  },
  {
    title: "3. Keep PO approval evidence with the order timeline",
    detail:
      "Finance teams need to see who supplied or changed the PO number, when the proforma was sent, when the final invoice was issued, and whether any correction or credit note changed the customer balance.",
    buyerQuestion: "Can support and accounting review PO changes, email sends, downloads, and related credit notes in one timeline?",
  },
  {
    title: "4. Separate proforma requests from final VAT invoices",
    detail:
      "For bank-transfer or enterprise orders, a proforma may include the PO reference before payment. The final VAT invoice should be issued after payment or fulfilment according to your workflow, with the same reference retained.",
    buyerQuestion: "Does the plugin support proforma-to-final invoice flow without duplicating invoice numbers?",
  },
  {
    title: "5. Export PO fields for accountant handoff",
    detail:
      "Accountants and finance ops need invoice number, order number, PO number, VAT totals, reverse-charge status, payment status, due date, and credit-note links in exports — not a manual copy from private notes.",
    buyerQuestion: "Can invoice exports include the PO reference and payment context your accountant actually needs?",
  },
];

const scenarios = [
  {
    title: "Enterprise buyer requires PO before payment",
    trigger: "The customer cannot pay a BACS/proforma invoice unless the PDF contains their internal PO number.",
    workflow:
      "Capture the PO, issue a proforma with payment terms, retain send/download evidence, then generate the final VAT invoice with the same PO after payment.",
  },
  {
    title: "PO number arrives after checkout",
    trigger: "The buyer placed an order but finance sends the PO reference later by email.",
    workflow:
      "Add the PO as controlled invoice metadata, log who changed it, resend the invoice PDF, and keep the previous send evidence visible.",
  },
  {
    title: "Refund or correction after PO approval",
    trigger: "A customer needs a credit note or corrected invoice for an order that already has a PO-approved final invoice.",
    workflow:
      "Retain the original invoice, issue a credit note or replacement workflow with the PO reference, and export both documents for accounting reconciliation.",
  },
];

const comparisonRows = [
  {
    manual: "PO number stored in a private order note",
    lattice: "PO field tied to invoice PDF, proforma, email resend, customer download, and export metadata.",
  },
  {
    manual: "Finance edits an issued invoice PDF manually",
    lattice: "Controlled correction path keeps original invoice retained and logs PO/correction changes.",
  },
  {
    manual: "Accountant receives a CSV without PO references",
    lattice: "Export includes invoice number, PO number, VAT totals, due date, payment status, and credit-note links.",
  },
];

const faq = [
  {
    q: "Can WooCommerce add purchase order numbers to invoices by default?",
    a: "WooCommerce can store order metadata, but invoice-safe PO workflows usually need a visible field, PDF template placement, proforma support, resend logs, customer downloads, and export fields.",
  },
  {
    q: "Should PO numbers be editable after an invoice is issued?",
    a: "If a PO reference must be corrected after issue, the change should be logged and visible. Stores should avoid silently rewriting historical invoice evidence without an audit trail or correction workflow.",
  },
  {
    q: "Do PO numbers matter for EU VAT invoices?",
    a: "A PO number is not the same as VAT evidence, but B2B customers often need it for approval. The invoice still needs invoice number, seller/buyer details, VAT or reverse-charge wording, totals, and retained PDF evidence.",
  },
  {
    q: "Where does Lattice Invoices fit?",
    a: "Lattice Invoices is the early-access WooCommerce EU invoicing path for stores that need PO references, proforma PDFs, final VAT invoices, credit notes, customer downloads, reminder evidence, and accountant-ready exports.",
  },
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "WooCommerce purchase order invoices for B2B EU VAT stores",
  description:
    "A practical WooCommerce invoicing guide for PO number capture, proforma approvals, final VAT invoice PDFs, credit-note links, and accountant-ready exports.",
  mainEntityOfPage: `${SITE_URL}/blog/woocommerce-purchase-order-invoices`,
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
  "mailto:support@latticeplugins.com?subject=WooCommerce%20purchase%20order%20invoice%20workflow%20review&body=Hi%20Lattice%2C%0A%0AI%20want%20a%20WooCommerce%20purchase%20order%20invoice%20workflow%20review.%0A%0AStore%20URL%3A%20%0ACountry%3A%20%0ACurrent%20invoice%20plugin%3A%20%0APayment%20methods%20(BACS%2FStripe%2FPayPal)%3A%20%0APO%20number%20capture%20point%3A%20%0AProforma%20invoice%20needs%3A%20%0ACredit-note%20needs%3A%20%0AAccounting%20export%20needs%3A%20";

export default function WooCommercePurchaseOrderInvoicesPage() {
  return (
    <main className="min-h-screen bg-slate-50">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <section className="bg-gradient-to-br from-slate-950 via-blue-950 to-cyan-900 text-white">
        <div className="max-w-5xl mx-auto px-6 py-16 lg:py-20">
          <p className="uppercase tracking-[0.3em] text-sm text-cyan-200 mb-4">WooCommerce purchase order invoices</p>
          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
            Add PO numbers to WooCommerce invoices without losing VAT or approval evidence.
          </h1>
          <p className="text-xl text-cyan-50 leading-relaxed max-w-3xl mb-8">
            B2B buyers reject invoices when PO numbers, proforma approvals, VAT details, or export context are missing. Use this checklist before choosing a WooCommerce invoice plugin or patching PDFs manually.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href={mailto} className="bg-cyan-300 text-slate-950 px-8 py-4 rounded-xl font-semibold hover:bg-cyan-200 transition shadow-lg text-center">
              Request €49 PO invoice workflow review
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
              <h2 className="text-3xl font-bold mb-4">Why PO numbers turn into invoice friction</h2>
              <p className="text-slate-700 leading-relaxed mb-4">
                A purchase order number often sits between your WooCommerce order and the buyer’s accounts-payable approval. If the number is missing from the PDF, entered after the invoice is issued, or excluded from exports, support gets stuck resending documents and finance gets stuck reconciling exceptions.
              </p>
              <p className="text-slate-700 leading-relaxed">
                The safer workflow treats the PO number as invoice metadata: captured early, printed on PDFs, logged when changed, linked to proforma and credit-note events, and included in accounting exports.
              </p>
            </div>

            <div className="bg-cyan-50 border border-cyan-100 rounded-2xl p-8">
              <h2 className="text-3xl font-bold mb-5">PO invoice readiness checklist</h2>
              <div className="space-y-4">
                {checklist.map((item) => (
                  <div key={item.title} className="bg-white rounded-xl border border-cyan-100 p-5">
                    <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                    <p className="text-slate-700 leading-relaxed mb-2">{item.detail}</p>
                    <p className="text-slate-600 leading-relaxed"><strong>Buyer question:</strong> {item.buyerQuestion}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-2xl border shadow-sm p-8">
              <h2 className="text-3xl font-bold mb-5">Three PO invoice scenarios to test</h2>
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
              <h2 className="text-3xl font-bold mb-5">Manual workaround vs invoice-ready workflow</h2>
              <div className="overflow-x-auto">
                <table className="min-w-full text-left border-collapse">
                  <thead>
                    <tr className="border-b">
                      <th className="py-3 pr-4 font-semibold">Manual workaround</th>
                      <th className="py-3 pr-4 font-semibold">Lattice Invoices direction</th>
                    </tr>
                  </thead>
                  <tbody>
                    {comparisonRows.map((row) => (
                      <tr key={row.manual} className="border-b last:border-b-0">
                        <td className="py-4 pr-4 text-slate-700 align-top">{row.manual}</td>
                        <td className="py-4 pr-4 text-slate-700 align-top">{row.lattice}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div className="bg-blue-50 border border-blue-100 rounded-2xl p-8">
              <h2 className="text-3xl font-bold mb-4">Early-access offer: €49 PO invoice workflow review</h2>
              <p className="text-slate-700 leading-relaxed mb-5">
                Send your current invoice plugin, checkout fields, proforma/BACS process, PO-number pain points, and accountant export needs. Lattice will map where PO evidence should be captured, printed, logged, and exported before you automate it.
              </p>
              <a href={mailto} className="inline-flex bg-blue-700 text-white px-7 py-3 rounded-xl font-semibold hover:bg-blue-800 transition">
                Send my PO invoice workflow
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
              <h2 className="text-2xl font-bold mb-3">Need PO-ready invoices buyers will approve?</h2>
              <p className="text-slate-600 mb-5">
                Get a focused review for PO capture, proforma PDFs, final VAT invoices, resend logs, credit-note links, and accountant exports.
              </p>
              <a href={mailto} className="block text-center bg-slate-950 text-white px-5 py-3 rounded-xl font-semibold hover:bg-slate-800 transition mb-3">
                Request PO workflow review
              </a>
              <Link href="/docs/woocommerce-eu-vat-invoice-setup" className="block text-center border border-slate-200 px-5 py-3 rounded-xl font-semibold hover:bg-slate-50 transition">
                Read setup guide
              </Link>
            </div>

            <div className="bg-white rounded-2xl border shadow-sm p-6">
              <h3 className="font-bold text-lg mb-3">Related invoice guides</h3>
              <ul className="space-y-3 text-sm text-slate-700">
                <li><Link href="/blog/woocommerce-invoice-approval-workflow" className="text-blue-700 hover:underline">Invoice approval workflow</Link></li>
                <li><Link href="/blog/woocommerce-proforma-invoice" className="text-blue-700 hover:underline">Proforma invoice workflow</Link></li>
                <li><Link href="/blog/woocommerce-bank-transfer-invoice" className="text-blue-700 hover:underline">Bank transfer invoices</Link></li>
                <li><Link href="/blog/woocommerce-invoice-export-accounting" className="text-blue-700 hover:underline">Accounting export</Link></li>
                <li><Link href="/blog/woocommerce-invoice-correction-workflow" className="text-blue-700 hover:underline">Invoice corrections</Link></li>
                <li><Link href="/blog/woocommerce-credit-notes-refunds" className="text-blue-700 hover:underline">Credit notes and refunds</Link></li>
              </ul>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}
