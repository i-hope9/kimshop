import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { AiFillPlusCircle } from "react-icons/ai";
import { FaEquals } from "react-icons/fa";

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
    <section>
      <div className="flex justify-between items-center">
        <div>
          <p>상품 총액</p>
          <p>￦{productsPrice}</p>
        </div>
        <AiFillPlusCircle />
        <div>
          <p>배송비</p>
          <p>￦{shippingFee}</p>
        </div>
        <FaEquals />
        <div>
          <p>총 가격</p>
          <p>￦{totalPrice}</p>
        </div>
      </div>
      <button className="w-full">주문하기</button>
    </section>
  );
}
