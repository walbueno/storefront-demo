"use client";

import { useState } from "react";
import Link from "next/link";
import { useCart } from "@/lib/cart-context";
import { formatPriceBRL, getCartTotalCents } from "@/lib/cart";

export default function CheckoutPage() {
  const { cart, removeItem, setQuantity } = useCart();
  const [submitted, setSubmitted] = useState(false);

  const total = getCartTotalCents(cart);

  function handleSubmit(event: React.FormEvent) {
    event.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <main style={{ maxWidth: 720, margin: "0 auto", padding: "3rem 1.5rem" }}>
        <h1 style={{ fontSize: "1.5rem", marginBottom: "1rem" }}>Pedido simulado com sucesso</h1>
        <p style={{ color: "#666" }}>
          Este é um checkout de demonstração. Nenhum pagamento real foi processado.
        </p>
        <Link href="/" style={{ display: "inline-block", marginTop: "1.5rem", color: "#111" }}>
          Voltar para a loja
        </Link>
      </main>
    );
  }

  if (cart.length === 0) {
    return (
      <main style={{ maxWidth: 720, margin: "0 auto", padding: "3rem 1.5rem" }}>
        <h1 style={{ fontSize: "1.5rem", marginBottom: "1rem" }}>Seu carrinho está vazio</h1>
        <Link href="/" style={{ color: "#111" }}>
          Continuar comprando
        </Link>
      </main>
    );
  }

  return (
    <main style={{ maxWidth: 720, margin: "0 auto", padding: "2rem 1.5rem" }}>
      <h1 style={{ fontSize: "1.75rem", marginBottom: "1.5rem" }}>Checkout</h1>

      <section style={{ marginBottom: "2rem" }}>
        <h2 style={{ fontSize: "1.1rem", marginBottom: "1rem" }}>Resumo do pedido</h2>
        <ul style={{ listStyle: "none", padding: 0 }}>
          {cart.map((item) => (
            <li
              key={item.productId}
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                padding: "0.75rem 0",
                borderBottom: "1px solid #eee",
              }}
            >
              <div>
                <p style={{ marginBottom: "0.25rem" }}>{item.name}</p>
                <input
                  type="number"
                  min={1}
                  value={item.quantity}
                  onChange={(e) => setQuantity(item.productId, Number(e.target.value))}
                  style={{ width: "60px", padding: "0.25rem" }}
                />
                <button
                  onClick={() => removeItem(item.productId)}
                  style={{
                    marginLeft: "0.75rem",
                    background: "none",
                    border: "none",
                    color: "#b91c1c",
                    cursor: "pointer",
                  }}
                >
                  Remover
                </button>
              </div>
              <p style={{ fontWeight: 600 }}>
                {formatPriceBRL(item.priceCents * item.quantity)}
              </p>
            </li>
          ))}
        </ul>
        <p style={{ textAlign: "right", fontSize: "1.25rem", fontWeight: 700, marginTop: "1rem" }}>
          Total: {formatPriceBRL(total)}
        </p>
      </section>

      <section>
        <h2 style={{ fontSize: "1.1rem", marginBottom: "1rem" }}>Dados de entrega e pagamento</h2>
        <p style={{ color: "#888", fontSize: "0.875rem", marginBottom: "1rem" }}>
          Formulário de demonstração. Nenhum dado é enviado, nenhum pagamento é processado.
        </p>
        <form onSubmit={handleSubmit} style={{ display: "grid", gap: "0.75rem" }}>
          <input type="text" placeholder="Nome completo" required style={{ padding: "0.6rem" }} />
          <input type="text" placeholder="Endereço" required style={{ padding: "0.6rem" }} />
          <input
            type="text"
            placeholder="Número do cartão (simulado)"
            required
            style={{ padding: "0.6rem" }}
          />
          <button
            type="submit"
            style={{
              padding: "0.75rem",
              background: "#111",
              color: "#fff",
              border: "none",
              borderRadius: "6px",
              cursor: "pointer",
              fontSize: "1rem",
            }}
          >
            Finalizar pedido (simulado)
          </button>
        </form>
      </section>
    </main>
  );
}
