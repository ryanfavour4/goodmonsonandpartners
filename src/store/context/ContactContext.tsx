// import axios from "axios";
import React, { createContext, useState } from "react";
import db from "../keys.json";
import emailjs from "@emailjs/browser";
import { formatDate, formatTime } from "../../utils/helper/dateFormatter";
import { toast } from "react-toastify";
import {
    ContactContextType,
    Props,
    ContactFormType,
} from "../../types/contact-context.types";

// ??______________________________________ CONTACT CONTEXT PROVIDER _________________________________________?? //
export const ContactContext = createContext<ContactContextType>(
    [] as unknown as ContactContextType
);

export const ContactProvider = ({ children }: Props) => {
    const [loading, setLoading] = useState(false);
    const handleSubmitContactForm = (
        formObject: ContactFormType,
        formRef: HTMLFormElement
    ) => {
        setLoading(true);
        const currentTimeStamp = new Date();
        const date = formatDate(currentTimeStamp);
        const time = formatTime(currentTimeStamp);
        const form = { ...formObject, date: date, time: time };

        // ??_______________________________ FORM SPREE _______________________________?? //
        // axios.post(db.FORM_SPREE_ENDPOINT, formObject)
        //   .then((response) => {
        //     console.log('Form submitted successfully');
        //   })
        //   .catch((error) => {
        //     console.error('Error submitting form:', error);
        //   });
        // ??______________________________________ EMAIL.JS _________________________________________?? //
        emailjs
            .send(
                db.EMAILJS_SERVICE_ID,
                db.EMAILJS_TEMPLATE_ID,
                form,
                db.EMAILJS_PUBLICKEY
            )
            .then((result) => {
                setLoading(false);
                console.log(result);
                toast.success("Your message has been sent successfully");
                Array.from(formRef.getElementsByTagName("textarea"))[0].value =
                    "";
                Array.from(formRef.getElementsByTagName("input")).forEach(
                    (inputs) => {
                        inputs.value = "";
                    }
                );
            })
            .catch((error) => {
                setLoading(false);
                console.log(error);
                toast.error("Error sending message");
            });
    };

    return (
        <ContactContext.Provider value={{ handleSubmitContactForm, loading }}>
            {children}
        </ContactContext.Provider>
    );
};
