import type { Metadata } from "next";
import Link from "next/link";

const SITE_URL = "https://latticeplugins.com";
const SLUG = "/blog/woocommerce-invoice-plugin-for-saas";

export const metadata: Metadata = {
  title: "WooCommerce Invoice Plugin for SaaS and Subscription Stores",
  description:
    "A buyer-intent checklist for SaaS and subscription WooCommerce stores that need EU VAT invoices, renewal PDFs, failed-payment evidence, credit notes, and accountant exports.",
  alternates: {
    canonical: `${SITE_URL}${SLUG}`,
  },
  openGraph: {
    title: "WooCommerce invoice plugin for SaaS stores",
    description:
      "What SaaS and subscription stores should check before buying a WooCommerce invoice plugin: renewals, VAT evidence, credit notes, customer downloads, and exports.",
    url: `${SITE_URL}${SLUG}`,
    siteName: "Lattice Plugins",
    type: "article",
  },
};

const saasChecks = [
  {
    title: "Renewal invoices must not be manual PDFs",
    detail:
      "Subscription stores create a new finance event every month or year. The invoice workflow should issue renewal PDFs from WooCommerce order data, keep the original customer VAT details, and avoid hand-built documents after every billing cycle.",
    buyerQuestion: "Can every renewal order create a consistent invoice without a support ticket?",
  },
  {
    title: "Failed payments need evidence, not confusion",
    detail:
      "A SaaS customer may fail payment, retry later, change cards, or downgrade. The store needs a clean trail showing whether a proforma, paid invoice, reminder, or credit note was sent.",
    buyerQuestion: "Can finance see paid, unpaid, retried, and refunded invoice states in one place?",
  },
  {
    title: "EU B2B buyers need VAT/BTW and reverse-charge data",
    detail:
      "SaaS stores often sell cross-border. The invoice plugin should retain country, VAT number, reverse-charge wording, VAT amount, and exemption reason instead of leaving those details in email threads.",
    buyerQuestion: "Will the invoice still be audit-ready when the customer asks six months later?",
  },
  {
    title: "Seat changes and plan switches need credit notes",
    detail:
      "Upgrades, downgrades, cancellations, and refunds can create partial corrections. Refund-linked credit notes should reference the original invoice and preserve tax evidence.",
    buyerQuestion: "Can corrections be explained to the customer and accountant without rebuilding history?",
  },
  {
    title: "Customer downloads reduce finance inbox work",
    detail:
      "B2B SaaS buyers often ask procurement or accounting teams for invoice copies. My Account invoice downloads and email attachments prevent repeated invoice resend requests.",
    buyerQuestion: "Can the buyer retrieve renewal invoices without opening a support conversation?",
  },
];

const subscriptionScenarios = [
  {
    title: "Monthly SaaS plan with EU business customers",
    pain: "Each renewal needs VAT evidence, invoice numbering, and customer-download access. Manual PDFs quickly become inconsistent.",
    lattice:
      "Use a WooCommerce-native renewal invoice workflow with VAT/BTW metadata, sequential numbering, email attachments, and retained PDFs.",
  },
  {
    title: "Annual plan with upgrades and partial refunds",
    pain: "Upgrades, prorations, and refunds can create accounting mismatches if corrections are handled outside WooCommerce.",
    lattice:
      "Keep credit notes linked to refunds and original invoices so the correction trail is visible to support, finance, customer, and accountant.",
  },
  {
    title: "Agency or B2B SaaS selling by invoice",
    pain: "PO numbers, invoice emails, due dates, and Net 14/30 terms are often missing from the payment workflow.",
    lattice:
      "Collect B2B invoice metadata at checkout and connect it to proformas, final invoice PDFs, reminders, and accounting export.",
  },
];

const exportFields = [
  "Invoice number and renewal order ID",
  "Subscription/customer ID",
  "Plan, seats, and billing period",
  "Customer VAT/BTW number and country",
  "VAT rate, VAT amount, exemption or reverse-charge reason",
  "Payment method and paid/unpaid/retried status",
  "Credit-note relation for refunds, downgrades, and cancellations",
  "PDF invoice URL and customer-download status",
];

const faq = [
  {
    q: "What invoice plugin features matter most for WooCommerce SaaS stores?",
    a: "Prioritize renewal invoice PDFs, VAT/BTW fields, reverse-charge evidence, failed-payment state, refund-linked credit notes, My Account downloads, and accountant-ready exports. A nice PDF template alone is not enough for subscription finance workflows.",
  },
  {
    q: "Do subscriptions need different invoices than one-off WooCommerce products?",
    a: "Yes. Subscription stores create repeated invoice events: renewals, retries, upgrades, downgrades, cancellations, and refunds. The invoice workflow must preserve a timeline, not only generate a single PDF after the first checkout.",
  },
  {
    q: "Can Lattice Invoices qualify a SaaS store before purchase?",
    a: "That is the early-access path. Send the store URL, subscription plugin, countries sold into, VAT/reverse-charge needs, refund cases, and invoice export requirements so the €49 workflow review can confirm fit before the paid listing is finalized.",
  },
  {
    q: "What should I send for the SaaS invoice workflow review?",
    a: "Send your store URL, subscription or membership plugin, billing cycle, B2B/B2C split, VAT fields required, failed-payment flow, refund/credit-note cases, and the fields your accountant wants in export.",
  },
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "WooCommerce invoice plugin for SaaS and subscription stores",
  description:
    "A buyer-intent checklist for SaaS and subscription WooCommerce stores that need EU VAT invoices, renewal PDFs, failed-payment evidence, credit notes, and accountant exports.",
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
  "mailto:support@latticeplugins.com?subject=WooCommerce%20SaaS%20invoice%20workflow%20review&body=Hi%20Lattice%2C%0A%0AI%20want%20a%20WooCommerce%20SaaS%2Fsubscription%20invoice%20workflow%20review.%0A%0AStore%20URL%3A%20%0ASubscription%2Fmembership%20plugin%3A%20%0ABilling%20cycle%3A%20%0AB2B%20or%20B2C%3A%20%0ACountries%20sold%20into%3A%20%0AVAT%2Freverse-charge%20needs%3A%20%0AFailed-payment%20flow%3A%20%0ARefund%2Fcredit-note%20cases%3A%20%0AAccountant%20export%20fields%3A%20";

export default function WooCommerceInvoicePluginForSaasPage() {
  return (
    <main className="min-h-screen bg-slate-50">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <section className="bg-gradient-to-br from-slate-950 via-blue-950 to-cyan-900 text-white">
        <div className="max-w-5xl mx-auto px-6 py-16 lg:py-20">
          <p className="uppercase tracking-[0.3em] text-sm text-cyan-200 mb-4">WooCommerce SaaS invoices</p>
          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
            A WooCommerce invoice plugin checklist for SaaS and subscription stores.
          </h1>
          <p className="text-xl text-cyan-50 leading-relaxed max-w-3xl mb-8">
            Subscription stores do not just need one invoice after checkout. They need renewal invoices, failed-payment evidence, VAT/BTW data, credit notes, customer downloads, and accountant exports that survive every billing cycle.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href={mailto} className="bg-green-400 text-slate-950 px-8 py-4 rounded-xl font-semibold hover:bg-green-300 transition shadow-lg text-center">
              Request €49 SaaS invoice review
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
              <h2 className="text-3xl font-bold mb-4">Why SaaS stores should not treat invoices as a PDF-template problem</h2>
              <p className="text-slate-700 leading-relaxed mb-4">
                A one-off WooCommerce product needs a clean invoice once. A SaaS or membership product creates repeated finance events: renewals, failed-payment retries, upgrades, downgrades, cancellations, refunds, and customer requests for old invoices.
              </p>
              <p className="text-slate-700 leading-relaxed">
                That is why the Lattice Invoices offer is positioned around workflow fit before public checkout: the plugin has to support the recurring revenue reality of WooCommerce subscriptions, not only make a single order PDF look nicer.
              </p>
            </div>

            <div className="bg-cyan-50 border border-cyan-100 rounded-2xl p-8">
              <h2 className="text-3xl font-bold mb-5">SaaS invoice plugin purchase checklist</h2>
              <div className="space-y-4">
                {saasChecks.map((item) => (
                  <div key={item.title} className="bg-white rounded-xl border border-cyan-100 p-5">
                    <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                    <p className="text-slate-700 leading-relaxed mb-2">{item.detail}</p>
                    <p className="text-slate-600 leading-relaxed"><strong>Ask before buying:</strong> {item.buyerQuestion}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-2xl border shadow-sm p-8">
              <h2 className="text-3xl font-bold mb-5">Three subscription workflows to test before choosing a plugin</h2>
              <div className="grid gap-4">
                {subscriptionScenarios.map((item) => (
                  <div key={item.title} className="border rounded-xl p-5">
                    <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                    <p className="text-slate-700 leading-relaxed mb-2"><strong>Risk:</strong> {item.pain}</p>
                    <p className="text-slate-700 leading-relaxed"><strong>Lattice direction:</strong> {item.lattice}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-2xl border shadow-sm p-8">
              <h2 className="text-3xl font-bold mb-4">Accountant export fields a SaaS invoice workflow should preserve</h2>
              <p className="text-slate-700 leading-relaxed mb-5">
                A subscription invoice export should explain the billing timeline. If the export only lists WooCommerce order totals, finance still has to rebuild the subscription story manually.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {exportFields.map((field) => (
                  <div key={field} className="flex gap-3 rounded-xl bg-slate-50 border border-slate-100 p-4">
                    <span className="text-green-600 font-bold">✓</span>
                    <span className="text-slate-800">{field}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-blue-50 border border-blue-100 rounded-2xl p-8">
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
              <p className="text-sm uppercase tracking-widest text-cyan-700 font-semibold mb-2">SaaS workflow review</p>
              <h2 className="text-2xl font-bold mb-3">Qualify the recurring invoice workflow before buying.</h2>
              <p className="text-slate-700 leading-relaxed mb-5">
                Send the store URL, subscription plugin, billing cycle, VAT needs, failed-payment flow, refund cases, and accountant export fields. The €49 review turns a generic invoice-plugin search into a concrete Lattice Invoices fit check.
              </p>
              <a href={mailto} className="block text-center bg-blue-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-blue-700 transition mb-3">
                Request SaaS invoice review
              </a>
              <Link href="/docs/woocommerce-eu-vat-invoice-setup" className="block text-center border border-slate-200 px-6 py-3 rounded-xl font-semibold hover:border-blue-400 transition mb-3">
                Read setup guide
              </Link>
              <Link href="/blog/woocommerce-recurring-invoices-subscriptions" className="block text-center border border-slate-200 px-6 py-3 rounded-xl font-semibold hover:border-blue-400 transition mb-3">
                See recurring invoice guide
              </Link>
              <Link href="/blog/woocommerce-invoice-export-accounting" className="block text-center border border-slate-200 px-6 py-3 rounded-xl font-semibold hover:border-blue-400 transition">
                See accounting export guide
              </Link>
              <div className="border-t mt-6 pt-6 space-y-3 text-sm text-slate-600">
                <div>✓ Renewal invoices and failed-payment evidence</div>
                <div>✓ VAT/BTW, reverse charge, and customer downloads</div>
                <div>✓ Credit notes and accountant-ready exports</div>
              </div>
            </div>

            <div className="bg-slate-900 text-white rounded-2xl p-6">
              <h3 className="text-xl font-bold mb-3">Related invoice guides</h3>
              <div className="space-y-3 text-sm">
                <Link href="/blog/woocommerce-recurring-invoices-subscriptions" className="block text-cyan-200 hover:text-white">Recurring subscription invoices</Link>
                <Link href="/blog/woocommerce-invoice-payment-reminders" className="block text-cyan-200 hover:text-white">Payment reminders</Link>
                <Link href="/blog/woocommerce-credit-notes-refunds" className="block text-cyan-200 hover:text-white">Refund credit notes</Link>
                <Link href="/woocommerce-eu-vat-invoices" className="block text-cyan-200 hover:text-white">Lattice Invoices landing page</Link>
              </div>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}
