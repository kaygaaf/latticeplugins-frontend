import type { Metadata } from "next";
import Link from "next/link";

const SITE_URL = "https://latticeplugins.com";
const SLUG = "/blog/woocommerce-invoice-plugin-for-clinics";

export const metadata: Metadata = {
  title: "WooCommerce Invoice Plugin for Clinics — VAT, PDFs, Credit Notes",
  description:
    "Buyer-intent guide for private clinics, therapists, and healthcare practices using WooCommerce for paid consults, packages, deposits, and B2B invoices.",
  alternates: {
    canonical: `${SITE_URL}${SLUG}`,
  },
  openGraph: {
    title: "WooCommerce invoice plugin for clinics and private practices",
    description:
      "How clinic WooCommerce stores should handle VAT fields, patient-safe invoice metadata, deposits, PDF invoices, refunds, credit notes, and accountant handoff.",
    url: `${SITE_URL}${SLUG}`,
    siteName: "Lattice Plugins",
    type: "article",
  },
};

const painPoints = [
  {
    title: "Paid consults and treatment packages need invoice data before payment",
    detail:
      "A client can buy a consult, screening, therapy package, intake, or membership through WooCommerce and later ask for the invoice to be issued to an employer, company, insurer, or finance department.",
    fix: "Capture billing name, company/VAT ID, invoice email, purchase reference, and invoice preference before checkout is completed.",
  },
  {
    title: "Deposits, cancellations, and refunds create correction work",
    detail:
      "Clinics often sell prepaid bundles, deposits, rescheduled sessions, and partial refunds. If the invoice plugin only creates a single static PDF, support ends up editing documents manually.",
    fix: "Keep payment requests, final invoices, and linked credit notes as separate records connected to the WooCommerce order.",
  },
  {
    title: "Sensitive service details should not leak into accountant exports",
    detail:
      "A health, therapy, coaching, or wellness store may need useful finance metadata without putting sensitive treatment notes into invoices, emails, exports, or support threads.",
    fix: "Store finance-safe invoice fields separately from operational notes and decide which labels appear on the customer-facing PDF.",
  },
];

const featureRows = [
  ["Invoice-ready checkout fields", "Company/legal billing name, VAT/BTW number, invoice email, billing country, and optional purchase reference before payment."],
  ["Privacy-safe invoice labels", "Use clear finance descriptions such as consult, package, subscription, or deposit without exposing unnecessary clinical detail."],
  ["Deposit and package handling", "Separate proforma/payment-request language from final paid invoices and balance-payment records."],
  ["Sequential invoice numbers", "A finance-friendly invoice sequence that is separate from WooCommerce order IDs and easier for accountants to audit."],
  ["PDF invoice delivery", "Attach invoice PDFs to the right WooCommerce emails and keep customer downloads available in My Account."],
  ["Refund credit notes", "Cancellations, partial refunds, and corrections should create linked credit notes instead of overwritten PDFs."],
];

const scenarioRows = [
  {
    scenario: "Private consult or intake",
    risk: "Client pays personally, then needs a company or insurer invoice after checkout.",
    workflow: "Ask for invoice recipient, VAT/BTW data, and invoice email before payment is taken.",
  },
  {
    scenario: "Multi-session package",
    risk: "A package is prepaid, partly used, then partly refunded without a clear credit-note trail.",
    workflow: "Issue a final invoice on payment and linked credit notes for cancellations or unused balance corrections.",
  },
  {
    scenario: "Employer-paid wellness program",
    risk: "Finance needs PO/reference data, but the customer account only stores personal billing details.",
    workflow: "Add B2B invoice fields and carry them into the invoice PDF plus export row.",
  },
  {
    scenario: "Bank transfer or delayed payment",
    risk: "Support sends manual payment requests and later forgets to attach the final VAT invoice.",
    workflow: "Use proforma/payment-request wording before payment, then final invoice PDF after the order is paid.",
  },
];

const qualification = [
  { signal: "You sell consults, intakes, packages, memberships, or deposits through WooCommerce", score: "+2" },
  { signal: "Customers ask for company, employer, insurer, or VAT invoices after checkout", score: "+2" },
  { signal: "Cancellations, reschedules, or partial refunds need credit notes", score: "+2" },
  { signal: "Invoice PDFs must avoid sensitive service detail while still being useful for finance", score: "+1" },
  { signal: "Your accountant asks for invoice numbers, VAT totals, PDF links, and correction evidence", score: "+1" },
];

const internalLinks = [
  { href: "/woocommerce-eu-vat-invoices", label: "Lattice Invoices €49 early-access offer" },
  { href: "/demo/lattice-invoices", label: "View invoice workflow demo" },
  { href: "/tools/woocommerce-invoice-fit-check", label: "Score invoice fit" },
  { href: "/tools/woocommerce-invoice-setup-brief", label: "Generate an invoice setup brief" },
  { href: "/docs/woocommerce-eu-vat-invoice-setup", label: "Invoice setup guide" },
  { href: "/blog/woocommerce-invoice-plugin-for-coaches", label: "Coach invoice workflow" },
  { href: "/blog/woocommerce-invoice-plugin-for-consultants", label: "Consultant invoice workflow" },
  { href: "/blog/woocommerce-partial-payment-invoices", label: "Partial payment invoice guide" },
  { href: "/blog/woocommerce-customer-invoice-downloads", label: "Customer invoice downloads" },
];

const faq = [
  {
    q: "Can a clinic use WooCommerce and still send proper VAT invoices?",
    a: "Yes, if checkout captures invoice-ready billing fields and the invoice workflow keeps invoice number, VAT evidence, payment status, PDF delivery, and corrections connected to the WooCommerce order.",
  },
  {
    q: "Should health or therapy details appear on the invoice PDF?",
    a: "Only finance-safe labels should appear by default. The exact wording depends on the store, country, service type, and accounting advice, but invoice metadata should not expose unnecessary sensitive service notes.",
  },
  {
    q: "Why is a clinic invoice workflow different from a normal product invoice?",
    a: "Clinics often combine B2C payments with B2B reimbursement needs, deposits, package balances, cancellations, privacy-sensitive service labels, and accountant exports. That is more than a generic PDF styling problem.",
  },
  {
    q: "What should a clinic send before requesting Lattice Invoices early access?",
    a: "Send the store URL, country, services sold, whether you sell deposits or packages, VAT/B2B fields needed, invoice label requirements, refund frequency, invoice-number format, and accounting handoff process.",
  },
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "WooCommerce invoice plugin for clinics and private practices",
  description:
    "Buyer-intent guide for private clinics, therapists, and healthcare practices using WooCommerce for paid consults, packages, deposits, and B2B invoices.",
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
  "mailto:support@latticeplugins.com?subject=Clinic%20WooCommerce%20invoice%20workflow%20-%20Lattice%20Invoices&body=Hi%20Lattice%2C%0A%0AI%20want%20to%20check%20whether%20Lattice%20Invoices%20fits%20a%20clinic%20or%20private-practice%20WooCommerce%20workflow.%0A%0AStore%20URL%3A%20%0ACountry%3A%20%0AClinic%20services%20sold%3A%20%0AB2B%2FB2C%20invoice%20split%3A%20%0ADeposits%20or%20packages%3A%20%0AVAT%2FBTW%20fields%20needed%3A%20%0AInvoice%20label%20requirements%3A%20%0ARefunds%20or%20credit%20notes%20needed%3A%20%0AAccounting%20tool%3A%20";

export default function WooCommerceInvoicePluginForClinicsPage() {
  return (
    <main className="min-h-screen bg-slate-50">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <section className="bg-gradient-to-br from-slate-950 via-teal-950 to-blue-900 text-white">
        <div className="max-w-6xl mx-auto px-6 py-16 lg:py-20 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div>
            <p className="uppercase tracking-[0.3em] text-teal-200 mb-4">Clinic invoice workflow</p>
            <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
              WooCommerce invoice plugin for clinics, therapists, and private practices.
            </h1>
            <p className="text-xl text-teal-50 leading-relaxed mb-8">
              If your clinic sells consults, packages, deposits, or memberships through WooCommerce, the invoice workflow must handle VAT fields, safe PDF labels, refunds, credit notes, and accountant exports without creating support work.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href={mailto} className="bg-green-400 text-slate-950 px-8 py-4 rounded-xl font-semibold hover:bg-green-300 transition shadow-lg text-center">
                Request clinic invoice fit check
              </a>
              <Link href="/woocommerce-eu-vat-invoices" className="bg-white/10 border border-white/20 text-white px-8 py-4 rounded-xl font-semibold hover:bg-white/15 transition text-center">
                View Lattice Invoices offer
              </Link>
            </div>
          </div>

          <div className="bg-white text-slate-900 rounded-2xl shadow-2xl p-6 lg:p-8">
            <p className="text-sm uppercase tracking-widest text-slate-500 mb-2">Buyer qualification</p>
            <h2 className="text-2xl font-bold mb-4">Should a clinic request the €49 early-access review?</h2>
            <div className="space-y-3">
              {qualification.map((item) => (
                <div key={item.signal} className="flex gap-3 items-start border rounded-xl p-4">
                  <span className="bg-teal-100 text-teal-700 px-3 py-1 rounded-full text-sm font-bold">{item.score}</span>
                  <p className="text-slate-700">{item.signal}</p>
                </div>
              ))}
            </div>
            <p className="text-sm text-slate-600 mt-5">
              Score 3+ points? The store likely needs a real invoice workflow, not just a prettier PDF receipt.
            </p>
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-14">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <article className="lg:col-span-2 space-y-8">
            <div className="bg-white rounded-2xl border shadow-sm p-8">
              <h2 className="text-3xl font-bold mb-4">Why clinic WooCommerce invoices are different</h2>
              <p className="text-slate-700 leading-relaxed mb-4">
                A clinic checkout can look simple from the customer side, but the back office often has mixed requirements: personal payments, employer reimbursements, VAT invoices, privacy-safe PDF wording, package balances, deposits, and refunds.
              </p>
              <p className="text-slate-700 leading-relaxed">
                The best sales workflow is to collect finance-safe invoice data before payment, promise a clear PDF delivery path, and avoid manually rewriting issued invoices when a cancellation or correction requires a credit note.
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
              <h2 className="text-3xl font-bold mb-5">Feature checklist before choosing a clinic invoice plugin</h2>
              <div className="overflow-x-auto">
                <table className="min-w-full text-left border-separate border-spacing-y-3">
                  <thead>
                    <tr className="text-sm uppercase tracking-widest text-teal-800">
                      <th className="p-4 rounded-l-xl bg-white">Requirement</th>
                      <th className="p-4 rounded-r-xl bg-white">Why it matters for clinics</th>
                    </tr>
                  </thead>
                  <tbody>
                    {featureRows.map(([feature, detail]) => (
                      <tr key={feature}>
                        <td className="p-4 bg-white font-semibold rounded-l-xl align-top">{feature}</td>
                        <td className="p-4 bg-white text-slate-700 rounded-r-xl align-top">{detail}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div className="bg-white rounded-2xl border shadow-sm p-8">
              <h2 className="text-3xl font-bold mb-5">Common clinic invoice scenarios</h2>
              <div className="space-y-4">
                {scenarioRows.map((row) => (
                  <div key={row.scenario} className="border rounded-xl p-5">
                    <h3 className="font-bold text-lg mb-2">{row.scenario}</h3>
                    <p className="text-slate-700 mb-2"><strong>Risk:</strong> {row.risk}</p>
                    <p className="text-slate-700"><strong>Workflow:</strong> {row.workflow}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-slate-950 text-white rounded-2xl p-8">
              <p className="uppercase tracking-[0.25em] text-teal-200 text-sm mb-3">Conversion shortcut</p>
              <h2 className="text-3xl font-bold mb-4">Turn clinic invoice edge cases into a prefilled €49 review request.</h2>
              <p className="text-slate-200 leading-relaxed mb-6">
                If the store has B2B invoice requests, package deposits, privacy-sensitive labels, or refund corrections, send those details before buying. The fit-check email gives Lattice the exact workflow needed for early-access qualification.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <a href={mailto} className="bg-green-400 text-slate-950 px-6 py-4 rounded-xl font-semibold text-center hover:bg-green-300 transition">
                  Send clinic fit-check request
                </a>
                <Link href="/tools/woocommerce-invoice-setup-brief" className="bg-white/10 border border-white/20 px-6 py-4 rounded-xl font-semibold text-center hover:bg-white/15 transition">
                  Generate setup brief first
                </Link>
              </div>
            </div>

            <div className="bg-white rounded-2xl border shadow-sm p-8">
              <h2 className="text-3xl font-bold mb-5">Clinic invoice FAQ</h2>
              <div className="space-y-5">
                {faq.map((item) => (
                  <div key={item.q}>
                    <h3 className="font-bold text-lg mb-2">{item.q}</h3>
                    <p className="text-slate-700 leading-relaxed">{item.a}</p>
                  </div>
                ))}
              </div>
            </div>
          </article>

          <aside className="space-y-6">
            <div className="bg-white rounded-2xl border shadow-sm p-6 sticky top-6">
              <p className="text-sm uppercase tracking-widest text-slate-500 mb-2">Next step</p>
              <h2 className="text-2xl font-bold mb-3">Request Lattice Invoices early access</h2>
              <p className="text-slate-700 mb-5">
                Lattice Invoices is positioned as a €49 WooCommerce invoice workflow for EU stores that need VAT fields, PDF delivery, customer downloads, and credit-note handling.
              </p>
              <a href={mailto} className="block text-center bg-blue-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-blue-700 transition mb-3">
                Email clinic invoice requirements
              </a>
              <Link href="/woocommerce-eu-vat-invoices" className="block text-center border border-slate-200 px-6 py-3 rounded-xl font-semibold hover:border-blue-400 transition mb-3">
                View Lattice Invoices offer
              </Link>
              <Link href="/demo/lattice-invoices" className="block text-center border border-slate-200 px-6 py-3 rounded-xl font-semibold hover:border-blue-400 transition">
                View demo workflow
              </Link>
            </div>

            <div className="bg-white rounded-2xl border shadow-sm p-6">
              <h2 className="text-xl font-bold mb-4">Related invoice guides</h2>
              <div className="space-y-3">
                {internalLinks.map((link) => (
                  <Link key={link.href} href={link.href} className="block text-blue-700 hover:text-blue-900 font-semibold">
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
