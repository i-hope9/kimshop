import React from "react";
import { useState } from "react";
import { useLocation, useParams } from "react-router-dom";

export default function ProductDetail() {
  const { productId } = useParams();
  const {
    state: { product : {url, title, price, category, description, options} },
  } = useLocation();
  const [selected, setSelected] = useState(options && options[0]);
  const handleSelect = (e) => {
    setSelected(e.target.value);
  }
  const handleClick = () => {
    
  }
  return (
    <section className="">
      <p>{category}</p>
      <img className="w-96" src={url} alt={title}></img>
      <div>
        <p>{title}</p>
        <p>{`￦${price}`}</p>
        <p>{description}</p>
        <select onChange={handleSelect} value={selected}>
          {/* 배열의 index : 옵션이 동적으로 변경되지 않는 경우에만 key로 사용! */}
          {options && options.map((option, index) => <option key={index}>{option}</option>)}
        </select>
        <button onClick={handleClick}>장바구니에 추가</button>
      </div>
    </section>
  );
}
