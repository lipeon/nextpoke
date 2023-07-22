import React from "react";

const SignInButton = () => {
  return (
    <ul className="flex">
      <li className="p-2 cursor-pointer">Login</li>
      <li className="p-2 cursor-pointer">
        <img
          className="w-10 h-10 rounded-full"
          src="/logo.png"
          alt="Rounded avatar"
        ></img>
      </li>
    </ul>
  );
};

export default SignInButton;
