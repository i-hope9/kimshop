import React from "react";
import { Link } from "react-router-dom";
import { GiTacos } from "react-icons/gi";

export default function Navbar() {
  return (
    <header className="flex flex-row p-4 text-2xl font-sans border-b border-indigo-500">
      <Link to="/" className="basis-2/3">
        <h1 className="flex items-center"><GiTacos /> KimTaco</h1>
      </Link>
      <nav className="basis-1/3">
        <Link to="/products">All</Link>
        <Link to="/cart" className="ml-4">Cart</Link>
        <Link to="/products/new" className="ml-4">New for admin</Link>
        <Link to="/" className="ml-4">login</Link>
      </nav>
    </header>
  );
}
