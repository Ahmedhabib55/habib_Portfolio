import React from "react";
import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  weight: ["100", "200", "300", "400"],
  subsets: ["latin"],
  variable: "--font-outfit",
});

export const metadata: Metadata = {
  title: "Habib Portfolio",
  description:
    "habib is a frontend developer who loves to build apps and websites with nextjs, tailwindcss, typescript and reactjs ",
  icons: {
    // icon: "../public/assets/images/site-logo.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${outfit.variable}`}>{children}</body>
    </html>
  );
}
