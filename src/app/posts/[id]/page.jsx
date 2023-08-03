"use client";

import axios from "axios";
import { useState, useEffect } from "react";

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
    <div>
      Here we will print all Homepage posts :
      <h1 className="text-white">
        Tile : {post.title} desc : {post.description} <pre>{post.code}</pre>
      </h1>
    </div>
  );
}
export default Singlepost;
