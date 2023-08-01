/* eslint-disable import/no-named-as-default */

"use client";

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import Newpost from "@/components/Newpost";

function NewPost({ params }) {
  const { status } = useSession();
  const router = useRouter();
  if (status === "authenticated") {
    return (
      <div>
        <Newpost user={params.user} />
      </div>
    );
  }
  router.replace("/login");
  return null;
}

export default NewPost;
