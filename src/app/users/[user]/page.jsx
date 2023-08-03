"use client";

import axios from "axios";
import { useState, useEffect } from "react";
import Postcard from "@/components/Postcard";
import Navbar from "@/components/Navbar";
import { Typography } from "@mui/material";

function Userposts({ params }) {
  const [posts, setPosts] = useState([]);
  const fetchPosts = async () => {
    const data = await axios.post("/api/users/post/viewpost", {
      username: params.user,
    });
    console.log(data.data.posts);

    setPosts(data.data.posts);
  };

  useEffect(() => {
    fetchPosts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="bg-slate-900 h-screen">
      <Navbar />
      <div className="pt-[10%] p-5">
        <div>
          <Typography className="text-yellow-500 text-3xl ">
            Your Recent Posts
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
    </div>
  );
}
export default Userposts;
