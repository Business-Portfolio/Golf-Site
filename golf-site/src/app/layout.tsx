import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Toaster } from 'react-hot-toast'
import { AuthProvider } from "@/context/AuthContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "SwingPerfect | Golf Swing Analysis & Professional Tips",
  description: "Improve your golf game with professional swing analysis, personalized feedback, and expert tips from PGA pros.",
  keywords: "golf swing analysis, golf tips, improve golf swing, golf swing video analysis, golf lessons online",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <AuthProvider>
          <Header />
            {children}
          <Footer />
        </AuthProvider>
        <Toaster position="bottom-right" />
      </body>
    </html>
  );
}