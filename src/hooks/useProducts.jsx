import { useQuery, useMutation, useQueryClient } from "react-query";
import { readProducts, writeProduct } from "../api/firebase";

export default function useProducts() {
  const queryClient = useQueryClient();

  const productsQuery = useQuery(
    ["products"],
    () => {
      return readProducts();
    },
    {
      staleTime: 1000 * 60 * 1,
    }
  );

  const addProduct = useMutation(
    ({ product, url }) => writeProduct(product, url),
    {
      onSuccess: () => queryClient.invalidateQueries(["products"]),
    }
  );

  return { productsQuery, addProduct };
}
