import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getProductBySlug, getProductVariations } from "@/lib/woocommerce";

interface ProductPageProps {
  params: { slug: string };
}

export default async function ProductPage({ params }: ProductPageProps) {
  const product = await getProductBySlug(params.slug);
  
  if (!product) {
    notFound();
  }

  const variations = await getProductVariations(product.id);

  return (
    <main className="min-h-screen p-8 max-w-4xl mx-auto">
      <Link href="/shop" className="text-blue-600 hover:underline mb-4 inline-block">
        ← Back to Shop
      </Link>
      
      <div className="grid md:grid-cols-2 gap-8 mt-4">
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
            {product.price === '0' ? 'Free' : `€${product.price}`}
          </div>
          
          {variations.length > 0 && (
            <div className="mb-6">
              <h3 className="font-semibold mb-2">Available Options:</h3>
              <div className="space-y-2">
                {variations.map((variation: any) => (
                  <div key={variation.id} className="border p-3 rounded">
                    <span className="font-medium">{variation.attributes.map((a: any) => a.option).join(', ')}</span>
                    <span className="ml-4 text-blue-600 font-bold">€{variation.price}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
          
          <a 
            href={`https://latticeplugins.com/wp/checkout/?add-to-cart=${product.id}`}
            className="bg-green-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-700 transition inline-block"
          >
            Buy Now
          </a>
        </div>
      </div>
    </main>
  );
}
