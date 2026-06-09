import type { Metadata } from "next";
import Link from "next/link";

const SITE_URL = "https://latticeplugins.com";

export const metadata: Metadata = {
  title: "WooCommerce Invoice Correction Workflow for EU VAT Stores",
  description:
    "A buyer-intent WooCommerce invoice correction workflow for EU VAT stores that need credit notes, replacement invoices, audit trail, and retained PDF evidence.",
  alternates: {
    canonical: `${SITE_URL}/blog/woocommerce-invoice-correction-workflow`,
  },
  openGraph: {
    title: "WooCommerce invoice correction workflow for EU VAT stores",
    description:
      "Plan invoice corrections without overwriting legal evidence: credit notes, replacement invoices, VAT metadata, customer delivery, audit trail, and accounting exports.",
    url: `${SITE_URL}/blog/woocommerce-invoice-correction-workflow`,
    siteName: "Lattice Plugins",
    type: "article",
  },
};

const correctionSteps = [
  {
    step: "1. Identify the correction type",
    detail:
      "Separate simple display mistakes from legal invoice changes. A wrong billing address, VAT/BTW number, line item, tax rate, or refund can require a credit note and a replacement invoice instead of editing the old PDF.",
    buyerQuestion: "Does the plugin tell finance when to issue a credit note instead of silently regenerating the existing invoice?",
  },
  {
    step: "2. Preserve the original issued document",
    detail:
      "Keep the original invoice number, PDF snapshot, issue timestamp, VAT evidence, payment status, email delivery log, and customer download history available after the correction.",
    buyerQuestion: "Can support retrieve the original and corrected documents separately during an audit or customer dispute?",
  },
  {
    step: "3. Create the correcting document",
    detail:
      "Issue a credit note, replacement invoice, or corrected invoice with its own number, reason, link to the original order, and line-level tax/VAT treatment.",
    buyerQuestion: "Are corrections numbered and linked, or does the plugin overwrite totals on the order and hope the accountant can infer the story?",
  },
  {
    step: "4. Deliver the corrected invoice cleanly",
    detail:
      "Send the corrected PDF to the customer, update My Account downloads, prevent stale PDF links, and make sure BACS/proforma/final-invoice timing still makes sense.",
    buyerQuestion: "Can the customer see which invoice is current without receiving duplicate or contradictory attachments?",
  },
  {
    step: "5. Export the correction for accounting",
    detail:
      "Export both original and correcting documents with invoice numbers, credit-note numbers, tax rates, VAT IDs, payment status, currency, and correction reasons.",
    buyerQuestion: "Will the accountant receive a clean correction trail instead of a mutated order row?",
  },
];

const scenarios = [
  {
    title: "Wrong VAT number after checkout",
    risk: "If the PDF is overwritten, the store loses proof of the invoice originally issued and the reason the corrected invoice exists.",
    latticeAngle: "Use a correction workflow that retains the original invoice, stores the corrected VAT number, and links the replacement document to the same WooCommerce order.",
  },
  {
    title: "Partial refund after a paid B2B order",
    risk: "Refunds often reduce order totals without creating a proper credit note PDF, legal sequence, or accounting export line.",
    latticeAngle: "Treat the refund as a credit-note workflow with its own document number, PDF delivery, customer access, and export evidence.",
  },
  {
    title: "Incorrect reverse-charge or VAT-exempt wording",
    risk: "Reverse-charge text, exemption reasons, and country logic must be auditable; rewriting the old invoice hides the correction path.",
    latticeAngle: "Capture the correction reason, retain the original, and issue a corrected invoice with VAT metadata that can be reviewed later.",
  },
];

const faq = [
  {
    q: "Can I edit a WooCommerce invoice after it was issued?",
    a: "You can edit operational data, but EU VAT stores should avoid overwriting legally issued invoice evidence. In many cases the safer workflow is to retain the original PDF, issue a credit note or corrected invoice, and link the documents in an audit trail.",
  },
  {
    q: "What should a WooCommerce invoice correction plugin store?",
    a: "It should store the original invoice PDF, corrected document number, correction reason, VAT/BTW metadata, credit-note link, customer delivery status, My Account download state, and accounting export fields.",
  },
  {
    q: "Do refunds always need credit notes?",
    a: "Not every operational refund is identical, but B2B and EU VAT workflows often need a credit note or explicit correction document so the accountant can reconcile the refund, VAT totals, and original invoice.",
  },
  {
    q: "Where does Lattice Invoices fit?",
    a: "Lattice Invoices is the early-access WooCommerce EU invoicing path for stores that need practical correction workflows: retained PDFs, credit notes, corrected invoice delivery, VAT evidence, audit trail, customer downloads, and accountant exports.",
  },
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "WooCommerce invoice correction workflow for EU VAT stores",
  description:
    "A practical workflow for WooCommerce stores correcting issued invoices while protecting PDFs, VAT evidence, credit notes, customer delivery, and accounting exports.",
  mainEntityOfPage: `${SITE_URL}/blog/woocommerce-invoice-correction-workflow`,
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
  "mailto:support@latticeplugins.com?subject=WooCommerce%20invoice%20correction%20workflow%20review&body=Hi%20Lattice%2C%0A%0AI%20want%20a%20WooCommerce%20invoice%20correction%20workflow%20review.%0A%0AStore%20URL%3A%20%0ACountry%3A%20%0ACurrent%20invoice%20plugin%3A%20%0ACommon%20correction%20cases%20(VAT%20number%2Frefund%2Faddress%2Freverse%20charge)%3A%20%0ACredit-note%20workflow%3A%20%0ACustomer%20PDF%20download%20workflow%3A%20%0AAccounting%20software%3A%20";

export default function WooCommerceInvoiceCorrectionWorkflowPage() {
  return (
    <main className="min-h-screen bg-slate-50">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <section className="bg-gradient-to-br from-slate-950 via-blue-950 to-cyan-900 text-white">
        <div className="max-w-5xl mx-auto px-6 py-16 lg:py-20">
          <p className="uppercase tracking-[0.3em] text-sm text-cyan-200 mb-4">WooCommerce invoice corrections</p>
          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
            Correct WooCommerce invoices without overwriting VAT evidence or confusing your accountant.
          </h1>
          <p className="text-xl text-cyan-50 leading-relaxed max-w-3xl mb-8">
            EU VAT stores need more than a “regenerate PDF” button. Corrections need retained originals, credit notes, replacement invoices, VAT metadata, customer delivery, and accounting exports that explain what changed.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href={mailto} className="bg-cyan-500 text-slate-950 px-8 py-4 rounded-xl font-semibold hover:bg-cyan-300 transition shadow-lg text-center">
              Request €49 correction workflow review
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
              <h2 className="text-3xl font-bold mb-4">Why invoice corrections are a buying-risk test</h2>
              <p className="text-slate-700 leading-relaxed mb-4">
                A store can look compliant while every invoice is perfect. The real test is what happens when a VAT number is fixed, a B2B refund is issued, a reverse-charge note is corrected, or a customer asks for the updated PDF months later.
              </p>
              <p className="text-slate-700 leading-relaxed">
                Use this workflow before choosing or replacing a WooCommerce invoice plugin. It turns corrections into a concrete checklist for support, finance, accounting, and customer self-service.
              </p>
            </div>

            <div className="bg-cyan-50 border border-cyan-100 rounded-2xl p-8">
              <h2 className="text-3xl font-bold mb-5">Invoice correction workflow checklist</h2>
              <div className="space-y-4">
                {correctionSteps.map((item) => (
                  <div key={item.step} className="bg-white rounded-xl border border-cyan-100 p-5">
                    <h3 className="text-xl font-bold mb-2">{item.step}</h3>
                    <p className="text-slate-700 leading-relaxed mb-2">{item.detail}</p>
                    <p className="text-slate-600 leading-relaxed"><strong>Buyer question:</strong> {item.buyerQuestion}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-2xl border shadow-sm p-8">
              <h2 className="text-3xl font-bold mb-5">Correction scenarios to test before buying</h2>
              <div className="grid gap-4">
                {scenarios.map((item) => (
                  <div key={item.title} className="border rounded-xl p-5">
                    <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                    <p className="text-slate-700 leading-relaxed mb-2"><strong>Risk:</strong> {item.risk}</p>
                    <p className="text-slate-700 leading-relaxed"><strong>Lattice angle:</strong> {item.latticeAngle}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-emerald-50 border border-emerald-100 rounded-2xl p-8">
              <h2 className="text-3xl font-bold mb-4">Early-access offer: €49 correction workflow review</h2>
              <p className="text-slate-700 leading-relaxed mb-5">
                Send your current invoice plugin, correction cases, credit-note workflow, VAT-number handling, refund process, PDF delivery, and accounting software. Lattice will map the correction workflow gaps that can block a clean EU VAT invoice setup.
              </p>
              <a href={mailto} className="inline-flex bg-emerald-600 text-white px-7 py-3 rounded-xl font-semibold hover:bg-emerald-700 transition">
                Send my correction workflow details
              </a>
            </div>

            <div className="bg-white rounded-2xl border shadow-sm p-8">
              <h2 className="text-3xl font-bold mb-6">FAQ</h2>
              <div className="space-y-5">
                {faq.map((item) => (
                  <div key={item.q}>
                    <h3 className="text-lg font-semibold mb-2">{item.q}</h3>
                    <p className="text-slate-700 leading-relaxed">{item.a}</p>
                  </div>
                ))}
              </div>
            </div>
          </article>

          <aside className="space-y-6">
            <div className="bg-white rounded-2xl border shadow-sm p-6 sticky top-6">
              <p className="text-sm uppercase tracking-[0.2em] text-cyan-700 font-semibold mb-3">Lattice Invoices early access</p>
              <h2 className="text-2xl font-bold mb-3">Do corrections create finance tickets?</h2>
              <p className="text-slate-600 mb-5">
                Get a focused review for credit notes, corrected invoice PDFs, VAT evidence, customer downloads, audit trail, and exports before your next B2B invoice dispute.
              </p>
              <a href={mailto} className="block text-center bg-slate-950 text-white px-5 py-3 rounded-xl font-semibold hover:bg-slate-800 transition mb-3">
                Request correction review
              </a>
              <Link href="/docs/woocommerce-eu-vat-invoice-setup" className="block text-center border border-slate-200 px-5 py-3 rounded-xl font-semibold hover:bg-slate-50 transition">
                Read setup guide
              </Link>
            </div>

            <div className="bg-blue-50 rounded-2xl border border-blue-100 p-6">
              <h3 className="text-xl font-bold mb-3">Related invoice guides</h3>
              <ul className="space-y-3 text-blue-900 font-medium">
                <li><Link href="/blog/woocommerce-credit-notes-refunds" className="hover:underline">Credit notes and refunds</Link></li>
                <li><Link href="/blog/woocommerce-invoice-audit-trail" className="hover:underline">Invoice audit trail</Link></li>
                <li><Link href="/blog/woocommerce-invoice-reconciliation" className="hover:underline">Invoice reconciliation</Link></li>
                <li><Link href="/blog/woocommerce-vat-exempt-invoices" className="hover:underline">VAT exempt invoices</Link></li>
                <li><Link href="/blog/woocommerce-invoice-plugin-migration" className="hover:underline">Invoice plugin migration</Link></li>
              </ul>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}
