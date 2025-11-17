
const CarouselLanding = () => {
    return (
        <>
            <div className="w-full flex relative max-w-screen">

                <div className="w-full  h-screen ">
                    <div className="carousel w-full h-full">
                        <div id="slide1" className="carousel-item relative w-full h-full">
                            <img
                                src="iubihniunjnj.jpg"
                                className="w-full h-full object-cover" />
                            <div className="absolute right-0  text-white flex-col   md:w-1/2 justify-start   flex  h-full">
                                <div className="flex  h-60 p-4 justify-center  flex-col  gap-4 mt-30">
                                    <div className="font-semibold flex-col flex text-3xl lg:text-5xl">
                                        <span>Portrait de voiture et mécanicien avec</span>
                                        <span>Car Services</span>
                                        <span>Discount all deals – 30% off </span>
                                    </div>
                                    <button className="bg-red-200 md:w-60 font-semibold  text-sm  md:text-3sm rounded py-1 text-black">ACHETER MAINTENANT</button>
                                </div>

                            </div>
                            <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                                <a href="#slide2" className="btn btn-circle">❮</a>
                                <a href="#slide2" className="btn btn-circle">❯</a>
                            </div>
                        </div>
                        <div id="slide2" className="carousel-item relative w-full h-full">
                            <img
                                src="iubihniunjnj.jpg"
                                className="w-full h-full object-cover" />
                            <div className="absolute right-0  text-white flex-col   md:w-1/2 justify-start   flex  h-full">
                                <div className="flex  h-60 p-4 justify-center  flex-col  gap-4 mt-30">
                                    <div className="font-semibold flex-col flex text-3xl lg:text-5xl">
                                        <span>Portrait de voiture et mécanicien avec</span>
                                        <span>Car Services</span>
                                        <span>Discount all deals – 30% off </span>
                                    </div>
                                    <button className="bg-red-200 md:w-60 font-semibold  text-sm  md:text-3sm rounded py-1 text-black">ACHETER MAINTENANT</button>
                                </div>

                            </div>
                            <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                                <a href="#slide1" className="btn btn-circle">❮</a>
                                <a href="#slide1" className="btn btn-circle">❯</a>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="py-6 bg-linear-to-tr absolute bottom-0 from-zinc-700 via-zinc-700 to-slate-500 w-full   ">
                    <div className="container mx-auto px-4">
                        <div className="carousel carousel-center space-x-4 rounded-box  flex justify-center ">
                            <div className="carousel-item">
                                <div className="flex flex-col items-center gap-2  rounded-lg p-3   transition-shadow ">
                                    <img
                                        src="cat-2.png"
                                        alt="Bougie"
                                        className="h-20" />
                                    <span className="text-sm md:text-lg text-white font-semibold">Bougie</span>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <div className="flex flex-col items-center gap-2  rounded-lg p-3   transition-shadow ">
                                    <img
                                        src="cat-2.png"
                                        alt="Bougie"
                                        className="h-20" />
                                    <span className="text-sm md:text-lg text-white font-semibold">Bougie</span>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <div className="flex flex-col items-center gap-2  rounded-lg p-3   transition-shadow ">
                                    <img
                                        src="cat-2.png"
                                        alt="Bougie"
                                        className="h-20" />
                                    <span className="text-sm md:text-lg text-white font-semibold">Bougie</span>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <div className="flex flex-col items-center gap-2  rounded-lg p-3   transition-shadow ">
                                    <img
                                        src="cat-2.png"
                                        alt="Bougie"
                                        className="h-20" />
                                    <span className="text-sm md:text-lg text-white font-semibold">Bougie</span>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <div className="flex flex-col items-center gap-2  rounded-lg p-3   transition-shadow ">
                                    <img
                                        src="cat-2.png"
                                        alt="Bougie"
                                        className="h-20" />
                                    <span className="text-sm md:text-lg text-white font-semibold">Bougie</span>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <div className="flex flex-col items-center gap-2  rounded-lg p-3   transition-shadow ">
                                    <img
                                        src="cat-2.png"
                                        alt="Bougie"
                                        className="h-20" />
                                    <span className="text-sm md:text-lg text-white font-semibold">Bougie</span>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <div className="flex flex-col items-center gap-2  rounded-lg p-3   transition-shadow ">
                                    <img
                                        src="cat-2.png"
                                        alt="Bougie"
                                        className="h-20" />
                                    <span className="text-sm md:text-lg text-white font-semibold">Bougie</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CarouselLanding
