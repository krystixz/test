"use client";
import Link from "next/link";
import logo from "../../../public/images/logo.png";
import Image from "next/image";
import { TextField } from "@mui/material";
import { useState } from "react";

const EmptyuserData = {
  uname: "",
  password: "",
  confirmpass: "",
};
export default function Signup() {
  const [userData, setUserData] = useState(EmptyuserData);

  function handleClick() {
    console.log(userData);
    if (userData.password === userData.confirmpass) {
      console.log("True");
      //handle axios
    } else {
      console.log("False");
      //handle show error, toast
    }
    setUserData(EmptyuserData);
  }

  return (
    <div className="bg-blue-500 h-screen flex justify-center items-center">
      <div className="bg-white w-[30%] text-black p-5 flex flex-col justify-center items-center rounded-[50px] py-10">
        <Image src={logo} alt="logo" className="w-[40%] h-auto" />
        <h1 className="text-3xl">Signup</h1>
        <TextField
          label="Username"
          variant="standard"
          value={userData.uname}
          className="my-5 w-[60%]"
          onChange={(e) => {
            setUserData({
              ...userData,
              uname: e.target.value,
            });
          }}
        />
        <TextField
          label="Password"
          variant="standard"
          value={userData.password}
          className="my-5 w-[60%]"
          onChange={(e) => {
            setUserData({
              ...userData,
              password: e.target.value,
            });
          }}
        />
        <TextField
          label="Confirm Password"
          variant="standard"
          value={userData.confirmpass}
          className="my-5 w-[60%]"
          onChange={(e) => {
            setUserData({
              ...userData,
              confirmpass: e.target.value,
            });
          }}
        />
        <button
          className="bg-yellow-400 px-[20%] py-2 rounded-[20px] my-10"
          onClick={handleClick}
        >
          Signup
        </button>

        <p>
          Already Have an account?
          <span>
            <Link href="/login" className="text-blue-600 px-2">
              Login
            </Link>
          </span>
        </p>
      </div>
    </div>
  );
}
