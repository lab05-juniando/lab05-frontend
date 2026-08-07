// components/icons/Cruz.tsx
interface cruzIconProps {
  size?: number;
  thickness?: number;
  variant?: "dark" | "light";
  className?: string;
}

const COLORS = {
  dark: "#00354A",
  light: "#FFFFFF", 
};

export default function CruzIcon({
  size = 8.17,
  thickness = 1,
  variant = "dark",
  className,
}: cruzIconProps) {
  const color = COLORS[variant];

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 8.17 8.17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Barra vertical */}
      <rect x={(8.17 - thickness) / 2} y="0" width={thickness} height="8.17" fill={color} />
      {/* Barra horizontal */}
      <rect x="0" y={(8.17 - thickness) / 2} width="8.17" height={thickness} fill={color} />
    </svg>
  );
}