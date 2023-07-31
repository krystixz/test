"use client";

import axios from "axios";
import { useState, useEffect } from "react";

function Userposts({ params }) {
  const [posts, setPosts] = useState([]);
  const fetchPosts = async () => {
    const data = await axios.post("/api/post/viewpost", {
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
    <div>
      Here we will print all {params.user} posts :{" "}
      {posts.map((post) => {
        return (
          <h1 className="text-white">
            Tile : {post.title} desc : {post.description}{" "}
          </h1>
        );
      })}
    </div>
  );
}
export default Userposts;
