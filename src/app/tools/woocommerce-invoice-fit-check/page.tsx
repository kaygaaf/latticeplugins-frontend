import type { Metadata } from "next";
import Link from "next/link";
import InvoiceFitCheck from "./InvoiceFitCheck";

const SITE_URL = "https://latticeplugins.com";

export const metadata: Metadata = {
  title: "WooCommerce Invoice Fit Check — Lattice Invoices",
  description:
    "Score whether your WooCommerce store is ready for Lattice Invoices early access: VAT/BTW fields, manual PDF work, credit notes, B2B payment terms, and accountant exports.",
  alternates: {
    canonical: `${SITE_URL}/tools/woocommerce-invoice-fit-check`,
  },
  openGraph: {
    title: "WooCommerce Invoice Fit Check",
    description:
      "Use this free fit-check tool to decide whether a €49 WooCommerce EU VAT invoice workflow review is worth requesting.",
    url: `${SITE_URL}/tools/woocommerce-invoice-fit-check`,
    siteName: "Lattice Plugins",
    type: "website",
  },
};

const nextSteps = [
  "Score 0–2: track invoice support requests for one month before changing plugins.",
  "Score 3–5: read the setup checklist and compare current PDF/VAT plugin gaps.",
  "Score 6–10: send the prefilled fit-check email and request the €49 early-access workflow review.",
];

const structuredData = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "WooCommerce Invoice Fit Check",
  applicationCategory: "BusinessApplication",
  operatingSystem: "Web",
  url: `${SITE_URL}/tools/woocommerce-invoice-fit-check`,
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "EUR",
  },
};

export default function WooCommerceInvoiceFitCheckPage() {
  return (
    <main className="min-h-screen bg-slate-50">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <section className="bg-gradient-to-br from-slate-950 via-blue-950 to-emerald-900 text-white">
        <div className="max-w-6xl mx-auto px-6 py-16 lg:py-20">
          <p className="uppercase tracking-[0.3em] text-sm text-emerald-200 mb-4">Free WooCommerce invoice qualification tool</p>
          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6 max-w-4xl">
            Check if your WooCommerce invoice problem is ready for a €49 fix.
          </h1>
          <p className="text-xl text-blue-50 leading-relaxed mb-8 max-w-3xl">
            Lattice Invoices is strongest when a store already feels invoice friction: missing VAT/BTW details,
            manual PDFs, credit notes, B2B terms, or accountant export cleanup. Use this score before requesting early access.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="mailto:support@latticeplugins.com?subject=Lattice%20Invoices%20fit-check%20request&body=Hi%20Lattice%2C%0A%0AI%20want%20to%20qualify%20Lattice%20Invoices%20early%20access.%0A%0AStore%20URL%3A%20%0ACountry%3A%20%0AB2B%2FB2C%20mix%3A%20%0AInvoice%20requests%20per%20month%3A%20%0AVAT%2FBTW%20fields%20needed%3A%20%0ACredit%20notes%20needed%3A%20"
              className="bg-green-500 text-white px-8 py-4 rounded-xl font-semibold hover:bg-green-400 transition shadow-lg text-center"
            >
              Request early-access fit check
            </a>
            <Link
              href="/woocommerce-eu-vat-invoices"
              className="bg-white/10 border border-white/20 text-white px-8 py-4 rounded-xl font-semibold hover:bg-white/15 transition text-center"
            >
              View Lattice Invoices offer
            </Link>
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-14 space-y-10">
        <div>
          <p className="text-sm uppercase tracking-[0.25em] text-blue-600 font-semibold mb-2">Score invoice fit</p>
          <InvoiceFitCheck />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 bg-white rounded-2xl border shadow-sm p-8">
            <h2 className="text-3xl font-bold mb-4">How to use the score</h2>
            <p className="text-slate-700 leading-relaxed mb-6">
              This page is designed to remove purchase hesitation. Instead of asking “do I need an invoice plugin?”,
              it turns the decision into visible support cost, B2B buyer friction, and finance risk.
            </p>
            <div className="space-y-3">
              {nextSteps.map((step) => (
                <div key={step} className="flex gap-3 rounded-xl bg-slate-50 border border-slate-100 p-4">
                  <span className="text-green-600 font-bold">✓</span>
                  <span className="text-slate-800">{step}</span>
                </div>
              ))}
            </div>
          </div>

          <aside className="bg-white rounded-2xl border shadow-sm p-6">
            <p className="text-sm uppercase tracking-[0.25em] text-blue-700 font-semibold mb-2">Continue the funnel</p>
            <h2 className="text-2xl font-bold mb-3">Need more proof before emailing?</h2>
            <div className="space-y-3">
              <Link href="/tools/woocommerce-invoice-roi-calculator" className="block text-center bg-green-50 border border-green-200 text-green-800 px-5 py-3 rounded-xl font-semibold hover:border-green-500 transition">
                Calculate invoice ROI
              </Link>
              <Link href="/demo/lattice-invoices" className="block text-center bg-blue-50 border border-blue-200 text-blue-800 px-5 py-3 rounded-xl font-semibold hover:border-blue-500 transition">
                View workflow demo
              </Link>
              <Link href="/docs/woocommerce-eu-vat-invoice-setup" className="block text-center border border-slate-200 px-5 py-3 rounded-xl font-semibold hover:border-blue-400 transition">
                Read setup guide
              </Link>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}
