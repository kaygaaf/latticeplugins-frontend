import Link from "next/link";
import Image from "next/image";
import { getProducts } from "@/lib/woocommerce";

export default async function ShopPage() {
  const products = await getProducts();

  return (
    <main className="min-h-screen p-8 max-w-6xl mx-auto">
      <h1 className="text-4xl font-bold mb-8 text-center">Shop</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product: any) => (
          <div key={product.id} className="border rounded-lg p-6 hover:shadow-lg transition">
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
              <Link href={`/product/${product.slug}`} className="hover:text-blue-600">
                {product.name}
              </Link>
            </h2>
            <p 
              className="text-gray-600 mb-4 line-clamp-2"
              dangerouslySetInnerHTML={{ __html: product.short_description }}
            />
            <div className="flex items-center justify-between">
              <span className="text-2xl font-bold text-blue-600">
                {product.price === '0' ? 'Free' : `€${product.price}`}
              </span>
              <Link 
                href={`/product/${product.slug}`}
                className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
              >
                View Details
              </Link>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
