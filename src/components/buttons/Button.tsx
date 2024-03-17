import React, { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string;
}

const Button: React.FC<ButtonProps> = ({
    className = "",
    children,
    ...props
}) => {
    return (
        <button
            className={`${className} text-center inline-flex items-center justify-center p-3 rounded gap-2 hover:opacity-80 hover:gap-3 text-dark font-[500] bg-gold hover:bg-gold`}
            {...props}
        >
            {children}
        </button>
    );
};

export default Button;
