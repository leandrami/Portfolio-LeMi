import "./Sobre.css";

const SKILLS = [
  "React",
  "JavaScript",
  "CSS / Sass",
  "Vite",
  "Git & GitHub",
  "Figma",
  "Acessibilidade",
  "Performance Web",
];

const STATS = [
  { value: "3+", label: "anos de experiência" },
  { value: "20+", label: "projetos entregues" },
  { value: "100%", label: "foco em UI" },
];

function Sobre() {
  return (
    <main className="sobre">
      <header className="sobre__header">
        <p className="sobre__eyebrow">// sobre mim</p>
        <h1 className="sobre__title">
          Olá, eu sou a <span>Leandra</span>.
        </h1>
        <p className="sobre__lead">
          Graduada em Design Gráfico pelo IFPE, pós-graduada em UX Design, atualmente cursando Análise e Desenvolvimento de Sistemas (ADS) e ampliando meus conhecimentos em desenvolvimento de software, DevOps e tecnologia.
        </p>
      </header>

      <section className="sobre__stats" aria-label="Números">
        {STATS.map((stat) => (
          <div className="sobre__stat" key={stat.label}>
            <span className="sobre__stat-value">{stat.value}</span>
            <span className="sobre__stat-label">{stat.label}</span>
          </div>
        ))}
      </section>

      <section className="sobre__skills" aria-label="Habilidades">
        <p className="sobre__skills-label">stack & ferramentas</p>
        <ul className="sobre__skills-list">
          {SKILLS.map((skill) => (
            <li key={skill} className="sobre__skill-tag">
              {skill}
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}

export default Sobre;
