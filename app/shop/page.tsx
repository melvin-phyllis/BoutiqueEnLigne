import { Filters } from "@/components/Filters"
import Footer from "@/components/Footer"
import ListsCatalogue from "@/components/ListsCatalogue"
import Navbar from "@/components/Navbar"
import Link from "next/link"
import { HiBars2, HiBars3, HiBars4 } from "react-icons/hi2"
import { TbAntennaBars1 } from "react-icons/tb"

const page = () => {
    return (
        <>
            <header className="lg:mx-10  p-4">
                <Navbar />
            </header>
            <main>

                <section className="nav">
                    <div className="w-full flex justify-between bg-gray-300 px-3 lg:px-60">
                        <h1>Boutique</h1>
                        <div className="breadcrumbs text-xl">
                            <ul>
                                <li><Link href={"/"}>Accueil</Link></li>
                                <li><a>Boutique</a></li>

                            </ul>
                        </div>
                    </div>
                </section>
                <section className="filtre&Produits flex mx-3  lg:mx-20 md:flex-row-reverse lg:flex-row">
                    <Filters />
                    <div className="w-full p-5">
                        <div>
                            <span>Le moteur est le cœur de tout véhicule, et ses composants fonctionnent de concert pour générer de la puissance et assurer un fonctionnement optimal. Cette sous-catégorie comprend des pièces essentielles telles que les pistons, les arbres à cames, les vilebrequins, les culasses, les courroies de distribution et les supports moteur.</span>

                            <h2 className="mt-5 text-2xl font-semibold">Sous-catégories</h2>
                            <div>
                                <div className="carousel carousel-end rounded-box gap-5">
                                    {[1, 2, 2, 2].map(item => (
                                        <>
                                            <div className="carousel-item">
                                                <div className="flex flex-col">
                                                    <img src="/calandis-modern-white-ceramic-flower-vase.jpg.jpeg" alt="" className="h-40 border border-amber-200" />
                                                    <div className="text-center">
                                                        <span className="font-semibold">Huile moteur</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </>
                                    ))}

                                </div>
                            </div>
                        </div>

                        <div className="flex  flex-col md:flex-row justify-between md:items-center mt-10">
                            <div className="flex">
                                <button className="btn"> <HiBars4 /></button>
                                <button className="btn"><HiBars3 /></button>
                                <button className="btn"><HiBars2 /></button>
                                <button className="btn"><TbAntennaBars1 /></button>

                            </div>
                            <div className="flex flex-row-reverse md:flex-row  mt-5 gap-4">
                                <button className="bg-amber-300 hover:text-white hover:bg-black flex md:hidden text-xl p-4 rounded-full btn">filtrer</button>
                                <span className="md:flex hidden ">Trier par :</span>
                                <select name="" id="" className="w-full md:w-50 md:text-center">
                                    <option value="">AA</option>
                                </select>
                            </div>
                        </div>
                        <ListsCatalogue />
                    </div>
                </section>


            </main>
            <Footer />
        </>
    )
}

export default page
