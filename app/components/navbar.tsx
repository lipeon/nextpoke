import React from "react";
import Link from "next/link";
import SignInButton from "./SignInButton";

const Navbar = () => {
  return (
    <div className="h-20 w-full border-b-2 flex items-center justify-between p-2">
      <ul className="flex">
        <li className="p-2 cursor-pointer">
          <Link href="/">Home</Link>
        </li>
        <li className="p-2 cursor-pointer">
          <Link href="/sobre">Sobre</Link>
        </li>
        <li className="p-2 cursor-pointer">
          <Link href="/perfil">Perfil</Link>
        </li>
      </ul>
    <SignInButton></SignInButton>
    </div>
  );
};

export default Navbar;
