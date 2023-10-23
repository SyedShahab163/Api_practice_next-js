import { NextResponse } from "next/server";
import {postuser} from "@/lib/Userdata"

 export  const POST =  async (req:Request, res:Response) => {
    
 try {
    const {name , age ,id} = await req.json()
    const Userdata = {
        Name:name,
        age:age,
        id:id,
    }
    console.log("================================")
     postuser(Userdata);
     console.log("================================",Userdata)

    return NextResponse.json({
        message:"ok",
        Userdata,
    },
    {
        status:200
    }
    )
    console.log("[[[[[[[[[[[[[[[[[[")
 } catch (error) {
    return NextResponse.json({
        error:"yaar is ko sahe karro"
    },
    {
        status:500
    })
 }   
}
      
      
      
      
      
      
      
      
      
      
      
      
      
      
   