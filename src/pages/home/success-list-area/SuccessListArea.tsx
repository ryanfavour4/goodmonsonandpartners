import React from "react";
import libertyScaleHanging from "../../../assets/images/liberty-scale-pinky-holding.jpg";
import { TbSquareCheckFilled } from "react-icons/tb";

export default function SuccessListArea() {
    return (
        <div className="py-4 md:py-8 md:pt-10">
            <div className="wrapper flex justify-between md:gap-32 gap-8 md:flex-row flex-col">
                <div className="">
                    <img
                        className="md:max-w-md md:h-auto h-28 md:w-auto w-full object-cover md:object-center object-[0_88%]"
                        src={libertyScaleHanging}
                        alt=""
                    />
                </div>

                <div className="flex justify-center flex-col w-full">
                    <h3 className="text-2xl md:text-5xl font-light max-w-sm md:!leading-[55px]">
                        The Advantages of Our Law Consultancy Escrow Services
                    </h3>

                    <hr className="block w-full border-t border-gray-400 md:my-10 my-4" />

                    <ul className="flex flex-col gap-4">
                        <li className="flex items-center gap-2">
                            <TbSquareCheckFilled className="text-primary text-xl mb-1" />
                            <h4 className="text-lg font-bold">
                                Legal Expertise
                            </h4>
                        </li>
                        <li className="flex items-center gap-2">
                            <TbSquareCheckFilled className="text-primary text-xl mb-1" />
                            <h4 className="text-lg font-bold">
                                Transaction Security
                            </h4>
                        </li>
                        <li className="flex items-center gap-2">
                            <TbSquareCheckFilled className="text-primary text-xl mb-1" />
                            <h4 className="text-lg font-bold">
                                Dispute Resolution
                            </h4>
                        </li>
                        <li className="flex items-center gap-2">
                            <TbSquareCheckFilled className="text-primary text-xl mb-1" />
                            <h4 className="text-lg font-bold">
                                Compliance Assurance
                            </h4>
                        </li>
                        <li className="flex items-center gap-2">
                            <TbSquareCheckFilled className="text-primary text-xl mb-1" />
                            <h4 className="text-lg font-bold">
                                Time and Cost Savings
                            </h4>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}
