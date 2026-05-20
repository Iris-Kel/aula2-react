import "./Formulario.css";
import { useState } from "react";

function Formulario() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [telefone, setTelefone] = useState("");

  return (
    <div className="formulario-container">
      <h2 className="titulo-formulario">Formulário de Contato</h2>

      <label className="nome-formulario">Nome:</label>
      <input
        className="nome-input"
        type="text"
        id="nome"
        value={nome}
        onChange={(e) => setNome(e.target.value)}
      />

      <label className="email-formulario">Email:</label>
      <input
        className="email-input"
        type="email"
        id="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <label className="telefone-formulario">Telefone:</label>
      <input
        className="telefone-input"
        type="telefone"
        id="telefone"
        value={telefone}
        onChange={(e) => setTelefone(e.target.value)}
      />
      <button
        className="btn-formulario"
        onClick={() => {
          alert(`nome: ${nome}\nEmail: ${email}\nTelefone: ${telefone}`);
        }}
      >
        Enviar
      </button>
    </div>
  );
}

export default Formulario;
