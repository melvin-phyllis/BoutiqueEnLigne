
const FeaturedReviews = () => {
    return (
        <>
            <div>
                <h1 className="text-center text-2xl font-semibold mb-7">Nos clients disent</h1>
                <div className="carousel col-span-2 border-2 border-amber-400 carousel-center w-full   rounded-box ">
                    {[1, 2, 3, 2].map((item, index) => (
                        <div key={index} className="carousel-item w-full md:w-80  border-gray-200">
                            <div className="border border-gray-50 space-y-5 flex flex-col  p-5  transition-shadow bg-white   ">
                                <span className="font-bold">“Impressive quality, durable and reliable.”</span>
                                <div className="flex flex-col">

                                    <span>Generation many variations of passages of even blievable lorem Ipsum is simply dummy text <br /> of the printing and typesetting.</span>
                                </div>
                                <div className="flex items-center gap-5">
                                    <img src="/author-1.png" alt="" className="h-16 w-16" />
                                    <div className="flex flex-col">
                                        <span>Jecob Goeckno</span>
                                        <span>Jecob Goeckno</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div>
                <h1 className="text-2xl font-semibold text-center mb-8">Marques populaires</h1>
                <div className="grid grid-cols-4 lg:grid-cols-6">
                    {[1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2].map(item => (
                        <>
                            <div className="border border-gray-200 flex items-center justify-center p-5">
                                <img src="/5.jpg.png" alt="" />
                            </div>
                        </>
                    ))}
                </div>
            </div>
        </>
    )
}

export default FeaturedReviews
