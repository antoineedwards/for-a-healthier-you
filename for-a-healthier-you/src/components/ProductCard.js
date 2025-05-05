import React from "react";
import './styles.css'

export default function ProductCard({product}){
    return(
        <div className='product-card'>
            <h2>{product.name}</h2>
            <img height='50%' src={product.image} alt={product.name} />
            <p>{product.description}</p>
            <p>${product.price}</p>
        </div>
    )
}