import { Auth } from "@/firebase/config"
import axios from "axios"
import { sendEmailVerification, signInWithEmailAndPassword } from "firebase/auth"
import { NextResponse } from "next/server"

export const POST = async (req: Request) => {

    try {
        const forminput = await req.json()
        console.log(forminput, "route")
        if (forminput.username) {
            console.log(forminput.id)
            const data = await axios.put(`${process.env.DATABASE_URL}/users-list/${forminput?.id}.json`, {
                id: forminput?.id,
                email: forminput?.email,
                username: forminput?.username
            })



            return NextResponse.json({
                message: "OK"
            })
        }
        const data = await signInWithEmailAndPassword(Auth, forminput?.email, forminput?.password)

        const user = data?.user

        if (!user.emailVerified) {

            sendEmailVerification(user)
            return NextResponse.json({ message: "valider votre compte avant  de vous connecter" })
        }

        const USER = await axios.get(`${process?.env.DATABASE_URL}/users-list/${user?.uid}.json`)

        console.log(USER?.data)

        return NextResponse.json({ message: "OK", user: { id: USER?.data?.id, username: USER?.data?.username } })

    } catch (error: any) {
        console.log(error)

        return NextResponse.json({ message: "une erreur cest produite", error: error.code })
    }

}
