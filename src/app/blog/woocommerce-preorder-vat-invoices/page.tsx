import type { Metadata } from "next";
import Link from "next/link";

const SITE_URL = "https://latticeplugins.com";
const SLUG = "/blog/woocommerce-preorder-vat-invoices";

export const metadata: Metadata = {
  title: "WooCommerce Preorder VAT Invoices: Deposits, Backorders, and PDFs",
  description:
    "A buyer-intent guide for WooCommerce stores selling preorders, backorders, launch products, deposits, or reservations that need VAT-ready invoice PDFs, proformas, final invoices, refunds, and credit notes.",
  alternates: {
    canonical: `${SITE_URL}${SLUG}`,
  },
  openGraph: {
    title: "WooCommerce preorder VAT invoice workflow",
    description:
      "What to check before choosing a WooCommerce invoice plugin for preorders, deposits, final invoices, refunds, and customer PDF downloads.",
    url: `${SITE_URL}${SLUG}`,
    siteName: "Lattice Plugins",
    type: "article",
  },
};

const workflowRisks = [
  {
    title: "Preorder payment is not always the final invoice moment",
    detail:
      "A launch store can collect payment weeks before stock ships. Finance may need a proforma, paid reservation document, or final VAT invoice only when the taxable event, payment policy, and fulfilment status are clear.",
    buyerQuestion:
      "Can the plugin separate preorder confirmation, proforma/payment request, final invoice, and credit-note documents instead of treating every preorder email as the final invoice?",
  },
  {
    title: "Deposits and balance payments need a clean audit trail",
    detail:
      "Some stores collect 20–50% upfront and charge the remaining balance later. If deposit, balance due, paid amount, VAT amount, and invoice number are not visible, customers and accountants ask for corrected PDFs.",
    buyerQuestion:
      "Can each PDF show deposit paid, remaining balance, invoice status, VAT metadata, payment date, and customer/company fields without manual editing?",
  },
  {
    title: "Backorders create support-heavy invoice changes",
    detail:
      "A backordered item can ship late, split into multiple shipments, change delivery fees, or be cancelled. Overwriting the original invoice breaks the support and accounting trail.",
    buyerQuestion:
      "Can refunds, split shipments, shipping changes, and cancelled preorder lines create linked credit notes or corrected documents tied to the original order?",
  },
  {
    title: "B2B preorder buyers need PO and VAT details before payment",
    detail:
      "Retailers, distributors, schools, agencies, and procurement teams often place launch preorders with PO numbers, VAT IDs, cost centres, and invoice email addresses. Collecting those details after checkout slows fulfilment.",
    buyerQuestion:
      "Can checkout capture VAT/BTW number, PO reference, invoice email, buyer reference, and legal company details before the preorder is placed?",
  },
];

const scenarios = [
  {
    title: "Hardware or accessory launch with paid preorders",
    pain: "Customers pay before stock arrives, then ask whether the first email is a receipt, proforma, or final VAT invoice.",
    lattice:
      "Use structured invoice status, paid preorder evidence, final invoice timing, PDF delivery, and refund-linked credit notes so launch support stays manageable.",
  },
  {
    title: "Course, event, or membership seat reservation",
    pain: "The order starts as a reservation or deposit, but a company buyer needs invoice fields, payment terms, and a final invoice once access begins.",
    lattice:
      "Collect company/VAT details at checkout, keep reservation context on the order, and generate customer-facing PDFs only at the right workflow stage.",
  },
  {
    title: "B2B backorder with split fulfilment",
    pain: "A procurement buyer orders multiple items, some ship now and some ship later. Shipping fees, PO references, and partial cancellations must stay traceable.",
    lattice:
      "Keep PO, backorder, shipping, and refund metadata connected so customer downloads, email attachments, and accountant export do not drift apart.",
  },
];

const requiredFields = [
  "Preorder status, expected fulfilment date, stock or release batch, and backorder reason",
  "Company name, VAT/BTW number, invoice email, billing country, and legal buyer name",
  "PO number, cost centre, buyer reference, project code, or procurement note",
  "Deposit amount, balance due, payment date, payment method, and payment terms",
  "Document type: preorder confirmation, proforma, payment request, final invoice, or credit note",
  "Shipping split, delivery fee, tracking reference, cancellation reason, and refund amount",
  "Invoice number, credit-note number, PDF status, resend action, and customer download link",
  "Accountant export status with VAT rate, VAT amount, paid total, remaining balance, and refund relation",
];

const faq = [
  {
    q: "Should WooCommerce preorders generate an invoice immediately?",
    a: "Not always. The safe workflow depends on payment timing, fulfilment, local VAT rules, and whether the document is a proforma, payment request, reservation confirmation, or final VAT invoice. The key is making the document state explicit.",
  },
  {
    q: "What should a preorder invoice plugin support?",
    a: "Look for VAT/BTW checkout fields, PO references, proforma and final invoice separation, deposit/balance visibility, PDF email attachments, My Account downloads, refund-linked credit notes, and accountant export data.",
  },
  {
    q: "Can Lattice Invoices qualify a preorder workflow before purchase?",
    a: "Yes. The early-access path is a €49 fit review: send store URL, countries sold into, preorder model, deposit/balance timing, VAT fields, fulfilment timing, refund cases, and accountant export needs.",
  },
  {
    q: "What should I send for a preorder invoice review?",
    a: "Send your store URL, preorder products, payment timing, expected shipping timing, B2B/B2C mix, VAT/BTW fields, PO requirements, deposit/balance examples, cancellation/refund scenarios, and the PDF/export evidence your accountant needs.",
  },
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "WooCommerce preorder VAT invoices for deposits, backorders, and PDF workflows",
  description:
    "A buyer-intent guide for WooCommerce preorder and backorder stores evaluating invoice plugins for VAT fields, deposits, final invoices, credit notes, and accounting exports.",
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
  "mailto:support@latticeplugins.com?subject=WooCommerce%20preorder%20VAT%20invoice%20workflow%20review&body=Hi%20Lattice%2C%0A%0AI%20want%20a%20WooCommerce%20preorder%20invoice%20workflow%20review.%0A%0AStore%20URL%3A%20%0APreorder%2Fbackorder%20products%3A%20%0ACountries%20sold%20into%3A%20%0AB2B%2FB2C%20mix%3A%20%0APayment%20timing%20(full%20payment%2C%20deposit%2C%20balance)%3A%20%0AFulfilment%2Fshipping%20timing%3A%20%0AVAT%2FBTW%20fields%20needed%3A%20%0APO%2Fbuyer%20reference%20fields%3A%20%0ACancellation%2Frefund%2Fcredit-note%20cases%3A%20%0AAccountant%20export%20fields%3A%20";

export default function WooCommercePreorderVatInvoicesPage() {
  return (
    <main className="min-h-screen bg-slate-50">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <section className="bg-gradient-to-br from-slate-950 via-indigo-950 to-emerald-900 text-white">
        <div className="max-w-5xl mx-auto px-6 py-16 lg:py-20">
          <p className="uppercase tracking-[0.3em] text-sm text-emerald-200 mb-4">Preorder VAT invoices</p>
          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
            WooCommerce preorder VAT invoices for deposits, backorders, final PDFs, and credit notes.
          </h1>
          <p className="text-xl text-emerald-50 leading-relaxed max-w-3xl mb-8">
            Preorders turn a simple WooCommerce sale into a finance workflow: payment may happen before stock ships, deposits may need a balance invoice, backorders may split fulfilment, and refunds need credit notes instead of edited PDFs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href={mailto} className="bg-green-400 text-slate-950 px-8 py-4 rounded-xl font-semibold hover:bg-green-300 transition shadow-lg text-center">
              Request €49 preorder invoice review
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
              <h2 className="text-3xl font-bold mb-4">Why preorder invoice workflows break inside WooCommerce</h2>
              <p className="text-slate-700 leading-relaxed mb-4">
                WooCommerce can accept a preorder payment, but the invoice state is more nuanced. A store owner may need to distinguish a reservation, proforma, deposit payment, final invoice, backorder shipment, or cancelled line item without confusing the customer or accountant.
              </p>
              <p className="text-slate-700 leading-relaxed">
                Lattice Invoices is positioned for stores that need workflow fit before purchase: the €49 early-access review checks whether VAT fields, preorder context, deposit/balance handling, PDF delivery, credit notes, and accountant export needs can be handled cleanly.
              </p>
            </div>

            <div className="bg-emerald-50 border border-emerald-100 rounded-2xl p-8">
              <h2 className="text-3xl font-bold mb-5">Preorder invoice plugin purchase checklist</h2>
              <div className="space-y-4">
                {workflowRisks.map((item) => (
                  <div key={item.title} className="bg-white rounded-xl border border-emerald-100 p-5">
                    <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                    <p className="text-slate-700 leading-relaxed mb-2">{item.detail}</p>
                    <p className="text-slate-600 leading-relaxed"><strong>Ask before buying:</strong> {item.buyerQuestion}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-2xl border shadow-sm p-8">
              <h2 className="text-3xl font-bold mb-5">Three preorder workflows to test before choosing a plugin</h2>
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
              <h2 className="text-3xl font-bold mb-4">Invoice fields preorder stores should capture before the PDF is generated</h2>
              <p className="text-slate-700 leading-relaxed mb-5">
                The expensive support work starts when preorder status, buyer references, deposits, balance payments, and refund reasons live outside the order. Capture them before the document is issued so the customer PDF and accountant export agree.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {requiredFields.map((field) => (
                  <div key={field} className="bg-slate-50 border rounded-xl p-4 text-slate-700">
                    ✓ {field}
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-slate-950 text-white rounded-2xl p-8">
              <h2 className="text-3xl font-bold mb-4">Turn preorder invoice uncertainty into a purchase-ready setup brief</h2>
              <p className="text-slate-200 leading-relaxed mb-6">
                If your store already gets questions about whether a preorder PDF is final, whether a deposit counts as an invoice, or how to correct a cancelled backorder, the €49 review creates a concise setup brief before you commit to the invoice workflow.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href={mailto} className="bg-green-400 text-slate-950 px-6 py-3 rounded-xl font-semibold text-center hover:bg-green-300 transition">
                  Send preorder invoice fit request
                </a>
                <Link href="/tools/woocommerce-invoice-setup-brief" className="border border-white/20 px-6 py-3 rounded-xl font-semibold text-center hover:bg-white/10 transition">
                  Generate setup brief first
                </Link>
              </div>
            </div>

            <div className="bg-white rounded-2xl border shadow-sm p-8">
              <h2 className="text-3xl font-bold mb-5">Preorder invoice FAQ</h2>
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
              <h2 className="text-2xl font-bold mb-3">Need preorder VAT invoices?</h2>
              <p className="text-slate-700 mb-5">
                Send your preorder, deposit, backorder, VAT, refund, and PDF requirements. Lattice will qualify whether the invoice workflow is a fit before purchase.
              </p>
              <a href={mailto} className="block text-center bg-blue-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-blue-700 transition mb-3">
                Request €49 preorder review
              </a>
              <Link href="/demo/lattice-invoices" className="block text-center border border-slate-200 px-6 py-3 rounded-xl font-semibold hover:border-blue-400 transition mb-3">
                View invoice demo
              </Link>
              <Link href="/blog/woocommerce-partial-payment-invoices" className="block text-center border border-slate-200 px-6 py-3 rounded-xl font-semibold hover:border-blue-400 transition mb-3">
                Deposit invoice guide
              </Link>
              <Link href="/blog/woocommerce-proforma-invoice" className="block text-center border border-slate-200 px-6 py-3 rounded-xl font-semibold hover:border-blue-400 transition mb-3">
                Proforma invoice guide
              </Link>
              <Link href="/blog/woocommerce-invoice-after-payment" className="block text-center border border-slate-200 px-6 py-3 rounded-xl font-semibold hover:border-blue-400 transition">
                Invoice after payment guide
              </Link>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}
