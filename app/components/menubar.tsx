"use client";
import React from "react";
import { signIn, signOut, useSession } from "next-auth/react";
import Link from "next/link";

const MenuBar = () => {
  const { data: session } = useSession();
  //console.log(session);

  return (
    <>
      {session ? (
        <>
      <ul className="flex">
        <li className="p-2 cursor-pointer">
          <Link href="/">Home</Link>
        </li>
        <li className="p-2 cursor-pointer">
          <Link href="/jogar">Jogar</Link>
        </li>
        <li className="p-2 cursor-pointer">
          <Link href="/perfil">Perfil</Link>
        </li>
      </ul>
        </>
      ) : (
        <>
      <ul className="flex">
        <li className="p-2 cursor-pointer">
          <Link href="/">Home</Link>
        </li>
        <li className="p-2 cursor-pointer">
          <Link href="/sobre">Sobre</Link>
        </li>
      </ul>
        </>
      )}
    </>
  );
};

export default MenuBar;
