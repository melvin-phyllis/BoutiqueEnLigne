import Additem from "@/controllers/Additem"
import useStore from "@/store/ProductStore"
import { formarticle } from "@/types"
import { upload } from "@imagekit/next"
import imageCompression from "browser-image-compression"
import { ChangeEvent, useState } from "react"


export const Addarticle = () => {
    const [formarticle, setFormarcticle] = useState<formarticle>({
        title: "",
        Categorie: "",
        description: "",
        price: "",
        stock: 0,
        img: ""



    })

    const { setProducstList, getProducstList, ProducstList } = useStore()
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



    const Sendimg = async () => {
        try {
            const response = await fetch("/api/upload-auth")
            const data = await response.json()

            const { token, expire, signature, publicKey } = data

            if (!file) return ({ message: "choisir une image svp" })

            if (file && file.size > 1024 * 1024) return ({ message: "choisisez une image inferieur a 1MO" })

            const options = {
                filrType: "image/webp",
                maxWidthOrHeight: 800,
                useWebWorker: true,
            }

            const compressedImg = await imageCompression(file, options)

            const req = await upload({ token, expire, signature, publicKey, file: compressedImg, fileName: `${Date.now}.webp` })
            console.log(req?.url)
        } catch (error) {
            console.log(error)
        }
    }

    const Handlechange = (e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLSelectElement> | ChangeEvent<HTMLTextAreaElement>) => {

        const { name, value } = e.target
        setFormarcticle(prev => ({
            ...prev, [name]: value
        }))
        console.log(formarticle)
    }


    const [listproduits, setListproduits] = useState<formarticle[]>([])

    return (
        <>

            <form className="w-full space-y-4" onSubmit={(e) => Additem(e, formarticle, setProducstList)}>
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

                    <label className="form-control">
                        <span className="label-text mb-1">Image </span>
                        <input type='file' className="input input-bordered" onChange={(e) => HandleChangefile(e)} />
                        <img src={previmg!} alt="" />

                    </label>

                </div>

                <button type="submit" className="btn btn-neutral w-full">Ajouter le produit</button>
            </form>
        </>
    )
}

