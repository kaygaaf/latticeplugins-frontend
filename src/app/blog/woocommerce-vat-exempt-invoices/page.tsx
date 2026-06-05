import type { Metadata } from "next";
import Link from "next/link";

const SITE_URL = "https://latticeplugins.com";

export const metadata: Metadata = {
  title: "WooCommerce VAT Exempt Invoices — EU B2B, Reverse Charge & Checkout Checklist",
  description:
    "A practical guide for WooCommerce stores that need VAT exempt invoices, EU B2B reverse charge handling, VAT number collection, PDF invoices, and credit notes.",
  alternates: {
    canonical: `${SITE_URL}/blog/woocommerce-vat-exempt-invoices`,
  },
  openGraph: {
    title: "WooCommerce VAT Exempt Invoices for EU B2B Stores",
    description:
      "How to prepare WooCommerce VAT exempt invoice workflows: VAT number checkout fields, validation, reverse-charge wording, invoice PDFs, refunds, and customer downloads.",
    url: `${SITE_URL}/blog/woocommerce-vat-exempt-invoices`,
    siteName: "Lattice Plugins",
    type: "article",
  },
};

const exemptionChecklist = [
  "Collect company name, billing country, and VAT/BTW number before payment is confirmed",
  "Decide when VAT is removed: domestic B2B, cross-border EU B2B, non-EU export, or manually approved exemption",
  "Store the validation result and exemption reason on the WooCommerce order for audit history",
  "Print clear reverse-charge or VAT-exempt wording on the final invoice PDF",
  "Keep proforma, final invoice, refund, and credit-note documents consistent",
  "Make customer invoice downloads available after payment without exposing private PDFs",
];

const exemptionScenarios = [
  [
    "EU B2B reverse charge",
    "A German buyer enters a valid VAT ID on a Dutch store and expects a zero-VAT invoice with reverse-charge wording.",
    "Validate the VAT number, remove VAT only for eligible country pairs, store the decision, and render reverse-charge text on the PDF.",
  ],
  [
    "Manual VAT exemption",
    "A nonprofit, public-sector buyer, or special B2B account asks for a VAT-exempt invoice after checkout.",
    "Use an internal exemption status, record who approved it, regenerate the invoice, and keep credit-note handling traceable.",
  ],
  [
    "Refund after exemption",
    "A VAT-exempt order is partially refunded, but the credit note still shows normal VAT rows or misses the original invoice reference.",
    "Credit notes must inherit the exemption reason, reference the original invoice number, and show corrected VAT totals.",
  ],
];

const workflowRows = [
  ["Checkout", "Ask for VAT/BTW number, company name, country, and PO/reference", "Do not wait until the customer emails finance details after purchase."],
  ["Validation", "Check country rules, VAT format, and manual override status", "Do not remove VAT for every non-empty VAT field."],
  ["Order metadata", "Store exemption reason, validation timestamp, and buyer VAT number", "Finance teams need proof of why VAT was zero."],
  ["PDF invoice", "Show zero VAT, reverse-charge wording, and the buyer VAT number", "The tax decision must be visible on the document, not hidden in admin notes."],
  ["Refunds", "Create matching credit notes with the same exemption logic", "Refund workflows are where many generic invoice plugins lose traceability."],
];

const faq = [
  {
    q: "Can WooCommerce create VAT exempt invoices by default?",
    a: "WooCommerce can calculate tax rules, but most stores need additional workflow around VAT number collection, exemption reasons, invoice PDF wording, customer downloads, proformas, and credit notes before the process is finance-ready.",
  },
  {
    q: "Is VAT exempt the same as reverse charge?",
    a: "Not always. Reverse charge is a common EU B2B cross-border workflow where VAT is not charged by the seller and the buyer accounts for it. VAT exemption can also describe manual exemptions, exports, or other special cases. Your invoice should state the reason clearly.",
  },
  {
    q: "Should VAT be removed immediately at checkout?",
    a: "Only when the store has enough evidence to decide the buyer is eligible. For many EU B2B stores that means country logic, VAT number validation, and a stored audit trail. Otherwise use manual review before issuing the final invoice.",
  },
  {
    q: "How does Lattice Invoices help with VAT exempt invoices?",
    a: "The early-access direction focuses on invoice-ready checkout fields, EU VAT metadata, reverse-charge and VAT-exempt PDF wording, proformas, final invoices, credit notes, customer downloads, and bank-transfer invoice workflows for WooCommerce.",
  },
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "WooCommerce VAT exempt invoice workflow for EU B2B stores",
  description:
    "A buyer-intent guide for WooCommerce stores that need VAT exempt invoice PDFs, VAT number checkout fields, reverse-charge wording, and credit-note handling.",
  mainEntityOfPage: `${SITE_URL}/blog/woocommerce-vat-exempt-invoices`,
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
  "mailto:support@latticeplugins.com?subject=Lattice%20Invoices%20VAT%20exempt%20early%20access&body=Hi%20Lattice%2C%0A%0AI%20need%20WooCommerce%20VAT%20exempt%20invoice%20workflow%20help.%0A%0AStore%20URL%3A%20%0ASeller%20country%3A%20%0AB2B%20buyer%20countries%3A%20%0AVAT%2FBTW%20field%20already%20present%3A%20%0AReverse%20charge%20needed%3A%20%0AManual%20exemptions%20needed%3A%20%0AInvoice%20PDF%20plugin%20currently%20used%3A%20%0ACredit%20notes%20needed%3A%20";

export default function WooCommerceVatExemptInvoicesPage() {
  return (
    <main className="min-h-screen bg-slate-50">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <section className="bg-gradient-to-br from-slate-950 via-emerald-950 to-blue-900 text-white">
        <div className="max-w-5xl mx-auto px-6 py-16 lg:py-20">
          <p className="uppercase tracking-[0.3em] text-sm text-emerald-200 mb-4">WooCommerce VAT exempt invoices</p>
          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
            Stop issuing zero-VAT invoices without a defensible workflow.
          </h1>
          <p className="text-xl text-emerald-50 leading-relaxed max-w-3xl mb-8">
            VAT exempt and reverse-charge orders need more than a checkbox. EU B2B stores need checkout fields, validation,
            stored exemption reasons, correct invoice PDF wording, and credit notes that preserve the tax decision.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href={mailto} className="bg-emerald-500 text-white px-8 py-4 rounded-xl font-semibold hover:bg-emerald-400 transition shadow-lg text-center">
              Request VAT exempt early access
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
              <h2 className="text-3xl font-bold mb-4">The real problem is not tax removal. It is proof.</h2>
              <p className="text-slate-700 leading-relaxed mb-4">
                Many WooCommerce stores can remove VAT with a tax rule, coupon, customer role, or manual order edit. The sales risk appears later:
                the buyer asks for a compliant PDF invoice, finance asks why VAT was zero, or a refund needs a matching credit note.
              </p>
              <p className="text-slate-700 leading-relaxed">
                Lattice Invoices is being shaped around the practical EU workflow: collect invoice-ready data before checkout, record the exemption decision,
                render the correct PDF wording, and keep proformas, final invoices, customer downloads, and credit notes aligned.
              </p>
            </div>

            <div className="bg-white rounded-2xl border shadow-sm p-8">
              <h2 className="text-3xl font-bold mb-6">VAT exempt invoice readiness checklist</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {exemptionChecklist.map((item) => (
                  <div key={item} className="flex gap-3 p-4 rounded-xl bg-slate-50 border border-slate-100">
                    <span className="text-emerald-600 font-bold">✓</span>
                    <span className="text-slate-800">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-2xl border shadow-sm p-8 overflow-hidden">
              <h2 className="text-3xl font-bold mb-4">Where VAT exemption must be handled</h2>
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-slate-100 text-slate-700">
                      <th className="p-4 rounded-l-xl">Step</th>
                      <th className="p-4">What to capture</th>
                      <th className="p-4 rounded-r-xl">Revenue-risk note</th>
                    </tr>
                  </thead>
                  <tbody>
                    {workflowRows.map(([step, capture, note]) => (
                      <tr key={step} className="border-b border-slate-100">
                        <td className="p-4 font-semibold text-slate-900">{step}</td>
                        <td className="p-4 text-slate-600">{capture}</td>
                        <td className="p-4 text-slate-800">{note}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div className="bg-white rounded-2xl border shadow-sm p-8">
              <h2 className="text-3xl font-bold mb-6">VAT exempt invoice scenarios</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                {exemptionScenarios.map(([title, pain, lattice]) => (
                  <div key={title} className="rounded-xl border border-slate-200 bg-slate-50 p-5">
                    <h3 className="text-xl font-bold mb-3">{title}</h3>
                    <p className="text-slate-600 mb-3">Problem: {pain}</p>
                    <p className="font-semibold text-slate-900">Lattice path: {lattice}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-emerald-50 border border-emerald-100 rounded-2xl p-8">
              <h2 className="text-3xl font-bold mb-4">Early-access offer: €49 VAT exempt invoice workflow review</h2>
              <p className="text-slate-700 leading-relaxed mb-5">
                Send your store URL, current VAT field setup, seller country, B2B buyer countries, PDF invoice plugin, and exemption rules.
                Lattice will use that to prioritize the VAT exempt invoice workflow and identify the fields you should collect before checkout.
              </p>
              <a href={mailto} className="inline-flex bg-emerald-600 text-white px-7 py-3 rounded-xl font-semibold hover:bg-emerald-700 transition">
                Send my VAT exempt invoice requirements
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
              <p className="text-sm uppercase tracking-[0.2em] text-emerald-700 font-semibold mb-2">VAT exempt workflow</p>
              <h2 className="text-2xl font-bold mb-3">Need zero-VAT invoices that survive finance review?</h2>
              <p className="text-slate-700 mb-5">
                Send store URL, VAT field status, exemption rules, PDF invoice plugin, credit-note requirements, and bank-transfer needs.
              </p>
              <a href={mailto} className="block text-center bg-emerald-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-emerald-700 transition mb-3">
                Request early access
              </a>
              <Link href="/blog/woocommerce-vat-number-checkout-field" className="block text-center border border-slate-200 px-6 py-3 rounded-xl font-semibold hover:border-emerald-400 transition mb-3">
                VAT field guide
              </Link>
              <Link href="/blog/woocommerce-reverse-charge-invoices" className="block text-center border border-slate-200 px-6 py-3 rounded-xl font-semibold hover:border-emerald-400 transition mb-3">
                Reverse-charge guide
              </Link>
              <Link href="/blog/woocommerce-invoice-pdf-template" className="block text-center border border-slate-200 px-6 py-3 rounded-xl font-semibold hover:border-emerald-400 transition">
                PDF template guide
              </Link>
            </div>

            <div className="bg-slate-900 text-white rounded-2xl p-6">
              <h2 className="text-2xl font-bold mb-3">Lattice Invoices early access</h2>
              <p className="text-slate-200 mb-5">
                Built for WooCommerce stores that sell to EU B2B buyers and need invoice PDFs, VAT metadata, credit notes, downloads, and payment workflows.
              </p>
              <Link href="/docs/woocommerce-eu-vat-invoice-setup" className="text-emerald-300 font-semibold hover:text-emerald-200">
                Read the setup guide →
              </Link>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}
