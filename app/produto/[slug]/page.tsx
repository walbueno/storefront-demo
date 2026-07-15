import Link from "next/link";
import { notFound } from "next/navigation";
import { getProductBySlug } from "@/data/products";
import { formatPriceBRL } from "@/lib/cart";
import { AddToCartButton } from "@/components/AddToCartButton";

export default async function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    notFound();
  }

  return (
    <main style={{ maxWidth: 960, margin: "0 auto", padding: "2rem 1.5rem" }}>
      <Link href={`/categoria/${product.category}`} style={{ color: "#666", fontSize: "0.875rem" }}>
        ← Voltar para {product.categoryLabel}
      </Link>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "2rem",
          marginTop: "1.5rem",
        }}
      >
        <div
          style={{
            aspectRatio: "1",
            background: "#f2f2f2",
            borderRadius: "8px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "#999",
            fontSize: "0.875rem",
          }}
        >
          {product.imageAlt}
        </div>

        <div>
          <h1 style={{ fontSize: "1.75rem", marginBottom: "0.5rem" }}>{product.name}</h1>
          <p style={{ fontSize: "1.5rem", fontWeight: 700, marginBottom: "1rem" }}>
            {formatPriceBRL(product.priceCents)}
          </p>
          <p style={{ color: "#444", marginBottom: "1.5rem" }}>{product.description}</p>
          <AddToCartButton product={product} />
        </div>
      </div>
    </main>
  );
}
