import { formarticle } from "@/types"
import axios from "axios"
import { FormEvent } from "react"
import GetinfoUser from "./GetinfoUser"

const Additem = async (e: FormEvent<HTMLFormElement>, formarticle: formarticle, setProducstList: (product: formarticle) => void) => {

    try {
        const { id } = GetinfoUser('useradmin')
        const key = id
        e?.preventDefault()


        const req = await axios.post("/api/addproducts", { key, ...formarticle })


        if (req?.data?.message == "OK") {
            const id = req?.data.id
            alert("elementg ajouter")

            setProducstList({ ...formarticle, id })

        }
        console.log(req.data, "r")

    } catch (error) {

    }
}

export default Additem
