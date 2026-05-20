import "./App.css";
import BoasVindas from "./components/Boasvindas/BoasVindas";
import MensagemSecreta from "./components/MensagemSecreta/MensagemSecreta";
import CartaoProduto from "./components/CartaoProduto/CartaoProduto";
import CompContador from "./components/CompContador/CompContador";
import Formulario from "./components/Formulario/Formulario";

const App = () => {
  return (
    <>
      <BoasVindas nome="João" />

      <hr />

      <MensagemSecreta mensagem={true} />

      <div className="container">
        <CartaoProduto
          titulo="Hambúrguer"
          descricao="Hambúrguer artesanal com queijo"
          preco="R$ 25,00"
          imagem="/Hamburguer.gif"
        />

        <CartaoProduto
          titulo="Pizza"
          descricao="Pizza de calabresa com borda recheada"
          preco="R$ 45,00"
          imagem="/Pizza.gif"
        />

        <CartaoProduto
          titulo="Milk Shake"
          descricao="Milk shake de chocolate"
          preco="R$ 18,00"
          imagem="/Milkshake.gif"
        />
        <hr />
        <CompContador />
        <hr />
        <Formulario />
      </div>
    </>
  );
};

export default App;