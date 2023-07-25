import React from "react";
import Link from "next/link";
import SignInButton from "./SignInButton";
import MenuBar from "./menubar";

const Navbar = () => {
  return (
    
    <div className="h-20 w-full border-b-2 flex items-center justify-between p-2">
      <MenuBar></MenuBar>
    <SignInButton></SignInButton>
    </div>
  );
};

export default Navbar;
