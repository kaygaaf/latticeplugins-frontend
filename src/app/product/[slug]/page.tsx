import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getProductBySlug, getProductVariations } from "@/lib/woocommerce";

interface ProductPageProps {
  params: { slug: string };
}

function formatPrice(price: string | number): string {
  const num = typeof price === "string" ? parseFloat(price) : price;
  if (isNaN(num) || num <= 0) return "Free";
  return `€${num.toFixed(2)}`;
}

function getCartUrl(productId: number, variationId?: number): string {
  const base = "https://latticeplugins.com";
  if (variationId) {
    return `${base}/cart/?add-to-cart=${productId}&variation_id=${variationId}`;
  }
  return `${base}/cart/?add-to-cart=${productId}`;
}

export default async function ProductPage({ params }: ProductPageProps) {
  const product = await getProductBySlug(params.slug);

  if (!product) {
    notFound();
  }

  const variations = await getProductVariations(product.id);

  return (
    <main className="min-h-screen p-8 max-w-4xl mx-auto">
      <Link href="/shop" className="text-blue-600 underline mb-4 inline-block">
        ← Back to Shop
      </Link>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-4">
        <div>
          {product.images?.[0] && (
            <Image 
              src={product.images[0].src} 
              alt={product.name}
              width={600}
              height={400}
              className="w-full rounded-lg"
            />
          )}
        </div>
        
        <div>
          <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
          <p 
            className="text-gray-600 mb-6"
            dangerouslySetInnerHTML={{ __html: product.description }}
          />
          
          <div className="text-3xl font-bold text-blue-600 mb-6">
            {formatPrice(product.price)}
          </div>
          
          {variations.length > 0 && (
            <div className="mb-6">
              <h3 className="font-semibold mb-2">Available Options:</h3>
              <div className="flex flex-col gap-2">
                {variations.map((variation: any) => (
                  <div key={variation.id} className="border p-3 rounded flex items-center justify-between">
                    <span className="font-medium">{variation.attributes.map((a: any) => a.option).join(', ')}</span>
                    <div className="flex items-center gap-4">
                      <span className="text-blue-600 font-bold">{formatPrice(variation.price)}</span>
                      <a
                        href={getCartUrl(product.id, variation.id)}
                        className="bg-blue-600 text-white px-3 py-1 rounded text-sm hover:bg-blue-700 transition"
                      >
                        Add to Cart
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
          
          <a 
            href={getCartUrl(product.id)}
            className="bg-green-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-700 transition inline-block"
          >
            {parseFloat(product.price) <= 0 ? "Download Free" : "Add to Cart"}
          </a>
        </div>
      </div>
    </main>
  );
}
