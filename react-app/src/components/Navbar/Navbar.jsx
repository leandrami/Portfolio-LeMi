import { NavLink } from "react-router-dom";
import "./Navbar.css";

const LINKS = [
  { label: "HOME", path: "/" },
  { label: "SOBRE", path: "/sobre" },
  { label: "PROJETOS", path: "/projetos" },
  { label: "CONTATO", path: "/contato" },
];

function Navbar() {
  return (
    <header className="navbar">
      <NavLink to="/" className="navbar__logo">
        <span className="navbar__logo-mark">LM</span>
        <span className="navbar__logo-dot" />
      </NavLink>

      <nav className="navbar__links">
        {LINKS.map(({ label, path }) => (
          <NavLink
            key={path}
            to={path}
            end={path === "/"}
            className={({ isActive }) =>
              isActive ? "navbar__link navbar__link--active" : "navbar__link"
            }
          >
            {label}
          </NavLink>
        ))}
      </nav>

      <div className="navbar__status">
        <span className="navbar__status-dot" />
        Disponível para projetos
      </div>
    </header>
  );
}

export default Navbar;
