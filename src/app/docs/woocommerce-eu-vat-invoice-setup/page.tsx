import type { Metadata } from "next";
import Link from "next/link";

const SITE_URL = "https://latticeplugins.com";

export const metadata: Metadata = {
  title: "WooCommerce EU VAT Invoice Setup Guide — Lattice Plugins",
  description:
    "A practical setup guide for WooCommerce stores that need EU VAT/BTW invoice fields, sequential invoice numbers, PDF delivery, refund credit notes, and checkout-ready B2B billing.",
  alternates: {
    canonical: `${SITE_URL}/docs/woocommerce-eu-vat-invoice-setup`,
  },
  openGraph: {
    title: "WooCommerce EU VAT Invoice Setup Guide",
    description:
      "Use this guide to prepare a WooCommerce store for EU VAT invoices, B2B billing fields, invoice PDFs, and credit notes.",
    url: `${SITE_URL}/docs/woocommerce-eu-vat-invoice-setup`,
    siteName: "Lattice Plugins",
    type: "article",
  },
};

const setupChecks = [
  {
    title: "Checkout fields",
    items: [
      "Company name is visible and required for B2B orders",
      "VAT/BTW number field is stored on the order, not only in a note",
      "Separate invoice email field exists when accounts payable differs from buyer email",
      "Billing country, address, and tax class are captured before payment",
    ],
  },
  {
    title: "Invoice numbering",
    items: [
      "Use one sequence for paid invoices, for example INV-2026-000001",
      "Do not reuse WooCommerce order IDs as the only invoice number",
      "Store invoice date separately from order creation date",
      "Lock the invoice number after creation so refunds do not change history",
    ],
  },
  {
    title: "PDF delivery",
    items: [
      "Attach invoice PDF to processing/completed order emails",
      "Allow customers to download invoices from My Account",
      "Keep PDF storage private and tied to the order owner",
      "Use a clear filename such as invoice-2026-000148.pdf",
    ],
  },
  {
    title: "Refunds and credit notes",
    items: [
      "Create a credit-note number when a refund is issued",
      "Link the credit note back to the original invoice and order",
      "Show negative VAT and totals clearly on the credit note",
      "Attach the credit note to refund emails when possible",
    ],
  },
];

const mistakes = [
  "Putting VAT numbers in order notes where they are hard to export and easy to miss.",
  "Generating invoice numbers only when the customer asks for a PDF later.",
  "Letting a refund edit the original invoice instead of creating a separate credit note.",
  "Using a generic contact-form workaround for B2B invoice details after checkout.",
  "Making customers email support because invoice downloads are not available in My Account.",
];

const implementationPlan = [
  {
    step: "1",
    title: "Audit the checkout",
    text: "Place a test order as a business customer and write down every invoice field that is missing before payment. If the buyer must email details later, the checkout is not invoice-ready.",
  },
  {
    step: "2",
    title: "Decide the legal numbering format",
    text: "Choose the prefix and yearly sequence before launch. A predictable format such as INV-2026-000001 is easier for customers, bookkeepers, and support than order IDs alone.",
  },
  {
    step: "3",
    title: "Map order data to invoice data",
    text: "Make sure VAT rate, VAT amount, customer VAT number, invoice date, invoice number, billing company, and refund relationship are separate order metadata fields.",
  },
  {
    step: "4",
    title: "Test email and download flow",
    text: "Complete one paid order and one refunded order. Confirm that the invoice and credit note are attached to the expected emails and visible to the customer later.",
  },
];

const faq = [
  {
    q: "Is this a legal tax advice guide?",
    a: "No. It is a practical WooCommerce setup guide. Store owners still need to confirm their invoice, VAT, and bookkeeping requirements with an accountant or tax professional.",
  },
  {
    q: "Why not just use WooCommerce order IDs?",
    a: "Order IDs are useful internally, but invoice workflows usually need their own locked sequence, invoice date, and refund credit-note relationship. That keeps customer documents and bookkeeping exports cleaner.",
  },
  {
    q: "What is the Lattice product path for this?",
    a: "Lattice is turning this buyer problem into the Lattice Invoices workflow: EU VAT/BTW checkout fields, invoice PDFs, customer downloads, refund credit notes, and WooCommerce-native order metadata.",
  },
  {
    q: "Can I request early access?",
    a: "Yes. Send your store URL, country, B2B/B2C mix, desired invoice-number format, required VAT fields, and whether you need credit notes for refunds.",
  },
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "How to set up WooCommerce EU VAT invoices",
  description:
    "A practical WooCommerce setup guide for EU VAT invoice fields, invoice numbering, PDF delivery, and refund credit notes.",
  totalTime: "PT45M",
  supply: [
    { "@type": "HowToSupply", name: "WooCommerce store" },
    { "@type": "HowToSupply", name: "VAT/BTW invoice requirements" },
  ],
  step: implementationPlan.map((item) => ({
    "@type": "HowToStep",
    name: item.title,
    text: item.text,
    url: `${SITE_URL}/docs/woocommerce-eu-vat-invoice-setup#step-${item.step}`,
  })),
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

export default function WooCommerceEuVatInvoiceSetupGuide() {
  return (
    <main className="min-h-screen bg-slate-50">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <section className="bg-gradient-to-br from-slate-950 via-blue-950 to-indigo-900 text-white">
        <div className="max-w-5xl mx-auto px-6 py-16 lg:py-20">
          <p className="uppercase tracking-[0.3em] text-sm text-blue-200 mb-4">WooCommerce invoice setup guide</p>
          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
            How to set up EU VAT invoices for WooCommerce without creating support tickets.
          </h1>
          <p className="text-xl text-blue-50 leading-relaxed max-w-3xl mb-8">
            Use this checklist to prepare a WooCommerce checkout for EU B2B invoice buyers: VAT/BTW fields,
            sequential invoice numbers, PDF attachments, My Account downloads, and refund credit notes.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="mailto:support@latticeplugins.com?subject=WooCommerce%20EU%20VAT%20invoice%20setup&body=Hi%20Lattice%2C%0A%0AI%20need%20help%20with%20EU%20VAT%20invoices%20for%20my%20WooCommerce%20store.%20My%20store%20URL%20is%3A%20"
              className="bg-green-500 text-white px-8 py-4 rounded-xl font-semibold hover:bg-green-400 transition shadow-lg text-center"
            >
              Request invoice setup help
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
              <h2 className="text-3xl font-bold mb-4">Invoice-ready WooCommerce checklist</h2>
              <p className="text-slate-700 leading-relaxed mb-6">
                A store is invoice-ready when a business buyer can enter the required details before payment,
                receive a correct invoice without contacting support, and download the document again later.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {setupChecks.map((group) => (
                  <div key={group.title} className="rounded-xl border border-slate-200 bg-slate-50 p-5">
                    <h3 className="text-xl font-bold mb-3">{group.title}</h3>
                    <ul className="space-y-2">
                      {group.items.map((item) => (
                        <li key={item} className="flex gap-2 text-slate-700">
                          <span className="text-green-600 font-bold">✓</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-2xl border shadow-sm p-8">
              <h2 className="text-3xl font-bold mb-6">Implementation plan</h2>
              <div className="space-y-5">
                {implementationPlan.map((item) => (
                  <div key={item.step} id={`step-${item.step}`} className="flex gap-4 rounded-xl border border-slate-200 p-5">
                    <div className="h-10 w-10 shrink-0 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold">
                      {item.step}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                      <p className="text-slate-700 leading-relaxed">{item.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-2xl border shadow-sm p-8">
              <h2 className="text-3xl font-bold mb-4">Common mistakes that create buyer friction</h2>
              <p className="text-slate-700 leading-relaxed mb-5">
                These mistakes are small inside the admin, but they create emails, manual corrections, and lower trust
                for business customers who expected a professional invoice immediately after purchase.
              </p>
              <div className="space-y-3">
                {mistakes.map((mistake) => (
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
              <h2 className="text-2xl font-bold mb-3">Need this in your store?</h2>
              <p className="text-slate-700 mb-5">
                This guide is also a qualification path for Lattice Invoices early access. Send the setup details now,
                then move to the paid workflow once the store requirements are confirmed.
              </p>
              <a
                href="mailto:support@latticeplugins.com?subject=Lattice%20Invoices%20early%20access&body=Hi%20Lattice%2C%0A%0AI%20want%20early%20access%20to%20Lattice%20Invoices.%20My%20WooCommerce%20store%20is%3A%20"
                className="block text-center bg-blue-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-blue-700 transition mb-3"
              >
                Request early access
              </a>
              <Link
                href="/product/lattice-commerce-suite"
                className="block text-center border border-slate-200 px-6 py-3 rounded-xl font-semibold hover:border-blue-400 transition mb-3"
              >
                View WooCommerce suite
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
                Read refund credit-note guide
              </Link>
              <Link
                href="/blog/woocommerce-vat-number-checkout-field"
                className="block text-center border border-slate-200 px-6 py-3 rounded-xl font-semibold hover:border-blue-400 transition mb-3"
              >
                VAT number field guide
              </Link>
              <Link
                href="/blog/woocommerce-reverse-charge-invoices"
                className="block text-center border border-slate-200 px-6 py-3 rounded-xl font-semibold hover:border-blue-400 transition"
              >
                Reverse-charge invoice guide
              </Link>
              <div className="border-t mt-6 pt-6 space-y-3 text-sm text-slate-600">
                <div>✓ Buyer-intent guide for WooCommerce invoice searches</div>
                <div>✓ Clear early-access CTA</div>
                <div>✓ Internal links to the Lattice invoice offer and shop</div>
              </div>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}
