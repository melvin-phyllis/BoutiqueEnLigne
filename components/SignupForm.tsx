"use client"

import Link from "next/link"

export const SignupForm = () => {
    
    return (
        <>
            <form >

                <fieldset className="fieldset  space-y-5 font-serif rounded-box w-full lg:w-150 border p-4">
                    <h1 className="text-center text-2xl font-bold ">Inscription</h1>

                    <div className="flex  gap-6 w-full flex-col">
                        <label className="label w-20 text-xl ">Email</label>
                        <div className="w-full text-end">
                            <input
                                name={"email"}
                                type="email" className="input w-full rounded-full" placeholder="Email" />
                        </div>
                    </div>

                    <div className="flex  gap-6 w-full flex-col">
                        <label className="label w-20 text-xl ">Mot de passe</label>
                        <div className="w-full text-end flex input px-0 pl-3 justify-between rounded-full">
                            <input
                                name={"password"}
                                type="password" className=" w-full " placeholder="mot de passe" />

                        </div>

                    </div>

                    <div className="flex  gap-6 w-full flex-col">
                        <label className="label w-20 text-xl ">Comfirmer le Mot de passe</label>
                        <div className="w-full text-end flex input px-0 pl-3 justify-between rounded-full">
                            <input
                                name={"confirmpassword"}
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

