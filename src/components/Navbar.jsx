import React from "react";
import { Link } from "react-router-dom";
import { GiTacos } from "react-icons/gi";
import { BsPen } from "react-icons/bs";
import User from "./User";
import { useAuthContext } from "../context/AuthContext";
import CartStatus from "./CartStatus";
import Button from "./ui/Button";

export default function Navbar() {
  const { user, googleSignIn, googleSignOut } = useAuthContext();

  return (
    <header className="flex justify-between p-2 bg-slate-100">
      <Link to="/" className="">
        <h1 className="flex text-2xl font-bold items-center text-brand">
          <GiTacos /> KimTaco
        </h1>
      </Link>
      <nav className="flex items-center gap-4">
        {user && (
          <Link to="/cart">
            <CartStatus />
          </Link>
        )}
        {user && user.isAdmin && (
          <Link to="/products/new">
            <BsPen className="text-3xl" />
          </Link>
        )}
        {!user && <Button text="Sign In" onClick={googleSignIn} />}
        {user && <User user={user}></User>}
        {user && <Button text="Sign Out" onClick={googleSignOut} />}
      </nav>
    </header>
  );
}
