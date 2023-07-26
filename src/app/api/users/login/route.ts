import { NextRequest, NextResponse } from "next/server";
import { connect } from "@/dbConfig/dbConfig.js"
import User from "@/models/userSchema"

connect()

export async function POST(request:NextRequest) {
    try {
        const data = await request.json();
        const {username,password} = data;
        console.log(data);
        const user = await User.findOne({username});
        if(!user){
            return NextResponse.json({error: "User does not exist"}, {status: 400})
        }
    
        if(password === user.password){
            return NextResponse.json({
                message: "Login successful",
                success: true,
            })
        }
        else {
            return NextResponse.json({error: "Invalid password"}, {status: 400})
        } 
    } catch (error : any) {
        return NextResponse.json({error: error.message}, {status: 500})
    }  
}