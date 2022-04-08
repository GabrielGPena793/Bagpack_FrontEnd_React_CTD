import React, { useEffect, useState } from 'react';
import api from '../../service/api';
import { Link, useParams } from 'react-router-dom';
import "./styles.css";


export default function Details() {

    const params = useParams();

    const [local, setLocal] = useState({});
    const [load, setLoad] = useState(true);

    useEffect(() => {
        getCep();
    },[])

    async function getCep(){
        try {
            const {data} = await api.get(`/${params.cep}/json`);
            setLocal(data)

            setLoad(false)
            
        } catch (error) {
            console.log(error)
            
        }
    }

  return (

    <section className='details'>
        {load ? <h1>Buscando dados...</h1> : 
          <div className='container-details'>            
          <h3>Cep: {local.cep ? local.cep : "Cep não encontrado"}</h3>
          <h3>Localidade: {local.localidade ? `${local.localidade} - ${local.uf} `: "localidade não encontrada"}</h3>
          <h3>Logradouro: {local.logradouro ? local.logradouro : "logradouro não encontrado"}</h3>
          <h3>Bairro: {local.bairro ? local.bairro : "bairro não encontrado"}</h3>

          <Link to="/" >
              <button>Voltar</button>
          </Link>
        </div>
      }
      
    </section>
  )
}
