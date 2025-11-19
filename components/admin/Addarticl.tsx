import { FcLike } from "react-icons/fc"
import { IoMdAdd } from "react-icons/io"

const Addarticl = () => {
    return (
        <>
            <div className=" flex justify-between flex-col md:flex-row gap-5 my-10">
                <h1 className="text-xl font-semibold md:text-start text-center">Ajouter des articles pour votres site</h1>
                <div className=" w-full md:w-50">
                    <label htmlFor="my_modal_6" className="btn btn-neutral w-full"><IoMdAdd />ajouter du nouveau</label>

                </div>

                {/* The button to open modal */}


                {/* Put this part before </body> tag */}
                <input type="checkbox" id="my_modal_6" className="modal-toggle" />
                <div className="modal" role="dialog">
                    <div className="modal-box">
                        <h3 className="text-lg font-bold">ajouter vos article</h3>

                        <div className="modal-action flex-col w-full gap-4">
                            <form className="w-full space-y-4">
                                <div className="grid gap-4 md:grid-cols-2">
                                    <label className="form-control">
                                        <span className="label-text mb-1">Nom du produit</span>
                                        <input type="text" className="input input-bordered" placeholder="Volant sport" required />
                                    </label>
                                    <label className="form-control">
                                        <span className="label-text mb-1">Catégorie</span>
                                        <select className="select select-bordered" required>
                                            <option value="">Choisir une catégorie</option>
                                            <option value="accessoires">Accessoires</option>
                                            <option value="performance">Performance</option>
                                            <option value="interieur">Intérieur</option>
                                            <option value="exterieur">Extérieur</option>
                                        </select>
                                    </label>
                                    <label className="form-control">
                                        <span className="label-text mb-1">Prix (€)</span>
                                        <input type="number" min="0" step="0.01" className="input input-bordered" placeholder="99.99" required />
                                    </label>
                                    <label className="form-control">
                                        <span className="label-text mb-1">Stock</span>
                                        <input type="number" min="0" className="input input-bordered" placeholder="25" />
                                    </label>
                                    <label className="form-control">
                                        <span className="label-text mb-1">SKU</span>
                                        <input type="text" className="input input-bordered" placeholder="SKU-001" />
                                    </label>
                                    <label className="form-control">
                                        <span className="label-text mb-1">Image (URL)</span>
                                        <input type="url" className="input input-bordered" placeholder="https://..." />
                                    </label>
                                </div>
                                <label className="form-control">
                                    <span className="label-text mb-1">Description</span>
                                    <textarea className="textarea textarea-bordered" rows={3} placeholder="Ajoutez quelques détails techniques" />
                                </label>
                                <button type="submit" className="btn btn-neutral w-full">Ajouter le produit</button>
                            </form>
                            <label htmlFor="my_modal_6" className="btn w-full">Close!</label>
                        </div>
                    </div>
                </div>
            </div>

            <div>
                <div className="  border-amber-400 carousel-center w-full grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 space-y-3 gap-5  rounded-box ">
                    {[1, 2, 3, 4, 5, , 3, 4, 5].map((item, index) => (
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

export default Addarticl
