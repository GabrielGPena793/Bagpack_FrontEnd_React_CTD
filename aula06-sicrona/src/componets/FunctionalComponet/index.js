export default function FunctionalComponet(props){



    return(
        <>
            <ul>
                {
                    props.convidados.map((item, index) => <li key={index.toString()}>{item.nome} {item.convidado ? "está" : "não está"} convidado para a festa</li>)
                }
            </ul>
        
        </>
    )
}