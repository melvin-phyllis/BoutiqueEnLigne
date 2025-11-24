import Additem from "@/controllers/Additem"
import useStore from "@/store/ProductStore"
import {  formarticleType } from "@/types"
import { ChangeEvent, useState } from "react"


export const Addarticle = () => {

    const { setProducstList, getProducstList, ProducstList } = useStore()

    const [formarticle, setFormarcticle] = useState<formarticleType>({
        title: "",
        Categorie: "",
        description: "",
        price: "",
        stock: 0,
        img: "",
        status: "private"
    })

    const Handlechange = (e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLSelectElement> | ChangeEvent<HTMLTextAreaElement>) => {

        const { name, value } = e.target
        setFormarcticle(prev => ({
            ...prev, [name]: value
        }))
        console.log(formarticle)
    }



    const [file, setFile] = useState<File | null>(null)
    const [previmg, setPrevimg] = useState<string | null>("")

    const HandleChangefile = (e: ChangeEvent<HTMLInputElement>) => {
        const fileimg = e?.target?.files![0]

        if (fileimg) {
            setFile(fileimg)
            const url = URL.createObjectURL(fileimg)
            setPrevimg(url)
        }
    }

    return (
        <>

            <form className="w-full space-y-4" onSubmit={(e) => Additem(e, formarticle, setProducstList, file)}>
                <div className="grid gap-4 md:grid-cols-2">
                    <label className="form-control">
                        <span className="label-text mb-1">Nom du produit</span>
                        <input type="text" className="input input-bordered" placeholder="Volant sport"
                            onChange={(e) => Handlechange(e)}
                            name="title"
                            required />
                    </label>

                    <label className="form-control">
                        <span className="label-text mb-1">Catégorie</span>
                        <select className="select select-bordered" onChange={(e) => Handlechange(e)} name="Categorie" required>
                            <option value="">Choisir une catégorie</option>
                            <option value="accessoires">Accessoires</option>
                            <option value="performance">Performance</option>
                            <option value="interieur">Intérieur</option>
                            <option value="exterieur">Extérieur</option>
                        </select>
                    </label>

                    <label className="form-control">
                        <span className="label-text mb-1">Description</span>
                        <textarea className="textarea textarea-bordered" rows={3} placeholder="Ajoutez quelques détails techniques" onChange={(e) => Handlechange(e)} name="description" />
                    </label>
                    <label className="form-control">
                        <span className="label-text mb-1">Prix (€)</span>
                        <input type="number" min="0" step="0.01" className="input input-bordered" placeholder="99.99" required onChange={(e) => Handlechange(e)} name="price" />
                    </label>
                    <label className="form-control">
                        <span className="label-text mb-1">Stock</span>
                        <input type="number" min="0" className="input input-bordered" placeholder="25" onChange={(e) => Handlechange(e)} name="stock" />
                    </label>
                </div>

                <label className="flex flex-col items-center">
                    <span className="mb-1">Image</span>
                    <input
                        type="file"
                        className="hidden"
                        id="img-upload"
                        onChange={(e) => HandleChangefile(e)}
                        name="img"
                    />
                    <label
                        htmlFor="img-upload"
                        className="cursor-pointer bg-blue-500 text-white px-4 py-2 rounded border border-gray-300 hover:bg-blue-600 transition"
                    >
                        Choisir une image
                    </label>
                </label>

                <div className="bg-red-100 w-full flex justify-center h-40">
                    {previmg && <img src={previmg} alt="" />}
                </div>

                <div className="flex justify-end gap-5">
                    <button type="submit" className="btn btn-neutral ">Ajouter le produit</button>
                    <label htmlFor="my_modal_6" className="btn " onClick={() => setPrevimg("")}>Close!</label>
                </div>


            </form>

        </>
    )
}

