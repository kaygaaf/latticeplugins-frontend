import type { Metadata } from "next";
import Link from "next/link";

const SITE_URL = "https://latticeplugins.com";
const PAGE_URL = `${SITE_URL}/blog/woocommerce-pdf-invoices-packing-slips-alternative`;

export const metadata: Metadata = {
  title: "WooCommerce PDF Invoices & Packing Slips Alternative for EU VAT Stores",
  description:
    "A buyer-intent alternative checklist for WooCommerce stores that outgrow basic PDF invoices and need VAT/BTW fields, credit notes, reverse charge, customer downloads, and accountant exports.",
  alternates: {
    canonical: PAGE_URL,
  },
  openGraph: {
    title: "WooCommerce PDF Invoices & Packing Slips alternative for EU VAT stores",
    description:
      "Compare a basic PDF invoice workflow against the EU VAT invoice workflow Lattice Invoices is building for B2B WooCommerce stores.",
    url: PAGE_URL,
    siteName: "Lattice Plugins",
    type: "article",
  },
};

const mailto =
  "mailto:support@latticeplugins.com?subject=WooCommerce%20PDF%20invoice%20alternative%20-%20Lattice%20Invoices&body=Hi%20Lattice%2C%0A%0AI%20am%20looking%20for%20a%20WooCommerce%20PDF%20invoice%20alternative%20for%20EU%20VAT%20workflows.%0A%0AStore%20URL%3A%20%0ACountry%3A%20%0ACurrent%20invoice%20plugin%3A%20%0AB2B%20or%20B2C%3A%20%0AVAT%2FBTW%20number%20fields%20needed%3A%20%0ACredit%20notes%20needed%3A%20%0AReverse%20charge%20needed%3A%20%0AAccounting%20export%20needed%3A%20";

const gapRows = [
  {
    need: "VAT/BTW data before payment",
    basicPdf: "Often depends on standard billing fields or a separate checkout-field plugin.",
    latticePath: "Treat company name, VAT/BTW number, invoice email, and PO/reference fields as part of the invoice workflow.",
  },
  {
    need: "Reverse-charge evidence",
    basicPdf: "May require manual template edits, snippets, or separate tax-rule logic.",
    latticePath: "Store VAT treatment on the order and surface reverse-charge wording on the invoice and export.",
  },
  {
    need: "Credit notes for refunds",
    basicPdf: "Refund PDFs can be possible, but many stores still correct invoices manually.",
    latticePath: "Keep the issued invoice intact and create refund-linked credit notes with a clean audit trail.",
  },
  {
    need: "Customer self-service",
    basicPdf: "Invoice attachment is useful, but lost invoices still become support tickets.",
    latticePath: "Make protected My Account invoice and credit-note downloads a first-class purchase promise.",
  },
  {
    need: "Accountant handoff",
    basicPdf: "The PDF exists, but month-end still needs spreadsheets for VAT ID, paid date, refunds, and PDF links.",
    latticePath: "Keep invoice number, VAT evidence, payment status, credit-note references, and PDF URLs export-ready.",
  },
];

const migrationSteps = [
  "Export your current invoice number range and identify whether WooCommerce order IDs are being used as invoice numbers.",
  "List every VAT/BTW field a B2B buyer needs before checkout, including company, VAT number, PO/reference, and invoice email.",
  "Run a refund test and check whether a separate credit note is created or the issued invoice is edited.",
  "Ask your accountant which month-end fields they still clean manually: VAT ID, country, reverse charge, paid date, PDF URL, credit note, or payment method.",
  "Send those findings through the Lattice Invoices early-access CTA before replacing a working PDF plugin.",
];

const fitSignals = [
  {
    title: "Stay with a basic PDF invoice plugin if…",
    bullets: [
      "You sell mostly domestic B2C orders.",
      "Customers rarely ask for VAT-number corrections.",
      "Refunds do not require separate credit notes.",
      "Your accountant is happy with the current export.",
    ],
  },
  {
    title: "Consider Lattice Invoices early access if…",
    bullets: [
      "You sell to EU B2B buyers and need VAT/BTW fields before payment.",
      "Reverse-charge wording or VAT-exempt invoices are part of the workflow.",
      "Refunds, partial refunds, or corrections create manual finance work.",
      "Month-end handoff still depends on screenshots, spreadsheets, or support tickets.",
    ],
  },
];

const faq = [
  {
    q: "Is Lattice Invoices a direct replacement for every PDF invoice plugin?",
    a: "No. The strongest fit is not generic PDF generation; it is EU VAT workflow coverage around VAT/BTW fields, reverse charge, credit notes, customer downloads, and accounting handoff.",
  },
  {
    q: "Should I remove my current invoice plugin today?",
    a: "Not automatically. First map your current invoice numbers, PDF history, VAT fields, and refund documents. Early access is best used to qualify whether switching reduces manual work instead of creating migration risk.",
  },
  {
    q: "What makes an alternative worth paying for?",
    a: "The product should save repeated invoice-correction time, reduce support tickets, and produce cleaner evidence for finance. If it only changes the PDF template, the replacement may not be worth the migration.",
  },
  {
    q: "Can this help stores using bank transfer or Net 30?",
    a: "Yes, those stores often need proforma/payment-request handling, final paid invoices, due dates, reminders, and reconciliation evidence in addition to a PDF attachment.",
  },
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "WooCommerce PDF Invoices & Packing Slips alternative for EU VAT stores",
  description:
    "A buyer-intent guide for WooCommerce stores comparing basic PDF invoice plugins against EU VAT invoice workflows with VAT fields, credit notes, reverse charge, and exports.",
  mainEntityOfPage: PAGE_URL,
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

export default function WooCommercePdfInvoicesPackingSlipsAlternativePage() {
  return (
    <main className="min-h-screen bg-slate-50">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <section className="bg-gradient-to-br from-slate-950 via-blue-950 to-emerald-900 text-white">
        <div className="max-w-5xl mx-auto px-6 py-16 lg:py-20">
          <p className="uppercase tracking-[0.3em] text-sm text-emerald-200 mb-4">WooCommerce invoice alternative</p>
          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
            Looking for a WooCommerce PDF invoices alternative? Check the EU VAT gaps first.
          </h1>
          <p className="text-xl text-blue-50 leading-relaxed max-w-3xl mb-8">
            Basic PDF invoice plugins solve document delivery. EU B2B stores often need more: VAT/BTW checkout fields, reverse-charge evidence, credit notes, protected downloads, and exports your accountant can trust.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href={mailto} className="bg-emerald-500 text-white px-8 py-4 rounded-xl font-semibold hover:bg-emerald-400 transition shadow-lg text-center">
              Request a €49 alternative review
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
              <h2 className="text-3xl font-bold mb-4">The real question is not “can it make a PDF?”</h2>
              <p className="text-slate-700 leading-relaxed mb-4">
                If your current setup already attaches invoice PDFs to WooCommerce emails, replacing it only makes sense when another part of the workflow is costing money: missing VAT numbers, manual reverse-charge wording, credit notes after refunds, or accountant exports that still need cleanup.
              </p>
              <p className="text-slate-700 leading-relaxed">
                Lattice Invoices is the product path for stores where invoice support has become a sales and finance bottleneck. Use this checklist to decide whether to keep your current PDF tool, add a VAT workflow layer, or request early access to the Lattice workflow.
              </p>
            </div>

            <div className="bg-white rounded-2xl border shadow-sm p-8 overflow-hidden">
              <h2 className="text-3xl font-bold mb-6">Basic PDF plugin vs EU VAT invoice workflow</h2>
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-slate-100 text-slate-700">
                      <th className="p-4 rounded-l-xl">Store need</th>
                      <th className="p-4">Basic PDF invoice workflow</th>
                      <th className="p-4 rounded-r-xl">Lattice Invoices product path</th>
                    </tr>
                  </thead>
                  <tbody>
                    {gapRows.map((row) => (
                      <tr key={row.need} className="border-b border-slate-100 align-top">
                        <td className="p-4 font-semibold text-slate-900">{row.need}</td>
                        <td className="p-4 text-slate-600">{row.basicPdf}</td>
                        <td className="p-4 text-slate-800">{row.latticePath}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {fitSignals.map((card) => (
                <div key={card.title} className="bg-white rounded-2xl border shadow-sm p-6">
                  <h2 className="text-2xl font-bold mb-4">{card.title}</h2>
                  <ul className="space-y-3 text-slate-700">
                    {card.bullets.map((bullet) => (
                      <li key={bullet} className="flex gap-2">
                        <span className="text-emerald-600 font-bold">✓</span>
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <div className="bg-emerald-50 border border-emerald-100 rounded-2xl p-8">
              <h2 className="text-3xl font-bold mb-5">Migration checklist before switching invoice plugins</h2>
              <ol className="space-y-4 text-slate-700 list-decimal pl-5">
                {migrationSteps.map((step) => (
                  <li key={step} className="pl-2 leading-relaxed">{step}</li>
                ))}
              </ol>
            </div>

            <div className="bg-slate-950 text-white rounded-2xl p-8">
              <h2 className="text-3xl font-bold mb-4">Want a store-specific answer?</h2>
              <p className="text-slate-200 leading-relaxed mb-6">
                Send the current plugin name, country, VAT fields, refund needs, and accounting export pain. The early-access review turns the “which invoice plugin should I use?” question into a concrete purchase decision.
              </p>
              <a href={mailto} className="inline-flex bg-emerald-500 text-white px-7 py-4 rounded-xl font-semibold hover:bg-emerald-400 transition">
                Request the €49 alternative review
              </a>
            </div>

            <div className="bg-white rounded-2xl border shadow-sm p-8">
              <h2 className="text-3xl font-bold mb-6">FAQ</h2>
              <div className="space-y-5">
                {faq.map((item) => (
                  <div key={item.q}>
                    <h3 className="font-semibold text-lg text-slate-900 mb-2">{item.q}</h3>
                    <p className="text-slate-700 leading-relaxed">{item.a}</p>
                  </div>
                ))}
              </div>
            </div>
          </article>

          <aside className="space-y-6">
            <div className="bg-white rounded-2xl border shadow-sm p-6 sticky top-6">
              <p className="uppercase tracking-[0.2em] text-xs text-emerald-700 font-semibold mb-2">Buyer path</p>
              <h2 className="text-2xl font-bold mb-3">If the PDF exists but support is still busy, qualify the workflow.</h2>
              <p className="text-slate-700 mb-5">
                The best invoice-plugin alternative is the one that removes invoice corrections, refund confusion, and accountant cleanup — not just the one with another template.
              </p>
              <a href={mailto} className="block text-center bg-blue-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-blue-700 transition mb-3">
                Send current invoice setup
              </a>
              <Link href="/blog/woocommerce-invoice-plugin-comparison" className="block text-center border border-slate-200 px-6 py-3 rounded-xl font-semibold hover:border-blue-400 transition mb-3">
                Compare invoice plugin types
              </Link>
              <Link href="/blog/woocommerce-invoice-plugin-migration" className="block text-center border border-slate-200 px-6 py-3 rounded-xl font-semibold hover:border-blue-400 transition mb-3">
                Read migration checklist
              </Link>
              <Link href="/docs/woocommerce-eu-vat-invoice-setup" className="block text-center border border-slate-200 px-6 py-3 rounded-xl font-semibold hover:border-blue-400 transition">
                Open setup guide
              </Link>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}
