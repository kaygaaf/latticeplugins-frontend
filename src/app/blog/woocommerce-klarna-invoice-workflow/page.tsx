import type { Metadata } from "next";
import Link from "next/link";

const SITE_URL = "https://latticeplugins.com";

export const metadata: Metadata = {
  title: "WooCommerce Klarna Invoice Workflow for EU VAT Stores",
  description:
    "A buyer-intent guide for WooCommerce stores using Klarna that need VAT/BTW checkout fields, pay-later invoice timing, refund credit notes, customer PDF downloads, and accountant-ready exports.",
  alternates: {
    canonical: `${SITE_URL}/blog/woocommerce-klarna-invoice-workflow`,
  },
  openGraph: {
    title: "WooCommerce Klarna invoice workflow for EU VAT stores",
    description:
      "Map Klarna pay-later, pay-now, capture, refund, and dispute events to WooCommerce invoice PDFs, VAT metadata, credit notes, customer downloads, and accounting evidence.",
    url: `${SITE_URL}/blog/woocommerce-klarna-invoice-workflow`,
    siteName: "Lattice Plugins",
    type: "article",
  },
};

const readinessChecklist = [
  {
    title: "1. Capture invoice-ready VAT/BTW data before Klarna authorization",
    detail:
      "Klarna can handle payment authorization and consumer financing, but your EU invoice still depends on WooCommerce order data: business name, VAT/BTW number, billing country, invoice email, customer reference, and reverse-charge status before the payment session begins.",
    buyerQuestion: "Does checkout validate B2B invoice fields before the Klarna payment step?",
  },
  {
    title: "2. Decide whether authorization, capture, or paid status creates the invoice",
    detail:
      "Pay-later and pay-now flows can create different timing events. Final VAT invoice numbers should be issued at the moment your finance team treats the order as paid or capturable, not merely when a customer starts Klarna checkout.",
    buyerQuestion: "Which exact Klarna/WooCommerce event triggers final invoice numbering?",
  },
  {
    title: "3. Keep Klarna references with the invoice record",
    detail:
      "Support and accounting should not reconcile three systems by hand. The WooCommerce order should show invoice number, Klarna order ID, authorization/capture state, VAT totals, payment date, refund references, PDF status, and customer download availability.",
    buyerQuestion: "Can exports include invoice number, Klarna order ID, VAT totals, and refund references in one row?",
  },
  {
    title: "4. Treat partial captures and refunds as invoice events",
    detail:
      "Klarna flows often include partial capture, delayed shipment, partial refund, full refund, or dispute handling. Your invoice workflow needs retained originals, linked credit notes, and correction evidence that matches the financial event.",
    buyerQuestion: "How does the plugin handle partial capture, partial refund, and dispute correction evidence?",
  },
  {
    title: "5. Provide customer self-service invoice downloads",
    detail:
      "B2B buyers who paid with Klarna still need a VAT invoice later for finance teams. My Account downloads and resend controls reduce support load and make repeat purchasing easier.",
    buyerQuestion: "Can customers download invoices and credit notes without emailing support?",
  },
];

const scenarios = [
  {
    title: "Klarna order is authorized but not captured yet",
    trigger: "The customer passes Klarna checkout, but fulfillment or capture happens later.",
    workflow:
      "Store invoice-ready VAT metadata and Klarna order ID, keep the document as proforma/payment evidence if needed, and wait for the configured capture/paid status before issuing the final invoice number.",
  },
  {
    title: "Pay-now order reaches a reliable paid status",
    trigger: "WooCommerce receives confirmation that the Klarna payment is paid or captured.",
    workflow:
      "Generate the final invoice number, attach the PDF to the customer email, expose the invoice in My Account, and export payment reference plus VAT totals for the accountant.",
  },
  {
    title: "Partial refund or dispute happens after invoicing",
    trigger: "A Klarna refund, adjustment, or dispute changes the financial value of a paid order.",
    workflow:
      "Retain the original invoice, create a linked credit note for the corrected amount, store Klarna refund/dispute references, and include both documents in accounting export.",
  },
];

const comparisonRows = [
  {
    weak: "Klarna dashboard shows the payment, WooCommerce shows the order, and invoice PDFs are created manually after fulfillment.",
    strong: "WooCommerce order links invoice number, PDF state, Klarna authorization/capture/refund references, VAT fields, and customer download access.",
  },
  {
    weak: "Final invoice numbers are issued when the buyer starts Klarna checkout, creating gaps for abandoned or failed flows.",
    strong: "Final invoice numbering waits for the configured paid/captured status, while earlier steps can remain proforma/payment-request evidence.",
  },
  {
    weak: "Partial captures and refunds are adjusted in Klarna but not reflected as retained correction evidence in WooCommerce.",
    strong: "Capture/refund workflows create traceable invoice or credit-note records linked to the original order and Klarna event IDs.",
  },
  {
    weak: "B2B customers email support for VAT invoices because Klarna receipt data is not enough for accounting.",
    strong: "VAT/BTW metadata is captured before payment, invoice PDFs are attached, and protected customer downloads remain available after purchase.",
  },
];

const faq = [
  {
    q: "Does Klarna automatically create EU VAT invoices for WooCommerce?",
    a: "No. Klarna handles payment authorization, capture, refunds, and buyer communication. EU VAT invoices still need WooCommerce order metadata, invoice numbers, VAT/BTW fields, PDF delivery, credit notes, and accounting exports.",
  },
  {
    q: "When should a Klarna WooCommerce invoice be created?",
    a: "Usually when the order reaches the configured paid or captured state. Creating final invoice numbers at checkout-start can create gaps, especially in authorization, delayed capture, or failed payment flows.",
  },
  {
    q: "What makes Klarna invoice workflows different from card payments?",
    a: "Klarna can involve authorization before capture, pay-later timing, partial captures, disputes, and refund adjustments. Those states should map to proforma, final invoice, credit-note, and export rules instead of a single manual PDF step.",
  },
  {
    q: "Where does Lattice fit if I already use Klarna?",
    a: "Klarna remains the payment method. The Lattice Invoices early-access workflow focuses on VAT/BTW checkout evidence, invoice PDFs, credit notes, customer downloads, and accountant-ready handoff around the WooCommerce order.",
  },
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "WooCommerce Klarna invoice workflow for EU VAT stores",
  description:
    "A practical buyer guide for WooCommerce stores using Klarna that need VAT checkout fields, pay-later invoice timing, invoice PDFs, refund credit notes, customer downloads, and accountant-ready exports.",
  mainEntityOfPage: `${SITE_URL}/blog/woocommerce-klarna-invoice-workflow`,
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
  "mailto:support@latticeplugins.com?subject=WooCommerce%20Klarna%20invoice%20workflow%20review&body=Hi%20Lattice%2C%0A%0AI%20want%20a%20WooCommerce%20Klarna%20invoice%20workflow%20review.%0A%0AStore%20URL%3A%20%0ACountry%3A%20%0AKlarna%20flow%20(pay%20now%2Fpay%20later%2Fcapture)%3A%20%0ACurrent%20invoice%20plugin%3A%20%0AVAT%2FBTW%20fields%20needed%3A%20%0ARefund%2Fpartial%20capture%20workflow%3A%20%0AAccounting%20export%20needs%3A%20";

export default function WooCommerceKlarnaInvoiceWorkflowPage() {
  return (
    <main className="min-h-screen bg-slate-50">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <section className="bg-gradient-to-br from-slate-950 via-pink-950 to-blue-900 text-white">
        <div className="max-w-5xl mx-auto px-6 py-16 lg:py-20">
          <p className="uppercase tracking-[0.3em] text-sm text-pink-200 mb-4">WooCommerce Klarna invoicing</p>
          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
            WooCommerce Klarna invoices without VAT gaps, capture confusion, or refund evidence problems.
          </h1>
          <p className="text-xl text-pink-50 leading-relaxed max-w-3xl mb-8">
            Klarna can improve checkout conversion, but EU stores still need invoice-ready WooCommerce data: VAT/BTW fields, final invoice timing, authorization and capture evidence, refund credit notes, customer downloads, and accounting exports.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href={mailto} className="bg-green-400 text-slate-950 px-8 py-4 rounded-xl font-semibold hover:bg-green-300 transition shadow-lg text-center">
              Request €49 Klarna invoice workflow review
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
              <h2 className="text-3xl font-bold mb-4">Why Klarna stores still need a WooCommerce invoice layer</h2>
              <p className="text-slate-700 leading-relaxed mb-4">
                A Klarna event can prove authorization, capture, refund, or dispute activity. It does not prove that the WooCommerce order has the correct VAT/BTW number, that the final invoice number was issued at the right moment, or that partial captures and refunds created accountant-ready correction records.
              </p>
              <p className="text-slate-700 leading-relaxed">
                For EU WooCommerce stores, the payment gateway and invoice workflow should meet at the order record. The order should show customer VAT metadata, invoice PDF state, Klarna references, credit-note links, resend/download history, and export status without spreadsheet reconciliation.
              </p>
            </div>

            <div className="bg-pink-50 border border-pink-100 rounded-2xl p-8">
              <h2 className="text-3xl font-bold mb-5">Klarna invoice readiness checklist</h2>
              <div className="space-y-4">
                {readinessChecklist.map((item) => (
                  <div key={item.title} className="bg-white rounded-xl border border-pink-100 p-5">
                    <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                    <p className="text-slate-700 leading-relaxed mb-2">{item.detail}</p>
                    <p className="text-slate-600 leading-relaxed"><strong>Buyer question:</strong> {item.buyerQuestion}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-2xl border shadow-sm p-8">
              <h2 className="text-3xl font-bold mb-5">Three Klarna invoice scenarios to test before buying</h2>
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
                      <th className="py-3 pr-4 font-semibold">Weak workflow</th>
                      <th className="py-3 pr-4 font-semibold">Lattice Invoices direction</th>
                    </tr>
                  </thead>
                  <tbody>
                    {comparisonRows.map((row) => (
                      <tr key={row.weak} className="border-b align-top">
                        <td className="py-4 pr-4 text-slate-700">{row.weak}</td>
                        <td className="py-4 pr-4 text-slate-700">{row.strong}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div className="bg-white rounded-2xl border shadow-sm p-8">
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
              <h2 className="text-2xl font-bold mb-3">Use Klarna? Review invoice timing before plugin spend.</h2>
              <p className="text-slate-700 leading-relaxed mb-5">
                Lattice Invoices early access is positioned for WooCommerce stores that need VAT/BTW fields, retained invoice PDFs, credit notes, customer downloads, and payment evidence around the order.
              </p>
              <a href={mailto} className="block text-center bg-blue-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-blue-700 transition mb-3">
                Request €49 workflow review
              </a>
              <Link href="/blog/woocommerce-stripe-invoice-workflow" className="block text-center border border-slate-200 px-6 py-3 rounded-xl font-semibold hover:border-blue-400 transition mb-3">
                Stripe invoice workflow guide
              </Link>
              <Link href="/blog/woocommerce-paypal-invoice-workflow" className="block text-center border border-slate-200 px-6 py-3 rounded-xl font-semibold hover:border-blue-400 transition mb-3">
                PayPal invoice workflow guide
              </Link>
              <Link href="/blog/woocommerce-mollie-invoice-workflow" className="block text-center border border-slate-200 px-6 py-3 rounded-xl font-semibold hover:border-blue-400 transition">
                Mollie invoice workflow guide
              </Link>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}
