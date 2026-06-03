import type { Metadata } from "next";
import Link from "next/link";

const SITE_URL = "https://latticeplugins.com";

export const metadata: Metadata = {
  title: "WooCommerce Invoice Payment Reminders — EU VAT Workflow Guide",
  description:
    "How WooCommerce B2B stores can send invoice payment reminders without breaking EU VAT invoice numbering, proforma workflows, or customer trust.",
  alternates: {
    canonical: `${SITE_URL}/blog/woocommerce-invoice-payment-reminders`,
  },
  openGraph: {
    title: "WooCommerce Invoice Payment Reminders",
    description:
      "A buyer-intent workflow guide for WooCommerce stores that need bank-transfer invoice follow-ups, proforma reminders, and paid-invoice delivery.",
    url: `${SITE_URL}/blog/woocommerce-invoice-payment-reminders`,
    siteName: "Lattice Plugins",
    type: "article",
  },
};

const reminderChecklist = [
  "Separate unpaid proforma/payment requests from final VAT invoices",
  "Collect VAT/BTW number, company name, PO number, and invoice email before sending reminders",
  "Use reminder wording that references the WooCommerce order and payment instructions clearly",
  "Avoid reserving final invoice numbers for unpaid bank-transfer orders unless your accountant requires it",
  "Send the final PDF invoice only when the order is paid or manually marked processing/completed",
  "Keep refund credit notes linked to the paid invoice, not to the unpaid reminder email",
];

const timingRows = [
  ["Immediately after order", "Send bank-transfer instructions or proforma payment request", "Creates a payment trail without prematurely issuing a final VAT invoice"],
  ["2–3 days unpaid", "Gentle reminder with order number, amount, bank details, and PO/reference field", "Reduces support emails from finance teams that missed the first email"],
  ["7 days unpaid", "Second reminder with expiry/cancellation policy", "Clarifies whether stock, access, or license delivery is reserved"],
  ["After payment", "Final invoice PDF attached to paid-order email", "Keeps invoice numbering, VAT evidence, and customer download access clean"],
  ["After refund", "Credit note referencing the final invoice", "Prevents refund paperwork from drifting into a separate spreadsheet"],
];

const scenarios = [
  {
    title: "EU B2B buyer needs internal approval",
    pain: "The buyer needs a document before paying, but the store does not want to issue the final invoice too early.",
    workflow: "Send a proforma/payment request first, then generate the final VAT invoice after payment.",
  },
  {
    title: "Bank transfer order stays pending",
    pain: "WooCommerce shows a pending order while support manually chases the customer.",
    workflow: "Use reminder timing tied to order status, amount, payment instructions, and buyer reference fields.",
  },
  {
    title: "Finance asks for the invoice again",
    pain: "Customers reply to old emails because the paid invoice is not easy to find.",
    workflow: "Attach the paid invoice to email and keep the PDF downloadable in My Account.",
  },
];

const faq = [
  {
    q: "Should WooCommerce send payment reminders for unpaid invoice orders?",
    a: "Yes, especially for B2B bank-transfer orders. The safer workflow is to send reminders for a proforma or payment request while keeping the final VAT invoice for the paid order stage.",
  },
  {
    q: "Can a payment reminder use the same number as the final invoice?",
    a: "Usually it should not. Many stores keep a separate proforma/payment-request reference until payment is received, then issue the final sequential invoice number when the order is paid.",
  },
  {
    q: "What should a WooCommerce invoice reminder include?",
    a: "Order number, buyer company name, amount due, currency, VAT/BTW details where relevant, bank transfer instructions, PO/reference, due date, and a link or attachment for the payment request.",
  },
  {
    q: "How does Lattice Invoices help with reminders?",
    a: "Lattice Invoices is positioned around the missing workflow layer: invoice-ready checkout fields, proforma/payment request handling, final PDF delivery, customer downloads, and credit-note links for refunds.",
  },
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "WooCommerce invoice payment reminders for EU VAT stores",
  description:
    "A practical workflow guide for WooCommerce stores that send invoice payment reminders for bank-transfer and B2B orders.",
  mainEntityOfPage: `${SITE_URL}/blog/woocommerce-invoice-payment-reminders`,
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
  "mailto:support@latticeplugins.com?subject=Lattice%20Invoices%20payment%20reminder%20workflow&body=Hi%20Lattice%2C%0A%0AI%20need%20a%20WooCommerce%20invoice%20payment%20reminder%20workflow.%0A%0AStore%20URL%3A%20%0ACountry%3A%20%0AB2B%20or%20B2C%3A%20%0ABank%20transfer%20or%20invoice%20payment%20method%3A%20%0AVAT%2FBTW%20fields%20needed%3A%20%0AProforma%20before%20payment%3A%20%0AFinal%20invoice%20timing%3A%20";

export default function WooCommerceInvoicePaymentRemindersPage() {
  return (
    <main className="min-h-screen bg-slate-50">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <section className="bg-gradient-to-br from-slate-950 via-blue-950 to-emerald-900 text-white">
        <div className="max-w-5xl mx-auto px-6 py-16 lg:py-20">
          <p className="uppercase tracking-[0.3em] text-sm text-emerald-200 mb-4">WooCommerce invoice payment reminders</p>
          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
            Payment reminders should close invoices, not create accounting cleanup.
          </h1>
          <p className="text-xl text-emerald-50 leading-relaxed max-w-3xl mb-8">
            EU B2B buyers often need a payment request before they can pay by bank transfer. If WooCommerce sends generic
            reminders without invoice-ready data, support still has to fix VAT numbers, resend PDFs, and explain which
            document is final.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href={mailto} className="bg-emerald-500 text-white px-8 py-4 rounded-xl font-semibold hover:bg-emerald-400 transition shadow-lg text-center">
              Request invoice reminder early access
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
              <h2 className="text-3xl font-bold mb-4">The reminder email is where invoice mistakes become expensive.</h2>
              <p className="text-slate-700 leading-relaxed mb-4">
                A reminder looks simple: tell the customer to pay. But for WooCommerce B2B stores, that reminder often
                triggers accounting questions: Is this a final invoice or a payment request? Which VAT number is on file?
                Where is the PO number? Will the final PDF arrive after payment?
              </p>
              <p className="text-slate-700 leading-relaxed">
                Lattice Invoices is being shaped around that high-intent workflow: collect invoice-ready fields, send clean
                proforma/payment requests, follow up unpaid orders, and issue final invoice PDFs only at the correct moment.
              </p>
            </div>

            <div className="bg-white rounded-2xl border shadow-sm p-8">
              <h2 className="text-3xl font-bold mb-6">Payment reminder readiness checklist</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {reminderChecklist.map((item) => (
                  <div key={item} className="flex gap-3 p-4 rounded-xl bg-slate-50 border border-slate-100">
                    <span className="text-emerald-600 font-bold">✓</span>
                    <span className="text-slate-800">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-2xl border shadow-sm p-8 overflow-hidden">
              <h2 className="text-3xl font-bold mb-4">A cleaner WooCommerce reminder timeline</h2>
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-slate-100 text-slate-700">
                      <th className="p-4 rounded-l-xl">Moment</th>
                      <th className="p-4">What to send</th>
                      <th className="p-4 rounded-r-xl">Why it matters</th>
                    </tr>
                  </thead>
                  <tbody>
                    {timingRows.map(([moment, send, why]) => (
                      <tr key={moment} className="border-b border-slate-100">
                        <td className="p-4 font-semibold text-slate-900">{moment}</td>
                        <td className="p-4 text-slate-600">{send}</td>
                        <td className="p-4 text-slate-800">{why}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div className="bg-white rounded-2xl border shadow-sm p-8">
              <h2 className="text-3xl font-bold mb-6">Where payment reminders protect revenue</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                {scenarios.map((scenario) => (
                  <div key={scenario.title} className="rounded-xl border border-slate-200 bg-slate-50 p-5">
                    <h3 className="text-xl font-bold mb-3">{scenario.title}</h3>
                    <p className="text-slate-600 mb-3">Problem: {scenario.pain}</p>
                    <p className="font-semibold text-slate-900">Lattice path: {scenario.workflow}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-emerald-50 border border-emerald-100 rounded-2xl p-8">
              <h2 className="text-3xl font-bold mb-4">Early-access offer: €49 workflow review + plugin path</h2>
              <p className="text-slate-700 leading-relaxed mb-5">
                If your WooCommerce store already accepts invoice or bank-transfer payments, the highest-value early-access
                path is simple: send the current payment reminder flow, invoice timing, VAT field needs, and desired reminder
                schedule. Lattice will use that to prioritize the paid reminder workflow inside Lattice Invoices.
              </p>
              <a href={mailto} className="inline-flex bg-emerald-600 text-white px-7 py-3 rounded-xl font-semibold hover:bg-emerald-700 transition">
                Send my reminder workflow
              </a>
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
              <p className="text-sm uppercase tracking-[0.2em] text-emerald-700 font-semibold mb-2">Revenue workflow</p>
              <h2 className="text-2xl font-bold mb-3">Need invoice reminders for unpaid WooCommerce orders?</h2>
              <p className="text-slate-700 mb-5">
                Send store URL, country, payment method, reminder schedule, VAT/BTW fields, and whether you need proforma
                before payment. This is the next sellable €49 Lattice Invoices wedge.
              </p>
              <a href={mailto} className="block text-center bg-emerald-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-emerald-700 transition mb-3">
                Request reminder early access
              </a>
              <Link href="/blog/woocommerce-bank-transfer-invoice" className="block text-center border border-slate-200 px-6 py-3 rounded-xl font-semibold hover:border-emerald-400 transition mb-3">
                Bank transfer invoice guide
              </Link>
              <Link href="/blog/woocommerce-proforma-invoice" className="block text-center border border-slate-200 px-6 py-3 rounded-xl font-semibold hover:border-emerald-400 transition mb-3">
                Proforma workflow guide
              </Link>
              <Link href="/blog/woocommerce-invoice-numbering" className="block text-center border border-slate-200 px-6 py-3 rounded-xl font-semibold hover:border-emerald-400 transition mb-3">
                Invoice numbering guide
              </Link>
              <Link href="/docs/woocommerce-eu-vat-invoice-setup" className="block text-center border border-slate-200 px-6 py-3 rounded-xl font-semibold hover:border-emerald-400 transition mb-3">
                Setup guide
              </Link>
              <Link href="/woocommerce-eu-vat-invoices" className="block text-center border border-slate-200 px-6 py-3 rounded-xl font-semibold hover:border-emerald-400 transition">
                View invoice offer
              </Link>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}
