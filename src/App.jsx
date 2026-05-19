import "./App.css";
import Contador from "./components/Contador/Contador";
import Titulo from "./components/Titulo/Titulo";
import TituloProps from "./components/TituloProps/TituloProps";
import TituloUseState from "./components/TituloUseState/TituloUseState";

const App = () => {
  return (
    <>
      <Titulo />
      <hr />
      <TituloProps descricao="FrontEnd" cor="#866a80" />
      <hr />
      <TituloProps cor="#866a80" qtd_alunos={30} paragrafo={true} />
      <hr />
      <TituloUseState cor="#c9b7c7" />
      <TituloUseState cor= "#866a80"/>
      <hr />
      <Contador />
    </>
  );
};

export default App;
