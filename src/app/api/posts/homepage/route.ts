import { NextResponse } from "next/server";
import { connect } from "@/dbConfig/dbConfig";
// eslint-disable-next-line import/extensions
import Post from "@/models/postSchema";

export async function GET() {
  await connect();
  try {
    const allposts = await Post.find({}, { code: 0, __v: 0 });
    console.log(allposts);
    return NextResponse.json({
      message: "post saved successful",
      success: true,
      posts: allposts,
    });
  } catch (error) {
    console.log(error);
  }
}
