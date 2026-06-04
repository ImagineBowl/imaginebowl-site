"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import Icon from "./Icon";
import { GITHUB_ORG } from "@/lib/products";

const LINKS = [
  { href: "/products", label: "Products" },
  { href: "/about", label: "About" },
  { href: GITHUB_ORG, label: "GitHub", external: true },
];

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  const isActive = (href: string) =>
    href === "/products"
      ? pathname.startsWith("/products")
      : pathname === href;

  return (
    <header className="fixed top-0 w-full z-50 glass-header">
      <nav className="flex justify-between items-center h-16 px-gutter max-w-container-max mx-auto">
        <Link href="/" className="flex items-center gap-3 group cursor-pointer">
          <span className="grid place-items-center h-9 w-9 rounded-xl bg-gradient-to-br from-primary to-[#7c5cff] text-on-primary group-hover:scale-110 transition-transform duration-300">
            <Icon name="blur_on" className="text-[20px]" filled />
          </span>
          <span className="font-headline-md text-headline-md font-bold text-on-surface">
            ImagineBowl
          </span>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {LINKS.map((l) =>
            l.external ? (
              <a
                key={l.href}
                href={l.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-on-surface-variant hover:text-primary transition-colors font-body-md"
              >
                {l.label}
              </a>
            ) : (
              <Link
                key={l.href}
                href={l.href}
                className={
                  isActive(l.href)
                    ? "text-primary font-bold border-b-2 border-primary pb-1 font-body-md"
                    : "text-on-surface-variant hover:text-primary transition-colors font-body-md"
                }
              >
                {l.label}
              </Link>
            )
          )}
        </div>

        <div className="flex items-center gap-2">
          <a
            href={`mailto:hello@imagine-bowl.com`}
            className="hidden md:inline-block bg-primary text-on-primary px-6 py-2 rounded-full font-bold hover:scale-105 transition-all duration-200 btn-pulse"
          >
            Get in touch
          </a>
          <button
            type="button"
            aria-label="Toggle menu"
            className="md:hidden text-on-surface p-2"
            onClick={() => setOpen((v) => !v)}
          >
            <Icon name={open ? "close" : "menu"} />
          </button>
        </div>
      </nav>

      {open && (
        <div className="md:hidden glass-header border-t border-border-subtle px-gutter py-4 flex flex-col gap-4">
          {LINKS.map((l) =>
            l.external ? (
              <a
                key={l.href}
                href={l.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-on-surface-variant hover:text-primary transition-colors font-body-md"
              >
                {l.label}
              </a>
            ) : (
              <Link
                key={l.href}
                href={l.href}
                className={
                  isActive(l.href)
                    ? "text-primary font-bold font-body-md"
                    : "text-on-surface-variant hover:text-primary transition-colors font-body-md"
                }
              >
                {l.label}
              </Link>
            )
          )}
          <a
            href="mailto:hello@imagine-bowl.com"
            className="bg-primary text-on-primary px-6 py-3 rounded-full font-bold text-center"
          >
            Get in touch
          </a>
        </div>
      )}
    </header>
  );
}
