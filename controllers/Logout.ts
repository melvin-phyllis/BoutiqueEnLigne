import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime"

const Logout = (route: AppRouterInstance) => {
    if (typeof window !== "undefined") {
        localStorage.removeItem("user")
        sessionStorage.removeItem("loginTime")
        
        route.push('/')
    }
}

export default Logout
