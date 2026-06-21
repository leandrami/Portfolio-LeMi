import ProjectCard from "../../components/ProjectCard/ProjectCard.jsx";
import "./Projetos.css";

const PROJECTS = [
  {
    id: "01",
    title: "Marketplace UI",
    description: "Interface dark de marketplace digital com glow neon e cards animados.",
    tags: ["React", "CSS"],
    link: "#",
  },
  {
    id: "02",
    title: "Dashboard Analytics",
    description: "Painel de métricas em tempo real com gráficos e filtros dinâmicos.",
    tags: ["React", "Recharts"],
    link: "#",
  },
  {
    id: "03",
    title: "Landing Page SaaS",
    description: "Página de conversão para produto SaaS com foco em performance.",
    tags: ["Vite", "Figma"],
    link: "#",
  },
  {
    id: "04",
    title: "App de Tarefas",
    description: "Gerenciador de tarefas com drag-and-drop e persistência local.",
    tags: ["React", "DnD"],
    link: "#",
  },
];

function Projetos() {
  return (
    <main className="projetos">
      <header className="projetos__header">
        <p className="projetos__eyebrow">// projetos</p>
        <h1 className="projetos__title">Trabalhos selecionados</h1>
        <p className="projetos__lead">
          Uma seleção de projetos que mostram como aplico design, código e
          atenção aos detalhes para construir produtos digitais.
        </p>
      </header>

      <section className="projetos__grid" aria-label="Lista de projetos">
        {PROJECTS.map((project) => (
          <ProjectCard key={project.id} {...project} />
        ))}
      </section>
    </main>
  );
}

export default Projetos;
