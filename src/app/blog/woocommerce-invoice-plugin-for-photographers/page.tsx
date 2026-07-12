import type { Metadata } from "next";
import Link from "next/link";

const SITE_URL = "https://latticeplugins.com";
const SLUG = "/blog/woocommerce-invoice-plugin-for-photographers";

export const metadata: Metadata = {
  title: "WooCommerce Invoice Plugin for Photographers — VAT, Deposits, PDFs",
  description:
    "Buyer-intent guide for photographers and studios selling shoots, deposits, prints, licenses, and retainers through WooCommerce with VAT-ready PDF invoices.",
  alternates: {
    canonical: `${SITE_URL}${SLUG}`,
  },
  openGraph: {
    title: "WooCommerce invoice plugin for photographers and studios",
    description:
      "How photography businesses should handle deposits, VAT fields, usage licenses, milestone payments, PDF invoices, refunds, credit notes, and accountant handoff in WooCommerce.",
    url: `${SITE_URL}${SLUG}`,
    siteName: "Lattice Plugins",
    type: "article",
  },
};

const painPoints = [
  {
    title: "Deposits and balance payments need a clean invoice trail",
    detail:
      "A wedding, portrait, commercial, or event photographer may take a booking deposit first and charge the remaining balance later. If both payments share one generic receipt, finance and customers ask for corrected documents.",
    fix: "Separate deposit requests, final paid invoices, balance-payment references, and correction credit notes so each WooCommerce order keeps a clear history.",
  },
  {
    title: "B2B clients often need VAT and purchase-reference fields before payment",
    detail:
      "Agencies, hotels, venues, publishers, and marketing teams may need legal billing name, VAT ID, PO number, project code, or invoice email captured before checkout, not after the gallery or shoot is delivered.",
    fix: "Add invoice-ready checkout fields and carry them into the PDF invoice, customer download, and accountant export row.",
  },
  {
    title: "Licenses, prints, and services should not be described like normal products",
    detail:
      "A photography store can sell shoot fees, edited image packs, commercial usage rights, prints, albums, rush fees, and retainers. Generic line-item wording makes invoice review harder for clients.",
    fix: "Use finance-safe labels that distinguish service fees, products, licenses, deposits, and add-ons without manually editing issued PDFs.",
  },
];

const featureRows = [
  ["Invoice-ready booking checkout", "Company/legal billing name, VAT/BTW number, invoice email, billing country, PO/reference, and project label before payment."],
  ["Deposit and final invoice handling", "Booking deposits, milestone payments, and final balances need a clear path from payment request to final VAT invoice."],
  ["Usage-license invoice labels", "Separate shoot fees, commercial rights, image packs, prints, albums, rush fees, and retainers with customer-friendly PDF wording."],
  ["Sequential invoice numbers", "Keep invoice numbers separate from WooCommerce order IDs so accountant review is easier across deposits, balances, and refunds."],
  ["PDF delivery and downloads", "Attach PDFs to the right WooCommerce emails and keep paid invoice downloads available in My Account."],
  ["Refund and cancellation credit notes", "Cancelled shoots, partial refunds, and package corrections should create linked credit notes instead of overwritten invoices."],
];

const scenarioRows = [
  {
    scenario: "Wedding or event booking deposit",
    risk: "Customer pays a deposit now and the balance later, then requests a full invoice showing both payment moments.",
    workflow: "Capture invoice recipient and reference at booking, mark the first payment as a deposit, then issue a final invoice when the balance is paid.",
  },
  {
    scenario: "Commercial brand shoot",
    risk: "Agency finance requires VAT ID, PO number, usage-rights wording, and a separate invoice email before approving payment.",
    workflow: "Collect B2B invoice fields during checkout and include project/license labels on the invoice PDF and export.",
  },
  {
    scenario: "Prints, albums, and gallery add-ons",
    risk: "A customer combines physical products with creative services, shipping, and VAT adjustments.",
    workflow: "Keep product and service labels distinct and let WooCommerce tax totals flow into the final invoice document.",
  },
  {
    scenario: "Cancelled or rescheduled shoot",
    risk: "A partial refund is processed but the original PDF invoice no longer matches the actual sale.",
    workflow: "Create a linked credit note for the refund/correction while preserving the original invoice record.",
  },
];

const qualification = [
  { signal: "You sell bookings, deposits, retainers, prints, licenses, or add-ons through WooCommerce", score: "+2" },
  { signal: "B2B clients ask for VAT IDs, PO numbers, project references, or invoice emails", score: "+2" },
  { signal: "Deposits and balances are currently reconciled manually", score: "+2" },
  { signal: "Refunds, cancellations, or reschedules need credit notes", score: "+1" },
  { signal: "Your accountant wants invoice numbers, PDF links, VAT totals, and payment status in one export", score: "+1" },
];

const internalLinks = [
  { href: "/woocommerce-eu-vat-invoices", label: "Lattice Invoices €49 early-access offer" },
  { href: "/demo/lattice-invoices", label: "View invoice workflow demo" },
  { href: "/tools/woocommerce-invoice-fit-check", label: "Score invoice fit" },
  { href: "/tools/woocommerce-invoice-setup-brief", label: "Generate an invoice setup brief" },
  { href: "/docs/woocommerce-eu-vat-invoice-setup", label: "Invoice setup guide" },
  { href: "/blog/woocommerce-partial-payment-invoices", label: "Partial payment invoice guide" },
  { href: "/blog/woocommerce-proforma-invoice", label: "Proforma invoice workflow" },
  { href: "/blog/woocommerce-invoice-payment-reminders", label: "Invoice payment reminders" },
  { href: "/blog/woocommerce-invoice-plugin-for-agencies", label: "Agency invoice workflow" },
];

const faq = [
  {
    q: "Can photographers use WooCommerce for deposits and still issue proper VAT invoices?",
    a: "Yes, if the checkout captures invoice-ready details and the invoice workflow separates deposits, final paid invoices, invoice numbers, PDF delivery, and credit notes instead of treating every payment as a generic receipt.",
  },
  {
    q: "Why is a photography invoice workflow different from a standard product receipt?",
    a: "Photography stores often mix services, booking deposits, physical prints, digital galleries, commercial usage licenses, B2B purchase references, and cancellation refunds. That requires more invoice metadata than a simple PDF receipt template.",
  },
  {
    q: "Should image license terms appear on every invoice?",
    a: "Use concise finance-safe labels on the invoice and keep the full license agreement elsewhere. The invoice should make the purchased right clear without becoming a contract-management system.",
  },
  {
    q: "What should a photographer send before requesting Lattice Invoices early access?",
    a: "Send the store URL, country, shoot types, deposit/balance process, B2B invoice fields, license labels, refund/cancellation frequency, invoice-number format, and accounting handoff process.",
  },
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "WooCommerce invoice plugin for photographers and studios",
  description:
    "Buyer-intent guide for photographers and studios selling shoots, deposits, prints, licenses, and retainers through WooCommerce with VAT-ready PDF invoices.",
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
  "mailto:support@latticeplugins.com?subject=Photographer%20WooCommerce%20invoice%20workflow%20-%20Lattice%20Invoices&body=Hi%20Lattice%2C%0A%0AI%20want%20to%20check%20whether%20Lattice%20Invoices%20fits%20a%20photography%20or%20studio%20WooCommerce%20workflow.%0A%0AStore%20URL%3A%20%0ACountry%3A%20%0APhotography%20services%20sold%3A%20%0ADeposits%20or%20balance%20payments%3A%20%0AB2B%20invoice%20fields%20needed%3A%20%0AUsage%20license%20invoice%20labels%3A%20%0ARefunds%20or%20credit%20notes%20needed%3A%20%0AAccounting%20tool%3A%20";

export default function WooCommerceInvoicePluginForPhotographersPage() {
  return (
    <main className="min-h-screen bg-slate-50">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <section className="bg-gradient-to-br from-slate-950 via-blue-950 to-purple-900 text-white">
        <div className="max-w-6xl mx-auto px-6 py-16 lg:py-20 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div>
            <p className="uppercase tracking-[0.3em] text-blue-200 mb-4">Photography invoice workflow</p>
            <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
              WooCommerce invoice plugin for photographers, studios, and creative shoots.
            </h1>
            <p className="text-xl text-blue-50 leading-relaxed mb-8">
              If your studio sells bookings, deposits, prints, image licenses, or commercial retainers through WooCommerce, the invoice workflow must handle VAT fields, project references, PDF delivery, balance payments, and refund credit notes without manual corrections.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href={mailto} className="bg-green-400 text-slate-950 px-8 py-4 rounded-xl font-semibold hover:bg-green-300 transition shadow-lg text-center">
                Request photography invoice fit check
              </a>
              <Link href="/woocommerce-eu-vat-invoices" className="bg-white/10 border border-white/20 text-white px-8 py-4 rounded-xl font-semibold hover:bg-white/15 transition text-center">
                View Lattice Invoices offer
              </Link>
            </div>
          </div>

          <div className="bg-white text-slate-900 rounded-2xl shadow-2xl p-6 lg:p-8">
            <p className="text-sm uppercase tracking-widest text-slate-500 mb-2">Buyer qualification</p>
            <h2 className="text-2xl font-bold mb-4">Should a photographer request the €49 early-access review?</h2>
            <div className="space-y-3">
              {qualification.map((item) => (
                <div key={item.signal} className="flex gap-3 items-start border rounded-xl p-4">
                  <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-bold">{item.score}</span>
                  <p className="text-slate-700">{item.signal}</p>
                </div>
              ))}
            </div>
            <p className="text-sm text-slate-600 mt-5">
              Score 3+ points? The store likely needs a real invoice workflow, not just a prettier order receipt.
            </p>
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-14">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <article className="lg:col-span-2 space-y-8">
            <div className="bg-white rounded-2xl border shadow-sm p-8">
              <h2 className="text-3xl font-bold mb-4">Why photography WooCommerce invoices are different</h2>
              <p className="text-slate-700 leading-relaxed mb-4">
                A photographer checkout can include booking deposits, final balances, commercial licensing, print products, rush fees, travel charges, and B2B purchase references. That makes the invoice workflow more complex than a normal product receipt.
              </p>
              <p className="text-slate-700 leading-relaxed">
                The strongest purchase path is to collect invoice data before payment, keep deposit/final documents connected, and make cancellations or partial refunds produce credit notes instead of corrected PDFs sent from support inboxes.
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
              <h2 className="text-3xl font-bold mb-5">Feature checklist before choosing a photography invoice plugin</h2>
              <div className="overflow-x-auto">
                <table className="min-w-full text-left border-separate border-spacing-y-3">
                  <thead>
                    <tr className="text-sm uppercase tracking-widest text-blue-800">
                      <th className="p-4 rounded-l-xl bg-white">Requirement</th>
                      <th className="p-4 rounded-r-xl bg-white">Why it matters for photographers</th>
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
              <h2 className="text-3xl font-bold mb-5">Common photography invoice scenarios</h2>
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
              <p className="uppercase tracking-[0.25em] text-blue-200 text-sm mb-3">Conversion shortcut</p>
              <h2 className="text-3xl font-bold mb-4">Turn shoot deposits and B2B invoice requests into a prefilled €49 review request.</h2>
              <p className="text-slate-200 leading-relaxed mb-6">
                If the store has booking deposits, balance payments, usage-license labels, or agency/client PO references, send those details before buying. The fit-check email gives Lattice the exact workflow needed for early-access qualification.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <a href={mailto} className="bg-green-400 text-slate-950 px-6 py-4 rounded-xl font-semibold text-center hover:bg-green-300 transition">
                  Send photography fit-check request
                </a>
                <Link href="/tools/woocommerce-invoice-setup-brief" className="bg-white/10 border border-white/20 px-6 py-4 rounded-xl font-semibold text-center hover:bg-white/15 transition">
                  Generate setup brief first
                </Link>
              </div>
            </div>

            <div className="bg-white rounded-2xl border shadow-sm p-8">
              <h2 className="text-3xl font-bold mb-5">Photography invoice FAQ</h2>
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
                Lattice Invoices is positioned as a €49 WooCommerce invoice workflow for EU stores that need VAT fields, PDF delivery, customer downloads, deposits, and credit-note handling.
              </p>
              <a href={mailto} className="block text-center bg-blue-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-blue-700 transition mb-3">
                Email photography invoice requirements
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
