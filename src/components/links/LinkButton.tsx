import React, { AnchorHTMLAttributes } from "react";
import { Link } from "react-router-dom";

interface AnchorProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
    className?: string;
    to: string;
}

const LinkButton: React.FC<AnchorProps> = ({
    className = "",
    children,
    to,
    ...props
}) => {
    return (
        <Link
            to={to}
            className={`${className} text-center font-title inline-flex items-center rounded-sm justify-center p-2 min-w-[200px] gap-2 hover:opacity-90 hover:gap-3 text-white font-medium bg-primary active:scale-95`}
            {...props}
        >
            {children}
        </Link>
    );
};

export default LinkButton;
