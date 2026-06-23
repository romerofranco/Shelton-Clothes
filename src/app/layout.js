import { Barlow, Barlow_Condensed } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { CartProvider } from "@/context/CartContext";

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
      <body className="bg-[#FAFAF8] text-[#111111] min-h-screen flex flex-col">
        <CartProvider>
          <Navbar />
          {children}
          <Footer />
        </CartProvider>
      </body>
    </html>
  );
}