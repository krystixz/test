import { NextRequest, NextResponse } from "next/server";
import { connect } from "@/dbConfig/dbConfig";
// eslint-disable-next-line import/extensions
import Post from "@/models/postSchema";

export async function POST(request: NextRequest) {
  await connect();
  try {
    const data = await request.json();

    const post = await Post.findById(data.id);
    console.log(post);

    return NextResponse.json({
      message: "post saved successful",
      success: true,
      post,
    });
  } catch (error) {
    console.log(error);
  }
}
