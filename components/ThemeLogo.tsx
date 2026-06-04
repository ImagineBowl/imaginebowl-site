"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export function useIsDarkTheme() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    const root = document.documentElement;
    const sync = () => setDark(root.classList.contains("dark"));
    sync();
    const observer = new MutationObserver(sync);
    observer.observe(root, { attributes: true, attributeFilter: ["class"] });
    return () => observer.disconnect();
  }, []);

  return dark;
}

interface ThemeLogoProps {
  width: number;
  height: number;
  className?: string;
  priority?: boolean;
  /** Wraps the image with a tile background that matches the asset. */
  containerClassName?: string;
}

export default function ThemeLogo({
  width,
  height,
  className = "",
  priority = false,
  containerClassName,
}: ThemeLogoProps) {
  const dark = useIsDarkTheme();
  const src = dark ? "/logo-light.png" : "/logo.png";

  const img = (
    <Image
      src={src}
      alt="ImagineBowl"
      width={width}
      height={height}
      className={className}
      priority={priority}
    />
  );

  if (!containerClassName) return img;

  return (
    <span
      className={`${containerClassName} ${
        dark ? "bg-black" : "bg-white"
      }`}
    >
      {img}
    </span>
  );
}
