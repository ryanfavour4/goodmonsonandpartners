import { ReactNode } from "react";

// ??______________________________________ CONTACT CONTEXT TYPES _________________________________________?? //
export type Props = {
    children: ReactNode;
};

export type ContactFormType = {
    name: string;
    email: string;
    number: string;
    message: string;
};

export type ContactContextType = {
    handleSubmitContactForm: (
        formObject: ContactFormType,
        formRef: HTMLFormElement
    ) => void;
    loading: boolean;
};
