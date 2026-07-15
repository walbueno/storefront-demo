import {
  formatPriceBRL,
  addToCart,
  removeFromCart,
  updateQuantity,
  getCartTotalCents,
  getCartItemCount,
  Cart,
} from "../lib/cart";
import { Product } from "../data/products";

const productA: Product = {
  id: "p1",
  slug: "produto-a",
  name: "Produto A",
  category: "camisetas",
  categoryLabel: "Camisetas",
  priceCents: 5000,
  description: "Descrição A",
  imageAlt: "Produto A",
};

const productB: Product = {
  id: "p2",
  slug: "produto-b",
  name: "Produto B",
  category: "calcados",
  categoryLabel: "Calçados",
  priceCents: 12000,
  description: "Descrição B",
  imageAlt: "Produto B",
};

describe("formatPriceBRL", () => {
  it("formata centavos como moeda brasileira", () => {
    expect(formatPriceBRL(5000)).toContain("50,00");
    expect(formatPriceBRL(999)).toContain("9,99");
  });
});

describe("addToCart", () => {
  it("adiciona um novo produto ao carrinho vazio", () => {
    const cart = addToCart([], productA);
    expect(cart).toHaveLength(1);
    expect(cart[0].productId).toBe("p1");
    expect(cart[0].quantity).toBe(1);
  });

  it("incrementa a quantidade se o produto já estiver no carrinho", () => {
    let cart: Cart = addToCart([], productA);
    cart = addToCart(cart, productA);
    expect(cart).toHaveLength(1);
    expect(cart[0].quantity).toBe(2);
  });

  it("não muta o carrinho original (imutabilidade)", () => {
    const original: Cart = [];
    const updated = addToCart(original, productA);
    expect(original).toHaveLength(0);
    expect(updated).toHaveLength(1);
  });

  it("aceita quantidade customizada", () => {
    const cart = addToCart([], productA, 3);
    expect(cart[0].quantity).toBe(3);
  });
});

describe("removeFromCart", () => {
  it("remove o item pelo productId", () => {
    let cart = addToCart([], productA);
    cart = addToCart(cart, productB);
    cart = removeFromCart(cart, "p1");
    expect(cart).toHaveLength(1);
    expect(cart[0].productId).toBe("p2");
  });
});

describe("updateQuantity", () => {
  it("atualiza a quantidade de um item existente", () => {
    let cart = addToCart([], productA);
    cart = updateQuantity(cart, "p1", 5);
    expect(cart[0].quantity).toBe(5);
  });

  it("remove o item se a quantidade for 0 ou negativa", () => {
    let cart = addToCart([], productA);
    cart = updateQuantity(cart, "p1", 0);
    expect(cart).toHaveLength(0);
  });
});

describe("getCartTotalCents", () => {
  it("calcula o total correto para múltiplos itens", () => {
    let cart = addToCart([], productA, 2); // 5000 * 2 = 10000
    cart = addToCart(cart, productB, 1); // 12000 * 1 = 12000
    expect(getCartTotalCents(cart)).toBe(22000);
  });

  it("retorna 0 para carrinho vazio", () => {
    expect(getCartTotalCents([])).toBe(0);
  });
});

describe("getCartItemCount", () => {
  it("soma as quantidades de todos os itens", () => {
    let cart = addToCart([], productA, 2);
    cart = addToCart(cart, productB, 3);
    expect(getCartItemCount(cart)).toBe(5);
  });
});
