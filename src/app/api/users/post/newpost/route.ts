import { NextRequest, NextResponse } from "next/server";
import { connect } from "@/dbConfig/dbConfig";
// eslint-disable-next-line import/extensions
import Post from "@/models/postSchema";

export async function POST(request: NextRequest) {
  await connect();
  try {
    const data = await request.json();
    console.log(data);
    const Newpost = new Post(data);
    const saved = await Newpost.save();
    return NextResponse.json({
      message: "post saved successful",
      success: true,
      saved,
    });
  } catch (error) {
    console.log(error);
  }
}
