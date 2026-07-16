import type { Metadata } from "next";
import Link from "next/link";

const SITE_URL = "https://latticeplugins.com";
const SLUG = "/blog/woocommerce-travel-agency-invoices";

export const metadata: Metadata = {
  title: "WooCommerce Travel Agency Invoices — Deposits, VAT, PDFs",
  description:
    "Buyer-intent guide for travel agencies, tour operators, retreat organisers, and booking stores that need WooCommerce VAT invoices, deposits, passenger references, PDFs, and credit notes.",
  alternates: {
    canonical: `${SITE_URL}${SLUG}`,
  },
  openGraph: {
    title: "WooCommerce travel agency invoices for tours, deposits, and VAT",
    description:
      "How travel and tour WooCommerce stores should handle deposits, passenger or booking references, VAT evidence, invoice PDFs, refunds, and credit notes.",
    url: `${SITE_URL}${SLUG}`,
    siteName: "Lattice Plugins",
    type: "article",
  },
};

const painPoints = [
  {
    title: "Deposits and balances need a clean invoice story",
    detail:
      "A customer may pay a deposit now, a balance later, and ask for a company invoice after the booking is confirmed. Generic receipts rarely explain that flow clearly enough for finance teams.",
    fix: "Capture payer type, VAT details, booking reference, traveller/group name, deposit status, and final-balance context before or during checkout.",
  },
  {
    title: "Passenger and booking references cannot stay in inbox threads",
    detail:
      "Tour operators often need invoice PDFs to reference a booking code, trip date, destination, passenger group, retreat name, or agency PO number. If that data is not structured, support has to rebuild the audit trail manually.",
    fix: "Store booking and trip references as WooCommerce order metadata that can be used by invoice PDFs, customer emails, and accountant exports.",
  },
  {
    title: "Cancelled trips and partial refunds need credit notes",
    detail:
      "Travel bookings often change. A cancellation, passenger reduction, voucher conversion, or partial refund should not overwrite the original invoice PDF.",
    fix: "Keep the original invoice, refund amount, VAT correction, and linked credit note together on the WooCommerce order.",
  },
];

const featureRows = [
  ["B2B and traveller billing fields", "Company name, VAT/BTW number, billing country, invoice email, passenger group, booking reference, and PO/reference fields."],
  ["Deposit and balance visibility", "Invoice wording should show whether the order is a deposit, final payment, add-on, voucher, or package balance."],
  ["Trip or booking metadata", "Destination, tour date, retreat name, booking code, room/package type, or agency reference stored with the invoice data."],
  ["PDF invoices and customer downloads", "Attach invoice PDFs to WooCommerce emails and keep a customer-facing copy available after the trip is booked."],
  ["Refund credit notes", "Cancelled bookings, voucher changes, passenger removals, and partial refunds need linked credit notes rather than edited invoices."],
  ["Accountant handoff", "Invoice number, VAT amount, payment method, refund relation, booking reference, and PDF URL should be exportable without spreadsheet cleanup."],
];

const scenarioRows = [
  {
    scenario: "Tour deposit paid online",
    risk: "The customer pays quickly but the company VAT details and booking reference arrive later by email.",
    workflow: "Ask for business billing data, invoice email, booking code, and trip reference before the deposit order is paid.",
  },
  {
    scenario: "Final balance payment",
    risk: "The second payment creates a generic receipt that is not clearly tied to the original deposit invoice.",
    workflow: "Store deposit/final-balance context and keep invoice numbers, order IDs, and booking references connected.",
  },
  {
    scenario: "Corporate retreat booking",
    risk: "Finance expects a PO number, attendee count, and company invoice PDF before approving reimbursement.",
    workflow: "Capture PO/reference fields at checkout and include them on the invoice PDF and export.",
  },
  {
    scenario: "Cancellation or passenger reduction",
    risk: "Support edits or regenerates invoice PDFs after a refund, creating messy accounting evidence.",
    workflow: "Issue linked credit notes for refund events while preserving the original invoice trail.",
  },
];

const qualification = [
  { signal: "You sell tours, retreats, bookings, deposits, vouchers, or travel add-ons through WooCommerce", score: "+2" },
  { signal: "Companies, schools, agencies, or groups ask for VAT invoices after booking", score: "+2" },
  { signal: "Booking codes, trip dates, passenger groups, or PO references must appear on the invoice", score: "+1" },
  { signal: "Cancellations, vouchers, or passenger changes create partial refunds", score: "+2" },
  { signal: "Support manually creates PDFs for travellers, agents, or finance teams", score: "+1" },
];

const internalLinks = [
  { href: "/woocommerce-eu-vat-invoices", label: "Lattice Invoices €49 early-access offer" },
  { href: "/demo/lattice-invoices", label: "View invoice workflow demo" },
  { href: "/tools/woocommerce-invoice-setup-brief", label: "Generate an invoice setup brief" },
  { href: "/tools/woocommerce-invoice-roi-calculator", label: "Calculate invoice admin ROI" },
  { href: "/blog/woocommerce-event-ticket-invoices", label: "Event ticket invoice workflow" },
  { href: "/blog/woocommerce-partial-payment-invoices", label: "Partial payment and deposit invoices" },
  { href: "/blog/woocommerce-credit-notes-refunds", label: "Credit notes for refunds" },
  { href: "/blog/woocommerce-business-customer-invoices", label: "Business customer invoice workflow" },
];

const faq = [
  {
    q: "Can a travel agency issue WooCommerce VAT invoices for bookings and deposits?",
    a: "Yes, but the invoice workflow should capture business billing data, booking references, deposit or balance context, VAT evidence, and refund credit notes from the WooCommerce order rather than relying on manual PDFs.",
  },
  {
    q: "Should deposits and final balances use separate invoice references?",
    a: "That depends on the store and accounting workflow. The important requirement is that deposit orders, final balance orders, invoice numbers, and credit notes remain clearly linked for the customer and accountant.",
  },
  {
    q: "What makes Lattice Invoices relevant for travel and tour stores?",
    a: "The €49 early-access workflow focuses on WooCommerce-native VAT fields, PDF delivery, customer downloads, booking/reference metadata, credit notes, and accountant handoff instead of only PDF styling.",
  },
  {
    q: "What should a travel store send before requesting early access?",
    a: "Send the store URL, country, booking types, B2B/B2C mix, deposit/balance workflow, cancellation/refund workflow, required booking fields, invoice-number format, and accounting export needs.",
  },
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "WooCommerce travel agency invoices for tours, deposits, and VAT",
  description:
    "Buyer-intent guide for travel agencies and tour operators that need VAT-ready WooCommerce invoices, PDF delivery, booking references, deposits, and credit notes.",
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
  "mailto:support@latticeplugins.com?subject=WooCommerce%20travel%20agency%20invoice%20workflow%20review&body=Hi%20Lattice%2C%0A%0AI%20want%20to%20check%20whether%20Lattice%20Invoices%20fits%20a%20travel%20agency%20or%20tour%20booking%20WooCommerce%20workflow.%0A%0AStore%20URL%3A%20%0ACountry%3A%20%0ATravel%2Ftour%20products%20sold%3A%20%0AB2B%2FB2C%20split%3A%20%0ADeposits%20or%20balance%20payments%3A%20%0ABooking%2Fpassenger%20fields%20needed%3A%20%0AVAT%2FBTW%20fields%20needed%3A%20%0AInvoice%20number%20format%3A%20%0ACancellations%2Fcredit%20notes%20needed%3A%20%0AAccounting%20tool%3A%20";

export default function WooCommerceTravelAgencyInvoicesPage() {
  return (
    <main className="min-h-screen bg-slate-50">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <section className="bg-gradient-to-br from-slate-950 via-sky-950 to-emerald-900 text-white">
        <div className="max-w-6xl mx-auto px-6 py-16 lg:py-20 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div>
            <p className="uppercase tracking-[0.3em] text-sm text-sky-200 mb-4">Travel agency invoice workflow</p>
            <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
              WooCommerce invoices for tours, deposits, retreats, and travel bookings.
            </h1>
            <p className="text-xl text-sky-50 leading-relaxed mb-8">
              If your travel agency, retreat business, or tour operator sells bookings through WooCommerce, invoice fields must capture VAT details, booking context, deposits, balances, and refund evidence before support has to fix it manually.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href={mailto} className="bg-green-400 text-slate-950 px-8 py-4 rounded-xl font-semibold hover:bg-green-300 transition shadow-lg text-center">
                Request €49 travel invoice review
              </a>
              <Link href="/woocommerce-eu-vat-invoices" className="bg-white/10 border border-white/20 text-white px-8 py-4 rounded-xl font-semibold hover:bg-white/15 transition text-center">
                View Lattice Invoices offer
              </Link>
            </div>
          </div>

          <div className="bg-white text-slate-900 rounded-2xl shadow-2xl p-6 lg:p-8">
            <p className="text-sm uppercase tracking-widest text-slate-500 mb-2">Buyer qualification</p>
            <h2 className="text-2xl font-bold mb-4">Should this travel store request the €49 early-access review?</h2>
            <div className="space-y-3">
              {qualification.map((item) => (
                <div key={item.signal} className="flex gap-3 items-start border rounded-xl p-4">
                  <span className="bg-sky-100 text-sky-700 px-3 py-1 rounded-full text-sm font-bold">{item.score}</span>
                  <p className="text-slate-700">{item.signal}</p>
                </div>
              ))}
            </div>
            <p className="text-sm text-slate-600 mt-5">
              Score 3+ points? The store probably needs more than a generic PDF receipt plugin.
            </p>
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-14">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <article className="lg:col-span-2 space-y-8">
            <div className="bg-white rounded-2xl border shadow-sm p-8">
              <h2 className="text-3xl font-bold mb-4">Why travel invoices need booking context</h2>
              <p className="text-slate-700 leading-relaxed mb-4">
                Travel and booking orders often represent a trip, retreat, tour, deposit, balance payment, voucher, or add-on. The payer may be an individual, employer, school, travel agency, or corporate finance team.
              </p>
              <p className="text-slate-700 leading-relaxed">
                The safer workflow is to collect invoice context before checkout, generate the PDF from WooCommerce order data, and keep cancellations or passenger changes as linked credit notes instead of editing issued invoices.
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

            <div className="bg-sky-50 border border-sky-100 rounded-2xl p-8">
              <h2 className="text-3xl font-bold mb-5">Feature checklist before choosing a plugin</h2>
              <div className="overflow-x-auto">
                <table className="min-w-full text-left border-separate border-spacing-y-3">
                  <thead>
                    <tr className="text-sm uppercase tracking-widest text-sky-800">
                      <th className="p-4 rounded-l-xl bg-white">Requirement</th>
                      <th className="p-4 rounded-r-xl bg-white">Why it matters for travel businesses</th>
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
              <h2 className="text-3xl font-bold mb-5">Travel invoice scenarios</h2>
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
                If booking references, deposits, VAT numbers, and credit notes already create support work, send one structured fit-check email. Lattice can confirm whether the €49 early-access workflow is relevant before you spend time wiring a generic invoice stack together.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href={mailto} className="bg-green-400 text-slate-950 px-7 py-3 rounded-xl font-semibold hover:bg-green-300 transition text-center">
                  Send travel invoice fit request
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
              <h2 className="text-2xl font-bold mb-4">Early-access request</h2>
              <p className="text-slate-700 mb-5">
                Send the store URL, country, booking model, deposit/balance workflow, VAT fields, booking references, and refund/credit-note needs.
              </p>
              <a href={mailto} className="block text-center bg-blue-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-blue-700 transition mb-3">
                Request €49 review
              </a>
              <Link href="/demo/lattice-invoices" className="block text-center border border-slate-200 px-6 py-3 rounded-xl font-semibold hover:border-blue-400 transition mb-3">
                View demo workflow
              </Link>
              <Link href="/woocommerce-eu-vat-invoices" className="block text-center border border-slate-200 px-6 py-3 rounded-xl font-semibold hover:border-blue-400 transition">
                View Lattice Invoices offer
              </Link>
            </div>

            <div className="bg-white rounded-2xl border shadow-sm p-6">
              <h2 className="text-xl font-bold mb-4">Related invoice guides</h2>
              <div className="space-y-3">
                {internalLinks.map((link) => (
                  <Link key={link.href} href={link.href} className="block text-blue-700 font-semibold hover:text-blue-900">
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
