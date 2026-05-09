import Link from "next/link";
import Image from "next/image";
import { getProducts } from "@/lib/woocommerce";

function formatPrice(price: string | number): string {
  const num = typeof price === "string" ? parseFloat(price) : price;
  if (isNaN(num) || num <= 0) return "Free";
  return `€${num.toFixed(2)}`;
}

export default async function ShopPage() {
  const products = await getProducts();

  return (
    <main style={{ minHeight: "100vh", padding: "2rem", maxWidth: "72rem", margin: "0 auto" }}>
      <h1 style={{ fontSize: "2.25rem", fontWeight: 700, marginBottom: "2rem", textAlign: "center" }}>Shop</h1>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: "1.5rem" }}>
        {products.map((product: any) => (
          <div key={product.id} style={{ border: "1px solid #e5e7eb", borderRadius: "0.5rem", padding: "1.5rem", backgroundColor: "#ffffff", boxShadow: "0 1px 3px rgba(0,0,0,0.1)" }}>
            {product.images?.[0] && (
              <Image
                src={product.images[0].src}
                alt={product.name}
                width={300}
                height={200}
                style={{ width: "100%", height: "12rem", objectFit: "cover", borderRadius: "0.375rem", marginBottom: "1rem" }}
              />
            )}
            <h2 style={{ fontSize: "1.25rem", fontWeight: 600, marginBottom: "0.5rem" }}>
              <Link href={`/product/${product.slug}`} style={{ textDecoration: "none", color: "inherit" }}>
                {product.name}
              </Link>
            </h2>
            <p
              style={{ color: "#4b5563", marginBottom: "1rem", display: "-webkit-box", WebkitLineClamp: 2, WebkitBoxOrient: "vertical", overflow: "hidden" }}
              dangerouslySetInnerHTML={{ __html: product.short_description }}
            />
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
              <span style={{ fontSize: "1.5rem", fontWeight: 700, color: "#2563eb" }}>
                {formatPrice(product.price)}
              </span>
              <Link
                href={`/product/${product.slug}`}
                style={{ backgroundColor: "#2563eb", color: "#ffffff", padding: "0.5rem 1rem", borderRadius: "0.375rem", textDecoration: "none", fontWeight: 500 }}
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
