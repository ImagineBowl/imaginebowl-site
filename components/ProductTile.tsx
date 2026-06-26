import Image from "next/image";
import Icon from "./Icon";
import { Product } from "@/lib/products";

interface ProductTileProps {
  product: Product;
  size?: "sm" | "md" | "lg";
}

const SIZES = {
  sm: { box: "h-12 w-12 rounded-lg", icon: "text-[24px]", px: 48 },
  md: { box: "h-16 w-16 rounded-xl", icon: "text-[32px]", px: 64 },
  lg: { box: "h-24 w-24 rounded-2xl", icon: "text-[48px]", px: 96 },
};

export default function ProductTile({ product, size = "md" }: ProductTileProps) {
  const s = SIZES[size];

  if (product.iconImage) {
    return (
      <span
        className={`relative shrink-0 overflow-hidden shadow-lg ring-1 ring-border-subtle ${s.box}`}
      >
        <Image
          src={product.iconImage}
          alt={`${product.name} icon`}
          width={s.px}
          height={s.px}
          className="h-full w-full object-cover"
          priority={product.featured === true && size === "lg"}
        />
      </span>
    );
  }

  return (
    <span
      className={`grid place-items-center shrink-0 bg-gradient-to-br ${product.accent} text-on-primary shadow-lg ${s.box}`}
    >
      <Icon name={product.icon} className={s.icon} filled />
    </span>
  );
}
