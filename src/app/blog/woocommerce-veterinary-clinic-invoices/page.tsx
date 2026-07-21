import type { Metadata } from "next";
import Link from "next/link";

const SITE_URL = "https://latticeplugins.com";
const PAGE_URL = `${SITE_URL}/blog/woocommerce-veterinary-clinic-invoices`;

export const metadata: Metadata = {
  title: "WooCommerce Veterinary Clinic Invoices: VAT, Insurance, and PDFs",
  description:
    "Buyer-intent guide for veterinary clinics, animal hospitals, and pet-care stores using WooCommerce: VAT fields, pet/insurance metadata, treatment deposits, refunds, credit notes, and customer PDF invoices.",
  alternates: {
    canonical: PAGE_URL,
  },
  openGraph: {
    title: "WooCommerce veterinary clinic invoices",
    description:
      "How veterinary clinics should handle WooCommerce invoice PDFs, VAT fields, pet details, insurance references, deposits, refunds, and accountant handoff.",
    url: PAGE_URL,
    siteName: "Lattice Plugins",
    type: "article",
  },
};

const buyerProblems = [
  "Pet owners ask for invoice PDFs after consultations, medication orders, or surgery deposits",
  "Insurance reimbursement needs pet name, policy number, treatment reference, and invoice email fields",
  "Clinics mix services, medication, food, subscriptions, and deposits inside one WooCommerce flow",
  "Partial refunds, cancelled appointments, or changed treatment plans need linked credit notes",
  "Accountants need VAT totals and invoice evidence without staff rebuilding PDFs by hand",
];

const workflowSteps = [
  {
    title: "1. Capture pet and insurance details before payment",
    text: "Add pet name, species, policy/claim number, owner company details when relevant, VAT/BTW number, invoice email, and appointment or treatment reference before the order is paid.",
  },
  {
    title: "2. Separate clinical services from product sales",
    text: "Consultations, vaccinations, surgery deposits, medication, prescription food, grooming add-ons, and wellness plans should remain readable as invoice line items.",
  },
  {
    title: "3. Attach PDF invoices to customer emails",
    text: "Paid orders should automatically send the invoice PDF and keep it in My Account so reception staff do not resend invoices manually for insurers or employers.",
  },
  {
    title: "4. Preserve refund and credit-note history",
    text: "When an appointment is cancelled, a treatment changes, or medication is returned, keep the original invoice intact and issue a linked credit note with the reason.",
  },
];

const requiredFields = [
  ["Pet name / patient ID", "Connects the invoice to the animal, consultation, or treatment episode"],
  ["Insurance policy or claim number", "Lets the owner submit the PDF for reimbursement without another support email"],
  ["Treatment / appointment reference", "Explains whether the invoice covers a consultation, surgery deposit, vaccination, or product order"],
  ["VAT/BTW number", "Supports EU B2B cases such as breeders, farms, shelters, or businesses buying animal care"],
  ["Invoice email", "Routes the PDF to the pet owner, insurer, company, or accounts payable contact"],
  ["Credit-note reason", "Documents cancellations, medication returns, partial refunds, or changed treatment plans"],
];

const scoring = [
  { signal: "Owners or insurers request invoice PDFs every week", score: "+2" },
  { signal: "You collect deposits for surgeries, treatments, or appointment packages", score: "+2" },
  { signal: "Insurance claim numbers or pet references are currently handled in notes", score: "+2" },
  { signal: "Refunds or treatment changes require manual credit notes", score: "+2" },
  { signal: "Accountant export needs VAT rate, paid date, invoice number, and PDF link", score: "+1" },
];

const useCases = [
  {
    title: "Consultations and vaccinations",
    text: "Send owner-ready PDFs that include appointment context, VAT totals, and the customer-download link.",
  },
  {
    title: "Surgery and treatment deposits",
    text: "Keep deposits, balances, partial refunds, and final invoices traceable without editing old invoice PDFs.",
  },
  {
    title: "Medication and prescription food",
    text: "Preserve product lines, quantities, VAT rates, and return/credit-note history for clinic and retail orders.",
  },
  {
    title: "B2B animal-care customers",
    text: "Capture business billing, VAT/BTW number, PO/reference, invoice email, and cost-centre context for farms, shelters, breeders, or companies.",
  },
];

const faq = [
  {
    q: "Can a WooCommerce veterinary clinic need invoice automation if payment already works?",
    a: "Yes. Payment success does not solve invoice support: owners need PDFs, insurers ask for claim references, B2B customers need VAT fields, and refunds need credit notes.",
  },
  {
    q: "Should pet and insurance details be stored on the invoice?",
    a: "If customers repeatedly ask support to add those details after payment, capture them before checkout and store them as order/invoice metadata instead of editing PDFs manually.",
  },
  {
    q: "Where does Lattice Invoices fit?",
    a: "Lattice Invoices is positioned as the focused WooCommerce EU invoice workflow for VAT fields, invoice PDFs, credit notes, customer downloads, and accountant handoff. Veterinary clinics can use the €49 early-access path when invoice requests already cost staff time.",
  },
];

const mailto =
  "mailto:support@latticeplugins.com?subject=WooCommerce%20veterinary%20clinic%20invoice%20workflow%20review&body=Hi%20Lattice%2C%0A%0AI%20run%20a%20veterinary%2Fpet-care%20WooCommerce%20store%20and%20want%20the%20Lattice%20Invoices%20early-access%20workflow.%0A%0AStore%20URL%3A%20%0ACountry%3A%20%0AConsults%2C%20medication%2C%20deposits%2C%20or%20subscriptions%20sold%3A%20%0APet%2Fpatient%20fields%20needed%3A%20%0AInsurance%20claim%20or%20policy%20fields%20needed%3A%20%0AVAT%2FBTW%20fields%20needed%3A%20%0AInvoice%20email%20or%20PO%20field%20needed%3A%20%0ARefund%2Fcredit-note%20needs%3A%20%0AAccounting%20export%20needs%3A%20";

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "WooCommerce veterinary clinic invoices: VAT, insurance, and PDF workflow",
  description:
    "A buyer-intent guide for veterinary clinics and pet-care businesses using WooCommerce and needing VAT invoice workflows.",
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

export default function WooCommerceVeterinaryClinicInvoicesPage() {
  return (
    <main className="min-h-screen bg-slate-50">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <section className="bg-gradient-to-br from-slate-950 via-teal-950 to-blue-900 text-white">
        <div className="max-w-5xl mx-auto px-6 py-16 lg:py-20">
          <p className="uppercase tracking-[0.3em] text-sm text-teal-200 mb-4">WooCommerce veterinary clinic invoices</p>
          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
            Stop rebuilding veterinary invoices for insurers and pet owners.
          </h1>
          <p className="text-xl text-teal-50 leading-relaxed max-w-3xl mb-8">
            If your veterinary clinic, animal hospital, pet pharmacy, or grooming business sells through WooCommerce, invoices need pet details, insurance references, VAT fields, PDF delivery, refund credit notes, and accountant-ready order data.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href={mailto} className="bg-teal-500 text-white px-8 py-4 rounded-xl font-semibold hover:bg-teal-400 transition shadow-lg text-center">
              Request €49 veterinary invoice review
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
              <h2 className="text-3xl font-bold mb-4">Why veterinary stores outgrow generic WooCommerce receipts</h2>
              <p className="text-slate-700 leading-relaxed mb-5">
                Veterinary WooCommerce orders often combine medical services, product sales, deposits, insurance evidence, and refunds. A generic receipt rarely contains the details owners, insurers, clinics, and accountants ask for later.
              </p>
              <div className="space-y-3">
                {buyerProblems.map((problem) => (
                  <div key={problem} className="flex gap-3 rounded-xl bg-teal-50 border border-teal-100 p-4">
                    <span className="text-teal-700 font-bold">→</span>
                    <span className="text-slate-800">{problem}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-2xl border shadow-sm p-8">
              <h2 className="text-3xl font-bold mb-6">The WooCommerce veterinary invoice workflow</h2>
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
              <h2 className="text-3xl font-bold mb-4">Fields a veterinary invoice plugin should support</h2>
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-slate-100 text-slate-700">
                      <th className="p-4 rounded-l-xl">Field</th>
                      <th className="p-4 rounded-r-xl">Why it matters</th>
                    </tr>
                  </thead>
                  <tbody>
                    {requiredFields.map(([field, reason]) => (
                      <tr key={field} className="border-b border-slate-100">
                        <td className="p-4 font-semibold text-slate-900">{field}</td>
                        <td className="p-4 text-slate-700">{reason}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div className="bg-teal-50 border border-teal-100 rounded-2xl p-8">
              <h2 className="text-3xl font-bold mb-5">Qualification score for veterinary clinics</h2>
              <p className="text-slate-700 leading-relaxed mb-5">
                Score 3+ points and the clinic likely has enough invoice support cost to justify a focused €49 early-access review.
              </p>
              <div className="space-y-3">
                {scoring.map((item) => (
                  <div key={item.signal} className="flex items-start justify-between gap-4 rounded-xl bg-white border border-teal-100 p-4">
                    <span className="text-slate-800">{item.signal}</span>
                    <span className="font-bold text-teal-700 whitespace-nowrap">{item.score}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-2xl border shadow-sm p-8">
              <h2 className="text-3xl font-bold mb-6">Use cases to map before buying</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {useCases.map((item) => (
                  <div key={item.title} className="rounded-xl border border-slate-200 bg-slate-50 p-5">
                    <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                    <p className="text-slate-700 leading-relaxed">{item.text}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-slate-950 text-white rounded-2xl p-8">
              <h2 className="text-3xl font-bold mb-4">Early-access offer: €49 veterinary invoice workflow review</h2>
              <p className="text-slate-200 leading-relaxed mb-5">
                Send the store URL, country, services/products sold, pet or patient fields, insurance claim fields, VAT/BTW fields, invoice email requirements, and credit-note needs. The reply can map the current WooCommerce setup to the Lattice Invoices early-access workflow.
              </p>
              <a href={mailto} className="inline-flex bg-teal-500 text-white px-7 py-3 rounded-xl font-semibold hover:bg-teal-400 transition">
                Send veterinary invoice fit request
              </a>
            </div>

            <div className="bg-white rounded-2xl border shadow-sm p-8">
              <h2 className="text-3xl font-bold mb-6">FAQ</h2>
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
              <p className="text-sm uppercase tracking-[0.25em] text-teal-700 font-semibold mb-2">Veterinary invoice checklist</p>
              <h2 className="text-2xl font-bold mb-4">Before installing any invoice plugin</h2>
              <ul className="space-y-3 text-slate-700 mb-6">
                <li>✓ Identify consultations, deposits, medication, food, plans, and refunds.</li>
                <li>✓ Confirm pet/patient fields, insurance claim references, VAT/BTW fields, and invoice email needs.</li>
                <li>✓ Decide how cancelled appointments, changed treatments, and medication returns create credit notes.</li>
                <li>✓ Check whether owners need invoice PDFs inside My Account for insurance reimbursement.</li>
              </ul>
              <a href={mailto} className="block text-center bg-teal-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-teal-700 transition mb-3">
                Request €49 veterinary invoice review
              </a>
              <Link href="/tools/woocommerce-invoice-setup-brief" className="block text-center bg-blue-50 border border-blue-200 text-blue-800 px-6 py-3 rounded-xl font-semibold hover:border-blue-500 transition mb-3">
                Generate setup brief
              </Link>
              <Link href="/tools/woocommerce-invoice-fit-check" className="block text-center border border-slate-200 px-6 py-3 rounded-xl font-semibold hover:border-teal-400 transition mb-3">
                Score invoice fit
              </Link>
              <Link href="/demo/lattice-invoices" className="block text-center border border-slate-200 px-6 py-3 rounded-xl font-semibold hover:border-teal-400 transition mb-3">
                View invoice workflow demo
              </Link>
              <Link href="/blog/woocommerce-invoice-plugin-for-clinics" className="block text-center border border-slate-200 px-6 py-3 rounded-xl font-semibold hover:border-teal-400 transition mb-3">
                Clinic invoice guide
              </Link>
              <Link href="/blog/woocommerce-medical-supply-invoices" className="block text-center border border-slate-200 px-6 py-3 rounded-xl font-semibold hover:border-teal-400 transition">
                Medical supply invoice guide
              </Link>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}
