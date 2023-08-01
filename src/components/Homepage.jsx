"use client";

import axios from "axios";
import { useState, useEffect } from "react";
import Link from "next/link";

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
    <div className="flex flex-col justify-center items-center h-screen">
      Here we will print all Homepage posts :{" "}
      <div>
        {posts.map((post) => {
          return (
            <Link href={`/posts/${post._id}`} className="text-white">
              Tile : {post.title} desc : {post.description}{" "}
            </Link>
          );
        })}
      </div>
    </div>
  );
}
export default Homepage;
