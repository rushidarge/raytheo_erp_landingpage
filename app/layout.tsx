import type { Metadata } from "next";
import "./globals.css";
import { CONFIG } from "@/lib/config";

export const metadata: Metadata = {
  title: `${CONFIG.productName} — ${CONFIG.tagline}`,
  description: CONFIG.description,
  keywords: [
    "restaurant management",
    "AI restaurant software",
    "restaurant ERP",
    "restaurant operations",
    "food service technology",
    "restaurant analytics",
    "inventory management",
    "AI forecasting",
  ],
  openGraph: {
    title: `${CONFIG.productName} — ${CONFIG.tagline}`,
    description: CONFIG.description,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${CONFIG.productName} — ${CONFIG.tagline}`,
    description: CONFIG.description,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=JetBrains+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-black text-white antialiased overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
