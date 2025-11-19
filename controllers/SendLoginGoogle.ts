import { Auth } from "@/firebase/config"
import axios from "axios"
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth"
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime"

const SendLoginGoogle = async (route: AppRouterInstance) => {
    try {

        const provider = new GoogleAuthProvider()

        const data = await signInWithPopup(Auth, provider)
        const user = data?.user

        const forminput = {
            id: user?.uid,
            email: user?.email,
            username: user?.email
        }

        const req = await axios.post(`/api/connection`, forminput)

        if (req?.data.message == "OK") {
            console.log(req?.data.message)
            localStorage.setItem("user", JSON.stringify(forminput))
            alert("connexion reussi")
            route.push('/account')

        }

    } catch (error) {

        console.log(error)

    }
}

export default SendLoginGoogle
