import { forminputType } from "@/types"

const GetinfoUser = (local:string) => {
    if (typeof window !== 'undefined') {
        const user = localStorage.getItem(local)

        const UserLocal= user ? JSON.parse(user) : null

        return UserLocal
    }
}

export default GetinfoUser
