import "./CompContador.css";
import Button from "../Button/Button";
import { useState } from "react";

const CompContador = () => {
    const [count, setCount] = useState(0);

    const incrementar = () => {
        setCount(count + 1);
    };

    const decrementar = () => {
        setCount(count - 1);
    };

    const limpar = () => {
        setCount(0);
    };

    return (
        <div className="contador2">
            <h2 className="titulo-contador">Contador </h2>

            <h3 className="">{count}</h3> 

            <button className="btn-incrementar" onClick={incrementar}>
                Incremento
            </button>

            <button className="btn-decrementar" onClick={decrementar}>
                Decremento
            </button>

            <button className="btn-limpar" onClick={limpar}>
                Limpar
            </button>
        </div>
    );
};

export default CompContador;