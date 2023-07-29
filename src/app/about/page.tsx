"use client";

import { useRouter } from "next/navigation";
import { Button, Typography } from "@mui/material";
import Image from "next/image";
// eslint-disable-next-line import/extensions
import Navbar from "../../components/Navbar";
import Aboutuspic from "../../../public/images/aboutus.jpg";

export default function About() {
  const router = useRouter();
  return (
    <div>
      <Navbar />
      <div className=" bg-gradient-to-t from-orange-400 to-sky-400 text-white flex flex-col h-screen">
        <Typography className="md:text-6xl sm:text-4xl px-[5%] pt-[10%]">
          About US
        </Typography>
        <div className=" grid grid-cols-2 px-[5%]">
          <div className="flex flex-col justify-center items-center">
            <Typography className="md:text-2xl sm:text-1xl">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </Typography>
            <Typography className="md:text-2xl sm:text-1xl pt-5">
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
              cupidatat non proident, sunt in culpa qui officia deserunt mollit
              anim id est laborum.
            </Typography>
          </div>
          <div className="flex justify-center">
            <Image
              src={Aboutuspic}
              alt="About us Pic"
              className="w-[80%] rounded-[20px]"
            />
          </div>
        </div>
        <Button
          type="button"
          className="bg-yellow-400 text-white w-[10%] hover:bg-yellow-600 mx-[5%] my-[1%]"
          onClick={() => {
            router.push("/login");
          }}
        >
          Sign-up here
        </Button>
      </div>
    </div>
  );
}
