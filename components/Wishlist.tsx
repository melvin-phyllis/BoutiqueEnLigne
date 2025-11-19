import { FaRegEye } from "react-icons/fa"

const Wishlist = () => {
    return (
        <>
            <div>
                <div className="flex justify-between  md:flex-row flex-col md:items-center">
                    <h1 className="text-3xl font-bold mb-10">My wishlist</h1>
                    <div className="flex flex-row  gap-2">
                        <span className="md:flex hidden">Trier par :</span>
                        <select name="" id="" className="w-full md:w-50 text-center border">
                            <option value="">AA</option>
                        </select>
                    </div>
                </div>

                <div className=" justify-center mt-10 grid sm:grid-cols-3 lg:grid-cols-5 border-amber-400 carousel-center w-full  rounded-box ">
                    {[1, 2, 3, 4, 5, , 3, 4, 5].map((item, index) => (
                        <div key={index} className="carousel-item">
                            <div className="border card-1 group border-gray-200 p-2 transition-shadow bg-white rounded-lg w-64">
                                <div className="relative h-56 overflow-hidden">
                                    <img
                                        src="pilot-automotive-universal-fit-black-with-red-trim.jpg.jpeg"
                                        alt=""
                                        className="absolute w-full h-full object-contain"
                                    />
                                    <div className="absolute top-2 right-0 space-y-3 flex-col flex   ease-out">

                                        <button className="btn p-3 border rounded-full bg-white  hover:scale-110 transition-transform">
                                            <FaRegEye />
                                        </button>
                                    </div>
                                </div>
                                <div className="flex flex-col space-y-2">
                                    <span className="text-sm">Pilot Automotive Universal Fit Noir avec garniture rouge</span>

                                    <span className="font-bold text-lg text-center">72,00 $</span>
                                    <button className="bg-gray-200  hover:bg-gray-300 mx-auto p-2 rounded-full btn transition-colors text-sm">
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

export default Wishlist
