/*
 * data/categories.js
 * ─────────────────────────────────────────────────────────
 * Mock de categorias exibidas na seção Categories.
 *
 * Cada objeto contém:
 *  - id       → identificador único
 *  - name     → nome da categoria
 *  - count    → quantidade de produtos (exibida como legenda)
 *  - emoji    → ícone visual
 *  - bg       → classe CSS de cor de fundo do card
 *  - badge    → texto do botão/etiqueta
 *  - variant  → "default" | "featured" (card grande com múltiplos emojis)
 * ─────────────────────────────────────────────────────────
 */

export const categories = [
  {
    id: 1,
    name: "Smartphones",
    count: "124 produtos",
    emoji: "📱",
    bg: "pink-bg",
    badge: "Shop Now",
    badgeVariant: "yellow",
    variant: "default",
  },
  {
    id: 2,
    name: "Câmeras",
    count: "68 produtos",
    emoji: "📷",
    bg: "blue-bg",
    badge: "Explore",
    badgeVariant: "blue",
    variant: "default",
  },
  {
    id: 3,
    name: "Gaming & Audio",
    count: "Gaming · Audio · Acessórios",
    emojis: ["🎮", "📱", "🎧"], // múltiplos emojis para o card grande
    bg: "featured-bg",
    badge: "50% OFF",
    badgeVariant: "yellow",
    variant: "featured", // card grande com layout diferente
  },
];
