"use client";

import Link from "next/link";
import { useState } from "react";
import Image from "next/image";
import { TextField } from "@mui/material";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import logo from "../../../public/images/logo.png";
import googleicon from "../../../public/images/googleicon.png";

const EmptyuserData = {
  username: "",
  password: "",
};

export default function Login() {
  const { data: session, status } = useSession();
  const router = useRouter();
  const [userData, setuserData] = useState(EmptyuserData);
  const [error, setError] = useState<string | null>(null);

  if (status === "authenticated") {
    console.log(session);
    router.push("/");
  }

  async function handleSubmit() {
    setuserData(EmptyuserData);
    try {
      const resp = await signIn("credentials", {
        ...userData,
        redirect: false,
      });
      if (resp?.error) {
        setError("Check your username and password");
      }
    } catch (err) {
      console.log(err);
    }
  }
  return (
    <div className="bg-slate-900 h-screen flex justify-center items-center">
      <div className="bg-white w-[30%] text-black p-5 flex flex-col justify-center items-center rounded-[50px]">
        <Image src={logo} alt="logo" className="w-[40%] h-auto" />
        <h1 className="text-3xl">Login</h1>
        <TextField
          label="Username"
          value={userData.username}
          variant="standard"
          className="my-5 w-[60%]"
          onChange={(e) => {
            setuserData({
              ...userData,
              username: e.target.value || "",
            });
          }}
        />
        <TextField
          label="Password"
          value={userData.password}
          variant="standard"
          className="my-5 w-[60%]"
          onChange={(e) => {
            setuserData({
              ...userData,
              password: e.target.value || "",
            });
          }}
        />
        {error && (
          <div className="w-full flex justify-center text-red-500">
            <p>{error}</p>
          </div>
        )}
        <button
          type="button"
          className="bg-yellow-400 px-[20%] py-2 rounded-[20px] my-10"
          onClick={handleSubmit}
        >
          Login
        </button>
        <p className="pb-7">
          Forgot
          <span>
            <Link href="/signup" className="text-blue-600 px-2">
              password ?
            </Link>
          </span>
        </p>

        <p>
          Don&apos;t Have an account?
          <span>
            <Link href="/signup" className="text-blue-600 px-2">
              Signup
            </Link>
          </span>
        </p>
        <hr />
        <button
          type="button"
          className="bg-black inline text-white rounded-2xl my-5 py-3 px-2"
        >
          <div className="flex flex-row items-center">
            <Image src={googleicon} alt="google icon" width="40" height="40" />
            <div className="pl-2 w-full">Continue with Google</div>
          </div>
        </button>
      </div>
    </div>
  );
}
