import React, { useState } from 'react';
import "./styles.css";
import InputMask from 'react-input-mask';
import { Link } from 'react-router-dom';

export default function Home() {

    const [inputCepValue, setInputCepValue] = useState("");


  return (
    <section className='home'>
        <h2>Coloque o seu cep</h2>
        <InputMask 
            placeholder="Digite aqui" 
            mask="99999-999" 
            onChange={event => setInputCepValue(event.target.value)}
            value={inputCepValue} 
            autoComplete="off"
         />
        <Link to={`/details/${inputCepValue.replace("-", "")}`}>
            <button >Buscar</button>
        </Link>
    </section>
  )
}
