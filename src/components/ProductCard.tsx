import Image from "next/image";
import Link from "next/link";

function formatPrice(price: string | number): string {
  const num = typeof price === "string" ? parseFloat(price) : price;
  if (isNaN(num) || num <= 0) return "Free";
  return `€${num.toFixed(2)}`;
}

function isFree(price: string | number): boolean {
  const num = typeof price === "string" ? parseFloat(price) : price;
  return isNaN(num) || num <= 0;
}

function getCartUrl(productId: number): string {
  return `https://latticeplugins.com/cart/?add-to-cart=${productId}`;
}

function initials(name = ""): string {
  return name
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase())
    .join("") || "LP";
}

const ACCENTS: Record<string, string> = {
  "lattice-seo": "border-blue-100 bg-blue-50 text-blue-300",
  "lattice-subscribify": "border-violet-100 bg-violet-50 text-violet-300",
  "lattice-stripe-payments": "border-cyan-100 bg-cyan-50 text-cyan-300",
  "lattice-migrate": "border-emerald-100 bg-emerald-50 text-emerald-300",
  "lattice-crm": "border-indigo-100 bg-indigo-50 text-indigo-300",
  "lattice-core": "border-teal-100 bg-teal-50 text-teal-300",
  "lattice-commerce-suite": "border-sky-100 bg-sky-50 text-sky-300",
};

const BADGES: Record<string, string> = {
  "lattice-seo": "SEO",
  "lattice-subscribify": "SUB",
  "lattice-stripe-payments": "PAY",
  "lattice-migrate": "MIG",
  "lattice-crm": "CRM",
  "lattice-core": "CORE",
  "lattice-commerce-suite": "CS",
};

export default function ProductCard({ product }: { product: any }) {
  const description = (product?.short_description || product?.description || "").replace(/<[^>]*>/g, " ").replace(/\s+/g, " ").trim();
  const accent = ACCENTS[product?.slug] || "border-slate-100 bg-slate-50 text-slate-300";
  const badge = BADGES[product?.slug] || initials(product.name);

  return (
    <article className="group flex h-full w-full flex-col rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:border-slate-300 hover:shadow-card">
      <Link href={`/product/${product.slug}`} className="block">
        {product.images?.[0] ? (
          <Image
            src={product.images[0].src}
            alt={product.name}
            width={640}
            height={400}
            className="mb-5 h-44 w-full rounded-xl border border-slate-100 object-cover"
          />
        ) : (
          <div className={`mb-5 flex h-44 w-full items-center justify-center rounded-xl border ${accent}`}>
            <span className={`flex h-16 w-16 items-center justify-center rounded-2xl bg-white/85 font-display font-bold shadow-sm ${badge.length > 3 ? "text-lg" : "text-2xl"}`}>
              {badge}
            </span>
          </div>
        )}
      </Link>

      <h3 className="font-display text-xl font-semibold text-slate-950">
        <Link href={`/product/${product.slug}`} className="transition hover:text-blue-700">
          {product.name}
        </Link>
      </h3>
      <p className="mt-2 line-clamp-2 text-sm leading-6 text-slate-600">{description}</p>

      <div className="mt-auto pt-6">
        <div className="mb-4 font-display text-2xl font-bold text-slate-950">{formatPrice(product.price)}</div>
        <div className="flex flex-col gap-2">
          <a
            href={getCartUrl(product.id)}
            className="inline-flex items-center justify-center whitespace-nowrap rounded-full bg-slate-900 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-slate-800"
          >
            {isFree(product.price) ? "Download Free" : "Add to Cart"}
          </a>
          <Link
            href={`/product/${product.slug}`}
            className="inline-flex items-center justify-center whitespace-nowrap rounded-full border border-slate-200 px-4 py-2.5 text-sm font-semibold text-slate-700 transition hover:border-slate-300 hover:bg-slate-50"
          >
            Details
          </Link>
        </div>
        <p className="mt-3 text-center text-xs text-slate-500">{isFree(product.price) ? "Free forever · Lifetime updates" : "One-time price · Lifetime updates"}</p>
      </div>
    </article>
  );
}
