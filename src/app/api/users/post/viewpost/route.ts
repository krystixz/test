import { NextRequest, NextResponse } from "next/server";
import { connect } from "@/dbConfig/dbConfig";
// eslint-disable-next-line import/extensions
import Post from "@/models/postSchema";

export async function POST(request: NextRequest) {
  await connect();
  try {
    const data = await request.json();
    console.log(data);
    const allposts = await Post.find(data, { code: 0, __v: 0 });
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
