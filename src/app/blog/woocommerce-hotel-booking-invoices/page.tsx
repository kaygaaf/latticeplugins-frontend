import type { Metadata } from "next";
import Link from "next/link";

const SITE_URL = "https://latticeplugins.com";
const SLUG = "/blog/woocommerce-hotel-booking-invoices";

export const metadata: Metadata = {
  title: "WooCommerce Hotel Booking Invoices — Deposits, VAT, PDFs",
  description:
    "Buyer-intent guide for hotels, B&Bs, guesthouses, and accommodation booking stores that need WooCommerce VAT invoices, deposits, tourist tax context, PDF delivery, and credit notes.",
  alternates: {
    canonical: `${SITE_URL}${SLUG}`,
  },
  openGraph: {
    title: "WooCommerce hotel booking invoices for deposits, VAT, and stays",
    description:
      "How accommodation WooCommerce stores should handle booking references, deposits, tourist tax, VAT details, invoice PDFs, cancellations, and refund credit notes.",
    url: `${SITE_URL}${SLUG}`,
    siteName: "Lattice Plugins",
    type: "article",
  },
};

const painPoints = [
  {
    title: "Room deposits and final balances need invoice context",
    detail:
      "A hotel booking may include a deposit, balance payment, room upgrade, city tax, breakfast add-on, or corporate stay. A generic WooCommerce receipt rarely gives finance teams enough context.",
    fix: "Capture business billing details, stay dates, booking reference, guest/company name, deposit status, and invoice email before the order is paid.",
  },
  {
    title: "Tourist tax and extras must not disappear into order notes",
    detail:
      "Accommodation invoices often need to separate room revenue, VAT, local tourist tax, minibar or service extras, and refunds. If those details are only in notes, the accountant has to rebuild the stay manually.",
    fix: "Store booking/stay metadata as structured WooCommerce order fields that can feed the invoice PDF and export.",
  },
  {
    title: "Cancellations need credit notes, not edited PDFs",
    detail:
      "Hotels and B&Bs deal with no-shows, partial refunds, voucher conversions, and date changes. The original invoice should stay intact when a refund happens.",
    fix: "Link refund credit notes to the original booking invoice while preserving invoice number, VAT totals, booking reference, and PDF evidence.",
  },
];

const featureRows = [
  ["Corporate billing fields", "Company name, VAT/BTW number, billing country, invoice email, PO/reference, and guest/company distinction for business stays."],
  ["Booking and stay metadata", "Reservation number, arrival/departure dates, room/package, guest name, agency reference, and deposit/balance context stored with the order."],
  ["Tourist tax and extras visibility", "Room price, VAT amount, local tax, breakfast/package extras, cancellation fees, and deposits should be traceable without manual PDF edits."],
  ["PDF invoices and customer downloads", "Attach invoices to WooCommerce emails and keep a downloadable copy available after the stay or booking confirmation."],
  ["Refund credit notes", "Cancellations, no-show fees, voucher conversions, and partial refunds need linked credit notes rather than overwritten invoice PDFs."],
  ["Accountant handoff", "Invoice number, VAT amount, payment method, stay reference, refund relation, and PDF URL should be exportable without inbox archaeology."],
];

const scenarioRows = [
  {
    scenario: "Corporate room booking",
    risk: "The guest pays online, then accounts payable asks support to reissue the invoice to the company with VAT details and PO reference.",
    workflow: "Ask for company billing data, VAT ID, invoice email, and PO/reference at checkout before payment.",
  },
  {
    scenario: "Deposit now, balance later",
    risk: "The deposit invoice, final balance, and booking confirmation are disconnected across multiple order emails.",
    workflow: "Keep deposit/final-balance context, booking reference, and invoice numbers linked on the WooCommerce order trail.",
  },
  {
    scenario: "Tourist tax or local fee",
    risk: "Local tax, cleaning fee, or package extras are merged into a generic line item that finance has to explain later.",
    workflow: "Keep fee labels, VAT/tax handling, booking metadata, and PDF wording explicit enough for review.",
  },
  {
    scenario: "Cancellation or date change",
    risk: "Support edits the original invoice after a partial refund or voucher conversion, weakening the audit trail.",
    workflow: "Issue a separate credit note linked to the original invoice and store the refund reason with the order.",
  },
];

const qualification = [
  { signal: "You sell hotel, B&B, guesthouse, or accommodation bookings through WooCommerce", score: "+2" },
  { signal: "Companies, agencies, or business travellers ask for VAT invoices after booking", score: "+2" },
  { signal: "Booking references, stay dates, guest names, or PO numbers must appear on invoices", score: "+1" },
  { signal: "Deposits, final balances, cancellations, or vouchers create refund work", score: "+2" },
  { signal: "Support manually recreates hotel invoice PDFs for guests or accountants", score: "+1" },
];

const internalLinks = [
  { href: "/woocommerce-eu-vat-invoices", label: "Lattice Invoices €49 early-access offer" },
  { href: "/demo/lattice-invoices", label: "View invoice workflow demo" },
  { href: "/tools/woocommerce-invoice-setup-brief", label: "Generate an invoice setup brief" },
  { href: "/tools/woocommerce-invoice-roi-calculator", label: "Calculate invoice admin ROI" },
  { href: "/blog/woocommerce-travel-agency-invoices", label: "Travel agency booking invoices" },
  { href: "/blog/woocommerce-rental-vat-invoices", label: "Rental VAT invoice workflow" },
  { href: "/blog/woocommerce-partial-payment-invoices", label: "Partial payment and deposit invoices" },
  { href: "/blog/woocommerce-credit-notes-refunds", label: "Credit notes for refunds" },
];

const faq = [
  {
    q: "Can hotels use WooCommerce for VAT-ready booking invoices?",
    a: "Yes, but the invoice workflow should capture company billing data, booking references, stay dates, deposit or balance context, VAT/tax details, and refund credit notes from structured WooCommerce order data.",
  },
  {
    q: "Should a hotel invoice include booking and guest references?",
    a: "For business stays and agency bookings, usually yes. Booking reference, stay dates, guest or company name, PO/reference, and invoice email reduce follow-up requests from finance teams.",
  },
  {
    q: "What makes Lattice Invoices relevant for accommodation stores?",
    a: "The €49 early-access workflow focuses on WooCommerce-native VAT fields, booking metadata, PDF delivery, customer downloads, accountant handoff, and linked credit notes rather than only styling a receipt PDF.",
  },
  {
    q: "What should a hotel send before requesting early access?",
    a: "Send the store URL, country, booking types, B2B/B2C mix, deposit/balance workflow, tourist-tax or fee handling, cancellation/refund workflow, invoice-number format, and accounting export needs.",
  },
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "WooCommerce hotel booking invoices for deposits, VAT, and stays",
  description:
    "Buyer-intent guide for hotels, B&Bs, guesthouses, and accommodation stores that need VAT-ready WooCommerce invoices, booking metadata, deposits, PDFs, and credit notes.",
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
  "mailto:support@latticeplugins.com?subject=WooCommerce%20hotel%20booking%20invoice%20workflow%20review&body=Hi%20Lattice%2C%0A%0AI%20want%20to%20check%20whether%20Lattice%20Invoices%20fits%20a%20hotel%2C%20B%26B%2C%20or%20accommodation%20booking%20WooCommerce%20workflow.%0A%0AStore%20URL%3A%20%0ACountry%3A%20%0AAccommodation%20products%20sold%3A%20%0AB2B%2FB2C%20split%3A%20%0ADeposits%20or%20balance%20payments%3A%20%0ABooking%2Fstay%20fields%20needed%3A%20%0ATourist%20tax%20or%20fee%20handling%3A%20%0AVAT%2FBTW%20fields%20needed%3A%20%0AInvoice%20number%20format%3A%20%0ACancellations%2Fcredit%20notes%20needed%3A%20%0AAccounting%20tool%3A%20";

export default function WooCommerceHotelBookingInvoicesPage() {
  return (
    <main className="min-h-screen bg-slate-50">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <section className="bg-gradient-to-br from-slate-950 via-blue-950 to-cyan-900 text-white">
        <div className="max-w-6xl mx-auto px-6 py-16 lg:py-20 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div>
            <p className="uppercase tracking-[0.3em] text-sm text-cyan-200 mb-4">Hotel booking invoice workflow</p>
            <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
              WooCommerce invoices for hotel bookings, deposits, and corporate stays.
            </h1>
            <p className="text-xl text-cyan-50 leading-relaxed mb-8">
              If your hotel, B&B, guesthouse, or accommodation marketplace sells bookings through WooCommerce, invoice fields must capture VAT details, booking context, deposits, tourist-tax notes, and refund evidence before support has to repair the PDF manually.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href={mailto} className="bg-green-400 text-slate-950 px-8 py-4 rounded-xl font-semibold hover:bg-green-300 transition shadow-lg text-center">
                Request €49 hotel invoice review
              </a>
              <Link href="/woocommerce-eu-vat-invoices" className="bg-white/10 border border-white/20 text-white px-8 py-4 rounded-xl font-semibold hover:bg-white/15 transition text-center">
                View Lattice Invoices offer
              </Link>
            </div>
          </div>

          <div className="bg-white text-slate-900 rounded-2xl shadow-2xl p-6 lg:p-8">
            <p className="text-sm uppercase tracking-widest text-slate-500 mb-2">Buyer qualification</p>
            <h2 className="text-2xl font-bold mb-4">Should this accommodation store request the €49 early-access review?</h2>
            <div className="space-y-3">
              {qualification.map((item) => (
                <div key={item.signal} className="flex gap-3 items-start border rounded-xl p-4">
                  <span className="bg-cyan-100 text-cyan-700 px-3 py-1 rounded-full text-sm font-bold">{item.score}</span>
                  <p className="text-slate-700">{item.signal}</p>
                </div>
              ))}
            </div>
            <p className="text-sm text-slate-600 mt-5">
              Score 3+ points? The booking workflow probably needs more than a generic receipt PDF.
            </p>
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-14">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <article className="lg:col-span-2 space-y-8">
            <div className="bg-white rounded-2xl border shadow-sm p-8">
              <h2 className="text-3xl font-bold mb-4">Why accommodation invoices need stay context</h2>
              <p className="text-slate-700 leading-relaxed mb-4">
                Accommodation orders often represent a stay, deposit, balance payment, room package, agency reservation, local fee, or cancellation. The payer may be an individual guest, employer, travel agency, relocation firm, or corporate finance team.
              </p>
              <p className="text-slate-700 leading-relaxed">
                The safer workflow is to collect invoice context before checkout, generate the PDF from WooCommerce order data, and keep cancellations or date changes as linked credit notes instead of editing issued invoices.
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

            <div className="bg-cyan-50 border border-cyan-100 rounded-2xl p-8">
              <h2 className="text-3xl font-bold mb-5">Feature checklist before choosing a hotel invoice plugin</h2>
              <div className="overflow-x-auto">
                <table className="min-w-full text-left border-separate border-spacing-y-3">
                  <thead>
                    <tr className="text-sm uppercase tracking-widest text-cyan-800">
                      <th className="p-4 rounded-l-xl bg-white">Requirement</th>
                      <th className="p-4 rounded-r-xl bg-white">Why it matters for accommodation businesses</th>
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
              <h2 className="text-3xl font-bold mb-5">Hotel invoice scenarios</h2>
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
                If booking references, deposits, tourist-tax handling, VAT numbers, and credit notes already create support work, send one structured fit-check email. Lattice can confirm whether the €49 early-access workflow is relevant before you spend time wiring a generic invoice stack together.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href={mailto} className="bg-green-400 text-slate-950 px-7 py-3 rounded-xl font-semibold hover:bg-green-300 transition text-center">
                  Send hotel invoice fit request
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
              <h2 className="text-2xl font-bold mb-3">Request a €49 hotel invoice workflow review</h2>
              <p className="text-slate-700 leading-relaxed mb-5">
                Include the booking flow, country, VAT/BTW fields, tourist-tax handling, deposit/balance rules, cancellation workflow, and accounting tool so the reply can be specific.
              </p>
              <a href={mailto} className="block text-center bg-green-600 text-white px-5 py-3 rounded-xl font-semibold hover:bg-green-700 transition mb-3">
                Request €49 hotel invoice review
              </a>
              <Link href="/woocommerce-eu-vat-invoices" className="block text-center border border-slate-200 px-5 py-3 rounded-xl font-semibold hover:border-blue-400 transition">
                View core offer
              </Link>
            </div>

            <div className="bg-white rounded-2xl border shadow-sm p-6">
              <h2 className="text-xl font-bold mb-4">Related invoice resources</h2>
              <div className="space-y-3">
                {internalLinks.map((link) => (
                  <Link key={link.href} href={link.href} className="block border rounded-xl px-4 py-3 text-slate-700 hover:border-cyan-500 hover:text-cyan-700 transition">
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
