import React from "react";
import Link from "next/link";
import Image from "next/image";
import icon from "@/public/icon.webp";

const NavBar = () => {
  return (
    <header className="px-5 py-3 bg-white shadow-md font-work-sans">
      <nav className="flex justify-between items-center">
        <Link href="/">
          <Image src={icon} alt="logo" width={164} height={40} />
        </Link>
        <div className="flex items-center gap-5 text-black">
          <Link href="/">
            <span className="text-2 font-sans max-sm:hidden">Create</span>
          </Link>
          <Link href="/">
            <span className="text-6 font-sans max-sm:hidden">Logout</span>
          </Link>

          <Link href="/">Username</Link>
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
