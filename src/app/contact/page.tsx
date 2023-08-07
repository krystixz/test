import { TextField, Typography } from "@mui/material";
// eslint-disable-next-line import/extensions
import Navbar from "@/components/Navbar";

export default function contact() {
  return (
    <div>
      <Navbar />
      <div className="bg-slate-900 flex items-center h-auto flex-col px-[20%] py-[7%]">
        <Typography className="text-4xl text-yellow-500">CONTACT US</Typography>
        <Typography className="text-1xl text-center pt-[2%] text-white">
          Have questions or suggestions? Get in touch with us at Codehub, and
          we'll be thrilled to hear from you! Your feedback fuels our mission of
          keeping students motivated in competitive programming.
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
              sx={{
                paddingTop: "4%",
              }}
            />
            <TextField
              fullWidth
              type="email"
              name="email"
              placeholder="Enter Your MaildID"
              sx={{
                paddingTop: "4%",
              }}
            />
            <TextField
              fullWidth
              name="message"
              minRows={3}
              placeholder="Enter Your Queries"
              sx={{
                paddingTop: "4%",
              }}
            />
            <button
              type="submit"
              className="mt-[10%] py-[4%] rounded-[20px] bg-yellow-400 hover:bg-yellow-500 transition-colors text-white"
            >
              Send
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
