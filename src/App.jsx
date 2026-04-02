/*
 * App.jsx
 * ─────────────────────────────────────────────────────────
 * Componente raiz da aplicação.
 * Responsável por:
 *  - Importar e compor todos os componentes de seção
 *  - Gerenciar o estado global compartilhado entre seções
 *    (ex: contagem do carrinho, dot ativo do hero)
 *  - Passar dados dos arquivos /data para os componentes
 *
 * Hierarquia de componentes:
 *  App
 *  ├── Topbar
 *  ├── Navbar
 *  ├── Hero
 *  ├── Categories
 *  ├── Products
 *  ├── Stats
 *  ├── CTA
 *  ├── Testimonials
 *  └── Footer
 * ─────────────────────────────────────────────────────────
 */

import { useState, useEffect } from 'react';

// Componentes de seção
import Topbar       from './components/Topbar/Topbar';
import Navbar       from './components/Navbar/Navbar';
import Hero         from './components/Hero/Hero';
import Categories   from './components/Categories/Categories';
import Products     from './components/Products/Products';
import Stats        from './components/Stats/Stats';
import CTA          from './components/CTA/CTA';
import Testimonials from './components/Testimonials/Testimonials';
import Footer       from './components/Footer/Footer';

// Dados estáticos (mock)
import { products }     from './data/products';
import { categories }   from './data/categories';
import { testimonials } from './data/testimonials';

// Estilos globais (variáveis, reset, animações)
import './styles/global.css';

export default function App() {

  // ── Estado: dot ativo do slider do Hero ────────────
  const [activeDot, setActiveDot] = useState(0);

  // Avança o dot automaticamente a cada 3 segundos
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveDot(prev => (prev + 1) % 3);
    }, 3000);
    return () => clearInterval(timer); // limpa ao desmontar
  }, []);

  // ── Estado: contagem do carrinho ────────────────────
  const [cartCount, setCartCount] = useState(2);

  // Adiciona um item ao carrinho (chamado pelos cards de produto)
  const handleAddToCart = (product) => {
    setCartCount(prev => prev + 1);
    // Futuramente: disparar toast, atualizar estado global, etc.
    console.log('Produto adicionado ao carrinho:', product.name);
  };

  return (
    <>
      {/* Barra informativa superior */}
      <Topbar />

      {/* Navegação principal (sticky) */}
      <Navbar
        cartCount={cartCount}
        onCartClick={() => console.log('Abrir carrinho')}
      />

      {/* Banner hero com produto em destaque */}
      <Hero
        activeDot={activeDot}
        onDotClick={setActiveDot}
      />

      {/* Grid de categorias */}
      <Categories categories={categories} />

      {/* Grid de produtos */}
      <Products
        products={products}
        onAddToCart={handleAddToCart}
      />

      {/* Barra de estatísticas */}
      <Stats />

      {/* Seção de call to action */}
      <CTA />

      {/* Depoimentos de clientes */}
      <Testimonials testimonials={testimonials} />

      {/* Rodapé */}
      <Footer />
    </>
  );
}
