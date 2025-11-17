

import Footer from "@/components/Footer"
import Navbar from "@/components/Navbar"
import { SignupForm } from "@/components/SignupForm"
import Link from "next/link"

export const page = () => {
    return (
        <>
            <header className="lg:mx-10  p-4">
                <Navbar />
            </header>
            <main>
                <section className="nav">
                    <div className="w-full flex  p-3 mt-2 text-xl items-center flex-col md:flex-row justify-between bg-gray-300 px-3 lg:px-30">
                        <h1 className="font-bold text-4xl">Créez votre compte</h1>
                        <div className="breadcrumbs font-semibold text-xl ">
                            <ul>
                                <li><Link href={"/"}>Accueil</Link></li>
                                <li><a>Créez votre compte</a></li>

                            </ul>
                        </div>
                    </div>
                </section>
                <section className="flex justify-center w-full items-center p-10">
                    <SignupForm />
                </section>
            </main>
            <Footer />
        </>
    )
}

export default page
