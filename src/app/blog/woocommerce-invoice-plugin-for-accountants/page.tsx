import type { Metadata } from "next";
import Link from "next/link";

const SITE_URL = "https://latticeplugins.com";
const SLUG = "/blog/woocommerce-invoice-plugin-for-accountants";

export const metadata: Metadata = {
  title: "WooCommerce Invoice Plugin for Accountants and Bookkeepers",
  description:
    "A buyer-intent checklist for accountants and bookkeepers advising WooCommerce clients on EU VAT invoices, credit notes, exports, and audit-ready invoice evidence.",
  alternates: {
    canonical: `${SITE_URL}${SLUG}`,
  },
  openGraph: {
    title: "WooCommerce invoice plugin for accountants",
    description:
      "What accountants should check before recommending a WooCommerce invoice plugin for EU VAT stores: numbering, PDFs, credit notes, exports, retention, and reconciliation.",
    url: `${SITE_URL}${SLUG}`,
    siteName: "Lattice Plugins",
    type: "article",
  },
};

const accountantChecklist = [
  {
    title: "1. Confirm invoice numbers are separate from order numbers",
    detail:
      "Order numbers are sales events; invoice numbers are accounting documents. A WooCommerce invoice workflow should support sequential invoice numbers, credit-note numbers, prefixes, and locked issued documents.",
    question: "Can the store keep a clean invoice sequence without manually renaming WooCommerce orders?",
  },
  {
    title: "2. Check VAT/BTW evidence before the PDF is issued",
    detail:
      "Accountants need country, VAT rate, VAT amount, VAT ID, exemption or reverse-charge reason, and buyer billing details retained with the invoice record, not reconstructed from emails later.",
    question: "Does the plugin store VAT evidence in structured fields that can be exported?",
  },
  {
    title: "3. Require refund-linked credit notes",
    detail:
      "Refunds should create credit notes that reference the original invoice, preserve buyer details, and clearly show corrected VAT totals. Manual one-off PDFs create audit gaps.",
    question: "Can every WooCommerce refund produce an accountant-readable credit-note trail?",
  },
  {
    title: "4. Make invoice PDFs accessible after purchase",
    detail:
      "Bookkeepers lose time when customers ask for invoices months later. The workflow should attach PDFs to emails, expose customer downloads, and retain files for accountant handoff.",
    question: "Can customers and admins retrieve the same issued PDF without regenerating it differently?",
  },
  {
    title: "5. Export the fields finance actually reconciles",
    detail:
      "A useful export includes invoice number, order ID, customer, VAT ID, VAT rate/amount, payment method, payment status, credit-note relation, PO/reference fields, PDF URL, and invoice date.",
    question: "Will the export reduce accountant cleanup or just move the mess into a CSV?",
  },
];

const scenarios = [
  {
    title: "Client sells B2B subscriptions across the EU",
    risk: "Renewals, VAT IDs, reverse-charge status, failed payments, and refunds can drift apart if invoices are generated manually.",
    lattice:
      "Use a WooCommerce-native invoice workflow that keeps renewal invoice PDFs, VAT metadata, payment status, and credit notes tied to the same order/customer history.",
  },
  {
    title: "Client accepts bank transfer or Net 30 terms",
    risk: "Proforma emails, final invoices, due dates, reminders, and paid/unpaid reconciliation often live in different tools.",
    lattice:
      "Keep BACS/proforma/final-invoice timing, due-date reminders, and payment reconciliation inside the invoice workflow before accountant export.",
  },
  {
    title: "Client changes invoice plugins mid-year",
    risk: "Old PDF files, invoice numbers, and credit-note references may be lost or duplicated during migration.",
    lattice:
      "Review retained PDFs, numbering boundaries, VAT evidence, and migration cutover rules before issuing new invoices from the replacement plugin.",
  },
];

const weakVsStrong = [
  {
    weak: "Accountant receives WooCommerce order exports and manually decides which rows need invoice corrections.",
    strong: "Invoice exports include invoice/credit-note IDs, VAT evidence, payment state, and PDF links in accountant-ready columns.",
  },
  {
    weak: "Refunds create WooCommerce notes but no linked credit-note document.",
    strong: "Refunds produce credit notes that reference the original invoice and preserve VAT/customer metadata.",
  },
  {
    weak: "The PDF can be regenerated later with different template data.",
    strong: "Issued invoice PDFs are retained so accountant, customer, and admin see the same evidence.",
  },
  {
    weak: "B2B fields such as VAT ID, PO number, and invoice email stay hidden in checkout notes.",
    strong: "B2B fields are treated as invoice metadata and can appear on PDFs, reminders, customer downloads, and exports.",
  },
];

const faq = [
  {
    q: "What should accountants ask before recommending a WooCommerce invoice plugin?",
    a: "Ask about invoice numbering, VAT ID storage, reverse-charge and exemption evidence, refund credit notes, retained PDFs, customer downloads, accountant exports, and whether fields are structured instead of only stored as notes.",
  },
  {
    q: "Is a WooCommerce order export enough for bookkeeping?",
    a: "Usually not for EU VAT workflows. Orders show commerce activity, but accountants also need issued invoice numbers, invoice dates, VAT evidence, credit-note links, PDF access, and payment/reconciliation state.",
  },
  {
    q: "Can Lattice Invoices help accountants with multiple client stores?",
    a: "That is the early-access direction: a repeatable WooCommerce invoice workflow for EU VAT stores with PDFs, credit notes, customer access, custom fields, and cleaner accountant handoff.",
  },
  {
    q: "What should I send for a €49 workflow review?",
    a: "Send the client store URL, country, current invoice plugin, whether the store sells B2B/B2C, refund volume, VAT/reverse-charge needs, and the export format the accountant wants.",
  },
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "WooCommerce invoice plugin for accountants and bookkeepers",
  description:
    "A buyer-intent checklist for accountants and bookkeepers advising WooCommerce clients on EU VAT invoices, credit notes, exports, and audit-ready invoice evidence.",
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
  "mailto:support@latticeplugins.com?subject=WooCommerce%20invoice%20plugin%20accountant%20workflow%20review&body=Hi%20Lattice%2C%0A%0AI%20want%20a%20WooCommerce%20invoice%20workflow%20review%20for%20an%20accounting%2Fbookkeeping%20use%20case.%0A%0AClient%20store%20URL%3A%20%0ACountry%3A%20%0AB2B%20or%20B2C%3A%20%0ACurrent%20invoice%20plugin%3A%20%0ARefund%2Fcredit-note%20volume%3A%20%0ARequired%20export%20fields%3A%20%0AAccountant%20handoff%20problem%3A%20";

export default function WooCommerceInvoicePluginForAccountantsPage() {
  return (
    <main className="min-h-screen bg-slate-50">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <section className="bg-gradient-to-br from-slate-950 via-indigo-950 to-blue-900 text-white">
        <div className="max-w-5xl mx-auto px-6 py-16 lg:py-20">
          <p className="uppercase tracking-[0.3em] text-sm text-blue-200 mb-4">WooCommerce invoices for accountants</p>
          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
            A WooCommerce invoice plugin checklist accountants can actually use.
          </h1>
          <p className="text-xl text-blue-50 leading-relaxed max-w-3xl mb-8">
            If you advise WooCommerce clients, the invoice plugin decision is not just a PDF template choice. It determines invoice numbers, VAT evidence, credit notes, customer access, exports, and how much cleanup your bookkeeping team inherits.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href={mailto} className="bg-green-400 text-slate-950 px-8 py-4 rounded-xl font-semibold hover:bg-green-300 transition shadow-lg text-center">
              Request €49 accountant workflow review
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
              <h2 className="text-3xl font-bold mb-4">Why accountants should influence the plugin decision</h2>
              <p className="text-slate-700 leading-relaxed mb-4">
                Store owners often buy the first WooCommerce PDF invoice plugin that makes a nice-looking document. Accountants care about different questions: can every invoice be traced, exported, corrected, and reconciled without rebuilding evidence manually?
              </p>
              <p className="text-slate-700 leading-relaxed">
                Lattice Invoices is being positioned around that handoff: EU VAT/BTW fields, invoice PDFs, credit notes, retained evidence, customer downloads, payment status, and exports that reduce back-office cleanup.
              </p>
            </div>

            <div className="bg-blue-50 border border-blue-100 rounded-2xl p-8">
              <h2 className="text-3xl font-bold mb-5">Accountant-ready invoice plugin checklist</h2>
              <div className="space-y-4">
                {accountantChecklist.map((item) => (
                  <div key={item.title} className="bg-white rounded-xl border border-blue-100 p-5">
                    <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                    <p className="text-slate-700 leading-relaxed mb-2">{item.detail}</p>
                    <p className="text-slate-600 leading-relaxed"><strong>Ask the client:</strong> {item.question}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-2xl border shadow-sm p-8">
              <h2 className="text-3xl font-bold mb-5">Three client scenarios to test before recommending a plugin</h2>
              <div className="grid gap-4">
                {scenarios.map((item) => (
                  <div key={item.title} className="border rounded-xl p-5">
                    <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                    <p className="text-slate-700 leading-relaxed mb-2"><strong>Risk:</strong> {item.risk}</p>
                    <p className="text-slate-700 leading-relaxed"><strong>Lattice direction:</strong> {item.lattice}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-2xl border shadow-sm p-8">
              <h2 className="text-3xl font-bold mb-5">Weak handoff vs accountant-ready workflow</h2>
              <div className="overflow-x-auto">
                <table className="min-w-full text-left border-collapse">
                  <thead>
                    <tr className="border-b">
                      <th className="py-3 pr-4 font-semibold">Weak WooCommerce invoice workflow</th>
                      <th className="py-3 pr-4 font-semibold">Accountant-ready workflow</th>
                    </tr>
                  </thead>
                  <tbody>
                    {weakVsStrong.map((row) => (
                      <tr key={row.weak} className="border-b last:border-b-0 align-top">
                        <td className="py-4 pr-4 text-slate-700">{row.weak}</td>
                        <td className="py-4 pr-4 text-slate-700">{row.strong}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div className="bg-indigo-50 border border-indigo-100 rounded-2xl p-8">
              <h2 className="text-3xl font-bold mb-5">FAQ</h2>
              <div className="space-y-5">
                {faq.map((item) => (
                  <div key={item.q}>
                    <h3 className="text-xl font-bold mb-2">{item.q}</h3>
                    <p className="text-slate-700 leading-relaxed">{item.a}</p>
                  </div>
                ))}
              </div>
            </div>
          </article>

          <aside className="space-y-6">
            <div className="bg-white rounded-2xl border shadow-sm p-6 sticky top-6">
              <p className="text-sm uppercase tracking-widest text-indigo-700 font-semibold mb-2">For accountants</p>
              <h2 className="text-2xl font-bold mb-3">Review one client workflow before they buy.</h2>
              <p className="text-slate-700 leading-relaxed mb-5">
                Send the client store URL, country, current invoice plugin, refund volume, and export fields. The €49 review is designed for accountants, bookkeepers, and agencies deciding whether the store fits the Lattice Invoices early-access path.
              </p>
              <a href={mailto} className="block text-center bg-blue-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-blue-700 transition mb-3">
                Request accountant workflow review
              </a>
              <Link href="/docs/woocommerce-eu-vat-invoice-setup" className="block text-center border border-slate-200 px-6 py-3 rounded-xl font-semibold hover:border-blue-400 transition mb-3">
                Read setup guide
              </Link>
              <Link href="/blog/woocommerce-invoice-export-accounting" className="block text-center border border-slate-200 px-6 py-3 rounded-xl font-semibold hover:border-blue-400 transition">
                See accounting export guide
              </Link>
              <div className="border-t mt-6 pt-6 space-y-3 text-sm text-slate-600">
                <div>✓ Invoice numbers, VAT evidence, PDF retention</div>
                <div>✓ Refund credit notes and accountant exports</div>
                <div>✓ Built to qualify real EU VAT store workflows</div>
              </div>
            </div>

            <div className="bg-slate-900 text-white rounded-2xl p-6">
              <h3 className="text-xl font-bold mb-3">Related invoice guides</h3>
              <div className="space-y-3 text-sm">
                <Link href="/blog/woocommerce-invoice-export-accounting" className="block text-blue-200 hover:text-white">Invoice export for accounting</Link>
                <Link href="/blog/woocommerce-invoice-reconciliation" className="block text-blue-200 hover:text-white">Invoice reconciliation</Link>
                <Link href="/blog/woocommerce-invoice-audit-trail" className="block text-blue-200 hover:text-white">Invoice audit trail</Link>
                <Link href="/blog/woocommerce-invoice-plugin-migration" className="block text-blue-200 hover:text-white">Invoice plugin migration</Link>
              </div>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}
