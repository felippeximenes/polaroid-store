/*
 * components/Products/Products.jsx
 * ─────────────────────────────────────────────────────────
 * Grid de produtos com dois tipos de card:
 *  - Card padrão → produto com imagem, nome, preço e botão
 *  - Card featured → produto em destaque (fundo amarelo, maior)
 *
 * Props:
 *  - products     {Array}    — lista de produtos (data/products.js)
 *  - onAddToCart  {function} — callback ao clicar em "Adicionar"
 * ─────────────────────────────────────────────────────────
 */

import './Products.css';

/* Mapeia classe de fundo por nome para gradiente CSS */
const BG_MAP = {
  pink:  'linear-gradient(145deg, #FFD0E0, #FFB8CC)',
  mint:  'linear-gradient(145deg, #C8F0EC, #A8E0DA)',
  rose:  'linear-gradient(145deg, #FFE0E8, #FFB8CC)',
  blue:  'linear-gradient(145deg, #D8E8FF, #B8D0FF)',
};

export default function Products({ products = [], onAddToCart }) {

  // Separa o produto featured dos demais
  const featured     = products.find(p => p.featured);
  const regularCards = products.filter(p => !p.featured);

  return (
    <section className="products">

      {/* ── Cabeçalho ────────────────────────────── */}
      <div className="products__header">
        <p className="section-label">Artist Take</p>
        <h2 className="section-title">
          Antist Taler<br />Itranier Insider
        </h2>

        {/* Estatísticas rápidas abaixo do título */}
        <div className="products__quick-stats">
          <div className="products__stat">
            <span className="products__stat-num">50%</span>
            <span className="products__stat-desc">Cashback Gural · 5 Items</span>
          </div>
          <div className="products__stat">
            <span className="products__stat-num">50%</span>
            <span className="products__stat-desc">Cashback Gural · 5 Reviews</span>
          </div>
        </div>

        <div className="products__header-actions">
          <span>😊</span>
          <button className="btn-outline">Ver Mais</button>
        </div>
      </div>

      {/* ── Grid de produtos ─────────────────────── */}
      <div className="products__grid">

        {/* Cards regulares (primeiros 2 antes do featured) */}
        {regularCards.slice(0, 2).map(product => (
          <ProductCard
            key={product.id}
            product={product}
            onAdd={onAddToCart}
          />
        ))}

        {/* Card destaque — ocupa altura de 2 linhas */}
        {featured && (
          <FeaturedCard product={featured} onAdd={onAddToCart} />
        )}

        {/* Demais cards regulares */}
        {regularCards.slice(2).map(product => (
          <ProductCard
            key={product.id}
            product={product}
            onAdd={onAddToCart}
          />
        ))}

      </div>
    </section>
  );
}

/* ── Sub-componente: Card padrão ─────────────────────── */
function ProductCard({ product, onAdd }) {
  const { name, brand, price, emoji, bg, discount } = product;
  const bgStyle = BG_MAP[bg] || 'linear-gradient(145deg, #eee, #ddd)';

  return (
    <div className="prod-card">

      {/* Área da imagem */}
      <div className="prod-card__img" style={{ background: bgStyle }}>
        {/* Badge de desconto (se houver) */}
        {discount && (
          <span className="prod-card__discount">{discount}</span>
        )}
        <span className="prod-card__emoji">{emoji}</span>
      </div>

      {/* Informações do produto */}
      <div className="prod-card__body">
        <p className="prod-card__name">{name}</p>
        <p className="prod-card__brand">{brand}</p>
        <div className="prod-card__footer">
          <span className="prod-card__price">{price}</span>
          <button
            className="prod-card__add-btn"
            aria-label={`Adicionar ${name} ao carrinho`}
            onClick={() => onAdd?.(product)}
          >
            +
          </button>
        </div>
      </div>

    </div>
  );
}

/* ── Sub-componente: Card destaque ───────────────────── */
function FeaturedCard({ product, onAdd }) {
  const { name, emoji, price } = product;

  return (
    <div className="prod-card--featured">

      {/* Emoji animado flutuando */}
      <div className="prod-card__feat-emoji">{emoji}</div>

      {/* Conteúdo textual */}
      <div className="prod-card__feat-content">
        <p className="prod-card__feat-label">Vgame</p>
        <h3 className="prod-card__feat-title">Neat thor Phyrock</h3>
        <p className="prod-card__feat-desc">
          Experimente seus jogos favoritos com o máximo de performance e precisão.
          Design ergonômico e conexão wireless.
        </p>
        <p className="prod-card__feat-price">{price}</p>
        <button
          className="prod-card__feat-btn"
          onClick={() => onAdd?.(product)}
        >
          Adicionar ao Carrinho
        </button>
      </div>

    </div>
  );
}
