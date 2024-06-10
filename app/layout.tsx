import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Banner from "@/components/banner";
import styles from "./layout.module.css";

const inter = Inter({ subsets: ["latin"], display: "swap" }); // TODO: choose a different font if you so desire, Inter pretty good tho

export const metadata: Metadata = {
  title: "Chambana Eats",
  description: "Generated by create next app", // TODO: add a great description and some open graph tags
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className + " " + styles.body}>
        <header>
          <Banner />
        </header>
        {children}
        <footer>copyright illini media or whatever</footer>
      </body>
    </html>
  );
}
