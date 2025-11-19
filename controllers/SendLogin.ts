import { forminputType } from "@/types"
import axios from "axios"
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime"
import { FormEvent, RefObject } from "react"

const SendLogin = async (e: FormEvent<HTMLFormElement>, forminput: forminputType, route: AppRouterInstance, formRef: RefObject<HTMLFormElement | null>) => {
    try {
        e?.preventDefault()

        const req = await axios.post(`api/connection`, forminput)


        if (req?.data.error) {
            const error = req?.data.error
            formRef?.current?.reset()
            return error == "auth/invalid-credential" ? alert("vos identifiant incorrect") : error == "auth/weak-password" ? alert("mots de passe trop failble") :

                (alert("une erreru c'est produite"), console.log(req?.data?.error))

        }

        if (req?.data.message == "OK") {

            localStorage.setItem("user", JSON.stringify({ ...req?.data?.user }))
            sessionStorage.setItem("loginTime", "online")
            alert("connexion reussi")

            route.push('/account')
        }

    } catch (error: any) {

        console.log(error.message)
    }
}

export default SendLogin
