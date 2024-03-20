import React, { AnchorHTMLAttributes } from "react";
import { Link } from "react-router-dom";

interface AnchorProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
    className?: string;
    to: string;
    variant?: "primary" | "secondary";
}

const LinkButton: React.FC<AnchorProps> = ({
    className = "",
    children,
    variant = "primary",
    to,
    ...props
}) => {
    return (
        <Link
            to={to}
            className={`${className} text-center font-title inline-flex items-center rounded-sm justify-center p-2 min-w-[200px] gap-2 hover:opacity-90 hover:gap-3 text-white font-medium active:scale-95 
            ${variant === "primary" ? "bg-primary" : "bg-secondary"}`}
            {...props}
        >
            {children}
        </Link>
    );
};

export default LinkButton;
