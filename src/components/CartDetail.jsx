import React from "react";
import {
  AiOutlinePlusSquare,
  AiOutlineMinusSquare,
  AiFillDelete,
} from "react-icons/ai";
import useCarts from "../hooks/useCarts";

export default function CartDetail({ cart }) {
  const { productId, url, title, price, option, quantity } = cart;
  const { updateQuantity, removeCart } = useCarts();
  const handleMinus = () => {
    if (quantity < 2) return;
    updateQuantity.mutate({ ...cart, quantity: quantity - 1 }, {});
  };
  const handlePlus = () => {
    updateQuantity.mutate({ ...cart, quantity: quantity + 1 }, {});
  };
  const handleDelete = () => {
    removeCart.mutate(productId);
  };

  return (
    <li className="flex gap-20 items-center ">
      <img src={url} alt={title}></img>
      <div className="text-xl">
        <p>{title}</p>
        <p>{option}</p>
        <p>{price}</p>
      </div>
      <div className="flex items-center text-xl">
        <button onClick={handleMinus}>
          <AiOutlineMinusSquare />
        </button>
        <p>{quantity}</p>
        <button onClick={handlePlus}>
          <AiOutlinePlusSquare />
        </button>
        <button onClick={handleDelete}>
          <AiFillDelete />
        </button>
      </div>
    </li>
  );
}
