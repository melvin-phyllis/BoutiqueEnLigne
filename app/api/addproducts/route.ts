import axios from "axios"
import { NextResponse } from "next/server"

export const POST = async (req: Request) => {
    try {
        const formarticle = await req.json()

        console.log(formarticle)

        const data = await axios.post(`${process.env.DATABASE_URL}/produits.json`, formarticle)

        const item = data?.data?.name
        
        return NextResponse.json({ message: "OK" ,id:item})
    } catch (error: any) {
        console.log(error.message)

        return NextResponse.json({ message: "une erreru c'est produite" })
    }
}
