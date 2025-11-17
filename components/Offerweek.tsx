import { FaRegEye } from "react-icons/fa"
import { FcLike } from "react-icons/fc"
import { IoStarOutline } from "react-icons/io5"

const Offerweek = () => {
    return (
        <>

            <h2 className=" text-2xl text-center font-semibold">Offre de la semaine</h2>
            <div className="carousel border-amber-400 carousel-center w-full   bg-base-200 rounded-box mt-10">
                {[1, 2, 3, 4, 5].map((item, index) => (
                    <div key={index} className="carousel-item">
                        <div className="border card-1 group border-gray-200 p-2 transition-shadow bg-white rounded-lg w-64">
                            <div className="relative h-56 overflow-hidden">
                                <img
                                    src="pilot-automotive-universal-fit-black-with-red-trim.jpg.jpeg"
                                    alt=""
                                    className="absolute w-full h-full object-contain"
                                />
                                <div className="absolute top-2 right-0 space-y-3 flex-col flex translate-x-full opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-500 ease-out">
                                    <button className="btn p-3 border rounded-full bg-white  hover:scale-110 transition-transform">
                                        <FcLike />
                                    </button>
                                    <button className="btn p-3 border rounded-full bg-white  hover:scale-110 transition-transform">
                                        <FaRegEye />
                                    </button>
                                </div>
                            </div>
                            <div className="flex flex-col space-y-2">
                                <span className="text-sm">Pilot Automotive Universal Fit Noir avec garniture rouge</span>
                                <div className="flex mt-2 text-xl text-yellow-400">
                                    <IoStarOutline />
                                    <IoStarOutline />
                                    <IoStarOutline />
                                    <IoStarOutline />
                                    <IoStarOutline />
                                </div>
                                <span className="font-bold text-lg">72,00 $</span>
                                <button className="bg-gray-200 group-hover:bg-amber-300 hover:bg-gray-300 mx-auto p-2 rounded-full btn transition-colors text-sm">
                                    AJOUTER AU PANIER
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

        </>
    )
}

export default Offerweek
