import AboutDesc from "./about-desc/AboutDesc";
import Hero from "./hero/Hero";
import MainCta from "./main-cta/MainCta";
import ServicesDesc from "./services-desc/ServicesDesc";
import SuccessListArea from "./success-list-area/SuccessListArea";

function Home() {
    return (
        <div>
            <Hero />
            <AboutDesc />
            <ServicesDesc />
            <MainCta />
            <SuccessListArea />
        </div>
    );
}

export default Home;
