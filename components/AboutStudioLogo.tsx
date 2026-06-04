"use client";

import ThemeLogo from "@/components/ThemeLogo";

export default function AboutStudioLogo() {
  return (
    <ThemeLogo
      width={320}
      height={320}
      className="w-full h-full object-contain"
      containerClassName="aspect-square rounded-2xl overflow-hidden shadow-lg ring-1 ring-border-subtle grid place-items-center p-12 w-full"
    />
  );
}
