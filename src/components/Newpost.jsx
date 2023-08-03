"use client";

import axios from "axios";
import { TextField, Typography } from "@mui/material";
import { useState } from "react";

const EmptypostData = {
  username: "",
  title: "",
  description: "",
  code: "",
};

function Newpost({ user }) {
  const [postData, setpostData] = useState(EmptypostData);

  async function handleSubmit() {
    setpostData({
      ...postData,
    });
    console.log(postData);
    try {
      const response = await axios.post("/api/users/post/newpost", postData);
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
    setpostData(EmptypostData);
  }

  return (
    <div className="bg-slate-900 text-white w-screen h-screen">
      <div className="flex flex-col pt-[10%] gap-10 items-center">
        <Typography sx={{ fontSize: "30px" }} className=" text-yellow-500">
          Create New Post
        </Typography>
        <div className="flex flex-col gap-4 items-center w-[70%] h-[60%] bg-white rounded-[30px]">
          <div className="flex w-[100%]">
            <div className="flex flex-col items-center gap-10 justify-center w-[50%] pt-[3%]">
              <TextField
                label="Title"
                value={postData.title}
                variant="standard"
                className="w-[60%]"
                onChange={(e) => {
                  setpostData({
                    ...postData,
                    title: e.target.value || "",
                    username: user,
                  });
                }}
              />
              <TextField
                label="Description"
                value={postData.description}
                variant="standard"
                className="w-[60%]"
                onChange={(e) => {
                  setpostData({
                    ...postData,
                    description: e.target.value || "",
                  });
                }}
              />
              <button
                type="button"
                className="bg-yellow-500 w-[20%] py-2 rounded-[20px] mt-[10%]"
                onClick={handleSubmit}
              >
                Publish
              </button>
            </div>
            <div className="w-[50%] flex justify-center py-[3%]">
              <textarea
                className="w-[90%] resize-none bg-black rounded-[7px] text-white"
                value={postData.code}
                placeholder=" /* Enter Your Code Here */"
                rows={15}
                onChange={(e) => {
                  setpostData({
                    ...postData,
                    code: e.target.value || "",
                  });
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Newpost;
