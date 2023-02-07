import React from "react"

export default function ProductCard( {product} ) {
    const {title, price, category, url} = product;

    return <li>
        <img src={url} alt={title}></img>
        <p>{title}</p>
        <p>{`￦${price}`}</p>
        <p>{category}</p>
    </li>
}