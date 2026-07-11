import type { Metadata } from "next";
import Link from "next/link";

const SITE_URL = "https://latticeplugins.com";
const SLUG = "/blog/woocommerce-invoice-plugin-for-law-firms";

export const metadata: Metadata = {
  title: "WooCommerce Invoice Plugin for Law Firms — VAT, Retainers, PDFs",
  description:
    "Buyer-intent guide for law firms and legal consultants selling paid consults, retainers, document reviews, and fixed-fee services through WooCommerce.",
  alternates: {
    canonical: `${SITE_URL}${SLUG}`,
  },
  openGraph: {
    title: "WooCommerce invoice plugin for law firms and legal services",
    description:
      "How legal-service WooCommerce stores should handle VAT fields, client references, retainers, invoice PDFs, refunds, credit notes, and accountant handoff.",
    url: `${SITE_URL}${SLUG}`,
    siteName: "Lattice Plugins",
    type: "article",
  },
};

const painPoints = [
  {
    title: "Paid consults need a business invoice, not only a payment receipt",
    detail:
      "A client can book a legal consult, document review, or fixed-fee package through WooCommerce and still need the invoice issued to a company, foundation, insurer, or finance department.",
    fix: "Collect legal billing name, company/VAT ID, matter reference, and invoice email before the order is paid.",
  },
  {
    title: "Retainers and deposits create unclear invoice timing",
    detail:
      "Law firms often sell initial retainers, prepaid hours, fixed-fee bundles, or milestone payments. A generic PDF invoice plugin can blur proforma, paid invoice, balance invoice, and credit-note handling.",
    fix: "Keep proforma/payment-request documents separate from final VAT invoices and refund credit notes.",
  },
  {
    title: "Matter references and PO numbers must survive accountant export",
    detail:
      "Legal finance teams need order, invoice, client, matter, VAT, payment status, refund relationship, and PDF evidence connected. A support note is not enough.",
    fix: "Store invoice metadata on the WooCommerce order so it can be exported or reviewed later.",
  },
];

const featureRows = [
  ["Client billing fields", "Company/legal name, VAT/BTW number, invoice email, billing country, and optional matter or client reference."],
  ["Retainer workflow", "Proforma or payment request before payment, final invoice after payment, and clear balance-payment handling."],
  ["Sequential invoice numbers", "A finance-friendly invoice sequence that does not rely on WooCommerce order IDs alone."],
  ["PDF invoice delivery", "Attach the invoice PDF to the right WooCommerce email and keep it available in My Account."],
  ["Credit notes", "Refunds, partial refunds, and corrected invoices need linked credit-note records, not overwritten PDFs."],
  ["Accountant handoff", "VAT totals, client references, invoice numbers, PDF links, and payment status must remain exportable."],
];

const scenarioRows = [
  {
    scenario: "Paid legal consult",
    risk: "Client pays as an individual first, then asks for a company invoice afterwards.",
    workflow: "Require invoice-ready billing fields before checkout and lock them into the order metadata.",
  },
  {
    scenario: "Document review package",
    risk: "The legal team needs a matter or client reference that never reaches the PDF invoice.",
    workflow: "Add a reference field and show it on the invoice PDF plus export row.",
  },
  {
    scenario: "Retainer or deposit",
    risk: "The store sends a final invoice too early, then finance manually corrects it later.",
    workflow: "Use proforma/payment-request language first, then issue final invoice when payment policy is met.",
  },
  {
    scenario: "Refunded intake call",
    risk: "WooCommerce refund records do not automatically create finance-grade credit notes.",
    workflow: "Create a linked credit note and keep both original invoice and correction visible.",
  },
];

const qualification = [
  { signal: "You sell paid consults or fixed-fee legal services via WooCommerce", score: "+2" },
  { signal: "Clients regularly request company/VAT invoices after checkout", score: "+2" },
  { signal: "You accept retainers, deposits, or milestone payments", score: "+2" },
  { signal: "Matter references, PO numbers, or finance email fields are needed", score: "+1" },
  { signal: "Refunds or credit notes are handled manually", score: "+1" },
];

const internalLinks = [
  { href: "/woocommerce-eu-vat-invoices", label: "Lattice Invoices €49 early-access offer" },
  { href: "/demo/lattice-invoices", label: "View invoice workflow demo" },
  { href: "/tools/woocommerce-invoice-setup-brief", label: "Generate an invoice setup brief" },
  { href: "/tools/woocommerce-invoice-roi-calculator", label: "Calculate invoice admin ROI" },
  { href: "/blog/woocommerce-b2b-service-invoices", label: "B2B service invoice workflow" },
  { href: "/blog/woocommerce-proforma-invoice", label: "Proforma invoice workflow" },
  { href: "/blog/woocommerce-partial-payment-invoices", label: "Partial payment invoice guide" },
  { href: "/blog/woocommerce-invoice-approval-workflow", label: "Invoice approval workflow" },
  { href: "/blog/woocommerce-invoice-export-accounting", label: "Accounting export guide" },
];

const faq = [
  {
    q: "Can a law firm use WooCommerce for paid consults and still issue VAT invoices?",
    a: "Yes, if the checkout captures invoice-ready billing data and the invoice workflow keeps legal billing name, VAT ID, invoice number, payment status, and PDF evidence connected to the WooCommerce order.",
  },
  {
    q: "Should retainers be treated differently from normal product invoices?",
    a: "Usually yes. Retainers and deposits often need proforma/payment-request language before final invoicing, plus careful balance-payment and credit-note handling. Confirm exact treatment with an accountant.",
  },
  {
    q: "What makes Lattice Invoices relevant for legal-service stores?",
    a: "The early-access workflow focuses on WooCommerce-native B2B invoice fields, PDF delivery, customer downloads, credit notes, and accountant handoff instead of only styling a PDF template.",
  },
  {
    q: "What should a legal-service store send before requesting early access?",
    a: "Send the store URL, country, service types, B2B/B2C split, retainer/deposit flow, VAT fields, matter/reference requirements, invoice-number format, and whether refunds require credit notes.",
  },
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "WooCommerce invoice plugin for law firms and legal services",
  description:
    "Buyer-intent guide for law firms and legal consultants selling paid consults, retainers, document reviews, and fixed-fee services through WooCommerce.",
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
  "mailto:support@latticeplugins.com?subject=Law%20firm%20WooCommerce%20invoice%20workflow%20-%20Lattice%20Invoices&body=Hi%20Lattice%2C%0A%0AI%20want%20to%20check%20whether%20Lattice%20Invoices%20fits%20a%20law%20firm%20or%20legal-service%20WooCommerce%20workflow.%0A%0AStore%20URL%3A%20%0ACountry%3A%20%0ALegal%20services%20sold%3A%20%0AB2B%2FB2C%20split%3A%20%0ARetainers%20or%20deposits%3A%20%0AVAT%2FBTW%20fields%20needed%3A%20%0AMatter%2Fclient%20reference%20needed%3A%20%0AInvoice%20number%20format%3A%20%0ACredit%20notes%20needed%3A%20%0AAccounting%20tool%3A%20";

export default function WooCommerceInvoicePluginForLawFirmsPage() {
  return (
    <main className="min-h-screen bg-slate-50">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <section className="bg-gradient-to-br from-slate-950 via-indigo-950 to-blue-900 text-white">
        <div className="max-w-6xl mx-auto px-6 py-16 lg:py-20 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div>
            <p className="uppercase tracking-[0.3em] text-sm text-blue-200 mb-4">Legal-service invoice workflow</p>
            <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
              WooCommerce invoice plugin for law firms, retainers, and paid legal consults.
            </h1>
            <p className="text-xl text-blue-50 leading-relaxed mb-8">
              If your firm sells consults, document reviews, retainers, or fixed-fee services through WooCommerce, the invoice workflow must capture client billing details before payment and keep PDFs, credit notes, and accountant exports clean.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href={mailto} className="bg-green-400 text-slate-950 px-8 py-4 rounded-xl font-semibold hover:bg-green-300 transition shadow-lg text-center">
                Request legal-service invoice fit check
              </a>
              <Link href="/woocommerce-eu-vat-invoices" className="bg-white/10 border border-white/20 text-white px-8 py-4 rounded-xl font-semibold hover:bg-white/15 transition text-center">
                View Lattice Invoices offer
              </Link>
            </div>
          </div>

          <div className="bg-white text-slate-900 rounded-2xl shadow-2xl p-6 lg:p-8">
            <p className="text-sm uppercase tracking-widest text-slate-500 mb-2">Buyer qualification</p>
            <h2 className="text-2xl font-bold mb-4">Should a legal-service store request the €49 early-access review?</h2>
            <div className="space-y-3">
              {qualification.map((item) => (
                <div key={item.signal} className="flex gap-3 items-start border rounded-xl p-4">
                  <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-bold">{item.score}</span>
                  <p className="text-slate-700">{item.signal}</p>
                </div>
              ))}
            </div>
            <p className="text-sm text-slate-600 mt-5">
              Score 3+ points? The store probably needs more than a generic PDF invoice plugin.
            </p>
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-14">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <article className="lg:col-span-2 space-y-8">
            <div className="bg-white rounded-2xl border shadow-sm p-8">
              <h2 className="text-3xl font-bold mb-4">Why legal-service WooCommerce invoices are different</h2>
              <p className="text-slate-700 leading-relaxed mb-4">
                A legal-service store may look like a normal WooCommerce checkout, but the back-office requirement is different. A client can pay online and then need the invoice assigned to a company, department, matter, insurer, or accounting inbox.
              </p>
              <p className="text-slate-700 leading-relaxed">
                The safest sales workflow is to reduce invoice questions before checkout: collect the right fields, show the invoice promise, keep PDF evidence, and avoid editing issued documents when a refund or correction requires a credit note.
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

            <div className="bg-blue-50 border border-blue-100 rounded-2xl p-8">
              <h2 className="text-3xl font-bold mb-5">Feature checklist before choosing a plugin</h2>
              <div className="overflow-x-auto">
                <table className="min-w-full text-left border-separate border-spacing-y-3">
                  <thead>
                    <tr className="text-sm uppercase tracking-widest text-blue-800">
                      <th className="p-4 rounded-l-xl bg-white">Requirement</th>
                      <th className="p-4 rounded-r-xl bg-white">Why it matters for law firms</th>
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
              <h2 className="text-3xl font-bold mb-5">Legal-service invoice scenarios</h2>
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
              <h2 className="text-3xl font-bold mb-4">Convert invoice uncertainty into a purchase-ready setup brief</h2>
              <p className="text-slate-200 leading-relaxed mb-6">
                Instead of asking “which invoice plugin should we buy?”, send one concise brief: service type, retainer logic, client billing fields, invoice numbering, refund policy, and accounting export needs. That makes the €49 Lattice Invoices review concrete.
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
              <p className="text-sm uppercase tracking-widest text-blue-700 font-semibold mb-2">Lattice Invoices</p>
              <h2 className="text-2xl font-bold mb-3">Request a legal-service invoice workflow review.</h2>
              <p className="text-slate-700 leading-relaxed mb-5">
                Best fit: WooCommerce stores that sell paid legal consults, fixed-fee reviews, retainers, or B2B services and already see invoice support friction.
              </p>
              <a href={mailto} className="block text-center bg-blue-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-blue-700 transition mb-3">
                Send my law-firm invoice workflow
              </a>
              <Link href="/tools/woocommerce-invoice-fit-check" className="block text-center bg-blue-50 border border-blue-200 text-blue-800 px-6 py-3 rounded-xl font-semibold hover:border-blue-500 transition mb-3">
                Score invoice fit
              </Link>
              <Link href="/tools/woocommerce-invoice-roi-calculator" className="block text-center border border-slate-200 px-6 py-3 rounded-xl font-semibold hover:border-green-400 transition mb-3">
                Calculate invoice ROI
              </Link>
              <Link href="/docs/woocommerce-eu-vat-invoice-setup" className="block text-center border border-slate-200 px-6 py-3 rounded-xl font-semibold hover:border-blue-400 transition">
                Read setup guide
              </Link>
            </div>

            <div className="bg-slate-950 text-white rounded-2xl p-6">
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
