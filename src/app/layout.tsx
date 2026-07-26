import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/lib/fontawesome";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "StillMind Meditation Co. — Evidence-Based Mindfulness & Meditation",
  description:
    "Discover peace and clarity with StillMind Meditation Co. We offer mindfulness meditation, breathwork, guided visualization, corporate wellness, and more — in-person and online.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans antialiased`}>
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
