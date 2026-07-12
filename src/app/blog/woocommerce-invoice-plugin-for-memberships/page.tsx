import type { Metadata } from "next";
import Link from "next/link";

const SITE_URL = "https://latticeplugins.com";
const SLUG = "/blog/woocommerce-invoice-plugin-for-memberships";

export const metadata: Metadata = {
  title: "WooCommerce Invoice Plugin for Memberships: VAT, Renewals, and PDFs",
  description:
    "Buyer-intent guide for WooCommerce membership and subscription stores that need VAT/BTW invoice fields, renewal PDFs, credit notes, customer downloads, and accountant-ready export.",
  alternates: {
    canonical: `${SITE_URL}${SLUG}`,
  },
  openGraph: {
    title: "WooCommerce invoice plugin for memberships",
    description:
      "How membership stores should evaluate invoice plugins before buying: VAT fields, renewals, failed payments, upgrades, refunds, PDF delivery, and customer downloads.",
    url: `${SITE_URL}${SLUG}`,
    siteName: "Lattice Plugins",
    type: "article",
  },
};

const membershipScenarios = [
  {
    title: "Monthly or annual B2B memberships",
    pain:
      "A business customer signs up once, then needs a VAT-ready PDF invoice for every renewal. If company name, VAT number, PO reference, and invoice email are missing from the original checkout, every renewal can create another correction request.",
    lattice:
      "Capture invoice details before the first payment and reuse them on recurring invoices, customer downloads, and accountant handoff.",
  },
  {
    title: "Plan upgrades, downgrades, and prorated charges",
    pain:
      "Membership stores often change access level mid-cycle. A buyer may see an upgrade charge, renewal charge, coupon, or partial refund and ask finance to reconcile the invoice trail.",
    lattice:
      "Keep invoice numbers, payment status, VAT totals, and credit-note references tied to the WooCommerce order history instead of editing PDFs manually.",
  },
  {
    title: "Failed renewal payments and bank-transfer customers",
    pain:
      "When a renewal fails or a customer pays by bank transfer, support needs a clear proforma/payment-request workflow before the final invoice is issued.",
    lattice:
      "Qualify due dates, payment links, reminders, and final invoice timing before relying on the workflow for paid membership access.",
  },
];

const requiredFields = [
  "Company legal name, VAT/BTW number, and billing country",
  "Invoice email that can differ from the account owner email",
  "Membership plan name, billing period, renewal date, and access status",
  "PO number, cost centre, or buyer reference for finance teams",
  "Payment method, paid date, VAT rate, VAT amount, coupon, and total",
  "Upgrade, downgrade, refund, or failed-payment status",
  "Customer-facing invoice PDF downloads inside My Account",
  "Accountant export fields for invoice number, VAT ID, and PDF link",
];

const decisionRows = [
  {
    signal: "Members ask for the same invoice correction every renewal",
    priority: "High",
    next: "Buy or request early access once checkout fields can feed renewal invoice PDFs automatically.",
  },
  {
    signal: "The store sells annual plans to companies",
    priority: "High",
    next: "Prioritize VAT/BTW fields, PO references, invoice email, and customer downloads before running paid acquisition.",
  },
  {
    signal: "Renewals include failed payments, dunning, or manual bank transfer",
    priority: "Medium",
    next: "Check proforma/payment request handling, due dates, reminder wording, and final invoice timing.",
  },
  {
    signal: "Mostly low-price consumer memberships with few invoice requests",
    priority: "Lower",
    next: "Use the setup checklist first, then upgrade once manual invoice support becomes recurring.",
  },
];

const emailTemplateLines = [
  "Store URL, country, and WooCommerce membership/subscription plugin used",
  "Membership types: monthly, annual, lifetime, courses, community, SaaS access, or content library",
  "Typical buyer mix: B2B teams, freelancers, consumers, agencies, schools, or nonprofits",
  "Monthly order volume, renewal volume, and invoice-request volume",
  "Required checkout fields: VAT/BTW number, company, invoice email, PO number, cost centre",
  "Renewal cases: failed payments, upgrades, downgrades, coupons, prorations, or refunds",
  "Whether customers need My Account invoice downloads for every renewal",
  "Accountant export needs: invoice number, VAT ID, payment status, PDF link, credit-note link",
];

const faq = [
  {
    q: "Do membership stores need invoice PDFs for every renewal?",
    a: "B2B buyers often do. If a company pays monthly or annually, its finance team may need a VAT-ready invoice for each paid renewal, not only the initial signup.",
  },
  {
    q: "Should invoice details be collected during membership checkout?",
    a: "Yes. Company name, VAT/BTW number, invoice email, and buyer reference are safer before payment than after payment because the first invoice and renewal invoices can reuse the same order/customer metadata.",
  },
  {
    q: "How should refunds or cancelled memberships be handled?",
    a: "A refund should create or preserve a credit-note trail linked to the original invoice. Membership access cancellation alone is not the same as an accounting-ready credit note.",
  },
  {
    q: "What is the next step if membership invoice requests already cost support time?",
    a: "Use the €49 early-access review CTA. Send the membership plugin, buyer type, invoice fields, renewal volume, and refund cases so Lattice Invoices can qualify the workflow before purchase.",
  },
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "WooCommerce invoice plugin for memberships: VAT, renewals, and PDFs",
  description:
    "Buyer-intent guide for WooCommerce membership and subscription stores that need VAT/BTW invoice fields, renewal PDFs, credit notes, customer downloads, and accountant-ready export.",
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
  "mailto:support@latticeplugins.com?subject=WooCommerce%20membership%20invoice%20workflow%20review&body=Hi%20Lattice%2C%0A%0AI%20want%20a%20WooCommerce%20membership%20invoice%20workflow%20review.%0A%0AStore%20URL%3A%20%0ACountry%3A%20%0AMembership%2Fsubscription%20plugin%3A%20%0AMembership%20types%3A%20%0AB2B%20or%20B2C%20buyers%3A%20%0AInvoice%20requests%20per%20month%3A%20%0ARenewal%20volume%3A%20%0AInvoice%20fields%20needed%3A%20%0ARefund%2Fcredit-note%20cases%3A%20%0AAccountant%20export%20needs%3A%20";

export default function WooCommerceMembershipInvoicesPage() {
  return (
    <main className="min-h-screen bg-slate-50">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <section className="bg-gradient-to-br from-slate-950 via-blue-950 to-emerald-900 text-white">
        <div className="max-w-5xl mx-auto px-6 py-16 lg:py-20">
          <p className="uppercase tracking-[0.3em] text-sm text-emerald-200 mb-4">Membership invoice workflow</p>
          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
            WooCommerce invoice plugin for memberships: VAT-ready renewals without support tickets.
          </h1>
          <p className="text-xl text-blue-50 leading-relaxed max-w-3xl mb-8">
            Membership and subscription stores create repeated invoice obligations. Use this buyer checklist before choosing a WooCommerce invoice plugin for renewals, upgrades, VAT fields, PDF downloads, and credit notes.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href={mailto} className="bg-green-400 text-slate-950 px-8 py-4 rounded-xl font-semibold hover:bg-green-300 transition shadow-lg text-center">
              Request €49 membership invoice review
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
              <h2 className="text-3xl font-bold mb-4">Why membership invoices break after the first payment</h2>
              <p className="text-slate-700 leading-relaxed mb-4">
                A normal WooCommerce order may need one invoice. A membership account can need invoices for signup, renewals, upgrades, downgrades, failed-payment recovery, and refunds. If the invoice workflow is not tied to member metadata, every billing event becomes another manual PDF or support email.
              </p>
              <p className="text-slate-700 leading-relaxed">
                Lattice Invoices is positioned for stores that want the invoice details captured once, reused safely, attached to the order and renewal history, and available to the customer without staff resending files.
              </p>
            </div>

            <div className="grid gap-4">
              {membershipScenarios.map((item) => (
                <div key={item.title} className="bg-white rounded-2xl border shadow-sm p-6">
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  <p className="text-slate-700 leading-relaxed mb-2"><strong>Invoice risk:</strong> {item.pain}</p>
                  <p className="text-slate-700 leading-relaxed"><strong>Lattice direction:</strong> {item.lattice}</p>
                </div>
              ))}
            </div>

            <div className="bg-emerald-50 border border-emerald-100 rounded-2xl p-8">
              <h2 className="text-3xl font-bold mb-5">Membership invoice fields to qualify before buying</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {requiredFields.map((field) => (
                  <div key={field} className="bg-white rounded-xl border border-emerald-100 p-4 flex gap-3">
                    <span className="text-emerald-700 font-bold">✓</span>
                    <span className="text-slate-800">{field}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-2xl border shadow-sm p-8 overflow-hidden">
              <h2 className="text-3xl font-bold mb-5">Should a membership store buy now?</h2>
              <div className="overflow-x-auto">
                <table className="min-w-full text-left border-collapse">
                  <thead>
                    <tr className="border-b bg-slate-50">
                      <th className="p-4 font-semibold">Store signal</th>
                      <th className="p-4 font-semibold">Priority</th>
                      <th className="p-4 font-semibold">Best next action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {decisionRows.map((row) => (
                      <tr key={row.signal} className="border-b last:border-b-0 align-top">
                        <td className="p-4 text-slate-700">{row.signal}</td>
                        <td className="p-4 font-bold text-emerald-700">{row.priority}</td>
                        <td className="p-4 text-slate-700">{row.next}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div className="bg-slate-950 text-white rounded-2xl p-8">
              <h2 className="text-3xl font-bold mb-4">Copy this into the early-access email</h2>
              <p className="text-slate-200 leading-relaxed mb-5">
                Membership invoice workflows are easier to qualify when renewal volume, buyer type, payment states, and invoice fields are clear before purchase.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-6">
                {emailTemplateLines.map((line) => (
                  <div key={line} className="rounded-xl bg-white/10 border border-white/10 p-4 flex gap-3">
                    <span className="text-green-300 font-bold">→</span>
                    <span>{line}</span>
                  </div>
                ))}
              </div>
              <a href={mailto} className="inline-flex bg-green-400 text-slate-950 px-6 py-3 rounded-xl font-semibold hover:bg-green-300 transition">
                Send membership invoice details
              </a>
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
            <div className="bg-white rounded-2xl border shadow-sm p-6 sticky top-24">
              <p className="text-sm uppercase tracking-[0.2em] text-emerald-700 mb-3">Purchase friction removed</p>
              <h2 className="text-2xl font-bold mb-3">Send the renewal workflow before paying.</h2>
              <p className="text-slate-700 leading-relaxed mb-5">
                The fastest path is to send your membership setup, renewal volume, invoice fields, and refund cases so Lattice can confirm the €49 early-access fit.
              </p>
              <a href={mailto} className="block bg-green-500 text-white text-center px-5 py-3 rounded-xl font-semibold hover:bg-green-600 transition mb-3">
                Request €49 review
              </a>
              <Link href="/tools/woocommerce-invoice-roi-calculator" className="block text-center border border-slate-200 px-5 py-3 rounded-xl font-semibold hover:bg-slate-50 transition mb-3">
                Calculate invoice ROI
              </Link>
              <Link href="/docs/woocommerce-eu-vat-invoice-setup" className="block text-center border border-slate-200 px-5 py-3 rounded-xl font-semibold hover:bg-slate-50 transition">
                Read setup guide
              </Link>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}
