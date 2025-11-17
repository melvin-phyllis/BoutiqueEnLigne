
"use client"

import SendLogin from "@/controllers/SendLogin"
import { forminputType } from "@/types"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { ChangeEvent, useRef, useState } from "react"
import { BtnGoogle } from "./BtnGoogle"

const LoginForm = () => {

    const [showPass, setShowPass] = useState(true)


    const route = useRouter()
    const formRef = useRef<HTMLFormElement>(null);
    const [forminput, setForminput] = useState<forminputType>({
        email: "",
        password: ""
    })

    const HandlChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target
        setForminput(prev => ({
            ...prev, [name]: value
        }))
    }
    return (
        <>
            <form ref={formRef} onSubmit={(e) => SendLogin(e, forminput, route, formRef)} className="w-full md:w-150 mx-auto flex justify-center">

                <fieldset className="fieldset  space-y-5 font-serif rounded-box w-full   border p-4">
                    <h1 className="text-center text-2xl font-bold ">Connexion</h1>

                    <div className="flex md:flex-row gap-6 w-full flex-col">
                        <label className="label w-20">Email</label>
                        <div className="w-full text-end">
                            <input type="email"
                                name="email"
                                onChange={(e) => HandlChange(e)}
                                className="input w-full rounded-full" placeholder="Email" />
                        </div>
                    </div>

                    <div className="flex md:flex-row gap-6 w-full flex-col">
                        <label className="label w-20">Mot de passe</label>
                        <div className="w-full text-end flex input px-0 pl-3 justify-between rounded-full">
                            <input
                                name="password"
                                onChange={(e) => HandlChange(e)}
                                type={showPass ? "password" : "text"} className=" w-full " placeholder="Email" />
                            <button type="button" className={`${showPass ? "bg-amber-300" : "bg-black text-white"} btn rounded-r-full  h-full`} onClick={() => setShowPass(!showPass)}>{showPass ? "Afficher" : "Masquer"} </button>
                        </div>

                    </div>

                    <button type="submit" className="btn bg-amber-300 rounded mt-4 mx-auto">Connexion</button>
                    <BtnGoogle route ={route} />
                    <Link href={"/signup"} className="text-center hover:text-yellow-300 text-sm">Pas de compte ? Créez-en un</Link>
                </fieldset>
            </form>

        </>
    )
}

export default LoginForm
