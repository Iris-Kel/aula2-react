import "./Button.css";

const Button = ({ texto, onClick, classe }) => {
    return (
        <button className={classe} onClick={onClick}>
            {texto}
        </button>
    );
};

export default Button;