import CruzIcon from "@/app/components/icons/cruz";
import { ReactNode } from "react";

type BotaoProps = {
    onClick?: () => void;
    size?: "large";
    children: ReactNode;
    colorsParam: "dark" | "medium" | "light";
    weight: "400" | "500" | "600";
};

export const Button = ({
    children,
    size,
    colorsParam,
    onClick,
    weight,
}: BotaoProps) => {
    const classes = {
        base: "flex flex-row items-center w-fit h-fit text-sm rounded-md py-2 px-4 gap-2 cursor-pointer font-inter",
        medium: "gap-4 py-3 px-7 text-base",
        large: "rounded-xl py-4.5 px-8 gap-5 text-base",
    };

    const colors = {
        dark: "bg-[#091426] text-white",
        medium: "bg-[#38BDF8] text-white",
        light: "bg-[#8ED5FF] text-[#00354A]",
    };

    const weightFont = {
        "400": "font-medium",
        "500": "font-semibold",
        "600": "font-bold",
    };

    return (
        <button
            className={`${classes.base} ${size === "large" ? classes.large : ""} ${colors[colorsParam]} ${weightFont[weight]}`}
            onClick={onClick}
        >
            <CruzIcon
                variant={colorsParam === "dark" ? "light" : "dark"}
                size={size === "large" ? 12 : 8}
            />
            {children}
        </button>
    );
};
