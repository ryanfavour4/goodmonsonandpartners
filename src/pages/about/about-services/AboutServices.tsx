import React from "react";
import bronzeJustice from "../../../assets/images/Injury-law-firm-golem-bronze.jpg";
import { ReactComponent as HandShakeIcon } from "../../../assets/svg/hand-shake.svg";
import { ReactComponent as LawyerAndIndividualIcon } from "../../../assets/svg/lawyer-individual.svg";
import { ReactComponent as LawHammerIcon } from "../../../assets/svg/law-hammer.svg";
import { ReactComponent as BusinessBriefCaseIcon } from "../../../assets/svg/business-briefcase.svg";

export default function AboutServices() {
    return (
        <div className="py-8">
            <div className="wrapper flex gap-3 md:items-center md:justify-evenly relative !mb-10">
                <div className="border-r-2 border-primary py-4 p-4 w-2/3 md:w-full">
                    <img
                        className="md:w-5/6 m-auto"
                        src={bronzeJustice}
                        alt="silver-justice-golem"
                    />
                </div>

                <div className="w-full md:pl-10">
                    <h3 className="mb-2 md:text-base text-sm">Our Services</h3>
                    <h4 className="text-xl md:text-5xl max-w-sm">
                        Unwavering Commitment To Client Success
                    </h4>
                </div>
            </div>

            <div className="wrapper text-center !max-w-4xl">
                <p>
                    With our comprehensive range of legal services, unwavering
                    commitment to client success, and dedication to excellence,
                    Goodmonson & Partners Law Consultancy stands ready to
                    support you in achieving your business goals and
                    aspirations.
                </p>
                <br />
                <p>
                    At Goodmonson & Partners, we offer a wide range of legal
                    services tailored to meet the diverse needs of our clients,
                    with a particular focus on business contract and
                    financial-related lawful services. Our comprehensive service
                    offerings include
                </p>
                <br />
            </div>
            <div className="wrapper">
                <div className="text-dark flex items-center gap-4 flex-wrap justify-center">
                    <div className="flex flex-col items-center justify-center gap-2 max-w-sm text-center">
                        <HandShakeIcon className="h-24 w-24" />
                        <h4 className="text-2xl">Business Contract Services</h4>
                        <p>
                            Expert guidance for all your residential property
                            needs, from navigating the buying or selling process
                            to securing the perfect rental.
                        </p>
                    </div>

                    <div className="flex flex-col items-center justify-center gap-2 max-w-sm text-center">
                        <LawyerAndIndividualIcon className="h-24 w-24" />
                        <h4 className="text-2xl">Services for Individuals</h4>
                        <p>
                            We provide clear and effective legal solutions for
                            individuals facing various legal challenges.
                        </p>
                    </div>

                    <div className="flex flex-col items-center justify-center gap-2 max-w-sm text-center">
                        <LawHammerIcon className="h-24 w-24" />
                        <h4 className="text-2xl">
                            Litigation and Dispute Resolution
                        </h4>
                        <p>
                            We fight for your rights and help you resolve
                            disputes efficiently and effectively.
                        </p>
                    </div>

                    <div className="flex flex-col items-center justify-center gap-2 max-w-sm text-center">
                        <BusinessBriefCaseIcon className="h-20 w-20" />
                        <h4 className="text-2xl">Business Law</h4>
                        <p>
                            Strategic legal counsel to help your business
                            thrive, from formation and contracts to navigating
                            complex regulations.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
