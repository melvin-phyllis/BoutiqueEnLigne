import axios from "axios"
import { NextResponse } from "next/server"

export const GET = async () => {
    try {

        const req = await axios.get(`${process.env.DATABASE_URL}/produits.json`)
        const list = req?.data
        if (!list) return NextResponse.json({ mesage: 'BAD', })
        const newList = Object.keys(list).map(key => ({
            id: key, ...list[key]
        }))
        return NextResponse.json({ mesage: 'OK', newList})
    } catch (error: any) {
        console.log(error)
        return NextResponse.json({ mesage: "une erreru c'et produite" })
    }
}
