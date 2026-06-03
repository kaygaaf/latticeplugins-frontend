import type { Metadata } from "next";
import Link from "next/link";

const SITE_URL = "https://latticeplugins.com";

export const metadata: Metadata = {
  title: "WooCommerce Bank Transfer Invoice Workflow — EU VAT Guide",
  description:
    "How WooCommerce stores can handle bank transfer invoice requests, EU VAT fields, proforma payment requests, final invoice PDFs, and credit notes without manual support work.",
  alternates: {
    canonical: `${SITE_URL}/blog/woocommerce-bank-transfer-invoice`,
  },
  openGraph: {
    title: "WooCommerce Bank Transfer Invoice Workflow",
    description:
      "A buyer-intent guide for EU B2B stores that use bank transfer payments and need invoice-ready WooCommerce orders.",
    url: `${SITE_URL}/blog/woocommerce-bank-transfer-invoice`,
    siteName: "Lattice Plugins",
    type: "article",
  },
};

const checklist = [
  "Show bank transfer as a deliberate B2B payment option, not a fallback gateway",
  "Collect company name, VAT/BTW number, PO number, and invoice email before the order is placed",
  "Send a payment request or proforma before payment when the buyer needs internal approval",
  "Create the final invoice only when the WooCommerce order is paid or manually marked processing/completed",
  "Attach the invoice PDF to the paid-order email and keep it downloadable from My Account",
  "Generate refund credit notes from the original paid invoice instead of a separate spreadsheet",
];

const scenarios = [
  {
    title: "B2B buyer wants to pay by bank transfer",
    manual: "Support emails a PDF request and then fixes missing VAT details later.",
    lattice: "WooCommerce captures the invoice data upfront and routes the buyer into a clean payment request workflow.",
  },
  {
    title: "Order is unpaid for several days",
    manual: "The store either reserves an invoice number too early or forgets to follow up.",
    lattice: "The proforma/payment request stays separate until the order is actually paid.",
  },
  {
    title: "Accountant asks for order-level VAT evidence",
    manual: "The store exports order screenshots and manually matches payments.",
    lattice: "Invoice number, VAT number, VAT totals, payment status, and credit-note links live on the order record.",
  },
];

const comparisonRows = [
  ["Checkout data", "Company/VAT details often arrive by email after checkout", "Business billing fields are collected before payment"],
  ["Payment request", "Manual PDF or generic bank instructions", "Proforma-style request tied to the WooCommerce order"],
  ["Final invoice", "Created by hand after bank reconciliation", "Generated when the order is marked paid"],
  ["Customer access", "Buyer asks support for invoice copies", "Invoice is attached to email and visible in My Account"],
  ["Refunds", "Manual credit note outside WooCommerce", "Credit note references the original paid invoice"],
];

const faq = [
  {
    q: "Should a WooCommerce bank transfer order get a final invoice immediately?",
    a: "For many B2B stores, no. A payment request or proforma can be sent before payment, while the final VAT invoice is generated after the bank transfer is received and the WooCommerce order is marked paid.",
  },
  {
    q: "What fields matter most for bank transfer invoice orders?",
    a: "Company name, VAT/BTW number, billing address, PO/reference number, invoice email, payment status, VAT rate, VAT amount, and the final invoice number are the fields that usually remove support back-and-forth.",
  },
  {
    q: "Does this replace WooCommerce BACS/bank transfer?",
    a: "No. The bank transfer gateway can stay in place. The missing layer is the invoice workflow around it: proforma/payment request before payment, final invoice after payment, and credit notes after refunds.",
  },
  {
    q: "How does this help sell Lattice Invoices?",
    a: "Bank transfer invoice searches are high-intent because the buyer already has a payment and paperwork problem. Lattice Invoices is positioned as the WooCommerce-native workflow that turns that problem into a paid €49 setup path.",
  },
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "WooCommerce bank transfer invoice workflow for EU B2B stores",
  description:
    "A practical guide for WooCommerce stores that accept bank transfer payments and need clean EU VAT invoice workflows.",
  mainEntityOfPage: `${SITE_URL}/blog/woocommerce-bank-transfer-invoice`,
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
  "mailto:support@latticeplugins.com?subject=Lattice%20Invoices%20bank%20transfer%20workflow&body=Hi%20Lattice%2C%0A%0AI%20need%20a%20WooCommerce%20bank-transfer%20invoice%20workflow.%0A%0AStore%20URL%3A%20%0ACountry%3A%20%0AB2B%20or%20B2C%3A%20%0ABank%20transfer%20gateway%20used%3A%20%0AVAT%2FBTW%20fields%20needed%3A%20%0AInvoice%20number%20format%3A%20%0AProforma%20needed%20before%20payment%3A%20";

export default function WooCommerceBankTransferInvoicePage() {
  return (
    <main className="min-h-screen bg-slate-50">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <section className="bg-gradient-to-br from-slate-950 via-indigo-950 to-blue-900 text-white">
        <div className="max-w-5xl mx-auto px-6 py-16 lg:py-20">
          <p className="uppercase tracking-[0.3em] text-sm text-blue-200 mb-4">WooCommerce bank transfer invoices</p>
          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
            Bank transfer orders should not turn into invoice chaos.
          </h1>
          <p className="text-xl text-blue-50 leading-relaxed max-w-3xl mb-8">
            B2B customers often choose bank transfer because they need approval, a reference, and a proper invoice trail.
            If WooCommerce only shows payment instructions, the store owner still has to chase VAT details, create PDFs,
            and match payments manually.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href={mailto} className="bg-green-500 text-white px-8 py-4 rounded-xl font-semibold hover:bg-green-400 transition shadow-lg text-center">
              Request bank-transfer invoice early access
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
              <h2 className="text-3xl font-bold mb-4">Bank transfer is where invoice friction becomes visible.</h2>
              <p className="text-slate-700 leading-relaxed mb-4">
                Card payments can hide invoice problems until after the order. Bank transfer buyers surface the problem
                earlier: they ask for an invoice, a PO reference, payment instructions, and a clean VAT trail before money
                moves. That makes this search intent valuable for Lattice Invoices.
              </p>
              <p className="text-slate-700 leading-relaxed">
                The right workflow keeps the existing WooCommerce bank transfer gateway, but adds the missing sales layer:
                invoice-ready checkout fields, proforma/payment request handling, final invoice generation after payment,
                and customer-download access.
              </p>
            </div>

            <div className="bg-white rounded-2xl border shadow-sm p-8">
              <h2 className="text-3xl font-bold mb-6">Readiness checklist for bank transfer invoice orders</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {checklist.map((item) => (
                  <div key={item} className="flex gap-3 p-4 rounded-xl bg-slate-50 border border-slate-100">
                    <span className="text-green-600 font-bold">✓</span>
                    <span className="text-slate-800">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-2xl border shadow-sm p-8">
              <h2 className="text-3xl font-bold mb-6">Where the workflow saves the sale</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                {scenarios.map((scenario) => (
                  <div key={scenario.title} className="rounded-xl border border-slate-200 bg-slate-50 p-5">
                    <h3 className="text-xl font-bold mb-3">{scenario.title}</h3>
                    <p className="text-slate-600 mb-3">Manual: {scenario.manual}</p>
                    <p className="font-semibold text-slate-900">Lattice path: {scenario.lattice}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-2xl border shadow-sm p-8 overflow-hidden">
              <h2 className="text-3xl font-bold mb-4">Manual bank transfer invoices vs. WooCommerce-native workflow</h2>
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-slate-100 text-slate-700">
                      <th className="p-4 rounded-l-xl">Need</th>
                      <th className="p-4">Manual workaround</th>
                      <th className="p-4 rounded-r-xl">Lattice Invoices path</th>
                    </tr>
                  </thead>
                  <tbody>
                    {comparisonRows.map(([need, manual, lattice]) => (
                      <tr key={need} className="border-b border-slate-100">
                        <td className="p-4 font-semibold text-slate-900">{need}</td>
                        <td className="p-4 text-slate-600">{manual}</td>
                        <td className="p-4 text-slate-800">{lattice}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
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
              <p className="text-sm uppercase tracking-[0.2em] text-blue-700 font-semibold mb-2">Early-access qualifier</p>
              <h2 className="text-2xl font-bold mb-3">Need invoices around bank transfer orders?</h2>
              <p className="text-slate-700 mb-5">
                Send the store URL, country, current bank transfer gateway, required VAT/BTW fields, invoice number format,
                and whether you need proforma requests before payment. That qualifies the strongest €49 Lattice Invoices path.
              </p>
              <a href={mailto} className="block text-center bg-blue-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-blue-700 transition mb-3">
                Request bank-transfer invoice early access
              </a>
              <Link href="/blog/woocommerce-proforma-invoice" className="block text-center border border-slate-200 px-6 py-3 rounded-xl font-semibold hover:border-blue-400 transition mb-3">
                Proforma workflow guide
              </Link>
              <Link href="/blog/woocommerce-invoice-numbering" className="block text-center border border-slate-200 px-6 py-3 rounded-xl font-semibold hover:border-blue-400 transition mb-3">
                Invoice numbering guide
              </Link>
              <Link href="/blog/woocommerce-pdf-invoice-email-attachments" className="block text-center border border-slate-200 px-6 py-3 rounded-xl font-semibold hover:border-blue-400 transition mb-3">
                PDF attachment guide
              </Link>
              <Link href="/docs/woocommerce-eu-vat-invoice-setup" className="block text-center border border-slate-200 px-6 py-3 rounded-xl font-semibold hover:border-blue-400 transition mb-3">
                Setup guide
              </Link>
              <Link href="/woocommerce-eu-vat-invoices" className="block text-center border border-slate-200 px-6 py-3 rounded-xl font-semibold hover:border-blue-400 transition">
                View invoice offer
              </Link>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}
