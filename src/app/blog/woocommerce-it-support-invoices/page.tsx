import type { Metadata } from "next";
import Link from "next/link";

const SITE_URL = "https://latticeplugins.com";
const SLUG = "/blog/woocommerce-it-support-invoices";
const PAGE_URL = `${SITE_URL}${SLUG}`;

export const metadata: Metadata = {
  title: "WooCommerce IT Support Invoices: SLA, Tickets, VAT, and PDFs",
  description:
    "Buyer-intent guide for IT support, MSP, helpdesk, and managed-service WooCommerce stores that need SLA/ticket context, VAT invoice PDFs, PO fields, renewals, refunds, and credit notes.",
  alternates: {
    canonical: PAGE_URL,
  },
  openGraph: {
    title: "WooCommerce IT support invoices",
    description:
      "How IT support and managed-service stores should handle WooCommerce VAT invoices, ticket references, SLA periods, PDF delivery, credit notes, and accountant handoff.",
    url: PAGE_URL,
    siteName: "Lattice Plugins",
    type: "article",
  },
};

const buyerProblems = [
  "A business customer needs the invoice to reference a support ticket, device, SLA, or contract period",
  "Finance asks for a PO number or cost-centre after checkout because WooCommerce did not capture it",
  "Monthly support bundles, one-off callouts, hardware, and remote fixes need different invoice labels",
  "Refunded incidents, unused support hours, and cancelled contracts need linked credit notes",
  "The accountant needs VAT totals, paid dates, invoice numbers, PDF links, and service context in one trail",
];

const workflowSteps = [
  {
    title: "1. Capture IT billing metadata before payment",
    text: "Collect company name, VAT/BTW number, invoice email, PO/reference, support ticket, asset ID, and SLA period while the buyer is still in checkout.",
  },
  {
    title: "2. Keep service, hardware, and contract lines readable",
    text: "Separate support hours, emergency callouts, hardware, licenses, onboarding fees, and maintenance contracts so the invoice is finance-safe and accountant-friendly.",
  },
  {
    title: "3. Attach invoice PDFs to paid-order emails",
    text: "After payment, generate a sequential invoice number, attach the PDF to the WooCommerce email, and store a customer download link in My Account.",
  },
  {
    title: "4. Use credit notes for corrections",
    text: "Do not overwrite issued invoices when an incident is refunded or a support bundle is corrected. Create a linked credit note with the reason and original invoice reference.",
  },
];

const fieldRows = [
  ["Support ticket / case ID", "Lets finance and IT managers match the invoice to the helpdesk incident."],
  ["Asset, device, or user reference", "Useful for laptop repairs, endpoint management, seat changes, and audit trails."],
  ["SLA or contract period", "Clarifies whether the invoice covers a one-off fix, monthly support, onboarding, or a renewal."],
  ["PO / cost centre", "Required by many business buyers before accounts payable will process the invoice."],
  ["Invoice email", "Routes the PDF to finance rather than only the technical requester."],
  ["Credit-note reason", "Explains refunds for unused support hours, cancelled contracts, failed callouts, or duplicate payments."],
];

const scenarios = [
  {
    title: "Managed-service package renewal",
    weak: "WooCommerce renews the order but the invoice does not show the SLA month, contract, or covered seats.",
    strong: "The invoice stores renewal period, service plan, buyer VAT details, PO reference, and customer PDF download.",
  },
  {
    title: "Emergency support callout",
    weak: "The client pays online and later asks support to add ticket details manually to a PDF.",
    strong: "Checkout/order metadata captures the ticket, device, requester, and invoice email before the PDF is generated.",
  },
  {
    title: "Hardware plus setup service",
    weak: "Hardware, labour, shipping, and setup are mixed into a generic product line that finance cannot reconcile.",
    strong: "Invoice labels keep hardware, service, license, VAT totals, and credit-note adjustments readable for bookkeeping.",
  },
];

const scoring = [
  { signal: "You sell support hours, retainers, managed services, licenses, repairs, or onboarding through WooCommerce", score: "+2" },
  { signal: "Customers ask for ticket IDs, SLA periods, PO numbers, or cost centres on invoices", score: "+2" },
  { signal: "Invoices need to be sent to accounts payable instead of the technical requester", score: "+1" },
  { signal: "Refunds or unused support hours require credit notes", score: "+2" },
  { signal: "Your accountant currently reconciles WooCommerce orders from screenshots or CSV edits", score: "+1" },
];

const faq = [
  {
    q: "Can WooCommerce handle IT support invoices?",
    a: "WooCommerce can take payment, but IT support workflows often need extra invoice context: support tickets, SLA periods, asset references, PO numbers, VAT fields, PDF delivery, and credit notes for corrections.",
  },
  {
    q: "Should support-ticket details appear on every customer invoice?",
    a: "Only finance-safe details should be printed. The workflow should store enough metadata for audit and accounting, while avoiding sensitive technical notes that do not belong on a tax invoice.",
  },
  {
    q: "Where does Lattice Invoices fit for IT support stores?",
    a: "Lattice Invoices is positioned as a focused €49 early-access WooCommerce invoice workflow for EU VAT/BTW fields, invoice PDFs, credit notes, customer downloads, and accountant handoff. This guide qualifies IT support stores before purchase.",
  },
  {
    q: "What should I send for an early-access fit review?",
    a: "Send store URL, country, services sold, B2B/B2C mix, ticket/SLA fields needed, PO requirements, invoice-number format, refund/credit-note needs, and accounting export requirements.",
  },
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "WooCommerce IT support invoices: SLA, tickets, VAT, and PDFs",
  description:
    "Buyer-intent guide for IT support and managed-service WooCommerce stores that need VAT-ready invoice PDFs, service metadata, customer downloads, and credit notes.",
  mainEntityOfPage: PAGE_URL,
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
  "mailto:support@latticeplugins.com?subject=WooCommerce%20IT%20support%20invoice%20workflow%20review&body=Hi%20Lattice%2C%0A%0AI%20want%20to%20check%20whether%20Lattice%20Invoices%20fits%20an%20IT%20support%20or%20managed-service%20WooCommerce%20workflow.%0A%0AStore%20URL%3A%20%0ACountry%3A%20%0AIT%20services%20sold%3A%20%0AB2B%2FB2C%20split%3A%20%0ATicket%2FSLA%2Fasset%20fields%20needed%3A%20%0APO%2Fcost-centre%20fields%20needed%3A%20%0AVAT%2FBTW%20fields%20needed%3A%20%0AInvoice%20number%20format%3A%20%0ARefund%2Fcredit-note%20needs%3A%20%0AAccounting%20export%20needs%3A%20";

export default function WooCommerceItSupportInvoicesPage() {
  return (
    <main className="min-h-screen bg-slate-50">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <section className="bg-gradient-to-br from-slate-950 via-blue-950 to-cyan-900 text-white">
        <div className="max-w-5xl mx-auto px-6 py-16 lg:py-20">
          <p className="uppercase tracking-[0.3em] text-sm text-cyan-200 mb-4">IT support invoice workflow</p>
          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
            WooCommerce invoices for IT support, SLA contracts, and managed services.
          </h1>
          <p className="text-xl text-blue-50 leading-relaxed max-w-3xl mb-8">
            If your WooCommerce store sells support hours, retainers, repairs, licenses, onboarding, or managed-service packages, invoice PDFs need ticket context, VAT details, PO fields, credit notes, and clean accountant handoff.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href={mailto} className="bg-cyan-400 text-slate-950 px-8 py-4 rounded-xl font-semibold hover:bg-cyan-300 transition shadow-lg text-center">
              Request €49 IT invoice review
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
              <h2 className="text-3xl font-bold mb-4">Why IT support stores create invoice support loops</h2>
              <p className="text-slate-700 leading-relaxed mb-5">
                IT support orders rarely represent a simple product. One WooCommerce order may cover a helpdesk incident, endpoint setup, monthly SLA, user-seat change, remote repair, hardware shipment, licence renewal, or emergency callout.
              </p>
              <div className="space-y-3">
                {buyerProblems.map((problem) => (
                  <div key={problem} className="flex gap-3 rounded-xl bg-cyan-50 border border-cyan-100 p-4">
                    <span className="text-cyan-700 font-bold">→</span>
                    <span className="text-slate-800">{problem}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-2xl border shadow-sm p-8">
              <h2 className="text-3xl font-bold mb-6">The IT support invoice workflow to require</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {workflowSteps.map((step) => (
                  <div key={step.title} className="rounded-xl border border-slate-200 bg-slate-50 p-5">
                    <h3 className="font-bold text-lg mb-2">{step.title}</h3>
                    <p className="text-slate-700 leading-relaxed">{step.text}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-2xl border shadow-sm p-8 overflow-hidden">
              <h2 className="text-3xl font-bold mb-4">Fields an IT invoice plugin should support</h2>
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-slate-100 text-slate-700">
                      <th className="p-4 rounded-l-xl">Field</th>
                      <th className="p-4 rounded-r-xl">Why it matters for IT support invoices</th>
                    </tr>
                  </thead>
                  <tbody>
                    {fieldRows.map(([field, reason]) => (
                      <tr key={field} className="border-b last:border-b-0">
                        <td className="p-4 font-semibold text-slate-900">{field}</td>
                        <td className="p-4 text-slate-700">{reason}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div className="grid gap-4">
              {scenarios.map((item) => (
                <div key={item.title} className="bg-white rounded-2xl border shadow-sm p-6">
                  <h2 className="text-2xl font-bold mb-3">{item.title}</h2>
                  <p className="text-slate-700 leading-relaxed mb-2"><strong>Manual invoice risk:</strong> {item.weak}</p>
                  <p className="text-slate-700 leading-relaxed"><strong>Lattice-ready workflow:</strong> {item.strong}</p>
                </div>
              ))}
            </div>

            <div className="bg-cyan-50 border border-cyan-100 rounded-2xl p-8">
              <h2 className="text-3xl font-bold mb-5">Should your IT store request €49 early access?</h2>
              <p className="text-slate-700 leading-relaxed mb-5">
                Score the signals below. A total of 3+ means the invoice pain is probably expensive enough to justify a focused Lattice Invoices review instead of another month of manual PDF edits.
              </p>
              <div className="space-y-3">
                {scoring.map((item) => (
                  <div key={item.signal} className="flex flex-col sm:flex-row sm:items-center gap-3 rounded-xl bg-white border border-cyan-100 p-4">
                    <span className="inline-flex w-12 h-12 rounded-full bg-cyan-600 text-white font-bold items-center justify-center">{item.score}</span>
                    <span className="text-slate-800">{item.signal}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-slate-950 text-white rounded-2xl p-8">
              <h2 className="text-3xl font-bold mb-4">Send one useful fit request instead of a vague contact form.</h2>
              <p className="text-slate-200 leading-relaxed mb-6">
                Include ticket/SLA fields, PO requirements, VAT/BTW fields, invoice-numbering needs, credit-note rules, and accountant export needs. That makes the €49 early-access conversation specific enough to move toward a sale.
              </p>
              <a href={mailto} className="inline-flex bg-cyan-400 text-slate-950 px-6 py-3 rounded-xl font-semibold hover:bg-cyan-300 transition">
                Send IT support invoice fit request
              </a>
            </div>
          </article>

          <aside className="space-y-6">
            <div className="bg-white rounded-2xl border shadow-sm p-6 sticky top-6">
              <p className="text-sm uppercase tracking-widest text-cyan-700 font-semibold mb-3">Lattice Invoices fit</p>
              <h2 className="text-2xl font-bold mb-4">Best fit for IT support stores that need:</h2>
              <ul className="space-y-3 text-slate-700 mb-6">
                <li>✓ Ticket, SLA, asset, and PO invoice fields</li>
                <li>✓ VAT/BTW-ready invoice PDFs</li>
                <li>✓ Email attachments and My Account downloads</li>
                <li>✓ Credit notes for refunds and unused hours</li>
                <li>✓ Cleaner accountant handoff</li>
              </ul>
              <a href={mailto} className="block text-center bg-cyan-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-cyan-700 transition mb-3">
                Request €49 IT review
              </a>
              <Link href="/tools/woocommerce-invoice-setup-brief" className="block text-center border border-slate-200 px-6 py-3 rounded-xl font-semibold hover:border-cyan-400 transition mb-3">
                Generate setup brief
              </Link>
              <Link href="/demo/lattice-invoices" className="block text-center border border-slate-200 px-6 py-3 rounded-xl font-semibold hover:border-cyan-400 transition mb-3">
                View invoice demo
              </Link>
              <Link href="/blog/woocommerce-b2b-service-invoices" className="block text-center border border-slate-200 px-6 py-3 rounded-xl font-semibold hover:border-cyan-400 transition">
                B2B service invoice guide
              </Link>
            </div>
          </aside>
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-6 pb-16">
        <div className="bg-white rounded-2xl border shadow-sm p-8">
          <h2 className="text-3xl font-bold mb-6">FAQ</h2>
          <div className="space-y-5">
            {faq.map((item) => (
              <div key={item.q} className="border-b last:border-b-0 pb-5 last:pb-0">
                <h3 className="text-xl font-bold mb-2">{item.q}</h3>
                <p className="text-slate-700 leading-relaxed">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
