import React from "react";
import ProductCard from "../components/ProductCard";
import Banner from "../components/Banner";
import useProducts from "../hooks/useProducts";

export default function Home() {
  const {
    productsQuery: { isLoading, error, data: products },
  } = useProducts();

  return (
    <>
      <Banner></Banner>
      {isLoading && <p>🌮I'm coming!🌯</p>}
      {error && <p></p>}
      <ul className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {products &&
          products.map((product) => (
            <ProductCard key={product.uuid} product={product}></ProductCard>
          ))}
      </ul>
    </>
  );
}
