import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ThemeScript from "@/components/ThemeScript";
import { SITE_URL } from "@/lib/site";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["500"],
  variable: "--font-jetbrains",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "ImagineBowl — AI-powered tools, crafted with care",
    template: "%s — ImagineBowl",
  },
  description:
    "An independent software studio building private, local-first, AI-powered apps for iOS, macOS, and the web.",
  openGraph: {
    title: "ImagineBowl",
    description:
      "Private, local-first, AI-powered tools for iOS, macOS, and the web.",
    url: SITE_URL,
    siteName: "ImagineBowl",
    type: "website",
    images: [{ url: "/logo.png", width: 1024, height: 1024, alt: "ImagineBowl" }],
  },
  icons: {
    icon: [{ url: "/favicon-32.png", sizes: "32x32", type: "image/png" }],
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrains.variable}`} suppressHydrationWarning>
      <head>
        <ThemeScript />
      </head>
      <body className="font-body-md text-body-md bg-background text-on-surface overflow-x-hidden selection:bg-primary selection:text-on-primary">
        <Navbar />
        <main className="pt-16">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
