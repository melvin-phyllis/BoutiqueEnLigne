import { GiHamburgerMenu } from "react-icons/gi"

const BtnNavbar = () => {
    return (
        <>
            <div className="drawer lg:hidden  flex">
                <input id="my-drawer-1" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content">
                    {/* Page content here */}
                    <label htmlFor="my-drawer-1" className=""><GiHamburgerMenu size={22} /></label>
                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-1" aria-label="close sidebar" className="drawer-overlay"></label>
                    <div className="menu bg-base-200 min-h-full w-80     text-sm from-accent-content">
                        <div className="flex gap-2   w-full items-center justify-between shadow-sm">
                            <div>
                                <h2 className="text-xl">Menu</h2>
                            </div>
                            <div className="text-xl">
                                <h2>Catégories</h2>
                            </div>

                        </div>
                        <div className="min-h-full ">
                            <div className="collapse w-full collapse-plus shadow border border-base-300">
                                <input type="radio" name="my-accordion-3" defaultChecked />
                                <div className="collapse-title font-semibold w-full">Boutique</div>
                                <div className="collapse-content text-sm">Click the "Sign Up" button in the top right corner and follow the registration process.</div>
                            </div>
                            <div className="collapse collapse-plus shadow border border-base-300">
                                <input type="radio" name="my-accordion-3" />
                                <div className="collapse-title font-semibold">Produits</div>
                                <div className="collapse-content text-sm">Click on "Forgot Password" on the login page and follow the instructions sent to your email.</div>
                            </div>
                            <div className="collapse collapse-plus shadow border border-base-300">
                                <input type="radio" name="my-accordion-3" />
                                <div className="collapse-title font-semibold">Meilleur offres</div>
                                <div className="collapse-content text-sm">Go to "My Account" settings and select "Edit Profile" to make changes.</div>
                            </div>
                            <div className="collapse w-full collapse-plus shadow border border-base-300">
                                <input type="radio" name="my-accordion-3" defaultChecked />
                                <div className="collapse-title font-semibold w-full">Boutique</div>
                                <div className="collapse-content text-sm">Click the "Sign Up" button in the top right corner and follow the registration process.</div>
                            </div>
                            <div className="collapse collapse-plus shadow border border-base-300">
                                <input type="radio" name="my-accordion-3" />
                                <div className="collapse-title font-semibold">Produits</div>
                                <div className="collapse-content text-sm">Click on "Forgot Password" on the login page and follow the instructions sent to your email.</div>
                            </div>
                            <div className="collapse collapse-plus shadow border border-base-300">
                                <input type="radio" name="my-accordion-3" />
                                <div className="collapse-title font-semibold">Meilleur offres</div>
                                <div className="collapse-content text-sm">Go to "My Account" settings and select "Edit Profile" to make changes.</div>
                            </div>
                        </div>

                    </div>

                </div>
            </div>
        </>
    )
}

export default BtnNavbar
