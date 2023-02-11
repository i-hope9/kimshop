import React from "react";
import { useQuery } from "react-query";
import { readCarts } from "../api/firebase";
import CartDetail from "../components/CartDetail";
import CartOrder from "../components/CartOrder";
import { useAuthContext } from "../context/AuthContext";

export default function Cart() {
  const { uid } = useAuthContext();
  const { isLoading, data: carts } = useQuery(
    ["carts"],
    async () => {
      return readCarts(uid);
    },
    {
      refetchInterval: 1000,
    }
  );
  if (isLoading) return <p>Loading...</p>;
  const hasProducts = carts && carts.length > 0;
  return (
    <section>
      <h1>내 장바구니</h1>
      {!hasProducts && <p>🛒I'am hungry! Give me some Tacos!</p>}
      {hasProducts &&
        carts.map((cart) => (
          <CartDetail key={cart.productId} cart={cart} uid={uid} />
        ))}
      {carts && <CartOrder carts={carts} />}
    </section>
  );
}
