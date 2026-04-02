/*
 * data/testimonials.js
 * ─────────────────────────────────────────────────────────
 * Mock de depoimentos de clientes exibidos na seção Testimonials.
 *
 * Cada objeto contém:
 *  - id      → identificador único
 *  - name    → nome do cliente
 *  - role    → título/papel (ex: "Cliente Premium")
 *  - text    → texto do depoimento
 *  - stars   → número de estrelas (1–5)
 *  - color   → cor de fundo do avatar
 *  - emoji   → avatar visual
 * ─────────────────────────────────────────────────────────
 */

export const testimonials = [
  {
    id: 1,
    name: "Ana Lima",
    role: "Cliente Premium",
    text: "Produtos incríveis e entrega rápida! A câmera Instax que comprei superou minhas expectativas. Recomendo muito!",
    stars: 5,
    color: "#FFE5F0",
    emoji: "👩",
  },
  {
    id: 2,
    name: "Carlos Mendes",
    role: "Entusiasta de Tech",
    text: "O controle de games chegou em perfeito estado e a qualidade é excepcional. Com certeza vou comprar mais!",
    stars: 5,
    color: "#E0F5FF",
    emoji: "👨",
  },
  {
    id: 3,
    name: "Beatriz Costa",
    role: "Designer Gráfica",
    text: "A Polaroid Store tem o melhor custo-benefício que já vi. Os acessórios de celular são lindos e duráveis.",
    stars: 4,
    color: "#F0ECFF",
    emoji: "👩‍💼",
  },
];
