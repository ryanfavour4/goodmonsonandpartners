import React from "react";
import { Link } from "react-router-dom";
import { HiOutlineArrowLongRight } from "react-icons/hi2";
import hammerOnBoard from "../../../assets/images/law-hammer-on-board.jpg";

export default function ServicesDesc() {
    return (
        <div className="bg-primary text-light md:py-12 py-2">
            <div className="wrapper md:flex-row flex-col flex items-center justify-between lg:gap-24 md:gap-14 relative">
                <div className="w-full">
                    <img
                        className="md:max-w-xl md:relative absolute opacity-5 md:opacity-100"
                        src={hammerOnBoard}
                        alt="services"
                    />
                    <h3 className="text-2xl md:text-5xl font-light md:-mt-10 md:-mr-20 md:ml-auto md:!leading-[46px] max-w-lg mt-4 relative z-[1]">
                        Professional Services Prepared To Be Your Lawyer Firm
                    </h3>
                </div>

                <div className="w-full mt-12 relative z-[1px]">
                    <ul className="flex flex-col gap-3">
                        <li>
                            <Link
                                className="flex justify-between py-4 border-b border-light"
                                to="/about#services"
                            >
                                <p>Real Estate and Residential Property</p>
                                <HiOutlineArrowLongRight className="text-2xl font-bold" />
                            </Link>
                        </li>

                        <li>
                            <Link
                                className="flex justify-between py-4 border-b border-light"
                                to="/about#services"
                            >
                                <p>Services for Individuals</p>
                                <HiOutlineArrowLongRight className="text-2xl font-bold" />
                            </Link>
                        </li>

                        <li>
                            <Link
                                className="flex justify-between py-4 border-b border-light"
                                to="/about#services"
                            >
                                <p>Litigation and Dispute Resolution</p>
                                <HiOutlineArrowLongRight className="text-2xl font-bold" />
                            </Link>
                        </li>

                        <li>
                            <Link
                                className="flex justify-between py-4"
                                to="/about#services"
                            >
                                <p>Business Law</p>
                                <HiOutlineArrowLongRight className="text-2xl font-bold" />
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}
