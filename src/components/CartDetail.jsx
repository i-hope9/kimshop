import React from "react";
import {
  AiOutlinePlusSquare,
  AiOutlineMinusSquare,
  AiFillDelete,
} from "react-icons/ai";
import { deleteCart, updateCart } from "../api/firebase";

export default function CartDetail({ cart, uid }) {
  const { productId, url, title, price, option, quantity } = cart;
  const handleMinus = (op) => {
    if (quantity < 2) return;
    updateCart({ ...cart, quantity: quantity - 1 }, uid);
  };
  const handlePlus = () => {
    updateCart({ ...cart, quantity: quantity + 1 }, uid);
  };
  const handleDelete = () => {
    deleteCart(uid, productId);
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
          <AiOutlineMinusSquare name="+" />
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
