"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import BrandLogo from "./BrandLogo";
import Icon from "./Icon";
import ThemeToggle from "./ThemeToggle";
import { CONTACT_EMAIL, GITHUB_ORG } from "@/lib/products";

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
        <BrandLogo size="md" />

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

        <div className="flex items-center gap-2.5">
          <ThemeToggle className="hidden md:flex" />
          <a
            href={`mailto:${CONTACT_EMAIL}`}
            className="hidden md:inline-block bg-primary text-on-primary px-5 py-2 rounded-full text-sm font-semibold hover:brightness-110 active:scale-[0.98] transition-all duration-200 whitespace-nowrap"
          >
            Get in touch
          </a>
          <ThemeToggle className="md:hidden" />
          <button
            type="button"
            aria-label="Toggle menu"
            className="md:hidden flex items-center justify-center h-9 w-9 rounded-full text-on-surface hover:bg-on-surface/[0.06] transition-colors"
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
            href={`mailto:${CONTACT_EMAIL}`}
            className="bg-primary text-on-primary px-6 py-3 rounded-full font-semibold text-center hover:brightness-110 transition-all"
          >
            Get in touch
          </a>
        </div>
      )}
    </header>
  );
}
