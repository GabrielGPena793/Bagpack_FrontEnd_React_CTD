export default function Button(props){

    console.log(props);

    return(
        <button>{props.item.apelido}</button>
    );
}