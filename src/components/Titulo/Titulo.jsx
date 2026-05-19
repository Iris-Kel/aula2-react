import "./Titulo.css";

const Titulo = () => {
  let nome = "A";
  return (
    <div className="container">
      <h1 className="titulo-principal">
        Aula 2 - Trabalhando com useState
        </h1>
      <h2 className="subtitulo">
        Olá, eu sou {nome}, e hoje vamos aprender um pouco sobre o Hook
        useState.
      </h2>
      <p className="paragrafo">
        O useState é um Hook fundamental do React que permite criar variáveis de
        estado em componentes funcionais.
      </p>
      <p className="paragrafo">
        Ele retorna um array com a variavel de estado (valor atual) e uma função
        para atualiza-la, forçando o componente a renderizar novamente quando o
        valur muda.
      </p>
      <img
       src="reactHook.png" 
       alt="Imagem da logo do react e de um gancho"
       className="imagem-titulo"
       />
    </div>
  );
};

export default Titulo;
