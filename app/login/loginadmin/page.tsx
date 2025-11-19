
"use client"

import Loading from "@/components/Loading"
import GetinfoUser from "@/controllers/GetinfoUser"
import loginAdmin from "@/controllers/loginAdmin"
import { Auth } from "@/firebase/config"
import { forminputType } from "@/types"
import { onAuthStateChanged } from "firebase/auth"
import { usePathname, useRouter } from "next/navigation"
import { ChangeEvent, useEffect, useState } from "react"
const page = () => {
    const [showpass, setShowpass] = useState(false)

    const [load, setLoad] = useState(false)
    const path = usePathname()
    const [loading, setLoading] = useState(true)
    const route = useRouter()
    const [forminput, setForminput] = useState<forminputType>({
        email: "",
        password: "",
    })

    const HandleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target
        setForminput(prev => ({
            ...prev, [name]: value
        }))

    }

    useEffect(() => {
        if (typeof window !== "undefined") {
            const user = GetinfoUser("useradmin")

            if (!user) {
                console.log(path, 'user')

                if (path == "/login/loginadmin") {
                    setLoading(false)
                }

                route.push("/login/loginadmin")
            }

            const unsucrible = onAuthStateChanged(Auth, (currentuser) => {
                if (!currentuser) {
                    if (path == "/login/loginadmin") {
                        setLoading(false)
                    }

                }

                if (path == "/login/loginadmin" && user?.role == "admin") {

                    route.push("/backoffice")
                }

            })
            return () => unsucrible()
        }

    }, [])

    if (loading) {
        return <Loading />
    }
    return (
        <>

            <div className="flex min-h-screen flex-col justify-center px-6 py-12 lg:px-8 loginadmin">
                <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                    <h2 className="mt-10 text-center text-2xl/9 font-bold tracking-tight text-white">Connectez vous au panel</h2>
                </div>

                <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm relative bg-linear-to-r from-[rgba(171,176,135,0.77)] to-[rgba(163,174,101,0.42)] p-6 rounded-xl">


                    <form action="#" method="POST" className="space-y-6 " onSubmit={(e) => loginAdmin(e, forminput, setLoad, route)}>
                        <div>
                            <label htmlFor="email" className="block text-xl text-gray-100 font-bold">
                                Email
                            </label>
                            <div className="mt-2">
                                <input
                                    id="email"
                                    name="email"
                                    type="email"
                                    onChange={(e) => HandleChange(e)}
                                    required
                                    autoComplete="email"
                                    className="block input w-full border-2  rounded-md bg-white/5 px-3 py-1.5 text-base  outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 sm:text-sm/6"
                                />
                            </div>
                        </div>

                        <div>
                            <div className="flex items-center justify-between">
                                <label htmlFor="password" className="block text-xl text-gray-100 font-bold">
                                    Mots de passe
                                </label>

                            </div>
                            <div className="mt-2 flex border-2  justify-end input p-0 w-full rounded-md bg-white/5   text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2  sm:text-sm/6">
                                <input
                                    id="password"
                                    name="password"
                                    type={showpass ? "text" : "password"}
                                    required
                                    onChange={(e) => HandleChange(e)}
                                    autoComplete="current-password"
                                    className="w-full p-3"
                                />
                                <button type="button" className={`${showpass ? "bg-black text-white" : "bg-amber-300 text-black"} h-full w-1/3 font-semibold m-auto rounded btn `} onClick={() => setShowpass(!showpass)}>{showpass ? "Masquer" : "Afficher"} </button>
                            </div>
                        </div>

                        <div>

                            <button
                                type="submit"
                                disabled={load}
                                className={`flex w-full btn justify-center rounded-md  px-3 py-1.5 text-sm/6 font-semibold ${load ? " border border-black text-gray-50 " : "bg-yellow-500 text-white btn"}  focus-visible:outline-2 focus-visible:outline-offset-2`}
                            >
                                {load ? (<>Chargement <span className="loading loading-dots loading-lg"></span></>) : (<> Connexion</>)}
                            </button>
                        </div>
                    </form>

                </div>
            </div>
        </>
    )
}


export default page
