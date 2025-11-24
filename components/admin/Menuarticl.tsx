import GetAllproductsadmin from "@/controllers/GetAllproductsadmin"
import useStore from "@/store/ProductStore"
import { useEffect } from "react"
import { IoMdAdd } from "react-icons/io"
import { Addarticle } from "./Addarticle"
import { ListeArticle } from "./ListeArticle"

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

                        </div>
                    </div>
                </div>
            </div>

            <div>
                <ListeArticle />
            </div>


        </>
    )
}

export default Menuarticl
