import type { Metadata } from "next";
import Link from "next/link";

const SITE_URL = "https://latticeplugins.com";
const SLUG = "/blog/woocommerce-training-company-invoices";

export const metadata: Metadata = {
  title: "WooCommerce Training Company Invoices: VAT, Seats, and PDFs",
  description:
    "Buyer-intent checklist for training companies using WooCommerce who need VAT/BTW invoices, attendee seats, PO references, credit notes, and downloadable invoice PDFs.",
  alternates: {
    canonical: `${SITE_URL}${SLUG}`,
  },
  openGraph: {
    title: "WooCommerce training company invoices",
    description:
      "What training companies should check before buying a WooCommerce invoice workflow: VAT fields, seats, PO numbers, invoice PDFs, credit notes, and customer downloads.",
    url: `${SITE_URL}${SLUG}`,
    siteName: "Lattice Plugins",
    type: "article",
  },
};

const trainingScenarios = [
  {
    title: "Corporate training seats",
    detail:
      "A buyer books 5, 20, or 50 seats through WooCommerce and finance asks for company details, VAT/BTW number, PO reference, attendee count, and one invoice PDF.",
  },
  {
    title: "Workshops with deposits or balance payments",
    detail:
      "Training providers often take a deposit before the event and the balance later. That needs proforma/final invoice timing, payment evidence, and clean invoice numbering.",
  },
  {
    title: "Refunds, substitutions, and cancellations",
    detail:
      "Seat changes, attendee substitutions, late cancellations, and partial refunds create invoice correction work unless credit notes are tied directly to the order and refund.",
  },
];

const mustHaves = [
  "Company name, VAT/BTW number, invoice email, cost centre, and PO/reference fields before payment",
  "Seat count, workshop date, attendee group, and training SKU preserved as invoice metadata",
  "Sequential invoice numbers connected to WooCommerce order status and payment timing",
  "PDF invoices attached to paid-order emails and available later from My Account",
  "Credit notes for cancelled seats, partial refunds, date changes, or corrected billing data",
  "Accounting export fields for VAT rate, VAT amount, country, payment method, and invoice date",
];

const decisionRows = [
  {
    signal: "Corporate buyers regularly request PO numbers or corrected VAT invoices",
    fit: "Strong fit",
    action: "Capture PO and VAT data before payment so finance does not reopen the order after checkout.",
  },
  {
    signal: "Training seats, workshops, or cohort bookings create group invoices",
    fit: "Strong fit",
    action: "Store seat count and training metadata on the invoice instead of rebuilding it in a PDF editor.",
  },
  {
    signal: "Refunds, substitutions, or no-shows happen every month",
    fit: "Medium fit",
    action: "Require credit-note handling before relying on WooCommerce as the finance handoff.",
  },
  {
    signal: "Only low-volume consumer course sales need simple receipts",
    fit: "Wait",
    action: "Use the setup guide first and request early access once invoice corrections become recurring.",
  },
];

const emailChecklist = [
  "Store URL and country",
  "Training type: workshops, cohorts, online courses, corporate seats, or deposits",
  "Typical buyer: company, school, public sector, freelancer, or consumer",
  "Invoice fields requested today: VAT ID, PO number, cost centre, invoice email, attendee count",
  "Monthly training orders and monthly invoice correction volume",
  "Refund, cancellation, substitution, and credit-note requirements",
];

const faq = [
  {
    q: "Why do training companies need more than a WooCommerce receipt?",
    a: "Corporate training buyers often need a tax-ready invoice with company details, VAT/BTW number, PO reference, attendee or seat information, invoice email, and a PDF for finance approval.",
  },
  {
    q: "Does this apply to online course stores too?",
    a: "Yes when course buyers are businesses or teams. Seat counts, renewal timing, invoice PDFs, credit notes, and accountant handoff all matter once WooCommerce is used for B2B training revenue.",
  },
  {
    q: "Can Lattice Invoices replace accounting software?",
    a: "No. The goal is to keep WooCommerce order-level invoice evidence clean before accounting export. Your accountant or bookkeeping system remains the final source for filing.",
  },
  {
    q: "When should a training company request early access?",
    a: "Request early access when VAT ID follow-up, PO references, corrected invoice PDFs, seat changes, or refund credit notes consume support time every month. That is when a €49 invoice workflow can pay back quickly.",
  },
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "WooCommerce training company invoices: VAT, seats, and PDFs",
  description:
    "A buyer-intent checklist for training companies using WooCommerce who need VAT/BTW invoices, attendee seats, PO references, credit notes, and downloadable invoice PDFs.",
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
  "mailto:support@latticeplugins.com?subject=WooCommerce%20training%20company%20invoice%20workflow%20review&body=Hi%20Lattice%2C%0A%0AI%20want%20a%20WooCommerce%20invoice%20workflow%20review%20for%20a%20training%20company.%0A%0AStore%20URL%3A%20%0ACountry%3A%20%0ATraining%20type%3A%20%0AB2B%20or%20B2C%3A%20%0AInvoice%20requests%20per%20month%3A%20%0AInvoice%20fields%20buyers%20ask%20for%3A%20%0ARefund%2Fcredit-note%20needs%3A%20";

export default function WooCommerceTrainingCompanyInvoicesPage() {
  return (
    <main className="min-h-screen bg-slate-50">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <section className="bg-gradient-to-br from-slate-950 via-blue-950 to-emerald-900 text-white">
        <div className="max-w-5xl mx-auto px-6 py-16 lg:py-20">
          <p className="uppercase tracking-[0.3em] text-sm text-emerald-200 mb-4">Training invoice workflow</p>
          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
            WooCommerce invoice checklist for training companies selling seats, workshops, and courses.
          </h1>
          <p className="text-xl text-blue-50 leading-relaxed max-w-3xl mb-8">
            Training companies get invoice friction fast: corporate buyers need VAT/BTW details, PO references, attendee counts, downloadable PDFs, and credit notes when seats change. This checklist turns that pain into a clear Lattice Invoices fit request.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href={mailto} className="bg-green-400 text-slate-950 px-8 py-4 rounded-xl font-semibold hover:bg-green-300 transition shadow-lg text-center">
              Request €49 training invoice review
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
              <h2 className="text-3xl font-bold mb-4">Why training stores hit invoice friction</h2>
              <p className="text-slate-700 leading-relaxed mb-4">
                A simple WooCommerce checkout can sell a training seat, but finance teams often need more than a receipt. They ask for a VAT/BTW invoice, billing entity details, PO reference, seat count, and a PDF that can be filed internally.
              </p>
              <p className="text-slate-700 leading-relaxed">
                Lattice Invoices is positioned for that gap: keep the order, payment, VAT details, attendee context, invoice PDF, and correction trail connected so training revenue does not turn into manual admin work.
              </p>
            </div>

            <div className="grid gap-4">
              {trainingScenarios.map((item) => (
                <div key={item.title} className="bg-white rounded-2xl border shadow-sm p-6">
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  <p className="text-slate-700 leading-relaxed">{item.detail}</p>
                </div>
              ))}
            </div>

            <div className="bg-emerald-50 border border-emerald-100 rounded-2xl p-8">
              <h2 className="text-3xl font-bold mb-5">Training invoice must-haves</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {mustHaves.map((item) => (
                  <div key={item} className="bg-white rounded-xl border border-emerald-100 p-4 flex gap-3">
                    <span className="text-emerald-700 font-bold">✓</span>
                    <span className="text-slate-800">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-2xl border shadow-sm p-8 overflow-hidden">
              <h2 className="text-3xl font-bold mb-5">Should a training company buy now?</h2>
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
                    {decisionRows.map((row) => (
                      <tr key={row.signal} className="border-b last:border-b-0 align-top">
                        <td className="p-4 text-slate-700">{row.signal}</td>
                        <td className="p-4 font-bold text-emerald-700">{row.fit}</td>
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
                A specific invoice request is easier to qualify than a vague plugin question. Send the details below so the €49 Lattice Invoices path can be matched to your WooCommerce training setup.
              </p>
              <ul className="space-y-3 mb-6">
                {emailChecklist.map((item) => (
                  <li key={item} className="flex gap-3 text-slate-100">
                    <span className="text-green-300">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <a href={mailto} className="inline-block bg-green-400 text-slate-950 px-7 py-3 rounded-xl font-semibold hover:bg-green-300 transition">
                Send training invoice fit request
              </a>
            </div>

            <div className="bg-white rounded-2xl border shadow-sm p-8">
              <h2 className="text-3xl font-bold mb-5">Training invoice FAQ</h2>
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
              <p className="text-sm uppercase tracking-[0.2em] text-emerald-700 font-semibold mb-3">Revenue CTA</p>
              <h2 className="text-2xl font-bold mb-3">Need training-ready invoices?</h2>
              <p className="text-slate-700 leading-relaxed mb-5">
                Request the Lattice Invoices early-access review if corporate learners already ask for VAT IDs, PO references, attendee counts, corrected PDFs, or credit notes.
              </p>
              <a href={mailto} className="block text-center bg-blue-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-blue-700 transition mb-3">
                Request €49 review
              </a>
              <Link href="/tools/woocommerce-invoice-setup-brief" className="block text-center border border-slate-200 px-6 py-3 rounded-xl font-semibold hover:border-blue-400 transition mb-3">
                Generate setup brief
              </Link>
              <Link href="/docs/woocommerce-eu-vat-invoice-setup" className="block text-center border border-slate-200 px-6 py-3 rounded-xl font-semibold hover:border-blue-400 transition mb-3">
                Read setup guide
              </Link>
              <Link href="/blog/woocommerce-invoice-plugin-for-online-courses" className="block text-center border border-slate-200 px-6 py-3 rounded-xl font-semibold hover:border-blue-400 transition mb-3">
                Online course invoice guide
              </Link>
              <Link href="/blog/woocommerce-invoice-plugin-for-coaches" className="block text-center border border-slate-200 px-6 py-3 rounded-xl font-semibold hover:border-blue-400 transition">
                Coach invoice workflow
              </Link>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}
