import { Auth } from "@/firebase/config"
import { onAuthStateChanged } from "firebase/auth"
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime"
import { Dispatch, SetStateAction } from "react"

const Loginmiddleware = (setLoading: Dispatch<SetStateAction<boolean>>, route: AppRouterInstance, path: string) => {

    if (typeof window !== "undefined") {
        const userLocal = localStorage.getItem('user')
        const user = userLocal ? JSON.parse(userLocal) : null

        if (!user) {
            if (path == "/login") {
                setLoading(false)
            }
            return route.push('/login')
        }
        const unsubcribe = onAuthStateChanged(Auth, (currentuser) => {
            if (!currentuser) {
                if (path == "/login") {
                    setLoading(false)
                }
                return route.push('/login')
            }
            
            if (path == "/login") {
                return route.push('/')
            }
            setLoading(false)
        })
        return () => unsubcribe()
    }
}

export default Loginmiddleware
