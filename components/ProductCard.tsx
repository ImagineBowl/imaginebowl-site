import Link from "next/link";
import Icon from "./Icon";
import ProductTile from "./ProductTile";
import StatusBadge from "./StatusBadge";
import { Product } from "@/lib/products";

export default function ProductCard({ product }: { product: Product }) {
  return (
    <Link
      href={`/products/${product.slug}`}
      className="group relative flex flex-col h-full overflow-hidden rounded-2xl border border-border-subtle bg-surface-container hover-lift p-8"
    >
      <div className="flex justify-between items-start mb-6">
        <ProductTile product={product} size="md" />
        <StatusBadge status={product.status} />
      </div>

      <h3 className="font-headline-md text-headline-md mb-2 text-on-surface">
        {product.name}
      </h3>
      <p className="text-text-muted text-body-md mb-6 flex-grow">
        {product.tagline}
      </p>

      <div className="flex items-center justify-between mt-auto">
        <div className="flex flex-wrap gap-2">
          {product.tags.map((t) => (
            <span
              key={t}
              className="font-mono-label text-mono-label uppercase tracking-widest text-on-surface-variant bg-white/5 px-2.5 py-1 rounded-full"
            >
              {t}
            </span>
          ))}
        </div>
        <span className="text-primary opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all">
          <Icon name="arrow_forward" />
        </span>
      </div>
    </Link>
  );
}
