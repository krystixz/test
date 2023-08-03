"use client";

import Link from "next/link";
import Image from "next/image";
import { TextField } from "@mui/material";
import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import logo from "../../../public/images/logo.png";
import googleicon from "../../../public/images/googleicon.png";

const EmptyuserData = {
  username: "",
  password: "",
  confirmpass: "",
};
export default function Signup() {
  const router = useRouter();
  const [userData, setUserData] = useState(EmptyuserData);

  async function handleClick() {
    console.log(userData);
    if (userData.password === userData.confirmpass) {
      console.log("True");
      try {
        const response = await axios.post("/api/auth/signup", userData);
        console.log(response.data);
        router.push("/login");
      } catch (error) {
        console.log(error);
      }
    } else {
      console.log("False");
      // handle show error, toast
    }
    setUserData(EmptyuserData);
  }

  return (
    <div className="bg-slate-900 h-screen flex justify-center items-center">
      <div className="bg-white w-[30%] text-black p-5 flex flex-col justify-center items-center rounded-[50px]">
        <Image src={logo} alt="logo" className="w-[40%] h-auto" />
        <h1 className="text-3xl">Signup</h1>
        <TextField
          label="Username"
          variant="standard"
          value={userData.username}
          className="my-5 w-[60%]"
          onChange={(e) => {
            setUserData({
              ...userData,
              username: e.target.value,
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
          type="button"
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
