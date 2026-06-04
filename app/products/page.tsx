import type { Metadata } from "next";
import ProductsGrid from "@/components/ProductsGrid";

export const metadata: Metadata = {
  title: "Products",
  description:
    "Explore ImagineBowl's lineup of private, local-first, AI-powered tools for iOS, macOS, and the web.",
};

export default function ProductsPage() {
  return (
    <section className="pt-24 pb-section-gap px-gutter max-w-container-max mx-auto">
      <div className="mb-12">
        <div className="inline-block bg-primary-container/10 border border-primary-container/20 px-3 py-1 rounded-full mb-6">
          <span className="font-mono-label text-mono-label text-primary uppercase tracking-widest">
            Our Software
          </span>
        </div>
        <h1 className="font-display-hero-mobile md:font-display-hero text-display-hero-mobile md:text-display-hero text-on-surface mb-4">
          Products
        </h1>
        <p className="font-body-lg text-body-lg text-text-muted max-w-2xl">
          A growing collection of tools built with the same obsession for
          privacy, speed, and craft. Filter by platform below.
        </p>
      </div>

      <ProductsGrid />
    </section>
  );
}
