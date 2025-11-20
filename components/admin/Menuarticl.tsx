import useStore from "@/store/ProductStore"
import { useEffect } from "react"
import { FcLike } from "react-icons/fc"
import { IoMdAdd } from "react-icons/io"
import { Addarticle } from "./Addarticle"
import GetAllproductsadmin from "@/controllers/GetAllproductsadmin"

const Menuarticl = () => {
    const { getProducstList, ProducstList } = useStore()

    useEffect(() => { GetAllproductsadmin(getProducstList) }, [])
    return (
        <>
            <div className=" flex justify-between flex-col md:flex-row gap-5 my-10">
                <h1 className="text-xl font-semibold md:text-start text-center">Ajouter des articles pour votres site</h1>
                <div className=" w-full md:w-50">
                    <label htmlFor="my_modal_6" className="btn btn-neutral w-full"><IoMdAdd />ajouter du nouveau</label>

                </div>

                <input type="checkbox" id="my_modal_6" className="modal-toggle" />
                <div className="modal" role="dialog">
                    <div className="modal-box">
                        <h3 className="text-lg font-bold">ajouter vos article</h3>

                        <div className="modal-action flex-col w-full gap-4">
                            <Addarticle />
                            <label htmlFor="my_modal_6" className="btn w-full">Close!</label>
                        </div>
                    </div>
                </div>
            </div>

            <div>
                <div className="  border-amber-400 carousel-center w-full grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 space-y-3 gap-5  rounded-box ">
                    {ProducstList.map((item, index) => (
                        <div key={index} className="bg-white">
                            <div className="border card-1 group border-gray-200 p-2 transition-shadow rounde ">
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

                                    </div>
                                </div>
                                <div className="flex flex-col space-y-2">
                                    <span className="text-sm">Pilot Automotive Universal Fit Noir avec garniture rouge</span>

                                    <span className="font-bold text-lg">72,00 $</span>
                                    <button className="bg-gray-200 group-hover:bg-amber-300 hover:bg-gray-300 mx-auto p-2 rounded-full btn transition-colors text-sm">
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

export default Menuarticl
