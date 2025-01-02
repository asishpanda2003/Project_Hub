import React from "react";
import Link from "next/link";
import Image from "next/image";
import icon from "@/public/icon.webp";
import { auth, signIn, signOut } from "@/auth";

const NavBar = async () => {
  const session = await auth();
  return (
    <header className="px-5 py-3 bg-white shadow-md font-work-sans">
      <nav className="flex justify-between items-center">
        <Link href="/">
          <Image src={icon} alt="logo" width={164} height={40} />
        </Link>
        <div className="flex items-center gap-5 text-black">
          {session && session?.user ? (
            <>
              <Link href="/">
                <span className="text-2 font-sans max-sm:hidden">Create</span>
              </Link>
              <form
                action={async () => {
                  "use server";
                  await signOut({ redirectTo: "/" });
                }}
              >
                <button type="submit" className="text-6 font-sans">
                  Logout
                </button>
              </form>
              <Link href={`/user/sessionid}`}>{session.user?.name}</Link>
            </>
          ) : (
            <form
              action={async () => {
                "use server";
                await signIn("github");
              }}
            >
              <button type="submit" className="text-6 font-sans">
                Login
              </button>
            </form>
          )}
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
