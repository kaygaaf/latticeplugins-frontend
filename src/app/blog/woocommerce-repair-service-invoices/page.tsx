import type { Metadata } from "next";
import Link from "next/link";

const SITE_URL = "https://latticeplugins.com";
const SLUG = "/blog/woocommerce-repair-service-invoices";

export const metadata: Metadata = {
  title: "WooCommerce Repair Service Invoices — VAT, Deposits, PDFs",
  description:
    "Buyer-intent guide for repair shops and service desks that need WooCommerce VAT invoices, diagnostic deposits, serial numbers, parts/labour lines, PDF delivery, and credit notes.",
  alternates: {
    canonical: `${SITE_URL}${SLUG}`,
  },
  openGraph: {
    title: "WooCommerce repair service invoices for diagnostics, parts, VAT, and PDFs",
    description:
      "How electronics repair, appliance repair, bike repair, and equipment service stores should handle deposits, diagnostic fees, serial numbers, parts/labour VAT, warranty corrections, and refund credit notes.",
    url: `${SITE_URL}${SLUG}`,
    siteName: "Lattice Plugins",
    type: "article",
  },
};

const painPoints = [
  {
    title: "Repair customers need proof for finance, insurance, or warranty claims",
    detail:
      "A repair order may include a device serial number, IMEI, asset tag, diagnostic fee, quoted labour, replacement parts, warranty status, pickup deadline, and a different billing contact than the person who dropped off the item.",
    fix: "Capture company billing data, VAT/BTW number, invoice email, device or asset identifier, service ticket, diagnosis, parts/labour split, and warranty context before the invoice PDF is generated.",
  },
  {
    title: "Diagnostics, deposits, and final repairs create split invoice trails",
    detail:
      "Repair shops often charge an inspection fee first, then convert it into a repair deposit or offset it against the final bill. Generic WooCommerce receipts rarely explain that flow clearly enough for accountants.",
    fix: "Keep diagnostic fee, deposit, quote approval, final labour, parts, shipping, and discount context as structured WooCommerce order fields feeding the invoice PDF.",
  },
  {
    title: "Warranty reversals and failed repairs need credit notes",
    detail:
      "If a part is returned, the repair fails, warranty covers the labour, or the customer cancels after inspection, editing the original invoice weakens the audit trail.",
    fix: "Issue a linked credit note for refunds or corrections while preserving the original invoice number, VAT totals, service ticket, device reference, and PDF evidence.",
  },
];

const featureRows = [
  ["Corporate billing fields", "Company name, VAT/BTW number, invoice email, PO/reference, billing country, and accounts-payable contact for B2B repair clients."],
  ["Repair and device metadata", "Service ticket, device type, serial number, IMEI or asset tag, intake date, pickup/delivery method, warranty status, and technician reference."],
  ["Diagnostic and deposit visibility", "Diagnostic fee, repair deposit, quote approval, final labour, parts, shipping, warranty discount, and remaining balance should be traceable without rewriting PDFs."],
  ["Parts and labour VAT clarity", "Separate product parts, labour, shipping, and service fees so VAT totals and accountant exports are easier to reconcile."],
  ["PDF invoices and customer downloads", "Attach invoices to WooCommerce emails and keep repair invoices available from My Account for finance, warranty, or insurance requests."],
  ["Refund credit notes", "Failed repairs, returned parts, warranty adjustments, or cancelled quotes need credit notes linked to the original repair invoice."],
];

const scenarioRows = [
  {
    scenario: "Diagnostic fee before repair approval",
    risk: "The customer pays an inspection fee, then asks for a final invoice that explains the offset against parts and labour.",
    workflow: "Store diagnostic fee, quote approval, service ticket, device identifier, and final-balance context on the WooCommerce order trail.",
  },
  {
    scenario: "B2B equipment repair with PO number",
    risk: "A company employee pays online, then finance requests legal company name, VAT number, asset tag, PO reference, and invoice email.",
    workflow: "Collect B2B billing data, PO/reference, asset identifier, invoice email, and billing country before payment.",
  },
  {
    scenario: "Parts, labour, and warranty discount",
    risk: "Parts, labour, shipping, warranty coverage, and discounts are merged into generic line items that the accountant cannot reconcile.",
    workflow: "Keep fee labels, VAT handling, warranty reason, and PDF wording explicit enough for finance and support review.",
  },
  {
    scenario: "Cancelled or unsuccessful repair",
    risk: "Support edits the issued invoice after refunding a diagnostic fee, returned part, or labour correction.",
    workflow: "Issue a separate credit note linked to the original repair invoice and store the refund/correction reason with the order.",
  },
];

const qualification = [
  { signal: "You sell diagnostics, repair deposits, parts, labour, maintenance visits, or equipment servicing through WooCommerce", score: "+2" },
  { signal: "Customers ask for invoices with serial numbers, IMEI, asset tags, service tickets, or warranty context", score: "+2" },
  { signal: "Companies require VAT IDs, PO references, invoice emails, or accounts-payable routing", score: "+2" },
  { signal: "Diagnostics, deposits, failed repairs, returned parts, or warranty adjustments create refund work", score: "+2" },
  { signal: "Support manually recreates repair invoice PDFs for finance, insurance, or warranty teams", score: "+1" },
];

const internalLinks = [
  { href: "/woocommerce-eu-vat-invoices", label: "Lattice Invoices €49 early-access offer" },
  { href: "/demo/lattice-invoices", label: "View invoice workflow demo" },
  { href: "/tools/woocommerce-invoice-setup-brief", label: "Generate an invoice setup brief" },
  { href: "/tools/woocommerce-invoice-fit-check", label: "Score invoice workflow fit" },
  { href: "/blog/woocommerce-business-customer-invoices", label: "Business customer invoice workflow" },
  { href: "/blog/woocommerce-b2b-service-invoices", label: "B2B service invoice workflow" },
  { href: "/blog/woocommerce-partial-payment-invoices", label: "Partial payment and deposit invoices" },
  { href: "/blog/woocommerce-credit-notes-refunds", label: "Credit notes for refunds" },
];

const faq = [
  {
    q: "Can repair shops use WooCommerce for VAT-ready repair invoices?",
    a: "Yes, but the invoice workflow should capture company billing data, VAT/BTW number, service ticket, device or asset identifier, diagnostic/deposit context, parts and labour lines, PDF delivery, and refund credit notes from structured WooCommerce order data.",
  },
  {
    q: "Should a repair invoice include serial numbers or service tickets?",
    a: "For electronics, appliance, bike, industrial equipment, and B2B repairs, usually yes. Serial number, IMEI, asset tag, service ticket, warranty status, and technician reference help finance, insurance, and warranty teams match the invoice to the repair.",
  },
  {
    q: "What makes Lattice Invoices relevant for repair service stores?",
    a: "The €49 early-access workflow focuses on WooCommerce-native VAT fields, repair metadata, deposit and diagnostic context, PDF delivery, customer downloads, accountant handoff, and linked credit notes instead of only styling a generic receipt PDF.",
  },
  {
    q: "What should a repair shop send before requesting early access?",
    a: "Send the store URL, country, repair products/services sold, B2B/B2C mix, diagnostic/deposit workflow, repair fields needed, VAT/BTW fields, invoice-number format, warranty/refund workflow, and accounting export needs.",
  },
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "WooCommerce repair service invoices for diagnostics, parts, VAT, and PDFs",
  description:
    "Buyer-intent guide for repair shops and service desks that need VAT-ready WooCommerce invoices, service metadata, deposits, PDFs, and credit notes.",
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
  "mailto:support@latticeplugins.com?subject=WooCommerce%20repair%20service%20invoice%20workflow%20review&body=Hi%20Lattice%2C%0A%0AI%20want%20to%20check%20whether%20Lattice%20Invoices%20fits%20a%20repair%20service%20WooCommerce%20workflow.%0A%0AStore%20URL%3A%20%0ACountry%3A%20%0ARepair%20services%20sold%3A%20%0AB2B%2FB2C%20split%3A%20%0ADiagnostic%20fees%20or%20deposits%3A%20%0ARepair%2Fdevice%20fields%20needed%3A%20%0AVAT%2FBTW%20fields%20needed%3A%20%0AInvoice%20number%20format%3A%20%0AWarranty%2Frefund%2Fcredit%20notes%20needed%3A%20%0AAccounting%20tool%3A%20";

export default function WooCommerceRepairServiceInvoicesPage() {
  return (
    <main className="min-h-screen bg-slate-50">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <section className="bg-gradient-to-br from-slate-950 via-blue-950 to-cyan-900 text-white">
        <div className="max-w-6xl mx-auto px-6 py-16 lg:py-20 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div>
            <p className="uppercase tracking-[0.3em] text-sm text-cyan-200 mb-4">Repair service invoice workflow</p>
            <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
              WooCommerce invoices for repair services, diagnostics, and parts.
            </h1>
            <p className="text-xl text-cyan-50 leading-relaxed mb-8">
              If your repair shop sells diagnostics, deposits, parts, labour, warranties, or service visits through WooCommerce, invoices must capture VAT details, service tickets, device identifiers, parts/labour context, and refund evidence before support has to repair the PDF manually.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href={mailto} className="bg-green-400 text-slate-950 px-8 py-4 rounded-xl font-semibold hover:bg-green-300 transition shadow-lg text-center">
                Request €49 repair invoice review
              </a>
              <Link href="/woocommerce-eu-vat-invoices" className="bg-white/10 border border-white/20 text-white px-8 py-4 rounded-xl font-semibold hover:bg-white/15 transition text-center">
                View Lattice Invoices offer
              </Link>
            </div>
          </div>

          <div className="bg-white text-slate-900 rounded-2xl shadow-2xl p-6 lg:p-8">
            <p className="text-sm uppercase tracking-widest text-slate-500 mb-2">Buyer qualification</p>
            <h2 className="text-2xl font-bold mb-4">Should this repair store request the €49 early-access review?</h2>
            <div className="space-y-3">
              {qualification.map((item) => (
                <div key={item.signal} className="flex gap-3 items-start border rounded-xl p-4">
                  <span className="bg-cyan-100 text-cyan-700 px-3 py-1 rounded-full text-sm font-bold">{item.score}</span>
                  <p className="text-slate-700">{item.signal}</p>
                </div>
              ))}
            </div>
            <p className="text-sm text-slate-600 mt-5">
              Score 3+ points? The repair workflow probably needs more than a generic receipt PDF.
            </p>
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-14">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <article className="lg:col-span-2 space-y-8">
            <div className="bg-white rounded-2xl border shadow-sm p-8">
              <h2 className="text-3xl font-bold mb-4">Why repair invoices need service context</h2>
              <p className="text-slate-700 leading-relaxed mb-4">
                Repair orders often represent a device, service ticket, diagnostic fee, quote approval, parts order, warranty decision, labour charge, shipping fee, or failed repair. The payer may be a consumer, an office manager, a fleet manager, or a finance team.
              </p>
              <p className="text-slate-700 leading-relaxed">
                The safer workflow is to collect invoice context before checkout, generate the PDF from WooCommerce order data, and keep warranty adjustments, returned parts, cancelled repairs, or deposit refunds as linked credit notes instead of editing issued invoices.
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
              <h2 className="text-3xl font-bold mb-5">Feature checklist before choosing a repair invoice plugin</h2>
              <div className="overflow-x-auto">
                <table className="min-w-full text-left border-separate border-spacing-y-3">
                  <thead>
                    <tr className="text-sm uppercase tracking-widest text-cyan-800">
                      <th className="p-4 rounded-l-xl bg-white">Requirement</th>
                      <th className="p-4 rounded-r-xl bg-white">Why it matters for repair and service businesses</th>
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
              <h2 className="text-3xl font-bold mb-5">Repair invoice scenarios</h2>
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
                If serial numbers, diagnostic fees, deposits, VAT numbers, warranty adjustments, and credit notes already create support work, send one structured fit-check email. Lattice can confirm whether the €49 early-access workflow is relevant before you spend time combining generic invoice add-ons.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href={mailto} className="bg-green-400 text-slate-950 px-7 py-3 rounded-xl font-semibold hover:bg-green-300 transition text-center">
                  Send repair invoice fit request
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
              <h2 className="text-2xl font-bold mb-3">Request a €49 repair invoice workflow review</h2>
              <p className="text-slate-700 leading-relaxed mb-5">
                Include the repair flow, country, VAT/BTW fields, diagnostic/deposit rules, repair metadata, warranty/refund workflow, and accounting tool so the reply can be specific.
              </p>
              <a href={mailto} className="block text-center bg-green-600 text-white px-5 py-3 rounded-xl font-semibold hover:bg-green-700 transition mb-3">
                Request €49 repair invoice review
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
