import React from 'react'
import { Link } from 'react-router-dom'
import "./styles.css"

export default function ProductItem({product}) {
  return (
    <li>
        <img src={product.img} alt={product.name} />
        <h2>{product.name}</h2>
        <Link to={`/details/${product.id}`}>Comprar</Link>
    </li>
  )
}
