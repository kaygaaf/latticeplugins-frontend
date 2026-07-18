import type { Metadata } from "next";
import Link from "next/link";

const SITE_URL = "https://latticeplugins.com";

export const metadata: Metadata = {
  title: "WooCommerce EU VAT Invoices — Lattice Plugins",
  description:
    "A buyer-focused guide and landing page for WooCommerce stores that need EU VAT/BTW invoices, business customer fields, credit notes, and downloadable invoice PDFs.",
  alternates: {
    canonical: `${SITE_URL}/woocommerce-eu-vat-invoices`,
  },
  openGraph: {
    title: "WooCommerce EU VAT Invoices",
    description:
      "Turn WooCommerce orders into EU-ready invoices with VAT/BTW fields, invoice numbering, credit notes, customer downloads, and email attachments.",
    url: `${SITE_URL}/woocommerce-eu-vat-invoices`,
    siteName: "Lattice Plugins",
    type: "website",
  },
};

const checklist = [
  "Collect company name, VAT/BTW number, and billing details before payment",
  "Generate invoice numbers in a clean, sequential format",
  "Attach invoice PDFs to WooCommerce customer emails",
  "Give customers a My Account area for downloading invoices",
  "Create credit notes when orders are refunded",
  "Keep order, invoice, and tax data connected for bookkeeping exports",
];

const setupSteps = [
  {
    title: "1. Capture the right checkout fields",
    text: "Add company name, VAT/BTW number, PO reference, and invoice email fields to WooCommerce billing so business customers do not need to send details after payment.",
  },
  {
    title: "2. Generate invoice numbers from order status",
    text: "Use a predictable prefix and sequence such as INV-2026-000148 when an order is paid, then keep that number attached to the WooCommerce order record.",
  },
  {
    title: "3. Attach PDFs to the right emails",
    text: "Send invoices with processing/completed order emails and credit notes with refund emails, while also storing files for customer downloads later.",
  },
  {
    title: "4. Keep accounting export clean",
    text: "Store VAT rate, VAT amount, invoice date, customer VAT number, refund relationship, and order total as separate fields so bookkeeping export is not a manual cleanup job.",
  },
];

const buyerSignals = [
  "You sell to EU B2B customers and get repeated invoice correction emails",
  "Your WooCommerce checkout accepts payment but does not collect VAT/BTW data cleanly",
  "Refunds require manual credit notes outside WooCommerce",
  "Customers ask for invoices long after the original order email",
  "Your accountant needs order-level VAT evidence instead of screenshots and spreadsheets",
];

const comparisonRows = [
  ["VAT/BTW checkout fields", "Generic billing notes or add-on fields", "Dedicated business billing fields tied to the order"],
  ["Invoice PDF", "Manual export or separate PDF plugin", "Generated from WooCommerce order data"],
  ["Credit notes", "Created manually after refunds", "Refund-linked credit-note workflow"],
  ["Customer access", "Support ticket when invoice is lost", "Download from My Account"],
  ["Sales friction", "Unclear whether B2B checkout is supported", "Clear EU invoice promise before purchase"],
];

const qualificationRows = [
  {
    signal: "B2B buyers ask for corrected VAT/BTW invoices",
    score: "+2",
    action: "Prioritize checkout VAT fields and locked invoice metadata before public launch.",
  },
  {
    signal: "Support manually creates PDFs after payment",
    score: "+2",
    action: "Move PDF generation, email attachment, and My Account downloads into the order workflow.",
  },
  {
    signal: "Refunds or partial refunds need credit notes",
    score: "+2",
    action: "Require refund-linked credit notes before the store relies on the plugin for accounting handoff.",
  },
  {
    signal: "Accountant needs VAT totals, VAT ID, invoice number, and PDF link",
    score: "+1",
    action: "Treat export-ready fields as part of the setup, not a later reporting feature.",
  },
  {
    signal: "The store only sells low-volume B2C orders",
    score: "0",
    action: "Use the free setup guide first; early access is strongest when invoice support costs are already visible.",
  },
];

const objectionCards = [
  {
    title: "“I already have WooCommerce tax settings.”",
    answer:
      "Good. Lattice Invoices is positioned around the document workflow that tax settings do not solve alone: VAT fields, invoice numbers, PDFs, downloads, and credit notes.",
  },
  {
    title: "“I only get a few invoice requests.”",
    answer:
      "If each request takes 5–10 minutes, even a handful of B2B buyers can justify a €49 one-time workflow by reducing correction emails and improving purchase trust.",
  },
  {
    title: "“I need to know what happens before paying.”",
    answer:
      "The early-access email now asks for store URL, country, B2B/B2C mix, VAT fields, numbering format, and credit-note needs so the fit can be confirmed before purchase.",
  },
];

const features = [
  {
    title: "EU VAT/BTW customer fields",
    text: "B2B customers need a place to enter their company details and VAT number. The invoice workflow is designed around those fields instead of generic checkout notes.",
  },
  {
    title: "Invoice and credit-note documents",
    text: "A store owner should be able to generate invoices for paid orders and credit notes for refunds without copying order data into another tool.",
  },
  {
    title: "PDF delivery and downloads",
    text: "Customers expect the invoice in their order email and later in My Account. That removes support tickets and makes repeat purchases easier.",
  },
  {
    title: "WooCommerce-native workflow",
    text: "The sales process stays inside WooCommerce: order status changes, customer records, tax settings, and payment flows stay connected.",
  },
];

const roiCards = [
  {
    metric: "5–10 min",
    label: "saved per invoice request",
    text: "No more copying order totals into a separate PDF tool when a customer asks for a business invoice.",
  },
  {
    metric: "0 inbox loops",
    label: "for missing VAT details",
    text: "The checkout collects company, VAT/BTW, and invoice email details before the payment is placed.",
  },
  {
    metric: "1 workflow",
    label: "for invoices and refunds",
    text: "Paid orders create invoices; refunded orders get credit-note records tied back to the original order.",
  },
];

const demoScreens = [
  {
    title: "B2B checkout fields",
    eyebrow: "Before payment",
    bullets: ["Company name", "VAT/BTW number", "Invoice email", "PO/reference field"],
  },
  {
    title: "Invoice admin panel",
    eyebrow: "Inside the order",
    bullets: ["Invoice number", "Invoice date", "PDF status", "Regenerate action"],
  },
  {
    title: "Customer downloads",
    eyebrow: "After purchase",
    bullets: ["My Account invoice link", "Email attachment", "Refund credit note", "Private file access"],
  },
];

const paidDeliverables = [
  "WooCommerce plugin license for the invoice workflow",
  "EU VAT/BTW checkout-field setup checklist",
  "Invoice numbering format review before activation",
  "PDF invoice and credit-note workflow validation",
  "One store-specific setup reply for early-access buyers",
];

const purchaseFrictionChecks = [
  {
    title: "Send the store context first",
    text: "The fastest path to a useful reply is store URL, country, B2B/B2C mix, monthly invoice requests, and the exact VAT/BTW fields the checkout must collect.",
  },
  {
    title: "Confirm the money problem",
    text: "Mention how many corrected invoices, missing VAT details, refund credit notes, or accountant export cleanups happen each month so the €49 decision has a visible payback.",
  },
  {
    title: "Ask for the activation checklist",
    text: "Request the invoice-numbering, PDF delivery, customer-download, and credit-note checks before install. That removes uncertainty before a paid early-access license.",
  },
];

const readyEmailLines = [
  "Store URL + country",
  "B2B/B2C mix and monthly invoice request volume",
  "Company, VAT/BTW, PO, and invoice-email fields needed",
  "Invoice number format such as INV-2026-000148",
  "Credit-note, refund, and accountant export requirements",
];

const faqs = [
  {
    q: "Is this aimed at Dutch and EU WooCommerce stores?",
    a: "Yes. The offer is written for EU stores that need VAT/BTW-friendly invoices, B2B billing details, customer invoice downloads, and a practical WooCommerce workflow.",
  },
  {
    q: "Does this replace accounting software?",
    a: "No. It is intended to create order-level WooCommerce invoices and credit notes. Your accountant or bookkeeping system remains the final source for tax filing.",
  },
  {
    q: "What should I buy today?",
    a: "The public checkout currently sells the official Lattice products. If you need the invoice workflow specifically, use the early-access CTA so the product can be matched to your WooCommerce setup before purchase.",
  },
  {
    q: "Can this be used with the existing WooCommerce tax settings?",
    a: "That is the intended product direction: invoices should reuse the VAT rates and totals already calculated by WooCommerce instead of asking the store owner to enter tax data twice.",
  },
  {
    q: "What information should I send for early access?",
    a: "Send your store URL, country, whether you sell B2B/B2C, required VAT fields, invoice-number format, and whether you need credit notes for refunds. That is enough to qualify the setup.",
  },
];

const structuredData = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "Lattice Invoices",
  applicationCategory: "BusinessApplication",
  operatingSystem: "WordPress, WooCommerce",
  description:
    "WooCommerce EU VAT invoice workflow for VAT/BTW checkout fields, invoice PDFs, credit notes, customer downloads, and email attachments.",
  offers: {
    "@type": "Offer",
    price: "49",
    priceCurrency: "EUR",
    availability: "https://schema.org/PreOrder",
    url: `${SITE_URL}/woocommerce-eu-vat-invoices`,
  },
  featureList: checklist,
};

export default function WooCommerceEuVatInvoicesPage() {
  return (
    <main className="min-h-screen bg-slate-50">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <section className="bg-gradient-to-br from-slate-950 via-blue-950 to-indigo-900 text-white">
        <div className="max-w-6xl mx-auto px-6 py-16 lg:py-20 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div>
            <p className="uppercase tracking-[0.3em] text-sm text-blue-200 mb-4">WooCommerce EU invoicing</p>
            <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
              EU VAT invoices for WooCommerce without manual admin work.
            </h1>
            <p className="text-xl text-blue-50 leading-relaxed mb-8">
              Lattice Invoices is the focused WooCommerce workflow for VAT/BTW details, invoice PDFs,
              credit notes, customer downloads, and invoice-ready order emails.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="mailto:support@latticeplugins.com?subject=Lattice%20Invoices%20early%20access&body=Hi%20Lattice%2C%0A%0AI%20want%20early%20access%20to%20Lattice%20Invoices.%20My%20WooCommerce%20store%20is%3A%20"
                className="bg-green-500 text-white px-8 py-4 rounded-xl font-semibold hover:bg-green-400 transition shadow-lg text-center"
              >
                Request early access
              </a>
              <Link
                href="/demo/lattice-invoices"
                className="bg-white/10 border border-white/20 text-white px-8 py-4 rounded-xl font-semibold hover:bg-white/15 transition text-center"
              >
                View invoice workflow demo
              </Link>
            </div>
            <p className="text-sm text-blue-100 mt-4">
              Public checkout remains available for the official 7 Lattice products while invoice early access is qualified manually.
            </p>
          </div>

          <div className="bg-white text-slate-900 rounded-2xl shadow-2xl p-6 lg:p-8">
            <div className="flex items-center justify-between border-b pb-4 mb-5">
              <div>
                <p className="text-sm uppercase tracking-widest text-slate-500">Invoice preview</p>
                <h2 className="text-2xl font-bold">Lattice Invoices</h2>
              </div>
              <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-semibold">EU-ready</span>
            </div>
            <div className="space-y-4 text-sm">
              <div className="grid grid-cols-2 gap-3">
                <div className="bg-slate-50 p-4 rounded-xl">
                  <p className="text-slate-500">Invoice #</p>
                  <p className="font-bold">2026-000148</p>
                </div>
                <div className="bg-slate-50 p-4 rounded-xl">
                  <p className="text-slate-500">VAT/BTW</p>
                  <p className="font-bold">NL123456789B01</p>
                </div>
              </div>
              <div className="border rounded-xl overflow-hidden">
                <div className="grid grid-cols-3 bg-slate-100 font-semibold text-slate-600">
                  <span className="p-3">Item</span>
                  <span className="p-3 text-right">VAT</span>
                  <span className="p-3 text-right">Total</span>
                </div>
                <div className="grid grid-cols-3 border-t">
                  <span className="p-3">WooCommerce order</span>
                  <span className="p-3 text-right">21%</span>
                  <span className="p-3 text-right font-semibold">€49.00</span>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-3 text-center">
                <div className="border rounded-xl p-3">PDF attached</div>
                <div className="border rounded-xl p-3">My Account download</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-14">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            <div className="bg-white rounded-2xl border shadow-sm p-8">
              <h2 className="text-3xl font-bold mb-4">The invoice problem this solves</h2>
              <p className="text-slate-700 leading-relaxed mb-4">
                Many WooCommerce stores can take payment, but still handle invoices manually: copying order data,
                answering customer invoice requests, correcting missing VAT details, and creating credit notes after refunds.
              </p>
              <p className="text-slate-700 leading-relaxed">
                This page turns that buyer-intent problem into a clear product path: a WooCommerce-native invoice workflow
                that reduces admin time and makes a store look more professional to EU business buyers.
              </p>
            </div>

            <div className="bg-white rounded-2xl border shadow-sm p-8">
              <h2 className="text-3xl font-bold mb-6">Invoice readiness checklist</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {checklist.map((item) => (
                  <div key={item} className="flex gap-3 p-4 rounded-xl bg-slate-50 border border-slate-100">
                    <span className="text-green-600 font-bold">✓</span>
                    <span className="text-slate-800">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-2xl border shadow-sm p-8">
              <p className="text-sm uppercase tracking-[0.25em] text-green-700 font-semibold mb-2">Revenue argument</p>
              <h2 className="text-3xl font-bold mb-4">Why this is worth fixing before the next B2B order</h2>
              <p className="text-slate-700 leading-relaxed mb-6">
                The sales pitch is simple: if even a few business buyers need corrected invoices each month, a €49 invoice workflow pays for itself by removing manual support work and making the checkout feel trustworthy.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {roiCards.map((card) => (
                  <div key={card.metric} className="rounded-xl border border-green-100 bg-green-50 p-5">
                    <div className="text-3xl font-bold text-green-700 mb-1">{card.metric}</div>
                    <div className="font-semibold text-slate-900 mb-3">{card.label}</div>
                    <p className="text-sm text-slate-700 leading-relaxed">{card.text}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-2xl border shadow-sm p-8">
              <p className="text-sm uppercase tracking-[0.25em] text-blue-600 font-semibold mb-2">Product demo</p>
              <h2 className="text-3xl font-bold mb-4">What the buyer gets inside WooCommerce</h2>
              <p className="text-slate-700 leading-relaxed mb-6">
                Until real screenshots are captured from the production plugin UI, these interface cards explain the three screens the paid workflow must deliver. They make the offer concrete enough for early-access buyers to understand the outcome.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {demoScreens.map((screen) => (
                  <div key={screen.title} className="rounded-2xl border border-slate-200 overflow-hidden bg-slate-50">
                    <div className="bg-slate-900 text-white p-4">
                      <p className="text-xs uppercase tracking-widest text-blue-200 mb-1">{screen.eyebrow}</p>
                      <h3 className="font-bold text-lg">{screen.title}</h3>
                    </div>
                    <div className="p-4 space-y-2">
                      {screen.bullets.map((bullet) => (
                        <div key={bullet} className="flex items-center gap-2 rounded-lg bg-white border border-slate-100 px-3 py-2 text-sm text-slate-700">
                          <span className="h-2 w-2 rounded-full bg-blue-500" />
                          <span>{bullet}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-2xl border shadow-sm p-8">
              <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-6">
                <div>
                  <p className="text-sm uppercase tracking-[0.25em] text-blue-600 font-semibold mb-2">Setup guide</p>
                  <h2 className="text-3xl font-bold">How the WooCommerce invoice workflow should run</h2>
                </div>
                <a
                  href="mailto:support@latticeplugins.com?subject=Lattice%20Invoices%20setup%20guide&body=Hi%20Lattice%2C%0A%0APlease%20send%20me%20the%20WooCommerce%20EU%20VAT%20invoice%20setup%20guide.%20My%20store%20URL%20is%3A%20"
                  className="inline-flex justify-center bg-slate-900 text-white px-5 py-3 rounded-xl font-semibold hover:bg-slate-800 transition"
                >
                  Ask for setup help
                </a>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {setupSteps.map((step) => (
                  <div key={step.title} className="rounded-xl border border-slate-200 bg-slate-50 p-5">
                    <h3 className="font-bold text-lg mb-2">{step.title}</h3>
                    <p className="text-slate-700 leading-relaxed">{step.text}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-2xl border shadow-sm p-8">
              <h2 className="text-3xl font-bold mb-4">When a WooCommerce store is ready for this</h2>
              <p className="text-slate-700 leading-relaxed mb-5">
                This landing page now qualifies buyers before they reach checkout. These are the strongest signals
                that a store owner is not just browsing plugins, but has a real invoice problem worth solving.
              </p>
              <div className="space-y-3">
                {buyerSignals.map((signal) => (
                  <div key={signal} className="flex gap-3 rounded-xl bg-green-50 border border-green-100 p-4">
                    <span className="text-green-700 font-bold">→</span>
                    <span className="text-slate-800">{signal}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-2xl border shadow-sm p-8 overflow-hidden">
              <h2 className="text-3xl font-bold mb-4">Manual invoices vs. Lattice Invoices</h2>
              <p className="text-slate-700 leading-relaxed mb-6">
                The offer is strongest when the buyer sees exactly what changes in their day-to-day WooCommerce process.
              </p>
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-slate-100 text-slate-700">
                      <th className="p-4 rounded-l-xl">Need</th>
                      <th className="p-4">Without a workflow</th>
                      <th className="p-4 rounded-r-xl">With Lattice Invoices</th>
                    </tr>
                  </thead>
                  <tbody>
                    {comparisonRows.map(([need, manual, lattice]) => (
                      <tr key={need} className="border-b border-slate-100">
                        <td className="p-4 font-semibold text-slate-900">{need}</td>
                        <td className="p-4 text-slate-600">{manual}</td>
                        <td className="p-4 text-slate-800">{lattice}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {features.map((feature) => (
                <div key={feature.title} className="bg-white rounded-2xl border shadow-sm p-6">
                  <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                  <p className="text-slate-700 leading-relaxed">{feature.text}</p>
                </div>
              ))}
            </div>

            <div className="bg-white rounded-2xl border shadow-sm p-8 overflow-hidden">
              <p className="text-sm uppercase tracking-[0.25em] text-green-700 font-semibold mb-2">Buyer qualification</p>
              <h2 className="text-3xl font-bold mb-4">Should this store request €49 early access?</h2>
              <p className="text-slate-700 leading-relaxed mb-6">
                This scorecard turns the page from “interesting plugin idea” into a purchase decision. A store with 3+ points is already losing time or trust to invoice handling and should request the paid early-access workflow.
              </p>
              <div className="overflow-x-auto mb-6">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-green-50 text-slate-800">
                      <th className="p-4 rounded-l-xl">Store signal</th>
                      <th className="p-4">Score</th>
                      <th className="p-4 rounded-r-xl">What Lattice should solve first</th>
                    </tr>
                  </thead>
                  <tbody>
                    {qualificationRows.map((row) => (
                      <tr key={row.signal} className="border-b border-slate-100">
                        <td className="p-4 font-semibold text-slate-900">{row.signal}</td>
                        <td className="p-4 text-green-700 font-bold whitespace-nowrap">{row.score}</td>
                        <td className="p-4 text-slate-700">{row.action}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="rounded-2xl bg-slate-950 text-white p-6 flex flex-col lg:flex-row gap-5 lg:items-center lg:justify-between">
                <div>
                  <h3 className="text-2xl font-bold mb-2">Score 3+ points?</h3>
                  <p className="text-slate-200 leading-relaxed">
                    Send the checklist answers now. The reply can become a qualified €49 license conversation instead of another vague plugin inquiry.
                  </p>
                </div>
                <a
                  href="mailto:support@latticeplugins.com?subject=Lattice%20Invoices%20qualification%20score%203%2B&body=Hi%20Lattice%2C%0A%0AMy%20WooCommerce%20invoice%20fit%20score%20is%203%2B.%0A%0AStore%20URL%3A%20%0ACountry%3A%20%0AB2B%2FB2C%20mix%3A%20%0AInvoice%20requests%20per%20month%3A%20%0AVAT%2FBTW%20fields%20needed%3A%20%0ACredit%20notes%20needed%3A%20%0AAccounting%20export%20needs%3A%20"
                  className="shrink-0 bg-green-500 text-white px-6 py-3 rounded-xl font-semibold hover:bg-green-400 transition text-center"
                >
                  Send my fit score
                </a>
              </div>
            </div>

            <div className="bg-white rounded-2xl border shadow-sm p-8">
              <p className="text-sm uppercase tracking-[0.25em] text-blue-600 font-semibold mb-2">Purchase objections</p>
              <h2 className="text-3xl font-bold mb-6">Answers that reduce hesitation before the CTA</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {objectionCards.map((card) => (
                  <div key={card.title} className="rounded-xl border border-blue-100 bg-blue-50 p-5">
                    <h3 className="font-bold text-slate-900 mb-3">{card.title}</h3>
                    <p className="text-sm text-slate-700 leading-relaxed">{card.answer}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-slate-950 text-white rounded-2xl shadow-sm p-8 overflow-hidden">
              <p className="text-sm uppercase tracking-[0.25em] text-green-300 font-semibold mb-2">Ready-to-buy email</p>
              <h2 className="text-3xl font-bold mb-4">Turn invoice pain into a €49 early-access request in one email.</h2>
              <p className="text-slate-200 leading-relaxed mb-6">
                This block removes the last purchase-friction step for qualified WooCommerce stores: it tells buyers exactly what to send, why it matters, and how the reply maps to setup.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                {purchaseFrictionChecks.map((item) => (
                  <div key={item.title} className="rounded-xl border border-white/10 bg-white/5 p-5">
                    <h3 className="font-bold text-white mb-3">{item.title}</h3>
                    <p className="text-sm text-slate-200 leading-relaxed">{item.text}</p>
                  </div>
                ))}
              </div>
              <div className="rounded-2xl bg-white text-slate-900 p-6 mb-6">
                <h3 className="text-xl font-bold mb-3">Copy this into the request:</h3>
                <ul className="space-y-2 text-sm text-slate-700">
                  {readyEmailLines.map((line) => (
                    <li key={line} className="flex gap-2">
                      <span className="text-green-600 font-bold">✓</span>
                      <span>{line}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <a
                href="mailto:support@latticeplugins.com?subject=Ready%20to%20buy%20Lattice%20Invoices%20%E2%82%AC49&body=Hi%20Lattice%2C%0A%0AI%20am%20ready%20to%20buy%20Lattice%20Invoices%20if%20my%20store%20fits.%0A%0AStore%20URL%20%2B%20country%3A%20%0AB2B%2FB2C%20mix%20and%20monthly%20invoice%20request%20volume%3A%20%0ACompany%2C%20VAT%2FBTW%2C%20PO%2C%20and%20invoice-email%20fields%20needed%3A%20%0AInvoice%20number%20format%3A%20%0ACredit-note%2C%20refund%2C%20and%20accountant%20export%20requirements%3A%20"
                className="inline-flex justify-center bg-green-500 text-white px-6 py-3 rounded-xl font-semibold hover:bg-green-400 transition text-center"
              >
                Send ready-to-buy request
              </a>
            </div>

            <div className="bg-white rounded-2xl border shadow-sm p-8">
              <h2 className="text-3xl font-bold mb-6">FAQ</h2>
              <div className="space-y-5">
                {faqs.map((faq) => (
                  <div key={faq.q}>
                    <h3 className="font-semibold text-lg mb-2">{faq.q}</h3>
                    <p className="text-slate-700 leading-relaxed">{faq.a}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <aside className="space-y-6">
            <div className="bg-white rounded-2xl border shadow-sm p-6 sticky top-6">
              <div className="rounded-2xl bg-slate-900 text-white p-5 mb-6">
                <p className="text-sm uppercase tracking-widest text-blue-200 mb-2">Early-access price</p>
                <div className="flex items-end gap-2 mb-2">
                  <span className="text-4xl font-bold">€49</span>
                  <span className="text-slate-300 mb-1">one-time</span>
                </div>
                <p className="text-sm text-slate-200 leading-relaxed">
                  Qualified stores get a clear paid path before public catalog listing. No subscription promise, no vague “contact us” enterprise pricing.
                </p>
              </div>
              <h2 className="text-2xl font-bold mb-3">Early-access offer</h2>
              <p className="text-slate-700 mb-4">
                Need EU VAT/BTW invoices in WooCommerce? Send the store URL and required invoice fields. The next autonomous step is to turn qualified demand into the paid product listing.
              </p>
              <ul className="space-y-2 mb-5 text-sm text-slate-700">
                {paidDeliverables.map((item) => (
                  <li key={item} className="flex gap-2">
                    <span className="text-green-600 font-bold">✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <a
                href="mailto:support@latticeplugins.com?subject=Lattice%20Invoices%20early%20access%20-%20%E2%82%AC49%20license&body=Hi%20Lattice%2C%0A%0AI%20want%20early%20access%20to%20Lattice%20Invoices%20at%20the%20%E2%82%AC49%20license%20price.%0A%0AStore%20URL%3A%20%0ACountry%3A%20%0AB2B%20or%20B2C%3A%20%0AVAT%2FBTW%20fields%20needed%3A%20%0AInvoice%20number%20format%3A%20%0ACredit%20notes%20needed%3A%20"
                className="block text-center bg-blue-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-blue-700 transition mb-3"
              >
                Request €49 early access
              </a>
              <Link
                href="/demo/lattice-invoices"
                className="block text-center bg-blue-50 border border-blue-200 text-blue-800 px-6 py-3 rounded-xl font-semibold hover:border-blue-500 transition mb-3"
              >
                View invoice workflow demo
              </Link>
              <Link
                href="/tools/woocommerce-invoice-setup-brief"
                className="block text-center bg-slate-950 text-white px-6 py-3 rounded-xl font-semibold hover:bg-slate-800 transition mb-3"
              >
                Generate setup brief
              </Link>
              <Link
                href="/docs/woocommerce-eu-vat-invoice-setup"
                className="block text-center border border-slate-200 px-6 py-3 rounded-xl font-semibold hover:border-blue-400 transition mb-3"
              >
                Read setup guide
              </Link>
              <Link
                href="/tools/woocommerce-invoice-fit-check"
                className="block text-center bg-blue-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-blue-700 transition mb-3"
              >
                Score invoice fit
              </Link>
              <Link
                href="/tools/woocommerce-invoice-roi-calculator"
                className="block text-center bg-green-50 border border-green-200 text-green-800 px-6 py-3 rounded-xl font-semibold hover:border-green-500 transition mb-3"
              >
                Calculate invoice ROI
              </Link>
              <Link
                href="/blog/woocommerce-b2b-service-invoices"
                className="block text-center bg-emerald-50 border border-emerald-200 text-emerald-800 px-6 py-3 rounded-xl font-semibold hover:border-emerald-500 transition mb-3"
              >
                B2B service invoice guide
              </Link>
              <Link
                href="/blog/woocommerce-restaurant-takeaway-invoices"
                className="block text-center bg-amber-50 border border-amber-200 text-amber-800 px-6 py-3 rounded-xl font-semibold hover:border-amber-500 transition mb-3"
              >
                Restaurant takeaway invoice guide
              </Link>
              <Link
                href="/blog/woocommerce-catering-event-invoices"
                className="block text-center bg-emerald-50 border border-emerald-200 text-emerald-800 px-6 py-3 rounded-xl font-semibold hover:border-emerald-500 transition mb-3"
              >
                Catering event invoice guide
              </Link>
              <Link
                href="/blog/woocommerce-repair-service-invoices"
                className="block text-center bg-cyan-50 border border-cyan-200 text-cyan-800 px-6 py-3 rounded-xl font-semibold hover:border-cyan-500 transition mb-3"
              >
                Repair service invoice guide
              </Link>
              <Link
                href="/blog/woocommerce-maintenance-contract-invoices"
                className="block text-center bg-indigo-50 border border-indigo-200 text-indigo-800 px-6 py-3 rounded-xl font-semibold hover:border-indigo-500 transition mb-3"
              >
                Maintenance contract invoice guide
              </Link>
              <Link
                href="/blog/woocommerce-cleaning-service-invoices"
                className="block text-center bg-emerald-50 border border-emerald-200 text-emerald-800 px-6 py-3 rounded-xl font-semibold hover:border-emerald-500 transition mb-3"
              >
                Cleaning service invoice guide
              </Link>
              <Link
                href="/blog/woocommerce-hotel-booking-invoices"
                className="block text-center bg-cyan-50 border border-cyan-200 text-cyan-800 px-6 py-3 rounded-xl font-semibold hover:border-cyan-500 transition mb-3"
              >
                Hotel booking invoice guide
              </Link>
              <Link
                href="/blog/woocommerce-business-customer-invoices"
                className="block text-center bg-cyan-50 border border-cyan-200 text-cyan-800 px-6 py-3 rounded-xl font-semibold hover:border-cyan-500 transition mb-3"
              >
                Business customer invoice guide
              </Link>
              <Link
                href="/blog/woocommerce-real-estate-invoices"
                className="block text-center bg-emerald-50 border border-emerald-200 text-emerald-800 px-6 py-3 rounded-xl font-semibold hover:border-emerald-500 transition mb-3"
              >
                Real-estate invoice guide
              </Link>
              <Link
                href="/blog/woocommerce-travel-agency-invoices"
                className="block text-center bg-sky-50 border border-sky-200 text-sky-800 px-6 py-3 rounded-xl font-semibold hover:border-sky-500 transition mb-3"
              >
                Travel agency invoice guide
              </Link>
              <Link
                href="/blog/woocommerce-public-sector-invoices"
                className="block text-center bg-blue-50 border border-blue-200 text-blue-800 px-6 py-3 rounded-xl font-semibold hover:border-blue-500 transition mb-3"
              >
                Public-sector invoice guide
              </Link>
              <Link
                href="/blog/woocommerce-school-course-invoices"
                className="block text-center bg-emerald-50 border border-emerald-200 text-emerald-800 px-6 py-3 rounded-xl font-semibold hover:border-emerald-500 transition mb-3"
              >
                School course invoice guide
              </Link>
              <Link
                href="/blog/woocommerce-nonprofit-donation-invoices"
                className="block text-center bg-emerald-50 border border-emerald-200 text-emerald-800 px-6 py-3 rounded-xl font-semibold hover:border-emerald-500 transition mb-3"
              >
                Nonprofit donation invoice guide
              </Link>
              <Link
                href="/blog/woocommerce-factuur-plugin-mkb"
                className="block text-center border border-slate-200 px-6 py-3 rounded-xl font-semibold hover:border-blue-400 transition mb-3"
              >
                MKB factuur plugin guide
              </Link>
              <Link
                href="/blog/woocommerce-factuur-plugin-zzp"
                className="block text-center border border-slate-200 px-6 py-3 rounded-xl font-semibold hover:border-blue-400 transition mb-3"
              >
                ZZP factuur plugin guide
              </Link>
              <Link
                href="/blog/woocommerce-btw-factuur-plugin-nederland"
                className="block text-center border border-slate-200 px-6 py-3 rounded-xl font-semibold hover:border-blue-400 transition mb-3"
              >
                Nederlandse BTW factuur plugin guide
              </Link>
              <Link
                href="/blog/woocommerce-vat-invoice-plugin-eu"
                className="block text-center border border-slate-200 px-6 py-3 rounded-xl font-semibold hover:border-blue-400 transition mb-3"
              >
                Compare invoice plugin requirements
              </Link>
              <Link
                href="/blog/woocommerce-credit-notes-refunds"
                className="block text-center border border-slate-200 px-6 py-3 rounded-xl font-semibold hover:border-blue-400 transition mb-3"
              >
                Read credit-note refund guide
              </Link>
              <Link
                href="/blog/woocommerce-vat-number-checkout-field"
                className="block text-center border border-slate-200 px-6 py-3 rounded-xl font-semibold hover:border-blue-400 transition mb-3"
              >
                VAT number field guide
              </Link>
              <Link
                href="/blog/woocommerce-reverse-charge-invoices"
                className="block text-center border border-slate-200 px-6 py-3 rounded-xl font-semibold hover:border-blue-400 transition mb-3"
              >
                Reverse-charge invoice guide
              </Link>
              <Link
                href="/blog/woocommerce-invoice-numbering"
                className="block text-center border border-slate-200 px-6 py-3 rounded-xl font-semibold hover:border-blue-400 transition mb-3"
              >
                Invoice numbering guide
              </Link>
              <Link
                href="/blog/woocommerce-pdf-invoice-email-attachments"
                className="block text-center border border-slate-200 px-6 py-3 rounded-xl font-semibold hover:border-blue-400 transition mb-3"
              >
                PDF email attachment guide
              </Link>
              <Link
                href="/blog/woocommerce-proforma-invoice"
                className="block text-center border border-slate-200 px-6 py-3 rounded-xl font-semibold hover:border-blue-400 transition mb-3"
              >
                Proforma invoice workflow guide
              </Link>
              <Link
                href="/blog/woocommerce-bank-transfer-invoice"
                className="block text-center border border-slate-200 px-6 py-3 rounded-xl font-semibold hover:border-blue-400 transition mb-3"
              >
                Bank transfer invoice guide
              </Link>
              <Link
                href="/blog/woocommerce-invoice-payment-reminders"
                className="block text-center border border-slate-200 px-6 py-3 rounded-xl font-semibold hover:border-blue-400 transition mb-3"
              >
                Invoice payment reminder guide
              </Link>
              <Link
                href="/blog/woocommerce-customer-invoice-downloads"
                className="block text-center border border-slate-200 px-6 py-3 rounded-xl font-semibold hover:border-blue-400 transition mb-3"
              >
                Customer invoice download guide
              </Link>
              <Link
                href="/blog/woocommerce-peppol-e-invoices"
                className="block text-center border border-slate-200 px-6 py-3 rounded-xl font-semibold hover:border-blue-400 transition mb-3"
              >
                Peppol e-invoice guide
              </Link>
              <Link
                href="/blog/woocommerce-ubl-invoices"
                className="block text-center border border-slate-200 px-6 py-3 rounded-xl font-semibold hover:border-blue-400 transition mb-3"
              >
                UBL invoice readiness guide
              </Link>
              <Link
                href="/blog/woocommerce-e-invoicing-plugin"
                className="block text-center border border-slate-200 px-6 py-3 rounded-xl font-semibold hover:border-blue-400 transition"
              >
                E-invoicing plugin buyer checklist
              </Link>
              <Link
                href="/blog/woocommerce-software-license-invoices"
                className="block text-center border border-slate-200 px-6 py-3 rounded-xl font-semibold hover:border-blue-400 transition mb-3"
              >
                Software license invoice guide
              </Link>
              <Link
                href="/blog/woocommerce-partial-payment-invoices"
                className="block text-center border border-slate-200 px-6 py-3 rounded-xl font-semibold hover:border-blue-400 transition mb-3"
              >
                Partial payment invoice guide
              </Link>
              <Link
                href="/blog/woocommerce-invoice-export-accounting"
                className="block text-center border border-slate-200 px-6 py-3 rounded-xl font-semibold hover:border-blue-400 transition mb-3"
              >
                Accounting export guide
              </Link>
              <Link
                href="/blog/woocommerce-invoice-approval-workflow"
                className="block text-center border border-slate-200 px-6 py-3 rounded-xl font-semibold hover:border-blue-400 transition mb-3"
              >
                B2B invoice approval workflow guide
              </Link>
              <Link
                href="/blog/woocommerce-recurring-invoices-subscriptions"
                className="block text-center border border-slate-200 px-6 py-3 rounded-xl font-semibold hover:border-blue-400 transition mb-3"
              >
                Recurring subscription invoice guide
              </Link>
              <Link
                href="/blog/woocommerce-multi-currency-invoices"
                className="block text-center border border-slate-200 px-6 py-3 rounded-xl font-semibold hover:border-blue-400 transition mb-3"
              >
                Multi-currency invoice guide
              </Link>
              <Link
                href="/blog/woocommerce-invoice-audit-trail"
                className="block text-center border border-slate-200 px-6 py-3 rounded-xl font-semibold hover:border-blue-400 transition mb-3"
              >
                Invoice audit-trail guide
              </Link>
              <Link
                href="/blog/woocommerce-invoice-reconciliation"
                className="block text-center border border-slate-200 px-6 py-3 rounded-xl font-semibold hover:border-blue-400 transition mb-3"
              >
                Invoice reconciliation guide
              </Link>
              <Link
                href="/blog/woocommerce-invoice-plugin-comparison"
                className="block text-center border border-slate-200 px-6 py-3 rounded-xl font-semibold hover:border-blue-400 transition mb-3"
              >
                Invoice plugin comparison guide
              </Link>
              <Link
                href="/blog/woocommerce-invoice-plugin-alternative"
                className="block text-center border border-slate-200 px-6 py-3 rounded-xl font-semibold hover:border-blue-400 transition mb-3"
              >
                Invoice plugin alternative guide
              </Link>
              <Link
                href="/blog/woocommerce-pdf-invoices-packing-slips-alternative"
                className="block text-center border border-slate-200 px-6 py-3 rounded-xl font-semibold hover:border-blue-400 transition mb-3"
              >
                PDF invoice alternative guide
              </Link>
              <Link
                href="/blog/woocommerce-invoice-plugin-for-agencies"
                className="block text-center border border-slate-200 px-6 py-3 rounded-xl font-semibold hover:border-blue-400 transition mb-3"
              >
                Agency invoice workflow guide
              </Link>
              <Link
                href="/blog/woocommerce-invoice-plugin-for-freelancers"
                className="block text-center border border-slate-200 px-6 py-3 rounded-xl font-semibold hover:border-blue-400 transition mb-3"
              >
                Freelancer invoice plugin guide
              </Link>
              <Link
                href="/blog/woocommerce-invoice-plugin-for-consultants"
                className="block text-center border border-slate-200 px-6 py-3 rounded-xl font-semibold hover:border-blue-400 transition mb-3"
              >
                Consultant invoice plugin guide
              </Link>
              <Link
                href="/blog/woocommerce-invoice-plugin-for-law-firms"
                className="block text-center border border-slate-200 px-6 py-3 rounded-xl font-semibold hover:border-blue-400 transition mb-3"
              >
                Law firm invoice workflow guide
              </Link>
              <Link
                href="/blog/woocommerce-invoice-plugin-for-architects"
                className="block text-center border border-slate-200 px-6 py-3 rounded-xl font-semibold hover:border-blue-400 transition mb-3"
              >
                Architecture invoice workflow guide
              </Link>
              <Link
                href="/blog/woocommerce-invoice-plugin-for-clinics"
                className="block text-center border border-slate-200 px-6 py-3 rounded-xl font-semibold hover:border-blue-400 transition mb-3"
              >
                Clinic invoice workflow guide
              </Link>
              <Link
                href="/blog/woocommerce-invoice-plugin-for-photographers"
                className="block text-center border border-slate-200 px-6 py-3 rounded-xl font-semibold hover:border-blue-400 transition mb-3"
              >
                Photography invoice workflow guide
              </Link>
              <Link
                href="/blog/woocommerce-event-ticket-invoices"
                className="block text-center border border-slate-200 px-6 py-3 rounded-xl font-semibold hover:border-blue-400 transition mb-3"
              >
                Event ticket invoice workflow guide
              </Link>
              <Link
                href="/blog/woocommerce-wholesale-invoice-plugin"
                className="block text-center border border-slate-200 px-6 py-3 rounded-xl font-semibold hover:border-blue-400 transition mb-3"
              >
                Wholesale invoice plugin guide
              </Link>
              <Link
                href="/blog/woocommerce-construction-vat-invoices"
                className="block text-center border border-slate-200 px-6 py-3 rounded-xl font-semibold hover:border-blue-400 transition mb-3"
              >
                Construction VAT invoice workflow guide
              </Link>
              <Link
                href="/blog/woocommerce-rental-vat-invoices"
                className="block text-center border border-slate-200 px-6 py-3 rounded-xl font-semibold hover:border-blue-400 transition mb-3"
              >
                Rental VAT invoice workflow guide
              </Link>
              <Link
                href="/blog/woocommerce-invoice-plugin-for-coaches"
                className="block text-center border border-slate-200 px-6 py-3 rounded-xl font-semibold hover:border-blue-400 transition mb-3"
              >
                Coach invoice plugin guide
              </Link>
              <Link
                href="/blog/woocommerce-invoice-plugin-for-accountants"
                className="block text-center border border-slate-200 px-6 py-3 rounded-xl font-semibold hover:border-blue-400 transition mb-3"
              >
                Accountant invoice workflow guide
              </Link>
              <Link
                href="/blog/woocommerce-invoice-plugin-for-saas"
                className="block text-center border border-slate-200 px-6 py-3 rounded-xl font-semibold hover:border-blue-400 transition mb-3"
              >
                SaaS subscription invoice guide
              </Link>
              <Link
                href="/blog/woocommerce-invoice-plugin-cost"
                className="block text-center border border-slate-200 px-6 py-3 rounded-xl font-semibold hover:border-blue-400 transition mb-3"
              >
                Invoice plugin cost guide
              </Link>
              <Link
                href="/blog/woocommerce-invoice-plugin-one-time-payment"
                className="block text-center border border-slate-200 px-6 py-3 rounded-xl font-semibold hover:border-blue-400 transition mb-3"
              >
                One-time payment invoice guide
              </Link>
              <Link
                href="/blog/woocommerce-invoice-plugin-lifetime-deal"
                className="block text-center border border-slate-200 px-6 py-3 rounded-xl font-semibold hover:border-blue-400 transition mb-3"
              >
                Lifetime deal invoice guide
              </Link>
              <Link
                href="/blog/woocommerce-b2b-invoice-plugin"
                className="block text-center border border-slate-200 px-6 py-3 rounded-xl font-semibold hover:border-blue-400 transition mb-3"
              >
                B2B invoice plugin guide
              </Link>
              <Link
                href="/blog/woocommerce-invoice-automation"
                className="block text-center border border-slate-200 px-6 py-3 rounded-xl font-semibold hover:border-blue-400 transition mb-3"
              >
                Invoice automation guide
              </Link>
              <Link
                href="/blog/woocommerce-invoice-data-retention"
                className="block text-center border border-slate-200 px-6 py-3 rounded-xl font-semibold hover:border-blue-400 transition mb-3"
              >
                Invoice data retention guide
              </Link>
              <Link
                href="/blog/woocommerce-invoice-plugin-migration"
                className="block text-center border border-slate-200 px-6 py-3 rounded-xl font-semibold hover:border-blue-400 transition mb-3"
              >
                Invoice plugin migration guide
              </Link>
              <Link
                href="/blog/woocommerce-invoice-correction-workflow"
                className="block text-center border border-slate-200 px-6 py-3 rounded-xl font-semibold hover:border-blue-400 transition mb-3"
              >
                Invoice correction workflow guide
              </Link>
              <Link
                href="/blog/woocommerce-invoice-email-deliverability"
                className="block text-center border border-slate-200 px-6 py-3 rounded-xl font-semibold hover:border-blue-400 transition mb-3"
              >
                Invoice email delivery guide
              </Link>
              <Link
                href="/blog/woocommerce-invoice-late-fees"
                className="block text-center border border-slate-200 px-6 py-3 rounded-xl font-semibold hover:border-blue-400 transition mb-3"
              >
                Invoice late-fee workflow guide
              </Link>
              <Link
                href="/blog/woocommerce-invoice-write-off-workflow"
                className="block text-center border border-slate-200 px-6 py-3 rounded-xl font-semibold hover:border-blue-400 transition mb-3"
              >
                Invoice write-off workflow guide
              </Link>
              <Link
                href="/blog/woocommerce-purchase-order-invoices"
                className="block text-center border border-slate-200 px-6 py-3 rounded-xl font-semibold hover:border-blue-400 transition mb-3"
              >
                Purchase order invoice guide
              </Link>
              <Link
                href="/blog/woocommerce-sepa-direct-debit-invoices"
                className="block text-center border border-slate-200 px-6 py-3 rounded-xl font-semibold hover:border-blue-400 transition mb-3"
              >
                SEPA direct debit invoice guide
              </Link>
              <Link
                href="/blog/woocommerce-stripe-invoice-workflow"
                className="block text-center border border-slate-200 px-6 py-3 rounded-xl font-semibold hover:border-blue-400 transition mb-3"
              >
                Stripe invoice workflow guide
              </Link>
              <Link
                href="/blog/woocommerce-paypal-invoice-workflow"
                className="block text-center border border-slate-200 px-6 py-3 rounded-xl font-semibold hover:border-blue-400 transition mb-3"
              >
                PayPal invoice workflow guide
              </Link>
              <Link
                href="/blog/woocommerce-mollie-invoice-workflow"
                className="block text-center border border-slate-200 px-6 py-3 rounded-xl font-semibold hover:border-blue-400 transition mb-3"
              >
                Mollie invoice workflow guide
              </Link>
              <Link
                href="/blog/woocommerce-klarna-invoice-workflow"
                className="block text-center border border-slate-200 px-6 py-3 rounded-xl font-semibold hover:border-blue-400 transition mb-3"
              >
                Klarna invoice workflow guide
              </Link>
              <Link
                href="/blog/woocommerce-net-terms-invoice-plugin"
                className="block text-center border border-slate-200 px-6 py-3 rounded-xl font-semibold hover:border-blue-400 transition mb-3"
              >
                Net terms invoice plugin guide
              </Link>
              <Link
                href="/blog/woocommerce-qr-code-invoice-payment"
                className="block text-center border border-slate-200 px-6 py-3 rounded-xl font-semibold hover:border-blue-400 transition mb-3"
              >
                QR code invoice payment guide
              </Link>
              <Link
                href="/blog/woocommerce-invoice-after-payment"
                className="block text-center border border-slate-200 px-6 py-3 rounded-xl font-semibold hover:border-blue-400 transition mb-3"
              >
                Invoice after payment workflow guide
              </Link>
              <Link
                href="/blog/woocommerce-vies-vat-validation"
                className="block text-center border border-slate-200 px-6 py-3 rounded-xl font-semibold hover:border-blue-400 transition mb-3"
              >
                VIES VAT validation guide
              </Link>
              <Link
                href="/blog/woocommerce-oss-vat-invoices"
                className="block text-center border border-slate-200 px-6 py-3 rounded-xl font-semibold hover:border-blue-400 transition mb-3"
              >
                OSS VAT invoice guide
              </Link>
              <Link
                href="/blog/woocommerce-digital-product-vat-invoices"
                className="block text-center border border-slate-200 px-6 py-3 rounded-xl font-semibold hover:border-blue-400 transition mb-3"
              >
                Digital product VAT invoice guide
              </Link>
              <Link
                href="/blog/woocommerce-invoice-custom-fields"
                className="block text-center border border-slate-200 px-6 py-3 rounded-xl font-semibold hover:border-blue-400 transition mb-3"
              >
                Invoice custom fields guide
              </Link>
              <Link
                href="/blog/woocommerce-invoice-plugin-setup-checklist"
                className="block text-center border border-slate-200 px-6 py-3 rounded-xl font-semibold hover:border-blue-400 transition mb-3"
              >
                Pre-launch setup checklist
              </Link>
              <Link
                href="/blog/woocommerce-invoice-plugin-for-online-courses"
                className="block text-center border border-slate-200 px-6 py-3 rounded-xl font-semibold hover:border-blue-400 transition mb-3"
              >
                Course invoice workflow guide
              </Link>
              <Link
                href="/blog/woocommerce-training-company-invoices"
                className="block text-center border border-slate-200 px-6 py-3 rounded-xl font-semibold hover:border-blue-400 transition mb-3"
              >
                Training company invoice guide
              </Link>
              <Link
                href="/blog/woocommerce-german-vat-invoices"
                className="block text-center border border-slate-200 px-6 py-3 rounded-xl font-semibold hover:border-blue-400 transition mb-3"
              >
                German VAT invoice guide
              </Link>
              <Link
                href="/blog/woocommerce-french-vat-invoices"
                className="block text-center border border-slate-200 px-6 py-3 rounded-xl font-semibold hover:border-blue-400 transition mb-3"
              >
                French VAT invoice guide
              </Link>
              <Link
                href="/blog/woocommerce-spanish-vat-invoices"
                className="block text-center border border-slate-200 px-6 py-3 rounded-xl font-semibold hover:border-blue-400 transition mb-3"
              >
                Spanish VAT invoice guide
              </Link>
              <Link
                href="/blog/woocommerce-italian-vat-invoices"
                className="block text-center border border-slate-200 px-6 py-3 rounded-xl font-semibold hover:border-blue-400 transition mb-3"
              >
                Italian VAT invoice guide
              </Link>
              <Link
                href="/blog/woocommerce-belgian-vat-invoices"
                className="block text-center border border-slate-200 px-6 py-3 rounded-xl font-semibold hover:border-blue-400 transition mb-3"
              >
                Belgian VAT invoice guide
              </Link>
              <Link
                href="/blog/woocommerce-austrian-vat-invoices"
                className="block text-center border border-slate-200 px-6 py-3 rounded-xl font-semibold hover:border-blue-400 transition mb-3"
              >
                Austrian VAT invoice guide
              </Link>
              <Link
                href="/blog/woocommerce-polish-vat-invoices"
                className="block text-center border border-slate-200 px-6 py-3 rounded-xl font-semibold hover:border-blue-400 transition mb-3"
              >
                Polish VAT invoice guide
              </Link>
              <Link
                href="/blog/woocommerce-danish-vat-invoices"
                className="block text-center border border-slate-200 px-6 py-3 rounded-xl font-semibold hover:border-blue-400 transition mb-3"
              >
                Danish VAT invoice guide
              </Link>
              <Link
                href="/blog/woocommerce-swedish-vat-invoices"
                className="block text-center border border-slate-200 px-6 py-3 rounded-xl font-semibold hover:border-blue-400 transition mb-3"
              >
                Swedish VAT invoice guide
              </Link>
              <Link
                href="/blog/woocommerce-greek-vat-invoices"
                className="block text-center border border-slate-200 px-6 py-3 rounded-xl font-semibold hover:border-blue-400 transition mb-3"
              >
                Greek VAT invoice guide
              </Link>
              <Link
                href="/blog/woocommerce-croatian-vat-invoices"
                className="block text-center border border-slate-200 px-6 py-3 rounded-xl font-semibold hover:border-blue-400 transition mb-3"
              >
                Croatian VAT invoice guide
              </Link>
              <Link
                href="/blog/woocommerce-slovak-vat-invoices"
                className="block text-center border border-slate-200 px-6 py-3 rounded-xl font-semibold hover:border-blue-400 transition mb-3"
              >
                Slovak VAT invoice guide
              </Link>
              <Link
                href="/blog/woocommerce-slovenian-vat-invoices"
                className="block text-center border border-slate-200 px-6 py-3 rounded-xl font-semibold hover:border-blue-400 transition mb-3"
              >
                Slovenian VAT invoice guide
              </Link>
              <Link
                href="/blog/woocommerce-bulgarian-vat-invoices"
                className="block text-center border border-slate-200 px-6 py-3 rounded-xl font-semibold hover:border-blue-400 transition mb-3"
              >
                Bulgarian DDS invoice guide
              </Link>
              <Link
                href="/blog/woocommerce-estonian-vat-invoices"
                className="block text-center border border-slate-200 px-6 py-3 rounded-xl font-semibold hover:border-blue-400 transition mb-3"
              >
                Estonian VAT invoice guide
              </Link>
              <Link
                href="/shop"
                className="block text-center border border-slate-200 px-6 py-3 rounded-xl font-semibold hover:border-blue-400 transition"
              >
                Browse current plugins
              </Link>
              <div className="border-t mt-6 pt-6 space-y-3 text-sm text-slate-600">
                <div>✓ Built for WooCommerce order workflows</div>
                <div>✓ EU VAT/BTW use case positioning</div>
                <div>✓ Clear path to paid listing once checkout is enabled</div>
              </div>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}
