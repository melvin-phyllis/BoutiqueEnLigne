
"use client"
import Link from "next/link"
import { useEffect, useState } from "react"

const LoginForm = () => {

    const [showPass, setShowPass] = useState(true)



    return (
        <>
            <fieldset className="fieldset font-serif space-y-5  rounded-box w-full md:w-120 border p-4">
                <h1 className="text-center text-2xl font-bold ">Connexion</h1>

                <div className="flex md:flex-row gap-6 w-full flex-col">
                    <label className="label w-20">Email</label>
                    <div className="w-full text-end">
                        <input type="email" className="input w-full rounded-full" placeholder="Email" />
                    </div>
                </div>

                <div className="flex md:flex-row gap-6 w-full flex-col">
                    <label className="label w-20">Mot de passe</label>
                    <div className="w-full text-end flex input px-0 pl-3 justify-between rounded-full">
                        <input type={showPass ? "password" : "text"} className=" w-full " placeholder="Email" />
                        <button className={`${showPass ? "bg-amber-300" : "bg-black text-white"} btn rounded-r-full  h-full`} onClick={() => setShowPass(!showPass)}>{showPass ? "Afficher": "Masquer"} </button>
                    </div>

                </div>

                <button className="btn bg-amber-300 rounded mt-4 mx-auto">Connexion</button>

                <Link href={"/signup"} className="text-center hover:text-yellow-300 text-sm">Pas de compte ? Créez-en un</Link>
            </fieldset>

        </>
    )
}

export default LoginForm
