import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { createMetadata } from "@/lib/seo";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { JsonLd } from "@/components/seo/JsonLd";
import { generateOrganizationSchema } from "@/lib/structured-data";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = createMetadata({
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
  },
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={inter.variable}>
      <body className="bg-background font-sans text-on-background antialiased">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:rounded focus:bg-white focus:px-4 focus:py-2 focus:text-primary"
        >
          Saltar al contenido principal
        </a>
        <JsonLd data={generateOrganizationSchema()} />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
