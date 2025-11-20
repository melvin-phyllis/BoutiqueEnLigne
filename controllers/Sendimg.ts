import { upload } from "@imagekit/next"
import imageCompression from "browser-image-compression"

const Sendimg = async (file: File | null) => {
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
        return { message: "OK", url: req?.url }
    } catch (error) {
        console.log(error)

        return { message: "une erreur c'est produite" }
    }
}


export default Sendimg
