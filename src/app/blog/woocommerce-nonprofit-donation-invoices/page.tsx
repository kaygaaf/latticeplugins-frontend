import type { Metadata } from "next";
import Link from "next/link";

const SITE_URL = "https://latticeplugins.com";
const SLUG = "/blog/woocommerce-nonprofit-donation-invoices";

export const metadata: Metadata = {
  title: "WooCommerce Nonprofit Donation Invoices: VAT, Receipts and PDF Workflow",
  description:
    "Buyer-intent checklist for nonprofits, charities, NGOs, and associations using WooCommerce donations or memberships that need donation receipts, VAT invoices, PDF delivery, credit notes, and accountant handoff.",
  alternates: {
    canonical: `${SITE_URL}${SLUG}`,
  },
  openGraph: {
    title: "WooCommerce nonprofit donation invoices",
    description:
      "What WooCommerce nonprofits should check before buying an invoice workflow: donor receipts, VAT exemptions, memberships, public-sector buyers, PDF invoices, credit notes, and exports.",
    url: `${SITE_URL}${SLUG}`,
    siteName: "Lattice Plugins",
    type: "article",
  },
};

const nonprofitPains = [
  {
    title: "Donation receipts and VAT invoices are not always the same document",
    detail:
      "A donor may need a simple donation receipt, while a sponsor, member, corporate donor, school, or public body may need a VAT-ready invoice with legal entity, VAT/BTW details, PO reference, or project code.",
  },
  {
    title: "The finance contact is often different from the donor",
    detail:
      "A volunteer, programme manager, or donor can complete checkout, but accounts payable needs a separate invoice email, organisation name, billing address, and PDF invoice later.",
  },
  {
    title: "Refunds, cancelled memberships, and grant corrections need evidence",
    detail:
      "When donations are reversed, memberships are cancelled, or grant-funded purchases are corrected, nonprofits need linked credit notes and retained PDFs instead of edited order emails.",
  },
];

const mustHaves = [
  "Donation receipt vs VAT invoice decision stored on the WooCommerce order",
  "Organisation/legal billing name, VAT/BTW or charity ID, and invoice email before payment",
  "Membership, sponsorship, event ticket, grant, campaign, or restricted-fund reference fields",
  "PDF invoice or donation receipt attached to email and available through protected downloads",
  "Credit notes linked to refunds, cancelled memberships, pledge corrections, or duplicate payments",
  "Accountant handoff with invoice number, payment status, VAT/exemption reason, and PDF link",
];

const fitRows = [
  {
    signal: "Corporate sponsors, schools, municipalities, NGOs, or associations buy through the store",
    fit: "Strong fit",
    action: "Capture organisation and invoice fields before checkout so finance does not reject the document later.",
  },
  {
    signal: "Support manually separates donation receipts from VAT invoices",
    fit: "Strong fit",
    action: "Use a workflow that stores receipt type, VAT/exemption reason, and PDF delivery status on the order.",
  },
  {
    signal: "Membership renewals, event tickets, donations, or sponsorships need different invoice wording",
    fit: "Strong fit",
    action: "Map order type to invoice template notes before asking the accountant to repair exports.",
  },
  {
    signal: "Only occasional small consumer donations need a basic thank-you email",
    fit: "Wait",
    action: "Start with the free setup brief and request Lattice Invoices once invoice support tickets repeat monthly.",
  },
];

const emailChecklist = [
  "Store URL and country",
  "Organisation type: charity, NGO, association, membership group, school, or mixed nonprofit/commercial store",
  "Order types sold through WooCommerce: donations, memberships, tickets, sponsorships, downloads, courses, or merchandise",
  "Whether buyers need donation receipts, VAT invoices, VAT-exempt invoices, or both",
  "Fields requested today: charity ID, VAT/BTW number, PO number, project code, restricted fund, invoice email",
  "Monthly invoice corrections, refund/credit-note volume, and accountant export requirements",
];

const faq = [
  {
    q: "Do nonprofits need WooCommerce invoices or donation receipts?",
    a: "Often both. Small donors may only need a donation receipt, while corporate sponsors, members, public-sector buyers, and grant-funded organisations may need a numbered invoice PDF with VAT/exemption wording and legal billing details.",
  },
  {
    q: "Can Lattice Invoices decide tax treatment for charities?",
    a: "No. Tax treatment must be configured with your accountant and local rules. The product path is to store the right WooCommerce order fields, receipt type, VAT/exemption reason, PDF link, and correction evidence so the accounting handoff is cleaner.",
  },
  {
    q: "What makes nonprofit WooCommerce invoicing harder than normal B2C checkout?",
    a: "A nonprofit store can sell donations, memberships, events, sponsorships, courses, merchandise, and public-sector purchases in one checkout. Each may need different invoice wording, fields, and correction rules.",
  },
  {
    q: "When should a nonprofit request early access?",
    a: "Request early access when staff repeatedly edits billing organisation details, resends PDFs, separates donation receipts from invoices, handles refund corrections, or prepares manual exports for the accountant.",
  },
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "WooCommerce nonprofit donation invoices: VAT, receipts, and PDF workflow",
  description:
    "A buyer-intent checklist for nonprofits, charities, NGOs, and associations using WooCommerce donations or memberships that need receipts, VAT invoices, PDF delivery, credit notes, and accountant handoff.",
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
  "mailto:support@latticeplugins.com?subject=WooCommerce%20nonprofit%20donation%20invoice%20workflow%20review&body=Hi%20Lattice%2C%0A%0AI%20want%20a%20WooCommerce%20nonprofit%20donation%20invoice%20workflow%20review.%0A%0AStore%20URL%3A%20%0ACountry%3A%20%0AOrganisation%20type%3A%20%0AOrder%20types%20%28donations%2C%20memberships%2C%20tickets%2C%20sponsorships%29%3A%20%0AReceipt%20or%20VAT%20invoice%20needs%3A%20%0AFields%20buyers%20ask%20for%3A%20%0ARefund%2Fcredit-note%20needs%3A%20%0AAccountant%20export%20needs%3A%20";

export default function WooCommerceNonprofitDonationInvoicesPage() {
  return (
    <main className="min-h-screen bg-slate-50">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <section className="bg-gradient-to-br from-slate-950 via-emerald-950 to-cyan-900 text-white">
        <div className="max-w-5xl mx-auto px-6 py-16 lg:py-20">
          <p className="uppercase tracking-[0.3em] text-sm text-emerald-200 mb-4">Nonprofit invoice workflow</p>
          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
            WooCommerce nonprofit donation invoices need receipt logic, VAT evidence, and clean PDFs.
          </h1>
          <p className="text-xl text-emerald-50 leading-relaxed max-w-3xl mb-8">
            If a charity, NGO, association, or membership organisation uses WooCommerce for donations, tickets, sponsorships, courses, or merchandise, finance needs more than a thank-you email. This checklist turns receipt, VAT, refund, PDF, and accountant-export friction into a Lattice Invoices fit request.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href={mailto} className="bg-emerald-300 text-slate-950 px-8 py-4 rounded-xl font-semibold hover:bg-emerald-200 transition shadow-lg text-center">
              Request €49 nonprofit invoice review
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
              <h2 className="text-3xl font-bold mb-4">Why nonprofit WooCommerce invoices become messy</h2>
              <p className="text-slate-700 leading-relaxed mb-4">
                Nonprofit stores rarely sell one clean product type. Donations, memberships, event tickets, sponsorship packages, training seats, merchandise, and public-sector purchases can all run through the same WooCommerce checkout.
              </p>
              <p className="text-slate-700 leading-relaxed">
                Lattice Invoices is positioned for the order-level gap: store receipt type, VAT or exemption evidence, buyer organisation details, invoice PDFs, customer downloads, refund-linked credit notes, and accountant-ready export context alongside the WooCommerce order.
              </p>
            </div>

            <div className="grid gap-4">
              {nonprofitPains.map((item) => (
                <div key={item.title} className="bg-white rounded-2xl border shadow-sm p-6">
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  <p className="text-slate-700 leading-relaxed">{item.detail}</p>
                </div>
              ))}
            </div>

            <div className="bg-emerald-50 border border-emerald-100 rounded-2xl p-8">
              <h2 className="text-3xl font-bold mb-5">Nonprofit invoice must-haves</h2>
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
              <h2 className="text-3xl font-bold mb-5">Should a nonprofit request Lattice Invoices?</h2>
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
                A precise nonprofit invoice request is easier to qualify than a generic plugin question. Send these details so the €49 Lattice Invoices path can be matched to the real donation, membership, and finance workflow.
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
                Send nonprofit invoice fit request
              </a>
            </div>

            <div className="bg-white rounded-2xl border shadow-sm p-8">
              <h2 className="text-3xl font-bold mb-5">Nonprofit invoice FAQ</h2>
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
              <h2 className="text-2xl font-bold mb-3">Need donor and invoice clarity?</h2>
              <p className="text-slate-700 leading-relaxed mb-5">
                Request the Lattice Invoices early-access review if donors, members, sponsors, or public-sector buyers already ask for corrected receipts, VAT invoices, PDF resends, refund evidence, or accountant exports.
              </p>
              <a href={mailto} className="block text-center bg-blue-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-blue-700 transition mb-3">
                Request €49 review
              </a>
              <Link href="/tools/woocommerce-invoice-setup-brief" className="block text-center border border-slate-200 px-6 py-3 rounded-xl font-semibold hover:border-blue-400 transition mb-3">
                Generate setup brief
              </Link>
              <Link href="/blog/woocommerce-vat-exempt-invoices" className="block text-center border border-slate-200 px-6 py-3 rounded-xl font-semibold hover:border-blue-400 transition mb-3">
                VAT-exempt invoice guide
              </Link>
              <Link href="/blog/woocommerce-invoice-plugin-for-memberships" className="block text-center border border-slate-200 px-6 py-3 rounded-xl font-semibold hover:border-blue-400 transition mb-3">
                Membership invoice guide
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
