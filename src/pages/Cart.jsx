import React from "react";
import CartDetail from "../components/CartDetail";
import CartOrder from "../components/CartOrder";
import useCarts from "../hooks/useCarts";

export default function Cart() {
  const { cartQuery: {isLoading, data: carts}} = useCarts();

  if (isLoading) return <p>Loading...</p>;
  const hasProducts = carts && carts.length > 0;
  return (
    <section>
      <h1>내 장바구니</h1>
      {!hasProducts && <p>🛒I'am hungry! Give me some Tacos!</p>}
      {hasProducts &&
        carts.map((cart) => (
          <CartDetail key={cart.productId} cart={cart}/>
        ))}
      {carts && <CartOrder carts={carts} />}
    </section>
  );
}
