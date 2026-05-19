import { useState } from "react";
import "./TituloUseState.css";

const TituloUseState = ({ cor }) => {
  const [texto, setTexto] = useState("Título Inicial");
  const [inputTexto, setInputTexto] = useState("");

  const mudarTexto = () => {
    setTexto(inputTexto);
  }

  return (
    
    <div>
      <h2 style={{ color: cor }}>{texto}</h2>

      <input className="input-texto" type="text"
      value={inputTexto}
      onChange={(e) => {setInputTexto(e.target.value)}} />

      <button className="btn-mudar"
      onClick={() => mudarTexto()}
      >mudar</button>

      {/* <button
        className="btn-mudar"
        onClick={() => {
          setTexto("Título mudado pelo click do botão");
        }}
      >
        Mudar
      </button> */}
    </div>
  );
};

export default TituloUseState;
