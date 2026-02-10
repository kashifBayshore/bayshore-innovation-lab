import type { Metadata } from "next";
import { Open_Sans, Raleway, Roboto, Inter } from "next/font/google";
import "./globals.css";

const openSans = Open_Sans({
  variable: "--font-open-sans",
  subsets: ["latin"],
});

const raleway = Raleway({
  variable: "--font-raleway",
  subsets: ["latin"],
});

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Bayshore Innovation Lab",
  description:
    "Where cutting-edge research meets practical innovation. Exploring the frontiers of AI and Digital Transformation.",
};

import { Footer } from "@/components/layout/Footer";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${openSans.variable} ${raleway.variable} ${roboto.variable} ${inter.variable} antialiased`}
      >
        {children}
        <Footer />
      </body>
    </html>
  );
}
