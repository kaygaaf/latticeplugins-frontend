import type { Metadata } from "next";
import Link from "next/link";

const SITE_URL = "https://latticeplugins.com";
const PAGE_URL = `${SITE_URL}/blog/woocommerce-bookkeeper-invoice-export`;

export const metadata: Metadata = {
  title: "WooCommerce Bookkeeper Invoice Export: VAT, PDFs, and Credit Notes",
  description:
    "Buyer-intent guide for bookkeepers and accountants handling WooCommerce clients: invoice exports, VAT/BTW evidence, PDF links, credit notes, PO references, and Lattice Invoices early access.",
  alternates: {
    canonical: PAGE_URL,
  },
  openGraph: {
    title: "WooCommerce bookkeeper invoice export workflow",
    description:
      "How bookkeepers should qualify WooCommerce invoice export problems before recommending an invoice plugin: VAT fields, PDF invoice links, credit notes, and accountant-ready data.",
    url: PAGE_URL,
    siteName: "Lattice Plugins",
    type: "article",
  },
};

const buyerProblems = [
  "Client sends WooCommerce order exports, but invoice numbers, VAT IDs, PDF links, and credit-note references are missing",
  "Bookkeepers rebuild invoice evidence from screenshots, order emails, and manually edited PDFs",
  "B2B customers ask the store owner for corrected VAT/BTW details or PO references after checkout",
  "Refunds appear as WooCommerce refunds, but no linked credit-note document exists for the accounting file",
  "Monthly VAT handoff depends on support staff instead of structured WooCommerce invoice data",
];

const workflowSteps = [
  {
    title: "1. Audit what the bookkeeper receives today",
    text: "Compare the WooCommerce order export, invoice PDFs, VAT/BTW fields, payment status, refund records, and customer download links before recommending any invoice plugin.",
  },
  {
    title: "2. Capture finance fields before payment",
    text: "Company name, VAT/BTW number, PO reference, cost centre, invoice email, and billing entity should be stored as order metadata before the invoice is generated.",
  },
  {
    title: "3. Keep invoice and credit-note documents linked",
    text: "A refund should not overwrite the original invoice. The accounting handoff needs a credit-note number, reason, PDF link, and relation to the original invoice.",
  },
  {
    title: "4. Export the data the accountant can book",
    text: "Bookkeepers need invoice number, invoice date, VAT rate, VAT amount, buyer VAT ID, payment method, PDF status, and customer-download evidence in one predictable workflow.",
  },
];

const exportFields = [
  ["Invoice number and date", "Lets the bookkeeper reconcile WooCommerce sales against the legal document sequence"],
  ["VAT/BTW number and country", "Supports EU B2B, reverse-charge, and corrected business-buyer invoices"],
  ["VAT rate and VAT amount", "Keeps tax totals separate from discounts, shipping, refunds, and payment fees"],
  ["PDF invoice URL/status", "Shows which document was sent to the customer and can be archived for audit"],
  ["Credit-note relationship", "Links each refund correction to the original invoice instead of leaving a negative order row"],
  ["PO/reference and invoice email", "Reduces post-payment correction requests from finance teams and accounts payable"],
];

const scoringRows = [
  { signal: "Bookkeeper asks for invoice PDF links or VAT IDs every month", score: "+2" },
  { signal: "Client manually edits invoice PDFs after customers request corrections", score: "+2" },
  { signal: "Refunds need credit notes for the accounting file", score: "+2" },
  { signal: "B2B buyers require PO references, invoice emails, or cost centres", score: "+1" },
  { signal: "Only low-volume B2C orders with no invoice correction requests", score: "0" },
];

const recommendedEmail = [
  "Store URL and country",
  "Bookkeeper/accountant tool used today",
  "Current export format: CSV, XLSX, PDF folder, bookkeeping import, or manual email",
  "Monthly orders and monthly invoice corrections",
  "Required fields: VAT/BTW, PO reference, invoice email, cost centre, payment method, credit notes",
  "Example invoice-number format and refund/credit-note workflow needed",
];

const faq = [
  {
    q: "Is this page for store owners or bookkeepers?",
    a: "Both. The buyer-intent problem often starts with a bookkeeper asking for cleaner WooCommerce invoice evidence, while the store owner buys the plugin that reduces support and accounting cleanup.",
  },
  {
    q: "Why is a normal WooCommerce order export not enough?",
    a: "An order export describes a sale. A bookkeeping handoff needs invoice number, invoice date, VAT evidence, buyer VAT ID, credit-note relationship, and a copy or URL of the invoice PDF the customer received.",
  },
  {
    q: "Does Lattice Invoices replace accounting software?",
    a: "No. Lattice Invoices is positioned to make WooCommerce order-level invoice evidence cleaner before it reaches the bookkeeper or accounting software.",
  },
  {
    q: "When should a bookkeeper recommend early access?",
    a: "Recommend the €49 early-access review when a client repeatedly sends incomplete WooCommerce invoice data, manually corrected PDFs, missing VAT IDs, or refund records without credit notes.",
  },
];

const mailto =
  "mailto:support@latticeplugins.com?subject=WooCommerce%20bookkeeper%20invoice%20export%20workflow%20review&body=Hi%20Lattice%2C%0A%0AI%20want%20a%20WooCommerce%20bookkeeper%20invoice%20export%20workflow%20review%20for%20Lattice%20Invoices.%0A%0AStore%20URL%3A%20%0ACountry%3A%20%0ABookkeeping%2Faccounting%20tool%3A%20%0AMonthly%20orders%3A%20%0AMonthly%20invoice%20corrections%3A%20%0AExport%20format%20needed%3A%20%0AVAT%2FBTW%2C%20PO%2C%20or%20invoice-email%20fields%3A%20%0ACredit-note%20requirements%3A%20";

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "WooCommerce bookkeeper invoice export: VAT, PDFs, and credit notes",
  description:
    "A buyer-intent guide for bookkeepers and accountants qualifying WooCommerce invoice export problems before recommending an invoice workflow.",
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

export default function WooCommerceBookkeeperInvoiceExportPage() {
  return (
    <main className="min-h-screen bg-slate-50">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <section className="bg-gradient-to-br from-slate-950 via-indigo-950 to-blue-900 text-white">
        <div className="max-w-5xl mx-auto px-6 py-16 lg:py-20">
          <p className="uppercase tracking-[0.3em] text-sm text-indigo-200 mb-4">Bookkeeper invoice export workflow</p>
          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
            WooCommerce invoice exports bookkeepers can actually reconcile.
          </h1>
          <p className="text-xl text-indigo-50 leading-relaxed max-w-3xl mb-8">
            If a bookkeeper has to chase VAT IDs, invoice PDFs, credit notes, PO references, and corrected business-customer details every month, the WooCommerce store needs a better invoice workflow before the next accounting handoff.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href={mailto} className="bg-indigo-300 text-slate-950 px-8 py-4 rounded-xl font-semibold hover:bg-indigo-200 transition shadow-lg text-center">
              Request €49 bookkeeper export review
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
              <h2 className="text-3xl font-bold mb-4">Why bookkeeper handoff breaks after WooCommerce checkout</h2>
              <p className="text-slate-700 leading-relaxed mb-5">
                A WooCommerce store can take payment and still send weak finance data to the bookkeeper. The problem is rarely the payment itself; it is the missing connection between checkout fields, invoice numbers, PDFs, refunds, and exportable accounting evidence.
              </p>
              <div className="space-y-3">
                {buyerProblems.map((problem) => (
                  <div key={problem} className="flex gap-3 rounded-xl bg-indigo-50 border border-indigo-100 p-4">
                    <span className="text-indigo-700 font-bold">→</span>
                    <span className="text-slate-800">{problem}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-2xl border shadow-sm p-8">
              <h2 className="text-3xl font-bold mb-6">The WooCommerce bookkeeper export workflow</h2>
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
              <h2 className="text-3xl font-bold mb-4">Fields an invoice export should include</h2>
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-slate-100 text-slate-700">
                      <th className="p-4 rounded-l-xl">Field</th>
                      <th className="p-4 rounded-r-xl">Why the bookkeeper needs it</th>
                    </tr>
                  </thead>
                  <tbody>
                    {exportFields.map(([field, reason]) => (
                      <tr key={field} className="border-b border-slate-100">
                        <td className="p-4 font-semibold text-slate-900">{field}</td>
                        <td className="p-4 text-slate-700">{reason}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div className="bg-indigo-50 border border-indigo-100 rounded-2xl p-8">
              <h2 className="text-3xl font-bold mb-5">Qualification score for bookkeeper-driven invoice pain</h2>
              <p className="text-slate-700 leading-relaxed mb-5">
                Score 3+ points and the store likely has enough monthly accounting cleanup to justify a focused €49 Lattice Invoices early-access review.
              </p>
              <div className="space-y-3">
                {scoringRows.map((item) => (
                  <div key={item.signal} className="flex items-start justify-between gap-4 rounded-xl bg-white border border-indigo-100 p-4">
                    <span className="text-slate-800">{item.signal}</span>
                    <span className="font-bold text-indigo-700 whitespace-nowrap">{item.score}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-slate-950 text-white rounded-2xl p-8">
              <h2 className="text-3xl font-bold mb-4">Send a ready-to-buy export review request</h2>
              <p className="text-slate-200 leading-relaxed mb-5">
                A specific bookkeeper export request converts better than a generic “does your plugin do invoices?” email. Include the export format, current bookkeeping tool, invoice correction volume, and credit-note needs so the €49 path can be qualified quickly.
              </p>
              <ul className="space-y-3 mb-6">
                {recommendedEmail.map((item) => (
                  <li key={item} className="flex gap-3 text-slate-100">
                    <span className="text-indigo-300">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <a href={mailto} className="inline-flex bg-indigo-300 text-slate-950 px-7 py-3 rounded-xl font-semibold hover:bg-indigo-200 transition">
                Send bookkeeper invoice export fit request
              </a>
            </div>

            <div className="bg-white rounded-2xl border shadow-sm p-8">
              <h2 className="text-3xl font-bold mb-6">Bookkeeper invoice export FAQ</h2>
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
              <p className="text-sm uppercase tracking-[0.2em] text-indigo-700 font-semibold mb-3">Revenue CTA</p>
              <h2 className="text-2xl font-bold mb-3">Need cleaner accountant handoff?</h2>
              <p className="text-slate-700 leading-relaxed mb-5">
                Request the Lattice Invoices early-access review when the bookkeeper already asks for missing VAT data, corrected PDFs, credit notes, or invoice export fields.
              </p>
              <a href={mailto} className="block text-center bg-indigo-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-indigo-700 transition mb-3">
                Request €49 export review
              </a>
              <Link href="/tools/woocommerce-invoice-setup-brief" className="block text-center border border-slate-200 px-6 py-3 rounded-xl font-semibold hover:border-indigo-400 transition mb-3">
                Generate setup brief
              </Link>
              <Link href="/tools/woocommerce-invoice-fit-check" className="block text-center border border-slate-200 px-6 py-3 rounded-xl font-semibold hover:border-indigo-400 transition mb-3">
                Score invoice fit
              </Link>
              <Link href="/tools/woocommerce-invoice-roi-calculator" className="block text-center border border-slate-200 px-6 py-3 rounded-xl font-semibold hover:border-indigo-400 transition mb-3">
                Calculate admin ROI
              </Link>
              <Link href="/blog/woocommerce-invoice-export-accounting" className="block text-center border border-slate-200 px-6 py-3 rounded-xl font-semibold hover:border-indigo-400 transition mb-3">
                Accounting export guide
              </Link>
              <Link href="/blog/woocommerce-business-customer-invoices" className="block text-center border border-slate-200 px-6 py-3 rounded-xl font-semibold hover:border-indigo-400 transition">
                B2B invoice guide
              </Link>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}
