import Icon from "./Icon";
import { Product } from "@/lib/products";

interface ProductTileProps {
  product: Product;
  size?: "sm" | "md" | "lg";
}

const SIZES = {
  sm: { box: "h-12 w-12 rounded-lg", icon: "text-[24px]" },
  md: { box: "h-16 w-16 rounded-xl", icon: "text-[32px]" },
  lg: { box: "h-24 w-24 rounded-2xl", icon: "text-[48px]" },
};

export default function ProductTile({ product, size = "md" }: ProductTileProps) {
  const s = SIZES[size];
  return (
    <span
      className={`grid place-items-center shrink-0 bg-gradient-to-br ${product.accent} text-on-primary shadow-lg ${s.box}`}
    >
      <Icon name={product.icon} className={s.icon} filled />
    </span>
  );
}
