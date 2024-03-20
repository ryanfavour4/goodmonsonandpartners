import React from "react";
import LinkButton from "../../../components/links/LinkButton";

export default function MainCta() {
    return (
        <div className="py-14 md:py-20 bg-primary border-y-secondary border-y-[4px] text-light">
            <div className="wrapper flex items-center justify-center text-center flex-col gap-6">
                <h3 className="text-2xl md:text-5xl font-light md:!leading-[55px]">
                    We Help You With Quality Legal Lawyer
                </h3>

                <p className="max-w-2xl">
                    At Goodmonson & Partners Law Consultancy, we understand the
                    intricate complexities of the legal landscape that
                    businesses face in today's dynamic market environment.
                </p>

                <LinkButton to="/contact" variant="secondary">
                    Get Started
                </LinkButton>
            </div>
        </div>
    );
}
