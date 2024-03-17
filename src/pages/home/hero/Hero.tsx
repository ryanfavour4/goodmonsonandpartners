import React from "react";
import LinkButton from "../../../components/links/LinkButton";
import heroImage from "../../../assets/images/left-alight-side-building.jpg";

export default function Hero() {
    return (
        <div className="md:p-8 p-0">
            <div className="md:w-auto wrapper !w-full p-3 relative md:min-h-[550px] min-h-[80vh] flex justify-center flex-col">
                <div className="relative z-[1] md:w-full w-[70%]">
                    <h1 className="mb-16">
                        <span className="md:text-2xl text-lg font-bold">
                            Goodmonson & Partners Law Consultancy:
                        </span>
                        <br />
                        <span className="md:text-6xl text-4xl">Your </span>
                        <span className="text-secondary md:text-6xl text-4xl">
                            Trusted
                        </span>
                        <span className="whitespace-break-spaces block md:text-6xl text-4xl">
                            Legal Partner for Business
                        </span>
                        <span className="text-secondary md:text-6xl text-4xl">
                            Success
                        </span>
                    </h1>

                    <LinkButton to="/">Get Started</LinkButton>
                </div>

                <img
                    className="absolute right-0 w-full md:w-8/12 bottom-0 top-0 md:h-full md:min-h-[auto] min-h-[80vh] object-cover"
                    src={heroImage}
                    alt=""
                />
            </div>
        </div>
    );
}
