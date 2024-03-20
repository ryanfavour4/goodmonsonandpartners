import React from "react";
import ContactHero from "./contact-hero/ContactHero";

function Contact() {
    return (
        <div>
            <ContactHero />
            <div className="py-10 text-center">
                <h2 className="font-bold text-xl">
                    Error While Generating Form
                </h2>
            </div>
        </div>
    );
}

export default Contact;
