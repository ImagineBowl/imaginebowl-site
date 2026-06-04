import Link from "next/link";
import BrandLogo from "./BrandLogo";
import Icon from "./Icon";
import { CONTACT_EMAIL, GITHUB_ORG, products } from "@/lib/products";

export default function Footer() {
  const topProducts = products.slice(0, 4);

  return (
    <footer className="w-full py-section-gap border-t border-border-subtle bg-surface">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-gutter max-w-container-max mx-auto px-gutter">
        <div className="col-span-1">
          <BrandLogo size="sm" className="mb-4" />
          <p className="text-text-muted text-sm leading-relaxed mb-6">
            An independent software studio building private, local-first,
            AI-powered tools.
          </p>
          <div className="flex space-x-4">
            <a
              className="text-text-muted hover:text-primary transition-colors"
              href={GITHUB_ORG}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <Icon name="code" />
            </a>
            <a
              className="text-text-muted hover:text-primary transition-colors"
              href={`mailto:${CONTACT_EMAIL}`}
              aria-label="Email"
            >
              <Icon name="mail" />
            </a>
          </div>
        </div>

        <div className="flex flex-col space-y-4">
          <h4 className="text-on-surface font-bold text-sm uppercase tracking-widest mb-2">
            Products
          </h4>
          {topProducts.map((p) => (
            <Link
              key={p.slug}
              className="text-text-muted hover:text-on-surface transition-colors"
              href={`/products/${p.slug}`}
            >
              {p.name}
            </Link>
          ))}
        </div>

        <div className="flex flex-col space-y-4">
          <h4 className="text-on-surface font-bold text-sm uppercase tracking-widest mb-2">
            Company
          </h4>
          <Link
            className="text-text-muted hover:text-on-surface transition-colors"
            href="/about"
          >
            About
          </Link>
          <Link
            className="text-text-muted hover:text-on-surface transition-colors"
            href="/products"
          >
            All products
          </Link>
        </div>

        <div className="flex flex-col space-y-4">
          <h4 className="text-on-surface font-bold text-sm uppercase tracking-widest mb-2">
            Connect
          </h4>
          <a
            className="text-text-muted hover:text-on-surface transition-colors"
            href={GITHUB_ORG}
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
          <a
            className="text-text-muted hover:text-on-surface transition-colors"
            href={`mailto:${CONTACT_EMAIL}`}
          >
            Contact
          </a>
        </div>
      </div>

      <div className="max-w-container-max mx-auto px-gutter mt-24 pt-8 border-t border-border-subtle flex flex-col md:flex-row justify-between items-center text-text-muted text-sm">
        <div>© {new Date().getFullYear()} ImagineBowl. All rights reserved.</div>
        <div className="mt-4 md:mt-0">Local-first · Private-always · Open source</div>
      </div>
    </footer>
  );
}
