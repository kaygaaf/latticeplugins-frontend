import type { Metadata } from "next";
import Link from "next/link";

const SITE_URL = "https://latticeplugins.com";
const SLUG = "/blog/woocommerce-dropshipping-vat-invoices";

export const metadata: Metadata = {
  title: "WooCommerce Dropshipping VAT Invoices for Supplier, Shipping, and Refund Workflows",
  description:
    "A buyer-intent guide for WooCommerce dropshipping stores that need VAT invoices for supplier references, shipping evidence, customer PDFs, refunds, credit notes, and accountant exports.",
  alternates: {
    canonical: `${SITE_URL}${SLUG}`,
  },
  openGraph: {
    title: "WooCommerce dropshipping VAT invoice workflow",
    description:
      "Use this invoice plugin checklist before scaling a WooCommerce dropshipping store with EU VAT fields, supplier references, blind shipping, refunds, credit notes, and accounting handoff.",
    url: `${SITE_URL}${SLUG}`,
    siteName: "Lattice Plugins",
    type: "article",
  },
};

const workflowChecks = [
  {
    title: "Supplier and fulfillment references must not disappear after payment",
    detail:
      "Dropshipping stores often rely on supplier order IDs, tracking references, SKU mappings, warehouse notes, and shipping handoff data. If those details stay outside the invoice record, support and accounting cannot explain what was fulfilled.",
    buyerQuestion: "Can the invoice workflow store supplier reference, tracking status, SKU mapping, and fulfillment context with the WooCommerce order?",
  },
  {
    title: "Customer invoices should show the store seller, not the supplier confusion",
    detail:
      "A customer buys from the WooCommerce store, but the goods may ship from a supplier or warehouse. The PDF should make the seller-of-record, billing address, VAT details, and shipping facts clear without exposing irrelevant supplier admin.",
    buyerQuestion: "Can the plugin keep customer-facing invoice data clean while preserving supplier evidence for internal export?",
  },
  {
    title: "Cross-border VAT and reverse-charge cases need a repeatable field checklist",
    detail:
      "Dropshipping can involve EU customers, non-EU suppliers, imported goods, B2B VAT numbers, and marketplace-style seller questions. A generic PDF receipt does not prove the tax decision or capture VAT metadata for an accountant.",
    buyerQuestion: "Can checkout and order metadata capture VAT number, country, exemption/reverse-charge note, and accounting evidence before the PDF is generated?",
  },
  {
    title: "Refunds, reships, and supplier failures need credit-note logic",
    detail:
      "Lost parcels, damaged goods, out-of-stock supplier cancellations, and partial refunds create correction cases. The safest workflow ties replacement invoices and credit notes to the original order instead of overwriting the invoice PDF.",
    buyerQuestion: "Can refunds, reships, retained charges, and credit notes stay connected to the original invoice number?",
  },
];

const scenarios = [
  {
    title: "EU B2B dropshipping store selling niche products",
    pain: "Business customers ask for VAT invoices with company details, VAT number, PO reference, and tracking evidence, while supplier IDs live in a separate fulfillment tool.",
    lattice:
      "Collect B2B fields at checkout, store supplier reference metadata on the order, attach invoice PDFs to paid order emails, and retain accountant-ready export fields.",
  },
  {
    title: "Consumer dropshipping store with frequent refunds and reships",
    pain: "Support issues refunds when suppliers miss delivery windows, but the invoice trail does not explain partial refunds, replacements, or credit notes.",
    lattice:
      "Use refund-linked credit notes and status-specific invoice records so customer service, finance, and the buyer can see the correction trail.",
  },
  {
    title: "Store using multiple suppliers or warehouses",
    pain: "One WooCommerce order can contain products from different suppliers, split shipments, and separate tracking events, which makes a single generic PDF too vague for internal reconciliation.",
    lattice:
      "Keep customer invoice PDFs simple while saving supplier, warehouse, SKU, shipment, and export metadata for internal accountant handoff.",
  },
];

const setupFields = [
  "Company name, VAT/BTW number, billing country, and invoice email",
  "Supplier order ID, warehouse, SKU mapping, and product source",
  "Tracking number, carrier, ship date, and delivery status",
  "Seller-of-record wording and customer-facing legal details",
  "PO/reference field for B2B buyers",
  "VAT rate, reverse-charge reason, exemption note, or import context",
  "Refund, reship, cancellation, and credit-note relation",
  "Accountant export status and retained PDF download link",
];

const faq = [
  {
    q: "What should a WooCommerce dropshipping invoice plugin handle?",
    a: "Prioritize VAT/BTW customer fields, seller-of-record clarity, supplier and fulfillment references, retained invoice PDFs, email attachments, My Account downloads, refund-linked credit notes, and export fields for accountant reconciliation.",
  },
  {
    q: "Do dropshipping invoices need supplier information on the customer PDF?",
    a: "Usually not all supplier data should be customer-facing. The invoice should show the store's correct seller and tax details, while supplier IDs, warehouse notes, and fulfillment evidence can stay in internal invoice/order metadata for support and accounting.",
  },
  {
    q: "Can Lattice Invoices qualify a dropshipping workflow before purchase?",
    a: "Yes. The early-access path is a €49 fit review: send store URL, countries sold into, supplier setup, VAT field needs, shipping/refund examples, and accountant export requirements so Lattice can confirm whether the workflow is a fit.",
  },
  {
    q: "What should I send for a dropshipping invoice review?",
    a: "Send your store URL, product/supplier model, countries sold into, B2B/B2C mix, required VAT fields, supplier order references, tracking workflow, refund/reship examples, and the export or PDF evidence your accountant needs.",
  },
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "WooCommerce dropshipping VAT invoices for supplier, shipping, and refund workflows",
  description:
    "A buyer-intent guide for WooCommerce dropshipping stores evaluating invoice plugins for supplier references, VAT fields, shipping evidence, credit notes, and accounting exports.",
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
  "mailto:support@latticeplugins.com?subject=WooCommerce%20dropshipping%20VAT%20invoice%20workflow%20review&body=Hi%20Lattice%2C%0A%0AI%20want%20a%20WooCommerce%20dropshipping%20invoice%20workflow%20review.%0A%0AStore%20URL%3A%20%0AProducts%20and%20supplier%20model%3A%20%0ACountries%20sold%20into%3A%20%0AB2B%2FB2C%20mix%3A%20%0AVAT%2FBTW%20fields%20needed%3A%20%0ASupplier%20order%20ID%2Fwarehouse%20references%20needed%3A%20%0ATracking%2Fcarrier%20data%20needed%20on%20orders%3A%20%0ARefund%2Freship%2Fcredit-note%20cases%3A%20%0AAccountant%20export%20fields%3A%20";

export default function WooCommerceDropshippingVatInvoicesPage() {
  return (
    <main className="min-h-screen bg-slate-50">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <section className="bg-gradient-to-br from-slate-950 via-emerald-950 to-blue-900 text-white">
        <div className="max-w-5xl mx-auto px-6 py-16 lg:py-20">
          <p className="uppercase tracking-[0.3em] text-sm text-emerald-200 mb-4">Dropshipping VAT invoices</p>
          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
            WooCommerce dropshipping VAT invoices for supplier, shipping, and refund workflows.
          </h1>
          <p className="text-xl text-emerald-50 leading-relaxed max-w-3xl mb-8">
            Dropshipping stores need invoices that explain the customer sale, VAT details, seller-of-record, fulfillment references, tracking evidence, supplier issues, refunds, and credit notes without creating manual admin for every exception.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href={mailto} className="bg-green-400 text-slate-950 px-8 py-4 rounded-xl font-semibold hover:bg-green-300 transition shadow-lg text-center">
              Request €49 dropshipping invoice review
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
              <h2 className="text-3xl font-bold mb-4">Why dropshipping invoice workflows break inside WooCommerce</h2>
              <p className="text-slate-700 leading-relaxed mb-4">
                A dropshipping order is not just a customer payment. It can include supplier references, split fulfillment, delayed tracking, import context, refunds, reships, and B2B invoice requests. If the invoice plugin only prints order totals, support still has to rebuild the real transaction history from emails and supplier dashboards.
              </p>
              <p className="text-slate-700 leading-relaxed">
                Lattice Invoices is positioned for WooCommerce stores that need workflow fit before purchase: the €49 early-access review checks whether VAT fields, supplier references, shipping evidence, credit-note cases, and accounting export needs can be handled cleanly.
              </p>
            </div>

            <div className="bg-emerald-50 border border-emerald-100 rounded-2xl p-8">
              <h2 className="text-3xl font-bold mb-5">Dropshipping invoice plugin purchase checklist</h2>
              <div className="space-y-4">
                {workflowChecks.map((item) => (
                  <div key={item.title} className="bg-white rounded-xl border border-emerald-100 p-5">
                    <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                    <p className="text-slate-700 leading-relaxed mb-2">{item.detail}</p>
                    <p className="text-slate-600 leading-relaxed"><strong>Ask before buying:</strong> {item.buyerQuestion}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-2xl border shadow-sm p-8">
              <h2 className="text-3xl font-bold mb-5">Three dropshipping workflows to test before choosing a plugin</h2>
              <div className="grid gap-4">
                {scenarios.map((item) => (
                  <div key={item.title} className="border rounded-xl p-5">
                    <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                    <p className="text-slate-700 leading-relaxed mb-2"><strong>Risk:</strong> {item.pain}</p>
                    <p className="text-slate-700 leading-relaxed"><strong>Lattice direction:</strong> {item.lattice}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-2xl border shadow-sm p-8">
              <h2 className="text-3xl font-bold mb-4">Invoice fields dropshipping stores should capture before the PDF is generated</h2>
              <p className="text-slate-700 leading-relaxed mb-5">
                The best moment to capture invoice and fulfillment context is before payment or before the supplier order is marked complete. If VAT data, supplier references, and refund reasons are added later, finance has to reconstruct the order from third-party tools.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {setupFields.map((field) => (
                  <div key={field} className="bg-slate-50 border rounded-xl p-4 text-slate-700">
                    ✓ {field}
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-slate-950 text-white rounded-2xl p-8">
              <h2 className="text-3xl font-bold mb-4">Turn dropshipping invoice uncertainty into a purchase-ready setup brief</h2>
              <p className="text-slate-200 leading-relaxed mb-6">
                If a dropshipping store already spends time fixing missing VAT details, supplier evidence, refund explanations, or lost invoice PDFs, the €49 review creates a concise setup brief before the buyer commits to the invoice workflow.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href={mailto} className="bg-green-400 text-slate-950 px-6 py-3 rounded-xl font-semibold text-center hover:bg-green-300 transition">
                  Send dropshipping invoice fit request
                </a>
                <Link href="/tools/woocommerce-invoice-setup-brief" className="border border-white/20 px-6 py-3 rounded-xl font-semibold text-center hover:bg-white/10 transition">
                  Generate setup brief first
                </Link>
              </div>
            </div>

            <div className="bg-white rounded-2xl border shadow-sm p-8">
              <h2 className="text-3xl font-bold mb-5">Dropshipping invoice FAQ</h2>
              <div className="space-y-5">
                {faq.map((item) => (
                  <div key={item.q} className="border-b pb-5 last:border-b-0 last:pb-0">
                    <h3 className="text-xl font-bold mb-2">{item.q}</h3>
                    <p className="text-slate-700 leading-relaxed">{item.a}</p>
                  </div>
                ))}
              </div>
            </div>
          </article>

          <aside className="space-y-5">
            <div className="bg-white border rounded-2xl p-6 shadow-sm sticky top-6">
              <h2 className="text-2xl font-bold mb-3">Need dropshipping VAT invoices?</h2>
              <p className="text-slate-700 mb-5">
                Send your supplier, tracking, VAT, refund, and PDF requirements. Lattice will qualify whether the invoice workflow is a fit before purchase.
              </p>
              <a href={mailto} className="block text-center bg-blue-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-blue-700 transition mb-3">
                Request €49 dropshipping review
              </a>
              <Link href="/demo/lattice-invoices" className="block text-center border border-slate-200 px-6 py-3 rounded-xl font-semibold hover:border-blue-400 transition mb-3">
                View invoice demo
              </Link>
              <Link href="/blog/woocommerce-marketplace-vat-invoices" className="block text-center border border-slate-200 px-6 py-3 rounded-xl font-semibold hover:border-blue-400 transition mb-3">
                Marketplace VAT invoice guide
              </Link>
              <Link href="/blog/woocommerce-invoice-export-accounting" className="block text-center border border-slate-200 px-6 py-3 rounded-xl font-semibold hover:border-blue-400 transition">
                Accounting export guide
              </Link>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}
