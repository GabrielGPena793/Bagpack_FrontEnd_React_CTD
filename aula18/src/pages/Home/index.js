import React, { useEffect, useState } from "react";
import api from "../../services/api";
import ProductItem from "../../components/productItem";


export default function Home(){

    const [products, setProducts] = useState([])

    useEffect(()=> {
        getProdutos();

    },[])

    async function getProdutos(){
        try{
            const { data } = await api.get("/product");
            setProducts(data.products);

        }catch( error) {
            alert("error na conexão com o banco")
        }
    }


    return(
        <>
            <h1> Productos</h1>
            <ul>
                {
                    products.map((product) => (
                        <ProductItem key={product.id} product={product} />
                    ))
                }
            </ul>
        </>
    )
}