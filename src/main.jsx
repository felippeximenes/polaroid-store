/*
 * main.jsx
 * ─────────────────────────────────────────────────────────
 * Entry point da aplicação React.
 * Monta o componente <App /> no elemento #root do index.html.
 *
 * React.StrictMode ativo em desenvolvimento:
 *  - Detecta efeitos colaterais inesperados
 *  - Avisa sobre APIs depreciadas
 * ─────────────────────────────────────────────────────────
 */

import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
