import React from "react";
import { useNavigate } from "react-router-dom";

export default function ProductCard({ product }) {
  const { uuid, title, price, category, url } = product;
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`/products/${uuid}`, { state: { product } });
  };

  return (
    <li
      className="rounded-sm shadow-md overflow-hidden cursor-pointer"
      onClick={handleClick}
    >
      <img className="w-full" src={url} alt={title}></img>
      <div className="mt-2 mx-2">
        <p className="text-brand font-semibold">{title}</p>
        <p>{`￦${price}`}</p>
        <p className="text-slate-500">{category}</p>
      </div>
    </li>
  );
}
