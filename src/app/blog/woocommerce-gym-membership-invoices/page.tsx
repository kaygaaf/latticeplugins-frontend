import type { Metadata } from "next";
import Link from "next/link";

const SITE_URL = "https://latticeplugins.com";
const PAGE_URL = `${SITE_URL}/blog/woocommerce-gym-membership-invoices`;

export const metadata: Metadata = {
  title: "WooCommerce Gym Membership Invoices: VAT, Renewals, and PDF Workflow",
  description:
    "Buyer-intent guide for gyms, fitness studios, and wellness clubs using WooCommerce memberships: VAT fields, renewal invoices, class packages, refunds, credit notes, and customer PDF downloads.",
  alternates: {
    canonical: PAGE_URL,
  },
  openGraph: {
    title: "WooCommerce gym membership invoices",
    description:
      "How gyms and fitness studios should handle WooCommerce membership invoices, VAT fields, corporate billing, failed renewals, refunds, credit notes, and accountant handoff.",
    url: PAGE_URL,
    siteName: "Lattice Plugins",
    type: "article",
  },
};

const buyerProblems = [
  "Members ask for monthly invoice PDFs for employer reimbursement or tax records",
  "Corporate wellness buyers need company name, VAT number, PO/reference, and invoice email fields",
  "Renewal, freeze, cancellation, and failed-payment events create confusing invoice histories",
  "Class packs, personal-training sessions, deposits, and merch orders use different VAT treatments",
  "Refunds for cancellations or unused sessions need credit notes instead of edited old invoices",
];

const workflowSteps = [
  {
    title: "1. Capture member and company billing fields",
    text: "Let individual members, corporate wellness buyers, and studios collect company name, VAT/BTW number, PO/reference, invoice email, membership ID, and cost-centre data before payment.",
  },
  {
    title: "2. Separate membership renewals from one-off purchases",
    text: "Monthly memberships, class packs, personal training, events, deposits, and physical products should create invoice lines that remain understandable months later.",
  },
  {
    title: "3. Attach invoices to renewal and payment emails",
    text: "Paid renewals should send a customer invoice PDF automatically and keep the file available in My Account so support does not resend invoices manually.",
  },
  {
    title: "4. Use credit notes for freezes, refunds, and cancellations",
    text: "When a member cancels, freezes a plan, receives a partial refund, or swaps a package, preserve the original invoice and create a linked credit-note trail.",
  },
];

const requiredFields = [
  ["Membership ID", "Connects the invoice to a member profile, renewal cycle, or class-pack balance"],
  ["Company / employer", "Needed when a member needs employer reimbursement or corporate wellness billing"],
  ["VAT/BTW number", "Supports EU B2B invoice evidence and reverse-charge checks where applicable"],
  ["Invoice email", "Routes the PDF to the member, corporate buyer, or accounts payable contact"],
  ["Plan period", "Shows which month, renewal interval, or training package the invoice covers"],
  ["Credit-note reason", "Explains cancellations, freezes, unused sessions, refunds, or package changes"],
];

const scoring = [
  { signal: "Members or employers ask for invoice PDFs every month", score: "+2" },
  { signal: "You sell B2B/corporate wellness packages through WooCommerce", score: "+2" },
  { signal: "Renewal, freeze, or cancellation invoices are adjusted manually", score: "+2" },
  { signal: "Accountant export requires membership period, VAT rate, paid date, and PDF link", score: "+1" },
  { signal: "Refunds or class-pack changes need credit notes", score: "+2" },
];

const useCases = [
  {
    title: "Monthly gym memberships",
    text: "Issue renewal invoices with the correct membership period, paid date, VAT totals, and customer-download link.",
  },
  {
    title: "Corporate wellness plans",
    text: "Capture company billing, VAT/BTW number, invoice email, PO/reference, and cost-centre data before checkout.",
  },
  {
    title: "Class packs and personal training",
    text: "Keep package name, session count, trainer/service context, and partial-refund credit notes tied to the order.",
  },
  {
    title: "Events, merch, and mixed baskets",
    text: "Preserve invoice lines for events, apparel, supplements, deposits, and digital training plans without support-side PDF editing.",
  },
];

const faq = [
  {
    q: "Can a WooCommerce gym need invoice automation if members pay online?",
    a: "Yes. The payment can work perfectly while invoicing is still manual: members need PDFs, employers ask for reimbursement invoices, B2B wellness buyers need company fields, and refunds need credit notes.",
  },
  {
    q: "Do membership renewal invoices need a separate workflow?",
    a: "Usually yes. Renewal invoices should show the covered period and should not be confused with one-off products, class packs, or refund credit notes.",
  },
  {
    q: "Where does Lattice Invoices fit?",
    a: "Lattice Invoices is positioned as the focused WooCommerce EU invoice workflow for VAT fields, invoice PDFs, credit notes, customer downloads, and accountant handoff. Gym and membership stores can use the €49 early-access path when invoice requests are already creating support work.",
  },
];

const mailto =
  "mailto:support@latticeplugins.com?subject=WooCommerce%20gym%20membership%20invoice%20workflow%20review&body=Hi%20Lattice%2C%0A%0AI%20run%20a%20gym%2Ffitness%20WooCommerce%20store%20and%20want%20the%20Lattice%20Invoices%20early-access%20workflow.%0A%0AStore%20URL%3A%20%0ACountry%3A%20%0AMemberships%20or%20class%20packs%20sold%3A%20%0ACorporate%20billing%20needed%3A%20%0AVAT%2FBTW%20fields%20needed%3A%20%0AInvoice%20email%20or%20PO%20field%20needed%3A%20%0ARenewal%2Ffreeze%2Fcancellation%20issues%3A%20%0ACredit-note%20needs%3A%20%0AAccounting%20export%20needs%3A%20";

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "WooCommerce gym membership invoices: VAT, renewals, and PDF workflow",
  description:
    "A buyer-intent guide for gyms, fitness studios, and wellness clubs using WooCommerce memberships and needing VAT invoice workflows.",
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

export default function WooCommerceGymMembershipInvoicesPage() {
  return (
    <main className="min-h-screen bg-slate-50">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <section className="bg-gradient-to-br from-slate-950 via-emerald-950 to-blue-900 text-white">
        <div className="max-w-5xl mx-auto px-6 py-16 lg:py-20">
          <p className="uppercase tracking-[0.3em] text-sm text-emerald-200 mb-4">WooCommerce gym membership invoices</p>
          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
            Stop handling gym membership invoices in support tickets.
          </h1>
          <p className="text-xl text-emerald-50 leading-relaxed max-w-3xl mb-8">
            If your gym, fitness studio, yoga school, or wellness club sells memberships through WooCommerce, invoices need membership periods, VAT fields, corporate billing details, renewal PDFs, refund credit notes, and customer downloads.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href={mailto} className="bg-emerald-500 text-white px-8 py-4 rounded-xl font-semibold hover:bg-emerald-400 transition shadow-lg text-center">
              Request €49 gym invoice review
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
              <h2 className="text-3xl font-bold mb-4">Why fitness stores outgrow generic WooCommerce receipts</h2>
              <p className="text-slate-700 leading-relaxed mb-5">
                A gym checkout is not just a simple product order. One store may sell subscriptions, drop-in classes, corporate plans, personal-training packages, events, and merchandise. Each can need different invoice context and refund handling.
              </p>
              <div className="space-y-3">
                {buyerProblems.map((problem) => (
                  <div key={problem} className="flex gap-3 rounded-xl bg-emerald-50 border border-emerald-100 p-4">
                    <span className="text-emerald-700 font-bold">→</span>
                    <span className="text-slate-800">{problem}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-2xl border shadow-sm p-8">
              <h2 className="text-3xl font-bold mb-6">The WooCommerce gym invoice workflow</h2>
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
              <h2 className="text-3xl font-bold mb-4">Fields a gym invoice plugin should support</h2>
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-slate-100 text-slate-700">
                      <th className="p-4 rounded-l-xl">Field</th>
                      <th className="p-4 rounded-r-xl">Why it matters</th>
                    </tr>
                  </thead>
                  <tbody>
                    {requiredFields.map(([field, reason]) => (
                      <tr key={field} className="border-b border-slate-100">
                        <td className="p-4 font-semibold text-slate-900">{field}</td>
                        <td className="p-4 text-slate-700">{reason}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div className="bg-emerald-50 border border-emerald-100 rounded-2xl p-8">
              <h2 className="text-3xl font-bold mb-5">Qualification score for gyms and fitness studios</h2>
              <p className="text-slate-700 leading-relaxed mb-5">
                Score 3+ points and the store likely has enough invoice support cost to justify a focused €49 early-access review.
              </p>
              <div className="space-y-3">
                {scoring.map((item) => (
                  <div key={item.signal} className="flex items-start justify-between gap-4 rounded-xl bg-white border border-emerald-100 p-4">
                    <span className="text-slate-800">{item.signal}</span>
                    <span className="font-bold text-emerald-700 whitespace-nowrap">{item.score}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-2xl border shadow-sm p-8">
              <h2 className="text-3xl font-bold mb-6">Use cases to map before buying</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {useCases.map((item) => (
                  <div key={item.title} className="rounded-xl border border-slate-200 bg-slate-50 p-5">
                    <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                    <p className="text-slate-700 leading-relaxed">{item.text}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-slate-950 text-white rounded-2xl p-8">
              <h2 className="text-3xl font-bold mb-4">Early-access offer: €49 gym membership invoice workflow review</h2>
              <p className="text-slate-200 leading-relaxed mb-5">
                Send the store URL, country, membership types, corporate billing needs, VAT/BTW fields, renewal issues, freeze/cancellation cases, and credit-note requirements. The reply can map the current WooCommerce setup to the Lattice Invoices early-access workflow.
              </p>
              <a href={mailto} className="inline-flex bg-emerald-500 text-white px-7 py-3 rounded-xl font-semibold hover:bg-emerald-400 transition">
                Send gym invoice fit request
              </a>
            </div>

            <div className="bg-white rounded-2xl border shadow-sm p-8">
              <h2 className="text-3xl font-bold mb-6">FAQ</h2>
              <div className="space-y-5">
                {faq.map((item) => (
                  <div key={item.q}>
                    <h3 className="font-bold text-lg mb-2">{item.q}</h3>
                    <p className="text-slate-700 leading-relaxed">{item.a}</p>
                  </div>
                ))}
              </div>
            </div>
          </article>

          <aside className="space-y-6">
            <div className="bg-white rounded-2xl border shadow-sm p-6 sticky top-6">
              <p className="text-sm uppercase tracking-[0.25em] text-emerald-700 font-semibold mb-2">Gym invoice checklist</p>
              <h2 className="text-2xl font-bold mb-4">Before installing any invoice plugin</h2>
              <ul className="space-y-3 text-slate-700 mb-6">
                <li>✓ Identify memberships, class packs, corporate plans, and one-off products.</li>
                <li>✓ Confirm VAT/BTW fields, invoice email, PO/reference, and company billing needs.</li>
                <li>✓ Decide how freezes, cancellations, refunds, and unused sessions create credit notes.</li>
                <li>✓ Check whether members need invoice PDFs inside My Account.</li>
              </ul>
              <a href={mailto} className="block text-center bg-emerald-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-emerald-700 transition mb-3">
                Request €49 gym invoice review
              </a>
              <Link href="/tools/woocommerce-invoice-fit-check" className="block text-center bg-blue-50 border border-blue-200 text-blue-800 px-6 py-3 rounded-xl font-semibold hover:border-blue-500 transition mb-3">
                Score invoice fit
              </Link>
              <Link href="/demo/lattice-invoices" className="block text-center border border-slate-200 px-6 py-3 rounded-xl font-semibold hover:border-emerald-400 transition mb-3">
                View invoice workflow demo
              </Link>
              <Link href="/blog/woocommerce-invoice-plugin-for-memberships" className="block text-center border border-slate-200 px-6 py-3 rounded-xl font-semibold hover:border-emerald-400 transition mb-3">
                Membership invoice guide
              </Link>
              <Link href="/blog/woocommerce-subscription-invoice-plugin" className="block text-center border border-slate-200 px-6 py-3 rounded-xl font-semibold hover:border-emerald-400 transition">
                Subscription invoice guide
              </Link>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}
