import React from "react";
import silverJustice from "../../../assets/images/silver-justice-golem.jpg";

export default function AboutDesc() {
    return (
        <div className="py-8">
            <div className="wrapper flex flex-row-reverse gap-3 md:items-center md:justify-evenly relative !mb-10">
                <div className="border-l-2 border-primary py-4 p-4 w-2/3 md:w-full">
                    <img
                        className="md:w-5/6 m-auto"
                        src={silverJustice}
                        alt="silver-justice-golem"
                    />
                </div>

                <div className="w-full md:pr-10 flex items-center justify-normal md:justify-center flex-col">
                    <div className="">
                        <h3 className="mb-2 md:text-base text-sm w-full">
                            About Us
                        </h3>
                        <h4 className="text-xl md:text-5xl max-w-sm ">
                            Helping to overcome and ease the legal burden
                        </h4>
                    </div>
                </div>
            </div>

            <div className="wrapper text-center !max-w-4xl">
                <p>
                    At Goodmonson & Partners Law Consultancy, we understand the
                    intricate complexities of the legal landscape that
                    businesses face in today's dynamic market environment.
                </p>
                <br />
                <p>
                    With a commitment to excellence, integrity, and client
                    satisfaction, we stand as your premier legal partner,
                    offering comprehensive legal solutions tailored to meet your
                    business needs and objectives.
                </p>
                <br />
                <p>
                    Goodmonson & Partners Law Consultancy is a distinguished law
                    firm based in the heart of the UK, renowned for our
                    expertise in providing strategic legal advice and solutions
                    to businesses across various industries. Established with a
                    vision to empower businesses with the knowledge and support
                    they need to thrive, we have earned a reputation for our
                    unwavering dedication to client success and our relentless
                    pursuit of excellence.
                </p>
            </div>
        </div>
    );
}
