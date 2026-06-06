import type { Metadata } from "next";
import Link from "next/link";

const SITE_URL = "https://latticeplugins.com";

export const metadata: Metadata = {
  title: "WooCommerce EU VAT Invoices — Lattice Plugins",
  description:
    "A buyer-focused guide and landing page for WooCommerce stores that need EU VAT/BTW invoices, business customer fields, credit notes, and downloadable invoice PDFs.",
  alternates: {
    canonical: `${SITE_URL}/woocommerce-eu-vat-invoices`,
  },
  openGraph: {
    title: "WooCommerce EU VAT Invoices",
    description:
      "Turn WooCommerce orders into EU-ready invoices with VAT/BTW fields, invoice numbering, credit notes, customer downloads, and email attachments.",
    url: `${SITE_URL}/woocommerce-eu-vat-invoices`,
    siteName: "Lattice Plugins",
    type: "website",
  },
};

const checklist = [
  "Collect company name, VAT/BTW number, and billing details before payment",
  "Generate invoice numbers in a clean, sequential format",
  "Attach invoice PDFs to WooCommerce customer emails",
  "Give customers a My Account area for downloading invoices",
  "Create credit notes when orders are refunded",
  "Keep order, invoice, and tax data connected for bookkeeping exports",
];

const setupSteps = [
  {
    title: "1. Capture the right checkout fields",
    text: "Add company name, VAT/BTW number, PO reference, and invoice email fields to WooCommerce billing so business customers do not need to send details after payment.",
  },
  {
    title: "2. Generate invoice numbers from order status",
    text: "Use a predictable prefix and sequence such as INV-2026-000148 when an order is paid, then keep that number attached to the WooCommerce order record.",
  },
  {
    title: "3. Attach PDFs to the right emails",
    text: "Send invoices with processing/completed order emails and credit notes with refund emails, while also storing files for customer downloads later.",
  },
  {
    title: "4. Keep accounting export clean",
    text: "Store VAT rate, VAT amount, invoice date, customer VAT number, refund relationship, and order total as separate fields so bookkeeping export is not a manual cleanup job.",
  },
];

const buyerSignals = [
  "You sell to EU B2B customers and get repeated invoice correction emails",
  "Your WooCommerce checkout accepts payment but does not collect VAT/BTW data cleanly",
  "Refunds require manual credit notes outside WooCommerce",
  "Customers ask for invoices long after the original order email",
  "Your accountant needs order-level VAT evidence instead of screenshots and spreadsheets",
];

const comparisonRows = [
  ["VAT/BTW checkout fields", "Generic billing notes or add-on fields", "Dedicated business billing fields tied to the order"],
  ["Invoice PDF", "Manual export or separate PDF plugin", "Generated from WooCommerce order data"],
  ["Credit notes", "Created manually after refunds", "Refund-linked credit-note workflow"],
  ["Customer access", "Support ticket when invoice is lost", "Download from My Account"],
  ["Sales friction", "Unclear whether B2B checkout is supported", "Clear EU invoice promise before purchase"],
];

const features = [
  {
    title: "EU VAT/BTW customer fields",
    text: "B2B customers need a place to enter their company details and VAT number. The invoice workflow is designed around those fields instead of generic checkout notes.",
  },
  {
    title: "Invoice and credit-note documents",
    text: "A store owner should be able to generate invoices for paid orders and credit notes for refunds without copying order data into another tool.",
  },
  {
    title: "PDF delivery and downloads",
    text: "Customers expect the invoice in their order email and later in My Account. That removes support tickets and makes repeat purchases easier.",
  },
  {
    title: "WooCommerce-native workflow",
    text: "The sales process stays inside WooCommerce: order status changes, customer records, tax settings, and payment flows stay connected.",
  },
];

const roiCards = [
  {
    metric: "5–10 min",
    label: "saved per invoice request",
    text: "No more copying order totals into a separate PDF tool when a customer asks for a business invoice.",
  },
  {
    metric: "0 inbox loops",
    label: "for missing VAT details",
    text: "The checkout collects company, VAT/BTW, and invoice email details before the payment is placed.",
  },
  {
    metric: "1 workflow",
    label: "for invoices and refunds",
    text: "Paid orders create invoices; refunded orders get credit-note records tied back to the original order.",
  },
];

const demoScreens = [
  {
    title: "B2B checkout fields",
    eyebrow: "Before payment",
    bullets: ["Company name", "VAT/BTW number", "Invoice email", "PO/reference field"],
  },
  {
    title: "Invoice admin panel",
    eyebrow: "Inside the order",
    bullets: ["Invoice number", "Invoice date", "PDF status", "Regenerate action"],
  },
  {
    title: "Customer downloads",
    eyebrow: "After purchase",
    bullets: ["My Account invoice link", "Email attachment", "Refund credit note", "Private file access"],
  },
];

const paidDeliverables = [
  "WooCommerce plugin license for the invoice workflow",
  "EU VAT/BTW checkout-field setup checklist",
  "Invoice numbering format review before activation",
  "PDF invoice and credit-note workflow validation",
  "One store-specific setup reply for early-access buyers",
];

const faqs = [
  {
    q: "Is this aimed at Dutch and EU WooCommerce stores?",
    a: "Yes. The offer is written for EU stores that need VAT/BTW-friendly invoices, B2B billing details, customer invoice downloads, and a practical WooCommerce workflow.",
  },
  {
    q: "Does this replace accounting software?",
    a: "No. It is intended to create order-level WooCommerce invoices and credit notes. Your accountant or bookkeeping system remains the final source for tax filing.",
  },
  {
    q: "What should I buy today?",
    a: "The public checkout currently sells the official Lattice products. If you need the invoice workflow specifically, use the early-access CTA so the product can be matched to your WooCommerce setup before purchase.",
  },
  {
    q: "Can this be used with the existing WooCommerce tax settings?",
    a: "That is the intended product direction: invoices should reuse the VAT rates and totals already calculated by WooCommerce instead of asking the store owner to enter tax data twice.",
  },
  {
    q: "What information should I send for early access?",
    a: "Send your store URL, country, whether you sell B2B/B2C, required VAT fields, invoice-number format, and whether you need credit notes for refunds. That is enough to qualify the setup.",
  },
];

const structuredData = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "Lattice Invoices",
  applicationCategory: "BusinessApplication",
  operatingSystem: "WordPress, WooCommerce",
  description:
    "WooCommerce EU VAT invoice workflow for VAT/BTW checkout fields, invoice PDFs, credit notes, customer downloads, and email attachments.",
  offers: {
    "@type": "Offer",
    price: "49",
    priceCurrency: "EUR",
    availability: "https://schema.org/PreOrder",
    url: `${SITE_URL}/woocommerce-eu-vat-invoices`,
  },
  featureList: checklist,
};

export default function WooCommerceEuVatInvoicesPage() {
  return (
    <main className="min-h-screen bg-slate-50">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <section className="bg-gradient-to-br from-slate-950 via-blue-950 to-indigo-900 text-white">
        <div className="max-w-6xl mx-auto px-6 py-16 lg:py-20 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div>
            <p className="uppercase tracking-[0.3em] text-sm text-blue-200 mb-4">WooCommerce EU invoicing</p>
            <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
              EU VAT invoices for WooCommerce without manual admin work.
            </h1>
            <p className="text-xl text-blue-50 leading-relaxed mb-8">
              Lattice Invoices is the focused WooCommerce workflow for VAT/BTW details, invoice PDFs,
              credit notes, customer downloads, and invoice-ready order emails.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="mailto:support@latticeplugins.com?subject=Lattice%20Invoices%20early%20access&body=Hi%20Lattice%2C%0A%0AI%20want%20early%20access%20to%20Lattice%20Invoices.%20My%20WooCommerce%20store%20is%3A%20"
                className="bg-green-500 text-white px-8 py-4 rounded-xl font-semibold hover:bg-green-400 transition shadow-lg text-center"
              >
                Request early access
              </a>
              <Link
                href="/product/lattice-commerce-suite"
                className="bg-white/10 border border-white/20 text-white px-8 py-4 rounded-xl font-semibold hover:bg-white/15 transition text-center"
              >
                View WooCommerce suite
              </Link>
            </div>
            <p className="text-sm text-blue-100 mt-4">
              Public checkout remains available for the official 7 Lattice products while invoice early access is qualified manually.
            </p>
          </div>

          <div className="bg-white text-slate-900 rounded-2xl shadow-2xl p-6 lg:p-8">
            <div className="flex items-center justify-between border-b pb-4 mb-5">
              <div>
                <p className="text-sm uppercase tracking-widest text-slate-500">Invoice preview</p>
                <h2 className="text-2xl font-bold">Lattice Invoices</h2>
              </div>
              <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-semibold">EU-ready</span>
            </div>
            <div className="space-y-4 text-sm">
              <div className="grid grid-cols-2 gap-3">
                <div className="bg-slate-50 p-4 rounded-xl">
                  <p className="text-slate-500">Invoice #</p>
                  <p className="font-bold">2026-000148</p>
                </div>
                <div className="bg-slate-50 p-4 rounded-xl">
                  <p className="text-slate-500">VAT/BTW</p>
                  <p className="font-bold">NL123456789B01</p>
                </div>
              </div>
              <div className="border rounded-xl overflow-hidden">
                <div className="grid grid-cols-3 bg-slate-100 font-semibold text-slate-600">
                  <span className="p-3">Item</span>
                  <span className="p-3 text-right">VAT</span>
                  <span className="p-3 text-right">Total</span>
                </div>
                <div className="grid grid-cols-3 border-t">
                  <span className="p-3">WooCommerce order</span>
                  <span className="p-3 text-right">21%</span>
                  <span className="p-3 text-right font-semibold">€49.00</span>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-3 text-center">
                <div className="border rounded-xl p-3">PDF attached</div>
                <div className="border rounded-xl p-3">My Account download</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-14">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            <div className="bg-white rounded-2xl border shadow-sm p-8">
              <h2 className="text-3xl font-bold mb-4">The invoice problem this solves</h2>
              <p className="text-slate-700 leading-relaxed mb-4">
                Many WooCommerce stores can take payment, but still handle invoices manually: copying order data,
                answering customer invoice requests, correcting missing VAT details, and creating credit notes after refunds.
              </p>
              <p className="text-slate-700 leading-relaxed">
                This page turns that buyer-intent problem into a clear product path: a WooCommerce-native invoice workflow
                that reduces admin time and makes a store look more professional to EU business buyers.
              </p>
            </div>

            <div className="bg-white rounded-2xl border shadow-sm p-8">
              <h2 className="text-3xl font-bold mb-6">Invoice readiness checklist</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {checklist.map((item) => (
                  <div key={item} className="flex gap-3 p-4 rounded-xl bg-slate-50 border border-slate-100">
                    <span className="text-green-600 font-bold">✓</span>
                    <span className="text-slate-800">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-2xl border shadow-sm p-8">
              <p className="text-sm uppercase tracking-[0.25em] text-green-700 font-semibold mb-2">Revenue argument</p>
              <h2 className="text-3xl font-bold mb-4">Why this is worth fixing before the next B2B order</h2>
              <p className="text-slate-700 leading-relaxed mb-6">
                The sales pitch is simple: if even a few business buyers need corrected invoices each month, a €49 invoice workflow pays for itself by removing manual support work and making the checkout feel trustworthy.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {roiCards.map((card) => (
                  <div key={card.metric} className="rounded-xl border border-green-100 bg-green-50 p-5">
                    <div className="text-3xl font-bold text-green-700 mb-1">{card.metric}</div>
                    <div className="font-semibold text-slate-900 mb-3">{card.label}</div>
                    <p className="text-sm text-slate-700 leading-relaxed">{card.text}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-2xl border shadow-sm p-8">
              <p className="text-sm uppercase tracking-[0.25em] text-blue-600 font-semibold mb-2">Product demo</p>
              <h2 className="text-3xl font-bold mb-4">What the buyer gets inside WooCommerce</h2>
              <p className="text-slate-700 leading-relaxed mb-6">
                Until real screenshots are captured from the production plugin UI, these interface cards explain the three screens the paid workflow must deliver. They make the offer concrete enough for early-access buyers to understand the outcome.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {demoScreens.map((screen) => (
                  <div key={screen.title} className="rounded-2xl border border-slate-200 overflow-hidden bg-slate-50">
                    <div className="bg-slate-900 text-white p-4">
                      <p className="text-xs uppercase tracking-widest text-blue-200 mb-1">{screen.eyebrow}</p>
                      <h3 className="font-bold text-lg">{screen.title}</h3>
                    </div>
                    <div className="p-4 space-y-2">
                      {screen.bullets.map((bullet) => (
                        <div key={bullet} className="flex items-center gap-2 rounded-lg bg-white border border-slate-100 px-3 py-2 text-sm text-slate-700">
                          <span className="h-2 w-2 rounded-full bg-blue-500" />
                          <span>{bullet}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-2xl border shadow-sm p-8">
              <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-6">
                <div>
                  <p className="text-sm uppercase tracking-[0.25em] text-blue-600 font-semibold mb-2">Setup guide</p>
                  <h2 className="text-3xl font-bold">How the WooCommerce invoice workflow should run</h2>
                </div>
                <a
                  href="mailto:support@latticeplugins.com?subject=Lattice%20Invoices%20setup%20guide&body=Hi%20Lattice%2C%0A%0APlease%20send%20me%20the%20WooCommerce%20EU%20VAT%20invoice%20setup%20guide.%20My%20store%20URL%20is%3A%20"
                  className="inline-flex justify-center bg-slate-900 text-white px-5 py-3 rounded-xl font-semibold hover:bg-slate-800 transition"
                >
                  Ask for setup help
                </a>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {setupSteps.map((step) => (
                  <div key={step.title} className="rounded-xl border border-slate-200 bg-slate-50 p-5">
                    <h3 className="font-bold text-lg mb-2">{step.title}</h3>
                    <p className="text-slate-700 leading-relaxed">{step.text}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-2xl border shadow-sm p-8">
              <h2 className="text-3xl font-bold mb-4">When a WooCommerce store is ready for this</h2>
              <p className="text-slate-700 leading-relaxed mb-5">
                This landing page now qualifies buyers before they reach checkout. These are the strongest signals
                that a store owner is not just browsing plugins, but has a real invoice problem worth solving.
              </p>
              <div className="space-y-3">
                {buyerSignals.map((signal) => (
                  <div key={signal} className="flex gap-3 rounded-xl bg-green-50 border border-green-100 p-4">
                    <span className="text-green-700 font-bold">→</span>
                    <span className="text-slate-800">{signal}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-2xl border shadow-sm p-8 overflow-hidden">
              <h2 className="text-3xl font-bold mb-4">Manual invoices vs. Lattice Invoices</h2>
              <p className="text-slate-700 leading-relaxed mb-6">
                The offer is strongest when the buyer sees exactly what changes in their day-to-day WooCommerce process.
              </p>
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-slate-100 text-slate-700">
                      <th className="p-4 rounded-l-xl">Need</th>
                      <th className="p-4">Without a workflow</th>
                      <th className="p-4 rounded-r-xl">With Lattice Invoices</th>
                    </tr>
                  </thead>
                  <tbody>
                    {comparisonRows.map(([need, manual, lattice]) => (
                      <tr key={need} className="border-b border-slate-100">
                        <td className="p-4 font-semibold text-slate-900">{need}</td>
                        <td className="p-4 text-slate-600">{manual}</td>
                        <td className="p-4 text-slate-800">{lattice}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {features.map((feature) => (
                <div key={feature.title} className="bg-white rounded-2xl border shadow-sm p-6">
                  <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                  <p className="text-slate-700 leading-relaxed">{feature.text}</p>
                </div>
              ))}
            </div>

            <div className="bg-white rounded-2xl border shadow-sm p-8">
              <h2 className="text-3xl font-bold mb-6">FAQ</h2>
              <div className="space-y-5">
                {faqs.map((faq) => (
                  <div key={faq.q}>
                    <h3 className="font-semibold text-lg mb-2">{faq.q}</h3>
                    <p className="text-slate-700 leading-relaxed">{faq.a}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <aside className="space-y-6">
            <div className="bg-white rounded-2xl border shadow-sm p-6 sticky top-6">
              <div className="rounded-2xl bg-slate-900 text-white p-5 mb-6">
                <p className="text-sm uppercase tracking-widest text-blue-200 mb-2">Early-access price</p>
                <div className="flex items-end gap-2 mb-2">
                  <span className="text-4xl font-bold">€49</span>
                  <span className="text-slate-300 mb-1">one-time</span>
                </div>
                <p className="text-sm text-slate-200 leading-relaxed">
                  Qualified stores get a clear paid path before public catalog listing. No subscription promise, no vague “contact us” enterprise pricing.
                </p>
              </div>
              <h2 className="text-2xl font-bold mb-3">Early-access offer</h2>
              <p className="text-slate-700 mb-4">
                Need EU VAT/BTW invoices in WooCommerce? Send the store URL and required invoice fields. The next autonomous step is to turn qualified demand into the paid product listing.
              </p>
              <ul className="space-y-2 mb-5 text-sm text-slate-700">
                {paidDeliverables.map((item) => (
                  <li key={item} className="flex gap-2">
                    <span className="text-green-600 font-bold">✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <a
                href="mailto:support@latticeplugins.com?subject=Lattice%20Invoices%20early%20access%20-%20%E2%82%AC49%20license&body=Hi%20Lattice%2C%0A%0AI%20want%20early%20access%20to%20Lattice%20Invoices%20at%20the%20%E2%82%AC49%20license%20price.%0A%0AStore%20URL%3A%20%0ACountry%3A%20%0AB2B%20or%20B2C%3A%20%0AVAT%2FBTW%20fields%20needed%3A%20%0AInvoice%20number%20format%3A%20%0ACredit%20notes%20needed%3A%20"
                className="block text-center bg-blue-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-blue-700 transition mb-3"
              >
                Request €49 early access
              </a>
              <Link
                href="/docs/woocommerce-eu-vat-invoice-setup"
                className="block text-center border border-slate-200 px-6 py-3 rounded-xl font-semibold hover:border-blue-400 transition mb-3"
              >
                Read setup guide
              </Link>
              <Link
                href="/blog/woocommerce-vat-invoice-plugin-eu"
                className="block text-center border border-slate-200 px-6 py-3 rounded-xl font-semibold hover:border-blue-400 transition mb-3"
              >
                Compare invoice plugin requirements
              </Link>
              <Link
                href="/blog/woocommerce-credit-notes-refunds"
                className="block text-center border border-slate-200 px-6 py-3 rounded-xl font-semibold hover:border-blue-400 transition mb-3"
              >
                Read credit-note refund guide
              </Link>
              <Link
                href="/blog/woocommerce-vat-number-checkout-field"
                className="block text-center border border-slate-200 px-6 py-3 rounded-xl font-semibold hover:border-blue-400 transition mb-3"
              >
                VAT number field guide
              </Link>
              <Link
                href="/blog/woocommerce-reverse-charge-invoices"
                className="block text-center border border-slate-200 px-6 py-3 rounded-xl font-semibold hover:border-blue-400 transition mb-3"
              >
                Reverse-charge invoice guide
              </Link>
              <Link
                href="/blog/woocommerce-invoice-numbering"
                className="block text-center border border-slate-200 px-6 py-3 rounded-xl font-semibold hover:border-blue-400 transition mb-3"
              >
                Invoice numbering guide
              </Link>
              <Link
                href="/blog/woocommerce-pdf-invoice-email-attachments"
                className="block text-center border border-slate-200 px-6 py-3 rounded-xl font-semibold hover:border-blue-400 transition mb-3"
              >
                PDF email attachment guide
              </Link>
              <Link
                href="/blog/woocommerce-proforma-invoice"
                className="block text-center border border-slate-200 px-6 py-3 rounded-xl font-semibold hover:border-blue-400 transition mb-3"
              >
                Proforma invoice workflow guide
              </Link>
              <Link
                href="/blog/woocommerce-bank-transfer-invoice"
                className="block text-center border border-slate-200 px-6 py-3 rounded-xl font-semibold hover:border-blue-400 transition mb-3"
              >
                Bank transfer invoice guide
              </Link>
              <Link
                href="/blog/woocommerce-invoice-payment-reminders"
                className="block text-center border border-slate-200 px-6 py-3 rounded-xl font-semibold hover:border-blue-400 transition mb-3"
              >
                Invoice payment reminder guide
              </Link>
              <Link
                href="/blog/woocommerce-customer-invoice-downloads"
                className="block text-center border border-slate-200 px-6 py-3 rounded-xl font-semibold hover:border-blue-400 transition mb-3"
              >
                Customer invoice download guide
              </Link>
              <Link
                href="/blog/woocommerce-partial-payment-invoices"
                className="block text-center border border-slate-200 px-6 py-3 rounded-xl font-semibold hover:border-blue-400 transition mb-3"
              >
                Partial payment invoice guide
              </Link>
              <Link
                href="/blog/woocommerce-invoice-export-accounting"
                className="block text-center border border-slate-200 px-6 py-3 rounded-xl font-semibold hover:border-blue-400 transition mb-3"
              >
                Accounting export guide
              </Link>
              <Link
                href="/blog/woocommerce-invoice-approval-workflow"
                className="block text-center border border-slate-200 px-6 py-3 rounded-xl font-semibold hover:border-blue-400 transition mb-3"
              >
                B2B invoice approval workflow guide
              </Link>
              <Link
                href="/shop"
                className="block text-center border border-slate-200 px-6 py-3 rounded-xl font-semibold hover:border-blue-400 transition"
              >
                Browse current plugins
              </Link>
              <div className="border-t mt-6 pt-6 space-y-3 text-sm text-slate-600">
                <div>✓ Built for WooCommerce order workflows</div>
                <div>✓ EU VAT/BTW use case positioning</div>
                <div>✓ Clear path to paid listing once checkout is enabled</div>
              </div>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}
