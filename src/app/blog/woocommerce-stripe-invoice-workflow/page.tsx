import type { Metadata } from "next";
import Link from "next/link";

const SITE_URL = "https://latticeplugins.com";

export const metadata: Metadata = {
  title: "WooCommerce Stripe Invoice Workflow for EU VAT Stores",
  description:
    "A buyer-intent guide for WooCommerce stores using Stripe that need VAT/BTW checkout fields, paid invoice PDFs, refund credit notes, payment evidence, and accountant-ready exports.",
  alternates: {
    canonical: `${SITE_URL}/blog/woocommerce-stripe-invoice-workflow`,
  },
  openGraph: {
    title: "WooCommerce Stripe invoice workflow for EU VAT stores",
    description:
      "Map Stripe payment events to WooCommerce invoice PDFs, VAT metadata, refund credit notes, customer downloads, and accounting evidence before buying an invoice plugin.",
    url: `${SITE_URL}/blog/woocommerce-stripe-invoice-workflow`,
    siteName: "Lattice Plugins",
    type: "article",
  },
};

const readinessChecklist = [
  {
    title: "1. Capture VAT/BTW data before Stripe payment",
    detail:
      "Stripe can collect money cleanly, but EU invoice quality depends on WooCommerce order metadata: company name, VAT/BTW number, billing country, invoice email, PO/reference, and tax exemption status before the payment succeeds.",
    buyerQuestion: "Does the invoice workflow store VAT fields on the order before Stripe confirms payment?",
  },
  {
    title: "2. Issue the invoice from a reliable paid-order event",
    detail:
      "The invoice number should be created when the WooCommerce order reaches the correct paid status, not when a customer merely lands on checkout. That prevents gaps, duplicates, and draft invoices for failed card attempts.",
    buyerQuestion: "Which order status triggers final invoice numbering for card, Apple Pay, and Google Pay payments?",
  },
  {
    title: "3. Keep Stripe charge and invoice evidence together",
    detail:
      "Support and accounting need one place to see invoice number, Stripe charge ID, payment method, VAT totals, payment date, customer VAT number, and PDF delivery status.",
    buyerQuestion: "Can the export include invoice number and Stripe payment reference in the same row?",
  },
  {
    title: "4. Handle refunds with credit notes instead of rewritten invoices",
    detail:
      "A Stripe refund should not silently overwrite the original invoice. The safer workflow retains the issued PDF and creates a credit note or correction record linked to the original WooCommerce order and Stripe refund.",
    buyerQuestion: "Does a refund create a traceable credit-note workflow for your accountant?",
  },
  {
    title: "5. Give customers a download fallback",
    detail:
      "Even when the invoice PDF is attached to the order email, customers often need it weeks later. A My Account download link reduces support tickets and makes B2B repeat purchases smoother.",
    buyerQuestion: "Can customers download paid invoices and credit notes without contacting support?",
  },
];

const scenarios = [
  {
    title: "Card payment succeeds immediately",
    trigger: "Stripe confirms payment and WooCommerce marks the order as processing or completed.",
    workflow:
      "Generate the final invoice number, attach the PDF to the customer email, store the Stripe charge ID, and expose the invoice in My Account.",
  },
  {
    title: "Apple Pay / Google Pay checkout",
    trigger: "A wallet payment completes quickly, but business billing fields may be skipped if the checkout is too minimal.",
    workflow:
      "Require invoice-ready business metadata before payment confirmation and keep wallet payment evidence beside VAT totals and invoice PDF status.",
  },
  {
    title: "Partial or full Stripe refund",
    trigger: "A paid order is refunded in WooCommerce or Stripe and accounting asks for the VAT correction trail.",
    workflow:
      "Retain the original invoice, create a linked credit note, store the Stripe refund reference, and export both documents together.",
  },
];

const comparisonRows = [
  {
    weak: "Stripe dashboard has the payment, WooCommerce has the order, invoice PDF is a separate manual step.",
    strong: "WooCommerce order links invoice number, PDF, Stripe charge/refund references, VAT fields, and customer download status.",
  },
  {
    weak: "Invoice number created too early during checkout attempts, causing gaps and corrections.",
    strong: "Final invoice numbering starts only after the configured paid order status is reached.",
  },
  {
    weak: "Refund emails mention money returned but no credit note is attached or retained.",
    strong: "Refund workflow creates credit-note evidence linked to the original invoice and Stripe refund.",
  },
  {
    weak: "Customers email support for missing invoices after card payments.",
    strong: "Invoice PDFs are attached to emails and available from My Account downloads.",
  },
];

const faq = [
  {
    q: "Does Stripe automatically solve WooCommerce VAT invoicing?",
    a: "No. Stripe handles payment collection and payment evidence. EU VAT invoices still need WooCommerce order metadata, invoice numbers, VAT fields, PDF delivery, refund credit notes, and accountant-ready exports.",
  },
  {
    q: "When should a Stripe-paid WooCommerce invoice be created?",
    a: "Usually when the order reaches the store's paid status, such as processing or completed. Creating the final invoice before payment succeeds can create invoice-number gaps and support confusion.",
  },
  {
    q: "How should Stripe refunds appear in invoice records?",
    a: "The original invoice should remain retained. Refunds should create credit-note or correction evidence linked to the WooCommerce order, Stripe refund reference, VAT totals, and customer-facing PDF history.",
  },
  {
    q: "Where does Lattice fit if I already use a Stripe gateway?",
    a: "Lattice Stripe Payments focuses on the payment path, while the Lattice Invoices early-access workflow focuses on VAT/BTW invoice evidence, PDF delivery, credit notes, and accounting handoff after payment.",
  },
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "WooCommerce Stripe invoice workflow for EU VAT stores",
  description:
    "A practical buyer guide for WooCommerce stores using Stripe that need VAT checkout fields, paid invoice PDFs, refund credit notes, customer downloads, and accountant-ready exports.",
  mainEntityOfPage: `${SITE_URL}/blog/woocommerce-stripe-invoice-workflow`,
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
  "mailto:support@latticeplugins.com?subject=WooCommerce%20Stripe%20invoice%20workflow%20review&body=Hi%20Lattice%2C%0A%0AI%20want%20a%20WooCommerce%20Stripe%20invoice%20workflow%20review.%0A%0AStore%20URL%3A%20%0ACountry%3A%20%0AStripe%20gateway%3A%20%0ACurrent%20invoice%20plugin%3A%20%0AVAT%2FBTW%20fields%20needed%3A%20%0ARefund%2Fcredit-note%20workflow%3A%20%0AAccounting%20export%20needs%3A%20";

export default function WooCommerceStripeInvoiceWorkflowPage() {
  return (
    <main className="min-h-screen bg-slate-50">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <section className="bg-gradient-to-br from-slate-950 via-blue-950 to-indigo-900 text-white">
        <div className="max-w-5xl mx-auto px-6 py-16 lg:py-20">
          <p className="uppercase tracking-[0.3em] text-sm text-blue-200 mb-4">WooCommerce Stripe invoicing</p>
          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
            WooCommerce Stripe invoices without VAT gaps, refund confusion, or support tickets.
          </h1>
          <p className="text-xl text-blue-50 leading-relaxed max-w-3xl mb-8">
            Stripe makes the payment easy. EU stores still need invoice-ready WooCommerce data: VAT/BTW fields, final invoice numbers, Stripe charge evidence, refund credit notes, customer downloads, and accounting exports. Use this checklist before buying or replacing an invoice plugin.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href={mailto} className="bg-green-400 text-slate-950 px-8 py-4 rounded-xl font-semibold hover:bg-green-300 transition shadow-lg text-center">
              Request €49 Stripe invoice workflow review
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
              <h2 className="text-3xl font-bold mb-4">Why Stripe stores still need an invoice workflow</h2>
              <p className="text-slate-700 leading-relaxed mb-4">
                A Stripe charge proves that money moved. It does not automatically prove that the customer entered the right VAT/BTW number, that the invoice number was issued at the right moment, or that a refund created accountant-ready credit-note evidence.
              </p>
              <p className="text-slate-700 leading-relaxed">
                For EU WooCommerce stores, the payment gateway and invoice workflow should meet at the order record. The order should show customer VAT metadata, invoice PDF state, Stripe charge or refund references, credit-note links, and customer download access without manual spreadsheet reconciliation.
              </p>
            </div>

            <div className="bg-blue-50 border border-blue-100 rounded-2xl p-8">
              <h2 className="text-3xl font-bold mb-5">Stripe invoice readiness checklist</h2>
              <div className="space-y-4">
                {readinessChecklist.map((item) => (
                  <div key={item.title} className="bg-white rounded-xl border border-blue-100 p-5">
                    <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                    <p className="text-slate-700 leading-relaxed mb-2">{item.detail}</p>
                    <p className="text-slate-600 leading-relaxed"><strong>Buyer question:</strong> {item.buyerQuestion}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-2xl border shadow-sm p-8">
              <h2 className="text-3xl font-bold mb-5">Three Stripe invoice scenarios to test</h2>
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
                      <tr key={row.weak} className="border-b last:border-b-0">
                        <td className="py-4 pr-4 text-slate-700 align-top">{row.weak}</td>
                        <td className="py-4 pr-4 text-slate-700 align-top">{row.strong}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div className="bg-slate-900 text-white rounded-2xl p-8">
              <h2 className="text-3xl font-bold mb-4">What to send for a Stripe invoice review</h2>
              <p className="text-slate-200 leading-relaxed mb-5">
                Send your store URL, country, Stripe gateway/plugin name, current invoice plugin, VAT/BTW fields, refund workflow, and accounting export needs. That is enough to identify whether the main issue is checkout data capture, invoice timing, credit notes, or export evidence.
              </p>
              <a href={mailto} className="inline-block bg-green-400 text-slate-950 px-6 py-3 rounded-xl font-semibold hover:bg-green-300 transition">
                Request workflow review
              </a>
            </div>

            <div className="bg-white rounded-2xl border shadow-sm p-8">
              <h2 className="text-3xl font-bold mb-5">FAQ</h2>
              <div className="space-y-5">
                {faq.map((item) => (
                  <div key={item.q} className="border-b last:border-b-0 pb-5 last:pb-0">
                    <h3 className="text-xl font-bold mb-2">{item.q}</h3>
                    <p className="text-slate-700 leading-relaxed">{item.a}</p>
                  </div>
                ))}
              </div>
            </div>
          </article>

          <aside className="space-y-6">
            <div className="bg-white rounded-2xl border shadow-sm p-6 sticky top-6">
              <p className="text-sm uppercase tracking-[0.2em] text-blue-700 font-semibold mb-2">Sellable next step</p>
              <h2 className="text-2xl font-bold mb-3">Turn Stripe payment evidence into invoice evidence.</h2>
              <p className="text-slate-700 leading-relaxed mb-5">
                Lattice Invoices early access focuses on the post-payment workflow EU stores ask about before buying: VAT/BTW metadata, invoice PDFs, credit notes, customer downloads, and accountant exports.
              </p>
              <a href={mailto} className="block bg-blue-600 text-white px-5 py-3 rounded-xl font-semibold text-center hover:bg-blue-700 transition mb-3">
                Ask about early access
              </a>
              <Link href="/product/lattice-stripe-payments" className="block border border-slate-200 px-5 py-3 rounded-xl font-semibold text-center hover:border-blue-500 hover:text-blue-600 transition mb-3">
                View Stripe payment plugin
              </Link>
              <Link href="/docs/woocommerce-eu-vat-invoice-setup" className="block border border-slate-200 px-5 py-3 rounded-xl font-semibold text-center hover:border-blue-500 hover:text-blue-600 transition">
                Read setup guide
              </Link>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}
