import { DisclaimerBanner } from "@/entities/disclaimer-banner/DisclaimerBanner";
import { Inter } from "next/font/google";
import type { Metadata } from "next";

import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Carmatch",
  description: "Find your next car with Carmatch",
  icons: {
    icon: "/carmatch-logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased`}>
        <DisclaimerBanner />

        <div className="visual-layer">{children}</div>
      </body>
    </html>
  );
}
