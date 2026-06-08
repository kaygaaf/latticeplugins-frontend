import type { Metadata } from "next";
import Link from "next/link";

const SITE_URL = "https://latticeplugins.com";

export const metadata: Metadata = {
  title: "WooCommerce Invoice Automation for EU VAT Stores",
  description:
    "A buyer-intent guide to WooCommerce invoice automation: when to issue PDFs, proformas, credit notes, BACS reminders, VAT evidence, customer downloads, and accountant exports.",
  alternates: {
    canonical: `${SITE_URL}/blog/woocommerce-invoice-automation`,
  },
  openGraph: {
    title: "WooCommerce invoice automation for EU VAT stores",
    description:
      "Use this practical checklist before automating WooCommerce invoices, credit notes, BACS reminders, VAT evidence, and accounting exports.",
    url: `${SITE_URL}/blog/woocommerce-invoice-automation`,
    siteName: "Lattice Plugins",
    type: "article",
  },
};

const automationSteps = [
  {
    step: "Capture invoice data before payment",
    detail:
      "Company name, VAT/BTW number, billing country, PO reference, payment method, exemption reason, and customer email should be saved before any invoice number is consumed.",
  },
  {
    step: "Separate proforma from final invoice",
    detail:
      "Bank-transfer and B2B approval workflows often need a payment request first, then a final paid invoice only after reconciliation.",
  },
  {
    step: "Automate credit notes without editing old invoices",
    detail:
      "Refunds should create a linked credit note with its own number, VAT correction, PDF, customer delivery status, and export row.",
  },
  {
    step: "Attach and expose PDFs in the right places",
    detail:
      "The customer should receive invoice PDFs by email and be able to download them from My Account without asking support.",
  },
  {
    step: "Export accountant-ready invoice evidence",
    detail:
      "Month-end exports should include invoice number, order ID, VAT treatment, paid status, credit-note links, customer VAT ID, currency, due date, and PDF URL.",
  },
];

const triggerMatrix = [
  {
    trigger: "Order placed with card payment",
    automation: "Generate final invoice after payment succeeds; attach PDF to processing/completed email.",
    caution: "Do not issue a final invoice for failed or abandoned payment attempts.",
  },
  {
    trigger: "Order placed with BACS/bank transfer",
    automation: "Send proforma or payment request first; issue final invoice when the order is marked paid.",
    caution: "A final invoice at order creation can create unpaid invoice clutter for finance.",
  },
  {
    trigger: "Refund or partial refund",
    automation: "Generate a separate credit note and link it to the original invoice in export and customer downloads.",
    caution: "Editing the original invoice after it was sent weakens the audit trail.",
  },
  {
    trigger: "EU B2B reverse-charge order",
    automation: "Store VAT evidence and print reverse-charge wording on the invoice PDF and export.",
    caution: "A zero-VAT line without explanation creates accountant follow-up work.",
  },
];

const faq = [
  {
    q: "What should WooCommerce invoice automation include?",
    a: "A useful automation workflow should handle invoice data capture, sequential invoice numbers, PDF delivery, BACS/proforma timing, credit notes, VAT evidence, customer downloads, reminders, audit trail, and accountant exports.",
  },
  {
    q: "Should WooCommerce generate invoices automatically when an order is created?",
    a: "Not always. Paid card orders can usually receive a final invoice after successful payment, but BACS and approval workflows often need a proforma first and a final invoice only after payment is reconciled.",
  },
  {
    q: "How do refunds fit into invoice automation?",
    a: "Refunds should create credit notes rather than rewriting the original invoice. The credit note needs a number, PDF, VAT correction, customer delivery path, and export link back to the original invoice.",
  },
  {
    q: "Where does Lattice Invoices fit?",
    a: "Lattice Invoices is the early-access product path for WooCommerce EU VAT and B2B invoice automation: VAT fields, proforma/final invoice timing, credit notes, PDF delivery, customer downloads, audit trail, and accounting handoff.",
  },
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "WooCommerce invoice automation for EU VAT stores",
  description:
    "A practical guide to automating WooCommerce invoices, proformas, credit notes, VAT evidence, reminders, PDF delivery, and accounting exports.",
  mainEntityOfPage: `${SITE_URL}/blog/woocommerce-invoice-automation`,
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
  "mailto:support@latticeplugins.com?subject=WooCommerce%20invoice%20automation%20review&body=Hi%20Lattice%2C%0A%0AI%20want%20a%20WooCommerce%20invoice%20automation%20review.%0A%0AStore%20URL%3A%20%0ACountry%3A%20%0ACurrent%20invoice%20plugin%3A%20%0APayment%20methods%20(card%2FBACS%2Fother)%3A%20%0AWhen%20invoices%20are%20issued%20today%3A%20%0ACredit-note%20workflow%3A%20%0AVAT%2Freverse-charge%20needs%3A%20%0AAccounting%20software%3A%20";

export default function WooCommerceInvoiceAutomationPage() {
  return (
    <main className="min-h-screen bg-slate-50">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <section className="bg-gradient-to-br from-slate-950 via-indigo-950 to-blue-900 text-white">
        <div className="max-w-5xl mx-auto px-6 py-16 lg:py-20">
          <p className="uppercase tracking-[0.3em] text-sm text-blue-200 mb-4">WooCommerce invoice automation</p>
          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
            Automate WooCommerce invoices without breaking VAT, refunds, or finance handoff.
          </h1>
          <p className="text-xl text-blue-50 leading-relaxed max-w-3xl mb-8">
            Invoice automation saves time only if the timing is correct. EU stores need different rules for paid orders, BACS payment requests, reverse-charge orders, credit notes, customer downloads, and accountant exports.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href={mailto} className="bg-blue-500 text-white px-8 py-4 rounded-xl font-semibold hover:bg-blue-400 transition shadow-lg text-center">
              Request €49 invoice automation review
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
              <h2 className="text-3xl font-bold mb-4">The automation trap: issuing the PDF is the easy part</h2>
              <p className="text-slate-700 leading-relaxed mb-4">
                Many stores turn on automatic invoice PDFs and assume the job is done. Then finance discovers edge cases: unpaid BACS orders already have final invoices, refund corrections overwrite old documents, VAT IDs are missing from exports, or customers ask support for download links.
              </p>
              <p className="text-slate-700 leading-relaxed">
                A better WooCommerce invoice automation workflow starts by deciding when an invoice should be issued, what evidence must be stored, and what downstream systems need at month end.
              </p>
            </div>

            <div className="bg-blue-50 border border-blue-100 rounded-2xl p-8">
              <h2 className="text-3xl font-bold mb-5">Five automation rules before you buy another plugin</h2>
              <div className="space-y-4">
                {automationSteps.map((item, index) => (
                  <div key={item.step} className="bg-white rounded-xl border border-blue-100 p-5">
                    <p className="text-blue-700 font-bold mb-1">Rule {index + 1}</p>
                    <h3 className="text-xl font-bold mb-2">{item.step}</h3>
                    <p className="text-slate-700 leading-relaxed">{item.detail}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-2xl border shadow-sm p-8 overflow-hidden">
              <h2 className="text-3xl font-bold mb-6">Automation trigger matrix</h2>
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-slate-100 text-slate-700">
                      <th className="p-4 rounded-l-xl">Trigger</th>
                      <th className="p-4">Automation rule</th>
                      <th className="p-4 rounded-r-xl">Caution</th>
                    </tr>
                  </thead>
                  <tbody>
                    {triggerMatrix.map((item) => (
                      <tr key={item.trigger} className="border-b border-slate-100 align-top">
                        <td className="p-4 font-semibold text-slate-900">{item.trigger}</td>
                        <td className="p-4 text-slate-700">{item.automation}</td>
                        <td className="p-4 text-slate-600">{item.caution}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div className="bg-emerald-50 border border-emerald-100 rounded-2xl p-8">
              <h2 className="text-3xl font-bold mb-4">Early-access offer: €49 invoice automation review</h2>
              <p className="text-slate-700 leading-relaxed mb-5">
                Send your payment methods, current PDF invoice plugin, VAT countries, refund workflow, and accounting software. Lattice will map when invoices should be issued, where credit notes and proformas belong, and what is missing before automation is safe.
              </p>
              <a href={mailto} className="inline-flex bg-emerald-600 text-white px-7 py-3 rounded-xl font-semibold hover:bg-emerald-700 transition">
                Send my automation workflow
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
              <h2 className="text-2xl font-bold mb-3">Automating invoice PDFs?</h2>
              <p className="text-slate-600 mb-5">
                Get a practical review for invoice timing, proforma/BACS workflows, credit notes, VAT evidence, customer downloads, reminders, and accountant exports.
              </p>
              <a href={mailto} className="block text-center bg-slate-950 text-white px-5 py-3 rounded-xl font-semibold hover:bg-slate-800 transition mb-3">
                Request automation review
              </a>
              <Link href="/docs/woocommerce-eu-vat-invoice-setup" className="block text-center border border-slate-200 px-5 py-3 rounded-xl font-semibold hover:bg-slate-50 transition">
                Read setup guide
              </Link>
            </div>

            <div className="bg-indigo-50 rounded-2xl border border-indigo-100 p-6">
              <h3 className="text-xl font-bold mb-3">Related invoice guides</h3>
              <ul className="space-y-3 text-indigo-900 font-medium">
                <li><Link href="/blog/woocommerce-invoice-plugin-comparison" className="hover:underline">Invoice plugin comparison</Link></li>
                <li><Link href="/blog/woocommerce-bank-transfer-invoice" className="hover:underline">Bank transfer invoices</Link></li>
                <li><Link href="/blog/woocommerce-proforma-invoice" className="hover:underline">Proforma invoices</Link></li>
                <li><Link href="/blog/woocommerce-credit-notes-refunds" className="hover:underline">Credit notes and refunds</Link></li>
                <li><Link href="/blog/woocommerce-invoice-export-accounting" className="hover:underline">Accounting export</Link></li>
              </ul>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}
