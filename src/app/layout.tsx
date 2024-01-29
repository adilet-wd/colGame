import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "bootstrap/dist/css/bootstrap.min.css";
import "./globals.scss";
import Header from "@/components/header/header";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ColGame",
  description: "Made by Usenkanov Adilet",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header></Header>
        {children}
      </body>
    </html>
  );
}
