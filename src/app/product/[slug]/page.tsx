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
    <main style={{ minHeight: "100vh", padding: "2rem", maxWidth: "56rem", margin: "0 auto" }}>
      <Link href="/shop" style={{ color: "#2563eb", textDecoration: "underline", marginBottom: "1rem", display: "inline-block" }}>
        ← Back to Shop
      </Link>
      
      <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "2rem", marginTop: "1rem" }}>
        <div>
          {product.images?.[0] && (
            <Image 
              src={product.images[0].src} 
              alt={product.name}
              width={600}
              height={400}
              style={{ width: "100%", borderRadius: "0.5rem" }}
            />
          )}
        </div>
        
        <div>
          <h1 style={{ fontSize: "1.875rem", fontWeight: 700, marginBottom: "1rem" }}>{product.name}</h1>
          <p 
            style={{ color: "#4b5563", marginBottom: "1.5rem" }}
            dangerouslySetInnerHTML={{ __html: product.description }}
          />
          
          <div style={{ fontSize: "1.875rem", fontWeight: 700, color: "#2563eb", marginBottom: "1.5rem" }}>
            {formatPrice(product.price)}
          </div>
          
          {variations.length > 0 && (
            <div style={{ marginBottom: "1.5rem" }}>
              <h3 style={{ fontWeight: 600, marginBottom: "0.5rem" }}>Available Options:</h3>
              <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                {variations.map((variation: any) => (
                  <div key={variation.id} style={{ border: "1px solid #e5e7eb", padding: "0.75rem", borderRadius: "0.375rem", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                    <span style={{ fontWeight: 500 }}>{variation.attributes.map((a: any) => a.option).join(', ')}</span>
                    <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
                      <span style={{ color: "#2563eb", fontWeight: 700 }}>{formatPrice(variation.price)}</span>
                      <a
                        href={getCartUrl(product.id, variation.id)}
                        style={{ backgroundColor: "#2563eb", color: "#ffffff", padding: "0.25rem 0.75rem", borderRadius: "0.25rem", textDecoration: "none", fontSize: "0.875rem" }}
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
            style={{ backgroundColor: "#16a34a", color: "#ffffff", padding: "0.75rem 2rem", borderRadius: "0.5rem", fontWeight: 600, textDecoration: "none", display: "inline-block" }}
          >
            {parseFloat(product.price) <= 0 ? "Download Free" : "Add to Cart"}
          </a>
        </div>
      </div>
    </main>
  );
}
