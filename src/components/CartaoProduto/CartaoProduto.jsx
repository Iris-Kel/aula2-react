import "./CartaoProduto.css";

const CartaoProduto = ({ titulo, descricao, preco, imagem}) => {
    return(
        <div className="cartao">
            <img src={imagem} alt={titulo} className="imagem" />
            <h3 className="titulo">{titulo}</h3>
            <p className="descricao">{descricao}</p>
            <p className="preco">{preco}</p>
            
        </div>
    )
}

export default CartaoProduto;