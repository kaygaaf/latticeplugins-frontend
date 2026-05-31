import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getProductBySlug, getProductVariations } from "@/lib/woocommerce";

const SITE_URL = "https://latticeplugins.com";

interface ProductPageProps {
  params: { slug: string };
}

type ProductMeta = {
  eyebrow: string;
  headline: string;
  features: string[];
  idealFor: string[];
  outcomes: string[];
};

const PRODUCT_META: Record<string, ProductMeta> = {
  "lattice-commerce-suite": {
    eyebrow: "WooCommerce revenue toolkit",
    headline: "Recover carts, lift order value, and remove checkout friction from one plugin.",
    features: [
      "Abandoned cart recovery flows",
      "Checkout upsells and order bumps",
      "Direct checkout links for campaigns",
      "Trust badges and conversion widgets",
      "Smart coupons and promotion rules",
      "Commerce analytics dashboard",
    ],
    idealFor: ["WooCommerce stores", "Digital product shops", "Agencies optimizing client checkouts"],
    outcomes: ["Higher average order value", "More recovered revenue", "Faster checkout paths"],
  },
  "lattice-core": {
    eyebrow: "Free Lattice foundation",
    headline: "The shared UI, licensing, and updater layer for the Lattice plugin ecosystem.",
    features: [
      "Shared admin UI components",
      "License client and server helpers",
      "Automatic update framework",
      "Health monitoring utilities",
      "AJAX helpers and reusable JavaScript",
      "Freemium limit management",
    ],
    idealFor: ["Lattice users", "WordPress site owners", "Plugin ecosystem foundations"],
    outcomes: ["Consistent admin experience", "Reliable updates", "A clean base for paid add-ons"],
  },
  "lattice-crm": {
    eyebrow: "WordPress-native CRM",
    headline: "Manage customers, deals, campaigns, and WooCommerce activity without leaving WordPress.",
    features: [
      "Contact and company management",
      "Deal pipeline tracking",
      "Email campaigns",
      "WooCommerce customer sync",
      "Advanced analytics for higher tiers",
      "Activity timeline and segmentation",
    ],
    idealFor: ["WooCommerce merchants", "Service businesses", "Small teams using WordPress as HQ"],
    outcomes: ["Clearer sales pipeline", "Better customer follow-up", "Unified commerce and CRM data"],
  },
  "lattice-migrate": {
    eyebrow: "Backup, restore, and staging",
    headline: "Move and protect WordPress sites with encrypted backups and safer restore workflows.",
    features: [
      "Full-site backup archives",
      "One-click restore workflow",
      "Staging environment creation",
      "S3, FTP, and SFTP storage targets",
      "Selective partial restores",
      "Encryption and integrity checks",
    ],
    idealFor: ["WordPress agencies", "WooCommerce stores", "Developers managing production sites"],
    outcomes: ["Lower migration risk", "Faster disaster recovery", "Safer staging tests"],
  },
  "lattice-stripe-payments": {
    eyebrow: "Free Stripe checkout",
    headline: "Accept modern Stripe payments in WooCommerce with SCA-ready checkout support.",
    features: [
      "Custom Stripe payment gateway",
      "Apple Pay and Google Pay support",
      "Subscription billing compatibility",
      "SCA-ready payment flows",
      "Webhook handling",
      "Free entry point for Lattice users",
    ],
    idealFor: ["New WooCommerce stores", "Digital product sellers", "Subscription businesses"],
    outcomes: ["Modern card payments", "Lower payment friction", "A free path into the Lattice stack"],
  },
  "lattice-subscribify": {
    eyebrow: "Subscriptions for WooCommerce",
    headline: "Launch subscription products with renewals, dunning emails, and subscription analytics.",
    features: [
      "Recurring product support",
      "Stripe renewal management",
      "Dunning email workflows",
      "Subscription status dashboard",
      "Customer billing management",
      "Subscription performance analytics",
    ],
    idealFor: ["Membership sites", "SaaS-like WordPress products", "Recurring digital services"],
    outcomes: ["Predictable recurring revenue", "Fewer failed renewals", "Clear subscription metrics"],
  },
  "lattice-seo": {
    eyebrow: "Premium SEO suite",
    headline: "A focused SEO toolkit for WordPress sites that need technical SEO without subscription pricing.",
    features: [
      "XML sitemap generation",
      "Schema.org structured data",
      "Open Graph and Twitter Cards",
      "SEO title and meta templates",
      "404 monitoring and redirects",
      "WooCommerce SEO foundations",
    ],
    idealFor: ["WordPress publishers", "WooCommerce catalogs", "Agencies replacing subscription SEO tools"],
    outcomes: ["Cleaner technical SEO", "Better social previews", "More control over indexation"],
  },
};

function stripHtml(html = ""): string {
  return html.replace(/<[^>]*>/g, " ").replace(/\s+/g, " ").trim();
}

function formatPrice(price: string | number): string {
  const num = typeof price === "string" ? parseFloat(price) : price;
  if (isNaN(num) || num <= 0) return "Free";
  return `€${num.toFixed(2)}`;
}

function getCartUrl(productId: number, variationId?: number): string {
  if (variationId) {
    return `${SITE_URL}/cart/?add-to-cart=${productId}&variation_id=${variationId}`;
  }
  return `${SITE_URL}/cart/?add-to-cart=${productId}`;
}

export async function generateMetadata({ params }: ProductPageProps): Promise<Metadata> {
  const product = await getProductBySlug(params.slug);

  if (!product) {
    return {
      title: "Product not found — Lattice Plugins",
      robots: { index: false, follow: false },
    };
  }

  const meta = PRODUCT_META[params.slug];
  const description = (meta?.headline || stripHtml(product.short_description || product.description || "")).slice(0, 155);
  const title = `${product.name} — Lattice Plugins`;
  const canonical = `${SITE_URL}/product/${params.slug}`;
  const image = product.images?.[0]?.src;

  return {
    title,
    description,
    alternates: {
      canonical,
    },
    openGraph: {
      title,
      description,
      url: canonical,
      siteName: "Lattice Plugins",
      type: "website",
      images: image ? [{ url: image, alt: product.name }] : undefined,
    },
    twitter: {
      card: image ? "summary_large_image" : "summary",
      title,
      description,
      images: image ? [image] : undefined,
    },
  };
}

export default async function ProductPage({ params }: ProductPageProps) {
  const product = await getProductBySlug(params.slug);

  if (!product) {
    notFound();
  }

  const variations = await getProductVariations(product.id);
  const meta = PRODUCT_META[params.slug];
  const fallbackDescription = stripHtml(product.short_description || product.description || "");

  return (
    <main className="min-h-screen bg-slate-50">
      <section className="bg-gradient-to-br from-blue-700 via-indigo-700 to-purple-700 text-white">
        <div className="max-w-6xl mx-auto px-6 py-14">
          <Link href="/shop" className="text-blue-100 hover:text-white underline underline-offset-4 mb-8 inline-block">
            ← Back to Shop
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div>
              <p className="uppercase tracking-[0.3em] text-sm text-blue-100 mb-4">
                {meta?.eyebrow || "Lattice WordPress Plugin"}
              </p>
              <h1 className="text-4xl md:text-5xl font-bold mb-5 leading-tight">{product.name}</h1>
              <p className="text-xl text-blue-50 mb-8 leading-relaxed">
                {meta?.headline || fallbackDescription || "Premium WordPress tooling for serious site owners."}
              </p>

              <div className="flex flex-wrap gap-3 mb-8">
                <span className="bg-white/15 border border-white/20 rounded-full px-4 py-2 text-sm">Lifetime updates</span>
                <span className="bg-white/15 border border-white/20 rounded-full px-4 py-2 text-sm">WordPress + WooCommerce ready</span>
                <span className="bg-white/15 border border-white/20 rounded-full px-4 py-2 text-sm">Built in Europe</span>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
                <div className="text-4xl font-bold">{formatPrice(product.price)}</div>
                {variations.length === 0 && (
                  <a
                    href={getCartUrl(product.id)}
                    className="bg-white text-blue-700 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition shadow-lg"
                  >
                    {parseFloat(product.price || "0") <= 0 ? "Download Free" : "Add to Cart"}
                  </a>
                )}
              </div>
            </div>

            <div className="bg-white/10 border border-white/20 rounded-2xl p-6 shadow-2xl backdrop-blur">
              {product.images?.[0] ? (
                <Image
                  src={product.images[0].src}
                  alt={product.name}
                  width={700}
                  height={460}
                  className="w-full rounded-xl bg-white"
                />
              ) : (
                <div className="aspect-[4/3] rounded-xl bg-white text-slate-900 flex flex-col items-center justify-center text-center p-8">
                  <div className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">LP</div>
                  <p className="text-2xl font-semibold">{product.name}</p>
                  <p className="text-slate-500 mt-2">Premium WordPress plugin</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-14">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            <div className="bg-white rounded-2xl p-8 shadow-sm border">
              <h2 className="text-2xl font-bold mb-4">What it does</h2>
              {product.description ? (
                <div
                  className="prose prose-slate max-w-none text-slate-700 leading-relaxed"
                  dangerouslySetInnerHTML={{ __html: product.description }}
                />
              ) : (
                <p className="text-slate-700 leading-relaxed">{fallbackDescription}</p>
              )}
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-sm border">
              <h2 className="text-2xl font-bold mb-6">Key features</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {(meta?.features || []).map((feature) => (
                  <div key={feature} className="flex gap-3 p-4 rounded-xl bg-slate-50 border border-slate-100">
                    <span className="text-green-600 font-bold">✓</span>
                    <span className="text-slate-800">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {meta && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-white rounded-2xl p-8 shadow-sm border">
                  <h2 className="text-2xl font-bold mb-4">Best for</h2>
                  <ul className="space-y-3">
                    {meta.idealFor.map((item) => (
                      <li key={item} className="text-slate-700">• {item}</li>
                    ))}
                  </ul>
                </div>
                <div className="bg-white rounded-2xl p-8 shadow-sm border">
                  <h2 className="text-2xl font-bold mb-4">Expected outcomes</h2>
                  <ul className="space-y-3">
                    {meta.outcomes.map((item) => (
                      <li key={item} className="text-slate-700">• {item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            )}
          </div>

          <aside className="space-y-6">
            <div className="bg-white rounded-2xl p-6 shadow-sm border sticky top-6">
              <h2 className="text-xl font-bold mb-2">Get {product.name}</h2>
              <p className="text-slate-600 mb-5">Secure checkout through WooCommerce.</p>
              <div className="text-3xl font-bold text-blue-600 mb-5">{formatPrice(product.price)}</div>

              {variations.length > 0 ? (
                <div className="space-y-3">
                  <h3 className="font-semibold">Choose a plan</h3>
                  {variations.map((variation: any) => (
                    <a
                      key={variation.id}
                      href={getCartUrl(product.id, variation.id)}
                      className="block border p-4 rounded-xl hover:border-blue-500 hover:shadow-sm transition"
                    >
                      <div className="flex items-center justify-between gap-3">
                        <span className="font-medium">{variation.attributes.map((a: any) => a.option).join(", ") || "Plan"}</span>
                        <span className="text-blue-600 font-bold">{formatPrice(variation.price)}</span>
                      </div>
                    </a>
                  ))}
                </div>
              ) : (
                <a
                  href={getCartUrl(product.id)}
                  className="block text-center bg-green-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-700 transition"
                >
                  {parseFloat(product.price || "0") <= 0 ? "Download Free" : "Add to Cart"}
                </a>
              )}

              <div className="border-t mt-6 pt-6 space-y-3 text-sm text-slate-600">
                <div>✓ Instant account access after checkout</div>
                <div>✓ WordPress plugin updates included</div>
                <div>✓ Works with the Lattice Core foundation</div>
              </div>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}
