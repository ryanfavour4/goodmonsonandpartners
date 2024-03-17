import { IoIosMenu, IoMdClose } from "react-icons/io";
import { NavLink } from "react-router-dom";
import "./Navbar.css";
import { useNavbar } from "./Navbar.controller";
import logoIcon from "../../assets/icon/logo-icon.png";
import logo from "../../assets/icon/logo.png";

export default function Navbar() {
    const { navClassName, isScrolled, handleToggleNavOpen } = useNavbar();

    return (
        <>
            {isScrolled && <div className={"h-28"}></div>}

            <header
                className={`bg-primary text-white py-3 md:py-5 relative ${
                    isScrolled && "!fixed top-0 left-0 right-0 z-10"
                }`}
            >
                <div className="wrapper flex items-center justify-between">
                    <IoIosMenu
                        className="text-2xl cursor-pointer md:hidden"
                        onClick={handleToggleNavOpen}
                    />
                    {/* //?? ==== SLIDE SIDE BAR ===== ??// */}
                    <div
                        className={`${navClassName} fixed bg-primary top-0 bottom-0 right-0 left-0 md:hidden z-10`}
                    >
                        <div className="w-[98%] m-auto py-2 flex items-center justify-between border-b-2 border-secondary mb-4">
                            <IoMdClose
                                className="text-2xl cursor-pointer"
                                onClick={handleToggleNavOpen}
                            />
                            <div className="flex-[1] flex items-center justify-center text-center">
                                <NavLink onClick={handleToggleNavOpen} to={"/"}>
                                    <img
                                        src={logoIcon}
                                        className="w-14 mr-4 md:mr-0"
                                        alt="goodmonson and partners"
                                    />
                                </NavLink>
                            </div>
                        </div>

                        <nav className="h-5/6 pb-[5%]">
                            <ul className="pt-10 flex flex-col gap-6 h-full overflow-y-auto">
                                <li>
                                    <NavLink
                                        className="border-b p-4 border-secondary block hover:pl-4 hover:border-l-4"
                                        to={"/"}
                                    >
                                        Home
                                    </NavLink>
                                </li>

                                <li>
                                    <NavLink
                                        className="border-b p-4 border-secondary block hover:pl-4 hover:border-l-4"
                                        to="/about"
                                    >
                                        About
                                    </NavLink>
                                </li>

                                <li>
                                    <NavLink
                                        className="border-b p-4 border-secondary block hover:pl-4 hover:border-l-4"
                                        to="/services"
                                    >
                                        Services
                                    </NavLink>
                                </li>

                                <li>
                                    <NavLink
                                        className="border-b p-4 border-secondary block hover:pl-4 hover:border-l-4"
                                        to="/contact"
                                    >
                                        Contact Us
                                    </NavLink>
                                </li>
                            </ul>
                        </nav>
                    </div>

                    <div className="flex-[1] md:flex-none flex items-center justify-center text-center">
                        <NavLink to={"/"}>
                            <img
                                src={logo}
                                className="w-36 md:w-44 mr-4 md:mr-0"
                                alt="goodmonson and partners"
                            />
                        </NavLink>
                    </div>

                    <nav className="hidden md:flex items-center gap-14 font-normal">
                        <li>
                            <NavLink to="/">Home</NavLink>
                        </li>
                        <li>
                            <NavLink to="/about">About</NavLink>
                        </li>
                        <li>
                            <NavLink to="/services">Services</NavLink>
                        </li>
                        <li>
                            <NavLink to="/contact">Contact Us</NavLink>
                        </li>
                    </nav>
                </div>
            </header>
        </>
    );
}
