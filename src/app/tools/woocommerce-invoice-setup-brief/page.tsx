import type { Metadata } from "next";
import Link from "next/link";
import InvoiceSetupBrief from "./InvoiceSetupBrief";

const SITE_URL = "https://latticeplugins.com";

export const metadata: Metadata = {
  title: "WooCommerce Invoice Setup Brief Generator — Lattice Invoices",
  description:
    "Generate a WooCommerce EU VAT invoice setup brief before requesting Lattice Invoices early access: VAT fields, numbering, PDFs, credit notes, payment methods, and accounting handoff.",
  alternates: {
    canonical: `${SITE_URL}/tools/woocommerce-invoice-setup-brief`,
  },
  openGraph: {
    title: "WooCommerce Invoice Setup Brief Generator",
    description:
      "Create a prefilled setup brief for a €49 Lattice Invoices early-access review so WooCommerce invoice requirements are clear before purchase.",
    url: `${SITE_URL}/tools/woocommerce-invoice-setup-brief`,
    siteName: "Lattice Plugins",
    type: "website",
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "WooCommerce Invoice Setup Brief Generator",
  applicationCategory: "BusinessApplication",
  operatingSystem: "Web",
  url: `${SITE_URL}/tools/woocommerce-invoice-setup-brief`,
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "EUR",
  },
};

const proofPoints = [
  "Captures the exact VAT/BTW checkout fields a buyer expects before payment.",
  "Turns invoice-number format, PDF delivery, My Account downloads, and credit notes into a single setup request.",
  "Creates a prefilled email CTA for a €49 Lattice Invoices early-access review.",
];

export default function WooCommerceInvoiceSetupBriefPage() {
  return (
    <main className="min-h-screen bg-slate-50">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <section className="bg-gradient-to-br from-slate-950 via-blue-950 to-indigo-900 text-white">
        <div className="max-w-6xl mx-auto px-6 py-16 lg:py-20 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div>
            <p className="uppercase tracking-[0.3em] text-sm text-blue-200 mb-4">Free WooCommerce invoice sales tool</p>
            <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
              Generate the invoice setup brief before buying another WooCommerce PDF plugin.
            </h1>
            <p className="text-xl text-blue-50 leading-relaxed mb-8">
              Lattice Invoices buyers need to know whether their store requires VAT fields, invoice numbering,
              PDF email attachments, customer downloads, credit notes, proformas, and accounting handoff. This brief makes the €49 early-access request concrete.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#setup-brief"
                className="bg-green-500 text-white px-8 py-4 rounded-xl font-semibold hover:bg-green-400 transition shadow-lg text-center"
              >
                Build setup brief
              </a>
              <Link
                href="/woocommerce-eu-vat-invoices"
                className="bg-white/10 border border-white/20 text-white px-8 py-4 rounded-xl font-semibold hover:bg-white/15 transition text-center"
              >
                View Lattice Invoices offer
              </Link>
            </div>
          </div>

          <div className="bg-white/10 border border-white/15 rounded-2xl p-6 shadow-2xl">
            <p className="text-sm uppercase tracking-[0.25em] text-blue-100 mb-4">Why this removes purchase friction</p>
            <div className="space-y-4">
              {proofPoints.map((point) => (
                <div key={point} className="flex gap-3 rounded-xl bg-white/10 p-4">
                  <span className="text-green-300 font-bold">✓</span>
                  <span className="text-blue-50">{point}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="setup-brief" className="max-w-6xl mx-auto px-6 py-14">
        <InvoiceSetupBrief />
      </section>

      <section className="max-w-6xl mx-auto px-6 pb-16">
        <div className="bg-white rounded-2xl border shadow-sm p-8 grid grid-cols-1 lg:grid-cols-3 gap-6 items-center">
          <div className="lg:col-span-2">
            <p className="text-sm uppercase tracking-[0.25em] text-blue-600 font-semibold mb-2">Continue the invoice funnel</p>
            <h2 className="text-3xl font-bold mb-3">Need to qualify the store first?</h2>
            <p className="text-slate-700 leading-relaxed">
              Use the fit-check and ROI calculator if you are unsure whether invoice requests cost enough to justify the €49 early-access workflow.
            </p>
          </div>
          <div className="space-y-3">
            <Link href="/tools/woocommerce-invoice-fit-check" className="block text-center bg-blue-50 border border-blue-200 text-blue-800 px-5 py-3 rounded-xl font-semibold hover:border-blue-500 transition">
              Score invoice fit
            </Link>
            <Link href="/tools/woocommerce-invoice-roi-calculator" className="block text-center bg-green-50 border border-green-200 text-green-800 px-5 py-3 rounded-xl font-semibold hover:border-green-500 transition">
              Calculate invoice ROI
            </Link>
            <Link href="/docs/woocommerce-eu-vat-invoice-setup" className="block text-center border border-slate-200 px-5 py-3 rounded-xl font-semibold hover:border-blue-400 transition">
              Read setup guide
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
