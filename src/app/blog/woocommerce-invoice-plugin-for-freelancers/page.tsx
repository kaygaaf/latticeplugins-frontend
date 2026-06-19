import type { Metadata } from "next";
import Link from "next/link";

const SITE_URL = "https://latticeplugins.com";
const SLUG = "/blog/woocommerce-invoice-plugin-for-freelancers";

export const metadata: Metadata = {
  title: "WooCommerce Invoice Plugin for Freelancers and Solo Stores",
  description:
    "A buyer-intent checklist for freelancers and solo WooCommerce store owners who need VAT/BTW invoices, PDF delivery, customer downloads, refunds, and simple accountant handoff.",
  alternates: {
    canonical: `${SITE_URL}${SLUG}`,
  },
  openGraph: {
    title: "WooCommerce invoice plugin for freelancers",
    description:
      "What freelancers should check before buying a WooCommerce invoice plugin: VAT fields, invoice numbering, PDF emails, customer downloads, refunds, and accountant export.",
    url: `${SITE_URL}${SLUG}`,
    siteName: "Lattice Plugins",
    type: "article",
  },
};

const freelancerPainPoints = [
  {
    title: "You sell client work, templates, courses, or retainers through WooCommerce",
    detail:
      "The customer pays online, but still expects a proper invoice with business details, VAT/BTW evidence, and a PDF they can forward to finance.",
  },
  {
    title: "You do not want an enterprise invoicing stack",
    detail:
      "Most freelancers need a predictable workflow: paid order in WooCommerce, invoice number created, PDF sent, download stored, refund credit note available.",
  },
  {
    title: "Your accountant asks for cleaner evidence at quarter end",
    detail:
      "A folder of payment screenshots and manually edited PDFs is stressful. The invoice workflow should keep invoice numbers, VAT totals, and order IDs together.",
  },
];

const mustHaveChecklist = [
  "Sequential invoice numbers that do not depend on random support emails",
  "VAT/BTW number and company fields captured before or during checkout",
  "Invoice PDFs attached to paid-order emails",
  "Customer downloads in My Account so repeat clients do not email you again",
  "Credit notes for refunds, cancellations, and corrected invoices",
  "Exportable invoice metadata for the accountant or bookkeeping spreadsheet",
];

const freelancerScenarios = [
  {
    scenario: "Freelance consultant sells a strategy session",
    weak: "Payment succeeds, then the client emails for a company invoice and PO reference.",
    strong: "Checkout captures company/VAT/PO fields and the paid-order email includes the invoice PDF.",
  },
  {
    scenario: "Designer sells downloadable templates",
    weak: "Digital product delivery is automated, but invoice requests are manual support work.",
    strong: "The customer gets the download and the invoice from the same WooCommerce order workflow.",
  },
  {
    scenario: "Solo agency refunds part of a project",
    weak: "The refund is in WooCommerce, while the credit note is created manually somewhere else.",
    strong: "The refund has a credit-note record linked to the original invoice and stored with VAT evidence.",
  },
];

const buyOrWaitRows = [
  {
    signal: "Mostly consumer customers, no one asks for invoices",
    action: "Wait. Focus on checkout conversion and only add invoice automation when invoice requests become recurring.",
  },
  {
    signal: "1–3 invoice correction emails per month",
    action: "Consider a simple workflow now. The time saved may already cover a €49 plugin/review cost.",
  },
  {
    signal: "B2B customers need VAT IDs, PO references, or invoice emails",
    action: "Prioritize invoice fields before payment, because missing data creates support loops after the sale.",
  },
  {
    signal: "Your accountant rejects WooCommerce order exports as messy",
    action: "Choose a workflow that keeps invoice number, order ID, VAT metadata, PDF link, refund state, and payment method together.",
  },
];

const faq = [
  {
    q: "Do freelancers need a WooCommerce invoice plugin?",
    a: "If customers regularly ask for VAT/BTW invoices, company details, PDF copies, or corrected documents, a WooCommerce invoice workflow can remove manual admin and make the store look more professional.",
  },
  {
    q: "Can I just create invoices manually in Google Docs or accounting software?",
    a: "You can, but it creates duplicate work. A WooCommerce-native workflow keeps the order, payment, invoice number, VAT metadata, PDF, and refund trail connected.",
  },
  {
    q: "What makes Lattice Invoices different for freelancers?",
    a: "The early-access positioning is deliberately simple: €49 one-time, focused on EU VAT/BTW invoice readiness, customer PDFs, credit notes, and accountant handoff instead of a large enterprise billing suite.",
  },
  {
    q: "What should I send for an early-access review?",
    a: "Send your store URL, country, what you sell, whether customers are B2B or B2C, current invoice process, refund frequency, and the exact invoice fields clients ask for.",
  },
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "WooCommerce invoice plugin for freelancers and solo stores",
  description:
    "A buyer-intent checklist for freelancers and solo WooCommerce store owners who need VAT/BTW invoices, PDF delivery, customer downloads, refunds, and accountant handoff.",
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
  "mailto:support@latticeplugins.com?subject=WooCommerce%20invoice%20plugin%20freelancer%20review&body=Hi%20Lattice%2C%0A%0AI%20want%20a%20WooCommerce%20invoice%20workflow%20review%20for%20a%20freelancer%2Fsolo-store%20setup.%0A%0AStore%20URL%3A%20%0ACountry%3A%20%0AWhat%20I%20sell%3A%20%0AB2B%20or%20B2C%3A%20%0ACurrent%20invoice%20process%3A%20%0AInvoice%20fields%20clients%20ask%20for%3A%20%0ARefund%2Fcredit-note%20needs%3A%20";

export default function WooCommerceInvoicePluginForFreelancersPage() {
  return (
    <main className="min-h-screen bg-slate-50">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <section className="bg-gradient-to-br from-slate-950 via-blue-950 to-emerald-900 text-white">
        <div className="max-w-5xl mx-auto px-6 py-16 lg:py-20">
          <p className="uppercase tracking-[0.3em] text-sm text-emerald-200 mb-4">WooCommerce invoices for freelancers</p>
          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
            The freelancer-friendly WooCommerce invoice plugin checklist.
          </h1>
          <p className="text-xl text-blue-50 leading-relaxed max-w-3xl mb-8">
            If you run a solo WooCommerce store, invoice admin should not become a second job. Use this checklist to decide when VAT/BTW fields, PDF invoices, customer downloads, and credit notes are worth automating.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href={mailto} className="bg-green-400 text-slate-950 px-8 py-4 rounded-xl font-semibold hover:bg-green-300 transition shadow-lg text-center">
              Request €49 freelancer invoice review
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
              <h2 className="text-3xl font-bold mb-4">The real freelancer invoice problem</h2>
              <p className="text-slate-700 leading-relaxed mb-4">
                Small WooCommerce stores often start with manual invoices because it feels faster. Then B2B customers ask for VAT IDs, PO references, corrected PDFs, credit notes, or old invoice copies months later.
              </p>
              <p className="text-slate-700 leading-relaxed">
                Lattice Invoices is being shaped around the lightweight path: keep the invoice workflow inside WooCommerce, avoid enterprise billing complexity, and give freelancers a cleaner handoff to clients and accountants.
              </p>
            </div>

            <div className="grid gap-4">
              {freelancerPainPoints.map((item) => (
                <div key={item.title} className="bg-white rounded-2xl border shadow-sm p-6">
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  <p className="text-slate-700 leading-relaxed">{item.detail}</p>
                </div>
              ))}
            </div>

            <div className="bg-emerald-50 border border-emerald-100 rounded-2xl p-8">
              <h2 className="text-3xl font-bold mb-5">Must-have checklist before buying</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {mustHaveChecklist.map((item) => (
                  <div key={item} className="bg-white rounded-xl border border-emerald-100 p-4 flex gap-3">
                    <span className="text-emerald-700 font-bold">✓</span>
                    <span className="text-slate-800">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-2xl border shadow-sm p-8">
              <h2 className="text-3xl font-bold mb-5">Freelancer scenarios: manual vs. invoice-ready</h2>
              <div className="space-y-4">
                {freelancerScenarios.map((item) => (
                  <div key={item.scenario} className="border rounded-xl p-5">
                    <h3 className="text-xl font-bold mb-2">{item.scenario}</h3>
                    <p className="text-slate-700 leading-relaxed mb-2"><strong>Manual admin:</strong> {item.weak}</p>
                    <p className="text-slate-700 leading-relaxed"><strong>Invoice-ready workflow:</strong> {item.strong}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-2xl border shadow-sm p-8">
              <h2 className="text-3xl font-bold mb-5">Should you buy now or wait?</h2>
              <div className="overflow-x-auto">
                <table className="min-w-full text-left border-collapse">
                  <thead>
                    <tr className="border-b">
                      <th className="py-3 pr-4 font-semibold">Signal in your store</th>
                      <th className="py-3 pr-4 font-semibold">Best next action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {buyOrWaitRows.map((row) => (
                      <tr key={row.signal} className="border-b last:border-b-0 align-top">
                        <td className="py-4 pr-4 text-slate-700">{row.signal}</td>
                        <td className="py-4 pr-4 text-slate-700">{row.action}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
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
              <p className="text-sm uppercase tracking-widest text-emerald-700 font-semibold mb-2">For solo stores</p>
              <h2 className="text-2xl font-bold mb-3">Turn invoice requests into a simple paid workflow.</h2>
              <p className="text-slate-700 leading-relaxed mb-5">
                Send the store URL, country, what you sell, and the invoice fields customers ask for. The €49 early-access review qualifies whether Lattice Invoices fits your freelancer WooCommerce workflow.
              </p>
              <a href={mailto} className="block text-center bg-blue-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-blue-700 transition mb-3">
                Request freelancer invoice review
              </a>
              <Link href="/docs/woocommerce-eu-vat-invoice-setup" className="block text-center border border-slate-200 px-6 py-3 rounded-xl font-semibold hover:border-blue-400 transition mb-3">
                Read setup guide
              </Link>
              <Link href="/blog/woocommerce-invoice-plugin-cost" className="block text-center border border-slate-200 px-6 py-3 rounded-xl font-semibold hover:border-blue-400 transition mb-3">
                Compare invoice plugin cost
              </Link>
              <Link href="/blog/woocommerce-invoice-plugin-for-accountants" className="block text-center border border-slate-200 px-6 py-3 rounded-xl font-semibold hover:border-blue-400 transition">
                Accountant handoff checklist
              </Link>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}
