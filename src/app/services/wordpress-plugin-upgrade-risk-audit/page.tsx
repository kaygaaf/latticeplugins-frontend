import type { Metadata } from "next";

const SITE_URL = "https://latticeplugins.com";
const PAGE_URL = `${SITE_URL}/services/wordpress-plugin-upgrade-risk-audit`;
const MAILTO =
  "mailto:info@kayorama.nl?subject=WordPress%20plugin%20upgrade%20risk%20audit&body=Company%20or%20site%20alias%3A%0ATarget%20WordPress%20version%3A%0ATarget%20PHP%20version%3A%0APublic%20WordPress.org%20plugin%20slugs%20(max%2025)%3A%0ACritical%20flows%20to%20protect%3A%0ADesired%20delivery%20date%3A%0A%0AI%20will%20not%20send%20credentials%20or%20customer%20data.";
const ORDER_URL = `${SITE_URL}/cart/?add-to-cart=24`;

export const metadata: Metadata = {
  title: "WordPress Plugin Upgrade Risk Audit — €149 fixed scope",
  description:
    "A fixed-scope WordPress plugin upgrade risk audit using public WordPress.org metadata. No site credentials required. Delivered within 2 business days.",
  alternates: {
    canonical: PAGE_URL,
  },
  openGraph: {
    title: "WordPress Plugin Upgrade Risk Audit",
    description:
      "Know which plugin updates need staging review before they become production incidents. €149 prepaid, up to 25 public plugins, no site access required.",
    url: PAGE_URL,
    siteName: "Lattice Plugins",
    type: "website",
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "WordPress Plugin Upgrade Risk Audit",
  provider: {
    "@type": "Organization",
    name: "Lattice Plugins",
    url: SITE_URL,
  },
  url: PAGE_URL,
  description:
    "Fixed-scope pre-flight review of public WordPress.org plugin metadata before a WordPress core or PHP upgrade. Prioritized staging, hold, and review recommendations without site credentials.",
  offers: {
    "@type": "Offer",
    price: "149",
    priceCurrency: "EUR",
    availability: "https://schema.org/InStock",
  },
};

const deliverables = [
  "Current public versions and WordPress/PHP requirements",
  "Tested-up-to lag, stale-release, and major-version signals",
  "Raised WordPress/PHP requirement flags",
  "Plugin-by-plugin staging, hold, or review recommendation",
  "Client-ready self-contained HTML report",
  "One factual/report-format correction round",
];

const steps = [
  "Order now to place the order directly, or request intake by email to confirm scope first with the non-sensitive intake fields.",
  "The plugin list, fixed scope, and delivery date are confirmed in writing; the manual invoice is paid by bank transfer.",
  "Work starts only after verified prepayment or funded escrow.",
  "The report is delivered within two business days after valid intake and payment.",
];

export default function WordPressPluginUpgradeRiskAuditPage() {
  return (
    <main className="min-h-screen bg-slate-50">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <section className="bg-gradient-to-br from-slate-950 via-blue-950 to-purple-900 text-white">
        <div className="max-w-6xl mx-auto px-6 py-16 lg:py-20">
          <p className="uppercase tracking-[0.3em] text-sm text-purple-200 mb-4">
            Fixed-scope pre-flight review
          </p>
          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6 max-w-4xl">
            Know which plugin updates need staging review before they become
            production incidents.
          </h1>
          <p className="text-xl text-blue-50 leading-relaxed mb-4 max-w-3xl">
            Send only a public plugin list and your target WordPress/PHP
            versions. Receive a prioritized, client-ready upgrade risk report —
            without granting administrator access.
          </p>
          <p className="text-2xl font-bold text-white mb-8">
            €149 prepaid · up to 25 public WordPress.org plugins · delivered
            within 2 business days
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href={ORDER_URL}
              className="bg-white text-blue-950 font-semibold px-8 py-4 rounded-lg hover:bg-blue-50 transition"
            >
              Order now — €149
            </a>
            <a
              href={MAILTO}
              className="border-2 border-white text-white font-semibold px-8 py-4 rounded-lg hover:bg-white/10 transition"
            >
              Request intake by email
            </a>
            <a
              href="/services/wordpress-plugin-upgrade-risk-audit/sample-report.html"
              className="border-2 border-white text-white font-semibold px-8 py-4 rounded-lg hover:bg-white/10 transition"
            >
              View a sample report
            </a>
          </div>
          <p className="text-sm text-blue-200 mt-6 max-w-2xl">
            Order now and we email a manual invoice for prepayment by bank
            transfer; work starts only after payment is verified. Prefer to
            confirm scope first? Use the email intake. Never send passwords,
            API keys, database exports, customer data, or administrator access.
          </p>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-16 grid gap-8 md:grid-cols-3">
        <article className="bg-white rounded-xl border border-slate-200 p-8 shadow-sm">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">
            What you get
          </h2>
          <ul className="space-y-3 text-slate-700">
            {deliverables.map((item) => (
              <li key={item} className="flex gap-2">
                <span className="text-emerald-600 font-bold">✓</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </article>
        <article className="bg-white rounded-xl border border-slate-200 p-8 shadow-sm">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">Safe intake</h2>
          <p className="text-slate-700 mb-4">
            Provide a non-sensitive company/site alias, target WordPress and PHP
            versions, up to 25 public directory slugs, critical flows such as
            checkout or forms, and the desired delivery date.
          </p>
          <p className="text-slate-700">
            No production access is accepted or required.
          </p>
        </article>
        <article className="bg-white rounded-xl border border-slate-200 p-8 shadow-sm">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">Best fit</h2>
          <p className="text-slate-700">
            WordPress agencies, WooCommerce operators, and teams preparing a
            WordPress core or PHP upgrade who need a defensible public-metadata
            pre-flight screen before staging.
          </p>
        </article>
      </section>

      <section className="max-w-6xl mx-auto px-6 pb-16 grid gap-8 md:grid-cols-2">
        <article className="bg-white rounded-xl border border-slate-200 p-8 shadow-sm">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">
            How ordering works
          </h2>
          <ol className="space-y-3 text-slate-700 list-decimal list-inside">
            {steps.map((step) => (
              <li key={step}>{step}</li>
            ))}
          </ol>
        </article>
        <article className="bg-white rounded-xl border border-slate-200 p-8 shadow-sm">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">
            Important boundaries
          </h2>
          <p className="text-slate-700 mb-4">
            This is public-metadata pre-flight analysis, not a vulnerability
            scan, source-code audit, penetration test, compatibility guarantee,
            or production update. WordPress.org metadata can be incomplete
            because plugin authors maintain it.
          </p>
          <p className="text-slate-700">
            The buyer remains responsible for verified backups, staging tests,
            vendor guidance, production approval, and testing critical business
            flows. Premium/private plugins are marked for manual vendor review
            and are not automatically analyzed.
          </p>
        </article>
      </section>

      <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-6xl mx-auto px-6 py-14 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Upgrade with a plan, not a prayer.
          </h2>
          <p className="text-lg text-blue-50 mb-8 max-w-2xl mx-auto">
            Fixed price. Fixed scope. No credentials. A defensible pre-flight
            report your clients and stakeholders can act on.
          </p>
          <a
            href={ORDER_URL}
            className="inline-block bg-white text-blue-700 font-semibold px-8 py-4 rounded-lg hover:bg-blue-50 transition"
          >
            Order now — €149
          </a>
        </div>
      </section>
    </main>
  );
}
