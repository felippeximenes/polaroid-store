/*
 * data/products.js
 * ─────────────────────────────────────────────────────────
 * Mock de produtos exibidos no grid da seção Products.
 *
 * Cada objeto contém:
 *  - id        → identificador único
 *  - name      → nome do produto
 *  - brand     → marca / fabricante
 *  - price     → preço formatado (string)
 *  - emoji     → ícone visual (substituível por <img> futuramente)
 *  - bg        → classe de cor de fundo do card
 *  - discount  → string de desconto (ex: "50%") ou null
 *  - featured  → boolean — se true, renderiza no card grande amarelo
 * ─────────────────────────────────────────────────────────
 */

export const products = [
  {
    id: 1,
    name: "iPhone 15 Case",
    brand: "Apple Acessórios",
    price: "R$129",
    emoji: "📱",
    bg: "pink",
    discount: null,
    featured: false,
  },
  {
    id: 2,
    name: "Instax Mini 12",
    brand: "Fujifilm",
    price: "R$449",
    emoji: "📷",
    bg: "mint",
    discount: "50%",
    featured: false,
  },
  {
    id: 3,
    name: "Pro Controller",
    brand: "GameForce",
    price: "R$649",
    emoji: "🎮",
    bg: null,
    discount: null,
    featured: true, // → renderizado no card destaque amarelo
  },
  {
    id: 4,
    name: "Headphone Pro",
    brand: "Sony Audio",
    price: "R$299",
    emoji: "🎧",
    bg: "rose",
    discount: null,
    featured: false,
  },
  {
    id: 5,
    name: 'Tablet Pro 11"',
    brand: "Samsung",
    price: "R$1.899",
    emoji: "📲",
    bg: "blue",
    discount: null,
    featured: false,
  },
];
