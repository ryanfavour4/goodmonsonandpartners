// Create the RootStore
import React, { ReactNode } from "react";
import { ContactProvider } from "./ContactContext";

type Props = {
  children: ReactNode;
};

export const RootStore = ({ children }: Props) => {
  return <ContactProvider>{children}</ContactProvider>;
};
