"use client";

import { Typography } from "@mui/material";
import axios from "axios";
import { useState, useEffect } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import Navbar from "@/components/Navbar.tsx";

function Singlepost({ params }) {
  const [post, setPost] = useState([]);
  const fetchPosts = async () => {
    console.log(params.id);
    const data = await axios.post("/api/posts/singlepost", { id: params.id });
    console.log(data.data.post);

    setPost(data.data.post);
  };

  useEffect(() => {
    fetchPosts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="bg-slate-900">
      <Navbar />
      <div className="p-5">
        <div className="pt-[10%] pb-5">
          <Typography className="text-yellow-500 text-3xl">
            {post.title}
          </Typography>
          <hr className="mt-3" />
        </div>
        <div>
          <div>
            <Typography>{post.description}</Typography>
          </div>
          <div className="pt-5">
            <Typography className="text-yellow-500 text-2xl">Code</Typography>
            <div className="rounded-[10px] mt-5 w-[50%]">
              <SyntaxHighlighter language="javascript" style={atomDark}>
                {post.code}
              </SyntaxHighlighter>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Singlepost;
