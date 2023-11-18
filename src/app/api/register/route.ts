import { User } from "@/app/models/User";
import mongoose from "mongoose";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req : NextRequest) {
    mongoose.connect(process.env.MONGODB_URI as string);
    const body = await req.json();
    const createdUser = await User.create(body);
    return NextResponse.json(createdUser);
}