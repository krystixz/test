import { NextRequest, NextResponse } from "next/server";
import { connect } from "@/dbConfig/dbConfig.js"
// import User from "@/models/userSchema.ts"

connect()

export async function POST(request:NextRequest) {
    const data = await request.json();
    console.log(data);
    // const user = User.findOne({username:data.data.username})
    return NextResponse.json({
        message: "Login successful",
        success: true,
    })
}