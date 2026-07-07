import type { Metadata } from "next";
import Link from "next/link";

const SITE_URL = "https://latticeplugins.com";
const SLUG = "/blog/woocommerce-invoice-plugin-for-coaches";

export const metadata: Metadata = {
  title: "WooCommerce Invoice Plugin for Coaches Selling Calls and Courses",
  description:
    "Buyer-intent checklist for coaches using WooCommerce who need VAT/BTW invoices, client billing fields, payment links, credit notes, and downloadable invoice PDFs.",
  alternates: {
    canonical: `${SITE_URL}${SLUG}`,
  },
  openGraph: {
    title: "WooCommerce invoice plugin for coaches",
    description:
      "What coaches should check before buying a WooCommerce invoice workflow: VAT fields, invoice PDFs, payment terms, credit notes, and client downloads.",
    url: `${SITE_URL}${SLUG}`,
    siteName: "Lattice Plugins",
    type: "article",
  },
};

const coachingScenarios = [
  {
    title: "Paid discovery calls and one-off sessions",
    detail:
      "The client books through WooCommerce, pays immediately, and then asks for a company invoice with VAT/BTW number, PO reference, or a different billing email.",
  },
  {
    title: "Coaching packages and retainers",
    detail:
      "Multi-session packages need clean payment status, due dates, invoice PDFs, and a trail when a client upgrades, pauses, or cancels a package.",
  },
  {
    title: "Courses, cohorts, and workshops",
    detail:
      "Business buyers often expense coaching and training. They expect a PDF invoice in the order email and a download link later in My Account.",
  },
];

const mustHaves = [
  "Company name, VAT/BTW number, invoice email, and PO/reference fields before payment",
  "Sequential invoice numbers connected to WooCommerce order and payment status",
  "PDF invoices attached to paid-order emails and stored for later downloads",
  "Credit notes for refunds, no-shows, cancellations, or corrected billing data",
  "Invoice metadata for VAT rate, VAT amount, payment method, payment date, and client country",
  "A setup path that does not force the coach to copy order totals into a separate PDF tool",
];

const decisionRows = [
  {
    signal: "Corporate clients ask for corrected invoices after checkout",
    fit: "Strong fit",
    action: "Collect business billing fields before payment and lock them into the invoice record.",
  },
  {
    signal: "You sell coaching packages, cohorts, or workshops through WooCommerce",
    fit: "Strong fit",
    action: "Use invoice PDFs, customer downloads, and payment-status-aware invoice timing.",
  },
  {
    signal: "Refunds, partial refunds, or rescheduled sessions happen monthly",
    fit: "Medium fit",
    action: "Require credit-note support so correction work is not manual.",
  },
  {
    signal: "Only a few low-value consumer sales need receipts",
    fit: "Wait",
    action: "Start with the setup guide and request early access once invoice requests become recurring.",
  },
];

const emailChecklist = [
  "Store URL and country",
  "What you sell: calls, packages, courses, cohorts, workshops, or templates",
  "Typical buyer: B2B company, self-employed client, or consumer",
  "Invoice fields requested today: VAT ID, company name, PO number, invoice email, cost centre",
  "Invoice request volume per month and average order value",
  "Refund, reschedule, or credit-note needs",
];

const faq = [
  {
    q: "Why do coaches need more than a WooCommerce receipt?",
    a: "Business coaching clients often need a tax-ready invoice, not just an order receipt. They may need company details, VAT/BTW number, PO reference, invoice email, and a downloadable PDF for finance.",
  },
  {
    q: "Is Lattice Invoices only for Dutch coaches?",
    a: "No. The product path is EU VAT/BTW focused: VAT IDs, business billing details, invoice PDFs, credit notes, customer downloads, and accountant handoff for WooCommerce stores.",
  },
  {
    q: "Can a coach keep using an accounting tool?",
    a: "Yes. The WooCommerce invoice workflow should preserve order-level evidence and reduce duplicate typing before the accountant or bookkeeping system receives the final data.",
  },
  {
    q: "When should a coaching store request early access?",
    a: "Request early access when invoice corrections, VAT ID follow-up, or lost invoice requests happen more than a few times per month. That is when the €49 workflow can pay for itself quickly.",
  },
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "WooCommerce invoice plugin for coaches selling calls and courses",
  description:
    "A buyer-intent checklist for coaches using WooCommerce who need VAT/BTW invoices, client billing fields, payment links, credit notes, and downloadable invoice PDFs.",
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
  "mailto:support@latticeplugins.com?subject=WooCommerce%20invoice%20plugin%20coach%20review&body=Hi%20Lattice%2C%0A%0AI%20want%20a%20WooCommerce%20invoice%20workflow%20review%20for%20a%20coaching%20store.%0A%0AStore%20URL%3A%20%0ACountry%3A%20%0AWhat%20I%20sell%3A%20%0AB2B%20or%20B2C%3A%20%0AInvoice%20requests%20per%20month%3A%20%0AInvoice%20fields%20clients%20ask%20for%3A%20%0ARefund%2Fcredit-note%20needs%3A%20";

export default function WooCommerceInvoicePluginForCoachesPage() {
  return (
    <main className="min-h-screen bg-slate-50">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <section className="bg-gradient-to-br from-slate-950 via-purple-950 to-emerald-900 text-white">
        <div className="max-w-5xl mx-auto px-6 py-16 lg:py-20">
          <p className="uppercase tracking-[0.3em] text-sm text-emerald-200 mb-4">Coach invoice workflow</p>
          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
            WooCommerce invoice plugin checklist for coaches selling calls, packages, and courses.
          </h1>
          <p className="text-xl text-blue-50 leading-relaxed max-w-3xl mb-8">
            If clients buy coaching through WooCommerce, invoice admin should not live in your inbox. Use this buyer checklist to qualify VAT/BTW fields, PDF invoices, customer downloads, and credit notes before buying an invoice workflow.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href={mailto} className="bg-green-400 text-slate-950 px-8 py-4 rounded-xl font-semibold hover:bg-green-300 transition shadow-lg text-center">
              Request €49 coach invoice review
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
              <h2 className="text-3xl font-bold mb-4">Why coaching stores hit invoice friction</h2>
              <p className="text-slate-700 leading-relaxed mb-4">
                Coaches often start with a simple WooCommerce product for a call, package, or workshop. Payment works, but business clients still need invoice details that are not captured by a basic checkout.
              </p>
              <p className="text-slate-700 leading-relaxed">
                Lattice Invoices is positioned for that gap: keep the order, payment, VAT/BTW details, invoice PDF, and correction trail connected so client finance teams get what they need without back-and-forth support work.
              </p>
            </div>

            <div className="grid gap-4">
              {coachingScenarios.map((item) => (
                <div key={item.title} className="bg-white rounded-2xl border shadow-sm p-6">
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  <p className="text-slate-700 leading-relaxed">{item.detail}</p>
                </div>
              ))}
            </div>

            <div className="bg-emerald-50 border border-emerald-100 rounded-2xl p-8">
              <h2 className="text-3xl font-bold mb-5">Coach invoice must-haves</h2>
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
              <h2 className="text-3xl font-bold mb-5">Should a coach buy now?</h2>
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
                A specific invoice request is easier to qualify than a vague plugin question. Send the details below so the €49 Lattice Invoices path can be matched to your WooCommerce setup.
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
                Send coach invoice review request
              </a>
            </div>

            <div className="bg-white rounded-2xl border shadow-sm p-8">
              <h2 className="text-3xl font-bold mb-5">Coach invoice FAQ</h2>
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
              <h2 className="text-2xl font-bold mb-3">Need coach-ready invoices?</h2>
              <p className="text-slate-700 leading-relaxed mb-5">
                Request the Lattice Invoices early-access review if coaching clients already ask for VAT IDs, corrected billing names, PO references, or invoice downloads.
              </p>
              <a href={mailto} className="block text-center bg-blue-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-blue-700 transition mb-3">
                Request €49 review
              </a>
              <Link href="/docs/woocommerce-eu-vat-invoice-setup" className="block text-center border border-slate-200 px-6 py-3 rounded-xl font-semibold hover:border-blue-400 transition mb-3">
                Read setup guide
              </Link>
              <Link href="/blog/woocommerce-invoice-plugin-for-consultants" className="block text-center border border-slate-200 px-6 py-3 rounded-xl font-semibold hover:border-blue-400 transition">
                Consultant invoice guide
              </Link>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}
