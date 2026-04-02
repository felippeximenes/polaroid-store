/*
 * components/Categories/Categories.jsx
 * ─────────────────────────────────────────────────────────
 * Grid de categorias de produtos.
 * Renderiza dois tipos de card:
 *  - "default"  → card pequeno com ícone + info + badge
 *  - "featured" → card grande com múltiplos emojis e badge de desconto
 *
 * Props:
 *  - categories {Array} — lista de objetos de categoria (de data/categories.js)
 * ─────────────────────────────────────────────────────────
 */

import './Categories.css';

export default function Categories({ categories = [] }) {

  // Separa as categorias por tipo de layout
  const defaultCards  = categories.filter(c => c.variant === 'default');
  const featuredCards = categories.filter(c => c.variant === 'featured');

  return (
    <section className="categories">

      {/* ── Cabeçalho da seção ───────────────────── */}
      <div className="categories__header">
        <div>
          <p className="section-label">Our Lines</p>
          <h2 className="section-title">Cour electronic Imlatter</h2>
        </div>
        <button className="btn-outline">Ver Todos</button>
      </div>

      {/* ── Grid de cards ────────────────────────── */}
      <div className="categories__grid">

        {/* Coluna esquerda — cards padrão */}
        <div className="categories__col">
          {defaultCards.map(cat => (
            <div key={cat.id} className={`cat-card ${cat.bg}`}>
              <div className="cat-card__icon">{cat.emoji}</div>
              <div className="cat-card__info">
                <div className="cat-card__name">{cat.name}</div>
                <div className="cat-card__count">{cat.count}</div>
                <span className={`cat-card__badge cat-card__badge--${cat.badgeVariant}`}>
                  {cat.badge}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Coluna direita — card destaque */}
        {featuredCards.map(cat => (
          <div key={cat.id} className="cat-card cat-card--featured">
            <div className="cat-card__featured-badge">{cat.badge}</div>
            <div className="cat-card__featured-label">The Favorites</div>
            <div className="cat-card__featured-sub">
              Sua categoria favorita<br />shop nlike lino
            </div>
            <div className="cat-card__featured-emojis">
              {cat.emojis?.map((e, i) => (
                <span key={i} style={{ fontSize: `${70 - i * 10}px` }}>{e}</span>
              ))}
            </div>
            <div className="cat-card__featured-tags">
              <span className="cat-card__badge cat-card__badge--yellow">Gaming</span>
              <span className="cat-card__badge cat-card__badge--blue">Audio</span>
            </div>
          </div>
        ))}

      </div>
    </section>
  );
}
