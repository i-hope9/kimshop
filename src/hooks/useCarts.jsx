import { useQuery, useMutation, useQueryClient } from "react-query";
import { deleteCart, readCarts, updateCart, writeCart } from "../api/firebase";
import { useAuthContext } from "../context/AuthContext";

export default function useCarts() {
  const { uid } = useAuthContext();
  const queryClient = useQueryClient();

  const cartQuery = useQuery(["carts", uid || ""], () => readCarts(uid), {
    enabled: !!uid,
  });

  const addCart = useMutation((cart) => writeCart(cart, uid), {
    onSuccess: () => queryClient.invalidateQueries(["carts", uid]),
  });

  const updateQuantity = useMutation((cart) => updateCart(cart, uid), {
    onSuccess: () => queryClient.invalidateQueries(["carts", uid]),
  });

  const removeCart = useMutation((productId) => deleteCart(uid, productId), {
    onSuccess: () => queryClient.invalidateQueries(["carts", uid]),
  });

  return { cartQuery, addCart, updateQuantity, removeCart };
}
