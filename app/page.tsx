import Link from "next/link";
import Icon from "@/components/Icon";
import Reveal from "@/components/Reveal";
import ProductCard from "@/components/ProductCard";
import { GITHUB_ORG, products } from "@/lib/products";

const PHILOSOPHY = [
  {
    icon: "shield",
    title: "Privacy-first",
    body: "Local AI processing ensures your sensitive data never leaves your hardware. No trackers, no telemetry.",
  },
  {
    icon: "bolt",
    title: "Native & Fast",
    body: "Built with native tooling for maximum performance. No bloated wrappers, just raw speed.",
  },
  {
    icon: "code",
    title: "Open Source",
    body: "Transparency breeds trust. Most of our core engines are open-source and available on GitHub.",
  },
  {
    icon: "auto_awesome",
    title: "Crafted UX",
    body: "Every pixel is intentional. We spend months refining micro-interactions so you don't have to.",
  },
];

export default function HomePage() {
  const featured = products.filter((p) => p.featured);
  const rest = products.filter((p) => !p.featured).slice(0, 2);
  const homeGrid = [...featured, ...rest];

  return (
    <>
      {/* Hero */}
      <section className="relative pt-24 pb-section-gap px-gutter flex flex-col items-center text-center overflow-hidden">
        <div className="glow-orb top-[-100px] left-[-100px]" />
        <div
          className="glow-orb bottom-[-200px] right-[-100px]"
          style={{
            animationDelay: "-5s",
            background:
              "radial-gradient(circle, rgba(0, 198, 255, 0.1) 0%, rgba(0, 198, 255, 0) 70%)",
          }}
        />
        <Reveal className="max-w-4xl">
          <h1 className="font-display-hero text-display-hero-mobile md:text-display-hero mb-6 text-on-surface">
            We build AI-powered tools,{" "}
            <span className="text-primary">crafted with care.</span>
          </h1>
          <p className="font-body-lg text-body-lg text-text-muted mb-10 max-w-2xl mx-auto">
            An independent software studio making private, local-first apps that
            respect your intelligence and your data.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/products"
              className="w-full sm:w-auto bg-primary text-on-primary px-8 py-4 rounded-xl font-bold text-lg hover:scale-105 hover:glow-blue transition-all duration-200 btn-pulse"
            >
              Explore Products
            </Link>
            <a
              href={GITHUB_ORG}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto bg-transparent border border-border-subtle text-on-surface px-8 py-4 rounded-xl font-bold text-lg hover:bg-white/5 transition-all duration-200"
            >
              View on GitHub
            </a>
          </div>
        </Reveal>

        <Reveal className="mt-24 py-6 border-y border-border-subtle w-full max-w-container-max">
          <p className="font-mono-label text-mono-label text-text-muted uppercase tracking-widest">
            {products.length} products · iOS · macOS · Web · Open source
          </p>
        </Reveal>
      </section>

      {/* Featured products */}
      <section className="py-section-gap px-gutter max-w-container-max mx-auto">
        <div className="flex justify-between items-end mb-12">
          <Reveal>
            <h2 className="font-headline-lg text-headline-lg mb-2 text-on-surface">
              Featured Software
            </h2>
            <p className="text-text-muted">Tools that feel native, fast, and light.</p>
          </Reveal>
          <Link
            href="/products"
            className="hidden md:flex items-center text-primary hover:underline group"
          >
            View all tools
            <Icon
              name="arrow_forward"
              className="ml-1 group-hover:translate-x-1 transition-transform"
            />
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-gutter">
          {homeGrid.map((p) => (
            <Reveal key={p.slug} className="h-full">
              <ProductCard product={p} />
            </Reveal>
          ))}
        </div>
      </section>

      {/* Philosophy */}
      <section className="py-section-gap px-gutter bg-surface-container-lowest">
        <div className="max-w-container-max mx-auto">
          <Reveal className="text-center mb-16">
            <h2 className="font-headline-lg text-headline-lg mb-4 text-on-surface">
              The ImagineBowl Philosophy
            </h2>
            <p className="text-text-muted max-w-xl mx-auto">
              We don&apos;t just write code. We obsess over the interaction
              between human and machine.
            </p>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-gutter">
            {PHILOSOPHY.map((item, i) => (
              <Reveal
                key={item.title}
                delay={i * 100}
                className="group p-6 rounded-2xl border border-transparent hover:border-border-subtle transition-all"
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-6 text-primary group-hover:scale-110 transition-transform">
                  <Icon name={item.icon} filled />
                </div>
                <h4 className="font-headline-md text-headline-md mb-3 text-on-surface">
                  {item.title}
                </h4>
                <p className="text-text-muted text-sm leading-relaxed">
                  {item.body}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-section-gap px-gutter relative overflow-hidden">
        <div className="max-w-4xl mx-auto bg-primary rounded-[2rem] p-12 text-center relative overflow-hidden group">
          <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-10 transition-opacity" />
          <h2 className="font-display-hero-mobile md:text-headline-lg font-bold mb-6 text-on-primary relative z-10">
            Built in the open. Made to last.
          </h2>
          <p className="text-on-primary-container text-lg mb-10 opacity-80 relative z-10">
            Explore our tools, follow along on GitHub, and help shape what we
            build next.
          </p>
          <a
            href={GITHUB_ORG}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-on-primary text-primary px-10 py-4 rounded-xl font-extrabold text-xl hover:scale-105 transition-all duration-300 relative z-10"
          >
            Star us on GitHub
          </a>
        </div>
      </section>
    </>
  );
}
