import Link from "next/link"
import { FaHome } from "react-icons/fa"

const FilNavgate = ({ statusnav }: { statusnav: string }) => {
    return (
        <>
            <div className="breadcrumbs space-y-2 text-sm">
                <ul>
                    <li><Link href={"/"} ><FaHome size={20} /></Link></li>
                    <li>{statusnav}</li>

                </ul>
            </div>
        </>
    )
}

export default FilNavgate
