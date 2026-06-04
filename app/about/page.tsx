import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Icon from "@/components/Icon";
import Reveal from "@/components/Reveal";
import { CONTACT_EMAIL, GITHUB_ORG } from "@/lib/products";

export const metadata: Metadata = {
  title: "About",
  description:
    "ImagineBowl is an independent software studio building private, local-first, AI-powered software.",
};

const VALUES = [
  {
    icon: "lock",
    title: "Privacy",
    body: "Your data belongs to you. We build software that processes everything on your device, so your information never touches a server without your explicit permission.",
  },
  {
    icon: "architecture",
    title: "Craft",
    body: "We believe in the precision of native tools. Our apps are optimized for speed, low memory use, and the tactile feel of high-performance engineering.",
  },
  {
    icon: "code_blocks",
    title: "Open Source",
    body: "Transparency creates trust. By building in the open, we keep our work auditable and our ecosystem resilient for everyone.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="max-w-container-max mx-auto px-gutter pt-24 mb-section-gap">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter items-center">
          <Reveal className="lg:col-span-7">
            <span className="font-mono-label text-mono-label text-primary bg-primary/10 px-3 py-1 rounded-full uppercase tracking-widest mb-6 inline-block">
              Our Story
            </span>
            <h1 className="font-display-hero-mobile md:font-display-hero text-display-hero-mobile md:text-display-hero mb-8 text-on-surface">
              An indie studio for local-first AI.
            </h1>
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl">
              ImagineBowl started with a simple belief: the tools we rely on
              shouldn&apos;t compromise our most private thoughts and data.
              We&apos;re building a generation of software where privacy
              isn&apos;t a feature — it&apos;s the core architecture.
            </p>
          </Reveal>
          <Reveal className="lg:col-span-5" delay={150}>
            <div className="relative">
              <div className="aspect-square rounded-2xl overflow-hidden bg-white shadow-lg ring-1 ring-border-subtle grid place-items-center p-16">
                <Image
                  src="/logo.png"
                  alt="ImagineBowl"
                  width={320}
                  height={320}
                  className="w-full h-full object-contain p-4"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-surface-container border border-border-subtle p-6 rounded-xl shadow-2xl hidden md:block">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                    <Icon name="verified_user" className="text-primary" />
                  </div>
                  <div>
                    <div className="text-on-surface font-bold">100% Private</div>
                    <div className="text-text-muted text-sm">
                      Local-only processing
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Values */}
      <section className="bg-surface-container-lowest py-section-gap border-y border-border-subtle">
        <div className="max-w-container-max mx-auto px-gutter">
          <Reveal className="text-center mb-24">
            <h2 className="font-headline-lg text-headline-lg text-on-surface mb-4">
              What we believe
            </h2>
            <p className="text-on-surface-variant max-w-xl mx-auto">
              Foundational principles that guide every line of code we ship.
            </p>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {VALUES.map((v, i) => (
              <Reveal
                key={v.title}
                delay={i * 100}
                className="group border border-border-subtle p-10 rounded-2xl hover:border-primary transition-all duration-300 relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-100 transition-opacity">
                  <Icon name={v.icon} className="text-primary text-6xl" />
                </div>
                <div className="relative z-10">
                  <div className="text-primary font-mono-label mb-6">
                    0{i + 1}
                  </div>
                  <h3 className="font-headline-md text-headline-md text-on-surface mb-4">
                    {v.title}
                  </h3>
                  <p className="text-on-surface-variant">{v.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-container-max mx-auto px-gutter py-section-gap">
        <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-surface-container-lowest to-surface-container border border-border-subtle p-12 md:p-24 text-center">
          <div className="relative z-10 max-w-2xl mx-auto">
            <h2 className="font-display-hero-mobile md:font-display-hero text-display-hero-mobile md:text-display-hero text-on-surface mb-8">
              Let&apos;s build something private.
            </h2>
            <p className="text-body-lg text-on-surface-variant mb-12">
              Whether you&apos;re a developer, a privacy advocate, or just
              curious about our mission, we&apos;d love to hear from you.
            </p>
            <div className="flex flex-col md:flex-row gap-4 justify-center">
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="bg-primary text-on-primary font-bold px-10 py-5 rounded-xl hover:scale-105 hover:glow-blue transition-all duration-300"
              >
                Get in touch
              </a>
              <a
                href={GITHUB_ORG}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-transparent border border-border-subtle text-on-surface font-bold px-10 py-5 rounded-xl hover-muted hover:border-primary transition-all duration-300 inline-flex items-center justify-center gap-2"
              >
                <Icon name="code" />
                Explore the code
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
