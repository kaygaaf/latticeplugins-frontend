import type { Metadata } from "next";
import Link from "next/link";

const SITE_URL = "https://latticeplugins.com";
const SLUG = "/blog/woocommerce-automotive-parts-invoices";

export const metadata: Metadata = {
  title: "WooCommerce Automotive Parts Invoices: VIN, VAT, PO, and PDF Workflow",
  description:
    "A buyer-intent guide for automotive parts, fleet supply, garage, and vehicle accessory stores that need WooCommerce VAT invoices with VIN, fitment, PO, warranty, credit-note, and accountant export data.",
  alternates: {
    canonical: `${SITE_URL}${SLUG}`,
  },
  openGraph: {
    title: "WooCommerce automotive parts invoice workflow",
    description:
      "Use this invoice plugin checklist before selling vehicle parts, accessories, tyres, tools, fleet supplies, or garage services through WooCommerce with VAT-ready PDFs and credit notes.",
    url: `${SITE_URL}${SLUG}`,
    siteName: "Lattice Plugins",
    type: "article",
  },
};

const workflowChecks = [
  {
    title: "Vehicle and fitment context must stay attached to the invoice",
    detail:
      "Automotive orders often depend on VIN, registration number, make/model/year, engine code, part compatibility, tyre size, garage job card, or fleet asset ID. If those details live only in notes or emails, finance and support cannot prove why a part was sold.",
    buyerQuestion: "Can the invoice workflow retain vehicle, fitment, VIN, registration, or fleet references as structured order metadata?",
  },
  {
    title: "B2B customers expect PO references and VAT-ready PDFs",
    detail:
      "Fleet managers, garages, body shops, dealers, leasing companies, and procurement teams usually need company billing data, VAT ID, PO number, job reference, and invoice email before payment or dispatch.",
    buyerQuestion: "Can checkout capture company, VAT/BTW number, PO reference, job number, and invoice email before the invoice PDF is generated?",
  },
  {
    title: "Warranty returns and wrong-fitment refunds need credit notes",
    detail:
      "Automotive stores face partial refunds for wrong fitment, warranty decisions, exchange parts, core charges, deposits, shipping adjustments, and restocking fees. Overwriting the original invoice creates a messy audit trail.",
    buyerQuestion: "Can refunds, warranty credits, core-charge returns, and partial adjustments create linked credit notes instead of manual PDFs?",
  },
  {
    title: "Accountants need product, VAT, shipping, and margin evidence",
    detail:
      "Spare parts and accessories often include mixed VAT rates, shipping lines, disposal or environmental fees, discounts, and supplier references. Export needs to preserve the facts behind the PDF, not just a customer-facing document.",
    buyerQuestion: "Can invoice exports include VAT rate, VAT amount, SKU, supplier reference, shipping fee, discount, and credit-note relation?",
  },
];

const scenarios = [
  {
    title: "Fleet supplier selling replacement parts to business customers",
    pain: "Finance teams require PO numbers, fleet vehicle IDs, VAT IDs, delivery references, invoice email routing, and credit notes when a part is returned or exchanged.",
    lattice:
      "Use B2B checkout fields, vehicle metadata, invoice PDFs, My Account downloads, and refund-linked credit notes so repeat fleet buyers can purchase without support emails.",
  },
  {
    title: "Garage or workshop selling parts, labour, and deposits",
    pain: "A single WooCommerce order can include diagnostic fees, parts, labour, consumables, warranty decisions, and deposits, but the customer invoice needs a clean explanation.",
    lattice:
      "Preserve job-card context, vehicle references, paid deposit lines, final invoice PDFs, and credit-note corrections in the WooCommerce order workflow.",
  },
  {
    title: "Online parts store handling wrong-fitment returns",
    pain: "Customers order incompatible parts, shipping fees change, return labels are issued, and partial refunds need clear credit notes tied to the original invoice number.",
    lattice:
      "Keep fitment data and refund reasons connected so support can issue credit notes without rebuilding the invoice history manually.",
  },
];

const setupFields = [
  "Company name, VAT/BTW number, invoice email, and billing country",
  "PO number, job-card reference, fleet asset ID, or procurement reference",
  "VIN, registration number, make/model/year, engine code, or fitment note",
  "SKU, OE/OEM number, supplier part number, and warehouse/source reference",
  "Core charge, deposit, warranty status, disposal fee, or environmental fee",
  "Delivery method, tracking number, collection point, and shipping VAT treatment",
  "Refund reason, wrong-fitment decision, warranty credit, and restocking fee",
  "Accountant export status, retained PDF link, invoice number, and credit-note number",
];

const faq = [
  {
    q: "What should a WooCommerce automotive parts invoice plugin handle?",
    a: "Prioritize VAT/BTW business billing fields, PO references, vehicle or fitment metadata, retained invoice PDFs, customer downloads, refund-linked credit notes, warranty/core-charge adjustments, and accountant export fields.",
  },
  {
    q: "Should VIN or vehicle data appear on the customer PDF?",
    a: "It depends on the store and customer type. A fleet or garage invoice may need VIN, registration, or job-card context on the PDF, while a consumer accessory order may only need internal fitment metadata for support and returns.",
  },
  {
    q: "Can Lattice Invoices qualify an automotive parts workflow before purchase?",
    a: "Yes. The early-access path is a €49 fit review: send store URL, countries sold into, B2B/B2C mix, vehicle fields, PO workflow, refund/warranty examples, and accountant export requirements so Lattice can confirm fit.",
  },
  {
    q: "What should I send for an automotive invoice review?",
    a: "Send your store URL, product categories, vehicle/fitment fields, B2B buyer requirements, PO/job-card process, VAT countries, warranty or core-charge examples, refund scenarios, and the PDF/export evidence your accountant needs.",
  },
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "WooCommerce automotive parts invoices for VIN, VAT, PO, and PDF workflows",
  description:
    "A buyer-intent guide for automotive parts and fleet supply stores evaluating WooCommerce invoice plugins for vehicle metadata, VAT fields, PO references, credit notes, and accounting exports.",
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
  "mailto:support@latticeplugins.com?subject=WooCommerce%20automotive%20parts%20invoice%20workflow%20review&body=Hi%20Lattice%2C%0A%0AI%20want%20a%20WooCommerce%20automotive%20parts%20invoice%20workflow%20review.%0A%0AStore%20URL%3A%20%0AProducts%20sold%20(parts%2C%20tyres%2C%20accessories%2C%20fleet%20supplies%2C%20garage%20services)%3A%20%0ACountries%20sold%20into%3A%20%0AB2B%2FB2C%20mix%3A%20%0AVAT%2FBTW%20fields%20needed%3A%20%0AVIN%2Fregistration%2Ffitment%20fields%20needed%3A%20%0APO%2Fjob-card%2Ffleet%20asset%20references%3A%20%0AWarranty%2Fcore-charge%2Frefund%20cases%3A%20%0AAccountant%20export%20fields%3A%20";

export default function WooCommerceAutomotivePartsInvoicesPage() {
  return (
    <main className="min-h-screen bg-slate-50">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <section className="bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900 text-white">
        <div className="max-w-5xl mx-auto px-6 py-16 lg:py-20">
          <p className="uppercase tracking-[0.3em] text-sm text-blue-200 mb-4">Automotive parts VAT invoices</p>
          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
            WooCommerce automotive parts invoices for VIN, VAT, PO, warranty, and refund workflows.
          </h1>
          <p className="text-xl text-blue-50 leading-relaxed max-w-3xl mb-8">
            Automotive stores need invoices that connect business billing data, vehicle fitment, PO references, supplier part numbers, warranty decisions, core charges, shipping, refunds, and credit notes without forcing support to rebuild every order manually.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href={mailto} className="bg-green-400 text-slate-950 px-8 py-4 rounded-xl font-semibold hover:bg-green-300 transition shadow-lg text-center">
              Request €49 automotive invoice review
            </a>
            <Link href="/woocommerce-eu-vat-invoices" className="bg-white/10 border border-white/20 text-white px-8 py-4 rounded-xl font-semibold hover:bg-white/15 transition text-center">
              View Lattice Invoices offer
            </Link>
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-14">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <article className="lg:col-span-2 space-y-8">
            <div className="bg-white rounded-2xl border shadow-sm p-8">
              <h2 className="text-3xl font-bold mb-4">Why automotive invoice workflows break inside WooCommerce</h2>
              <p className="text-slate-700 leading-relaxed mb-4">
                A vehicle-part order is rarely just a simple product sale. It can include compatibility checks, VIN or registration data, OEM/OE references, PO numbers, job cards, deposits, core charges, warranty decisions, shipping adjustments, and returns. A generic PDF invoice often misses the context that makes the order defensible.
              </p>
              <p className="text-slate-700 leading-relaxed">
                Lattice Invoices is positioned for stores that need workflow fit before purchase: the €49 early-access review checks whether VAT fields, vehicle references, PO data, PDF delivery, credit notes, and accountant export needs can be handled cleanly.
              </p>
            </div>

            <div className="bg-blue-50 border border-blue-100 rounded-2xl p-8">
              <h2 className="text-3xl font-bold mb-5">Automotive invoice plugin purchase checklist</h2>
              <div className="space-y-4">
                {workflowChecks.map((item) => (
                  <div key={item.title} className="bg-white rounded-xl border border-blue-100 p-5">
                    <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                    <p className="text-slate-700 leading-relaxed mb-2">{item.detail}</p>
                    <p className="text-slate-600 leading-relaxed"><strong>Ask before buying:</strong> {item.buyerQuestion}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-2xl border shadow-sm p-8">
              <h2 className="text-3xl font-bold mb-5">Three automotive workflows to test before choosing a plugin</h2>
              <div className="grid gap-4">
                {scenarios.map((item) => (
                  <div key={item.title} className="border rounded-xl p-5">
                    <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                    <p className="text-slate-700 leading-relaxed mb-2"><strong>Risk:</strong> {item.pain}</p>
                    <p className="text-slate-700 leading-relaxed"><strong>Lattice direction:</strong> {item.lattice}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-2xl border shadow-sm p-8">
              <h2 className="text-3xl font-bold mb-4">Invoice fields automotive stores should capture before the PDF is generated</h2>
              <p className="text-slate-700 leading-relaxed mb-5">
                The best moment to capture invoice and vehicle context is before payment, dispatch, or warranty approval. If VIN, PO, part references, and refund reasons are added later, finance and support have to reconstruct the order from chats, supplier dashboards, and spreadsheets.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {setupFields.map((field) => (
                  <div key={field} className="bg-slate-50 border rounded-xl p-4 text-slate-700">
                    ✓ {field}
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-slate-950 text-white rounded-2xl p-8">
              <h2 className="text-3xl font-bold mb-4">Turn automotive invoice exceptions into a purchase-ready setup brief</h2>
              <p className="text-slate-200 leading-relaxed mb-6">
                If your parts store already spends time correcting missing VAT data, vehicle references, PO fields, warranty refunds, core-charge returns, or lost invoice PDFs, the €49 review creates a concise setup brief before you commit to the invoice workflow.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href={mailto} className="bg-green-400 text-slate-950 px-6 py-3 rounded-xl font-semibold text-center hover:bg-green-300 transition">
                  Send automotive invoice fit request
                </a>
                <Link href="/tools/woocommerce-invoice-setup-brief" className="border border-white/20 px-6 py-3 rounded-xl font-semibold text-center hover:bg-white/10 transition">
                  Generate setup brief first
                </Link>
              </div>
            </div>

            <div className="bg-white rounded-2xl border shadow-sm p-8">
              <h2 className="text-3xl font-bold mb-5">Automotive parts invoice FAQ</h2>
              <div className="space-y-5">
                {faq.map((item) => (
                  <div key={item.q} className="border-b pb-5 last:border-b-0 last:pb-0">
                    <h3 className="text-xl font-bold mb-2">{item.q}</h3>
                    <p className="text-slate-700 leading-relaxed">{item.a}</p>
                  </div>
                ))}
              </div>
            </div>
          </article>

          <aside className="space-y-5">
            <div className="bg-white border rounded-2xl p-6 shadow-sm sticky top-6">
              <h2 className="text-2xl font-bold mb-3">Need automotive VAT invoices?</h2>
              <p className="text-slate-700 mb-5">
                Send your vehicle, PO, VAT, warranty, refund, and PDF requirements. Lattice will qualify whether the invoice workflow is a fit before purchase.
              </p>
              <a href={mailto} className="block text-center bg-blue-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-blue-700 transition mb-3">
                Request €49 automotive review
              </a>
              <Link href="/demo/lattice-invoices" className="block text-center border border-slate-200 px-6 py-3 rounded-xl font-semibold hover:border-blue-400 transition mb-3">
                View invoice demo
              </Link>
              <Link href="/blog/woocommerce-repair-service-invoices" className="block text-center border border-slate-200 px-6 py-3 rounded-xl font-semibold hover:border-blue-400 transition mb-3">
                Repair service invoice guide
              </Link>
              <Link href="/blog/woocommerce-wholesale-invoice-plugin" className="block text-center border border-slate-200 px-6 py-3 rounded-xl font-semibold hover:border-blue-400 transition mb-3">
                Wholesale invoice guide
              </Link>
              <Link href="/blog/woocommerce-invoice-export-accounting" className="block text-center border border-slate-200 px-6 py-3 rounded-xl font-semibold hover:border-blue-400 transition">
                Accounting export guide
              </Link>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}
