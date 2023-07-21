import { TextField, TextareaAutosize, Typography } from "@mui/material";
import Navbar from "@/components/Navbar";
export default function contact() {
  return (
    <div>
      <Navbar />
      <div className="bg-blue-500 flex items-center h-auto flex-col px-[20%] py-[7%]">
        <Typography className="text-4xl">CONTACT US</Typography>
        <Typography className="text-1xl text-center pt-[2%]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </Typography>
        <div className="bg-white rounded-[20px] flex flex-col justify-center items-center text-black w-[45%] mt-10 py-[5%]">
          <Typography className="text-3xl text-yellow-400">
            POST YOUR QUERIES
          </Typography>
          <form
            action="{getform-endpoint}"
            method="POST"
            className="flex flex-col justify-center px-[5%] py-[6%] w-[80%]"
          >
            <TextField
              fullWidth
              type="text"
              name="name"
              placeholder="Enter Your Name"
              className="py-[2%]"
            />
            <TextField
              fullWidth
              type="email"
              name="email"
              placeholder="Enter Your MaildID"
              className="py-[2%]"
            />
            <TextField
              fullWidth
              name="message"
              minRows={3}
              placeholder="Enter Your Queries"
              className="py-[2%]"
            />
            <button
              type="submit"
              className="mt-[10%] py-[2%] rounded-[20px] bg-yellow-400 hover:bg-yellow-500 transition-colors text-white"
            >
              Send
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
