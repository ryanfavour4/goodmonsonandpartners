import React from "react";
import heroBg from "../../../assets/images/liberty-woman-white.png";

export default function AboutHero() {
    return (
        <div className="relative text-light">
            <div className="">
                <img
                    src={heroBg}
                    alt=""
                    className="h-80 object-cover object-top w-full"
                />
                <div className="h-80 w-full absolute inset-0 bg-primary/90" />
            </div>

            <div className="wrapper absolute inset-0 z-[1px] flex flex-col md:flex-row gap-2 md:gap-8 md:items-center h-full md:justify-normal justify-center">
                <div className="md:p-8 p-2 border-b-2 md:border-b-0 md:border-r-2 border-light md:h-[50%] flex items-center">
                    <h3 className="text-2xl md:text-5xl whitespace-nowrap font-light">
                        About Us
                    </h3>
                </div>

                <p className="max-w-2xl">
                    Established with a strong vision of empowering businesses by
                    providing them with the essential knowledge and unwavering
                    support necessary for their growth and success.
                </p>
            </div>
        </div>
    );
}
