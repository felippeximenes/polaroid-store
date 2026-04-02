/*
 * components/Hero/Hero.jsx
 * ─────────────────────────────────────────────────────────
 * Seção principal da página (banner de destaque).
 * Contém:
 *  - Texto com headline e subtítulo
 *  - Botões de CTA (primário e secundário)
 *  - Imagem/ícone flutuante do produto em destaque
 *  - Círculos decorativos (play e adicionar)
 *  - Indicadores de slide (dots)
 *
 * Props:
 *  - activeDot   {number}   — índice do dot ativo (0, 1 ou 2)
 *  - onDotClick  {function} — callback ao clicar em um dot
 * ─────────────────────────────────────────────────────────
 */

import './Hero.css';

export default function Hero({ activeDot = 0, onDotClick }) {
  return (
    <section className="hero">

      {/* ── Conteúdo textual ─────────────────────── */}
      <div className="hero__content">
        <p className="hero__subtitle">✦ Nova Coleção 2024</p>

        <h1 className="hero__title">
          Electronics<br />
          <span className="hero__title--accent">your book</span>
        </h1>

        <p className="hero__desc">
          Descubra os melhores gadgets e eletrônicos com qualidade premium.
          Câmeras, smartphones, acessórios e muito mais.
        </p>

        {/* Botões de CTA */}
        <div className="hero__buttons">
          <button className="btn-primary">Feel Down →</button>
          <button className="btn-ghost">Launch El-Medi</button>
        </div>
      </div>

      {/* ── Imagem do produto ────────────────────── */}
      <div className="hero__image-wrap">
        <div className="hero__product-card">
          {/* Emoji que representa a câmera/produto em destaque */}
          <span className="hero__product-emoji">📷</span>

          {/* Círculo amarelo com botão de play */}
          <div className="hero__circle hero__circle--yellow" aria-label="Assistir demo">
            ▶
          </div>

          {/* Círculo coral com botão de adicionar */}
          <div className="hero__circle hero__circle--coral" aria-label="Adicionar ao carrinho">
            ＋
          </div>
        </div>
      </div>

      {/* ── Dots de navegação do slider ──────────── */}
      <div className="hero__dots">
        {[0, 1, 2].map((i) => (
          <button
            key={i}
            className={`hero__dot ${activeDot === i ? 'hero__dot--active' : ''}`}
            onClick={() => onDotClick?.(i)}
            aria-label={`Slide ${i + 1}`}
          />
        ))}
      </div>

    </section>
  );
}
