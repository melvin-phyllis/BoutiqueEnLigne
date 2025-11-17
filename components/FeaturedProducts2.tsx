import { FaRegEye } from "react-icons/fa"
import { FcLike } from "react-icons/fc"
import { IoStarOutline } from "react-icons/io5"

const FeaturedProducts2 = () => {
    return (
        <>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-3">

                <div className="relative overflow-hidden md:col-span-1 lg:col-span-2 h-full rounded-lg">
                    <img
                        src="products-banner-1.jpg.jpeg"
                        alt="Ferrari Promo"
                        className="absolute w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-black/30 flex flex-col text-center justify-center items-center w-full px-4">
                        <span className="text-white text-lg md:text-xl font-bold mb-2">Jusqu'à 30 % de réduction</span>
                        <span className="text-white text-base md:text-lg font-semibold">Voiture de sport Ferrari F12 Berlinetta 2015</span>
                    </div>
                </div>

                <div className="carousel md:col-span-2 lg:col-span-4 carousel-center w-full space-x-4  rounded-box">
                    {[1, 2, 3, 4, 5].map((item, index) => (
                        <div key={index} className="carousel-item">
                            <div className="border card-1 group  hover:shadow-xl transition-all duration-300 bg-white rounded-lg w-64">
                                <div className="relative h-56 overflow-hidden rounded-lg">
                                    <img
                                        src="pilot-automotive-universal-fit-black-with-red-trim.jpg.jpeg"
                                        alt="Produit"
                                        className="absolute w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
                                    />
                                    <div className="absolute top-2 right-0 space-y-3 flex-col flex translate-x-full opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-500 ease-out">
                                        <button className="btn p-3 border rounded-full bg-white shadow-lg hover:scale-110 transition-transform duration-200">
                                            <FcLike />
                                        </button>
                                        <button className="btn p-3 border rounded-full bg-white shadow-lg hover:scale-110 transition-transform duration-200">
                                            <FaRegEye />
                                        </button>
                                    </div>
                                </div>
                                <div className="flex flex-col space-y-2 mt-3">
                                    <span className="text-sm line-clamp-2">Pilot Automotive Universal Fit Noir avec garniture rouge</span>
                                    <div className="flex mt-2 text-xl text-yellow-400">
                                        <IoStarOutline />
                                        <IoStarOutline />
                                        <IoStarOutline />
                                        <IoStarOutline />
                                        <IoStarOutline />
                                    </div>
                                    <span className="font-bold text-lg text-amber-600">72,00 $</span>
                                    <button className="bg-gray-200 group-hover:bg-amber-400 hover:bg-amber-300 mx-auto p-2 px-4 rounded-full btn transition-all duration-300 text-xs font-semibold">
                                        AJOUTER AU PANIER
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

        </>
    )
}

export default FeaturedProducts2
