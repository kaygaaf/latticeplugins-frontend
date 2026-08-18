import Link from "next/link";
import { getProducts } from "@/lib/woocommerce";
import ProductCard from "@/components/ProductCard";

export const dynamic = "force-dynamic";

export default async function ShopPage() {
  const products = await getProducts();
  const catalogProducts = (Array.isArray(products) ? products : []).filter(
    (product: any) => product?.slug !== "wordpress-plugin-upgrade-risk-audit"
  );

  return (
    <main className="min-h-screen">
      <section className="container-x pb-12 pt-14 lg:pt-20">
        <div className="max-w-3xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.22em] text-blue-700">Shop</p>
          <h1 className="font-display text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl">
            Choose the Lattice plugin that removes your next bottleneck.
          </h1>
          <p className="mt-5 text-lg leading-8 text-slate-600">
            Compare Lattice Commerce Suite, Lattice Core, Lattice CRM, Lattice Migrate,
            Lattice Stripe Payments, Lattice Subscribify, and Lattice SEO from one clean catalog.
          </p>
        </div>

        <div className="mt-10 rounded-3xl border border-slate-200 bg-white p-6 shadow-card sm:p-8">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-500">Official 7-product catalog</p>
              <h2 className="mt-2 font-display text-2xl font-bold text-slate-950">Start with the newest addition: Lattice SEO.</h2>
              <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-600">
                Technical SEO for WordPress and WooCommerce without subscription pricing: sitemaps, schema,
                Open Graph, canonical pagination, robots control, and archive SEO fields.
              </p>
            </div>
            <Link
              href="/product/lattice-seo"
              className="inline-flex shrink-0 items-center justify-center rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-800"
            >
              View Lattice SEO
            </Link>
          </div>
        </div>
      </section>

      <section className="container-x pb-20">
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {catalogProducts.map((product: any) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>
    </main>
  );
}
