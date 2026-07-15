import type { Metadata } from "next";
import Link from "next/link";

const SITE_URL = "https://latticeplugins.com";
const SLUG = "/blog/woocommerce-public-sector-invoices";

export const metadata: Metadata = {
  title: "WooCommerce Public Sector Invoices: PO, Peppol and VAT Workflow",
  description:
    "Buyer-intent checklist for WooCommerce stores selling to government, schools, hospitals, and public-sector buyers that need PO references, buyer IDs, VAT invoices, credit notes, and e-invoicing readiness.",
  alternates: {
    canonical: `${SITE_URL}${SLUG}`,
  },
  openGraph: {
    title: "WooCommerce public sector invoices",
    description:
      "What WooCommerce stores should check before selling to public-sector buyers: PO references, buyer IDs, VAT/BTW fields, PDF invoices, credit notes, and Peppol-ready invoice data.",
    url: `${SITE_URL}${SLUG}`,
    siteName: "Lattice Plugins",
    type: "article",
  },
};

const publicSectorPains = [
  {
    title: "A purchase order is mandatory before payment is approved",
    detail:
      "Public-sector buyers often cannot process a supplier invoice unless the PO number, buyer reference, department, and legal billing entity match procurement records exactly.",
  },
  {
    title: "The person ordering is not the finance contact",
    detail:
      "A teacher, clinic manager, or department lead may place the WooCommerce order, while accounts payable needs a separate invoice email, buyer ID, VAT/BTW details, and PDF attachment.",
  },
  {
    title: "Corrections and refunds need a defensible audit trail",
    detail:
      "If the PO number, VAT field, delivery address, or buyer reference is wrong, the store needs a replacement workflow and credit-note trail instead of editing old PDFs manually.",
  },
];

const mustHaves = [
  "PO number, buyer reference, department, and cost-centre fields before checkout is completed",
  "Company/public-body legal name, VAT/BTW number, billing country, and finance email stored on the order",
  "Invoice PDF attached to customer emails and available later through protected My Account downloads",
  "Credit notes linked to refunds, cancellations, procurement changes, or corrected buyer data",
  "UBL/Peppol-ready invoice metadata even if the first launch only sends PDF invoices",
  "Accountant handoff with invoice number, invoice date, VAT totals, payment status, and PDF link",
];

const fitRows = [
  {
    signal: "Schools, municipalities, hospitals, NGOs, or government departments buy from the store",
    fit: "Strong fit",
    action: "Collect public-sector invoice fields before payment so procurement does not reject the invoice later.",
  },
  {
    signal: "Orders require PO numbers, buyer references, or separate accounts-payable emails",
    fit: "Strong fit",
    action: "Treat PO/reference fields as invoice metadata, not as free-text order notes.",
  },
  {
    signal: "The store is preparing for e-invoicing, UBL, or Peppol requirements",
    fit: "Strong fit",
    action: "Start by storing clean invoice data now, then export or map it into e-invoice formats later.",
  },
  {
    signal: "Only low-value consumer orders use card payment and no invoice approval",
    fit: "Wait",
    action: "Use the free setup guide first; request Lattice Invoices when B2B/public-sector invoice requests become recurring.",
  },
];

const emailChecklist = [
  "Store URL and country",
  "Buyer type: school, municipality, hospital, NGO, public agency, or mixed B2B",
  "Invoice fields required today: PO number, buyer reference, cost centre, department, invoice email, VAT ID",
  "Payment method: card, bank transfer, net terms, purchase order, or invoice approval",
  "Whether UBL, Peppol, or e-invoicing is required now or expected soon",
  "Monthly public-sector orders and monthly invoice correction volume",
];

const faq = [
  {
    q: "Why do public-sector WooCommerce buyers need a different invoice workflow?",
    a: "Public-sector finance teams often require PO numbers, buyer references, legal billing names, VAT/BTW fields, and invoice PDFs that match procurement systems. A normal WooCommerce receipt can be rejected if those details are missing.",
  },
  {
    q: "Does this replace a Peppol access point or accounting system?",
    a: "No. Lattice Invoices is positioned as the WooCommerce order-level invoice workflow. The first goal is clean VAT and buyer-reference data, PDF delivery, credit notes, and accountant handoff. Peppol/UBL export readiness depends on storing the right fields first.",
  },
  {
    q: "Can this help before e-invoicing is mandatory?",
    a: "Yes. Even before mandatory e-invoicing, storing PO numbers, buyer IDs, VAT metadata, and PDF links in WooCommerce reduces support work and makes future UBL/Peppol mapping easier.",
  },
  {
    q: "When should a store request early access?",
    a: "Request early access when public-sector buyers already ask for corrected PO numbers, invoice email changes, VAT IDs, PDF resends, or credit notes. That is where a €49 workflow can pay back quickly.",
  },
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "WooCommerce public sector invoices: PO, Peppol, and VAT workflow",
  description:
    "A buyer-intent checklist for WooCommerce stores selling to government, schools, hospitals, and public-sector buyers that need PO references, buyer IDs, VAT invoices, credit notes, and e-invoicing readiness.",
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
  "mailto:support@latticeplugins.com?subject=WooCommerce%20public%20sector%20invoice%20workflow%20review&body=Hi%20Lattice%2C%0A%0AI%20want%20a%20WooCommerce%20public-sector%20invoice%20workflow%20review.%0A%0AStore%20URL%3A%20%0ACountry%3A%20%0ABuyer%20type%20%28school%2C%20municipality%2C%20hospital%2C%20NGO%2C%20agency%29%3A%20%0APO%2Fbuyer%20reference%20fields%20needed%3A%20%0AVAT%2FBTW%20fields%20needed%3A%20%0AInvoice%20email%20or%20accounts-payable%20needs%3A%20%0AUBL%2FPeppol%20or%20e-invoicing%20needs%3A%20%0ACredit-note%20or%20correction%20needs%3A%20";

export default function WooCommercePublicSectorInvoicesPage() {
  return (
    <main className="min-h-screen bg-slate-50">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <section className="bg-gradient-to-br from-slate-950 via-indigo-950 to-cyan-900 text-white">
        <div className="max-w-5xl mx-auto px-6 py-16 lg:py-20">
          <p className="uppercase tracking-[0.3em] text-sm text-cyan-200 mb-4">Public-sector invoice workflow</p>
          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
            WooCommerce public-sector invoices need PO references, buyer IDs, and clean VAT evidence.
          </h1>
          <p className="text-xl text-blue-50 leading-relaxed max-w-3xl mb-8">
            If schools, municipalities, hospitals, NGOs, or public agencies buy through your WooCommerce store, the invoice must match procurement rules. This checklist turns PO, VAT, PDF, credit-note, and e-invoicing friction into a Lattice Invoices fit request.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href={mailto} className="bg-cyan-300 text-slate-950 px-8 py-4 rounded-xl font-semibold hover:bg-cyan-200 transition shadow-lg text-center">
              Request €49 public-sector invoice review
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
              <h2 className="text-3xl font-bold mb-4">Why public-sector invoice requests create admin work</h2>
              <p className="text-slate-700 leading-relaxed mb-4">
                WooCommerce can collect payment quickly, but procurement teams care about the invoice document: PO number, buyer reference, department, VAT/BTW fields, invoice email, and a PDF that can be filed without edits.
              </p>
              <p className="text-slate-700 leading-relaxed">
                Lattice Invoices is positioned for that gap: keep public-sector buyer fields, WooCommerce payment status, VAT totals, invoice PDFs, customer downloads, and credit-note evidence connected to the order.
              </p>
            </div>

            <div className="grid gap-4">
              {publicSectorPains.map((item) => (
                <div key={item.title} className="bg-white rounded-2xl border shadow-sm p-6">
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  <p className="text-slate-700 leading-relaxed">{item.detail}</p>
                </div>
              ))}
            </div>

            <div className="bg-cyan-50 border border-cyan-100 rounded-2xl p-8">
              <h2 className="text-3xl font-bold mb-5">Public-sector invoice must-haves</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {mustHaves.map((item) => (
                  <div key={item} className="bg-white rounded-xl border border-cyan-100 p-4 flex gap-3">
                    <span className="text-cyan-700 font-bold">✓</span>
                    <span className="text-slate-800">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-2xl border shadow-sm p-8 overflow-hidden">
              <h2 className="text-3xl font-bold mb-5">Should a public-sector seller request Lattice Invoices?</h2>
              <div className="overflow-x-auto">
                <table className="min-w-full text-left border-collapse">
                  <thead>
                    <tr className="border-b bg-slate-50">
                      <th className="p-4 font-semibold">Store signal</th>
                      <th className="p-4 font-semibold">Fit</th>
                      <th className="p-4 font-semibold">Best next action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {fitRows.map((row) => (
                      <tr key={row.signal} className="border-b last:border-b-0 align-top">
                        <td className="p-4 text-slate-700">{row.signal}</td>
                        <td className="p-4 font-bold text-cyan-700">{row.fit}</td>
                        <td className="p-4 text-slate-700">{row.action}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div className="bg-slate-950 text-white rounded-2xl p-8">
              <h2 className="text-3xl font-bold mb-4">Copy this into the early-access email</h2>
              <p className="text-slate-200 leading-relaxed mb-5">
                A specific public-sector invoice request is easier to qualify than a generic plugin question. Send these details so the €49 Lattice Invoices path can be matched to the real procurement friction.
              </p>
              <ul className="space-y-3 mb-6">
                {emailChecklist.map((item) => (
                  <li key={item} className="flex gap-3 text-slate-100">
                    <span className="text-cyan-300">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <a href={mailto} className="inline-block bg-cyan-300 text-slate-950 px-7 py-3 rounded-xl font-semibold hover:bg-cyan-200 transition">
                Send public-sector invoice fit request
              </a>
            </div>

            <div className="bg-white rounded-2xl border shadow-sm p-8">
              <h2 className="text-3xl font-bold mb-5">Public-sector invoice FAQ</h2>
              <div className="space-y-5">
                {faq.map((item) => (
                  <div key={item.q} className="border-b last:border-b-0 pb-5 last:pb-0">
                    <h3 className="font-bold text-lg mb-2">{item.q}</h3>
                    <p className="text-slate-700 leading-relaxed">{item.a}</p>
                  </div>
                ))}
              </div>
            </div>
          </article>

          <aside className="space-y-6">
            <div className="bg-white rounded-2xl border shadow-sm p-6 sticky top-6">
              <p className="text-sm uppercase tracking-[0.2em] text-cyan-700 font-semibold mb-3">Revenue CTA</p>
              <h2 className="text-2xl font-bold mb-3">Need procurement-ready invoices?</h2>
              <p className="text-slate-700 leading-relaxed mb-5">
                Request the Lattice Invoices early-access review if public-sector buyers already ask for PO numbers, buyer references, invoice email changes, corrected PDFs, UBL/Peppol readiness, or credit notes.
              </p>
              <a href={mailto} className="block text-center bg-blue-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-blue-700 transition mb-3">
                Request €49 review
              </a>
              <Link href="/tools/woocommerce-invoice-setup-brief" className="block text-center border border-slate-200 px-6 py-3 rounded-xl font-semibold hover:border-blue-400 transition mb-3">
                Generate setup brief
              </Link>
              <Link href="/blog/woocommerce-peppol-e-invoices" className="block text-center border border-slate-200 px-6 py-3 rounded-xl font-semibold hover:border-blue-400 transition mb-3">
                Peppol e-invoice guide
              </Link>
              <Link href="/blog/woocommerce-purchase-order-invoices" className="block text-center border border-slate-200 px-6 py-3 rounded-xl font-semibold hover:border-blue-400 transition mb-3">
                Purchase order invoice guide
              </Link>
              <Link href="/docs/woocommerce-eu-vat-invoice-setup" className="block text-center border border-slate-200 px-6 py-3 rounded-xl font-semibold hover:border-blue-400 transition mb-3">
                Read setup guide
              </Link>
              <Link href="/woocommerce-eu-vat-invoices" className="block text-center border border-slate-200 px-6 py-3 rounded-xl font-semibold hover:border-blue-400 transition">
                View Lattice Invoices offer
              </Link>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}
