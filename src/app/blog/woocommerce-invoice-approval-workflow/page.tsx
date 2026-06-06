import type { Metadata } from "next";
import Link from "next/link";

const SITE_URL = "https://latticeplugins.com";

export const metadata: Metadata = {
  title: "WooCommerce Invoice Approval Workflow — B2B Payment & VAT Checklist",
  description:
    "A practical buyer guide for WooCommerce stores that need B2B invoice approval, PO references, VAT evidence, proforma invoices, bank transfer payments, and accountant-ready handoff.",
  alternates: {
    canonical: `${SITE_URL}/blog/woocommerce-invoice-approval-workflow`,
  },
  openGraph: {
    title: "WooCommerce invoice approval workflow for B2B stores",
    description:
      "What to capture before a WooCommerce invoice goes to a buyer for approval: VAT IDs, purchase orders, proforma status, due dates, payment terms, PDFs, and credit-note handling.",
    url: `${SITE_URL}/blog/woocommerce-invoice-approval-workflow`,
    siteName: "Lattice Plugins",
    type: "article",
  },
};

const approvalChecklist = [
  "VAT/BTW number, company name, billing country, and reverse-charge or exemption decision captured at checkout",
  "Purchase order, buyer reference, cost centre, department, and accounts-payable email stored on the order",
  "Proforma invoice or payment request generated before final VAT invoice numbering is locked",
  "Net 14/Net 30 due date, bank-transfer instructions, and internal approval deadline visible to the buyer",
  "Final PDF invoice, credit-note references, refund trail, and customer download links available after approval/payment",
  "Accounting export includes approval status, payment status, invoice number, PDF URL, VAT evidence, and buyer reference",
];

const workflowRows = [
  ["Quote / cart", "Buyer prepares a B2B order", "Ask for company, VAT ID, PO/reference, and AP email before checkout is completed."],
  ["Checkout", "Buyer chooses bank transfer or invoice payment", "Store a proforma/payment-request state instead of treating the order as a fully invoiced sale too early."],
  ["Approval", "Buyer routes the document internally", "Show payment terms, due date, bank details, and buyer reference on the PDF and order emails."],
  ["Payment", "Finance pays by bank transfer", "Match bank transfer references to orders and keep the final invoice PDF ready for customer download."],
  ["Adjustments", "VAT correction, refund, or line-item change", "Issue a credit note tied to the original invoice rather than editing historical invoice data."],
];

const scenarios = [
  {
    title: "Enterprise buyer needs a PO before paying",
    pain: "The customer wants to buy, but accounts payable refuses the invoice because there is no PO/reference or buyer department on the document.",
    lattice: "Capture PO, AP email, buyer reference, and invoice approval state before the PDF goes out.",
  },
  {
    title: "EU B2B order requires reverse charge",
    pain: "The order total is correct, but the invoice does not explain why VAT is 0%, so finance asks for a corrected invoice.",
    lattice: "Keep VAT validation, exemption reason, and reverse-charge wording attached to the order and PDF.",
  },
  {
    title: "Bank transfer is paid after internal approval",
    pain: "WooCommerce has an unpaid order, but the buyer has a proforma PDF in circulation and the store has no clean due-date reminder workflow.",
    lattice: "Track proforma, due dates, payment reminders, final invoice release, and accountant export in one invoice workflow.",
  },
];

const faq = [
  {
    q: "Can WooCommerce handle B2B invoice approval workflows by default?",
    a: "WooCommerce can accept orders and bank transfers, but B2B invoice approval usually needs extra invoice metadata: VAT ID, company reference, PO number, proforma status, payment terms, due date, accounts-payable contact, PDF invoice access, and credit-note tracking.",
  },
  {
    q: "Should I create the final invoice before or after buyer approval?",
    a: "For many B2B workflows, a proforma or payment request is safer before payment/approval, then a final VAT invoice can be generated with stable numbering once the sale is confirmed. The exact workflow depends on local accounting rules and your store's process.",
  },
  {
    q: "What fields should a WooCommerce invoice approval form collect?",
    a: "Collect company name, VAT/BTW number, billing country, PO/reference, department or cost centre, accounts-payable email, invoice language, payment terms, and whether the buyer needs a proforma before the final invoice.",
  },
  {
    q: "How does Lattice Invoices help with invoice approval?",
    a: "The early-access direction is to make WooCommerce orders invoice-ready for EU B2B sales: VAT fields, proformas, sequential invoice numbers, due dates, PDF delivery, customer downloads, credit notes, and export-ready data for accounting handoff.",
  },
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "WooCommerce invoice approval workflow for B2B stores",
  description:
    "A buyer-intent guide for WooCommerce stores that need B2B invoice approval, proforma invoices, purchase-order references, VAT evidence, due dates, and accounting handoff.",
  mainEntityOfPage: `${SITE_URL}/blog/woocommerce-invoice-approval-workflow`,
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
  "mailto:support@latticeplugins.com?subject=Lattice%20Invoices%20B2B%20approval%20workflow%20early%20access&body=Hi%20Lattice%2C%0A%0AI%20need%20a%20WooCommerce%20B2B%20invoice%20approval%20workflow.%0A%0AStore%20URL%3A%20%0ACountry%3A%20%0ACurrent%20invoice%20plugin%3A%20%0ABank%20transfer%20or%20invoice%20payment%3A%20%0AVAT%2FBTW%20field%20present%3A%20%0APO%2Fbuyer%20reference%20needed%3A%20%0AProforma%20before%20final%20invoice%3A%20%0AAccounts-payable%20email%20workflow%3A%20";

export default function WooCommerceInvoiceApprovalWorkflowPage() {
  return (
    <main className="min-h-screen bg-slate-50">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <section className="bg-gradient-to-br from-slate-950 via-indigo-950 to-blue-900 text-white">
        <div className="max-w-5xl mx-auto px-6 py-16 lg:py-20">
          <p className="uppercase tracking-[0.3em] text-sm text-blue-200 mb-4">WooCommerce B2B invoice approval</p>
          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
            Turn WooCommerce bank-transfer orders into approval-ready B2B invoices.
          </h1>
          <p className="text-xl text-blue-50 leading-relaxed max-w-3xl mb-8">
            Enterprise and EU B2B buyers often need VAT evidence, PO numbers, AP email routing, proforma PDFs,
            due dates, and approval references before they can pay. If WooCommerce collects those after checkout,
            every sale becomes manual finance work.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href={mailto} className="bg-blue-500 text-white px-8 py-4 rounded-xl font-semibold hover:bg-blue-400 transition shadow-lg text-center">
              Request B2B approval early access
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
              <h2 className="text-3xl font-bold mb-4">The conversion problem: buyers are ready, finance is not.</h2>
              <p className="text-slate-700 leading-relaxed mb-4">
                A B2B customer may want to purchase today, but their finance team cannot approve payment without a clean invoice packet:
                company VAT details, PO/reference, bank-transfer instructions, payment terms, and a PDF they can route internally.
              </p>
              <p className="text-slate-700 leading-relaxed">
                Lattice Invoices is being positioned around that gap: make the WooCommerce order approval-ready before the buyer asks,
                then keep the proforma, final invoice, credit notes, customer downloads, and accountant export aligned.
              </p>
            </div>

            <div className="bg-white rounded-2xl border shadow-sm p-8">
              <h2 className="text-3xl font-bold mb-6">Invoice approval readiness checklist</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {approvalChecklist.map((item) => (
                  <div key={item} className="flex gap-3 p-4 rounded-xl bg-slate-50 border border-slate-100">
                    <span className="text-blue-600 font-bold">✓</span>
                    <span className="text-slate-800">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-2xl border shadow-sm p-8 overflow-hidden">
              <h2 className="text-3xl font-bold mb-4">B2B approval workflow map</h2>
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-slate-100 text-slate-700">
                      <th className="p-4 rounded-l-xl">Stage</th>
                      <th className="p-4">What the buyer needs</th>
                      <th className="p-4 rounded-r-xl">Invoice workflow requirement</th>
                    </tr>
                  </thead>
                  <tbody>
                    {workflowRows.map(([stage, buyerNeed, requirement]) => (
                      <tr key={stage} className="border-b border-slate-100">
                        <td className="p-4 font-semibold text-slate-900">{stage}</td>
                        <td className="p-4 text-slate-600">{buyerNeed}</td>
                        <td className="p-4 text-slate-800">{requirement}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div className="bg-white rounded-2xl border shadow-sm p-8">
              <h2 className="text-3xl font-bold mb-6">Common approval blockers</h2>
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

            <div className="bg-blue-50 border border-blue-100 rounded-2xl p-8">
              <h2 className="text-3xl font-bold mb-4">Early-access offer: €49 B2B invoice workflow review</h2>
              <p className="text-slate-700 leading-relaxed mb-5">
                Send your store URL, country, current invoice plugin, bank-transfer setup, VAT/BTW field status,
                PO/reference needs, proforma workflow, and accounts-payable email requirements. The goal is to turn those
                buyer objections into the next Lattice Invoices purchase-ready workflow.
              </p>
              <a href={mailto} className="inline-flex bg-blue-600 text-white px-7 py-3 rounded-xl font-semibold hover:bg-blue-700 transition">
                Send my approval workflow requirements
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
              <h2 className="text-2xl font-bold mb-3">Need B2B invoice approval without spreadsheet cleanup?</h2>
              <p className="text-slate-600 mb-5">
                Lattice Invoices is focused on EU VAT fields, proformas, final PDF invoices, credit notes, due dates,
                customer downloads, and structured accountant handoff for €49 early access.
              </p>
              <a href={mailto} className="block text-center bg-slate-950 text-white px-5 py-3 rounded-xl font-semibold hover:bg-slate-800 transition mb-3">
                Request early access
              </a>
              <Link href="/docs/woocommerce-eu-vat-invoice-setup" className="block text-center border border-slate-200 px-5 py-3 rounded-xl font-semibold hover:bg-slate-50 transition">
                Read setup guide
              </Link>
            </div>

            <div className="bg-indigo-50 rounded-2xl border border-indigo-100 p-6">
              <h3 className="text-xl font-bold mb-3">Related invoice guides</h3>
              <ul className="space-y-3 text-indigo-900 font-medium">
                <li><Link href="/blog/woocommerce-bank-transfer-invoice" className="hover:underline">Bank transfer invoice workflow</Link></li>
                <li><Link href="/blog/woocommerce-proforma-invoice" className="hover:underline">Proforma to final invoice</Link></li>
                <li><Link href="/blog/woocommerce-invoice-due-dates" className="hover:underline">Due dates and payment terms</Link></li>
                <li><Link href="/blog/woocommerce-invoice-export-accounting" className="hover:underline">Accounting export handoff</Link></li>
              </ul>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}
