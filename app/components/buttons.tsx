import { ArrowRight } from "lucide-react";
import AddIcon from "@/app/components/icons/add";
import { FaGoogle, FaGithub } from "react-icons/fa";
import { HtmlHTMLAttributes } from "react";

type ButtonProps = {
  children: React.ReactNode;
  size?: "large" | "big" | "medium" | "compact";
  colorsParam: "dark" | "medium" | "light";
  weight: "400" | "500" | "600";
  onClick?: () => void;
  iconType?: "add" | "arrow" | "google" | "github" | "none";
  iconPosition?: "left" | "right";
  borderColor?: "white" | "none";
};

export const Button = ({
  children,
  size,
  colorsParam,
  onClick,
  weight,
  iconType = "none",
  iconPosition = "right",
  borderColor = "none",
  ...rest
}: ButtonProps & HtmlHTMLAttributes<HTMLButtonElement>) => {
  const classes = {
    base: "flex flex-row items-center w-fit h-fit text-sm rounded-md py-3.5 px-6 gap-4 cursor-pointer font-inter",
    medium: "py-3 px-7 text-base",
    large: "rounded-xl py-4.5 px-8 gap-5 text-base",
    big: " w-full  rounded-2xl py-3.5 px-8",
    compact: "w-full justify-center rounded-xl py-1 px-2",
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

  const borderColors = {
    white: "border border-white",
  };

  const { className, ...restProps } = rest;

  // decide qual ícone renderizar, sem duplicar o <button>
  const icon =
    iconType === "add" ? (
      <AddIcon
        variant={colorsParam === "dark" ? "light" : "dark"}
        size={size === "large" ? 12 : 8}
      />
    ) : iconType === "arrow" ? (
      <ArrowRight size={18} />
    ) : iconType === "google" ? (
      <FaGoogle size={18} />
    ) : iconType === "github" ? (
      <FaGithub size={18} />
    ) : null;

  return (
    <button
      className={`${classes.base} ${size ? classes[size] : ""} ${colors[colorsParam]} ${weightFont[weight]} ${borderColor === "white" ? borderColors.white : ""} ${className || ""}`}
      onClick={onClick}
      {...restProps}
    >
      {iconPosition === "left" && icon}
      {children}
      {iconPosition === "right" && icon}
    </button>
  );
};
