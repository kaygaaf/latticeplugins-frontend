import type { Metadata } from "next";
import Link from "next/link";

const SITE_URL = "https://latticeplugins.com";
const PAGE_URL = `${SITE_URL}/blog/woocommerce-abandoned-cart-recovery`;
const PRODUCT_URL = `${SITE_URL}/product/lattice-commerce-suite`;

export const metadata: Metadata = {
  title: "WooCommerce Abandoned Cart Recovery: Emails, Upsells, and Checkout Fixes",
  description:
    "Buyer-intent guide for WooCommerce stores losing checkouts: how to diagnose cart abandonment, build recovery email flows, remove checkout friction, and recover revenue with Lattice Commerce Suite.",
  alternates: {
    canonical: PAGE_URL,
  },
  openGraph: {
    title: "WooCommerce abandoned cart recovery workflow",
    description:
      "How to qualify an abandoned-cart problem before buying a recovery plugin: recovery emails, checkout friction, upsells, trust signals, and revenue attribution.",
    url: PAGE_URL,
    siteName: "Lattice Plugins",
    type: "article",
  },
};

const buyerProblems = [
  "Six or seven out of ten shoppers add to cart and leave without paying, and the store has no recovery flow at all",
  "Recovery emails go out manually (or never), so recoverable revenue depends on someone remembering to follow up",
  "Checkout asks for account creation, surprise shipping costs, or too many fields — and nobody knows which step loses the buyer",
  "The store runs discounts to win back carts, but there is no upsell or order-bump strategy to lift recovered order value",
  "Abandoned-cart revenue is invisible: no dashboard shows what was lost, what was recovered, and which email did it",
];

const workflowSteps = [
  {
    title: "1. Measure the leak before buying anything",
    text: "Pull cart-vs-order numbers from WooCommerce analytics for the last 30 days. If you cannot see abandoned carts as a number, that visibility gap is the first problem to fix.",
  },
  {
    title: "2. Remove checkout friction first",
    text: "Account-creation walls, hidden shipping costs, and long forms kill checkouts before any recovery email can help. Direct checkout links and trust badges recover revenue at the source.",
  },
  {
    title: "3. Automate the recovery sequence",
    text: "A timed email flow — reminder, incentive, last call — should fire without staff involvement. Every recovered cart should be attributed to the email that won it back.",
  },
  {
    title: "4. Lift the value of recovered orders",
    text: "Recovery is only half the win. Checkout upsells, order bumps, and smart coupons turn a recovered €40 cart into a €60 order without extra ad spend.",
  },
];

const comparisonRows = [
  ["Recovery email automation", "Manual follow-up or nothing", "Timed sequences that fire automatically"],
  ["Checkout friction", "Account walls and surprise costs", "Direct checkout links and trust badges"],
  ["Order value", "Flat recovered carts", "Upsells and order bumps on recovery"],
  ["Attribution", "\"Sales feel slow this month\"", "Lost vs recovered revenue on one dashboard"],
  ["Pricing model", "€10–€30/month SaaS fees forever", "€49 one-time with lifetime updates"],
];

const faq = [
  {
    q: "Is abandoned cart recovery worth it for a small WooCommerce store?",
    a: "Yes — small stores feel every lost checkout. Even recovering two or three €50 carts a month pays for a one-time €49 recovery plugin, while a monthly SaaS fee keeps eating that margin forever.",
  },
  {
    q: "Should I fix checkout friction or set up recovery emails first?",
    a: "Fix friction first. Recovery emails win back carts that were nearly lost; friction fixes stop the loss from happening. Lattice Commerce Suite covers both, so you do not have to choose.",
  },
  {
    q: "Do recovery emails need discounts to work?",
    a: "Not always. A plain reminder converts a surprising share of abandoners. Smart coupons let you reserve discounts for the final email in the sequence instead of training every customer to abandon for a coupon.",
  },
  {
    q: "How is Lattice Commerce Suite different from a standalone cart-recovery plugin?",
    a: "Recovery is one module. The suite also removes checkout friction (direct checkout, trust badges), lifts order value (upsells, order bumps, smart coupons), and shows recovered revenue in an analytics dashboard — one €49 plugin instead of four subscriptions.",
  },
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "WooCommerce abandoned cart recovery: emails, upsells, and checkout fixes",
  description:
    "A buyer-intent guide for WooCommerce stores that lose checkouts: diagnose abandonment, automate recovery emails, remove checkout friction, and recover revenue.",
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

export default function WooCommerceAbandonedCartRecoveryPage() {
  return (
    <main className="min-h-screen bg-slate-50">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <section className="bg-gradient-to-br from-slate-950 via-emerald-950 to-teal-900 text-white">
        <div className="max-w-5xl mx-auto px-6 py-16 lg:py-20">
          <p className="uppercase tracking-[0.3em] text-sm text-emerald-200 mb-4">Abandoned cart recovery workflow</p>
          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
            Recover the WooCommerce checkouts you already paid to get.
          </h1>
          <p className="text-xl text-emerald-50 leading-relaxed max-w-3xl mb-8">
            Most WooCommerce stores lose the majority of filled carts before payment. This guide shows how to diagnose the leak, automate recovery emails, remove checkout friction, and lift recovered order value — without a monthly SaaS bill.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/product/lattice-commerce-suite" className="bg-emerald-300 text-slate-950 px-8 py-4 rounded-xl font-semibold hover:bg-emerald-200 transition shadow-lg text-center">
              Get Lattice Commerce Suite — €49
            </Link>
            <Link href="/compare" className="bg-white/10 border border-white/20 text-white px-8 py-4 rounded-xl font-semibold hover:bg-white/15 transition text-center">
              Compare all 7 plugins
            </Link>
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-14">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <article className="lg:col-span-2 space-y-8">
            <div className="bg-white rounded-2xl border shadow-sm p-8">
              <h2 className="text-3xl font-bold mb-4">What cart abandonment actually looks like</h2>
              <p className="text-slate-700 leading-relaxed mb-5">
                Abandoned carts rarely come from one dramatic problem. They come from small frictions stacked on top of zero follow-up. If any of these sound familiar, recovery revenue is sitting on the table:
              </p>
              <div className="space-y-3">
                {buyerProblems.map((problem) => (
                  <div key={problem} className="flex gap-3 rounded-xl bg-emerald-50 border border-emerald-100 p-4">
                    <span className="text-emerald-700 font-bold">→</span>
                    <span className="text-slate-800">{problem}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-2xl border shadow-sm p-8">
              <h2 className="text-3xl font-bold mb-6">The four-step recovery workflow</h2>
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
              <h2 className="text-3xl font-bold mb-4">Before and after a real recovery setup</h2>
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-slate-100 text-slate-700">
                      <th className="p-4 rounded-l-xl">Area</th>
                      <th className="p-4">Without recovery</th>
                      <th className="p-4 rounded-r-xl">With Commerce Suite</th>
                    </tr>
                  </thead>
                  <tbody>
                    {comparisonRows.map(([area, before, after]) => (
                      <tr key={area} className="border-b border-slate-100">
                        <td className="p-4 font-semibold text-slate-900">{area}</td>
                        <td className="p-4 text-slate-500">{before}</td>
                        <td className="p-4 text-slate-700">{after}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div className="bg-white rounded-2xl border shadow-sm p-8">
              <h2 className="text-3xl font-bold mb-6">Frequently asked questions</h2>
              <div className="space-y-5">
                {faq.map((item) => (
                  <div key={item.q} className="rounded-xl border border-slate-200 p-5">
                    <h3 className="font-bold text-lg mb-2">{item.q}</h3>
                    <p className="text-slate-700 leading-relaxed">{item.a}</p>
                  </div>
                ))}
              </div>
            </div>
          </article>

          <aside className="space-y-6">
            <div className="bg-slate-950 text-white rounded-2xl p-7 sticky top-6">
              <p className="uppercase tracking-[0.25em] text-xs text-emerald-300 mb-3">Recover revenue</p>
              <h2 className="text-2xl font-bold mb-3">Lattice Commerce Suite</h2>
              <p className="text-slate-300 leading-relaxed mb-5">
                Abandoned cart recovery, checkout upsells, direct checkout, trust badges, smart coupons, and analytics in one €49 plugin. One-time payment, lifetime updates.
              </p>
              <ul className="space-y-2 text-sm text-slate-200 mb-6">
                <li>✓ Automated recovery email flows</li>
                <li>✓ Checkout upsells and order bumps</li>
                <li>✓ Direct checkout and trust badges</li>
                <li>✓ Recovered-revenue dashboard</li>
              </ul>
              <Link href="/product/lattice-commerce-suite" className="block bg-emerald-300 text-slate-950 text-center px-6 py-3 rounded-xl font-semibold hover:bg-emerald-200 transition">
                View Commerce Suite — €49
              </Link>
              <p className="text-xs text-slate-400 mt-4 text-center">
                Secure checkout through WooCommerce. Works with the free Lattice Core foundation.
              </p>
            </div>
          </aside>
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-6 pb-16">
        <div className="bg-gradient-to-br from-emerald-600 to-teal-700 rounded-2xl text-white p-10 text-center">
          <h2 className="text-3xl font-bold mb-3">Stop donating checkouts to your competitors.</h2>
          <p className="text-emerald-50 max-w-2xl mx-auto mb-6">
            Every day without a recovery flow is revenue you already earned the click for. Set up recovery, friction fixes, and upsells in one install.
          </p>
          <Link href="/product/lattice-commerce-suite" className="inline-block bg-white text-emerald-800 px-8 py-4 rounded-xl font-bold hover:bg-emerald-50 transition">
            Get Lattice Commerce Suite — €49 one-time
          </Link>
        </div>
      </section>
    </main>
  );
}
