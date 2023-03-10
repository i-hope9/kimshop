import React from "react"
import ReactDOM from 'react-dom/client';
import "./index.css"
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from  "./App"
import Cart from "./pages/Cart";
import Home from "./pages/Home";
import Error from "./pages/Error";
import ProductDetail from "./pages/ProductDetail";
import Products from "./pages/Products";
import NewProduct from "./pages/NewProduct";
import ProtectedRoute from "./pages/ProtectedRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      { index: true, element: <Home /> },
      { path: "/products", element: <Products />},
      { path: "/products/:productId", element: <ProductDetail /> },
      { path: "/products/new", element: <ProtectedRoute requireAdmin><NewProduct /></ProtectedRoute>},
      { path: "/cart", element: <ProtectedRoute><Cart /></ProtectedRoute>}
    ]
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
