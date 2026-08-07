import { ReactNode } from "react";

type IconLupaProps = {
    stroke?: string;
    size?: number;
    className?: string;
    strokeWidth?: number;
};

export const IconLupa = ({
    stroke = "currentColor",
    size = 16,
    className = "",
    strokeWidth = 2,
}: IconLupaProps) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={size}
            height={size}
            viewBox="0 0 24 24"
            fill="none"
            stroke={stroke}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            className={className}
        >
            <circle cx="11" cy="11" r="8" />
            <path d="m21 21-4.3-4.3" />
        </svg>
    );
};

type CampoPesquisaProps = {
    placeholder?: string;
    onClick?: () => void;
    onChange?: (value: string) => void;
    value?: string;
    colors_search: "dark" | "light";
    children?: ReactNode;
};

export const Searchlight = ({
    children,
    onClick,
    onChange,
    value,
    placeholder = "Pesquisar...",
    colors_search,
}: CampoPesquisaProps) => {
    const isDark = colors_search === "dark";

    const base =
        "flex items-center gap-2 w-full max-w-md h-[38px] px-4 rounded-sm border transition-colors";

    const colors = isDark
        ? "bg-[#131B2E] border-[#3E484F] focus-within:border-blue-500"
        : "bg-white border-[#C5C6CD] focus-within:border-blue-500";

    const textColor = isDark
        ? "text-slate-200 placeholder:text-slate-500"
        : "text-slate-900 placeholder:text-slate-500";

    const iconColor = isDark ? "#94a3b8" : "#64748b";

    return (
        <search className={`${base} ${colors}`} onClick={onClick}>
            <IconLupa stroke={iconColor} size={16} className="shrink-0" />
            <input
                type="text"
                value={value}
                placeholder={placeholder}
                onChange={(e) => onChange?.(e.target.value)}
                className={`w-full bg-transparent text-sm outline-none ${textColor}`}
            />
            {children}
        </search>
    );
};