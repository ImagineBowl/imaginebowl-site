import { CSSProperties } from "react";

interface IconProps {
  name: string;
  className?: string;
  filled?: boolean;
  style?: CSSProperties;
}

export default function Icon({ name, className, filled, style }: IconProps) {
  return (
    <span
      className={`material-symbols-outlined ${className ?? ""}`}
      style={filled ? { fontVariationSettings: "'FILL' 1", ...style } : style}
      aria-hidden="true"
    >
      {name}
    </span>
  );
}
