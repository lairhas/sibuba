import connectDB from "@/database/mongo";
import { Message } from "@/database/models";
import { NextResponse, NextRequest } from "next/server";
import mongoose from "mongoose";

export async function POST(request: NextRequest) {
    const { fullname, email, message } = await request.json();

    try {
        await connectDB();
        await Message.create({ fullname, email, message });

        return NextResponse.json({
            msg: ["Message sent successfully"],
            success: true,
          });
    } catch (error) {
        if (error instanceof mongoose.Error.ValidationError) {
            let errorList = [];
            for (let e in error.errors) {
                errorList.push(error.errors[e].message);
            }

            let errorMsg;
            if (errorList.length > 1) {
                // If there is more than one error message, join with ', ' and add ' and' before the last one
                errorMsg = errorList.slice(0, -1).join(', ') + ', and ' + errorList.slice(-1);
            } else {
                errorMsg = errorList.join(', ');
            }

            //console.log(errorMsg);
            return NextResponse.json({ msg: errorMsg, success: false, });
        } else {
            return NextResponse.json({ msg: "Unable to send message.", success: false, });
        }
    }
}
