import React from "react";
import { useNavigate } from "react-router-dom";

export default function ProductCard({ product }) {
  const { uuid, title, price, category, url } = product;
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`/products/${uuid}`, { state: { product } });
  };

  return (
    <li className="shadow-md" onClick={handleClick}>
        <img src={url} alt={title}></img>
        <p>{title}</p>
        <p>{`￦${price}`}</p>
        <p>{category}</p>
    </li>
  );
}
