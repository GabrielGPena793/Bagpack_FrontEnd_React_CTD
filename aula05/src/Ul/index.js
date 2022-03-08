import "./styles.css"


export default function Ul(props){

    let  {name, age, sex, size} = props.item

    return(
        <div className="container-ul">
            <h2>Nome: {name} </h2>
            <ul>
                <li>idade:{age}</li>
                <li>sexo: {sex}</li>
                <li>tamanho: {size}</li>
            </ul>
        </div>

    );
}