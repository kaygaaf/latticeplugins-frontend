import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Compare Lattice Plugins — Official 7-Product Catalog",
  description:
    "Compare all 7 official Lattice plugins side by side: Lattice Commerce Suite, Lattice Core, Lattice CRM, Lattice Migrate, Lattice Stripe Payments, Lattice Subscribify, and Lattice SEO. One-time pricing, lifetime updates.",
};

export const dynamic = "force-dynamic";

type CompareRow = {
  name: string;
  slug: string;
  price: string;
  type: "Free" | "Premium";
  bestFor: string;
  highlights: string[];
};

const PRODUCTS: CompareRow[] = [
  {
    name: "Lattice Commerce Suite",
    slug: "lattice-commerce-suite",
    price: "€49",
    type: "Premium",
    bestFor: "Stores that want more revenue from existing traffic",
    highlights: ["Abandoned cart recovery", "Checkout upsells", "Direct checkout", "Trust badges", "Smart coupons"],
  },
  {
    name: "Lattice Core",
    slug: "lattice-core",
    price: "Free",
    type: "Free",
    bestFor: "Every Lattice installation (foundation)",
    highlights: ["Shared UI system", "License client", "Auto-updater", "Health monitoring"],
  },
  {
    name: "Lattice CRM",
    slug: "lattice-crm",
    price: "€49",
    type: "Premium",
    bestFor: "Stores that sell to repeat customers and B2B",
    highlights: ["Contact management", "Deal pipeline", "Email campaigns", "WooCommerce sync", "Sales analytics"],
  },
  {
    name: "Lattice Migrate",
    slug: "lattice-migrate",
    price: "€49",
    type: "Premium",
    bestFor: "Agencies and stores that need safe backups and moves",
    highlights: ["Full-site backup", "One-click restore", "Staging environments", "Cloud storage", "Encryption"],
  },
  {
    name: "Lattice Stripe Payments",
    slug: "lattice-stripe-payments",
    price: "Free",
    type: "Free",
    bestFor: "Stores that want a modern Stripe checkout",
    highlights: ["Apple Pay / Google Pay", "Subscription billing", "SCA compliance", "Webhook handling"],
  },
  {
    name: "Lattice Subscribify",
    slug: "lattice-subscribify",
    price: "€49",
    type: "Premium",
    bestFor: "Stores selling subscriptions and memberships",
    highlights: ["Subscription products", "Stripe renewals", "Dunning emails", "Subscription analytics"],
  },
  {
    name: "Lattice SEO",
    slug: "lattice-seo",
    price: "€49",
    type: "Premium",
    bestFor: "Stores that want more organic traffic",
    highlights: ["XML sitemaps", "Schema.org structured data", "Open Graph", "Meta templates", "Redirect tools"],
  },
];

export default function ComparePage() {
  return (
    <main className="min-h-screen">
      <p className="sr-only">
        Compare the official Lattice catalog: Lattice Commerce Suite, Lattice Core, Lattice CRM, Lattice Migrate,
        Lattice Stripe Payments, Lattice Subscribify, and Lattice SEO.
      </p>

      {/* Hero */}
      <section className="container-x pb-12 pt-14 lg:pt-20">
        <div className="max-w-3xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.22em] text-blue-700">Official 7-product catalog</p>
          <h1 className="font-display text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl">Compare Lattice plugins</h1>
          <p className="mt-5 text-lg leading-8 text-slate-600">
            Every Lattice plugin solves one WooCommerce or WordPress bottleneck. One-time pricing,
            lifetime updates, no subscriptions.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/shop"
              className="inline-flex items-center justify-center rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-800"
            >
              Browse the shop
            </Link>
            <Link
              href="/product/lattice-commerce-suite"
              className="inline-flex items-center justify-center rounded-full border border-slate-200 px-6 py-3 text-sm font-semibold text-slate-700 transition hover:border-slate-300 hover:bg-white"
            >
              View Commerce Suite
            </Link>
          </div>
        </div>
      </section>

      {/* Pricing clarity strip */}
      <section className="container-x grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
        <div className="rounded-2xl border border-slate-200 bg-white p-5 text-center shadow-sm">
          <p className="font-display text-2xl font-bold text-slate-950 mb-1">€49</p>
          <p className="text-sm text-slate-600">One-time price per premium plugin. No renewals required.</p>
        </div>
        <div className="rounded-2xl border border-slate-200 bg-white p-5 text-center shadow-sm">
          <p className="font-display text-2xl font-bold text-slate-950 mb-1">Lifetime updates</p>
          <p className="text-sm text-slate-600">Every license includes plugin updates through Lattice Core.</p>
        </div>
        <div className="rounded-2xl border border-slate-200 bg-white p-5 text-center shadow-sm">
          <p className="font-display text-2xl font-bold text-slate-950 mb-1">Free foundation</p>
          <p className="text-sm text-slate-600">Lattice Core and Lattice Stripe Payments are free forever.</p>
        </div>
      </section>

      {/* Comparison table (desktop) */}
      <section className="container-x mb-12 hidden md:block">
        <div className="overflow-x-auto border rounded-2xl bg-white">
          <table className="w-full text-left">
            <thead>
              <tr className="border-b bg-slate-50">
                <th className="p-4 font-semibold">Plugin</th>
                <th className="p-4 font-semibold">Price</th>
                <th className="p-4 font-semibold">Best for</th>
                <th className="p-4 font-semibold">Highlights</th>
                <th className="p-4 font-semibold"></th>
              </tr>
            </thead>
            <tbody>
              {PRODUCTS.map((p) => (
                <tr key={p.slug} className="border-b last:border-0 hover:bg-slate-50 transition">
                  <td className="p-4">
                    <Link href={`/product/${p.slug}`} className="font-semibold text-blue-700 hover:underline">
                      {p.name}
                    </Link>
                    <span
                      className={`ml-2 text-xs px-2 py-0.5 rounded-full ${
                        p.type === "Free" ? "bg-green-100 text-green-700" : "bg-blue-100 text-blue-700"
                      }`}
                    >
                      {p.type}
                    </span>
                  </td>
                  <td className="p-4 font-bold text-blue-600">{p.price}</td>
                  <td className="p-4 text-slate-700">{p.bestFor}</td>
                  <td className="p-4 text-slate-600 text-sm">{p.highlights.join(" · ")}</td>
                  <td className="p-4">
                    <Link
                      href={`/product/${p.slug}`}
                      className="inline-block rounded-full bg-slate-900 px-4 py-2 text-sm font-semibold text-white transition hover:bg-slate-800"
                    >
                      Details
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Comparison cards (mobile) */}
      <section className="container-x mb-12 md:hidden grid grid-cols-1 gap-6">
        {PRODUCTS.map((p) => (
          <div key={p.slug} className="border rounded-xl p-6 bg-white">
            <div className="flex items-center justify-between mb-2">
              <h2 className="text-xl font-semibold">
                <Link href={`/product/${p.slug}`} className="hover:text-blue-600 transition">
                  {p.name}
                </Link>
              </h2>
              <span className="text-lg font-bold text-blue-600">{p.price}</span>
            </div>
            <p className="text-sm text-slate-600 mb-3">{p.bestFor}</p>
            <ul className="text-sm text-slate-700 space-y-1 mb-4">
              {p.highlights.map((h) => (
                <li key={h}>✓ {h}</li>
              ))}
            </ul>
            <Link
              href={`/product/${p.slug}`}
              className="inline-block rounded-full bg-slate-900 px-4 py-2 text-sm font-semibold text-white transition hover:bg-slate-800"
            >
              View details
            </Link>
          </div>
        ))}
      </section>

      {/* Decision helper */}
      <section className="container-x mb-12 rounded-3xl border border-blue-100 bg-blue-50 p-6 md:p-8">
        <h2 className="font-display text-2xl font-bold mb-4 text-center text-slate-950">Not sure where to start?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto text-slate-700">
          <p><strong>More revenue from your checkout?</strong> Start with Lattice Commerce Suite.</p>
          <p><strong>Selling subscriptions?</strong> Lattice Subscribify plus the free Lattice Stripe Payments.</p>
          <p><strong>Need organic traffic?</strong> Lattice SEO handles sitemaps, schema, and meta.</p>
          <p><strong>Moving or protecting a site?</strong> Lattice Migrate for backups, restore, and staging.</p>
        </div>
        <p className="text-center mt-6">
          <Link href="/shop" className="inline-block rounded-full bg-slate-900 px-8 py-3 text-sm font-semibold text-white transition hover:bg-slate-800">
            Go to the shop
          </Link>
        </p>
      </section>
    </main>
  );
}
