"use client";

import axios from "axios";
import { TextField } from "@mui/material";
import { useState } from "react";

const EmptypostData = {
  username: "",
  title: "",
  description: "",
};

function Newpost({ user }) {
  const [postData, setpostData] = useState(EmptypostData);

  async function handleSubmit() {
    setpostData({
      ...postData,
      username: user,
    });
    console.log(postData);
    try {
      const response = await axios.post("/api/post/newpost", postData);
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
    setpostData(EmptypostData);
  }

  return (
    <div className="bg-gradient-to-t from-orange-400 to-sky-400 text-black flex flex-col items-center  h-screen justify-center">
      <h1>{user}</h1>
      <div className="bg-white px-[10%] py-[7%] rounded-[10px]">
        <form method="post">
          <div>
            <h3>Create New Post</h3>
            <TextField
              label="Title"
              value={postData.title}
              variant="standard"
              className="my-5 w-[60%]"
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
              className="my-5 w-[60%]"
              onChange={(e) => {
                setpostData({
                  ...postData,
                  description: e.target.value || "",
                });
              }}
            />
          </div>
          <button
            type="button"
            className="bg-yellow-500"
            onClick={handleSubmit}
          >
            Publish
          </button>
        </form>
      </div>
    </div>
  );
}

export default Newpost;
