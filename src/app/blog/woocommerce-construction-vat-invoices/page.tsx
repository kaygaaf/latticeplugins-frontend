import type { Metadata } from "next";
import Link from "next/link";

const SITE_URL = "https://latticeplugins.com";
const SLUG = "/blog/woocommerce-construction-vat-invoices";

export const metadata: Metadata = {
  title: "WooCommerce Construction VAT Invoices for Contractors and Trades",
  description:
    "A buyer-intent guide for contractors, installers, and construction suppliers using WooCommerce for deposits, milestones, VAT invoices, credit notes, and accountant exports.",
  alternates: {
    canonical: `${SITE_URL}${SLUG}`,
  },
  openGraph: {
    title: "WooCommerce construction VAT invoice workflow",
    description:
      "What construction and trade businesses should check before buying a WooCommerce invoice plugin: deposits, project references, VAT, PO numbers, PDFs, credit notes, and exports.",
    url: `${SITE_URL}${SLUG}`,
    siteName: "Lattice Plugins",
    type: "article",
  },
};

const workflowChecks = [
  {
    title: "Deposits and milestones need invoice context",
    detail:
      "Construction orders are rarely a single clean cart payment. A job can start with a deposit, continue with a milestone invoice, and finish with a balance payment. The invoice plugin should keep each invoice connected to the WooCommerce order, project reference, customer, VAT rate, and payment status.",
    buyerQuestion: "Can finance see which project, milestone, and payment status each invoice belongs to?",
  },
  {
    title: "B2B buyers expect PO numbers and job references",
    detail:
      "Facilities teams, property managers, and larger contractors often require purchase-order numbers, site references, cost centres, or project names on the invoice PDF. If those fields live only in order notes, the accountant still has to repair the invoice manually.",
    buyerQuestion: "Can checkout collect PO/job metadata before the customer pays or requests an invoice?",
  },
  {
    title: "VAT corrections must not break the audit trail",
    detail:
      "Refunds, cancelled jobs, damaged goods, changed quantities, and corrected VAT rates need linked credit notes. A replacement PDF without a correction trail is risky for both the seller and the buyer.",
    buyerQuestion: "Can refunds and corrections create credit notes linked to the original invoice?",
  },
  {
    title: "Customer downloads reduce invoice resend requests",
    detail:
      "Trade customers often need the same invoice again for reimbursement, project accounting, or year-end bookkeeping. My Account downloads and email attachments prevent repeated admin requests.",
    buyerQuestion: "Can the customer retrieve the invoice PDF without emailing support?",
  },
];

const scenarios = [
  {
    title: "Installer selling deposits for booked work",
    pain: "The deposit is paid online, but the final invoice is created manually after the job. VAT totals and references can drift between systems.",
    lattice:
      "Keep deposit, order, customer VAT metadata, final invoice PDF, and credit-note decisions in one WooCommerce-native workflow.",
  },
  {
    title: "B2B supplier selling materials to contractors",
    pain: "Contractors need PO numbers, site references, VAT invoices, and replacement copies for each order.",
    lattice:
      "Collect invoice fields at checkout, attach PDF invoices to emails, and preserve customer-download links for procurement teams.",
  },
  {
    title: "Maintenance company using bank transfer terms",
    pain: "Customers ask for proformas, Net 14/30 due dates, reminders, and final VAT invoices once paid.",
    lattice:
      "Use proforma/payment-term workflows before payment, then issue final invoice PDFs with payment evidence and accountant export fields.",
  },
];

const setupFields = [
  "Project, site, or job reference",
  "Purchase-order number or buyer reference",
  "Deposit, milestone, balance, or final invoice type",
  "Customer VAT/BTW number and billing country",
  "VAT rate, reverse-charge reason, or exemption note",
  "Payment method, due date, and paid/unpaid status",
  "Credit-note relation for refunds and cancelled work",
  "PDF invoice URL and customer-download status",
];

const faq = [
  {
    q: "What should a WooCommerce invoice plugin handle for construction businesses?",
    a: "Prioritize deposit and milestone invoice context, PO numbers, job references, VAT/BTW fields, PDF email attachments, My Account downloads, refund-linked credit notes, and accounting export. A nice-looking PDF template is not enough if the job metadata is missing.",
  },
  {
    q: "Do construction stores need proforma invoices?",
    a: "Many do, especially when accepting bank transfers, deposits, or Net 14/30 payment terms. A proforma can request payment before the final VAT invoice is issued after payment, while keeping the order and project reference in WooCommerce.",
  },
  {
    q: "Can Lattice Invoices qualify my construction workflow before purchase?",
    a: "Yes. The early-access path is a €49 fit review: send your store URL, product/job types, deposit or milestone flow, VAT needs, PO/job fields, refund cases, and accountant export requirements so Lattice can confirm whether the workflow is a good fit.",
  },
  {
    q: "What details should I send for the construction invoice review?",
    a: "Send your store URL, whether you sell services, deposits, materials, or maintenance plans, the countries sold into, required PO/job fields, payment terms, VAT or reverse-charge cases, refund/credit-note examples, and the export your accountant wants.",
  },
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "WooCommerce construction VAT invoices for contractors and trades",
  description:
    "A buyer-intent guide for contractors, installers, and construction suppliers using WooCommerce for deposits, milestones, VAT invoices, credit notes, and accountant exports.",
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
  "mailto:support@latticeplugins.com?subject=WooCommerce%20construction%20VAT%20invoice%20workflow%20review&body=Hi%20Lattice%2C%0A%0AI%20want%20a%20WooCommerce%20construction%2Ftrade%20invoice%20workflow%20review.%0A%0AStore%20URL%3A%20%0AWhat%20we%20sell%20%28deposits%2C%20services%2C%20materials%2C%20maintenance%29%3A%20%0ACountries%20sold%20into%3A%20%0APO%2Fjob%20reference%20fields%20needed%3A%20%0ADeposit%2Fmilestone%20flow%3A%20%0APayment%20terms%20or%20bank%20transfer%20flow%3A%20%0AVAT%2Freverse-charge%20needs%3A%20%0ARefund%2Fcredit-note%20cases%3A%20%0AAccountant%20export%20fields%3A%20";

export default function WooCommerceConstructionVatInvoicesPage() {
  return (
    <main className="min-h-screen bg-slate-50">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <section className="bg-gradient-to-br from-slate-950 via-amber-950 to-orange-900 text-white">
        <div className="max-w-5xl mx-auto px-6 py-16 lg:py-20">
          <p className="uppercase tracking-[0.3em] text-sm text-amber-200 mb-4">Construction VAT invoices</p>
          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
            WooCommerce construction VAT invoices for contractors, installers, and trade suppliers.
          </h1>
          <p className="text-xl text-amber-50 leading-relaxed max-w-3xl mb-8">
            Construction and trade stores need more than a generic PDF invoice. Deposits, milestone payments, PO numbers, site references, VAT evidence, credit notes, and accountant exports all have to stay connected to the WooCommerce order.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href={mailto} className="bg-green-400 text-slate-950 px-8 py-4 rounded-xl font-semibold hover:bg-green-300 transition shadow-lg text-center">
              Request €49 construction invoice review
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
              <h2 className="text-3xl font-bold mb-4">Why construction invoice workflows break inside generic WooCommerce stores</h2>
              <p className="text-slate-700 leading-relaxed mb-4">
                A construction or trade order often includes a site visit, deposit, partial delivery, balance payment, change request, or refund. If the invoice plugin only prints the order total, the business still has to rebuild job context in spreadsheets or accounting notes.
              </p>
              <p className="text-slate-700 leading-relaxed">
                Lattice Invoices is positioned for WooCommerce stores that need invoice workflow fit before purchase: the €49 early-access review checks whether the store&apos;s project references, VAT fields, invoice timing, credit-note cases, and export needs can be handled cleanly.
              </p>
            </div>

            <div className="bg-amber-50 border border-amber-100 rounded-2xl p-8">
              <h2 className="text-3xl font-bold mb-5">Construction invoice plugin purchase checklist</h2>
              <div className="space-y-4">
                {workflowChecks.map((item) => (
                  <div key={item.title} className="bg-white rounded-xl border border-amber-100 p-5">
                    <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                    <p className="text-slate-700 leading-relaxed mb-2">{item.detail}</p>
                    <p className="text-slate-600 leading-relaxed"><strong>Ask before buying:</strong> {item.buyerQuestion}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-2xl border shadow-sm p-8">
              <h2 className="text-3xl font-bold mb-5">Three construction workflows to test before choosing a plugin</h2>
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
              <h2 className="text-3xl font-bold mb-4">Invoice fields contractors should capture before the PDF is generated</h2>
              <p className="text-slate-700 leading-relaxed mb-5">
                The easiest time to collect invoice context is before payment or order approval. If the data is captured later, finance has to chase the customer or guess from email threads.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {setupFields.map((field) => (
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
              <p className="text-sm uppercase tracking-widest text-amber-700 font-semibold mb-2">Trade workflow review</p>
              <h2 className="text-2xl font-bold mb-3">Qualify construction invoice fit before buying.</h2>
              <p className="text-slate-700 leading-relaxed mb-5">
                Send the store URL, job types, deposit flow, PO fields, VAT needs, credit-note cases, and accountant export requirements. The €49 review turns a generic invoice-plugin search into a concrete Lattice Invoices fit check.
              </p>
              <a href={mailto} className="block text-center bg-blue-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-blue-700 transition mb-3">
                Request construction invoice review
              </a>
              <Link href="/tools/woocommerce-invoice-setup-brief" className="block text-center border border-slate-200 px-6 py-3 rounded-xl font-semibold hover:border-blue-400 transition mb-3">
                Generate setup brief
              </Link>
              <Link href="/tools/woocommerce-invoice-roi-calculator" className="block text-center border border-slate-200 px-6 py-3 rounded-xl font-semibold hover:border-blue-400 transition mb-3">
                Calculate invoice ROI
              </Link>
              <Link href="/docs/woocommerce-eu-vat-invoice-setup" className="block text-center border border-slate-200 px-6 py-3 rounded-xl font-semibold hover:border-blue-400 transition">
                Read setup guide
              </Link>
              <div className="border-t mt-6 pt-6 space-y-3 text-sm text-slate-600">
                <div>✓ Deposits, milestones, and project references</div>
                <div>✓ VAT/BTW, PO numbers, and customer downloads</div>
                <div>✓ Credit notes and accountant-ready exports</div>
              </div>
            </div>

            <div className="bg-slate-900 text-white rounded-2xl p-6">
              <h3 className="text-xl font-bold mb-3">Related invoice guides</h3>
              <div className="space-y-3 text-sm">
                <Link href="/blog/woocommerce-partial-payment-invoices" className="block text-amber-200 hover:text-white">Partial payment invoices</Link>
                <Link href="/blog/woocommerce-purchase-order-invoices" className="block text-amber-200 hover:text-white">Purchase-order invoices</Link>
                <Link href="/blog/woocommerce-bank-transfer-invoice" className="block text-amber-200 hover:text-white">Bank transfer invoice workflow</Link>
                <Link href="/blog/woocommerce-invoice-plugin-for-accountants" className="block text-amber-200 hover:text-white">Accountant invoice workflow</Link>
                <Link href="/woocommerce-eu-vat-invoices" className="block text-amber-200 hover:text-white">Lattice Invoices landing page</Link>
              </div>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}
