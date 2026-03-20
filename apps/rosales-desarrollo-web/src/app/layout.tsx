import type { Metadata } from "next";
import { Poppins, Montserrat } from "next/font/google";
import { createMetadata } from "@/lib/seo";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { JsonLd } from "@/components/seo/JsonLd";
import { generateOrganizationSchema } from "@/lib/structured-data";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
  weight: ["300", "400", "500", "700", "800"],
});

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
  weight: ["300", "400", "500", "700"],
});

export const metadata: Metadata = createMetadata();

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${poppins.variable} ${montserrat.variable}`}>
      <body className="bg-brand-night font-body text-brand-white antialiased">
        <JsonLd data={generateOrganizationSchema()} />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
