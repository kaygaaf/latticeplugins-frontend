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

export default function ProductCard({ product }: { product: any }) {
  const description = (product?.short_description || product?.description || "").replace(/<[^>]*>/g, " ").replace(/\s+/g, " ").trim();

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
          <div className="mb-5 flex h-44 w-full items-center justify-center rounded-xl border border-slate-100 bg-slate-50">
            <span className="font-display text-3xl font-bold text-slate-300">{initials(product.name)}</span>
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
        <div className="flex flex-col gap-2 sm:flex-row">
          <a
            href={getCartUrl(product.id)}
            className="inline-flex flex-1 items-center justify-center rounded-full bg-slate-900 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-slate-800"
          >
            {isFree(product.price) ? "Download Free" : "Add to Cart"}
          </a>
          <Link
            href={`/product/${product.slug}`}
            className="inline-flex flex-1 items-center justify-center rounded-full border border-slate-200 px-4 py-2.5 text-sm font-semibold text-slate-700 transition hover:border-slate-300 hover:bg-slate-50"
          >
            Details
          </Link>
        </div>
      </div>
    </article>
  );
}
