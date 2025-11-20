"use client"

import FilNavgate from "@/components/admin/FilNavgate";
import { ListeArticle } from "@/components/admin/ListeArticle";
import Menuarticl from "@/components/admin/Menuarticl";
import NavbarAdmin from "@/components/admin/NavbarAdmin";
import { NavinfoType } from "@/types";
import { useEffect, useState } from "react";
import { ImStatsDots } from "react-icons/im";
import { IoLogOut, IoSettingsOutline } from "react-icons/io5";
import { LuLayoutDashboard } from "react-icons/lu";
import { MdAccountCircle, MdAddShoppingCart, MdOutlineProductionQuantityLimits } from "react-icons/md";



const Navinfo: NavinfoType[] = [
  {
    id: "mon compte", img: "https://img.freepik.com/vecteurs-libre/modele-logo-entreprise-colore-slogan_23-2148802643.jpg?semt=ais_incoming&w=740&q=80",
    title: "Akou melvin", icon1: <MdAccountCircle size={25} />, icon2: <IoSettingsOutline size={25} />, icon3: <IoLogOut size={25} />,
    text1: "Mon profile", text2: "Parametre", text3: "Deconnexion"

  }, {

    id: "dashboard",
    title: "Dashboard",
    icon: <LuLayoutDashboard className="w-10 h-10" />,
    icon1: <ImStatsDots size={25} />,
    icon2: <MdOutlineProductionQuantityLimits size={25} />,
    icon3: <MdAddShoppingCart size={25} />,

    text1: "Statistique",
    text2: "Mes produits",
    text3: "Ajouter produits"
  }


]


export default function Home() {

  const [statusnav, setStatusnav] = useState("")



  useEffect(() => { console.log(statusnav) }, [statusnav])
  return (

    <>
      <div className="bg-gray-200">
        <nav className="fixed left-0 bg-white-600  hidden xl:flex flex-col h-24/25 w-80 rounded-2xl space-y-7 m-3 p-4 bg-white ">
          <h1 className="text-xl text-center font-semibold">Centre de bord</h1>

          <NavbarAdmin Navinfo={Navinfo} setStatusnav={setStatusnav} />

        </nav>


        <section className="-menu">
          <div className="bg-gray-200 /* */  xl:ml-93  mx-5">

            <FilNavgate statusnav={statusnav} />

            <div className="max-w-screen  relative h-100 mb-20">
              <img src="/67a09b33dc97f.jpg" alt="logo" className="w-full h-full object-cover absolute rounded-xl" />
              <div className="absolute    bottom-[-70] w-full">

                <div className="bg-white rounded-2xl shadow p-5 m-5">
                  <div className="avatar gap-5">
                    <div className="mask mask-squircle w-20 shadow bg-amber-500">
                      <img src="https://img.daisyui.com/images/profile/demo/distracted1@192.webp" className="" />
                    </div>
                    <div className="flex flex-col  justify-center ">
                      <span className="font-bold">Akou melvin</span>
                      <span>Fondateur</span>
                    </div>
                  </div>
                </div>

              </div>
            </div>


            {
              statusnav == "Ajouter produits" ? <Menuarticl /> :
                statusnav == "Mes produits" && <ListeArticle />

            }

          </div>


        </section>

      </div>

    </>
  );
}
