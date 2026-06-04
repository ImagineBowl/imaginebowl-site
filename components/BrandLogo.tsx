import Image from "next/image";
import Link from "next/link";

type LogoSize = "sm" | "md" | "lg";

const SIZES: Record<LogoSize, { box: string; px: number; pad: string }> = {
  sm: { box: "h-8 w-8 rounded-lg", px: 32, pad: "p-1" },
  md: { box: "h-9 w-9 rounded-xl", px: 36, pad: "p-1" },
  lg: { box: "h-12 w-12 rounded-2xl", px: 48, pad: "p-1.5" },
};

interface BrandLogoProps {
  size?: LogoSize;
  showWordmark?: boolean;
  href?: string;
  className?: string;
}

export default function BrandLogo({
  size = "md",
  showWordmark = true,
  href = "/",
  className = "",
}: BrandLogoProps) {
  const s = SIZES[size];

  const mark = (
    <span
      className={`relative shrink-0 overflow-hidden bg-white shadow-lg ring-1 ring-border-subtle grid place-items-center group-hover:scale-110 transition-transform duration-300 ${s.box}`}
    >
      <Image
        src="/logo.png"
        alt="ImagineBowl"
        width={s.px}
        height={s.px}
        className={`h-full w-full object-contain ${s.pad}`}
        priority={size === "md"}
      />
    </span>
  );

  const content = (
    <>
      {mark}
      {showWordmark && (
        <span className="font-headline-md text-headline-md font-bold text-on-surface">
          ImagineBowl
        </span>
      )}
    </>
  );

  const baseClass = `flex items-center gap-3 group cursor-pointer ${className}`;

  if (href) {
    return (
      <Link href={href} className={baseClass}>
        {content}
      </Link>
    );
  }

  return <div className={baseClass}>{content}</div>;
}
