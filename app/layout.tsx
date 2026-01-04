import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "STEP Digital - Complete Digital Solutions for Business Growth",
  description: "One Digital Partner. One Complete System. One Goal: Real Business Growth. Integrated digital solutions including web development, mobile apps, business systems, and digital marketing.",
  keywords: ["digital solutions", "web development", "mobile apps", "digital marketing", "business systems", "STEP Digital"],
  authors: [{ name: "STEP Digital" }],
  openGraph: {
    title: "STEP Digital - Complete Digital Solutions",
    description: "Transform your business with integrated digital solutions",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "STEP Digital - Complete Digital Solutions",
    description: "Transform your business with integrated digital solutions",
  },
  viewport: "width=device-width, initial-scale=1",
  themeColor: "#0046A8",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased">{children}</body>
    </html>
  );
}
