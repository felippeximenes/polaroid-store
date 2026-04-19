# 📷 Polaroid Store — UI Study Project

> A study project: rebuilding an electronics e-commerce landing page in React, based on an existing design reference!

---

## 🎯 About

This repository is a **personal learning project**, with no commercial intent.

The idea was simple: I found an electronics e-commerce landing page design (called "Polaroid") and decided to turn it into **real, functional code** from scratch using React. The goal wasn't to copy — it was to use the visual as a starting point and practice translating a static layout into a componentized, well-organized interface ready to evolve.

### What was practiced

- Breaking down a visual layout into reusable components
- Organizing a React project with separation of concerns
- Using CSS Variables as a design token system
- Animations with `@keyframes` and hover transitions
- Responsiveness with media queries
- Simple state management with `useState` and `useEffect`
- Code best practices: comments, naming conventions, folder structure

---

## 🖥️ Preview

| Section | Description |
|---|---|
| **Topbar** | Informational bar with support and locale links |
| **Navbar** | Sticky navigation with search, cart badge and login |
| **Hero** | Main banner with floating product card and dot slider |
| **Categories** | Category grid with colorful cards and featured highlight |
| **Products** | Asymmetric grid with yellow featured card |
| **Stats** | Statistics bar: cashback, rating and delivery info |
| **CTA** | Call-to-action section with dark background |
| **Testimonials** | Customer reviews with star ratings |
| **Footer** | Footer with links and social media buttons |

---

## 🗂️ Folder Structure

```
polaroid-store/
├── index.html
├── package.json
├── vite.config.js
├── .gitignore
│
└── src/
    ├── main.jsx                    # Entry point
    ├── App.jsx                     # Page composition + global state
    │
    ├── styles/
    │   └── global.css              # CSS variables, reset and global keyframes
    │
    ├── data/                       # Static mock data
    │   ├── products.js
    │   ├── categories.js
    │   └── testimonials.js
    │
    └── components/
        ├── Topbar/
        │   ├── Topbar.jsx
        │   └── Topbar.css
        ├── Navbar/
        │   ├── Navbar.jsx
        │   └── Navbar.css
        ├── Hero/
        │   ├── Hero.jsx
        │   └── Hero.css
        ├── Categories/
        │   ├── Categories.jsx
        │   └── Categories.css
        ├── Products/
        │   ├── Products.jsx
        │   └── Products.css
        ├── Stats/
        │   ├── Stats.jsx
        │   └── Stats.css
        ├── CTA/
        │   ├── CTA.jsx
        │   └── CTA.css
        ├── Testimonials/
        │   ├── Testimonials.jsx
        │   └── Testimonials.css
        └── Footer/
            ├── Footer.jsx
            └── Footer.css
```

Each component lives in its own folder with **separate JSX and CSS files**, making it easier to maintain, read and reuse.

---

## 🎨 Design System

Colors, fonts and spacing are centralized in CSS variables inside `src/styles/global.css`, working as a simple design token system:

| Token | Value | Usage |
|---|---|---|
| `--yellow` | `#FFD700` | Navbar, badges, primary CTAs |
| `--blue` | `#29B6D8` | Hero, links, search buttons |
| `--coral` | `#FF6B6B` | Cart badge, alerts |
| `--dark` | `#1a1a2e` | Text, footer, dark buttons |
| `--gray` | `#888888` | Secondary text and descriptions |
| `--font-display` | `Montserrat` | Headings, labels, buttons |
| `--font-body` | `Nunito` | Paragraphs and body text |

---

## 🚀 Getting Started

**Requirements:** Node.js 18+ and npm installed.

```bash
# 1. Clone the repository
git clone https://github.com/felippeximenes/polaroid-store.git

# 2. Navigate into the folder
cd polaroid-store

# 3. Install dependencies
npm install

# 4. Start the development server
npm run dev
```

Open `http://localhost:5173` in your browser.

```bash
# Generate a production build
npm run build

# Preview the production build locally
npm run preview
```

---

## 🛠️ Tech Stack

| Technology | Version | Purpose |
|---|---|---|
| [React](https://react.dev/) | 18 | UI library |
| [Vite](https://vitejs.dev/) | 5 | Build tool and dev server |
| CSS (vanilla) | — | Per-component styling |
| Google Fonts | — | Montserrat + Nunito |

No external UI libraries — all visuals were built from scratch with plain CSS.

---

## 📌 Notes

- This project is **for study and personal portfolio purposes only**
- The original design was used as **visual reference only** — no code was copied
- All product, category and testimonial data is **mocked** (fictional)
- There is no backend, authentication or real API integration

---

## 📈 Possible Next Steps

If you'd like to take this further:

- [ ] Integrate with a real products API (e.g. Fake Store API)
- [ ] Add a product detail page with React Router
- [ ] Build a functional cart with Context API or Zustand
- [ ] Add tests with Vitest + React Testing Library
- [ ] Deploy to Vercel or Netlify

---

## 👤 Author

Made with 💛 by **Felippe Ximenes**

[![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://linkedin.com/in/felippeximenes)
[![GitHub](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)](https://github.com/felippeximenes)

---

*Project developed for educational purposes only.*
