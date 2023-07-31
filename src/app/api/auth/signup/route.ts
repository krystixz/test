import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import { connect } from "@/dbConfig/dbConfig";
// eslint-disable-next-line import/extensions
import User from "@/models/userSchema";

export async function POST(request: NextRequest) {
  await connect();
  try {
    const data = await request.json();
    console.log(data);
    const { email, username, password } = data;
    const user = await User.findOne({ email });

    if (user) {
      return NextResponse.json(
        { error: "User already exists" },
        { status: 400 },
      );
    }
    const hashedPassword = await bcrypt.hash(password, 5);
    const newuser = new User({
      email,
      username,
      password: hashedPassword,
    });
    const saved = await newuser.save();
    return NextResponse.json({
      message: "Signup successful",
      success: true,
      saved,
    });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
