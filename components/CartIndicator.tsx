"use client";

import Link from "next/link";
import { useCart } from "@/lib/cart-context";
import { getCartItemCount } from "@/lib/cart";

export function CartIndicator() {
  const { cart } = useCart();
  const count = getCartItemCount(cart);

  return (
    <Link href="/checkout" style={{ textDecoration: "none", color: "inherit" }}>
      Carrinho ({count})
    </Link>
  );
}
