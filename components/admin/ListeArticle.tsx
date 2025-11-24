import GetAllproductsadmin from "@/controllers/GetAllproductsadmin"
import useStore from "@/store/ProductStore"
import { formarticleType } from "@/types"
import { usePathname } from "next/navigation"
import { useEffect, useState } from "react"
import { IoEyeSharp } from "react-icons/io5"
import { RiDeleteBin5Fill } from "react-icons/ri"
import Showitem from "../Showitem"

export const ListeArticle = () => {
    const [isOpen, setIsOpen] = useState(false);
    const path = usePathname()
    const [item, setitem] = useState<formarticleType | null>(null)
    const { getProducstList, ProducstList } = useStore()

    useEffect(() => { GetAllproductsadmin(getProducstList) }, [])
    return (
        <div>
            <div className=" flex justify-between flex-col md:flex-row gap-5 my-10">
                <h1 className="text-xl font-semibold md:text-start text-center">Liste d'article</h1>
                {/* Bouton d'ouverture */}
                <label htmlFor="top-center-modal" className="btn">
                    Ouvrir le modal
                </label>

                {/* Toggle caché */}
                <input type="checkbox" id="top-center-modal" className="modal-toggle" />

                {/* Modal */}
                <div className="modal">
                    <div className="modal-box drop">
                        <h3 className="font-bold text-lg">Titre du modal</h3>
                        <p className="py-4">Contenu glisse du haut vers le centre.</p>
                        <div className="modal-action">
                            <label htmlFor="top-center-modal" className="btn">
                                Fermer
                            </label>
                        </div>
                    </div>
                </div>


            </div>
            <div className="  border-amber-400 carousel-center w-full grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 space-y-3 gap-5  rounded-box ">
                {ProducstList.map((item, index) => (
                    <div key={index}>
                        <div className="border p-2 card-1 group border-gray-200  transition-shadow rounde bg-white ">
                            <div className="relative h-56 overflow-hidden">
                                <img
                                    src={item?.img || "default-image-icon-vector-missing-picture-page-website-design-mobile-app-no-photo-available-236105299.webp"}
                                    alt=""
                                    className="absolute w-full h-full object-contain"
                                />
                                <div className="absolute top-2 right-0 space-y-3 flex-col flex translate-x-full opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-500 ease-out">
                                    <button className="btn p-3 border rounded-full bg-white  hover:scale-110 transition-transform">
                                        <RiDeleteBin5Fill />
                                    </button>
                                    <button className="btn p-3 border rounded-full bg-white  hover:scale-110 transition-transform"

                                        onClick={() => {
                                            setitem(item)
                                            setIsOpen(true)
                                        }}
                                    >
                                        <IoEyeSharp />
                                    </button>

                                </div>
                            </div>
                            <div className="flex flex-col space-y-2">
                                <span className="text-sm">{item?.title} </span>

                                <span className="font-bold text-lg">{item?.price} $</span>
                                <div className="flex gap-1">
                                    <button className="bg-gray-200  hover:bg-gray-300 mx-auto rounded-full  ">
                                        MODIFIER
                                    </button>
                                    <button className="bg-gray-200  hover:bg-gray-300 mx-auto  rounded-full  ">
                                        PUBLIER
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <Showitem isOpen={isOpen} setIsOpen={setIsOpen} />
        </div>
    )
}

