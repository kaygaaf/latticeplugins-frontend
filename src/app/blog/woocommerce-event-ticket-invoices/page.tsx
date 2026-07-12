import type { Metadata } from "next";
import Link from "next/link";

const SITE_URL = "https://latticeplugins.com";
const SLUG = "/blog/woocommerce-event-ticket-invoices";

export const metadata: Metadata = {
  title: "WooCommerce Event Ticket Invoices: VAT, Groups, and PDF Workflow",
  description:
    "A buyer-intent guide for event organisers selling tickets, workshops, conferences, deposits, and group bookings through WooCommerce who need VAT-ready invoice PDFs and credit notes.",
  alternates: {
    canonical: `${SITE_URL}${SLUG}`,
  },
  openGraph: {
    title: "WooCommerce event ticket invoices",
    description:
      "What event organisers should check before buying a WooCommerce invoice plugin: VAT IDs, buyer references, group tickets, refunds, credit notes, invoice PDFs, and accountant handoff.",
    url: `${SITE_URL}${SLUG}`,
    siteName: "Lattice Plugins",
    type: "article",
  },
};

const eventScenarios = [
  {
    title: "B2B conference tickets and team passes",
    pain:
      "A company buys five tickets, but the finance team later asks for a corrected legal name, VAT number, PO reference, and invoice email. If those fields were not captured before payment, support has to rebuild the invoice manually.",
    lattice:
      "Collect invoice details at checkout and keep them attached to the WooCommerce order, ticket lines, PDF invoice, and customer download record.",
  },
  {
    title: "Paid workshops, retreats, and training days",
    pain:
      "Events often use deposits, early-bird rates, coupons, and balance payments. The invoice workflow needs to show what was paid, what is still due, and which VAT rate applied.",
    lattice:
      "Use proforma/final invoice timing, payment-status evidence, due dates, and clear PDF delivery instead of sending edited PDFs from an inbox.",
  },
  {
    title: "Refunded tickets, no-shows, and attendee changes",
    pain:
      "Refunds and attendee substitutions create finance questions. A refunded ticket needs a credit-note trail connected to the original invoice, not a silent WooCommerce refund only.",
    lattice:
      "Require refund-linked credit notes, retained invoice PDFs, and correction notes so the customer and accountant can follow the event history.",
  },
];

const invoiceFields = [
  "Company legal name and invoice email",
  "VAT/BTW number and billing country",
  "PO number, cost centre, or buyer reference",
  "Attendee names or ticket batch reference",
  "Event name, event date, ticket type, and quantity",
  "Payment method, paid date, discount, VAT rate, and VAT amount",
  "Refund or cancellation status with linked credit note",
  "Protected customer download link for invoice PDFs",
];

const decisionRows = [
  {
    signal: "Companies buy multiple tickets and ask for corrected invoices",
    priority: "High",
    next:
      "Capture company/VAT/PO fields before payment and make them visible on the invoice PDF and accounting export.",
  },
  {
    signal: "Tickets are refunded, transferred, or partially cancelled",
    priority: "High",
    next:
      "Use credit-note support before relying on the workflow for finance handoff.",
  },
  {
    signal: "Events use deposits, balance payments, or bank transfer",
    priority: "Medium",
    next:
      "Check proforma timing, due dates, final invoice timing, and payment reminders before purchase.",
  },
  {
    signal: "The event is mostly low-value B2C tickets",
    priority: "Lower",
    next:
      "Start with the setup checklist, then buy once invoice requests become a repeated support cost.",
  },
];

const emailTemplateLines = [
  "Store URL and country",
  "Ticket/event plugin used with WooCommerce",
  "Event types: workshops, conferences, retreats, training days, or webinars",
  "Typical buyer: B2B teams, individual consumers, agencies, or schools",
  "Invoice fields requested today: VAT ID, PO number, invoice email, attendee names",
  "Monthly ticket volume and invoice-request volume",
  "Refund, transfer, cancellation, or credit-note cases",
  "Whether accountant export or PDF retention is required",
];

const faq = [
  {
    q: "Do event ticket stores need a different invoice workflow than normal products?",
    a: "Often, yes. Event orders include attendee names, ticket quantities, event dates, early-bird pricing, cancellations, and group buyers. The invoice workflow should preserve those event-specific details with the payment and VAT evidence.",
  },
  {
    q: "Should VAT and PO fields be collected before or after payment?",
    a: "Before payment is safer. If B2B buyers enter company name, VAT/BTW number, PO reference, and invoice email during checkout, the invoice PDF can be generated from order data instead of being corrected later by support.",
  },
  {
    q: "What happens when a ticket is refunded?",
    a: "A finance-ready workflow should create or record a credit note linked to the original invoice. The refund alone may be enough for WooCommerce stock/payment state, but it is not always enough for customer accounting.",
  },
  {
    q: "What is the next step if event invoice requests are already recurring?",
    a: "Use the €49 early-access review CTA. Send the store URL, ticket plugin, buyer type, required invoice fields, and refund cases so Lattice Invoices can qualify whether the workflow fits before purchase.",
  },
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "WooCommerce event ticket invoices: VAT, groups, and PDF workflow",
  description:
    "A buyer-intent guide for event organisers selling tickets, workshops, conferences, deposits, and group bookings through WooCommerce who need VAT-ready invoice PDFs and credit notes.",
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
  "mailto:support@latticeplugins.com?subject=WooCommerce%20event%20ticket%20invoice%20workflow%20review&body=Hi%20Lattice%2C%0A%0AI%20want%20a%20WooCommerce%20event%20ticket%20invoice%20workflow%20review.%0A%0AStore%20URL%3A%20%0ACountry%3A%20%0ATicket%2Fevent%20plugin%3A%20%0AEvent%20types%3A%20%0AB2B%20or%20B2C%20buyers%3A%20%0AInvoice%20requests%20per%20month%3A%20%0AInvoice%20fields%20needed%3A%20%0ARefund%2Fcredit-note%20cases%3A%20%0AAccountant%20export%20needs%3A%20";

export default function WooCommerceEventTicketInvoicesPage() {
  return (
    <main className="min-h-screen bg-slate-50">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <section className="bg-gradient-to-br from-slate-950 via-emerald-950 to-blue-900 text-white">
        <div className="max-w-5xl mx-auto px-6 py-16 lg:py-20">
          <p className="uppercase tracking-[0.3em] text-sm text-emerald-200 mb-4">Event ticket invoice workflow</p>
          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
            WooCommerce event ticket invoices: VAT fields, group buyers, and credit notes.
          </h1>
          <p className="text-xl text-blue-50 leading-relaxed max-w-3xl mb-8">
            Event organisers can sell tickets through WooCommerce in minutes, then lose hours fixing invoices for B2B buyers. Use this checklist before choosing an invoice plugin for tickets, workshops, retreats, conferences, and training days.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href={mailto} className="bg-green-400 text-slate-950 px-8 py-4 rounded-xl font-semibold hover:bg-green-300 transition shadow-lg text-center">
              Request €49 event invoice review
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
              <h2 className="text-3xl font-bold mb-4">Why ticket stores create messy invoice requests</h2>
              <p className="text-slate-700 leading-relaxed mb-4">
                Ticket checkout looks simple until a company buys seats for a team. The payer, attendee, procurement contact, VAT number, and invoice email can all be different. If WooCommerce only stores consumer billing fields, every B2B invoice correction becomes a manual support task.
              </p>
              <p className="text-slate-700 leading-relaxed">
                Lattice Invoices is positioned around that operational gap: capture invoice data before payment, attach it to the order, generate VAT-ready PDFs, preserve credit-note evidence, and give the buyer a download path without another email thread.
              </p>
            </div>

            <div className="grid gap-4">
              {eventScenarios.map((item) => (
                <div key={item.title} className="bg-white rounded-2xl border shadow-sm p-6">
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  <p className="text-slate-700 leading-relaxed mb-2"><strong>Invoice risk:</strong> {item.pain}</p>
                  <p className="text-slate-700 leading-relaxed"><strong>Lattice direction:</strong> {item.lattice}</p>
                </div>
              ))}
            </div>

            <div className="bg-emerald-50 border border-emerald-100 rounded-2xl p-8">
              <h2 className="text-3xl font-bold mb-5">Event invoice fields to qualify before buying</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {invoiceFields.map((field) => (
                  <div key={field} className="bg-white rounded-xl border border-emerald-100 p-4 flex gap-3">
                    <span className="text-emerald-700 font-bold">✓</span>
                    <span className="text-slate-800">{field}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-2xl border shadow-sm p-8 overflow-hidden">
              <h2 className="text-3xl font-bold mb-5">Should an event organiser buy now?</h2>
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
                Event invoice requests are easier to qualify when ticket type, buyer type, invoice fields, and refund cases are clear before purchase.
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
                Send event invoice details
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
            <div className="bg-white rounded-2xl border shadow-sm p-6 sticky top-6">
              <p className="text-sm uppercase tracking-widest text-emerald-700 font-semibold mb-2">For event organisers</p>
              <h2 className="text-2xl font-bold mb-3">Turn B2B ticket invoice requests into a repeatable workflow.</h2>
              <p className="text-slate-700 leading-relaxed mb-5">
                Send the store URL, ticket plugin, event type, invoice fields, and refund cases. The €49 early-access review qualifies whether Lattice Invoices fits the workflow.
              </p>
              <a href={mailto} className="block text-center bg-blue-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-blue-700 transition mb-3">
                Request event invoice review
              </a>
              <Link href="/woocommerce-eu-vat-invoices" className="block text-center border border-slate-200 px-6 py-3 rounded-xl font-semibold hover:border-blue-400 transition mb-3">
                View Lattice Invoices
              </Link>
              <Link href="/demo/lattice-invoices" className="block text-center border border-slate-200 px-6 py-3 rounded-xl font-semibold hover:border-blue-400 transition mb-3">
                See invoice workflow demo
              </Link>
              <Link href="/blog/woocommerce-invoice-plugin-for-online-courses" className="block text-center border border-slate-200 px-6 py-3 rounded-xl font-semibold hover:border-blue-400 transition mb-3">
                Online course invoice guide
              </Link>
              <Link href="/blog/woocommerce-partial-payment-invoices" className="block text-center border border-slate-200 px-6 py-3 rounded-xl font-semibold hover:border-blue-400 transition">
                Deposit invoice guide
              </Link>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}
