import type { Metadata } from "next";
import Link from "next/link";

const SITE_URL = "https://latticeplugins.com";
const SLUG = "/blog/woocommerce-vies-vat-validation";

export const metadata: Metadata = {
  title: "WooCommerce VIES VAT Validation for EU B2B Invoices",
  description:
    "A buyer-intent checklist for WooCommerce stores that need VIES VAT number validation, reverse-charge invoice evidence, checkout blocking rules, credit notes, and accountant exports.",
  alternates: {
    canonical: `${SITE_URL}${SLUG}`,
  },
  openGraph: {
    title: "WooCommerce VIES VAT validation workflow for EU B2B invoices",
    description:
      "How to validate VAT numbers in WooCommerce without breaking checkout, invoice PDFs, reverse-charge wording, refunds, or accountant handoff.",
    url: `${SITE_URL}${SLUG}`,
    siteName: "Lattice Plugins",
    type: "article",
  },
};

const validationChecklist = [
  {
    title: "1. Capture VAT ID before payment, not after support tickets",
    detail:
      "The VAT/BTW number needs to be collected during checkout, normalized with the buyer country, stored on the order, and reused on the invoice PDF, credit note, customer download, and export row.",
    buyerQuestion: "Can the plugin store the exact VAT ID and country pair used for invoice decisions?",
  },
  {
    title: "2. Treat VIES as evidence, not a single brittle checkout dependency",
    detail:
      "VIES can be slow or unavailable. A sales-ready workflow needs timeout handling, manual review states, and clear logs instead of silently blocking good B2B buyers or accepting every failed lookup.",
    buyerQuestion: "What happens when VIES is unavailable, times out, or returns an ambiguous result?",
  },
  {
    title: "3. Link validation state to reverse-charge wording",
    detail:
      "A valid EU B2B VAT ID usually changes the invoice wording and VAT treatment. The plugin should make that decision traceable instead of relying on a hidden checkout field.",
    buyerQuestion: "Does a valid VAT ID automatically feed reverse-charge invoice text and VAT metadata?",
  },
  {
    title: "4. Preserve evidence when refunds or corrections happen",
    detail:
      "If a VAT number was validated for the original invoice, the linked credit note or correction invoice should retain the same evidence trail and explain any manual override.",
    buyerQuestion: "Do credit notes and corrected invoices reference the original VAT validation result?",
  },
  {
    title: "5. Make accountant exports match customer PDFs",
    detail:
      "The accountant should receive the same VAT ID, validation status, reverse-charge flag, invoice number, customer country, and PDF link that the customer sees.",
    buyerQuestion: "Can the export prove which invoices were validated, manually reviewed, reverse charged, or rejected?",
  },
];

const scenarios = [
  {
    title: "Valid intra-EU B2B buyer",
    trigger: "A German company enters a valid DE VAT ID while buying from a Dutch WooCommerce store.",
    workflow:
      "Normalize the VAT ID, store the VIES response, apply the correct reverse-charge invoice wording if store policy allows it, attach the PDF to the order email, and export the validation evidence for the accountant.",
  },
  {
    title: "VIES service unavailable during checkout",
    trigger: "The buyer enters a plausible VAT ID but VIES is temporarily unreachable or slow.",
    workflow:
      "Do not lose the order intent. Put the invoice into manual review or proforma state, keep the entered VAT ID, notify finance, and issue the final VAT invoice after validation or override.",
  },
  {
    title: "Invalid VAT ID after invoice generation",
    trigger: "Support discovers a wrong VAT number, customer typo, or country mismatch after a PDF already exists.",
    workflow:
      "Retain the original document, generate a correction or credit note where required, store the validation failure reason, and keep the export trail clean for accounting review.",
  },
];

const comparisonRows = [
  {
    weak: "A checkout field only checks that the VAT number box is not empty.",
    strong: "VAT ID, country, validation status, timestamp, response outcome, and manual review state are stored as invoice evidence.",
  },
  {
    weak: "The checkout fails hard whenever VIES times out, losing qualified B2B orders.",
    strong: "Timeouts route to proforma/manual review so revenue is captured without faking validation success.",
  },
  {
    weak: "Reverse-charge text is added manually to PDFs after the order is placed.",
    strong: "Reverse-charge wording is generated from the validation state and preserved on customer PDFs and exports.",
  },
  {
    weak: "Refunds and credit notes ignore the original VAT validation decision.",
    strong: "Corrections, credit notes, retained PDFs, and accounting exports reference the original validation trail.",
  },
];

const faq = [
  {
    q: "Does WooCommerce include VIES VAT validation by default?",
    a: "No. WooCommerce can store billing fields, but EU B2B VAT validation, reverse-charge invoice wording, evidence retention, credit-note linkage, and accountant-ready export usually require a dedicated workflow or plugin.",
  },
  {
    q: "Should checkout block the order if VIES is down?",
    a: "Not always. For B2B stores, a safer workflow is to keep the order or proforma, flag it for manual review, then issue the final invoice once validation succeeds or finance approves an override.",
  },
  {
    q: "What should be stored after a successful VAT validation?",
    a: "At minimum: VAT ID, buyer country, validation status, validation timestamp, source/response outcome, invoice decision, reverse-charge flag, and any manual override note.",
  },
  {
    q: "Where does Lattice Invoices fit in VIES validation workflows?",
    a: "Lattice Invoices early access is positioned around WooCommerce EU invoice evidence: VAT/BTW checkout fields, VIES-ready validation states, reverse-charge wording, invoice PDFs, credit notes, customer downloads, and accountant export readiness.",
  },
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "WooCommerce VIES VAT validation workflow for EU B2B invoices",
  description:
    "A buyer guide for WooCommerce stores that need VIES VAT number validation, reverse-charge invoice evidence, credit notes, customer downloads, and accounting exports.",
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
  "mailto:support@latticeplugins.com?subject=WooCommerce%20VIES%20VAT%20validation%20workflow%20review&body=Hi%20Lattice%2C%0A%0AI%20want%20a%20WooCommerce%20VIES%20VAT%20validation%20workflow%20review.%0A%0AStore%20URL%3A%20%0ACountry%3A%20%0AB2B%20countries%20served%3A%20%0ACurrent%20VAT%20field%20plugin%3A%20%0AVIES%20validation%20needs%3A%20%0AReverse-charge%20invoice%20wording%3A%20%0ARefund%2Fcredit-note%20workflow%3A%20%0AAccounting%20export%20needs%3A%20";

export default function WooCommerceViesVatValidationPage() {
  return (
    <main className="min-h-screen bg-slate-50">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <section className="bg-gradient-to-br from-slate-950 via-blue-950 to-emerald-900 text-white">
        <div className="max-w-5xl mx-auto px-6 py-16 lg:py-20">
          <p className="uppercase tracking-[0.3em] text-sm text-emerald-200 mb-4">WooCommerce VIES VAT validation</p>
          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
            Validate EU VAT numbers in WooCommerce without losing B2B orders or invoice evidence.
          </h1>
          <p className="text-xl text-emerald-50 leading-relaxed max-w-3xl mb-8">
            VIES validation is not just a checkout field. It affects reverse-charge wording, VAT totals, invoice PDFs, credit notes, customer downloads, manual reviews, and accountant exports. This guide shows what to test before buying a WooCommerce invoice plugin.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href={mailto} className="bg-green-400 text-slate-950 px-8 py-4 rounded-xl font-semibold hover:bg-green-300 transition shadow-lg text-center">
              Request €49 VAT validation review
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
              <h2 className="text-3xl font-bold mb-4">Why VIES validation belongs in the invoice workflow</h2>
              <p className="text-slate-700 leading-relaxed mb-4">
                A simple VAT-number field can capture useful data, but it does not prove that the number was validated, which rule was applied, or why reverse-charge wording appeared on the invoice. That gap becomes painful during refunds, customer disputes, and accountant reviews.
              </p>
              <p className="text-slate-700 leading-relaxed">
                Lattice Invoices is being positioned around that workflow gap: collect VAT data at checkout, preserve validation evidence, generate the right PDF state, and make the customer/accountant view consistent.
              </p>
            </div>

            <div className="bg-emerald-50 border border-emerald-100 rounded-2xl p-8">
              <h2 className="text-3xl font-bold mb-5">VIES validation readiness checklist</h2>
              <div className="space-y-4">
                {validationChecklist.map((item) => (
                  <div key={item.title} className="bg-white rounded-xl border border-emerald-100 p-5">
                    <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                    <p className="text-slate-700 leading-relaxed mb-2">{item.detail}</p>
                    <p className="text-slate-600 leading-relaxed"><strong>Buyer question:</strong> {item.buyerQuestion}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-2xl border shadow-sm p-8">
              <h2 className="text-3xl font-bold mb-5">Three VAT validation scenarios to test before buying</h2>
              <div className="grid gap-4">
                {scenarios.map((item) => (
                  <div key={item.title} className="border rounded-xl p-5">
                    <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                    <p className="text-slate-700 leading-relaxed mb-2"><strong>Trigger:</strong> {item.trigger}</p>
                    <p className="text-slate-700 leading-relaxed"><strong>Workflow:</strong> {item.workflow}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-2xl border shadow-sm p-8">
              <h2 className="text-3xl font-bold mb-5">Weak VAT field vs invoice-ready validation workflow</h2>
              <div className="overflow-x-auto">
                <table className="min-w-full text-left border-collapse">
                  <thead>
                    <tr className="border-b">
                      <th className="py-3 pr-4 font-semibold">Weak workflow</th>
                      <th className="py-3 pr-4 font-semibold">Lattice Invoices direction</th>
                    </tr>
                  </thead>
                  <tbody>
                    {comparisonRows.map((row) => (
                      <tr key={row.weak} className="border-b last:border-b-0 align-top">
                        <td className="py-4 pr-4 text-slate-700">{row.weak}</td>
                        <td className="py-4 pr-4 text-slate-700">{row.strong}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
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
              <p className="uppercase tracking-[0.2em] text-xs text-blue-600 font-semibold mb-3">Early-access offer</p>
              <h2 className="text-2xl font-bold mb-3">Get a €49 WooCommerce VAT validation workflow review</h2>
              <p className="text-slate-700 leading-relaxed mb-5">
                Send your store URL, countries served, current VAT field setup, and invoice workflow. The review maps VIES validation, reverse-charge wording, PDFs, credit notes, and accounting export readiness.
              </p>
              <a href={mailto} className="block text-center bg-blue-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-blue-700 transition mb-3">
                Request workflow review
              </a>
              <Link href="/docs/woocommerce-eu-vat-invoice-setup" className="block text-center border border-slate-200 px-6 py-3 rounded-xl font-semibold hover:border-blue-400 transition mb-3">
                Read setup guide
              </Link>
              <Link href="/blog/woocommerce-vat-number-checkout-field" className="block text-center border border-slate-200 px-6 py-3 rounded-xl font-semibold hover:border-blue-400 transition mb-3">
                VAT number checkout guide
              </Link>
              <Link href="/blog/woocommerce-reverse-charge-invoices" className="block text-center border border-slate-200 px-6 py-3 rounded-xl font-semibold hover:border-blue-400 transition mb-3">
                Reverse-charge invoice guide
              </Link>
              <Link href="/blog/woocommerce-invoice-after-payment" className="block text-center border border-slate-200 px-6 py-3 rounded-xl font-semibold hover:border-blue-400 transition">
                Invoice timing guide
              </Link>
              <div className="border-t mt-6 pt-6 space-y-3 text-sm text-slate-600">
                <div>✓ Targets EU B2B buyer-intent searches</div>
                <div>✓ Routes readers to €49 review CTA</div>
                <div>✓ Supports Lattice Invoices early-access positioning</div>
              </div>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}
