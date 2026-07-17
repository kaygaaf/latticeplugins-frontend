import type { Metadata } from "next";
import Link from "next/link";

const SITE_URL = "https://latticeplugins.com";
const SLUG = "/blog/woocommerce-restaurant-takeaway-invoices";

export const metadata: Metadata = {
  title: "WooCommerce Restaurant Invoices — Takeaway, Catering, VAT PDFs",
  description:
    "Buyer-intent guide for restaurants, cafés, and takeaway stores that need WooCommerce VAT invoices, company billing fields, delivery references, PDF delivery, and refund credit notes.",
  alternates: {
    canonical: `${SITE_URL}${SLUG}`,
  },
  openGraph: {
    title: "WooCommerce restaurant and takeaway invoices for VAT, delivery, and corporate orders",
    description:
      "How restaurants, cafés, and food businesses should handle company billing fields, VAT invoices, delivery references, service charges, refunds, and PDF delivery in WooCommerce.",
    url: `${SITE_URL}${SLUG}`,
    siteName: "Lattice Plugins",
    type: "article",
  },
};

const painPoints = [
  {
    title: "Corporate takeaway orders need proper business invoices",
    detail:
      "Office lunches, recurring catering, client dinners, and team meal deliveries often need a legal company name, VAT/BTW number, invoice email, delivery date, order reference, and sometimes a purchase-order number.",
    fix: "Collect company billing fields, VAT/BTW number, invoice email, PO/reference, delivery date, location, and contact person before checkout so finance does not ask for corrections later.",
  },
  {
    title: "Tips, delivery fees, deposits, and service charges create invoice ambiguity",
    detail:
      "Restaurants can have food VAT, delivery fees, service charges, reusable packaging deposits, event deposits, or gratuities. A plain receipt is often not enough for accountant handoff.",
    fix: "Keep fee labels, tax treatment, payment method, deposit/balance context, and order metadata structured on the WooCommerce order before generating the invoice PDF.",
  },
  {
    title: "Cancelled orders and menu changes need credit notes",
    detail:
      "Food businesses handle cancelled catering orders, partial refunds, unavailable menu items, late delivery refunds, and reduced headcounts. Editing the original invoice after issuing it creates a weak audit trail.",
    fix: "Issue refund-linked credit notes while preserving the original invoice number, VAT totals, delivery reference, and customer-facing PDF history.",
  },
];

const featureRows = [
  ["Company billing fields", "Company name, VAT/BTW number, invoice email, PO/reference, billing country, and accounts-payable contact for business meal buyers."],
  ["Order and delivery metadata", "Delivery address, date/time, table/event reference, contact person, order channel, menu package, guest count, and internal kitchen reference."],
  ["Fees and tax visibility", "Delivery fees, service charges, tips, packaging deposits, discounts, and VAT/tax classes should remain readable on the invoice and export."],
  ["PDF invoices and downloads", "Attach invoices to WooCommerce emails and keep them available from My Account when a finance team asks after delivery."],
  ["Refund credit notes", "Cancelled meals, unavailable items, reduced headcount, late-delivery refunds, and deposit returns need credit notes linked to the original invoice."],
  ["Bookkeeping handoff", "Invoice number, VAT amount, payment method, delivery reference, refund relation, and PDF URL should export cleanly for bookkeeping."],
];

const scenarioRows = [
  {
    scenario: "Office lunch delivery",
    risk: "The employee pays online, then finance asks for the invoice to include legal company details, VAT ID, PO number, and delivery date.",
    workflow: "Capture business billing fields, invoice email, PO/reference, delivery location, and contact person during checkout before payment.",
  },
  {
    scenario: "Restaurant gift card or pre-paid meal package",
    risk: "Prepayments, vouchers, and later redemption can disconnect payment timing from the final VAT invoice and accounting export.",
    workflow: "Store payment context, redemption reference, invoice date, VAT evidence, and customer-download link in the WooCommerce order trail.",
  },
  {
    scenario: "Event dining or group booking",
    risk: "Deposits, final headcount, menu extras, service charges, and cancellation terms become scattered across emails and manual PDFs.",
    workflow: "Keep deposit/balance status, guest count, menu package, service fees, and event references in structured order fields.",
  },
  {
    scenario: "Partial refund after delivery",
    risk: "Support edits the original invoice after a refund for missing items, reduced headcount, or late delivery, making the audit trail hard to defend.",
    workflow: "Create a separate credit note linked to the original restaurant invoice and include the refund/correction reason with the order.",
  },
];

const qualification = [
  { signal: "You sell takeaway, restaurant packages, meal vouchers, office lunches, or food delivery through WooCommerce", score: "+2" },
  { signal: "Companies ask for corrected VAT invoices after checkout", score: "+2" },
  { signal: "Delivery dates, locations, PO references, guest counts, or invoice emails must appear on invoices", score: "+1" },
  { signal: "Deposits, tips, service fees, cancellations, or partial refunds create manual invoice work", score: "+2" },
  { signal: "Staff manually recreates restaurant invoice PDFs for customers or accountants", score: "+1" },
];

const internalLinks = [
  { href: "/woocommerce-eu-vat-invoices", label: "Lattice Invoices €49 early-access offer" },
  { href: "/demo/lattice-invoices", label: "View invoice workflow demo" },
  { href: "/tools/woocommerce-invoice-setup-brief", label: "Generate an invoice setup brief" },
  { href: "/tools/woocommerce-invoice-roi-calculator", label: "Calculate invoice admin ROI" },
  { href: "/blog/woocommerce-catering-event-invoices", label: "Catering event invoice workflow" },
  { href: "/blog/woocommerce-business-customer-invoices", label: "Business customer invoice workflow" },
  { href: "/blog/woocommerce-partial-payment-invoices", label: "Partial payment and deposit invoices" },
  { href: "/blog/woocommerce-credit-notes-refunds", label: "Credit notes for refunds" },
];

const faq = [
  {
    q: "Can restaurants use WooCommerce for VAT-ready invoices?",
    a: "Yes, but restaurant and takeaway workflows should collect company billing fields, VAT/BTW number, invoice email, delivery or event references, fee/tip/deposit context, and refund credit notes from structured order data.",
  },
  {
    q: "Should a restaurant invoice include delivery or event details?",
    a: "For corporate meal orders, catering-style bookings, and office delivery, usually yes. Delivery date, location, order reference, contact person, PO number, and invoice email reduce correction requests from finance teams.",
  },
  {
    q: "What makes Lattice Invoices relevant for restaurants?",
    a: "The €49 early-access workflow focuses on WooCommerce-native VAT fields, order metadata, PDF delivery, customer downloads, accountant handoff, and linked credit notes rather than only styling a receipt PDF.",
  },
  {
    q: "What should a restaurant send before requesting early access?",
    a: "Send the store URL, country, restaurant/takeaway products sold, B2B/B2C split, delivery or event fields needed, fee/deposit rules, refund workflow, invoice-number format, and accounting export needs.",
  },
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "WooCommerce restaurant and takeaway invoices for VAT, delivery, and corporate orders",
  description:
    "Buyer-intent guide for restaurants, cafés, and takeaway stores that need VAT-ready WooCommerce invoices, delivery metadata, corporate billing fields, PDFs, and credit notes.",
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
  "mailto:support@latticeplugins.com?subject=WooCommerce%20restaurant%20takeaway%20invoice%20workflow%20review&body=Hi%20Lattice%2C%0A%0AI%20want%20to%20check%20whether%20Lattice%20Invoices%20fits%20a%20restaurant%2C%20takeaway%2C%20cafe%2C%20or%20food%20delivery%20WooCommerce%20workflow.%0A%0AStore%20URL%3A%20%0ACountry%3A%20%0ARestaurant%2Ftakeaway%20products%20sold%3A%20%0AB2B%2FB2C%20split%3A%20%0ADelivery%2Fevent%20fields%20needed%3A%20%0ATips%2C%20service%20fees%2C%20or%20deposits%3A%20%0AVAT%2FBTW%20fields%20needed%3A%20%0AInvoice%20number%20format%3A%20%0ARefunds%2Fcredit%20notes%20needed%3A%20%0AAccounting%20tool%3A%20";

export default function WooCommerceRestaurantTakeawayInvoicesPage() {
  return (
    <main className="min-h-screen bg-slate-50">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <section className="bg-gradient-to-br from-slate-950 via-amber-950 to-emerald-900 text-white">
        <div className="max-w-6xl mx-auto px-6 py-16 lg:py-20 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div>
            <p className="uppercase tracking-[0.3em] text-sm text-amber-200 mb-4">Restaurant invoice workflow</p>
            <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
              WooCommerce invoices for restaurant, takeaway, and office meal orders.
            </h1>
            <p className="text-xl text-amber-50 leading-relaxed mb-8">
              If your food business sells takeaway, delivery, group bookings, office lunches, vouchers, or catering-style packages through WooCommerce, invoices need VAT details, company billing fields, delivery context, fees, and refund evidence before staff has to rebuild PDFs manually.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href={mailto} className="bg-green-400 text-slate-950 px-8 py-4 rounded-xl font-semibold hover:bg-green-300 transition shadow-lg text-center">
                Request €49 restaurant invoice review
              </a>
              <Link href="/woocommerce-eu-vat-invoices" className="bg-white/10 border border-white/20 text-white px-8 py-4 rounded-xl font-semibold hover:bg-white/15 transition text-center">
                View Lattice Invoices offer
              </Link>
            </div>
          </div>

          <div className="bg-white text-slate-900 rounded-2xl shadow-2xl p-6 lg:p-8">
            <p className="text-sm uppercase tracking-widest text-slate-500 mb-2">Buyer qualification</p>
            <h2 className="text-2xl font-bold mb-4">Should this restaurant store request the €49 early-access review?</h2>
            <div className="space-y-3">
              {qualification.map((item) => (
                <div key={item.signal} className="flex gap-3 items-start border rounded-xl p-4">
                  <span className="bg-amber-100 text-amber-700 px-3 py-1 rounded-full text-sm font-bold">{item.score}</span>
                  <p className="text-slate-700">{item.signal}</p>
                </div>
              ))}
            </div>
            <p className="text-sm text-slate-600 mt-5">
              Score 3+ points? The restaurant workflow probably needs more than a generic receipt PDF.
            </p>
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-14">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <article className="lg:col-span-2 space-y-8">
            <div className="bg-white rounded-2xl border shadow-sm p-8">
              <h2 className="text-3xl font-bold mb-4">Why restaurant invoices need order context</h2>
              <p className="text-slate-700 leading-relaxed mb-4">
                Restaurant and takeaway orders can involve food VAT, delivery fees, service charges, vouchers, deposits, tips, event dates, office contacts, or corporate billing requirements. The payer may be an employee, office manager, event organiser, bookkeeper, or finance department.
              </p>
              <p className="text-slate-700 leading-relaxed">
                The safer workflow is to collect invoice context before checkout, generate the PDF from WooCommerce order data, and keep cancellations, missing items, service refunds, or deposit returns as linked credit notes instead of editing issued invoices.
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

            <div className="bg-amber-50 border border-amber-100 rounded-2xl p-8">
              <h2 className="text-3xl font-bold mb-5">Feature checklist before choosing a restaurant invoice plugin</h2>
              <div className="overflow-x-auto">
                <table className="min-w-full text-left border-separate border-spacing-y-3">
                  <thead>
                    <tr className="text-sm uppercase tracking-widest text-amber-800">
                      <th className="p-4 rounded-l-xl bg-white">Requirement</th>
                      <th className="p-4 rounded-r-xl bg-white">Why it matters for restaurant, takeaway, and food delivery businesses</th>
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
              <h2 className="text-3xl font-bold mb-5">Restaurant invoice scenarios</h2>
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
                If business meal buyers, delivery references, VAT numbers, service fees, and refunds already create support work, send one structured fit-check email. Lattice can confirm whether the €49 early-access workflow is relevant before you spend time stitching a generic invoice stack together.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href={mailto} className="bg-green-400 text-slate-950 px-7 py-3 rounded-xl font-semibold hover:bg-green-300 transition text-center">
                  Send restaurant invoice fit request
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
              <h2 className="text-2xl font-bold mb-3">Request a €49 restaurant invoice workflow review</h2>
              <p className="text-slate-700 leading-relaxed mb-5">
                Include the food-order flow, country, VAT/BTW fields, delivery or event references, fee/deposit rules, cancellation workflow, and accounting tool so the reply can be specific.
              </p>
              <a href={mailto} className="block text-center bg-green-600 text-white px-5 py-3 rounded-xl font-semibold hover:bg-green-700 transition mb-3">
                Request €49 restaurant invoice review
              </a>
              <Link href="/woocommerce-eu-vat-invoices" className="block text-center border border-slate-200 px-5 py-3 rounded-xl font-semibold hover:border-blue-400 transition">
                View core offer
              </Link>
            </div>

            <div className="bg-white rounded-2xl border shadow-sm p-6">
              <h2 className="text-xl font-bold mb-4">Related invoice resources</h2>
              <div className="space-y-3">
                {internalLinks.map((link) => (
                  <Link key={link.href} href={link.href} className="block border rounded-xl px-4 py-3 text-slate-700 hover:border-amber-500 hover:text-amber-700 transition">
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
