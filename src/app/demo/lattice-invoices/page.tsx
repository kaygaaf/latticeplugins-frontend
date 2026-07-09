import type { Metadata } from "next";
import Link from "next/link";

const SITE_URL = "https://latticeplugins.com";

export const metadata: Metadata = {
  title: "Lattice Invoices Demo — WooCommerce EU VAT Invoice Workflow",
  description:
    "Preview the Lattice Invoices WooCommerce workflow: B2B checkout VAT fields, invoice numbering, PDF email attachment, customer downloads, refunds, and credit notes.",
  alternates: {
    canonical: `${SITE_URL}/demo/lattice-invoices`,
  },
  openGraph: {
    title: "Lattice Invoices workflow demo",
    description:
      "See how an EU WooCommerce order moves from VAT checkout fields to invoice PDF, customer download, and refund credit note.",
    url: `${SITE_URL}/demo/lattice-invoices`,
    siteName: "Lattice Plugins",
    type: "website",
  },
};

const workflowSteps = [
  {
    eyebrow: "Step 1",
    title: "B2B checkout captures invoice data before payment",
    detail:
      "Company name, VAT/BTW number, invoice email, PO/reference, country, and billing address are collected as structured order data instead of support notes.",
    fields: ["Company: Northwind BV", "VAT/BTW: NL123456789B01", "Invoice email: finance@example.com", "PO: NW-2026-114"],
  },
  {
    eyebrow: "Step 2",
    title: "Paid order gets a dedicated invoice sequence",
    detail:
      "The order keeps its WooCommerce order ID, but the accounting document receives a clean invoice number such as INV-2026-000184.",
    fields: ["Woo order: #1849", "Invoice: INV-2026-000184", "Status: PDF generated", "Tax treatment: EU VAT invoice"],
  },
  {
    eyebrow: "Step 3",
    title: "Invoice PDF is attached and stored for download",
    detail:
      "The customer receives the invoice with the order email and can download the same document later from My Account without asking support.",
    fields: ["Email: completed order", "Attachment: invoice.pdf", "My Account: Download invoice", "Admin: regenerate PDF"],
  },
  {
    eyebrow: "Step 4",
    title: "Refunds create linked credit notes",
    detail:
      "A refund does not overwrite the original invoice. It creates a separate credit-note document tied back to the original order and invoice.",
    fields: ["Refund: €49.00", "Credit note: CN-2026-000021", "Linked invoice: INV-2026-000184", "Reason: customer refund"],
  },
];

const pdfRows = [
  ["Lattice Invoices license", "1", "€49.00", "21%", "€59.29"],
  ["Setup validation reply", "1", "€0.00", "0%", "€0.00"],
];

const buyerChecks = [
  "Can your current checkout capture company and VAT data before the order is paid?",
  "Does the invoice use a dedicated sequence instead of WooCommerce order IDs?",
  "Can customers download invoice PDFs without emailing support?",
  "Do refunds create credit notes instead of editing the original invoice?",
  "Can your accountant export invoice number, VAT number, VAT total, and document links?",
];

const structuredData = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "Lattice Invoices demo",
  applicationCategory: "BusinessApplication",
  operatingSystem: "WordPress, WooCommerce",
  url: `${SITE_URL}/demo/lattice-invoices`,
  description:
    "Interactive product demo page for the Lattice Invoices WooCommerce EU VAT invoice workflow.",
  offers: {
    "@type": "Offer",
    price: "49",
    priceCurrency: "EUR",
    availability: "https://schema.org/PreOrder",
    url: `${SITE_URL}/woocommerce-eu-vat-invoices`,
  },
};

export default function LatticeInvoicesDemoPage() {
  return (
    <main className="min-h-screen bg-slate-50">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <section className="bg-gradient-to-br from-slate-950 via-blue-950 to-emerald-900 text-white">
        <div className="max-w-6xl mx-auto px-6 py-16 lg:py-20 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div>
            <p className="uppercase tracking-[0.3em] text-sm text-emerald-200 mb-4">Product demo</p>
            <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
              Preview the WooCommerce invoice workflow before requesting early access.
            </h1>
            <p className="text-xl text-blue-50 leading-relaxed mb-8">
              This demo turns the Lattice Invoices offer into a concrete buyer journey: VAT checkout fields,
              invoice numbering, PDF delivery, My Account downloads, and refund credit notes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="mailto:support@latticeplugins.com?subject=Lattice%20Invoices%20demo%20review%20-%20%E2%82%AC49%20early%20access&body=Hi%20Lattice%2C%0A%0AI%20reviewed%20the%20Lattice%20Invoices%20demo%20and%20want%20to%20check%20fit%20for%20my%20WooCommerce%20store.%0A%0AStore%20URL%3A%20%0ACountry%3A%20%0AB2B%2FB2C%20mix%3A%20%0AVAT%2FBTW%20fields%20needed%3A%20%0AInvoice%20number%20format%3A%20%0ACredit%20notes%20needed%3A%20%0AAccounting%20export%20needed%3A%20"
                className="bg-green-500 text-white px-8 py-4 rounded-xl font-semibold hover:bg-green-400 transition shadow-lg text-center"
              >
                Request €49 early-access review
              </a>
              <Link
                href="/woocommerce-eu-vat-invoices"
                className="bg-white/10 border border-white/20 text-white px-8 py-4 rounded-xl font-semibold hover:bg-white/15 transition text-center"
              >
                Back to invoice landing page
              </Link>
            </div>
          </div>

          <div className="bg-white text-slate-900 rounded-2xl shadow-2xl p-6 lg:p-8">
            <div className="flex items-center justify-between border-b pb-4 mb-5">
              <div>
                <p className="text-sm uppercase tracking-widest text-slate-500">Invoice document preview</p>
                <h2 className="text-2xl font-bold">INV-2026-000184</h2>
              </div>
              <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-semibold">Paid</span>
            </div>
            <div className="grid grid-cols-2 gap-3 text-sm mb-5">
              <div className="bg-slate-50 rounded-xl p-4">
                <p className="text-slate-500">Customer</p>
                <p className="font-bold">Northwind BV</p>
              </div>
              <div className="bg-slate-50 rounded-xl p-4">
                <p className="text-slate-500">VAT/BTW</p>
                <p className="font-bold">NL123456789B01</p>
              </div>
              <div className="bg-slate-50 rounded-xl p-4">
                <p className="text-slate-500">Invoice date</p>
                <p className="font-bold">9 Jul 2026</p>
              </div>
              <div className="bg-slate-50 rounded-xl p-4">
                <p className="text-slate-500">Delivery</p>
                <p className="font-bold">Email + My Account</p>
              </div>
            </div>
            <div className="overflow-hidden rounded-xl border">
              <div className="grid grid-cols-5 bg-slate-100 text-xs font-semibold text-slate-600">
                <span className="col-span-2 p-3">Item</span>
                <span className="p-3 text-right">Qty</span>
                <span className="p-3 text-right">VAT</span>
                <span className="p-3 text-right">Total</span>
              </div>
              {pdfRows.map(([item, qty, net, vat, total]) => (
                <div key={item} className="grid grid-cols-5 border-t text-sm">
                  <span className="col-span-2 p-3 font-medium">{item}</span>
                  <span className="p-3 text-right">{qty}</span>
                  <span className="p-3 text-right">{vat}</span>
                  <span className="p-3 text-right font-semibold">{total}</span>
                </div>
              ))}
            </div>
            <div className="mt-5 grid grid-cols-2 gap-3 text-center text-sm">
              <div className="rounded-xl border border-green-200 bg-green-50 p-3 text-green-800">PDF attached</div>
              <div className="rounded-xl border border-blue-200 bg-blue-50 p-3 text-blue-800">Credit-note ready</div>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-14">
        <div className="mb-10 max-w-3xl">
          <p className="uppercase tracking-[0.25em] text-sm text-blue-600 font-semibold mb-3">Workflow screens</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">The four buyer-visible screens Lattice Invoices must make obvious</h2>
          <p className="text-slate-700 leading-relaxed">
            This page is built for purchase friction: a WooCommerce store owner can now see exactly what the paid invoice workflow should do before sending a setup request.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-14">
          {workflowSteps.map((step) => (
            <article key={step.title} className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
              <div className="bg-slate-900 text-white p-5">
                <p className="text-xs uppercase tracking-[0.25em] text-emerald-200 mb-2">{step.eyebrow}</p>
                <h3 className="text-2xl font-bold">{step.title}</h3>
              </div>
              <div className="p-6">
                <p className="text-slate-700 leading-relaxed mb-5">{step.detail}</p>
                <div className="space-y-2">
                  {step.fields.map((field) => (
                    <div key={field} className="rounded-xl bg-slate-50 border border-slate-100 px-4 py-3 text-sm text-slate-800 flex gap-2">
                      <span className="text-green-600 font-bold">✓</span>
                      <span>{field}</span>
                    </div>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          <div className="lg:col-span-2 bg-white rounded-2xl border shadow-sm p-8">
            <h2 className="text-3xl font-bold mb-4">Use this as the pre-purchase checklist</h2>
            <p className="text-slate-700 leading-relaxed mb-6">
              If two or more of these answers are “no”, the store has a real invoice workflow gap. That makes the €49 early-access conversation concrete instead of speculative.
            </p>
            <div className="space-y-3">
              {buyerChecks.map((check) => (
                <div key={check} className="flex gap-3 rounded-xl border border-slate-200 bg-slate-50 p-4">
                  <span className="text-blue-600 font-bold">?</span>
                  <span className="text-slate-800">{check}</span>
                </div>
              ))}
            </div>
          </div>

          <aside className="bg-slate-950 text-white rounded-2xl p-6 shadow-xl sticky top-6">
            <p className="text-sm uppercase tracking-widest text-emerald-200 mb-2">Demo CTA</p>
            <h2 className="text-2xl font-bold mb-3">Want this workflow in your WooCommerce store?</h2>
            <p className="text-slate-200 leading-relaxed mb-5">
              Send the store URL and invoice requirements. The reply can qualify whether Lattice Invoices is worth the €49 early-access license for that setup.
            </p>
            <a
              href="mailto:support@latticeplugins.com?subject=Lattice%20Invoices%20demo%20fit%20check&body=Hi%20Lattice%2C%0A%0AI%20want%20a%20fit%20check%20based%20on%20the%20Lattice%20Invoices%20demo.%0A%0AStore%20URL%3A%20%0ACountry%3A%20%0AInvoice%20requests%20per%20month%3A%20%0AVAT%2FBTW%20fields%20needed%3A%20%0ARefund%2Fcredit-note%20workflow%3A%20%0AAccounting%20export%20needs%3A%20"
              className="block text-center bg-green-500 text-white px-6 py-3 rounded-xl font-semibold hover:bg-green-400 transition mb-3"
            >
              Send demo fit-check request
            </a>
            <Link
              href="/docs/woocommerce-eu-vat-invoice-setup"
              className="block text-center border border-white/20 px-6 py-3 rounded-xl font-semibold hover:bg-white/10 transition"
            >
              Read setup guide
            </Link>
          </aside>
        </div>
      </section>
    </main>
  );
}
