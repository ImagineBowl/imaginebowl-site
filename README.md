# ImagineBowl

Marketing & showcase site for **ImagineBowl** — an independent software studio
building private, local-first, AI-powered tools for iOS, macOS, and the web.

Built with **Next.js 14 (App Router)** + **TypeScript** + **Tailwind CSS**, from
UI designs generated in Google Stitch.

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the dev server |
| `npm run build` | Production build |
| `npm run start` | Run the production build |
| `npm run lint` | Lint with Next.js ESLint |

## Project structure

```
app/
  layout.tsx              Root layout (fonts, navbar, footer, metadata)
  page.tsx                Home
  products/page.tsx       Products listing (filterable)
  products/[slug]/page.tsx Data-driven product detail
  about/page.tsx          About
  globals.css             Design tokens + Stitch animations
components/                Navbar, Footer, ProductCard, StatusBadge, etc.
lib/products.ts            Single source of truth for all products
_stitch-source/            Original Stitch exports + decoded HTML (reference only)
```

## Adding or editing a product

Everything is driven by `lib/products.ts`. Add an entry to the `products`
array and a card + detail page are generated automatically.

```ts
{
  slug: "my-app",
  name: "My App",
  tagline: "One-line pitch.",
  description: "Longer overview paragraph.",
  platforms: ["iOS"],
  tags: ["iOS", "AI"],
  status: "Coming Soon",   // "Live" | "Beta" | "Coming Soon"
  icon: "rocket_launch",    // any Material Symbols name
  accent: "from-[#4b8eff] to-[#adc6ff]",
  repo: "https://github.com/ImagineBowl/MyApp",
  downloadLabel: "App Store",
  downloadUrl: "https://apps.apple.com/...",
  features: [{ icon: "bolt", title: "Fast", description: "..." }],
  howItWorks: ["Step one", "Step two"],
  tech: ["SwiftUI"],
  featured: true,           // show on the home grid
}
```

### Studio logo

| File | Use |
| --- | --- |
| `public/logo.png` | Official studio mark (navbar, footer, About, Open Graph) |
| `public/favicon-32.png`, `public/apple-touch-icon.png` | Browser / home screen |

Regenerate from the source asset: `python3 scripts/generate-logos.py`

### Product / brand icons

Set `iconImage: "/icons/your-app.png"` on a product in `lib/products.ts`. Drop
PNGs in `public/icons/`. Without `iconImage`, tiles use gradient + Material
Symbols.

## Deployment (Vercel + imagine-bowl.com)

1. Push this repo to GitHub.
2. Import it at [vercel.com/new](https://vercel.com/new) (framework auto-detected).
3. Add the custom domain `imagine-bowl.com` in **Project → Settings → Domains**
   and point your DNS as instructed.

Every push to `main` redeploys automatically.
