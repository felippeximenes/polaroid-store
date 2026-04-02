/*
 * components/CTA/CTA.jsx
 * ─────────────────────────────────────────────────────────
 * Seção de chamada para ação (Call To Action).
 * Fundo escuro com título, descrição e dois botões.
 * Usada para converter visitantes em compradores.
 *
 * Props: nenhuma (conteúdo estático)
 * ─────────────────────────────────────────────────────────
 */

import './CTA.css';

export default function CTA() {
  return (
    <section className="cta">

      {/* Rótulo superior */}
      <p className="cta__label">✦ Uot your lectronics</p>

      {/* Título principal */}
      <h2 className="cta__title">
        Adquira seus<br />
        <span className="cta__title--accent">Eletrônicos</span> Favoritos
      </h2>

      {/* Descrição */}
      <p className="cta__desc">
        Fique por dentro das últimas novidades em tecnologia.
        Produtos originais, entrega rápida e garantia total.
      </p>

      {/* Botões de ação */}
      <div className="cta__buttons">
        <button className="cta__btn cta__btn--primary">
          Comprar Agora →
        </button>
        <button className="cta__btn cta__btn--ghost">
          Ver Catálogo
        </button>
      </div>

    </section>
  );
}
