export default function FunctionalComponet(props){



    return(
        <>
            <ul>
                {
                    props.convidados.map(({nome, convidado}, index) => <li key={index.toString()}> {nome} {convidado ? "está" : "não está"} convidado para a festa </li>)
                }
            </ul>
        
        </>
    )
}