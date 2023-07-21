import React from "react";
import Link from "next/link";

const Navbar = () => {
    return ( 
    <div className="h-20 w-full border-b-2 flex items-center">
        <ul>
            <li className="p-2 cursor-pointer">
                <Link href="/" >Home</Link>
            </li>
        </ul>
    </div>
     );
}
 
export default Navbar;