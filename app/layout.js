import { Geist, Geist_Mono } from "next/font/google";
import { Bitcount_Grid_Double } from "next/font/google";
import { Quantico } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const bitcount = Bitcount_Grid_Double({
  variable: "--font-bitcount",
  subsets: ["latin"],
});

const quantico = Quantico({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata = {
  title: "Ertan Eats",
  description:
    "One of New York City's most famous food reviewer. Join him in his journey.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {children}
      </body>
    </html>
  );
}
