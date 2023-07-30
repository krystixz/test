/* eslint-disable jsx-a11y/anchor-is-valid */

"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useSession, signOut } from "next-auth/react";
import { useState } from "react";
import logo from "../../public/images/logo.png";

export default function Navbar() {
  const router = useRouter();
  const [dropdownOpen, setdropdownOpen] = useState(false);
  const { data: session, status } = useSession();

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
          <div className="mx-5">
            <button
              type="button"
              onClick={() => setdropdownOpen(!dropdownOpen)}
              onMouseEnter={() => setdropdownOpen(true)}
              onMouseLeave={() => setdropdownOpen(false)}
              className="flex justify-center items-center px-5 py-2 rounded-[20px]
          hover:cursor-pointer
          bg-black
          text-white
          "
            >
              {session.user?.name}
              <svg
                className="-mr-1 h-5 w-5 text-gray-400"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                  clipRule="evenodd"
                />
              </svg>
            </button>

            <div
              onMouseEnter={() => setdropdownOpen(true)}
              onMouseLeave={() => setdropdownOpen(false)}
              className={`${
                dropdownOpen
                  ? `top-full opacity-100 visible`
                  : "top-[110%] invisible opacity-0"
              } absolute right-[1.5%] z-40 mt-2.5 rounded-[15px] border-[.5px] border-light bg-white pt-2 shadow-card transition-all`}
            >
              <div
                role="button"
                tabIndex={0}
                onClick={() => router.push(`/post/${session.user?.name}`)}
                className="block py-2 px-5 text-base font-semibold text-body-color hover:bg-primary hover:bg-opacity-5 hover:text-primary"
              >
                View Posts
              </div>
              <div
                role="button"
                tabIndex={0}
                onClick={() =>
                  router.push(`/post/${session.user?.name}/newpost`)
                }
                className="block py-2 px-5 text-base font-semibold text-body-color hover:bg-primary hover:bg-opacity-5 hover:text-primary"
              >
                New Post
              </div>
              <hr />
              <div className="flex items-center justify-center py-2.5">
                <button
                  type="button"
                  onClick={() => signOut()}
                  className="text-base bg-black text-white w-full rounded-[20px] mx-3 py-2"
                >
                  Logout
                </button>
              </div>
            </div>
          </div>
        ) : (
          <button
            type="button"
            className="bg-black text-white rounded-[20px] px-5 py-2 mx-5"
            onClick={handleClick}
          >
            Login
          </button>
        )}
      </div>
    </div>
  );
}
