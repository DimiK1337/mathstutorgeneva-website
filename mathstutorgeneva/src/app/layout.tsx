// app/layout.tsx
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";

import "./globals.css";

// Components
import Header from "@/components/Header";
import Footer from "@/components/Footer";

// Load Google fonts as CSS variables
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Site-wide metadata
export const metadata: Metadata = {
  title: "Dr. W. J. Larson – Math Tutor in Geneva",
  description: "Private math tutoring for IB, IGCSE, SAT, and more – from an experienced educator in Geneva.",
  robots: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">

      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white text-gray-900 dark:bg-gray-900 dark:text-gray-100`}
      >
        <Header />
        <main className="min-h-screen px-4 sm:px-8">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
