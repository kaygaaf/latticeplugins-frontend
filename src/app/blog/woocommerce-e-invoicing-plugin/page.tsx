import type { Metadata } from "next";
import Link from "next/link";

const SITE_URL = "https://latticeplugins.com";
const PAGE_URL = `${SITE_URL}/blog/woocommerce-e-invoicing-plugin`;

export const metadata: Metadata = {
  title: "WooCommerce E-Invoicing Plugin — EU VAT Buyer Checklist",
  description:
    "Buyer-intent checklist for WooCommerce stores choosing an e-invoicing plugin: VAT fields, PDF invoices, UBL/Peppol readiness, credit notes, customer downloads, and accounting export.",
  alternates: {
    canonical: PAGE_URL,
  },
  openGraph: {
    title: "WooCommerce e-invoicing plugin checklist for EU stores",
    description:
      "What EU WooCommerce stores should verify before buying an e-invoicing plugin: VAT/BTW data, buyer references, invoice PDFs, credit notes, customer downloads, UBL/Peppol readiness, and accountant handoff.",
    url: PAGE_URL,
    siteName: "Lattice Plugins",
    type: "article",
  },
};

const mustHaveChecks = [
  "VAT/BTW number, company name, invoice email, country, and PO/reference fields are captured before payment",
  "Invoice numbers are sequential and separate from WooCommerce order IDs",
  "PDF invoices are attached to order emails and stored for later customer download",
  "Refunds create credit notes tied to the original invoice instead of overwriting the PDF",
  "Invoice metadata can be exported for accounting, UBL tooling, or a Peppol access point",
  "The store owner can test one paid order, one refund, and one customer download before relying on the workflow",
];

const evaluationRows = [
  [
    "Checkout data",
    "Does the plugin collect VAT/BTW ID, company details, invoice email, buyer reference, and country before payment?",
    "If these fields arrive by email after checkout, every invoice still becomes manual admin work.",
  ],
  [
    "Document lifecycle",
    "Can it create invoice PDFs, proformas if needed, payment reminders, and credit notes for refunds?",
    "E-invoicing readiness fails if the original invoice and refund paperwork drift apart.",
  ],
  [
    "Structured export",
    "Can invoice number, VAT amount, tax rate, exemption reason, buyer reference, and document URLs be exported cleanly?",
    "UBL/Peppol and accounting tools need structured values, not screenshots of WooCommerce orders.",
  ],
  [
    "Customer access",
    "Can customers download invoices from My Account without opening a support ticket?",
    "Lost invoices create support load and make repeat B2B purchases feel risky.",
  ],
  [
    "EU fit",
    "Does it support reverse-charge wording, VAT-exempt cases, local VAT labels, and cross-border B2B evidence?",
    "Generic receipt plugins often look fine until the first serious EU B2B buyer asks for corrections.",
  ],
];

const buyerSignals = [
  {
    title: "A B2B buyer asks for e-invoices or UBL",
    text:
      "That is a strong buying signal: the store must fix invoice data capture before export format becomes reliable.",
  },
  {
    title: "The accountant rejects the monthly WooCommerce export",
    text:
      "If VAT totals, invoice numbers, credit notes, and PDF links need spreadsheet cleanup, the plugin should be judged on accounting handoff, not only pretty PDFs.",
  },
  {
    title: "Support keeps correcting invoices manually",
    text:
      "Manual VAT-number edits and resent PDFs are conversion leaks. The purchase should remove recurring finance inbox work.",
  },
];

const setupSequence = [
  ["1. Map the buyer requirements", "List VAT/BTW ID, PO/reference, invoice email, reverse-charge wording, credit notes, UBL/Peppol, and export needs before comparing plugins."],
  ["2. Test checkout fields first", "Place a test order as a B2B buyer and confirm the invoice fields are saved as structured order metadata."],
  ["3. Validate document output", "Check the PDF invoice, email attachment, My Account download, refund credit note, and invoice number sequence."],
  ["4. Validate accounting handoff", "Export the order and confirm the accountant can identify invoice number, VAT number, VAT amount, customer, and document link without retyping."],
];

const faq = [
  {
    q: "Is e-invoicing the same as sending a PDF invoice from WooCommerce?",
    a: "No. A PDF invoice is human-readable. E-invoicing usually means structured invoice data for accounting, UBL, Peppol, or buyer finance systems. A practical WooCommerce setup should keep both the visible PDF and structured metadata consistent.",
  },
  {
    q: "Should I buy a WooCommerce PDF invoice plugin or an e-invoicing plugin?",
    a: "Start with the workflow gap. If customers only need a readable invoice, PDF delivery may be enough. If buyers or accountants ask for UBL, Peppol, buyer references, VAT evidence, or structured exports, evaluate e-invoicing readiness before paying.",
  },
  {
    q: "What makes Lattice Invoices different from a generic receipt plugin?",
    a: "The early-access offer is positioned around the EU WooCommerce invoice workflow: VAT/BTW checkout fields, invoice numbers, PDFs, credit notes, customer downloads, setup qualification, and accountant-ready handoff.",
  },
  {
    q: "What should I send before requesting Lattice Invoices early access?",
    a: "Send your store URL, country, B2B/B2C mix, current invoice plugin, required VAT fields, desired invoice number format, UBL/Peppol/accounting tool, and whether refunds need credit notes.",
  },
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "WooCommerce e-invoicing plugin buyer checklist for EU VAT stores",
  description:
    "A buyer-intent guide for WooCommerce stores choosing an e-invoicing plugin with EU VAT fields, PDF invoices, credit notes, customer downloads, UBL/Peppol readiness, and accounting export.",
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
  "mailto:support@latticeplugins.com?subject=Lattice%20Invoices%20e-invoicing%20plugin%20fit%20check&body=Hi%20Lattice%2C%0A%0AI%20am%20evaluating%20a%20WooCommerce%20e-invoicing%20plugin%20and%20want%20to%20check%20fit%20for%20Lattice%20Invoices.%0A%0AStore%20URL%3A%20%0ACountry%3A%20%0AB2B%2FB2C%20mix%3A%20%0ACurrent%20invoice%20plugin%3A%20%0AVAT%2FBTW%20fields%20needed%3A%20%0AUBL%2FPeppol%2Faccounting%20tool%3A%20%0AInvoice%20number%20format%3A%20%0ACredit%20notes%20needed%3A%20";

export default function WooCommerceEInvoicingPluginPage() {
  return (
    <main className="min-h-screen bg-slate-50">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <section className="bg-gradient-to-br from-slate-950 via-cyan-950 to-blue-900 text-white">
        <div className="max-w-5xl mx-auto px-6 py-16 lg:py-20">
          <p className="uppercase tracking-[0.3em] text-sm text-cyan-200 mb-4">WooCommerce e-invoicing plugin</p>
          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
            Before buying a WooCommerce e-invoicing plugin, make sure the invoice data is actually usable.
          </h1>
          <p className="text-xl text-cyan-50 leading-relaxed max-w-3xl mb-8">
            EU B2B stores do not just need a prettier PDF. They need VAT/BTW fields, buyer references,
            invoice numbers, credit notes, customer downloads, and structured data that can move into accounting, UBL, or Peppol workflows.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href={mailto} className="bg-cyan-500 text-white px-8 py-4 rounded-xl font-semibold hover:bg-cyan-400 transition shadow-lg text-center">
              Request e-invoicing fit check
            </a>
            <Link href="/woocommerce-eu-vat-invoices" className="bg-white/10 border border-white/20 text-white px-8 py-4 rounded-xl font-semibold hover:bg-white/15 transition text-center">
              View Lattice Invoices €49 offer
            </Link>
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-14">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <article className="lg:col-span-2 space-y-8">
            <div className="bg-white rounded-2xl border shadow-sm p-8">
              <h2 className="text-3xl font-bold mb-4">The common mistake: comparing plugins by PDF design only.</h2>
              <p className="text-slate-700 leading-relaxed mb-4">
                A clean PDF template helps, but e-invoicing readiness depends on the order data behind the document.
                If VAT IDs are in notes, PO references arrive by email, and refunds have no credit-note numbers, the store still pays for manual finance cleanup.
              </p>
              <p className="text-slate-700 leading-relaxed">
                Lattice Invoices is being qualified around the workflow that turns WooCommerce orders into invoice-ready records: checkout fields, locked invoice metadata, PDF delivery, credit notes, customer access, and accountant-ready handoff.
              </p>
            </div>

            <div className="bg-white rounded-2xl border shadow-sm p-8">
              <h2 className="text-3xl font-bold mb-6">Must-have checklist before choosing a plugin</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {mustHaveChecks.map((item) => (
                  <div key={item} className="flex gap-3 p-4 rounded-xl bg-slate-50 border border-slate-100">
                    <span className="text-cyan-600 font-bold">✓</span>
                    <span className="text-slate-800">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-2xl border shadow-sm p-8 overflow-hidden">
              <h2 className="text-3xl font-bold mb-4">Evaluation table for EU WooCommerce stores</h2>
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-slate-100 text-slate-700">
                      <th className="p-4 rounded-l-xl">Area</th>
                      <th className="p-4">Question to ask before buying</th>
                      <th className="p-4 rounded-r-xl">Revenue impact</th>
                    </tr>
                  </thead>
                  <tbody>
                    {evaluationRows.map(([area, question, impact]) => (
                      <tr key={area} className="border-b border-slate-100">
                        <td className="p-4 font-semibold text-slate-900">{area}</td>
                        <td className="p-4 text-slate-600">{question}</td>
                        <td className="p-4 text-slate-800">{impact}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div className="bg-white rounded-2xl border shadow-sm p-8">
              <h2 className="text-3xl font-bold mb-6">High-intent buying signals</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                {buyerSignals.map((signal) => (
                  <div key={signal.title} className="rounded-xl border border-cyan-100 bg-cyan-50 p-5">
                    <h3 className="text-xl font-bold mb-3">{signal.title}</h3>
                    <p className="text-slate-700 leading-relaxed">{signal.text}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-2xl border shadow-sm p-8">
              <h2 className="text-3xl font-bold mb-6">Practical setup sequence</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {setupSequence.map(([title, text]) => (
                  <div key={title} className="rounded-xl border border-slate-200 bg-slate-50 p-5">
                    <h3 className="font-bold text-lg mb-2">{title}</h3>
                    <p className="text-slate-700 leading-relaxed">{text}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-cyan-50 border border-cyan-100 rounded-2xl p-8">
              <h2 className="text-3xl font-bold mb-4">Early-access CTA: €49 e-invoicing workflow fit check</h2>
              <p className="text-slate-700 leading-relaxed mb-5">
                Send the store URL, country, B2B volume, current invoice plugin, VAT-field needs, accounting or UBL/Peppol tooling, invoice number format, and credit-note requirements. That information is enough to qualify whether Lattice Invoices is a fit before payment.
              </p>
              <a href={mailto} className="inline-flex bg-cyan-600 text-white px-7 py-3 rounded-xl font-semibold hover:bg-cyan-700 transition">
                Send my e-invoicing requirements
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
              <p className="text-sm uppercase tracking-[0.2em] text-cyan-700 font-semibold mb-2">E-invoicing readiness</p>
              <h2 className="text-2xl font-bold mb-3">Need WooCommerce invoices your accountant and B2B buyers can trust?</h2>
              <p className="text-slate-700 mb-5">
                Use this page as the purchase checklist, then request a Lattice Invoices fit check if VAT fields, credit notes, UBL/Peppol, or accounting export are already friction.
              </p>
              <a href={mailto} className="block text-center bg-cyan-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-cyan-700 transition mb-3">
                Request fit check
              </a>
              <Link href="/demo/lattice-invoices" className="block text-center border border-slate-200 px-6 py-3 rounded-xl font-semibold hover:border-cyan-400 transition mb-3">
                View invoice workflow demo
              </Link>
              <Link href="/tools/woocommerce-invoice-setup-brief" className="block text-center border border-slate-200 px-6 py-3 rounded-xl font-semibold hover:border-cyan-400 transition mb-3">
                Generate setup brief
              </Link>
              <Link href="/blog/woocommerce-peppol-e-invoices" className="block text-center border border-slate-200 px-6 py-3 rounded-xl font-semibold hover:border-cyan-400 transition mb-3">
                Peppol readiness guide
              </Link>
              <Link href="/blog/woocommerce-ubl-invoices" className="block text-center border border-slate-200 px-6 py-3 rounded-xl font-semibold hover:border-cyan-400 transition">
                UBL readiness guide
              </Link>
            </div>

            <div className="bg-slate-900 text-white rounded-2xl p-6">
              <h2 className="text-2xl font-bold mb-3">Lattice Invoices early access</h2>
              <p className="text-slate-200 mb-5">
                €49 early access for WooCommerce stores that need EU VAT metadata, invoice PDFs, credit notes, customer downloads, and structured accountant handoff.
              </p>
              <Link href="/woocommerce-eu-vat-invoices" className="text-cyan-300 font-semibold hover:text-cyan-200">
                See the €49 offer →
              </Link>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}
