import type { Metadata } from "next";
import Link from "next/link";

const SITE_URL = "https://latticeplugins.com";
const SLUG = "/blog/woocommerce-rental-vat-invoices";

export const metadata: Metadata = {
  title: "WooCommerce Rental VAT Invoices for Deposits, Damage Fees, and Returns",
  description:
    "A buyer-intent guide for WooCommerce rental stores that need VAT invoices for deposits, hire periods, damage charges, partial refunds, credit notes, and accountant exports.",
  alternates: {
    canonical: `${SITE_URL}${SLUG}`,
  },
  openGraph: {
    title: "WooCommerce rental VAT invoice workflow",
    description:
      "What equipment, event, and tool rental stores should check before buying a WooCommerce invoice plugin: deposits, hire periods, damage fees, VAT, PDFs, credit notes, and exports.",
    url: `${SITE_URL}${SLUG}`,
    siteName: "Lattice Plugins",
    type: "article",
  },
};

const workflowChecks = [
  {
    title: "Deposits and security holds must stay separate from rental revenue",
    detail:
      "Rental stores often take a booking deposit, a security deposit, a final hire charge, and sometimes a damage fee. If the invoice workflow merges those items into one generic order total, VAT reporting and customer explanations become messy.",
    buyerQuestion: "Can the invoice show rental charges, deposits, retained deposits, and refunded deposits clearly?",
  },
  {
    title: "Hire-period details belong on the invoice PDF",
    detail:
      "Customers and accountants need to see dates, locations, equipment identifiers, order references, and delivery/collection notes. Those details should not live only in WooCommerce order notes or rental plugin metadata.",
    buyerQuestion: "Can the plugin pull rental dates and references into invoice-ready order metadata?",
  },
  {
    title: "Damage fees and partial refunds need credit-note logic",
    detail:
      "A returned item can trigger a partial deposit refund, a retained damage fee, a replacement invoice, or a credit note. A proper workflow keeps the correction tied to the original invoice instead of creating orphan PDFs.",
    buyerQuestion: "Can refunds and retained amounts create traceable credit notes tied to the original invoice?",
  },
  {
    title: "Repeat B2B renters expect self-serve invoice downloads",
    detail:
      "Event companies, contractors, and production teams often need invoice copies after the rental is complete. My Account downloads and email attachments reduce support tickets and make repeat bookings easier.",
    buyerQuestion: "Can customers download paid invoices and credit notes without contacting support?",
  },
];

const scenarios = [
  {
    title: "Tool and equipment rental with refundable deposits",
    pain: "The store charges a booking fee and security deposit, then later refunds part of the deposit after inspection. Finance needs a clean invoice trail for the original charge and the refund.",
    lattice:
      "Use invoice metadata for deposit type, hire period, VAT treatment, and refund relation so the final PDF and credit note stay connected to the WooCommerce order.",
  },
  {
    title: "Event rental store serving B2B customers",
    pain: "Companies renting booths, lighting, furniture, or AV equipment need PO numbers, delivery references, VAT numbers, and invoice copies for procurement.",
    lattice:
      "Collect PO/reference fields at checkout, attach paid invoice PDFs to customer emails, and keep downloadable invoice records for repeat renters.",
  },
  {
    title: "Subscription-style rental or recurring hire",
    pain: "Longer-term hire agreements create repeat charges, failed payments, replacements, and partial credits that generic order PDFs do not explain well.",
    lattice:
      "Treat renewal invoices, failed-payment evidence, retained deposits, credit notes, and accountant export fields as one WooCommerce-native workflow.",
  },
];

const setupFields = [
  "Rental start date, end date, and return deadline",
  "Equipment, asset, room, or booking reference",
  "Booking deposit, security deposit, hire fee, and damage fee labels",
  "Company name, VAT/BTW number, and billing country",
  "Purchase-order number or event/project reference",
  "VAT rate, reverse-charge reason, or exemption note",
  "Refund, retained-deposit, or credit-note relation",
  "Customer invoice download and accountant export status",
];

const faq = [
  {
    q: "What should a WooCommerce invoice plugin handle for rental stores?",
    a: "Prioritize separate deposit/rental/damage-fee metadata, hire-period fields, VAT/BTW details, invoice PDFs, email attachments, My Account downloads, refund-linked credit notes, and export fields for accounting.",
  },
  {
    q: "Do rental deposits need a different invoice workflow?",
    a: "Often yes. A refundable security deposit, retained damage fee, or partial refund should be traceable. The safest workflow keeps the invoice, deposit decision, refund, and credit note connected to the same WooCommerce order.",
  },
  {
    q: "Can Lattice Invoices qualify a rental invoice workflow before purchase?",
    a: "Yes. The early-access path is a €49 fit review: send your store URL, rental product types, deposit rules, VAT countries, refund cases, and accountant export requirements so Lattice can confirm whether the workflow is a good fit.",
  },
  {
    q: "What details should I send for the rental invoice review?",
    a: "Send your store URL, what you rent, whether you take security deposits, how damage fees or retained deposits work, countries sold into, required PO/reference fields, refund examples, VAT/reverse-charge cases, and the export your accountant wants.",
  },
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "WooCommerce rental VAT invoices for deposits, damage fees, and returns",
  description:
    "A buyer-intent guide for WooCommerce rental stores that need VAT invoices for deposits, hire periods, damage charges, partial refunds, credit notes, and accountant exports.",
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
  "mailto:support@latticeplugins.com?subject=WooCommerce%20rental%20VAT%20invoice%20workflow%20review&body=Hi%20Lattice%2C%0A%0AI%20want%20a%20WooCommerce%20rental%20invoice%20workflow%20review.%0A%0AStore%20URL%3A%20%0AWhat%20we%20rent%20%28equipment%2C%20event%20items%2C%20spaces%2C%20subscriptions%29%3A%20%0ACountries%20sold%20into%3A%20%0ADeposit%20or%20security%20hold%20rules%3A%20%0ADamage%20fee%20or%20retained%20deposit%20cases%3A%20%0ARental%20dates%2Fasset%20references%20needed%20on%20PDF%3A%20%0APO%2Fproject%20reference%20fields%3A%20%0AVAT%2Freverse-charge%20needs%3A%20%0ARefund%2Fcredit-note%20cases%3A%20%0AAccountant%20export%20fields%3A%20";

export default function WooCommerceRentalVatInvoicesPage() {
  return (
    <main className="min-h-screen bg-slate-50">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <section className="bg-gradient-to-br from-slate-950 via-cyan-950 to-blue-900 text-white">
        <div className="max-w-5xl mx-auto px-6 py-16 lg:py-20">
          <p className="uppercase tracking-[0.3em] text-sm text-cyan-200 mb-4">Rental VAT invoices</p>
          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
            WooCommerce rental VAT invoices for deposits, damage fees, and returns.
          </h1>
          <p className="text-xl text-cyan-50 leading-relaxed max-w-3xl mb-8">
            Rental stores need invoices that explain deposits, hire periods, asset references, VAT, retained damage fees, partial refunds, and credit notes. A generic order PDF often leaves finance rebuilding the real rental story by hand.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href={mailto} className="bg-green-400 text-slate-950 px-8 py-4 rounded-xl font-semibold hover:bg-green-300 transition shadow-lg text-center">
              Request €49 rental invoice review
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
              <h2 className="text-3xl font-bold mb-4">Why rental invoice workflows break inside generic WooCommerce stores</h2>
              <p className="text-slate-700 leading-relaxed mb-4">
                A rental order can include a booking fee, a refundable deposit, a hire period, delivery or collection, a damage charge, and a partial refund. If the invoice plugin only prints the final order total, the business still has to explain deposits and corrections manually.
              </p>
              <p className="text-slate-700 leading-relaxed">
                Lattice Invoices is positioned for WooCommerce stores that need workflow fit before purchase: the €49 early-access review checks whether deposits, rental dates, VAT fields, invoice timing, credit-note cases, and export needs can be handled cleanly.
              </p>
            </div>

            <div className="bg-cyan-50 border border-cyan-100 rounded-2xl p-8">
              <h2 className="text-3xl font-bold mb-5">Rental invoice plugin purchase checklist</h2>
              <div className="space-y-4">
                {workflowChecks.map((item) => (
                  <div key={item.title} className="bg-white rounded-xl border border-cyan-100 p-5">
                    <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                    <p className="text-slate-700 leading-relaxed mb-2">{item.detail}</p>
                    <p className="text-slate-600 leading-relaxed"><strong>Ask before buying:</strong> {item.buyerQuestion}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-2xl border shadow-sm p-8">
              <h2 className="text-3xl font-bold mb-5">Three rental workflows to test before choosing a plugin</h2>
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
              <h2 className="text-3xl font-bold mb-4">Invoice fields rental stores should capture before the PDF is generated</h2>
              <p className="text-slate-700 leading-relaxed mb-5">
                The safest moment to capture invoice context is before payment or before the rental is marked complete. If deposit and asset data is added later, finance has to reconstruct the order from emails and booking notes.
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
              <h2 className="text-3xl font-bold mb-4">Turn rental invoice uncertainty into a purchase-ready setup brief</h2>
              <p className="text-slate-200 leading-relaxed mb-6">
                If a rental store already spends time explaining deposits, refund decisions, or missing invoice copies, the €49 review creates a concise setup brief before the buyer commits to the invoice workflow.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href={mailto} className="bg-green-400 text-slate-950 px-6 py-3 rounded-xl font-semibold text-center hover:bg-green-300 transition">
                  Send rental invoice fit request
                </a>
                <Link href="/tools/woocommerce-invoice-setup-brief" className="border border-white/20 px-6 py-3 rounded-xl font-semibold text-center hover:bg-white/10 transition">
                  Generate setup brief first
                </Link>
              </div>
            </div>

            <div className="bg-white rounded-2xl border shadow-sm p-8">
              <h2 className="text-3xl font-bold mb-5">Rental invoice FAQ</h2>
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
              <h2 className="text-2xl font-bold mb-3">Need rental VAT invoices?</h2>
              <p className="text-slate-700 mb-5">
                Send your rental deposit, refund, VAT, and PDF requirements. Lattice will qualify whether the invoice workflow is a fit before purchase.
              </p>
              <a href={mailto} className="block text-center bg-blue-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-blue-700 transition mb-3">
                Request €49 rental review
              </a>
              <Link href="/demo/lattice-invoices" className="block text-center border border-slate-200 px-6 py-3 rounded-xl font-semibold hover:border-blue-400 transition mb-3">
                View invoice demo
              </Link>
              <Link href="/blog/woocommerce-construction-vat-invoices" className="block text-center border border-slate-200 px-6 py-3 rounded-xl font-semibold hover:border-blue-400 transition mb-3">
                Related construction invoice guide
              </Link>
              <Link href="/blog/woocommerce-partial-payment-invoices" className="block text-center border border-slate-200 px-6 py-3 rounded-xl font-semibold hover:border-blue-400 transition">
                Partial payment invoice guide
              </Link>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}
