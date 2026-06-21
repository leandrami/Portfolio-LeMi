import "./Home.css";

const SOCIALS = [
{
id: "01",
name: "GitHub",
handle: "@leandramichely",
href: "https://github.com/leandrami",
icon: (
    <svg viewBox="0 0 24 24" width="30" height="30" fill="currentColor" aria-hidden="true">
    <path d="M12 0C5.37 0 0 5.5 0 12.3c0 5.43 3.44 10.03 8.21 11.66.6.12.82-.27.82-.6 0-.3-.01-1.08-.02-2.12-3.34.74-4.04-1.65-4.04-1.65-.55-1.43-1.34-1.82-1.34-1.82-1.09-.77.08-.75.08-.75 1.21.09 1.84 1.27 1.84 1.27 1.07 1.87 2.8 1.33 3.49 1.02.11-.79.42-1.33.76-1.64-2.67-.31-5.47-1.36-5.47-6.06 0-1.34.46-2.43 1.23-3.29-.12-.31-.53-1.57.12-3.27 0 0 1-.33 3.3 1.25a11.2 11.2 0 0 1 6 0c2.29-1.58 3.3-1.25 3.3-1.25.65 1.7.24 2.96.12 3.27.77.86 1.23 1.95 1.23 3.29 0 4.71-2.81 5.75-5.49 6.05.43.38.81 1.13.81 2.29 0 1.65-.02 2.98-.02 3.39 0 .33.22.72.83.6C20.57 22.32 24 17.72 24 12.3 24 5.5 18.63 0 12 0Z" />
    </svg>
),
},
{
id: "02",
name: "LinkedIn",
handle: "/in/leandramichely",
href: "https://www.linkedin.com/in/leandra-michely/",
icon: (
    <svg viewBox="0 0 24 24" width="28" height="28" fill="currentColor" aria-hidden="true">
    <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.36V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.36-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29ZM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM7.12 20.45H3.56V9h3.56v11.45Z" />
    </svg>
),
},
];

function Home() {
return (
<main className="home">
    <div className="home__bg-glow home__bg-glow--left" />
    <div className="home__bg-glow home__bg-glow--right" />
    <div className="home__bg-grid" />

{/* Redes Sociais */}
    <section className="home__side home__side--left" aria-label="Redes sociais">
    <p className="home__side-label">// conecte-se</p>

    {SOCIALS.map((social) => (
        <a
        key={social.id}
        className="home__social-card"
        href={social.href}
        target="_blank"
        rel="noopener noreferrer"
        >
        <span className="home__social-tag">SOCIAL · {social.id}</span>
        <span className="home__social-icon">{social.icon}</span>
        <span className="home__social-body">
            <span className="home__social-name">{social.name}</span>
            <span className="home__social-handle">{social.handle}</span>
        </span>
        <span className="home__social-arrow">↗</span>
        </a>
    ))}

    <p className="home__side-caption">
        Disponível 24/7 para mensagens —
        <br />
        respondo em até um dia útil.
    </p>
    </section>

{/* Perfil */}
    <section className="home__side home__side--right" aria-label="Perfil">
    <div className="home__profile">
        <p className="home__profile-eyebrow">Aspiring Full Stack Developer</p>

        <div className="home__profile-frame">
        <div
            className="home__profile-photo"
            role="img"
            aria-label="Foto de perfil de Leandra Michely"
        >
            <svg viewBox="0 0 200 200" width="100%" height="100%" aria-hidden="true">
            <circle cx="100" cy="78" r="38" fill="rgba(255,154,73,0.18)" />
            <path d="M30 190c8-44 38-66 70-66s62 22 70 66" fill="rgba(255,154,73,0.18)" />
            </svg>
        </div>
        <span className="home__profile-ring" />
        <span className="home__profile-id">#0001</span>
        </div>

        <h3 className="home__profile-name">Leandra Michely</h3>
        <p className="home__profile-role">construindo interfaces com personalidade</p>
    </div>
    </section>
</main>
);
}

export default Home;
