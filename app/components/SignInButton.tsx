"use client";
import React from "react";
import { signIn, signOut, useSession } from "next-auth/react";
import Image from "next/image";


const SignInButton = () => {
  const { data: session } = useSession();
  //console.log(session);
  
  return (
    <>
      {session ? (
        <>
          <ul className="flex">
            <li className="p-2 cursor-pointer">
              <button
                type="button"
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                onClick={() => signOut()}
              >
                Sair
              </button>
            </li>
            <li className="p-2 cursor-pointer">
              <Image
                className="w-10 h-10 rounded-full"
                width={100}
                height={100}
                src={`${session?.user?.image}`}
                alt={`${session?.user?.name}`}
              />
            </li>
          </ul>
        </>
      ) : (
        <>
          <ul className="flex">
            <li className="p-2 cursor-pointer">
              <button
                type="button"
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                onClick={() => signIn("google")}
              >
                Login
              </button>
            </li>
            <li className="p-2 cursor-pointer">
            </li>
          </ul>
        </>
      )}
    </>
  );
};

export default SignInButton;
