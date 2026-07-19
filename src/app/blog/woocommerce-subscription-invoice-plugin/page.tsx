import type { Metadata } from "next";
import Link from "next/link";

const SITE_URL = "https://latticeplugins.com";
const SLUG = "/blog/woocommerce-subscription-invoice-plugin";

export const metadata: Metadata = {
  title: "WooCommerce Subscription Invoice Plugin — VAT, Renewals, PDFs",
  description:
    "Buyer-intent guide for subscription, membership, and recurring WooCommerce stores that need VAT-ready renewal invoices, failed-payment evidence, credit notes, customer downloads, and accountant export.",
  alternates: {
    canonical: `${SITE_URL}${SLUG}`,
  },
  openGraph: {
    title: "WooCommerce subscription invoice plugin for renewals, VAT, credit notes, and PDFs",
    description:
      "How subscription and membership stores should handle renewal invoice PDFs, VAT metadata, failed payments, proration, refunds, customer downloads, and accountant handoff in WooCommerce.",
    url: `${SITE_URL}${SLUG}`,
    siteName: "Lattice Plugins",
    type: "article",
  },
};

const painPoints = [
  {
    title: "Subscription stores issue invoices after many different events",
    detail:
      "A recurring WooCommerce order may be a first payment, renewal, failed retry, plan upgrade, downgrade, pause, reactivation, manual renewal, or annual prepayment. Generic PDF plugins often treat every order like a one-off receipt.",
    fix: "Capture subscription ID, renewal period, plan name, VAT/BTW number, invoice email, billing country, payment status, and customer download permissions before the invoice PDF is finalized.",
  },
  {
    title: "Failed renewals and payment retries create finance questions",
    detail:
      "Finance teams need to know whether a renewal invoice is paid, pending, cancelled, retried, written off, or replaced. If the PDF does not reflect the subscription state, support has to explain every edge case manually.",
    fix: "Keep renewal status, due date, payment method, retry attempts, and paid/unpaid evidence as structured order data that flows into invoice emails and customer downloads.",
  },
  {
    title: "Upgrades, downgrades, and refunds need credit-note control",
    detail:
      "Mid-cycle plan changes, partial refunds, VAT corrections, cancellation credits, and duplicate renewals should not be solved by editing an issued invoice.",
    fix: "Create linked credit notes for refunds and corrections, keep the original invoice retained, and show the corrected subscription period, VAT totals, and reason for the adjustment.",
  },
];

const featureRows = [
  ["Subscription and renewal metadata", "Subscription ID, renewal number, billing period, plan, seat count, renewal date, payment retry status, and cancellation context should be invoice-ready."],
  ["VAT/BTW and B2B billing fields", "Company name, VAT/BTW number, invoice email, PO reference, billing country, and reverse-charge data must be collected before recurring invoices are generated."],
  ["Paid and unpaid invoice states", "Renewal PDFs should make it clear whether the invoice is paid, pending bank transfer, failed, retried, cancelled, or replaced."],
  ["Credit notes for subscription changes", "Downgrades, cancellation credits, duplicate renewals, VAT corrections, and partial refunds need separate credit notes linked to the original invoice."],
  ["Customer invoice downloads", "Subscribers should be able to download current and historical invoice PDFs from My Account instead of asking support after every renewal."],
  ["Accountant handoff", "Export invoice numbers, VAT totals, billing countries, renewal periods, credit-note links, and payment evidence in a way bookkeeping can reconcile."],
];

const scenarioRows = [
  {
    scenario: "Monthly SaaS or membership renewal",
    risk: "The order renews automatically, but the customer later asks for a VAT ID, company name, invoice email, or renewal period on the PDF.",
    workflow: "Collect business billing and VAT fields before renewal, then generate a renewal invoice with subscription ID, period, payment status, invoice number, and customer download link.",
  },
  {
    scenario: "Annual plan upgrade or downgrade",
    risk: "A mid-cycle change creates prorated charges or credits that are hard to explain on a generic invoice PDF.",
    workflow: "Keep old plan, new plan, proration, credit amount, VAT totals, and correction reason attached to the order and issue a credit note where needed.",
  },
  {
    scenario: "Failed payment retry",
    risk: "The customer sees an invoice email but the payment failed, or finance asks if the invoice is payable, paid, cancelled, or replaced.",
    workflow: "Store due date, retry status, payment method, reminder history, and final payment state so the invoice and follow-up email do not conflict.",
  },
  {
    scenario: "B2B subscription with PO or cost-centre requirements",
    risk: "Accounts payable refuses the renewal invoice because it lacks PO number, department, cost centre, buyer reference, or invoice email routing.",
    workflow: "Collect PO/reference fields and invoice email routing at checkout or account level before recurring PDFs are generated.",
  },
];

const qualification = [
  { signal: "You sell subscriptions, memberships, retainers, software renewals, paid communities, support plans, or recurring services through WooCommerce", score: "+2" },
  { signal: "Subscribers ask for VAT IDs, company names, invoice emails, PO numbers, or billing-period changes after renewal", score: "+2" },
  { signal: "Failed payments, retries, pauses, upgrades, downgrades, or cancellations create invoice support work", score: "+2" },
  { signal: "Refunds, plan credits, duplicate renewals, or VAT corrections require credit notes", score: "+2" },
  { signal: "Your accountant needs a cleaner export of renewal invoices, VAT totals, and credit-note links", score: "+1" },
];

const internalLinks = [
  { href: "/woocommerce-eu-vat-invoices", label: "Lattice Invoices €49 early-access offer" },
  { href: "/demo/lattice-invoices", label: "View invoice workflow demo" },
  { href: "/tools/woocommerce-invoice-setup-brief", label: "Generate an invoice setup brief" },
  { href: "/tools/woocommerce-invoice-fit-check", label: "Score invoice workflow fit" },
  { href: "/blog/woocommerce-recurring-invoices-subscriptions", label: "Recurring invoice workflow" },
  { href: "/blog/woocommerce-invoice-plugin-for-memberships", label: "Membership invoice workflow" },
  { href: "/blog/woocommerce-software-license-invoices", label: "Software license invoices" },
  { href: "/blog/woocommerce-invoice-due-dates", label: "Invoice due dates and payment terms" },
  { href: "/blog/woocommerce-credit-notes-refunds", label: "Credit notes for refunds" },
];

const faq = [
  {
    q: "Do WooCommerce subscriptions need a different invoice workflow?",
    a: "Usually yes. Renewal invoices need subscription ID, billing period, payment status, VAT/BTW fields, customer downloads, failed-payment context, and credit-note handling for upgrades, downgrades, cancellations, and refunds.",
  },
  {
    q: "Should renewal invoices be generated before or after payment?",
    a: "It depends on the payment method. Card renewals often need final paid invoices after capture, while bank-transfer or net-terms workflows may need proforma or payable invoice timing before payment. The important part is to keep status, due date, and final invoice evidence consistent.",
  },
  {
    q: "What makes Lattice Invoices relevant for subscription stores?",
    a: "The €49 early-access workflow focuses on WooCommerce-native VAT fields, renewal metadata, paid/unpaid invoice state, PDF delivery, My Account downloads, accountant handoff, and linked credit notes rather than only styling a receipt PDF.",
  },
  {
    q: "What should a subscription business send before requesting early access?",
    a: "Send the store URL, country, subscription plugin, payment methods, renewal frequency, B2B/B2C mix, VAT/BTW fields, invoice-number format, failed-payment workflow, refund/credit-note needs, and accounting export requirements.",
  },
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "WooCommerce subscription invoice plugin for renewals, VAT, credit notes, and PDFs",
  description:
    "Buyer-intent guide for subscription and membership stores that need VAT-ready renewal invoices, failed-payment evidence, customer downloads, accountant export, and credit notes.",
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
  "mailto:support@latticeplugins.com?subject=WooCommerce%20subscription%20invoice%20plugin%20workflow%20review&body=Hi%20Lattice%2C%0A%0AI%20want%20to%20check%20whether%20Lattice%20Invoices%20fits%20a%20subscription%20WooCommerce%20workflow.%0A%0AStore%20URL%3A%20%0ACountry%3A%20%0ASubscription%20plugin%3A%20%0APayment%20methods%3A%20%0ARenewal%20frequency%3A%20%0AB2B%2FB2C%20split%3A%20%0AVAT%2FBTW%20fields%20needed%3A%20%0AInvoice%20number%20format%3A%20%0AFailed-payment%20workflow%3A%20%0ARefund%2Fcredit%20notes%20needed%3A%20%0AAccounting%20tool%3A%20";

export default function WooCommerceSubscriptionInvoicePluginPage() {
  return (
    <main className="min-h-screen bg-slate-50">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <section className="bg-gradient-to-br from-slate-950 via-blue-950 to-emerald-900 text-white">
        <div className="max-w-6xl mx-auto px-6 py-16 lg:py-20 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div>
            <p className="uppercase tracking-[0.3em] text-sm text-emerald-200 mb-4">Subscription invoice workflow</p>
            <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
              WooCommerce subscription invoice plugin for renewals, VAT, and credit notes.
            </h1>
            <p className="text-xl text-emerald-50 leading-relaxed mb-8">
              Subscription stores need more than a receipt PDF. Renewal invoices must carry billing periods, VAT/BTW data, payment status, failed-payment context, customer downloads, accountant exports, and correction evidence when plans change.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href={mailto} className="bg-green-400 text-slate-950 px-8 py-4 rounded-xl font-semibold hover:bg-green-300 transition shadow-lg text-center">
                Request €49 subscription invoice review
              </a>
              <Link href="/woocommerce-eu-vat-invoices" className="bg-white/10 border border-white/20 text-white px-8 py-4 rounded-xl font-semibold hover:bg-white/15 transition text-center">
                View Lattice Invoices offer
              </Link>
            </div>
          </div>

          <div className="bg-white text-slate-900 rounded-2xl shadow-2xl p-6 lg:p-8">
            <p className="text-sm uppercase tracking-widest text-slate-500 mb-2">Buyer qualification</p>
            <h2 className="text-2xl font-bold mb-4">Should this subscription store request the €49 early-access review?</h2>
            <div className="space-y-3">
              {qualification.map((item) => (
                <div key={item.signal} className="flex gap-3 items-start border rounded-xl p-4">
                  <span className="bg-emerald-100 text-emerald-700 px-3 py-1 rounded-full text-sm font-bold">{item.score}</span>
                  <p className="text-slate-700">{item.signal}</p>
                </div>
              ))}
            </div>
            <p className="text-sm text-slate-600 mt-5">
              Score 3+ points? The renewal workflow probably needs more than a generic WooCommerce invoice PDF plugin.
            </p>
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-14">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <article className="lg:col-span-2 space-y-8">
            <div className="bg-white rounded-2xl border shadow-sm p-8">
              <h2 className="text-3xl font-bold mb-4">Why subscription invoices need renewal context</h2>
              <p className="text-slate-700 leading-relaxed mb-4">
                A subscription order can be a first purchase, renewal, manual payment, failed retry, yearly prepayment, prorated upgrade, downgrade credit, or cancellation adjustment. The invoice has to explain the billing period and payment state without support manually rewriting PDFs.
              </p>
              <p className="text-slate-700 leading-relaxed">
                The safer workflow is to collect B2B billing and VAT fields before checkout or renewal, generate PDFs from structured WooCommerce subscription data, and use linked credit notes for plan changes, duplicate renewals, refunds, and VAT corrections.
              </p>
            </div>

            <div className="grid gap-4">
              {painPoints.map((item) => (
                <div key={item.title} className="bg-white rounded-2xl border shadow-sm p-6">
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  <p className="text-slate-700 leading-relaxed mb-2">{item.detail}</p>
                  <p className="text-slate-800 leading-relaxed"><strong>Better workflow:</strong> {item.fix}</p>
                </div>
              ))}
            </div>

            <div className="bg-emerald-50 border border-emerald-100 rounded-2xl p-8">
              <h2 className="text-3xl font-bold mb-5">Feature checklist before choosing a subscription invoice plugin</h2>
              <div className="overflow-x-auto">
                <table className="min-w-full text-left border-separate border-spacing-y-3">
                  <thead>
                    <tr className="text-sm uppercase tracking-widest text-emerald-800">
                      <th className="p-4 rounded-l-xl bg-white">Requirement</th>
                      <th className="p-4 rounded-r-xl bg-white">Why it matters for subscription and membership stores</th>
                    </tr>
                  </thead>
                  <tbody>
                    {featureRows.map(([feature, reason]) => (
                      <tr key={feature} className="bg-white shadow-sm align-top">
                        <td className="p-4 rounded-l-xl font-semibold text-slate-900">{feature}</td>
                        <td className="p-4 rounded-r-xl text-slate-700">{reason}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div className="bg-white rounded-2xl border shadow-sm p-8">
              <h2 className="text-3xl font-bold mb-5">Subscription invoice scenarios</h2>
              <div className="grid gap-4">
                {scenarioRows.map((row) => (
                  <div key={row.scenario} className="border rounded-xl p-5">
                    <h3 className="text-xl font-bold mb-2">{row.scenario}</h3>
                    <p className="text-slate-700 leading-relaxed mb-2"><strong>Risk:</strong> {row.risk}</p>
                    <p className="text-slate-800 leading-relaxed"><strong>Better workflow:</strong> {row.workflow}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-slate-950 text-white rounded-2xl p-8">
              <h2 className="text-3xl font-bold mb-4">Fastest path to a purchase decision</h2>
              <p className="text-slate-200 leading-relaxed mb-6">
                If renewal invoices, failed payments, VAT fields, subscription upgrades, downgrades, customer downloads, and credit notes already create support work, send one structured fit-check email. Lattice can confirm whether the €49 early-access workflow fits before you buy another generic PDF add-on.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href={mailto} className="bg-green-400 text-slate-950 px-7 py-3 rounded-xl font-semibold hover:bg-green-300 transition text-center">
                  Send subscription invoice fit request
                </a>
                <Link href="/tools/woocommerce-invoice-setup-brief" className="bg-white/10 border border-white/20 px-7 py-3 rounded-xl font-semibold hover:bg-white/15 transition text-center">
                  Generate setup brief first
                </Link>
              </div>
            </div>

            <div className="bg-white rounded-2xl border shadow-sm p-8">
              <h2 className="text-3xl font-bold mb-5">FAQ</h2>
              <div className="space-y-5">
                {faq.map((item) => (
                  <div key={item.q} className="border-b last:border-b-0 pb-5 last:pb-0">
                    <h3 className="text-xl font-bold mb-2">{item.q}</h3>
                    <p className="text-slate-700 leading-relaxed">{item.a}</p>
                  </div>
                ))}
              </div>
            </div>
          </article>

          <aside className="space-y-6">
            <div className="bg-white rounded-2xl border shadow-sm p-6 sticky top-6">
              <p className="text-sm uppercase tracking-widest text-slate-500 mb-2">Early access CTA</p>
              <h2 className="text-2xl font-bold mb-3">Request a €49 subscription invoice workflow review</h2>
              <p className="text-slate-700 leading-relaxed mb-5">
                Include the subscription plugin, renewal frequency, payment methods, VAT fields, failed-payment flow, credit-note needs, and accounting tool so the reply can be specific.
              </p>
              <a href={mailto} className="block text-center bg-green-600 text-white px-5 py-3 rounded-xl font-semibold hover:bg-green-700 transition mb-3">
                Request €49 subscription invoice review
              </a>
              <Link href="/woocommerce-eu-vat-invoices" className="block text-center border border-slate-200 px-5 py-3 rounded-xl font-semibold hover:border-blue-400 transition">
                View core offer
              </Link>
            </div>

            <div className="bg-white rounded-2xl border shadow-sm p-6">
              <h2 className="text-xl font-bold mb-4">Related invoice resources</h2>
              <div className="space-y-3">
                {internalLinks.map((link) => (
                  <Link key={link.href} href={link.href} className="block border rounded-xl px-4 py-3 text-slate-700 hover:border-emerald-500 hover:text-emerald-700 transition">
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}
