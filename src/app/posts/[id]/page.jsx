"use client";

import axios from "axios";
import { useState, useEffect } from "react";

function Singlepost({ params }) {
  const [posts, setPosts] = useState([]);
  const fetchPosts = async () => {
    console.log(params.id);
    const data = await axios.post("/api/posts/singlepost", { id: params.id });
    console.log(data.data.post);

    setPosts(data.data.post);
  };

  useEffect(() => {
    fetchPosts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      Here we will print all Homepage posts :{" "}
      <h1 className="text-white">
        Tile : {posts.title} desc : {posts.description}{" "}
      </h1>
    </div>
  );
}
export default Singlepost;
