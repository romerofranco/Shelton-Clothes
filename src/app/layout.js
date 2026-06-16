import { Barlow, Barlow_Condensed } from "next/font/google";
import "./globals.css";

// Tipografía para el cuerpo del texto
const barlow = Barlow({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500"],
});

// Tipografía para títulos y display
const barlowCondensed = Barlow_Condensed({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "700", "900"],
});

// SEO - Lo que ve Google y la pestaña del navegador
export const metadata = {
  title: "Shelton Clothes | Ropa Urbana y Streetwear",
  description: "Tienda de ropa urbana y streetwear en La Rioja, Argentina. Remeras, pantalones, buzos y accesorios. Envíos a todo el país.",
  keywords: "ropa urbana, streetwear, Argentina, La Rioja, la rioja, remeras, pantalones cargo, buzos",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="es"
      className={`${barlow.variable} ${barlowCondensed.variable}`}
    >
      <body className="bg-[#0A0A0A] text-[#F0EFEB] min-h-screen">
        {children}
      </body>
    </html>
  );
}