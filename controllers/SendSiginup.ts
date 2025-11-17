import { forminputType } from "@/types"
import axios from "axios"
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime"
import { FormEvent, RefObject } from "react"

const SendSiginup = async (e: FormEvent<HTMLFormElement>, forminput: forminputType, route: AppRouterInstance, formRef: RefObject<HTMLFormElement | null>) => {

    try {
        e?.preventDefault()

        const req = await axios.put("/api/registration", forminput )

        if (req?.data.error) {
            const error = req?.data.error
            formRef?.current?.reset()
            return error == "auth/email-already-in-use" ? alert("email deja utiliser") : error == "auth/weak-password" ? alert("mots de passe trop failble") :
                (alert("une erreru c'est produite"), console.log(req?.data?.error))

        }

        if (req?.data.message == "inscription reussi") {
            alert(req?.data?.message);
            route.push("/login")
        }
        formRef?.current?.reset()

    } catch (error) {
        console.log(error)
    }
}

export default SendSiginup
