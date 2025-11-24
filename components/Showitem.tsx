"use client";

import { Dispatch, SetStateAction } from "react";
import ImgShow from "./ImgShow";


const Showitem = ({ isOpen, setIsOpen }: { isOpen: boolean, setIsOpen: Dispatch<SetStateAction<boolean>> }) => {


    return (
        <>

            {isOpen && (
                <>
                    {/* Overlay */}
                    <div
                        onClick={() => setIsOpen(false)}
                        className="fixed inset-0 opacity-20 z-40 bg-gray-100  animate-fadeIn"
                    />

                    {/* Modal */}
                    <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 px-4 pointer-events-none">
                        <div className="bg-white rounded-2xl shadow-2xl lg:w-2/3 pointer-events-auto animate-slideDown p-4">
                            <div className="flex justify-end">
                                <button onClick={() => setIsOpen(false)}>
                                    X
                                </button>
                            </div>
                            <div className="grid md:grid-cols-2 gap-5">
                                <ImgShow />
                                <div className="space-y-4">
                                    <h1 className="font-bold text-xl">Manuel d'utilisation du levier de vitesses Thrustmaster TH8S</h1>
                                    <span className="font-bold text-2xl">40$</span>
                                    <span className="text-sm ">
                                        <ul className="space-y-4 list-disc">
                                            <li>
                                                Les d�marreurs allument le moteur gr�ce � l'�nergie �lectrique.
                                            </li>
                                            <li>Les alternateurs chargent les batteries et alimentent les appareils �lectroniques.
                                            </li>
                                            <li> Les batteries de voiture stockent et fournissent de l'�nergie suppl�mentaire
                                            </li>
                                        </ul>
                                    </span>
                                    <div className="mt-6 ">
                                        <div className="flex justify-between">
                                            <span>10</span>
                                            <button>Ajouter au panier</button>
                                        </div>
                                        <button>ACHETEZ MAINTENANT</button>
                                    </div>
                                </div>

                            </div>

                        </div>
                    </div>
                </>
            )}
        </>
    );
}

export default Showitem
