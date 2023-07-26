import {connect} from "@/dbConfig/dbConfig";
import User from "@/models/userSchema";
import { NextRequest, NextResponse } from "next/server";

connect()

export async function POST(request:NextRequest){
    try {
        const data = await request.json();
    console.log(data);
    const {username, password} = data;
    const user = await User.findOne({username})

    if(user){
        return NextResponse.json({error: "User already exists"}, {status: 400})
    }
    const newuser = new User({
        username : username,
        password : password,
    });
    const saved = await newuser.save();
    return NextResponse.json({
        message: "Signup successful",
        success: true,
        saved,
    })
    } catch (error : any) {
        return NextResponse.json({error: error.message}, {status: 500})
    }
}