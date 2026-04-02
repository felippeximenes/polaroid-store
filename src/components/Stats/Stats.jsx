/*
 * components/Stats/Stats.jsx
 * ─────────────────────────────────────────────────────────
 * Barra horizontal com 3 estatísticas da loja:
 *  1. Cashback (30%)
 *  2. Avaliação dos clientes (4.8★)
 *  3. Velocidade de entrega (48h)
 *
 * Props: nenhuma (dados estáticos)
 * ─────────────────────────────────────────────────────────
 */

import './Stats.css';

/* Dados das estatísticas — mover para data/ se precisar tornar dinâmico */
const STATS = [
  {
    id: 'cashback',
    value: '30',
    unit: '%',
    label: 'Give Back',
    description: 'Em todas as compras acima de R$200',
    extra: (
      <div className="stats__dots">
        <span className="stats__dot stats__dot--blue"  />
        <span className="stats__dot stats__dot--yellow"/>
        <span className="stats__dot stats__dot--coral" />
        <span className="stats__dot-label">Polaroid Points</span>
      </div>
    ),
  },
  {
    id: 'rating',
    value: '4.8',
    unit: '★',
    unitColor: 'yellow',
    label: 'Easy Rating',
    description: 'Baseado em 12.400+ avaliações verificadas',
    extra: <span className="stats__rating-sub">★★★★★ 84% · ★★★★☆ 12%</span>,
  },
  {
    id: 'delivery',
    value: '48',
    unit: 'h',
    label: 'Entrega Rápida',
    description: 'Frete grátis em compras acima de R$150',
    extra: (
      <span className="stats__delivery-badge">✓ Easy Delivery</span>
    ),
    showBadgeAbove: true, // badge aparece acima do número
  },
];

export default function Stats() {
  return (
    <div className="stats">
      {STATS.map((stat, index) => (
        <div
          key={stat.id}
          className={`stats__item ${index < STATS.length - 1 ? 'stats__item--border' : ''}`}
        >
          {/* Badge acima (apenas entrega) */}
          {stat.showBadgeAbove && stat.extra}

          {/* Número principal */}
          <div className="stats__number">
            {stat.value}
            <span className={`stats__unit ${stat.unitColor ? `stats__unit--${stat.unitColor}` : ''}`}>
              {stat.unit}
            </span>
          </div>

          <p className="stats__label">{stat.label}</p>
          <p className="stats__desc">{stat.description}</p>

          {/* Extra abaixo (pontos, rating sub, etc.) */}
          {!stat.showBadgeAbove && stat.extra}
        </div>
      ))}
    </div>
  );
}
