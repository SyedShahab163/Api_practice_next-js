import { NextResponse } from "next/server";
import {getalluser } from "@/lib/Userdata";
export const GET = async (req:Request, res:Response)=>{
    try {
         const userData =  getalluser();
        
        return NextResponse.json({
            message:"Ok",
            userDetails : userData
             
        }, 
        {
            status:200
        }) 

    } catch (error) {
        return NextResponse.json({
            Error
        },{
            status:500
        })
    }
}