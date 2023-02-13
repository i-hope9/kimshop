import React from "react";
import {
  AiOutlinePlusSquare,
  AiOutlineMinusSquare,
  AiFillDelete,
} from "react-icons/ai";
import useCarts from "../hooks/useCarts";

const ICON_CLASS = {ICON_CLASS};

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
    <li className="flex items-center justify-between my-2">
      <img src={url} alt={title} className="w-36 md:w-48"></img>
      <div className="flex flex-1 justify-between ml-4">
        <div className="text-left">
          <p className="text-xl">{title}</p>
          <p className="text-brand text-semibold">{option}</p>
          <p>￦{price}</p>
        </div>
        <div className="flex items-center text-xl gap-2">
          <button onClick={handleMinus} className={ICON_CLASS}>
            <AiOutlineMinusSquare />
          </button>
          <p>{quantity}</p>
          <button onClick={handlePlus} className={ICON_CLASS}>
            <AiOutlinePlusSquare />
          </button>
          <button onClick={handleDelete} className={ICON_CLASS}>
            <AiFillDelete />
          </button>
        </div>
      </div>
    </li>
  );
}
