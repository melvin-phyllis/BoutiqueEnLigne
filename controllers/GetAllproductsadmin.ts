import GetinfoUser from "@/controllers/GetinfoUser"
import { formarticleType } from "@/types"
import axios from "axios"

const GetAllproductsadmin = async (getProducstList: (products: formarticleType[]) => void) => {
    try {
        const { id } = GetinfoUser("useradmin")
        const req = await axios.get("/api/getproducts")
        const list = req?.data.newList

        if (!list) {
            return alert("Ajouter des articles")
        }
        const Array = list.filter((item: formarticleType) => item.key == id)

        getProducstList(Array)
    } catch (error) {
        console.log(error)
    }
}

export default GetAllproductsadmin
