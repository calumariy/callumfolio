import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { titillium } from "./ui/fonts.ts";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "CallumFolio",
  description: "Callum Reilly",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={titillium.className}>{children}</body>
    </html>
  );
}
