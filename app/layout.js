import { Poppins, Dancing_Script } from "next/font/google";
import "./globals.css";
import { CartProvider } from "./context/CartContext";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import WhatsAppFAB from "./components/WhatsAppFAB";
import CartSidebar from "./components/CartSidebar";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-poppins",
  display: "swap",
});

const dancing = Dancing_Script({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-dancing",
  display: "swap",
});

export const metadata = {
  title: "cuteclothessly — Fashion Estetik dari Sukabumi",
  description:
    "Koleksi baju pilihan untuk tampilan harianmu yang lebih cute. Belanja atasan, bawahan, outerwear, skirts, dan thrifting di cuteclothessly Sukabumi.",
  keywords: "fashion, toko baju, cuteclothessly, sukabumi, thrifting, atasan, bawahan, outerwear, skirts",
  openGraph: {
    title: "cuteclothessly — Fashion Estetik dari Sukabumi",
    description: "Koleksi baju pilihan untuk tampilan harianmu yang lebih cute.",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="id" className={`${poppins.variable} ${dancing.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        <CartProvider>
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
          <WhatsAppFAB />
          <CartSidebar />
        </CartProvider>
      </body>
    </html>
  );
}
