import React from "react";
import { useLocation, useParams } from "react-router-dom";

export default function ProductDetail() {
  const { productId } = useParams();
  const {
    state: { product : {url, title, price, category, description, options} },
  } = useLocation();
  return (
    <section className="">
      <p>{category}</p>
      <img className="w-96" src={url} alt={title}></img>
      <div>
        <p>{title}</p>
        <p>{`￦${price}`}</p>
        <p>{description}</p>
        <select>
          {options && options.map((option) => <option>{option}</option>)}
        </select>
      </div>
    </section>
  );
}
