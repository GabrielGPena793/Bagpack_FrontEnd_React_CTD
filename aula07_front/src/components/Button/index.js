import "./styles.css"

export default function Button({texto, onClick}){

    return  <button
        onClick={onClick}
        className={texto === "Adicionar" ? "button" : "button2"}>
        {texto}
    </button>;
}