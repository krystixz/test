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
      <div className=" bg-slate-900 text-white flex flex-col h-screen px-[5%]">
        <Typography className="md:text-6xl sm:text-4xl  pt-[10%] text-yellow-500">
          About US
        </Typography>
        <div className=" grid grid-cols-2">
          <div className="flex flex-col justify-center items-center">
            <Typography className=" text-[18px]">
              Welcome to Codehub, your go-to platform for staying motivated and
              sharpening your competitive programming skills! We understand the
              challenges students face while preparing for competitive
              programming interviews, and that's why we have created this
              dedicated space for you to share your daily accomplishments and
              progress.
            </Typography>
            <Typography className="text-[18px] pt-5">
              Join us at Codehub and embark on an exciting journey of learning,
              growth, and motivation. Let's come together, push our boundaries,
              and unlock our true potential in the world of competitive
              programming! Remember, every small step counts, and with Codehub,
              you're never alone in your pursuit of excellence. Happy coding!
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
        <div className="w-[10%]">
          <Button
            fullWidth
            type="button"
            sx={{
              bgcolor: "#FACC15",
              color: "white",
              ":hover": { bgcolor: "#CA8A04" },
            }}
            onClick={() => {
              router.push("/login");
            }}
          >
            Sign-up here
          </Button>
        </div>
      </div>
    </div>
  );
}
