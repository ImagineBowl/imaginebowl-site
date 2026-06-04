import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Icon from "@/components/Icon";
import ProductTile from "@/components/ProductTile";
import StatusBadge from "@/components/StatusBadge";
import { getProduct, products } from "@/lib/products";

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const product = getProduct(params.slug);
  if (!product) return { title: "Not found" };
  return {
    title: product.name,
    description: product.tagline,
  };
}

export default function ProductDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const product = getProduct(params.slug);
  if (!product) notFound();

  return (
    <article className="pb-section-gap">
      {/* Hero */}
      <section className="relative pt-24 pb-16 px-gutter overflow-hidden">
        <div className="glow-orb top-[-150px] right-[-50px]" />
        <div className="max-w-container-max mx-auto">
          <Link
            href="/products"
            className="inline-flex items-center text-text-muted hover:text-on-surface transition-colors mb-10 group"
          >
            <Icon
              name="arrow_back"
              className="mr-1 group-hover:-translate-x-1 transition-transform"
            />
            All products
          </Link>

          <div className="flex flex-col md:flex-row md:items-center gap-8">
            <ProductTile product={product} size="lg" />
            <div className="flex-1">
              <div className="flex items-center gap-4 mb-4">
                <StatusBadge status={product.status} />
                <div className="flex flex-wrap gap-2">
                  {product.platforms.map((p) => (
                    <span
                      key={p}
                      className="font-mono-label text-mono-label uppercase tracking-widest text-on-surface-variant bg-white/5 px-2.5 py-1 rounded-full"
                    >
                      {p}
                    </span>
                  ))}
                </div>
              </div>
              <h1 className="font-display-hero-mobile md:text-display-hero font-extrabold text-on-surface mb-4">
                {product.name}
              </h1>
              <p className="font-body-lg text-body-lg text-text-muted max-w-2xl">
                {product.tagline}
              </p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 mt-10">
            {product.downloadLabel && (
              <a
                href={product.downloadUrl ?? product.repo}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-primary text-on-primary px-8 py-4 rounded-xl font-bold hover:scale-105 hover:glow-blue transition-all duration-200 text-center"
              >
                {product.downloadLabel}
              </a>
            )}
            <a
              href={product.repo}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-transparent border border-border-subtle text-on-surface px-8 py-4 rounded-xl font-bold hover:bg-white/5 hover:border-primary transition-all duration-200 text-center inline-flex items-center justify-center gap-2"
            >
              <Icon name="code" />
              View on GitHub
            </a>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="px-gutter mb-section-gap">
        <div className="max-w-container-max mx-auto">
          <div className="rounded-3xl border border-border-subtle bg-surface-container p-10 md:p-16">
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-3xl">
              {product.description}
            </p>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="px-gutter mb-section-gap">
        <div className="max-w-container-max mx-auto">
          <h2 className="font-headline-lg text-headline-lg text-on-surface mb-12">
            Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-gutter">
            {product.features.map((f) => (
              <div
                key={f.title}
                className="group border border-border-subtle p-8 rounded-2xl hover:border-primary/50 transition-colors"
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-6 text-primary group-hover:scale-110 transition-transform">
                  <Icon name={f.icon} filled />
                </div>
                <h3 className="font-headline-md text-headline-md text-on-surface mb-3">
                  {f.title}
                </h3>
                <p className="text-text-muted leading-relaxed">{f.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="px-gutter mb-section-gap">
        <div className="max-w-container-max mx-auto">
          <h2 className="font-headline-lg text-headline-lg text-on-surface mb-12">
            How it works
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-gutter">
            {product.howItWorks.map((step, i) => (
              <div
                key={i}
                className="relative border border-border-subtle p-8 rounded-2xl bg-surface-container-lowest"
              >
                <div className="font-mono-label text-mono-label text-primary mb-4">
                  0{i + 1}
                </div>
                <p className="text-on-surface-variant leading-relaxed">{step}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech */}
      <section className="px-gutter">
        <div className="max-w-container-max mx-auto flex flex-col md:flex-row md:items-center justify-between gap-6 border-t border-border-subtle pt-10">
          <div className="flex flex-wrap gap-3">
            {product.tech.map((t) => (
              <span
                key={t}
                className="font-mono-label text-mono-label text-on-surface-variant bg-white/5 px-3 py-1.5 rounded-full"
              >
                {t}
              </span>
            ))}
          </div>
          <Link
            href="/products"
            className="text-primary hover:underline inline-flex items-center group"
          >
            <Icon
              name="arrow_back"
              className="mr-1 group-hover:-translate-x-1 transition-transform"
            />
            Back to all products
          </Link>
        </div>
      </section>
    </article>
  );
}
