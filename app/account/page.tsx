"use client"

import Footer from "@/components/Footer"
import Loading from "@/components/Loading"
import Navbar from "@/components/Navbar"
import Wishlist from "@/components/Wishlist"
import Loginmiddleware from "@/controllers/Loginmiddleware"
import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"
import { useEffect, useState } from "react"
import { FaRegCalendarAlt, FaRegHeart } from "react-icons/fa"
import { MdPeopleAlt } from "react-icons/md"


const accountNav = [
    { id: "identite", icon: < MdPeopleAlt size={60} />, text: "Informations" },
    { id: "historique-commandes", icon: < FaRegCalendarAlt size={60} />, text: "Historique et détails de mes commandes" },
    { id: "blockwishlist", icon: < FaRegHeart size={60} />, text: "My wishlists" }
]
const page = () => {

    const [loading, setLoading] = useState(true)

    const route = useRouter()
    const path = usePathname()

    useEffect(() => {
        Loginmiddleware(setLoading, route, path)
    }, [])

    if (loading) {
        return <Loading />
    }

    return (
        <> <header className="lg:mx-10  p-4">
            <Navbar />
        </header>

            <main>
                <section className="nav">
                    <div className="w-full flex  p-3 mt-20 text-xl items-center flex-col md:flex-row justify-between bg-gray-300 px-3 lg:px-30">
                        <h1 className="font-bold text-4xl">Votre compte</h1>
                        <div className="breadcrumbs font-semibold text-xl ">
                            <ul>
                                <li><Link href={"/"}>Accueil</Link></li>
                                <li><a> Votre compte</a></li>
                            </ul>
                        </div>
                    </div>
                </section>

                <section className="mx-3  lg:mx-20 p-4 md:p-10">
                    <div className="grid grid-cols-1 md:grid-cols-2 hidden  lg:grid-cols-3 gap-3 font-serif">
                        {accountNav.map((item, index) => (
                            <button key={index} className="border h-35 btn btn-ghost bg-white border-gray-200 flex justify-center flex-col items-center hover:text-yellow-500">
                                {item?.icon}
                                <span>{item?.text}</span>
                            </button>
                        ))}

                    </div>
                    {/* <HistoriqueCommandes /> */}
                    <Wishlist />
                </section>

            </main>
            <Footer />
        </>
    )
}

export default page
