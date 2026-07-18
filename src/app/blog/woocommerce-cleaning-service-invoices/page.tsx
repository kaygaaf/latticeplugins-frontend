import type { Metadata } from "next";
import Link from "next/link";

const SITE_URL = "https://latticeplugins.com";
const SLUG = "/blog/woocommerce-cleaning-service-invoices";

export const metadata: Metadata = {
  title: "WooCommerce Cleaning Service Invoices — VAT, Jobs, PDFs",
  description:
    "Buyer-intent guide for cleaning companies that use WooCommerce and need VAT invoices, site addresses, recurring jobs, purchase orders, PDF delivery, and credit notes.",
  alternates: {
    canonical: `${SITE_URL}${SLUG}`,
  },
  openGraph: {
    title: "WooCommerce cleaning service invoices for contracts, site visits, VAT, and PDFs",
    description:
      "How cleaning, facilities, janitorial, and maintenance-service WooCommerce stores should handle site addresses, recurring contracts, PO numbers, VAT fields, PDF invoices, and credit notes.",
    url: `${SITE_URL}${SLUG}`,
    siteName: "Lattice Plugins",
    type: "article",
  },
};

const painPoints = [
  {
    title: "Cleaning jobs need a service site, not just a billing address",
    detail:
      "A company may pay centrally while the actual cleaning work happens at an office, rental unit, holiday home, clinic, restaurant, warehouse, or construction site.",
    fix: "Collect billing company, VAT/BTW number, invoice email, PO reference, service address, access instructions, job date or recurring schedule, and site contact before the invoice PDF is created.",
  },
  {
    title: "Recurring work creates invoice timing questions",
    detail:
      "Weekly office cleaning, monthly deep cleans, end-of-tenancy jobs, and facilities contracts can involve deposits, prepaid bundles, recurring invoices, or final balance corrections.",
    fix: "Keep recurring schedule, contract period, deposit, balance, job completion status, and invoice period visible on the WooCommerce order trail instead of rebuilding PDFs manually.",
  },
  {
    title: "Cancellations, missed visits, and scope changes need clean credit notes",
    detail:
      "If a customer cancels, changes the job scope, disputes a visit, or receives a partial refund, editing the original invoice weakens the audit trail.",
    fix: "Create refund-linked credit notes that reference the original invoice, service site, period, VAT totals, and correction reason.",
  },
];

const featureRows = [
  ["B2B billing fields", "Company name, VAT/BTW number, invoice email, PO/reference, billing country, and accounts-payable contact for facilities or property clients."],
  ["Service-site metadata", "Cleaning address, site contact, access notes, job date, contract period, location code, building/unit reference, and cleaner/team reference."],
  ["Recurring and contract context", "Weekly, monthly, end-of-tenancy, holiday-let turnover, office, restaurant, clinic, or warehouse cleaning should show the service period clearly."],
  ["Deposit and balance handling", "Deposits, prepaid bundles, final balances, cancellation fees, and extra-hours charges should stay traceable on the invoice trail."],
  ["PDF invoices and customer downloads", "Attach invoices to WooCommerce order emails and make cleaning invoices downloadable later from My Account without support resending PDFs."],
  ["Refund credit notes", "Cancelled visits, partial refunds, scope reductions, or disputed jobs need credit notes linked to the original cleaning invoice."],
];

const scenarioRows = [
  {
    scenario: "Office cleaning contract with monthly invoice",
    risk: "The payer needs VAT number, PO reference, invoice email, service period, and site address, but checkout only stores a consumer-style billing profile.",
    workflow: "Collect company billing details, PO/reference, site address, recurring period, and invoice email before payment or contract renewal.",
  },
  {
    scenario: "End-of-tenancy or holiday-let turnover clean",
    risk: "The order needs property address, booking reference, access instructions, deposit or damage-fee context, and a final PDF invoice for the property manager.",
    workflow: "Store property/unit reference, access notes, booking date, service package, deposit/balance status, VAT treatment, and customer download link.",
  },
  {
    scenario: "Extra hours, supplies, or scope change",
    risk: "Support edits totals after the invoice has been issued, making VAT and customer evidence harder to reconcile.",
    workflow: "Create explicit adjustment lines or a linked credit note instead of overwriting the original cleaning invoice PDF.",
  },
  {
    scenario: "Cancelled visit or missed access",
    risk: "Refunds, cancellation fees, and rebooking credits become inbox notes that the accountant cannot match to the invoice sequence.",
    workflow: "Keep cancellation reason, refund amount, credit-note number, original invoice number, and service site connected to the WooCommerce order.",
  },
];

const qualification = [
  { signal: "You sell office cleaning, end-of-tenancy cleaning, holiday-let turnover, facilities work, or deep-clean packages through WooCommerce", score: "+2" },
  { signal: "Customers need invoices with service site, PO reference, VAT/BTW number, invoice email, or contract period", score: "+2" },
  { signal: "You handle deposits, prepaid bundles, recurring jobs, extra hours, or cancellation fees", score: "+2" },
  { signal: "Refunds, no-access visits, scope reductions, or disputed jobs create credit-note work", score: "+2" },
  { signal: "Support manually resends or corrects cleaning invoice PDFs for property managers or finance teams", score: "+1" },
];

const internalLinks = [
  { href: "/woocommerce-eu-vat-invoices", label: "Lattice Invoices €49 early-access offer" },
  { href: "/demo/lattice-invoices", label: "View invoice workflow demo" },
  { href: "/tools/woocommerce-invoice-setup-brief", label: "Generate an invoice setup brief" },
  { href: "/tools/woocommerce-invoice-fit-check", label: "Score invoice workflow fit" },
  { href: "/blog/woocommerce-b2b-service-invoices", label: "B2B service invoice workflow" },
  { href: "/blog/woocommerce-business-customer-invoices", label: "Business customer invoice workflow" },
  { href: "/blog/woocommerce-recurring-invoices-subscriptions", label: "Recurring invoice workflow" },
  { href: "/blog/woocommerce-credit-notes-refunds", label: "Credit notes for refunds" },
];

const faq = [
  {
    q: "Can cleaning companies use WooCommerce for VAT-ready service invoices?",
    a: "Yes, but the invoice workflow should capture B2B billing details, VAT/BTW number, service address, job date or contract period, PO reference, PDF delivery, customer downloads, and refund credit notes from structured WooCommerce order data.",
  },
  {
    q: "Should cleaning invoices include the service address?",
    a: "Usually yes. Cleaning companies often bill a finance team while work happens at a different site, building, unit, rental property, restaurant, clinic, or warehouse. The service address prevents finance and operations from mismatching invoices.",
  },
  {
    q: "What makes Lattice Invoices relevant for cleaning service stores?",
    a: "The €49 early-access workflow focuses on WooCommerce-native VAT fields, service-site metadata, recurring/deposit context, PDF delivery, customer downloads, accountant handoff, and linked credit notes instead of only styling a generic receipt PDF.",
  },
  {
    q: "What should a cleaning company send before requesting early access?",
    a: "Send the store URL, country, cleaning services sold, B2B/B2C mix, recurring or deposit workflow, service-site fields needed, VAT/BTW fields, invoice-number format, refund/credit-note workflow, and accounting export needs.",
  },
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "WooCommerce cleaning service invoices for contracts, site visits, VAT, and PDFs",
  description:
    "Buyer-intent guide for cleaning and facilities companies that need VAT-ready WooCommerce invoices, service-site metadata, recurring job context, PDFs, and credit notes.",
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
  "mailto:support@latticeplugins.com?subject=WooCommerce%20cleaning%20service%20invoice%20workflow%20review&body=Hi%20Lattice%2C%0A%0AI%20want%20to%20check%20whether%20Lattice%20Invoices%20fits%20a%20cleaning%20service%20WooCommerce%20workflow.%0A%0AStore%20URL%3A%20%0ACountry%3A%20%0ACleaning%20services%20sold%3A%20%0AB2B%2FB2C%20split%3A%20%0ARecurring%20jobs%20or%20deposits%3A%20%0AService-site%20fields%20needed%3A%20%0AVAT%2FBTW%20fields%20needed%3A%20%0AInvoice%20number%20format%3A%20%0ARefund%2Fcredit%20notes%20needed%3A%20%0AAccounting%20tool%3A%20";

export default function WooCommerceCleaningServiceInvoicesPage() {
  return (
    <main className="min-h-screen bg-slate-50">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <section className="bg-gradient-to-br from-slate-950 via-emerald-950 to-teal-900 text-white">
        <div className="max-w-6xl mx-auto px-6 py-16 lg:py-20 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div>
            <p className="uppercase tracking-[0.3em] text-sm text-emerald-200 mb-4">Cleaning service invoice workflow</p>
            <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
              WooCommerce invoices for cleaning services, contracts, and site visits.
            </h1>
            <p className="text-xl text-emerald-50 leading-relaxed mb-8">
              If your cleaning company sells office cleans, tenancy turnovers, deep-clean packages, deposits, or recurring facilities work through WooCommerce, invoices must capture VAT details, service sites, PO references, job periods, PDFs, and credit notes before support has to rebuild the document manually.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href={mailto} className="bg-green-400 text-slate-950 px-8 py-4 rounded-xl font-semibold hover:bg-green-300 transition shadow-lg text-center">
                Request €49 cleaning invoice review
              </a>
              <Link href="/woocommerce-eu-vat-invoices" className="bg-white/10 border border-white/20 text-white px-8 py-4 rounded-xl font-semibold hover:bg-white/15 transition text-center">
                View Lattice Invoices offer
              </Link>
            </div>
          </div>

          <div className="bg-white text-slate-900 rounded-2xl shadow-2xl p-6 lg:p-8">
            <p className="text-sm uppercase tracking-widest text-slate-500 mb-2">Buyer qualification</p>
            <h2 className="text-2xl font-bold mb-4">Should this cleaning company request the €49 early-access review?</h2>
            <div className="space-y-3">
              {qualification.map((item) => (
                <div key={item.signal} className="flex gap-3 items-start border rounded-xl p-4">
                  <span className="bg-emerald-100 text-emerald-700 px-3 py-1 rounded-full text-sm font-bold">{item.score}</span>
                  <p className="text-slate-700">{item.signal}</p>
                </div>
              ))}
            </div>
            <p className="text-sm text-slate-600 mt-5">
              Score 3+ points? The cleaning workflow probably needs more than a generic WooCommerce receipt PDF.
            </p>
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-14">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <article className="lg:col-span-2 space-y-8">
            <div className="bg-white rounded-2xl border shadow-sm p-8">
              <h2 className="text-3xl font-bold mb-4">Why cleaning invoices need job-site context</h2>
              <p className="text-slate-700 leading-relaxed mb-4">
                Cleaning orders often represent a contract period, site visit, building/unit reference, access instruction, deposit, cancellation rule, extra-hours charge, or property-manager requirement. The payer may be a consumer, landlord, office manager, facility manager, or central finance team.
              </p>
              <p className="text-slate-700 leading-relaxed">
                The safer workflow is to collect invoice context before checkout, generate the PDF from WooCommerce order data, and keep missed visits, cancellations, scope changes, or partial refunds as linked credit notes instead of editing issued invoices.
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
              <h2 className="text-3xl font-bold mb-5">Feature checklist before choosing a cleaning invoice plugin</h2>
              <div className="overflow-x-auto">
                <table className="min-w-full text-left border-separate border-spacing-y-3">
                  <thead>
                    <tr className="text-sm uppercase tracking-widest text-emerald-800">
                      <th className="p-4 rounded-l-xl bg-white">Requirement</th>
                      <th className="p-4 rounded-r-xl bg-white">Why it matters for cleaning and facilities businesses</th>
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
              <h2 className="text-3xl font-bold mb-5">Cleaning invoice scenarios</h2>
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
                If service sites, PO references, recurring periods, deposits, extra-hours corrections, cancellation fees, VAT numbers, and credit notes already create support work, send one structured fit-check email. Lattice can confirm whether the €49 early-access workflow is relevant before you spend time combining generic invoice add-ons.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href={mailto} className="bg-green-400 text-slate-950 px-7 py-3 rounded-xl font-semibold hover:bg-green-300 transition text-center">
                  Send cleaning invoice fit request
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
              <h2 className="text-2xl font-bold mb-3">Request a €49 cleaning invoice workflow review</h2>
              <p className="text-slate-700 leading-relaxed mb-5">
                Include cleaning flow, country, VAT/BTW fields, recurring/deposit rules, service-site fields, refund workflow, and accounting tool so the reply can be specific.
              </p>
              <a href={mailto} className="block text-center bg-green-600 text-white px-5 py-3 rounded-xl font-semibold hover:bg-green-700 transition mb-3">
                Request €49 cleaning invoice review
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
