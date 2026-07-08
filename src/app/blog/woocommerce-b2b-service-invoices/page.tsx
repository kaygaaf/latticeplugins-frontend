import type { Metadata } from "next";
import Link from "next/link";

const SITE_URL = "https://latticeplugins.com";
const PAGE_URL = `${SITE_URL}/blog/woocommerce-b2b-service-invoices`;

export const metadata: Metadata = {
  title: "WooCommerce B2B Service Invoices: VAT, PO Numbers, and PDF Workflow",
  description:
    "Buyer-intent guide for WooCommerce stores selling services to businesses: VAT fields, PO numbers, bank transfer, invoice PDFs, credit notes, and accountant handoff.",
  alternates: {
    canonical: PAGE_URL,
  },
  openGraph: {
    title: "WooCommerce B2B service invoices",
    description:
      "How service businesses using WooCommerce should handle VAT fields, PO references, proformas, invoice PDFs, refunds, and customer downloads.",
    url: PAGE_URL,
    siteName: "Lattice Plugins",
    type: "article",
  },
};

const buyerProblems = [
  "A business customer needs a VAT invoice before finance will approve payment",
  "The buyer sends a PO number after checkout because there was no field for it",
  "Bank-transfer orders need a proforma first and a final invoice after payment",
  "Partial service refunds need credit notes instead of edited historical invoices",
  "The accountant needs invoice numbers, VAT treatment, paid dates, and PDF links in one export",
];

const workflowSteps = [
  {
    title: "1. Capture business billing data before payment",
    text: "Add company name, VAT/BTW number, invoice email, PO/reference, and cost-centre fields to checkout so the first invoice is usable.",
  },
  {
    title: "2. Issue a proforma for bank transfer or approval flows",
    text: "Service buyers often need an internal approval document before money moves. Keep the proforma separate from the final tax invoice.",
  },
  {
    title: "3. Convert paid orders into final VAT invoices",
    text: "When the order is paid, create a sequential invoice number, PDF, email attachment, and customer download record tied to the WooCommerce order.",
  },
  {
    title: "4. Preserve corrections and refunds",
    text: "Use credit notes for refunds or corrections so the original invoice remains auditable and the accountant can match the adjustment.",
  },
];

const fields = [
  ["Company name", "Required for B2B invoice identity and customer downloads"],
  ["VAT/BTW number", "Needed for EU B2B VAT evidence and reverse-charge decisions"],
  ["PO/reference", "Helps the buyer's finance team approve and reconcile the invoice"],
  ["Invoice email", "Routes the PDF to accounts payable instead of the order contact only"],
  ["Payment terms", "Supports Net 14/30, bank transfer, and overdue reminder workflows"],
  ["Credit-note reason", "Explains refunds, service changes, or invoice corrections later"],
];

const scoring = [
  { signal: "You sell services, coaching, consulting, retainers, or implementation packages", score: "+2" },
  { signal: "Customers ask for PO numbers or invoices before they pay", score: "+2" },
  { signal: "Bank transfer / invoice-me payment is offered", score: "+2" },
  { signal: "Your accountant asks for invoice PDFs and paid dates every month", score: "+1" },
  { signal: "Refunds require manual credit notes or edited PDFs", score: "+2" },
];

const faq = [
  {
    q: "Can WooCommerce sell services and still need invoice automation?",
    a: "Yes. Service orders often create more invoice support than product orders because buyers need PO references, invoice emails, approval documents, payment terms, and sometimes partial refunds or credit notes.",
  },
  {
    q: "Should a proforma use the same number as the final invoice?",
    a: "Usually no. A proforma or payment request should not pollute the final invoice-number sequence. The final invoice should be issued when the paid/taxable invoice event occurs.",
  },
  {
    q: "Where does Lattice Invoices fit?",
    a: "Lattice Invoices is positioned as the focused WooCommerce EU invoice workflow for VAT fields, invoice PDFs, credit notes, customer downloads, and accountant handoff. This page qualifies B2B service stores for the €49 early-access path.",
  },
];

const mailto =
  "mailto:support@latticeplugins.com?subject=WooCommerce%20B2B%20service%20invoice%20workflow&body=Hi%20Lattice%2C%0A%0AI%20sell%20B2B%20services%20with%20WooCommerce%20and%20want%20the%20Lattice%20Invoices%20early-access%20workflow.%0A%0AStore%20URL%3A%20%0ACountry%3A%20%0AService%20sold%3A%20%0APayment%20methods%3A%20%0APO%2Freference%20field%20needed%3A%20%0AVAT%2FBTW%20fields%20needed%3A%20%0AProforma%20needed%3A%20%0ACredit-note%20needs%3A%20%0AAccounting%20export%20needs%3A%20";

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "WooCommerce B2B service invoices: VAT, PO numbers, and PDF workflow",
  description:
    "A buyer-intent guide for WooCommerce stores selling services to businesses and needing VAT invoice workflows.",
  mainEntityOfPage: PAGE_URL,
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

export default function WooCommerceB2BServiceInvoicesPage() {
  return (
    <main className="min-h-screen bg-slate-50">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <section className="bg-gradient-to-br from-slate-950 via-blue-950 to-emerald-900 text-white">
        <div className="max-w-5xl mx-auto px-6 py-16 lg:py-20">
          <p className="uppercase tracking-[0.3em] text-sm text-emerald-200 mb-4">WooCommerce B2B service invoices</p>
          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
            Stop turning B2B service orders into manual invoice work.
          </h1>
          <p className="text-xl text-blue-50 leading-relaxed max-w-3xl mb-8">
            If WooCommerce sells services, retainers, coaching, consulting, or implementation packages, your invoice workflow needs VAT fields, PO references, proformas, PDF delivery, credit notes, and accountant-ready exports.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href={mailto} className="bg-emerald-500 text-white px-8 py-4 rounded-xl font-semibold hover:bg-emerald-400 transition shadow-lg text-center">
              Request €49 B2B invoice early access
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
              <h2 className="text-3xl font-bold mb-4">Why service orders expose invoice gaps</h2>
              <p className="text-slate-700 leading-relaxed mb-5">
                Product stores usually invoice after a paid checkout. B2B service stores are messier: a buyer may need a PO number, finance approval, a proforma, bank-transfer instructions, a separate invoice email, or a credit note when scope changes.
              </p>
              <div className="space-y-3">
                {buyerProblems.map((problem) => (
                  <div key={problem} className="flex gap-3 rounded-xl bg-emerald-50 border border-emerald-100 p-4">
                    <span className="text-emerald-700 font-bold">→</span>
                    <span className="text-slate-800">{problem}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-2xl border shadow-sm p-8">
              <h2 className="text-3xl font-bold mb-6">The WooCommerce B2B service invoice workflow</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {workflowSteps.map((step) => (
                  <div key={step.title} className="rounded-xl border border-slate-200 bg-slate-50 p-5">
                    <h3 className="font-bold text-lg mb-2">{step.title}</h3>
                    <p className="text-slate-700 leading-relaxed">{step.text}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-2xl border shadow-sm p-8 overflow-hidden">
              <h2 className="text-3xl font-bold mb-4">Fields a service invoice plugin should support</h2>
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-slate-100 text-slate-700">
                      <th className="p-4 rounded-l-xl">Field</th>
                      <th className="p-4 rounded-r-xl">Why it matters</th>
                    </tr>
                  </thead>
                  <tbody>
                    {fields.map(([field, reason]) => (
                      <tr key={field} className="border-b border-slate-100">
                        <td className="p-4 font-semibold text-slate-900">{field}</td>
                        <td className="p-4 text-slate-700">{reason}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div className="bg-blue-50 border border-blue-100 rounded-2xl p-8">
              <h2 className="text-3xl font-bold mb-5">Qualification score for B2B service stores</h2>
              <p className="text-slate-700 leading-relaxed mb-5">
                Score 3+ points and the store has a real invoice workflow problem worth a paid early-access conversation.
              </p>
              <div className="space-y-3">
                {scoring.map((item) => (
                  <div key={item.signal} className="flex items-start justify-between gap-4 rounded-xl bg-white border border-blue-100 p-4">
                    <span className="text-slate-800">{item.signal}</span>
                    <span className="font-bold text-blue-700 whitespace-nowrap">{item.score}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-emerald-50 border border-emerald-100 rounded-2xl p-8">
              <h2 className="text-3xl font-bold mb-4">Early-access offer: €49 B2B service invoice workflow review</h2>
              <p className="text-slate-700 leading-relaxed mb-5">
                Send the store URL, service type, payment methods, PO/reference needs, VAT fields, proforma requirements, and credit-note use cases. The reply can map the current WooCommerce setup to the Lattice Invoices early-access workflow.
              </p>
              <a href={mailto} className="inline-flex bg-emerald-700 text-white px-7 py-3 rounded-xl font-semibold hover:bg-emerald-800 transition">
                Send my B2B invoice workflow
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
              <p className="text-sm uppercase tracking-[0.2em] text-emerald-700 font-semibold mb-3">Lattice Invoices early access</p>
              <h2 className="text-2xl font-bold mb-3">Selling services through WooCommerce?</h2>
              <p className="text-slate-600 mb-5">
                Use the early-access CTA if invoice requests, PO numbers, proformas, or credit notes already create admin work.
              </p>
              <a href={mailto} className="block text-center bg-slate-950 text-white px-5 py-3 rounded-xl font-semibold hover:bg-slate-800 transition mb-3">
                Request workflow review
              </a>
              <Link href="/docs/woocommerce-eu-vat-invoice-setup" className="block text-center border border-slate-200 px-5 py-3 rounded-xl font-semibold hover:bg-slate-50 transition mb-3">
                Read setup guide
              </Link>
              <Link href="/tools/woocommerce-invoice-roi-calculator" className="block text-center border border-slate-200 px-5 py-3 rounded-xl font-semibold hover:bg-slate-50 transition">
                Calculate invoice ROI
              </Link>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}
