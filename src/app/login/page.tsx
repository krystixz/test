"use client";
import Link from "next/link";
import { useState } from "react";
import logo from "../../../public/images/logo.png";
import Image from "next/image";
import { TextField } from "@mui/material";

const EmptyuserData = {
  uname: "",
  password: "",
};

export default function Login() {
  const [userData, setuserData] = useState(EmptyuserData);

  function handleSubmit() {
    console.log(userData);
    //axios
    setuserData(EmptyuserData);
  }
  return (
    <div className="bg-blue-500 h-screen flex justify-center items-center">
      <div className="bg-white w-[30%] text-black p-5 flex flex-col justify-center items-center rounded-[50px] py-10">
        <Image src={logo} alt="logo" className="w-[40%] h-auto" />
        <h1 className="text-3xl">Login</h1>
        <TextField
          label="Username"
          value={userData.uname}
          variant="standard"
          className="my-5 w-[60%]"
          onChange={(e) => {
            setuserData({
              ...userData,
              uname: e.target.value || "",
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
        <button
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
      </div>
    </div>
  );
}
