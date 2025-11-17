"use client"


import SendSiginup from "@/controllers/SendSiginup"
import { forminputType } from "@/types"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { ChangeEvent, useRef, useState } from "react"

export const SignupForm = () => {
    const route = useRouter()
    const formRef = useRef<HTMLFormElement>(null);
    const [forminput, setForminput] = useState<forminputType>({
        email: "",
        username: "",
        password: "",
        confirmpassword: ""
    })

    const HandlChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target
        setForminput(prev => ({
            ...prev, [name]: value
        }))


    }

    return (
        <>
            <form ref={formRef} onSubmit={(e) => SendSiginup(e, forminput, route, formRef)} className="w-full md:w-150 mx-auto flex justify-center">
                <fieldset className="fieldset  space-y-5 font-serif rounded-box w-full   border p-4">
                    <h1 className="text-center text-2xl font-bold ">Inscription</h1>

                    <div className="flex  gap-6 w-full flex-col">
                        <label className="label w-20 text-xl ">Nom d'utilisateur</label>
                        <div className="w-full text-end">
                            <input
                                name={"username"}
                                onChange={(e) => HandlChange(e)}
                                type="text" className="input w-full rounded-full" placeholder="nom d'utilisateur" />
                        </div>
                    </div>

                    <div className="flex  gap-6 w-full flex-col">
                        <label className="label w-20 text-xl ">Email</label>
                        <div className="w-full text-end">
                            <input
                                name={"email"}
                                onChange={(e) => HandlChange(e)}
                                type="email" className="input w-full rounded-full" placeholder="Email" />
                        </div>
                    </div>

                    <div className="flex  gap-6 w-full flex-col">
                        <label className="label w-20 text-xl ">Mot de passe</label>
                        <div className="w-full text-end flex input px-0 pl-3 justify-between rounded-full">
                            <input
                                name={"password"}
                                onChange={(e) => HandlChange(e)}
                                type="password" className=" w-full " placeholder="mot de passe" />

                        </div>

                    </div>

                    <div className="flex  gap-6 w-full flex-col">
                        <label className="label w-20 text-xl ">Comfirmer le Mot de passe</label>
                        <div className="w-full text-end flex input px-0 pl-3 justify-between rounded-full">
                            <input
                                name={"confirmpassword"}
                                onChange={(e) => HandlChange(e)}
                                type="password" className=" w-full " placeholder="comfirmer le Mot de passe" />

                        </div>

                    </div>

                    <button className="btn bg-amber-300 rounded mt-4 mx-auto">Inscription</button>

                    <Link href={"/login"} className="text-center hover:text-yellow-500 font-bold">Déjà un compte ? Connectez-vous</Link>
                </fieldset>
            </form>
        </>
    )
}

