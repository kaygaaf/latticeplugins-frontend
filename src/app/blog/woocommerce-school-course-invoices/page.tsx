import type { Metadata } from "next";
import Link from "next/link";

const SITE_URL = "https://latticeplugins.com";
const SLUG = "/blog/woocommerce-school-course-invoices";

export const metadata: Metadata = {
  title: "WooCommerce School Course Invoices: PO, VAT and PDF Workflow",
  description:
    "Buyer-intent checklist for schools, academies, and course providers using WooCommerce that need PO references, student or cohort details, VAT invoices, PDF delivery, credit notes, and accountant handoff.",
  alternates: {
    canonical: `${SITE_URL}${SLUG}`,
  },
  openGraph: {
    title: "WooCommerce school course invoices",
    description:
      "What schools and course providers should check before buying a WooCommerce invoice workflow: PO references, finance contacts, student or cohort metadata, invoice PDFs, credit notes, and VAT evidence.",
    url: `${SITE_URL}${SLUG}`,
    siteName: "Lattice Plugins",
    type: "article",
  },
};

const schoolPains = [
  {
    title: "The learner is rarely the invoice buyer",
    detail:
      "A student, parent, HR manager, teacher, or department lead may place the WooCommerce order, while the invoice must go to a school office, finance department, employer, or training budget owner.",
  },
  {
    title: "Course invoices need extra context beyond a product name",
    detail:
      "Schools and training providers often need cohort name, course date, attendee count, purchase order, cost centre, VAT treatment, and separate invoice email stored before the order is paid.",
  },
  {
    title: "Cancellations and reschedules create credit-note work",
    detail:
      "Cancelled seats, moved course dates, no-shows, partial refunds, and employer-paid corrections need linked credit notes instead of manually edited PDFs.",
  },
];

const mustHaves = [
  "Student, attendee, cohort, course date, and training location fields stored on the WooCommerce order",
  "School, employer, parent, or department billing name with VAT/BTW number and finance email",
  "PO reference, cost centre, subsidy, grant, or training-budget fields before payment is completed",
  "Invoice PDF attached to the correct WooCommerce email and available through protected downloads",
  "Credit notes linked to cancellations, reschedules, seat reductions, duplicate payments, and refunds",
  "Accountant export with invoice number, VAT amount, buyer reference, payment status, and PDF link",
];

const fitRows = [
  {
    signal: "Schools, employers, parents, or public bodies pay for course seats through WooCommerce",
    fit: "Strong fit",
    action: "Capture buyer, student, PO, and invoice email fields before checkout so finance can approve the document.",
  },
  {
    signal: "Course admin manually resends PDFs or edits learner/company details after payment",
    fit: "Strong fit",
    action: "Move invoice metadata into structured order fields instead of inbox notes and spreadsheets.",
  },
  {
    signal: "Refunds, cancellations, or rescheduled sessions happen every month",
    fit: "Strong fit",
    action: "Require refund-linked credit notes before the course catalog relies on WooCommerce for B2B orders.",
  },
  {
    signal: "Only low-volume consumer course sales need a simple receipt",
    fit: "Wait",
    action: "Use the setup guide first; request Lattice Invoices when corrected invoice requests become recurring.",
  },
];

const emailChecklist = [
  "Store URL and country",
  "Course model: schools, academies, workshops, cohorts, online courses, CPD, or employer-paid training",
  "Who pays: student, parent, employer, school, municipality, HR team, or mixed buyers",
  "Fields required today: student/attendee, cohort, course date, PO number, cost centre, VAT ID, invoice email",
  "Monthly course invoices, corrections, cancellations, refunds, and credit-note volume",
  "Accountant export or finance approval requirements",
];

const faq = [
  {
    q: "Why do school and course WooCommerce stores need invoice fields?",
    a: "Because the person enrolling is often not the person paying. A course checkout may need learner details and separate billing data for a school, parent, employer, department, or public-sector finance contact.",
  },
  {
    q: "Does Lattice Invoices replace a learning management system?",
    a: "No. It is positioned for the WooCommerce invoice workflow around paid orders: buyer metadata, VAT details, invoice PDFs, credit notes, customer downloads, and accountant handoff.",
  },
  {
    q: "Can this help with employer-paid or school-funded training?",
    a: "Yes. Employer-paid and school-funded training usually needs PO numbers, invoice emails, legal billing names, attendee references, and clean PDFs that match finance approval.",
  },
  {
    q: "When should a course provider request early access?",
    a: "Request early access when support repeatedly corrects company details, sends invoice PDFs manually, handles cancellation credit notes, or exports course invoice data for bookkeeping.",
  },
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "WooCommerce school course invoices: PO, VAT, and PDF workflow",
  description:
    "A buyer-intent checklist for schools, academies, and course providers using WooCommerce that need PO references, student or cohort details, VAT invoices, PDF delivery, credit notes, and accountant handoff.",
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
  "mailto:support@latticeplugins.com?subject=WooCommerce%20school%20course%20invoice%20workflow%20review&body=Hi%20Lattice%2C%0A%0AI%20want%20a%20WooCommerce%20school%20course%20invoice%20workflow%20review.%0A%0AStore%20URL%3A%20%0ACountry%3A%20%0ACourse%20model%20%28school%2C%20academy%2C%20workshop%2C%20online%20course%29%3A%20%0APayer%20type%20%28student%2C%20parent%2C%20employer%2C%20school%2C%20public%20body%29%3A%20%0AStudent%2Fcohort%2Fcourse%20fields%20needed%3A%20%0APO%2Fcost-centre%2FVAT%20fields%20needed%3A%20%0ACancellation%2Fcredit-note%20needs%3A%20%0AAccountant%20export%20needs%3A%20";

export default function WooCommerceSchoolCourseInvoicesPage() {
  return (
    <main className="min-h-screen bg-slate-50">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <section className="bg-gradient-to-br from-slate-950 via-blue-950 to-emerald-900 text-white">
        <div className="max-w-5xl mx-auto px-6 py-16 lg:py-20">
          <p className="uppercase tracking-[0.3em] text-sm text-emerald-200 mb-4">School and course invoice workflow</p>
          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
            WooCommerce school course invoices need PO references, learner context, and clean PDFs.
          </h1>
          <p className="text-xl text-blue-50 leading-relaxed max-w-3xl mb-8">
            If schools, academies, coaches, or training providers sell courses through WooCommerce, the invoice must satisfy parents, employers, schools, and accountants. This checklist turns course, VAT, PO, PDF, and credit-note friction into a Lattice Invoices fit request.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href={mailto} className="bg-emerald-300 text-slate-950 px-8 py-4 rounded-xl font-semibold hover:bg-emerald-200 transition shadow-lg text-center">
              Request €49 school invoice review
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
              <h2 className="text-3xl font-bold mb-4">Why course invoices become support work</h2>
              <p className="text-slate-700 leading-relaxed mb-4">
                WooCommerce order data usually describes the product sold, but school and course invoices often need to describe who attends, who pays, which department approves the purchase, and which VAT or grant rules apply.
              </p>
              <p className="text-slate-700 leading-relaxed">
                Lattice Invoices is positioned for that order-level gap: store the finance buyer, course context, invoice PDF, credit-note relationship, and export-ready invoice fields next to the WooCommerce order instead of repairing invoices manually later.
              </p>
            </div>

            <div className="grid gap-4">
              {schoolPains.map((item) => (
                <div key={item.title} className="bg-white rounded-2xl border shadow-sm p-6">
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  <p className="text-slate-700 leading-relaxed">{item.detail}</p>
                </div>
              ))}
            </div>

            <div className="bg-emerald-50 border border-emerald-100 rounded-2xl p-8">
              <h2 className="text-3xl font-bold mb-5">School course invoice must-haves</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {mustHaves.map((item) => (
                  <div key={item} className="bg-white rounded-xl border border-emerald-100 p-4 flex gap-3">
                    <span className="text-emerald-700 font-bold">✓</span>
                    <span className="text-slate-800">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-2xl border shadow-sm p-8 overflow-hidden">
              <h2 className="text-3xl font-bold mb-5">Should a school or course seller request Lattice Invoices?</h2>
              <div className="overflow-x-auto">
                <table className="min-w-full text-left border-collapse">
                  <thead>
                    <tr className="border-b bg-slate-50">
                      <th className="p-4 font-semibold">Store signal</th>
                      <th className="p-4 font-semibold">Fit</th>
                      <th className="p-4 font-semibold">Best next action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {fitRows.map((row) => (
                      <tr key={row.signal} className="border-b last:border-b-0 align-top">
                        <td className="p-4 text-slate-700">{row.signal}</td>
                        <td className="p-4 font-bold text-emerald-700">{row.fit}</td>
                        <td className="p-4 text-slate-700">{row.action}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div className="bg-slate-950 text-white rounded-2xl p-8">
              <h2 className="text-3xl font-bold mb-4">Copy this into the early-access email</h2>
              <p className="text-slate-200 leading-relaxed mb-5">
                A precise course invoice request is easier to qualify than a generic plugin question. Send these details so the €49 Lattice Invoices path can be matched to the real enrollment and finance workflow.
              </p>
              <ul className="space-y-3 mb-6">
                {emailChecklist.map((item) => (
                  <li key={item} className="flex gap-3 text-slate-100">
                    <span className="text-emerald-300">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <a href={mailto} className="inline-block bg-emerald-300 text-slate-950 px-7 py-3 rounded-xl font-semibold hover:bg-emerald-200 transition">
                Send school invoice fit request
              </a>
            </div>

            <div className="bg-white rounded-2xl border shadow-sm p-8">
              <h2 className="text-3xl font-bold mb-5">School course invoice FAQ</h2>
              <div className="space-y-5">
                {faq.map((item) => (
                  <div key={item.q} className="border-b last:border-b-0 pb-5 last:pb-0">
                    <h3 className="font-bold text-lg mb-2">{item.q}</h3>
                    <p className="text-slate-700 leading-relaxed">{item.a}</p>
                  </div>
                ))}
              </div>
            </div>
          </article>

          <aside className="space-y-6">
            <div className="bg-white rounded-2xl border shadow-sm p-6 sticky top-6">
              <p className="text-sm uppercase tracking-[0.2em] text-emerald-700 font-semibold mb-3">Revenue CTA</p>
              <h2 className="text-2xl font-bold mb-3">Need course invoices finance will accept?</h2>
              <p className="text-slate-700 leading-relaxed mb-5">
                Request the Lattice Invoices early-access review if schools, parents, employers, or public bodies already ask for corrected course invoices, PO details, PDF resends, cancellation credit notes, or accountant exports.
              </p>
              <a href={mailto} className="block text-center bg-blue-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-blue-700 transition mb-3">
                Request €49 review
              </a>
              <Link href="/tools/woocommerce-invoice-setup-brief" className="block text-center border border-slate-200 px-6 py-3 rounded-xl font-semibold hover:border-blue-400 transition mb-3">
                Generate setup brief
              </Link>
              <Link href="/blog/woocommerce-training-company-invoices" className="block text-center border border-slate-200 px-6 py-3 rounded-xl font-semibold hover:border-blue-400 transition mb-3">
                Training company invoice guide
              </Link>
              <Link href="/blog/woocommerce-public-sector-invoices" className="block text-center border border-slate-200 px-6 py-3 rounded-xl font-semibold hover:border-blue-400 transition mb-3">
                Public-sector invoice guide
              </Link>
              <Link href="/woocommerce-eu-vat-invoices" className="block text-center border border-slate-200 px-6 py-3 rounded-xl font-semibold hover:border-blue-400 transition">
                View Lattice Invoices offer
              </Link>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}
