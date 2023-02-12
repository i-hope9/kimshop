import React from "react";
import { BsCart } from "react-icons/bs";
import useCarts from "../hooks/useCarts";

export default function CartStatus() {
  const {
    cartQuery: { data: carts },
  } = useCarts();

  return (
    <div className="relative">
      <BsCart className="text-4xl" />
      {carts && (
        <p className="w-6 h-6 text-sm font-bold font-mono text-center bg-indigo-700 text-white rounded-full absolute -top-1 -right-2">
          {carts.length}
        </p>
      )}
    </div>
  );
}
