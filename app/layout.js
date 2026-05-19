import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

import Loader from "@/components/shared/Loader";
import SmoothScroll from "@/components/shared/SmoothScroll";
import CustomCursor from "@/components/shared/CustomCursor";
import WhatsAppButton from "@/components/shared/WhatsappButton";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

export const metadata = {
  title: "Trisha Dawn",
  description: "Modern fashion model portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">

      <body
        className={`${inter.variable} ${playfair.variable} antialiased`}
      >
        <Loader />
        <SmoothScroll />
        <CustomCursor/>
        <WhatsAppButton/>
        
        {children}

      </body>

    </html>
  );
}