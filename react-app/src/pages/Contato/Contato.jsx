import { useState } from "react";
import "./Contato.css";

const INITIAL_FORM = { name: "", email: "", message: "" };

function Contato() {
  const [form, setForm] = useState(INITIAL_FORM);
  const [sent, setSent] = useState(false);

  function handleChange(e) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    // Integração real (API/EmailJS/etc) entra aqui.
    setSent(true);
    setForm(INITIAL_FORM);
  }

  return (
    <main className="contato">
      <header className="contato__header">
        <p className="contato__eyebrow">// contato</p>
        <h1 className="contato__title">Vamos conversar?</h1>
        <p className="contato__lead">
          Tem um projeto em mente ou só quer trocar uma ideia? Me manda uma
          mensagem por aqui ou pelas redes sociais.
        </p>
      </header>

      <section className="contato__content">
        <form className="contato__form" onSubmit={handleSubmit}>
          <label className="contato__field">
            <span>Nome</span>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Como posso te chamar?"
              required
            />
          </label>

          <label className="contato__field">
            <span>E-mail</span>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="seu@email.com"
              required
            />
          </label>

          <label className="contato__field">
            <span>Mensagem</span>
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Conta um pouco sobre o seu projeto..."
              rows={5}
              required
            />
          </label>

          <button className="contato__submit" type="submit">
            Enviar mensagem
          </button>

          {sent && <p className="contato__success">Mensagem enviada — obrigada pelo contato!</p>}
        </form>

        <aside className="contato__info">
          <p className="contato__info-label">contato direto</p>
          <a href="mailto:leandra@email.com" className="contato__info-link">
            leandra@email.com
          </a>
          <a
            href="https://github.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="contato__info-link"
          >
            github.com/leandramichely
          </a>
          <a
            href="https://www.linkedin.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="contato__info-link"
          >
            linkedin.com/in/leandramichely
          </a>
        </aside>
      </section>
    </main>
  );
}

export default Contato;
