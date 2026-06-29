## 📁 Descrição do Projeto

```
portfolio-leandra/
├── landing/          → protótipo estático (HTML + CSS puro) da Home
│   ├── index.html
│   └── style.css
└── react-app/         → projeto React (Vite) pronto para evoluir
    ├── index.html
    ├── package.json
    ├── vite.config.js
    └── src/
        ├── main.jsx
        ├── App.jsx
        ├── index.css
        ├── styles/
        │   └── theme.css          → tokens de design (cores, fontes, radius)
        ├── pages/
        │   ├── Home/Home.jsx + Home.css
        │   ├── Sobre/Sobre.jsx + Sobre.css
        │   ├── Projetos/Projetos.jsx + Projetos.css
        │   └── Contato/Contato.jsx + Contato.css
        └── components/
            ├── Navbar/Navbar.jsx + Navbar.css
            ├── Footer/Footer.jsx + Footer.css
            └── ProjectCard/ProjectCard.jsx + ProjectCard.css
```

## 🧠 Arquitetura

- **`landing/`** é o protótipo isolado em HTML/CSS puro, usado para validar o
  visual antes de qualquer código React — é exatamente o layout pedido
  (cards de redes sociais à esquerda, perfil à direita).
- **`react-app/`** segue o padrão *page/component co-location*: cada página
  e cada componente vive em sua própria pasta com um `.jsx` e um `.css`
  dedicados (sem CSS global gigante). Isso facilita manutenção e reuso.
- **`src/styles/theme.css`** centraliza só as *variáveis* de design (cores,
  fontes, raios, glow). Cada arquivo `.css` de página/componente consome
  essas variáveis com `var(--accent)`, etc., mas mantém suas próprias regras
  isoladas — evitando conflito de classes e CSS global excessivo.
- **Roteamento** é feito com `react-router-dom` em `App.jsx`, que envolve as
  rotas com `Navbar` (fixo no topo) e `Footer` (fixo embaixo).
- **Componentes reutilizáveis**: `Navbar` usa `NavLink` para destacar a rota
  ativa automaticamente; `ProjectCard` recebe props (`title`, `description`,
  `tags`, `link`) e é usado em loop na página `Projetos`, no estilo "card de
  marketplace" da referência (tag de id, badge de status, CTA em pílula).

## 🎨 Tema visual

| Token            | Valor                          |
|-------------------|--------------------------------|
| `--bg-base`       | `#0b0b0c`                      |
| `--accent`        | `#ff7a18`                      |
| `--accent-soft`   | `#ffb066`                      |
| `--font-display`  | Fredoka (fonte principal de títulos/UI) |
| `--font-label`    | Space Grotesk |
| `--font-body`     | Inter (parágrafos e textos auxiliares) |


