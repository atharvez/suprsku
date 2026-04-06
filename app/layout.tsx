import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Inter } from "next/font/google";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta-sans",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "SuprSKU",
  description: "Create 100% FSSAI-compliant food labels in minutes. Launch your D2C brand faster with SuprSKU.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <body className={`${plusJakartaSans.variable} ${inter.variable} font-body bg-surface text-on-surface antialiased min-h-full`}>
        {children}
      </body>
    </html>
  );
}
