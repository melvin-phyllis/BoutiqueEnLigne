import { NavinfoType } from "@/types"
import { Dispatch, SetStateAction } from "react"


const NavbarAdmin = ({ Navinfo, setStatusnav }: { Navinfo: NavinfoType[], setStatusnav: Dispatch<SetStateAction<string>> }) => {

    return (
        <>
            {Navinfo.map((item, index) => (

                <details key={item.id || index} className="collapse rounded-none   " name="my-accordion-det-1" open={index === 0} >
                    <summary className="collapse-title  hover:bg-gray-200 font-semibold flex-row p-2 flex items-center  gap-2 rounded-xl ">
                        {item.img ? (<img src={item?.img} alt="" className="w-10 h-10 rounded-full" />) : (item.icon)}

                        <span>{item.title} </span>

                    </summary>
                    <div className="collapse-content space-y-3 text-sm flex flex-col ">

                        <button className="rounded-l-xl p-7  btn btn-neutral btn-outline border-gray-50 shadow-none   flex justify-start" onClick={() => setStatusnav(item.text1)}>{item.icon1}{item.text1}</button>
                        <button className="rounded-l-xl p-7  btn btn-neutral btn-outline   border-gray-50 shadow-none flex justify-start"onClick={() => setStatusnav(item.text2)}>{item.icon2}{item.text2}</button>
                        <button className="rounded-l-xl p-7  btn btn-neutral btn-outline  border-gray-50 shadow-none flex justify-start"onClick={() => {item.text3 =="Deconnexion" ? (''): setStatusnav(item.text3) }}>{item.icon3}{item.text3}</button>

                    </div>
                </details>

            ))}


        </>
    )
}

export default NavbarAdmin
