
"use client"

import Link from "next/link"
import { useState } from "react"
import { FaRegHeart } from "react-icons/fa"
import { GiHamburgerMenu } from "react-icons/gi"
import { IoSearchOutline } from "react-icons/io5"
import { MdPeopleAlt } from "react-icons/md"
import { SlEarphonesAlt } from "react-icons/sl"
import BtnNavbar from "./BtnNavbar"
import { FiShoppingBag } from "react-icons/fi"

const Navbar = () => {
    const [input, setInput] = useState(false)
    return (
        <>
            <nav className="flex justify-between lg:justify-around items-center ">
                <div className="flex items-center justify-center sm:flex-row flex-col">

                    <BtnNavbar />
                    <img src="logo-1754382729.svg" alt="logo" className="w-30 lg:w-50" />
                </div>
                <div className={`fixed inset-0 bg-black opacity-30 z-40 ${!input && "hidden"}`} onClick={() => setInput(false)} />
                <div className="relative  hidden lg:flex rounded-t-xl z-50 bg-white p-2">

                    <div className="flex items-center border w-full h-full justify-center rounded-2xl bg-gray-100">
                        <select name="" id="" className="py-2 px-3 font-bold text-gray-600 outline-none">
                            <option value="">Toutes les Categories</option>
                            <option value="test">test</option>
                        </select>
                        <input
                            type="search"
                            placeholder="recherche votre produit..."
                            onFocus={() => setInput(true)}
                            className="w-full placeholder-gray-300 placeholder:font-semibold outline-none"
                        />
                        <button className="bg-amber-400 p-2 rounded-full">
                            <IoSearchOutline size={25} />
                        </button>
                    </div>

                    {input && (<>

                        <div className="absolute top-full left-0 right-0  bg-white text-black  rounded-b-lg  z-50 p-4">
                            <span>Aucun produit trouvé</span>
                        </div>
                    </>)}
                </div>
                <div className="hidden 2xl:flex  items-center gap-4 ">

                    <SlEarphonesAlt size={30} />
                    <div className="flex flex-col text-center">
                        <span>Appelez Maintenant</span>
                        <span>9876-543-210</span>
                    </div>

                </div>
                <div className="flex gap-2">
                    <IoSearchOutline size={30} className="lg:hidden flex" />
                    <Link href={"/login"}><MdPeopleAlt className="text-3xl hover:text-yellow-400" /></Link>
                    <Link href={""}>  <FaRegHeart className="text-3xl hidden lg:flex hover:text-yellow-400" /></Link>
                    <Link href={""}>  <FiShoppingBag className="text-3xl hover:text-yellow-400" /></Link>



                </div>
            </nav>
            <div className=" my-5 uppercase hidden lg:flex font-semibold">

                <ul className="flex  justify-around items-center w-full text-sm from-accent-content ">
                    <li className="cursor-pointer">
                        <div className="dropdown  dropdown-center">
                            <div tabIndex={0} role="button" className=" uppercase flex items-center justify-center gap-2"><GiHamburgerMenu size={22} /> Acheter par catégories</div>
                            <ul tabIndex={-1} className="dropdown-content menu  rounded-box z-1 w-52 p-2 shadow-sm">
                                <li><a>Item 1</a></li>
                                <li><a>Item 2</a></li>
                            </ul>
                        </div>
                    </li>
                    <li className="cursor-pointer">Acheter par catégories</li>
                    <li className="cursor-pointer">Accueil</li>
                    <li className="cursor-pointer">Boutique</li>
                    <li className="cursor-pointer">Categoris</li>
                    <li className="cursor-pointer">Produits</li>
                    <li className="cursor-pointer">Meilleur Offres</li>

                </ul>
            </div>
        </>
    )
}

export default Navbar
