"use client";
import Image from "next/image";
import Link from "next/link";
import logo from "../../public/images/logo.png";
import { useRouter } from "next/navigation";

export default function Navbar() {
  const router = useRouter();
  function handleClick() {
    router.push("/login");
  }
  function handleClickLogo() {
    router.push("/");
  }
  return (
    <div className="bg-white flex text-black fixed w-screen">
      <div onClick={handleClickLogo} className=" hover:cursor-pointer">
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
        <button
          className="bg-blue-500 text-white rounded-[20px] px-5 py-2 mx-5 hover:bg-blue-700 transition-colors"
          onClick={handleClick}
        >
          Login
        </button>
      </div>
    </div>
  );
}
