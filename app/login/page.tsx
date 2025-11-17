

import Footer from "@/components/Footer"
import LoginForm from "@/components/LoginForm"
import Navbar from "@/components/Navbar"
import Link from "next/link"

export const page = () => {
    return (
        <>
            <main>
                <section className="nav">
                    <div className="w-full flex  mt-20 text-xl items-center flex-col md:flex-row justify-around bg-gray-300 px-3 lg:px-60">
                        <h1>Connectez-vous à votre compte</h1>
                        <div className="breadcrumbs ">
                            <ul>
                                <li><Link href={"/"}>Accueil</Link></li>
                                <li><a>Connectez-vous à votre compte</a></li>

                            </ul>
                        </div>
                    </div>
                </section>
                <section className="flex justify-center w-full items-center p-10">
                    <LoginForm />
                </section>
            </main>
            
        </>
    )
}

export default page
