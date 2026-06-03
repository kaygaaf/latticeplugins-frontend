import type { Metadata } from "next";
import Link from "next/link";

const SITE_URL = "https://latticeplugins.com";

export const metadata: Metadata = {
  title: "WooCommerce PDF Invoice Email Attachments — EU VAT Guide",
  description:
    "How WooCommerce stores should attach PDF invoices to customer emails, keep invoice downloads available in My Account, and avoid EU VAT invoice support tickets.",
  alternates: {
    canonical: `${SITE_URL}/blog/woocommerce-pdf-invoice-email-attachments`,
  },
  openGraph: {
    title: "WooCommerce PDF Invoice Email Attachments",
    description:
      "A buyer-intent guide for stores that need invoice PDFs in WooCommerce emails, EU VAT fields, customer downloads, and refund credit notes.",
    url: `${SITE_URL}/blog/woocommerce-pdf-invoice-email-attachments`,
    siteName: "Lattice Plugins",
    type: "article",
  },
};

const deliveryChecklist = [
  "Attach invoice PDFs to the WooCommerce processing or completed order email",
  "Use a predictable filename such as invoice-2026-000148.pdf",
  "Keep invoice PDFs private and tied to the order/customer account",
  "Expose the same invoice in My Account so customers do not email support later",
  "Attach credit notes to refund emails when a WooCommerce refund is issued",
  "Store invoice number, invoice date, VAT/BTW number, and PDF status as order metadata",
];

const emailScenarios = [
  {
    title: "Paid order email",
    trigger: "Order changes to processing/completed",
    attachment: "Invoice PDF",
    why: "The business buyer gets the tax document immediately after payment instead of opening a support ticket.",
  },
  {
    title: "Refund email",
    trigger: "Store issues a full or partial refund",
    attachment: "Credit-note PDF",
    why: "The refund has its own document trail and points back to the original invoice number.",
  },
  {
    title: "Customer account download",
    trigger: "Customer visits My Account later",
    attachment: "Stored invoice link",
    why: "Repeat B2B buyers can self-serve documents for bookkeeping without asking the store owner.",
  },
];

const comparisonRows = [
  ["Attachment timing", "Manually send a PDF after the customer asks", "Attach the invoice when the order becomes invoiceable"],
  ["File access", "Public uploads URL or inbox attachment only", "Private order/customer-linked download"],
  ["Missing VAT data", "Customer replies with VAT number after payment", "VAT/BTW fields are captured before the invoice is generated"],
  ["Refunds", "Manual negative invoice or accounting note", "Refund email gets a credit note tied to the original invoice"],
  ["Support load", "Customers ask for invoices repeatedly", "Invoices are attached once and downloadable later"],
];

const faq = [
  {
    q: "Which WooCommerce emails should include invoice PDFs?",
    a: "Most stores attach invoice PDFs to processing or completed order emails. Refund emails should use a credit note instead of editing the original invoice. The exact trigger should match when the store considers an order invoiceable.",
  },
  {
    q: "Should PDF invoices be stored in public uploads?",
    a: "No. Invoice PDFs can include billing addresses, VAT numbers, and order totals. They should be private and only available to the order owner, store admins, and explicit email recipients.",
  },
  {
    q: "Do invoice email attachments replace My Account downloads?",
    a: "No. Email attachments solve the immediate delivery problem, while My Account downloads reduce future support emails when a customer loses the original message.",
  },
  {
    q: "How does this connect to Lattice Invoices?",
    a: "Lattice Invoices is being shaped around the full delivery workflow: checkout VAT/BTW fields, invoice numbers, PDF email attachments, customer downloads, and refund-linked credit notes.",
  },
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "WooCommerce PDF invoice email attachments for EU VAT stores",
  description:
    "A practical guide for WooCommerce stores that need invoice PDF attachments, customer invoice downloads, EU VAT fields, and refund credit notes.",
  mainEntityOfPage: `${SITE_URL}/blog/woocommerce-pdf-invoice-email-attachments`,
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
  "mailto:support@latticeplugins.com?subject=Lattice%20Invoices%20PDF%20email%20attachments&body=Hi%20Lattice%2C%0A%0AI%20need%20WooCommerce%20PDF%20invoice%20email%20attachments%20and%20EU%20VAT%20invoice%20downloads.%0A%0AStore%20URL%3A%20%0ACountry%3A%20%0AOrder%20email%20trigger%3A%20%0ARefund%20credit%20notes%20needed%3A%20%0AVAT%2FBTW%20field%20needed%3A%20";

export default function WooCommercePdfInvoiceEmailAttachmentsPage() {
  return (
    <main className="min-h-screen bg-slate-50">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <section className="bg-gradient-to-br from-slate-950 via-indigo-950 to-blue-900 text-white">
        <div className="max-w-5xl mx-auto px-6 py-16 lg:py-20">
          <p className="uppercase tracking-[0.3em] text-sm text-blue-200 mb-4">WooCommerce PDF invoice attachments</p>
          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
            Attach WooCommerce invoice PDFs before customers ask support for a copy.
          </h1>
          <p className="text-xl text-blue-50 leading-relaxed max-w-3xl mb-8">
            EU VAT stores need invoice delivery, not just invoice generation. The buyer expects a PDF in the order email,
            a secure My Account download, and a clean credit note when the order is refunded.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href={mailto} className="bg-green-500 text-white px-8 py-4 rounded-xl font-semibold hover:bg-green-400 transition shadow-lg text-center">
              Request PDF attachment early access
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
              <h2 className="text-3xl font-bold mb-4">Invoice delivery is where the buyer feels the product.</h2>
              <p className="text-slate-700 leading-relaxed mb-4">
                A store can generate perfect invoices and still create friction if the customer has to email support to
                receive them. The strongest WooCommerce invoice workflow sends the PDF at the right order moment and keeps
                the same document available later.
              </p>
              <p className="text-slate-700 leading-relaxed">
                This is why Lattice Invoices is positioned around the full EU VAT workflow: collect VAT/BTW data before
                payment, assign invoice numbers, attach PDFs to emails, expose secure downloads, and create credit notes
                for refunds.
              </p>
            </div>

            <div className="bg-white rounded-2xl border shadow-sm p-8">
              <h2 className="text-3xl font-bold mb-6">PDF invoice attachment checklist</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {deliveryChecklist.map((item) => (
                  <div key={item} className="flex gap-3 p-4 rounded-xl bg-slate-50 border border-slate-100">
                    <span className="text-green-600 font-bold">✓</span>
                    <span className="text-slate-800">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-2xl border shadow-sm p-8">
              <h2 className="text-3xl font-bold mb-6">Which WooCommerce email should get which document?</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                {emailScenarios.map((scenario) => (
                  <div key={scenario.title} className="rounded-xl border border-slate-200 bg-slate-50 p-5">
                    <p className="text-sm uppercase tracking-[0.2em] text-blue-700 font-semibold mb-2">{scenario.trigger}</p>
                    <h3 className="text-xl font-bold mb-2">{scenario.title}</h3>
                    <p className="font-semibold text-slate-900 mb-3">{scenario.attachment}</p>
                    <p className="text-slate-700 leading-relaxed">{scenario.why}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-2xl border shadow-sm p-8 overflow-hidden">
              <h2 className="text-3xl font-bold mb-4">Manual PDF emails vs. invoice delivery workflow</h2>
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
              <h2 className="text-2xl font-bold mb-3">Need invoice PDFs in emails?</h2>
              <p className="text-slate-700 mb-5">
                Send the email trigger, country, VAT/BTW requirements, and refund workflow. This qualifies the store for
                the focused Lattice Invoices delivery path instead of broad plugin browsing.
              </p>
              <a href={mailto} className="block text-center bg-blue-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-blue-700 transition mb-3">
                Request PDF attachment early access
              </a>
              <Link href="/docs/woocommerce-eu-vat-invoice-setup" className="block text-center border border-slate-200 px-6 py-3 rounded-xl font-semibold hover:border-blue-400 transition mb-3">
                Setup guide
              </Link>
              <Link href="/blog/woocommerce-invoice-numbering" className="block text-center border border-slate-200 px-6 py-3 rounded-xl font-semibold hover:border-blue-400 transition mb-3">
                Invoice numbering guide
              </Link>
              <Link href="/blog/woocommerce-credit-notes-refunds" className="block text-center border border-slate-200 px-6 py-3 rounded-xl font-semibold hover:border-blue-400 transition mb-3">
                Credit-note guide
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
