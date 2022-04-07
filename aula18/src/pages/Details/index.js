import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../../services/api";
import "./styles.css";
import { Link } from "react-router-dom";

export default function Details(){

    const { id } = useParams();

    const [detail, setDetail] = useState([]);

    useEffect(() => {
        findById();
    }, [])


    async function findById(){
        try{

            const {data} = await api.get(`/details/${id}`)
            setDetail(data.detail)

        }catch(err){
            console.log(err)
        }
    }

    return(
     
        <section className="details">

            <div className="container-details">
                <Link to={"/"}>
                    <img className="voltar" src="https://cdn4.iconfinder.com/data/icons/ionicons/512/icon-ios7-arrow-back-128.png" alt="as"/>
                </Link>                
                <img src={detail.img} alt={detail.name}/>
                <h2>{detail.name}</h2>
                <p>{detail.description}</p>
                <h6>R$ {detail.price}</h6>
            </div>

        </section>
    )
}