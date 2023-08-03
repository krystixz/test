"use client";

import axios from "axios";
import { useState, useEffect } from "react";
// import Link from "next/link";
import { Typography } from "@mui/material";
import Postcard from "./Postcard";

function Homepage() {
  const [posts, setPosts] = useState([]);
  const fetchPosts = async () => {
    const data = await axios.get("/api/posts/homepage");
    console.log(data.data.posts);

    setPosts(data.data.posts);
  };

  useEffect(() => {
    fetchPosts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="h-screen bg-slate-900 pt-[10%] p-5">
      <div className="pb-4">
        <Typography className="text-yellow-500 text-3xl">
          Latest Posts
        </Typography>
        <hr className="mt-3" />
      </div>
      <div>
        {posts.map((post) => {
          return (
            <Postcard
              title={post.title}
              description={post.description}
              postlink={`/posts/${post._id}`}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Homepage;
