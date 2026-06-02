import type { Metadata } from "next";
import Link from "next/link";

const SITE_URL = "https://latticeplugins.com";

export const metadata: Metadata = {
  title: "WooCommerce VAT Number Checkout Field — EU B2B Invoice Guide",
  description:
    "How to add and qualify a WooCommerce VAT/BTW number checkout field for EU B2B invoices, customer emails, invoice PDFs, and bookkeeping-ready order metadata.",
  alternates: {
    canonical: `${SITE_URL}/blog/woocommerce-vat-number-checkout-field`,
  },
  openGraph: {
    title: "WooCommerce VAT Number Checkout Field",
    description:
      "A buyer-intent guide for WooCommerce stores that need VAT/BTW number fields before payment and cleaner EU invoice workflows.",
    url: `${SITE_URL}/blog/woocommerce-vat-number-checkout-field`,
    siteName: "Lattice Plugins",
    type: "article",
  },
};

const fieldRequirements = [
  "Company name and VAT/BTW number fields are visible before payment",
  "VAT number is stored as order metadata, not buried in a customer note",
  "Billing country and company data are captured with the VAT field",
  "The invoice PDF can print the VAT number exactly as entered or verified",
  "Customer emails and My Account downloads use the same invoice data",
  "Admins can edit a correction safely without losing the original order trail",
];

const checkoutMistakes = [
  "Adding a generic text field but not saving it to the WooCommerce order.",
  "Collecting VAT/BTW details after payment by email, which delays invoices and creates support work.",
  "Making the field required for every B2C buyer instead of qualifying B2B/company orders.",
  "Printing the VAT number on PDFs but not storing invoice date, number, and tax totals as separate metadata.",
  "Forgetting refunds: credit notes need the same business billing context as the original invoice.",
];

const implementationSteps = [
  {
    title: "1. Decide when the field appears",
    text: "The cleanest WooCommerce flow shows VAT/BTW fields when the customer is buying as a company or enters a billing country where B2B invoice data is needed. Avoid forcing private consumers through business-only fields.",
  },
  {
    title: "2. Save the value to order metadata",
    text: "A VAT number should travel with the order, invoice PDF, customer email, admin screen, and export. If it only lives in checkout form state or an order note, it will create manual cleanup later.",
  },
  {
    title: "3. Connect the field to invoice generation",
    text: "The invoice workflow should use the stored VAT/BTW number together with company name, billing address, VAT amount, invoice date, and invoice number when the PDF is generated.",
  },
  {
    title: "4. Test a refund and credit note",
    text: "After a partial or full refund, the credit note should keep the same business customer context and reference the original invoice instead of requiring another manual PDF.",
  },
];

const comparisonRows = [
  ["Field placement", "Hidden in notes or added after checkout", "Visible before payment for B2B buyers"],
  ["Storage", "Temporary checkout value", "Order metadata used by invoices and exports"],
  ["Invoice PDF", "Manual copy/paste into PDF", "Printed from stored order billing data"],
  ["Support load", "Customer emails missing VAT details", "Checkout captures details upfront"],
  ["Refunds", "VAT context recreated manually", "Credit note keeps original business data"],
];

const faq = [
  {
    q: "Does WooCommerce include a VAT number checkout field by default?",
    a: "WooCommerce stores billing company and tax totals, but many stores still need a dedicated VAT/BTW number workflow that stores the value on the order and exposes it to invoice PDFs, emails, and customer downloads.",
  },
  {
    q: "Should the VAT number field be required?",
    a: "Usually it should be required only for business invoice flows, not every consumer checkout. The exact rule depends on the store, country mix, and whether the product is sold B2B, B2C, or both.",
  },
  {
    q: "Is validation enough to solve invoicing?",
    a: "No. Validation helps, but the sales problem is the full invoice workflow: capture the field, save it, print it on invoices, attach PDFs, expose downloads, and preserve data for refunds and credit notes.",
  },
  {
    q: "How does this connect to Lattice Invoices?",
    a: "VAT/BTW checkout fields are one of the first conversion-critical pieces in the Lattice Invoices product path, alongside sequential invoice numbers, PDF delivery, My Account downloads, and refund credit notes.",
  },
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "WooCommerce VAT number checkout field for EU B2B invoices",
  description:
    "How EU WooCommerce stores should collect VAT/BTW numbers before payment and connect them to invoice PDFs, emails, downloads, and refund credit notes.",
  mainEntityOfPage: `${SITE_URL}/blog/woocommerce-vat-number-checkout-field`,
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

export default function WooCommerceVatNumberCheckoutFieldPage() {
  return (
    <main className="min-h-screen bg-slate-50">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <section className="bg-gradient-to-br from-slate-950 via-blue-950 to-indigo-900 text-white">
        <div className="max-w-5xl mx-auto px-6 py-16 lg:py-20">
          <p className="uppercase tracking-[0.3em] text-sm text-blue-200 mb-4">WooCommerce VAT/BTW checkout field</p>
          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
            Add a WooCommerce VAT number checkout field without breaking the invoice workflow.
          </h1>
          <p className="text-xl text-blue-50 leading-relaxed max-w-3xl mb-8">
            EU business buyers need to enter VAT/BTW details before payment, but the value must also flow into
            invoices, emails, My Account downloads, exports, and refund credit notes. This guide turns that field
            into a purchase-ready Lattice Invoices requirement.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="mailto:support@latticeplugins.com?subject=Lattice%20Invoices%20VAT%20field%20early%20access&body=Hi%20Lattice%2C%0A%0AI%20need%20a%20WooCommerce%20VAT%2FBTW%20number%20checkout%20field%20for%20invoices.%0A%0AStore%20URL%3A%20%0ACountry%3A%20%0AB2B%20or%20B2C%3A%20%0AField%20rules%20needed%3A%20%0AInvoice%20number%20format%3A%20"
              className="bg-green-500 text-white px-8 py-4 rounded-xl font-semibold hover:bg-green-400 transition shadow-lg text-center"
            >
              Request VAT field early access
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

      <section className="max-w-6xl mx-auto px-6 py-14">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <article className="lg:col-span-2 space-y-8">
            <div className="bg-white rounded-2xl border shadow-sm p-8">
              <h2 className="text-3xl font-bold mb-4">The real problem is not the field. It is what happens after checkout.</h2>
              <p className="text-slate-700 leading-relaxed mb-4">
                A VAT number field looks simple, but store owners usually buy a plugin because the downstream workflow is messy:
                missing VAT data, invoice correction emails, manual PDF edits, and bookkeeping exports that do not include the
                information the accountant expects.
              </p>
              <p className="text-slate-700 leading-relaxed">
                Lattice Invoices positions the VAT/BTW checkout field as the first step in a WooCommerce-native invoice system,
                not a standalone form tweak. That is a clearer buying reason for EU B2B stores.
              </p>
            </div>

            <div className="bg-white rounded-2xl border shadow-sm p-8">
              <h2 className="text-3xl font-bold mb-6">VAT field readiness checklist</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {fieldRequirements.map((item) => (
                  <div key={item} className="flex gap-3 p-4 rounded-xl bg-slate-50 border border-slate-100">
                    <span className="text-green-600 font-bold">✓</span>
                    <span className="text-slate-800">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-2xl border shadow-sm p-8">
              <h2 className="text-3xl font-bold mb-6">Implementation path</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {implementationSteps.map((step) => (
                  <div key={step.title} className="rounded-xl border border-slate-200 bg-slate-50 p-5">
                    <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                    <p className="text-slate-700 leading-relaxed">{step.text}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-2xl border shadow-sm p-8 overflow-hidden">
              <h2 className="text-3xl font-bold mb-4">Generic checkout field vs. invoice-ready VAT workflow</h2>
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-slate-100 text-slate-700">
                      <th className="p-4 rounded-l-xl">Need</th>
                      <th className="p-4">Generic field plugin</th>
                      <th className="p-4 rounded-r-xl">Lattice Invoices path</th>
                    </tr>
                  </thead>
                  <tbody>
                    {comparisonRows.map(([need, generic, lattice]) => (
                      <tr key={need} className="border-b border-slate-100">
                        <td className="p-4 font-semibold text-slate-900">{need}</td>
                        <td className="p-4 text-slate-600">{generic}</td>
                        <td className="p-4 text-slate-800">{lattice}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div className="bg-white rounded-2xl border shadow-sm p-8">
              <h2 className="text-3xl font-bold mb-4">Mistakes to avoid</h2>
              <div className="space-y-3">
                {checkoutMistakes.map((mistake) => (
                  <div key={mistake} className="flex gap-3 rounded-xl bg-red-50 border border-red-100 p-4">
                    <span className="text-red-600 font-bold">!</span>
                    <span className="text-slate-800">{mistake}</span>
                  </div>
                ))}
              </div>
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
              <p className="text-sm uppercase tracking-[0.2em] text-blue-700 font-semibold mb-2">Early-access qualifier</p>
              <h2 className="text-2xl font-bold mb-3">Need VAT/BTW fields before payment?</h2>
              <p className="text-slate-700 mb-5">
                Send the store URL and field rules. This page captures high-intent buyers who are searching for a
                VAT-number field but actually need the full invoice workflow.
              </p>
              <a
                href="mailto:support@latticeplugins.com?subject=Lattice%20Invoices%20VAT%20field%20early%20access&body=Hi%20Lattice%2C%0A%0AI%20need%20a%20WooCommerce%20VAT%2FBTW%20number%20checkout%20field%20for%20invoices.%0A%0AStore%20URL%3A%20%0ACountry%3A%20%0AB2B%20or%20B2C%3A%20%0AField%20rules%20needed%3A%20%0AInvoice%20number%20format%3A%20"
                className="block text-center bg-blue-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-blue-700 transition mb-3"
              >
                Request VAT field early access
              </a>
              <Link
                href="/docs/woocommerce-eu-vat-invoice-setup"
                className="block text-center border border-slate-200 px-6 py-3 rounded-xl font-semibold hover:border-blue-400 transition mb-3"
              >
                Read setup guide
              </Link>
              <Link
                href="/blog/woocommerce-credit-notes-refunds"
                className="block text-center border border-slate-200 px-6 py-3 rounded-xl font-semibold hover:border-blue-400 transition mb-3"
              >
                Credit-note workflow guide
              </Link>
              <Link
                href="/woocommerce-eu-vat-invoices"
                className="block text-center border border-slate-200 px-6 py-3 rounded-xl font-semibold hover:border-blue-400 transition"
              >
                View €49 invoice offer
              </Link>
              <div className="border-t mt-6 pt-6 space-y-3 text-sm text-slate-600">
                <div>✓ Targets buyer searches for VAT number checkout fields</div>
                <div>✓ Converts field demand into the invoice early-access offer</div>
                <div>✓ Includes mailto CTA with store qualification questions</div>
              </div>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}
