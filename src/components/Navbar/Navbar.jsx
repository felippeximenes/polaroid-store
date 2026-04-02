/*
 * components/Navbar/Navbar.jsx
 * ─────────────────────────────────────────────────────────
 * Navegação principal com:
 *  - Logo Polaroid
 *  - Barra de busca
 *  - Ícones de ação (busca, carrinho com badge, login)
 *
 * Props:
 *  - cartCount      {number}   — quantidade de itens no carrinho
 *  - onCartClick    {function} — callback ao clicar no carrinho
 * ─────────────────────────────────────────────────────────
 */

import './Navbar.css';

export default function Navbar({ cartCount = 0, onCartClick }) {
  return (
    <nav className="navbar">

      {/* ── Logo ─────────────────────────────────── */}
      <a className="navbar__logo" href="#">
        <div className="navbar__logo-icon">📷</div>
        Polaroid
      </a>

      {/* ── Barra de busca ───────────────────────── */}
      <div className="navbar__search">
        <span className="navbar__search-icon">🔍</span>
        <input type="text" placeholder="Buscar produtos..." />
        <button className="navbar__search-btn" aria-label="Buscar">→</button>
      </div>

      {/* ── Ícones de ação ───────────────────────── */}
      <div className="navbar__actions">

        {/* Ícone de busca (mobile) */}
        <button className="navbar__icon-btn" aria-label="Abrir busca">🔍</button>

        {/* Carrinho com badge de contagem */}
        <button
          className="navbar__icon-btn"
          aria-label={`Carrinho com ${cartCount} itens`}
          onClick={onCartClick}
        >
          🛒
          {cartCount > 0 && (
            <span className="navbar__badge">{cartCount}</span>
          )}
        </button>

        {/* Botão de login */}
        <button className="navbar__login-btn">Entrar</button>

      </div>
    </nav>
  );
}
