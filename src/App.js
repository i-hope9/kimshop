import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Cart from "./pages/Cart";
import Home from "./pages/Home";
import Error from "./pages/Error";
import ProductDetail from "./pages/ProductDetail";
import Products from "./pages/Products";
import NewProduct from "./pages/NewProduct";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <Error />,
    children: [
      { index: true, element: <Products /> },
      { path: "/products", element: <Products />},
      { path: "/products/:productId", element: <ProductDetail /> },
      { path: "/products/new", element: <NewProduct />},
      { path: "/cart", element: <Cart />}
    ]
  }
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
