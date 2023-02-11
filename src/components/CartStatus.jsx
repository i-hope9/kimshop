import React from "react";
import { BsCart } from "react-icons/bs";
import { useAuthContext } from "../context/AuthContext";
import { readCarts } from "../api/firebase";
import { useQuery } from "react-query";

export default function CartStatus() {
  const { uid } = useAuthContext();
  const { data: carts } = useQuery(
    ["carts"],
    async () => {
      return readCarts(uid);
    }
    // ,
    // {
    //   refetchInterval: 1000,
    // }
  );

  return (
    <div className="relative">
      <BsCart className="text-4xl"/>
      {carts && <p className="w-6 h-6 text-sm font-bold font-mono text-center bg-indigo-700 text-white rounded-full absolute -top-1 -right-2">{carts.length}</p>}
    </div>
  );
}
