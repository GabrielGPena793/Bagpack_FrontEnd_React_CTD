import React, { useState } from 'react'


export default function Rejuvenecedor() {

    const [ validNome, setValidNome ] = useState("");
    const [ validIdade, setValidIdade ] = useState(0);
    const [ novaIdade, setNovaIdade ] = useState(0);

    function validaNome(e){
        if(e.target.value.length < 1){
            console.log("error letra")
        }

        setValidNome(e.target.value)
    }

    function validaIdade(e){
        if(e.target.value < 0){
            console.log("error numero")
            console.log(e.target.value)
            
        }

        setValidIdade(e.target.value)
    }

    function valida(e){
        e.preventDefault()
     
        let idadeNova = validIdade - 10;
        setNovaIdade(idadeNova)
    }



  return (

    <div>
        <form>
            <div>
                <label htmlFor="nome">nome: </label>
                <input value={validNome} id='nome' type="text"  onChange={(e) => validaNome(e)}/>
            </div>

            <div>
                <label htmlFor="idade">idade: </label>
                <input id='idade' type="text"   onChange={(e) => validaIdade(e)}/>
            </div>
            <button onClick={e => valida(e)}>enviar</button>
        </form>
        <p>sua nova idade é: {novaIdade === 0 ? "" : novaIdade}</p>
    </div>
  )

}
