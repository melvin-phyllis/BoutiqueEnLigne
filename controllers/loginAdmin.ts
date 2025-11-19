import { forminputType } from "@/types"
import axios from "axios"
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime"
import { Dispatch, FormEvent, SetStateAction } from "react"

const loginAdmin = async (e: FormEvent<HTMLFormElement>, forminput: forminputType, setLoad: Dispatch<SetStateAction<boolean>>, route: AppRouterInstance) => {
    try {

        setLoad(true)
        e?.preventDefault()


        const data = await axios.post('/api/connection', forminput )
        console.log(data.data.message)

        if (data?.data.message == "OK") {
            const req = await axios.post(`/api/registration/admin`, { forminput })


            if (req?.data?.message == "OK") {

                localStorage.setItem("useradmin", JSON.stringify(req?.data?.user))
                sessionStorage.setItem("loginTime", "online")
                route.push("/backoffice")
                return alert(`Bienvenue ${req?.data?.user?.username}`)
            }
            if (req?.data?.message == "BAD") {
                return alert(`Email ou Mdp incorrect`)
            }
        }

        if (data?.data?.message == "BAD") {
            return alert(`Email ou Mdp incorrect`)
        }

    } catch (error) {

        console.log(error)
    } finally {
        setLoad(false)
    }
}

export default loginAdmin
