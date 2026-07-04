import type { Metadata } from "next";
import Link from "next/link";

const SITE_URL = "https://latticeplugins.com";

export const metadata: Metadata = {
  title: "WooCommerce Invoice Plugin One-Time Payment: EU VAT Buying Guide",
  description:
    "Buyer-intent guide for WooCommerce stores comparing one-time invoice plugin pricing vs subscriptions: EU VAT fields, PDF invoices, credit notes, customer downloads, and accountant export.",
  alternates: {
    canonical: `${SITE_URL}/blog/woocommerce-invoice-plugin-one-time-payment`,
  },
  openGraph: {
    title: "WooCommerce invoice plugin with one-time payment",
    description:
      "How EU WooCommerce stores should evaluate one-time invoice plugin pricing before buying: VAT fields, invoice PDFs, credit notes, downloads, and support cost.",
    url: `${SITE_URL}/blog/woocommerce-invoice-plugin-one-time-payment`,
    siteName: "Lattice Plugins",
    type: "article",
  },
};

const decisionRows = [
  {
    question: "Is the price one-time or yearly?",
    risk: "A low yearly price can become expensive when the store only needs a stable invoice workflow.",
    buyerCheck: "Compare total cost over 3 years and confirm whether PDF, credit notes, and VAT fields are all included.",
  },
  {
    question: "Does it collect VAT/BTW details before payment?",
    risk: "A PDF-only plugin still creates support tickets if company and VAT details are missing from checkout.",
    buyerCheck: "Look for company name, VAT/BTW number, invoice email, billing country, and PO/reference fields stored on the order.",
  },
  {
    question: "Are credit notes included?",
    risk: "Refunds become manual accounting work when the plugin cannot create a separate credit-note document.",
    buyerCheck: "Confirm that refunds create a credit note with its own number and a link back to the original invoice.",
  },
  {
    question: "Can customers download invoices later?",
    risk: "Missing My Account downloads turn every lost invoice into a support request.",
    buyerCheck: "Require protected invoice downloads, not only email attachments at purchase time.",
  },
  {
    question: "Will accountant export stay clean?",
    risk: "The plugin can look cheap until month-end export needs manual matching of VAT totals, invoice numbers, and refunds.",
    buyerCheck: "Export invoice number, order ID, VAT amount, VAT ID, paid date, credit-note relationship, and PDF link together.",
  },
];

const subscriptionObjections = [
  {
    title: "Subscription pricing is fine when active compliance changes are included",
    text: "If a plugin continuously updates for e-invoicing mandates, integrations, or tax-rule changes, a subscription can make sense. The buying question is whether those updates map to your store's actual risk.",
  },
  {
    title: "One-time pricing is stronger for a narrow WooCommerce workflow",
    text: "If your store needs stable VAT/BTW checkout fields, invoice PDFs, customer downloads, and refund credit notes, a one-time license can be easier to justify than another annual plugin bill.",
  },
  {
    title: "The real comparison is support cost, not license cost",
    text: "A €49 one-time workflow can pay for itself if it prevents a few corrected-invoice emails, lost invoice requests, or refund-document cleanup tasks.",
  },
];

const calculatorRows = [
  ["Manual corrected invoice", "5–10 minutes", "Missing VAT/BTW number or company name after checkout"],
  ["Lost invoice request", "3–8 minutes", "Customer cannot download the PDF from My Account"],
  ["Refund credit note", "10–20 minutes", "Support creates a negative PDF outside WooCommerce"],
  ["Accounting export cleanup", "30–60 minutes/month", "VAT totals, invoice numbers, paid status, and PDFs live in separate places"],
];

const faq = [
  {
    q: "Can I buy a WooCommerce invoice plugin with a one-time payment?",
    a: "Yes, but compare what is included. A one-time price is most attractive when the plugin solves the full WooCommerce invoice workflow: VAT/BTW checkout fields, invoice PDFs, credit notes, customer downloads, and accountant export evidence.",
  },
  {
    q: "Is one-time pricing better than a yearly subscription?",
    a: "Not always. Yearly pricing can be justified for broad compliance platforms or fast-changing integrations. For a focused WooCommerce invoice workflow, one-time pricing is easier to justify if it removes repeated manual invoice support work.",
  },
  {
    q: "Why is Lattice Invoices positioned at €49 one-time early access?",
    a: "The offer is intentionally narrow: EU VAT/BTW invoice workflow for WooCommerce stores. The €49 early-access CTA asks for the store URL, country, B2B/B2C mix, current invoice plugin, VAT fields, numbering format, and credit-note needs before public checkout is opened.",
  },
  {
    q: "What should I check before replacing my current invoice plugin?",
    a: "Check whether your current setup collects VAT details before payment, locks invoice numbers, creates refund credit notes, attaches PDFs to emails, gives customer downloads, and exports accountant-ready VAT evidence.",
  },
];

const mailto =
  "mailto:support@latticeplugins.com?subject=Lattice%20Invoices%20one-time%20payment%20fit%20-%20%E2%82%AC49&body=Hi%20Lattice%2C%0A%0AI%20want%20to%20check%20whether%20the%20%E2%82%AC49%20one-time%20Lattice%20Invoices%20workflow%20fits%20my%20WooCommerce%20store.%0A%0AStore%20URL%3A%20%0ACountry%3A%20%0AB2B%2FB2C%20mix%3A%20%0ACurrent%20invoice%20plugin%3A%20%0ACurrent%20VAT%2FBTW%20fields%3A%20%0AInvoice%20number%20format%3A%20%0ACredit%20notes%20needed%3A%20%0AAccounting%20software%3A%20%0ABiggest%20invoice%20support%20cost%3A%20";

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "WooCommerce invoice plugin with one-time payment",
  description:
    "Buyer guide for WooCommerce stores comparing one-time invoice plugin pricing against subscriptions for EU VAT invoice workflows.",
  mainEntityOfPage: `${SITE_URL}/blog/woocommerce-invoice-plugin-one-time-payment`,
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

export default function WooCommerceInvoicePluginOneTimePaymentPage() {
  return (
    <main className="min-h-screen bg-slate-50">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <section className="bg-gradient-to-br from-slate-950 via-blue-950 to-emerald-900 text-white">
        <div className="max-w-5xl mx-auto px-6 py-16 lg:py-20">
          <p className="uppercase tracking-[0.3em] text-sm text-emerald-200 mb-4">WooCommerce invoice pricing</p>
          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
            WooCommerce invoice plugin with one-time payment: what EU stores should check before buying.
          </h1>
          <p className="text-xl text-blue-50 leading-relaxed max-w-3xl mb-8">
            A one-time invoice plugin only saves money when it removes real support work. Use this guide to compare
            one-time pricing against yearly subscriptions for VAT/BTW fields, invoice PDFs, credit notes, customer downloads,
            and accountant-ready export.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href={mailto} className="bg-emerald-500 text-white px-8 py-4 rounded-xl font-semibold hover:bg-emerald-400 transition shadow-lg text-center">
              Check €49 one-time fit
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
              <h2 className="text-3xl font-bold mb-4">The buyer trap: cheap PDF, expensive workflow</h2>
              <p className="text-slate-700 leading-relaxed mb-4">
                Store owners often search for a WooCommerce invoice plugin with a one-time payment because they do not want another annual subscription. That is a valid buying filter, but price alone does not solve the invoice workflow.
              </p>
              <p className="text-slate-700 leading-relaxed">
                The expensive part is usually manual cleanup: a missing VAT number, a customer asking for a PDF again, a refund that needs a credit note, or an accountant asking for invoice evidence. A one-time plugin is worth buying when it prevents those repeat tasks.
              </p>
            </div>

            <div className="bg-white rounded-2xl border shadow-sm p-8 overflow-hidden">
              <h2 className="text-3xl font-bold mb-6">One-time invoice plugin decision table</h2>
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-slate-100 text-slate-700">
                      <th className="p-4 rounded-l-xl">Buying question</th>
                      <th className="p-4">Risk if ignored</th>
                      <th className="p-4 rounded-r-xl">What to check</th>
                    </tr>
                  </thead>
                  <tbody>
                    {decisionRows.map((row) => (
                      <tr key={row.question} className="border-b border-slate-100 align-top">
                        <td className="p-4 font-semibold text-slate-900">{row.question}</td>
                        <td className="p-4 text-slate-600">{row.risk}</td>
                        <td className="p-4 text-slate-800">{row.buyerCheck}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div className="bg-emerald-50 border border-emerald-100 rounded-2xl p-8">
              <h2 className="text-3xl font-bold mb-5">When one-time pricing is the better fit</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {subscriptionObjections.map((item) => (
                  <div key={item.title} className="bg-white rounded-xl border border-emerald-100 p-5">
                    <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                    <p className="text-slate-700 leading-relaxed">{item.text}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-2xl border shadow-sm p-8 overflow-hidden">
              <h2 className="text-3xl font-bold mb-4">Quick support-cost calculator</h2>
              <p className="text-slate-700 leading-relaxed mb-6">
                If any of these tasks happen a few times per month, the license price is not the main cost. The store needs an invoice workflow that removes the task.
              </p>
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-slate-100 text-slate-700">
                      <th className="p-4 rounded-l-xl">Manual task</th>
                      <th className="p-4">Typical time</th>
                      <th className="p-4 rounded-r-xl">Root cause</th>
                    </tr>
                  </thead>
                  <tbody>
                    {calculatorRows.map(([task, time, cause]) => (
                      <tr key={task} className="border-b border-slate-100">
                        <td className="p-4 font-semibold text-slate-900">{task}</td>
                        <td className="p-4 text-slate-700">{time}</td>
                        <td className="p-4 text-slate-700">{cause}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
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
                <p className="text-sm uppercase tracking-widest text-emerald-200 mb-2">Lattice benchmark</p>
                <div className="flex items-end gap-2 mb-2">
                  <span className="text-4xl font-bold">€49</span>
                  <span className="text-slate-300 mb-1">one-time</span>
                </div>
                <p className="text-sm text-slate-200 leading-relaxed">
                  Early-access pricing is positioned against the recurring support cost of corrected invoices, missing VAT details, and refund credit notes.
                </p>
              </div>
              <h2 className="text-2xl font-bold mb-3">Ask for the fit check</h2>
              <p className="text-slate-700 mb-4">
                Send your current setup and the biggest invoice support cost. The reply should make the buy / wait / replace decision concrete.
              </p>
              <a href={mailto} className="block text-center bg-blue-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-blue-700 transition mb-3">
                Check one-time fit
              </a>
              <Link href="/blog/woocommerce-invoice-plugin-cost" className="block text-center border border-slate-200 px-6 py-3 rounded-xl font-semibold hover:border-blue-400 transition mb-3">
                Compare invoice plugin cost
              </Link>
              <Link href="/docs/woocommerce-eu-vat-invoice-setup" className="block text-center border border-slate-200 px-6 py-3 rounded-xl font-semibold hover:border-blue-400 transition mb-3">
                Read setup checklist
              </Link>
              <Link href="/blog/woocommerce-invoice-plugin-comparison" className="block text-center border border-slate-200 px-6 py-3 rounded-xl font-semibold hover:border-blue-400 transition">
                Compare plugin options
              </Link>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}
