"use client";

import { useState } from "react";
import { Product } from "@/data/products";
import { useCart } from "@/lib/cart-context";

export function AddToCartButton({ product }: { product: Product }) {
  const { addItem } = useCart();
  const [added, setAdded] = useState(false);

  function handleClick() {
    addItem(product, 1);
    setAdded(true);
    setTimeout(() => setAdded(false), 1500);
  }

  return (
    <button
      onClick={handleClick}
      style={{
        padding: "0.75rem 1.5rem",
        background: added ? "#16a34a" : "#111",
        color: "#fff",
        border: "none",
        borderRadius: "6px",
        cursor: "pointer",
        fontSize: "1rem",
      }}
    >
      {added ? "Adicionado!" : "Adicionar ao carrinho"}
    </button>
  );
}
