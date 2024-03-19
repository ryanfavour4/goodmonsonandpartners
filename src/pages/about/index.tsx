import React from "react";
import AboutHero from "./about-hero/AboutHero";
import AboutDesc from "./about-desc/AboutDesc";
import WeHelp from "./wehelp-you-with/WeHelp";
import Hellopeople from "./hellopeople/Hellopeople";
import OurMissiontask from "./ourmission/OurMission";
import BestAwardcomponent from "./best-award/BestAward";
import Testimonialscomponent from "./testimonials/Testimonials";
export default function About() {
    return(
        <div>
        <AboutHero/>
        <AboutDesc/>
         <WeHelp/>
         <OurMissiontask/>
         <BestAwardcomponent/>
         <Testimonialscomponent/>
    </div>
    )
    
}
