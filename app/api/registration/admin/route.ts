import axios from "axios"
import { NextResponse } from "next/server"

export const POST = async (req: Request) => {
    try {

        const { forminput } = await req.json()



        const data = await axios.get(`${process.env.DATABASE_URL}/users-list/admin.json`)

        if (!data.data) return

        const array = Object.keys(data?.data).map(key => ({
            id: key, ...data?.data[key]
        }))


        const search = array?.find(item => item.email == forminput.email && item.password == forminput.password)

        if (search !== undefined && search !== null) {

            const { email, password, ...user } = search;

            console.log(user)
            return NextResponse.json({ message: "OK", user })
        }

        return NextResponse.json({ message: "BAD" })

    } catch (error) {

        console.log(error)

        return NextResponse.json({ message: "une erreur c'est produite" })
    }
}
