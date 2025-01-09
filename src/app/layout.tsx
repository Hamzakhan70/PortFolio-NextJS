// "use client"
import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";

import "./globals.css";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AosProvider from "./providers/AOSProvider";

const inter = Inter({ subsets: ["latin"] });
const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poppins",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  style: "normal",
});

export const metadata: Metadata = {
  title: "Fahim Ul Hassan",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <>
        <body className={`${poppins.variable}`}>
          <AosProvider>
            <Navbar />
            {children}
            <Footer />
          </AosProvider>
        </body>
      </>
    </html>
  );
}
