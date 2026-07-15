import type { Metadata } from "next";
import Link from "next/link";

const SITE_URL = "https://latticeplugins.com";
const SLUG = "/blog/woocommerce-business-customer-invoices";

export const metadata: Metadata = {
  title: "WooCommerce Business Customer Invoices: B2B VAT and PDF Workflow",
  description:
    "Buyer-intent checklist for WooCommerce stores selling to business customers who need VAT IDs, PO numbers, invoice emails, PDF invoices, credit notes, and customer downloads.",
  alternates: {
    canonical: `${SITE_URL}${SLUG}`,
  },
  openGraph: {
    title: "WooCommerce business customer invoices",
    description:
      "What B2B WooCommerce stores should check before buying an invoice workflow: VAT fields, PO numbers, accounts-payable emails, invoice PDFs, credit notes, and exports.",
    url: `${SITE_URL}${SLUG}`,
    siteName: "Lattice Plugins",
    type: "article",
  },
};

const b2bPainPoints = [
  {
    title: "Finance needs different data than the buyer enters",
    detail:
      "The person placing the order may not be the person who receives invoices. Business customers often need a separate invoice email, billing company, VAT/BTW number, PO reference, and cost centre before payment.",
  },
  {
    title: "Order emails are not enough for accounting",
    detail:
      "A WooCommerce order confirmation can prove a purchase, but business finance teams usually expect a numbered PDF invoice with VAT totals, company details, and a downloadable copy for their records.",
  },
  {
    title: "Corrections create support work after checkout",
    detail:
      "If the checkout misses VAT ID, PO number, invoice email, or company name, support has to reopen the order, regenerate a PDF, and explain the correction to the customer and accountant.",
  },
];

const requiredFields = [
  "Billing company name and legal address",
  "VAT/BTW number with country context",
  "Purchase order or internal reference",
  "Separate invoice email for accounts payable",
  "Invoice number, invoice date, VAT rate, and VAT amount",
  "Customer-download link and refund-linked credit-note relationship",
];

const fitRows = [
  {
    signal: "Business buyers ask for VAT numbers, PO references, or invoice-email changes after payment",
    fit: "Strong fit",
    action: "Capture B2B invoice fields before payment and store them as order metadata, not support notes.",
  },
  {
    signal: "Support manually resends PDFs or edits invoice details every week",
    fit: "Strong fit",
    action: "Use a WooCommerce-native invoice workflow with PDF attachments and My Account downloads.",
  },
  {
    signal: "Refunds, partial refunds, or corrections need credit notes",
    fit: "Strong fit",
    action: "Do not overwrite the original invoice. Create linked credit notes so the audit trail stays clean.",
  },
  {
    signal: "Only consumer buyers need a simple order receipt",
    fit: "Wait",
    action: "Start with the free setup guide and request Lattice Invoices once B2B support cost becomes visible.",
  },
];

const emailChecklist = [
  "Store URL and country",
  "B2B/B2C mix and monthly business-customer order volume",
  "Current invoice correction volume per month",
  "Fields buyers ask for: VAT ID, PO number, cost centre, invoice email, billing entity",
  "Payment methods used by business customers: card, bank transfer, invoice terms, SEPA, or PayPal",
  "Refund and credit-note requirements",
];

const faq = [
  {
    q: "Why is a business-customer invoice workflow different from a normal WooCommerce receipt?",
    a: "Business customers often need a tax-ready invoice with legal billing entity, VAT/BTW number, PO reference, invoice email, invoice number, VAT totals, and a PDF they can download or forward to finance.",
  },
  {
    q: "Can this work with the existing WooCommerce tax setup?",
    a: "That is the intended direction. Lattice Invoices should reuse WooCommerce order, customer, tax, and payment data instead of asking the store owner to copy totals into another invoice tool.",
  },
  {
    q: "Does this replace accounting software?",
    a: "No. The goal is to make WooCommerce order-level invoice evidence clean before accounting export. Your accountant or bookkeeping system remains the final source for tax filing.",
  },
  {
    q: "When should a B2B store request early access?",
    a: "Request early access when corrected VAT details, PO references, invoice-email changes, PDF resend tickets, or credit-note work happen every month. That is where a €49 workflow can pay back quickly.",
  },
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "WooCommerce business customer invoices: B2B VAT and PDF workflow",
  description:
    "A buyer-intent checklist for WooCommerce stores selling to business customers who need VAT IDs, PO numbers, invoice emails, PDF invoices, credit notes, and customer downloads.",
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
  "mailto:support@latticeplugins.com?subject=WooCommerce%20business%20customer%20invoice%20workflow%20review&body=Hi%20Lattice%2C%0A%0AI%20want%20a%20WooCommerce%20business%20customer%20invoice%20workflow%20review.%0A%0AStore%20URL%3A%20%0ACountry%3A%20%0AB2B%2FB2C%20mix%3A%20%0AMonthly%20business%20orders%3A%20%0AInvoice%20corrections%20per%20month%3A%20%0AFields%20buyers%20ask%20for%3A%20%0ARefund%2Fcredit-note%20needs%3A%20";

export default function WooCommerceBusinessCustomerInvoicesPage() {
  return (
    <main className="min-h-screen bg-slate-50">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <section className="bg-gradient-to-br from-slate-950 via-blue-950 to-cyan-900 text-white">
        <div className="max-w-5xl mx-auto px-6 py-16 lg:py-20">
          <p className="uppercase tracking-[0.3em] text-sm text-cyan-200 mb-4">Business customer invoice workflow</p>
          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
            WooCommerce business customer invoices need more than an order receipt.
          </h1>
          <p className="text-xl text-blue-50 leading-relaxed max-w-3xl mb-8">
            B2B buyers expect VAT IDs, PO references, invoice emails, numbered PDF invoices, customer downloads, and credit notes when refunds happen. This guide turns those support tickets into a Lattice Invoices fit request.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href={mailto} className="bg-cyan-300 text-slate-950 px-8 py-4 rounded-xl font-semibold hover:bg-cyan-200 transition shadow-lg text-center">
              Request €49 business invoice review
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
              <h2 className="text-3xl font-bold mb-4">Why B2B WooCommerce invoices break</h2>
              <p className="text-slate-700 leading-relaxed mb-4">
                WooCommerce can collect payment quickly, but business buyers need invoice data that is usually decided by finance: VAT/BTW number, PO reference, invoice email, cost centre, and legal billing entity. If those fields are missing before payment, every correction becomes manual admin.
              </p>
              <p className="text-slate-700 leading-relaxed">
                Lattice Invoices is positioned for this exact gap: keep business-customer fields, payment status, VAT totals, invoice PDFs, customer downloads, and credit-note evidence connected to the WooCommerce order.
              </p>
            </div>

            <div className="grid gap-4">
              {b2bPainPoints.map((item) => (
                <div key={item.title} className="bg-white rounded-2xl border shadow-sm p-6">
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  <p className="text-slate-700 leading-relaxed">{item.detail}</p>
                </div>
              ))}
            </div>

            <div className="bg-cyan-50 border border-cyan-100 rounded-2xl p-8">
              <h2 className="text-3xl font-bold mb-5">Business invoice must-haves</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {requiredFields.map((item) => (
                  <div key={item} className="bg-white rounded-xl border border-cyan-100 p-4 flex gap-3">
                    <span className="text-cyan-700 font-bold">✓</span>
                    <span className="text-slate-800">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-2xl border shadow-sm p-8 overflow-hidden">
              <h2 className="text-3xl font-bold mb-5">Should a B2B store request Lattice Invoices?</h2>
              <div className="overflow-x-auto">
                <table className="min-w-full text-left border-collapse">
                  <thead>
                    <tr className="border-b bg-slate-50">
                      <th className="p-4 font-semibold">Store signal</th>
                      <th className="p-4 font-semibold">Fit</th>
                      <th className="p-4 font-semibold">Best next action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {fitRows.map((row) => (
                      <tr key={row.signal} className="border-b last:border-b-0 align-top">
                        <td className="p-4 text-slate-700">{row.signal}</td>
                        <td className="p-4 font-bold text-cyan-700">{row.fit}</td>
                        <td className="p-4 text-slate-700">{row.action}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div className="bg-slate-950 text-white rounded-2xl p-8">
              <h2 className="text-3xl font-bold mb-4">Copy this into the early-access email</h2>
              <p className="text-slate-200 leading-relaxed mb-5">
                A specific B2B invoice request is easier to qualify than a generic plugin question. Send these details so the €49 Lattice Invoices path can be matched to the real checkout friction.
              </p>
              <ul className="space-y-3 mb-6">
                {emailChecklist.map((item) => (
                  <li key={item} className="flex gap-3 text-slate-100">
                    <span className="text-cyan-300">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <a href={mailto} className="inline-block bg-cyan-300 text-slate-950 px-7 py-3 rounded-xl font-semibold hover:bg-cyan-200 transition">
                Send business invoice fit request
              </a>
            </div>

            <div className="bg-white rounded-2xl border shadow-sm p-8">
              <h2 className="text-3xl font-bold mb-5">Business customer invoice FAQ</h2>
              <div className="space-y-5">
                {faq.map((item) => (
                  <div key={item.q} className="border-b last:border-b-0 pb-5 last:pb-0">
                    <h3 className="font-bold text-lg mb-2">{item.q}</h3>
                    <p className="text-slate-700 leading-relaxed">{item.a}</p>
                  </div>
                ))}
              </div>
            </div>
          </article>

          <aside className="space-y-6">
            <div className="bg-white rounded-2xl border shadow-sm p-6 sticky top-6">
              <p className="text-sm uppercase tracking-[0.2em] text-cyan-700 font-semibold mb-3">Revenue CTA</p>
              <h2 className="text-2xl font-bold mb-3">Need B2B-ready invoices?</h2>
              <p className="text-slate-700 leading-relaxed mb-5">
                Request the Lattice Invoices early-access review if business customers already ask for VAT IDs, PO references, invoice email changes, corrected PDFs, or credit notes.
              </p>
              <a href={mailto} className="block text-center bg-blue-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-blue-700 transition mb-3">
                Request €49 review
              </a>
              <Link href="/tools/woocommerce-invoice-setup-brief" className="block text-center border border-slate-200 px-6 py-3 rounded-xl font-semibold hover:border-blue-400 transition mb-3">
                Generate setup brief
              </Link>
              <Link href="/tools/woocommerce-invoice-fit-check" className="block text-center border border-slate-200 px-6 py-3 rounded-xl font-semibold hover:border-blue-400 transition mb-3">
                Score invoice fit
              </Link>
              <Link href="/blog/woocommerce-b2b-service-invoices" className="block text-center border border-slate-200 px-6 py-3 rounded-xl font-semibold hover:border-blue-400 transition mb-3">
                B2B service invoice guide
              </Link>
              <Link href="/blog/woocommerce-purchase-order-invoices" className="block text-center border border-slate-200 px-6 py-3 rounded-xl font-semibold hover:border-blue-400 transition">
                PO invoice workflow
              </Link>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}
