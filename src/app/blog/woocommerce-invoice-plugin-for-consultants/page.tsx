import type { Metadata } from "next";
import Link from "next/link";

const SITE_URL = "https://latticeplugins.com";
const SLUG = "/blog/woocommerce-invoice-plugin-for-consultants";

export const metadata: Metadata = {
  title: "WooCommerce Invoice Plugin for Consultants and Advisors",
  description:
    "A buyer-intent guide for consultants, advisors, and small service firms using WooCommerce who need VAT/BTW invoices, PO references, PDF delivery, credit notes, and accountant handoff.",
  alternates: {
    canonical: `${SITE_URL}${SLUG}`,
  },
  openGraph: {
    title: "WooCommerce invoice plugin for consultants",
    description:
      "What consultants should check before buying a WooCommerce invoice plugin: VAT IDs, PO references, invoice PDFs, credit notes, payment terms, and accountant-ready exports.",
    url: `${SITE_URL}${SLUG}`,
    siteName: "Lattice Plugins",
    type: "article",
  },
};

const consultingUseCases = [
  {
    title: "Strategy calls and paid audits",
    detail:
      "A client books and pays through WooCommerce, then finance asks for a company invoice, VAT/BTW number, PO reference, and the correct legal billing name.",
  },
  {
    title: "Retainer deposits or project milestones",
    detail:
      "Consultants often collect deposits before delivery. The invoice workflow needs clear payment status, due dates, and final invoice timing when milestones are paid.",
  },
  {
    title: "Workshops, training seats, and advisory packages",
    detail:
      "B2B buyers need invoices they can forward internally. The PDF should include buyer details, VAT metadata, order line items, and a reliable download link.",
  },
];

const consultantChecklist = [
  "Company name, VAT/BTW number, PO/reference, and invoice email fields at checkout",
  "Sequential invoice numbers tied to WooCommerce order IDs",
  "Invoice PDFs attached to paid-order emails and stored for later customer downloads",
  "Credit notes for refunds, cancellations, no-shows, or corrected billing details",
  "Payment method, payment date, VAT rate, and VAT amount stored as invoice metadata",
  "Accountant handoff that does not require screenshots, copied totals, or manual PDF edits",
];

const decisionRows = [
  {
    signal: "Clients ask for PO numbers or corrected legal names after payment",
    priority: "High",
    action: "Add dedicated invoice fields before payment and lock them to the order/invoice record.",
  },
  {
    signal: "You sell deposits, retainers, or milestone payments",
    priority: "High",
    action: "Make invoice timing and payment status explicit so the client and accountant know what was paid.",
  },
  {
    signal: "Refunds or cancelled sessions happen occasionally",
    priority: "Medium",
    action: "Require credit-note support before relying on the workflow for finance handoff.",
  },
  {
    signal: "Most sales are low-value B2C downloads",
    priority: "Low",
    action: "Use the setup guide first; buy once invoice requests become a recurring support cost.",
  },
];

const emailTemplateLines = [
  "Store URL and country",
  "What you sell: calls, audits, retainers, workshops, courses, or templates",
  "Whether customers are mostly B2B or B2C",
  "Invoice fields clients ask for today: VAT ID, PO number, invoice email, cost centre, project code",
  "Current invoice request volume per month",
  "Whether refunds, partial refunds, or credit notes are needed",
];

const faq = [
  {
    q: "Why would a consultant use WooCommerce for invoices?",
    a: "Many consultants already use WooCommerce for paid calls, digital products, deposits, workshops, or advisory packages. If payment happens in WooCommerce, invoice evidence should stay connected to the order.",
  },
  {
    q: "Is this only for Dutch BTW invoices?",
    a: "No. The Lattice Invoices product path is written for EU VAT/BTW-style invoice readiness: VAT IDs, business details, invoice PDFs, credit notes, customer downloads, and accountant handoff.",
  },
  {
    q: "Can I keep creating invoices in my accounting tool?",
    a: "Yes, but duplicate entry creates errors. A WooCommerce-native invoice workflow should reduce support work by collecting the right fields and preserving order-level invoice evidence before export.",
  },
  {
    q: "What is the practical next step?",
    a: "Use the €49 early-access CTA if consultant invoice requests are already recurring. Send the store details and invoice-field needs so the workflow can be qualified before purchase.",
  },
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "WooCommerce invoice plugin for consultants and advisors",
  description:
    "A buyer-intent guide for consultants, advisors, and small service firms using WooCommerce who need VAT/BTW invoices, PO references, PDF delivery, credit notes, and accountant handoff.",
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
  "mailto:support@latticeplugins.com?subject=WooCommerce%20invoice%20plugin%20consultant%20review&body=Hi%20Lattice%2C%0A%0AI%20want%20a%20WooCommerce%20invoice%20workflow%20review%20for%20a%20consulting%2Fadvisory%20store.%0A%0AStore%20URL%3A%20%0ACountry%3A%20%0AWhat%20I%20sell%3A%20%0AB2B%20or%20B2C%3A%20%0AInvoice%20requests%20per%20month%3A%20%0AInvoice%20fields%20clients%20ask%20for%3A%20%0APO%2Freference%20needs%3A%20%0ARefund%2Fcredit-note%20needs%3A%20";

export default function WooCommerceInvoicePluginForConsultantsPage() {
  return (
    <main className="min-h-screen bg-slate-50">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <section className="bg-gradient-to-br from-slate-950 via-indigo-950 to-emerald-900 text-white">
        <div className="max-w-5xl mx-auto px-6 py-16 lg:py-20">
          <p className="uppercase tracking-[0.3em] text-sm text-emerald-200 mb-4">Consultant invoice workflow</p>
          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
            WooCommerce invoice plugin checklist for consultants and advisors.
          </h1>
          <p className="text-xl text-blue-50 leading-relaxed max-w-3xl mb-8">
            If consulting clients pay through WooCommerce, invoice admin should not happen in your inbox. Use this buyer checklist to qualify VAT/BTW fields, PO references, PDF invoices, credit notes, and accountant handoff before buying.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href={mailto} className="bg-green-400 text-slate-950 px-8 py-4 rounded-xl font-semibold hover:bg-green-300 transition shadow-lg text-center">
              Request €49 consultant invoice review
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
              <h2 className="text-3xl font-bold mb-4">Why consultants hit invoice friction faster</h2>
              <p className="text-slate-700 leading-relaxed mb-4">
                A consultant can sell a simple paid call, audit, workshop, or retainer through WooCommerce and still need B2B-grade invoice details. The payment is automated, but the finance follow-up becomes manual.
              </p>
              <p className="text-slate-700 leading-relaxed">
                Lattice Invoices is positioned for that gap: keep the order, payment, VAT/BTW fields, invoice PDF, and correction trail in one WooCommerce workflow instead of scattering details across email threads and accounting tools.
              </p>
            </div>

            <div className="grid gap-4">
              {consultingUseCases.map((item) => (
                <div key={item.title} className="bg-white rounded-2xl border shadow-sm p-6">
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  <p className="text-slate-700 leading-relaxed">{item.detail}</p>
                </div>
              ))}
            </div>

            <div className="bg-emerald-50 border border-emerald-100 rounded-2xl p-8">
              <h2 className="text-3xl font-bold mb-5">Consultant invoice must-haves</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {consultantChecklist.map((item) => (
                  <div key={item} className="bg-white rounded-xl border border-emerald-100 p-4 flex gap-3">
                    <span className="text-emerald-700 font-bold">✓</span>
                    <span className="text-slate-800">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-2xl border shadow-sm p-8 overflow-hidden">
              <h2 className="text-3xl font-bold mb-5">Should a consultant buy now?</h2>
              <div className="overflow-x-auto">
                <table className="min-w-full text-left border-collapse">
                  <thead>
                    <tr className="border-b bg-slate-50">
                      <th className="p-4 font-semibold">Store signal</th>
                      <th className="p-4 font-semibold">Priority</th>
                      <th className="p-4 font-semibold">Best next action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {decisionRows.map((row) => (
                      <tr key={row.signal} className="border-b last:border-b-0 align-top">
                        <td className="p-4 text-slate-700">{row.signal}</td>
                        <td className="p-4 font-bold text-emerald-700">{row.priority}</td>
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
                The faster the invoice context is clear, the easier it is to turn a vague plugin inquiry into a qualified €49 Lattice Invoices conversation.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-6">
                {emailTemplateLines.map((line) => (
                  <div key={line} className="rounded-xl bg-white/10 border border-white/10 p-4 flex gap-3">
                    <span className="text-green-300 font-bold">→</span>
                    <span>{line}</span>
                  </div>
                ))}
              </div>
              <a href={mailto} className="inline-flex bg-green-400 text-slate-950 px-6 py-3 rounded-xl font-semibold hover:bg-green-300 transition">
                Send consultant invoice details
              </a>
            </div>

            <div className="bg-blue-50 border border-blue-100 rounded-2xl p-8">
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
              <p className="text-sm uppercase tracking-widest text-emerald-700 font-semibold mb-2">For consultants</p>
              <h2 className="text-2xl font-bold mb-3">Turn client invoice requests into a repeatable WooCommerce workflow.</h2>
              <p className="text-slate-700 leading-relaxed mb-5">
                Send the store URL, consulting offer, invoice fields, and PO/reference needs. The €49 early-access review qualifies whether Lattice Invoices fits the workflow.
              </p>
              <a href={mailto} className="block text-center bg-blue-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-blue-700 transition mb-3">
                Request consultant invoice review
              </a>
              <Link href="/woocommerce-eu-vat-invoices" className="block text-center border border-slate-200 px-6 py-3 rounded-xl font-semibold hover:border-blue-400 transition mb-3">
                View Lattice Invoices
              </Link>
              <Link href="/docs/woocommerce-eu-vat-invoice-setup" className="block text-center border border-slate-200 px-6 py-3 rounded-xl font-semibold hover:border-blue-400 transition mb-3">
                Read setup guide
              </Link>
              <Link href="/blog/woocommerce-invoice-plugin-for-freelancers" className="block text-center border border-slate-200 px-6 py-3 rounded-xl font-semibold hover:border-blue-400 transition mb-3">
                Freelancer invoice checklist
              </Link>
              <Link href="/blog/woocommerce-purchase-order-invoices" className="block text-center border border-slate-200 px-6 py-3 rounded-xl font-semibold hover:border-blue-400 transition">
                PO invoice workflow guide
              </Link>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}
