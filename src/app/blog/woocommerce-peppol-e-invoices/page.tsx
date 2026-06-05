import type { Metadata } from "next";
import Link from "next/link";

const SITE_URL = "https://latticeplugins.com";

export const metadata: Metadata = {
  title: "WooCommerce Peppol E-Invoices — EU B2B Invoice Readiness Checklist",
  description:
    "A practical buyer guide for WooCommerce stores preparing Peppol e-invoices, structured invoice data, EU VAT metadata, PDF invoices, credit notes, and accounting handoff.",
  alternates: {
    canonical: `${SITE_URL}/blog/woocommerce-peppol-e-invoices`,
  },
  openGraph: {
    title: "WooCommerce Peppol E-Invoices for EU B2B Stores",
    description:
      "How to prepare WooCommerce invoice data for Peppol/e-invoicing workflows: VAT IDs, buyer references, PDF invoice templates, credit notes, exports, and accounting handoff.",
    url: `${SITE_URL}/blog/woocommerce-peppol-e-invoices`,
    siteName: "Lattice Plugins",
    type: "article",
  },
};

const readinessChecklist = [
  "Collect company name, billing country, VAT/BTW number, and buyer reference before payment",
  "Store purchase order, cost center, GLN/Peppol participant ID, and contact email on the WooCommerce order",
  "Keep invoice numbering separate from WooCommerce order IDs and preserve a clear audit trail",
  "Generate human-readable PDF invoices while keeping structured export fields consistent",
  "Create matching credit notes for refunds, partial refunds, and VAT corrections",
  "Export invoice and credit-note data in a predictable format for the accountant or Peppol access point",
];

const dataRows = [
  ["Seller identity", "Legal name, VAT number, address, invoice prefix", "Missing seller metadata causes Peppol/access-point rejection."],
  ["Buyer identity", "Company name, VAT/BTW number, country, Peppol/GLN ID if available", "B2B buyers often need more than the normal billing address."],
  ["Buyer reference", "Purchase order, contact person, cost center, department", "Public-sector and enterprise buyers may reject invoices without a reference."],
  ["Tax evidence", "VAT rate, exemption reason, reverse-charge wording, validation timestamp", "Zero-VAT and cross-border B2B invoices need proof, not just a total."],
  ["Document lifecycle", "Proforma, final invoice, reminders, credit notes, customer downloads", "The same order may produce multiple finance documents."],
];

const scenarios = [
  [
    "Public-sector buyer asks for Peppol",
    "A government, school, or healthcare buyer wants an electronic invoice through its Peppol access point instead of a normal WooCommerce email PDF.",
    "Capture buyer references and structured metadata now, then hand the data to the accountant/access point without retyping the order.",
  ],
  [
    "Enterprise buyer needs PO fields",
    "A B2B customer can pay by card or bank transfer, but the invoice must include PO number, department, and buyer VAT ID.",
    "Add invoice-ready checkout fields before payment and print the same fields on the PDF invoice and export.",
  ],
  [
    "Refund creates e-invoice mismatch",
    "The original invoice was exported, but the refund only exists as a WooCommerce refund note without a matching credit note number.",
    "Create credit notes with references to the original invoice and keep VAT/exemption logic aligned.",
  ],
];

const faq = [
  {
    q: "Can WooCommerce send Peppol e-invoices by default?",
    a: "WooCommerce does not ship with a complete Peppol/e-invoicing workflow. Most stores need additional invoice metadata, structured exports, PDF templates, credit notes, and often a separate Peppol access point or accounting integration.",
  },
  {
    q: "Do I need Peppol support before I sell to EU B2B buyers?",
    a: "Not always. Many B2B buyers still accept PDF invoices, but public-sector and larger enterprise buyers increasingly ask for structured e-invoices, buyer references, and clean VAT metadata. Preparing the WooCommerce order data early reduces manual finance work later.",
  },
  {
    q: "What fields should I collect for Peppol-ready WooCommerce invoices?",
    a: "At minimum: company name, VAT number, billing country, buyer reference or PO number, invoice email, seller VAT details, tax/exemption reason, invoice number, and line-item VAT data. Some buyers also need Peppol participant ID, GLN, department, or cost center.",
  },
  {
    q: "How does Lattice Invoices fit into Peppol workflows?",
    a: "The early-access focus is not replacing every Peppol access point. It is making WooCommerce orders invoice-ready: checkout fields, VAT metadata, PDF invoices, sequential numbering, credit notes, customer downloads, and structured data handoff for accountants or e-invoicing tools.",
  },
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "WooCommerce Peppol e-invoice readiness checklist for EU B2B stores",
  description:
    "A buyer-intent guide for WooCommerce stores preparing Peppol/e-invoicing workflows with EU VAT metadata, buyer references, PDF invoices, credit notes, and accounting exports.",
  mainEntityOfPage: `${SITE_URL}/blog/woocommerce-peppol-e-invoices`,
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
  "mailto:support@latticeplugins.com?subject=Lattice%20Invoices%20Peppol%20e-invoice%20early%20access&body=Hi%20Lattice%2C%0A%0AI%20need%20WooCommerce%20Peppol%2Fe-invoice%20readiness%20help.%0A%0AStore%20URL%3A%20%0ASeller%20country%3A%20%0AB2B%20buyer%20types%3A%20%0APeppol%20access%20point%20or%20accounting%20tool%3A%20%0AVAT%2FBTW%20field%20already%20present%3A%20%0APO%2Fbuyer%20reference%20field%20needed%3A%20%0AInvoice%20PDF%20plugin%20currently%20used%3A%20%0ACredit%20notes%20needed%3A%20";

export default function WooCommercePeppolEInvoicesPage() {
  return (
    <main className="min-h-screen bg-slate-50">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <section className="bg-gradient-to-br from-slate-950 via-blue-950 to-emerald-900 text-white">
        <div className="max-w-5xl mx-auto px-6 py-16 lg:py-20">
          <p className="uppercase tracking-[0.3em] text-sm text-emerald-200 mb-4">WooCommerce Peppol e-invoices</p>
          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
            Prepare WooCommerce invoice data before a B2B buyer demands Peppol.
          </h1>
          <p className="text-xl text-emerald-50 leading-relaxed max-w-3xl mb-8">
            Peppol and EU e-invoicing are not just a file format problem. Stores need invoice-ready checkout fields,
            VAT evidence, buyer references, credit notes, and structured handoff to accounting or an access point.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href={mailto} className="bg-emerald-500 text-white px-8 py-4 rounded-xl font-semibold hover:bg-emerald-400 transition shadow-lg text-center">
              Request Peppol readiness early access
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
              <h2 className="text-3xl font-bold mb-4">The sale risk: finance requirements arrive after checkout.</h2>
              <p className="text-slate-700 leading-relaxed mb-4">
                A normal WooCommerce checkout collects enough data to ship a product. It often does not collect enough data to satisfy
                public-sector, enterprise, or cross-border B2B finance teams that expect e-invoice-ready fields.
              </p>
              <p className="text-slate-700 leading-relaxed">
                Lattice Invoices is being shaped around that gap: collect buyer references before payment, store EU VAT decisions on the order,
                create clean PDF invoices and credit notes, and make the data easier to pass to an accountant, ERP, or Peppol access point.
              </p>
            </div>

            <div className="bg-white rounded-2xl border shadow-sm p-8">
              <h2 className="text-3xl font-bold mb-6">Peppol/e-invoice readiness checklist</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {readinessChecklist.map((item) => (
                  <div key={item} className="flex gap-3 p-4 rounded-xl bg-slate-50 border border-slate-100">
                    <span className="text-emerald-600 font-bold">✓</span>
                    <span className="text-slate-800">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-2xl border shadow-sm p-8 overflow-hidden">
              <h2 className="text-3xl font-bold mb-4">Structured invoice data WooCommerce should preserve</h2>
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-slate-100 text-slate-700">
                      <th className="p-4 rounded-l-xl">Area</th>
                      <th className="p-4">Data to capture</th>
                      <th className="p-4 rounded-r-xl">Why it matters</th>
                    </tr>
                  </thead>
                  <tbody>
                    {dataRows.map(([area, data, why]) => (
                      <tr key={area} className="border-b border-slate-100">
                        <td className="p-4 font-semibold text-slate-900">{area}</td>
                        <td className="p-4 text-slate-600">{data}</td>
                        <td className="p-4 text-slate-800">{why}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div className="bg-white rounded-2xl border shadow-sm p-8">
              <h2 className="text-3xl font-bold mb-6">Common Peppol/e-invoice scenarios</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                {scenarios.map(([title, pain, lattice]) => (
                  <div key={title} className="rounded-xl border border-slate-200 bg-slate-50 p-5">
                    <h3 className="text-xl font-bold mb-3">{title}</h3>
                    <p className="text-slate-600 mb-3">Problem: {pain}</p>
                    <p className="font-semibold text-slate-900">Lattice path: {lattice}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-emerald-50 border border-emerald-100 rounded-2xl p-8">
              <h2 className="text-3xl font-bold mb-4">Early-access offer: €49 Peppol readiness workflow review</h2>
              <p className="text-slate-700 leading-relaxed mb-5">
                Send your store URL, current invoice plugin, buyer types, VAT-field status, accounting tool, Peppol/access-point plan,
                and whether PO/reference fields or credit notes are already a sales blocker.
              </p>
              <a href={mailto} className="inline-flex bg-emerald-600 text-white px-7 py-3 rounded-xl font-semibold hover:bg-emerald-700 transition">
                Send my Peppol invoice requirements
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
              <p className="text-sm uppercase tracking-[0.2em] text-emerald-700 font-semibold mb-2">E-invoice readiness</p>
              <h2 className="text-2xl font-bold mb-3">Need WooCommerce invoice data your accountant can actually use?</h2>
              <p className="text-slate-700 mb-5">
                Send store URL, VAT field status, buyer reference needs, accounting tool, Peppol plan, and credit-note requirements.
              </p>
              <a href={mailto} className="block text-center bg-emerald-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-emerald-700 transition mb-3">
                Request early access
              </a>
              <Link href="/docs/woocommerce-eu-vat-invoice-setup" className="block text-center border border-slate-200 px-6 py-3 rounded-xl font-semibold hover:border-emerald-400 transition mb-3">
                Setup guide
              </Link>
              <Link href="/blog/woocommerce-invoice-pdf-template" className="block text-center border border-slate-200 px-6 py-3 rounded-xl font-semibold hover:border-emerald-400 transition mb-3">
                PDF template guide
              </Link>
              <Link href="/blog/woocommerce-credit-notes-refunds" className="block text-center border border-slate-200 px-6 py-3 rounded-xl font-semibold hover:border-emerald-400 transition">
                Credit-note guide
              </Link>
            </div>

            <div className="bg-slate-900 text-white rounded-2xl p-6">
              <h2 className="text-2xl font-bold mb-3">Lattice Invoices early access</h2>
              <p className="text-slate-200 mb-5">
                Built for WooCommerce stores that need EU VAT metadata, invoice PDFs, credit notes, customer downloads, bank-transfer workflows, and structured handoff.
              </p>
              <Link href="/woocommerce-eu-vat-invoices" className="text-emerald-300 font-semibold hover:text-emerald-200">
                See the €49 offer →
              </Link>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}
