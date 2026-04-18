import type { Metadata } from "next";
import { VT323, Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

// 1. Configure the fonts
const pixelFont = VT323({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-pixel", 
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Mihret | Overworld Portfolio",
  description: "CS Student & Backend Engineer - Agentic AI Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <body
        className={`
          ${pixelFont.variable} 
          ${geistSans.variable} 
          ${geistMono.variable} 
          antialiased min-h-full flex flex-col
        `}
      >
        {children}
      </body>
    </html>
  );
}