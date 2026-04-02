/*
 * components/Footer/Footer.jsx
 * ─────────────────────────────────────────────────────────
 * Rodapé da página com 4 colunas:
 *  1. Branding + descrição + redes sociais
 *  2. Links de exploração (categorias)
 *  3. Links de conta do usuário
 *  4. Links de suporte/atendimento
 *
 * Props: nenhuma (conteúdo estático)
 * ─────────────────────────────────────────────────────────
 */

import './Footer.css';

/* Colunas de links do footer */
const FOOTER_COLS = [
  {
    title: 'Explorar',
    links: ['Smartphones', 'Câmeras', 'Headphones', 'Gaming', 'Tablets', 'Acessórios'],
  },
  {
    title: 'Conta',
    links: ['Minha Conta', 'Pedidos', 'Wishlist', 'Endereços', 'Carteiras', 'Sair'],
  },
  {
    title: 'Suporte',
    links: ['Central de Ajuda', 'Devolução', 'Garantia', 'Contato', 'Política', 'Termos'],
  },
];

/* Ícones de redes sociais */
const SOCIALS = [
  { icon: '📘', label: 'Facebook' },
  { icon: '📸', label: 'Instagram' },
  { icon: '🐦', label: 'Twitter' },
  { icon: '▶️', label: 'YouTube' },
];

export default function Footer() {
  return (
    <footer className="footer">

      {/* ── Colunas de conteúdo ───────────────────── */}
      <div className="footer__grid">

        {/* Coluna 1 — Branding */}
        <div className="footer__brand">
          <div className="footer__logo">
            <div className="footer__logo-icon">📷</div>
            Polaroid
          </div>
          <p className="footer__desc">
            A melhor loja de eletrônicos online. Produtos originais com
            garantia e entrega rápida para todo o Brasil.
          </p>
          <div className="footer__socials">
            {SOCIALS.map(s => (
              <button
                key={s.label}
                className="footer__social-btn"
                aria-label={s.label}
              >
                {s.icon}
              </button>
            ))}
          </div>
        </div>

        {/* Colunas 2, 3, 4 — Links */}
        {FOOTER_COLS.map(col => (
          <div key={col.title} className="footer__col">
            <h4 className="footer__col-title">{col.title}</h4>
            <ul className="footer__col-links">
              {col.links.map(link => (
                <li key={link}>
                  <a href="#">{link}</a>
                </li>
              ))}
            </ul>
          </div>
        ))}

      </div>

      {/* ── Rodapé inferior ──────────────────────── */}
      <div className="footer__bottom">
        <span>© 2024 Polaroid Store. Todos os direitos reservados.</span>
        <span>Pagamento seguro 🔒 Visa · Mastercard · Pix · Boleto</span>
      </div>

    </footer>
  );
}
