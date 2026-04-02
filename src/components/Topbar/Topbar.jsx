/*
 * components/Topbar/Topbar.jsx
 * ─────────────────────────────────────────────────────────
 * Barra superior informativa (acima da Navbar).
 * Contém links de atendimento, rastreio e idioma/moeda.
 *
 * Props: nenhuma
 * ─────────────────────────────────────────────────────────
 */

import './Topbar.css';

export default function Topbar() {
  return (
    <div className="topbar">

      {/* Grupo esquerdo — suporte ao cliente */}
      <div className="topbar__group">
        <a href="#">Fale Conosco</a>
        <a href="#">FAQ</a>
        <a href="#">Ajuda</a>
      </div>

      {/* Grupo central — pedidos */}
      <div className="topbar__group">
        <a href="#">Acompanhar Pedido</a>
        <a href="#">Devolução</a>
      </div>

      {/* Grupo direito — localização e wishlist */}
      <div className="topbar__group">
        <a href="#">🇧🇷 PT-BR</a>
        <a href="#">R$ BRL</a>
        <a href="#">Wishlist</a>
      </div>

    </div>
  );
}
