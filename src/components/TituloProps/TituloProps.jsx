import "./TituloProps.css";

const TituloProps = ({ descricao, cor, qtd_alunos, paragrafo }) => {
  return (
    <div>
      <h2 style={{ color: cor }}>
        A disciplina de {descricao ? descricao : "DEV"} você vai aprender o
        Framework React
      </h2>
      {paragrafo ? 
        <p className="paragrafo-props">
          Hoje a aula de {descricao} tem {qtd_alunos} alunos
        </p>
       : (
        ""
      )}
    </div>
  );
};

export default TituloProps;
