import type { Metadata, Viewport } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

const siteUrl = "https://tintinrazavian.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Tintin Razavian — Senior Product Manager & AI Strategist",
    template: "%s · Tintin Razavian",
  },
  description:
    "Senior Product Manager, Technology Consultant, and AI Strategist building scalable products across AI, IoT, Cloud Connectivity, and Digital Transformation.",
  keywords: [
    "Product Manager",
    "AI Strategy",
    "Cloud Connectivity",
    "IoT",
    "Digital Transformation",
    "Technology Consultant",
  ],
  authors: [{ name: "Tintin Razavian" }],
  openGraph: {
    title: "Tintin Razavian — Senior Product Manager & AI Strategist",
    description:
      "Building scalable products across AI, IoT, Cloud Connectivity, and Digital Transformation.",
    url: siteUrl,
    siteName: "Tintin Razavian",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tintin Razavian — Senior Product Manager & AI Strategist",
    description:
      "Building scalable products across AI, IoT, Cloud Connectivity, and Digital Transformation.",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#08080a" },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning className={manrope.variable}>
      <body className="font-sans antialiased">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
