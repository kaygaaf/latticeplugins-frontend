import type { Metadata } from "next";
import Link from "next/link";

const SITE_URL = "https://latticeplugins.com";
const SLUG = "/blog/woocommerce-medical-supply-invoices";

export const metadata: Metadata = {
  title: "WooCommerce Medical Supply Invoices — VAT, B2B, PDFs",
  description:
    "Buyer-intent guide for medical supply, dental supply, lab equipment, and healthcare product stores that need WooCommerce VAT invoices, purchase orders, product references, PDF delivery, and credit notes.",
  alternates: {
    canonical: `${SITE_URL}${SLUG}`,
  },
  openGraph: {
    title: "WooCommerce medical supply invoices for VAT, purchase orders, and PDF delivery",
    description:
      "How medical supply WooCommerce stores should handle B2B VAT fields, clinic references, PO numbers, product/batch context, invoice PDFs, customer downloads, and refund credit notes.",
    url: `${SITE_URL}${SLUG}`,
    siteName: "Lattice Plugins",
    type: "article",
  },
};

const painPoints = [
  {
    title: "Medical supply buyers need B2B invoice data before payment",
    detail:
      "A buyer may be a clinic, dental practice, lab, care provider, purchasing department, or reseller. Finance often needs company details, VAT ID, invoice email, PO number, and department or location references on the invoice.",
    fix: "Capture company name, VAT/BTW number, invoice email, purchase-order reference, department, location, and accounts-payable contact in WooCommerce before the PDF is generated.",
  },
  {
    title: "Product, batch, and service context must stay readable",
    detail:
      "Medical supply orders can include consumables, equipment, calibration, maintenance, training, spare parts, or regulated product references. A generic receipt can leave finance and operations guessing what was supplied.",
    fix: "Keep SKU, product category, equipment reference, batch/lot context where relevant, service add-ons, warranty, and delivery references connected to the order and invoice trail.",
  },
  {
    title: "Returns, substitutions, and partial shipments create credit-note work",
    detail:
      "A returned device, backordered item, substituted product, damaged shipment, or partial refund should not overwrite the original invoice after it has been issued.",
    fix: "Use refund-linked credit notes that reference the original invoice, product/SKU context, VAT totals, correction reason, and customer-facing PDF evidence.",
  },
];

const featureRows = [
  ["B2B VAT and finance fields", "Company name, VAT/BTW number, invoice email, PO/reference, billing country, department, location, and accounts-payable contact for clinics and purchasing teams."],
  ["Medical supply order metadata", "SKU, product category, equipment reference, consumable type, service add-on, warranty, delivery note, and optional batch/lot context should remain visible for finance handoff."],
  ["Purchase-order workflow", "Hospitals, clinics, labs, schools, and public-sector buyers often require PO numbers, department references, or buyer IDs before invoices are accepted."],
  ["PDF invoices and customer downloads", "Attach invoices to WooCommerce emails and keep medical supply PDFs available from My Account without support resending documents."],
  ["Refund credit notes", "Returned equipment, substituted products, damaged shipments, and partial refunds need credit notes linked to the original medical supply invoice."],
  ["Accountant and compliance handoff", "VAT rate, VAT amount, invoice number, customer VAT ID, product references, PDF link, and credit-note relationship should be exportable without screenshots."],
];

const scenarioRows = [
  {
    scenario: "Clinic reorders supplies with a PO number",
    risk: "The order is paid, but finance rejects the PDF because the clinic VAT ID, PO number, department, or invoice email was missing at checkout.",
    workflow: "Collect clinic billing details, VAT/BTW number, PO/reference, department, delivery location, and invoice email before payment or invoice creation.",
  },
  {
    scenario: "Dental or lab equipment order with service add-ons",
    risk: "The invoice does not show whether the amount relates to hardware, consumables, calibration, training, warranty, or maintenance service.",
    workflow: "Keep product, service, warranty, SKU, equipment, and delivery references as invoice-ready WooCommerce order metadata.",
  },
  {
    scenario: "Backorder, substitution, or partial shipment",
    risk: "Support manually edits the invoice after fulfilment changes, making VAT totals and customer evidence harder to reconcile.",
    workflow: "Use linked credit notes or adjustment records instead of overwriting an issued medical supply invoice PDF.",
  },
  {
    scenario: "Public-sector or healthcare procurement buyer",
    risk: "The buyer needs a PO/reference, buyer ID, finance contact, and retained invoice PDF before accounts payable will process the order.",
    workflow: "Capture purchasing fields before payment and attach the correct PDF invoice to order emails while keeping downloads available later.",
  },
];

const qualification = [
  { signal: "You sell medical supplies, dental supplies, lab consumables, healthcare equipment, spare parts, calibration, or service bundles through WooCommerce", score: "+2" },
  { signal: "Customers ask for invoices with clinic/company VAT IDs, PO numbers, department references, invoice email, or delivery-location context", score: "+2" },
  { signal: "Orders include equipment, consumables, service add-ons, warranties, partial shipments, returns, or substitutions", score: "+2" },
  { signal: "Refunds, returns, damaged shipments, or substitutions create credit-note work", score: "+2" },
  { signal: "Support manually resends or corrects medical supply invoice PDFs for finance teams", score: "+1" },
];

const internalLinks = [
  { href: "/woocommerce-eu-vat-invoices", label: "Lattice Invoices €49 early-access offer" },
  { href: "/demo/lattice-invoices", label: "View invoice workflow demo" },
  { href: "/tools/woocommerce-invoice-setup-brief", label: "Generate an invoice setup brief" },
  { href: "/tools/woocommerce-invoice-fit-check", label: "Score invoice workflow fit" },
  { href: "/blog/woocommerce-invoice-plugin-for-clinics", label: "Clinic invoice workflow" },
  { href: "/blog/woocommerce-public-sector-invoices", label: "Public-sector invoice workflow" },
  { href: "/blog/woocommerce-purchase-order-invoices", label: "Purchase order invoice workflow" },
  { href: "/blog/woocommerce-credit-notes-refunds", label: "Credit notes for refunds" },
];

const faq = [
  {
    q: "Can medical supply stores use WooCommerce for VAT-ready B2B invoices?",
    a: "Yes, but the invoice workflow should capture company billing data, VAT/BTW number, PO/reference, invoice email, department or clinic context, product/SKU references, PDF delivery, customer downloads, and refund credit notes from structured WooCommerce order data.",
  },
  {
    q: "Should a medical supply invoice include purchase-order and product references?",
    a: "Usually yes for B2B healthcare buyers. PO numbers, department references, clinic locations, SKUs, equipment references, service add-ons, and delivery references help finance match the invoice to procurement and fulfilment records.",
  },
  {
    q: "What makes Lattice Invoices relevant for medical supply WooCommerce stores?",
    a: "The €49 early-access workflow focuses on WooCommerce-native VAT fields, PO references, order metadata, PDF delivery, customer downloads, accountant handoff, and linked credit notes instead of only styling a generic receipt PDF.",
  },
  {
    q: "What should a medical supply business send before requesting early access?",
    a: "Send the store URL, country, products sold, B2B/B2C mix, PO and department fields needed, VAT/BTW fields, invoice-number format, refund/credit-note workflow, and accounting export needs.",
  },
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "WooCommerce medical supply invoices for VAT, purchase orders, and PDF delivery",
  description:
    "Buyer-intent guide for medical supply and healthcare product stores that need VAT-ready WooCommerce invoices, PO fields, PDFs, and credit notes.",
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
  "mailto:support@latticeplugins.com?subject=WooCommerce%20medical%20supply%20invoice%20workflow%20review&body=Hi%20Lattice%2C%0A%0AI%20want%20to%20check%20whether%20Lattice%20Invoices%20fits%20a%20medical%20supply%20WooCommerce%20workflow.%0A%0AStore%20URL%3A%20%0ACountry%3A%20%0AMedical%20or%20healthcare%20products%20sold%3A%20%0AB2B%2FB2C%20split%3A%20%0APO%2Fdepartment%20fields%20needed%3A%20%0AProduct%2FSKU%20or%20batch%20context%20needed%3A%20%0AVAT%2FBTW%20fields%20needed%3A%20%0AInvoice%20number%20format%3A%20%0ARefund%2Fcredit%20notes%20needed%3A%20%0AAccounting%20tool%3A%20";

export default function WooCommerceMedicalSupplyInvoicesPage() {
  return (
    <main className="min-h-screen bg-slate-50">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <section className="bg-gradient-to-br from-slate-950 via-blue-950 to-teal-900 text-white">
        <div className="max-w-6xl mx-auto px-6 py-16 lg:py-20 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div>
            <p className="uppercase tracking-[0.3em] text-sm text-teal-200 mb-4">Medical supply invoice workflow</p>
            <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
              WooCommerce invoices for medical supplies, PO numbers, VAT, and PDF delivery.
            </h1>
            <p className="text-xl text-teal-50 leading-relaxed mb-8">
              If your WooCommerce store sells medical supplies, dental products, lab equipment, consumables, spare parts, or service bundles to clinics and procurement teams, invoices must capture VAT details, PO references, product context, PDFs, and credit notes before support has to rebuild the document manually.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href={mailto} className="bg-green-400 text-slate-950 px-8 py-4 rounded-xl font-semibold hover:bg-green-300 transition shadow-lg text-center">
                Request €49 medical supply invoice review
              </a>
              <Link href="/woocommerce-eu-vat-invoices" className="bg-white/10 border border-white/20 text-white px-8 py-4 rounded-xl font-semibold hover:bg-white/15 transition text-center">
                View Lattice Invoices offer
              </Link>
            </div>
          </div>

          <div className="bg-white text-slate-900 rounded-2xl shadow-2xl p-6 lg:p-8">
            <p className="text-sm uppercase tracking-widest text-slate-500 mb-2">Buyer qualification</p>
            <h2 className="text-2xl font-bold mb-4">Should this medical supply store request the €49 early-access review?</h2>
            <div className="space-y-3">
              {qualification.map((item) => (
                <div key={item.signal} className="flex gap-3 items-start border rounded-xl p-4">
                  <span className="bg-teal-100 text-teal-700 px-3 py-1 rounded-full text-sm font-bold">{item.score}</span>
                  <p className="text-slate-700">{item.signal}</p>
                </div>
              ))}
            </div>
            <p className="text-sm text-slate-600 mt-5">
              Score 3+ points? The medical supply workflow probably needs more than a generic WooCommerce receipt PDF.
            </p>
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-14">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <article className="lg:col-span-2 space-y-8">
            <div className="bg-white rounded-2xl border shadow-sm p-8">
              <h2 className="text-3xl font-bold mb-4">Why medical supply invoices need procurement context</h2>
              <p className="text-slate-700 leading-relaxed mb-4">
                Medical supply orders often represent clinic procurement, dental stock, lab consumables, equipment, spare parts, calibration, service bundles, warranties, backorders, or returned items. The payer may be a practice owner, clinic manager, hospital department, school, lab, reseller, or central finance team.
              </p>
              <p className="text-slate-700 leading-relaxed">
                The safer workflow is to collect invoice context before checkout, generate the PDF from WooCommerce order data, and keep returns, substitutions, damaged shipments, or partial refunds as linked credit notes instead of editing issued invoices.
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

            <div className="bg-teal-50 border border-teal-100 rounded-2xl p-8">
              <h2 className="text-3xl font-bold mb-5">Feature checklist before choosing a medical supply invoice plugin</h2>
              <div className="overflow-x-auto">
                <table className="min-w-full text-left border-separate border-spacing-y-3">
                  <thead>
                    <tr className="text-sm uppercase tracking-widest text-teal-800">
                      <th className="p-4 rounded-l-xl bg-white">Requirement</th>
                      <th className="p-4 rounded-r-xl bg-white">Why it matters for medical supply and healthcare product stores</th>
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
              <h2 className="text-3xl font-bold mb-5">Medical supply invoice scenarios</h2>
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
                If PO numbers, clinic departments, invoice emails, VAT IDs, product/SKU references, returned supplies, substitutions, partial shipments, and credit notes already create support work, send one structured fit-check email. Lattice can confirm whether the €49 early-access workflow is relevant before you combine generic PDF and checkout-field add-ons.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href={mailto} className="bg-green-400 text-slate-950 px-7 py-3 rounded-xl font-semibold hover:bg-green-300 transition text-center">
                  Send medical supply invoice fit request
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
              <h2 className="text-2xl font-bold mb-3">Request a €49 medical supply invoice workflow review</h2>
              <p className="text-slate-700 leading-relaxed mb-5">
                Include products sold, country, B2B/B2C mix, VAT/BTW fields, PO/department fields, SKU or batch context, refund workflow, and accounting tool so the reply can be specific.
              </p>
              <a href={mailto} className="block text-center bg-green-600 text-white px-5 py-3 rounded-xl font-semibold hover:bg-green-700 transition mb-3">
                Request €49 medical supply invoice review
              </a>
              <Link href="/woocommerce-eu-vat-invoices" className="block text-center border border-slate-200 px-5 py-3 rounded-xl font-semibold hover:border-blue-400 transition">
                View core offer
              </Link>
            </div>

            <div className="bg-white rounded-2xl border shadow-sm p-6">
              <h2 className="text-xl font-bold mb-4">Related invoice resources</h2>
              <div className="space-y-3">
                {internalLinks.map((link) => (
                  <Link key={link.href} href={link.href} className="block border rounded-xl px-4 py-3 text-slate-700 hover:border-teal-500 hover:text-teal-700 transition">
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
