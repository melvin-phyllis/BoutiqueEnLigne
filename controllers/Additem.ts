import { formarticle } from "@/types"
import axios from "axios"
import { FormEvent } from "react"
import GetinfoUser from "./GetinfoUser"
import Sendimg from "./Sendimg"

const Additem = async (e: FormEvent<HTMLFormElement>, formarticle: formarticle, setProducstList: (product: formarticle) => void, file: File | null) => {

    try {
        e?.preventDefault()

        const { id } = GetinfoUser('useradmin')
        const key = id


        const data = await Sendimg(file)

        if (data?.message !== "OK") return alert(`${data.message}`)

        const req = await axios.post("/api/addproducts", { key, ...formarticle, img: data.url })
        if (req?.data?.message == "OK") {
            const id = req?.data.id
            alert("elementg ajouter")

            setProducstList({ ...formarticle, id })

        }


    } catch (error) {

    }
}

export default Additem
