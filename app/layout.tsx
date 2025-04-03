"use client";

import React from "react";
import "./globals.css";
import { QueryProvider } from "@/lib/query-provider";
import {
  Dancing_Script,
  Inter,
  Playfair_Display,
  Poppins,
} from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-playfair",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-poppins",
});

const dancingScript = Dancing_Script({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-dancing",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${playfair.variable} ${poppins.variable} ${dancingScript.variable} font-sans`}
      >
        <QueryProvider>{children}</QueryProvider>
      </body>
    </html>
  );
}
