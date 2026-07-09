import type { Metadata } from "next";
import Link from "next/link";
import InvoiceRoiCalculator from "./InvoiceRoiCalculator";

const SITE_URL = "https://latticeplugins.com";

export const metadata: Metadata = {
  title: "WooCommerce Invoice ROI Calculator — Lattice Invoices",
  description:
    "Estimate how much manual WooCommerce VAT invoice work costs each month, then decide whether a €49 invoice workflow pays back for your store.",
  alternates: {
    canonical: `${SITE_URL}/tools/woocommerce-invoice-roi-calculator`,
  },
  openGraph: {
    title: "WooCommerce Invoice ROI Calculator",
    description:
      "Calculate the admin cost of invoice requests, VAT/BTW corrections, PDF resends, and credit-note work before requesting Lattice Invoices early access.",
    url: `${SITE_URL}/tools/woocommerce-invoice-roi-calculator`,
    siteName: "Lattice Plugins",
    type: "website",
  },
};

const exampleRows = [
  ["Small B2B store", "6 invoice requests", "€90/month admin leak", "€49 workflow can pay back in the first month"],
  ["Growing EU store", "20 invoice requests", "€300+/month admin leak", "Fix before support becomes a recurring queue"],
  ["Agency-managed shop", "Multiple client stores", "Repeated support minutes", "Use the score as a client handoff argument"],
];

const includedWorkflow = [
  "VAT/BTW and company fields captured before payment",
  "Invoice number, date, customer VAT ID, and order totals stored together",
  "PDF invoices attached to order emails and available from My Account",
  "Credit-note workflow for refunds and corrections",
  "Setup checklist that tells the buyer what to send before early access",
];

const structuredData = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "WooCommerce Invoice ROI Calculator",
  applicationCategory: "BusinessApplication",
  operatingSystem: "Web",
  url: `${SITE_URL}/tools/woocommerce-invoice-roi-calculator`,
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "EUR",
  },
};

export default function WooCommerceInvoiceRoiCalculatorPage() {
  return (
    <main className="min-h-screen bg-slate-50">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <section className="bg-gradient-to-br from-slate-950 via-blue-950 to-indigo-900 text-white">
        <div className="max-w-6xl mx-auto px-6 py-16 lg:py-20">
          <p className="uppercase tracking-[0.3em] text-sm text-blue-200 mb-4">Free WooCommerce invoice tool</p>
          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6 max-w-4xl">
            Calculate whether manual WooCommerce invoices are already costing more than €49.
          </h1>
          <p className="text-xl text-blue-50 leading-relaxed mb-8 max-w-3xl">
            Use this calculator before buying or requesting early access. If invoice requests, VAT/BTW corrections,
            PDF resends, and refund credit notes already cost more than a plugin license, Lattice Invoices has a clear ROI case.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="mailto:support@latticeplugins.com?subject=Lattice%20Invoices%20ROI%20calculator%20score&body=Hi%20Lattice%2C%0A%0AI%20used%20the%20WooCommerce%20invoice%20ROI%20calculator%20and%20want%20to%20request%20Lattice%20Invoices%20early%20access.%0A%0AStore%20URL%3A%20%0AInvoice%20requests%20per%20month%3A%20%0AMinutes%20per%20request%3A%20%0AMonthly%20admin%20cost%20estimate%3A%20%0AVAT%2FBTW%20fields%20needed%3A%20%0ACredit%20notes%20needed%3A%20"
              className="bg-green-500 text-white px-8 py-4 rounded-xl font-semibold hover:bg-green-400 transition shadow-lg text-center"
            >
              Send my calculator score
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
          <p className="text-sm uppercase tracking-[0.25em] text-blue-600 font-semibold mb-2">Calculate invoice ROI</p>
          <h2 className="text-3xl font-bold mb-4">Estimate the monthly admin leak</h2>
          <p className="text-slate-700 leading-relaxed max-w-3xl">
            The default values model a modest EU B2B WooCommerce store: 12 invoice-related requests per month,
            8 minutes per request, €45/hour internal cost, plus a few correction loops. Adjust the inputs to match your store.
          </p>
        </div>

        <InvoiceRoiCalculator />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 bg-white rounded-2xl border shadow-sm p-8 overflow-hidden">
            <h2 className="text-3xl font-bold mb-4">How to use the number in a buying decision</h2>
            <p className="text-slate-700 leading-relaxed mb-6">
              If the monthly cost is higher than €49, the invoice workflow is not a speculative plugin purchase.
              It is a small operational fix for a recurring WooCommerce support cost. The stronger the B2B mix,
              the more urgent VAT/BTW fields, customer downloads, and credit notes become.
            </p>
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-slate-100 text-slate-700">
                    <th className="p-4 rounded-l-xl">Store type</th>
                    <th className="p-4">Typical input</th>
                    <th className="p-4">What it reveals</th>
                    <th className="p-4 rounded-r-xl">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {exampleRows.map(([store, input, reveal, action]) => (
                    <tr key={store} className="border-b border-slate-100">
                      <td className="p-4 font-semibold text-slate-900">{store}</td>
                      <td className="p-4 text-slate-700">{input}</td>
                      <td className="p-4 text-slate-700">{reveal}</td>
                      <td className="p-4 text-slate-800">{action}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <aside className="bg-white rounded-2xl border shadow-sm p-6">
            <p className="text-sm uppercase tracking-[0.25em] text-green-700 font-semibold mb-2">€49 early-access path</p>
            <h2 className="text-2xl font-bold mb-3">What the paid workflow should remove</h2>
            <ul className="space-y-3 text-slate-700 mb-6">
              {includedWorkflow.map((item) => (
                <li key={item} className="flex gap-2">
                  <span className="text-green-600 font-bold">✓</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <a
              href="mailto:support@latticeplugins.com?subject=Lattice%20Invoices%20early%20access%20-%20calculator%20qualified&body=Hi%20Lattice%2C%0A%0AI%20want%20Lattice%20Invoices%20early%20access.%20The%20ROI%20calculator%20shows%20manual%20invoice%20work%20is%20worth%20fixing.%0A%0AStore%20URL%3A%20%0ACountry%3A%20%0AMonthly%20invoice%20requests%3A%20%0AMonthly%20admin%20cost%20estimate%3A%20%0ARequired%20VAT%2FBTW%20fields%3A%20%0ACredit%20notes%20needed%3A%20"
              className="block text-center bg-blue-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-blue-700 transition mb-3"
            >
              Request €49 early access
            </a>
            <Link
              href="/docs/woocommerce-eu-vat-invoice-setup"
              className="block text-center border border-slate-200 px-6 py-3 rounded-xl font-semibold hover:border-blue-400 transition"
            >
              Read setup checklist
            </Link>
          </aside>
        </div>
      </section>
    </main>
  );
}
