import type { Metadata } from "next";
import Link from "next/link";

const SITE_URL = "https://latticeplugins.com";

export const metadata: Metadata = {
  title: "WooCommerce Invoice Plugin Cost: What EU VAT Stores Should Budget",
  description:
    "A buyer-intent pricing guide for WooCommerce invoice plugins: PDF invoices, VAT fields, credit notes, accountant export, setup time, support cost, and Lattice Invoices early access.",
  alternates: {
    canonical: `${SITE_URL}/blog/woocommerce-invoice-plugin-cost`,
  },
  openGraph: {
    title: "WooCommerce invoice plugin cost for EU VAT stores",
    description:
      "Compare the real cost of WooCommerce invoice plugins before buying: license price, setup time, VAT fields, credit notes, invoice corrections, and accountant handoff.",
    url: `${SITE_URL}/blog/woocommerce-invoice-plugin-cost`,
    siteName: "Lattice Plugins",
    type: "article",
  },
};

const costRows = [
  {
    cost: "Plugin license",
    cheapRoute: "Free or €20–€40 PDF invoice add-on",
    hiddenRisk: "May only solve templates and email attachments, not EU VAT/BTW checkout fields or credit notes.",
    betterBudget: "Budget around €49–€99 for the workflow, not just the PDF file.",
  },
  {
    cost: "Setup time",
    cheapRoute: "Install a PDF plugin and accept defaults",
    hiddenRisk: "Invoice numbers, VAT fields, refund handling, and customer downloads are often discovered later by support tickets.",
    betterBudget: "Spend 30–60 minutes mapping the checkout fields, invoice number format, refund flow, and accountant export before launch.",
  },
  {
    cost: "Invoice corrections",
    cheapRoute: "Fix missing VAT details manually after payment",
    hiddenRisk: "Each correction costs support time and makes B2B buyers less confident about repeat orders.",
    betterBudget: "Collect company, VAT/BTW number, invoice email, and PO/reference details before payment.",
  },
  {
    cost: "Refunds and credit notes",
    cheapRoute: "Edit the original invoice or send a manual negative PDF",
    hiddenRisk: "Finance loses the relationship between the original invoice, refund, VAT correction, and customer document.",
    betterBudget: "Use a separate credit-note workflow with its own number and a link back to the original invoice.",
  },
  {
    cost: "Accounting handoff",
    cheapRoute: "Export orders and send PDFs separately",
    hiddenRisk: "Month-end reconciliation becomes a spreadsheet job when VAT treatment, paid date, credit notes, and PDF links do not agree.",
    betterBudget: "Export invoice number, order ID, VAT amount, paid status, customer VAT ID, credit-note link, and PDF URL together.",
  },
];

const buyingQuestions = [
  "Does the plugin collect VAT/BTW numbers before payment, or only print data that already exists?",
  "Can invoice numbers use a clean yearly sequence separate from WooCommerce order IDs?",
  "Are credit notes created for refunds with their own number and original-invoice reference?",
  "Can customers download the same PDF from My Account that was attached to their email?",
  "Will the accountant get VAT totals, paid status, invoice date, PDF links, and credit-note references in one export?",
  "Can bank transfer, proforma, partial payment, and subscription renewal cases fit the same workflow?",
];

const scenarios = [
  {
    title: "Small B2C shop with occasional invoice requests",
    budget: "A basic PDF invoice plugin may be enough if VAT details are simple and refunds are rare.",
  },
  {
    title: "Dutch or EU store selling to businesses",
    budget: "Budget for VAT/BTW fields, reverse-charge support, invoice numbering, customer downloads, and credit notes before optimizing PDF styling.",
  },
  {
    title: "B2B store using bank transfer or purchase orders",
    budget: "The cost is not just the plugin. Budget for proforma/payment-request flow, payment reconciliation, PO references, and final invoice timing.",
  },
  {
    title: "Store replacing a messy invoice stack",
    budget: "Plan migration time: preserve old invoice numbers, retained PDFs, credit-note history, export format, and customer download expectations.",
  },
];

const faq = [
  {
    q: "How much should a WooCommerce invoice plugin cost?",
    a: "For a simple B2C PDF invoice, a low-cost or free plugin may work. EU VAT stores should compare the full workflow cost: VAT fields, invoice numbering, credit notes, customer downloads, and accounting export. A €49 workflow can be cheaper than repeated manual invoice corrections.",
  },
  {
    q: "Is a free WooCommerce invoice plugin enough for EU VAT?",
    a: "Sometimes, but only if your checkout already captures the right company and VAT data and refunds are simple. If customers email missing invoice details after payment, the free route is creating hidden support cost.",
  },
  {
    q: "Why does Lattice Invoices use a €49 early-access price?",
    a: "The price is positioned as a focused WooCommerce EU invoice workflow rather than a broad subscription. Early-access buyers get qualification around their store, invoice-number format, VAT fields, and credit-note needs before the public product listing is finalized.",
  },
  {
    q: "What should I send before buying?",
    a: "Send your store URL, country, B2B/B2C mix, current invoice plugin, current VAT plugin, payment methods, invoice-number format, refund/credit-note needs, and accounting software. That makes the buying decision concrete.",
  },
];

const mailto =
  "mailto:support@latticeplugins.com?subject=WooCommerce%20invoice%20plugin%20cost%20review&body=Hi%20Lattice%2C%0A%0AI%20want%20help%20deciding%20what%20to%20budget%20for%20a%20WooCommerce%20invoice%20plugin.%0A%0AStore%20URL%3A%20%0ACountry%3A%20%0AB2B%20or%20B2C%3A%20%0ACurrent%20invoice%20plugin%3A%20%0ACurrent%20VAT%2FBTW%20plugin%3A%20%0APayment%20methods%3A%20%0ARefund%2Fcredit-note%20needs%3A%20%0AAccounting%20software%3A%20%0ABiggest%20manual%20invoice%20cost%3A%20";

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "WooCommerce invoice plugin cost for EU VAT stores",
  description:
    "A buyer-intent pricing guide for WooCommerce invoice plugins, VAT fields, credit notes, accountant exports, and Lattice Invoices early access.",
  mainEntityOfPage: `${SITE_URL}/blog/woocommerce-invoice-plugin-cost`,
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

export default function WooCommerceInvoicePluginCostPage() {
  return (
    <main className="min-h-screen bg-slate-50">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <section className="bg-gradient-to-br from-slate-950 via-blue-950 to-emerald-900 text-white">
        <div className="max-w-5xl mx-auto px-6 py-16 lg:py-20">
          <p className="uppercase tracking-[0.3em] text-sm text-emerald-200 mb-4">WooCommerce invoice plugin pricing</p>
          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
            WooCommerce invoice plugin cost: what EU VAT stores should budget before buying.
          </h1>
          <p className="text-xl text-blue-50 leading-relaxed max-w-3xl mb-8">
            The cheapest invoice plugin is not always the lowest-cost choice. Use this guide to budget for the real workflow: VAT/BTW fields, invoice numbers, credit notes, customer downloads, and accountant handoff.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href={mailto} className="bg-emerald-500 text-white px-8 py-4 rounded-xl font-semibold hover:bg-emerald-400 transition shadow-lg text-center">
              Request a €49 invoice cost review
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
              <h2 className="text-3xl font-bold mb-4">The real cost is manual invoice cleanup</h2>
              <p className="text-slate-700 leading-relaxed mb-4">
                Store owners usually search for price first: free invoice plugin, cheap PDF invoice plugin, or one-time WooCommerce invoice add-on. That is reasonable, but the bigger cost appears later when customers request corrected invoices, VAT details are missing, refunds need credit notes, and the accountant asks for evidence.
              </p>
              <p className="text-slate-700 leading-relaxed">
                For EU VAT stores, budget around the workflow rather than the template. A good buying decision asks what happens before payment, after refund, during month-end export, and when a returning B2B customer downloads the document later.
              </p>
            </div>

            <div className="bg-white rounded-2xl border shadow-sm p-8 overflow-hidden">
              <h2 className="text-3xl font-bold mb-6">Cost breakdown before you buy</h2>
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-slate-100 text-slate-700">
                      <th className="p-4 rounded-l-xl">Cost area</th>
                      <th className="p-4">Cheap route</th>
                      <th className="p-4">Hidden risk</th>
                      <th className="p-4 rounded-r-xl">Better budget</th>
                    </tr>
                  </thead>
                  <tbody>
                    {costRows.map((row) => (
                      <tr key={row.cost} className="border-b border-slate-100 align-top">
                        <td className="p-4 font-semibold text-slate-900">{row.cost}</td>
                        <td className="p-4 text-slate-700">{row.cheapRoute}</td>
                        <td className="p-4 text-slate-600">{row.hiddenRisk}</td>
                        <td className="p-4 text-slate-800">{row.betterBudget}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div className="bg-emerald-50 border border-emerald-100 rounded-2xl p-8">
              <h2 className="text-3xl font-bold mb-5">Six buying questions that prevent wasted spend</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {buyingQuestions.map((question, index) => (
                  <div key={question} className="flex gap-3 bg-white rounded-xl border border-emerald-100 p-4">
                    <span className="text-emerald-700 font-bold">{index + 1}</span>
                    <span className="text-slate-800">{question}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-2xl border shadow-sm p-8">
              <h2 className="text-3xl font-bold mb-6">What different stores should budget for</h2>
              <div className="space-y-4">
                {scenarios.map((item) => (
                  <div key={item.title} className="rounded-xl border border-slate-200 bg-slate-50 p-5">
                    <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                    <p className="text-slate-700 leading-relaxed">{item.budget}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-2xl border shadow-sm p-8">
              <h2 className="text-3xl font-bold mb-6">FAQ</h2>
              <div className="space-y-5">
                {faq.map((item) => (
                  <div key={item.q}>
                    <h3 className="font-semibold text-lg mb-2">{item.q}</h3>
                    <p className="text-slate-700 leading-relaxed">{item.a}</p>
                  </div>
                ))}
              </div>
            </div>
          </article>

          <aside className="space-y-6">
            <div className="bg-white rounded-2xl border shadow-sm p-6 sticky top-6">
              <div className="rounded-2xl bg-slate-900 text-white p-5 mb-6">
                <p className="text-sm uppercase tracking-widest text-emerald-200 mb-2">Early-access benchmark</p>
                <div className="flex items-end gap-2 mb-2">
                  <span className="text-4xl font-bold">€49</span>
                  <span className="text-slate-300 mb-1">one-time</span>
                </div>
                <p className="text-sm text-slate-200 leading-relaxed">
                  Use the €49 Lattice Invoices early-access price as a sanity check against the time cost of manual invoice fixes.
                </p>
              </div>
              <h2 className="text-2xl font-bold mb-3">Get a decision path</h2>
              <p className="text-slate-700 mb-4">
                Send the current invoice setup and the biggest manual cost. The reply should turn the budget question into a concrete buy / wait / replace decision.
              </p>
              <a href={mailto} className="block text-center bg-blue-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-blue-700 transition mb-3">
                Request cost review
              </a>
              <Link href="/woocommerce-eu-vat-invoices" className="block text-center border border-slate-200 px-6 py-3 rounded-xl font-semibold hover:border-blue-400 transition mb-3">
                View Lattice Invoices
              </Link>
              <Link href="/blog/woocommerce-invoice-plugin-comparison" className="block text-center border border-slate-200 px-6 py-3 rounded-xl font-semibold hover:border-blue-400 transition mb-3">
                Compare plugin options
              </Link>
              <Link href="/docs/woocommerce-eu-vat-invoice-setup" className="block text-center border border-slate-200 px-6 py-3 rounded-xl font-semibold hover:border-blue-400 transition">
                Read setup guide
              </Link>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}
