import type { Metadata } from "next";
import Link from "next/link";

const SITE_URL = "https://latticeplugins.com";
const SLUG = "/blog/woocommerce-dental-clinic-invoices";
const PAGE_URL = `${SITE_URL}${SLUG}`;

export const metadata: Metadata = {
  title: "WooCommerce Dental Clinic Invoices: VAT, Insurance, and PDFs",
  description:
    "Buyer-intent guide for dental clinics using WooCommerce for consults, deposits, memberships, whitening, retainers, or dental products: VAT fields, patient references, insurance details, PDF invoices, and credit notes.",
  alternates: {
    canonical: PAGE_URL,
  },
  openGraph: {
    title: "WooCommerce dental clinic invoices for VAT, insurance, and PDF workflow",
    description:
      "How dental clinics should collect patient and insurance invoice data, attach WooCommerce invoice PDFs, handle deposits, and create refund credit notes.",
    url: PAGE_URL,
    siteName: "Lattice Plugins",
    type: "article",
  },
};

const painPoints = [
  {
    title: "Patients ask for invoices after treatment or whitening deposits",
    detail:
      "Dental WooCommerce stores often sell consultation deposits, whitening packages, retainers, hygiene plans, emergency appointments, memberships, and dental products. A generic receipt rarely has the patient, treatment, and reimbursement context a customer needs later.",
    fix: "Capture patient reference, treatment category, appointment/deposit context, company details where needed, and invoice email before the WooCommerce invoice PDF is generated.",
  },
  {
    title: "Insurance and employer reimbursement need structured invoice fields",
    detail:
      "Patients may need an invoice for insurer reimbursement, employer benefits, flexible spending, or company-paid dental care. Support gets dragged into adding policy numbers, patient names, and finance emails after payment.",
    fix: "Collect insurance policy/claim reference, patient name or internal patient ID, invoice recipient, VAT/BTW details, and invoice email as order metadata instead of editing PDFs by hand.",
  },
  {
    title: "Refunds, changed appointments, and partial treatments create credit-note work",
    detail:
      "Cancelled appointments, changed treatment plans, returned dental products, or partial package refunds should not overwrite the original invoice once it was issued.",
    fix: "Create refund-linked credit notes with the original invoice number, refund reason, VAT totals, and patient/order context preserved for bookkeeping.",
  },
];

const featureRows = [
  ["Patient and treatment invoice fields", "Patient name or ID, appointment reference, treatment category, practitioner/location, package/deposit details, and invoice email should be collected before payment."],
  ["Insurance and reimbursement metadata", "Policy number, claim reference, recipient email, employer or insurer name, and reimbursement notes reduce post-payment correction requests."],
  ["B2B VAT / company billing", "Corporate dental benefits, employers, clinics, agencies, and self-employed buyers may need company name, VAT/BTW number, PO/reference, and accounts-payable contact."],
  ["PDF invoices in emails and My Account", "Patients should receive invoice PDFs automatically and be able to download them later without receptionist or support resend work."],
  ["Credit notes for refunds", "Cancelled appointments, changed treatment plans, returned products, and package adjustments need linked credit-note PDFs rather than edited original invoices."],
  ["Accounting handoff", "Invoice number, paid date, VAT rate, customer VAT ID, patient/order context, PDF URL, and credit-note relationship should be exportable for the bookkeeper."],
];

const scenarios = [
  {
    scenario: "Whitening or orthodontic deposit paid online",
    risk: "The deposit is paid, but the patient asks for a PDF with treatment details, patient name, and reimbursement context afterwards.",
    workflow: "Store treatment/deposit metadata before payment and generate a paid invoice PDF from the WooCommerce order.",
  },
  {
    scenario: "Employer or insurer reimburses the patient",
    risk: "Support manually edits PDFs to add policy numbers, invoice recipient emails, or company billing details.",
    workflow: "Collect insurance, employer, company, VAT, and invoice-email fields at checkout or order intake.",
  },
  {
    scenario: "Appointment cancellation or changed treatment plan",
    risk: "The clinic overwrites a previous invoice and loses a clean audit trail for refunds and VAT corrections.",
    workflow: "Issue a credit note linked to the original invoice, with reason and corrected totals retained.",
  },
  {
    scenario: "Dental products, retainers, or memberships sold through WooCommerce",
    risk: "Product invoices, renewal invoices, and refunds are mixed with treatment notes and become hard for the bookkeeper to reconcile.",
    workflow: "Keep product, membership, renewal, and appointment invoice sequences readable from WooCommerce order data.",
  },
];

const qualification = [
  { signal: "Patients request invoice PDFs with patient/treatment or reimbursement context every month", score: "+2" },
  { signal: "You sell appointment deposits, whitening, retainers, memberships, products, or treatment packages through WooCommerce", score: "+2" },
  { signal: "Insurance claim numbers, invoice emails, or company/VAT details are added manually after payment", score: "+2" },
  { signal: "Refunds, cancellations, or partial treatments require credit notes", score: "+2" },
  { signal: "Your bookkeeper needs VAT totals, invoice numbers, PDF links, and refund relationships", score: "+1" },
];

const internalLinks = [
  { href: "/woocommerce-eu-vat-invoices", label: "Lattice Invoices €49 early-access offer" },
  { href: "/demo/lattice-invoices", label: "View invoice workflow demo" },
  { href: "/tools/woocommerce-invoice-fit-check", label: "Score invoice workflow fit" },
  { href: "/tools/woocommerce-invoice-setup-brief", label: "Generate a setup brief" },
  { href: "/blog/woocommerce-invoice-plugin-for-clinics", label: "Clinic invoice workflow" },
  { href: "/blog/woocommerce-medical-supply-invoices", label: "Medical supply invoices" },
  { href: "/blog/woocommerce-veterinary-clinic-invoices", label: "Veterinary clinic invoice workflow" },
  { href: "/blog/woocommerce-credit-notes-refunds", label: "Credit notes for refunds" },
];

const faq = [
  {
    q: "Can dental clinics use WooCommerce for patient invoice PDFs?",
    a: "Yes, but the workflow should capture patient or treatment references, invoice recipient, insurance or reimbursement context, company/VAT fields where relevant, and credit-note data before the PDF is generated.",
  },
  {
    q: "Do dental invoices need insurance or patient metadata?",
    a: "If patients frequently ask support to add those details after payment, the safer workflow is to collect the metadata before invoice creation and keep it attached to the WooCommerce order.",
  },
  {
    q: "Where does Lattice Invoices fit for dental clinics?",
    a: "Lattice Invoices is positioned as a focused €49 WooCommerce EU invoice workflow for VAT fields, invoice PDFs, customer downloads, accountant handoff, and linked credit notes. Dental clinics can use the early-access review to confirm field and refund requirements before buying.",
  },
  {
    q: "What should a dental clinic send for the early-access review?",
    a: "Send the store URL, country, monthly invoice request volume, treatment/deposit/product types, patient or insurance fields needed, company/VAT fields, refund/credit-note workflow, and accounting export needs.",
  },
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "WooCommerce dental clinic invoices for VAT, insurance, and PDF workflow",
  description:
    "Buyer-intent WooCommerce invoice guide for dental clinics that need patient references, insurance metadata, VAT fields, PDF delivery, and credit notes.",
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
  "mailto:support@latticeplugins.com?subject=WooCommerce%20dental%20clinic%20invoice%20workflow%20review&body=Hi%20Lattice%2C%0A%0AI%20want%20to%20check%20whether%20Lattice%20Invoices%20fits%20a%20dental%20clinic%20WooCommerce%20workflow.%0A%0AStore%20URL%3A%20%0ACountry%3A%20%0ATreatments%2C%20deposits%2C%20memberships%2C%20or%20products%20sold%3A%20%0AMonthly%20patient%20invoice%20requests%3A%20%0APatient%2Ftreatment%20fields%20needed%3A%20%0AInsurance%20or%20reimbursement%20fields%20needed%3A%20%0ACompany%2FVAT%20fields%20needed%3A%20%0ARefund%2Fcredit-note%20needs%3A%20%0AAccounting%20export%20needs%3A%20";

export default function WooCommerceDentalClinicInvoicesPage() {
  return (
    <main className="min-h-screen bg-slate-50">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <section className="bg-gradient-to-br from-slate-950 via-cyan-950 to-teal-900 text-white">
        <div className="max-w-6xl mx-auto px-6 py-16 lg:py-20 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div>
            <p className="uppercase tracking-[0.3em] text-sm text-cyan-200 mb-4">Dental clinic invoice workflow</p>
            <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
              WooCommerce dental clinic invoices for patients, insurance, VAT, and PDFs.
            </h1>
            <p className="text-xl text-cyan-50 leading-relaxed mb-8">
              Dental clinics that sell consult deposits, whitening packages, retainers, memberships, or products through WooCommerce need more than a generic receipt: patient references, insurance metadata, VAT fields, invoice PDFs, refund credit notes, and bookkeeper-ready exports.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href={mailto} className="bg-cyan-400 text-slate-950 px-8 py-4 rounded-xl font-semibold hover:bg-cyan-300 transition shadow-lg text-center">
                Request €49 dental invoice review
              </a>
              <Link href="/woocommerce-eu-vat-invoices" className="bg-white/10 border border-white/20 text-white px-8 py-4 rounded-xl font-semibold hover:bg-white/15 transition text-center">
                View Lattice Invoices offer
              </Link>
            </div>
          </div>

          <div className="bg-white text-slate-900 rounded-2xl shadow-2xl p-6 lg:p-8">
            <p className="text-sm uppercase tracking-widest text-slate-500 mb-2">Buyer qualification</p>
            <h2 className="text-2xl font-bold mb-4">Should this dental clinic request the €49 early-access review?</h2>
            <div className="space-y-3">
              {qualification.map((item) => (
                <div key={item.signal} className="flex gap-3 items-start border rounded-xl p-4">
                  <span className="bg-cyan-100 text-cyan-700 px-3 py-1 rounded-full text-sm font-bold">{item.score}</span>
                  <p className="text-slate-700">{item.signal}</p>
                </div>
              ))}
            </div>
            <p className="text-sm text-slate-600 mt-5">
              Score 3+ points? The clinic probably needs a structured invoice workflow before support keeps editing PDFs manually.
            </p>
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-14">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <article className="lg:col-span-2 space-y-8">
            <div className="bg-white rounded-2xl border shadow-sm p-8">
              <h2 className="text-3xl font-bold mb-4">Why dental clinic invoices need patient context</h2>
              <p className="text-slate-700 leading-relaxed mb-4">
                WooCommerce can take the payment, but finance questions start afterwards: which patient, which treatment, which deposit, which insurer, which company, and which refund belongs to the original invoice? Dental invoice automation should answer those questions from order metadata.
              </p>
              <p className="text-slate-700 leading-relaxed">
                The safer purchase path is to map the fields and refund rules first, then use an invoice workflow that generates PDFs, sends them to patients, stores downloads, and keeps credit notes linked to the original order.
              </p>
            </div>

            <div className="grid gap-4">
              {painPoints.map((item) => (
                <div key={item.title} className="bg-white rounded-2xl border shadow-sm p-6">
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  <p className="text-slate-700 leading-relaxed mb-2">{item.detail}</p>
                  <p className="text-slate-800 leading-relaxed"><strong>Better workflow:</strong> {item.fix}</p>
                </div>
              ))}
            </div>

            <div className="bg-cyan-50 border border-cyan-100 rounded-2xl p-8">
              <h2 className="text-3xl font-bold mb-5">Feature checklist before choosing a dental invoice plugin</h2>
              <div className="overflow-x-auto">
                <table className="min-w-full text-left border-separate border-spacing-y-3">
                  <thead>
                    <tr className="text-sm uppercase tracking-widest text-cyan-800">
                      <th className="p-4 rounded-l-xl bg-white">Requirement</th>
                      <th className="p-4 rounded-r-xl bg-white">Why it matters for dental clinics</th>
                    </tr>
                  </thead>
                  <tbody>
                    {featureRows.map(([feature, reason]) => (
                      <tr key={feature} className="bg-white shadow-sm align-top">
                        <td className="p-4 rounded-l-xl font-semibold text-slate-900">{feature}</td>
                        <td className="p-4 rounded-r-xl text-slate-700">{reason}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div className="bg-white rounded-2xl border shadow-sm p-8">
              <h2 className="text-3xl font-bold mb-5">Dental clinic invoice scenarios</h2>
              <div className="grid gap-4">
                {scenarios.map((row) => (
                  <div key={row.scenario} className="border rounded-xl p-5">
                    <h3 className="text-xl font-bold mb-2">{row.scenario}</h3>
                    <p className="text-slate-700 leading-relaxed mb-2"><strong>Risk:</strong> {row.risk}</p>
                    <p className="text-slate-800 leading-relaxed"><strong>Better workflow:</strong> {row.workflow}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-slate-950 text-white rounded-2xl p-8">
              <h2 className="text-3xl font-bold mb-4">Fastest path to a purchase decision</h2>
              <p className="text-slate-200 leading-relaxed mb-6">
                If patient references, insurance fields, invoice emails, company VAT details, appointment deposits, refunds, and bookkeeper exports already create support work, send one structured fit-check email. Lattice can confirm whether the €49 early-access workflow is relevant before you stack separate PDF, checkout-field, and export add-ons.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href={mailto} className="bg-cyan-400 text-slate-950 px-7 py-3 rounded-xl font-semibold hover:bg-cyan-300 transition text-center">
                  Send dental invoice fit request
                </a>
                <Link href="/tools/woocommerce-invoice-setup-brief" className="bg-white/10 border border-white/20 px-7 py-3 rounded-xl font-semibold hover:bg-white/15 transition text-center">
                  Generate setup brief first
                </Link>
              </div>
            </div>

            <div className="bg-white rounded-2xl border shadow-sm p-8">
              <h2 className="text-3xl font-bold mb-5">FAQ</h2>
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

          <aside className="space-y-6">
            <div className="bg-white rounded-2xl border shadow-sm p-6 sticky top-6">
              <h2 className="text-xl font-bold mb-4">Dental invoice action links</h2>
              <a href={mailto} className="block text-center bg-cyan-600 text-white px-5 py-3 rounded-xl font-semibold hover:bg-cyan-700 transition mb-3">
                Request €49 dental invoice review
              </a>
              <Link href="/woocommerce-eu-vat-invoices" className="block text-center border border-slate-200 px-5 py-3 rounded-xl font-semibold hover:border-cyan-400 transition mb-3">
                View Lattice Invoices offer
              </Link>
              <Link href="/demo/lattice-invoices" className="block text-center border border-slate-200 px-5 py-3 rounded-xl font-semibold hover:border-cyan-400 transition mb-3">
                View invoice workflow demo
              </Link>
              <Link href="/tools/woocommerce-invoice-fit-check" className="block text-center border border-slate-200 px-5 py-3 rounded-xl font-semibold hover:border-cyan-400 transition">
                Score invoice fit
              </Link>
            </div>

            <div className="bg-white rounded-2xl border shadow-sm p-6">
              <h2 className="text-xl font-bold mb-4">Related invoice guides</h2>
              <div className="space-y-3">
                {internalLinks.map((link) => (
                  <Link key={link.href} href={link.href} className="block rounded-xl bg-slate-50 border border-slate-100 px-4 py-3 text-slate-700 hover:border-cyan-300 hover:text-cyan-700 transition">
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}
