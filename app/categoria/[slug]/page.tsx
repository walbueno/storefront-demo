import Link from "next/link";
import { notFound } from "next/navigation";
import { getProductsByCategory, getAllCategories } from "@/data/products";
import { formatPriceBRL } from "@/lib/cart";

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const categories = getAllCategories();
  const category = categories.find((c) => c.slug === slug);

  if (!category) {
    notFound();
  }

  const products = getProductsByCategory(slug);

  return (
    <main style={{ maxWidth: 960, margin: "0 auto", padding: "2rem 1.5rem" }}>
      <Link href="/" style={{ color: "#666", fontSize: "0.875rem" }}>
        ← Voltar para a loja
      </Link>
      <h1 style={{ fontSize: "1.75rem", margin: "1rem 0 1.5rem" }}>{category.label}</h1>

      {products.length === 0 && <p>Nenhum produto encontrado nesta categoria.</p>}

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))",
          gap: "1.5rem",
        }}
      >
        {products.map((product) => (
          <Link
            key={product.id}
            href={`/produto/${product.slug}`}
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <div
              style={{
                aspectRatio: "1",
                background: "#f2f2f2",
                borderRadius: "8px",
                marginBottom: "0.5rem",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#999",
                fontSize: "0.75rem",
              }}
            >
              {product.imageAlt}
            </div>
            <h2 style={{ fontSize: "1rem", marginBottom: "0.25rem" }}>{product.name}</h2>
            <p style={{ fontWeight: 600 }}>{formatPriceBRL(product.priceCents)}</p>
          </Link>
        ))}
      </div>
    </main>
  );
}
