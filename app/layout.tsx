import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

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
  metadataBase: new URL("https://imagine-bowl.com"),
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
    url: "https://imagine-bowl.com",
    siteName: "ImagineBowl",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`dark ${inter.variable} ${jetbrains.variable}`}>
      <head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&display=swap"
        />
      </head>
      <body className="font-body-md text-body-md bg-background text-on-surface overflow-x-hidden selection:bg-primary selection:text-on-primary">
        <Navbar />
        <main className="pt-16">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
