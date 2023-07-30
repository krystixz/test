"use client";

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import Newpost from "@/components/Newpost";

function NewPost({ params }) {
  const { data: session, status } = useSession();
  const router = useRouter();
  if (status === "authenticated") {
    if (session.user.name !== params.user.toString()) {
      console.log("was here");
      router.replace("/");
    }
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
