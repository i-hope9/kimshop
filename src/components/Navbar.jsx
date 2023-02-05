import React from "react";
import { Link } from "react-router-dom";
import { GiTacos } from "react-icons/gi";
import { BsFileEarmarkPlus } from "react-icons/bs"
import User from "./User";
import { useAuthContext } from "./context/AuthContext";

export default function Navbar() {
  const {user, googleSignIn, googleSignOut} = useAuthContext();

  return (
    <header className="flex flex-row p-4 text-2xl font-sans border-b border-indigo-500">
      <Link to="/" className="basis-2/3">
        <h1 className="flex items-center">
          <GiTacos /> KimTaco
        </h1>
      </Link>
      <nav className="basis-1/3 flex items-center space-x-4">
        <Link to="/products">All</Link>
        {user && <Link to="/cart">Cart</Link>}
        {(user && user.isAdmin) && <Link to="/products/new"><BsFileEarmarkPlus /></Link>}     
        {!user && (
          <button onClick={googleSignIn}>
            Sign In
          </button>
        )}
        {user && <User user={user}></User>}
        {user && (
          <button onClick={googleSignOut}>
            Sign Out
          </button>
        )}
      </nav>
    </header>
  );
}
