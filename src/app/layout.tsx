import type { Metadata } from "next";
import { Playfair_Display, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Kala & Kayu — Artisanal Indonesian Living | Architectural Export Folio",
  description:
    "Sustainably hand-carved reclaimed teak, architectural rattan weaving, and volcanic stone homewares made by master artisans across Java, Bali, and Lombok for international trade and luxury living.",
  keywords: [
    "Indonesian furniture",
    "Jepara teak",
    "Cirebon rattan",
    "artisanal living",
    "B2B export furniture",
    "sustainable teak",
    "SVLK certified",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${plusJakarta.variable}`}>
      <body className="min-h-screen bg-surface font-sans text-on-surface antialiased">
        {children}
      </body>
    </html>
  );
}
