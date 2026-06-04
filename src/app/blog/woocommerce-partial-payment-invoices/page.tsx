import type { Metadata } from "next";
import Link from "next/link";

const SITE_URL = "https://latticeplugins.com";

export const metadata: Metadata = {
  title: "WooCommerce Partial Payment Invoices — Deposits, Split Payments & EU VAT",
  description:
    "A practical EU VAT workflow guide for WooCommerce stores that take deposits, split payments, milestones, or balance payments and need invoice documents to stay clear.",
  alternates: {
    canonical: `${SITE_URL}/blog/woocommerce-partial-payment-invoices`,
  },
  openGraph: {
    title: "WooCommerce Partial Payment Invoices for Deposits & Split Payments",
    description:
      "How EU WooCommerce stores can handle deposits, milestone payments, proformas, final invoices, credit notes, and customer PDF downloads without confusing finance teams.",
    url: `${SITE_URL}/blog/woocommerce-partial-payment-invoices`,
    siteName: "Lattice Plugins",
    type: "article",
  },
};

const workflowChecklist = [
  "Decide whether the first customer document is a quote, proforma, payment request, deposit invoice, or final VAT invoice",
  "Collect company name, billing country, VAT/BTW number, PO/reference, and finance contact before the first payment",
  "Keep deposit amounts, balance due, paid total, VAT amount, and remaining amount visible on every customer-facing PDF",
  "Use sequential invoice numbers only for final accounting documents, not every checkout order email",
  "Attach the right document to deposit-paid, balance-paid, completed, refunded, and manually resent emails",
  "Generate credit notes against the correct invoice line if a deposit or balance payment is refunded",
];

const paymentRows = [
  ["50% deposit + 50% balance", "Custom work, setup services, agency retainers", "Proforma/payment request first, final invoice after the full taxable event or payment policy"],
  ["Milestone payments", "Implementation projects, enterprise onboarding", "One record should show each paid milestone, remaining balance, and matching document links"],
  ["Pre-order deposit", "Digital products, plugins, launch offers", "Deposit confirmation should not be confused with a final paid-in-full invoice"],
  ["Manual bank-transfer balance", "EU B2B buyers using finance departments", "Due date, bank details, PO/reference, and balance amount must be visible on the PDF"],
  ["Refund after deposit", "Cancelled projects or failed procurement", "Credit note must reference the original invoice/deposit document and VAT treatment"],
];

const scenarios = [
  {
    title: "A customer pays a deposit but finance asks for an invoice",
    pain: "WooCommerce confirms the order, but the buyer needs a document that clearly says what was paid and what is still due.",
    lattice: "Generate a payment request/proforma or deposit document with balance due, then issue the final invoice at the correct point.",
  },
  {
    title: "A balance payment happens weeks later",
    pain: "The store team edits order notes manually, while accounting needs one audit trail for deposit, balance, invoice number, and emails.",
    lattice: "Keep invoice metadata on the order and render paid-to-date, remaining balance, due dates, and document links consistently.",
  },
  {
    title: "A partial refund needs a credit note",
    pain: "Refunding only the deposit or only the balance can create messy PDF naming and unclear VAT corrections.",
    lattice: "Tie each credit note to the correct invoice/deposit workflow so customer downloads and email attachments remain traceable.",
  },
];

const faq = [
  {
    q: "Can WooCommerce create invoices for partial payments?",
    a: "WooCommerce can track order totals and payment status, but deposit invoices, balance payment requests, proformas, final VAT invoices, and credit notes usually need a dedicated invoice workflow. The key is separating customer communication from final accounting documents.",
  },
  {
    q: "Should a deposit payment always generate a final VAT invoice?",
    a: "Not always. Many EU B2B stores prefer a proforma or payment request before payment, then a final VAT invoice when the payment/tax event requires it. Rules vary by country and business model, so the workflow should make document status explicit.",
  },
  {
    q: "What should a partial payment invoice show?",
    a: "A strong document shows the full order value, deposit paid, balance due, VAT/BTW metadata, invoice or proforma status, due date, bank details if relevant, and customer/company fields collected at checkout.",
  },
  {
    q: "How does Lattice Invoices plan to support deposits and split payments?",
    a: "The early-access roadmap is being shaped around invoice-ready checkout fields, proforma/payment requests, final invoice PDFs, due dates, credit notes, email attachments, and protected customer downloads for EU WooCommerce stores.",
  },
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "WooCommerce partial payment invoices for deposits, split payments, and EU VAT workflows",
  description:
    "A buyer-intent guide for WooCommerce stores that take deposits or split payments and need invoice documents to stay clear for customers and accounting.",
  mainEntityOfPage: `${SITE_URL}/blog/woocommerce-partial-payment-invoices`,
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
  "mailto:support@latticeplugins.com?subject=Lattice%20Invoices%20partial%20payment%20workflow&body=Hi%20Lattice%2C%0A%0AI%20need%20WooCommerce%20partial%20payment%20invoice%20support.%0A%0AStore%20URL%3A%20%0ACountry%3A%20%0AB2B%20or%20B2C%3A%20%0ADeposit%20or%20split%20payment%20model%3A%20%0ABank%20transfer%20or%20card%20payments%3A%20%0AProforma%20before%20payment%3A%20%0AFinal%20invoice%20timing%3A%20%0ACredit%20notes%20needed%3A%20";

export default function WooCommercePartialPaymentInvoicesPage() {
  return (
    <main className="min-h-screen bg-slate-50">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <section className="bg-gradient-to-br from-slate-950 via-emerald-950 to-blue-900 text-white">
        <div className="max-w-5xl mx-auto px-6 py-16 lg:py-20">
          <p className="uppercase tracking-[0.3em] text-sm text-emerald-200 mb-4">WooCommerce partial payment invoices</p>
          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
            Handle deposits, split payments, and balance invoices without confusing EU VAT paperwork.
          </h1>
          <p className="text-xl text-emerald-50 leading-relaxed max-w-3xl mb-8">
            Deposits and milestone payments are easy to sell but hard to document. EU B2B buyers need clear PDFs showing what
            was paid, what is still due, and whether the document is a proforma, payment request, credit note, or final invoice.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href={mailto} className="bg-emerald-500 text-white px-8 py-4 rounded-xl font-semibold hover:bg-emerald-400 transition shadow-lg text-center">
              Request partial-payment early access
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
              <h2 className="text-3xl font-bold mb-4">Partial payments need their own invoice logic.</h2>
              <p className="text-slate-700 leading-relaxed mb-4">
                A standard WooCommerce order email can say a deposit was paid, but it does not explain the accounting state.
                Finance teams still need invoice status, invoice numbers, VAT metadata, due dates, credit-note handling, and a
                protected place to download the latest PDF.
              </p>
              <p className="text-slate-700 leading-relaxed">
                Lattice Invoices is being positioned around this missing layer: checkout fields, proforma/payment requests,
                partial-payment visibility, final invoice documents, customer downloads, email attachments, and credit notes.
              </p>
            </div>

            <div className="bg-white rounded-2xl border shadow-sm p-8">
              <h2 className="text-3xl font-bold mb-6">Partial-payment invoice checklist</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {workflowChecklist.map((item) => (
                  <div key={item} className="flex gap-3 p-4 rounded-xl bg-slate-50 border border-slate-100">
                    <span className="text-emerald-600 font-bold">✓</span>
                    <span className="text-slate-800">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-2xl border shadow-sm p-8 overflow-hidden">
              <h2 className="text-3xl font-bold mb-4">Deposit and split-payment workflows to plan for</h2>
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-slate-100 text-slate-700">
                      <th className="p-4 rounded-l-xl">Payment model</th>
                      <th className="p-4">Best fit</th>
                      <th className="p-4 rounded-r-xl">Invoice workflow note</th>
                    </tr>
                  </thead>
                  <tbody>
                    {paymentRows.map(([model, fit, note]) => (
                      <tr key={model} className="border-b border-slate-100">
                        <td className="p-4 font-semibold text-slate-900">{model}</td>
                        <td className="p-4 text-slate-600">{fit}</td>
                        <td className="p-4 text-slate-800">{note}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div className="bg-white rounded-2xl border shadow-sm p-8">
              <h2 className="text-3xl font-bold mb-6">Where partial payments break manual invoice workflows</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                {scenarios.map((scenario) => (
                  <div key={scenario.title} className="rounded-xl border border-slate-200 bg-slate-50 p-5">
                    <h3 className="text-xl font-bold mb-3">{scenario.title}</h3>
                    <p className="text-slate-600 mb-3">Problem: {scenario.pain}</p>
                    <p className="font-semibold text-slate-900">Lattice path: {scenario.lattice}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-emerald-50 border border-emerald-100 rounded-2xl p-8">
              <h2 className="text-3xl font-bold mb-4">Early-access offer: €49 partial-payment workflow review</h2>
              <p className="text-slate-700 leading-relaxed mb-5">
                If your store sells with deposits, milestones, or balance payments, send the current checkout flow, invoice PDFs,
                payment terms, and refund scenarios. Lattice will use that to prioritize the partial-payment invoice workflow.
              </p>
              <a href={mailto} className="inline-flex bg-emerald-600 text-white px-7 py-3 rounded-xl font-semibold hover:bg-emerald-700 transition">
                Send my deposit invoice workflow
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
              <p className="text-sm uppercase tracking-[0.2em] text-emerald-700 font-semibold mb-2">Deposit invoices</p>
              <h2 className="text-2xl font-bold mb-3">Need invoices for split payments?</h2>
              <p className="text-slate-700 mb-5">
                Send store URL, deposit model, balance timing, payment methods, VAT/B2B requirements, and whether the first
                document should be proforma or final invoice.
              </p>
              <a href={mailto} className="block text-center bg-emerald-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-emerald-700 transition mb-3">
                Request early access
              </a>
              <Link href="/blog/woocommerce-proforma-invoice" className="block text-center border border-slate-200 px-6 py-3 rounded-xl font-semibold hover:border-emerald-400 transition mb-3">
                Proforma workflow guide
              </Link>
              <Link href="/blog/woocommerce-bank-transfer-invoice" className="block text-center border border-slate-200 px-6 py-3 rounded-xl font-semibold hover:border-emerald-400 transition mb-3">
                Bank-transfer invoice guide
              </Link>
              <Link href="/blog/woocommerce-credit-notes-refunds" className="block text-center border border-slate-200 px-6 py-3 rounded-xl font-semibold hover:border-emerald-400 transition mb-3">
                Credit-note refund guide
              </Link>
              <Link href="/docs/woocommerce-eu-vat-invoice-setup" className="block text-center border border-slate-200 px-6 py-3 rounded-xl font-semibold hover:border-emerald-400 transition mb-3">
                Setup guide
              </Link>
              <Link href="/woocommerce-eu-vat-invoices" className="block text-center border border-slate-200 px-6 py-3 rounded-xl font-semibold hover:border-emerald-400 transition">
                View invoice offer
              </Link>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}
