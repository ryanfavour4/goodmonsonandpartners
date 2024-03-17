import React from "react";
import { Link } from "react-router-dom";
import { FaFacebook, FaLinkedin, FaTwitter } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { BsTelephone } from "react-icons/bs";
import { IoMailOutline } from "react-icons/io5";
import { IoLocationOutline } from "react-icons/io5";

import useFooter from "./Footer.controller";
import logo from "../../assets/icon/logo.png";

export default function Footer() {
    const { year } = useFooter();
    return (
        <footer className="bg-primary py-8 text-white">
            <div className="wrapper">
                <div className="max-w-4xl m-auto pb-8 border-b-2 border-white flex items-center justify-center">
                    <img
                        src={logo}
                        className="w-56 md:w-72"
                        alt="Goodmonson & Partners Law Consultancy"
                    />
                </div>

                <div className="my-8 mt-4 py-8 px-4 md:flex justify-between md:gap-4 gap-10 gap-y-10 flex-wrap grid grid-cols-2 border-b-2 border-white">
                    <div className="max-w-xs">
                        <h3 className="mb-4 text-xl">Follow Us</h3>

                        <ul className="flex flex-col gap-4">
                            <li>
                                Stay connected! Follow us on social media for
                                the latest legal updates, industry insights, and
                                exclusive content.
                            </li>
                            <li className="flex items-center gap-3 text-2xl">
                                <a
                                    href="http://facebook.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <FaFacebook />
                                </a>
                                <a
                                    href="http://linkedin.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <FaLinkedin />
                                </a>
                                <a
                                    href="http://twitter.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <FaTwitter />
                                </a>
                                <a
                                    href="http://instagram.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <RiInstagramFill />
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div className="">
                        <h3 className="mb-4 text-xl">Page</h3>

                        <ul className="flex flex-col gap-2">
                            <li>
                                <Link to="/">Home</Link>
                            </li>
                            <li>
                                <Link to="/about">About</Link>
                            </li>
                            <li>
                                <Link to="/services">Services</Link>
                            </li>
                            <li>
                                <Link to="/contact">Contact</Link>
                            </li>
                        </ul>
                    </div>

                    <div className="col-span-2 md:col-auto">
                        <h3 className="mb-4 text-xl">Contact Us</h3>

                        <ul className="flex flex-col gap-2">
                            <li>
                                <a
                                    href="mailto:info@goodmonsonandpartners.co.uk"
                                    className="flex gap-2"
                                >
                                    <span className="w-6 text-lg">
                                        <IoMailOutline />
                                    </span>
                                    <span>
                                        info@goodmonsonandpartners.co.uk
                                    </span>
                                </a>
                            </li>
                            <li>
                                <a
                                    href="tel:+442081819675"
                                    className="flex gap-2"
                                >
                                    <span className="w-6 text-lg">
                                        <BsTelephone />
                                    </span>
                                    <span>+44 208 181-9675</span>
                                </a>
                            </li>
                            <li>
                                <a
                                    href="http://"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex gap-2"
                                >
                                    <span className="w-6 text-xl">
                                        <IoLocationOutline />
                                    </span>
                                    <span>
                                        Berkeley Centre, 246-250 Romford Road,
                                        London, E7 9HZ, United Kingdom
                                    </span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="text-center">
                    Copyright &copy;{year} Goodmonson & Partners Law Consultancy
                    All Rights Reserved
                </div>
            </div>
        </footer>
    );
}
