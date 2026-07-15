import Link from "next/link";
import { products, getAllCategories } from "@/data/products";
import { formatPriceBRL } from "@/lib/cart";

export default function Home() {
  const categories = getAllCategories();

  return (
    <main style={{ maxWidth: 960, margin: "0 auto", padding: "2rem 1.5rem" }}>
      <section style={{ marginBottom: "2.5rem" }}>
        <h1 style={{ fontSize: "2rem", marginBottom: "0.5rem" }}>
          Loja Demo
        </h1>
        <p style={{ color: "#666" }}>
          Demonstração conceitual de e-commerce, com foco em performance e boas práticas.
        </p>
      </section>

      <section style={{ marginBottom: "2.5rem" }}>
        <h2 style={{ fontSize: "1.25rem", marginBottom: "0.75rem" }}>Categorias</h2>
        <div style={{ display: "flex", gap: "0.75rem" }}>
          {categories.map((category) => (
            <Link
              key={category.slug}
              href={`/categoria/${category.slug}`}
              style={{
                padding: "0.5rem 1rem",
                border: "1px solid #ddd",
                borderRadius: "999px",
                textDecoration: "none",
                color: "inherit",
              }}
            >
              {category.label}
            </Link>
          ))}
        </div>
      </section>

      <section>
        <h2 style={{ fontSize: "1.25rem", marginBottom: "0.75rem" }}>Produtos em destaque</h2>
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
              <h3 style={{ fontSize: "1rem", marginBottom: "0.25rem" }}>{product.name}</h3>
              <p style={{ fontWeight: 600 }}>{formatPriceBRL(product.priceCents)}</p>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
