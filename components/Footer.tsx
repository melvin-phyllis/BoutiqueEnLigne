
'use client';

import Link from "next/link";
import { FaApple, FaGooglePlay } from "react-icons/fa";

const productLinks = [
    "Baisse des prix",
    "Nouveaux produits",
    "Meilleures ventes",
    "Plan du site",
    "Nos boutiques",
    "Boîtes de vitesses",
];
const companyLinks = ["Livraison", "Mentions légales", "Conditions générales", "Paiement sécurisé", "Nous contacter", "À propos"];

const Footer = () => {
    return (
        <footer className="bg-[#444141] text-zinc-100">
            <div className="mx-auto w-full max-w-6xl px-5 py-16 md:px-10">
                <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
                    <div className="space-y-6">
                        <div className="flex items-center gap-3">
                            <img src="logo-1754382729.svg" alt="Autorapid" />

                        </div>
                        <p className="text-sm text-zinc-300">
                            Bienvenue dans notre boutique, nous sommes fiers de proposer des produits d’exception et un service client
                            irréprochable, portés par le style et l’innovation.
                        </p>
                        <div className="flex flex-wrap gap-3">
                            <button className="flex items-center gap-3 rounded-xl border border-white/20 px-4 py-2 text-left text-sm text-white transition hover:border-white">
                                <FaApple className="text-xl" />
                                <span>
                                    <span className="block text-xs text-zinc-400">Disponible sur</span>
                                    <span className="font-semibold">l&apos;App Store</span>
                                </span>
                            </button>
                            <button className="flex items-center gap-3 rounded-xl border border-white/20 px-4 py-2 text-left text-sm text-white transition hover:border-white">
                                <FaGooglePlay className="text-xl" />
                                <span>
                                    <span className="block text-xs text-zinc-400">Appli Android sur</span>
                                    <span className="font-semibold">Google Play</span>
                                </span>
                            </button>
                        </div>
                    </div>

                    <nav className="space-y-4">
                        <h3 className="text-lg font-semibold">Produits</h3>
                        <ul className="space-y-2 text-sm text-zinc-300">
                            {productLinks.map((item) => (
                                <li key={item}>
                                    <Link href="#" className="transition hover:text-white">
                                        {item}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </nav>

                    <nav className="space-y-4">
                        <h3 className="text-lg font-semibold">Notre entreprise</h3>
                        <ul className="space-y-2 text-sm text-zinc-300">
                            {companyLinks.map((item) => (
                                <li key={item}>
                                    <Link href="#" className="transition hover:text-white">
                                        {item}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </nav>

                    <div className="space-y-4">
                        <h3 className="text-lg font-semibold">Informations</h3>
                        <ul className="space-y-2 text-sm text-zinc-300">
                            <li>
                                Autorapid Demo
                                <br />
                                99 rue du Nouveau Thème, XY 12345
                                <br />
                                Quartier du Soleil levant.
                                <br />
                                France
                            </li>
                            <li>
                                Appelez-nous : <span className="text-white">+33 1 23 45 67 89</span>
                            </li>
                            <li>
                                Écrivez-nous :&nbsp;
                                <Link href="mailto:admin@example.com" className="text-white hover:underline">
                                    admin@example.com
                                </Link>
                            </li>
                            <li>
                                <Link href={"/login/loginadmin"}>Connexion</Link>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="mt-12 border-t border-white/10 pt-6 text-center text-xs text-zinc-500">
                    <div>&copy; {new Date().getFullYear()} Autorapid. Tous droits réservés.</div>
                    <div>Akou Melvin — Développeur full stack junior</div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
