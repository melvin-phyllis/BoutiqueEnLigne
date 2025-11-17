"use client"

import CarouselLanding from "@/components/CarouselLanding";
import FeaturedProducts from "@/components/FeaturedProducts";
import FeaturedProducts2 from "@/components/FeaturedProducts2";
import FeaturedReviews from "@/components/FeaturedReviews";
import Footer from "@/components/Footer";
import Latestproducts from "@/components/Latestproducts";
import Navbar from "@/components/Navbar";
import Offerweek from "@/components/Offerweek";
import { PiBoatBold } from "react-icons/pi";


export default function Home() {


  return (
    <>
      <header className="lg:mx-10  p-4">
        <Navbar />
      </header>

      <main className="space-y-20">

        <section className="carousel">
          <CarouselLanding />
        </section>

        <section className="mx-3 lg:mx-60">
          <div className="">
            <div className="grid md:grid-cols-2 gap-7">
              <div className="relative h-60">
                <img src="og.png" alt="" className="absolute w-full object-cover h-full" />
                <div className="absolute flex flex-col  w-full h-full  justify-center items-end ">
                  <div className=" flex-col space-y-5 text-start flex w-1/2">
                    <span className="bg-yellow-200 mx-auto">JUSQU'À 50 % DE RÉDUCTION</span>
                    <span className="text-2xl text-white">BMW Series <br /> Future</span>
                    <span className="text-white font-semibold">ACHETER MAINTENANT</span>
                  </div>
                </div>
              </div>
              <div className="relative h-60">
                <img src="og.png" alt="" className="absolute w-full object-cover h-full" />
                <div className="absolute flex flex-col  w-full h-full  justify-center items-end ">
                  <div className=" flex-col space-y-5 text-start flex w-1/2">
                    <span className="bg-yellow-200 mx-auto">JUSQU'À 50 % DE RÉDUCTION</span>
                    <span className="text-2xl text-white">BMW Series <br /> Future</span>
                    <span className="text-white font-semibold">ACHETER MAINTENANT</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </section>

        <section className="produits mx-3 lg:mx-60">
          <Latestproducts />
        </section>

        <section className="banniere">

          <div className="w-full h-130 relative">
            <img src="parallax-banner-1.jpg.jpeg" alt="" className="absolute w-full h-full object-cover" />
            <div className="absolute flex justify-end  ml-10   md:w-2/5 h-full items-center ">
              <div className=" flex flex-col space-y-10 text-xl md:text-2xl text-white font-bold">
                <span>Poignées de volant de luxe en cuir pour voiture</span>

                <span>Tuyaux d'échappement – Economisez maintenant 35 %</span>
                <span className="text-xl bg-amber-300 p-2  rounded-2xl mr-auto text-black">ACHETER MAINTENANT</span>
              </div>
            </div>
          </div>

        </section>

        <section className="Offresemaine mx-3 lg:mx-60">
          <Offerweek />
        </section>

        <section className="mx-3 lg:mx-60">

          <div className="grid md:grid-cols-3 gap-7">
            <div className="relative h-60 md:col-span-2">
              <img src="og.png" alt="" className="absolute w-full object-cover h-full" />
              <div className="absolute flex flex-col  w-full h-full  justify-center items-start ">
                <div className=" flex-col space-y-5 text-start flex w-1/2">
                  <span className="bg-yellow-200 mr-auto">Jusqu'à 15 % d'économies</span>
                  <span className="text-2xl text-white">BMW Series <br /> Future</span>
                  <span className="text-white font-semibold">ACHETER MAINTENANT</span>
                </div>
              </div>
            </div>
            <div className="relative h-60">
              <img src="og.png" alt="" className="absolute w-full object-cover h-full" />
              <div className="absolute flex flex-col  w-full h-full  justify-center items-end ">
                <div className="absolute flex flex-col  w-full h-full  justify-center items-start ">
                  <div className=" flex-col space-y-5 text-start flex w-1/2">
                    <span className="bg-yellow-200 mr-auto">Jusqu'à 15 % d'économies</span>
                    <span className="text-2xl text-white">BMW Series <br /> Future</span>
                    <span className="text-white font-semibold">ACHETER MAINTENANT</span>
                  </div>
                </div>
              </div>
            </div>
          </div>


        </section>

        <section className="Produits les plus vendus mx-3 lg:mx-60">

          <FeaturedProducts2 />

        </section>

        <section className="banniere">

          <FeaturedProducts />
        </section>


        <section className="mx-3 lg:mx-60">
          <div className="carousel col-span-2 mb-20 border-amber-400 carousel-center w-full gap-7    rounded-box ">
            {[1, 2, 2, 2, 2, 2].map(item => (

              <>
                <div className="flex items-center carousel-item gap-4">
                  <PiBoatBold size={50} />
                  <div className="flex flex-col ">
                    <span className="font-semibold">Livraison gratuite</span>
                    <span className="text-gray-400">Livraison gratuite sur toutes les commandes</span>
                  </div>
                </div>
              </>
            ))}

          </div>

          <div className="w-full h-60 relative">
            <img src="parallax-banner-1.jpg.jpeg" alt="" className="absolute w-full h-full object-cover" />
            <div className="absolute flex justify-end w-full     h-full items-center ">

              <div className=" flex flex-col space-y-10 text-xl md:text-2xl text-white font-bold mr-20">
                <span className="text-xl bg-amber-300 p-2  rounded-2xl mr-auto text-black">ACHETER MAINTENANT</span>
                <span>Poignées de volant de luxe en cuir pour voiture</span>

                <span>Tuyaux d'échappement – Economisez maintenant 35 %</span>

              </div>
            </div>
          </div>
        </section>

        <section className="feature mx-3 lg:mx-60 space-y-20 ">
          <FeaturedReviews />
        </section>


      </main>
      <Footer />
    </>
  );
}
