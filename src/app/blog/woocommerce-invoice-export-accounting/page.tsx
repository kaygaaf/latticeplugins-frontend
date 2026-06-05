import type { Metadata } from "next";
import Link from "next/link";

const SITE_URL = "https://latticeplugins.com";

export const metadata: Metadata = {
  title: "WooCommerce Invoice Export for Accounting — EU VAT Handoff Checklist",
  description:
    "A practical buyer guide for WooCommerce stores that need invoice exports for accountants, EU VAT evidence, credit notes, reverse-charge data, and clean B2B finance handoff.",
  alternates: {
    canonical: `${SITE_URL}/blog/woocommerce-invoice-export-accounting`,
  },
  openGraph: {
    title: "WooCommerce Invoice Export for Accounting and EU VAT Handoff",
    description:
      "What WooCommerce stores should capture before exporting invoices to accountants: VAT IDs, buyer references, invoice numbers, credit notes, PDF links, payment status, and exemption evidence.",
    url: `${SITE_URL}/blog/woocommerce-invoice-export-accounting`,
    siteName: "Lattice Plugins",
    type: "article",
  },
};

const exportChecklist = [
  "Sequential invoice number and invoice date that are separate from the WooCommerce order ID",
  "Buyer company name, VAT/BTW number, billing country, and stored validation/exemption decision",
  "Line-item VAT rate, exemption reason, reverse-charge wording, discount, and refund/credit-note references",
  "Payment method, paid/unpaid status, due date, reminder state, and bank-transfer reference",
  "PDF invoice URL or attachment status so the accountant can audit the document that customers received",
  "Customer download status and credit-note link for refunds, partial refunds, or VAT corrections",
];

const exportRows = [
  ["Order export", "Order ID, customer, totals, payment method", "Useful for sales reports, but usually not enough for VAT audit or accountant handoff."],
  ["Invoice export", "Invoice number, date, VAT lines, PDF URL, buyer VAT ID, exemption reason", "Matches the legal document your customer receives and your accountant needs to book."],
  ["Credit-note export", "Credit note number, original invoice reference, refund amount, VAT correction", "Prevents refunds from becoming manual corrections in bookkeeping."],
  ["B2B metadata", "PO/reference, department, buyer email, VAT validation timestamp", "Enterprise buyers and accountants often ask for these after checkout if you did not collect them early."],
  ["Payment follow-up", "Due date, reminder date, paid/unpaid state, bank transfer reference", "Turns exports into a cash-collection workflow instead of just an end-of-month report."],
];

const scenarios = [
  [
    "Monthly accountant export is manual",
    "The store owner copies order totals into a spreadsheet, then separately looks up VAT numbers, refunds, PDF invoices, and payment status.",
    "Export invoice-ready rows with legal invoice numbers, VAT evidence, PDF links, and credit-note references in one handoff.",
  ],
  [
    "Cross-border B2B VAT needs proof",
    "Orders show 0% VAT, but the accountant cannot see whether the zero VAT was reverse-charge, VAT exempt, or a manual discount mistake.",
    "Store the exemption reason and reverse-charge wording on the order and include it in the invoice export.",
  ],
  [
    "Refunds break the bookkeeping trail",
    "WooCommerce has a refund record, but there is no credit-note number or original-invoice reference in the accountant export.",
    "Create credit-note metadata alongside refunds and keep the export aligned with the customer-facing PDF documents.",
  ],
];

const faq = [
  {
    q: "Can WooCommerce export legal invoice data for accountants by default?",
    a: "WooCommerce can export orders through extensions or reports, but a legal invoice export usually needs extra metadata: invoice number, VAT/BTW field, exemption reason, PDF invoice link, credit-note reference, payment status, and sometimes buyer references or PO numbers.",
  },
  {
    q: "What is the difference between a WooCommerce order export and invoice export?",
    a: "An order export describes the sale. An invoice export describes the legal finance document: invoice number, date, tax lines, customer VAT details, PDF status, credit notes, and the evidence your accountant needs to book it correctly.",
  },
  {
    q: "Which fields should I send to my accountant for EU VAT invoices?",
    a: "Send invoice number, invoice date, order ID, customer/company details, VAT number, billing country, tax rate per line, exemption or reverse-charge reason, total, payment method, paid/unpaid state, PDF invoice link, and credit-note references for refunds.",
  },
  {
    q: "How does Lattice Invoices help with accounting handoff?",
    a: "The early-access focus is making WooCommerce orders invoice-ready before export: checkout VAT fields, invoice numbering, PDF invoices, credit notes, due dates, payment reminders, customer downloads, and structured handoff data for accountants or bookkeeping tools.",
  },
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "WooCommerce invoice export for accounting and EU VAT handoff",
  description:
    "A buyer-intent guide for WooCommerce stores that need cleaner invoice exports for accountants, EU VAT evidence, credit notes, PDF invoice links, and B2B finance workflows.",
  mainEntityOfPage: `${SITE_URL}/blog/woocommerce-invoice-export-accounting`,
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
  "mailto:support@latticeplugins.com?subject=Lattice%20Invoices%20accounting%20export%20early%20access&body=Hi%20Lattice%2C%0A%0AI%20need%20WooCommerce%20invoice%20export%20help%20for%20accounting%2FEU%20VAT.%0A%0AStore%20URL%3A%20%0ACountry%3A%20%0AAccounting%20tool%20or%20bookkeeper%3A%20%0ACurrent%20invoice%20plugin%3A%20%0AVAT%2FBTW%20field%20present%3A%20%0AReverse-charge%20or%20VAT-exempt%20orders%3A%20%0ACredit%20notes%20needed%3A%20%0AExport%20format%20needed%20%28CSV%2FXLSX%2Faccounting%20tool%29%3A%20";

export default function WooCommerceInvoiceExportAccountingPage() {
  return (
    <main className="min-h-screen bg-slate-50">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <section className="bg-gradient-to-br from-slate-950 via-blue-950 to-emerald-900 text-white">
        <div className="max-w-5xl mx-auto px-6 py-16 lg:py-20">
          <p className="uppercase tracking-[0.3em] text-sm text-emerald-200 mb-4">WooCommerce invoice export</p>
          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
            Export invoice data your accountant can actually book.
          </h1>
          <p className="text-xl text-emerald-50 leading-relaxed max-w-3xl mb-8">
            Order exports are not the same as invoice exports. EU stores need invoice numbers, VAT evidence, credit notes,
            PDF links, payment status, and B2B references before month-end bookkeeping becomes a spreadsheet cleanup job.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href={mailto} className="bg-emerald-500 text-white px-8 py-4 rounded-xl font-semibold hover:bg-emerald-400 transition shadow-lg text-center">
              Request accounting export early access
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
              <h2 className="text-3xl font-bold mb-4">The sales problem: finance cleanup happens after the order.</h2>
              <p className="text-slate-700 leading-relaxed mb-4">
                A customer can complete checkout successfully while the store still lacks the invoice fields an accountant needs:
                invoice number, VAT/BTW number, exemption reason, PDF invoice, credit-note reference, payment due date, and buyer PO.
              </p>
              <p className="text-slate-700 leading-relaxed">
                Lattice Invoices is being shaped around the export gap: collect invoice-ready data early, keep it attached to the order,
                generate consistent PDF and credit-note documents, and make the handoff easier for bookkeepers and accounting tools.
              </p>
            </div>

            <div className="bg-white rounded-2xl border shadow-sm p-8">
              <h2 className="text-3xl font-bold mb-6">Accounting export readiness checklist</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {exportChecklist.map((item) => (
                  <div key={item} className="flex gap-3 p-4 rounded-xl bg-slate-50 border border-slate-100">
                    <span className="text-emerald-600 font-bold">✓</span>
                    <span className="text-slate-800">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-2xl border shadow-sm p-8 overflow-hidden">
              <h2 className="text-3xl font-bold mb-4">Order export vs invoice export</h2>
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-slate-100 text-slate-700">
                      <th className="p-4 rounded-l-xl">Export area</th>
                      <th className="p-4">Typical fields</th>
                      <th className="p-4 rounded-r-xl">Why accountants care</th>
                    </tr>
                  </thead>
                  <tbody>
                    {exportRows.map(([area, fields, why]) => (
                      <tr key={area} className="border-b border-slate-100">
                        <td className="p-4 font-semibold text-slate-900">{area}</td>
                        <td className="p-4 text-slate-600">{fields}</td>
                        <td className="p-4 text-slate-800">{why}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div className="bg-white rounded-2xl border shadow-sm p-8">
              <h2 className="text-3xl font-bold mb-6">Common accounting export scenarios</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                {scenarios.map(([title, pain, lattice]) => (
                  <div key={title} className="rounded-xl border border-slate-200 bg-slate-50 p-5">
                    <h3 className="text-xl font-bold mb-3">{title}</h3>
                    <p className="text-slate-600 mb-3">Problem: {pain}</p>
                    <p className="font-semibold text-slate-900">Lattice path: {lattice}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-emerald-50 border border-emerald-100 rounded-2xl p-8">
              <h2 className="text-3xl font-bold mb-4">Early-access offer: €49 invoice export workflow review</h2>
              <p className="text-slate-700 leading-relaxed mb-5">
                Send your store URL, country, accountant/bookkeeping tool, current invoice plugin, export format, VAT-field status,
                reverse-charge needs, and whether credit notes or unpaid invoice follow-up are blocking your finance process.
              </p>
              <a href={mailto} className="inline-flex bg-emerald-600 text-white px-7 py-3 rounded-xl font-semibold hover:bg-emerald-700 transition">
                Send my accounting export requirements
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
              <h2 className="text-2xl font-bold mb-3">Need invoice exports that match EU VAT reality?</h2>
              <p className="text-slate-600 mb-5">
                Lattice Invoices is focused on WooCommerce VAT fields, invoice PDFs, sequential numbering, credit notes, due dates,
                customer downloads, and structured accounting handoff for €49 early access.
              </p>
              <a href={mailto} className="block text-center bg-slate-950 text-white px-5 py-3 rounded-xl font-semibold hover:bg-slate-800 transition mb-3">
                Request early access
              </a>
              <Link href="/docs/woocommerce-eu-vat-invoice-setup" className="block text-center border border-slate-200 px-5 py-3 rounded-xl font-semibold hover:bg-slate-50 transition">
                Read setup guide
              </Link>
            </div>

            <div className="bg-blue-50 rounded-2xl border border-blue-100 p-6">
              <h3 className="text-xl font-bold mb-3">Related invoice guides</h3>
              <ul className="space-y-3 text-blue-900 font-medium">
                <li><Link href="/blog/woocommerce-invoice-pdf-template" className="hover:underline">Invoice PDF template checklist</Link></li>
                <li><Link href="/blog/woocommerce-credit-notes-refunds" className="hover:underline">Credit notes for refunds</Link></li>
                <li><Link href="/blog/woocommerce-vat-exempt-invoices" className="hover:underline">VAT exempt invoices</Link></li>
                <li><Link href="/blog/woocommerce-peppol-e-invoices" className="hover:underline">Peppol/e-invoice readiness</Link></li>
              </ul>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}
