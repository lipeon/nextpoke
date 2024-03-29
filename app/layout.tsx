"use client";
import "./globals.css";
import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import Navbar from "./components/navbar";
import Provider from "./components/Provider";

export const metadata: Metadata = {
  title: "Poke Next",
  description: "Jogo chegando",
};

const font = Nunito({
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={font.className}>
       <Provider>
        <Navbar />
        {children}
        </Provider>
      </body>
    </html>
  );
}
