import Link from "next/link";
import logo from "../../../public/images/logo.png";
import Image from "next/image";
import { TextField } from "@mui/material";
export default function Login() {
  return (
    <div className="bg-blue-500 h-screen flex justify-center items-center">
      <div className="bg-white w-[30%] text-black p-5 flex flex-col justify-center items-center rounded-[50px] py-10">
        <Image src={logo} alt="logo" className="w-[40%] h-auto" />
        <h1 className="text-3xl">Login</h1>
        <TextField
          label="Username"
          variant="standard"
          className="my-5 w-[60%]"
        />
        <TextField
          label="Password"
          variant="standard"
          className="my-5 w-[60%]"
        />
        <button className="bg-yellow-400 px-[20%] py-2 rounded-[20px] my-10">
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
