import "./ProjectCard.css";

/**
 * ProjectCard
 * Cartão reutilizável para exibir um projeto no estilo "marketplace digital".
 *
 * Props:
 * - id: string            -> identificador curto exibido no canto (ex: "01")
 * - title: string         -> nome do projeto
 * - description: string   -> descrição curta
 * - tags: string[]        -> tecnologias usadas
 * - link: string          -> URL do projeto (repo ou deploy)
 */
function ProjectCard({ id, title, description, tags = [], link = "#" }) {
  return (
    <article className="project-card">
      <div className="project-card__top">
        <span className="project-card__id">#{id}</span>
        <span className="project-card__status">
          <span className="project-card__status-dot" />
          live
        </span>
      </div>

      <div className="project-card__preview" aria-hidden="true">
        <span className="project-card__preview-glow" />
        <span className="project-card__preview-mark">{title.charAt(0)}</span>
      </div>

      <div className="project-card__body">
        <h3 className="project-card__title">{title}</h3>
        <p className="project-card__description">{description}</p>

        <ul className="project-card__tags">
          {tags.map((tag) => (
            <li key={tag} className="project-card__tag">
              {tag}
            </li>
          ))}
        </ul>

        <a
          className="project-card__cta"
          href={link}
          target="_blank"
          rel="noopener noreferrer"
        >
          Ver projeto
        </a>
      </div>
    </article>
  );
}

export default ProjectCard;
