export interface Product {
  id: string;
  slug: string;
  name: string;
  category: "camisetas" | "calcados" | "acessorios";
  categoryLabel: string;
  priceCents: number;
  description: string;
  imageAlt: string;
}

export const products: Product[] = [
  {
    id: "p1",
    slug: "camiseta-basica-branca",
    name: "Camiseta Básica Branca",
    category: "camisetas",
    categoryLabel: "Camisetas",
    priceCents: 8990,
    description: "Camiseta 100% algodão, corte reto, ideal para o dia a dia.",
    imageAlt: "Camiseta branca básica em fundo neutro",
  },
  {
    id: "p2",
    slug: "camiseta-estampada-preta",
    name: "Camiseta Estampada Preta",
    category: "camisetas",
    categoryLabel: "Camisetas",
    priceCents: 10990,
    description: "Camiseta preta com estampa minimalista, algodão premium.",
    imageAlt: "Camiseta preta com estampa em fundo neutro",
  },
  {
    id: "p3",
    slug: "tenis-urbano-cinza",
    name: "Tênis Urbano Cinza",
    category: "calcados",
    categoryLabel: "Calçados",
    priceCents: 24990,
    description: "Tênis leve para uso urbano, solado em borracha antiderrapante.",
    imageAlt: "Tênis cinza em fundo neutro",
  },
  {
    id: "p4",
    slug: "bone-aba-curva",
    name: "Boné Aba Curva",
    category: "acessorios",
    categoryLabel: "Acessórios",
    priceCents: 5990,
    description: "Boné ajustável, aba curva, tecido resistente.",
    imageAlt: "Boné preto em fundo neutro",
  },
];

export function getAllCategories(): { slug: string; label: string }[] {
  const seen = new Map<string, string>();
  for (const product of products) {
    seen.set(product.category, product.categoryLabel);
  }
  return Array.from(seen.entries()).map(([slug, label]) => ({ slug, label }));
}

export function getProductsByCategory(categorySlug: string): Product[] {
  return products.filter((p) => p.category === categorySlug);
}

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}
