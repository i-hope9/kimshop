import React from "react";
import { readProducts } from "../api/firebase";
import { useQuery } from "react-query";
import ProductCard from "../components/ProductCard";

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

  return <div>
    <section>
    
    </section>
    {isLoading && <p>🌮I'm coming!🌯</p>}
    {error && <p></p>}
    <ul>
      {products && products.map((product) => <ProductCard key={product.id} product={product}></ProductCard>)}
    </ul>
  </div>;
}
