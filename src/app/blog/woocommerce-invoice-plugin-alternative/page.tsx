import type { Metadata } from "next";
import Link from "next/link";

const SITE_URL = "https://latticeplugins.com";
const SLUG = "/blog/woocommerce-invoice-plugin-alternative";

export const metadata: Metadata = {
  title: "WooCommerce Invoice Plugin Alternative for EU VAT Stores",
  description:
    "A buyer-intent alternative checklist for WooCommerce stores comparing invoice plugins: VAT fields, PDF invoices, credit notes, customer downloads, accounting export, and one-time pricing.",
  alternates: {
    canonical: `${SITE_URL}${SLUG}`,
  },
  openGraph: {
    title: "WooCommerce invoice plugin alternative for EU VAT stores",
    description:
      "Use this practical buying checklist before replacing your WooCommerce invoice plugin or choosing an alternative to basic PDF invoice tools.",
    url: `${SITE_URL}${SLUG}`,
    siteName: "Lattice Plugins",
    type: "article",
  },
};

const alternativeSignals = [
  "Your current plugin creates a PDF but does not collect VAT/BTW numbers before payment.",
  "Credit notes for refunds still happen manually in spreadsheets or accounting software.",
  "Customers ask support to resend invoice PDFs because downloads are hard to find.",
  "The invoice number sequence is tied to order IDs instead of a clean accounting sequence.",
  "Your accountant needs structured VAT data, not only a PDF attachment.",
];

const comparisonRows = [
  ["B2B checkout fields", "Often handled by a separate custom-field plugin", "Built into the invoice workflow so order metadata is invoice-ready"],
  ["PDF invoice delivery", "Email attachment only, with weak customer download flow", "Email attachment plus My Account download and support resend path"],
  ["Refund documents", "Manual credit notes or overwritten PDFs", "Refund-linked credit notes that preserve the original invoice"],
  ["VAT evidence", "Tax totals exist, but VAT ID and treatment reason are scattered", "VAT/BTW number, tax rate, reverse-charge reason, and invoice fields stay together"],
  ["Buying model", "Subscription or add-on stack can grow over time", "€49 early-access path for stores that fit the EU invoice use case"],
];

const migrationSteps = [
  {
    title: "1. Audit the current invoice gap",
    text: "List where the workflow breaks today: missing VAT field, no credit notes, weak customer downloads, unclear invoice numbers, or accountant export cleanup.",
  },
  {
    title: "2. Keep historical invoices untouched",
    text: "Do not replace old PDFs or invoice numbers during a plugin switch. Preserve the previous sequence and start the new workflow from a clean cutoff date.",
  },
  {
    title: "3. Test the next paid order and refund",
    text: "Run one paid order, one refund, one My Account download, and one customer email before depending on the new plugin for real accounting handoff.",
  },
  {
    title: "4. Confirm the buyer-facing promise",
    text: "Make sure checkout explains business invoice fields clearly so B2B customers trust the store before paying.",
  },
];

const faq = [
  {
    q: "What is a good alternative to a basic WooCommerce PDF invoice plugin?",
    a: "A good alternative should solve the full workflow, not just PDF design: VAT/BTW fields, invoice numbers, credit notes, customer downloads, email attachments, and accounting-ready metadata.",
  },
  {
    q: "Should I replace my current invoice plugin immediately?",
    a: "Not without a migration checklist. Keep historical invoice numbers and PDFs intact, then test the new workflow on a paid order and refund before switching customer-facing emails.",
  },
  {
    q: "Where does Lattice Invoices fit?",
    a: "Lattice Invoices is positioned as the focused €49 early-access workflow for EU WooCommerce stores that need invoice readiness around VAT/BTW, credit notes, downloads, and support reduction.",
  },
];

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "WooCommerce Invoice Plugin Alternative for EU VAT Stores",
  description:
    "Buyer-intent checklist for WooCommerce stores comparing invoice plugin alternatives for EU VAT, PDF invoices, credit notes, customer downloads, and accountant export.",
  author: {
    "@type": "Organization",
    name: "Lattice Plugins",
  },
  publisher: {
    "@type": "Organization",
    name: "Lattice Plugins",
  },
  mainEntityOfPage: `${SITE_URL}${SLUG}`,
};

export default function WooCommerceInvoicePluginAlternativePage() {
  return (
    <main className="min-h-screen bg-slate-50">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <section className="bg-gradient-to-br from-slate-950 via-indigo-950 to-blue-900 text-white">
        <div className="max-w-5xl mx-auto px-6 py-16">
          <p className="uppercase tracking-[0.25em] text-sm text-blue-200 mb-4">Invoice plugin alternative</p>
          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
            WooCommerce invoice plugin alternative for EU VAT stores.
          </h1>
          <p className="text-xl text-blue-50 leading-relaxed max-w-3xl mb-8">
            Replacing a WooCommerce invoice plugin is not about prettier PDFs. EU stores need VAT/BTW fields,
            reliable invoice numbers, refund credit notes, customer downloads, and clean accounting handoff.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/woocommerce-eu-vat-invoices"
              className="bg-green-500 text-white px-8 py-4 rounded-xl font-semibold hover:bg-green-400 transition text-center"
            >
              View Lattice Invoices offer
            </Link>
            <a
              href="mailto:support@latticeplugins.com?subject=WooCommerce%20invoice%20plugin%20alternative&body=Hi%20Lattice%2C%0A%0AI%20am%20looking%20for%20a%20WooCommerce%20invoice%20plugin%20alternative.%0A%0AStore%20URL%3A%20%0ACurrent%20invoice%20plugin%3A%20%0AMissing%20workflow%3A%20%0AVAT%2FBTW%20fields%20needed%3A%20%0ACredit%20notes%20needed%3A%20"
              className="bg-white/10 border border-white/20 text-white px-8 py-4 rounded-xl font-semibold hover:bg-white/15 transition text-center"
            >
              Ask if my store fits
            </a>
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-14 grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-8">
          <article className="bg-white rounded-2xl border shadow-sm p-8">
            <h2 className="text-3xl font-bold mb-4">When to look for an alternative</h2>
            <p className="text-slate-700 leading-relaxed mb-5">
              A basic PDF invoice plugin may be enough for simple B2C stores. It becomes expensive when every B2B
              customer creates a support loop around VAT details, corrected invoices, missing downloads, or refunds.
            </p>
            <div className="space-y-3">
              {alternativeSignals.map((signal) => (
                <div key={signal} className="flex gap-3 rounded-xl bg-amber-50 border border-amber-100 p-4">
                  <span className="text-amber-700 font-bold">→</span>
                  <span className="text-slate-800">{signal}</span>
                </div>
              ))}
            </div>
          </article>

          <article className="bg-white rounded-2xl border shadow-sm p-8 overflow-hidden">
            <h2 className="text-3xl font-bold mb-4">What to compare before switching</h2>
            <p className="text-slate-700 leading-relaxed mb-6">
              Use this table as a purchase filter. If an alternative only changes the PDF template, it may not reduce
              the operational invoice work that causes buyers to complain.
            </p>
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-slate-100 text-slate-700">
                    <th className="p-4 rounded-l-xl">Requirement</th>
                    <th className="p-4">Typical basic plugin</th>
                    <th className="p-4 rounded-r-xl">Better EU invoice workflow</th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonRows.map(([need, basic, better]) => (
                    <tr key={need} className="border-b border-slate-100">
                      <td className="p-4 font-semibold text-slate-900">{need}</td>
                      <td className="p-4 text-slate-600">{basic}</td>
                      <td className="p-4 text-slate-800">{better}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </article>

          <article className="bg-white rounded-2xl border shadow-sm p-8">
            <h2 className="text-3xl font-bold mb-6">Safe migration checklist</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {migrationSteps.map((step) => (
                <div key={step.title} className="rounded-xl border border-slate-200 bg-slate-50 p-5">
                  <h3 className="font-bold text-lg mb-2">{step.title}</h3>
                  <p className="text-slate-700 leading-relaxed">{step.text}</p>
                </div>
              ))}
            </div>
          </article>

          <article className="bg-slate-950 text-white rounded-2xl shadow-sm p-8">
            <p className="uppercase tracking-[0.25em] text-sm text-blue-200 mb-3">Revenue CTA</p>
            <h2 className="text-3xl font-bold mb-4">Need the alternative because invoices cost support time?</h2>
            <p className="text-slate-200 leading-relaxed mb-6">
              Send the current plugin name and the exact invoice gap. That turns a vague plugin search into a qualified
              Lattice Invoices early-access conversation around the €49 WooCommerce EU invoice workflow.
            </p>
            <a
              href="mailto:support@latticeplugins.com?subject=Lattice%20Invoices%20alternative%20fit%20check&body=Hi%20Lattice%2C%0A%0AI%20want%20to%20check%20whether%20Lattice%20Invoices%20is%20a%20fit%20as%20a%20WooCommerce%20invoice%20plugin%20alternative.%0A%0AStore%20URL%3A%20%0ACurrent%20invoice%20plugin%3A%20%0AInvoice%20requests%20per%20month%3A%20%0AMissing%20features%3A%20%0ARequired%20VAT%2FBTW%20fields%3A%20"
              className="inline-flex bg-green-500 text-white px-6 py-3 rounded-xl font-semibold hover:bg-green-400 transition"
            >
              Request alternative fit check
            </a>
          </article>

          <article className="bg-white rounded-2xl border shadow-sm p-8">
            <h2 className="text-3xl font-bold mb-6">FAQ</h2>
            <div className="space-y-5">
              {faq.map((item) => (
                <div key={item.q}>
                  <h3 className="font-semibold text-lg mb-2">{item.q}</h3>
                  <p className="text-slate-700 leading-relaxed">{item.a}</p>
                </div>
              ))}
            </div>
          </article>
        </div>

        <aside className="space-y-6">
          <div className="bg-white rounded-2xl border shadow-sm p-6 sticky top-6">
            <p className="text-sm uppercase tracking-widest text-blue-600 font-semibold mb-2">Next step</p>
            <h2 className="text-2xl font-bold mb-3">Compare against Lattice Invoices</h2>
            <p className="text-slate-700 mb-5">
              The invoice product path is strongest for EU WooCommerce stores that already feel manual invoice pain.
            </p>
            <Link
              href="/woocommerce-eu-vat-invoices"
              className="block text-center bg-blue-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-blue-700 transition mb-3"
            >
              Open invoice landing page
            </Link>
            <Link
              href="/docs/woocommerce-eu-vat-invoice-setup"
              className="block text-center border border-slate-200 px-6 py-3 rounded-xl font-semibold hover:border-blue-400 transition mb-3"
            >
              Read setup guide
            </Link>
            <Link
              href="/blog/woocommerce-invoice-plugin-comparison"
              className="block text-center border border-slate-200 px-6 py-3 rounded-xl font-semibold hover:border-blue-400 transition mb-3"
            >
              Read plugin comparison
            </Link>
            <Link
              href="/blog/woocommerce-pdf-invoices-packing-slips-alternative"
              className="block text-center border border-slate-200 px-6 py-3 rounded-xl font-semibold hover:border-blue-400 transition"
            >
              Compare PDF invoice alternatives
            </Link>
          </div>
        </aside>
      </section>
    </main>
  );
}
