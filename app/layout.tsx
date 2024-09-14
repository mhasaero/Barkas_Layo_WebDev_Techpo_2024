import type { Metadata } from "next";
import { Montserrat, Poppins } from "next/font/google";
import "./globals.css";
import AuthContextProvider from "@/context/AuthContext";
import { Toaster } from "@/components/ui/toaster";
import ProductContextProvider from "@/context/ProductContext";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
});

export const metadata: Metadata = {
  title: "Barkas Layo",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <AuthContextProvider>
      <ProductContextProvider>
      <html lang="en" className="scroll-smooth">
        <body className={`${poppins.className} ${montserrat.variable}`}>
          {children}
          <Toaster />
        </body>
      </html>
      </ProductContextProvider>
    </AuthContextProvider>
  );
}
