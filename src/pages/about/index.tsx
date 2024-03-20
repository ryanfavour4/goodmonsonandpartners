import React from "react";
import AboutHero from "./about-hero/AboutHero";
import OurMission from "./our-mission/OurMission";
import MainCta from "../home/main-cta/MainCta";
import AboutDesc from "./about-desc/AboutDesc";
import AboutServices from "./about-services/AboutServices";

export default function About() {
    return (
        <div>
            <AboutHero />
            <AboutDesc />
            <AboutServices />
            <MainCta />
            <OurMission />
        </div>
    );
}
