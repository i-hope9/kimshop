import React from "react";
import { useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import useCarts from "../hooks/useCarts";
import Button from "../components/ui/Button";

export default function ProductDetail() {
  const { productId } = useParams();
  const { addCart } = useCarts();
  const [success, setSuccess] = useState();
  const {
    state: {
      product: { url, title, price, category, description, options },
    },
  } = useLocation();
  const [selected, setSelected] = useState(options && options[0]);
  const handleSelect = (e) => {
    setSelected(e.target.value);
  };
  const handleClick = () => {
    const cart = {
      productId,
      title,
      price,
      url,
      category,
      option: selected,
      quantity: 1,
    };
    addCart.mutate(cart, {
      onSuccess: () => {
        setSuccess("제품 등록 성공!");
        setTimeout(() => {
          setSuccess(null);
        }, 4000);
      },
    });
  };
  return (
    <section className="">
      <p className="mx-12 mt-4 text-slate-500">{category}</p>
      <section className="flex flex-col md:flex-row p-4">
        <img className="w-full px-4 basis-7/12" src={url} alt={title}></img>
        <div className="w-full px-4 basis-5/12 flex flex-col ">
          <p className="text-2xl font-bold text-brand">{title}</p>
          <p className="text-xl">{`￦${price}`}</p>
          <p className="mt-2">{description}</p>
          <div className="flex items-center mt-2">
            <label className="text-bold" htmlFor="select">옵션: </label>
            <select id="select" className="p-2 m-4 bg-slate-100 outline-none" onChange={handleSelect} value={selected}>
              {/* 배열의 index : 옵션이 동적으로 변경되지 않는 경우에만 key로 사용! */}
              {options &&
                options.map((option, index) => (
                  <option key={index}>{option}</option>
                ))}
            </select>
          </div>
          {success && <p>✅ {success}</p>}
          <Button text="장바구니에 추가" onClick={handleClick} />
        </div>
      </section>
    </section>
  );
}
