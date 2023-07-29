"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import logo from "../../public/images/logo.png";

export default function Navbar() {
  const router = useRouter();
  const { data: session, status } = useSession();
  if (status === "authenticated") {
    console.log(session);
  }

  function handleClick() {
    router.push("/login");
  }
  function handleClickLogo(): void {
    router.push("/");
  }
  return (
    <div className="bg-white flex text-black fixed w-screen">
      <div
        role="button"
        tabIndex={0}
        onClick={handleClickLogo}
        className=" hover:cursor-pointer"
      >
        <Image src={logo} alt="logo" style={{ width: "30%", height: "auto" }} />
      </div>
      <div className="ml-auto text-[18px] flex justify-center items-center px-5">
        <Link href="/" className="px-3 font-medium hover:font-bold ">
          Home
        </Link>
        <Link href="/about" className="px-3 font-medium hover:font-bold">
          About
        </Link>
        <Link href="/contact" className="px-3 font-medium hover:font-bold">
          Contact
        </Link>
        {status === "authenticated" ? (
          <button
            type="button"
            className="bg-blue-500 text-white rounded-[20px] px-5 py-2 mx-5 hover:bg-blue-700 transition-colors"
            onClick={handleClick}
          >
            LoggedIn
          </button>
        ) : (
          <button
            type="button"
            className="bg-blue-500 text-white rounded-[20px] px-5 py-2 mx-5 hover:bg-blue-700 transition-colors"
            onClick={handleClick}
          >
            Login
          </button>
        )}
      </div>
    </div>
  );
}
