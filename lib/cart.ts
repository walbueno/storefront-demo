import { Product } from "@/data/products";

export interface CartItem {
  productId: string;
  slug: string;
  name: string;
  priceCents: number;
  quantity: number;
}

export type Cart = CartItem[];

/**
 * Formata um valor em centavos para reais (BRL).
 * Função pura, fácil de testar isoladamente.
 */
export function formatPriceBRL(cents: number): string {
  return (cents / 100).toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });
}

/**
 * Adiciona um produto ao carrinho. Se já existir, incrementa a quantidade.
 * Não muta o carrinho recebido, retorna um novo array.
 */
export function addToCart(cart: Cart, product: Product, quantity = 1): Cart {
  const existing = cart.find((item) => item.productId === product.id);

  if (existing) {
    return cart.map((item) =>
      item.productId === product.id
        ? { ...item, quantity: item.quantity + quantity }
        : item
    );
  }

  return [
    ...cart,
    {
      productId: product.id,
      slug: product.slug,
      name: product.name,
      priceCents: product.priceCents,
      quantity,
    },
  ];
}

/**
 * Remove um item do carrinho pelo productId.
 */
export function removeFromCart(cart: Cart, productId: string): Cart {
  return cart.filter((item) => item.productId !== productId);
}

/**
 * Atualiza a quantidade de um item. Se a quantidade for 0 ou menor, remove o item.
 */
export function updateQuantity(cart: Cart, productId: string, quantity: number): Cart {
  if (quantity <= 0) {
    return removeFromCart(cart, productId);
  }
  return cart.map((item) =>
    item.productId === productId ? { ...item, quantity } : item
  );
}

/**
 * Calcula o total do carrinho em centavos.
 */
export function getCartTotalCents(cart: Cart): number {
  return cart.reduce((total, item) => total + item.priceCents * item.quantity, 0);
}

/**
 * Calcula o total de itens (soma das quantidades) no carrinho.
 */
export function getCartItemCount(cart: Cart): number {
  return cart.reduce((count, item) => count + item.quantity, 0);
}

const CART_STORAGE_KEY = "storefront-demo:cart";

/**
 * Lê o carrinho do localStorage. Retorna carrinho vazio se não existir ou for inválido.
 * Isolado em uma função própria para que a lógica pura acima não dependa de localStorage.
 */
export function loadCartFromStorage(): Cart {
  if (typeof window === "undefined") return [];
  try {
    const raw = window.localStorage.getItem(CART_STORAGE_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    if (!Array.isArray(parsed)) return [];
    return parsed;
  } catch {
    return [];
  }
}

/**
 * Salva o carrinho no localStorage.
 */
export function saveCartToStorage(cart: Cart): void {
  if (typeof window === "undefined") return;
  window.localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cart));
}
