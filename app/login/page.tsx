


"use client"
import Footer from "@/components/Footer"
import Loading from "@/components/Loading"
import LoginForm from "@/components/LoginForm"
import Navbar from "@/components/Navbar"
import Loginmiddleware from "@/controllers/Loginmiddleware"
import { Auth } from "@/firebase/config"
import { onAuthStateChanged } from "firebase/auth"
import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"
import { useEffect, useState } from "react"

export const page = () => {

    const [loading, setLoading] = useState(true)

    const route = useRouter()
    const path = usePathname()

    useEffect(() => {
       Loginmiddleware(setLoading,route,path)
    }, [])

    if (loading) {
        return <Loading />
    }
    return (
        <>
            <header className="lg:mx-10  p-4">
                <Navbar />
            </header>
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
            <Footer />

        </>
    )
}

export default page
