import type { Metadata } from "next";
import Link from "next/link";

const SITE_URL = "https://latticeplugins.com";
const SLUG = "/blog/woocommerce-web-design-agency-invoices";
const PAGE_URL = `${SITE_URL}${SLUG}`;

export const metadata: Metadata = {
  title: "WooCommerce Web Design Agency Invoices: Deposits, VAT, and Project PDFs",
  description:
    "Buyer-intent guide for web design, SEO, and digital agencies selling deposits, retainers, audits, hosting, or care plans through WooCommerce and needing VAT-ready invoice PDFs.",
  alternates: {
    canonical: PAGE_URL,
  },
  openGraph: {
    title: "WooCommerce web design agency invoices",
    description:
      "How agencies can capture project references, deposits, retainers, VAT fields, invoice emails, credit notes, and accountant handoff in WooCommerce.",
    url: PAGE_URL,
    siteName: "Lattice Plugins",
    type: "article",
  },
};

const buyerProblems = [
  "A client pays a website deposit online and later asks for project, PO, or VAT details on the invoice",
  "Design, SEO, hosting, care-plan, and ad-management line items need clearer service-period labels",
  "Finance wants invoices sent to accounts payable instead of the marketing contact who placed the order",
  "Scope changes, cancelled retainers, and duplicate payments need credit notes instead of edited PDFs",
  "The accountant needs invoice numbers, paid dates, VAT totals, customer details, and PDF links without digging through order notes",
];

const workflowSteps = [
  {
    title: "1. Capture agency billing metadata before payment",
    text: "Collect company name, VAT/BTW number, invoice email, PO/reference, project name, service period, and billing contact while the customer is still in checkout.",
  },
  {
    title: "2. Separate deposits, retainers, and recurring care plans",
    text: "Keep website deposits, milestone balances, monthly support, hosting, SEO retainers, ads management, and one-off audits readable on the invoice PDF.",
  },
  {
    title: "3. Attach final PDFs after payment",
    text: "Generate a sequential invoice number after paid/processing status, attach the PDF to WooCommerce emails, and expose private customer downloads in My Account.",
  },
  {
    title: "4. Use credit notes for scope corrections",
    text: "When a retainer is reduced, a deposit is partially refunded, or a project is cancelled, issue a linked credit note with the reason and original invoice reference.",
  },
];

const fields = [
  ["Project / campaign name", "Lets the client match the invoice to a website build, SEO project, ad campaign, or maintenance package."],
  ["PO / cost centre", "Often required by larger clients before accounts payable will release payment."],
  ["Invoice email", "Routes PDFs to finance rather than only the founder, marketer, or project stakeholder."],
  ["Service period", "Clarifies whether the invoice covers a monthly care plan, quarterly SEO retainer, hosting renewal, or one-off audit."],
  ["VAT/BTW number", "Keeps B2B tax details in the order before the invoice PDF is generated."],
  ["Credit-note reason", "Documents cancelled work, reduced retainers, duplicate payments, or corrected billing details."],
];

const scenarios = [
  {
    title: "Website deposit and milestone balance",
    weak: "The first payment says only “website package”, then the client asks the agency to edit a PDF manually.",
    strong: "Checkout captures project name, VAT number, invoice email, deposit/balance context, and PO details before the PDF is issued.",
  },
  {
    title: "Monthly care plan or SEO retainer",
    weak: "Recurring orders renew, but the invoice does not show the covered month, domain, campaign, or service level.",
    strong: "The invoice stores service period, plan name, customer VAT fields, customer download link, and accountant-ready export data.",
  },
  {
    title: "Refunded scope or cancelled retainer",
    weak: "The agency edits the original invoice or sends a separate manual document that no longer matches the WooCommerce order.",
    strong: "The refund creates a linked credit note with its own number, reason, VAT correction, and original invoice reference.",
  },
];

const scoring = [
  { signal: "You sell website deposits, care plans, SEO retainers, hosting, audits, or ad-management packages through WooCommerce", score: "+2" },
  { signal: "Business clients ask for PO numbers, VAT IDs, project names, or invoice emails after checkout", score: "+2" },
  { signal: "Invoices need service periods or campaign/project references", score: "+1" },
  { signal: "Refunds, cancellations, or scope changes need credit notes", score: "+2" },
  { signal: "Your bookkeeper reconciles WooCommerce orders from screenshots, emails, or manually renamed PDFs", score: "+1" },
];

const faq = [
  {
    q: "Can WooCommerce sell agency services and still produce proper VAT invoices?",
    a: "Yes, but service businesses usually need more than a standard order receipt: VAT/BTW fields, project references, invoice emails, service periods, final invoice PDFs, credit notes, and accounting handoff.",
  },
  {
    q: "Should project details be printed on every agency invoice?",
    a: "Only finance-safe details should be printed. The invoice should show project/campaign reference, service period, PO, and billing fields, while sensitive strategy notes stay out of the tax invoice.",
  },
  {
    q: "Where does Lattice Invoices fit for agencies?",
    a: "Lattice Invoices is a focused €49 early-access WooCommerce invoice workflow for EU VAT/BTW fields, PDF invoices, credit notes, customer downloads, and accountant handoff. This guide qualifies agency workflows before purchase.",
  },
  {
    q: "What should an agency send for a fit review?",
    a: "Send store URL, country, services sold, B2B/B2C split, project/service-period fields needed, PO requirements, invoice-number format, refund/credit-note needs, and accounting export requirements.",
  },
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "WooCommerce web design agency invoices: deposits, VAT, and project PDFs",
  description:
    "Buyer-intent guide for web design, SEO, and digital agencies that need VAT-ready invoice PDFs, project metadata, credit notes, and customer downloads in WooCommerce.",
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

const mailto =
  "mailto:support@latticeplugins.com?subject=WooCommerce%20web%20design%20agency%20invoice%20workflow%20review&body=Hi%20Lattice%2C%0A%0AI%20want%20to%20check%20whether%20Lattice%20Invoices%20fits%20a%20web%20design%2C%20SEO%2C%20or%20digital%20agency%20WooCommerce%20workflow.%0A%0AStore%20URL%3A%20%0ACountry%3A%20%0AAgency%20services%20sold%3A%20%0AB2B%2FB2C%20split%3A%20%0AProject%2Fservice-period%20fields%20needed%3A%20%0APO%2Fcost-centre%20fields%20needed%3A%20%0AVAT%2FBTW%20fields%20needed%3A%20%0AInvoice%20number%20format%3A%20%0ARefund%2Fcredit-note%20needs%3A%20%0AAccounting%20export%20needs%3A%20";

export default function WooCommerceWebDesignAgencyInvoicesPage() {
  return (
    <main className="min-h-screen bg-slate-50">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <section className="bg-gradient-to-br from-slate-950 via-indigo-950 to-blue-900 text-white">
        <div className="max-w-5xl mx-auto px-6 py-16 lg:py-20">
          <p className="uppercase tracking-[0.3em] text-sm text-blue-200 mb-4">Agency invoice workflow</p>
          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
            WooCommerce invoices for web design agencies, retainers, deposits, and project work.
          </h1>
          <p className="text-xl text-blue-50 leading-relaxed max-w-3xl mb-8">
            If your agency sells website deposits, SEO retainers, care plans, hosting, audits, or ad-management packages through WooCommerce, invoices need project context, VAT details, PO fields, PDF delivery, and credit notes.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href={mailto} className="bg-blue-400 text-slate-950 px-8 py-4 rounded-xl font-semibold hover:bg-blue-300 transition shadow-lg text-center">
              Request €49 agency invoice review
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
              <h2 className="text-3xl font-bold mb-4">Why agencies get invoice support requests after payment</h2>
              <p className="text-slate-700 leading-relaxed mb-5">
                Agency orders are rarely a simple product purchase. One WooCommerce payment can represent a project deposit, milestone, monthly retainer, hosting renewal, audit, care plan, or ad-management package.
              </p>
              <div className="space-y-3">
                {buyerProblems.map((problem) => (
                  <div key={problem} className="flex gap-3 rounded-xl bg-blue-50 border border-blue-100 p-4">
                    <span className="text-blue-700 font-bold">→</span>
                    <span className="text-slate-800">{problem}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-2xl border shadow-sm p-8">
              <h2 className="text-3xl font-bold mb-6">The agency invoice workflow to require</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {workflowSteps.map((step) => (
                  <div key={step.title} className="rounded-xl border border-slate-200 bg-slate-50 p-5">
                    <h3 className="font-bold text-lg mb-2">{step.title}</h3>
                    <p className="text-slate-700 leading-relaxed">{step.text}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-2xl border shadow-sm p-8 overflow-hidden">
              <h2 className="text-3xl font-bold mb-4">Fields an agency invoice plugin should support</h2>
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-slate-100 text-slate-700">
                      <th className="p-4 rounded-l-xl">Field</th>
                      <th className="p-4 rounded-r-xl">Why it matters for agency invoices</th>
                    </tr>
                  </thead>
                  <tbody>
                    {fields.map(([field, reason]) => (
                      <tr key={field} className="border-b last:border-b-0">
                        <td className="p-4 font-semibold text-slate-900">{field}</td>
                        <td className="p-4 text-slate-700">{reason}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div className="grid gap-4">
              {scenarios.map((item) => (
                <div key={item.title} className="bg-white rounded-2xl border shadow-sm p-6">
                  <h2 className="text-2xl font-bold mb-3">{item.title}</h2>
                  <p className="text-slate-700 leading-relaxed mb-2"><strong>Manual invoice risk:</strong> {item.weak}</p>
                  <p className="text-slate-700 leading-relaxed"><strong>Lattice-ready workflow:</strong> {item.strong}</p>
                </div>
              ))}
            </div>

            <div className="rounded-2xl bg-slate-950 text-white p-8">
              <p className="uppercase tracking-[0.25em] text-sm text-blue-200 mb-3">Decision shortcut</p>
              <h2 className="text-3xl font-bold mb-4">Should an agency request €49 early access?</h2>
              <p className="text-slate-200 leading-relaxed mb-5">
                Score the signals below. A score of 4+ means invoice support is likely already costing the agency or client more than a one-time €49 workflow review.
              </p>
              <div className="space-y-3 mb-6">
                {scoring.map((item) => (
                  <div key={item.signal} className="flex gap-3 rounded-xl bg-white/10 border border-white/10 p-4">
                    <span className="text-blue-300 font-bold min-w-10">{item.score}</span>
                    <span className="text-slate-100">{item.signal}</span>
                  </div>
                ))}
              </div>
              <a href={mailto} className="inline-flex bg-blue-400 text-slate-950 px-6 py-3 rounded-xl font-semibold hover:bg-blue-300 transition">
                Send agency invoice fit request
              </a>
            </div>

            <div className="bg-white rounded-2xl border shadow-sm p-8">
              <h2 className="text-3xl font-bold mb-6">Agency invoice FAQ</h2>
              <div className="space-y-5">
                {faq.map((item) => (
                  <div key={item.q}>
                    <h3 className="font-bold text-lg mb-2">{item.q}</h3>
                    <p className="text-slate-700 leading-relaxed">{item.a}</p>
                  </div>
                ))}
              </div>
            </div>
          </article>

          <aside className="space-y-5">
            <div className="bg-white rounded-2xl border shadow-sm p-6 sticky top-6">
              <p className="text-sm uppercase tracking-[0.2em] text-blue-700 font-semibold mb-2">Lattice Invoices</p>
              <h2 className="text-2xl font-bold mb-3">€49 agency invoice workflow review</h2>
              <p className="text-slate-700 mb-4">
                Send your store, project-field needs, VAT requirements, and credit-note scenarios. The goal is to qualify whether Lattice Invoices can remove agency invoice support loops.
              </p>
              <a href={mailto} className="block text-center bg-blue-600 text-white px-5 py-3 rounded-xl font-semibold hover:bg-blue-700 transition mb-3">
                Request €49 agency invoice review
              </a>
              <Link href="/tools/woocommerce-invoice-setup-brief" className="block text-center border border-slate-200 px-5 py-3 rounded-xl font-semibold hover:border-blue-400 transition mb-3">
                Generate setup brief
              </Link>
              <Link href="/demo/lattice-invoices" className="block text-center border border-slate-200 px-5 py-3 rounded-xl font-semibold hover:border-blue-400 transition mb-3">
                View invoice demo
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
