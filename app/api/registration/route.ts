import { Auth } from "@/firebase/config"
import axios from "axios"
import { createUserWithEmailAndPassword, sendEmailVerification } from "firebase/auth"
import { NextResponse } from "next/server"

export const PUT = async (req: Request) => {
    try {
        const forminput = await req.json()

        const data = await createUserWithEmailAndPassword(Auth, forminput?.email, forminput?.password)

        const user = data?.user

        await sendEmailVerification(user)

        await axios.put(`${process.env.DATABASE_URL}/users-list/${user?.uid}.json`, {
            id: user?.uid,
            email: user?.email,
            username: forminput?.username
        })

        return NextResponse.json({
            message: "inscription reussi"
        })

    } catch (error: any) {

        console.log(error.code)
        return NextResponse.json({ message: "une erreur c'est produite", error: `${error.code}` })
    }
}
