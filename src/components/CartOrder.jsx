import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { AiFillPlusCircle } from "react-icons/ai";
import { FaEquals } from "react-icons/fa";
import Button from "../components/ui/Button"

const CARD_CLASS = "p-8 m-2 w-full bg-slate-100";
const PRICE_CLASS = "text-brand text-xl font-bold";
const ICON_CLASS = "text-slate-500 text-2xl shrink-0";
export default function CartOrder({ carts }) {
  const [totalPrice, setTotalPrice] = useState();
  const shippingFee = 3000;
  const productsPrice =
    carts &&
    carts.reduce(
      (prev, curr) => prev + parseInt(curr.price) * curr.quantity,
      0
    );

  useEffect(() => {
    setTotalPrice(productsPrice + shippingFee);
  }, [productsPrice, shippingFee]);

  return (
    <section className="flex flex-col">
      <div className="flex justify-between items-center my-2">
        <div className={CARD_CLASS}>
          <p>상품 총액</p>
          <p className={PRICE_CLASS}>￦{productsPrice}</p>
        </div>
        <AiFillPlusCircle  className={ICON_CLASS}/>
        <div className={CARD_CLASS}>
          <p>배송비</p>
          <p className={PRICE_CLASS}>￦{shippingFee}</p>
        </div>
        <FaEquals className={ICON_CLASS}/>
        <div className={CARD_CLASS}>
          <p>총 가격</p>
          <p className={PRICE_CLASS}>￦{totalPrice}</p>
        </div>
      </div>
      <Button className="w-full" text="주문하기" />
    </section>
  );
}
