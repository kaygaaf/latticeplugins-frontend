import type { Metadata } from "next";
import Link from "next/link";

const SITE_URL = "https://latticeplugins.com";
const SLUG = "/blog/woocommerce-real-estate-invoices";

export const metadata: Metadata = {
  title: "WooCommerce Real Estate Invoices — Deposits, VAT, PDFs",
  description:
    "Buyer-intent guide for real-estate agencies, property managers, and rental businesses that sell booking fees, deposits, services, or documents through WooCommerce and need VAT-ready invoices.",
  alternates: {
    canonical: `${SITE_URL}${SLUG}`,
  },
  openGraph: {
    title: "WooCommerce real estate invoices for deposits, fees, and property services",
    description:
      "How real-estate WooCommerce stores should handle VAT fields, booking fees, deposits, landlord or tenant references, invoice PDFs, refunds, and credit notes.",
    url: `${SITE_URL}${SLUG}`,
    siteName: "Lattice Plugins",
    type: "article",
  },
};

const painPoints = [
  {
    title: "Booking fees and deposits are not normal product receipts",
    detail:
      "A property viewing fee, reservation deposit, tenant screening package, valuation, rental document, or management setup fee may need a different invoice treatment than a simple product sale.",
    fix: "Collect payer type, company/VAT details, property reference, invoice email, and payment purpose before the order is paid.",
  },
  {
    title: "Property references must survive support and accountant handoff",
    detail:
      "Real-estate teams often need the invoice tied to a property, unit, landlord, tenant, booking, or contract reference. If that detail stays in email, finance has to reconstruct the trail later.",
    fix: "Store property/unit/reference fields as invoice metadata on the WooCommerce order and expose them on PDF/export where needed.",
  },
  {
    title: "Refunded reservations need credit notes, not overwritten PDFs",
    detail:
      "When a viewing, reservation, deposit, or service package is cancelled, the original invoice should remain intact and a linked credit note should explain the refund.",
    fix: "Use refund-linked credit notes and keep the invoice, credit note, VAT totals, and PDF evidence together.",
  },
];

const featureRows = [
  ["Business billing fields", "Company name, VAT/BTW number, billing country, invoice email, and PO/reference fields for agencies, landlords, or business tenants."],
  ["Property reference fields", "Property ID, unit, booking reference, landlord/tenant reference, or service address stored with the invoice record."],
  ["Deposit and reservation logic", "Separate booking fees, deposits, balances, and cancellations so the invoice workflow is not just a generic receipt."],
  ["PDF invoices and customer downloads", "Attach invoices to WooCommerce emails and keep a copy available from My Account or admin order history."],
  ["Refund credit notes", "Cancelled bookings, returned deposits, and partial refunds need linked credit notes rather than edited invoice PDFs."],
  ["Accountant export", "Invoice number, VAT amount, property reference, payment method, refund relation, and PDF URL should be exportable without manual cleanup."],
];

const scenarioRows = [
  {
    scenario: "Viewing or booking fee",
    risk: "The buyer pays quickly, then asks for an invoice to a company or relocation agency after checkout.",
    workflow: "Ask for billing entity, VAT ID, invoice email, and property reference before payment.",
  },
  {
    scenario: "Reservation deposit",
    risk: "The deposit is refunded or converted later, but the original invoice PDF is manually edited.",
    workflow: "Keep deposit invoices and refund credit notes linked to the original WooCommerce order.",
  },
  {
    scenario: "Property management setup package",
    risk: "Landlord/company references and PO numbers are stored in inbox threads instead of invoice data.",
    workflow: "Capture references as structured order metadata that can appear on the invoice and export.",
  },
  {
    scenario: "Rental documents or tenant screening",
    risk: "The customer expects an immediate invoice download but support has to create PDFs by hand.",
    workflow: "Attach the invoice PDF to the order email and make it retrievable later without a support ticket.",
  },
];

const qualification = [
  { signal: "You sell property services, viewing fees, deposits, or documents through WooCommerce", score: "+2" },
  { signal: "Business buyers, landlords, relocation firms, or agencies ask for VAT invoices", score: "+2" },
  { signal: "Property/unit/booking references must appear on the invoice", score: "+1" },
  { signal: "Reservation refunds or partial refunds require credit notes", score: "+2" },
  { signal: "Support manually creates PDFs for tenants, landlords, or companies", score: "+1" },
];

const internalLinks = [
  { href: "/woocommerce-eu-vat-invoices", label: "Lattice Invoices €49 early-access offer" },
  { href: "/demo/lattice-invoices", label: "View invoice workflow demo" },
  { href: "/tools/woocommerce-invoice-setup-brief", label: "Generate an invoice setup brief" },
  { href: "/tools/woocommerce-invoice-roi-calculator", label: "Calculate invoice admin ROI" },
  { href: "/blog/woocommerce-rental-vat-invoices", label: "Rental VAT invoice workflow" },
  { href: "/blog/woocommerce-partial-payment-invoices", label: "Partial payment and deposit invoices" },
  { href: "/blog/woocommerce-credit-notes-refunds", label: "Credit notes for refunds" },
  { href: "/blog/woocommerce-business-customer-invoices", label: "Business customer invoice workflow" },
];

const faq = [
  {
    q: "Can real-estate businesses use WooCommerce and still issue proper invoices?",
    a: "Yes, if the checkout captures invoice-ready billing data and the invoice workflow keeps property references, VAT evidence, invoice PDFs, and refund credit notes attached to the order.",
  },
  {
    q: "Are deposits and reservation fees handled like normal products?",
    a: "Not always. Deposits, booking fees, balance payments, and cancellations can require specific invoice and credit-note handling. Confirm the exact treatment with an accountant.",
  },
  {
    q: "What makes Lattice Invoices relevant for real-estate WooCommerce stores?",
    a: "The early-access workflow focuses on WooCommerce-native VAT fields, invoice PDFs, customer downloads, property/reference metadata, credit notes, and accountant handoff rather than only styling a PDF template.",
  },
  {
    q: "What should a real-estate store send before requesting early access?",
    a: "Send the store URL, country, property service types, B2B/B2C mix, deposit/refund workflow, required VAT fields, property/reference fields, invoice-number format, and accounting export needs.",
  },
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "WooCommerce real estate invoices for deposits and property services",
  description:
    "Buyer-intent guide for real-estate agencies, property managers, and rental businesses that need VAT-ready WooCommerce invoices, PDF delivery, property references, and credit notes.",
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
  "mailto:support@latticeplugins.com?subject=WooCommerce%20real%20estate%20invoice%20workflow%20review&body=Hi%20Lattice%2C%0A%0AI%20want%20to%20check%20whether%20Lattice%20Invoices%20fits%20a%20real-estate%20or%20property-service%20WooCommerce%20workflow.%0A%0AStore%20URL%3A%20%0ACountry%3A%20%0AProperty%20services%20sold%3A%20%0AB2B%2FB2C%20split%3A%20%0ADeposits%20or%20booking%20fees%3A%20%0AVAT%2FBTW%20fields%20needed%3A%20%0AProperty%2Funit%2Fbooking%20reference%20needed%3A%20%0AInvoice%20number%20format%3A%20%0ACredit%20notes%20needed%3A%20%0AAccounting%20tool%3A%20";

export default function WooCommerceRealEstateInvoicesPage() {
  return (
    <main className="min-h-screen bg-slate-50">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <section className="bg-gradient-to-br from-slate-950 via-emerald-950 to-blue-900 text-white">
        <div className="max-w-6xl mx-auto px-6 py-16 lg:py-20 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div>
            <p className="uppercase tracking-[0.3em] text-sm text-emerald-200 mb-4">Real-estate invoice workflow</p>
            <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
              WooCommerce invoices for real-estate deposits, bookings, and property services.
            </h1>
            <p className="text-xl text-emerald-50 leading-relaxed mb-8">
              If your agency or property business sells bookings, deposits, documents, tenant screening, valuations, or management setup fees through WooCommerce, invoice fields must capture property context before payment.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href={mailto} className="bg-green-400 text-slate-950 px-8 py-4 rounded-xl font-semibold hover:bg-green-300 transition shadow-lg text-center">
                Request €49 real-estate invoice review
              </a>
              <Link href="/woocommerce-eu-vat-invoices" className="bg-white/10 border border-white/20 text-white px-8 py-4 rounded-xl font-semibold hover:bg-white/15 transition text-center">
                View Lattice Invoices offer
              </Link>
            </div>
          </div>

          <div className="bg-white text-slate-900 rounded-2xl shadow-2xl p-6 lg:p-8">
            <p className="text-sm uppercase tracking-widest text-slate-500 mb-2">Buyer qualification</p>
            <h2 className="text-2xl font-bold mb-4">Should this property store request the €49 early-access review?</h2>
            <div className="space-y-3">
              {qualification.map((item) => (
                <div key={item.signal} className="flex gap-3 items-start border rounded-xl p-4">
                  <span className="bg-emerald-100 text-emerald-700 px-3 py-1 rounded-full text-sm font-bold">{item.score}</span>
                  <p className="text-slate-700">{item.signal}</p>
                </div>
              ))}
            </div>
            <p className="text-sm text-slate-600 mt-5">
              Score 3+ points? The store probably needs more than a generic WooCommerce PDF invoice plugin.
            </p>
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-14">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <article className="lg:col-span-2 space-y-8">
            <div className="bg-white rounded-2xl border shadow-sm p-8">
              <h2 className="text-3xl font-bold mb-4">Why property-service invoices need extra context</h2>
              <p className="text-slate-700 leading-relaxed mb-4">
                Real-estate orders often represent a service, deposit, reservation, tenant check, landlord package, or document request. The buyer may be an individual, company, relocation agency, or landlord, and the invoice may need property-specific references.
              </p>
              <p className="text-slate-700 leading-relaxed">
                The safest workflow is to collect the invoice context before checkout, generate the PDF from WooCommerce order data, and keep refunds or cancellations as linked credit notes instead of editing issued invoices.
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
              <h2 className="text-3xl font-bold mb-5">Feature checklist before choosing a plugin</h2>
              <div className="overflow-x-auto">
                <table className="min-w-full text-left border-separate border-spacing-y-3">
                  <thead>
                    <tr className="text-sm uppercase tracking-widest text-emerald-800">
                      <th className="p-4 rounded-l-xl bg-white">Requirement</th>
                      <th className="p-4 rounded-r-xl bg-white">Why it matters for property businesses</th>
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
              <h2 className="text-3xl font-bold mb-5">Real-estate invoice scenarios</h2>
              <div className="grid gap-4">
                {scenarioRows.map((row) => (
                  <div key={row.scenario} className="border rounded-xl p-5">
                    <h3 className="text-xl font-bold mb-2">{row.scenario}</h3>
                    <p className="text-slate-700 leading-relaxed mb-2"><strong>Risk:</strong> {row.risk}</p>
                    <p className="text-slate-700 leading-relaxed"><strong>Workflow:</strong> {row.workflow}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-slate-900 text-white rounded-2xl p-8">
              <h2 className="text-3xl font-bold mb-4">Turn property invoice uncertainty into a setup brief</h2>
              <p className="text-slate-200 leading-relaxed mb-6">
                Send one concise brief: service type, deposit rules, property reference fields, VAT details, invoice numbering, refund policy, and accounting export needs. That makes the €49 Lattice Invoices review specific instead of speculative.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/tools/woocommerce-invoice-setup-brief" className="bg-green-400 text-slate-950 px-6 py-3 rounded-xl font-semibold hover:bg-green-300 transition text-center">
                  Generate setup brief
                </Link>
                <Link href="/demo/lattice-invoices" className="border border-white/20 px-6 py-3 rounded-xl font-semibold hover:bg-white/10 transition text-center">
                  See invoice demo
                </Link>
              </div>
            </div>

            <div className="bg-white rounded-2xl border shadow-sm p-8">
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
              <p className="text-sm uppercase tracking-widest text-emerald-700 font-semibold mb-2">For property stores</p>
              <h2 className="text-2xl font-bold mb-3">Review one invoice workflow before you buy.</h2>
              <p className="text-slate-700 leading-relaxed mb-5">
                Send the store URL, country, property service type, deposit/refund policy, property reference fields, and VAT requirements. The €49 review is designed to qualify real WooCommerce invoice workflows before early access.
              </p>
              <a href={mailto} className="block text-center bg-blue-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-blue-700 transition mb-3">
                Send real-estate invoice fit request
              </a>
              <Link href="/docs/woocommerce-eu-vat-invoice-setup" className="block text-center border border-slate-200 px-6 py-3 rounded-xl font-semibold hover:border-blue-400 transition mb-3">
                Read setup guide
              </Link>
              <Link href="/tools/woocommerce-invoice-roi-calculator" className="block text-center border border-slate-200 px-6 py-3 rounded-xl font-semibold hover:border-blue-400 transition">
                Calculate invoice ROI
              </Link>
              <div className="border-t mt-6 pt-6 space-y-3 text-sm text-slate-600">
                <div>✓ VAT fields, property references, and invoice email capture</div>
                <div>✓ Deposit, refund, and credit-note workflow review</div>
                <div>✓ Built to qualify real EU VAT store workflows</div>
              </div>
            </div>

            <div className="bg-slate-900 text-white rounded-2xl p-6">
              <h3 className="text-xl font-bold mb-3">Related invoice guides</h3>
              <div className="space-y-3 text-sm">
                {internalLinks.map((link) => (
                  <Link key={link.href} href={link.href} className="block text-blue-200 hover:text-white">
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
