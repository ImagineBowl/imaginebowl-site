"use client";

import { useState } from "react";
import ProductCard from "./ProductCard";
import { Platform, platformFilters, products } from "@/lib/products";

export default function ProductsGrid() {
  const [filter, setFilter] = useState<"All" | Platform>("All");

  const visible =
    filter === "All"
      ? products
      : products.filter((p) => p.platforms.includes(filter));

  return (
    <>
      <div className="flex flex-wrap gap-3 mb-12" role="group" aria-label="Filter by platform">
        {platformFilters.map((f) => (
          <button
            key={f}
            type="button"
            aria-pressed={filter === f}
            onClick={() => setFilter(f)}
            className={
              filter === f
                ? "px-6 py-2 rounded-full bg-primary text-on-primary font-body-md font-bold transition-all"
                : "px-6 py-2 rounded-full border border-border-subtle text-on-surface-variant hover:border-primary/50 hover:text-on-surface transition-all font-body-md"
            }
          >
            {f}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-gutter">
        {visible.map((p) => (
          <ProductCard key={p.slug} product={p} />
        ))}
      </div>
    </>
  );
}
