import React from "react";
import { Link } from "react-router-dom";
import { GiTacos } from "react-icons/gi";
import {
  googleSignIn,
  googleSignOut,
  onUserStateChanged,
} from "../api/firebase";
import { useState } from "react";
import { useEffect } from "react";
import User from "./User";

export default function Navbar() {
  const [user, setUser] = useState();

  useEffect(() => {
    onUserStateChanged((user) => setUser(user));
  }, []);

  return (
    <header className="flex flex-row p-4 text-2xl font-sans border-b border-indigo-500">
      <Link to="/" className="basis-2/3">
        <h1 className="flex items-center">
          <GiTacos /> KimTaco
        </h1>
      </Link>
      <nav className="basis-1/3">
        <Link to="/products">All</Link>
        <Link to="/cart" className="ml-4">
          Cart
        </Link>
        <Link to="/products/new" className="ml-4">
          New for admin
        </Link>
        {!user && (
          <button onClick={googleSignIn} className="ml-4">
            Sign In
          </button>
        )}
        {user && <User user={user}></User>}
        {user && (
          <button onClick={googleSignOut} className="ml-4">
            Sign Out
          </button>
        )}
      </nav>
    </header>
  );
}
