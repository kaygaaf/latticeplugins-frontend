import Link from "next/link";
import Image from "next/image";
import { getProducts } from "@/lib/woocommerce";
import { stripHtml } from "@/lib/text";

export const dynamic = "force-dynamic";

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

export default async function ShopPage() {
  const products = await getProducts();

  return (
    <main className="min-h-screen p-8 max-w-6xl mx-auto">
      <h1 className="text-4xl font-bold mb-8 text-center">Shop</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product: any) => (
          <div key={product.id} className="border rounded-lg p-6 hover:shadow-lg transition bg-white">
            {product.images?.[0] && (
              <Image
                src={product.images[0].src}
                alt={product.name}
                width={300}
                height={200}
                className="w-full h-48 object-cover rounded mb-4"
              />
            )}
            <h2 className="text-xl font-semibold mb-2">
              <Link href={`/product/${product.slug}`} className="hover:text-blue-600 transition">
                {product.name}
              </Link>
            </h2>
            <p className="text-gray-600 mb-4 line-clamp-2">
              {stripHtml(product.short_description || product.description)}
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:items-center sm:justify-between">
              <span className="text-2xl font-bold text-blue-600">
                {formatPrice(product.price)}
              </span>
              <div className="flex flex-col sm:flex-row gap-2">
                <a
                  href={getCartUrl(product.id)}
                  className="bg-green-600 text-white px-4 py-2 rounded text-center font-semibold hover:bg-green-700 transition"
                >
                  {isFree(product.price) ? "Download Free" : "Add to Cart"}
                </a>
                <Link
                  href={`/product/${product.slug}`}
                  className="border border-slate-200 px-4 py-2 rounded text-center hover:border-blue-500 hover:text-blue-600 transition"
                >
                  Details
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
