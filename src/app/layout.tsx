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
  title: "Kala & Kayu — Mebel Kayu Jati & Rotan Pilihan Jepara",
  description:
    "Kala & Kayu menghadirkan karya mebel kayu jati solid dan kerajinan rotan alami berkualitas tinggi dari pengrajin Jepara. Melayani kebutuhan furniture hunian dan pesanan custom.",
  keywords: [
    "mebel jepara",
    "furniture kayu jati",
    "mebel rotan alami",
    "kerajinan kayu",
    "custom furniture",
    "kursi kayu jati",
    "meja jati solid",
    "kala kayu",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className={`${playfair.variable} ${plusJakarta.variable}`}>
      <body className="min-h-screen bg-surface font-sans text-on-surface antialiased">
        {children}
      </body>
    </html>
  );
}
