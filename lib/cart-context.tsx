"use client";

import { createContext, useContext, useEffect, useState, ReactNode } from "react";
import { Product } from "@/data/products";
import {
  Cart,
  addToCart as addToCartPure,
  removeFromCart as removeFromCartPure,
  updateQuantity as updateQuantityPure,
  loadCartFromStorage,
  saveCartToStorage,
} from "@/lib/cart";

interface CartContextValue {
  cart: Cart;
  addItem: (product: Product, quantity?: number) => void;
  removeItem: (productId: string) => void;
  setQuantity: (productId: string, quantity: number) => void;
}

const CartContext = createContext<CartContextValue | undefined>(undefined);

export function CartProvider({ children }: { children: ReactNode }) {
  const [cart, setCart] = useState<Cart>([]);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    setCart(loadCartFromStorage());
    setHydrated(true);
  }, []);

  useEffect(() => {
    if (hydrated) {
      saveCartToStorage(cart);
    }
  }, [cart, hydrated]);

  function addItem(product: Product, quantity = 1) {
    setCart((current) => addToCartPure(current, product, quantity));
  }

  function removeItem(productId: string) {
    setCart((current) => removeFromCartPure(current, productId));
  }

  function setQuantity(productId: string, quantity: number) {
    setCart((current) => updateQuantityPure(current, productId, quantity));
  }

  return (
    <CartContext.Provider value={{ cart, addItem, removeItem, setQuantity }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart(): CartContextValue {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart precisa ser usado dentro de um CartProvider");
  }
  return context;
}
