import type { Metadata } from "next";
import Link from "next/link";

const SITE_URL = "https://latticeplugins.com";

export const metadata: Metadata = {
  title: "WooCommerce Invoice PDF Template — EU VAT Fields, B2B Layout & Checklist",
  description:
    "A practical buying guide for WooCommerce stores that need invoice PDF templates with EU VAT fields, reverse-charge text, bank details, due dates, and customer downloads.",
  alternates: {
    canonical: `${SITE_URL}/blog/woocommerce-invoice-pdf-template`,
  },
  openGraph: {
    title: "WooCommerce Invoice PDF Template for EU VAT Stores",
    description:
      "What a WooCommerce invoice PDF template needs before EU B2B buyers trust it: VAT/BTW numbers, reverse-charge wording, bank transfer fields, invoice numbering, due dates, and credit notes.",
    url: `${SITE_URL}/blog/woocommerce-invoice-pdf-template`,
    siteName: "Lattice Plugins",
    type: "article",
  },
};

const templateChecklist = [
  "Company name, billing address, country, VAT/BTW number, and optional purchase-order/reference fields from checkout",
  "Sequential invoice number, invoice date, order number, payment status, currency, and VAT-inclusive/exclusive totals",
  "Reverse-charge wording when the buyer is a valid EU B2B customer outside the seller country",
  "Bank details, payment terms, and due date for BACS/manual invoice workflows",
  "Clear document labels: proforma, payment request, final invoice, credit note, or deposit/balance invoice",
  "Protected customer download links in My Account plus correct PDF attachments on customer emails",
];

const templateSections = [
  ["Header", "Seller legal name, logo, VAT number, company registration, contact email", "Avoid making the logo the only identity element; finance teams need legal data."],
  ["Buyer block", "Company name, VAT/BTW number, billing country, PO/reference", "Collect this before checkout payment, not after the order is already placed."],
  ["Invoice metadata", "Invoice number, order number, invoice date, due date, payment method", "Do not rely on WooCommerce order IDs as formal invoice numbers."],
  ["Line items", "Product, quantity, subtotal, VAT rate, VAT amount, discounts", "Digital products and subscriptions need especially clear tax treatment."],
  ["Footer", "Reverse-charge text, bank details, refund/credit-note references, support link", "This is where manual templates often miss EU compliance wording."],
];

const scenarios = [
  {
    title: "EU B2B buyer needs reverse-charge wording",
    pain: "A generic PDF invoice shows totals but no VAT/BTW number or reverse-charge sentence, so finance rejects it.",
    lattice: "Render VAT metadata, buyer country, and reverse-charge wording from checkout fields into the PDF template automatically.",
  },
  {
    title: "Bank-transfer buyers need payment terms",
    pain: "The WooCommerce order email says 'on hold', but the PDF does not show Net 14/30, IBAN, due date, or payment reference.",
    lattice: "Treat the PDF as a payment request/proforma first, then produce a final invoice once paid if your accounting workflow requires it.",
  },
  {
    title: "Refunds need matching credit-note templates",
    pain: "Refund emails are sent, but customers cannot download a clean credit note that references the original invoice number.",
    lattice: "Keep invoice and credit-note template fields consistent so My Account downloads and email attachments remain traceable.",
  },
];

const faq = [
  {
    q: "What should a WooCommerce invoice PDF template include for EU VAT?",
    a: "At minimum: seller legal details, buyer company/VAT fields, sequential invoice number, invoice date, VAT rates, VAT totals, reverse-charge wording when relevant, payment method, due date for bank transfer, and clear links to refunds or credit notes.",
  },
  {
    q: "Can I use the WooCommerce order ID as the invoice number?",
    a: "Many stores start there, but EU accounting workflows usually need a separate sequential invoice-number series plus credit-note numbering. A dedicated invoice workflow makes gaps, refunds, and proformas easier to audit.",
  },
  {
    q: "Do bank-transfer orders need a different PDF template?",
    a: "They often need extra fields: bank details, payment reference, payment terms, due date, proforma/payment-request wording, and a clear final-invoice step after payment. Card-paid consumer invoices can usually be simpler.",
  },
  {
    q: "How does Lattice Invoices help with invoice PDF templates?",
    a: "The early-access direction is focused on invoice-ready checkout fields, EU VAT metadata, proformas, final invoice PDFs, credit notes, customer downloads, email attachments, due dates, and bank-transfer invoice workflows for WooCommerce.",
  },
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "WooCommerce invoice PDF template checklist for EU VAT and B2B stores",
  description:
    "A buyer-intent guide for WooCommerce stores choosing or designing invoice PDF templates with EU VAT, reverse-charge, bank-transfer, and customer-download requirements.",
  mainEntityOfPage: `${SITE_URL}/blog/woocommerce-invoice-pdf-template`,
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
  "mailto:support@latticeplugins.com?subject=Lattice%20Invoices%20PDF%20template%20early%20access&body=Hi%20Lattice%2C%0A%0AI%20need%20a%20WooCommerce%20invoice%20PDF%20template%20workflow.%0A%0AStore%20URL%3A%20%0ACountry%3A%20%0AB2B%20or%20B2C%3A%20%0AVAT%2FBTW%20field%20needed%3A%20%0AReverse%20charge%20needed%3A%20%0ABank%20transfer%20details%3A%20%0ADue%20dates%2Fpayment%20terms%3A%20%0ACredit%20notes%20needed%3A%20%0ACustomer%20downloads%20needed%3A%20";

export default function WooCommerceInvoicePdfTemplatePage() {
  return (
    <main className="min-h-screen bg-slate-50">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <section className="bg-gradient-to-br from-slate-950 via-blue-950 to-emerald-900 text-white">
        <div className="max-w-5xl mx-auto px-6 py-16 lg:py-20">
          <p className="uppercase tracking-[0.3em] text-sm text-emerald-200 mb-4">WooCommerce invoice PDF template</p>
          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
            Build invoice PDFs EU finance teams can actually approve.
          </h1>
          <p className="text-xl text-emerald-50 leading-relaxed max-w-3xl mb-8">
            A pretty PDF is not enough for EU WooCommerce stores. B2B buyers need VAT/BTW fields, reverse-charge text,
            invoice numbers, bank-transfer details, due dates, credit notes, and protected customer downloads.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href={mailto} className="bg-emerald-500 text-white px-8 py-4 rounded-xl font-semibold hover:bg-emerald-400 transition shadow-lg text-center">
              Request PDF template early access
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
              <h2 className="text-3xl font-bold mb-4">The template is where invoice trust is won or lost.</h2>
              <p className="text-slate-700 leading-relaxed mb-4">
                Most WooCommerce PDF invoice plugins can output a document. The harder revenue problem is whether that document
                contains the fields EU B2B buyers and accounting teams expect before they approve payment or accept a download.
              </p>
              <p className="text-slate-700 leading-relaxed">
                Lattice Invoices is being shaped around this practical workflow: collect invoice-ready checkout data, render it in
                clean PDF templates, attach the right file to emails, and keep customer downloads, proformas, final invoices, and
                credit notes consistent.
              </p>
            </div>

            <div className="bg-white rounded-2xl border shadow-sm p-8">
              <h2 className="text-3xl font-bold mb-6">EU-ready invoice PDF checklist</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {templateChecklist.map((item) => (
                  <div key={item} className="flex gap-3 p-4 rounded-xl bg-slate-50 border border-slate-100">
                    <span className="text-emerald-600 font-bold">✓</span>
                    <span className="text-slate-800">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-2xl border shadow-sm p-8 overflow-hidden">
              <h2 className="text-3xl font-bold mb-4">What each PDF template section should do</h2>
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-slate-100 text-slate-700">
                      <th className="p-4 rounded-l-xl">Section</th>
                      <th className="p-4">Fields to include</th>
                      <th className="p-4 rounded-r-xl">Template note</th>
                    </tr>
                  </thead>
                  <tbody>
                    {templateSections.map(([section, fields, note]) => (
                      <tr key={section} className="border-b border-slate-100">
                        <td className="p-4 font-semibold text-slate-900">{section}</td>
                        <td className="p-4 text-slate-600">{fields}</td>
                        <td className="p-4 text-slate-800">{note}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div className="bg-white rounded-2xl border shadow-sm p-8">
              <h2 className="text-3xl font-bold mb-6">Where generic PDF templates break</h2>
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
              <h2 className="text-3xl font-bold mb-4">Early-access offer: €49 invoice-template workflow review</h2>
              <p className="text-slate-700 leading-relaxed mb-5">
                Send your current invoice PDF, checkout fields, payment methods, and refund process. Lattice will use that to
                prioritize the PDF-template workflow and tell you which fields should be collected before checkout.
              </p>
              <a href={mailto} className="inline-flex bg-emerald-600 text-white px-7 py-3 rounded-xl font-semibold hover:bg-emerald-700 transition">
                Send my PDF template requirements
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
              <p className="text-sm uppercase tracking-[0.2em] text-emerald-700 font-semibold mb-2">PDF template workflow</p>
              <h2 className="text-2xl font-bold mb-3">Need a cleaner WooCommerce invoice PDF?</h2>
              <p className="text-slate-700 mb-5">
                Send store URL, current PDF, VAT/BTW fields, bank-transfer needs, due dates, reverse-charge rules, and credit-note requirements.
              </p>
              <a href={mailto} className="block text-center bg-emerald-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-emerald-700 transition mb-3">
                Request early access
              </a>
              <Link href="/blog/woocommerce-vat-number-checkout-field" className="block text-center border border-slate-200 px-6 py-3 rounded-xl font-semibold hover:border-emerald-400 transition mb-3">
                VAT field guide
              </Link>
              <Link href="/blog/woocommerce-reverse-charge-invoices" className="block text-center border border-slate-200 px-6 py-3 rounded-xl font-semibold hover:border-emerald-400 transition mb-3">
                Reverse-charge guide
              </Link>
              <Link href="/blog/woocommerce-pdf-invoice-email-attachments" className="block text-center border border-slate-200 px-6 py-3 rounded-xl font-semibold hover:border-emerald-400 transition mb-3">
                Email attachment guide
              </Link>
              <Link href="/blog/woocommerce-invoice-numbering" className="block text-center border border-slate-200 px-6 py-3 rounded-xl font-semibold hover:border-emerald-400 transition mb-3">
                Invoice numbering guide
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
