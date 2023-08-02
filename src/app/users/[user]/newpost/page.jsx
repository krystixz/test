/* eslint-disable import/no-named-as-default */

"use client";

import Newpost from "../../../../components/Newpost";
import Navbar from "../../../../components/Navbar.tsx";

function NewPost({ params }) {
  return (
    <div>
      <Navbar />
      <Newpost user={params.user} />
    </div>
  );
}
export default NewPost;
