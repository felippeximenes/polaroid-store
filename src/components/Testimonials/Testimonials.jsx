/*
 * components/Testimonials/Testimonials.jsx
 * ─────────────────────────────────────────────────────────
 * Seção de depoimentos de clientes.
 * Exibe cards com estrelas, texto, avatar e nome.
 *
 * Props:
 *  - testimonials {Array} — lista de depoimentos (data/testimonials.js)
 * ─────────────────────────────────────────────────────────
 */

import './Testimonials.css';

export default function Testimonials({ testimonials = [] }) {
  return (
    <section className="testimonials">

      {/* ── Cabeçalho ────────────────────────────── */}
      <div className="testimonials__header">
        <p className="section-label">Autorred for Conne by Stars</p>
        <h2 className="section-title">O que nossos clientes dizem</h2>
        <p className="testimonials__desc">
          Mais de 50.000 clientes satisfeitos confiam na Polaroid Store
        </p>
      </div>

      {/* ── Grid de depoimentos ──────────────────── */}
      <div className="testimonials__grid">
        {testimonials.map(t => (
          <TestimonialCard key={t.id} testimonial={t} />
        ))}
      </div>

    </section>
  );
}

/* ── Sub-componente: Card de depoimento ──────────────── */
function TestimonialCard({ testimonial }) {
  const { name, role, text, stars, color, emoji } = testimonial;

  // Gera string de estrelas preenchidas e vazias
  const filledStars = '★'.repeat(stars);
  const emptyStars  = '☆'.repeat(5 - stars);

  return (
    <div className="test-card">

      {/* Estrelas de avaliação */}
      <div className="test-card__stars">
        {filledStars}{emptyStars}
      </div>

      {/* Texto do depoimento */}
      <p className="test-card__text">"{text}"</p>

      {/* Autor */}
      <div className="test-card__author">
        <div
          className="test-card__avatar"
          style={{ background: color }}
          aria-hidden="true"
        >
          {emoji}
        </div>
        <div>
          <p className="test-card__name">{name}</p>
          <p className="test-card__role">{role}</p>
        </div>
      </div>

    </div>
  );
}
