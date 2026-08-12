import { ArrowRight } from "lucide-react";
import AddIcon from "@/app/components/icons/add"; // ajuste o caminho conforme seu projeto

type ButtonProps = {
  children: React.ReactNode;
  size?: "large" | "big";
  colorsParam: "dark" | "medium" | "light";
  weight: "400" | "500" | "600";
  onClick?: () => void;
  iconType?: "add" | "arrow" | "none";
  iconPosition?: "left" | "right";
  space?: "type_space" | "type_space_medium" | "type_space_large";
};

export const Button = ({
  children,
  size,
  colorsParam,
  onClick,
  weight,  
  iconType = "none",
  iconPosition = "right",
}: ButtonProps) => {
  const classes = {
    base: "flex flex-row items-center w-fit h-fit text-sm rounded-md py-2 px-4 gap-2 cursor-pointer font-inter",
    medium: "gap-4 py-3 px-7 text-base",
    large: "rounded-xl py-4.5 px-8 gap-5 text-base",
    big: " w-full justify-center rounded-2xl py-3.5 px-8",
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

  // decide qual ícone renderizar, sem duplicar o <button>
  const icon =
    iconType === "add" ? (
      <AddIcon
        variant={colorsParam === "dark" ? "light" : "dark"}
        size={size === "large" ? 12 : 8}
      />
    ) : iconType === "arrow" ? (
      <ArrowRight size={18} />
    ) : null;

  return (
    <button
      className={`${classes.base} ${size ? classes[size] : ""} ${colors[colorsParam]} ${weightFont[weight]}`}
      onClick={onClick}
    >
      {iconPosition === "left" && icon}
      {children}
      {iconPosition === "right" && icon}
    </button>
  );
};