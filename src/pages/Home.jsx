import React from "react";
import { readProducts } from "../api/firebase";
import { useQuery } from "react-query";
import ProductCard from "../components/ProductCard";
import Banner from "../components/Banner";

export default function Home() {
  const {
    isLoading, 
    error,
    data: products
  } = useQuery(["products"], () => {
    return readProducts();
  }, {
    staleTime: 1000 * 60 * 1
  })

  return <>
    <Banner></Banner>
    {isLoading && <p>🌮I'm coming!🌯</p>}
    {error && <p></p>}
    <ul className="grid grid-cols-1 md:grid-cols-4 gap-4">
      {products && products.map((product) => <ProductCard key={product.uuid} product={product}></ProductCard>)}
    </ul>
  </>;
}
