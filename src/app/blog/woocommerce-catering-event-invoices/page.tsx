import type { Metadata } from "next";
import Link from "next/link";

const SITE_URL = "https://latticeplugins.com";
const SLUG = "/blog/woocommerce-catering-event-invoices";

export const metadata: Metadata = {
  title: "WooCommerce Catering Event Invoices — Deposits, VAT, PDFs",
  description:
    "Buyer-intent guide for caterers, event kitchens, and corporate hospitality stores that need WooCommerce VAT invoices, deposits, event references, PDF delivery, and credit notes.",
  alternates: {
    canonical: `${SITE_URL}${SLUG}`,
  },
  openGraph: {
    title: "WooCommerce catering event invoices for deposits, VAT, and corporate events",
    description:
      "How catering and event-food WooCommerce stores should handle quote deposits, menu changes, delivery references, VAT details, invoice PDFs, cancellations, and refund credit notes.",
    url: `${SITE_URL}${SLUG}`,
    siteName: "Lattice Plugins",
    type: "article",
  },
};

const painPoints = [
  {
    title: "Corporate catering buyers need invoices before the event is forgotten",
    detail:
      "Catering orders often involve an office manager, finance team, venue contact, purchase-order number, menu package, headcount, delivery window, and final balance. A basic WooCommerce receipt usually misses the context finance asks for later.",
    fix: "Capture company billing data, VAT/BTW number, invoice email, PO/reference, event date, venue, headcount, and deposit status before payment.",
  },
  {
    title: "Deposits, balance payments, and menu changes create messy invoice threads",
    detail:
      "A caterer may collect a deposit, adjust guest count, add drinks or staff hours, then invoice the balance. If those changes live in emails, support has to rebuild the invoice manually.",
    fix: "Keep event metadata, deposits, balance context, menu add-ons, and customer references as structured WooCommerce order fields that can feed the invoice PDF.",
  },
  {
    title: "Cancellations and reduced headcount need credit notes",
    detail:
      "Corporate events get cancelled, headcount drops, menus change, or delivery fails. Editing the original invoice after a refund weakens the audit trail.",
    fix: "Issue a linked credit note for refunds or corrections while preserving the original invoice number, VAT totals, event reference, and PDF evidence.",
  },
];

const featureRows = [
  ["Corporate billing fields", "Company name, VAT/BTW number, invoice email, PO/reference, billing country, and accounts-payable contact for business catering buyers."],
  ["Event and delivery metadata", "Event date, venue, delivery address, setup window, menu/package, headcount, organiser name, and internal quote reference stored with the order."],
  ["Deposit and balance visibility", "Deposit amount, remaining balance, final payment due date, menu changes, staffing extras, and transport fees should be traceable without editing PDFs."],
  ["PDF invoices and customer downloads", "Attach invoices to WooCommerce emails and keep event invoices available from My Account for finance teams after the event."],
  ["Refund credit notes", "Cancelled events, reduced headcount, returned deposits, or correction refunds need credit notes linked to the original invoice."],
  ["Accountant handoff", "Invoice number, VAT amount, payment method, event reference, refund relation, and PDF URL should export cleanly for bookkeeping."],
];

const scenarioRows = [
  {
    scenario: "Corporate lunch booking",
    risk: "The office manager pays online, then finance asks for the invoice to include the legal company name, VAT number, PO reference, and event date.",
    workflow: "Ask for company billing data, invoice email, VAT ID, PO/reference, event date, and delivery contact at checkout before payment.",
  },
  {
    scenario: "Deposit now, final balance after menu lock",
    risk: "The deposit, final headcount, menu extras, and balance invoice become disconnected across emails and order notes.",
    workflow: "Keep deposit/final-balance context, headcount changes, and event references on the WooCommerce order trail.",
  },
  {
    scenario: "Venue delivery or staffing extras",
    risk: "Delivery fees, setup staff, equipment rental, or late changes are merged into generic line items that finance cannot reconcile.",
    workflow: "Keep fee labels, VAT/tax handling, event metadata, and PDF wording explicit enough for accountant review.",
  },
  {
    scenario: "Cancellation or reduced guest count",
    risk: "Support edits the original invoice after a partial refund, which makes the event invoice trail hard to defend.",
    workflow: "Issue a separate credit note linked to the original catering invoice and store the refund/correction reason with the order.",
  },
];

const qualification = [
  { signal: "You sell catering packages, event food, corporate lunches, or hospitality bookings through WooCommerce", score: "+2" },
  { signal: "Companies or venue organisers ask for corrected VAT invoices after checkout", score: "+2" },
  { signal: "Event dates, headcount, venue references, delivery windows, or PO numbers must appear on invoices", score: "+1" },
  { signal: "Deposits, final balances, cancellations, or headcount changes create refund work", score: "+2" },
  { signal: "Support manually recreates catering invoice PDFs for finance teams or accountants", score: "+1" },
];

const internalLinks = [
  { href: "/woocommerce-eu-vat-invoices", label: "Lattice Invoices €49 early-access offer" },
  { href: "/demo/lattice-invoices", label: "View invoice workflow demo" },
  { href: "/tools/woocommerce-invoice-setup-brief", label: "Generate an invoice setup brief" },
  { href: "/tools/woocommerce-invoice-roi-calculator", label: "Calculate invoice admin ROI" },
  { href: "/blog/woocommerce-business-customer-invoices", label: "Business customer invoice workflow" },
  { href: "/blog/woocommerce-event-ticket-invoices", label: "Event ticket invoice workflow" },
  { href: "/blog/woocommerce-partial-payment-invoices", label: "Partial payment and deposit invoices" },
  { href: "/blog/woocommerce-credit-notes-refunds", label: "Credit notes for refunds" },
];

const faq = [
  {
    q: "Can caterers use WooCommerce for VAT-ready event invoices?",
    a: "Yes, but the invoice workflow should capture company billing data, PO/reference, event date, venue or delivery context, deposit or balance status, VAT/tax details, and refund credit notes from structured WooCommerce order data.",
  },
  {
    q: "Should a catering invoice include event references and headcount?",
    a: "For corporate catering and venue events, usually yes. Event date, venue or delivery address, organiser name, headcount, PO/reference, and invoice email reduce follow-up requests from finance teams.",
  },
  {
    q: "What makes Lattice Invoices relevant for catering stores?",
    a: "The €49 early-access workflow focuses on WooCommerce-native VAT fields, event metadata, PDF delivery, customer downloads, accountant handoff, and linked credit notes rather than only styling a generic receipt PDF.",
  },
  {
    q: "What should a caterer send before requesting early access?",
    a: "Send the store URL, country, catering products sold, B2B/B2C mix, deposit/balance workflow, event fields needed, cancellation/refund workflow, invoice-number format, and accounting export needs.",
  },
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "WooCommerce catering event invoices for deposits, VAT, and corporate events",
  description:
    "Buyer-intent guide for caterers and event-food stores that need VAT-ready WooCommerce invoices, event metadata, deposits, PDFs, and credit notes.",
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
  "mailto:support@latticeplugins.com?subject=WooCommerce%20catering%20event%20invoice%20workflow%20review&body=Hi%20Lattice%2C%0A%0AI%20want%20to%20check%20whether%20Lattice%20Invoices%20fits%20a%20catering%2C%20event%20food%2C%20or%20corporate%20hospitality%20WooCommerce%20workflow.%0A%0AStore%20URL%3A%20%0ACountry%3A%20%0ACatering%20products%20sold%3A%20%0AB2B%2FB2C%20split%3A%20%0ADeposits%20or%20balance%20payments%3A%20%0AEvent%2Fdelivery%20fields%20needed%3A%20%0AVAT%2FBTW%20fields%20needed%3A%20%0AInvoice%20number%20format%3A%20%0ACancellations%2Fcredit%20notes%20needed%3A%20%0AAccounting%20tool%3A%20";

export default function WooCommerceCateringEventInvoicesPage() {
  return (
    <main className="min-h-screen bg-slate-50">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <section className="bg-gradient-to-br from-slate-950 via-blue-950 to-emerald-900 text-white">
        <div className="max-w-6xl mx-auto px-6 py-16 lg:py-20 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div>
            <p className="uppercase tracking-[0.3em] text-sm text-emerald-200 mb-4">Catering event invoice workflow</p>
            <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
              WooCommerce invoices for catering orders, deposits, and corporate events.
            </h1>
            <p className="text-xl text-emerald-50 leading-relaxed mb-8">
              If your catering business sells event food, corporate lunches, venue packages, or hospitality bookings through WooCommerce, invoices must capture VAT details, event context, deposits, delivery references, and refund evidence before support has to repair the PDF manually.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href={mailto} className="bg-green-400 text-slate-950 px-8 py-4 rounded-xl font-semibold hover:bg-green-300 transition shadow-lg text-center">
                Request €49 catering invoice review
              </a>
              <Link href="/woocommerce-eu-vat-invoices" className="bg-white/10 border border-white/20 text-white px-8 py-4 rounded-xl font-semibold hover:bg-white/15 transition text-center">
                View Lattice Invoices offer
              </Link>
            </div>
          </div>

          <div className="bg-white text-slate-900 rounded-2xl shadow-2xl p-6 lg:p-8">
            <p className="text-sm uppercase tracking-widest text-slate-500 mb-2">Buyer qualification</p>
            <h2 className="text-2xl font-bold mb-4">Should this catering store request the €49 early-access review?</h2>
            <div className="space-y-3">
              {qualification.map((item) => (
                <div key={item.signal} className="flex gap-3 items-start border rounded-xl p-4">
                  <span className="bg-emerald-100 text-emerald-700 px-3 py-1 rounded-full text-sm font-bold">{item.score}</span>
                  <p className="text-slate-700">{item.signal}</p>
                </div>
              ))}
            </div>
            <p className="text-sm text-slate-600 mt-5">
              Score 3+ points? The catering workflow probably needs more than a generic receipt PDF.
            </p>
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-14">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <article className="lg:col-span-2 space-y-8">
            <div className="bg-white rounded-2xl border shadow-sm p-8">
              <h2 className="text-3xl font-bold mb-4">Why catering invoices need event context</h2>
              <p className="text-slate-700 leading-relaxed mb-4">
                Catering orders often represent an event, deposit, balance payment, menu package, corporate PO, venue delivery, equipment rental, or cancellation. The payer may be an office manager, agency, event planner, venue, or corporate finance team.
              </p>
              <p className="text-slate-700 leading-relaxed">
                The safer workflow is to collect invoice context before checkout, generate the PDF from WooCommerce order data, and keep cancellations, headcount changes, or deposit refunds as linked credit notes instead of editing issued invoices.
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
              <h2 className="text-3xl font-bold mb-5">Feature checklist before choosing a catering invoice plugin</h2>
              <div className="overflow-x-auto">
                <table className="min-w-full text-left border-separate border-spacing-y-3">
                  <thead>
                    <tr className="text-sm uppercase tracking-widest text-emerald-800">
                      <th className="p-4 rounded-l-xl bg-white">Requirement</th>
                      <th className="p-4 rounded-r-xl bg-white">Why it matters for catering and event businesses</th>
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
              <h2 className="text-3xl font-bold mb-5">Catering invoice scenarios</h2>
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
                If event references, deposits, delivery windows, VAT numbers, and credit notes already create support work, send one structured fit-check email. Lattice can confirm whether the €49 early-access workflow is relevant before you spend time wiring a generic invoice stack together.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href={mailto} className="bg-green-400 text-slate-950 px-7 py-3 rounded-xl font-semibold hover:bg-green-300 transition text-center">
                  Send catering invoice fit request
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
              <h2 className="text-2xl font-bold mb-3">Request a €49 catering invoice workflow review</h2>
              <p className="text-slate-700 leading-relaxed mb-5">
                Include the event flow, country, VAT/BTW fields, deposit/balance rules, event metadata, cancellation workflow, and accounting tool so the reply can be specific.
              </p>
              <a href={mailto} className="block text-center bg-green-600 text-white px-5 py-3 rounded-xl font-semibold hover:bg-green-700 transition mb-3">
                Request €49 catering invoice review
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
