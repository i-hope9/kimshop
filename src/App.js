import React from "react";
import { Outlet } from "react-router-dom";
import {
  QueryClient,
  QueryClientProvider,
} from "react-query";
import { AuthContextProvider } from "./components/context/AuthContext";
import Navbar from "./components/Navbar";

const queryClient = new QueryClient();

export default function App() {
  return (
    <div>
      <AuthContextProvider>
        <Navbar />
        <QueryClientProvider client={queryClient}>
          <Outlet />
        </QueryClientProvider>
      </AuthContextProvider>
    </div>
  );
}
